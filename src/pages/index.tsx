import Layout from '@/components/layout';
import Main from '@/components/Main';
import SlideNav from '@/components/SlideNav';
import Work from '@/components/Work';
import Projects from '@/components/Projects';

export default function IndexPage() {
  return (
    <Layout title="yzZ">
      <SlideNav />
      <Main />
      <Work />
      <Projects />
    </Layout>
  );
}
