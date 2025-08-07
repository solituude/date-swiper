import {IArrowButton} from "../lib/types";

export const RightArrowIcon = (props: IArrowButton) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <g opacity={props.disabled ? 0.5 : 1}>
                <circle cx="12.8325" cy="13.1667" r="12" stroke="#42567A" strokeOpacity="0.5"/>
                <path d="M11.5837 10.0418L14.7087 13.1668L11.5837 16.2918" stroke="#42567A" strokeWidth="2"/>
            </g>
        </svg>
    )
}