import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';




export default function Logo(props: { [key: string]: any; } ) {
  return (
    <Box style={{...props}} >
        <Link href={'/'}>
            <Image src="/logo.png" alt="Logo" width={73} height={73} />
        </Link>
    </Box>
  )
}
