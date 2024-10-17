import type { Metadata } from "next";
import AlternateLinks from '../../components/AlternateLinks'
//import { unstable_setRequestLocale } from 'next-intl/server';
//import { PropsWithChildren } from 'react';
//import { routing } from '../../i18n/routing';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();


  return (
    <html lang={locale}>
      <meta name="google-site-verification" content="95VB15Q3SzIYfiI_FFZaaBPj3DB2UeMoRvu5CznGsNk" />
      <meta name="yandex-verification" content="78b622fe0ecb0c26" />
      <meta name='wmail-verification' content='249e0e3ca4fddc09ba49d010bd758023' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <AlternateLinks />
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );

}