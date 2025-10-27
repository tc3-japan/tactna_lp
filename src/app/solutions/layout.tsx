import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import DocsLayoutClient from "../components/DocsLayoutClient";
import "../globals.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Solutions - Tactna",
  description: "Tactna solutions documentation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayoutClient>
      <Layout
        pageMap={await getPageMap("/solutions")}
        editLink={false}
        feedback={{ content: "About us", link: "https://tc3.co.jp" }}
        navbar={null}
        footer={null}
        darkMode={false}
      >
        {children}
      </Layout>
    </DocsLayoutClient>
  );
}
