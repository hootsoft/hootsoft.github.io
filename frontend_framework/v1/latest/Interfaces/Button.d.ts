import { IconType } from "..";
import { StatusColourType } from "../Assets";
import ButtonLibrary from "../Button/Library/Library";
export interface IButtonLibrary {
    icon: IconType;
    text: string;
    statusColour: StatusColourType;
}
export declare type ButtonType = keyof typeof ButtonLibrary;
