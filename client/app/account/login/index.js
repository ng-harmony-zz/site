'use strict';

import LoginController from './login.controller';

export default angular.module('siteApp.login', [])
  .controller('LoginController', LoginController)
  .name;
