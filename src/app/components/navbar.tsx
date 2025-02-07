import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Image
                src="/tactna_logo_2.png"
                alt="Tactna Logo"
                width={1200}
                height={296}
                className="object-contain max-w-[200px] h-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  特徴
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  詳細
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  ブログ
                </a>
                <Button className="bg-blue-600">お問い合わせ</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
