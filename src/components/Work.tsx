import { WorkItl } from '../../typings';
import WorkItem from './WorkItem';

const Work = () => {
  const data: WorkItl[] = [
    {
      time: '2020.11 - 2022.09',
      title: '北京闪趣技术有限公司',
    },
    {
      time: '2019.10 - 2020.09',
      title: '北京尚睿科技有限公司',
    },
    {
      time: '2018.12 - 2019.09',
      title: '北京知白软件有限公司',
    },
  ];

  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
        工作经历
      </h1>
      {data.map((item: WorkItl, idx: number) => (
        <WorkItem key={idx} {...item} />
      ))}
    </div>
  );
};
export default Work;
