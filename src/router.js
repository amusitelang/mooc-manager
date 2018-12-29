import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons/index';
import Modals from './pages/ui/modals/index';
import Loadings from './pages/ui/loadings/index';
import Notice from './pages/ui/notice/index';
import Messages from './pages/ui/messages/index';
import Tabs from './pages/ui/tabs/index';
import NoMatch from './pages/ui/noMatch/index';
import Gallery from './pages/ui/gallery/index';
import Carousel from './pages/ui/carousel/index';
import FormLogin from './pages/form/login/index';
import FormRegister from './pages/form/register/index';
import BasicTable from './pages/table/basic';
import City from './pages/city/index';
import Order from './pages/order/index';

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() => 
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loading" component={Loadings}/>
                                <Route path="/admin/ui/notification" component={Notice}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tabs}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route path="/admin/ui/carousel" component={Carousel}/>
                                <Route path="/admin/form/login" component={FormLogin}/>
                                <Route path="/admin/form/reg" component={FormRegister}/>
                                <Route path="/admin/table/basic" component={BasicTable}/>
                                <Route path="/admin/city" component={City}/>
                                <Route path="/admin/order" component={Order}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }
}