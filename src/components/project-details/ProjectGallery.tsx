import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import ProjectImagesSlider from './projectImagesSlider'
import { useLocale, useTranslations } from 'next-intl'
import { ProjectsType } from '@/data/models/types'

export default function ProjectGallery({project}: {project: ProjectsType}) {
    const local = useLocale();
    const t = useTranslations('projectDetails.projectGallery');
    return (
        <Box py={32}>
            <Container maxW={'mainContainerSize'}>
                <Box width={'50%'}>
                    <SectionTitle title={t('title')} />
                </Box>
                <ProjectImagesSlider lang={local} slides={project.gallery} />
            </Container>
        </Box>
    )
}
