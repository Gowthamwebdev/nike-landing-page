import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";
import {
  shieldTick,
  truckFast,
  support,
  instagram,
  twitter,
  facebook,
} from "../assets/icons";

export const Navitems = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const Statistics = [
  {
    value: "1k+",
    label: "Shops",
  },
  {
    value: "500k+",
    label: "Customers",
  },
  {
    value: "200k+",
    label: "Collections",
  },
];
export const Shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Jordan-Air 4",
    price: "$200",
  },
  {
    imgURL: shoe5,
    name: "Jordan-Air 6",
    price: "$200.10",
  },
  {
    imgURL: shoe6,
    name: "Jordan-Air 8",
    price: "$200.50",
  },
  {
    imgURL: shoe4,
    name: "Jordan-Air 10",
    price: "$200.90",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const Reviews = [
  {
    label: "John Doe",
    imgURL: customer1,
    subtext:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    label: "Madison Beer",
    imgURL: customer2,
    subtext:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
export const Medias = [
  {
    label: "instagram",
    imgURL: instagram,
  },
  {
    label: "twitter",
    imgURL: twitter,
  },
  {
    label: "facebook",
    imgURL: facebook,
  },
];
export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];
