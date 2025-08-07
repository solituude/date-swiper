import {IEvent} from "../lib/types";

import s from './timelineBlock.module.scss';
import '../../../shared/styles/global.scss'
import React, {useLayoutEffect, useRef, useState} from "react";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../shared/styles/global.scss'

export const EventCard = (card: IEvent) => {
    return (
        <div className={s.EventCard}>
            <h3 className={"h3"}>{card.year}</h3>
            <div className={s.EventCard__description}>
                <span className={"text"}>{card.description}</span>
            </div>

        </div>
    )
}