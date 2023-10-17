import express from "express";
import { update_ppm_value, get_ppm_value, stop_buzzer } from "../controllers/main.js";

const router_main = express.Router();

// [POST] ROUTES
router_main.route("/update_ppm_value").post(update_ppm_value);
router_main.route("/get_ppm_value").get(get_ppm_value);
router_main.route("/stop_buzzer").get(stop_buzzer);

export default router_main;