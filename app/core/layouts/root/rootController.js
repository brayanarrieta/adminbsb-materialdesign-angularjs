/**
 * Created by Arrieta on 21/11/2017.
 */
'use strict';
angular.module('app').controller('RootController', function($scope, $location, $interval,$http,$state,$ocLazyLoad) {
    // Charge the main scripts
    $ocLazyLoad.load('assets/js/admin.js');
});