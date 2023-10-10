function Slider({ imageList, changeImage, preChangeImage }) {
  return (
    <div className="slider-container">
      <div>
        <button className="left" onClick={() => preChangeImage(1)}>
          {"<"}
        </button>
        {imageList.map((item) => {
          return (
            <span className="slider-img" onClick={() => changeImage(item.id)}>
              {<img height="50px" src={item.url} alt={item?.name} />}
            </span>
          );
        })}
        <button className="right" onClick={() => preChangeImage(-1)}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Slider;
