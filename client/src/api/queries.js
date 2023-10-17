import axios from "axios";

export const getPPMdata = async () => {
  return await axios.get(`http://localhost:4900/api/get_ppm_value`);
};

export const toggleBuzzer = async (Toggle, PrivateConfig) => {
  return await axios.post(`http://localhost:4900/api/toggle_buzzer`, {Toggle}, PrivateConfig);
};

export const getBuzzerStatus = async () => {
  return await axios.get(`http://localhost:4900/api/get_buzzer_status`);
}
