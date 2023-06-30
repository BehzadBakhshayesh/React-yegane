
import { Typography, Spin,Button, Row, Col, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Profile.scss'

const { Text, Title } = Typography

const Profile = () => {
    const {id}  = useParams()
    const list = useSelector(state => state.usersList)
    const user = list.find(user => {
        if(user.id == id){
            return user
        }
    })

    return (
        <>
            <div className='Profile'>
                    <div className='innerProfile'>
                        <Row className='Row'>
                            <Col span={24}>
                                <Title level={4}>
                                    <Text type="success">کاربر شماره {id}</Text>
                                </Title>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Avatar  size={64} icon={<UserOutlined />} />
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={4}>
                                نام :
                            </Col>
                            <Col span={20}>
                                {user.firstName}
                            </Col>
                        </Row>
                        <Row className='Row'>
                        <Col span={4}>
                               نام خانوادگی :
                            </Col>
                            <Col span={20}>
                            {user.lastName}
                            </Col>
                        </Row>
                        <Row className='Row'>
                        <Col span={4}>
                               ایمیل :
                            </Col>
                            <Col span={20}>
                            {user.email}
                            </Col>
                        </Row>
                        <Row className='Row'>
                        <Col span={4}>
                              برنامه مجاز :
                            </Col>
                            <Col span={20}>
                            {user.appOwnership}
                            </Col>
                        </Row>
                        <Row className='Row'>
                        <Col span={4}>
                             تاریخ تولد :
                            </Col>
                            <Col span={20}>
                            {user.dateOfBirth}
                            </Col>
                        </Row>
                        <Row className='Row'>
                        <Col span={4}>
                             رمز عبور :
                            </Col>
                            <Col span={20}>
                            {user.password}
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Button  type="primary">
                                    <Link to='/users'> بازگشت به لیست کاربران</Link>
                                </Button>
                            </Col>
                        </Row>
                    </div>
            </div>
        </>
    )
}

export default Profile
