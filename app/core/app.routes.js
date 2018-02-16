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
                        data: {
                            title: 'title',
                            breadcrumb: 'breadcrumb'
                        },
                        views: {
                            'header': {
                                templateUrl: 'core/layouts/headerView.html',
                                controller: 'HeaderController',
                            },
                            'aside': {
                                templateUrl: 'core/layouts/asideView.html',
                                controller: 'AsideController',
                            },
                            'breadcrumbs': {
                                templateUrl: 'core/layouts/breadcrumbsView.html',
                                controller: 'BreadcrumbsController',
                            },
                            'content': {
                                template: 'Choose option from menu...'
                            },
                            'footer': {
                                templateUrl: 'core/layouts/footerView.html',
                                controller: 'FooterController',
                            }
                        }
                    });
            $stateProvider.state('login',{
                url:'/login',
                views: {
                    'auth': {
                        templateUrl: 'core/auth/loginView.html',
                        controller:'LoginController',
                    }
                },
                css:[],

            });
            $stateProvider.state('register',{
                url:'/register',
                views: {
                    'auth': {
                        templateUrl: 'core/auth/registerView.html',
                        controller:'RegisterController',
                    }
                },
                css:[]
            });
            $stateProvider.state('root.dashboard',{
                url:'dashboard',
                views: {
                    'content@': {
                        templateUrl: 'core/dashboard/dashboardView.html',
                        controller:'DashboardController',
                    }
                },
                css:['assets/css/dashboard.css']
            });
            $urlRouterProvider.otherwise('/login');
        });
}());
