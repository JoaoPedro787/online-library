import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

// Social Media links
const socialMedia = [
  {
    id: 0,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/joaopedro787/",
  },
  { id: 1, icon: <FaGithubSquare />, link: "https://github.com/JoaoPedro787" },
  {
    id: 2,
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/jaooo7788/",
  },
];

// Generic redirect links
const redirectLinks = [
  {
    id: 0,
    title: "About",
    link: [
      { key: "Our Story", value: "*" },
      { key: "Team", value: "*" },
      { key: "Careers", value: "*" },
    ],
  },
  {
    id: 1,
    title: "Help",
    link: [
      { key: "Contact Us", value: "*" },
      { key: "FAQ", value: "*" },
      { key: "Accessibility", value: "*" },
    ],
  },
  {
    id: 2,
    title: "Privacy",
    link: [
      { key: "Privacy Policy", value: "*" },
      { key: "Data Protection", value: "*" },
      { key: "Terms of Service", value: "*" },
    ],
  },
  {
    id: 3,
    title: "Feedback",
    link: [{ key: "Leave a feedback", value: "*" }],
  },
];

const Footer = () => (
  <footer>
    <section className="bg-[#232f3e] text-white p-12">
      <ul className="flex max-sm:flex-col max-sm:gap-8 w-full justify-evenly max-w-[1920px] m-auto">
        {redirectLinks.map((el) => (
          <li key={el.id} className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">{el.title}</h1>
            {el.link.map((el, i) => (
              <Link key={i} to={el.value} className="hover:underline">
                <p className="text-md">{el.key}</p>
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </section>
    <section className="flex flex-col items-center bg-[#131a22] p-8 gap-4">
      <nav className="flex gap-4 text-5xl text-white">
        {socialMedia.map((el) => (
          <Link key={el.id} to={el.link}>
            {el.icon}
          </Link>
        ))}
      </nav>
      <h1 className="text-white text-xl text-center">
        <span className="text-gray-500">© 2025 Copyright:</span> JoaoPedro787
      </h1>
    </section>
  </footer>
);

export default Footer;
