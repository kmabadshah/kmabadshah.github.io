import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    name: "Blog",
    link: "http://www.kmabadshah.com",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: <FaFacebookSquare />,
    link: "https://www.facebook.com/kmabadshah69",
  },
  {
    id: 2,
    name: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kmabadshah",
  },

  {
    id: 3,
    name: <FaTwitterSquare />,
    link: "https://www.twitter.com/kmabadshah",
  },

  {
    id: 4,
    name: <FaInstagramSquare />,
    link: "https://www.instagram.com/kmabadshah",
  },
];

export const services = [
  {
    id: 1,
    logo: <FaCode />,
    title: "custom website",
    desc:
      "I'll build a fully custom website based on your needs using all the latest technologies like react, gatsby and strapi. It will cost a little more than building a site using Wordpress or other CMS's but you'll get exactly what you want. Common use cases include corporate website or sites that generally can't be built with traditional CMS's like Wordpress.",
  },
  {
    id: 2,
    logo: <FaGem />,
    title: "wordpress website",
    desc:
      "I'll build a website based on wordpress. There are lots of templates and designs to choose from. Most common use cases include a personal portfolio or simple static websites with not very much going on but still responsive enough to build out an impression. Comes at a cheaper price, but not so much customizable as a fully custom website like this one.",
  },
  {
    id: 3,
    logo: <FaAndroid />,
    title: "mobile app",
    desc:
      "I'll build IOS and Android apps based on your needs. They also perform good across a wide range of devices. Including devices with lower hardware capabilities than traditional one's. Comes at a pretty cheap price and fully customizable. I'll make sure you get exactly what you want. Both in terms of design and performance. Contact me for more info.",
  },
];
