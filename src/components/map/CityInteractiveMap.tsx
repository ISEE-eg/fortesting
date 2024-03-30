/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ImageOverlay, MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import L, { LatLng, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Box, Divider, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdStars } from "react-icons/md";

import './InteractiveMap.css'
import { useRouter, useSearchParams } from "next/navigation";
import { landMarkIcon, projectIcon } from "./MapIcons";
import { CityType, LandmarkCategoryType, LandmarkType, ProjectsType } from "@/data/models/types";
import { apiService } from "@/data/api.service";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { useLocale } from "next-intl";
import { showCountryBackButton } from "@/atoms/countryBackButton-atom";
import { useRecoilState } from "recoil";
import { mapActionsAtom } from "@/atoms/map-actions-atom";
import useTranslationClient from "@/hooks/useTranslationClient";


const CITY_ZOOM = 11.4;
const MAP_CENTER: LatLngExpression = [24.774265, 46.738586];

type PropsType = {
    city: string | null;
    currentBounds: LatLngBoundsExpression;
    waypoints: { lat: number; lng: number }[];
    setDistance: Dispatch<SetStateAction<number>>;
    setDuration: Dispatch<SetStateAction<number>>
}


function MapComponent({ city, currentBounds, waypoints, setDistance, setDuration }: PropsType) {
    const map = useMap();
    const routingControlRef = useRef<L.Routing.Control | null>(null);


    const mapEvent = useMapEvents({
        click: (e) => {
            console.log(e.latlng);
        },
        dragend: (e) => {
            // e.target.setMaxBounds(currentBounds);
        }
    });

    useEffect(() => {
        if (map) {
            map.dragging.enable();
            // map.setMaxBounds(currentBounds)
            // map.fitBounds(currentBounds)
            if (city) {
                map.setZoom(CITY_ZOOM)
                map.setMinZoom(CITY_ZOOM)
                map.setMaxZoom(CITY_ZOOM)
            }
        }
    }, [map, city]);

    useEffect(() => {
        routingControlRef?.current?.remove();
        routingControlRef.current = null;


        // if (routingControlRef.current) {
        // map.removeControl(routingControlRef.current);
        //     routingControlRef.current = null;
        // }

        if (waypoints.length === 2 && waypoints[0] && waypoints[1]) {
            const plan = new L.Routing.Plan(waypoints.map(wp => L.latLng(wp.lat, wp.lng)), {
                createMarker: (i, wp, nWps) => {
                    return false;
                },
                routeWhileDragging: false,
            });

            routingControlRef.current = L.Routing.control({
                geocoder: false,
                fitSelectedRoutes: true,
                showAlternatives: false,
                lineOptions: {
                    styles: [{ color: 'blue', opacity: .7, weight: 4 }],
                    extendToWaypoints: true,
                    missingRouteTolerance: 100
                },
                plan,
                show: false, // Hide road panel
            })
                .on('routesfound', (e) => {
                    const routes = e.routes;
                    const route = routes[0];
                    const summary = route.summary;
                    setDistance(summary.totalDistance / 1000);
                    setDuration(summary.totalTime / 60);

                })
                .addTo(map);
        }
    }, [map, waypoints]);

    return null;
}


