import { useSelector } from 'react-redux';
import { CatalogueCard } from "../CatalogueCard/CatalogueCard.jsx"
import { selectAdvertList } from '../../redux/selectors.js';
import { AdvertList } from './CatalogueList.styled'
import { useState } from 'react';
import { Modal } from '../Modal/Modal.jsx';

export const CatalogueList = () => {
    const adverts = useSelector(selectAdvertList);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {

        setShowModal(!showModal);
        if (showModal) { document.body.style.overflow = 'hidden' }
        else { document.body.style.overflow = 'auto' }
    };

    return (
        <>
            <AdvertList>
                {adverts.length > 0 && adverts.map(advert => <CatalogueCard advert={advert} key={advert.id} openModal={toggleModal} />)}
            </AdvertList>
            {showModal && <Modal closeModal={toggleModal} />}
        </>
    )
}