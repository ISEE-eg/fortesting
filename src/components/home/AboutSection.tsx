import { Box, Button, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SectionTitle from "../common/SectionTitle";


export default function AboutSection() {
    const t = useTranslations('home.aboutSection');
    const local = useLocale();
    return (
        <Box bgColor={'white'} py={[20, 20, 32]}>
            <Container maxW={'mainContainerSize'}>
                <Flex gap={6} justifyContent={'space-between'} direction={['column', 'column', 'row']}>
                    <Box width={['100%', '100%', '50%']} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                        <SectionTitle title={t('title')} />
                        <Text fontSize={'xl'} mb={8} color={'nutral.n200'} fontWeight={'bold'}> {t('description')} </Text>
                        <Button alignSelf={'flex-start'} as={Link} href={`${local}/main/about`} _hover={{}} borderRadius={'full'} bgColor={'primary.p200'} paddingY={6} color={'white'}>
                            {t('readMore')}
                            <Text as={'span'} mx={2}>
                                {
                                    local === 'ar' ? <BsArrowLeft /> : <BsArrowRight />
                                }
                            </Text>
                        </Button>
                    </Box>
                    <Box>
                        <Image src={'/about.jpg'} alt={'about'} width={500} height={500} />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
