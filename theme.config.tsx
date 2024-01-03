import { DocsThemeConfig } from "nextra-theme-docs";
import LastUpdatedAt from "./components/LastUpdatedAt";
import { Logo } from "./components/Logo";
import { ProjectLogo } from "./components/ProjectLogo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: { link: "https://neuromarket.online/", icon: <ProjectLogo /> },
  docsRepositoryBase: "http://localhost:3000/",
  footer: {
    text: "Нейромаркет — Документация © 2024 ",
  },
  primaryHue: 200,
  primarySaturation: 255,
  feedback: { content: null },
  editLink: { text: "" },
  gitTimestamp: LastUpdatedAt,
};

export default config;
