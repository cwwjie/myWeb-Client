import React from 'react';
import { Router, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

import isPC from './../utils/isPC';
import indexModel from './../models/index';
import dynamicModel from './../models/dynamic';

function RouterConfig({ history, app }) {

  indexModel.init(app);
  dynamicModel.init(app);

  const Computer = dynamic({ app, component: () => import('./computer/index') });

  const Mobile = dynamic({ app, component: () => import('./mobile/index') });
  const Dynamic = dynamic({ app, component: () => import('./mobile/dynamic/index') });
  const DynamicGroup = dynamic({ app, component: () => import('./mobile/dynamic/group') });
  const DynamicEdit = dynamic({ app, component: () => import('./mobile/dynamic/edit') });

  return (
    <Router history={history}>
      <div className="router-content">
        {browserRedirect(app)}
        <Route path="/pc/index" component={Computer} />
        <Route path="/mobile/index" component={Mobile} />
        <Route path="/mobile/dynamic/index" component={Dynamic} />
        <Route path="/mobile/dynamic/group" component={DynamicGroup} />
        <Route path="/mobile/dynamic/edit" component={DynamicEdit} />
      </div>
    </Router>
  );
}   

function browserRedirect(app) {
  const Mobile = dynamic({ app, component: () => import('./mobile/index') });
  const Computer = dynamic({ app, component: () => import('./computer/index') });

  if (isPC()) {

    return (
      <Route exact path="/" component={Mobile} />
    )
  } else {

    return (
      <Route exact path="/" component={Computer} />
    )
  }
}

export default RouterConfig;