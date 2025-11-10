import { NextIntlClientProvider } from "next-intl";
import GoogleAnalytics from "@/components/analysis/GoogleAnalytics";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
