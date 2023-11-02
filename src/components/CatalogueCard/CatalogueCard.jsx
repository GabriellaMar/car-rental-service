

import {
    CarImg,
    CarInfoList,
    CarInfoWrapper,
    CardButton,
    CardWrapper,
    ImageWrapper,
    CarModelWrapper,
    CarModelTittle,
    StyledIcon,
    CarInfoItem
} from './CatalogueCard.styled'
// import { Modal } from '../Modal/Modal'

export const CatalogueCard = ({ advert, openModal }) => {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        description,
        fuelConsumption,
        engineSize,
        accessories,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
        mileage,
        rentalConditions } = advert


    const location = address.split(' ');
    const country = location[location.length - 1];
    const city = location[(location.length - 1) - 1];

    return (
        <CardWrapper>
            <ImageWrapper>
                <CarImg src={img} />
                <StyledIcon />
            </ImageWrapper>
            <CarInfoWrapper>
                <CarModelWrapper>
                    <CarModelTittle>{make} <span>{model}</span>, {year}
                    </CarModelTittle>
                    {/* <p>2019
                    <span style={{ color: 'black' }}>,</span>
                </p> */}
                </CarModelWrapper>
                <p>{rentalPrice}</p>
            </CarInfoWrapper>
            <div>
                <CarInfoList>
                    <CarInfoItem>{city} | </CarInfoItem>
                    <CarInfoItem>{country} | </CarInfoItem>
                    <CarInfoItem>{rentalCompany}  </CarInfoItem>
                    {/* <li>Premium</li> */}
                </CarInfoList>
                <CarInfoList>
                    <CarInfoItem>{type}</CarInfoItem>
                    <CarInfoItem>{model} </CarInfoItem>
                    <CarInfoItem>{mileage}</CarInfoItem>
                    <CarInfoItem>{functionalities[0]}</CarInfoItem>
                </CarInfoList>
                <CardButton type='button' onClick={openModal}>Learn more</CardButton>
            </div>
        </CardWrapper>
    )
}