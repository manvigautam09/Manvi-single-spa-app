import React from "react";
import styled from "@emotion/styled";
import useStore from "../../src/store";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background: ${(props) => (props.theme === "dark" ? "#2c3e50" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#2c3e50")};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
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

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${(props) => (props.theme === "dark" ? "#34495e" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#2c3e50")};
`;

export default function Root(props) {
  const { theme, user, setUser } = useStore();

  const [formData, setFormData] = React.useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>Profile Settings</Title>
      <Card theme={theme}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <Input
              theme={theme}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email:</label>
            <Input
              theme={theme}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Role:</label>
            <Input
              theme={theme}
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
            />
          </div>
          <Button type="submit">Save Profile</Button>
        </form>
      </Card>

      {user && (
        <Card theme={theme}>
          <h3>Current Profile</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </Card>
      )}
    </Container>
  );
}
