import React from 'react';
import { Card, Table, Button, Modal, message } from 'antd';
import './table.less';
import axios from './../../axios/index';
import { Utils } from 'handlebars';
import Util from './../../utils/utils';

export default class BasicTable extends React.Component{

    state={}
    params = {
        page: 1
    }

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
        this.pageRequest();
    }

    // 动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page:1,
                }
            }
        }).then((res) => {
            console.log(res);
            if (res.code === 200) {
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                })
            }
            
        })
    }
    pageRequest = () => {
        console.log(this.params.page);
        let _this = this;
        axios.ajax({
            url: '/table/list/page',
            data: {
                params: {
                    page: this.params.page,
                }
            }
        }).then((res) => {
            console.log(res);
            if (res.code === 200) {
                this.setState({
                    dataSource3: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Util.pagination(res,(current) => {
                        // to-do
                        _this.params.page = current;
                        this.pageRequest();
                        console.log(123);
                        console.log(current);
                    })
                })
            }
            
        })
    }

    onRowClick = (record, index) => {
        console.log(record);
        let selectKey = [record.id];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record,
        })
    }
    // 多选执行删除
    handleDelete = () => {
        let rows = this.state.selectedIds;
        Modal.confirm({
            title: '删除',
            content: '确认删除?',
            onOk: () => {
                console.log(rows);
                message.success('删除成功');
                this.request();
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
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者',
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '电子竞技',
                        '5': '踢毽子',
                        '6': '跑步',
                        '7': '爬山',
                        '8': '骑行',
                    }
                    return config[interest];
                }
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
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeys,
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids =[];
                // eslint-disable-next-line array-callback-return
                selectedRows.map((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedIds:ids,
                })
            }
        }
        return (
            <div>
                <Card title="基础表格" className="card_wrap">
                {/* pagination 分页 */}
                    <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false} rowKey="id"></Table>
                </Card>
                <Card title="动态数据渲染表格 - Mock" className="card_wrap">
                {/* pagination 分页 */}
                    <Table columns={columns} dataSource={this.state.dataSource2} bordered pagination={false} rowKey="id"></Table>
                </Card>
                <Card title="单选 - Mock" className="card_wrap">
                {/* pagination 分页 */}
                    <Table
                     columns={columns}
                     dataSource={this.state.dataSource2}
                     bordered pagination={false}
                     rowKey="id"
                     rowSelection={rowSelection}
                     onRow={(record, index) => {
                         return {
                             onClick: () => {
                                 this.onRowClick(record, index)
                             }, // 点击行
                            //  onMouseEnter: () => {} // 鼠标移入行
                         }
                     }}
                    ></Table>
                </Card>
                <Card title="多选 - Mock" className="card_wrap">
                {/* pagination 分页 */}
                <div>
                    <Button onClick={this.handleDelete}>删除</Button>
                </div>
                    <Table
                     columns={columns}
                     dataSource={this.state.dataSource2}
                     bordered pagination={false}
                     rowKey="id"
                     rowSelection={rowCheckSelection}
                     onRow={(record, index) => {
                         return {
                             onClick: () => {
                                 this.onRowClick(record, index)
                             }, // 点击行
                            //  onMouseEnter: () => {} // 鼠标移入行
                         }
                     }}
                    ></Table>
                </Card>
                <Card title="分页 - Mock">
                {/* pagination 分页 */}
                    <Table
                     columns={columns}
                     dataSource={this.state.dataSource3}
                     bordered
                     pagination={this.state.pagination}
                     rowKey="id"
                    ></Table>
                </Card>
            </div>
        )
    }
}