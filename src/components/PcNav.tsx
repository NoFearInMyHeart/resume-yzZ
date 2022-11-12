import { NavItl } from '../../typings';

interface Props {
  nav: NavItl[];
}

function PcNav({ nav }: Props) {
  return (
    <div className="hidden lg:flex">
      {nav.map((item, index) => (
        <a href={item.url} className="mr-10" key={index}>
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default PcNav;
