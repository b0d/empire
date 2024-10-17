import "../../globals.css";
import "./index.css";
import BlogComponent from "../../../components/BlogComponent/index";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import BigForm from "../../../components/BigForm/index";
import { useTranslations } from "next-intl";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { unstable_setRequestLocale } from "next-intl/server";
export async function generateMetadata({ params }) {
	const locale = params.locale || "ru";
	const translations = await import(`../../../../messages/${locale}.json`);
	const t = translations.default.Blog;

	return {
		title: t.title,
		description: t.description,
	};
}
export async function generateStaticParams() {
	const locales = ["uk", "en", "ru"];

	return locales.map((locale) => ({
		locale, // Return an object for each dynamic path
	}));
}
export default function Blog({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const z = useTranslations("Blog");
	const a = useTranslations("Blog1");
	const b = useTranslations("Blog2");
	const c = useTranslations("Blog3");
	const d = useTranslations("Blog4");
	const e = useTranslations("Blog5");
	const f = useTranslations("Blog6");
	const g = useTranslations("Blog7");
	const h = useTranslations("Blog8");
	const i = useTranslations("Blog9");
	const j = useTranslations("Blog10");
	const k = useTranslations("Blog11");
	const l = useTranslations("Blog12");
	const m = useTranslations("Blog13");
	const n = useTranslations("Blog14");
	const o = useTranslations("Blog15");
	const p = useTranslations("Blog16");
	const q = useTranslations("Blog17");
	const r = useTranslations("Blog18");
	const s = useTranslations("Blog19");
	const t = useTranslations("Blog20");
	const u = useTranslations("Blog21");
	const v = useTranslations("Blog22");

	return (
		<section>
			<Header />
			<div className='col-12'>
				<BreadCrumbs getcontent='Blog' sendt={z("beforeModelName")} />
			</div>
			<div className='container'>
				<div className='col-12'>
					<h1>{z("mainh1")}</h1>
				</div>
				<div className='d-flex flex-row flex-wrap blog-box text-center'>
					<BlogComponent
						linkNeeded={a("link")}
						headerNeeded={a("mainh1")}
						pictureNeeded={a("img")}
					/>
					<BlogComponent
						linkNeeded={b("link")}
						headerNeeded={b("mainh1")}
						pictureNeeded={b("img")}
					/>

					<BlogComponent
						linkNeeded={c("link")}
						headerNeeded={c("mainh1")}
						pictureNeeded={c("img")}
					/>
					<BlogComponent
						linkNeeded={d("link")}
						headerNeeded={d("mainh1")}
						pictureNeeded={d("img")}
					/>
					<BlogComponent
						linkNeeded={e("link")}
						headerNeeded={e("mainh1")}
						pictureNeeded={e("img")}
					/>
					<BlogComponent
						linkNeeded={f("link")}
						headerNeeded={f("mainh1")}
						pictureNeeded={f("img")}
					/>
					<BlogComponent
						linkNeeded={g("link")}
						headerNeeded={g("mainh1")}
						pictureNeeded={g("img")}
					/>
					<BlogComponent
						linkNeeded={h("link")}
						headerNeeded={h("mainh1")}
						pictureNeeded={h("img")}
					/>
					<BlogComponent
						linkNeeded={i("link")}
						headerNeeded={i("mainh1")}
						pictureNeeded={i("img")}
					/>
					<BlogComponent
						linkNeeded={j("link")}
						headerNeeded={j("mainh1")}
						pictureNeeded={j("img")}
					/>
					<BlogComponent
						linkNeeded={k("link")}
						headerNeeded={k("mainh1")}
						pictureNeeded={k("img")}
					/>
					<BlogComponent
						linkNeeded={l("link")}
						headerNeeded={l("mainh1")}
						pictureNeeded={l("img")}
					/>
					<BlogComponent
						linkNeeded={m("link")}
						headerNeeded={m("mainh1")}
						pictureNeeded={m("img")}
					/>
					<BlogComponent
						linkNeeded={n("link")}
						headerNeeded={n("mainh1")}
						pictureNeeded={n("img")}
					/>
					<BlogComponent
						linkNeeded={o("link")}
						headerNeeded={o("mainh1")}
						pictureNeeded={o("img")}
					/>
					<BlogComponent
						linkNeeded={p("link")}
						headerNeeded={p("mainh1")}
						pictureNeeded={p("img")}
					/>
					<BlogComponent
						linkNeeded={q("link")}
						headerNeeded={q("mainh1")}
						pictureNeeded={q("img")}
					/>
					<BlogComponent
						linkNeeded={r("link")}
						headerNeeded={r("mainh1")}
						pictureNeeded={r("img")}
					/>
					<BlogComponent
						linkNeeded={s("link")}
						headerNeeded={s("mainh1")}
						pictureNeeded={s("img")}
					/>
					<BlogComponent
						linkNeeded={t("link")}
						headerNeeded={t("mainh1")}
						pictureNeeded={t("img")}
					/>
					<BlogComponent
						linkNeeded={u("link")}
						headerNeeded={u("mainh1")}
						pictureNeeded={u("img")}
					/>
					<BlogComponent
						linkNeeded={v("link")}
						headerNeeded={v("mainh1")}
						pictureNeeded={v("img")}
					/>
				</div>
			</div>
			<BigForm />
			<Footer />
		</section>
	);
}
