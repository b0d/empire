"use client"; // Этот компонент работает на клиенте
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import "./index.css";
export default function ClientPopup(id, name) {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const pop = useTranslations("Popup");
	const bigForm = useTranslations("BigForm");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleTogglePopup = () => {
		setIsPopupVisible(!isPopupVisible);
	};
	const handleInput = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue,
		}));
	};
	const submitForm = (e) => {
		// We don't want the page to refresh
		e.preventDefault();

		const formURL = e.target.action;
		const data = new FormData();

		// Turn our formData state into data we can use with a form submission
		Object.entries(formData).forEach(([key, value]) => {
			data.append(key, value);
		});

		// POST the data to the URL of the form
		fetch(formURL, {
			method: "POST",
			body: data,
			headers: {
				accept: "application/json",
			},
		}).then(() => {
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		});
	};

	useEffect(() => {
		if (isPopupVisible) {
			document.body.classList.add("popup-open");
		} else {
			document.body.classList.remove("popup-open");
		}
	}, [isPopupVisible]);
	const www = id;
	const t = useTranslations("HomePage");
	const [tel, setTel] = useState("");
	const [status, setStatus] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/telegram/send-message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tel,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setStatus("Повідомлення надіслано!");
				setTel("");
			} else {
				throw new Error(result.error || "Помилка відправки!");
			}
		} catch (error) {
			setStatus(`Помилка: ${error.message}`);
		}
	};

	return (
		<div className='btn-red popup-block' key={www.id}>
			<div className='orderbutton' onClick={handleTogglePopup}>
				<span>{t("orderButton")}</span>
			</div>
			<div
				className={`popup-content ${isPopupVisible ? "visible" : "invisible"}`}
				aria-hidden={!isPopupVisible}
			>
				<button
					onClick={handleTogglePopup}
					className='close-button d-flex justify-content-end'
					key={www.id}
				>
					Х
				</button>
				<p className='h4 like-header mb-4'>{pop("title")}</p>

				<form
					method='POST'
					onSubmit={handleSubmit}
					className='d-flex justify-content-center flex-column'
				>
					<div className='d-flex flex-column'>
						<label>{bigForm("phoneLabel")}</label>
						<input
							type='tel'
							name='tel'
							id='tel'
							required
							placeholder='+38 096 033 66 36'
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>

					<button type='submit' className='justify-content-center'>
						{bigForm("buttonText")}
					</button>
				</form>
				<div className='col-12 text-center'>
					<br />
					{status && <p>{status}</p>}
				</div>
			</div>

			{isPopupVisible && (
				<div className='popup-overlay' onClick={handleTogglePopup}></div>
			)}
		</div>
	);
}
