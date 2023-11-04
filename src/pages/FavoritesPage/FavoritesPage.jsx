import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList";
import { selectAdvertList, selectFavorites } from "../../redux/selectors";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard";
import { useEffect, useState } from "react";
import { fetchAdvertThunk } from "../../redux/operation";
import { AdvertList } from "./FavoritesPage.styled";


const FavoritesPage = () => {
    const [showFavorite, setShowFavorite] = useState(true); // Показати обрані за замовчуванням

    const favorite = useSelector(state => state.favorite.favorite);
    console.log('FAVORITE на сторінці Фейворит', favorite);

    return (
        <Container>
            <AdvertList>
            {showFavorite && favorite.map((card) => (
                <CatalogueCard advert={card} key={card.id} />
            ))}
            </AdvertList>
        </Container>
    )
}

export default FavoritesPage;