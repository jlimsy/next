import { GlobeAltIcon } from '@heroicons/react/24/outline';
<<<<<<< HEAD
import { lusitana } from './fonts';
=======
import { lusitana } from '@/app/ui/fonts';
>>>>>>> 8a131ac7b3cf9237c24b1791794fbeed6df50c8c

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
