import {  useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard";
import {  useState } from "react";
import { AdvertList } from "./FavoritesPage.styled";
import { NoFaviriteCars } from "../../components/NoFavorite/NoFavorite";
import { FovoritePageWrapper } from "../FavoritesPage/FavoritesPage.styled";
import { Footer } from "../../components/Footer/Footer";


const FavoritesPage = () => {
    const [showFavorite, setShowFavorite] = useState(true);

    const favorite = useSelector(state => state.favorite.favorite);
   
    return (
        <FovoritePageWrapper>
            <Container>
                {favorite.length > 0 ? (<AdvertList>
                    {showFavorite && favorite.map((card) => (
                        <CatalogueCard advert={card} key={card.id} />
                    ))}
                </AdvertList>) : (<NoFaviriteCars />)}
            </Container>
            <Footer />
        </FovoritePageWrapper>
    )
}

export default FavoritesPage;