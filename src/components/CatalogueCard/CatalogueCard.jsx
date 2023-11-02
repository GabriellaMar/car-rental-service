import { useState } from 'react'
import volvo from '../../images/CardCars/Volvo1.jpg'
import { CarImg, CarInfoList, CarInfoWrapper, CardButton, CardWrapper, ImageWrapper, CarModelWrapper, CarModelTittle, StyledIcon } from './CatalogueCard.styled'

export const CatalogueCard = ({ advert , toggleModal}) => {
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
        const country = location[location.length-1];
        const city = location[(location.length-1)-1];
        
       
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
                    <li>{city} | </li>
                    <li>{country} | </li>
                    <li>{rentalCompany}  </li>
                    {/* <li>Premium</li> */}
                </CarInfoList>
                <CarInfoList>
                    <li>{type}</li>
                    <li>{model} </li>
                    <li>{mileage}</li>
                    <li>{functionalities[0]}</li>
                </CarInfoList>
                <CardButton type='button'  onClick={toggleModal}>Learn more</CardButton>
            </div>
        </CardWrapper>
    )
}