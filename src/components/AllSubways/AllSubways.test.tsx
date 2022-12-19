import { render, screen } from "@testing-library/react";
import { AllSubways } from "./AllSubways";
import { Nav } from "../Nav";

test('renders "Loading"', () => {
  render(<AllSubways />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test("Nav component is rendered", async () => {
  const { container } = render(<Nav lines={[]} />);
  await (() => {
    expect(container.childElementCount).toEqual(1);
  });
});
