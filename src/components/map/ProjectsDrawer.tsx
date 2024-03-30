'use client';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Slide, Text, useDisclosure } from "@chakra-ui/react";
import { HiMiniBars3 } from "react-icons/hi2";
import ActionProjectCard from "../common/ActionProjectCard";
import { useLocale } from "next-intl";
import useTranslationClient from "@/hooks/useTranslationClient";
import { useEffect, useState } from "react";
import { ProjectsType } from "@/data/models/types";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { useParams } from "next/navigation";
import { apiService } from "@/data/api.service";


export default function ProjectsDrawer() {
    const { cityID } = useParams();

    const local = useLocale();
    const { isOpen, onToggle } = useDisclosure();
    const { t } = useTranslationClient();
    const commonTranslation = t('common');
    const [projects, setProjects] = useState<ProjectsType[]>([]);

    const getProjects = async () => {
        const query: any = {
            lang: local
        }
        if (cityID) {
            query['filter[city_id]'] = cityID;
        }
        const { data: projects } = await apiService.get<{ data: ProjectsType[] }>(API_ROUTES_PROVIDER.projects, query);
        return projects;
    }

    useEffect(() => {
        getProjects().then((projects) => {
            setProjects(projects);
        })
    }, [cityID])
    return (
        <>
            <Button colorScheme="primary" variant="solid" bg={'white'} fontWeight={'bold'} color={"#1E1E1E"} onClick={onToggle}>
                <Text as={'span'} mx={2} fontSize={'lg'} color={'mainColor'}>
                    <HiMiniBars3 />
                </Text>
                {commonTranslation['projects']}
            </Button>

            <Slide direction={local === 'ar' ? 'right' : 'left'} in={isOpen} style={{ zIndex: 10, width: '20%', top: '80px', minHeight: 'calc(100vh - 80px)', overflowY: 'auto', direction: local === 'ar' ? 'ltr' : 'rtl' }}>
                <Box bgColor={'overlayColor'} borderTop={'1px solid white'} p={5}>
                    <Flex direction={'column'} gap={3}>

                        {
                            projects.length > 0 ? projects.map((project, index) => <ActionProjectCard project={project} key={index} />) : <Text color={'white'}>{commonTranslation['noProjects']}</Text>
                        }
                    </Flex>
                </Box>
            </Slide>

        </>


    )
}
