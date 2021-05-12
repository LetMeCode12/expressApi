import { render, screen } from "@testing-library/react";
import MainPage from "../../../containers/mainPage/MainPage";

describe("MainPage test", () => {
  render(<MainPage history={{ push: () => {} }} />);
  it("Test render", async () => {
    const element = await screen.findByText("Witam na stonie głównej");
    expect(element).toBeInTheDocument();
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(3);
    const inputUsername = await screen.findByTitle("encode");
    expect(inputUsername).toBeInTheDocument();
    const inputPassword = await screen.findByTitle("decode");
    expect(inputPassword).toBeInTheDocument();
  });
});
