import { createClient } from "next-sanity";
import { defaultPortfolio, type PortfolioContent } from "../../data/portfolio";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-02-01",
      useCdn: true,
    })
  : null;

const portfolioQuery = `*[_type == "portfolio"][0]{
  heroLocation,
  heroCompany,
  heroDescription,
  contactEmail,
  experienceLabel,
  experienceTitle,
  experience[]{date, role, company, href, details},
  projectsLabel,
  projectsTitle,
  projectsNote,
  projects[]{name, type, description, repo, live, image, images, alt, mark},
  aboutLabel,
  aboutHeading,
  aboutBody,
  musicPlaylistUrl
}`;

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!client) return defaultPortfolio;

  try {
    const content = await client.fetch<Partial<PortfolioContent> | null>(
      portfolioQuery,
      {},
      { next: { revalidate: 30 } },
    );

    if (!content) return defaultPortfolio;

    return {
      ...defaultPortfolio,
      ...content,
      experience: content.experience ?? defaultPortfolio.experience,
      projects: content.projects ?? defaultPortfolio.projects,
    };
  } catch (error) {
    console.error("Could not fetch portfolio content from Sanity; using local defaults.", error);
    return defaultPortfolio;
  }
}
