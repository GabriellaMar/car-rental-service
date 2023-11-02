
import { useDispatch } from "react-redux";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import { useEffect} from "react";
import { fetchAdvertThunk } from "../../redux/operation.js";
// import { Modal } from "../../components/Modal/Modal"
import { Container } from '../../components/Container/Container.jsx'


const CatalogPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdvertThunk());
    }, []);

    return (
        <>
            <Container>
                <CatalogueList />
            </Container>
        </>
    )
}

export default CatalogPage;