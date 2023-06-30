import React, { useState } from 'react'
import { Modal, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { deleteUser } from '../../Redux/actions/usersList'
import './DeleteUser.scss'


const { confirm } = Modal

const DeleteUser = ({id}) => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false)
        dispatch(deleteUser(id))
        message.success('حذف کاربر با موفقیت انجام شد');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <span onClick={showModal} className='DeleteUser'>
                <DeleteOutlined title='حذف' />
            </span>
            <Modal title="حذف کاربر" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               آیا می خواهید کاربر را حذف کنید؟
            </Modal>
        </>
    )
}

export default DeleteUser
