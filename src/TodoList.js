import React from 'react';
import { Divider, List, Typography } from 'antd';

const TodoList = ({data}) => (
        <List
            size="large"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
        />
)
export default TodoList;