"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoTriangleOutline } from "react-icons/io5";

type MarkType = "check" | "triangle" | "";

interface Feature {
  category: string;
  name: string;
  scratch: MarkType;
  idaas: MarkType;
  tactna: MarkType;
}

interface ComparisonPlan {
  features: Feature[];
}

export default function FeatureComparisonTable() {
  const t = useTranslations("compare");
  const plans: ComparisonPlan[] = [
    {
      features: [
        {
          category: t("auth_id"),
          name: t("unit_user"),
          scratch: "triangle",
          idaas: "check",
          tactna: "check",
        },
        {
          category: t("auth_id"),
          name: t("unit_organization"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("auth_id"),
          name: t("multi_service"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("portal_ui"),
          name: t("ui_toc"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("portal_ui"),
          name: t("ui_tob"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("portal_ui"),
          name: t("ui_custom"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("customizing"),
          name: t("billing"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("customizing"),
          name: t("contract"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
        {
          category: t("customizing"),
          name: t("system_integration"),
          scratch: "triangle",
          idaas: "",
          tactna: "check",
        },
      ],
    },
  ];

  const categoryCounts: Record<string, number> = {};
  plans[0].features.forEach((feature) => {
    categoryCounts[feature.category] =
      (categoryCounts[feature.category] || 0) + 1;
  });

  const categoryRendered: Record<string, boolean> = {};

  return (
    <div
      className="flex flex-col items-center justify-center  py-40 px-4 sm:px-6 md:px-8"
      id="feature-table"
    >
      <h1 className="max-w-5xl text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        {t("title")}
      </h1>
      <div className="max-w-full overflow-x-auto">
        <table className="border-collapse rounded-md mx-auto">
          <thead>
            <tr>
              <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200 min-w-[100px]">
                {t("feature")}
              </th>
              <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200 min-w-[180px]"></th>
              <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200 min-w-[80px]">
                IDaaS
              </th>
              <th className="p-2 sm:p-3 md:p-4 border-b-2 border-gray-200 min-w-[80px]">
                {t("scratch")}
              </th>
              <th className="justify-center p-2 sm:p-3 md:p-4 border-b-2 border-gray-200 min-w-[80px]">
                <Image
                  src="/tactna_logo_2.png"
                  alt="Tactna Logo"
                  width={1200}
                  height={296}
                  className="object-contain max-w-[80px] sm:max-w-[100px] md:max-w-[140px] h-auto"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {plans[0].features.map((feature, index) => {
              const showCategory = !categoryRendered[feature.category];
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
                    {feature.idaas
                      ? MarkSelector({ mark: feature.idaas })
                      : null}
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                    {feature.scratch
                      ? MarkSelector({ mark: feature.scratch })
                      : null}
                  </td>
                  <td className="p-2 sm:p-3 md:p-4 border-b border-gray-200">
                    {feature.tactna
                      ? MarkSelector({ mark: feature.tactna })
                      : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MarkSelector({ mark }: { mark: MarkType }) {
  switch (mark) {
    case "check":
      return (
        <div className="flex justify-center">
          <DoubleCircleMark />
        </div>
      );
    case "triangle":
      return <TriangleMark />;
    default:
      return null;
  }
}

// function CheckMark() {
//   return (
//     <svg
//       className="h-4 w-4 sm:h-6 sm:w-6 text-green-500 mx-auto"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M5 13l4 4L19 7"
//       />
//     </svg>
//   );
// }

function TriangleMark() {
  return (
    <IoTriangleOutline className="h-4 w-4 sm:h-6 sm:w-6 text-red-300 mx-auto" />
  );
}

function DoubleCircleMark() {
  return <DoubleCircle radius={12} color="#10B981" strokeWidth={1} />;
}

type DoubleCircleProps = {
  radius: number;
  color?: string;
  strokeWidth?: number;
};

const DoubleCircle: React.FC<DoubleCircleProps> = ({
  radius,
  color = "#000",
  strokeWidth = 2,
}) => {
  const size = radius * 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Outer Thin Circle */}
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Inner Thin Circle */}
      <circle
        cx={radius}
        cy={radius}
        r={radius * 0.8 - strokeWidth}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};
