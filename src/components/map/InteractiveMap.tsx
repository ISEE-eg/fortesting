'use client';

import { ImageOverlay, MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import L, { LatLng, LatLngBounds, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "@maptiler/leaflet-maptilersdk";

import { useEffect, useRef, useState } from "react";
import './InteractiveMap.css'
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { stateIcon } from "./MapIcons";
import { CityType, CountryType } from "@/data/models/types";
import { apiService } from "@/data/api.service";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { showCountryBackButton } from "@/atoms/countryBackButton-atom";
import { useRecoilState } from "recoil";
import { mapActionsAtom } from "@/atoms/map-actions-atom";

const STATE_ZOOM = 6.3;
const MAP_CENTER: LatLngExpression = [24.774265, 46.738586];

function MapComponent({ currentBounds }: { currentBounds: LatLngBoundsExpression }) {
    const map = useMap();
    

    const mapEvent = useMapEvents({
        click: (e) => {
            console.log(e.latlng);
        },
        dragend: (e) => {
            e.target.setMaxBounds(currentBounds);
        }
    });

    useEffect(() => {
        if (map) {
            map.dragging.enable();
            map.setZoom(STATE_ZOOM)
            map.setMinZoom(STATE_ZOOM)
            map.setMaxZoom(STATE_ZOOM)
            map.setMaxBounds(currentBounds)
            map.fitBounds(currentBounds)
        }
    }, [map]);

    return null
}


export default function InteractiveMap({ country }: { country: CountryType }) {
    const [, setShowBackButton] = useRecoilState(showCountryBackButton);
    const [mapActions, setMapActions] = useRecoilState(mapActionsAtom);
    const local = useLocale();
    const router = useRouter();
    const mapRef = useRef<any>(null);
    const [cities, setCities] = useState<CityType[]>([]);
    ;

    const saudiImageUrl = country?.map_image.image;

    const saudiImageBounds: LatLngBoundsExpression = [
        [country.map_image.bottom_left_location.coordinates[0], country.map_image.bottom_left_location.coordinates[1]], // BottomLeft
        [country.map_image.top_right_location.coordinates[0], country.map_image.top_right_location.coordinates[1]] // TopRight
    ];
    // console.log(saudiImageBounds);


    const getCities = async (id: string) => {
        const { data: cities } = await apiService.get<{ data: CityType[] }>(API_ROUTES_PROVIDER.cities, {
            'filter[country_id]': id,
            lang: local
        });
        return cities
    }

    useEffect(() => {
        setShowBackButton(false);
        getCities(country.id).then((cities) => {
            setCities(cities);
        })
    }, [])




    return (
        <>

            <MapContainer
                ref={mapRef}
                style={{
                    height: "100vh",
                    width: "100vw"
                }}
                center={MAP_CENTER}
                zoom={STATE_ZOOM}
                minZoom={STATE_ZOOM}
                maxZoom={STATE_ZOOM}
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
                    cities.map((city) => (
                        <Marker key={city.id} position={new LatLng(city.label_location.coordinates[0], city.label_location.coordinates[1])} icon={stateIcon(city.name)} eventHandlers={{
                            click: () => {
                                setMapActions({ ...mapActions, selectedCity: city });
                                router.push(`/${local}/map/city/${city.id}`)
                            }
                        }}></Marker>
                    ))
                }


                {/* <ImageOverlay url={saudiImageUrl} bounds={saudiImageBounds} opacity={1} /> */}

                <MapComponent currentBounds={saudiImageBounds} />
            </MapContainer>
        </>
    )
}
