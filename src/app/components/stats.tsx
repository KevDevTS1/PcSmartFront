import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { label: "Productos Vendidos", value: 15000, suffix: "+" },
  { label: "Clientes Corporativos", value: 500, suffix: "+" },
  { label: "Centros de Soporte", value: 12, suffix: "" },
  { label: "Años de Experiencia", value: 15, suffix: "+" },
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export const Stats = () => {
  return (
    <section className="py-24 bg-[#1a4b8c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <p className="text-4xl md:text-6xl font-bold mb-2 font-poppins">
                <CountUp end={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-blue-100 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
