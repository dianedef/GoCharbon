import type { BreadcrumbsOptions } from "astro-breadcrumbs";

export const breadcrumbsConfig: BreadcrumbsOptions = {
  indexText: "",
  homeText: "",
  ariaCurrent: "page",
  truncated: true,
  customLabels: {
    "tech": "Technologie",
    "business": "Business",
    "outils": "Outils",
    "methodologie": "Méthodologie",
    "tutos": "Tutoriels",
    "parcours": "Parcours",
    "ia": "Intelligence Artificielle",
    "saas": "SaaS",
    "marketing": "Marketing"
  }
}; 
