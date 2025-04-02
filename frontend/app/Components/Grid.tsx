"use client";
import { gridItems } from "../data/index";
import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";

const Grid = () => {
  return (
    <section>


      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
