import volvo from '../../images/CardCars/Volvo1.jpg'
import { CarImg, CarInfoList, CarInfoWrapper, CardButton, CardWrapper, ImageWrapper, CarModelWrapper, CarModelTittle, StyledIcon } from './CatalogueCard.styled'

export const CatalogueCard = () => {
    return (
        <CardWrapper>
            <ImageWrapper>
                <CarImg src={volvo} />
                <StyledIcon />
            </ImageWrapper>
            <CarInfoWrapper>
                <CarModelWrapper>
                <CarModelTittle>Volvo 
                    <span> XC90</span>, 2019
                </CarModelTittle>
                {/* <p>2019
                    <span style={{ color: 'black' }}>,</span>
                </p> */}
                </CarModelWrapper>
                <p>50$</p>
            </CarInfoWrapper>
            <div>
                <CarInfoList>
                    <li>Lviv | </li>
                    <li>Ukraine | </li>
                    <li>Auto Rentals | </li>
                    <li>Premium</li>
                </CarInfoList>
                <CarInfoList>
                    <li>Suv </li>
                    <li>Volvo </li>
                    <li>9584 </li>
                    <li>Premium Sound System</li>
                </CarInfoList>
                <CardButton type='button'>Learn more</CardButton>
            </div>
        </CardWrapper>
    )
}