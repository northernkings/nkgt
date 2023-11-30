import { siteData } from "~/data/site";

export const documentProps = {
  title: siteData.title,
  meta: [
    {
      name: "description",
      content: siteData.description,
    },
    {
      property: "og:url",
      content: siteData.siteUrl,
    },
    {
      property: "og:title",
      content: siteData.title,
    },
    { property: "og:site_name", content: "The Northern Kings GT" },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: `${siteData.siteUrl}/nkgt2024-ograph.jpg`,
    },
    {
      property: "og:description",
      content: siteData.description,
    },
  ],
};

export { default } from "~/views/HomePage";
