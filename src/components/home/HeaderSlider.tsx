'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "../common/NewsCard";
import { Box, Button, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeaderSliderProjectCard from "./HeaderSliderProjectCard";
import { ProjectsType } from "@/data/models/types";

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState, lang }: any) => {
    const { totalItems, currentSlide } = carouselState;
    return (
        <Box position={['initial', 'initial', 'absolute']} width={['initial', 'initial', '60%']} bottom={2} left={'0'} marginTop={10}>
            <Flex gap={2} justifyContent={['center', 'center', 'space-between']} alignItems={'center'}>
                <Button onClick={() => previous()} _hover={{ background: 'white', color: 'primary.p300' }} color={"white"} bgColor={'#828686'} padding={2} rounded={'full'} fontSize={'lg'}>
                    {lang === 'ar' ? <IoIosArrowForward /> : <IoIosArrowBack />}
                </Button>
                <Button onClick={() => next()} _hover={{ background: 'white', color: 'primary.p300' }} color={"white"} bgColor={'#828686'} padding={2} rounded={'full'} fontSize={'lg'}>
                    {lang === 'ar' ? <IoIosArrowBack /> : <IoIosArrowForward />}
                </Button>
            </Flex>
        </Box>
    );
};

const CustomDot = ({ onClick, ...rest }: any) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <Divider opacity={1} borderRadius={10} cursor={'pointer'} mb={5} borderWidth={2} borderColor={active ? "white" : "#5F6968"} onClick={() => onClick()} />
    );
};


type HeaderSliderProps = {
    lang: string;
    slides: ProjectsType[];
    setCurrentSlide: (slide: number) => void;
}

export type SlideType = { title: string; location: string; image: string; }

export default function HeaderSlider({ lang, slides, setCurrentSlide }: HeaderSliderProps) {
    const [lessThan768] = useMediaQuery('(max-width: 768px)');

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            partialVisibilityGutter: 350
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 350
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            partialVisible={true}
            // centerMode={true}
            responsive={responsive}
            customButtonGroup={<CustomButtonGroup lang={lang} />}
            showDots={lessThan768 ? false : true}
            renderButtonGroupOutside={true}
            // autoPlay={true}
            // infinite={true}
            // autoPlaySpeed={5000}
            customDot={<CustomDot />}
            arrows={false} rtl={lang === 'ar' ? true : false}
            dotListClass={`header-dot-list-style ${lang === 'ar' ? 'ar' : ''}`}
            afterChange={(previousSlide, { currentSlide, onMove }: any) => {
                
                setCurrentSlide(currentSlide)
              }}
        >
            {
                slides.map((slide, index) => (
                    <HeaderSliderProjectCard key={index} project={slide} />
                ))
            }
            
        </Carousel>
    )
}
