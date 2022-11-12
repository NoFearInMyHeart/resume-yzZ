import { NavItl } from '../../typings';

interface Props {
  nav: NavItl[];
  navMobile: boolean;
}

function MobileNav({ nav, navMobile }: Props) {
  return (
    <ul
      className={`fixed top-[10vh] z-50  w-screen bg-[#141414] left-0 right-0 overflow-hidden bottom-0 flex flex-col items-center transaction-all duration-200 ${
        navMobile ? 'h-[101px]' : 'h-0'
      }`}
    >
      {nav.map((item, index) => (
        <li className="h-[50px]" key={index}>
          <a href={item.url}>
            {item.name}
            {navMobile}
          </a>
        </li>
      ))}
      <div
        className={`${
          navMobile ? 'border-b-orange-600 border-b' : 'hidden'
        } w-screen`}
      />
    </ul>
  );
}

export default MobileNav;
