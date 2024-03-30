import dynamic from 'next/dynamic';
import Loading from '../../../../../loading';


const UnitView3d = dynamic(() => import('@/components/project-view/UnitView3d'), {
  loading: () => <Loading />,
  ssr: false
})

export default function UnitViewPage({ params }: { params: { [key: string]: string } }) {
  console.log("params UnitViewPage", params);




  return (
    <UnitView3d params={params} />
  )
}
