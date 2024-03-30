import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { BsBuildings } from "react-icons/bs";

type AchievementCardProps = {
    title: string;
    stats: string;
}

export default function AchievementCard(props: AchievementCardProps) {
    const { title, stats } = props;
    return (
        
        <Box p={5} borderRadius={10} borderWidth={1} bgColor={'white'} borderColor={'#EBD9B0'} color={'primary.p300'}>
            <Flex direction={'column'} gap={3} align={'center'}>
                <Text padding={5} fontSize={'2xl'} borderRadius={'full'} bgColor={'#E6E6E6'}>
                    <BsBuildings />
                </Text>
                <Text fontWeight={'bold'}>
                    {stats}
                </Text>
                <Text>
                    {title}
                </Text>
            </Flex>

        </Box>
    )
}
