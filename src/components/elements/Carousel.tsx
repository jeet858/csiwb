import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img from "../../../images/caraousel.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
interface CarouselProps {
  items: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentTranslate(-currentIndex * 100);
    setPrevTranslate(-currentIndex * 100);
  }, [currentIndex]);

  useEffect(() => {
    if (autoPlay && !isDragging) {
      const interval = setInterval(() => {
        next();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayInterval, isDragging]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      setStartX(e.touches[0].clientX);
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !e.touches[0]) return;
    const currentX = e.touches[0].clientX;
    const translate = prevTranslate + (currentX - startX);
    setCurrentTranslate(translate);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < items.length - 1) {
      next();
    } else if (movedBy > 50 && currentIndex > 0) {
      prev();
    } else {
      setCurrentTranslate(prevTranslate); // Reset to the current slide if not moved enough
    }
  };

  return (
    <div className="flex h-fit w-full justify-center self-center sm:px-2">
      <div className="relative flex h-fit w-full max-w-xl flex-col self-center overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${currentTranslate}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={itemsRef}
        >
          {items.map((item, index) => (
            <Image
              key={index}
              src={img}
              alt=""
              className="flex h-full min-w-full items-center justify-center self-center"
            />
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full  p-2 text-white"
          onClick={prev}
        >
          <MdKeyboardArrowLeft className="h-8 w-8" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full  p-2 text-white"
          onClick={next}
        >
          <MdKeyboardArrowRight className="h-8 w-8" />
        </button>
        <div className="relative bottom-4 left-1/2 z-20 mt-8 flex w-full -translate-x-1/2 transform justify-center space-x-2 self-center">
          {items.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full  ${
                index === currentIndex ? "bg-[#DA2128]" : "bg-[#D9D9D9]"
              }`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
