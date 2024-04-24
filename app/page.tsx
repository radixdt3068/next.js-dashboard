import AcmeLogo from '@/app/ui/Acmelogo'
import { ArrowDownRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/font';
import Image from 'next/image';
 

 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className='flex flex-row justify-between	mt-8'>
        <div >
          welcome to Acme
        </div>
        <div>
        <Image
        priority={false} // {false} | {true}
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      </div>

        </div>
        
    </main>
  );
}
