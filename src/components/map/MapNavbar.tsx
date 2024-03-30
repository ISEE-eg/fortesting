
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import ProjectsDrawer from "./ProjectsDrawer";
import { apiService } from "@/data/api.service";
import { CityType, CountryType, ProjectsType } from "@/data/models/types";
import CitiesMenu from "./CitiesMenu";
import { BiShare } from "react-icons/bi";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import BackButton from "./BackButton";
import { usePathname } from "next/navigation";
import MapActions from "./MapActions";




export default async function MapNavbar() {
    const t = await getTranslations('common');
    const local = await getLocale();
    
    // const { data: countries } = await apiService.get<{ data: CountryType[] }>(API_ROUTES_PROVIDER.countries, {
    //     lang: local
    // });


    const { data: cities } = await apiService.get<{ data: CityType[] }>(API_ROUTES_PROVIDER.cities, {
        'filter[country_id]': 1,
        lang: local
    });

    return (
        <Box bgColor={'overlayColor'} padding={5} paddingX={24} position={'fixed'} top={0} left={0} right={0} zIndex={999999} width={'100%'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Flex gap={12}>
                    <ProjectsDrawer />
                    <CitiesMenu cities={cities} />
                </Flex>

                <Flex>
                    <MapActions />
                </Flex>

                <Flex gap={3}>
                    <Button as={Link} href={`/${local}/main`} colorScheme="primary" variant="solid" bg={'rgba(255, 255, 255, .1)'} border={'1px solid white'} fontWeight={'bold'} color={"white"}>
                        <Text as={'span'} mx={2} fontSize={'2xl'}>
                            <BiShare />
                        </Text>
                        {t('backToSite')}
                    </Button>
                    <BackButton />

                </Flex>





            </Flex>


        </Box>
    )
}
