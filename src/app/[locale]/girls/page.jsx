import "../../globals.css";
import "./index.css";
import Ladies from "../../../components/Ladies/index";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import BigForm from "../../../components/BigForm/index";
import { useTranslations } from "next-intl";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
	const locale = params.locale || "ru";
	const translations = await import(`../../../../messages/${locale}.json`);
	const t = translations.default.Girls;

	return {
		title: t.title,
		description: t.description,
	};
}
export async function generateStaticParams() {
	const locales = ["uk", "en", "ru"]; // List of locales you want to support

	return locales.map((locale) => ({
		locale, // Return an object for each dynamic path
	}));
}
export default function LadiesPage({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const z = useTranslations();
	return (
		<div>
			<Header />
			<div className='col-12'>
				<BreadCrumbs getcontent='Ladies' sendt={z("Ladies.ladiesGroupName")} />
			</div>
			<Ladies />
			<BigForm />
			<Footer />
		</div>
	);
}
