const express = require("express");
const masterRouter = express.Router();

const welcomeRouter = require("./welcome.route");
const authRouter = require("./auth.route");
const productRouter = require("./product.route");
const profileRouter = require("./profile.route");
const favoriteRouter = require('./favorite.route')

masterRouter.use("/", welcomeRouter);
masterRouter.use("/auth", authRouter);
masterRouter.use("/profile", profileRouter);
masterRouter.use("/product", productRouter);
masterRouter.use("/favorite", favoriteRouter)

module.exports = masterRouter;
