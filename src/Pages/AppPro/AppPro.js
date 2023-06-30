
import { Typography,Button, Row, Col, Avatar } from 'antd'
import { AppleOutlined  } from '@ant-design/icons'
import { useParams, Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './AppPro.scss'

const { Text, Title } = Typography

const AppPro = () => {
    const {id}  = useParams()
    const list = useSelector(state => state.appsList)
    const app = list.find(app => {
        if(app.id == id){
            return app
        }
    })

    return (
        <>
            <div className='AppPro'>
                    <div className='innerAppPro'>
                        <Row className='Row'>
                            <Col span={24}>
                                <Title level={4}>
                                    <Text type="success">برنامه شماره {id}</Text>
                                </Title>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Avatar  size={64} icon={<AppleOutlined  />} />
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={4}>
                            نام برنامه :
                            </Col>
                            <Col span={20}>
                                {app.name}
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Button  type="primary">
                                    <Link to='/apps'> بازگشت به لیست برنامه ها</Link>
                                </Button>
                            </Col>
                        </Row>
                    </div>
            </div>
        </>
    )
}

export default AppPro
