"use client";
import { motion } from "framer-motion";
import { categories } from "./categories";


interface CategoryNavigationProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNavigation({ 
  activeCategory, 
  onCategoryChange 
}: CategoryNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            <IconComponent size={18} />
            <span className="font-medium">{category.label}</span>
          </button>
        );
      })}
    </motion.div>
  );
}
