'use strict';
(function () {
    angular.module('app', ['ui.router','angularCSS','oc.lazyLoad'])
        .config(function ($stateProvider, $urlRouterProvider,$cssProvider) {
            //Config AngularCSS
            angular.extend($cssProvider.defaults, {
                container: 'head',
                method: 'append',
                persist: false,
                preload: false,
                bustCache: false
            });
            //routes
            $stateProvider.state('root', {
                abstract: true,
                url: '/',
                data: {},
                templateUrl: 'core/layouts/root/rootView.html',
                controller:'RootController'
            });
            $stateProvider.state('auth', {
                abstract: true,
                url: '/',
                templateUrl: 'core/layouts/auth/authView.html'
            });
            $stateProvider.state('root.dashboard',{
                url:'dashboard',
                templateUrl: 'core/dashboard/dashboardView.html',
                css:[]
            });
            $urlRouterProvider.otherwise('/dashboard');
        });
}());
