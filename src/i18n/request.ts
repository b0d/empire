import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { type Locale, locales } from "./routing";

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = (await import(`../../messages/${locale}.json`)) as { default: any };

    return {
        messages: messages.default,
    };
});