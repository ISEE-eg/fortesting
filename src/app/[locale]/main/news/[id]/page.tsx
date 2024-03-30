import InternalHeader from "@/components/common/InternalHeader";
import SectionTitle from "@/components/common/SectionTitle";
import NewsSlider from "@/components/home/NewsSlider";
import BlogDetails from "@/components/news-details/BlogDetails";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { apiService } from "@/data/api.service";
import { NewsType } from "@/data/models/types";
import { Box, Container, Divider } from "@chakra-ui/react";
import { getFormatter, getLocale, getTranslations } from "next-intl/server";


export default async function NewsDetails({ params }: { params: { [key: string]: string } }) {
    const lang = await getLocale();
    const format = await getFormatter();
    const t = await getTranslations('newsDetails');

    const { id } = params;

    const { data: blog } = await apiService.get<{ data: NewsType }>(`${API_ROUTES_PROVIDER.posts}/${id}`, {
        lang
    });
    const { data: relatedNews } = await apiService.get<{ data: NewsType[] }>(`${API_ROUTES_PROVIDER.posts}/${id}/${API_ROUTES_PROVIDER.related}`, {
        lang
    });


    const postCreatedAt = format.dateTime(new Date(blog?.created_at), { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            <Box pt={[20, 20, 'initial']}>
                <InternalHeader
                    bgImage={'/page-header.png'}
                    date={postCreatedAt}
                    title={blog.title} />

                <BlogDetails blog={blog} />
                <Container maxW={'mainContainerSize'} >
                    <Divider borderWidth={1} borderColor={'nutral.n75'} mb={5} />
                    <Box py={16}>
                        <SectionTitle title={t('anotherNews')} />
                        <NewsSlider slides={relatedNews} lang={lang} />
                    </Box>
                </Container>



            </Box>
        </>
    )
}
