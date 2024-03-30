import { Box, Container, Flex, Hide, Show, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import Menu from "./Menu";
import ActionMenu from "./ActionMenu";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MobileMenu } from "./MobileMenu";
import { useTranslations } from "next-intl";
import useTranslationClient from "@/hooks/useTranslationClient";

export default function Navbar() {

  return (
    <Box bg={"white"} py={2} position={['fixed', 'fixed', 'initial', 'initial']} zIndex={['1000', '1000', 'initial', 'initial']} width={'100%'}>
      <Container maxW={'mainContainerSize'}>
        <Flex justifyContent={'space-between'}>
          <Flex gap={16}>
            <Logo />
            <Hide below='lg'>
              <Menu />
            </Hide>
          </Flex>
          <Flex alignItems={'center'}>
            <Hide below='lg'>
              <ActionMenu />
            </Hide>
            <Show below='lg'>
              <MobileMenu />
            </Show>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}