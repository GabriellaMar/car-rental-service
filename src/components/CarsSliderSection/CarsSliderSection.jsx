
import gsap from 'gsap';
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SliderSection, SliderWrapper, SlideImage, SliderTittle, SliderText, FlexWrapper, ArrowWrapper, SliderSectionTittle } from "./CarsSliderSection.styled"
import { Container } from '../Container/Container';



export const CarsSliderSection = ({ adverts }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".car-tittle", { 
      x: 90,
      opacity: 0,
    }, 
    { 
      duration: 3,
      x: 0,
      opacity: 1,
    } )
    .fromTo(".description", { 
      y: 40,
      opacity: 0,
    }, 
    { 
      duration: 3,
      y: 0,
      opacity: 1,
    }, "-=1.3");
   
  }, [])

  

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
      .to(`.slide-${to}`, { opacity: 1, duration: 0.5 })
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
           <div key={advert.id}>
            <SliderTittle className='car-tittle'>{advert.make} {advert.model}</SliderTittle>
            <SliderText className= 'description' >{advert.description}</SliderText>
            </div>
        ))
        }
        <SliderWrapper onMouseEnter={pause} onMouseLeave={resume}>
          {adverts.map((advert, index) => (
            <SlideImage
              key={advert.id}
              src={advert.img}
              alt={advert.make}
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