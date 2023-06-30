import React,{useState} from 'react'
import { Modal, Button } from 'antd'
import { useDispatch } from 'react-redux'
import Search from '../Search/Search'
import logo from '../../Assets/images/logo.png'
import {logout} from '../../Redux/actions/Login'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
      }
    
      const handleOk = () => {
        setIsModalVisible(false);
        localStorage.removeItem('token')
        localStorage.clear()
        dispatch(logout())
      }
    
      const handleCancel = () => {
        setIsModalVisible(false);
      }

    return (
        <>
            <header className='Header'>
                <div className='logoContainer'>
                    <img src={logo} alt=''/>
                    <h1>پنل ادمین</h1>
                </div>
                <div className='leftContainer'>
                     <div style={{margin:'0 30px'}}>
                        <Search />
                     </div>
                     <div>
                        <Button type="primary" onClick={showModal}>
                            خروج   
                        </Button>
                        <Modal title="خروج" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                         <p>آیا میخواهید   خارج شوید؟</p>
                        </Modal>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
