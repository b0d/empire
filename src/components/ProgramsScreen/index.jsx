import "./index.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContentScreen from "../../components/ContentScreen/index";
import ClientPopup from "../../components/PopUp/index";
import sanitizeHtml from "sanitize-html";
import programsData from "../../../messages/ru.json";
export default function ProgramsScreen() {
	const t = useTranslations("ProgramsDop");
	const z = useTranslations("Programs");
	const howMuchProg = Object.keys(programsData.Programs);

	return (
		<article className='container programs-screen d-flex flex-column'>
			<ContentScreen textNeeded='6' />

			<div className='programs-block d-flex flex-row justify-content-between flex-wrap'>
				{howMuchProg.slice(0).map((i) => (
					<div
						className='program col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 '
						key={i}
					>
						<figure className='d-flex flex-column justify-content-center vertical-align-center'>
							<Image
								height={300}
								width={300}
								src={z(`${i}.img`)}
								alt={z(`${i}.alt`)}
								className='program-picture'
							/>
							<figcaption className='d-flex flex-column justify-content-center'>
								<span className='program-title'>{z(`${i}.title`)}</span>
								<p className='price-p'>{z(`${i}.price`)}</p>
								<p className='h6'>{z(`${i}.description`)}</p>

								<ClientPopup id={z(`${i}.id`)} name={z(`${i}.title`)} />
							</figcaption>
						</figure>
					</div>
				))}

				<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center'>
					<p>
						{t("10.title")} {t("10.description")}
					</p>
					<div
						dangerouslySetInnerHTML={{
							__html: sanitizeHtml(
								t("10.content", {
									p: (chunks) => `<p>${chunks}</p>`,
									b: (chunks) => `<b>${chunks}</b>`,
									ul: (chunks) => `<ul>${chunks}</ul>`,
									li: (chunks) => `<li>${chunks}</li>`,
									i: (chunks) => `<i>${chunks}</i>`,
								})
							),
						}}
					></div>
				</div>
			</div>
		</article>
	);
}
