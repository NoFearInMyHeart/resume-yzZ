import { NavItl } from '../../typings';

interface Props {
  nav: NavItl[];
}

function PcNav({ nav }: Props) {
  return (
    <div className="flex">
      {nav.map((item, index) => (
        <a href={item.url} className="ml-3 lg:ml-10" key={index}>
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default PcNav;
