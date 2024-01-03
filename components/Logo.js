import Image from "next/image";
import * as LogoImage from '../public/logo.png';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src={LogoImage} className="w-[181px] h-[20px] -mt-[2px]" alt="Нейромаркет" />
      <div className="ml-2 w-[2px] bg-slate-100/90 h-6"></div>
      <span className="font-semibold text-slate-100/90 ml-2">Документация</span>
    </div>
  );
}
