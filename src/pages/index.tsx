import Layout from '@/components/layout';
import Typewriter from 'typewriter-effect';

export default function IndexPage() {
  return (
    <Layout title="yzZ">
      <main className="w-screen h-[90vh] flex flex-col scrollbar-hide">
        {/* writer animation */}
        <div className="flex flex-1 justify-center items-center text-[50px] lg:text-[200px]">
          <Typewriter
            options={{
              strings: ['Welcome🚀'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
