import { createContext, useContext, useState } from "react";
import { getPPMdata, toggleBuzzer, getBuzzerStatus } from "../api/queries";

const panelContext = createContext();

export const usePanel = () => {
  const Context = useContext(panelContext);
  return Context;
};

export const MainProvider = ({ children }) => {
  const PrivateConfig = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const [ppm, setPpm] = useState(0);
  const [activeBuzzer, setActiveBuzzer] = useState(false);

  const GetPpmDataQuery = async () => {
    try {
      const res = await getPPMdata();
      setPpm(res.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  const ToggleBuzzer = async (Toggle) => {
    try {
      await toggleBuzzer(Toggle, PrivateConfig);
    } catch (error) {
      console.error(error);
    }
  };

  const GetBuzzerStatus = async () => {
    try {
      const res = await getBuzzerStatus();
      setActiveBuzzer(res.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <panelContext.Provider
      value={{
        ppm,
        setPpm,
        activeBuzzer,
        setActiveBuzzer,
        GetPpmDataQuery,
        ToggleBuzzer,
        GetBuzzerStatus,
      }}
    >
      {children}
    </panelContext.Provider>
  );
};
