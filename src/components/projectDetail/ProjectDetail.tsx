import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getIconUrl, getItemName } from "../../utils/getIconUrl";
import "./ProjectDetail.css";

export const ProjectDetail: React.FC = () => {
	const { t } = useLanguage();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [lightboxImage, setLightboxImage] = useState<string | null>(null);
	const project = t.projects.items.find((p) => p.id === id);

	useEffect(() => {
		if (!lightboxImage) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setLightboxImage(null);
		};
		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [lightboxImage]);

	if (!project) {
		return (
			<div className="project-detail-page">
				<button onClick={() => navigate(-1)} className="back-home-btn">
					<svg className="project-btn-icon" viewBox="0 0 24 24">
						<line x1="19" y1="12" x2="5" y2="12" />
						<polyline points="12 19 5 12 12 5" />
					</svg>
					<span>{t.projectDetail.back}</span>
				</button>
				<p className="no-results-msg">{t.projectDetail.notFound}</p>
			</div>
		);
	}

	return (
		<article className="project-detail-page">
			<div className="project-detail-hero">
				<button onClick={() => navigate(-1)} className="back-home-btn">
					<svg className="project-btn-icon" viewBox="0 0 24 24">
						<line x1="19" y1="12" x2="5" y2="12" />
						<polyline points="12 19 5 12 12 5" />
					</svg>
					<span>{t.projectDetail.back}</span>
				</button>

				<h1 className="project-detail-title">{project.title}</h1>
				<p className="section-subtitle">{project.description}</p>

				<div className="project-detail-banner">
					<img src={project.image} alt={project.title} />
				</div>
			</div>

			<div className="project-detail-grid">
				<div className="project-detail-story">
					{project.fullStory && (
						<div className="story-section">
							<h3>{t.projectDetail.storyTitle}</h3>
							<p className="story-text">{project.fullStory}</p>
						</div>
					)}
					{project.features && project.features.length > 0 && (
						<div className="story-section">
							<h3>{t.projectDetail.featuresTitle}</h3>
							<ul className="features-list">
								{project.features.map((feature, idx) => (
									<li key={idx} className="feature-item">
										<span className="feature-bullet" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					{project.gallery && project.gallery.length > 0 && (
						<div className="story-section">
							<h3>{t.projectDetail.galleryTitle}</h3>
							<div className="gallery-grid">
								{project.gallery.map((imgUrl, idx) => (
									<div
										key={idx}
										className="gallery-image-wrapper"
										onClick={() => setLightboxImage(imgUrl)}
										role="button"
										tabIndex={0}
										onKeyDown={(e) =>
											e.key === "Enter" && setLightboxImage(imgUrl)
										}>
										<img
											src={imgUrl}
											alt={`${project.title} screenshot ${idx + 1}`}
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				<aside className="project-detail-sidebar">
					<div className="sidebar-block">
						<h4>{t.projectDetail.technologiesTitle}</h4>
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
					</div>
					<div className="sidebar-actions">
						{project.demoUrl && (
							<a
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="sidebar-btn primary">
								<svg className="project-btn-icon" viewBox="0 0 24 24">
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									<polyline points="15 3 21 3 21 9" />
									<line x1="10" y1="14" x2="21" y2="3" />
								</svg>
								<span>{t.projects.liveDemo}</span>
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="sidebar-btn secondary">
								<img
									src={getIconUrl("GitHub") || ""}
									alt=""
									className="project-tag-icon"
								/>
								<span>{t.projects.viewCode}</span>
							</a>
						)}
					</div>
				</aside>
			</div>
			{lightboxImage && (
				<div
					className="lightbox-overlay"
					onClick={() => setLightboxImage(null)}>
					<button
						className="lightbox-close"
						onClick={() => setLightboxImage(null)}
						aria-label={t.projectDetail.closeLightbox}>
						<svg viewBox="0 0 24 24" width="24" height="24">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
					<img
						src={lightboxImage}
						alt=""
						className="lightbox-image"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}
		</article>
	);
};
