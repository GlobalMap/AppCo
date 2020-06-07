import React from 'react';
import s from './Block2.module.scss';
import {cleanDesignIcon, retinaReadyIcon, secureDataIcon} from "../../../components/svg/svg";
import WhyMe from "./components/WhyMe/WhyMe";

function Block2() {

    return (
        <div className={s.block}>
            <p className={s.title}>Why <b>small business owners love</b> AppCo?</p>
            <p className={s.description}>
                Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>

            <div className={s.whyMe} >

               <WhyMe
                   title="Clean Design"
                   desc="Increase sales by showing true dynamics of your website."
                   svg={cleanDesignIcon}
               />
                <WhyMe
                    title="Secure Data"
                    desc="Build your online store’s trust using Social Proof & Urgency."
                    svg={secureDataIcon}
                />
                <WhyMe
                    title="Retina Ready"
                    desc="Realize importance of social proof in customer’s purchase decision."
                    svg={retinaReadyIcon}
                />
            </div>
        </div>
    )
}

export default Block2;