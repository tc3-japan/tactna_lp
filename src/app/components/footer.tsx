import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("company");
  return (
    <footer className="bg-[#1D2E4A] text-white pt-10 pb-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 py-10">
        <div className="flex flex-col space-y-2">
          <Image src="/tc3_logo.svg" alt="Logo" width={120} height={100} />
          <p className="text-lg font-semibold">{t("name")}</p>
          <p className="hover:underline">{t("address1")}</p>
          <p className="hover:underline">{t("address2")}</p>
        </div>
        <Link href="https://www.tc3.co.jp/blog/" target="_blank" rel="noopener">
          <Image src="/bnr_gigabyte.png" alt="Logo" width={500} height={100} />
        </Link>
      </div>
      <div className="border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 TC3. All rights reserved.</p>
      </div>
    </footer>
  );
}
