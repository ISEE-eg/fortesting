'use client';

import { useParams, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";

import { Box } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";
import { useLocale } from "next-intl";
import Loading from "@/app/[locale]/project-view/loading";




export default function CompoundView({ params }: { params: { [key: string]: string } }) {

    console.log("params", params);

    const router = useRouter();

    return (
        <Box>

            <ReactSVG src="/project/01-Compound-View.svg"
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
                            router.push(`/${params.locale}/project-view/${params.projectID}/${polygon.id}`);
                        });
                    });
                }}
                loading={() => <Loading />}
            />


        </Box>
    )
}
