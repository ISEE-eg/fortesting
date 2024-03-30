'use client';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { NextIntlClientProvider } from 'next-intl';
import rtl from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';


const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
}

function RtlProvider({ children, locale }: { children: React.ReactNode, locale: string }) {
  const dir = locale == 'ar' ? 'rtl' : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache}>
    {children}
  </CacheProvider>
}

export function Providers({ children, locale }: { children: React.ReactNode, locale: string }) {


  return (
    <NextIntlClientProvider locale={locale}>
      <ChakraProvider theme={theme}>
        <RtlProvider locale={locale}>
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </RtlProvider>
      </ChakraProvider>
    </NextIntlClientProvider>
  )
}