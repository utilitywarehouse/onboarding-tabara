import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Quotes generator", () => {
  it("should call `onButtonClick` callback", () => {
    const onButtonClickMock = jest.fn()

  render(
    <Button onButtonClick={onButtonClickMock} />
  )

  fireEvent.click(screen.getByTestId("button"));
  expect(onButtonClickMock).toHaveBeenCalled()
  })
})
