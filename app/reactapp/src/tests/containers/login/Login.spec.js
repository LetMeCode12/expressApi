import { render, screen } from "@testing-library/react";
import Login from "../../../containers/login/Login";

describe("Login test", () => {
  render(<Login />);
  it("Test render elements", async () => {
    const element = await screen.findByText("Logowanie");
    expect(element).toBeInTheDocument();
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
    const inputUsername = await screen.findByTitle("username");
    expect(inputUsername).toBeInTheDocument();
    const inputPassword = await screen.findByTitle("password");
    expect(inputPassword).toBeInTheDocument();  
  });
});
