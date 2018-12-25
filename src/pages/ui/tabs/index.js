import React from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import './../ui.less';

export default class Tab extends React.Component{

    newTabIndex =0;
    
    constructor(params) {
        super();
        this.state = {
        };
    }

    componentWillMount() {
        const panes = [
            {title: 'Tab 1', content: 'Tab 1', key: '1'},
            {title: 'Tab 2', content: 'Tab 2', key: '2'},
            {title: 'Tab 3', content: 'Tab 3', key: '3'},
            {title: 'Tab 4', content: 'Tab 4', key: '4'},
        ]
        this.setState({
            activeKey: panes[0].key,
            panes,
        })
    }

    handleCallback = (key) => {
        message.info('Hi,您选择了页签'+key)
    }

    handleOnChange = (activeKey) => {
        this.setState({
            activeKey,
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `new Tab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey; // 获取当前打开的页签
        let lastIndex; // 声明一个索引
        this.state.panes.forEach((pane, i) => { // 遍历
            if (pane.key === targetKey) { // 判断pane.key是否是删除的目标key是不是一个，如果是，保存在lastIndex上
            lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey); // 将剩下的按钮过滤出来得到全新的panes
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <div>
                <Card title="Tabs页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="Tabs带图标的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab={<span><Icon type="plus"/>TAB 1</span>} key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit"/>TAB 2</span>} key="2">Content of Tab Pane 2</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete"/>TAB 3</span>} key="3">Content of Tab Pane 3</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="动态添加Tabs页签" className="card-wrap">
                    <Tabs
                     onChange={this.handleOnChange}
                     activeKey={this.state.activeKey}
                     type="editable-card"
                     onEdit={this.onEdit}
                     >
                        {
                            this.state.panes.map((item) => {
                                return (
                                    <Tabs.TabPane tab={item.title} key={item.key}>{item.content}</Tabs.TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}