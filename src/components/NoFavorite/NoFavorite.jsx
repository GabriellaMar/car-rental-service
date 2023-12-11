
import cars from '../../images/CardCars/Nocar.png';

import {
    StyledWrapper,
    NoFavoriteImg,
  NoFavoriteText,
} from './NoFavorite.styled';


 export const NoFavoriteCars = () => {
  return (

    <StyledWrapper>
      <NoFavoriteText>No cars available</NoFavoriteText>
       <NoFavoriteImg src={cars} alt="set Of Cars" /> 
    </StyledWrapper>
  );
};

