import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../helpers/routes';
const { Sider } = Layout;
function getItem(label, key, icon,path, children) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}
const items = [
  getItem('Asosiy', '1', <PieChartOutlined />,'/'),
  getItem('Mahsulot', '2', <UserOutlined />, '/products'),
  getItem('Kategoriya', '3', <UserOutlined />, '/categoriya'),
  getItem('Atribut', '4', <FileOutlined />, '/attribute'),
  getItem('Brend', '5', <FileOutlined />,'/brend'),
  getItem('Banner', '6', <FileOutlined />,'/banner'),
];
const MAinLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  
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
          onClick={(e) => console.log(e.item.props.path)}
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