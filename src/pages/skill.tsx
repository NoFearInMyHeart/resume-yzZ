import Layout from '@/components/layout';

function Skill() {
  const arr: string[] = [
    'Html',
    'Css',
    'Js',
    'TS',
    'Flutter',
    '小程序',
    'SpringBoot',
  ];
  return (
    <Layout title="yzZ">
      <main className="w-screen h-[90vh] scrollbar-hide px-5">
        <div className="lg:hidden h-full">
          <p className="py-10 text-3xl">技术栈</p>
          <div className="flex-1 flex flex-wrap">
            {arr.map((item) => (
              <p className="py-3 pr-3 my-2">{item}</p>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Skill;
