import { Card, CardBody, Stack, Heading, Image, Text, Box, Container, Button } from "@chakra-ui/react";
import { SlideType } from "../home/HeaderSlider";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight, BsBuildings } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";
import { ProjectsType } from "@/data/models/types";

export default function ActionProjectCard({ project }: { project: ProjectsType }) {
    const local = useLocale();
    return (
        <Card maxW='sm' marginY={2} boxShadow={"0 1px 3px 0 rgba(111, 199, 183, 0.2),0 1px 2px 0 rgba(111, 199, 183, 0.1)"}>
            <CardBody padding={3} dir={local === 'ar' ? 'rtl' : 'ltr'}>
                <Image
                    src={project.image}
                    alt={project.name}
                    borderRadius='lg'
                    height={200}
                    width={370}

                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={'textColor'}>
                        {/* <Link href={`main/projects/${project.id}`}>{project.name}</Link> */}
                        <Link href={`#`}>{project.name}</Link>
                    </Heading>
                    <Text color={'textColor'} display={'flex'} fontSize={'lg'} alignItems={'center'} >
                        <Text as={'span'} color={"secondary.s100"} mr={3}>
                            <SlLocationPin />
                        </Text>
                        {project.city.name}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export function ActionProjectCardV2({ project }: { project: ProjectsType }) {
    const local = useLocale();
    const commonT = useTranslations('common');
    return (
        <Box bgImage={project.image} height={['80vh', '80vh']} bgPosition={'center'} bgSize={'cover'} bgPos={'center'} bgAttachment={'fixed'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={'overlayColor'}>
                <Container maxW={'mainContainerSize'} display={'flex'} flexDirection={'column'} h={'100%'} justifyContent={'center'} alignItems={'start'}>
                    <Heading color={'white'} fontSize={['2xl', '4xl']} p={4}>{project.name}</Heading>
                    <Text color={'white'} p={4} display={'flex'} fontSize={'xl'} alignItems={'center'} >
                        <Text as={'span'} mr={3}>
                            <SlLocationPin />
                        </Text>
                        {project.city?.name}
                    </Text>

                    <Text color={'white'} p={4} display={'flex'} fontSize={'xl'} alignItems={'center'} >
                        <Text as={'span'} mr={3}>
                            <BsBuildings />
                        </Text>
                        {project.count_units}
                        {' '}
                        {commonT('unit')}

                    </Text>

                    <Button as={Link} href={`/${local}/main/projects/${project.id}`} _hover={{}} borderRadius={'full'} bgColor={'white'} paddingY={6} color={'primary.p200'}>
                        {commonT('viewProject')}
                        <Text as={'span'} mx={2}>
                            {
                                local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                            }
                        </Text>
                    </Button>


                </Container>
            </Box>
        </Box>
    )
}
