// import { useDispatch, useSelector } from "react-redux";
import gsap from 'gsap';
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SliderSection, SliderWrapper, SlideImage, SliderTittle, SliderText, FlexWrapper, ArrowWrapper, SliderSectionTittle } from "./CarsSliderSection.styled"
import { Container } from '../Container/Container';
// import { selectAdvertList } from "../../redux/selectors";
// import { fetchAdvertThunk } from "../../redux/operation";
// import { useEffect } from "react";



export const CarsSliderSection = ({ adverts }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    const slide = activeSlide + 1 < adverts.length ? activeSlide + 1 : 0;
    animateSlide(activeSlide, slide);
    setActiveSlide(slide);
  }, [activeSlide, adverts.length]);

  const prevSlide = useCallback(() => {
    const slide = activeSlide - 1 < 0 ? adverts.length - 1 : activeSlide - 1;
    animateSlide(activeSlide, slide);
    setActiveSlide(slide);
  }, [activeSlide, adverts.length]);

  const animateSlide = (from, to) => {
    gsap.timeline()
      .to(`.slide-${from}`, { opacity: 0, duration: 0.5 })
      .set(`.slide-${from}`, { display: 'none' })
      .set(`.slide-${to}`, { display: 'block' })
      .from(`.slide-${to}`, { opacity: 0, duration: 0.5 })
      .to(`.slide-${to}`, { opacity: 1, duration: 0.5 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, autoplay]);

  const pause = () => {
    setAutoplay(false);
  };

  const resume = () => {
    setAutoplay(true);
  };

  return (
    <SliderSection>
      <Container>
      <SliderSectionTittle>Our Cars</SliderSectionTittle>
         <FlexWrapper> 
        {adverts.map((advert, index) => (index === activeSlide &&
          <>
            <SliderTittle>{advert.make} {advert.model}</SliderTittle>
            <SliderText key={advert.id}>{advert.description}</SliderText>
          </>
        ))
        }
        <SliderWrapper>
          {adverts.map((advert, index) => (
            <SlideImage
              key={advert.id}
              src={advert.img}
              alt={`Car ${index}`}
              className={`slide-${index} ${index === activeSlide ? 'active' : ''}`}
            />
          ))}
        </SliderWrapper>
         </FlexWrapper> 
         <ArrowWrapper>
          <FaArrowLeftLong onClick={prevSlide} onMouseEnter={pause} onMouseLeave={resume} />
          <FaArrowRightLong onClick={nextSlide} onMouseEnter={pause} onMouseLeave={resume} />
        </ArrowWrapper>
      </Container>
    </SliderSection>
  );
};