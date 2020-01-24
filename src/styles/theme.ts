import * as styledComponents from "styled-components";
//import './fonts.css';

const { default: styled, createGlobalStyle, css, ThemeProvider } = styledComponents as styledComponents.ThemedStyledComponentsModule<
    IThemeInterface
>;

export interface IThemeInterface {
    borderRadius: string;

    font: string;

    colors: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        red: {
            main: string;
        };
        green: {
            main: string;
        };
        white: {
            offWhite: string;
        };
    };
}

export const theme = {
    borderRadius: "8px",

    font: "'Montserrat', sans-serif'",

    colors: {
        primary: {
            main: "#551edc",
        },
        secondary: {
            main: "#5d77fb",
        },
        red: {
            main: "eb5757",
        },
        green: {
            main: "27ae60",
        },
        white: {
            offWhite: "#f5faff",
        },
    },
};

export interface SC {
    className?: string;
}

export default styled;
export { css, createGlobalStyle, ThemeProvider };
