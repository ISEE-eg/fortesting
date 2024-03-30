import dynamic from 'next/dynamic';
import Loading from '../loading';


const CompoundView = dynamic(() => import('@/components/project-view/CompoundView'), {
  loading: () => <Loading />,
  ssr: false
})

export default function CompoundViewPage({ params }: { params: { [key: string]: string } }) {
  console.log("params", params);




  return (
    <CompoundView params={params} />
  )
}
