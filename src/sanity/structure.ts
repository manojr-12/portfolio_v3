import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio content")
    .items([
      S.listItem()
        .title("Portfolio page")
        .id("portfolio")
        .child(S.document().schemaType("portfolio").documentId("portfolio")),
    ]);
