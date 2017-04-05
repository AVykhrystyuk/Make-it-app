'use strict';

export default class Router {
    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
    }

    registerRoutes() {
        this.$stateProvider
            .state({
                name: 'today',
                url: '/today',
                component: 'today',
                resolve: {
                    todaysData: todayService => { 'ngInject'; return todayService.getTodaysData(); }
                }
            }).state({
                name: 'tommorow',
                url: '/tommorow',
                component: 'tommorow',
                resolve: {
                    //todoData: TodoService => TodoService.getTodos()
                }
            }).state({
                name: 'next7Days',
                url: '/next-7-days',
                component: 'next7Days',
                resolve: {
                    //todoData: TodoService => TodoService.getTodos()
                }
            }).state({
                name: 'later',
                url: '/later',
                component: 'later',
                resolve: {
                    laterData: laterService => { 'ngInject'; laterService.getLaterData(); }
                }
            });

        this.$urlRouterProvider.otherwise('/today');
    }
}