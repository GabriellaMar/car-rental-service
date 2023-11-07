import { useSelector } from 'react-redux';
import { CatalogueCard } from "../CatalogueCard/CatalogueCard.jsx"
import { selectAdvertList } from '../../redux/selectors.js';
import { AdvertList } from './CatalogueList.styled'
import DropdownSelect from '../Search/Search.jsx';
import { useState } from 'react';


export const CatalogueList = ({ adverts }) => {
    // const adverts = useSelector(selectAdvertList);
   
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;




    
    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const paginate = cardsPerPage * currentPage
    return (
        <>
            <AdvertList>
                {adverts.slice(0, currentPage * cardsPerPage).map(advert => (
                    <CatalogueCard advert={advert} key={advert.id} />
                ))}

            </AdvertList>
            {adverts.length > paginate && (
                <button onClick={loadMore}>LOAD MORE</button>
            )}
        </>
    )
}