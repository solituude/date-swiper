
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation, FreeMode} from 'swiper/modules';
import s from './timelineBlock.module.scss';
import React from "react";


import 'swiper/css';
// import 'swiper/css/pagination';
import '../../../shared/styles/global.scss'
import {ITimeline} from "../lib/types";
export const EventSlider = (timeline: ITimeline) => {
    return(
        <Swiper key={'event-slide'}
            slidesPerView={1.5}
            // breakpointsBase={s.EventSlide}

                keyboard={{enabled: true,}}
                // navigation={true}
                freeMode
                modules={[Keyboard, FreeMode, Navigation, Pagination]}>
            {
                timeline.events.map(t => (
                        <SwiperSlide className={s.EventSlide}>
                            <div className={s.EventCard}>
                                <h3 className={"h3"}>{t.year}</h3>
                                <div  className={s.EventCard__description}>
                                    <span className={"text"}>{t.description}</span>
                                </div>

                            </div>
                        </SwiperSlide>
                ))
            }
        </Swiper>
    )
}