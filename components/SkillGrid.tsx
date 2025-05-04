// components/SkillGrid.tsx
import { motion } from "motion/react";
import Image from "next/image";

type TechItem = {
  name: string;
  image: string;
};

type SkillGridProps = {
  title: string;
  items: TechItem[];
  windowWidth: number;
};

const SkillGrid: React.FC<SkillGridProps> = ({ title, items, windowWidth }) => {
  return (
    <>
      <h1 className="text-warna-putih mx-4 my-12 cursor-default text-[4rem] leading-none font-bold lg:text-[10rem]">
        {title}
      </h1>
      <div className="mx-4 my-0 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            className="bg-warna-hitam-cerah flex min-h-48 rounded-2xl md:min-h-72 lg:min-h-96"
            key={item.name + index}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: windowWidth < 600 ? 0 : 0.05 * index,
              },
            }}
          >
            <div className="flex flex-1 flex-col justify-between p-4">
              <Image
                src={item.image}
                alt={item.name}
                className="h-[60px] w-[60px] sm:h-[90px] sm:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[150px] xl:w-[150px]"
              />
              <div className="self-end">
                <h1 className="font-geist text-warna-putih m-0 cursor-default text-[1.1rem] font-bold sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]">
                  {item.name}
                </h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SkillGrid;
