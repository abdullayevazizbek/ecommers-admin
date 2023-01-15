import React from 'react'
import { Button, Row, Typography } from 'antd'

const {Title}=Typography

function PageHeader(props) {
    const {title,btnTitle} =props
    return (
        <Row className='canteiner' justify='space-between' style={{ paddingTop: '20px', paddingLeft: '20px' }}>
            <Title level={2}>{title}</Title>
            <Button>{btnTitle}</Button>
        </Row>)
}

export default PageHeader