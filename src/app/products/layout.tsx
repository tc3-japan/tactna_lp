import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import DocsLayoutClient from "../components/DocsLayoutClient";
import "../globals.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Products - Tactna",
  description: "Tactna product documentation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayoutClient>
      <Layout
        pageMap={await getPageMap("/products")}
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
