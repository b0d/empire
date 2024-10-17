import { unstable_setRequestLocale } from "next-intl/server";
interface Params {
    locale: string;
}
export default function NotFound({ params }: { params: { locale?: string } }) {
    const locale = params.locale || 'ru'; // Встановлюємо стандартну локаль, наприклад 'en'
    unstable_setRequestLocale(locale);

    return <div><h1>Page is not found - 404!</h1></div>
}