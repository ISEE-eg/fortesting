'use client';



import { useRouter } from "next/navigation";

import { Box } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";
import Loading from "@/app/[locale]/project-view/loading";




export default function UnitView({ params }: { params: { [key: string]: string } }) {
    const router = useRouter();
    console.log("params", params);
    

    return (
        <Box>

            <ReactSVG src="/project/04-Unit-View.svg"
                beforeInjection={(svg) => {
                    svg.setAttribute('style', 'width: 100%;height: 100vh;background-color: tan')
                    const polygons = svg.querySelectorAll('.cls-1');
                    polygons.forEach(function (polygon) {
                        polygon.addEventListener('mouseenter', function () {
                            polygon.setAttribute('style', 'fill: #00a99d;opacity: 0.4')
                        });

                        polygon.addEventListener('mouseleave', function () {
                            polygon.setAttribute('style', 'fill: #00a99d;opacity: 0')
                        });

                        polygon.addEventListener('click', function () {
                            console.log("Clicked Polygon ID: " + polygon.id);
                            router.push(`/${params.locale}/project-view/${params.projectID}/${params.buildingID}/${params.floorID}/${polygon.id}/3d-view`);
                        });
                    });
                }}
                loading={() => <Loading />}
            />


        </Box>
    )
}
