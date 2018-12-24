import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// function handleClick(e) {
//     console.log('click', e);
//   }

export default class Header extends React.Component{
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode,
        })
    }
    // 递归方式实现菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={<span><span><Icon type={item.icon} ></Icon></span><span>{item.title}</span></span>} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item className="Item" title={item.title} key={item.key}>
                    <Link to={item.key}>
                        <Icon type={item.icon} />
                        { item.title }
                    </Link>
                </Menu.Item>
            )
        })
    }
    // onClick={handleClick} mode="vertical" 
    
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt=""/>
                    <h1>Imoc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}