import { useLocale } from "next-intl"
import { redirect } from "next/navigation"


export default function Page() {
    const local = useLocale();
    redirect(`${local}/main`)
  return (
    <></>
  )
}
