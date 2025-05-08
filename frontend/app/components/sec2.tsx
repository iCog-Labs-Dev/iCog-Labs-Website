"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { sec2Cards } from "../data/index";
import { GlowingEffect } from "./UI/glowing-effect";
import { motion } from "framer-motion";
import { SectionHeader } from "./sectionHeader";

const iconMap = {
  Box: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
  Lock: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
  Search: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
  Settings: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
  Sparkles: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
};

export default function Sec2() {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-31 bg-gray-950 text-white">
      {/* Title Section - Matching Sec1 style */}
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeader title="Specialized Knowledge & Skills" center mb="4" />
      </motion.div>

      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our Expertise
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        With a decade of experience at the forefront of AI innovation, our team
        combines deep technical knowledge with practical implementation skills
        to deliver cutting-edge solutions across multiple domains.
      </motion.p>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {/* Card 1 - Top Left */}
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={iconMap[sec2Cards[0].iconName as keyof typeof iconMap]}
          title={sec2Cards[0].title}
          description={sec2Cards[0].description}
          delay={0.3}
        />

        {/* Card 2 - Bottom Left */}
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={iconMap[sec2Cards[1].iconName as keyof typeof iconMap]}
          title={sec2Cards[1].title}
          description={sec2Cards[1].description}
          delay={0.4}
        />

        {/* Card 3 - Center (Tall) */}
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={iconMap[sec2Cards[2].iconName as keyof typeof iconMap]}
          title={sec2Cards[2].title}
          description={sec2Cards[2].description}
          delay={0.5}
        />

        {/* Card 4 - Top Right */}
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={iconMap[sec2Cards[3].iconName as keyof typeof iconMap]}
          title={sec2Cards[3].title}
          description={sec2Cards[3].description}
          delay={0.4}
        />

        {/* Card 5 - Bottom Right */}
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={iconMap[sec2Cards[4].iconName as keyof typeof iconMap]}
          title={sec2Cards[4].title}
          description={sec2Cards[4].description}
          delay={0.3}
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  delay = 0,
}: GridItemProps) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 group">
        <GlowingEffect
          spread={40}
          glow={false}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] group-hover:shadow-[0px_0px_35px_0px_#3D3D3D] transition-shadow duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 group-hover:border-orange-400/50 transition-colors duration-300">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem] group-hover:text-orange-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem] group-hover:text-neutral-300 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
