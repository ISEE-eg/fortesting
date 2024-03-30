
import dynamic from "next/dynamic"
import Loading from "../../loading";
import { apiService } from "@/data/api.service";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { CityType, LandmarkCategoryType, LandmarkType } from "@/data/models/types";
import { getLocale } from "next-intl/server";


const CityInteractiveMap = dynamic(() => import('@/components/map/CityInteractiveMap'), {
  loading: () => <Loading />,
  ssr: false
})

export default async function Page({ params }: { params: { [key: string]: string } }) {
  const lang = await getLocale();
  const { data: city } = await apiService.get<{ data: CityType }>(`${API_ROUTES_PROVIDER.cities}/${params.cityID}`, {
    lang
});

const { data: landmarksCategories } = await apiService.get<{ data: LandmarkCategoryType[] }>(`${API_ROUTES_PROVIDER.landmarks}/${API_ROUTES_PROVIDER.categories}`, {
  lang
});

const { data: landmarks } = await apiService.get<{ data: LandmarkType[] }>(API_ROUTES_PROVIDER.landmarks, {
  'filter[city_id]': city.id,
  lang
});
  
  return (

    <CityInteractiveMap city={city} landmarksCategories={landmarksCategories} landmarks={landmarks} />
  )
}

