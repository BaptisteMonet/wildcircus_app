import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/home/Home';
import Ranking from '../components/ranking/Ranking';
import Subscribe from '../components/susbcribe/Subscribe';
import GameOne from '../components/game/GameOne';
import GameTwo from '../components/game/GameTwo';
import GameThree from '../components/game/GameThree';

const Routes = () => {
  return (
    <div className="spreadPage">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Ranking" component={Ranking} />
        <Route path="/Subscribe" component={Subscribe} />
        <Route path="/GameOne" component={GameOne} />
        <Route path="/GameTwo" component={GameTwo} />
        <Route path="/GameThree" component={GameThree} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default Routes;
