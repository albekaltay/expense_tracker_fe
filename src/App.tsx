import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignUp from "./components/SignUp"
import { Layout, Menu, Breadcrumb } from 'antd';
import Login from "./components/Login";
import { useDispatch } from "react-redux";



const App = () => {
  const { Header, Content, Footer } = Layout; 

  return (

    <Router>

<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '5%', marginTop: 64 }}>
     
      
      
      <Routes>
        <Route path="/users/register" element={<SignUp/>}> </Route>  
        <Route  path="/login" element={<Login/>}                 ></Route>
        </Routes>

      

    </Content>
    <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2022 React Dersleri</Footer>
  </Layout>


        </Router>    
     
  )}

export default App
