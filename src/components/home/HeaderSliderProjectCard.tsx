import { Card, CardBody, Stack, Heading, Divider, CardFooter, Image, Text, Flex } from "@chakra-ui/react";
import { RiCalendar2Line } from "react-icons/ri";
import { SlideType } from "./HeaderSlider";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ProjectsType } from "@/data/models/types";

export default function HeaderSliderProjectCard({ project }: { project: ProjectsType }) {
    const local = useLocale();
    return (
        <Card maxW='sm' marginX={['auto', 'auto', 2]} marginTop={10} marginBottom={20}>
            <Link href={`/${local}/main/projects/${project.id}`}>
                <CardBody padding={3}>
                    <Image
                        src={project.image}
                        alt={project.name}
                        borderRadius='lg'
                        width='100%'
                        objectFit={'cover'}
                        height={200}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={'textColor'}>
                            {project.name}
                        </Heading>
                        <Text color={'textColor'} p={4} display={'flex'} fontSize={'lg'} alignItems={'center'} >
                            <Text as={'span'} mr={3}>
                                <SlLocationPin />
                            </Text>
                            {project.city?.name}
                        </Text>
                    </Stack>
                </CardBody>
            </Link>
        </Card>
    )
}
