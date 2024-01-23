import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "all 0.5s ease-in-out",
};

const rigthArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(0,  -50%)",
  right: "32px",
  cursor: "pointer",
  zIndex: "1",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(0,  -50%)",
  left: "32px",
  cursor: "pointer",
  zIndex: "1",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};


const AdSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {

    const isLast = current === slides.length - 1;
    const newIndex = isLast ? 0 : current + 1;
    setCurrent(newIndex);

  };

  const prevSlide = () => {

    const isFirst = current === 0;
    const newIndex = isFirst ? slides.length - 1 : current - 1;
    setCurrent(newIndex);

  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[current].imgPath})`,
  };

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 4000);

    return () => clearInterval(interval);

  }, [current]);

  return (

    <div style={sliderStyles}>

      <div style={leftArrowStyles}>

        <KeyboardArrowLeftIcon onClick={prevSlide} />

      </div>

      <div style={rigthArrowStyles}>

        <KeyboardArrowRightIcon onClick={nextSlide} />

      </div>

      <div style={slideStylesWidthBackground} >

      </div>

    </div>

  );

};

export default AdSlider;
