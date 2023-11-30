import { useDispatch, useSelector } from 'react-redux';

import {
    CarImg,
    CarInfoList,
    CarInfoWrapper,
    CardButton,
    CardWrapper,
    ImageWrapper,
    // CarModelWrapper,
    CarModelTittle,
    StyledIcon,
    CarInfoItem,
    StyledIconBlue,
    StyledBtn,
    InfoTextWrapper
} from './CatalogueCard.styled'

import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { selectFavorites } from '../../redux/selectors';

import { addFavorite, deleteFavorite } from '../../redux/slice/favoriteSlice';



export const CatalogueCard = ({ advert }) => {
    // console.log('ДАНІ В КАРДЦІ:', advert)
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
        mileage} = advert;

    const [showModal, setShowModal] = useState(false);
    const favoriteCars = useSelector(selectFavorites);

    const statusFavorite = favoriteCars.some((item) => item.id === advert.id);

    const dispatch = useDispatch();



    const location = address.split(' ');
    const country = location[location.length - 1];
    const city = location[(location.length - 1) - 1];

   



    const toggleModal = () => {

        setShowModal(!showModal);
        if (showModal) { document.body.style.overflow = 'hidden' }
        else { document.body.style.overflow = 'auto' }
    };



    const handleAddFavorites = () => {
        console.log("ADDDDDD!!!")
        dispatch(addFavorite(advert))

    }

    const handleDeleteFavorites = () => {
        console.log(id);
        console.log('Delete!!!');

        dispatch(deleteFavorite(id));
    }

    return (
        <CardWrapper>
            <ImageWrapper>
                <CarImg src={img} alt={make} />
                <StyledBtn onClick={!statusFavorite ? handleAddFavorites : handleDeleteFavorites} type='button'>
                    {!statusFavorite ? <StyledIcon /> : <StyledIconBlue />}
                </StyledBtn>
            </ImageWrapper>
            <CarInfoWrapper>
                    <CarModelTittle>{make} <span>{model}</span>, {year}
                    </CarModelTittle>
                <p>{rentalPrice}</p>
            </CarInfoWrapper>
            <InfoTextWrapper>
                <CarInfoList>
                    <CarInfoItem>{city} </CarInfoItem>
                    <CarInfoItem>{country} </CarInfoItem>
                    <CarInfoItem>{rentalCompany}  </CarInfoItem>
                    <CarInfoItem>{type}</CarInfoItem>
                    {/* <li>Premium</li> */}
                </CarInfoList>
                <CarInfoList>
                   
                    <CarInfoItem>{model} </CarInfoItem>
                    <CarInfoItem>{mileage}</CarInfoItem>
                    <CarInfoItem>{functionalities[0]}</CarInfoItem>
                </CarInfoList>
            </InfoTextWrapper>
            <CardButton type='button' onClick={toggleModal}>Learn more</CardButton>
                {showModal && <Modal closeModal={toggleModal} data={advert} country={country} city={city} />}
        </CardWrapper>
    )
}

