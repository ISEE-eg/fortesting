import dynamic from 'next/dynamic';
import Loading from '../../../loading';


const FloorView = dynamic(() => import('@/components/project-view/FloorView'), {
  loading: () => <Loading />,
  ssr: false
})

export default function FloorViewPage({ params }: { params: { [key: string]: string } }) {
  console.log("params FloorViewPage", params);




  return (
    <FloorView params={params} />
  )
}
