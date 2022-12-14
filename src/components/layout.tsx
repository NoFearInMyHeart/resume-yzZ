import Head from 'next/head';
import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = 'This is the default title',
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="mt-[10vh]">{children}</div>
    </div>
  );
}
