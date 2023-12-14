
import { CatalogueCard } from "../CatalogueCard/CatalogueCard.jsx"
import { AdvertList } from './CatalogueList.styled'



export const CatalogueList = ({ adverts }) => {

    return (
        <AdvertList>
            {adverts.length > 0 && adverts.map(advert => <CatalogueCard advert={advert} key={advert.id} />)}
        </AdvertList>
    )
}