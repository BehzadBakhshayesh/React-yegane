import React from 'react'
import { Form, Input, Button, Row, Col, Typography, message  } from 'antd'
import { useDispatch } from 'react-redux'
import {addApp} from '../../Redux/actions/appsList'
import './AddApp.scss'

const { Text, Title } = Typography
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


const AddApp = () => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        const data ={
            id:values.id ,
            name: values.name,
        }
        dispatch(addApp(data))
        message.success('ثبت برنامه با موفقیت انجام شد');
    }
    return (
        <>
            <div className='AddApp'>
                <Row className='Row'>
                    <Col span={24}>
                        <Title level={4}>
                            <Text type="success">افزودن برنامه جدید</Text>
                        </Title>
                    </Col>
                </Row>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                    className='addappForm'
                >


                    <Row>
                        <Col span={10}>
                            <Form.Item label=" نام برنامه"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا نام برنامه را وارد نمایید!',
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
                                        message: 'لطفا نام کاربری برنامه را وارد نمایید!',
                                    },
                                ]}
                            >
                                <Input />
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

export default AddApp
