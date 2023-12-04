import { gsap } from "gsap";
import { ServicesItem, ServicesList, ServicesImg, ServicesSection, ServicesTittle } from "./Services.styled"
import tire from '../../images/car-wheel.png';
import tow from '../../images/towing-vehicle.png'
import fuel from '../../images/icon-fuel.png'
import driver from '../../images/icon-driver.png'
import wash from '../../images/icon-car-wash.png'
import { useEffect } from "react";
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
            <ServicesTittle>Aditional services</ServicesTittle>
            <ServicesList >
                <ServicesItem className="service-card">
                    <ServicesImg
                        src={tire}
                        alt="Tire icon"
                    />
                    <div className="information" id='serviceInfo'>
                        <p>Wheel replacement</p>
                    </div>
                </ServicesItem>

                <ServicesItem className="service-card">
                    <ServicesImg
                        src={driver}
                        alt="Driver icon"
                    />
                    <div className="information" id='serviceInfo'>
                        <p>A personal driver</p>
                    </div>
                </ServicesItem>
                <ServicesItem className="service-card">
                    <ServicesImg
                        src={fuel}
                        alt="Fuel icon"
                    />
                  <div className="information" id='serviceInfo'>
                  <p> Fuel delivery </p>
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
                        <p>Towing service</p>
                    </div>
                </ServicesItem>
                <ServicesItem className="service-card">
                    <ServicesImg
                        src={wash}
                        alt="Tire"
                    />
                    <div className="information" id='serviceInfo'>
                        <p>  Car washing </p>
                    </div>
                </ServicesItem>

            </ServicesList>
        </ServicesSection>
    )
}