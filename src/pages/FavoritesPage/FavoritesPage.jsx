import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList";
import { selectAdvertList, selectFavorites } from "../../redux/selectors";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard";
import { useEffect } from "react";
import { fetchAdvertThunk } from "../../redux/operation";

const FavoritesPage = () => {
    const favorite = useSelector(selectFavorites);
    const favoriteCards = useSelector(selectAdvertList);
    const filteredFavoriteCards = favoriteCards.filter((card) => favorite.includes(card.id));
    console.log(favoriteCards)
    console.log(filteredFavoriteCards)

    console.log(favorite)

    return (
        <Container>
            {filteredFavoriteCards.map((card) => (
                <CatalogueCard advert={card} key={card.id} />))}


        </Container>
    )
}


export default FavoritesPage;