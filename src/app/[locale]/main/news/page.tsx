import InternalHeader from "@/components/common/InternalHeader";
import NewsCard from "@/components/common/NewsCard";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { apiService } from "@/data/api.service";
import { NewsType } from "@/data/models/types";
import { Box, Container, Flex } from "@chakra-ui/react";
import { getLocale } from "next-intl/server";




export default async function NewsPage() {
    const local = await getLocale
    const { data } = await apiService.get<{ data: NewsType[] }>(API_ROUTES_PROVIDER.posts, {
        per_page: 500,
        lang: local
    });
    

    const allProjects = data?.map((post, index) => {
        return (
            <Box key={index} flexBasis={['100%', '48%', '32%']}>
                <NewsCard post={post} isSlide={false} />
            </Box>
        )
    });

    return (
        <Box pt={[20, 20, 'initial']}>
            <InternalHeader
                bgImage={'/news-page-header.png'}
                localizationKey="news" />

            <Container maxW={'mainContainerSize'} mt={10}>
                <Flex wrap={'wrap'} marginY={5} justifyContent={'space-between'}>
                    {allProjects}
                </Flex>
            </Container>
        </Box>
    )
}
