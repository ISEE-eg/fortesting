import { ProjectsType } from "@/data/models/types";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { LiaHomeSolid } from "react-icons/lia";


export default function DetailsHeader({ project }: { project: ProjectsType }) {
    const tCommon = useTranslations('common')
    const local = useLocale();
    return (
        <Box bgImage={project.image} height={'100vh'} bgSize={'cover'} bgPos={'center'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={'overlayColor'}>
                <Container maxW={'mainContainerSize'}>
                    <Flex direction={'column'} mt={5} alignItems={'start'} justifyContent={'center'} height={'100vh'}>
                        <Heading color={'white'} fontSize={'3xl'} p={4}>
                            {project.name}
                        </Heading>
                        <Text color={'white'} p={4} display={'flex'} fontSize={'lg'} alignItems={'center'} >
                            <Text as={'span'} mr={3}>
                                <LiaHomeSolid />
                            </Text>
                            {project.count_units}
                            {' '}
                            {tCommon('unit')}
                        </Text>
                        <Button as={Link} href={`/${local}/map/${project.id}`} _hover={{}} borderRadius={'full'} bgColor={'white'} paddingY={6} color={'primary.p200'}>
                            {tCommon('showInteractiveMap')}
                            <Text as={'span'} mx={2}>
                                {
                                    local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                                }
                            </Text>
                        </Button>
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}
