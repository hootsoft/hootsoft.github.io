import { ReactElement } from "react";
import { IAlert } from "@hootsoft/frontend_framework";
declare const Alert: ({ children, className, dismissible, fill, icon, variant, headerText, bodyText, ...props }: IAlert) => ReactElement;
export default Alert;
