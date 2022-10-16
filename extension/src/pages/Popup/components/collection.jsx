import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, PaperClipOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Collapse, Button, Select, Divider, List, Typography, Input, Form, Space } from 'antd';

const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const data = [
  'Site URL 1 with hyperlink',
  'Site URL 2 with hyperlink',
  'Site URL 3 with hyperlink',
  'Site URL 4 with hyperlink',
  'Site URL 5 with hyperlink',
];

const sights = {
  Beijing: ['Tiananmen', 'Great Wall'],
  Shanghai: ['Oriental Pearl', 'The Bund'],
};

const Collection = (props) => {
  const onChange = (key) => {
    console.log(key);
  };
  const linkExtra = () => (
    <PaperClipOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
      style={{paddingRight: '2px'}}
    />
  );
  const editExtra = () => {
    <EditOutlined
      onClick={(event) => {
        event.stopPropagation()
      }}
      style={{ paddingRight: '2px' }}
    />
  }

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const delExtra = () => (
    <DeleteOutlined
      onClick={(event) => {
        event.stopPropagation()
      }}
      style={{ paddingRight: '2px'}}
    />)
  return (
    <>
      <Collapse
        onChange={onChange}
        expandIconPosition="end"
      >
        <Panel header="Collection 1" key="1" extra={[editExtra(), linkExtra(), delExtra()]}>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Panel>
        <Panel header="Collection 2" key="2" extra={[editExtra(), linkExtra(), delExtra()]}>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Panel>
        <Panel header="Collection 3" key="3" extra={[editExtra(), linkExtra(), delExtra()]}>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Panel>
      </Collapse>
      <Form>
        <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="Collection Name"
                      name={[field.name, 'collection']}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Collection
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      </Form>
    </>
  );
}

export default Collection
