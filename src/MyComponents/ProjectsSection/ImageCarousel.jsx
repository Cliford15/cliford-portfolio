import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [], isOpen }) {
    if (!isOpen || images.length === 0) return null;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(540); // default width
    const containerRef = useRef(null);

    // Reset index when modal opens
    useEffect(() => {
        if (!isOpen) return;
        setCurrentIndex(0);

        // Delay measurement slightly after modal is visible
        const measure = () => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            if (width > 0) setContainerWidth(width);
        }
        };

        // Give the modal time to render (e.g. 100ms)
        const timeout = setTimeout(measure, 100);
        window.addEventListener("resize", measure);

        return () => {
        clearTimeout(timeout);
        window.removeEventListener("resize", measure);
        };
    }, [isOpen]);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[540px] aspect-[1351/635] mx-auto overflow-hidden rounded-xl shadow-lg bg-black"
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                transform: `translateX(-${currentIndex * containerWidth}px)`,
                width: `${images.length * 100}%`,
                }}
            >
                {images.map((img, index) => (
                <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${containerWidth}px` }}
                >
                    <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain bg-black"
                    />
                </div>
                ))}
            </div>

            {/* Left Button */}
            <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-slate-900/60 hover:bg-slate-700 text-white"
            >
                <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Right Button */}
            <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-slate-900/60 hover:bg-slate-700 text-white"
            >
                <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                    } transition-all`}
                ></div>
                ))}
            </div>
        </div>
    );
}