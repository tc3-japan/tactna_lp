import { useTranslations } from "next-intl";
import Image from "next/image";

export default function InfoImpact() {
  const t = useTranslations("infoImpact");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 font-bold">
          {t.rich("title", {
            br: () => <br />,
          })}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
          {t.rich("description", {
            br: () => <br />,
          })}
        </p>
      </div>
      {/* 画像 */}
      <div className="mt-12 w-full max-w-5xl text-center mx-auto">
        <Image
          src={`/features/impact.png`}
          alt="hero"
          width={1200}
          height={425}
          quality={75}
          sizes="100vw"
          className="object-contain h-auto w-full"
        />
      </div>
    </section>
  );
}
