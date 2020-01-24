import { FooterStyledAC } from "./styles/FooterStyledAC";
import { FooterStyledAP } from "./styles/FooterStyledAP";
import { FooterStyledDS } from "./styles/FooterStyledDS";
import { FooterStyledDefault } from "./styles/FooterStyledDefault";
import { StyledComponent } from "styled-components";
import { FC } from "react";
import { FooterTemplateProps } from "./templates/FooterTemplateDefault";
import { IThemeInterface } from "../../styles/theme";

let Footer: StyledComponent<FC<FooterTemplateProps>, IThemeInterface, {}, never>;

switch (process.env.BRAND) {
    case "AC":
        Footer = FooterStyledAC;
        break;
    case "AP":
        Footer = FooterStyledAP;
        break;
    case "DS":
        Footer = FooterStyledDS;
        break;
    default:
        Footer = FooterStyledDefault;
}

export default Footer;
