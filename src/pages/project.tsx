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
      desc: 'KK键盘(Hybrid App)',
      img: '/kk_logo.png',
      url: 'http://kk.weshineapp.com/',
    },
    {
      name: '闪萌牛牛(Flutter App)',
      desc: '闪萌牛牛(Flutter App)',
      img: '/niuniu_logo.png',
      url: 'http://meta.weshineapp.com/',
    },
    {
      name: 'ModeSens(跨境电商)',
      desc: 'ModeSens(跨境电商)',
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
