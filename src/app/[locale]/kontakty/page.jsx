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
	const t = translations.default.Kontakty;

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
export default function Kontakty({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("Kontakty");

	return (
		<div className='kontakty'>
			<Header />
			<div className='col-12'>
				<Breadcrumbs getcontent='Kontakty' sendt={t("title")} />
			</div>
			<h1 className='h2-title'>{t("mainh1")}</h1>

			<div className='container page-description'>
				<div>
					<div className='d-flex flex-direction-row flex-wrap'>
						<div
							className='col-12 col-md-7'
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
						<div className='col-12 col-md-5'>
							<BigForm />
							<Image
								src='/images/kontakty.webp'
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
							<br />

							<Image
								src='/images/kontakty1.webp'
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
				</div>
				<div className='container page-description'>
					<div id='mapDiv'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.916926134749!2d24.022761715060295!3d49.84401843875609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7306f4f039%3A0x2b01e74af9ed66f1!2z0JXRgNC-0YLQuNGH0L3QuNC5INC80LDRgdGB0LDQtiDRgyDQm9GM0LLQvtCy0ZYgIkVtcGlyZSI!5e0!3m2!1suk!2sro!4v1553771918434'
							width='100%'
							height='310px'
							frameBorder='0'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
			<BigForm />
			<Footer />
		</div>
	);
}
