import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Row, Col, Divider } from 'antd'
import {getlogin } from '../../Redux/actions/Login'
import './Login.scss'

const layout = {
    labelCol: {span: 8,},
    wrapperCol: { span: 16, },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

function Login() {

const dispatch = useDispatch()
const submitLoading= useSelector(state => state.submitLoading)

    const onFinish = (values) => {
        dispatch(getlogin(values))
    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo)
    }

    return (
        <div className='Login'>
                <Row justify="space-around" align="middle" style={{ marginTop: '150px' }}>
                    <Col span={8}>
                        <Divider orientation="center">ورود به پنل ادمین</Divider>
                <Form
                    {...layout}
                    name='login'
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label='نام کاربری'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'نام کاربری را وارد نمایید!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='رمز عبور'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'رمز عبور را وارد نمایید!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit' loading={submitLoading} disabled={submitLoading}>
                            ورود
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </div>
    )
}

export default Login