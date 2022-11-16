import { ReactElement, ReactNode } from "react";
declare const PageTitle: {
    ({ title, subTitle, children }: IPageTitle): ReactElement;
    displayName: string;
};
export default PageTitle;
export interface IPageTitle {
    title: string;
    subTitle?: string;
    children?: ReactNode;
}
