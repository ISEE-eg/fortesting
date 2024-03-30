import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'


export default function useTranslationClient() {
    const [tMessages, setTMessages] = useState()
    const local = useLocale();

    const getMessages = async (local: string) => {
        return await import(`../../messages/${local}.json`)
    }

    useEffect(() => {
        getMessages(local).then((res) => {
            setTMessages(res.default)
        })
    }, [local])


    return { messages: tMessages, t: (key:string): any => {
        return tMessages ? tMessages[key] : key;
    }}
}


