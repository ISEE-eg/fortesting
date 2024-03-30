import { Box, Container, Text } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";
import NewsSlider from "./NewsSlider";
import { apiService } from "@/data/api.service";
import { NewsType } from "@/data/models/types";
import { getLocale, getTranslations } from "next-intl/server";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";

export default async function NewsSection() {
    const t = await getTranslations('home.newsSection');
    const local = await getLocale();
    const { data: news } = await apiService.get<{ data: NewsType[] }>(API_ROUTES_PROVIDER.posts, {
        per_page: 10,
        lang: local
    });
    return (
        <Box py={32} bg={'white'}>
            <Container maxW={'mainContainerSize'}>
                <SectionTitle title={t('title')} />
                <Text fontSize={'xl'} mb={8} color={'nutral.n200'} fontWeight={'bold'}> {t('description')} </Text>
                <NewsSlider slides={news} lang={local} />
            </Container>
        </Box>
    )
}
