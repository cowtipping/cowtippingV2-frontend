import { screen, render } from "@testing-library/react";
import ProjectContainer from "../components/ProjectContainer";

test("renders the project container", () => {
  render(<ProjectContainer />);
  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
});

test("all projects have links to GitHub and live site", () => {
  render(<ProjectContainer />);
  const projectLinks = screen.getAllByRole("link");
  expect(projectLinks).toHaveLength(10);
});

test("all projects have a title", () => {
  render(<ProjectContainer />);
  const projectTitles = screen.getAllByRole("heading", { level: 5 });
  expect(projectTitles).toHaveLength(5);
});

test("project descriptions should not be empty", () => {
  render(<ProjectContainer />);
  const projectDescriptions = screen.getAllByTestId("project-description");
  projectDescriptions.forEach((description) => {
    expect(description).not.toBeEmptyDOMElement();
  });
});

test("project tags should not be empty", () => {
  render(<ProjectContainer />);
  const projectTags = screen.getAllByTestId("project-tags");
  projectTags.forEach((tags) => {
    expect(tags).not.toBeEmptyDOMElement();
  });
});
