'use strict';
(function () {
    angular.module('app', ['ui.router','angularCSS'])
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
            $stateProvider.
                state('root', {
                        abstract: true,
                        url: '/',
                        data: {},
                        views: {
                            'header': {
                                templateUrl: 'core/header/headerView.html'
                            },
                            'sidebar': {
                                templateUrl: 'core/sidebar/sidebarView.html'
                            },
                            'content': {
                                template: 'Choose option from menu...'
                            }
                        }
                    });
            $stateProvider.state('root.dashboard',{
                url:'dashboard',
                views: {
                    'content@': {
                        templateUrl: 'core/dashboard/dashboardView.html'
                    }
                },
                css:[]
            });
            $urlRouterProvider.otherwise('/dashboard');
        });
}());
