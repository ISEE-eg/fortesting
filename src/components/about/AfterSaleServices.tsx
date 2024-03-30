import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { FaRegBuilding } from "react-icons/fa6"
import { LiaHandshake } from "react-icons/lia"
import { BuildingIcon, HandsIcon, SettigsIcon, SketchIcon } from "./Icons"
import SectionTitle from "../common/SectionTitle"
import { useTranslations } from "next-intl"


export default function AfterSaleServices() {
    const t = useTranslations('about.afterSaleServices');
    const services = [
        {
            id: 1,
            title: "جوده البناء للمشاريع السابقة",
            icon: <BuildingIcon />,
        },
        {
            id: 2,
            title: "شراكات استراتجية ناجحة مع الجهات التمويلية",
            icon: <HandsIcon />,
        },

        {
            id: 3,
            title: "التصاميم الحديثة",
            icon: <SketchIcon />,
        },

        {
            id: 4,
            title: "العمل بنظام ODOO",
            icon: <SettigsIcon />,
        },

    ]
    const allServices = services.map((service, index) => (
        <Box key={service.id} flexBasis={['100%', '100%', '24%']} px={10} py={5} gap={3} borderRadius={5} border={'1px solid'} borderColor={'secondary.s50'}>
            <Flex direction={'column'} gap={5} alignItems={'center'} justifyContent={'center'}>

                <Text textAlign={'center'} bgColor={'greyBg'} p={5} rounded={'full'}>
                    {service.icon}
                </Text>

                <Heading as={'h3'} fontSize={'lg'} textAlign={'center'} color={'nutral.n300'}>
                    {service.title}
                </Heading>
            </Flex>

        </Box>
    ))
    return (
        <Box py={32} bgColor={'white'}>
            <Container maxW={'mainContainerSize'}>
                <Box>
                    <SectionTitle title={t('title')} />
                </Box>

                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>

                    {allServices}

                </Flex>

            </Container>
        </Box>
    )
}
