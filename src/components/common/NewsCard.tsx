import { NewsType } from "@/data/models/types";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Image, Text, Flex } from "@chakra-ui/react";
import { useFormatter, useLocale } from "next-intl";
import Link from "next/link";
import { RiCalendar2Line } from "react-icons/ri";

export default function NewsCard({ isSlide = true, post }: { isSlide?: boolean, post: NewsType }) {
    const local = useLocale();
    const format = useFormatter();
    const postCreatedAt = format.dateTime(new Date(post.created_at), { day: 'numeric', month: 'long', year: 'numeric' });
    return (
        <Card maxW='sm' marginX={isSlide ? ['auto', 'auto', 2] : 0} marginTop={isSlide ? 10 : 2} marginBottom={isSlide ? 20 : 5}>
            <Link href={`/${local}/main/news/${post.id}`}>
                <CardBody padding={3}>
                    <Image
                        src={post.image}
                        alt='news image'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={'textColor'}>
                            <Link href={`/${local}/main/news/${post.id}`}>
                                {post.title}
                            </Link>
                        </Heading>
                    </Stack>
                </CardBody>
            </Link>
            <Divider borderColor={'#E9E9E9'} />
            <CardFooter>
                <Flex alignItems={'center'} gap={2} color={"nutral.n200"}>
                    <Text fontSize={'2xl'}>
                        <RiCalendar2Line />
                    </Text>
                    <Text>
                        {postCreatedAt}
                    </Text>
                </Flex>
            </CardFooter>
        </Card>
    )
}
