import axios from "axios";

export const getPPMdata = async () => {
  return await axios.get(`http://localhost:4900/api/get_ppm_value`);
};
