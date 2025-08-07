import {FC} from "react";
import {IArrowButton} from "../lib/types";

export const LeftArrowIcon = (props: IArrowButton) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
            <g opacity={props.disabled ? 0.5 : 1}>
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(-1 0 0 1 25 0.666748)" stroke="#42567A"
                        strokeOpacity="0.5"/>
                <path d="M13.749 10.0418L10.624 13.1668L13.749 16.2918" stroke="#42567A" strokeWidth="2"/>
            </g>
        </svg>
    )
}