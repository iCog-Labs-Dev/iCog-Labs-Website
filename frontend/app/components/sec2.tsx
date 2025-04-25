"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { sec2Cards } from "../data/index";
import { GlowingEffect } from "./UI/glowing-effect";

const iconMap = {
  Box: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
  Lock: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
  Search: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
  Settings: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
  Sparkles: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
};

export default function Sec2() {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>
      <ul className="grid grid-cols-1 grid-rows-none gap-10 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[26rem] xl:grid-rows-2 ">
        {sec2Cards.map((card, index) => {
          // Improved layout configuration for grid placement
          const areaClasses = [
            "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
            "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
            "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
            "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
            "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
          ];
          return (
            <li key={card.id} className={`min-h-[14rem] list-none ${areaClasses[index]}`}>
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-gray-600 p-2">
                      {iconMap[card.iconName as keyof typeof iconMap]}
                    </div>
                    <div className="space-y-3">
                      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem]">
                        {card.title}
                      </h3>
                      <p className="text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
