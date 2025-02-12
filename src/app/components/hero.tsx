import Image from "next/image";
import LogoMarquee from "./logo_marquee";

export default function Hero() {
  return (
    <div className="overflow-x-hidden pt-20 md:pt-16 md:h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 左側の説明エリア */}
          <div className="w-full md:w-2/3 text-center md:text-left md:pl-12">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold pb-4 text-blue-700">
              Unleash your potential with Tactna
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
              認証認可・ID管理は
              <br />
              ぜんぶ Tactna にお任せ！
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-bold mt-4 text-gray-700">
              Tactna一つでサービス展開に必要なものすべてをカバー
            </p>
            <ul className="text-sm sm:text-base md:text-lg  list-disc font-bold list-inside mt-4 text-gray-700">
              <li>認証認可機能</li>
              <li>IDに紐づく様々なデータ利活用</li>
              <li>マイページ、業務管理ページ</li>
              <li>様々な業務フローに合わせたカスタマイズ​</li>
            </ul>
          </div>

          {/* 右側の画像エリア */}
          <div className="w-full md:w-2/3 flex justify-center mt-8 md:mt-0">
            <Image
              src="/hero.png"
              alt="hero"
              width={800}
              height={425}
              quality={75}
              sizes="100vw"
              className="object-contain w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>

      {/* お客様ロゴエリア（最下部） */}
      <div className="w-full mt-auto text-center py-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          TC3のお客様
        </h2>
        <LogoMarquee />
      </div>
    </div>
  );
}
