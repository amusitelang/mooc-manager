import React from 'react';
// {/* HashRouter里面不能直接写Route */}

export default class Info extends React.Component{

    render() {
        return (
            <div>
                这里是测试动态路由功能{this.props.match.params.mianId}
            </div>
        )
    }
}