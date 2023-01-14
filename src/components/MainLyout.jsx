import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../helpers/routes';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Asosiy', '1', <PieChartOutlined />),
  getItem('Mahsulot', '2', <UserOutlined />),
  getItem('Kategoriya', '3', <UserOutlined />),
  getItem('Atribut', '4', <FileOutlined />),
  getItem('Brend', '5', <FileOutlined />),
  getItem('Banner', '6', <FileOutlined />),
];
const MAinLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { },
  } = theme.useToken();
  return (
    <Layout className='layout'
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.id}
              element={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </Layout>
  );
};
export default MAinLayout;