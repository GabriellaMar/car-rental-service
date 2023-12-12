import {  useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard";
import { AdvertList } from "./FavoritesPage.styled";
import { NoFavoriteCars } from "../../components/NoFavorite/NoFavorite";
import { Footer } from "../../components/Footer/Footer";


const FavoritesPage = () => {
  
    const favorite = useSelector(state => state.favorite.favorite);
   
    return (
        <>
            <Container>
                {favorite.length > 0 ? (<AdvertList>
                    { favorite.map((card) => (
                        <CatalogueCard advert={card} key={card.id} />
                    ))}
                </AdvertList>) : (<NoFavoriteCars />)}
            </Container>
            <Footer /> 
          </>
    )
}

export default FavoritesPage;