import { ITimeline } from "./types";

export const TIMELINES: ITimeline[] = [
    {
        id: "timeline-1",
        topic: "Технологии",
        events: [
            { id: "timeline-1-event-1", year: 2000, description: "Выпущена первая публичная бета-версия операционной системы Mac OS X" },
            { id: "timeline-1-event-2", year: 2004, description: "Создана социальная сеть Facebook" },
            { id: "timeline-1-event-3", year: 2007, description: "Apple представила первый iPhone" },
            { id: "timeline-1-event-4", year: 2012, description: "Запуск облачного сервиса Google Drive" },
            { id: "timeline-1-event-5", year: 2023, description: "OpenAI выпускает GPT-4 с мультиинтерфейсной поддержкой" }
        ]
    },
    {
        id: "timeline-2",
        topic: "Кино",
        events: [
            { id: "timeline-2-event-1", year: 1997, description: "Выход фильма «Титаник» Джеймса Кэмерона — одного из самых кассовых фильмов в истории" },
            { id: "timeline-2-event-2", year: 2003, description: "«Властелин колец: Возвращение короля» получил 11 премий «Оскар»" },
            { id: "timeline-2-event-3", year: 2009, description: "Фильм «Аватар» стал революцией в 3D-кинематографе" },
            { id: "timeline-2-event-4", year: 2020, description: "Из-за пандемии COVID-19 крупнейшие премьеры переносятся, индустрия уходит в онлайн" }
        ]
    },
    {
        id: "timeline-3",
        topic: "Литература",
        events: [
            { id: "timeline-3-event-1", year: 1997, description: "Издана первая книга о Гарри Поттере — 'Философский камень'" },
            { id: "timeline-3-event-2", year: 2004, description: "Орхан Памук публикует роман 'Снег'" },
            { id: "timeline-3-event-3", year: 2016, description: "Боб Дилан удостоен Нобелевской премии по литературе" }
        ]
    },
    {
        id: "timeline-4",
        topic: "Театр",
        events: [
            { id: "timeline-4-event-1", year: 2005, description: "Премьера мюзикла 'Билли Эллиот' в Лондоне" },
            { id: "timeline-4-event-2", year: 2008, description: "На Бродвее выходит мюзикл 'In the Heights'" },
            { id: "timeline-4-event-3", year: 2015, description: "Премьера мюзикла 'Гамильтон' покоряет США" },
            { id: "timeline-4-event-4", year: 2021, description: "Российский театр переходит к гибридным онлайн-постановкам" }
        ]
    },
    {
        id: "timeline-5",
        topic: "Спорт",
        events: [
            { id: "timeline-5-event-1", year: 1998, description: "Франция впервые выигрывает чемпионат мира по футболу" },
            { id: "timeline-5-event-2", year: 2008, description: "Майкл Фелпс завоевал 8 золотых медалей на Олимпиаде в Пекине" },
            { id: "timeline-5-event-3", year: 2014, description: "Германия побеждает Бразилию со счётом 7:1 на ЧМ по футболу" },
            { id: "timeline-5-event-4", year: 2021, description: "Олимпийские игры в Токио проходят без зрителей" },
            { id: "timeline-5-event-5", year: 2022, description: "Аргентина выигрывает ЧМ-2022; Месси признаётся лучшим игроком" },
            { id: "timeline-5-event-6", year: 2024, description: "Симона Байлз возвращается в гимнастику после перерыва" }
        ]
    },
    {
        id: "timeline-6",
        topic: "Наука",
        events: [
            { id: "timeline-6-event-1", year: 2003, description: "Официально завершён проект «Геном человека»" },
            { id: "timeline-6-event-2", year: 2012, description: "Обнаружение бозона Хиггса подтверждено в CERN" },
            { id: "timeline-6-event-3", year: 2019, description: "Получено первое изображение чёрной дыры (M87*) при помощи Event Horizon Telescope" },
            { id: "timeline-6-event-4", year: 2021, description: "Запущен космический телескоп Джеймс Уэбб (JWST)" },
            { id: "timeline-6-event-5", year: 2023, description: "Искусственный интеллект AlphaFold предсказал структуру более 200 миллионов белков" },
            { id: "timeline-6-event-6", year: 2024, description: "NASA успешно доставила образцы с астероида Бенну на Землю" },
            { id: "timeline-6-event-7", year: 2025, description: "Европейский телескоп Euclid начал полноценные наблюдения тёмной материи" },
            { id: "timeline-6-event-8", year: 2025, description: "Учёные смоделировали стабильную квантовую сеть на расстоянии 1000 км" }
        ]
    }
];
//
// class Timelines {
//     private readonly _data: ITimeline[];
//
//     constructor() {
//         this._data = TIMELINES;
//     }
//
//     get(index: number) {
//         return this._data[index];
//     }
//
//     getYears(index: number) {
//         return {
//             start: this._data[index].events[0].year,
//             end: this._data[index].events[this._data[index].events.length - 1].year
//         }
//     }
//
//     getLast() {
//         return this._data[this._data.length - 1];
//     }
//
// }