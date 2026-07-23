import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getIconUrl, getItemName } from "../../utils/getIconUrl";
import "./Projects.css";

interface ProjectsProps {
	onViewAllProjects?: () => void;
	onSelectProject?: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
	onViewAllProjects,
	onSelectProject,
}) => {
	const { t } = useLanguage();

	const featuredProjects = t.projects.items.filter((item) => item.featured);

	return (
		<section id="proyectos" className="projects-section">
			<div className="projects-header">
				<h2>{t.projects.title}</h2>
				<p className="section-subtitle">{t.projects.subtitle}</p>
			</div>

			<div className="projects-grid">
				{featuredProjects.map((project) => (
					<article
						key={project.id}
						className="project-card"
						onClick={() => onSelectProject && onSelectProject(project.id)}>
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

							<div
								className="project-links"
								onClick={(e) => e.stopPropagation()}>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="project-link secondary"
										aria-label={`${t.projects.viewCode} - ${project.title}`}>
										<img
											src={getIconUrl("GitHub") || ""}
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

			<div className="projects-footer">
				<button onClick={onViewAllProjects} className="view-all-btn">
					<span>{t.projects.viewAll}</span>
					<svg className="project-btn-icon" viewBox="0 0 24 24">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</button>
			</div>
		</section>
	);
};
