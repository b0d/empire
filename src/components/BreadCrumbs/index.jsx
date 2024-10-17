"use client";
import "./index.css";
///import Link from "next/link";
///import { usePathname } from "next/navigation";
///import { useTranslations } from "next-intl";
export default function Breadcrumbs() {
	<p>sss</p>;
}

/*
export default function Breadcrumbs({ getcontent, sendt }) {
	const pathname = usePathname();
	const z = useTranslations("HomePage");
	const p = useTranslations("Header");
	// Розбиваємо шлях на частини
	const pathParts = pathname.split("/").filter(Boolean);

	// Видаляємо першу частину шляху, якщо це мова
	const supportedLanguages = ["ru", "en", "uk"];
	if (supportedLanguages.includes(pathParts[0])) {
		pathParts.shift(); // Видаляємо мову з шляху
	}

	// Назва головної сторінки
	const homeLabel = z("mainh1");

	// Генеруємо масив хлібних крихт
	const breadcrumbs = [
		{ href: "/", label: homeLabel }, // Ссылка на главную страницу
		...pathParts.map((part, index) => {
			const href = "/" + pathParts.slice(0, index + 1).join("/");

			// Перевіряємо, чи частина шляху відповідає ключу в перекладі
			let label;
			if (part === "blog") {
				label = p("menu6"); // Використовуємо переклад для блогу
			} else if (part === "girls") {
				label = p("menu7");
			} else if (index === pathParts.length - 1) {
				label = sendt; // Останній елемент замінюємо на значення sendt
			} else {
				label = typeof getcontent === "function" ? getcontent(part) : part;
			}

			return { href, label };
		}),
	];

	return (
		<nav aria-label='breadcrumbs'>
			<ol className='d-flex flex-row'>
				{breadcrumbs.map((crumb, index) => (
					<li key={index} className='breadcrumb-item'>
						<Link href={crumb.href}>{crumb.label}</Link>
					
						{index < breadcrumbs.length - 1}
					</li>
				))}
			</ol>
		</nav>
	);
}
*/
