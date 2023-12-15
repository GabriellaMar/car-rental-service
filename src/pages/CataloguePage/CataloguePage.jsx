import { useEffect, useState } from "react";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import SearchSection from "../../components/Search/Search.jsx";
import { StyledWrapper } from "../CataloguePage/CataloguePage.styled.jsx";
import { LoadMoreBtn } from "./CataloguePage.styled.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";


const CatalogPage = ({ adverts, currentPage, setCurrentPage }) => {

    const [loadedCards, setloadedCards] = useState([]);
    const cardsPerPage = 12;

    useEffect(() => {
        setloadedCards(prevLoadedCards => [...prevLoadedCards, ...adverts]);
    }, [adverts]);


    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    }

    const updateFilteredAdverts = (filteredData) => {
        setloadedCards(filteredData);
    };

    return (
        <>
            <Container>
                < StyledWrapper>
                    <SearchSection adverts={adverts} updateFilteredAdverts={updateFilteredAdverts} />
                    <CatalogueList adverts={loadedCards.length > 0 ? loadedCards : adverts} >
                    </CatalogueList>
                    {(adverts.length >= cardsPerPage && loadedCards.length >= adverts.length) && (
                        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
                    )}

                </StyledWrapper>
            </Container>
            <Footer />
        </>
    );
}

export default CatalogPage;