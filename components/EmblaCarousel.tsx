"use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    )

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const slides = [
        {
            id: 1,
            image: "/the-bigger-ROI.png",
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
        <>
        {/* Texto introdutório do carrossel */}
        <div className="my-5 px-2">
          <h2 className="text-1xl md:text-2xl font-bold text-regular text-center border border-white rounded-lg p-4">
            Olhe alguns de meus resultados do mês passado
          </h2>
        </div>


        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((slide) => (
                    <div className="embla__slide" key={slide.id}>
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            width={500}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
    