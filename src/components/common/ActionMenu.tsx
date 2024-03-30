import { Box, Button, Center, Divider, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { FaMagnifyingGlass, FaPhoneVolume } from 'react-icons/fa6';
import { BiUser } from "react-icons/bi";
import LanguageSwitcher from './LanguageSwitcher';
import NextLink from 'next/link';






export default function ActionMenu() {
    const t = useTranslations('navbar');
    const local = useLocale();
    return (
        <Flex gap={4} alignItems={'center'}>
            <LanguageSwitcher text={t('english')} />
            <Link textDecoration={'none'} color={"nutral.n300"} fontWeight={400}>
                <Text as={'span'} >
                    <FaMagnifyingGlass />
                </Text>
            </Link>
            <Center height="30px">
                <Divider orientation="vertical" borderColor={"#A4A4A4"} borderWidth={1} />
            </Center>
            <Button _hover={{
                background: 'transparent',
            }}
                as={NextLink}
                href={`/${local}/main/login`}
                color={'primary.p300'}
                bg={'transparent'}
                fontSize={'sm'}
                size={'sm'}
            >
                <Text as={'span'} mx={2}>
                    <BiUser fontSize={'20px'} />
                </Text>
                {t('login')}
            </Button>
            <Button
                borderRadius={'full'}
                bg={'primary.p300'}
                color={'white'}
                _hover={{}}
                fontSize={'sm'}
                size={'sm'}
                py={4}
                as={NextLink}
                href={`/${local}/main/contact-us`}

            >
                <Text as={'span'} mx={2}>
                    <FaPhoneVolume />
                </Text>
                {t('contact')}
            </Button>
        </Flex>
    )
}
