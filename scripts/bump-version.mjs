import { readFileSync, writeFileSync, existsSync } from "node:fs";

const dryRun = process.argv.includes("--dry-run");

const packagePath = "package.json";
const packageLockPath = "package-lock.json";
const buildInfoPath = "data/buildInfo.ts";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, data) {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
}

function bumpPatch(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);

  if (!match) {
    throw new Error(`Expected semver version like 1.2.9, got: ${version}`);
  }

  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]) + 1;

  return `${major}.${minor}.${patch}`;
}

function getBuildTimestampLabel() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Fortaleza",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type) => parts.find((part) => part.type === type)?.value ?? "";

  const day = get("day");
  const month = get("month").toLowerCase();
  const year = get("year");
  const hour = get("hour");
  const minute = get("minute");

  return `${day}-${month}-${year} at ${hour}:${minute}`;
}

const packageJson = readJson(packagePath);
const previousVersion = packageJson.version;
const nextVersion = bumpPatch(previousVersion);
const updatedAtLabel = getBuildTimestampLabel();

console.log(
  `${dryRun ? "[dry-run] " : ""}Deploy version: ${previousVersion} -> ${nextVersion}`,
);
console.log(`${dryRun ? "[dry-run] " : ""}Updated at: ${updatedAtLabel}`);

if (dryRun) {
  process.exit(0);
}

packageJson.version = nextVersion;
writeJson(packagePath, packageJson);

if (existsSync(packageLockPath)) {
  const packageLock = readJson(packageLockPath);

  packageLock.version = nextVersion;

  if (packageLock.packages?.[""]) {
    packageLock.packages[""].version = nextVersion;
  }

  writeJson(packageLockPath, packageLock);
}

writeFileSync(
  buildInfoPath,
  `export const buildInfo = {
  version: "${nextVersion}",
  updatedAtLabel: "${updatedAtLabel}",
} as const;
`,
);

console.log(`Wrote ${packagePath}`);
if (existsSync(packageLockPath)) {
  console.log(`Wrote ${packageLockPath}`);
}
console.log(`Wrote ${buildInfoPath}`);
