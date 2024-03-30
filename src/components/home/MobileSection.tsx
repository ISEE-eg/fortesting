import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { apiService } from "@/data/api.service";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { getLocale } from "next-intl/server";
import { AppSettingsType } from "@/data/models/types";

export default async function MobileSection() {
    const t = useTranslations('home.mobileSection');
    const lang = await getLocale();
    const {data: appSettings} = await apiService.get<{data: AppSettingsType}>(API_ROUTES_PROVIDER.settings, {
        lang
    })

    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'} alignItems={'center'}>
                <Flex gap={[5, 5, 40]} direction={['column', 'column', 'row']}>
                    <Box>
                        <Image src={'/mobile.png'} width={400} height={470} alt="" />
                    </Box> 

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={['center', 'center', 'initial']}>
                        <SectionTitle title={appSettings.application.title} divider={false}  />
                        <Text textAlign={['center', 'center', 'initial']} marginY={5} color={'nutral.n200'} fontWeight={'bold'}>{
                            appSettings.application.description
                        }</Text>
                        <Flex gap={10}>
                            <Link href={appSettings.application.google_play_link} target="_blank">
                                <Image src={'/google-play.png'} width={150} height={50} alt="" />
                            </Link>
                            <Link href={appSettings.application.app_store_link} target="_blank">
                                <Image src={'/app-store.png'} width={150} height={50} alt="" />
                            </Link>

                        </Flex>
                    </Box>
                </Flex>


            </Container>
        </Box>
    )
}
