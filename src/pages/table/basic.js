import React from 'react';
import { Card, Table } from 'antd';
import './table.less';
import axios from './../../axios/index';

export default class BasicTable extends React.Component{

    state={}

    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                userName: 'Jack',
                sex: 1,
                state: 1,
                interest: 1,
                birthday: '2010-01-01',
                address: '上海市浦东新区北蔡镇',
                time: '09：00AM',
            },
            {
                id: 1,
                userName: 'Lucy',
                sex: 2,
                state: 2,
                interest: 1,
                birthday: '2010-02-01',
                address: '上海市松江区松江大学城',
                time: '08：00AM',
            },
            {
                id: 2,
                userName: 'Mary',
                sex: 2,
                state: 1,
                interest: 2,
                birthday: '2010-03-01',
                address: '上海市松江区松江新城',
                time: '08：30AM',
            },
            {
                id: 3,
                userName: 'Tom',
                sex: 1,
                state: 2,
                interest: 2,
                birthday: '2010-04-01',
                address: '上海市黄浦区黄埔大厦',
                time: '08：00AM',
            },
            {
                id: 4,
                userName: 'Jary',
                sex: 2,
                state: 2,
                interest: 2,
                birthday: '2010-07-01',
                address: '上海市浦东新区金科路',
                time: '09：30AM',
            }
        ]
        this.setState({
            dataSource,
        })
        this.request()
    }

    // 动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                paams: {
                    page:1,
                }
            }
        }).then((res) => {
            console.log(res);
            if (res.code === 200) {
                this.setState({
                    dataSource2: res.result.list,
                })
            }
            
        })
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
            },
            {
                title: '状态',
                dataIndex: 'state',
            },
            {
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                title: '生日',
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                dataIndex: 'address',
            },
            {
                title: '早起时间',
                dataIndex: 'time',
            },
        ]
        return (
            <div>
                <Card title="基础表格" className="card_wrap">
                {/* pagination 分页 */}
                    <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false} rowKey="id"></Table>
                </Card>
                <Card title="动态数据渲染表格">
                {/* pagination 分页 */}
                    <Table columns={columns} dataSource={this.state.dataSource2} bordered pagination={false} rowKey="id"></Table>
                </Card>
            </div>
        )
    }
}