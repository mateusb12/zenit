import type { NextConfig } from "next"

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "zenit"
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true"
const isUserOrOrgPagesSite = repositoryName.endsWith(".github.io")
const githubPagesBasePath =
  isGithubPagesBuild && !isUserOrOrgPagesSite ? `/${repositoryName}` : ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
}

export default nextConfig
