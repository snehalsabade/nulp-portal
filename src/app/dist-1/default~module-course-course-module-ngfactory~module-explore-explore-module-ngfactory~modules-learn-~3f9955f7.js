(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-course-course-module-ngfactory~module-explore-explore-module-ngfactory~modules-learn-~3f9955f7"],{

/***/ "+dbj":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/content-search/components/topic-picker/topic-picker.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TopicPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPickerComponent", function() { return TopicPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _assets_libs_semantic_ui_tree_picker_semantic_ui_tree_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../assets/libs/semantic-ui-tree-picker/semantic-ui-tree-picker */ "r1W+");
/* harmony import */ var _assets_libs_semantic_ui_tree_picker_semantic_ui_tree_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_semantic_ui_tree_picker_semantic_ui_tree_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var LazzyLoadScriptService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! LazzyLoadScriptService */ "pywM");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







$.fn.treePicker = _assets_libs_semantic_ui_tree_picker_semantic_ui_tree_picker__WEBPACK_IMPORTED_MODULE_4__;
var TopicPickerComponent = (function () {
    function TopicPickerComponent(resourceService, lazzyLoadScriptService) {
        this.resourceService = resourceService;
        this.lazzyLoadScriptService = lazzyLoadScriptService;
        this.topicChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resourceService = resourceService;
    }
    TopicPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceDataSubscription = this.resourceService.languageSelected$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var selectedTopics = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](_this.selectedTopics, function (collector, element) {
                if (typeof element === 'string') {
                    collector.unformatted.push(element);
                }
                else if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](element, 'identifier')) {
                    collector.formated.push(element);
                }
                return collector;
            }, { formated: [], unformatted: [] });
            _this.formatSelectedTopics(_this.formTopic.range, selectedTopics.unformatted, selectedTopics.formated);
            _this.selectedTopics = selectedTopics.formated;
            _this.selectedNodes = __assign({}, selectedTopics.formated);
            _this.topicChange.emit(_this.selectedTopics);
        }))
            .subscribe(function (item) {
            _this.initTopicPicker(_this.formatTopics(_this.formTopic.range));
            _this.placeHolder = _this.selectedTopics.length + ' ' + _this.resourceService.frmelmnts.lbl.topics +
                ' ' + _this.resourceService.frmelmnts.lbl.selected;
        });
    };
    TopicPickerComponent.prototype.formatSelectedTopics = function (topics, unformatted, formated) {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["forEach"](topics, function (topic) {
            if (unformatted.includes(topic.name) && !topic.children) {
                formated.push({
                    identifier: topic.identifier,
                    name: topic.name
                });
            }
            if (topic.children) {
                _this.formatSelectedTopics(topic.children, unformatted, formated);
            }
        });
    };
    TopicPickerComponent.prototype.ngAfterViewInit = function () {
        this.initTopicPicker(this.formatTopics(this.formTopic.range));
    };
    TopicPickerComponent.prototype.formatTopics = function (topics, subTopic) {
        var _this = this;
        if (subTopic === void 0) { subTopic = false; }
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](topics, function (topic) { return ({
            id: topic.identifier,
            name: topic.name,
            selectable: subTopic ? 'selectable' : 'notselectable',
            nodes: _this.formatTopics(topic.children, true)
        }); });
    };
    TopicPickerComponent.prototype.initTopicPicker = function (data) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.lazzyLoadScriptService.loadScript('fancytree-all-deps.js'), this.lazzyLoadScriptService.loadScript('semanticModal.js')).subscribe(function () {
            jQuery('.topic-picker-selector').treePicker({
                data: data,
                name: _this.resourceService.frmelmnts.lbl.topics,
                noDataMessage: _this.resourceService.messages.fmsg.m0089,
                submitButtonText: _this.resourceService.frmelmnts.lbl.done,
                cancelButtonText: _this.resourceService.frmelmnts.btn.cancelCapitalize,
                removeAllText: _this.resourceService.frmelmnts.lbl.removeAll,
                chooseAllText: _this.resourceService.frmelmnts.lbl.chooseAll,
                searchText: _this.resourceService.frmelmnts.prmpt.search,
                selectedText: _this.resourceService.frmelmnts.lbl.selected,
                picked: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](_this.selectedNodes, 'identifier'),
                onSubmit: function (selectedNodes) {
                    _this.selectedNodes = selectedNodes;
                    _this.selectedTopics = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](selectedNodes, function (node) { return ({
                        identifier: node.id,
                        name: node.name
                    }); });
                    _this.placeHolder = _this.selectedTopics.length + ' topics selected';
                    _this.topicChange.emit(_this.selectedTopics);
                },
                nodeName: 'topicSelector',
                minSearchQueryLength: 1
            });
            setTimeout(function () {
                return document.getElementById('topicSelector').classList.add(_this.topicPickerClass);
            }, 100);
        });
    };
    TopicPickerComponent.prototype.ngOnDestroy = function () {
        if (this.resourceDataSubscription) {
            this.resourceDataSubscription.unsubscribe();
        }
    };
    return TopicPickerComponent;
}());



