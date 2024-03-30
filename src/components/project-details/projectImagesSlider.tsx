'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState, lang }: any) => {
    const { totalItems, currentSlide } = carouselState;
    return (
        <Box marginTop={10}>
            <Flex gap={2} justifyContent={'center'}>
                <Button onClick={() => previous()} _hover={{ background: "secondary.s300", color: 'white' }} color={"secondary.s300"} bgColor={'white'} boxShadow={'md'} padding={2} rounded={'full'} fontSize={'lg'}>
                    {lang === 'ar' ? <IoIosArrowForward /> : <IoIosArrowBack />}
                </Button>
                <Button onClick={() => next()} _hover={{ background: "secondary.s300", color: 'white' }} color={"secondary.s300"} bgColor={'white'} boxShadow={'md'} padding={2} rounded={'full'} fontSize={'lg'}>
                    {lang === 'ar' ? <IoIosArrowBack /> : <IoIosArrowForward />}
                </Button>
            </Flex>
        </Box>
    );
};





export default function ProjectImagesSlider({ lang, slides }: { lang: string, slides: string[] }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel className="project-details" responsive={responsive} customButtonGroup={<CustomButtonGroup lang={lang} />} renderButtonGroupOutside={true} renderDotsOutside={true} showDots={false} arrows={false} rtl={lang === 'ar' ? true : false}>
            {
                slides.map((slide, index) => {
                    return (
                        <Image src={slide} key={index} width={500} height={500} alt="project image" />
                    )
                })
            }
        </Carousel>
    )
}
