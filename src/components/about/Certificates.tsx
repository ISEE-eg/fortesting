import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PiCertificate } from "react-icons/pi";
import GallerySlider from "./GallerySlider";

const CertificateAccordion = ({ title, image, ...styles }: { title: string; image: string;[key: string]: any; }) => {
    return (
        <Accordion style={{ ...styles }} border={'none'} outline={'none'} allowToggle borderRadius={10} bgColor={'greyBg'} >
            <AccordionItem border={'none'} outline={'none'}>
                <AccordionButton padding={5}>
                    <Text mx={2} fontSize={'2xl'} color={'secondary.s200'}>
                        <PiCertificate />
                    </Text>
                    <Text as="span" flex='1' color={'nutral.n300'} fontWeight={'bold'} textAlign='left'>
                        {title}
                    </Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} display={'flex'} justifyContent={'center'}>
                    <Image src={image} alt={title} width={300} height={300} />
                </AccordionPanel>
            </AccordionItem>


        </Accordion >
    )
}

export default function Certificates() {
    const t = useTranslations('about.certificates');

    const certificates = [
        {
            title: "شهادة تصنيف وافي",
            image: '/certificates/cert-1.png'
        },
        {
            title: "شهادة تصنيف الجوده العامة للعقار ودوراته",
            image: '/certificates/cert-2.png'
        },
        {
            title: "شهادة تصنيف بلدي ",
            image: '/certificates/cert-3.png'
        },
        {
            title: "شهادة تصنيف الجوده العامة للعقار ودوراته ",
            image: '/certificates/cert-1.png'
        }
    ];


    const certificateAccordions = certificates.map((certificate, index) => {
        return (
            <Box flexBasis={['100%', '100%', '48%']} key={index}>
                <CertificateAccordion title={certificate.title} image={certificate.image} marginBottom={20} />
            </Box>
        )
    });

    const certificateImages = certificates.map((certificate, index) => {
        return (
            <Box key={index} flexBasis={['100%', '100%', '22%']}>
                <Image src={certificate.image} alt={certificate.title} width={300} height={300} style={{ margin: '10px auto' }} />
            </Box>
        )
    });
    return (
        <Box bgColor={'white'} py={32}>
            <Container maxW={'mainContainerSize'}>
                <SectionTitle title={t('title')} />

                <Flex justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'start'}>
                    {certificateAccordions}
                </Flex>
{/* 
                <Box height={'700px'} width={'60%'} margin={'auto'} position={'relative'}>
                    <GallerySlider slides={certificates} />
                </Box> */}
            </Container>

        </Box>
    )
}
