'use strict';

import template from './quick-task-add.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
    onSubmit() {
        console.log('quick-task-add: onSubmit');
    }
}

export const QuickTaskAddComponent = {
    __name__: 'quickTaskAdd',
    template,
    controller: Сontroller
};