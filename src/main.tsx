import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// 初始化 页面样式
import 'normalize.css';
import 'antd/dist/antd.css';
// 导入路由配置
import MainApp from './apps/MainApp';
import LoginApp from './apps/LoginApp';
import NotFoundApp from './apps/NotFoundApp';

import { pRoutes } from './routes';

ReactDOM.render(
    // <React.StrictMode> // react 严格模式
    // </React.StrictMode>,
    <HashRouter>
        <Switch>
            <Route path={pRoutes.index} exact render={() => (<Redirect to={pRoutes.main}></Redirect>)} ></Route>
            <Route path={pRoutes.login} exact component={LoginApp} ></Route>
            <Route path={pRoutes.main} component={() => <MainApp pMenu={pRoutes.main} />} ></Route>
            <Route path={pRoutes.notFound} component={NotFoundApp} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);