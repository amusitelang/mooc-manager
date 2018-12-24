const menuList = [
    {
        title: '首页',
        key: '/admin/home',
        icon: 'edit',
    },
    {
        title: 'UI',
        key: '/admin/ui',
        icon: 'form',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
                icon: 'copy',
            },
            {
                title: '弹框',
                key: '/admin/ui/modals',
                icon: 'scissor',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading',
                icon: 'delete',
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notification',
                icon: 'delete',
            },
            {
                title: '全局Message',
                key: '/admin/ui/messages',
                icon: 'diff',
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/tabs',
                icon: 'highlight',
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery',
                icon: 'area-chart',
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel',
                icon: 'crown',
            },
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        icon: 'edit',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
                icon: 'gift',
            },
            {
                title: '注册',
                key: '/admin/form/reg',
                icon: 'shop',
            },
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        icon: 'database',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic',
                icon: 'barcode',
            },
            {
                title: '高级表格',
                key: '/admin/table/hign',
                icon: 'qrcode',
            },
        ]
    },
    {
        title: '富文本',
        key: '/admin/rich',
        icon: 'folder',
    },
    {
        title: '城市管理',
        key: '/admin/city',
        icon: 'inbox',
    },
    {
        title: '订单管理',
        key: '/admin/order',
        icon: 'edit',
        btnList: [
            {
                title: '订单详情',
                key: 'lock',
            },
            {
                title: '结束订单',
                key: 'unlock',
            },
        ],
    },
    {
        title: '员工管理',
        key: '/admin/user',
        icon: 'bars',
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap',
        icon: 'sliders',
    },
    {
        title: '图标',
        key: '/admin/charts',
        icon: 'radar-chart',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar',
                icon: 'bar-chart',
            },
            {
                title: '饼图',
                key: '/admin/charts/pie',
                icon: 'pie-chart',
            },
            {
                title: '折线图',
                key: '/admin/charts/line',
                icon: 'area-chart',
            },
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission',
        icon: 'setting',
    },
];

export default menuList;