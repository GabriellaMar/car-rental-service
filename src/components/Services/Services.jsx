import { ServicesItem, ServicesList, ServicesImg, ServicesSection } from "./Services.styled"
import tire from '../../images/tire.png';
import tow from '../../images/tow.png'
import fuel from '../../images/fuel.png'
import driver from '../../images/driver.png'
export const Services = () => {
    return (
        <ServicesSection>
            <h2>Aditional services</h2>
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
                         width={120}
                         height={70}
                        fill="#2200ff"
                    />
                </ServicesItem>

            </ServicesList>
        </ServicesSection>
    )
}