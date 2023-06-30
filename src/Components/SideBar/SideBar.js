import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { UserOutlined, AppstoreOutlined , HomeOutlined, UserAddOutlined, OrderedListOutlined, PlusCircleOutlined    } from '@ant-design/icons'
import './SideBar.scss'

const { SubMenu } = Menu

const SideBar = () => {

    return (
        <>
            <div className='SideBar'>
                <Menu
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<HomeOutlined />} ><Link to='/'>داشبورد</Link></Menu.Item>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="کاربران">
                        <Menu.Item key="2" icon={<OrderedListOutlined  />}><Link to='/users'>لیست کاربران </Link></Menu.Item>
                        <Menu.Item key="3" icon={<UserAddOutlined />}><Link to='/adduser'>افزودن کاربر </Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="برنامه ها">
                        <Menu.Item key="4" icon={<OrderedListOutlined />}><Link to='/apps'>لیست برنامه ها </Link></Menu.Item>
                        <Menu.Item key="5" icon={<PlusCircleOutlined />}><Link to='/addapp'>افزودن برنامه </Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </>
    )
}

export default SideBar