export default function CityInteractiveMap({ city, landmarksCategories, landmarks }: { city: CityType, landmarksCategories: LandmarkCategoryType[], landmarks: LandmarkType[] }) {
    const [, setShowBackButton] = useRecoilState(showCountryBackButton);
    const router = useRouter();
    const queryParams = useSearchParams();
    const projectID = queryParams.get('project')
    const { t } = useTranslationClient();
    const commonT = t('common');

    const lang = useLocale();
    const [projects, setProjects] = useState<ProjectsType[]>([])
    const [landMarksWithCategories, setLandMarksWithCategories] = useState<LandmarkType[]>([])
    const [selectedLandMark, setSelectedLandMark] = useState<LandmarkType>()
    const [waypoint1, setWayPoint1] = useState<{ lat: number, lng: number }>();
    const [waypoint2, setWayPoint2] = useState<{ lat: number, lng: number }>();
    const [distance, setDistance] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [mapActions, setMapActions] = useRecoilState(mapActionsAtom);

    const mapRef = useRef<any>(null);


    const mapImageUrl = city.map_image.image;

    const mapImageBounds: LatLngBoundsExpression = [
        // [24.2407, 46.0792],
        // [25.4066, 47.2597]
        [city.map_image.bottom_left_location.coordinates[0], city.map_image.bottom_left_location.coordinates[1]],
        [city.map_image.top_right_location.coordinates[0], city.map_image.top_right_location.coordinates[1]],
    ];

    const getProjectByCity = async (id: string) => {
        const { data: cities } = await apiService.get<{ data: ProjectsType[] }>(API_ROUTES_PROVIDER.projects, {
            'filter[city_id]': id,
            lang
        });
        return cities
    }

    const buildLandmarks = (landmarks: LandmarkType[]) => {

        return landmarks.map((landmark) => {
            return {
                ...landmark,
                showOnMap: true
            }
        })

    }

    const showLandmarks = (categoryId: number) => {
        const updatedLandmarks = landMarksWithCategories.map((landmark) => {

            if (landmark.landmark_category_id === categoryId) {
                if (landmark?.showOnMap && selectedLandMark?.landmark_category_id === categoryId) {
                    setWayPoint2(undefined);
                    setDistance(0);
                    setDuration(0);
                }
                return {
                    ...landmark,
                    showOnMap: !landmark?.showOnMap
                }
            }

            return landmark
        })
        setLandMarksWithCategories(updatedLandmarks)
    }

    const showAllProjects = () => {
        const updatedProjects = projects.map((project) => {
            return {
                ...project,
                showOnMap: true
            }
        })
        setProjects(updatedProjects);
    }

    const showOnlyThisProject = (projectId: string, projects: ProjectsType[]) => {

        const updatedProjects = projects.map((project) => {
            if (project.id == projectId) {
                return {
                    ...project,
                    showOnMap: true
                }
            }
            return {
                ...project,
                showOnMap: false
            }
        })
        return updatedProjects;
        // setProjects(updatedProjects);


    }




    useEffect(() => {

        if (mapActions.renderAllProjects) {
            showAllProjects();
        }
    }, [])



    useEffect(() => {
        const landMarksWithCategories = buildLandmarks(landmarks);
        setLandMarksWithCategories(landMarksWithCategories);
    }, [landmarks]);

    useEffect(() => {
        setShowBackButton(true);
        setMapActions((prev: any) => ({ ...prev, selectedCity: city }));

        getProjectByCity(city.id).then((projects) => {

            let mappedProjects;
            mappedProjects = projects.map((project) => {
                return {
                    ...project,
                    showOnMap: true
                }
            })

            if (projectID) {
                const project = mappedProjects.find(project => project.id == projectID);
                mappedProjects = showOnlyThisProject(project?.id!, mappedProjects);
                setMapActions((prev: any) => ({ ...prev, renderAllProjects: false, selectedProject: project }));
                if (project?.location.coordinates) {
                    setWayPoint1({ lat: project?.location.coordinates[0], lng: project?.location.coordinates[1] });
                }
            }

            setProjects(mappedProjects);
        })
    }, [projectID]);

    useEffect(() => {
        if (!projectID) {
            setWayPoint1(undefined);
            setWayPoint2(undefined);
            setDistance(0);
            setDuration(0);
        }
    }, [projectID]);


    return (
        <>

            <Box position={'absolute'} right={5} top={'100px'} zIndex={99990} width={'250px'}>
                <Box bg={'white'} p={3} borderRadius={8}>
                    <Heading as={'h3'} fontWeight={'light'} size={'sm'}>
                        {
                            commonT['mainLandmarks']
                        }
                    </Heading>
                    <Divider marginY={3} />

                    <List spacing={1}>
                        {/* <ListItem display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} cursor={'pointer'} color={"#6E6E6E"} fontWeight={'light'} paddingY={1} borderRadius={5} transition={'all .3s'} _hover={{ bg: 'gray.100', paddingX: 2 }}>
                            عرض الكل
                        </ListItem> */}
                        {
                            landmarksCategories.map((item, index) => (
                                <ListItem onClick={() => {
                                    showLandmarks(item.id);

                                }} key={index} display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} color={"#6E6E6E"} fontWeight={'light'} paddingY={1} borderRadius={5} transition={'all .3s'} _hover={{ bg: 'gray.100', paddingX: 2 }}>
                                    {/* <ListIcon as={item.icon} color={'mainColor'} fontSize={'lg'} /> */}

                                    {
                                        item.icon ? <Image src={item.icon} width={7} height={7} alt="" /> :
                                            <ListIcon as={MdStars} color={'mainColor'} width={7} height={7} fontSize={'lg'} />
                                    }
                                    {item.name}
                                </ListItem>

                            ))
                        }
                    </List>

                </Box>
            </Box>

            {
                (distance > 0 && duration > 0) ? <Box position={'absolute'} right={5} bottom={'20px'} zIndex={99990} width={'250px'}>
                    <Box bg={'white'} p={3} borderRadius={8}>
                        <Heading as={'h3'} fontWeight={'light'} size={'sm'}>المسافة والوقت</Heading>
                        <Divider marginY={3} />
                        <Box display={'flex'} gap={2} alignItems={'center'}>
                            <Text fontSize={'lg'} fontWeight={'bold'} color={'mainColor'}>{distance.toFixed(2)} كم</Text>
                            <Text fontSize={'lg'} fontWeight={'bold'} color={'mainColor'}>{duration.toFixed(2)} دقيقة</Text>
                        </Box>
                    </Box>
                </Box> : null
            }

            {
                // <Box position={'absolute'}  right={5} bottom={'40%'} zIndex={99990} width={'250px'}>
                //     <Box bg={'white'} p={3} borderRadius={8}>
                //         <Heading as={'h3'} fontWeight={'light'} size={'sm'}>المسافة والوقت</Heading>
                //         <Divider marginY={3} />
                //         <Box display={'flex'} gap={2} alignItems={'center'}>
                //             <Text fontSize={'lg'} fontWeight={'bold'} color={'mainColor'}>{distance.toFixed(2)} كم</Text>
                //             <Text fontSize={'lg'} fontWeight={'bold'} color={'mainColor'}>{duration.toFixed(2)} دقيقة</Text>
                //         </Box>
                //     </Box>
                // </Box>
            }

            <MapContainer
                ref={mapRef}
                style={{
                    height: "100vh",
                    width: "100vw"
                }}
                center={city.label_location.coordinates as LatLngExpression}
                zoom={CITY_ZOOM}
                minZoom={CITY_ZOOM}
                maxZoom={CITY_ZOOM}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
                touchZoom={false}
                boxZoom={false}
            >


                {/* <TileLayer

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}

                <TileLayer

                    url="https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=Ssi0Jq22W5zSyJswP46p"
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
                />


                {



                    landMarksWithCategories.map((landmark) => (
                        landmark.showOnMap && <Marker key={landmark.id} position={new L.LatLng(landmark.location.coordinates[0], landmark.location.coordinates[1])} icon={landMarkIcon(landmark.category?.icon)} eventHandlers={{
                            click: () => {
                                setSelectedLandMark(landmark);
                                if (waypoint1) {
                                    setWayPoint2({ lat: landmark.location.coordinates[0], lng: landmark.location.coordinates[1] })
                                }
                                // selectedLandmark(landmark)
                            }
                        }}></Marker>
                    ))



                }


                {
                    projects.map((project) => (
                        project.showOnMap &&
                        <Marker key={project.id} position={new LatLng(project.location.coordinates[0], project.location.coordinates[1])} icon={projectIcon(project.name)} eventHandlers={{
                            click: () => {
                                if(mapActions.selectedProject && mapActions.selectedProject.id == project.id){
                                    window.open(`/${lang}/project-view/${project.id}`, '_blank')
                                    return;
                                }
                                router.push(`?project=${project.id}`)
                                showOnlyThisProject(project.id, projects);
                                setMapActions({ ...mapActions, selectedProject: project, renderAllProjects: false });
                                setWayPoint1({ lat: project.location.coordinates[0], lng: project.location.coordinates[1] })
                            }
                        }}></Marker>
                    ))
                }





                {/* <ImageOverlay url={mapImageUrl} bounds={mapImageBounds} opacity={1} /> */}



                <MapComponent city={city.id} currentBounds={mapImageBounds} waypoints={[waypoint1!, waypoint2!]} setDistance={setDistance} setDuration={setDuration} />
            </MapContainer>
        </>
    )
}
