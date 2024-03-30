'use client';
import { showCountryBackButton } from "@/atoms/countryBackButton-atom";
import { mapActionsAtom } from "@/atoms/map-actions-atom";
import useTranslationClient from "@/hooks/useTranslationClient";
import { Box, Button, Text } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRecoilState } from "recoil";

export default function BackButton() {
    const [showBackButton, setShowBackButton] = useRecoilState(showCountryBackButton);
    const [mapActions, setMapActions] = useRecoilState(mapActionsAtom);
    const router = useRouter();
    const local = useLocale();
    const { t } = useTranslationClient();
    const commonTranslation = t('common');

    return (
        <>
            {showBackButton && (
                <Box>
                    <Button as={Link} href={`/${local}/map`} colorScheme="primary" variant="solid" bg={'rgba(255, 255, 255, .1)'} border={'1px solid white'} fontWeight={'bold'} color={"white"}
                        onClick={() => {
                            setMapActions({ ...mapActions, selectedCity: null, selectedProject: null });
                            router.push(`/${local}/map`)
                        }}>
                        <Text as={'span'} mx={2} fontSize={'2xl'}>
                            <IoArrowBackSharp />
                        </Text>
                        {commonTranslation['backToCountry']}
                    </Button>
                </Box>
            )}

        </>
    )
}
