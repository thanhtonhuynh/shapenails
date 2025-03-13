"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import galleryItems from "@/data/galleryItems.json";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: { duration: 0.15 },
  }),
};

export function LightboxGallery() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === " " || e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <ul className="columns-2 gap-8 md:columns-3 lg:columns-4 xl:columns-5">
        {galleryItems.map((image, i) => (
          <motion.li
            key={i}
            className="border-warmsand mb-8 cursor-pointer break-inside-avoid overflow-hidden rounded-xl border shadow-md"
            onClick={() => openLightbox(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              quality={100}
              className="transition duration-300 hover:scale-105"
            />
          </motion.li>
        ))}
      </ul>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-[70vh] items-center justify-center rounded-none border-none bg-transparent p-0 shadow-none sm:max-w-[calc(100%-2rem)] md:max-w-xl"
          onKeyDown={handleKeyDown}
          hideCloseButton
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Image Lightbox View</DialogTitle>

          {/* Image with animation */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="active"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex h-full w-full items-center justify-center"
            >
              <div className="relative h-full w-full">
                <Image
                  src={galleryItems[currentImageIndex].src}
                  alt={galleryItems[currentImageIndex].alt}
                  fill
                  sizes="100vw"
                  priority
                  quality={100}
                  className="border-claybrown rounded-xl border border-dashed object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image counter */}
          <div className="text-ivory bg-ivory/10 absolute -bottom-12 left-1/2 translate-x-[-50%] rounded-full px-4 py-1 text-sm font-medium select-none">
            {currentImageIndex + 1} / {galleryItems.length}
          </div>

          {/* CLOSE button */}
          <Button
            size="icon"
            className="text-charcoal bg-ivory/75 hover:bg-ivory hover:text-deepespresso absolute -top-12 right-0 z-50 rounded-full transition duration-200 md:top-2 md:-right-14"
            onClick={() => setOpen(false)}
          >
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </Button>

          {/* PREVIOUS button */}
          <Button
            size="icon"
            className="text-charcoal bg-ivory/75 hover:bg-ivory hover:text-deepespresso absolute -bottom-14 left-0 z-50 size-10 rounded-full transition duration-300 md:bottom-auto md:-left-14"
            onClick={goToPrevious}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous image</span>
          </Button>

          {/* NEXT button */}
          <Button
            size="icon"
            className="text-charcoal bg-ivory/75 hover:bg-ivory hover:text-deepespresso absolute right-0 -bottom-14 z-50 size-10 rounded-full transition duration-200 md:-right-14 md:bottom-auto"
            onClick={goToNext}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