/***/ }),

/***/ "8C2c":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/content-search/components/data-driven-filter/data-driven-filter.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DataDrivenFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDrivenFilterComponent", function() { return DataDrivenFilterComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cache-service */ "RiOY");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service__WEBPACK_IMPORTED_MODULE_7__);








var DataDrivenFilterComponent = (function () {
    function DataDrivenFilterComponent(configService, resourceService, router, activatedRoute, cacheService, cdr, frameworkService, formService, userService, permissionService, utilService, browserCacheTtlService, orgDetailsService, layoutService) {
        this.configService = configService;
        this.resourceService = resourceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cacheService = cacheService;
        this.cdr = cdr;
        this.frameworkService = frameworkService;
        this.formService = formService;
        this.userService = userService;
        this.permissionService = permissionService;
        this.utilService = utilService;
        this.browserCacheTtlService = browserCacheTtlService;
        this.orgDetailsService = orgDetailsService;
        this.layoutService = layoutService;
        this.ignoreQuery = [];
        this.showSearchedParam = true;
        this.viewAllMode = false;
        this.dataDrivenFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.showFilters = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.refresh = true;
        this.isShowFilterPlaceholder = true;
        this.router.onSameUrlNavigation = 'reload';
    }
    DataDrivenFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth <= 992) {
            this.isOpen = false;
        }
        this.resourceDataSubscription = this.resourceService.languageSelected$
            .subscribe(function (item) {
            _this.selectedLanguage = item.value;
            if (_this.formFieldProperties && _this.formFieldProperties.length > 0) {
                lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](_this.formFieldProperties, function (data, index) {
                    _this.formFieldProperties[index] = _this.utilService.translateLabel(data, _this.selectedLanguage);
                    _this.formFieldProperties[index].range = _this.utilService.translateValues(data.range, _this.selectedLanguage);
                });
                _this.filtersDetails = lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.formFieldProperties);
                _this.formInputData = _this.utilService.convertSelectedOption(_this.formInputData, _this.formFieldProperties, 'en', _this.selectedLanguage);
            }
        });
        this.frameworkService.initialize(this.frameworkName, this.hashTagId);
        this.getFormatedFilterDetails().subscribe(function (formFieldProperties) {
            _this.formFieldProperties = formFieldProperties;
            _this.filtersDetails = lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](formFieldProperties);
            _this.dataDrivenFilter.emit(formFieldProperties);
            _this.subscribeToQueryParams();
        }, function (err) {
            _this.dataDrivenFilter.emit([]);
        });
        this.setFilterInteractData();
    };
    DataDrivenFilterComponent.prototype.getFormatedFilterDetails = function () {
        var _this = this;
        var formAction = this.formAction ? this.formAction : 'search';
        return this.fetchFrameWorkDetails().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (frameworkDetails) {
            _this.categoryMasterList = frameworkDetails.categoryMasterList;
            _this.framework = frameworkDetails.code;
            return _this.getFormDetails();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (formData) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](formData, { code: 'channel' })) {
                return _this.getOrgSearch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (channelData) {
                    var data = lodash_es__WEBPACK_IMPORTED_MODULE_6__["filter"](channelData, 'hashTagId');
                    return { formData: formData, channelData: data };
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ formData: formData });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (formData) {
            var formFieldProperties = lodash_es__WEBPACK_IMPORTED_MODULE_6__["filter"](formData.formData, function (formFieldCategory) {
                if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](formFieldCategory.allowedRoles)
                    && !_this.permissionService.checkRolesPermissions(formFieldCategory.allowedRoles)) {
                    return false;
                }
                if (formFieldCategory.code === 'channel') {
                    formFieldCategory.range = lodash_es__WEBPACK_IMPORTED_MODULE_6__["map"](formData.channelData, function (value) {
                        return {
                            category: 'channel',
                            identifier: value.hashTagId,
                            name: value.orgName,
                        };
                    });
                }
                else {
                    var loggedInUserRoles = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.userService, 'userProfile.userRoles');
                    var frameworkTerms = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](_this.categoryMasterList, { code: formFieldCategory.code }), 'terms');
                    formFieldCategory.range = lodash_es__WEBPACK_IMPORTED_MODULE_6__["union"](formFieldCategory.range, frameworkTerms);
                    if (_this.filterEnv === 'upforreview' && formFieldCategory.code === 'contentType' &&
                        (lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](loggedInUserRoles, 'CONTENT_REVIEWER') && lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](loggedInUserRoles, 'BOOK_REVIEWER') &&
                            !lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](formFieldCategory.range, { name: 'TextBook' }))) {
                        formFieldCategory.range.push({ name: 'TextBook' });
                    }
                }
                if (_this.selectedLanguage !== 'en') {
                    formFieldCategory = _this.utilService.translateLabel(formFieldCategory, _this.selectedLanguage);
                    formFieldCategory.range = _this.utilService.translateValues(formFieldCategory.range, _this.selectedLanguage);
                }
                return true;
            });
            formFieldProperties = lodash_es__WEBPACK_IMPORTED_MODULE_6__["sortBy"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["uniqBy"](formFieldProperties, 'code'), 'index');
            return formFieldProperties;
        }));
    };
    DataDrivenFilterComponent.prototype.fetchFrameWorkDetails = function () {
        var _this = this;
        return this.frameworkService.frameworkData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (frameworkDetails) {
            if (!frameworkDetails.err) {
                var framework = _this.frameworkName ? _this.frameworkName : 'defaultFramework';
                var frameworkData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](frameworkDetails.frameworkdata, framework);
                if (frameworkData) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (frameworkDetails) {
            if (!frameworkDetails.err) {
                var framework = _this.frameworkName ? _this.frameworkName : 'defaultFramework';
                var frameworkData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](frameworkDetails.frameworkdata, framework);
                if (frameworkData) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ categoryMasterList: frameworkData.categories, framework: frameworkData.code });
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('no result for ' + _this.frameworkName);
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(frameworkDetails.err);
            }
        }));
    };
    DataDrivenFilterComponent.prototype.subscribeToQueryParams = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.formInputData = {};
            lodash_es__WEBPACK_IMPORTED_MODULE_6__["forIn"](params, function (value, key) { return _this.formInputData[key] = typeof value === 'string' && key !== 'key' ? [value] : value; });
            _this.formInputData = _this.utilService.convertSelectedOption(_this.formInputData, _this.formFieldProperties, 'en', _this.selectedLanguage);
            if (params.channel) {
                _this.modelChange(_this.formInputData.channel);
                _this.channelInputLabel = _this.orgDetailsService.getOrg();
            }
            _this.showFilters = true;
            _this.hardRefreshFilter();
        });
    };
    DataDrivenFilterComponent.prototype.getFormDetails = function () {
        var formServiceInputParams = {
            formType: 'content',
            formAction: this.formAction ? this.formAction : 'search',
            contentType: this.filterEnv,
            framework: this.framework
        };
        return this.formService.getFormConfig(formServiceInputParams, this.hashTagId);
    };
    DataDrivenFilterComponent.prototype.resetFilters = function () {
        var _this = this;
        this.formInputData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["pick"](this.formInputData, this.ignoreQuery);
        if (this.viewAllMode) {
            var data = this.cacheService.get('viewAllQuery');
            lodash_es__WEBPACK_IMPORTED_MODULE_6__["forIn"](data, function (value, key) { return _this.formInputData[key] = value; });
        }
        var redirectUrl;
        if (this.activatedRoute.snapshot.params.pageNumber) {
            redirectUrl = this.router.url.split('?')[0].replace(/[^\/]+$/, '1');
        }
        else {
            redirectUrl = this.router.url.split('?')[0];
        }
        redirectUrl = decodeURI(redirectUrl);
        this.router.navigate([redirectUrl], { relativeTo: this.activatedRoute.parent, queryParams: this.formInputData });
        this.hardRefreshFilter();
        this.setFilterInteractData();
    };
    DataDrivenFilterComponent.prototype.applyFilters = function () {
        this.formInputData = this.utilService.convertSelectedOption(this.formInputData, this.formFieldProperties, this.selectedLanguage, 'en');
        var queryParams = {};
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forIn"](this.formInputData, function (eachInputs, key) {
            var formatedValue = typeof eachInputs === 'string' ? eachInputs :
                lodash_es__WEBPACK_IMPORTED_MODULE_6__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["map"](eachInputs, function (value) { return typeof value === 'string' ? value : lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](value, 'identifier'); }));
            if (formatedValue.length) {
                queryParams[key] = formatedValue;
            }
        });
        var redirectUrl;
        if (this.activatedRoute.snapshot.params.pageNumber) {
            redirectUrl = this.router.url.split('?')[0].replace(/[^\/]+$/, '1');
        }
        else {
            redirectUrl = this.router.url.split('?')[0];
        }
        redirectUrl = decodeURI(redirectUrl);
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](queryParams)) {
            queryParams['appliedFilters'] = true;
            this.router.navigate([redirectUrl], { queryParams: queryParams });
        }
        this.setFilterInteractData();
    };
    DataDrivenFilterComponent.prototype.removeFilterSelection = function (field, item) {
        var itemIndex = this.formInputData[field].indexOf(item);
        if (itemIndex !== -1) {
            this.formInputData[field].splice(itemIndex, 1);
            if (field === 'channel') {
                this.channelInputLabel.splice(itemIndex, 1);
            }
            this.formInputData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["pickBy"](this.formInputData);
            this.hardRefreshFilter();
        }
    };
    DataDrivenFilterComponent.prototype.ngOnChanges = function () {
        if (this.formFieldProperties && this.enrichFilters) {
            this.enrichFiltersOnInputChange();
        }
    };
    DataDrivenFilterComponent.prototype.enrichFiltersOnInputChange = function () {
        var _this = this;
        if (this.activatedRoute.snapshot.queryParams.appliedFilters === 'false') {
            this.filtersDetails = this.formFieldProperties;
            return;
        }
        this.filtersDetails = lodash_es__WEBPACK_IMPORTED_MODULE_6__["map"](this.formFieldProperties, function (eachFields) {
            var enrichField = lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](eachFields);
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](['channel', 'contentType', 'topic'], enrichField.code)) {
                enrichField.range = lodash_es__WEBPACK_IMPORTED_MODULE_6__["filter"](_this.enrichFilters[enrichField.code], function (field) {
                    return lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](eachFields.range, { name: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](field, 'name') });
                });
            }
            return enrichField;
        });
        this.hardRefreshFilter();
    };
    DataDrivenFilterComponent.prototype.handleTopicChange = function (topicsSelected) {
        var _this = this;
        this.formInputData['topic'] = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](topicsSelected, function (value, index) {
            _this.formInputData['topic'].push(value.name);
        });
        this.cdr.detectChanges();
    };
    DataDrivenFilterComponent.prototype.modelChange = function (data) {
        var _this = this;
        this.channelInputLabel = [];
        var orgDetails = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.formFieldProperties, ['code', 'channel']);
        if (orgDetails) {
            lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](data, function (value, key) {
                _this.channelInputLabel.push(lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](orgDetails['range'], { identifier: value }));
                _this.orgDetailsService.setOrg(_this.channelInputLabel);
            });
        }
    };
    DataDrivenFilterComponent.prototype.setFilterInteractData = function () {
        var _this = this;
        setTimeout(function () {
            var filters = lodash_es__WEBPACK_IMPORTED_MODULE_6__["pickBy"](_this.formInputData, function (val, key) {
                return (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](val) || typeof val === 'number')
                    && lodash_es__WEBPACK_IMPORTED_MODULE_6__["map"](_this.formFieldProperties, function (field) { return field.code; }).includes(key);
            });
            _this.applyFilterInteractEdata = {
                id: 'apply-filter',
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.activatedRoute, 'snapshot.data.telemetry.pageid'),
                extra: { filters: filters }
            };
            _this.resetFilterInteractEdata = {
                id: 'reset-filter',
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.activatedRoute, 'snapshot.data.telemetry.pageid'),
                extra: { filters: filters }
            };
            _this.filterInteractEdata = {
                id: 'filter-accordion',
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.activatedRoute, 'snapshot.data.telemetry.pageid')
            };
        }, 5);
        var pageSection = this.cacheService.get('pageSection');
        if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](pageSection, 'id')) {
            this.telemetryCdata = [{ 'type': 'page-section', 'id': pageSection.id }];
        }
    };
    DataDrivenFilterComponent.prototype.hardRefreshFilter = function () {
        this.refresh = false;
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
        this.refresh = true;
    };
    DataDrivenFilterComponent.prototype.getOrgSearch = function () {
        return this.orgDetailsService.searchOrg().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return (data.content); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return [];
        }));
    };
    DataDrivenFilterComponent.prototype.ngOnDestroy = function () {
        if (this.resourceDataSubscription) {
            this.resourceDataSubscription.unsubscribe();
        }
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    return DataDrivenFilterComponent;
}());



