'use client'

import { mapActionsAtom } from "@/atoms/map-actions-atom";
import { Flex, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react"
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

export default function MapActions() {
    const [mapActions, setMapActions] = useRecoilState(mapActionsAtom);
    const router = useRouter();
    const local = useLocale()
    return (
        <Flex gap={8}>



            {
                // mapActions.selectedCity && <Tag
                //     size={'md'}
                //     borderRadius='full'
                //     variant='solid'
                //     bg={'white'}
                //     color={'mainColor'}
                //     px={5}
                //     py={2}
                // >
                //     <TagLabel>{mapActions.selectedCity?.name}</TagLabel>
                //     <TagCloseButton color={'black'} fontWeight={'bold'} onClick={() => {
                //         setMapActions({ ...mapActions, selectedCity: null });
                //         router.push(`/${local}/map/`);
                //     }} />
                // </Tag>
            }
            {
                mapActions.selectedProject && <Tag
                    size={'md'}
                    borderRadius='full'
                    variant='solid'
                    bg={'white'}
                    color={'mainColor'}
                    px={5}
                    py={2}
                >
                    <TagLabel>{mapActions.selectedProject?.name}</TagLabel>
                    <TagCloseButton color={'black'} fontWeight={'bold'} onClick={() => {
                        setMapActions({ ...mapActions, selectedProject: null, renderAllProjects: true});
                        router.push(`/${local}/map/city/${mapActions.selectedCity?.id}`);
                    }} />
                </Tag>
            }
        </Flex>
    )
}
