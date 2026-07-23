import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import { getIconUrl } from "../../utils/getIconUrl";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_tjjc24a";
const EMAILJS_TEMPLATE_ID = "template_i0j7bxe";
const EMAILJS_PUBLIC_KEY = "xuhWjV0J7LB5JJfdQ";

export const Contact: React.FC = () => {
	const { t } = useLanguage();
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validar campos requeridos antes de enviar
		if (
			!formData.name.trim() ||
			!formData.email.trim() ||
			!formData.message.trim()
		) {
			return;
		}

		setStatus("sending");

		// Mapeo de parámetros hacia la plantilla de EmailJS
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			subject: formData.subject || "Contacto desde el Portfolio",
			message: formData.message,
		};

		emailjs
			.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				templateParams,
				EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				setStatus("success");
				setFormData({ name: "", email: "", subject: "", message: "" });
			})
			.catch((error) => {
				console.error("Error al enviar el mensaje con EmailJS:", error);
				setStatus("error");
			});
	};

	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/Bertolini-Victor",
			icon: (
				<img
					src={getIconUrl("GitHub") || ""}
					alt=""
					className="social-icon"
					onError={(e) => {
						(e.target as HTMLElement).style.display = "none";
					}}
				/>
			),
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/victor-bertolini",
			icon: (
				<svg className="social-icon fill-icon" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
				</svg>
			),
		}
	];

	return (
		<section id="contacto" className="contact-section">
			<div className="contact-header">
				<h2>{t.contact.title}</h2>
				<p className="section-subtitle">{t.contact.subtitle}</p>
			</div>

			<div className="contact-grid">
				<div className="contact-info">
					<div className="contact-info-card">
						<h3 className="contact-info-title">{t.contact.infoTitle}</h3>
						<p className="contact-info-desc">{t.contact.infoDesc}</p>

						<h4 className="form-label" style={{ marginTop: "0.5rem" }}>
							{t.contact.socialsTitle}
						</h4>
						<div className="social-links">
							{socialLinks.map((item, index) => (
								<a
									key={index}
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="social-link-item">
									{item.icon}
									<span>{item.name}</span>
								</a>
							))}
						</div>
					</div>
				</div>

				<form className="contact-form" onSubmit={handleSubmit} noValidate>
					{status === "success" && (
						<div className="form-success-msg" role="alert">
							{t.contact.form.success}
						</div>
					)}

					{status === "error" && (
						<div
							className="form-success-msg"
							style={{
								backgroundColor: "rgba(213, 76, 76, 0.1)",
								borderColor: "#d54c4c",
								color: "#d54c4c",
							}}
							role="alert">
							Hubo un error al enviar el mensaje. Inténtalo nuevamente.
						</div>
					)}

					<div className="form-group">
						<label htmlFor="name" className="form-label">
							{t.contact.form.name} *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							aria-required="true"
							value={formData.name}
							onChange={handleChange}
							placeholder={t.contact.form.namePlaceholder}
							className="form-input"
							autoComplete="name"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email" className="form-label">
							{t.contact.form.email} *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							aria-required="true"
							value={formData.email}
							onChange={handleChange}
							placeholder={t.contact.form.emailPlaceholder}
							className="form-input"
							autoComplete="email"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="subject" className="form-label">
							{t.contact.form.subject}
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							placeholder={t.contact.form.subjectPlaceholder}
							className="form-input"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message" className="form-label">
							{t.contact.form.message} *
						</label>
						<textarea
							id="message"
							name="message"
							required
							aria-required="true"
							value={formData.message}
							onChange={handleChange}
							placeholder={t.contact.form.messagePlaceholder}
							className="form-textarea"
						/>
					</div>

					<button
						type="submit"
						className="form-submit-btn"
						disabled={status === "sending"}>
						{status === "sending" ? (
							<span>{t.contact.form.sending}</span>
						) : (
							<>
								<span>{t.contact.form.send}</span>
								<svg
									className="project-btn-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<line x1="22" y1="2" x2="11" y2="13" />
									<polygon points="22 2 15 22 11 13 2 9 22 2" />
								</svg>
							</>
						)}
					</button>
				</form>
			</div>
		</section>
	);
};
