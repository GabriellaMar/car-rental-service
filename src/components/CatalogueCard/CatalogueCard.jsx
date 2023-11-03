import { useDispatch, useSelector } from 'react-redux';

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
    CarInfoItem,
    StyledIconBlue,
    StyledBtn
} from './CatalogueCard.styled'

import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { selectFavorites } from '../../redux/selectors';
import { addFavoriteThunk, deleteFavoriteThunk } from '../../redux/operation';



export const CatalogueCard = ({ advert }) => {
    // console.log('ДАНІ В КАРДЦІ:', advert)
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
    const [showModal, setShowModal] = useState(false);
    const favorite = useSelector(selectFavorites);

    
    // const [isFavorite, setIsFavorite] = useState(false);
    const statusFavorite = favorite.includes(id);

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
        dispatch(addFavoriteThunk(advert))
        //  setIsFavorite(true)
    }

    const handleDeleteFavorites = (advertId) => {
        console.log('Delete!!!')
        dispatch(deleteFavoriteThunk(advertId))
        //  setIsFavorite(false)
    }
    // const handleAdvertDetails = (advertId)=>{
    //     console.log(advertId)
    //     dispatch(getAdvertThunk(advertId))
    //     toggleModal()

    // }

    return (
        <CardWrapper>
            <ImageWrapper>
                <CarImg src={img} alt={make} />
                <StyledBtn onClick={!statusFavorite ? handleAddFavorites : handleDeleteFavorites} type='button'>
                    {!statusFavorite ? <StyledIcon /> : <StyledIconBlue />}
                </StyledBtn>

                {/* <StyledIconBlue onClick={()=>handleDeleteFavorites(id)}/> */}

            </ImageWrapper>
            <CarInfoWrapper>
                <CarModelWrapper>
                    <CarModelTittle>{make} <span>{model}</span>, {year}
                    </CarModelTittle>

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
                <CardButton type='button' onClick={toggleModal}>Learn more</CardButton>
                {showModal && <Modal closeModal={toggleModal} data={advert} country={country} city={city} />}
            </div>
        </CardWrapper>
    )
}