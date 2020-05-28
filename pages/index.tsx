import Layout from '@components/Layout';

const Index = () => {
  return (
    <Layout select="0">
      <div className="explanation">
        The objective of this application is to show the benefits of{' '}
        <b>Static Site Generation</b> (SSG). Select any character that is
        located in the sider : )
      </div>
      <style jsx>{`
        .explanation {
          font-size: 1rem;
          width: 35rem;
          max-width: 100vw;
          padding: 0 2rem;
          margin: 0.5rem auto;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
