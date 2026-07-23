import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getIconUrl, getItemName } from "../../utils/getIconUrl";
import "./About.css";
import type { SkillOrTagItem } from "../../data/types";

interface SkillCategory {
	categoryName: string;
	skills: (string | SkillOrTagItem)[];
}

export const About: React.FC = () => {
	const { language, t } = useLanguage();

	const cvPath = `${import.meta.env.BASE_URL}cv-${language}.pdf`;

	const skillCategories: SkillCategory[] = [
		{
			categoryName: t.about.categories.frontend,
			skills: [
				"React",
				"TypeScript",
				"JavaScript",
				"HTML5",
				"CSS3",
				"Bootstrap",
			],
		},
		{
			categoryName: t.about.categories.backend,
			skills: [
				{ name: "Node.js", slug: "nodedotjs" },
				"RESTful APIs",
				"JSON",
				"Web Services",
			],
		},
		{
			categoryName: t.about.categories.tools,
			skills: ["Git", "GitHub", "Vite", "npm", "Internationalization (i18n)"],
		},
	];

	return (
		<section id="sobre-mi" className="about-section">
			<div className="about-header">
				<h2>{t.about.title}</h2>
				<p className="section-subtitle">{t.about.subtitle}</p>
			</div>

			<div className="about-grid">
				<div className="about-bio">
					<p className="bio-paragraph">{t.about.bio1}</p>
					<p className="bio-highlight">{t.about.bio2}</p>

					<div className="bio-actions">
						<a
							href={cvPath}
							target="_blank"
							rel="noopener noreferrer"
							className="cv-btn-about">
							<svg className="cv-icon" viewBox="0 0 24 24">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
							<span>{t.about.viewCv}</span>
						</a>
					</div>

					<div className="about-highlights-grid">
						{t.about.highlights.map((item, index) => (
							<div key={index} className="highlight-card">
								<div className="highlight-title">{item.title}</div>
								<div className="highlight-desc">{item.description}</div>
							</div>
						))}
					</div>
				</div>

				<div className="about-skills">
					{skillCategories.map((category, index) => (
						<div key={index} className="skill-group">
							<h3 className="skill-category-title">{category.categoryName}</h3>
							<div className="skills-list">
								{category.skills.map((skill, skillIndex) => {
									const skillName = getItemName(skill);
									const iconUrl = getIconUrl(skill);
									return (
										<span key={skillIndex} className="skill-badge">
											{iconUrl && (
												<img
													src={iconUrl}
													alt=""
													className="skill-icon"
													onError={(e) => {
														(e.target as HTMLElement).style.display = "none";
													}}
												/>
											)}
											{skillName}
										</span>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
