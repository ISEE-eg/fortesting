'use client';

import { mapActionsAtom } from '@/atoms/map-actions-atom';
import { CityType } from '@/data/models/types'
import useTranslationClient from '@/hooks/useTranslationClient';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5'
import { useRecoilState } from 'recoil';


export default function CitiesMenu({ cities }: { cities: CityType[] }) {
    const { t } = useTranslationClient();
    const [mapActions, setMapActions] = useRecoilState(mapActionsAtom);
    // const [selectedCity, setSelectedCity] = useState<CityType>();
    const local = useLocale();
    const commonTranslation = t('common');
    const router = useRouter();
    const selectCity = (city: CityType) => {
        setMapActions({ ...mapActions, selectedCity: city });
        // setSelectedCity(city);
        router.push(`/${local}/map/city/${city.id}`)
    }



    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<IoChevronDownOutline style={{ color: "#CEA23F" }} />} bg={'white'} fontWeight={'bold'} color={"#1E1E1E"}>
                {
                    mapActions?.selectedCity ? mapActions?.selectedCity.name : commonTranslation['chooseCity']
                }

            </MenuButton>
            <MenuList zIndex={10000}>
                {
                    cities.map((city) => <MenuItem onClick={() => selectCity(city)} key={city.id} value={city.id}>{city.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}
