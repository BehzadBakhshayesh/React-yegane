import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Typography} from 'antd'
import { EyeOutlined, EditOutlined} from '@ant-design/icons'
import { getusersList} from '../../Redux/actions/usersList'
import DeleteUser from '../../Components/DeleteUser/DeleteUser'
import './UsersList.scss'



const { Text, Title } = Typography
const columns = [
    {
        title: 'شماره کاربر',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'نام',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'نام خانوادگی',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'اقدامات',
        dataIndex: 'actions',
        key: 'actions',
        render: (field, record) => {
        return (
        <span>
            <Link to={`/user/${record.id}/show`}><EyeOutlined title='مشاهده'  style={{margin:'4px', color:'#52c41a'}}/></Link> 
            <Link to={`/user/${record.id}/edit`}><EditOutlined title='ویرایش' style={{margin:'4px'}}/></Link>
            <DeleteUser id={record.id}/>
        </span>
        )
        }
    },
    
];

const UsersList = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getusersList()) }, [])
    const list = useSelector(state => state.usersList)
    const loading = useSelector(state => state.loading)



    return (
        <>
            <div className='UsersList'>
                        <div className='header'>
                            <Title level={4}>
                                <Text type="success"> لیست کاربران</Text>
                            </Title>
                        </div>
                        <div className='container'>
                            <Table columns={columns} dataSource={list} loading={loading}/>
                        </div>
            </div>
        </>
    )
}

export default UsersList
