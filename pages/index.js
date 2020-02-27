import Head from 'next/head';
import Menu from 'components/shared/Menu';

const Home = () => (
  <div>
    <Head>
      <title>Talis | Beauty Salon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Talis Salon</h1>
    <Menu />
  </div>
);

export default Home;
