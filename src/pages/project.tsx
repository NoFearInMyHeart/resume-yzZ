import Layout from '@/components/layout';
import Image from 'next/image';

interface ProjectItl {
  name: string;
  desc: string;
  img: string;
  url: string;
}

function Project() {
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
    },
  ];

  return (
    <Layout title="yzZ">
      <main className="w-screen h-[90vh] scrollbar-hide px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {arr.map((item, index) => (
            <div key={index} className="border rounded border-gray-700">
              <div className="h-[150px] my-3 flex justify-center">
                <div className="relative w-3/4">
                  <Image src={item.img} layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="mb-3 text-xl font-bold leading-8 tracking-tight">
                  {item.name}
                </p>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
                <a className="text-orange-600" href={item.url}>
                  查看详情 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Project;
