import { defineArrayMember, defineField, defineType } from "sanity";
import { defaultPortfolio } from "../../data/portfolio";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio page",
  type: "document",
  initialValue: defaultPortfolio,
  fields: [
    defineField({ name: "heroLocation", title: "Location", type: "string" }),
    defineField({ name: "heroCompany", title: "Current workplace line", type: "string" }),
    defineField({ name: "heroDescription", title: "Introduction", type: "text", rows: 4 }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({
      name: "resumePdf",
      title: "Resume PDF",
      type: "file",
      options: { accept: "application/pdf" },
      description: "Upload a replacement PDF here, then publish the page.",
    }),
    defineField({ name: "experienceLabel", title: "Experience eyebrow", type: "string" }),
    defineField({ name: "experienceTitle", title: "Experience heading", type: "string" }),
    defineField({
      name: "experience",
      title: "Experience entries",
      type: "array",
      of: [
        defineArrayMember({
          name: "experienceEntry",
          title: "Role",
          type: "object",
          fields: [
            defineField({ name: "date", title: "Date", type: "string" }),
            defineField({ name: "role", title: "Role", type: "string" }),
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "href", title: "Company website", type: "url" }),
            defineField({
              name: "details",
              title: "Highlights",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: { select: { title: "role", subtitle: "company" } },
        }),
      ],
    }),
    defineField({ name: "projectsLabel", title: "Projects eyebrow", type: "string" }),
    defineField({ name: "projectsTitle", title: "Projects heading", type: "string" }),
    defineField({ name: "projectsNote", title: "Projects intro", type: "string" }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        defineArrayMember({
          name: "project",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "type", title: "Category", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({ name: "repo", title: "Repository URL", type: "url" }),
            defineField({ name: "live", title: "Live site URL", type: "url" }),
            defineField({
              name: "image",
              title: "Image URL or public path",
              type: "string",
              description: "Use a full image URL or a path such as /portfolio/dailyflow.png.",
            }),
            defineField({
              name: "imageFit",
              title: "Image fitting",
              type: "string",
              options: {
                list: [
                  { title: "Fill frame (crop edges)", value: "cover" },
                  { title: "Show full image", value: "contain" },
                ],
                layout: "radio",
              },
              initialValue: "cover",
            }),
            defineField({
              name: "images",
              title: "Additional image URLs or public paths",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "alt", title: "Image description", type: "string" }),
            defineField({ name: "mark", title: "Text mark (for projects without an image)", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "type" } },
        }),
      ],
    }),
    defineField({ name: "aboutLabel", title: "About eyebrow", type: "string" }),
    defineField({ name: "aboutHeading", title: "About heading", type: "string" }),
    defineField({ name: "aboutBody", title: "About text", type: "text", rows: 6 }),
    defineField({ name: "musicPlaylistUrl", title: "Spotify playlist URL", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Portfolio page" }) },
});
