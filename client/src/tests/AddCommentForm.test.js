import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCommentForm from "../components/AddCommentForm";

describe("AddCommentForm", () => {
  let func;
  let inputAuthor;
  let inputBody;
  let submitButton;
  beforeEach(() => {
    func = jest.fn();
    render(<AddCommentForm onSubmit={func} />);
    inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    submitButton = screen.getByRole("button", { name: "Submit" });
  });
  it("contains h2 heading", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Post a Comment",
    });
    expect(heading).toBeInTheDocument();
  });
  it("changes the input state when author is changed", () => {
    userEvent.type(inputAuthor, "Srdjan");
    expect(inputAuthor).toHaveValue("Srdjan");
  });
  it("changes the textbox state when body is changed", () => {
    userEvent.type(inputBody, "My Comment");
    expect(inputBody).toHaveValue("My Comment");
  });
  it("calls onSubmit when form is submitted", () => {
    userEvent.click(submitButton);
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls onSubmit with the new comment passed in", () => {
    userEvent.type(inputAuthor, "Srdjan");
    userEvent.type(inputBody, "My Comment");
    const newComment = { author: inputAuthor.value, body: inputBody.value };
    userEvent.click(submitButton);
    expect(func.mock.calls[0][0]).toEqual(newComment);
  });
  it("finds input group div", () => {
    const inputDiv = screen.getByTestId("input-group");
  });
});
