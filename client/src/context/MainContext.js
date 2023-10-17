import { createContext, useContext, useState } from "react";
import { getPPMdata } from "../api/queries";

const panelContext = createContext();

export const usePanel = () => {
  const Context = useContext(panelContext);
  return Context;
};

export const MainProvider = ({ children }) => {
  const [ppm, setPpm] = useState(0);

  const GetPpmDataQuery = async () => {
    try {
      const res = await getPPMdata();
      setPpm(res.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <panelContext.Provider value={{ ppm, setPpm, GetPpmDataQuery }}>
      {children}
    </panelContext.Provider>
  );
};
