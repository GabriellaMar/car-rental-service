import { useSelector } from 'react-redux';
import { CatalogueCard } from "../CatalogueCard/CatalogueCard.jsx"
import { selectAdvertList } from '../../redux/selectors.js';
import { AdvertList } from './CatalogueList.styled'


export const CatalogueList = ({adverts}) => {
    // const adverts = useSelector(selectAdvertList);
   
    return (
        <>
            <AdvertList>
                {adverts.length > 0 && adverts.map(advert => <CatalogueCard advert={advert} key={advert.id} 
                 />)}
            </AdvertList>
        </>
    )
}