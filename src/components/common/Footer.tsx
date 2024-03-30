'use client';
import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { getLocale } from "next-intl/server";
import { apiService } from "@/data/api.service";
import { AppSettingsType } from "@/data/models/types";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { useEffect, useState } from "react";
import useTranslationClient from "@/hooks/useTranslationClient";
export default function Footer() {
    const { t } = useTranslationClient()
    const footerTranslation = t('footer');
    const local = useLocale();
    const [footerData, setFooterData] = useState<AppSettingsType | null>(null)

    const getFooterData = async () => {
        const { data: appSettings } = await apiService.get<{ data: AppSettingsType }>(API_ROUTES_PROVIDER.settings, {
            lang: local
        })

        return appSettings
    }

    useEffect(() => {
        getFooterData().then((data) => {
            setFooterData(data)
        });
    }, [])




    return (
        <Box bgColor={'#1F6B5D'} pt={20}>
            <Container maxW={'mainContainerSize'}>
                <Flex justifyContent={'space-between'} gap={5} direction={['column', 'column', 'row']}>
                    <Box w={['100%', '100%', '33%']}>
                        <Logo filter={'brightness(0) invert(1)'} />
                        <Text color={'white'} mt={4}>
                            {footerData?.footer.description}
                        </Text>
                    </Box>

                    <Box>
                        <Heading color={'white'} fontSize={'2xl'} mb={5}>
                            {footerTranslation['importantLinks']}
                        </Heading>
                        <List>
                            <ListItem>
                                <Link as={NextLink} _hover={{ textDecoration: 'none' }} color={"white"} fontWeight={400} href={`${local}/main/projects`} >{footerTranslation['projects']}</Link>
                            </ListItem>

                            <ListItem>
                                <Link as={NextLink} _hover={{ textDecoration: 'none' }} color={"white"} fontWeight={400} href={`${local}/main/about`} >{footerTranslation['about']}</Link>
                            </ListItem>

                            <ListItem>
                                <Link as={NextLink} _hover={{ textDecoration: 'none' }} color={"white"} fontWeight={400} href={`${local}/map`} >{footerTranslation['interactiveMap']}</Link>
                            </ListItem>

                            <ListItem>
                                <Link as={NextLink} _hover={{ textDecoration: 'none' }} color={"white"} fontWeight={400} href={`${local}/main/contact`} >{footerTranslation['contact']}</Link>
                            </ListItem>


                        </List>

                    </Box>

                    <Box>
                        <Heading color={'white'} fontSize={'2xl'} mb={5}>
                            {footerTranslation['contact']}
                        </Heading>
                        <List spacing={3}>
                            <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                <FaPhoneVolume size={'18px'} />
                                <Link as={NextLink} href={`tel:${footerData?.footer.mobile}`} _hover={{ textDecoration: 'none' }}>
                                    <Text>
                                        {footerData?.footer.mobile}
                                    </Text>
                                </Link>
                            </ListItem>

                            <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                <BiEnvelope size={'18px'} />
                                <Link as={NextLink} href={`mailto:${footerData?.footer.email}`} _hover={{ textDecoration: 'none' }}>
                                    <Text>
                                        {footerData?.footer.email}
                                    </Text>
                                </Link>
                            </ListItem>

                            <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                <TbWorld size={'18px'} />
                                <Link as={NextLink} target="_blank" href={`${footerData?.footer.website}`} _hover={{ textDecoration: 'none' }}>
                                    <Text>
                                        {footerData?.footer.website}
                                    </Text>
                                </Link>
                            </ListItem>

                            <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                <SlLocationPin size={'18px'} />
                                <Text>
                                    {footerData?.footer.address}
                                </Text>
                            </ListItem>

                        </List>
                    </Box>
                </Flex>

            </Container>
            <Box borderTop={'1px solid #FFFFFF'} mt={12}>
                <Container maxW={'mainContainerSize'}>
                    <Text py={10} color={'white'}>
                        {footerData?.footer.copy_right}
                    </Text>
                </Container>
            </Box>

        </Box>
    )
}
