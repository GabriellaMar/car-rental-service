// import { useDispatch, useSelector } from "react-redux";
import { SliderSection , SliderWrapper} from "./CarsSliderSection.styled"
// import { selectAdvertList } from "../../redux/selectors";
// import { fetchAdvertThunk } from "../../redux/operation";
// import { useEffect } from "react";

export const CarsSliderSection = ({adverts}) => {
    console.log("Adverts", adverts);
    
    return (
      <SliderSection>
        <h2>Our Cars</h2>
       
        {adverts.map((advert) => {
          console.log("Advert", advert);
          return <SliderWrapper key={advert.id}  style={{ backgroundImage: `url(${advert.img})` }} > </SliderWrapper>
        })}
 
      </SliderSection>
    );
  };