import React, { useState } from 'react'
import {  Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Search.scss'


const Search = () => {
    const [input, setInput] = useState('')
    const changeHandle = (e) => {
        setInput(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='Search'>
                <form className='form' onSubmit={(e) => submitHandle(e)}>
                    <Input placeholder='جستجو...' onChange={(e) => changeHandle(e)} value={input} />
                    <Button htmlType='submit' icon={<SearchOutlined />} />
                </form>
            </div>
        </>
    )
}

export default Search
