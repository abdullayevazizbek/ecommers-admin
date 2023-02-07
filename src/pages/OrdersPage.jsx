import { Button, Descriptions, Drawer, Row, Space, Table, Typography } from 'antd'
import React from 'react'
import PageHeader from '../components/PageHeader'
import { EyeOutlined } from '@ant-design/icons'
import { orderListUrl } from '../helpers/urls'
import { useLoad } from '../hooks/request'
import { paymetMethod } from '../helpers/helpers'
import { useState } from 'react'
function OrdersPage() {
    const { response, loading, request } = useLoad({ url: orderListUrl })
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [order, setOrder] = useState([])
    const hendleViewButton = (item) => {
        setOrder(item)
        setDrawerOpen(true)
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'order_id',
            key: 'order_id',
        },
        {
            title: 'Name',
            dataIndex: 'full_name',
            key: 'full_name',
        },
        {
            title: 'To\'lov turi',
            dataIndex: 'payment_method',
            key: 'payment_method',
            render: (item) => (
                <Typography>{paymetMethod[item]}</Typography>
            )

        },
        {
            title: 'Umumiy narxi',
            dataIndex: 'total_price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (item, record) => (
                <Space size='middle'>
                    <Button type='default' onClick={() => hendleViewButton(item)}>
                        <EyeOutlined />
                    </Button>
                </Space>
            ),
        },
    ]
    return (
        <Row className='container'>
            <PageHeader title='Buyurtmalar' />
            <Table
                style={{ width: '100%' }}
                columns={columns}
                dataSource={response?.orders}
                loading={loading}
            />
            <Drawer
                width={'80%'}
                title="Buyurtma haqida"
                placement='right'
                onClose={handleDrawerClose}
                open={drawerOpen}
            > 
                <Descriptions title={`Buyurtma ID: ${order.order_id}`}>
                    <Descriptions.Item label="UserName">{order.full_name}</Descriptions.Item>
                    <Descriptions.Item label="Buyurtma sanasi">{order.created_at}</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </Drawer>
        </Row>
    )
}

export default OrdersPage