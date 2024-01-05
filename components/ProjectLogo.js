import Image from "next/image";
import * as LogoSymbolImage from "../public/logo_symbol.png";
import { useWidth } from "./hooks/useWidth";

export function ProjectLogo() {
  const width = useWidth();
  if (width <= 500) {
    return;
  }

  return (
    <div className="flex items-center hover:opacity-90">
      <Image
        src={LogoSymbolImage}
        className="min-w-[35px] !w-[35px] h-[36px] mt-[5px]"
        alt="Нейромаркет символ"
      />
    </div>
  );
}
