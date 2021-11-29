import { sanityClient } from '~/utils/sanity';

const { VITE_PUBLICATION: publication } = import.meta.env;

const menuHierarchyLinkConstraint = /* groq */ `
  !(_id in path("drafts.**")) &&
  publicationMeta.publication->slug.current == '${publication}' &&
  defined(parent._ref) &&
  parent._ref == ^._id
`;

const query = /* groq */ `{
  "publication": *[
    !(_id in path("drafts.**")) &&
    _type == 'publication' &&
    slug.current == '${publication}'
  ][0] {
    "slug": slug.current,
    hostname,
    language,
    relatedPublication-> {
      hostname,
      language,
    },
    socialAccounts,
    frontPage,
  }
}`;

//export const getSiteData = async () => sanityClient.fetch(query);
export const getSiteData = {
  title: 'Northern Kings Grand Tournament 2022'
};