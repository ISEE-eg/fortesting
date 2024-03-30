import InternalHeader from "@/components/common/InternalHeader";
import { Box, Button, Container, Divider, Flex, FormControl, Heading, Input, List, ListItem, Text, Textarea } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { BiEnvelope } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";

export default function Page() {
    const t = useTranslations('contactUs');
    const tFooter = useTranslations('footer');
    return (
        <Box pt={[20, 20, 'initial']}>
            <InternalHeader
                bgImage={'/projects-page-header.png'}
                localizationKey="contactUs" />

            <Container maxW={'mainContainerSize'} mt={10}>
                <Flex direction={['column-reverse', 'column-reverse', 'row']} bgColor={'white'} gap={10} paddingLeft={[0, 0, 10]}  mb={10} rounded={'2xl'}>
                    <Box flexBasis={['100%', '100%','50%']} padding={[10, 10, 'initial']} mb={10} mt={10}>
                        <Flex direction={'column'} gap={10}>
                            <Heading color={'nutral.n300'} fontSize={'2xl'}>
                                {t('title')}
                            </Heading>
                            <form>
                                <Flex direction={'column'} gap={5}>
                                    <FormControl>
                                        <Input type='text' placeholder={t('form.name')} borderColor={'nutral.n50'} bgColor={'greyBg'} />
                                    </FormControl>

                                    <FormControl>
                                        <Input type='email' placeholder={t('form.email')} borderColor={'nutral.n50'} bgColor={'greyBg'} />
                                    </FormControl>

                                    <FormControl>
                                        <Input type='text' placeholder={t('form.phone')} borderColor={'nutral.n50'} bgColor={'greyBg'} />
                                    </FormControl>

                                    <FormControl>
                                        <Input type='text' placeholder={t('form.subject')} borderColor={'nutral.n50'} bgColor={'greyBg'} />
                                    </FormControl>

                                    <FormControl>
                                        <Textarea placeholder={t('form.message')} borderColor={'nutral.n50'} bgColor={'greyBg'} />
                                    </FormControl>

                                    <Button
                                        alignSelf={'flex-start'}
                                        borderRadius={'full'}
                                        bg={'primary.p300'}
                                        color={'white'}
                                        _hover={{}}
                                        fontSize={'lg'}
                                        size={'lg'}
                                        paddingX={10}

                                    >
                                        {t('form.send')}
                                    </Button>
                                </Flex>
                            </form>
                        </Flex>
                    </Box>
                    <Box bgImage={'/contact-us.png'} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'} rounded={'2xl'} paddingY={[10, 10, 'initial']} roundedBottomLeft={[10, 10, 0]} roundedTopLeft={[10, 10, 0]} flexBasis={'50%'}>
                        <Flex justifyContent={'center'} height={'100%'} alignItems={'center'}>
                            <Box bgColor={'overlayColorDark'} padding={5} rounded={'2xl'} flexBasis={'80%'}>
                                <Heading color={'white'} fontSize={'2xl'} mb={5}>
                                    {t('info.title')}
                                </Heading>
                                <Divider borderColor={'nutral.n100'} mb={5} />
                                <List spacing={3}>
                                    <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                        <Text bgColor={'white'} rounded={'full'} color={'secondary.s300'} p={3}>
                                            <FaPhoneVolume size={'18px'} />
                                        </Text>
                                        <Text>
                                            {tFooter('phone')}
                                        </Text>
                                    </ListItem>

                                    <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                        <Text bgColor={'white'} rounded={'full'} color={'secondary.s300'} p={3}>
                                            <BiEnvelope size={'18px'} />
                                        </Text>
                                        <Text>
                                            {tFooter('email')}
                                        </Text>
                                    </ListItem>

                                    <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                        <Text bgColor={'white'} rounded={'full'} color={'secondary.s300'} p={3}>
                                            <TbWorld size={'18px'} />
                                        </Text>
                                        <Text>
                                            {tFooter('website')}
                                        </Text>
                                    </ListItem>

                                    <ListItem display={'flex'} alignItems={'center'} color={'white'} gap={2}>
                                        <Text bgColor={'white'} rounded={'full'} color={'secondary.s300'} p={3}>
                                            <SlLocationPin size={'18px'} />
                                        </Text>
                                        <Text>
                                            {tFooter('address')}
                                        </Text>
                                    </ListItem>

                                </List>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>

            </Container>
        </Box>
    )
}
