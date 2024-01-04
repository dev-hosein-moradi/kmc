"use client";
import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Item {
  img: StaticImageData;
  desc: string;
}

export default function HeroSlider({ items }: { items: Item[] }) {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full mx-auto text-center">
      {/* Item image */}
      <div className="transition-all duration-1000 delay-300 ease-in-out">
        <div className="relative flex flex-col w-[100vw]" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-1000 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-1000 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
              className={"w-full h-full"}
            >
              <ImageCard item={item} />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ImageCard = ({ item }: { item: Item }) => {
  return (
    <Image
      className={`w-full h-auto object-cover relative`}
      placeholder="blur"
      sizes="100vw"
      quality={50}
      src={item.img}
      alt={item.desc}
      priority
    />
  );
};
