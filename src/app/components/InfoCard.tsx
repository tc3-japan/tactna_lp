import { useTranslations } from "next-intl";

export default function InfoCard() {
  const t = useTranslations("infoCard");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-600 rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-white mb-6">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h2>
          <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
