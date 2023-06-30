import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import Home from './Pages/Home/Home'
import UsersList from './Pages/UsersList/UsersList'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/EditProfile/EditProfile'
import AddUser from './Pages/AddUser/AddUser'
import AppList from './Pages/AppList/AppList'
import AppPro from './Pages/AppPro/AppPro'
import AddApp from './Pages/AddApp/AddApp'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import './App.scss'

const { Header: AntHeader, Sider, Content } = Layout

const App = () => {

  const isLogin = useSelector(state => state.isLogin)
  const token = localStorage.getItem('token')
  if (!isLogin && token !=='myToken') {return  <Login/>} 
  
  return (
    <>
      <main className='App'>
        <Layout className='Layout'>
          <AntHeader className='Header'>
            <Header />
          </AntHeader>
          <Layout>
            <Sider className='Sider'>
              <SideBar />
            </Sider>
            <Content className='Content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/users' component={UsersList} />
                <Route exact path='/user/:id/show' component={Profile} />
                <Route exact path='/user/:id/edit' component={EditProfile} />
                <Route exact path='/adduser' component={AddUser} />
                <Route exact path='/apps' component={AppList} />
                <Route exact path='/app/:id/show' component={AppPro} />
                <Route exact path='/addapp' component={AddApp} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </main>
    </>
  )
}

export default App
