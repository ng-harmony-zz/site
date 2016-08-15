'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('siteApp.util', [])
  .factory('Util', UtilService)
  .name;
