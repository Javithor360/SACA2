import express from "express";
import { update_ppm_value, get_ppm_value, toggle_buzzer, get_buzzer_status } from "../controllers/main.js";

const router_main = express.Router();

// [POST] ROUTES
router_main.route("/update_ppm_value").post(update_ppm_value);
router_main.route("/get_ppm_value").get(get_ppm_value);
router_main.route("/toggle_buzzer").post(toggle_buzzer);
router_main.route("/get_buzzer_status").get(get_buzzer_status);

export default router_main;