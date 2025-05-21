import React from "react";
import CaseCard from "@/app/components/CaseCard";

const caseList = [
  {
    title: "MS&ADインターリスク総研株式会社",
    description:
      "今回の共通認証基盤プロジェクトは当社がデジタルサービスを複数展開するうえで非常に重要な機能です。様々なサービスが考えられるなかで、網羅的にカバーできる内容として実装ができたことを嬉しく思います。TC3さんとはPoC、要件定義から膝詰めでのディスカッションを通してしっかりとした共通認証基盤を実装することができました。",
    imageUrl: "/client_logos/cli_msad.jpg",
    link: "https://www.tc3.co.jp/case/msadirric-multi-service-auth-platform-okta/",
    companyName: "MS&ADインターリスク総研株式会社",
    department: "デジタルイノベーション本部 DI推進部",
    personName: "芝田 達郎 様",
  },
  {
    title: "株式会社ジー・サーチ",
    description:
      "Tactna Identity Platformを採用することで、最終的に実現したい「データ利活用」に向けた基盤を整えることができました。今後はすべてのサービスをTactna上に乗せることを計画しており、認証認可はもちろん、組織の概念の実装など、本来はアプリケーション毎に検討するアイデンティティ領域の検討・実装コストが個別に不要となることで、アプリケーション開発に集中できることを期待しています。また、Tactnaの今後のパワフルなアップデートに期待したいと考えています。",
    imageUrl: "",
    link: "https://www.tc3.co.jp/case/gsearch-tactna/",
    companyName: "株式会社ジー・サーチ",
    department: "デジタルソリューショングループ グループ長",
    personName: "稲垣 明 様",
  },
];

const CaseSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">導入事例</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {caseList.map((c, i) => (
          <CaseCard key={i} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseSection;
