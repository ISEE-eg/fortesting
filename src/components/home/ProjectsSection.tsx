import { Box, Button, Center, Container, Divider, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import ProjectCard from "../common/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { ProjectsType } from "@/data/models/types";


export default function ProjectsSection({ projects }: { projects: ProjectsType[] }) {
    const t = useTranslations('home.projectsSection');
    const local = useLocale();
    const projectsChunk1 = projects.slice(0, 2);
    const projectsChunk2 = projects.slice(2, 4);
    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <SectionTitle title={t('title')} />
                <Text fontSize={'xl'} mb={8} color={'nutral.n200'} fontWeight={'bold'}> {t('description')} </Text>

                <Stack direction={'column'} gap={8} mb={8}>
                    <Flex gap={6} direction={['column', 'column', 'row']} justifyContent={'space-between'}>
                        {
                            projectsChunk1.map((project, index) => (
                                <Box key={index} flex={['initial', 'initial', (index + 1) % 2 === 0 ? 1 : 2]} bgImage={`${project.image}`} bgSize={'cover'} bgPos={'center'} height={'350px'} borderRadius={10} position={'relative'}>
                                    <Link href={`/${local}/main/projects/${project.id}`} >
                                        <ProjectCard title={`${project.name}`} units={`${project.count_units}`} />
                                    </Link>
                                </Box>
                            ))
                        }
                    </Flex>

                    <Flex gap={6} direction={['column', 'column', 'row']} justifyContent={'space-between'}>

                        {
                            projectsChunk2.map((project, index) => (
                                <Box key={index} flex={['initial', 'initial', (index + 1) % 2 === 0 ? 2 : 1]} bgImage={`${project.image}`} bgSize={'cover'} bgPos={'center'} height={'350px'} borderRadius={10} position={'relative'}>
                                    <Link href={`/${local}/main/projects/${project.id}`} >
                                        <ProjectCard title={`${project.name}`} units={`${project.count_units}`} />
                                    </Link>
                                </Box>
                            ))
                        }

                        {/* <Box flex={['initial', 'initial', 1]} bgImage={'/project.jpg'} bgSize={'cover'} height={'350px'} borderRadius={10} position={'relative'}>
                            <ProjectCard title={'مشروع 102 حي النرجس'} units={'12 وحدة سكنية'} />
                        </Box>
                        <Box flex={['initial', 'initial', 2]} bgImage={'/project.jpg'} bgSize={'cover'} height={'350px'} borderRadius={10} position={'relative'}>
                            <ProjectCard title={'مشروع 102 حي النرجس'} units={'12 وحدة سكنية'} />
                        </Box> */}
                    </Flex>

                </Stack>

                <Center>
                    <Button as={Link} href={`main/projects`} _hover={{}} borderRadius={'full'} bgColor={'primary.p200'} paddingY={6} color={'white'}>
                        {t('readMore')}
                        <Text as={'span'} mx={2}>
                            {
                                local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                            }

                        </Text>
                    </Button>
                </Center>
            </Container>
        </Box>
    )
}
