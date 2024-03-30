import { Flex, Heading, Text } from '@chakra-ui/react'
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { LiaHomeSolid } from 'react-icons/lia';
import { SlLocationPin } from 'react-icons/sl';

type ProjectCardProps = {
    title: string;
    units: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    const { title, units } = props;
    const commonTranslation = useTranslations('common');
    const local = useLocale();
    return (
        <Flex flexDirection={'column'} justifyContent={'end'} position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} borderRadius={10} bgColor={'overlayColor'}>

            <Heading color={'white'} fontSize={'2xl'} p={4}>{title}</Heading>
            <Text color={'white'} p={4} display={'flex'} fontSize={'lg'} alignItems={'center'} >
                <Text as={'span'} mr={3}>
                    <LiaHomeSolid />
                </Text>
                {units}
                {' '}
                {commonTranslation('unit')}
            </Text>

        </Flex>
    )
}
