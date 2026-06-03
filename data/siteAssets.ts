const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "zenit";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesSite = repositoryName.endsWith(".github.io");

export const publicAssetBasePath =
  isGithubActions && !isUserOrOrgPagesSite ? `/${repositoryName}` : "";

export function publicAssetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${publicAssetBasePath}${normalizedPath}`;
}
