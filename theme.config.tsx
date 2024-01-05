import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import LastUpdatedAt from "./components/LastUpdatedAt";
import { Logo } from "./components/Logo";
import { ProjectLogo } from "./components/ProjectLogo";
import { useRouter } from "next/router";

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
  nextThemes: {
    defaultTheme: "dark",
  },
  themeSwitch: {
    useOptions: {
      dark: "Темный",
      light: "Светлый",
      system: "Системный",
    },
  },
  toc: {
    title: "На этой странице"
  },
  useNextSeoProps: () => ({titleTemplate: '%s — Нейромаркет'}),
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.neuromarket.online' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Нейромаркет — Документация'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Инструкции по сервису внешней аналитики, телеграм-боту и расширению для рекламы на Wildberries'}
        />
        <link rel="canonical" href={url}></link>
      </>
    )
  },
  editLink: { text: "" },
  search: { placeholder: "Поиск по документации" },
  gitTimestamp: LastUpdatedAt,
};

export default config;
