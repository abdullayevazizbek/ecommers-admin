// import Title from 'antd/es/skeleton/Title'
import React, { useState } from 'react'
import PageHeader from './PageHeader'
import { useLoad, usePostRequest, useDeleteRequest } from '../hooks/request'
import { categoriestListUrl, categoryAddUrl, getcaregoryDeleteUrl } from '../helpers/urls'
import { Button, Collapse, Form, Input, List, message, Modal, Row, Select, Space, Spin } from 'antd'
import { generateCategoriesList, slugify } from '../helpers/helpers'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// const {Col} = Row
const { Panel } = Collapse
function CategoriyPage() {
  const categoryPostRequest = usePostRequest({ url: categoryAddUrl })
  const categoryDeleteRequest = useDeleteRequest({})
  const { request, loading, response, } = useLoad({ url: categoriestListUrl })
  const { forminitialsValues, setforminitialsValues } = useState({})
  const { modalOPen, setmodalOpen } = useState(false)
  const { deletedId, setdeletedId } = useState(null)

  const hendelonFinish = async (e) => {
    const { name_uz } = e
    const postedData = {
      ...e,
      slug: slugify(name_uz),
      catImage: '',
    }

    const { response, success } = await categoryPostRequest.request({
      data: postedData,
    }
    )

    if (success) {
      console.log(response);
      message.success('Kategoriya muvofiqaqqiyatli qo`shildi')

      request()
    }
  }


  const hendelDeliteBtn = (item) => {
    setdeletedId(item.id)
    setmodalOpen(true)
  }


  const hendleEditBtn = (item) => {
    setforminitialsValues(item)
  }


  const hendelModalOk = async () => {
    const { success } = await categoryDeleteRequest.request({ url: getcaregoryDeleteUrl(deletedId) })
    if (success) {
      message.success('Kategoriya muvofiqaqqiyatli o`chirildi')
      hendelModalCloce()
      request()
    }
  }
  const hendelModalCloce = () => {
    setdeletedId(null)
    setmodalOpen(false)
  }



  const genExtra = (item) => {
    return <Space>
      <Button default icon={<EditOutlined />} onClick={() => hendleEditBtn(item)} />
      <Button danger icon={<DeleteOutlined />} onClick={() => hendelDeliteBtn(item)} />
    </Space>
  }
  console.log(genExtra());


  return (
    <>
      <PageHeader title='Kategoriyalar' btnTitle='Kategoriya qo`shish' />
      {
        loading ? (<Spin />) : (
          <Row
            justify={'space-between'}
            className='Row'
          >
            <Form
              style={{ width: '20%' }}
              layout={'vertical'}
              name="basic"
              autoComplete="off"
              // onFinishFailed={onFinish}
              onFinish={hendelonFinish}
              initialValues={forminitialsValues}
            >
              <Form.Item
                label="Kategoriya nomi UZ"
                name="name_uz"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Kategoriya nomi RU"
                name="name_ru"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Ota Kategoriyani kiriting'
                name='parent_id'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select
                  defaultValue={'Glavniy Kategoriy'}
                  options={generateCategoriesList(
                    response?.categories
                  )}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>

                <Button type="primary" htmlType="submit" loading={loading}>
                  Submit
                </Button>

              </Form.Item>

            </Form>

            {
              loading ? (<Spin />) : (
                <Row style={{ width: "80%" }}>
                  <Collapse defaultActiveKey={['1']} style={{ width: "100%" }} >
                    {
                      response?.categories
                        ?.map((item) => (

                          <Panel
                            extra={genExtra(item)}
                            header={item.name_uz}
                            key={item.id}
                          >
                            {
                              item?.children?.length ? (<List
                                bordered
                                dataSource={item.children}
                                renderItem={(el) => (
                                  <List.Item extra={genExtra(el)} >
                                    <p>{el.name_uz}</p>
                                  </List.Item>
                                )}
                              />) : (<p>Item content</p>)


                            }
                          </Panel>
                        ))
                    }
                  </Collapse>
                </Row>
              )
            }
            <Modal
              title="Basic Modal"
              open={modalOPen}
              onOk={hendelModalOk}
              onCancel={hendelModalCloce}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Row>
        )
      }

    </>
  )
}

export default CategoriyPage