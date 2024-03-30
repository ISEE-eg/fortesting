import ActionProjectCard, { ActionProjectCardV2 } from "@/components/common/ActionProjectCard";
import InternalHeader from "@/components/common/InternalHeader";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { apiService } from "@/data/api.service";
import { ProjectsType } from "@/data/models/types";
import { Box, Button, Container, Flex, Select } from "@chakra-ui/react";
import { getLocale } from "next-intl/server";


import { ReactNode } from "react";

const FilterButton = ({ isActive, children }: { isActive: boolean, children: ReactNode }) => {
    return <Button
        bgColor={isActive ? "secondary.s300" : "white"}
        _hover={{}}
        _active={{}}
        color={isActive ? "white" : "secondary.s300"}
        border={isActive ? '' : '1px solid'}
        borderColor={isActive ? '' : 'secondary.s300'}
    >
        {children}
    </Button>
}
const FilterButtons = () => {
    return <Flex gap={3} >
        <FilterButton isActive={true}>
            All
        </FilterButton>
        <FilterButton isActive={false}>
            vilas
        </FilterButton>
    </Flex>
}

const SelectFilter = () => {
    return <Box>
        <Select _focusVisible={{}} placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    </Box>

}
const Filter = () => {
    return <Flex justifyContent={'space-between'} gap={5} direction={['column', 'column', 'row']}>
        <FilterButtons />
        <SelectFilter />
    </Flex>
}


export default async function ProjectsPage() {
    const lang = await getLocale();
    const { data: projects } = await apiService.get<{ data: ProjectsType[] }>(API_ROUTES_PROVIDER.projects, {
        lang
    });



    const allProjects = projects.map((project, index) => {
        return (
            <Box flexBasis={['100%']} key={index}>
                {/* <ActionProjectCard project={project} /> */}
                <ActionProjectCardV2 project={project} />
            </Box>
        )
    });

    return (
        <Box pt={[20, 20, 'initial']}>
            <InternalHeader
                bgImage={'/projects-page-header.png'}
                overlayColor={'overlayColorGreen'}
                localizationKey="projects" />

            {/* <Container maxW={'mainContainerSize'} mt={10}> */}
            {/* <Filter /> */}
            <Flex wrap={'wrap'}>
                {allProjects}
            </Flex>
            {/* </Container> */}
        </Box>
    )
}
