import Layout from '@/components/layout';
import Image from 'next/image';

function About() {
  return (
    <Layout title="yzZ">
      <main className="w-screen h-[90vh] scrollbar-hide px-5">
        <div>
          <h1 className="pt-10 pb-3 text-3xl lg:text-5xl border-b border-b-white pb-10 mb-10">
            关于我
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up">
            <div className="flex justify-center w-full">
              <div className="relative w-[192px] h-[192px]">
                <Image
                  src="/avatar.jpeg"
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <ul className="text-sm lg:text-xl lg:font-light">
                <li className="mb-2">姓名：朱跃泽</li>
                <li className="mb-2">
                  我是一名前端工程师，长期关注前端工程化，开发体验优化等方向，近期对
                  Java, SpringBoot, Mysql 等后端技术有浓厚兴趣并实践中
                </li>
                <li className="mb-2">坐标：北京</li>
                <li className="mb-2">学历专业：专科</li>
                <li className="mb-2">
                  skill：
                  <ul className="ml-10">
                    <li className="text-orange-600 mb-1">
                      前端：Vue全家桶, Ts, Dart, Flutter, uni-app
                    </li>
                    <li className="text-orange-600 mb-1">
                      服务端：Nuxt, Next, SpringBoot
                    </li>
                    <li className="text-orange-600 mb-1">数据库：Mysql</li>
                    <li className="text-orange-600 mb-1">
                      其他：小程序，Linux, Git
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
