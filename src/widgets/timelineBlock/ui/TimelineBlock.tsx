import React, {useRef, useState} from "react";

import {Swiper, SwiperProps, useSwiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from "swiper/modules";
import {gsap} from "gsap";

import {EventCard} from "./EventCard";

import {ITimeline} from "../lib/types";
import {TIMELINES} from "../lib/constants";
import {LeftArrowIcon, RightArrowIcon} from "../../../shared";

import s from './timelineBlock.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../../../shared/styles/global.scss'


gsap.registerPlugin(ScrambleTextPlugin);

const NavButton = () => {
    const swiper = useSwiper();

    return (
        <div>
            <span>
                {`${swiper.activeIndex < 10 ? '0' : ''}` + (swiper.activeIndex + 1)} / {`${TIMELINES.length < 10 ? '0' : ''}` + TIMELINES.length}
            </span>
            <button className={s.button} disabled={swiper.activeIndex === 0}
                    onClick={() => {
                        swiper?.slideTo(swiper.activeIndex - 1)
                    }}>
                <LeftArrowIcon disabled={swiper.activeIndex === 0}/>
            </button>
            <button className={s.button} disabled={swiper.activeIndex === 5}
                    onClick={() => {
                        swiper?.slideNext(1, true)
                    }}>

                <div><RightArrowIcon disabled={swiper.activeIndex === 5}/></div>
            </button>
        </div>

    )
}


export const TimelineBlock = () => {
    const [currentTimeline, setCurrentTimeline] = useState<ITimeline>(TIMELINES[0]);
    const startYear = currentTimeline.events[0].year;
    const endYear = currentTimeline.events[currentTimeline.events.length - 1].year;

    const startRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const [year, setYear] = useState({start: startYear, end: endYear});

    const increaseYear = (newYear: { start: number, end: number }) => {

        const obj1 = {val: year.start};
        const obj2 = {val: year.end};

        gsap.to(obj1, {
            duration: 1,
            val: newYear.start,
            ease: 'power1.out',
            onUpdate: () => {
                if (startRef.current) {
                    startRef.current.textContent = Math.floor(obj1.val).toString();
                }
            },
            onComplete: () => {
                setYear({...year, start: newYear.start});
            }
        });

        gsap.to(obj2, {
            duration: 0.5,
            val: newYear.end,
            ease: 'power1.out',
            onUpdate: () => {
                if (endRef.current) {
                    endRef.current.textContent = Math.floor(obj2.val).toString();
                }
            },
            onComplete: () => {
                setYear({...year, end: newYear.end});
            }
        });
    };

    const handlePaginationUpdate = (swiper: SwiperProps) => {
        increaseYear({
            start: TIMELINES[swiper.activeIndex].events[0].year,
            end: TIMELINES[swiper.activeIndex].events[TIMELINES[swiper.activeIndex].events.length - 1].year
        });
        setCurrentTimeline(TIMELINES[swiper.activeIndex])
    }

    return (
        <section>
            <h2 className={"h2"}>Исторические даты</h2>

            <div className={s.YearsContainer}>
                <h2 className={s.Years_start} ref={startRef}>{year.start}</h2>
                <h2 className={s.Years_end} ref={endRef}>{year.end}</h2>
            </div>


            <Swiper
                slidesPerView={1}
                effect={'fade'}
                simulateTouch={false}
                allowTouchMove={false}
                navigation={true}
                pagination={{clickable: true,}}
                onPaginationUpdate={handlePaginationUpdate}
                modules={[EffectFade, Pagination]}>
                {
                    TIMELINES.map(timeline => (
                        <SwiperSlide>
                            <div className={s.EventSlide}>
                                {timeline.events.map(t => <EventCard id={t.id} year={t.year} description={t.description}/>)}
                            </div>

                        </SwiperSlide>
                    ))
                }

                <NavButton/>
            </Swiper>


        </section>
    )
}
