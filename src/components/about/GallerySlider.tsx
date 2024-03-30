'use client';

import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
// import Image from 'next/image';



export default function GallerySlider({slides}: {slides: any[]}) {
    
    const [Carousel, setCarousel] = useState(null)
    useEffect(() => {
        const loadCarousel = () => {
          const DynamicCarousel = dynamic(
            // @ts-expect-error - react-spring-3d-carousel doesn't have types
            () => import('react-spring-3d-carousel')
          )
          // @ts-expect-error - react-spring-3d-carousel doesn't have types
          setCarousel(() => DynamicCarousel)
        }
    
        loadCarousel()
      }, [])
    
      if (!Carousel) {
        return
      }



    
  return (
    // @ts-expect-error
    <Carousel slides={
        slides.map((slide, index) => ({
            key: index,
            content: (
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={slide.image} alt={slide.title} />
                </Flex>
            ),
        }))
    } 
    showNavigation={true}
    offsetRadius={4}

     />

  )
}
