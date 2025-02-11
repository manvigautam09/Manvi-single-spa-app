import React from "react";
import styled from "@emotion/styled";
import useStore from "../../src/store";
import dark from "./assets/dark.svg";
import light from "./assets/light.svg";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.theme === "dark" ? "#2c3e50" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#2c3e50")};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

export default function Root(props) {
  const { user, theme, setTheme } = useStore();
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Only render on home or root path, not on profile
  if (currentPath === "/profile") {
    return null;
  }

  console.log(theme);
  return (
    <Container>
      <Title>Hi {user.name},</Title>
      <Subtitle> Welcome to your Dashboard</Subtitle>
      <Card theme={theme}>
        <p>Customize your App appearance</p>
        <Image
          src={theme === "light" ? light : dark}
          alt="theme"
          onClick={toggleTheme}
        />
      </Card>
    </Container>
  );
}
