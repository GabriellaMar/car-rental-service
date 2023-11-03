
import { useDispatch, useSelector } from "react-redux";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import { useEffect, useState} from "react";
import { fetchAdvertThunk } from "../../redux/operation.js";
import { Container } from '../../components/Container/Container.jsx';




const CatalogPage = ({ adverts }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
    const [loadedCards, setloadedCards] = useState([]);

    useEffect(() => {
        dispatch(fetchAdvertThunk({ page: currentPage, limit: cardsPerPage }));
    }, [currentPage]);

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };


    useEffect(() => {
        setloadedCards([...loadedCards, ...adverts]);
        console.log(loadedCards)
    }, [adverts]);
    

    const totalPages = Math.ceil(adverts.length / cardsPerPage)
    

    return (
        <>
            <Container>
                <CatalogueList adverts={loadedCards} />
            <button onClick={loadMore}>LOAD MORE</button>
            </Container>
        </>
    );
}

export default CatalogPage;