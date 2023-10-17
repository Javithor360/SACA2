import React, { useEffect } from "react";
import GaugeComponent from "react-gauge-component";

import { usePanel } from "../context/MainContext";

export const IndexPage = () => {
  const { GetPpmDataQuery, ppm } = usePanel();

  useEffect(() => {
    const intervalId = setInterval(() => {
      GetPpmDataQuery();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-[url('assets/img/panorama.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">¡BIENVENIDO!</h1>
            <p className="mb-5 italic">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendaa
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Monitorear</button>
          </div>
        </div>
      </div>
      <div className="my-[5rem] text-center">
        <h2 className="font-bold text-2xl">MONITOREO DE LA CALIDAD DEL AIRE</h2>
        <p>{ppm} PPM</p>
        <GaugeComponent
          className="h-[20rem] w-[20rem]"
          arc={{
            subArcs: [
              {
                limit: 20,
                color: "#EA4228",
                showTick: true,
              },
              {
                limit: 40,
                color: "#F58B19",
                showTick: true,
              },
              {
                limit: 60,
                color: "#F5CD19",
                showTick: true,
              },
            ],
          }}
          value={ppm}
        />
      </div>
    </>
  );
};
