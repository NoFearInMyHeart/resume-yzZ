import { ProjectItl } from '../../typings';
import Image from 'next/image';

const ProjectItem = ({ url, name, desc, img, bg }: ProjectItl) => {
  return (
    <div className="border rounded border-gray-700">
      <div
        className={`h-[150px] flex justify-center ${bg ? bg : 'bg-[#202020]'}`}
      >
        <div className="relative w-3/4">
          <Image src={img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="px-4 py-4">
        <p className="mb-3 text-xl font-bold leading-8 tracking-tight">
          {name}
        </p>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {desc}
        </p>
        <a className="text-orange-600" href={url}>
          查看详情 →
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
