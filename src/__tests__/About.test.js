import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About component", () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders icons in tech stack list", () => {
  render(<About />);
  expect(screen.getByTestId("react-icon")).toBeInTheDocument();
  expect(screen.getByTestId("node-icon")).toBeInTheDocument();
  expect(screen.getByTestId("express-icon")).toBeInTheDocument();
  expect(screen.getByTestId("postgres-icon")).toBeInTheDocument();
  expect(screen.getByTestId("typescript-icon")).toBeInTheDocument();
  expect(screen.getByTestId("next-icon")).toBeInTheDocument();
  expect(screen.getByTestId("jest-icon")).toBeInTheDocument();
  expect(screen.getByTestId("cypress-icon")).toBeInTheDocument();
});