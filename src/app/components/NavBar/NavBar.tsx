import { NavigationLinkEnum } from "@/assets/enum";
import { Logo } from "../Logo";
import { CustomLink } from "./CustomLink";

// const social_links = [
//   {
//     link: "https://github.com/Carlos170702",
//     icon: <GithubIcon />,
//   },
//   {
//     link: "https://www.linkedin.com/in/carlos-cruz-a768a1244/",
//     icon: <LinkedInIcon />,
//   },
// ];

const navigation_links = [
  {
    link: NavigationLinkEnum.HOME,
    title: "Inicio",
  },
  {
    link: NavigationLinkEnum.ABOUT_ME,
    title: "Acerca de mi",
  },
  {
    link: NavigationLinkEnum.PROJECTS,
    title: "Proyectos",
  },
];

const NavBar = ({ }) => {
  return (
    <header className="font-medium items-center justify-between py-5 hidden md:flex">
      <Logo />
      <nav className="flex gap-5 ">
        {navigation_links.map((item, index) => (
          <CustomLink key={index} href={item.link} title={item.title} />
        ))}
      </nav>

      {/* Todo: Falta por hacer el sidebar */}

      {/* <Sidebar /> */}

      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      </div> */}

      {/* <nav className="">
        <ul className="flex gap-5 items-center justify-center">
          {social_links.map((item, index) => (
            <CustomSocialLink key={index} link={item.link}>
              {item.icon}
            </CustomSocialLink>
          ))}
        </ul>
      </nav> */}
    </header>
  );
};

export default NavBar;
