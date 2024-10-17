import "./index.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "./logo.webp";
import ClientPopup from "../../components/PopUp/index";

export default function FirstScreen() {
	const t = useTranslations("HomePage");
	return (
		<section className='first-screen d-flex'>
			<Image
				height={300}
				width={300}
				src={logo}
				alt={t("altLogo")}
				className='header-logo'
			/>
			<h1>{t("mainh1")}</h1>

			<ClientPopup id='0' name={t("mainButton")} />
		</section>
	);
}
