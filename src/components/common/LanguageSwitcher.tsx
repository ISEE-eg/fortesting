'use client';
import { Button } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";


export default function LanguageSwitcher({ text }: { text: string }) {
  const local = useLocale();
  const router = useRouter();
  return (
    <Button bg={'transparent'}
      _hover={{ background: 'transparent' }}
      textDecoration={'none'}
      color={"nutral.n200"}
      fontWeight={400}
      onClick={() => {
        router.replace(`/${local === 'en' ? 'ar' : 'en'}`)
      }}
    >
      {text}
    </Button>
  )
}
