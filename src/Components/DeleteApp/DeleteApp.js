import React, { useState } from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { deleteApp } from '../../Redux/actions/appsList'
import './DeleteApp.scss'


const { confirm } = Modal

const DeleteApp = ({id}) => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false)
        dispatch(deleteApp(id))
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <span onClick={showModal} className='DeleteApp'>
                <DeleteOutlined title='حذف' />
            </span>
            <Modal title="حذف برنامه" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               آیا می خواهید برنامه را حذف کنید؟
            </Modal>
        </>
    )
}

export default DeleteApp
