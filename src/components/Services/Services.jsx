import { gsap } from "gsap";
import { ServicesItem, ServicesList, ServicesImg, ServicesSection, ServicesTittle } from "./Services.styled"
import tire from '../../images/icons/car-wheel.png';
import tow from '../../images/icons/towing-vehicle.png'
import fuel from '../../images/icons/icon-fuel.png'
import driver from '../../images/icons/icon-driver.png'
import wash from '../../images/icons/icon-car-wash.png'
import { useEffect } from "react";
import { Container } from "../Container/Container";
export const Services = () => {
    useEffect(() => {
        gsap.set(".information", { yPercent: 100, opacity: 0 });

        gsap.utils.toArray(".service-card").forEach((card) => {
            let info = card.querySelector(".information"),
                tl = gsap.timeline({ paused: true });
            tl.to(info, { yPercent: 0, opacity: 1 });

            card.addEventListener("mouseenter", () => tl.timeScale(1).play());
            card.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
        });
    }, []);
    return (
        <ServicesSection>
            <Container>
                <ServicesTittle>Additional Services</ServicesTittle>
                <ServicesList >
                    <ServicesItem className="service-card">
                        <ServicesImg
                            src={tire}
                            alt="Tire icon"
                        />
                        <div className="information" id='serviceInfo'>
                            <p className="infoText">Wheel replacement</p>
                        </div>
                    </ServicesItem>

                    <ServicesItem className="service-card">
                        <ServicesImg
                            src={driver}
                            alt="Driver icon"
                        />
                        <div className="information" id='serviceInfo'>
                            <p className="infoText">A personal driver</p>
                        </div>
                    </ServicesItem>
                    <ServicesItem className="service-card">
                        <ServicesImg
                            src={fuel}
                            alt="Fuel icon"
                        />
                        <div className="information" id='serviceInfo'>
                            <p className="infoText"> Fuel delivery </p>
                        </div>
                    </ServicesItem>
                    <ServicesItem className="service-card">
                        <ServicesImg
                            src={tow}
                            alt="Tow truk"
                            width={150}
                            height={80}
                        />
                        <div className="information" id='serviceInfo'>
                            <p className="infoText">Towing service</p>
                        </div>
                    </ServicesItem>
                    <ServicesItem className="service-card">
                        <ServicesImg
                            src={wash}
                            alt="Tire"
                        />
                        <div className="information" id='serviceInfo'>
                            <p className="infoText">  Car washing </p>
                        </div>
                    </ServicesItem>

                </ServicesList>
            </Container>
        </ServicesSection>
    )
}