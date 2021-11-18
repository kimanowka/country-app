import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
const NavBar = styled.div`
  padding: 2rem 0;
  box-shadow: var(--shadow);
`;
const NavBarEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link).attrs({ to: "/main" })`
  text-decoration: none;
  color: var(--colors-text);
`;

const SwitchThemeLogo = styled.div``;
export const Navbar = (): JSX.Element => {
  const [theme, setTheme] = useState<string>("светлая");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "светлая" ? "темная" : "светлая");
  };
  return (
    <>
      <NavBar>
        <Container>
          <NavBarEl>
            <Logo>Посмотрим на страны?</Logo>
            <SwitchThemeLogo onClick={toggleTheme}>
              {theme === "светлая" ? (
                <IoMoonOutline size="14px" />
              ) : (
                <IoMoon size="14px" />
              )}
              {theme} тема
            </SwitchThemeLogo>
          </NavBarEl>
        </Container>
      </NavBar>
    </>
  );
};
