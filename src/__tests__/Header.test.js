import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header component", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Adie Nunn/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the icons in the header", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
});