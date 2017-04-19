'use strict';

import './task-item-readonly.less';
import template from './task-item-readonly.html';

class Сontroller {
    constructor(eventFactory, hostInfo) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;

        this.isEditing = false;
        this.tooltipTrigger = this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }
    }

    $onChanges(changes) {
        if (changes.task) {
            this.task = Object.assign({}, this.task);
        }
    }

    beginEdit() {
        if (!this.isEditable) {
            return;
        }

        this.onBeginEdit(this.eventFactory.empty());
    }
}

export const TaskItemReadonlyComponent = {
    __name__: 'taskItemReadonly',
    template,
    controller: Сontroller,
    bindings: {
        task: '<',
        isEditable: '<',
        onBeginEdit: '&'
    }
};