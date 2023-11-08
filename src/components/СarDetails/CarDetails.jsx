
import { RentalCarBtn } from "../RentalBtn/RentalCarBtn";
import {
    CarDescription,
    CarDescriptionList,
    CarImage,
    CarInfoTittle,
    CarModalItem,
    CarModalList,
    CarModalTittle,
    ModalWindow,
    CarDescriptionItem,
    CarFunctionality
} from "./CarDetails.styled"

export const CarDetails = ({ data, country, city }) => {

    if (!data) {
        return
    }
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        description,
        fuelConsumption,
        engineSize,
        accessories,
        functionalities,
        rentalPrice,
        mileage,
        rentalConditions } = data;


    const conditionsArray = rentalConditions.split('\n');
    const number = parseInt(conditionsArray[0].match(/\d+/))

    return (
        <ModalWindow>
            <CarImage src={img} alt={make} />
            <CarModalTittle>{make} <span>{model}</span>, {year} </CarModalTittle>
            <CarModalList>
                <CarModalItem>{city} | </CarModalItem>
                <CarModalItem>{country} | </CarModalItem>
                <CarModalItem>id: {id} | </CarModalItem>
                <CarModalItem>{year} |</CarModalItem>
                <CarModalItem>Type: {type}  </CarModalItem>
            </CarModalList>
            <CarModalList>
                <CarModalItem>Fuel Consumption: {fuelConsumption} |</CarModalItem>
                <CarModalItem>Engine Size: {engineSize} </CarModalItem>
            </CarModalList>
            <CarDescription>{description}</CarDescription>
            <CarInfoTittle>Accessories and functionalities:</CarInfoTittle>
            <CarFunctionality>{accessories.join(' | ')}</CarFunctionality>
            <CarFunctionality>{functionalities.join(' | ')}</CarFunctionality>
            <CarInfoTittle>Rental Conditions: </CarInfoTittle>
            <CarDescriptionList>
                <CarDescriptionItem>Minimum age : <span>{number}</span></CarDescriptionItem>
                <CarDescriptionItem>{conditionsArray[1]}</CarDescriptionItem>
            </CarDescriptionList>
            <CarDescriptionList>
                <CarDescriptionItem>{conditionsArray[2]} </CarDescriptionItem>
                <CarDescriptionItem>Mileage: <span>{mileage}</span></CarDescriptionItem>
                <CarDescriptionItem>Price: <span>{rentalPrice}</span></CarDescriptionItem>
            </CarDescriptionList>
            <RentalCarBtn />
        </ModalWindow>
    )
}