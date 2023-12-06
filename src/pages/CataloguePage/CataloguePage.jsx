
// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchAdvertThunk } from "../../redux/operation.js";
// import { Container } from '../../components/Container/Container.jsx';
// import { selectAdvertList } from "../../redux/selectors.js";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import SearchSection from "../../components/Search/Search.jsx";

import {StyledWrapper } from "../CataloguePage/CataloguePage.styled.jsx";
import { LoadMoreBtn } from "./CataloguePage.styled.jsx";
import { Container } from "../../components/Container/Container.jsx";



const CatalogPage = ({adverts, currentPage, setCurrentPage}) => {

    // const adverts = useSelector(selectAdvertList);

    // const dispatch = useDispatch();
    const [loadedCards, setloadedCards] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

    // useEffect(() => {
    //     dispatch(fetchAdvertThunk({page: currentPage, limit: cardsPerPage}));
        
    // }, [dispatch, currentPage]);

  
    useEffect(() => {
        setloadedCards(prevLoadedCards => [...prevLoadedCards, ...adverts]);
    }, [adverts]);


    const loadMore = ()=>{
        setCurrentPage(currentPage + 1);
       
    }


    
    const updateFilteredAdverts = (filteredData) => {
        setloadedCards(filteredData);
    };


    return (
            // < StyledWrapper>
            <Container>
                < StyledWrapper>
                <SearchSection adverts={adverts} updateFilteredAdverts={updateFilteredAdverts} />
                <CatalogueList adverts={loadedCards.length > 0 ? loadedCards : adverts} >
                 </CatalogueList>
                 {adverts.length>=cardsPerPage  && (
                <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
                )}
                </StyledWrapper>
            </Container>
            // </ StyledWrapper>
    );
}

export default CatalogPage;