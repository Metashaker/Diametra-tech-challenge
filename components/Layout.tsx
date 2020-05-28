// Packages
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

// Helpers
import pathFriendly from '@helpers/pathFriendly';

const { Sider, Header, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
  select: string;
}

const MainLayout = (props: LayoutProps) => {
  const [characters, setCharacter] = useState([]);
  const { children, select } = props;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await res.json();
      const rickMortyData = data.results;
      setCharacter(rickMortyData);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[select]}>
          {characters.map((item) => {
            const urlFriendly = pathFriendly(item.name);
            return (
              <Menu.Item key={item.id}>
                <Link href="/character/[slug]" as={`/character/${urlFriendly}`}>
                  <a>{item.name}</a>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, backgroundColor: '#fff', textAlign: 'center' }}
        >
          <h1>The Rick and Morty API</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center' }}
          >
            {children}
          </div>
        </Content>
        <style jsx>{`
          #components-layout-demo-fixed-sider .logo {
            height: 32px;
            background: green;
            margin: 16px;
          }
          .site-layout .site-layout-background {
            background: red;
          }
        `}</style>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
