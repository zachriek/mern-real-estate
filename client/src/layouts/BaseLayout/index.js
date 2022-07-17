// React
import React from 'react';

// Components
import Navbar from '../../components/Navbar';

const BaseLayout = (props) => {
    document.title = `${props.title ? props.title : ''} - Real Estate`;

    return (
        <>
            <Navbar />
            {props.children}
            <footer>Footer</footer>
        </>
    );
};

export default BaseLayout;
