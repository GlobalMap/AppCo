import React from 'react';
import s from './Block2.module.scss';
import WhyMe from "./components/WhyMe/WhyMe";
import Svg from "../../../components/svg/SvgIcon";
import Grid from "@material-ui/core/Grid";

function Block2() {
    const xl = window.screen.width > 1920;

    return (
        <div className={s.block}>
            <p className={s.title}>Why <b>small business owners love</b> AppCo?</p>
            <p className={s.description}>
                Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>

            <Grid
                container
                xs={12}
                wrap
                alignItems="baseline"
                justify="space-evenly"
            >

               <WhyMe
                   title="Clean Design"
                   desc="Increase sales by showing true dynamics of your website."
                   svg={<Svg name="cleanDesign" size={xl ? 150 : 106} />}
               />
                <WhyMe
                    title="Secure Data"
                    desc="Build your online store’s trust using Social Proof & Urgency."
                    svg={<Svg name="secureDataIcon" size={xl ? 150 : 106} />}
                />
                <WhyMe
                    title="Retina Ready"
                    desc="Realize importance of social proof in customer’s purchase decision."
                    svg={<Svg name="retinaReadyIcon" size={xl ? 150 : 106}  />}
                />
            </Grid>
        </div>
    )
}

export default Block2;