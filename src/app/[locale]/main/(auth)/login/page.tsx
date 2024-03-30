import { Box, Button, Container, Flex, FormControl, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Page() {
    return (
        <Box bgImage={'/login-bg.png'} height={'100vh'} bgSize={'cover'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'100%'} h={'100%'} bgColor={'overlayColor'}>
                <Container maxW={'mainContainerSize'}>
                    <Flex justifyContent={'center'} alignItems={'center'} height={'80vh'} pt={[35, 25, 'initial']}>
                        <Flex direction={'column'} gap={10} flexBasis={['100%', '85%', '55%']} bgColor={'overlayColor'} padding={10} rounded='lg' border={'1px solid'} borderColor={'nutral.n100'}>
                            <Heading textAlign={'center'} color={'white'}>
                                تسجيل الدخول
                            </Heading>
                            <form>
                                <Flex direction={'column'} gap={5}>
                                    <FormControl>
                                        <Input type='email' placeholder={'البريد الالكترونى'} bgColor={'white'} />
                                    </FormControl>


                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            // type={show ? 'text' : 'password'}
                                            placeholder="كلمة المرور"
                                            bgColor={'white'}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Text color={'nutral.n100'} fontSize={'2xl'} cursor={'pointer'}>
                                                <FaRegEyeSlash />
                                            </Text>
                                        </InputRightElement>
                                    </InputGroup>

                                    <Button
                                        borderRadius={'full'}
                                        bg={'primary.p300'}
                                        color={'white'}
                                        _hover={{}}
                                        fontSize={'lg'}
                                        size={'sm'}
                                        py={7}

                                    >
                                        تسجيل الدخول
                                    </Button>

                                    <Text fontWeight={'light'} color={'white'} textAlign={'center'}>
                                    هل نسيت كلمة المرور؟
                                    </Text>

                                </Flex>
                            </form>
                        </Flex>
                    </Flex>
                </Container>

            </Box>
        </Box>
    )
}
