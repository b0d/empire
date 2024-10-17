import "../../globals.css";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import Image from "next/image";
import BigForm from "../../../components/BigForm/index";
import sanitizeHtml from "sanitize-html";
import { useTranslations } from "next-intl";
import Breadcrumbs from "../../../components/BreadCrumbs";
import { unstable_setRequestLocale } from "next-intl/server";
export async function generateMetadata({ params }) {
	const locale = params.locale || "ru";
	const translations = await import(`../../../../messages/${locale}.json`);
	const t = translations.default.Vacancies;

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
export default function Vacancies({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("Vacancies");

	return (
		<div className='vacancies'>
			<Header />
			<div className='col-12'>
				<Breadcrumbs getcontent='Vacancies' sendt={t("title")} />
			</div>
			<h1 className='h2-title'>{t("mainh1")}</h1>
			<div className='container page-description'>
				<div>
					<div className='d-flex flex-direction-row flex-wrap'>
						<div className='col-12 col-md-7'>
							<div
								dangerouslySetInnerHTML={{
									__html: sanitizeHtml(
										t("content", {
											p: (chunks) => `<p>${chunks}</p>`,
											b: (chunks) => `<b>${chunks}</b>`,
											h2: (chunks) => `<h2>${chunks}</h2>`,
											ul: (chunks) => `<ul>${chunks}</ul>`,
											li: (chunks) => `<li>${chunks}</li>`,
											div: (chunks) => `<div>${chunks}</div>`,
											h1: (chunks) => `<h1>${chunks}</h1>`,
											h3: (chunks) => `<h3>${chunks}</h3>`,
											a: (chunks) =>
												`<a href='http://empire-massage.lviv.ua/'>${chunks}</a>`,
											br: (chunks) => `${chunks}<br/>`,
										})
									),
								}}
							></div>
							<div>
								<Image
									src={t("img")}
									width={0}
									height={0}
									sizes='100vw'
									style={{
										width: "100%",
										height: "auto",
										padding: "0 15px 15px",
									}}
									alt={t("mainh1")}
								/>
							</div>
						</div>
						<div className='col-12 col-md-5 p-3'>
							<BigForm />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
