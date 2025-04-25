import { useRef, useEffect, useState } from "react";
import leftArrow from "../assets/Icons/left-arrow.png";
import rightArrow from "../assets/Icons/right-arrow.png";

function Carousel() {
    const images = [
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg"
    ];

    const containerRef = useRef(null);
    const [hovering, setHovering] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToImage = (i) => {
        const container = containerRef.current;
        if (!container) return;

        const imageWidth = container.offsetWidth;
        container.scrollTo({
            left: imageWidth * i,
            behavior: "smooth"
        });

        setActiveIndex(i);
    };

    const handlePrev = () => {
        const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        scrollToImage(newIndex);
    };

    const handleNext = () => {
        const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        scrollToImage(newIndex);
    };

    useEffect(() => {
        if (hovering) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [hovering, activeIndex]);

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <div
                ref={containerRef}
                className="flex overflow-x-auto hide-scrollbar scroll-smooth"
            >
                {images.map((image, idx) => (
                    <img
                        key={idx}
                        src={image}
                        alt={`poster-${idx}`}
                        className="min-w-full h-72 md:h-96 object-cover"
                    />
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
            >
                <img src={leftArrow} alt="Previous" className="w-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
            >
                <img src={rightArrow} alt="Next" className="w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 w-full flex justify-center space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToImage(idx)}
                        className={`w-3 h-3 rounded-full ${activeIndex === idx ? "bg-blue-700" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