/***/ }),

/***/ "KmdA":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/no-result/no-result.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_NoResultComponent, View_NoResultComponent_0, View_NoResultComponent_Host_0, NoResultComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NoResultComponent", function() { return RenderType_NoResultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NoResultComponent_0", function() { return View_NoResultComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NoResultComponent_Host_0", function() { return View_NoResultComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultComponentNgFactory", function() { return NoResultComponentNgFactory; });
/* harmony import */ var _no_result_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-result.component.scss.shim.ngstyle */ "ZBba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pipes_cdnprefix_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/cdnprefix.pipe */ "RCwW");
/* harmony import */ var _no_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-result.component */ "hHht");
/* harmony import */ var _services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resource/resource.service */ "vLro");





var styles_NoResultComponent = [_no_result_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NoResultComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NoResultComponent, data: {} });

function View_NoResultComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_cdnprefix_pipe__WEBPACK_IMPORTED_MODULE_2__["CdnprefixPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "ui grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "one wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "ten wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "ui two column centered grid no-result-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "d-flex flex-dc flex-jc-center flex-ai-center column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "img", [], [[8, "alt", 0], [8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "mt-16 no-result-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "div", [["class", "one wide column"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.messageText, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 1, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "assets/images/erroricon.png")), ""); _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = _co.messageText; _ck(_v, 9, 0, currVal_2); }); }
function View_NoResultComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-no-result", [], null, null, null, View_NoResultComponent_0, RenderType_NoResultComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _no_result_component__WEBPACK_IMPORTED_MODULE_3__["NoResultComponent"], [_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NoResultComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-no-result", _no_result_component__WEBPACK_IMPORTED_MODULE_3__["NoResultComponent"], View_NoResultComponent_Host_0, { data: "data" }, {}, ["*"]);



/***/ }),

