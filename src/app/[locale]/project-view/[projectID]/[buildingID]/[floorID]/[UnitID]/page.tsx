import dynamic from 'next/dynamic';
import Loading from '../../../../loading';


const UnitView = dynamic(() => import('@/components/project-view/UnitView'), {
  loading: () => <Loading />,
  ssr: false
})

export default function UnitViewPage({ params }: { params: { [key: string]: string } }) {
  console.log("params UnitViewPage", params);




  return (
    <UnitView params={params} />
  )
}
