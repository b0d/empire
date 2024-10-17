import "./index.css";
import sanitizeHtml from "sanitize-html";
import { useTranslations } from "next-intl";

export default function ContentScreen({ textNeeded }) {
	const t = useTranslations("HomePage");

	let textBlock, textContent;
	const textBlocks = {
		1: {
			header: "textBlock1Header",
			content: "textBlock1Content",
		},
		2: {
			header: "textBlock2Header",
			content: "textBlock2Content",
		},
		3: {
			header: "textBlock3Header",
			content: "textBlock3Content",
		},
		4: {
			header: "textBlock4Header",
			content: "textBlock4Content",
		},
		5: {
			header: "textBlock5Header",
			content: "textBlock5Content",
		},
		6: {
			header: "textBlock6Header",
			content: "textBlock6Content",
		},
		7: {
			header: "textBlock7Header",
			content: "textBlock7Content",
		},
		8: {
			header: "textBlock8Header",
			content: "textBlock8Content",
		},
		9: {
			header: "textBlock9Header",
			content: "textBlock9Content",
		},
		10: {
			header: "textBlock10Header",
			content: "textBlock10Content",
		},
	};

	if (textNeeded && textBlocks[textNeeded]) {
		const { header, content } = textBlocks[textNeeded];
		textBlock = sanitizeHtml(
			t(header, {
				p: (chunks) => `<p>${chunks}</p>`,
				b: (chunks) => `<b>${chunks}</b>`,
				h2: (chunks) => `<h2>${chunks}</h2>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				li: (chunks) => `<li>${chunks}</li>`,
				div: (chunks) => `<div>${chunks}</div>`,
				h1: (chunks) => `<h1>${chunks}</h1>`,
				h3: (chunks) => `<h3>${chunks}</h3>`,
			})
		);
		textContent = sanitizeHtml(
			t(content, {
				p: (chunks) => `<p>${chunks}</p>`,
				h1: (chunks) => `<h1>${chunks}</h1>`,
				b: (chunks) => `<b>${chunks}</b>`,
				h2: (chunks) => `<h2>${chunks}</h2>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				li: (chunks) => `<li>${chunks}</li>`,
				div: (chunks) => `<div>${chunks}</div>`,
			})
		);
	}

	return (
		<div className='content-screen container d-flex flex-column collapse'>
			<div className='h2-title'>
				<div
					dangerouslySetInnerHTML={{
						__html: sanitizeHtml(textBlock),
					}}
				></div>
			</div>

			<div
				dangerouslySetInnerHTML={{
					__html: sanitizeHtml(textContent),
				}}
				className='hide-content'
			></div>
		</div>
	);
}
