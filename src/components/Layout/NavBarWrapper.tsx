import { getConfig } from "@/core/config";
import getSiteInfo from "@/utils/siteInfo";
import NavBar from "./NavBar";

export default async function NavBarWrapper() {
  const site = await getSiteInfo();
  const config = getConfig();

  return <NavBar site={site!} config={config} />;
}
