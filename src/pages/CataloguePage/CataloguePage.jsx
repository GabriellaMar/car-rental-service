
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdvertThunk } from "../../redux/operation.js";
import { Container } from '../../components/Container/Container.jsx';
import { selectAdvertList } from "../../redux/selectors.js";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import SearchSection from "../../components/Search/Search.jsx";
// import { ToastContainer, toast } from 'react-toastify';
// import { CatalogPageWrapper } from "../MainPage/MainPage.styled.jsx";
import { LoadMoreBtn } from "../../components/GatalogueList/CatalogueList.styled.jsx";



const CatalogPage = () => {

    const adverts = useSelector(selectAdvertList);

    const dispatch = useDispatch();
    // const [filteredAdverts, setFilteredAdverts] = useState([]);
    const [loadedCards, setloadedCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

    useEffect(() => {
        dispatch(fetchAdvertThunk({page: currentPage, limit: cardsPerPage}));
        
    }, [dispatch, currentPage]);

  
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
            <Container>
                <SearchSection adverts={adverts} updateFilteredAdverts={updateFilteredAdverts} />
                <CatalogueList adverts={loadedCards.length > 0 ? loadedCards : adverts} />
                {adverts.length>=cardsPerPage  && (
                <LoadMoreBtn onClick={loadMore}>LOAD MORE</LoadMoreBtn>
            )}
            </Container>
    );
}

export default CatalogPage;