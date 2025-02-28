import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between min-h-12 items-center">
            <div className="py-2 md:py-4">
              <Image
                src="/tactna_logo_2.png"
                alt="Tactna Logo"
                width={200}
                height={100}
                className="object-contain max-w-[120px] md:max-w-[160px] h-auto"
              />
            </div>

            <div className="ml-10 flex items-center space-x-4">
              <div className="hidden md:block">
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  特徴
                </Link>
                <Link
                  href="#feature-table"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  比較
                </Link>
              </div>
              <Button className="bg-blue-600">
                <Link href="#inquiry">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
