
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
    CarModalBtn,
    CarFunctionality
} from "./CarDetails.styled"

export const CarDetails = () => {
    return (
        <ModalWindow>

            <CarImage />
            <CarModalTittle>KUBIK <span>Kubik</span>, 2008 </CarModalTittle>
            <CarModalList>
                <CarModalItem>Kiev | </CarModalItem>
                <CarModalItem>Ukraine | </CarModalItem>
                <CarModalItem>id: 9582 | </CarModalItem>
                <CarModalItem>Year: 2008 |</CarModalItem>
                <CarModalItem>Type: SUV  </CarModalItem>
                {/* <li>Premium</li> */}
            </CarModalList>
            <CarModalList>
                <CarModalItem>Fuel Consumption: 10.5 |</CarModalItem>
                <CarModalItem>Engine Size: 3.6L V6 </CarModalItem>
            </CarModalList>
            <CarDescription>The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</CarDescription>
            <CarInfoTittle>Accessories and functionalities:</CarInfoTittle>
            <CarFunctionality>Leather seats  | Panoramic sunroof | Power liftgate</CarFunctionality>
            <CarFunctionality>Premium audio system | Remote start |  Blind-spot monitoring</CarFunctionality>
            <CarInfoTittle>Rental Conditions: </CarInfoTittle>
            <CarDescriptionList>
                <CarDescriptionItem>Minimum age : <span>25</span></CarDescriptionItem>
                <CarDescriptionItem>Valid driver’s license</CarDescriptionItem>
            </CarDescriptionList>
            <CarDescriptionList>
                <CarDescriptionItem>Security deposite required </CarDescriptionItem>
                <CarDescriptionItem>Mileage: <span>5,858</span></CarDescriptionItem>
                <CarDescriptionItem>Price: <span>40$</span></CarDescriptionItem>
            </CarDescriptionList>
            <CarModalBtn type='button'>Rental car</CarModalBtn>
        </ModalWindow>
    )
}