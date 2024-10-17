import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

import { defaultLocale, localePrefix, locales, pathnames } from "./i18n/routing";

export default function middleware(request: NextRequest, response: NextResponse) {
    const handleI18nRouting = createMiddleware({
        defaultLocale,
        locales,
        localePrefix,
        pathnames,
    });

    return handleI18nRouting(request);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};