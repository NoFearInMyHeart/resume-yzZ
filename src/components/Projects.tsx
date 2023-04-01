import { ProjectItl } from '../../typings';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const arr: ProjectItl[] = [
    {
      name: 'KK键盘(Hybrid App)',
      desc: '一款移动端手机输入法，支持表情斗图，语音包，花样特殊字体，特殊符号等一系列功能，让聊天更有趣.',
      img: '/kk_logo.png',
      url: 'http://kk.weshineapp.com/',
    },
    {
      name: '闪萌牛牛(Flutter App)',
      desc: '一款基于区块链技术的表情数字藏品收藏交流平台.',
      img: '/niuniu_logo.png',
      url: 'http://meta.weshineapp.com/',
    },
    {
      name: 'ModeSens(跨境电商)',
      desc: '国际化跨境电商, 主营时尚奢侈品领域, 与一些国外时尚领域的电商有合作关系, 主要提供奢侈品信息并且还有合作电商折扣与其他优惠福利信息, 此外可以帮助用户代下单, 以及有自己独立的社区和博文板块.',
      img: '/modesens_logo.svg',
      url: 'https://modesens.cn/',
      bg: 'bg-white',
    },
    {
      name: '闪萌表情(PC，微信小程序)',
      desc: '闪萌是一家中文GIF动图搜索和分发平台，于2016年06月上线，以发现有趣的GIF为目的，致力于让年轻人的交流沟通更有趣。',
      img: '/shanmeng_logo.png',
      url: 'https://u.weshineapp.com/',
    },
  ];

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
        项目经历
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        {arr.map((item: ProjectItl, idx: number) => {
          return <ProjectItem {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
