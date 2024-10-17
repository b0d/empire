"use client";
import "./index.css";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function BigForm() {
	const z = useTranslations("BigForm");
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
		<form method='POST' onSubmit={handleSubmit} className='big-form'>
			<div className='h2-title'>{z("phoneForm")}</div>
			<div className='d-flex justify-content-center align-items-center flex-column'>
				<div className='col-6 d-flex justify-content-center'>
					<div className='d-flex flex-column justify-content-center'>
						<label className='text-center'>{z("phoneLabel")}</label>
						<input
							type='tel'
							name='tel'
							id='tel'
							required
							placeholder='+38 096 033 66 36'
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-6 d-flex justify-content-center'>
					<div>
						<button type='submit' className='order-butt'>
							{z("buttonText")}
						</button>
					</div>
				</div>
				<div className='col-12 text-center'>
					<br />
					{status && <p>{status}</p>}
				</div>
			</div>
		</form>
	);
}
