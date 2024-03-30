'use client';

import { useRouter } from "next/navigation";

import { Box } from "@chakra-ui/react";

import { Pannellum } from "pannellum-react";








export default function UnitView3d({ params }: { params: { [key: string]: string } }) {
    const router = useRouter();



    return (
        <Box>

            <Pannellum
                width="100%"
                height="100vh"
                image={'/project/unit-3d-view.jpg'}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                    console.log("panorama loaded");
                }}
            >
            </Pannellum>

        </Box>
    )
}
