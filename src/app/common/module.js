'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    GlyphiconDirectiveFactory
} from './mi-glyphicon';
import {
    SearchInlineComponent
} from './search-inline';
import {
    QuickTaskAddComponent
} from './quick-task-add';

import {
    ScreenService,
    ScreenDigestedService,
    EventFactory
} from './services';

let ngModule = angular.module('makeItApp.common', []);
new Registrater(ngModule)
    .registerComponents([QuickTaskAddComponent, SearchInlineComponent])
    .registerDirectives([GlyphiconDirectiveFactory])
    .registerServices([ScreenService, ScreenDigestedService, EventFactory]);

export default ngModule.name;