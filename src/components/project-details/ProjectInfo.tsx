import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { BsBuildings } from 'react-icons/bs';
import { ProjectsType } from '@/data/models/types';

const InfoCard = ({ title, count }: { title: string; count: number }) => {

    return (
        <Box p={5}>
            <Flex gap={3} alignItems={'center'}>
                <Text padding={5} fontSize={'2xl'} borderRadius={'full'} bgColor={'secondary.s50'} color={'primary.p300'}>
                    <BsBuildings />
                </Text>
                <Flex direction={'column'} gap={1}>
                    <Text >
                        {title}
                    </Text>
                    <Text fontWeight={'bold'}>
                        {count}
                    </Text>
                </Flex>
            </Flex>

        </Box>
    )
}

export default function ProjectInfo({ project }: { project: ProjectsType }) {
    const projectDetailsT = useTranslations('projectDetails.info');
    const t = useTranslations('common');
    console.log(project)

    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <Flex gap={6} justifyContent={'space-between'} direction={['column-reverse', 'column-reverse', 'row']}>


                    <Box width={['100%', '100%', '50%']}>
                        <SectionTitle title={projectDetailsT('title')} />
                        <Text color={'nutral.n300'} fontWeight={'bold'}> {project.description} </Text>

                        <Flex flexWrap={'wrap'} mt={5}>
                            <Box flexBasis={['100%', '48%']}>
                                <InfoCard title={t('unit')} count={project.count_units} />
                            </Box>
                            <Box flexBasis={['100%', '48%']}>
                                <InfoCard title={t('bedrooms')} count={project.bedrooms} />
                            </Box>
                            <Box flexBasis={['100%', '48%']}>
                                <InfoCard title={t('landArea')} count={project.land_area} />
                            </Box>
                            <Box flexBasis={['100%', '48%']}>
                                <InfoCard title={t('landFlat')} count={project.land_flat} />
                            </Box>
                        </Flex>

                    </Box>


                    <Box>
                        {
                            project.gallery.length > 0 ? <Image src={project.gallery[0]} alt={project.name} width={500} height={500} /> : <Image src={'/project-details.png'} alt={'about'} width={500} height={500} />

                        }

                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
