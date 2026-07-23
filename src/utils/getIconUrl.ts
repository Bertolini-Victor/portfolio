export interface SkillOrTagItem {
	name: string;
	slug?: string;
}

const NO_ICON_TERMS = new Set([
	"restful apis",
	"restful api",
	"web services",
	"i18n",
	"internationalization (i18n)",
	"responsive design",
	"ui / ux",
	"ui/ux",
]);

export const getIconUrl = (item: string | SkillOrTagItem): string | null => {
	if (typeof item === "object" && item.slug) {
		return `https://cdn.simpleicons.org/${item.slug}`;
	}

	const name = typeof item === "string" ? item : item.name;
	const cleanName = name.toLowerCase().trim();

	if (NO_ICON_TERMS.has(cleanName)) {
		return null;
	}

	const slugOverrides: Record<string, string> = {
		css3: "css",
		css: "css",
		html5: "html5",
		html: "html5",
		"node.js": "nodedotjs",
		nodejs: "nodedotjs",
		js: "javascript",
		ts: "typescript",
	};

	if (slugOverrides[cleanName]) {
		return `https://cdn.simpleicons.org/${slugOverrides[cleanName]}`;
	}

	const normalizedSlug = cleanName
		.replace(/\+/g, "plus")
		.replace(/#/g, "sharp")
		.replace(/[^a-z0-9]/g, "");

	return `https://cdn.simpleicons.org/${normalizedSlug}`;
};

export const getItemName = (item: string | SkillOrTagItem): string => {
	return typeof item === "string" ? item : item.name;
};
