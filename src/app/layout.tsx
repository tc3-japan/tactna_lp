import { NextIntlClientProvider } from "next-intl";
import GoogleAnalytics from "@/components/analysis/GoogleAnalytics";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <Suspense fallback={<></>}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
