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
  itemsToShow?: number;
}

export default function Slider({ id, reviews, itemsToShow = 2 }: SliderProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleReviews.push(reviews[(startIndex + i) % reviews.length]);
  }

  return (
    <section id={id} className="slider-section">
      <h2 className="slider-title">O que dizem os nossos clientes</h2>
      <div className="slider-container">
        <div className="slider-cards">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={startIndex + idx}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
            >
              <h4 className="review-name">{review.name}</h4>
              <p className="review-text">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
