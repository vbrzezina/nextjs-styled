/**
 * Created on Wed Apr 10 2019
 * Copyright (c) 2019 Starky's club
 * @author Václav Brzezina
 */

// tslint:disable-next-line:no-var-requires
const nextRoutes = require("next-routes");

const router = nextRoutes()
    .add("Frontpage", "/")
    .add("CarDetail", "/car/:car")
    .add("Basket", "/basket");

export const Link = router.Link;
export const Router = router.Router;
export const routes = router.routes;

export default router;
