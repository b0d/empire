"use client";
import "./index.css";
import Image from "next/image";
import tg from "./tg.webp";
import vb from "./viber.webp";
import wh from "./whatsapp.webp";
import ru from "./ru.webp";
import ua from "./ua.webp";
import gb from "./gb.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
	const t = useTranslations("Header");
	const pathname = usePathname();
	const getLocalizedPath = (locale) => {
		// Розбиваємо URL на частини
		const pathParts = pathname.split("/").filter(Boolean); // Видаляємо пусті елементи
		// Якщо перша частина відповідає за локаль, замінюємо її на нову
		if (
			pathParts[0] === "en" ||
			pathParts[0] === "ru" ||
			pathParts[0] === "uk"
		) {
			pathParts[0] = locale;
		} else {
			// Якщо локалі немає, додаємо її на початок
			pathParts.unshift(locale);
		}
		return "/" + pathParts.join("/"); // Завжди починаємо з одного "/"
	};
	return (
		<header className='d-flex container-fluid'>
			<div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 d-flex flex-row'>
				<div className='col-12 header-tel d-flex flex-row align-items-center flex-wrap'>
					<div className='col-12 col-sm-5 icons d-flex flex-row justify-content-between'>
						<a href='tg://resolve?domain=Erotic_Massage_Lviv'>
							<Image height={25} width={25} src={tg} alt={t("altTg")} />
						</a>
						<a href='viber://chat?number=380960336636'>
							<Image height={25} width={25} src={vb} alt={t("altVb")} />
						</a>
						<a href='whatsapp://send?phone=+380960336636'>
							<Image height={25} width={25} src={wh} alt={t("altWh")} />
						</a>
					</div>
					<div className='col-12 col-sm-7 tel d-flex justify-content-center'>
						<a href={t("phoneIn")} rel='nofollow'>
							<span className='px-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='38'
									height='38'
									fill='currentColor'
									className='bi bi-phone-vibrate'
									viewBox='0 0 16 16'
								>
									<path d='M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z' />
									<path d='M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648' />
								</svg>
							</span>
							{t("phone")}
						</a>
					</div>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex flew-column flex-wrap justify-content-between align-items-center'>
				<div className='col-12 col-sm-7 header-addres text-left align-items-center'>
					<a
						href='https://goo.gl/maps/77p1Baxn7UpZ4rtC7'
						className='d-flex align-items-center'
					>
						<span className='px-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='31'
								height='31'
								fill='currentColor'
								className='bi bi-map '
								viewBox='0 0 16 16'
							>
								<path
									fillRule='evenodd'
									d='M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z'
								/>
							</svg>
						</span>
						{t("address")}
					</a>
				</div>
				<div className='col-12 col-sm-5 header-ruels d-flex justify-content-between'>
					<div className='header-time-logo'>24/7</div>
					<div className='header-time-logo'>18+</div>
					<div className='header-time-logo text-center'>
						no <br /> sex
					</div>
				</div>
			</div>

			<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 d-flex flew-row flex-wrap align-items-center justify-content-end'>
				<div className='col-12 col-sm-7 col-md-8 header-sides'>
					<div className='header-menu'>
						<nav className='menu-header-menu-container'>
							<ul className='menu'>
								<li className='menu-item'>
									<Link href='/'>{t("menu1")}</Link>
								</li>
								<li className='menu-item'>
									<Link
										href='https://goo.gl/maps/77p1Baxn7UpZ4rtC7'
										locale='ru'
									>
										{t("menu5")}
									</Link>
								</li>
								<li className='menu-item'>
									<Link href='/vacancies'>{t("menu4")}</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='col-12 col-sm-5 col-md-4 header-lang'>
					<ul className='d-flex justify-content-end'>
						<li className='lang-butt d-flex'>
							<Link href={getLocalizedPath("uk")} locale='uk'>
								<Image
									height={12}
									width={18}
									src={ua}
									alt='erotic massage ukraine'
								/>
							</Link>
						</li>
						<li className='lang-butt'>
							<Link href={getLocalizedPath("ru")} locale='ru'>
								<Image
									height={12}
									width={18}
									src={ru}
									alt='erotic massage russia'
								/>
							</Link>
						</li>
						<li className='lang-butt'>
							<Link href={getLocalizedPath("en")} locale='en'>
								<Image
									height={12}
									width={18}
									src={gb}
									alt='erotic massage english'
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
