import { screen, render, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders the links in the header", () => {
  render(<Navbar />);
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
});

test("renders the hamburger menu", () => {
  render(<Navbar />);
  expect(screen.getByRole("button", { name: "menu" })).toBeInTheDocument();
});

test("hides menu on scroll", () => {
  render(<Navbar />);
  const menuNav = screen.getByRole("list");
  // Verify that the menu is initially open
  expect(menuNav).toHaveClass("showMenu");
  // Simulate scrolling to the top of the page
  Object.defineProperty(window, "scrollY", { value: 100 });
  fireEvent.scroll(window);
  // Verify that the menu is now closed
  expect(menuNav).not.toHaveClass("showMenu");
});

test("hides menu on click of hamburger icon", () => {
  render(<Navbar />);
  const menuNav = screen.getByRole("list");
  expect(menuNav).toHaveClass("showMenu");
  // Simulate clicking the menu button
  fireEvent.click(screen.getByRole("button", { name: "menu" }));
  expect(menuNav).not.toHaveClass("showMenu");
});

// TODO: FIX WHATEVER THE HELL IS WRONG WITH THIS
/* test("hides menu on click of menu link", () => {
  render(<Navbar />);
  const menuNav = screen.getByRole("list");
  expect(menuNav).toHaveClass("showMenu");
  // Simulate clicking a menu link
  fireEvent.click(screen.getByRole("link", { name: /home/i }));
  expect(menuNav).not.toHaveClass("showMenu");
}); */
