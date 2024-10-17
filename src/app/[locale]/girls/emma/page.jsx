import "../../../globals.css";
import "./index.css";
import Header from "../../../../components/Header/index";
import Footer from "../../../../components/Footer/index";
import Image from "next/image";
import BigForm from "../../../../components/BigForm/index";
import ClientPopup from "../../../../components/PopUp/index";
import { useTranslations } from "next-intl";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
	const locale = params.locale || "ru";
	const translations = await import(`../../../../../messages/${locale}.json`);
	const t = translations.default.Ladies;

	return {
		title: t.lady[0].title,
		description: t.lady[0].description,
	};
}
export async function generateStaticParams() {
	const locales = ["uk", "en", "ru"]; // List of locales you want to support

	return locales.map((locale) => ({
		locale, // Return an object for each dynamic path
	}));
}
export default function Emma({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const z = useTranslations();
	const t = z("Ladies.lady.0.name");
	const s = useTranslations("Ladies");
	return (
		<section>
			<Header />
			<div className='col-12'>
				<Breadcrumbs getcontent={s("beforeModelName")} sendt={t} />
			</div>
			<div className='x'>
				<div className='h2-title'>
					<h1>
						{z("Ladies.beforeModelName")} {z("Ladies.lady.0.name")}
					</h1>
				</div>

				<div className='container d-flex flex-row flex-wrap girls-block'>
					<div className='col-12 col-sm-6'>
						<Image
							src={z("Ladies.lady.0.img.0")}
							alt={z("Ladies.lady.0.alt")}
							width={850}
							height={1250}
						/>
					</div>
					<div className='col-12 col-sm-6'>
						<Image
							src={z("Ladies.lady.0.img.1")}
							alt={z("Ladies.lady.0.alt")}
							width={850}
							height={1250}
						/>
					</div>
				</div>

				<div className='d-flex justify-content-center'>
					<ClientPopup
						id={z("Ladies.lady.0.id")}
						name={z(`Ladies.lady.0.name`)}
					/>
				</div>
				<div className='container d-flex flex-row flex-wrap girls-block'>
					<div className='col-12 col-sm-6'>
						<Image
							src={z("Ladies.lady.0.img.2")}
							alt={z("Ladies.lady.0.alt")}
							width={850}
							height={1250}
						/>
					</div>
					<div className='col-12 col-sm-6'>
						<Image
							src={z("Ladies.lady.0.img.3")}
							alt={z("Ladies.lady.0.alt")}
							width={850}
							height={1250}
						/>
					</div>
				</div>
			</div>
			<BigForm />
			<Footer />
		</section>
	);
}
