import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getIconUrl, getItemName } from "../../utils/getIconUrl";
import "../projects/Projects.css";
import "./AllProjects.css";

interface AllProjectsProps {
	onBackToHome: () => void;
	onSelectProject: (id: string) => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({
	onBackToHome,
	onSelectProject,
}) => {
	const { t } = useLanguage();
	const [searchQuery, setSearchQuery] = useState("");

	const allProjects = t.projects.items;

	const filteredProjects = allProjects.filter((project) => {
		const query = searchQuery.toLowerCase().trim();
		if (!query) return true;

		const matchesTitle = project.title.toLowerCase().includes(query);
		const matchesDescription = project.description
			.toLowerCase()
			.includes(query);
		const matchesTag = project.tags.some((tag) =>
			getItemName(tag).toLowerCase().includes(query),
		);

		return matchesTitle || matchesDescription || matchesTag;
	});

	return (
		<div className="all-projects-page">
			<div className="all-projects-header">
				<button onClick={onBackToHome} className="back-home-btn">
					<svg className="project-btn-icon" viewBox="0 0 24 24">
						<line x1="19" y1="12" x2="5" y2="12" />
						<polyline points="12 19 5 12 12 5" />
					</svg>
					<span>{t.allProjectsPage.backHome}</span>
				</button>

				<h1>{t.allProjectsPage.title}</h1>
				<p className="section-subtitle">{t.allProjectsPage.subtitle}</p>

				<div className="projects-filter-bar">
					<div className="search-input-wrapper">
						<svg className="search-icon" viewBox="0 0 24 24">
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
						<input
							type="text"
							className="search-input"
							placeholder={t.allProjectsPage.searchPlaceholder}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>
			</div>

			{filteredProjects.length > 0 ? (
				<div className="projects-grid">
					{filteredProjects.map((project) => (
						<article
							key={project.id}
							className="project-card"
							onClick={() => onSelectProject(project.id)}>
							<div className="project-image-wrapper">
								<img
									src={project.image}
									alt={project.title}
									className="project-image"
									loading="lazy"
								/>
							</div>

							<div className="project-content">
								<h3 className="project-title">{project.title}</h3>
								<p className="project-description">{project.description}</p>

								<div className="project-tags">
									{project.tags.map((tag, tagIndex) => {
										const tagName = getItemName(tag);
										const iconUrl = getIconUrl(tag);

										return (
											<span key={tagIndex} className="project-tag">
												{iconUrl && (
													<img
														src={iconUrl}
														alt=""
														className="project-tag-icon"
														onError={(e) => {
															(e.target as HTMLElement).style.display = "none";
														}}
													/>
												)}
												{tagName}
											</span>
										);
									})}
								</div>

								<div className="project-links">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link secondary"
											aria-label={`${t.projects.viewCode} - ${project.title}`}>
											<img
												src={getIconUrl("GitHub") ?? undefined}
												alt=""
												className="project-tag-icon"
											/>
											<span>{t.projects.viewCode}</span>
										</a>
									)}

									{project.demoUrl && (
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link primary"
											aria-label={`${t.projects.liveDemo} - ${project.title}`}>
											<svg className="project-btn-icon" viewBox="0 0 24 24">
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
												<polyline points="15 3 21 3 21 9" />
												<line x1="10" y1="14" x2="21" y2="3" />
											</svg>
											<span>{t.projects.liveDemo}</span>
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			) : (
				<div className="no-results-msg">{t.allProjectsPage.noResults}</div>
			)}
		</div>
	);
};
