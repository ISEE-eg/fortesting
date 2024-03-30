import dynamic from "next/dynamic"
import Loading from "./loading"
import { apiService } from "@/data/api.service"
import { API_ROUTES_PROVIDER } from "@/data/api-provider"
import { CountryType } from "@/data/models/types"
import { getLocale } from "next-intl/server"

const InteractiveMap = dynamic(() => import('@/components/map/InteractiveMap'), {
  loading: () => <Loading />,
  ssr: false
})

export default async function page() {
  const lang = await getLocale();
  const { data: countries } = await apiService.get<{ data: CountryType[] }>(API_ROUTES_PROVIDER.countries, {
    lang
  });

  console.log("countries", countries);
  
  return (

    <InteractiveMap country={countries?.[0]} />
  )
}
