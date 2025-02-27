"use client";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    index: 1,
    filename: "/tactna_features/1.png",
    title: "ID・アカウント管理の\nベストプラクティスを集結",
    description:
      "Tactnaは、ID・アカウント管理のベストプラクティスを集結した基盤です。フルスクラッチの場合と比較し、特に初期構築費を大幅に圧縮することができ、5年トータルで36％の圧縮が可能なサービスです。",
  },
  {
    index: 2,
    filename: "/tactna_features/2.png",
    title: "業界標準の​​ユーザー管理・\nセキュリティ",
    description:
      "業界標準の認証機能を内包しセキュリティレベルの高い設計を標準で実装。TC3のベストプラクティスを付随することで、複数サービスの共通認証基盤の実装をスピーディに実現。また、フルマネージド・サービスのため、運用の手間も煩わせません。",
  },
  {
    index: 3,
    filename: "/tactna_features/3.png",
    title: "B2Bビジネス対応",
    description:
      "B2Bサービスでは、単純に1ユーザーをサービスにログインさせるだけではなく、アプリケーションの利用権限や契約プランなど複数のことを考慮しなければ、サービスとして成り立ちません。Tactnaはデフォルトでこれらの実装ができているため、複雑な要件定義や設計は一切不要です。",
  },
  {
    index: 4,
    filename: "/tactna_features/4.png",
    title: "様々なサービス形態・業務に対応できる柔軟性",
    description:
      "ビジネス展開の際には、課金のための決済サービスから、社内の契約管理システム、会計システムなどの基幹システムとの連携を行い、ビジネスが滞りなく運用できることが求められます。提供事業者毎に異なる仕様に関しても、Tactnaが柔軟に対応できます。",
  },
  {
    index: 5,
    filename: "/tactna_features/5.png",
    title: "業務効率化",
    description:
      "開発の2割のコストがかかるとされるポータル機能を実装し、本番稼働後に​​ID関連業務にエンジニアの手を煩わせません。",
  },
  {
    index: 6,
    filename: "/tactna_features/6.png",
    title: "顧客IDを中核としたデータ利活用の基盤",
    description:
      "アクティブユーザー数、企業毎のプロファイルを分析する基盤としてTactnaは機能します。ユーザーの状況を一元的に確認することができるため、様々な施策のベースとなります。",
  },
];

export default function Features() {
  const [showMore, setShowMore] = useState(false);

  const initialFeatures = features.slice(0, 3);
  const extraFeatures = features.slice(3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-16">
          Tactnaの特徴
        </h2>
        <div className="space-y-10">
          {initialFeatures.map((data) => (
            <FeatureCard
              key={data.filename}
              filename={data.filename}
              title={data.title}
              description={data.description}
              isReverse={data.index % 2 !== 0}
            />
          ))}
          {showMore &&
            extraFeatures.map((data) => (
              <FeatureCard
                key={data.filename}
                filename={data.filename}
                title={data.title}
                description={data.description}
                isReverse={data.index % 2 !== 0}
              />
            ))}
        </div>
        {!showMore && (
          <div className="mt-8 flex justify-center pt-10">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
