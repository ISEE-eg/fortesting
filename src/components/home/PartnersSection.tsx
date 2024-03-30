import { Container, Flex, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SectionTitle from '../common/SectionTitle'
import Image from 'next/image'
import { apiService } from '@/data/api.service';
import { getLocale, getTranslations } from 'next-intl/server';
import { PartnerType } from '@/data/models/types';
import { API_ROUTES_PROVIDER } from '@/data/api-provider';

export default async function PartnersSection() {
    const lang = await getLocale()
    const { data: partners } = await apiService.get<{ data: PartnerType[] }>(API_ROUTES_PROVIDER.partners, {
        lang
    });
    const t = await getTranslations('home.partnersSection');


    const partnersElements = partners.map((partner, index) => {
        return (
            <Link href={"#"} key={index}>
                <Image src={partner.image} width={109} height={72} alt="" />
            </Link>
        )
    });

    return (
        <Box py={32} bgColor={'white'}>
            <Container maxW={'mainContainerSize'}>
                <SectionTitle title={t('title')} />
                <Text w={['100%', '100%', '50%']} marginY={5} color={'nutral.n200'} fontWeight={'bold'}>{t('description')}</Text>
                <Flex mt={10} gap={[10, 10, 'initial']} direction={['column', 'column', 'row']} justifyContent={'space-between'} alignItems={['center', 'center', 'baseline']}>
                    {partnersElements}
                </Flex>


            </Container>
        </Box>
    )
}
