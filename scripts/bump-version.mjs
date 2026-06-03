import { existsSync, readFileSync, writeFileSync } from "node:fs";

const dryRun = process.argv.includes("--dry-run");
const stampOnly = process.argv.includes("--stamp-only");

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

  return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
}

function getFortalezaTimestampLabel() {
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

  return `${get("day")}-${get("month").toLowerCase()}-${get("year")} at ${get("hour")}:${get("minute")}`;
}

function writeBuildInfo(version, updatedAtLabel) {
  writeFileSync(
    buildInfoPath,
    `export const buildInfo = {
  version: "${version}",
  updatedAtLabel: "${updatedAtLabel}",
} as const;
`,
  );
}

const packageJson = readJson(packagePath);
const previousVersion = packageJson.version;
const nextVersion = stampOnly ? previousVersion : bumpPatch(previousVersion);
const updatedAtLabel = getFortalezaTimestampLabel();

console.log(
  `${dryRun ? "[dry-run] " : ""}${stampOnly ? "Stamp version" : "Bump version"}: ${previousVersion} -> ${nextVersion}`,
);
console.log(`${dryRun ? "[dry-run] " : ""}Fortaleza timestamp: ${updatedAtLabel}`);

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

writeBuildInfo(nextVersion, updatedAtLabel);

console.log(`Wrote ${packagePath}`);

if (existsSync(packageLockPath)) {
  console.log(`Wrote ${packageLockPath}`);
}

console.log(`Wrote ${buildInfoPath}`);
