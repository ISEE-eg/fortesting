import { Box, Container, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SupplyChain() {
    const t = useTranslations('about.supplyChain');

    const allFeatures = [{}, {}, {}, {}, {}, {}].map((feature, index) => (
        <Flex key={index} flexBasis={['100%', '100%','30%']} mb={5} bgColor={'white'} px={10} py={5} gap={3} border={'1px solid'} borderColor={'secondary.s50'} borderRadius={5} alignItems={'center'} justifyContent={'space-between'}>
            <Image src={'/Ellipse.png'} alt={'Ellipse'} width={100} height={100} />
            <Text>
                مصنع قوالب نفقية
            </Text>
        </Flex>
    ))
    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <Box>
                    <SectionTitle title={t('title')} />
                </Box>

                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>

                    {allFeatures}

                </Flex>

            </Container>
        </Box>

    )
}


