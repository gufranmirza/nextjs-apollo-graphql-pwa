// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import '../../../static/base.scss';
import config from '../../config/index';
import Header from '../../components/Header';

type Props = {
  router: Object,
  children: React.Element<*>
};

const App = ({ children }: Props) => (
  <div>
    <Helmet>
      <title>{config('title')}</title>
    </Helmet>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default withRouter(App);
