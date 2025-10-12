"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./slider.css";

interface Review {
  name: string;
  text: string;
}

interface SliderProps {
  id: string;
  reviews: Review[];
  itemsToShow?: number; // quantos aparecerão ao mesmo tempo
}

export default function Slider({ id, reviews, itemsToShow = 2 }: SliderProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // calcula os reviews que aparecem atualmente
  const visibleReviews = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleReviews.push(reviews[(startIndex + i) % reviews.length]);
  }

  return (
    <div id={id} className="slider-container">
      <div className="slider-cards">
        {visibleReviews.map((review, idx) => (
          <motion.div
            key={startIndex + idx}
            className="review-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="review-name">{review.name}</h4>
            <p className="review-text">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
