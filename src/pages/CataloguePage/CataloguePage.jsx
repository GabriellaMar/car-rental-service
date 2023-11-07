
import { useDispatch, useSelector } from "react-redux";
// import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import { useEffect, useState} from "react";
import { fetchAdvertThunk } from "../../redux/operation.js";
import { Container } from '../../components/Container/Container.jsx';
// import { SearchSection } from "../../components/Search/Search.jsx";
import { selectAdvertList } from "../../redux/selectors.js";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import SearchSection from "../../components/Search/Search.jsx";




const CatalogPage = () => {
   
const adverts = useSelector(selectAdvertList);
    const dispatch = useDispatch();
    const [filteredAdverts, setFilteredAdverts] = useState([]);

    useEffect(() => {
        dispatch(fetchAdvertThunk( ));
    }, [ dispatch]);

    const updateFilteredAdverts = (filteredData) => {
        setFilteredAdverts(filteredData);
    };

    return (
        <>
            <Container>
      
                 {/* <SearchSection  adverts={adverts} />  */}
                 <SearchSection adverts={adverts}  updateFilteredAdverts={updateFilteredAdverts} />
              {/* <CatalogueList  adverts={adverts}  /> */}
              <CatalogueList adverts={filteredAdverts.length > 0 ? filteredAdverts : adverts} />
            </Container>
        </>
    );
}

export default CatalogPage;