import React,{useState} from 'react'
import { Form, Input, Button, Row, Col, Typography, DatePicker, message, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {addUser} from '../../Redux/actions/usersList'
import './AddUser.scss'

const { Text, Title } = Typography
const { Option } = Select
const layout = {
    labelCol: {span: 8,},
    wrapperCol: {span: 16,},
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}


const AddUser = () => {
    const dispatch = useDispatch()
    const [date, setDate] = useState('')

    const apps = useSelector(state => state.appsList)
    
    const handleSelectChange = (value) => {
        // console.log(`selected ${value}`);
      }

    const onFinish = (values) => {
        const data ={
            id:values.id ,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            dateOfBirth: date,
            appOwnership:values.appOwnership
        }
        dispatch(addUser(data))
        message.success('ثبت کاربر با موفقیت انجام شد');
    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo)
    }


    return (
        <>
            <div className='AddUser'>
                <Row className='Row'>
                    <Col span={24}>
                        <Title level={4}>
                            <Text type="success">افزودن کاربر جدید</Text>
                        </Title>
                    </Col>
                </Row>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className='addUserForm'
                >


                    <Row>
                        <Col span={10}>
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
                    <Row>
                        <Col span={10}>
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
                    <Row>
                        <Col span={10}>
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
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
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
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
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
                            <Col span={10}>
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
                                placeholder="انتخاب کنید"
                                onChange={handleSelectChange}
                            >
                                {apps.map(app =><Option key={app.name}>{app.name}</Option>)}
                            </Select>
                            </Form.Item>
                            </Col>
                        </Row>
                    <Row>
                        <Col span={10}>
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
                                 <DatePicker format={'YYYY/MM/DD'} onChange={(date, dateString)=>setDate(dateString)} value={date}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col span={10}>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    افزودن کاربر
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default AddUser
