export const getInTouchData: getInTouchDataType = {
  title: "Get In Touch",
  description:
    "I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!",
};

export const socialLister: socialType[] = [
  {
    image: "/social/mail.svg",
    title: "email",
    href: "mailto:prasanna6813@gmail.com",
  },
  {
    image: "/social/linkedin.svg",
    title: "linkedin",
    href: "https://www.linkedin.com/in/prasanna-kumar-03a446105/",
  },
  {
    image: "/social/facebook.svg",
    title: "facebook",
    href: "https://www.facebook.com/prasannakumar.kamjula.5/",
  },
  {
    href: "https://api.whatsapp.com/send?phone=919493817689",
    title: "whatsapp",
    image: "/social/whatsapp.svg",
  },
];

interface socialType {
  href: string;
  title: string;
  image: string;
}

interface getInTouchDataType {
  title: string;
  description: string;
}
