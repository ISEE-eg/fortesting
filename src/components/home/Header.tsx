'use client';
import { Box, Button, Container, Flex, Heading, Hide, Text } from "@chakra-ui/react";
import HeaderSlider, { SlideType } from "./HeaderSlider";
import { useLocale } from "next-intl";
import { useState } from "react";
import { LiaHomeSolid } from "react-icons/lia";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ProjectsType } from "@/data/models/types";
import useTranslationClient from "@/hooks/useTranslationClient";

export default function Header({ projects }: { projects: ProjectsType[] }) {
  const local = useLocale();
  const {t} = useTranslationClient();
  const commonTranslation = t('common');

  const slides = projects;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box bgImage={slides[currentSlide] && slides[currentSlide].image} height={'100vh'} bgSize={'cover'} bgPos={'center'} position={'relative'}>
      <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={'overlayColor'}>
        <Container maxW={'mainContainerSize'}>
          <Hide below='md'>
            <Flex direction={'column'} mt={5} alignItems={'start'} justifyContent={'center'} height={['initial', 'initial', '100vh']}>
              <Heading color={'white'} fontSize={'3xl'} p={4} paddingTop={[24, 24, 4]}>{slides[currentSlide] && slides[currentSlide].name}</Heading>
              <Text color={'white'} p={4} display={'flex'} fontSize={'lg'} alignItems={'center'} >
                <Text as={'span'} mr={3}>
                  <LiaHomeSolid />
                </Text>
                {slides[currentSlide] && slides[currentSlide].count_units}
                {' '}
                {commonTranslation['unit']}
              </Text>
              <Button as={Link} href={`/${local}/main/projects/${slides[currentSlide].id}`} _hover={{}} borderRadius={'full'} bgColor={'white'} paddingY={6} color={'primary.p200'}>
                {commonTranslation['viewProject']}
                <Text as={'span'} mx={2}>
                  {
                    local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                  }
                </Text>
              </Button>
            </Flex>
          </Hide>

        </Container>
        <Box position={'absolute'} bottom={[24]} right={[0]} width={['100%', '100%', '40%']}>
          <HeaderSlider lang={local} slides={slides} setCurrentSlide={setCurrentSlide} />
        </Box>
      </Box>
    </Box>
  )
}
