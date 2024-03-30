import { useTranslations } from "next-intl"
import SectionTitle from "../common/SectionTitle";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function CompanyInfo() {
    const t = useTranslations('about.companyInfo');

    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <Flex justifyContent={'center'} direction={['column', 'column', 'row']} alignItems={'center'}>
                    <Box bg={'white'} height={['auto', 'auto', '300px']} p={5} borderRadius={10} boxShadow={'lg'} marginBottom={[5, 5, 'initial']} marginRight={['initial', 'initial','-50px']} width={['100%', '100%', '60%']} zIndex={9999}>
                        <SectionTitle title={t('title')} />
                        <Text color={'nutral.n200'} fontWeight={'bold'}> {t('description1')} </Text>
                        <Text mb={8} color={'nutral.n200'} fontWeight={'light'}> {t('description2')} </Text>
                    </Box>
                    <Box>
                        <Image src={'/about-company-info.png'} alt={'about'} width={500} height={500} style={{
                            margin: 'auto'
                        }} />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
