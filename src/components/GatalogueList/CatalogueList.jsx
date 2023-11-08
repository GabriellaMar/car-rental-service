
import { CatalogueCard } from "../CatalogueCard/CatalogueCard.jsx"
import { AdvertList, LoadMoreBtn } from './CatalogueList.styled'
import { useState } from 'react';


export const CatalogueList = ({ adverts }) => {
   
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
                 {adverts.length > paginate && (
                <LoadMoreBtn onClick={loadMore}>LOAD MORE</LoadMoreBtn>
            )}
            </AdvertList>
           
        </>
    )
}