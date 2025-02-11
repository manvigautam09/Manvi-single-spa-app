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
  position: relative;
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

const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #3498db;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.1);
  }
`;

const ProfileField = styled.div`
  margin: 1rem 0;

  strong {
    display: inline-block;
    width: 100px;
    margin-right: 1rem;
  }
`;

export default function Root(props) {
  const { theme, user, setUser } = useStore();
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isEditing) {
    return (
      <Container>
        <Title>Profile Settings</Title>
        <Card theme={theme}>
          <EditButton onClick={() => setIsEditing(true)}>
            <span role="img" aria-label="edit">
              ✎
            </span>
            Edit Profile
          </EditButton>
          <h3>Current Profile</h3>
          <ProfileField>
            <strong>Name:</strong> {user.name}
          </ProfileField>
          <ProfileField>
            <strong>Email:</strong> {user.email}
          </ProfileField>
          <ProfileField>
            <strong>Role:</strong> {user.role}
          </ProfileField>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Edit Profile</Title>
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
          <Button type="submit">Save Changes</Button>
          <Button
            type="button"
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: "1rem", background: "#95a5a6" }}
          >
            Cancel
          </Button>
        </form>
      </Card>
    </Container>
  );
}
