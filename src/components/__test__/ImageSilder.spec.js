import { render } from "@testing-library/react";
import ImageSlider from "../ImageSilder";

describe("Image Slider", () => {
  test("app should render without fail", async () => {
    const { getByTestId, getByText } = render(<ImageSlider />);

    expect(getByText("Autoplay")).toBeDefined();
    //expect(getByTestId("autoplay")).toHaveTextContent("Autoplay");
    expect(getByTestId("app-slider-container")).toBeDefined();
  });
});
