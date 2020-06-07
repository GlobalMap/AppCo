import React from 'react';
import Block1 from "./Block1/Block1";
import Block2 from "./Block2/Block2";
import Footer from "../../components/Footer/Footer";

function MainPage() {

    return(
        <>
            <Block1 />
            <Block2 />
            <Footer main={true} />
        </>
    )
}

export default MainPage;