import { useTranslations } from "next-intl"
import SectionTitle from "../common/SectionTitle";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function CeoMessage() {
    const t = useTranslations('about.ceoMessage');

    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <Flex gap={6} justifyContent={'space-between'} direction={['column-reverse', 'column-reverse', 'row']}>
                    <Box width={['100%', '100%', '50%']}>
                        <SectionTitle title={t('title')} />
                        <Text color={'nutral.n200'} fontWeight={'light'} fontSize={'2xl'}> {t('description')} </Text>
                    </Box>
                    <Box>
                        <Image src={'/CEO.png'} alt={'about'} width={400} height={400} />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
