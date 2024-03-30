import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { RiCalendar2Line } from "react-icons/ri";

type InternalHeaderProps = {
    bgImage: string;
    localizationKey?: string;
    title?: string;
    date?: string
    overlayColor?: string;
}
export default function InternalHeader({ bgImage, localizationKey, title, date, overlayColor }: InternalHeaderProps) {
    const t = useTranslations(localizationKey);
    const local = useLocale();
    const commonT = useTranslations('common');
    return (
        <Box bgImage={bgImage} height={'30vh'} bgPos={'center'} bgSize={'cover'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={overlayColor ? overlayColor: 'overlayColor'}>
                <Container display={'flex'} flexDirection={'column'} justifyContent={'center'} maxW={'mainContainerSize'} mt={5} height={'100%'}>
                    <Box>

                        <Heading color={'white'} fontSize={'4xl'} mb={3}>
                            {title ? title : t('title')}
                        </Heading>

                        {
                            date ? (
                                <Flex gap={2} color={'white'} fontSize={'xl'}>
                                    <Text fontSize={'2xl'}>
                                        <RiCalendar2Line />
                                    </Text>
                                    <Text>
                                        {date}
                                    </Text>
                                </Flex>
                            ) : (
                                <Breadcrumb color={'white'} fontSize={'xl'}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink as={Link} _hover={{ textDecoration: 'none' }} href={`/${local}`}>
                                            {commonT('mainPage')}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink as={Link} _hover={{ textDecoration: 'none' }} href="">
                                            {t('title')}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            )
                        }

                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
