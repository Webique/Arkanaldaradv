"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.Testimonials");

  const testimonials = [
    {
      nameKey: "client1.name",
      roleKey: "client1.role",
      textKey: "client1.text",
      rating: 5,
      image: "👨‍💼"
    },
    {
      nameKey: "client2.name",
      roleKey: "client2.role",
      textKey: "client2.text",
      rating: 5,
      image: "👩‍💼"
    },
    {
      nameKey: "client3.name",
      roleKey: "client3.role",
      textKey: "client3.text",
      rating: 5,
      image: "👨‍💻"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="layout px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div variants={cardVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">{t("subtitle")}</p>
          </m.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="absolute right-4 top-4 text-6xl text-[#1E488F]/10">
                  <Quote className="h-12 w-12" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#DBE64C] text-[#DBE64C]"
                      />
                    ))}
                  </div>

                  <p className="mb-6 leading-relaxed text-[#1E488F]">
                    {t(testimonial.textKey as any)}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] text-2xl shadow-lg">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-[#001F3F]">
                        {t(testimonial.nameKey as any)}
                      </div>
                      <div className="text-sm text-[#1E488F]">
                        {t(testimonial.roleKey as any)}
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
