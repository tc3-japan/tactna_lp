import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col">
      {/* メインコンテンツ（中央に固定） */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* 左側の説明エリア */}
          <div className="w-1/2 text-left">
            <h1 className="text-2xl font-bold pb-4 text-blue-700">
              Unleash your potential with Tactna
            </h1>
            <h1 className="text-5xl font-bold">
              認証認可・ID管理は
              <br />
              ぜんぶ Tactna にお任せ！
            </h1>
            <p className="text-lg font-bold mt-4 text-gray-700">
              Tactna一つでサービス展開に必要なものすべてをカバー
            </p>
            <ul className="list-disc font-bold list-inside mt-4 text-gray-700">
              <li>認証認可機能</li>
              <li>IDに紐づく様々なデータ利活用</li>
              <li>マイページ、業務管理ページ</li>
              <li>様々な業務フローに合わせたカスタマイズ​</li>
            </ul>
          </div>

          {/* 右側の画像エリア */}
          <div className="w-1/2 flex justify-end">
            <Image
              src="/laptop.png"
              alt="Beautiful travel destination"
              width={600}
              height={225}
              quality={75}
              sizes="100vw"
              className="object-contain max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* お客様ロゴエリア（最下部） */}
      <div className="w-full mt-auto text-center py-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">TC3のお客様</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <Image
            src="/client_logos/msad.png"
            alt="Customer 1"
            width={250}
            height={100}
          />
          <Image
            src="/client_logos/msad.png"
            alt="Customer 1"
            width={250}
            height={100}
          />{" "}
          <Image
            src="/client_logos/msad.png"
            alt="Customer 1"
            width={250}
            height={100}
          />{" "}
          <Image
            src="/client_logos/msad.png"
            alt="Customer 1"
            width={250}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
