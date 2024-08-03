"use client";
import { useState } from "react";
import WarningIcon from "public/WarningIcon.png";
import Image from "next/image";
import IconoScrollRounded from "public/IconoScrollRounded.png";
import useForm from "../../../hooks/useForm";
import GenerateQR from "app/components/QR/generate";

export default function ScreenQRDeposit() {
  const [urlWithParams, setUrlWithParams] = useState(null);
  const [form, handleChange, resetForm] = useForm({
    amount: "",
    myWallet: "0x1234567890",
  });

  const handleNextStep = (e) => {
    const hashedParams = `http://localhost:3000/protect/transfer/qr?amount=${form.amount}&wallet=${form.myWallet}`;
    setUrlWithParams(hashedParams);
  };

  return (
    <div
      className={`h-[80vh] min-h-[600px] flex flex-col items-center mx-4 ${
        !urlWithParams ? "justify-between" : "justify-center"
      } my-4`}
    >
      {!urlWithParams && (
        <>
          <div>
            <div className="flex w-full justify-center my-8">
              <Image src={IconoScrollRounded} alt="Icono Scroll" />
            </div>
            <div className="">
              <div>
                <form className="w-full text-center">
                  <label className="text-xl text-gray-400 font-semibold">
                    Puedes ingresar un monto
                  </label>
                  <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    value={form.amount}
                    placeholder="0.00"
                    className="py-6 text-center text-7xl w-full rounded-lg mt-8 text-black font-bold"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className=" bg-orange-100 rounded-lg px-2 py-2 border border-orange-500">
            <div className="flex flex-row items-center  pb-4">
              <Image src={WarningIcon} alt="Warning Icon" className="me-4" />
              <h3 className="text-xl text-orange-400">¡Atención!</h3>
            </div>
            <div>
              <p className="text-black text-xs">
                Solo puedes depositar EARS en la red de Scroll. Asegúrate de
                seleccionar la red correcta antes de realizar tu depósito para
                evitar pérdidas de fondos.
              </p>
            </div>
          </div>
          <div className="w-full">
            <button
              className={`${"bg-[#222fe6]"} text-white font-bold py-4 px-6 items-center rounded-lg w-full text-center`}
              onClick={(e) => handleNextStep(e)}
            >
              Continuar
            </button>
          </div>
        </>
      )}
      {urlWithParams && (
        <div className="w-full mt-8 flex justify-center">
          <GenerateQR value={urlWithParams} />
        </div>
      )}
    </div>
  );
}
