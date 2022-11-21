import Image from 'next/image';
import PcNav from '@/components/PcNav';
// import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri';
// import MobileNav from '@/components/MobileNav';
// import { useState } from 'react';
import { NavItl } from '../../typings';

function Header() {
  // const [navMobile, setNavMobile] = useState<boolean>(false);
  const nav: NavItl[] = [
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
      <div className="flex bg-[#141414] fixed top-0 left-0 right-0 z-50 justify-between items-center h-[10vh] w-screen px-3">
        <div className="relative w-[50px] h-[50px]">
          <a href="/">
            <Image
              src="/lv.png"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </a>
        </div>

        <PcNav nav={nav} />

        {/*<div*/}
        {/*  className="lg:hidden flex items-center relative z-50"*/}
        {/*  onClick={() => setNavMobile(!navMobile)}*/}
        {/*>*/}
        {/*  {navMobile}*/}
        {/*  {navMobile ? (*/}
        {/*    <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />*/}
        {/*  ) : (*/}
        {/*    <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />*/}
        {/*  )}*/}
        {/*</div>*/}

        {/*<MobileNav nav={nav} navMobile={navMobile} />*/}
      </div>
    </>
  );
}

export default Header;
