declare module "next-build-id" {
  export default function nextBuildId(opts: { dir: string }): Promise<string>;
}
