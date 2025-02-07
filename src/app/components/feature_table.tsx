"use client";
import Image from "next/image";

interface Feature {
  category: string;
  name: string;
  scratch: boolean;
  idProvider: boolean;
  tactna: boolean;
}

interface ComparisonPlan {
  features: Feature[];
}

export default function FeatureComparisonTable() {
  const plans: ComparisonPlan[] = [
    {
      features: [
        {
          category: "認証認可",
          name: "ユーザ単位",
          scratch: true,
          idProvider: true,
          tactna: true,
        },
        {
          category: "認証認可",
          name: "組織単位",
          scratch: true,
          idProvider: true,
          tactna: true,
        },
        {
          category: "認証認可",
          name: "複数サービス対応",
          scratch: false,
          idProvider: true,
          tactna: true,
        },
        {
          category: "ポータル",
          name: "ユーザ向け",
          scratch: true,
          idProvider: false,
          tactna: true,
        },
        {
          category: "ポータル",
          name: "業務向け",
          scratch: true,
          idProvider: false,
          tactna: true,
        },
        {
          category: "ポータル",
          name: "独自コンポーネント",
          scratch: true,
          idProvider: false,
          tactna: true,
        },
        {
          category: "拡張",
          name: "課金管理",
          scratch: false,
          idProvider: false,
          tactna: true,
        },
        {
          category: "拡張",
          name: "契約・サービス管理",
          scratch: false,
          idProvider: false,
          tactna: true,
        },
        {
          category: "拡張",
          name: "社内システム連携",
          scratch: true,
          idProvider: false,
          tactna: true,
        },
      ],
    },
  ];

  // カテゴリごとの出現回数をカウント
  const categoryCounts: Record<string, number> = {};
  plans[0].features.forEach((feature) => {
    categoryCounts[feature.category] =
      (categoryCounts[feature.category] || 0) + 1;
  });

  const categoryRendered: Record<string, boolean> = {};

  return (
    <div className="flex flex-col items-center justify-center bg-white py-8 px-4 sm:px-6 md:px-8">
      <h1 className="max-w-5xl text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        開発者を認証認可・ID管理関連業務から解放
      </h1>
      <table className="w-full md:w-max border-collapse bg-white rounded-md mx-4 sm:mx-8 lg:mx-20">
        <thead>
          <tr>
            <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200">
              機能概要
            </th>
            <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200"></th>
            <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200">
              IDプロバイダ単体
            </th>
            <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200">
              スクラッチ開発
            </th>
            <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200">
              <Image
                src="/tactna_logo_2.png"
                alt="Tactna Logo"
                width={1200}
                height={296}
                className="object-contain max-w-[100px] sm:max-w-[150px] md:max-w-[200px] h-auto"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {plans[0].features.map((feature, index) => {
            const showCategory = !categoryRendered[feature.category]; // 初回のみカテゴリ名を表示
            categoryRendered[feature.category] = true;

            return (
              <tr key={index}>
                {showCategory && (
                  <td
                    className="p-2 sm:p-3 md:p-4 border-b border-gray-200"
                    rowSpan={categoryCounts[feature.category]}
                  >
                    {feature.category}
                  </td>
                )}
                <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                  {feature.name}
                </td>
                <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                  {feature.idProvider ? <CheckMark /> : null}
                </td>
                <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                  {feature.scratch ? <CheckMark /> : null}
                </td>
                <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                  {feature.tactna ? <CheckMark /> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function CheckMark() {
  return (
    <svg
      className="h-4 w-4 sm:h-6 sm:w-6 text-green-500 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
