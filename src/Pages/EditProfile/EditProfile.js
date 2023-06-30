import { useState } from 'react'
import { Form, Input, Button, Row, Col, Typography, DatePicker, message, Avatar, Select  } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import {editUser} from '../../Redux/actions/usersList'
import './EditProfile.scss'

const { Text, Title } = Typography
const { Option } = Select
const layout = {
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}



const EditProfile = () => {
    const { id } = useParams()
    const list = useSelector(state => state.usersList)
    const user = list.find(user => {
        if (user.id == id) {
            return user
        }
    })

    const apps = useSelector(state => state.appsList)

    const dispatch = useDispatch()
    const [date, setDate] = useState(user.dateOfBirth)


    const onFinish = (values) => {
        console.log('values', values);
        const data = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            dateOfBirth: date ,
            appOwnership:values.appOwnership
        }
        dispatch(editUser(data))
        message.success('ویرایش کاربر با موفقیت انجام شد');

    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo)
    }


    function handleSelectChange(value) {
        console.log(`selected ${value}`);
      }


    return (
        <>
            <div className='EditProfile'>
                <div className='innerEditProfile'>
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
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            password: user.password,

                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className='addUserForm'
                    >


                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item label="نام"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا نام را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item
                                    label="نام خانوادگی :"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا نام خانوادگی را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item
                                    label="نام کاربری"
                                    name="id"
                                    rules={[
                                        {
                                            
                                            required: true,
                                            message: 'لطفانام کاربری را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item
                                    label="ایمیل"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            required: true,
                                            message: 'لطفا ایمیل را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item
                                    label="رمز عبور"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا رمز عبور را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                            <Form.Item
                                    label="انتخاب برنامه :"
                                    name="appOwnership"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا برنامه را انتخاب نمایید!',
                                        },
                                    ]}
                                >
                                    
                            <Select
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                defaultValue={user.appOwnership}
                                onChange={handleSelectChange}
                            >
                                {apps.map(app =><Option key={app.name}>{app.name}</Option>)}
                            </Select>
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={8}>
                                <Form.Item
                                    label="تاریخ تولد"
                                    name="dateOfBirth"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا تاریخ تولد را وارد نمایید!',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        format={'YYYY/MM/DD'}
                                        onChange={(date, dateString) => setDate(dateString)}
                                        defaultValue={moment(date, 'YYYY/MM/DD')} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row className='Row'>
                            <Col span={3} style={{marginRight:'100px'}}> 
                                <Button type="primary">
                                    <Link to='/users'> بازگشت به لیست کاربران</Link>
                                </Button>
                            </Col>
                            <Col span={3}>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                       ثبت تغییرات
                                    </Button>
                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default EditProfile
