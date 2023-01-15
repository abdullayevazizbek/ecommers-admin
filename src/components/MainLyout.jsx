import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../helpers/routes';
const { Sider } = Layout;
function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}
const items = [
  getItem('Asosiy', '1', <PieChartOutlined />, '/'),
  getItem('Mahsulot', '2', <UserOutlined />, '/products'),
  getItem('Kategoriya', '3', <UserOutlined />, '/categoriya'),
  getItem('Atribut', '4', <FileOutlined />, '/attribute'),
  getItem('Brend', '5', <FileOutlined />, '/brend'),
  getItem('Banner', '6', <FileOutlined />, '/banner'),
];
const MAinLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuKey, setactiveMenuKey] = useState('1')


  const navigate = useNavigate()
  const menuItemHandler = (e) => {
    const { path } = e.item.props
    navigate(path)
  }
  const { pathname } = useLocation()

  function isSelectedMenuItem(path, key) {
    if (path === pathname) {
      // console.log(key);
      setactiveMenuKey(key)
    }
  }

  useEffect(() => {
    items.forEach((item) => {
      isSelectedMenuItem(item.path, item.key)
      // console.log(item.path,item.key);
    })
  }, [pathname])
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
          defaultSelectedKeys={[activeMenuKey]}
          mode="inline"
          items={items}
          onClick={menuItemHandler}
        />
      </Sider>
      <Layout className="site-layout">
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.id}
              element={route.component}
              onClick
            />
          ))}
        </Routes>
      </Layout>
    </Layout>
  );
};
export default MAinLayout;