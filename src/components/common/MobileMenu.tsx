'use client';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Link, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Logo from "./Logo";
import { getMenuLinks } from "./Menu";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import useTranslationClient from "@/hooks/useTranslationClient";
import ActionMenu from "./ActionMenu";
import ActionMenuMobile from "./ActionMenuMobile";

export const MobileMenu = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const local = useLocale();
    const { messages, t } = useTranslationClient();
    const navbarTranslation = t('navbar');


    const menuItems = getMenuLinks(local);

    const menuLinks = menuItems.map((item, index) => (
        <Link as={NextLink} _hover={{ textDecoration: 'none' }} onClick={() => onClose()} mx={5} color={"nutral.n200"} fontWeight={400} href={item.path} key={index}>
            {navbarTranslation[item.title]}
        </Link>
    ))




    return (
        <>

            <Text as={'span'} fontSize={'4xl'} color={'primary.p300'} fontWeight={'bold'} cursor={'pointer'} onClick={onOpen}>
                <HiBars3CenterLeft />
            </Text>
            <Drawer
                isOpen={isOpen}
                placement={local === 'ar' ? 'right' : 'left'}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Flex justifyContent={'center'} padding={5}>
                        <Box mx={5} onClick={() => onClose()}>
                            <Logo />
                        </Box>
                        <DrawerCloseButton />
                    </Flex>
                    <DrawerBody>
                        <VStack spacing={5} align="stretch">
                            {menuLinks}
                            <ActionMenuMobile />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
