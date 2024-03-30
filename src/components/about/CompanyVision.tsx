import { Box, Card, CardBody, CardHeader, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { PiTargetLight } from 'react-icons/pi'



function AboutCard({ highLightHeading = false, title, children, icon }: { highLightHeading?: boolean, title: string, children: ReactNode, icon: ReactNode }) {
    return (
        <Card>
            <CardHeader mb={0} pb={0} display={'flex'} justifyContent={'space-between'} pt={0} px={0}>
                <Text alignSelf={'start'} as={'span'} color={'primary.p300'} bgColor={'nutral.n50'} padding={5} borderTopLeftRadius={8} borderBottomRightRadius={10} fontSize={'4xl'} >
                    {icon}
                </Text>

                <Text alignSelf={'start'} as={'span'} color={'primary.p300'} opacity={.1} m={5} fontSize={'4xl'}>
                    {icon}
                </Text>

            </CardHeader>

            <CardBody>
                <Heading color={'nutral.n300'} fontSize={'2xl'} mb={2}>
                    {title}
                </Heading>
                <Text color={'nutral.n300'} fontWeight={'thin'}>
                    {children}
                </Text>
            </CardBody>
        </Card>
    )
}




export default function CompanyVision() {
    return (
        <Box py={32} bgImage={'/company-vision.png'} height={'40vh'} bgRepeat={'no-repeat'} bgSize={'cover'} position={'relative'}>
            <Box bg={'overlayColorGreen'} position={'absolute'} top={0} left={0} w={'100%'} h={'100%'}>
                <Container maxW={'mainContainerSize'} pt={'10vh'}>
                    <Flex justifyContent={'space-between'}>
                        <Box flexBasis={'48%'}>
                            <AboutCard title={'رؤيتنا'} icon={<PiTargetLight />}>
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                            </AboutCard>
                        </Box>

                        <Box flexBasis={'48%'}>

                            <AboutCard title={'رسالتنا'} highLightHeading={true} icon={<HiOutlineChatAlt2 />}>
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                            </AboutCard>
                        </Box>

                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}
