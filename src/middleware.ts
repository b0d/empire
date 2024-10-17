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



    console.log(`Requested URL: ${request.url}`);
    const responses = handleI18nRouting(request);
    console.log(`Redirecting to: ${responses.headers.get('location')}`);
    return handleI18nRouting(request);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};