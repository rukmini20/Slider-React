import { useState, useEffect } from "react";
import data from "../data";
import Slider from "./slider";

function ImageSlider() {
  const [imageList] = useState(data);
  const [defaultImage, setDefaultImage] = useState(1);
  const [autoplay, setAutoplay] = useState(false);

  const preChangeImage = (direction) => {
    let newIndex = defaultImage + direction;

    if (newIndex < 1) {
      newIndex = imageList.length;
    } else if (newIndex > imageList.length) {
      newIndex = 1;
    }

    setDefaultImage(newIndex);
  };

  const changeImage = (img1) => {
    setDefaultImage(img1);
  };

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        preChangeImage(1); // Change to the next image
      }, 1000); // Change images every 1000 milliseconds (1 second)
    }

    return () => {
      clearInterval(interval); // Cleanup to prevent memory leaks
    };
  }, [autoplay, preChangeImage]); // Include preChangeImage in the dependency array

  const handleAutoplayChange = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div data-testid="app-slider-container">
      <img src={`/images/${defaultImage}.jpg`} alt="bitcoin" height="300px" />
      <Slider
        imageList={imageList}
        changeImage={changeImage}
        preChangeImage={preChangeImage}
      />
      <input
        type="checkbox"
        checked={autoplay}
        onChange={handleAutoplayChange}
      />
      <label data-testid="autoplay">Autoplay</label>
    </div>
  );
}
export default ImageSlider;
