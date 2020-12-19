export const config = {
  siteMeta: {
    title: "Engineer Blog Hub",
    teamName: "Minedia, Inc.",
    description: "RSS based blog site.",
    ogImageUrl: 'https://og-image.vercel.app/Minedia%20Engineer%20Blog%20Hub'
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech-blog.minedia.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://corporate.minedia.com/",
    },
    {
      title: "GitHub",
      href: "https://github.com/minedia",
    },
  ],
};
