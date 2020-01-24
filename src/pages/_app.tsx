import App from "next/app";
import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyles = createGlobalStyle`

`;

export interface AppState {
    error?: any;
    errorInfo?: any;
    hasError: boolean;
}

class MyApp extends App<any, AppState> {
    public static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        this.setState({ error, errorInfo, hasError: true });
    }

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    {pageProps.error ? <Fragment>Error</Fragment> : <Component {...pageProps} />}
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default MyApp;
