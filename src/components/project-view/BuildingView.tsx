'use client';

import { useParams, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";

import { Box } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";
import Loading from "@/app/[locale]/project-view/loading";




export default function BuildingView({ params }: { params: { [key: string]: string } }) {
    const router = useRouter();
    console.log("params", params);
    

    return (
        <Box>

            <ReactSVG src="/project/02-Building-View.svg"
                beforeInjection={(svg) => {
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
                            router.push(`/${params.locale}/project-view/${params.projectID}/${params.buildingID}/${polygon.id}`);
                        });
                    });
                }}
                loading={() => <Loading />}
            />


        </Box>
    )
}
