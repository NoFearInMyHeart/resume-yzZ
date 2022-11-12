import Image from 'next/image';
import PcNav from '@/components/PcNav';
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri';
import MobileNav from '@/components/MobileNav';
import { useState } from 'react';
import { NavItl } from '../../typings';

function Header() {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const nav: NavItl[] = [
    {
      name: '技术栈',
      url: '/skill',
    },
    {
      name: '项目',
      url: '/project',
    },
    {
      name: '关于我',
      url: '/about',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="space-x-4 flex justify-between items-center h-[10vh] w-screen px-3">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/lv.png"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <PcNav nav={nav} />

        <div
          className="lg:hidden flex items-center relative z-50"
          onClick={() => setNavMobile(!navMobile)}
        >
          {navMobile}
          {navMobile ? (
            <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
          )}
        </div>

        <MobileNav nav={nav} navMobile={navMobile} />
      </div>
    </>
  );
}

export default Header;
