import { Flex, Divider, Heading } from '@chakra-ui/react'

export default function SectionTitle({ title, divider = true }: { title: string, divider?: boolean }) {
    
    
    return (
        <Flex alignItems={'center'} gap={4} mb={8}>
            {divider && <Divider width={10} borderColor={'primary.p200'} borderWidth={'thin'} />}
            <Heading color={'primary.p200'} fontSize={'2xl'}>{title}</Heading>
        </Flex>
    )
}
