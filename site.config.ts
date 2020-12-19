export const config = {
  siteMeta: {
    title: "Engineer Blog Hub",
    teamName: "Minedia, Inc.",
    description: "RSS based blog site.",
    ogImageUrl: 'https://og-image.vercel.app/Minedia%2C%20Inc.%20Tech%20Blog%20Hub.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg'
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
