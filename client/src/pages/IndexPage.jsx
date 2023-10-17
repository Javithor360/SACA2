import React, { useEffect } from "react";
import GaugeComponent from "react-gauge-component";

import { usePanel } from "../context/MainContext";
import { useState } from "react";

export const IndexPage = () => {
  const { GetPpmDataQuery, ToggleBuzzer, GetBuzzerStatus, ppm, activeBuzzer, setActiveBuzzer } = usePanel();

  // const [isChecked, setIsChecked] = useState(activeBuzzer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      GetPpmDataQuery();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log(activeBuzzer)
  }, [activeBuzzer]);

  const handleCheckboxChange = () => {
    if (!activeBuzzer) {
      document.getElementById("confirm_activation").showModal();
    }
    setActiveBuzzer(!activeBuzzer);
    handleToggle()
  };

  const handleToggle = async () => {
    try {
      await ToggleBuzzer(activeBuzzer);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="hero min-h-screen bg-[url('assets/img/panorama.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">¡BIENVENIDO!</h1>
            <p className="mb-5 italic">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumendaa excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Monitorear</button>
          </div>
        </div>
      </div>
      <div className="mt-[5rem] text-center">
        <h2 className="text-2xl font-bold">MONITOREO DE LA CALIDAD DEL AIRE</h2>
        <p>{ppm} PPM</p>
        <GaugeComponent
          className="w-[20rem]"
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
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Alarma</span>
            <input
              type="checkbox"
              className="toggle toggle-accent"
              checked={activeBuzzer}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      </div>

      <dialog id="confirm_activation" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">ADVERTENCIA</h3>
          <p className="py-4">
            ¿Estás seguro que quieres activar la alarma?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="m-1 text-white bg-red-600 btn" onClick={handleToggle}>Confirmar</button>
              <button className="m-1 btn" onClick={() => setActiveBuzzer(false)}>Regresar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
