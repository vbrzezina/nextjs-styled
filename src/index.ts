import next from "next";
import routes from "./routes";

// tslint:disable-next-line:no-var-requires
const chalk = require("chalk");
const express = require("express");
const app = next({ dev: process.env.NODE_ENV !== "production", dir: "src" });
const handler = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        express()
            .use(handler)
            .listen(3000, (err: Error) => {
                if (err) {
                    throw err;
                }

                // tslint:disable-next-line:no-console
                console.info("\nListening on " + chalk.cyan(chalk.bold("http://localhost:3000")) + "\n");
            });
    })
    .catch((err: any) => {
        throw new Error(err);
    });
