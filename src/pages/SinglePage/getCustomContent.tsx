import * as React from 'react';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ServicesPage from '../Services/ServicesPage';
import PortfolioPage from '../Portfolio/PortfolioPage';
import ContactPage from '../Contact/ContactPage';

const GET_CUSTOM_COMPONENT = (section: any) => {

    switch (section.key) {
        case "home":
            return <HomePage sectionData={section} />
        case "services":
            return <ServicesPage sectionData={section} />
        case "portfolio":
            return <PortfolioPage sectionData={section} />
        case "about":
            return <AboutPage sectionData={section} />
        case "contact":
            return <ContactPage sectionData={section} />
        default:
            return <div>No Section Defined for key.</div>
    }

};

export default GET_CUSTOM_COMPONENT;