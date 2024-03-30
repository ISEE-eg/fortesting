import dynamic from 'next/dynamic';
import Loading from '../../loading';


const BuildingView = dynamic(() => import('@/components/project-view/BuildingView'), {
  loading: () => <Loading />,
  ssr: false
})

export default function BuildingViewPage({ params }: { params: { [key: string]: string } }) {
  console.log("params BuildingViewPage", params);

  

  
  return (
    <BuildingView params={params} />
  )
}
