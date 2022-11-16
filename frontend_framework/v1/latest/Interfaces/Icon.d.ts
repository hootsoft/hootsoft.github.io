import { IconName } from "@fortawesome/fontawesome-common-types";
import { CSSProperties } from "react";
import { IconLibrary } from "..";
export interface IIcon {
    className?: string;
    type: IconType;
    style?: CSSProperties;
}
export interface IIconLibrary {
    prefix: IconPrefixType;
    icon: IconName;
    label: string;
}
declare type IconPrefixType = "fas" | "fab" | "far" | "fal" | "fad";
export declare type IconType = keyof typeof IconLibrary;
export {};
