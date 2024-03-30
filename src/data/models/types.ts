import { LatLngExpression } from "leaflet";

export type NewsType = {
    id: string;
    image: string;
    title: string;
    body: string;
    tags: {id: string, name: string}[];
    created_at: string;
    updated_at: string;
}

export type PartnerType = {
    id: string;
    image: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export type CityType = {
    id: string;
    name: string;
    label_location: LocationType;
    map_image: MapImageType;
}

export type LocationType = {
    type: string;
    coordinates: number[];
}
export type MapImageType = {
    image: string;
    top_right_location: LocationType;
    bottom_left_location: LocationType;
}

export type CountryType = {
    id: string;
    name: string;
    map_image: MapImageType;
}


export type ProjectsType = {
    id: string;
    name: string;
    description: string;
    slug: string;
    location: LocationType;
    count_units: number;
    land_area: number;
    land_flat: number;
    bedrooms: number;
    view_on_map: boolean;
    gallery: string[];
    city: CityType;
    image: string;
    created_at: string;
    updated_at: string;
    showOnMap?: boolean;
}

export type LandmarkCategoryType = {
    id: number;
    name: string;
    icon: string;
}

export type LandmarkType = {
    id: string;
    name: string;
    location: LocationType;
    landmark_category_id: number;
    city_id: number;
    category?: LandmarkCategoryType;
    showOnMap?: boolean;
}

export type FooterType = {
        description: string;
        site_name: string;
        address: string;
        email: string;
        mobile: string;
        website: string;
        copy_right: string;
    
}

export type socailType = {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    snapchat: string;
    tiktok: string;
    pinterest: string;
    whatsapp: string;
    telegram: string;
}

export type ApplicationType = {
        title: string;
        description: string;
        google_play_link: string;
        app_store_link: string; 
}

export type AppSettingsType = {
    footer: FooterType;
    social: socailType;
    application: ApplicationType;
}

