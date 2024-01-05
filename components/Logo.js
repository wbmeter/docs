import Image from "next/image";
import * as LogoImage from "../public/logo.png";
import * as LogoSymbolImage from "../public/logo_symbol.png";
import { useWidth } from "./hooks/useWidth";

export function Logo() {
  const width = useWidth();

  return (
    <div className="flex items-center">
      {width > 500 ? (
        <>
          <Image
            src={LogoImage}
            className="w-[181px] h-[20px] -mt-[2px]"
            alt="Нейромаркет"
          />
          <div className="ml-2 w-[2px] bg-slate-100/90 h-6"></div>
        </>
      ) : (
        <Image
          src={LogoSymbolImage}
          className="min-w-[35px] !w-[35px] h-[36px] mt-[5px]"
          alt="Нейромаркет символ"
        />
      )}
      <span className="font-semibold text-slate-100/90 ml-2">Документация</span>
    </div>
  );
}