/***/ "ZBba":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/no-result/no-result.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbm8tcmVzdWx0L25vLXJlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "r1W+":
/*!****************************************************************************!*\
  !*** ./src/assets/libs/semantic-ui-tree-picker/semantic-ui-tree-picker.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var conceptModal;
(function () {
  $.fn.treePicker = function (options) {
    var actionButtons, config, count, initialize, initializeNodeList, initializeNodes, loadNodes, modal, nodeClicked, nodeIsPicked, nodes, pickNode, picked, _recursiveNodeSearch, renderList, _renderTree, showPicked, showSearch, showTree, tabs, unpickNode, updatePickedIds, updatePickedNodes, widget;

    widget = $(this);
    picked = [];
    nodes = [];
    tabs = {};
    options.noDataMessage = options.noDataMessage ? options.noDataMessage : 'no results';
    $("#" + options.nodeName).length == 0 ? '' : $("#" + options.nodeName).remove();
    /*Modal HTML Starts*/

    modalTemplate = "<div class=\"sb-modal transition hidden\"><div id=\"" + options.nodeName + "\" class=\"ui large modal visible active sb-treePicker\"><!--Header--><i class=\"close icon js-close-modal\"></i><div class=\"sb-modal-header\">" + options.name + "</div> <!--/Header--><!--Content--><div class=\"sb-modal-content max-height p-0\"><div class=\"sb-treePicker-body\"><!--Selection Section--><div class=\"sb-treePicker-selectionSection\"><!--Search Box--><div class=\"sb-search-box no-btn\"><div class=\"input-div relative\"><i class=\"search icon sb-search-icon\"></i><input class=\"sb-search-input\" type=\"text\" placeholder=\"" + options.searchText + "\" /><i class=\"close icon js-clear d-none\"></i></div></div><!--/Search Box--><div class=\"tree-tab\"><div></div></div><div class=\"search-tab\"></div></div><!--/Selection Section--><!--Selected Section--><div class=\"sb-treePicker-selectedSection\"><div class=\"d-flex flex-ai-center\">" + options.selectedText + ' ' + options.name + "<span class=\"sb-treePicker-selected-count ml-5\"></span><button class=\"unpick-picked ml-auto sb-btn sb-btn-outline-error sb-btn-xs sb-left-icon-btn\"><i class=\"trash icon\"></i>" + options.removeAllText + "</button></div><div class=\"picked-tab py-15\"></div></div><!--/Selected Section--></div></div><!--/Content--><!--Actions--><div class=\"sb-modal-actions\"><a class=\"pick-search d-none\"><i class=\"checkmark icon\"></i>" + options.chooseAllText + "</a><a class=\"unpick-search d-none\"><i class=\"remove icon\"></i>" + options.removeAllText + "</a><button class=\"sb-btn sb-btn-normal sb-btn-primary accept\">" + options.submitButtonText + "</button><button class=\"sb-btn sb-btn-normal sb-btn-outline-primary close js-close-modal\">" + options.cancelButtonText + "</button></div><!--/Actions--></div></div>";
    /*Modal HTML Ends*/

    modal = $(modalTemplate).modal({
      duration: 200,
      allowMultiple: true
    });
    conceptModal = modal;
    count = $('.sb-treePicker-selected-count', modal);
    tabs = {
      tree: $('.tree-tab', modal),
      search: $('.search-tab', modal),
      picked: $('.picked-tab', modal)
    };
    actionButtons = {
      pickSearch: $('.sb-treePicker .pick-search', modal),
      unpickSearch: $('.sb-treePicker .unpick-search', modal),
      unpickPicked: $('.sb-treePicker .unpick-picked', modal)
    };
    config = {
      childrenKey: 'nodes',
      singlePick: false,
      minSearchQueryLength: 3,
      hidden: function hidden(node) {
        return false;
      },
      disabled: function disabled(node) {
        return false;
      },
      displayFormat: function displayFormat(picked) {
        return options.name + " (Выбрано " + picked.length + ")";
      }
    };
    $.extend(config, options);

    initialize = function initialize() {
      if (config.data) {
        nodes = config.data;
      }

      if (config.picked) {
        config.picked = config.picked;
      } else if (widget.attr("data-picked-ids")) {
        widget.attr("data-picked-ids").split(",");
      }

      if (config.picked) {
        if (nodes.length) {
          updatePickedNodes();
          widget.html(config.displayFormat(picked));
          showPicked();
        } else {
          widget.html(config.displayFormat(config.picked));
        }
      } else {
        widget.html(config.displayFormat([]));
      }

      widget.unbind("click");
      widget.on('click', function (e) {
        modal.modal('show');

        if (!nodes.length) {
          if (config.url) {
            return loadNodes(config.url, {}, function (nodes) {
              $('.ui.active.dimmer', modal).removeClass('active');
              return initializeNodes(nodes);
            });
          } else {
            setTimeout(function () {
              $('.ui.active.dimmer', modal).removeClass('active');
              $(".ui.tree-picker.normal.modal .field").addClass("disabled");
              $(".ui.tree-picker.modal .ui.warning.message").removeClass("hidden");
            }, config.apiResponseTimeout);
          }
        } else {
          $('.ui.active.dimmer', modal).removeClass('active');
          return initializeNodes(nodes);
        }
      });
      /* On click of Done button*/

      $('.sb-modal-actions .accept', modal).on('click', function (e) {
        modal.modal('hide');

        if (config.onSubmit) {
          config.onSubmit(picked);
        }

        return widget.html(config.displayFormat(picked));
      });
      /* On click of Close button*/

      $('.sb-treePicker .js-close-modal', modal).on('click', function (e) {
        modal.modal('hide');

        if (config.onClose) {
          config.onClose();
        }
      });
      /* Clear Search field */

      $('.sb-treePicker .js-clear').on('click', function (e) {
        clearSearch();
      });
      actionButtons.pickSearch.on('click', function (e) {
        return $('.search-tab .node:not(.picked) .name').trigger('click');
      });
      actionButtons.unpickSearch.on('click', function (e) {
        return $('.search-tab .node.picked .name').trigger('click');
      });
      actionButtons.unpickPicked.on('click', function (e) {
        return $('.picked-tab .node.picked .name').trigger('click');
      });
      return $('.sb-search-input', modal).on('keyup', function (e) {
        return showSearch($(this).val());
      });
    };

    loadNodes = function loadNodes(url, params, success) {
      if (params == null) {
        params = {};
      }

      return $.get(url, params, function (response) {
        if (response.constructor === String) {
          nodes = $.parseJSON(response);
        } else {
          nodes = response;
        }

        return success(nodes);
      });
    };

    initializeNodes = function initializeNodes(nodes) {
      var tree;
      updatePickedNodes();
      tree = _renderTree(nodes, {});
      tabs.tree.html(tree);
      return initializeNodeList(tree);
    };

    updatePickedNodes = function updatePickedNodes() {
      var i, id, len, ref, results1, searchResult;

      if (config.picked) {
        picked = [];
        ref = config.picked;
        results1 = [];

        for (i = 0, len = ref.length; i < len; i++) {
          id = ref[i];
          searchResult = _recursiveNodeSearch(nodes, function (node) {
            return "" + node.id === "" + id;
          });

          if (searchResult.length) {
            results1.push(picked.push(searchResult[0]));
          } else {
            results1.push(void 0);
          }
        }

        return results1;
      }
    };

    showTree = function showTree() {
      tabs.tree.show();
      return modal.attr('data-mode', 'tree');
    };

    showSearch = function showSearch(query) {
      var foundNodes, list;
      var formatedNodes = [];

      if (query !== null && query.length >= config.minSearchQueryLength) {
        foundNodes = _recursiveNodeSearch(nodes, function (node) {
          return node.name && node.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
        foundNodes.forEach(function (value) {
          if (value.selectable === 'selectable') {
            formatedNodes.push(value);
          }
        });
        foundNodes = formatedNodes;
        list = renderList(foundNodes, {});
        tabs.search.show().html(list);
        tabs.tree.hide();
        modal.attr('data-mode', 'search');
        $('.sb-treePicker .js-clear').removeClass('d-none');
        initializeNodeList(list);
        return $('.name', list).each(function () {
          var name, regex;
          name = $(this).text();
          regex = RegExp('(' + query + ')', 'gi');
          name = name.replace(regex, "<strong class='sb-treePicker-searchedQuery'>$1</strong>");
          return $(this).html(name);
        });
      } else {
        $('.sb-treePicker .js-clear').addClass('d-none');
        tabs.search.hide();
        return showTree();
      }
    };

    clearSearch = function clearSearch() {
      $('.sb-treePicker .sb-search-input').val('');
      $('.sb-treePicker .js-clear').addClass('d-none');
      tabs.search.hide();
      return showTree();
    };

    showPicked = function showPicked() {
      var list;
      list = renderList(picked, {});
      tabs.picked.show().html(list);
      modal.attr('data-mode', 'picked');
      return initializeNodeListForSelected(list);
    };

    _renderTree = function renderTree(nodes, css) {
      var i, len, node, nodeElement, tree;

      if (css == null) {
        css = {};
      }

      tree = $('<div class="ui tree-picker tree"></div>').css(css);

      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];

        if (config.hidden(node)) {
          continue;
        }

        nodeElementHtml = "<div class=\"node\" data-id=\"" + node.id + "\" data-name=\"" + node.name + "\"><div class=\"head " + node.selectable + "\"><i class=\"add icon\"></i><i class=\"minus icon\"></i><i class=\"square outline icon\"></i><i class=\"checkmark icon\"></i><span class=\"name\">" + node.name + "</span></div><div class=\"content\"></div></div>";
        nodeElement = $(nodeElementHtml).appendTo(tree);

        if (config.disabled(node)) {
          nodeElement.addClass('disabled');
        }

        if (node[config.childrenKey] && node[config.childrenKey].length) {
          $('.content', nodeElement).append(_renderTree(node[config.childrenKey]));
        } else {
          nodeElement.addClass("childless");
        }
      }

      return tree;
    };

    renderList = function renderList(nodes, css) {
      var i, len, list, node, nodeElement;

      if (css == null) {
        css = {};
      }

      list = $('<div class="ui tree-picker list"></div>').css(css);

      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];

        if (config.hidden(node)) {
          continue;
        }

        nodeElementhtml = "<div class=\"node childless\" data-id=\"" + node.id + "\" data-name=\"" + node.name + "\"><div class=\"head " + node.selectable + "\"><i class=\"square outline icon\"></i><i class=\"checkmark icon\"></i><a class=\"name\">" + node.name + "</a></div> <div class=\"content\"></div></div>";
        nodeElement = $(nodeElementhtml).appendTo(list);

        if (config.disabled(node)) {
          nodeElement.addClass('disabled');
        }
      }

      ;
      /*No search result found*/

      /*if (nodes.length === 0) {
        emptyMessage = '<div class="empty">No results were found.</div>';
        nodeElement = $(emptyMessage).appendTo(list);
      }*/

      return list;
    };

    initializeNodeList = function initializeNodeList(tree) {
      return $('.node', tree).each(function () {
        var content, head, node;
        node = $(this);
        clickHead = $('>.head.selectable', node);
        head = $('>.head', node);
        content = $('>.content', node);
        $('>.name', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        $('>.icon', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });

        if (nodeIsPicked(node)) {
          node.addClass('picked');
        }

        if (!node.hasClass('childless')) {
          if (!head.hasClass('selectable')) {
            $(head).on('click', function (e) {
              node.toggleClass('opened');
              return content.slideToggle();
            });
          } else {
            $('>.icon', head).on('click', function (e) {
              node.toggleClass('opened');
              return content.slideToggle();
            });
          }
        }

        return updatePickedIds();
      });
    };

    initializeNodeListForSelected = function initializeNodeListForSelected(tree) {
      return $('.node', tree).each(function () {
        var content, head, node;
        node = $(this);
        clickHead = $('>.head', node);
        head = $('>.head', node);
        content = $('>.content', node);
        $('>.name', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        $('>.icon', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });

        if (nodeIsPicked(node)) {
          node.addClass('picked');
        }

        if (!node.hasClass('childless')) {
          $('>.icon', head).on('click', function (e) {
            node.toggleClass('opened');
            return content.slideToggle();
          });
        }

        return updatePickedIds();
      });
    };

    nodeClicked = function nodeClicked(node) {
      if (!node.hasClass('disabled')) {
        if (config.singlePick) {
          $('.node.picked', modal).removeClass('picked');
          picked = [];
        }

        node.toggleClass('picked');

        if (node.hasClass('picked')) {
          return pickNode(node);
        } else {
          return unpickNode(node);
        }
      }
    };

    pickNode = function pickNode(node) {
      var id;
      config.picked = null;
      id = node.attr('data-id');
      picked.push({
        id: id,
        name: node.attr('data-name')
      });
      updatePickedIds();
      showPicked();
      $(".node[data-id=" + id + "] .square.outline", modal).addClass('d-none');
      return $(".node[data-id=" + id + "]", modal).addClass('picked');
    };

    unpickNode = function unpickNode(node) {
      var id;
      config.picked = null;
      id = node.attr('data-id');
      picked = picked.filter(function (n) {
        return "" + n.id !== "" + id;
      });
      updatePickedIds();
      $(".node[data-id=" + id + "] .square.outline", modal).removeClass('d-none');
      return $(".node[data-id=" + id + "]", modal).removeClass('picked');
    };

    nodeIsPicked = function nodeIsPicked(node) {
      return picked.filter(function (n) {
        return "" + n.id === node.attr('data-id');
      }).length;
    };

    updatePickedIds = function updatePickedIds() {
      widget.attr('data-picked-ids', picked.map(function (n) {
        return n.id;
      }));

      if (picked.length) {
        count.closest('.item').addClass('highlighted');
        return count.html("(" + picked.length + ")");
      } else {
        count.closest('.item').removeClass('highlighted');
        return count.html("");
      }
    };

    _recursiveNodeSearch = function recursiveNodeSearch(nodes, comparator) {
      var i, len, node, results;
      results = [];

      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];

        if (comparator(node)) {
          results.push({
            id: node.id,
            name: node.name,
            selectable: node.selectable
          });
        }

        if (node[config.childrenKey] && node[config.childrenKey].length) {
          results = results.concat(_recursiveNodeSearch(node[config.childrenKey], comparator));
        }
      }

      return results;
    };

    return initialize();
  };
}).call(this);

/***/ })

}]);
//# sourceMappingURL=default~module-course-course-module-ngfactory~module-explore-explore-module-ngfactory~modules-learn-~3f9955f7.js.map