import { render, screen, fireEvent } from "@testing-library/react";
import { Carousel } from "@/components";

describe("<Carousel />", () => {
  const mockData = [
    { src: "image1.jpg", alt: "Image 1 for carousel" },
    { src: "image2.jpg", alt: "Image 2 for carousel" },
    { src: "image3.jpg", alt: "Image 3 for carousel" },
  ];

  it("renders images correctly", () => {
    render(<Carousel brand="BMW" />);
    const imageElements = screen.getAllByRole("img");
    expect(imageElements).toHaveLength(mockData.length);
    expect(imageElements[0]).toHaveAttribute("alt", mockData[0].alt);
    expect(imageElements[1]).toHaveAttribute("alt", mockData[1].alt);
  });

  it("allows navigation between images", () => {
    render(<Carousel brand="BMW" />);

    const leftArrow = screen.getByTestId("arrowLeft");
    const rightArrow = screen.getByTestId("arrowRight");

    const initialImage = screen.getByTestId("imageCarousel0");
    const secondImage = screen.getByTestId("imageCarousel1");
    const lastImage = screen.getByTestId("imageCarousel2");

    // Initial slide
    expect(initialImage).not.toHaveClass("slideHidden");
    expect(secondImage).toHaveClass("slideHidden");
    expect(lastImage).toHaveClass("slideHidden");

    // Next slide
    fireEvent.click(rightArrow);

    expect(initialImage).toHaveClass("slideHidden");
    expect(secondImage).not.toHaveClass("slideHidden");
    expect(lastImage).toHaveClass("slideHidden");

    // Previous slide
    fireEvent.click(leftArrow);

    expect(initialImage).not.toHaveClass("slideHidden");
    expect(secondImage).toHaveClass("slideHidden");
    expect(lastImage).toHaveClass("slideHidden");
  });
});
