import Image from "next/image";
import * as LogoSymbolImage from "../public/logo_symbol.png";

export function ProjectLogo() {
  return (
    <div className="flex items-center hover:opacity-90">
      <Image
        src={LogoSymbolImage}
        className="w-[35px] h-[36px] mt-[5px]"
        alt="Нейромаркет символ"
      />
    </div>
  );
}
