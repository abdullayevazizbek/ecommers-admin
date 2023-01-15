// import Title from 'antd/es/skeleton/Title'
import React from 'react'
import PageHeader from './PageHeader'
import { useLoad, usePostRequest } from '../hooks/request'
import { categoriestListUrl, categoryAddUrl } from '../helpers/urls'
import { Button, Collapse, Form, Input, List, message, Row, Select, Spin } from 'antd'
import { generateCategoriesList, slugify } from '../helpers/helpers'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';

// const {Col} = Row
const { Panel } = Collapse
function CategoriyPage() {
  const { request, loading, response, } = useLoad({ url: categoriestListUrl })
  const categoryPostRequest = usePostRequest({ url: categoryAddUrl })

  const hendelonFinish = async (e) => {
    const { name_uz } = e
    const postedData = {
      ...e,
      slug: slugify(name_uz),
      catImage: '',
    }

    const { success, request } = await categoryPostRequest.request({
      data: postedData,
    }

    )

    if (success) {
      message.success('Kategoriya muvofiqaqqiyatli qo`shildi')
      request()
    }
  }

  // genExtra = () => {
  //   <Button
  //     icon={<EditOutlined />}
  //     onClick={(event) => {
  //       // If you don't want click extra trigger collapse, you can prevent this:
  //       event.stopPropagation();
  //     }}
  //   />
  // }
  // genExtrs=()=>{
  //   <Button
  //   icon={<DeleteOutlined />}
  //     onClick={(event) => {
  //       // If you don't want click extra trigger collapse, you can prevent this:
  //       event.stopPropagation();
  //     }}
  //   />
  // }

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
                  <Collapse defaultActiveKey={['1']} style={{ width: "100%" }}>
                    {
                      response?.categories
                        ?.map((item) => (

                          <Panel
                            header={item.name_uz}
                            key={item.id}
                            
                          >
                            {
                              item?.children?.length ? (<List
                                bordered
                                dataSource={item.children}
                                renderItem={(el) => (
                                  <List.Item>
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
          </Row>
        )
      }

    </>
  )
}

export default CategoriyPage