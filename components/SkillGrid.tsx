// components/SkillGrid.tsx
import { motion } from "framer-motion";
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
      <h1 className="mx-4 my-12 cursor-default text-[4rem] font-bold leading-none text-warnaPutih lg:text-[10rem]">
        {title}
      </h1>
      <div className="mx-4 my-0 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            className="flex min-h-48 rounded-2xl bg-warnaHitamCerah md:min-h-72 lg:min-h-96"
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
                width={windowWidth < 1024 ? 80 : 150}
                height={windowWidth < 1024 ? 80 : 150}
              />
              <div className="self-end">
                <h1 className="m-0 cursor-default font-geist text-[2rem] font-bold text-warnaPutih lg:text-[2.5rem] xl:text-[3.5rem]">
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
