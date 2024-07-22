import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);
test("Ads one person", () => {
  render(<TableReserve />);
  const heading = screen.getByTestId(personNumber);
  const btn = screen.getByTestId("addOne");
  fireEvent.click(btn);
  expect(heading).toHaveValue("2");
});
