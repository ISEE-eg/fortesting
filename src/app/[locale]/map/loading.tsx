'use client';
import Spinner from "@/components/common/Spinner";
import { Box, Flex } from "@chakra-ui/react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Loading() {
    return (
        <>
            <Flex height={'90vh'} justifyContent={'center'} alignItems={'center'}>
                <ProgressBar height="4px" shallowRouting color="#3182CE" />
                <Spinner />
            </Flex>
        </>
    )
}
