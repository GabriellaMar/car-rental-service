import { ServicesItem, ServicesList, ServicesImg, ServicesSection, ServicesTittle } from "./Services.styled"
import tire from '../../images/car-wheel.png';
import tow from '../../images/towing-vehicle.png'
import fuel from '../../images/icon-fuel.png'
import driver from '../../images/icon-driver.png'
import wash from '../../images/icon-car-wash.png'
export const Services = () => {
    return (
        <ServicesSection>
            <ServicesTittle>Aditional services</ServicesTittle>
            <ServicesList>
                <ServicesItem>
                    <ServicesImg
                        src={tire}
                        alt="Tire"
                        // width={150}
                        // height={100}
                        fill="#2200ff"
                    />
                </ServicesItem>
                <ServicesItem>
                    <ServicesImg
                        src={driver}
                        alt="Driver"
                        // width={50}
                        // height={50}
                        fill="#2200ff"
                    />
                </ServicesItem>
                <ServicesItem>
                    <ServicesImg
                        src={fuel}
                        alt="Fuel Delivery"
                        // width={50}
                        // height={50}
                        fill="#2200ff"
                    />
                </ServicesItem>
                <ServicesItem>
                    <ServicesImg
                        src={tow}
                        alt="Tow truk"
                         width={150}
                         height={80}
                        fill="#2200ff"
                    />
                </ServicesItem>
                <ServicesItem>
                    <ServicesImg
                        src={wash}
                        alt="Tire"
                        // width={150}
                        // height={100}
                        fill="#2200ff"
                    />
                </ServicesItem>

            </ServicesList>
        </ServicesSection>
    )
}