"use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 2000, stopOnInteraction: false })]
    )

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const slides = [
        {
            id: 1,
            image: "/images/imagem-a.png",
            alt: "Top Image",
        },
        {
            id: 2,
            image: "/images/image-utm-1.jpeg",
            alt: "UTM Image 1",
        },
        {
            id: 3,
            image: "/images/image-utm-2.jpeg",
            alt: "UTM Image 2",
        },
        {
            id: 4,
            image: "/images/image-utm-3.jpeg",
            alt: "UTM Image 3",
        }
    ]

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((slide) => (
                    <div className="embla__slide" key={slide.id}>
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
    