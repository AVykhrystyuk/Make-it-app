'use strict';

export class TodayService {
    static get __name__() {
        return 'todayService';
    }

    constructor($timeout, $q) {
        'ngInject';
        this.$timeout = $timeout;
        this.$q = $q;

        this.todaysData = this._createNewTodaysData();
    }

    _createNewTodaysData() {
        return {
            overdueTasks: this._getOverdueTasks(),
            todayTasks: this._getTodaysTasks(),
            doneTasks: this._getDoneTasks()
        }
    }

    getTodaysData() {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            let todaysData = this._createNewTodaysData();
            deferred.resolve(todaysData);
        }, 1000);

        return deferred.promise;
    }

    updateOverdueTask(task) {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            let overdueTask = this.todaysData.overdueTasks.find(t => t.id === task.id);
            if (overdueTask) {
                Object.assign(overdueTask, task);
            }

            deferred.resolve(overdueTask);
        }, 1000);

        return deferred.promise;
    }

    updateTodayTask(task) {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            let todayTask = this.todaysData.todayTasks.find(t => t.id === task.id);
            if (todayTask) {
                Object.assign(todayTask, task);
            }

            deferred.resolve(todayTask);
        }, 1000);

        return deferred.promise;
    }

    updateDoneTask(task) {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            let doneTask = this.todaysData.doneTasks.find(t => t.id === task.id);
            if (doneTask) {
                Object.assign(doneTask, task);
            }

            deferred.resolve(doneTask);
        }, 1000);

        return deferred.promise;
    }

    createNewTask(task) {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            let todayTasks = this.todaysData.todayTasks;
            let newId = 1;
            if (todayTasks.length > 0) {
                let lastTodayTask = todayTasks[todayTasks.length - 1];
                newId = lastTodayTask.id + 1;
            }
            task.id = newId;
            this.todaysData.todayTasks.push(task);

            deferred.resolve(task);
        }, 1000);

        return deferred.promise;
    }

    _getOverdueTasks() {
        let overdueTasks = [{
            id: 1,
            date: this._offsetDay(new Date(), -2),
            text: 'Overdue Task 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }, {
            id: 2,
            date: this._offsetDay(new Date(), -1),
            text: 'Overdue Task 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }];

        return overdueTasks;
    }

    _getTodaysTasks() {
        let tasks = [{
            id: 10,
            date: new Date(),
            text: 'Task 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }, {
            id: 11,
            date: new Date(),
            text: 'Task 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }];

        return tasks;
    }

    _getDoneTasks() {
        let tasks = [{
            id: 100,
            date: new Date(),
            text: 'Done Task 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }, {
            id: 101,
            date: new Date(),
            text: 'Done Task 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }];

        return tasks;
    }

    _offsetDay(date, offset) {
        let resultedDate = new Date(date);
        resultedDate.setDate(date.getDate() + offset);
        return resultedDate;
    }
}