import { type LocalePrefix, type Pathnames } from "next-intl/routing";

export const defaultLocale = "ru" as const;
export const locales = ["en", "ru", "uk"] as const;

export type Locale = (typeof locales)[number];

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
};

export const localePrefix = "as-needed" satisfies
    LocalePrefix;