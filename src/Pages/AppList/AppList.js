import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Typography, Spin } from 'antd'
import { EyeOutlined, EditOutlined} from '@ant-design/icons'
import { getappsList} from '../../Redux/actions/appsList'
import DeleteApp from '../../Components/DeleteApp/DeleteApp'
import './AppList.scss'



const { Text, Title } = Typography
const columns = [
    {
        title: 'شماره برنامه',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'نام برنامه',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'اقدامات',
        dataIndex: 'actions',
        key: 'actions',
        render: (field, record) => {
        return (
        <span>
            <Link to={`/app/${record.id}/show`}><EyeOutlined title='مشاهده'  style={{margin:'4px', color:'#52c41a'}}/></Link> 
            <DeleteApp id={record.id}/>
        </span>
        )
        }
    },
    
];

const AppList = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getappsList()) }, [])
    const list = useSelector(state => state.appsList)
    const loading = useSelector(state => state.loading)



    return (
        <>
            <div className='AppList'>
                        <div className='header'>
                            <Title level={4}>
                                <Text type="success"> لیست برنامه ها</Text>
                            </Title>
                        </div>
                        <div className='container'>
                            <Table columns={columns} dataSource={list} loading={loading}/>
                        </div>
            </div>
        </>
    )
}

export default AppList
