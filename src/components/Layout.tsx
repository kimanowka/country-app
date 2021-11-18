import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Container } from "./Container";
import { Search } from "./Search";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Container>
        <Search />
        <Outlet />
      </Container>
    </>
  );
};
