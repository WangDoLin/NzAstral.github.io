const config = {
  title: "Wang Do Lin | Backend Developer/Freelance",
  description: {
    long: "Explore the portfolio of Wang Lin, a backend developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Wang Lin, a backend developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Wang Lin",
    "portfolio",
    "backend developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Wang Do Lin",
  email: "trieuhuygaming000@gmail.com",
  site: "https://nareshkhatri.dev",

  // for github stars button
  githubUsername: "WangDoLin",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/LukasOrder46183",
    linkedin: "https://www.linkedin.com/in/wang-lin-330451437/",
    instagram: "https://www.instagram.com/wangdolin._/",
    facebook: "https://www.facebook.com/bacthanh.dev",
    github: "https://github.com/WangDoLin",
  },
};
export { config };
