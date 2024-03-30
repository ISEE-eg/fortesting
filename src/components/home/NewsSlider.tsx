'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "../common/NewsCard";
import { Box, Button, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NewsType } from "@/data/models/types";

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState, lang }: any) => {
    const { totalItems, currentSlide } = carouselState;
    return (
        <Box position={['initial', 'initial', 'relative']} width={['initial', 'initial', '60%']} bottom={2} left={['10%', '10%', '20%']} marginTop={-10}>
            <Flex gap={2} justifyContent={['center', 'center', 'space-between']} alignItems={'center'}>
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

const CustomDot = ({ onClick, ...rest }: any) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <Divider cursor={'pointer'} mb={5} borderWidth={2} borderColor={active ? "secondary.s300" : "#DDF2EE"} onClick={() => onClick()} />
    );
};



export default function NewsSlider({ lang, slides }: { lang: string, slides: NewsType[] }) {
    const [lessThan768] = useMediaQuery('(max-width: 768px)');


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <Carousel responsive={responsive} customButtonGroup={<CustomButtonGroup lang={lang} />} renderButtonGroupOutside={true} renderDotsOutside={true} showDots={lessThan768 ? false : true} customDot={<CustomDot />} arrows={false} rtl={lang === 'ar' ? true : false} dotListClass="news-dot-list-style">
            {
                slides.map((post, index) => {
                    return <NewsCard key={post.id} post={post} />
                })
            }
            
        </Carousel>
    )
}
