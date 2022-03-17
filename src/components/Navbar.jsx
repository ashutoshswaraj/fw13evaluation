import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },

  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },

  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },

  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      {links.map(({ title, link }, index) => {
        return (
          <NavLink
            key={index}
            to={link}
            style={() => ({
            
              padding: 10,
            })}
          >
            {title}
          </NavLink>
        );
      })}
    </>
    //map through the link ad display it in header
  );
};
