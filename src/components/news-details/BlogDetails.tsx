import { NewsType } from "@/data/models/types";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

type BlogDetailsProps = {
    blog: NewsType;
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
    return (
        <Box py={16}>
            <Container maxW={'mainContainerSize'}>
                <VStack gap={6} justifyContent={'space-between'}>
                    <Box width={'100%'} height={500} position={'relative'}>
                        <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" style={{
                            borderRadius: '18px'
                        
                        }}  />
                    </Box>
                    <Box>
                        <Text color={'nutral.n300'} fontWeight={'light'} fontSize={'lg'} lineHeight={1.7}> {blog.body} </Text>
                    </Box>

                </VStack>
            </Container>
        </Box>
    )
}
