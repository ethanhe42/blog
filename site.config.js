module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'bd32b787e47149f38941174a9c6846b6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yihui He',
  domain: 'yihui-he.github.io',
  author: 'Yihui He',

  // open graph metadata (optional)
  description: 'Yihui He, AI research scientist / full stack engineer',
  socialImageTitle: 'Yihui He',
  socialImageSubtitle: '3k citations / 4k github stars',

  // social usernames (optional)
  twitter: 'he_yi_hui',
  github: 'yihui-he',
  linkedin: 'yihui-he-a4257aab',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
