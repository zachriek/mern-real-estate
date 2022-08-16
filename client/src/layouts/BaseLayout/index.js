// React
import React from 'react';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BaseLayout = (props) => {
    document.title = `${props.title ? props.title : ''} - Real Estate`;

    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
};

export default BaseLayout;
