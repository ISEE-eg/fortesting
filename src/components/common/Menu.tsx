import { Flex, Link } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import NextLink from 'next/link';

export const getMenuLinks = (local: string) => {
    return [
        {
            title: 'projects',
            path: `/${local}/main/projects`
        },
        {
            title: 'interactiveMap',
            path: `/${local}/map`
        },
        {
            title: 'about',
            path: `/${local}/main/about`
        },
        {
            title: 'news',
            path: `/${local}/main/news`
        },
        {
            title: 'auctions',
            path: `/${local}/main/auctions`
        },
        {
            title: 'contractingCompany',
            path: `/${local}/main/contracting-company`
        },
    ]
}


export default function Menu() {
    const t = useTranslations('navbar');
    const local = useLocale();

    const menuItems = getMenuLinks(local);

    const menuLinks = menuItems.map((item, index) => (
        <Link as={NextLink} target={item.title === 'interactiveMap' ? '_blank' : '_self'} _hover={{ textDecoration: 'none' }} color={"nutral.n200"} fontWeight={400} href={item.path} key={index}>{t(item.title)}</Link>
    ))
    return (
        <Flex gap={8} align={'center'}>
            {menuLinks}
        </Flex>
    )
}
