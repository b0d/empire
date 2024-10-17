import "../../globals.css";
import "./index.css";
import Image from "next/image";
import Header from "../../../../components/Header/index";
import Footer from "../../../../components/Footer/index";
import BigForm from "../../../../components/BigForm/index";
import { useTranslations } from "next-intl";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import sanitizeHtml from "sanitize-html";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
	const locale = params.locale || "ru";
	const translations = await import(`../../../../../messages/${locale}.json`);
	const t = translations.default.Blog5;

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
export default function Blog5({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("Blog5");
	const z = useTranslations("SeoLink");
	const textBlock = sanitizeHtml(
		t("content", {
			p: (chunks) => `<p>${chunks}</p>`,
			b: (chunks) => `<b>${chunks}</b>`,
			h2: (chunks) => `<h2>${chunks}</h2>`,
			ul: (chunks) => `<ul>${chunks}</ul>`,
			li: (chunks) => `<li>${chunks}</li>`,
			div: (chunks) => `<div>${chunks}</div>`,
			h1: (chunks) => `<h1>${chunks}</h1>`,
			strong: (chunks) => `<b>${chunks}</b>`,
			h3: (chunks) => `<h3>${chunks}</h3>`,
			h4: (chunks) => `<h4>${chunks}</h4>`,
			a: (chunks) => `<a href='${z("Address")}'>${chunks}</a>`,
			br: (chunks) => `${chunks}<br/>`,
		})
	);
	return (
		<div>
			<Header />
			<Breadcrumbs getcontent={t("beforeModelName")} sendt={t("mainh1")} />
			<section className='container'>
				<h1>{t("mainh1")}</h1>
				<div className='col-12'>
					<div>
						<Image
							src={t("img")}
							alt={t("mainh1")}
							width={300}
							height={200}
							className='float-end'
						/>
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: sanitizeHtml(textBlock),
						}}
					></div>
				</div>
			</section>
			<BigForm />
			<Footer />
		</div>
	);
}
