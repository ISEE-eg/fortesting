import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ProjectsType } from '@/data/models/types';


export default function ProjectView({project}: {project: ProjectsType}) {
    const tCommon = useTranslations('common')
    const local = useLocale();
    return (
        <Box bgImage={'/project-view.png'} height={'800px'} bgSize={'cover'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={'overlayColor'}>
                <Flex justifyContent={'center'} alignItems={'center'} h={'100%'}>
                    <Button as={Link} href={`${local}/map/${project.id}`} _hover={{}} borderRadius={'full'} bgColor={'white'} paddingY={6} color={'primary.p200'}>
                        {tCommon('showInteractiveMap')}
                        <Text as={'span'} mx={2}>
                            {
                                local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                            }
                        </Text>
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
