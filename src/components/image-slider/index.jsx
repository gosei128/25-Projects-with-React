import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currectSlide, setCurrentSlide] = useState(0);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrevious = () => {
    setCurrentSlide(currectSlide === 0 ? images.length - 1 : currectSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currectSlide === images.length - 1 ? 0 : currectSlide + 1);
  };

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErr(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>Loading data...</div>;
  }
  if (err !== null) {
    return <div>Error Occured</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currectSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currectSlide === index
                    ? "current-inidcator"
                    : "current-indicator hide-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
