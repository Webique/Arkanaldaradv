"use client";

import { Quote, Star, User } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.Testimonials");

  const testimonials = [
    {
      nameKey: "client1.name",
      roleKey: "client1.role",
      textKey: "client1.text",
      rating: 5
    },
    {
      nameKey: "client2.name",
      roleKey: "client2.role",
      textKey: "client2.text",
      rating: 5
    },
    {
      nameKey: "client3.name",
      roleKey: "client3.role",
      textKey: "client3.text",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-1/4 h-72 w-72 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/4 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="layout relative">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <m.div variants={cardVariants} className="mb-16 text-center">
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>
            </m.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {t("subtitle")}
            </p>
          </m.div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />

                {/* Main card */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Quote icon background */}
                  <div className="absolute -end-4 -top-4 text-6xl text-[#1E488F]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#1E488F]/10">
                    <Quote className="h-24 w-24" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating stars */}
                    <div className="mb-5 flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <m.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                        </m.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="mb-8 min-h-[120px] text-base leading-relaxed text-[#1E488F]/90">
                      &ldquo;{t(testimonial.textKey as any)}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-[#1E488F]/20 to-transparent" />

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-20 blur-md" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-lg ring-2 ring-white transition-transform duration-300 group-hover:scale-110">
                          <User className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                          {t(testimonial.nameKey as any)}
                        </div>
                        <div className="text-sm text-[#1E488F]/70">
                          {t(testimonial.roleKey as any)}
                        </div>
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
