import { SC } from "../../../styles/theme";
import { FC } from "react";

export interface FooterTemplateProps extends SC {}

export const FooterTemplateDefault: FC<FooterTemplateProps> = ({ className }) => {
    return <div className={className}>Footer</div>;
};
