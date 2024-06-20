import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import img from "../../../images/caraousel.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CarouselProps {
  items: { text: string; themeColor?: string; speaker: string }[];
  autoPlay: boolean;
  autoPlayInterval?: number;
  indicator: boolean;
  arrows: boolean;
  drag?: boolean;
  indicatorColor: string;
  onCurrentItemChange?: (themeColor: string) => void; //this prop returns themecolor of the current item which is in display
}

const CarouselTextOnly: React.FunctionComponent<CarouselProps> = ({
  items,
  autoPlay,
  autoPlayInterval = 2000,
  indicator,
  arrows,
  drag = true,
  indicatorColor,
  onCurrentItemChange,
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
    const currentItem = items[currentIndex];
    if (currentItem?.themeColor && onCurrentItemChange) {
      onCurrentItemChange(currentItem.themeColor);
    }
  }, [currentIndex, items, onCurrentItemChange]);

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
    if (e.touches[0] && drag) {
      setStartX(e.touches[0].clientX);
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !e.touches[0] || !drag) return;
    const currentX = e.touches[0].clientX;
    const translate = prevTranslate + (currentX - startX);
    setCurrentTranslate(translate);
  };

  const handleTouchEnd = () => {
    if (!drag) return;
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < items.length - 1) {
      next();
    } else if (movedBy < -50 && currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else if (movedBy > 50 && currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      prev();
    } else {
      setCurrentTranslate(prevTranslate); // Reset to the current slide if not moved enough
    }
  };

  return (
    <div className="grid h-full w-full">
      <div className="flex h-full w-full justify-center self-center sm:px-2">
        <div className="relative flex h-full w-full max-w-xl flex-col self-center overflow-hidden">
          <div
            className=" flex  h-full transition-transform duration-500"
            style={{ transform: `translateX(${currentTranslate}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={itemsRef}
          >
            {items.map((item, index) => (
              <div
                className="flex w-screen min-w-full items-center justify-center"
                key={index}
              >
                <div
                  className={` relative top-[-60px]  mt-40 flex h-fit w-screen  flex-col items-center justify-center gap-y-4 self-center font-lato text-xl text-white`}
                  style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                >
                  <p className="flex w-4/5 max-w-[400px] flex-wrap items-center justify-center">
                    Program: {item.text}
                  </p>
                  <p className="flex w-4/5 items-center justify-center">
                    Speaker: {item.speaker}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {arrows ? (
            <button
              className="absolute left-4 top-1/2  z-[99999] ml-[80px]  mt-40 -translate-y-1/2 transform  rounded-full p-2 text-white"
              onClick={prev}
            >
              <MdKeyboardArrowLeft className="h-10 w-10" />
            </button>
          ) : null}
          {arrows ? (
            <button
              className="absolute right-4 top-1/2 mr-[80px] mt-40 -translate-y-1/2  transform  rounded-full p-2 text-white"
              onClick={next}
            >
              <MdKeyboardArrowRight className="h-10 w-10" />
            </button>
          ) : null}
          {/* {indicator ? (
          <div className="relative bottom-4 left-1/2 z-20 mt-8 flex w-full -translate-x-1/2 transform justify-center space-x-2 self-center">
            {items.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full  ${
                  index === currentIndex ? "bg-[#7C0202]" : "bg-[#D9D9D9]"
                }`}
                onClick={() => goToIndex(index)}
              ></span>
            ))}
          </div>
        ) : null} */}
          {indicator ? (
            <div className="relative bottom-4 left-1/2 z-20 mt-8 flex w-full -translate-x-1/2 transform justify-center space-x-2 self-center">
              {Array.from(
                {
                  length:
                    currentIndex === items.length
                      ? currentIndex - 1
                      : currentIndex + 1,
                },
                (_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full  `}
                    onClick={() => goToIndex(index)}
                    style={{ backgroundColor: indicatorColor }}
                  ></span>
                ),
              )}

              <div
                className=" h-2 rounded-xl "
                style={{
                  width: `${(items.length - currentIndex - 1) * 15}px`,
                  display: `${currentIndex + 1 !== items.length ? "" : "none"}`,
                  backgroundColor: indicatorColor,
                }}
              ></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CarouselTextOnly;
