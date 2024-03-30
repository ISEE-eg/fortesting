'use client';
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { SlLocationPin } from "react-icons/sl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
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
        <Carousel responsive={responsive} showDots={true} arrows={true}>
            <Flex direction={'column'} gap={10} >
                <Image src="/project.jpg" alt="project" width={300} height={300} />
                <Heading>Project 1</Heading>
                <Text>
                    <Text as={'span'} mr={3}>
                        <SlLocationPin />
                    </Text>
                    text

                </Text>
            </Flex>

            <Flex direction={'column'} gap={10} >
                <Image src="/project.jpg" alt="project" width={300} height={300} />
                <Heading>Project 1</Heading>
                <Text>
                    <Text as={'span'} mr={3}>
                        <SlLocationPin />
                    </Text>
                    text

                </Text>
            </Flex>

            <Flex direction={'column'} gap={10} >
                <Image src="/project.jpg" alt="project" width={300} height={300} />
                <Heading>Project 1</Heading>
                <Text>
                    <Text as={'span'} mr={3}>
                        <SlLocationPin />
                    </Text>
                    text

                </Text>
            </Flex>

            <Flex direction={'column'} gap={10} >
                <Image src="/project.jpg" alt="project" width={300} height={300} />
                <Heading>Project 1</Heading>
                <Text>
                    <Text as={'span'} mr={3}>
                        <SlLocationPin />
                    </Text>
                    text

                </Text>
            </Flex>

            <Flex direction={'column'} gap={10} >
                <Image src="/project.jpg" alt="project" width={300} height={300} />
                <Heading>Project 1</Heading>
                <Text>
                    <Text as={'span'} mr={3}>
                        <SlLocationPin />
                    </Text>
                    text

                </Text>
            </Flex>
            

        </Carousel>
    )
}
