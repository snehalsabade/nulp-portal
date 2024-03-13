(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-course-course-module-ngfactory~module-explore-explore-module-ngfactory~modules-learn-~a6936bc6"],{

/***/ "7QnU":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/content-search/services/content-search/content-search.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ContentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchService", function() { return ContentSearchService; });
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/framework/framework.service */ "YAhW");
/* harmony import */ var _core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/channel/channel.service */ "Rr+m");







var requiredCategories = { categories: 'board,gradeLevel,medium,class,subject' };
var ContentSearchService = (function () {
    function ContentSearchService(frameworkService, channelService) {
        this.frameworkService = frameworkService;
        this.channelService = channelService;
        this._frameworkId = '';
        this._filters = {
            board: [],
            medium: [],
            gradeLevel: [],
            subject: [],
            publisher: []
        };
        this._searchResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    Object.defineProperty(ContentSearchService.prototype, "frameworkId", {
        get: function () {
            return this._frameworkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentSearchService.prototype, "filters", {
        get: function () {
            return lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this._filters);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentSearchService.prototype, "searchResults$", {
        get: function () {
            return this._searchResults$.asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(function (data) { return data === undefined || data === null; }));
        },
        enumerable: false,
        configurable: true
    });
    ContentSearchService.prototype.initialize = function (channelId, custodianOrg, defaultBoard) {
        if (custodianOrg === void 0) { custodianOrg = false; }
        this.channelId = channelId;
        this.custodianOrg = custodianOrg;
        this.defaultBoard = defaultBoard;
        this._searchResults$.complete();
        this._searchResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        return this.fetchChannelData();
    };
    ContentSearchService.prototype.fetchChannelData = function () {
        var _this = this;
        return this.channelService.getFrameWork(this.channelId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (channelDetails) {
            if (_this.custodianOrg) {
                _this._filters.board = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.frameworks') || [{
                        name: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.defaultFramework'),
                        identifier: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.defaultFramework')
                    }];
                var selectedBoard = _this._filters.board.find(function (board) { return board.name === _this.defaultBoard; }) || _this._filters.board[0];
                _this._frameworkId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](selectedBoard, 'identifier');
            }
            else {
                _this._frameworkId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.defaultFramework');
            }
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.publisher')) {
                _this._filters.publisher = JSON.parse(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](channelDetails, 'result.channel.publisher'));
            }
            return _this.frameworkService.getSelectedFrameworkCategories(_this._frameworkId, requiredCategories);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (frameworkDetails) {
            var frameworkCategories = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](frameworkDetails, 'result.framework.categories');
            frameworkCategories.forEach(function (category) {
                if (['medium', 'gradeLevel', 'subject'].includes(category.code)) {
                    _this._filters[category.code] = category.terms || [];
                }
                else if (!_this.custodianOrg && category.code === 'board') {
                    _this._filters[category.code] = category.terms || [];
                }
            });
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    };
    ContentSearchService.prototype.fetchFilter = function (boardName) {
        var _this = this;
        if (!this.custodianOrg || !boardName) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.filters);
        }
        var selectedBoard = this._filters.board.find(function (board) { return board.name === boardName; })
            || this._filters.board.find(function (board) { return board.name === _this.defaultBoard; }) || this._filters.board[0];
        this._frameworkId = this._frameworkId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](selectedBoard, 'identifier');
        return this.frameworkService.getSelectedFrameworkCategories(this._frameworkId, requiredCategories).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (frameworkDetails) {
            var frameworkCategories = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](frameworkDetails, 'result.framework.categories');
            frameworkCategories.forEach(function (category) {
                if (['medium', 'gradeLevel', 'subject'].includes(category.code)) {
                    _this._filters[category.code] = category.terms || [];
                }
                else if (category.code === 'board' && !_this.custodianOrg) {
                    _this._filters[category.code] = category.terms || [];
                }
            });
            return _this.filters;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    };
    Object.defineProperty(ContentSearchService.prototype, "getCategoriesMapping", {
        get: function () {
            return {
                subject: 'se_subjects',
                medium: 'se_mediums',
                gradeLevel: 'se_gradeLevels',
                board: 'se_boards'
            };
        },
        enumerable: false,
        configurable: true
    });
    ContentSearchService.prototype.mapCategories = function (_a) {
        var _this = this;
        var _b = _a.filters, filters = _b === void 0 ? {} : _b;
        return lodash_es__WEBPACK_IMPORTED_MODULE_3__["reduce"](filters, function (acc, value, key) {
            var mappedValue = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.getCategoriesMapping, [key]);
            if (mappedValue && key !== 'subject') {
                acc[mappedValue] = value;
                delete acc[key];
            }
            return acc;
        }, filters);
    };
    ContentSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function ContentSearchService_Factory() { return new ContentSearchService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_5__["FrameworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"])); }, token: ContentSearchService, providedIn: "root" });
    return ContentSearchService;
}());



/***/ }),

/***/ "K3Ss":
/*!************************************************************!*\
  !*** ./src/app/modules/content-search/components/index.ts ***!
  \************************************************************/
/*! exports provided: NoResultComponent, SearchFilterComponent, PageSectionComponent, DataDrivenFilterComponent, TopicPickerComponent, ViewAllComponent, GlobalSearchFilterComponent, GlobalSearchSelectedFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_result_no_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-result/no-result.component */ "HMKN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoResultComponent", function() { return _no_result_no_result_component__WEBPACK_IMPORTED_MODULE_0__["NoResultComponent"]; });

/* harmony import */ var _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter/search-filter.component */ "U1bI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_1__["SearchFilterComponent"]; });

/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-section/page-section.component */ "4Dwl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSectionComponent", function() { return _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_2__["PageSectionComponent"]; });

/* harmony import */ var _data_driven_filter_data_driven_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-driven-filter/data-driven-filter.component */ "8C2c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataDrivenFilterComponent", function() { return _data_driven_filter_data_driven_filter_component__WEBPACK_IMPORTED_MODULE_3__["DataDrivenFilterComponent"]; });

/* harmony import */ var _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-picker/topic-picker.component */ "+dbj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicPickerComponent", function() { return _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_4__["TopicPickerComponent"]; });

/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-all/view-all.component */ "sQFC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllComponent"]; });

/* harmony import */ var _global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-search-filter/global-search-filter.component */ "XQ1L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchFilterComponent", function() { return _global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_6__["GlobalSearchFilterComponent"]; });

/* harmony import */ var _global_search_selected_filter_global_search_selected_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-search-selected-filter/global-search-selected-filter.component */ "pfh8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchSelectedFilterComponent", function() { return _global_search_selected_filter_global_search_selected_filter_component__WEBPACK_IMPORTED_MODULE_7__["GlobalSearchSelectedFilterComponent"]; });











/***/ }),

/***/ "QvZf":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/content-search/components/view-all/view-all.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_ViewAllComponent, View_ViewAllComponent_0, View_ViewAllComponent_Host_0, ViewAllComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ViewAllComponent", function() { return RenderType_ViewAllComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewAllComponent_0", function() { return View_ViewAllComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewAllComponent_Host_0", function() { return View_ViewAllComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponentNgFactory", function() { return ViewAllComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-search-filter/global-search-filter.component.ngfactory */ "8636");
/* harmony import */ var _global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-search-filter/global-search-filter.component */ "XQ1L");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/card/card.component.ngfactory */ "baDH");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ "Qp9N");
/* harmony import */ var _shared_directives_content_direction_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/content-direction.directive */ "kSm4");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_feature_components_batch_info_batch_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared-feature/components/batch-info/batch-info.component.ngfactory */ "j1Cl");
/* harmony import */ var _shared_feature_components_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared-feature/components/batch-info/batch-info.component */ "4CUb");
/* harmony import */ var _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../core/services/player/player.service */ "ikcW");
/* harmony import */ var _core_services_learner_learner_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../core/services/learner/learner.service */ "lysQ");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../core/services/course/course.service */ "hK/R");
/* harmony import */ var _core_services_generalisedLable_generaliseLable_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../core/services/generalisedLable/generaliseLable.service */ "2EPz");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _view_all_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./view-all.component */ "sQFC");
/* harmony import */ var _core_services_search_search_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../core/services/search/search.service */ "9UN5");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../core/services/form/form.service */ "9dCP");
/* harmony import */ var _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/services/pagination/pagination.service */ "X/Ol");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../core/services/org-details/org-details.service */ "wUTf");
/* harmony import */ var _shared_services_browser_cache_ttl_browser_cache_ttl_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/services/browser-cache-ttl/browser-cache-ttl.service */ "DlBX");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");









































var styles_ViewAllComponent = [];
var RenderType_ViewAllComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ViewAllComponent, data: {} });

function View_ViewAllComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-global-search-filter", [], null, [[null, "filterChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("filterChange" === en)) {
        var pd_0 = (_co.getFilters($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_GlobalSearchFilterComponent_0"], _global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_GlobalSearchFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_2__["GlobalSearchFilterComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_8__["ConnectionService"]], { facets: [0, "facets"], queryParamsToOmit: [1, "queryParamsToOmit"], layoutConfiguration: [2, "layoutConfiguration"], isOpen: [3, "isOpen"] }, { filterChange: "filterChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.facets; var currVal_1 = _co.facetsList; var currVal_2 = _co.layoutConfiguration; var currVal_3 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_ViewAllComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "sb-pageSection-count sb-label sb-label-xs sb-label-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalCount; _ck(_v, 1, 0, currVal_0); }); }
function View_ViewAllComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "sb-pageSection-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "sb-pageSection-title m-0 mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-error ml-auto sb-cls-btn"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.handleCloseButton() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "close icon"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.totalCount; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.closeIntractEdata; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.get(_co.resourceService, _co.sectionName) || _co.sectionName); _ck(_v, 2, 0, currVal_0); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.close))); _ck(_v, 7, 0, currVal_3); }); }
function View_ViewAllComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "app-card", [["appContentDirection", ""], ["appTelemetryInteract", ""]], null, [[null, "clickEvent"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("clickEvent" === en)) {
        var pd_1 = (_co.playContent($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { id: 0, type: 1, ver: 2 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { data: [0, "data"] }, { clickEvent: "clickEvent" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 4210688, null, 0, _shared_directives_content_direction_directive__WEBPACK_IMPORTED_MODULE_14__["ContentDirectionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit.metaData.identifier, (_v.parent.context.$implicit.metaData.contentType || "Content"), (_v.parent.context.$implicit.metaData.pkgVersion ? _v.parent.context.$implicit.metaData.pkgVersion.toString() : "1.0")); var currVal_1 = _co.cardIntractEdata; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit; _ck(_v, 5, 0, currVal_3); }, null); }
function View_ViewAllComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "sb-library-card", [["appTelemetryInteract", ""]], null, [[null, "cardClick"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("cardClick" === en)) {
        var pd_1 = (_co.playContent($event, _v.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_LibraryCardComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_LibraryCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { id: 0, type: 1, ver: 2 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 4308992, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_17__["LibraryCardComponent"], [], { content: [0, "content"], cardImg: [1, "cardImg"], layoutConfig: [2, "layoutConfig"], indexToDisplay: [3, "indexToDisplay"] }, { cardClick: "cardClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit.metaData.identifier, (_v.parent.context.$implicit.metaData.contentType || "Content"), (_v.parent.context.$implicit.metaData.pkgVersion ? _v.parent.context.$implicit.metaData.pkgVersion.toString() : "1.0")); var currVal_1 = _co.cardIntractEdata; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit; var currVal_3 = (((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.image) || "assets/images/book.png"); var currVal_4 = _co.layoutConfiguration; var currVal_5 = _v.parent.context.index; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_ViewAllComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.layoutConfiguration; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.layoutConfiguration; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ViewAllComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "twelve wide column mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "sb-grid dynamic-section-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.searchList; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ViewAllComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_19__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ViewAllComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_22__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ViewAllComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["aria-current", "page"], ["class", "sb-item"], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { active: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item"; var currVal_3 = _ck(_v, 2, 0, (_co.pager.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit; _ck(_v, 3, 0, currVal_4); }); }
function View_ViewAllComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "sb-pagination-container flex-jc-flex-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 18, "div", [["class", "sb-pagination my-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00AB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.pager.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](8, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["<"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "a", [["class", "sb-item"], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.pager.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](14, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [">"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "a", [["class", "sb-item"], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_co.pager.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](18, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00BB"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item "; var currVal_3 = _ck(_v, 4, 0, (_co.pager.currentPage === 1)); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_6 = "sb-item "; var currVal_7 = _ck(_v, 8, 0, (_co.pager.currentPage === 1)); _ck(_v, 7, 0, currVal_6, currVal_7); var currVal_8 = _co.pager.pages; _ck(_v, 11, 0, currVal_8); var currVal_11 = "sb-item"; var currVal_12 = _ck(_v, 14, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 13, 0, currVal_11, currVal_12); var currVal_15 = "sb-item"; var currVal_16 = _ck(_v, 18, 0, (_co.pager.currentPage === _co.pager.totalPages)); _ck(_v, 17, 0, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); _ck(_v, 12, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); _ck(_v, 16, 0, currVal_13, currVal_14); }); }
function View_ViewAllComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column right aligned py-0 mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.pager && _co.pager.pages.length); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ViewAllComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-batch-info", [], null, [[null, "modelClose"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelClose" === en)) {
        var pd_0 = ((_co.showBatchInfo = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_feature_components_batch_info_batch_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_BatchInfoComponent_0"], _shared_feature_components_batch_info_batch_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_BatchInfoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _shared_feature_components_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_24__["BatchInfoComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_25__["PlayerService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"], _core_services_learner_learner_service__WEBPACK_IMPORTED_MODULE_26__["LearnerService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"], _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_28__["CoursesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_generalisedLable_generaliseLable_service__WEBPACK_IMPORTED_MODULE_29__["GeneraliseLabelService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], { enrolledBatchInfo: [0, "enrolledBatchInfo"] }, { modelClose: "modelClose" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedCourseBatches; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ViewAllComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_31__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_22__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 26, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 24, "div", [["class", "sb-g"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_32__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "div", [["style", "display: none;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 17, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 15, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_32__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 12, "div", [["class", "relative9"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_32__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "div", [["class", "sb-pageSection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewAllComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.layoutConfiguration; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (_co.layoutConfiguration ? "sbt-fluid-content-bg" : ""); _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.telemetryImpression; _ck(_v, 5, 0, currVal_3); var currVal_4 = "sb-g"; var currVal_5 = (_co.layoutConfiguration ? "sb-g sbt-container sbt-page-content" : "sb-g"); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_6 = _co.FIRST_PANEL_LAYOUT; _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.initFilters; _ck(_v, 10, 0, currVal_7); var currVal_8 = _co.SECOND_PANEL_LAYOUT; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.telemetryImpression; _ck(_v, 14, 0, currVal_9); var currVal_10 = (_co.layoutConfiguration ? "sbt-page-content-area" : "ui container"); _ck(_v, 15, 0, currVal_10); var currVal_11 = _co.telemetryImpression; _ck(_v, 17, 0, currVal_11); var currVal_12 = !_co.showLoader; _ck(_v, 20, 0, currVal_12); var currVal_13 = (!_co.showLoader && !_co.noResult); _ck(_v, 22, 0, currVal_13); var currVal_14 = (_co.noResult && !_co.showLoader); _ck(_v, 24, 0, currVal_14); var currVal_15 = _co.showLoader; _ck(_v, 26, 0, currVal_15); var currVal_16 = (((_co.searchList && (_co.totalCount > _co.configService.appConfig.SEARCH.PAGE_LIMIT)) && !_co.showLoader) && !_co.noResult); _ck(_v, 28, 0, currVal_16); var currVal_17 = _co.showBatchInfo; _ck(_v, 30, 0, currVal_17); }, null); }
function View_ViewAllComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-view-all", [], null, null, null, View_ViewAllComponent_0, RenderType_ViewAllComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4440064, null, 0, _view_all_component__WEBPACK_IMPORTED_MODULE_33__["ViewAllComponent"], [_core_services_search_search_service__WEBPACK_IMPORTED_MODULE_34__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_25__["PlayerService"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_35__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_36__["PaginationService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_37__["PublicPlayerService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"], _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_28__["CoursesService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_38__["OrgDetailsService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_services_browser_cache_ttl_browser_cache_ttl_service__WEBPACK_IMPORTED_MODULE_39__["BrowserCacheTtlService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_40__["NavigationHelperService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_22__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ViewAllComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-view-all", _view_all_component__WEBPACK_IMPORTED_MODULE_33__["ViewAllComponent"], View_ViewAllComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "U1bI":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/content-search/components/search-filter/search-filter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SearchFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return SearchFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "ZVe/");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cache-service */ "RiOY");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service__WEBPACK_IMPORTED_MODULE_9__);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};










var SearchFilterComponent = (function () {
    function SearchFilterComponent(resourceService, router, contentSearchService, activatedRoute, cdr, layoutService, formService, cacheService) {
        var _this = this;
        this.resourceService = resourceService;
        this.router = router;
        this.contentSearchService = contentSearchService;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.layoutService = layoutService;
        this.formService = formService;
        this.cacheService = cacheService;
        this.filterLayout = _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_2__["LibraryFiltersLayout"];
        this.refresh = true;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.boardChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.emptyBoard = false;
        this.queryFilters = {};
        this.optionData = [];
        this.optionLabel = {
            Publisher: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.resourceService, 'frmelmnts.lbl.publisher'), Board: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.resourceService, 'frmelmnts.lbl.boards')
        };
        this.boards = [];
        this.filterChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.defaultFilters = {};
        this.pageId = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.data.telemetry.pageid');
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.facets$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this.defaultTab = {};
        this.selectedFilters = {};
        this.allValues = {};
        this.selectedNgModels = {};
        this.refreshSearchFilterComponent = true;
        this._filterConfig$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["defer"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([
            {
                category: 'board',
                type: 'dropdown',
                labelText: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.lbl.boards'),
                placeholderText: 'Select Category',
                multiple: false
            },
            {
                category: 'medium',
                type: 'dropdown',
                labelText: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.lbl.medium'),
                placeholderText: 'Select language',
                multiple: true
            },
            {
                category: 'gradeLevel',
                type: 'dropdown',
                labelText: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.lbl.class'),
                placeholderText: 'Select Sub-Category',
                multiple: true
            },
            {
                category: 'subject',
                type: 'dropdown',
                labelText: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.lbl.subject'),
                placeholderText: 'Select Topic',
                multiple: true
            },
        ]); });
    }
    Object.defineProperty(SearchFilterComponent.prototype, "filterData", {
        get: function () {
            return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.pageData, 'metaData.filters') || ['medium', 'gradeLevel', 'board', 'channel', 'subject', 'audience', 'publisher', 'se_subjects', 'se_boards', 'se_gradeLevels', 'se_mediums'];
        },
        enumerable: false,
        configurable: true
    });
    SearchFilterComponent.prototype.getChannelId = function (index) {
        var _a = (this.filters || {}).publisher, publishers = _a === void 0 ? [] : _a;
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](publishers[index], 'value');
    };
    SearchFilterComponent.prototype.fetchAndFormatQueryParams = function () {
        var _this = this;
        return this.activatedRoute.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (queryParams) {
            var queryFilters = {};
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["forIn"](queryParams, function (value, key) {
                if (_this.filterData.includes(key)) {
                    queryFilters[key] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isArray"](value) ? value : [value];
                }
            });
            _this.queryFilters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](queryFilters);
            return queryFilters;
        }));
    };
    SearchFilterComponent.prototype.checkForWindowSize = function () {
        if (window.innerWidth <= 992) {
            this.isOpen = false;
        }
    };
    SearchFilterComponent.prototype.getFramework = function (_a) {
        var _b = _a.boardName, boardName = _b === void 0 ? null : _b;
        return this.contentSearchService.fetchFilter(boardName);
    };
    SearchFilterComponent.prototype.sortFilters = function (_a) {
        var filters = _a.filters, _b = _a.filterBy, filterBy = _b === void 0 ? 'name' : _b, _c = _a.omitKeys, omitKeys = _c === void 0 ? ['gradeLevel'] : _c;
        var sortedFilters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](filters);
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["forEach"](sortedFilters, function (values, key) {
            sortedFilters[key] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](omitKeys, key) ? values : lodash_es__WEBPACK_IMPORTED_MODULE_1__["sortBy"](values, [filterBy]);
        });
        return sortedFilters;
    };
    SearchFilterComponent.prototype.fetchFilters = function () {
        var _this = this;
        return this.fetchAndFormatQueryParams()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (queryParams) {
            _this.filterChange.emit({ status: 'FETCHING' });
            var boardName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](queryParams, 'board[0]') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.boards, '[0]');
            boardName = boardName === 'CBSE/NCERT' ? 'CBSE' : boardName;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(_this.getFramework({ boardName: boardName }), _this.getAudienceTypeFormConfig())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
                var filters = _a[0], audienceTypeFilter = _a[1];
                return (__assign(__assign({}, filters), { audience: audienceTypeFilter }));
            }));
        }));
    };
    SearchFilterComponent.prototype.ngOnInit = function () {
        this.checkForWindowSize();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.boardChangeHandler(), this.fetchSelectedFilterOptions(), this.handleFilterChange(), this.getFacets(), this.filterConfig$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(null, function (error) {
            console.error('Error while fetching filters');
        });
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.queryParams["board"]')) {
            var queryParams = __assign(__assign({}, this.defaultFilters), { selectedTab: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.queryParams.selectedTab') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultTab, 'contentType') || 'textbook' });
            this.router.navigate([], { queryParams: queryParams, relativeTo: this.activatedRoute });
        }
    };
    SearchFilterComponent.prototype.boardChangeHandler = function () {
        var _this = this;
        return this.boardChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (boardName) {
            return _this.getFramework({ boardName: boardName })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (filters) {
                _this.filters = __assign(__assign({}, _this.filters), _this.sortFilters({ filters: filters }));
                _this.updateRoute();
            }));
        }));
    };
    SearchFilterComponent.prototype.fetchSelectedFilterOptions = function () {
        var _this = this;
        return this.fetchFilters()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (filters) {
            filters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["pick"](filters || {}, _this.filterData);
            _this.filters = filters = _this.sortFilters({ filters: filters });
            _this.updateBoardList();
            _this.updateFiltersList({ filters: lodash_es__WEBPACK_IMPORTED_MODULE_1__["omit"](filters, 'board') });
            _this.emitFilterChangeEvent(true);
            _this.hardRefreshFilter();
        }));
    };
    SearchFilterComponent.prototype.handleFilterChange = function () {
        var _this = this;
        return this.filterChangeEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_a) {
            var type = _a.type, event = _a.event;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](event, 'data.index')) {
                var index = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](event, 'data.index');
                var selectedIndices = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.selectedFilters, type) || [];
                if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](selectedIndices, index)) {
                    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](selectedIndices, 'length') > 1) {
                        _this.popFilter({ type: type, index: index });
                    }
                }
                else {
                    _this.pushNewFilter({ type: type, index: index });
                }
            }
            else {
                if (type === 'subject') {
                    _this.selectedNgModels['selected_subjects'] = event;
                }
                _this.pushNewFilter({
                    type: type, updatedValues: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](event || [], function (selectedValue) { return lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](_this.allValues[type], function (val) { return val === selectedValue; }); })
                });
            }
            _this.emitFilterChangeEvent();
        }));
    };
    SearchFilterComponent.prototype.updateBoardList = function () {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.filters, 'board') || !lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.filters, 'board.length')) {
            this.emptyBoard = true;
        }
        this.boards = this.allValues['board'] = this.filters.board || [];
        this.boards = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](this.boards, function (node) { return ({
            name: node.name,
            value: node.name,
        }); });
        this.optionData.push({
            label: this.optionLabel.Board,
            value: 'board',
            option: this.boards
        });
        this.optionData = lodash_es__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.optionData, 'label');
        if (this.boards.length) {
            var selectedOption = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](this.boards, { name: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.queryFilters, 'board[0]') }) ||
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](this.boards, { name: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultFilters, 'board[0]') }) || this.boards[0];
            this.selectedBoard = { label: this.optionLabel.Board, value: 'board', selectedOption: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](selectedOption, 'name') };
            this.selectedBoard.selectedOption = this.selectedBoard.selectedOption === 'CBSE' ? 'CBSE/NCERT' : this.selectedBoard.selectedOption;
            this.selectedOption = this.selectedBoard;
        }
    };
    SearchFilterComponent.prototype.popFilter = function (_a) {
        var type = _a.type, index = _a.index;
        var selectedIndices = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.selectedFilters, type) || [];
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["remove"](selectedIndices, function (currentIndex) {
            return currentIndex === index;
        });
    };
    SearchFilterComponent.prototype.pushNewFilter = function (_a) {
        var type = _a.type, _b = _a.index, index = _b === void 0 ? null : _b, _c = _a.updatedValues, updatedValues = _c === void 0 ? [] : _c;
        if (index != null) {
            this.selectedFilters[type] = __spreadArrays([index], (this.selectedFilters.hasOwnProperty(type) ? this.selectedFilters[type] : []));
        }
        else {
            this.selectedFilters[type] = updatedValues;
        }
    };
    SearchFilterComponent.prototype.getIndicesFromDefaultFilters = function (_a) {
        var _this = this;
        var type = _a.type;
        var defaultValues = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultFilters, type) || [];
        var indices = [];
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](defaultValues, 'length')) {
            indices = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](defaultValues, function (defaultValue) { return lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](_this.allValues[type] || [], function (val) { return val === defaultValue; }); }), function (index) { return index !== -1; });
        }
        if (['audience', 'publisher', 'subject'].includes(type) && !indices.length) {
            return [];
        }
        return indices.length ? indices : [];
    };
    SearchFilterComponent.prototype.updateFiltersList = function (_a) {
        var _this = this;
        var filters = _a.filters;
        this.selectedFilters = {};
        this.selectedNgModels = {};
        this.allValues = {};
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["forEach"](filters, function (filterValues, filterKey) {
            if (filterKey === 'board') {
                var boardName = filterValues.find(function (board) { return board.name === 'CBSE'; });
                boardName && (boardName.name = 'CBSE/NCERT');
            }
            var values = _this.allValues[filterKey] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](filterValues, 'name');
            if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](values, 'length')) {
                var selectedIndices = void 0;
                var filterValuesFromQueryParams = _this.queryFilters[filterKey] || [];
                if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filterValuesFromQueryParams, 'length')) {
                    var indices = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](filterValuesFromQueryParams, function (queryParamValue) { return values.findIndex(function (val) {
                        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](val) === lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](queryParamValue);
                    }); }), function (index) { return index !== -1; });
                    selectedIndices = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](indices, 'length') ? indices : _this.getIndicesFromDefaultFilters({ type: filterKey });
                }
                else {
                    selectedIndices = _this.getIndicesFromDefaultFilters({ type: filterKey });
                }
                _this.selectedFilters[filterKey] = selectedIndices;
                _this.selectedNgModels[filterKey] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](selectedIndices, function (index) { return _this.allValues[filterKey][index]; });
                if (filterKey === 'subject') {
                    _this.selectedNgModels['selected_subjects'] = filterValuesFromQueryParams;
                }
            }
        });
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.queryFilters, 'board[0]') !== (this.cacheService.get('searchFilters') && this.cacheService.get('searchFilters')['board'] && this.cacheService.get('searchFilters')['board'][0])) {
            this.selectedFilters['medium'] = [];
            this.selectedFilters['gradeLevel'] = [];
            this.selectedFilters['subject'] = [];
            this.selectedFilters['publisher'] = [];
            this.selectedFilters['audience'] = [];
            this.selectedFilters['channel'] = [];
            return this.updateRouteForBoardChange();
        }
    };
    SearchFilterComponent.prototype.updateRouteForBoardChange = function (resetFilters) {
        var selectedTab = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.queryParams.selectedTab') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultTab, 'contentType') || 'textbook';
        var _selectedFilters = this.getSelectedFilter();
        _selectedFilters['medium'] = [];
        _selectedFilters['gradeLevel'] = [];
        _selectedFilters['subject'] = [];
        _selectedFilters['publisher'] = [];
        _selectedFilters['audience'] = [];
        _selectedFilters['channel'] = [];
        this.router.navigate([], {
            queryParams: resetFilters ? __assign(__assign({}, this.defaultFilters), { selectedTab: selectedTab }) : lodash_es__WEBPACK_IMPORTED_MODULE_1__["omit"](_selectedFilters || {}, ['audienceSearchFilterValue']),
            relativeTo: this.activatedRoute.parent
        });
    };
    SearchFilterComponent.prototype.updateRoute = function (resetFilters) {
        var selectedTab = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.queryParams.selectedTab') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultTab, 'contentType') || 'textbook';
        this.router.navigate([], {
            queryParams: resetFilters ? __assign(__assign({}, this.defaultFilters), { selectedTab: selectedTab }) : lodash_es__WEBPACK_IMPORTED_MODULE_1__["omit"](this.getSelectedFilter() || {}, ['audienceSearchFilterValue']),
            relativeTo: this.activatedRoute.parent
        });
    };
    SearchFilterComponent.prototype.selectedGroupOption = function (data) {
        this.selectedOption = data;
        this.selectedBoard = data;
        this.filterChange.emit({ status: 'FETCHING' });
        this.boardChange$.next(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](data, 'selectedOption'));
    };
    SearchFilterComponent.prototype.getSelectedFilter = function () {
        var _this = this;
        var filters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["mapValues"](this.selectedFilters, function (value, key) {
            return lodash_es__WEBPACK_IMPORTED_MODULE_1__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](value, function (index) { return lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](_this.allValues, [key, index]) ? _this.allValues[key][index] : null; }));
        });
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](this.selectedFilters, 'publisher')) {
            filters['channel'] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](this.selectedFilters['publisher'], function (publisher) { return _this.getChannelId(publisher); }));
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](this.selectedNgModels, 'selected_subjects')) {
            filters['subject'] = this.selectedNgModels['selected_subjects'] || [];
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](this.selectedFilters, 'audience')) {
            filters['audienceSearchFilterValue'] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](filters['audience'] || {}, function (audienceType) {
                var audience = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](_this.audienceList || {}, { 'name': audienceType });
                return audience ? lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](audience, 'searchFilter') : null;
            })));
        }
        filters['board'] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.selectedBoard, 'selectedOption') ? [this.selectedBoard.selectedOption] : [];
        filters['selectedTab'] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.queryParams.selectedTab') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.defaultTab, 'contentType') || 'textbook';
        return filters;
    };
    SearchFilterComponent.prototype.emitFilterChangeEvent = function (skipUrlUpdate) {
        if (skipUrlUpdate === void 0) { skipUrlUpdate = false; }
        var filters = this.getSelectedFilter();
        this.filterChange.emit({ status: 'FETCHED', filters: filters });
        if (!skipUrlUpdate) {
            this.updateRoute();
        }
    };
    SearchFilterComponent.prototype.getInteractEdata = function () {
        return {
            id: 'reset-filter',
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.activatedRoute, 'snapshot.data.telemetry.pageid'),
            extra: {
                filters: this.getSelectedFilter() || {}
            }
        };
    };
    SearchFilterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SearchFilterComponent.prototype.hardRefreshFilter = function () {
        this.refresh = false;
        this.cdr.detectChanges();
        this.refresh = true;
    };
    SearchFilterComponent.prototype.isLayoutAvailable = function () {
        return this.layoutService.isLayoutAvailable(this.layoutConfiguration);
    };
    SearchFilterComponent.prototype.resetFilters = function () {
        this.updateRoute(true);
    };
    SearchFilterComponent.prototype.onSearchFrameworkFilterReset = function () {
        if (this.cacheService.exists('searchFilters')) {
            this.cacheService.remove('searchFilters');
        }
        if (this.searchFrameworkFilterComponent) {
            this.searchFrameworkFilterComponent.resetFilter();
        }
    };
    SearchFilterComponent.prototype.getAudienceTypeFormConfig = function () {
        var _this = this;
        var formServiceInputParams = { formType: 'config', formAction: 'get', contentType: 'userType', component: 'portal' };
        return this.formService.getFormConfig(formServiceInputParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](response, 'visibility'), function (value) {
            var name = value.name, searchFilter = value.searchFilter;
            return { name: name, searchFilter: searchFilter };
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (mapping) { _this.audienceList = mapping; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
    };
    SearchFilterComponent.prototype.getFacets = function () {
        var _this = this;
        return this.facets$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (filters) {
            filters = _this.filters = __assign(__assign({}, _this.filters), _this.sortFilters({ filters: filters }));
            var categoryMapping = Object.entries(_this.contentSearchService.getCategoriesMapping);
            filters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["mapKeys"](filters, function (value, filterKey) {
                var _a = (categoryMapping.find(function (_a) {
                    var category = _a[0], mappedValue = _a[1];
                    return mappedValue === filterKey;
                }) || [])[0], key = _a === void 0 ? null : _a;
                return key || filterKey;
            });
            _this.updateFiltersList({ filters: filters });
            _this.hardRefreshFilter();
        }));
    };
    Object.defineProperty(SearchFilterComponent.prototype, "filterConfig$", {
        get: function () {
            var _this = this;
            return this.resourceService.languageSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_) { return _this._filterConfig$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (config) {
                _this.filterFormTemplateConfig = config;
                _this.refreshSearchFilterComponent = false;
                _this.cdr.detectChanges();
                _this.refreshSearchFilterComponent = true;
            }));
        },
        enumerable: false,
        configurable: true
    });
    return SearchFilterComponent;
}());



/***/ }),

/***/ "ZVe/":
/*!**********************************************************!*\
  !*** ./src/app/modules/content-search/services/index.ts ***!
  \**********************************************************/
/*! exports provided: ContentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_search_content_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-search/content-search.service */ "7QnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSearchService", function() { return _content_search_content_search_service__WEBPACK_IMPORTED_MODULE_0__["ContentSearchService"]; });




/***/ }),

/***/ "fy69":
/*!*************************************************!*\
  !*** ./src/app/modules/content-search/index.ts ***!
  \*************************************************/
/*! exports provided: ContentSearchModule, NoResultComponent, SearchFilterComponent, PageSectionComponent, DataDrivenFilterComponent, TopicPickerComponent, ViewAllComponent, GlobalSearchFilterComponent, GlobalSearchSelectedFilterComponent, ContentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-search.module */ "CPp/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSearchModule", function() { return _content_search_module__WEBPACK_IMPORTED_MODULE_0__["ContentSearchModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "K3Ss");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoResultComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["NoResultComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["SearchFilterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSectionComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PageSectionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataDrivenFilterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["DataDrivenFilterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicPickerComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["TopicPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ViewAllComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchFilterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["GlobalSearchFilterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchSelectedFilterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["GlobalSearchSelectedFilterComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "ZVe/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSearchService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ContentSearchService"]; });






/***/ }),

/***/ "sQFC":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/content-search/components/view-all/view-all.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return ViewAllComponent; });
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
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







var ViewAllComponent = (function () {
    function ViewAllComponent(searchService, router, playerService, formService, activatedRoute, paginationService, resourceService, toasterService, publicPlayerService, configService, coursesService, utilService, orgDetailsService, userService, browserCacheTtlService, navigationhelperService, layoutService) {
        var _a, _b, _c, _d;
        this.playerService = playerService;
        this.formService = formService;
        this.publicPlayerService = publicPlayerService;
        this.utilService = utilService;
        this.orgDetailsService = orgDetailsService;
        this.browserCacheTtlService = browserCacheTtlService;
        this.navigationhelperService = navigationhelperService;
        this.layoutService = layoutService;
        this.get = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"];
        this.searchList = [];
        this.noResult = false;
        this.showLoader = true;
        this.showFilter = false;
        this.pageClicked = 0;
        this.showBatchInfo = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showExportLoader = false;
        this.showDownloadLoader = false;
        this.facetsList = ['channel', 'gradeLevel', 'subject', 'medium'];
        this.initFilters = false;
        this.getPageData = function (selectedTab) { return function (formData) { return lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](formData, function (data) { return data.contentType === selectedTab; }); }; };
        this.searchService = searchService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.paginationService = paginationService;
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.configService = configService;
        this.coursesService = coursesService;
        this.userService = userService;
        this.router.onSameUrlNavigation = 'reload';
        this.sortingOptions = (_d = (_c = (_b = (_a = this.configService) === null || _a === void 0 ? void 0 : _a.dropDownConfig) === null || _b === void 0 ? void 0 : _b.FILTER) === null || _c === void 0 ? void 0 : _c.RESOURCES) === null || _d === void 0 ? void 0 : _d.sortingOptions;
        this._enrolledSectionNames = [lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'frmelmnts.lbl.myEnrolledCollections'), lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'tbk.trk.frmelmnts.lbl.mytrainings'),
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'crs.trk.frmelmnts.lbl.mytrainings'), lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'tvc.trk.frmelmnts.lbl.mytrainings')];
    }
    ViewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initLayout();
        if (!this.userService.loggedIn) {
            this.getChannelId();
        }
        else {
            this.showFilter = true;
            this.userService.userData$.subscribe(function (userData) {
                if (userData && !userData.err) {
                    _this.frameworkData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](userData.userProfile, 'framework');
                }
            });
        }
        this.formAction = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.formAction');
        this.filterType = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.filterType');
        this.pageLimit = this.configService.appConfig.ViewAll.PAGE_LIMIT;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return ({ params: results[0], queryParams: results[1] }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (res) { return _this.pageNumber !== Number(res.params.pageNumber) || !lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEqual"](_this.queryParams, res.queryParams); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
            _this.showLoader = true;
            _this.queryParams = res.queryParams;
            _this.sectionName = res.params.section.replace(/\-/g, ' ');
            _this.pageNumber = Number(res.params.pageNumber);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            _this.getframeWorkData();
            _this.manipulateQueryParam(data.queryParams);
            _this.setInteractEventData();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (response) {
            _this.getContents(response);
        }, function (error) {
            _this.showLoader = false;
            _this.noResult = true;
            _this.noResultMessage = {
                'messageText': 'messages.fmsg.m0077'
            };
            _this.toasterService.error(_this.resourceService.messages.fmsg.m0051);
        });
    };
    ViewAllComponent.prototype.getFilters = function (filters) {
        var filterData = filters && filters.filters || {};
        if (filterData.channel && this.facets) {
            var channelIds_1 = [];
            var facetsData_1 = lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](this.facets, { 'name': 'channel' });
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](filterData.channel, function (value, index) {
                var data = lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](facetsData_1.values, { 'identifier': value });
                if (data) {
                    channelIds_1.push(data.name);
                }
            });
            if (channelIds_1 && Array.isArray(channelIds_1) && channelIds_1.length > 0) {
                filterData.channel = channelIds_1;
            }
        }
        this.selectedFilters = filterData;
    };
    ViewAllComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.redoLayout();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
            _this.redoLayout();
        });
    };
    ViewAllComponent.prototype.fetchOrgData = function (orgList) {
        var url = this.router.url;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.data.facets')) {
            var channelList = this.getChannelList(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](orgList, 'contentData.result.facets'));
            var rootOrgIds = this.processOrgData(channelList);
            return this.orgDetailsService.searchOrgDetails({
                filters: { isTenant: true, id: rootOrgIds },
                fields: ['slug', 'identifier', 'orgName']
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
    };
    ViewAllComponent.prototype.processFacetList = function (facets, keys) {
        var facetObj = {};
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](facets, function (facet) {
            var _a, _b;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["indexOf"](keys, facet.name) > -1) {
                if (facetObj[facet.name]) {
                    (_a = facetObj[facet.name]).push.apply(_a, facet.values);
                }
                else {
                    facetObj[facet.name] = [];
                    (_b = facetObj[facet.name]).push.apply(_b, facet.values);
                }
            }
        });
        return facetObj;
    };
    ViewAllComponent.prototype.getContents = function (data) {
        var _this = this;
        this.getContentList(data).subscribe(function (response) {
            _this.fetchOrgData(response).subscribe(function (orgDetails) {
                if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.activatedRoute, 'snapshot.data.facets')) {
                    var facetsList = _this.processFacetList(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'contentData.result.facets'), _this.facetsList);
                    facetsList.channel = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](orgDetails, 'content');
                    facetsList = _this.utilService.removeDuplicate(facetsList);
                    _this.facets = _this.updateFacetsData(facetsList);
                    _this.initFilters = true;
                }
                _this.showLoader = false;
                var derivedSectionName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, _this.sectionName) || _this.sectionName;
                if (_this._enrolledSectionNames.some(function (sectionName) { return sectionName === derivedSectionName; })) {
                    _this.processEnrolledCourses(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'enrolledCourseData'), lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'currentPageData'));
                }
                else {
                    if (response.contentData.result.count && response.contentData.result.content) {
                        _this.noResult = false;
                        _this.totalCount = response.contentData.result.count;
                        _this.pager = _this.paginationService.getPager(response.contentData.result.count, _this.pageNumber, _this.pageLimit);
                        _this.searchList = _this.formatSearchresults(response.contentData.result.content);
                    }
                    else {
                        _this.noResult = true;
                        _this.noResultMessage = {
                            'message': 'messages.stmsg.m0007',
                            'messageText': 'messages.stmsg.m0006'
                        };
                    }
                }
            }, function (err) {
                _this.showLoader = false;
                _this.noResult = true;
                _this.noResultMessage = {
                    'messageText': 'messages.fmsg.m0077'
                };
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0051);
            });
        }, function (error) {
            _this.showLoader = false;
            _this.noResult = true;
            _this.noResultMessage = {
                'messageText': 'messages.fmsg.m0077'
            };
            _this.toasterService.error(_this.resourceService.messages.fmsg.m0051);
        });
    };
    ViewAllComponent.prototype.setInteractEventData = function () {
        this.closeIntractEdata = {
            id: 'close',
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.pageid'),
        };
        this.cardIntractEdata = {
            id: 'content-card',
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.pageid'),
        };
        this.sortIntractEdata = {
            id: 'sort',
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.pageid'),
        };
    };
    ViewAllComponent.prototype.manipulateQueryParam = function (results) {
        var _this = this;
        this.filters = {};
        var queryFilters = lodash_es__WEBPACK_IMPORTED_MODULE_5__["omit"](results, ['key', 'softConstraintsFilter', 'appliedFilters',
            'sort_by', 'sortType', 'defaultSortBy', 'exists', 'dynamic', 'selectedTab']);
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](queryFilters)) {
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["forOwn"](queryFilters, function (queryValue, queryKey) {
                _this.filters[queryKey] = queryValue;
            });
        }
        if (results && results.dynamic) {
            var fields = JSON.parse(results.dynamic);
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["forIn"](fields, function (value, key) {
                _this.filters[key] = value;
            });
        }
    };
    ViewAllComponent.prototype.getContentList = function (request) {
        var _a;
        var softConstraintData = {
            filters: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](request.queryParams, 'softConstraintsFilter') ? JSON.parse(request.queryParams.softConstraintsFilter) : {},
            softConstraints: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.softConstraints'),
            mode: 'soft'
        };
        var manipulatedData = {};
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.applyMode')) {
            manipulatedData = this.utilService.manipulateSoftConstraint(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.queryParams, 'appliedFilters'), softConstraintData, this.frameworkData);
        }
        var requestParams = {
            filters: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.queryParams, 'appliedFilters') ? this.filters : __assign(__assign({}, lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](manipulatedData, 'filters')), this.filters),
            limit: this.pageLimit,
            fields: this.configService.urlConFig.params.CourseSearchField,
            pageNumber: Number(request.params.pageNumber),
            mode: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](manipulatedData, 'mode'),
            params: this.configService.appConfig.ViewAll.contentApiQueryParams,
        };
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.filters, 'isContentSection')) {
            requestParams.filters = lodash_es__WEBPACK_IMPORTED_MODULE_5__["omit"](this.filters, ['isContentSection']);
        }
        requestParams['exists'] = request.queryParams.exists,
            requestParams['sort_by'] = request.queryParams.sortType ? (_a = {}, _a[request.queryParams.sort_by] = request.queryParams.sortType, _a) : JSON.parse(request.queryParams.defaultSortBy);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](manipulatedData, 'filters')) {
            requestParams['softConstraints'] = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](manipulatedData, 'softConstraints');
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.data.facets')) {
            requestParams['facets'] = this.facetsList;
        }
        this.pageClicked++;
        if (this.userService.loggedIn) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.searchService.contentSearch(requestParams), this.coursesService.enrolledCourseData$, this.getCurrentPageData()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return ({ contentData: data[0], enrolledCourseData: data[1], currentPageData: data[2] }); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.searchService.contentSearch(requestParams), this.getCurrentPageData()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return ({ contentData: data[0], currentPageData: data[1] }); }));
        }
    };
    ViewAllComponent.prototype.formatSearchresults = function (sectionData) {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](sectionData, function (value, index) {
            var constantData = _this.configService.appConfig.ViewAll.otherCourses.constantData;
            var metaData = _this.configService.appConfig.ViewAll.metaData;
            var dynamicFields = _this.configService.appConfig.ViewAll.dynamicFields;
            sectionData[index] = _this.utilService.processContent(sectionData[index], constantData, dynamicFields, metaData);
        });
        return sectionData;
    };
    ViewAllComponent.prototype.navigateToPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var url = decodeURI(this.router.url.split('?')[0].replace(/[^\/]+$/, page.toString()));
        this.router.navigate([url], { queryParams: this.queryParams, relativeTo: this.activatedRoute });
        this.moveToTop();
    };
    ViewAllComponent.prototype.moveToTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    ViewAllComponent.prototype.playContent = function (event, content) {
        this.moveToTop();
        if (!this.userService.loggedIn && event.data.contentType === 'Course') {
            this.publicPlayerService.playContent(event);
        }
        else {
            var url = this.router.url.split('/');
            if (url[1] === 'learn' || url[1] === 'resources') {
                var batchId = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](content, 'metaData.batchId');
                this.handleCourseRedirection(event, batchId);
            }
            else {
                this.publicPlayerService.playContent(event);
            }
        }
    };
    ViewAllComponent.prototype.handleCourseRedirection = function (_a, batchId) {
        var data = _a.data;
        var metaData = data.metaData;
        var _b = this.coursesService.findEnrolledCourses(metaData.identifier), onGoingBatchCount = _b.onGoingBatchCount, expiredBatchCount = _b.expiredBatchCount, openBatch = _b.openBatch, inviteOnlyBatch = _b.inviteOnlyBatch;
        if (!expiredBatchCount && !onGoingBatchCount) {
            return this.playerService.playContent(metaData);
        }
        if (batchId) {
            metaData.batchId = batchId;
            metaData.trackable = {
                enabled: 'Yes'
            };
            return this.playerService.playContent(metaData);
        }
        if (onGoingBatchCount === 1) {
            metaData.batchId = openBatch.ongoing.length ? openBatch.ongoing[0].batchId : inviteOnlyBatch.ongoing[0].batchId;
            return this.playerService.playContent(metaData);
        }
        this.selectedCourseBatches = { onGoingBatchCount: onGoingBatchCount, expiredBatchCount: expiredBatchCount, openBatch: openBatch, inviteOnlyBatch: inviteOnlyBatch, courseId: metaData.identifier };
        this.showBatchInfo = true;
    };
    ViewAllComponent.prototype.getChannelId = function () {
        var _this = this;
        this.orgDetailsService.getOrgDetails()
            .subscribe(function (apiResponse) {
            _this.hashTagId = apiResponse.hashTagId;
            _this.showFilter = true;
        }, function (err) {
        });
    };
    ViewAllComponent.prototype.getframeWorkData = function () {
        var _this = this;
        var formServiceInputParams = {
            formType: 'framework',
            formAction: 'search',
            contentType: 'framework-code',
        };
        this.formService.getFormConfig(formServiceInputParams).subscribe(function (data) {
            _this.frameWorkName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](data, 'framework').framework;
        }, function (err) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    ViewAllComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setTelemetryImpressionData();
        });
    };
    ViewAllComponent.prototype.setTelemetryImpressionData = function () {
        this.telemetryImpression = {
            context: {
                env: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.env')
            },
            edata: {
                type: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.type'),
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.pageid'),
                uri: this.router.url,
                subtype: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot, 'data.telemetry.subtype'),
                duration: this.navigationhelperService.getPageLoadTime()
            }
        };
    };
    ViewAllComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ViewAllComponent.prototype.updateCardData = function (downloadListdata) {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["each"](this.searchList, function (contents) {
            _this.publicPlayerService.updateDownloadStatus(downloadListdata, contents);
        });
    };
    ViewAllComponent.prototype.redoLayout = function () {
        this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__["COLUMN_TYPE"].fullLayout);
        this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__["COLUMN_TYPE"].fullLayout);
    };
    ViewAllComponent.prototype.processOrgData = function (channels) {
        var channelList = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](channels.values, function (channel) {
            if (channel.name) {
                channelList.push(channel.name);
            }
        });
        return channelList;
    };
    ViewAllComponent.prototype.getChannelList = function (channels) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](channels, { 'name': 'channel' });
    };
    ViewAllComponent.prototype.processEnrolledCourses = function (courseData, pageData) {
        var enrolledCourses = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](courseData, 'enrolledCourses');
        if (enrolledCourses) {
            var _a = pageData.contentType, pageContentType_1 = _a === void 0 ? null : _a, _b = pageData.search.filters.primaryCategory, pagePrimaryCategories_1 = _b === void 0 ? [] : _b;
            var enrolledContentPredicate = function (course) {
                var _a = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](course, 'content') || {}, _b = _a.primaryCategory, primaryCategory = _b === void 0 ? null : _b, _c = _a.contentType, contentType = _c === void 0 ? null : _c;
                return pagePrimaryCategories_1.some(function (category) { return lodash_es__WEBPACK_IMPORTED_MODULE_5__["toLower"](category) === lodash_es__WEBPACK_IMPORTED_MODULE_5__["toLower"](primaryCategory); }) || (lodash_es__WEBPACK_IMPORTED_MODULE_5__["toLower"](contentType) === lodash_es__WEBPACK_IMPORTED_MODULE_5__["toLower"](pageContentType_1));
            };
            var filteredCourses = lodash_es__WEBPACK_IMPORTED_MODULE_5__["filter"](enrolledCourses || [], enrolledContentPredicate);
            var enrolledCourseCount = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](filteredCourses, 'length');
            this.noResult = false;
            this.totalCount = enrolledCourseCount;
            var sortedData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["map"](lodash_es__WEBPACK_IMPORTED_MODULE_5__["orderBy"](filteredCourses, ['enrolledDate'], ['desc']), function (val) {
                var value = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](val, 'content');
                value.batchId = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](val, 'batchId');
                value.batch = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](val, 'batch');
                return value;
            });
            this.searchList = this.formatSearchresults(sortedData);
        }
        else {
            this.noResult = true;
            this.noResultMessage = {
                'message': 'messages.stmsg.m0007',
                'messageText': 'messages.stmsg.m0006'
            };
        }
    };
    ViewAllComponent.prototype.updateFacetsData = function (facets) {
        var _this = this;
        var facetsData = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](facets, function (facet, key) {
            switch (key) {
                case 'board':
                    var boardData = {
                        index: '1',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.boards'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectBoard'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(boardData);
                    break;
                case 'medium':
                    var mediumData = {
                        index: '2',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.medium'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectMedium'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(mediumData);
                    break;
                case 'gradeLevel':
                    var gradeLevelData = {
                        index: '3',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.class'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectClass'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(gradeLevelData);
                    break;
                case 'subject':
                    var subjectData = {
                        index: '4',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.subject'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectSubject'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(subjectData);
                    break;
                case 'publisher':
                    var publisherData = {
                        index: '5',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.publisher'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectPublisher'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(publisherData);
                    break;
                case 'contentType':
                    var contentTypeData = {
                        index: '6',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.contentType'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.selectContentType'),
                        values: facet,
                        name: key
                    };
                    facetsData.push(contentTypeData);
                    break;
                case 'channel':
                    var channelLists_1 = [];
                    lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](facet, function (channelList) {
                        if (channelList.orgName) {
                            channelList.name = channelList.orgName;
                        }
                        channelLists_1.push(channelList);
                    });
                    var channelData = {
                        index: '1',
                        label: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.orgname'),
                        placeholder: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'frmelmnts.lbl.orgname'),
                        values: channelLists_1,
                        name: key
                    };
                    facetsData.push(channelData);
                    break;
            }
        });
        return facetsData;
    };
    ViewAllComponent.prototype.handleCloseButton = function () {
        if (this.queryParams.selectedTab === 'all') {
            var previousPageUrl_1 = this.navigationhelperService.getPreviousUrl();
            if (!['/search/Library/', '/explore/'].some(function (val) { return previousPageUrl_1.url.startsWith(val); }) ||
                ['/explore/view-all/'].some(function (val) { return previousPageUrl_1.url.startsWith(val); })) {
                this.navigationhelperService.popHistory();
                this.handleCloseButton();
                return;
            }
            this.navigationhelperService.goBack();
        }
        else {
            var path = this.router.url.split('/view-all')[0];
            var redirectionUrl = "/" + path.toString();
            var _a = (this.queryParams || {}).selectedTab, selectedTab = _a === void 0 ? '' : _a;
            this.router.navigate([redirectionUrl], { queryParams: { selectedTab: selectedTab } });
        }
    };
    ViewAllComponent.prototype.getFormConfig = function (input) {
        if (input === void 0) { input = { formType: 'contentcategory', formAction: 'menubar', contentType: 'global' }; }
        return this.formService.getFormConfig(input);
    };
    ViewAllComponent.prototype.getCurrentPageData = function () {
        var _a = (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](history, 'state') || {}).currentPageData, currentPageData = _a === void 0 ? null : _a;
        if (currentPageData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(currentPageData);
        }
        var selectedTab = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.selectedTab') || 'textbook';
        return this.getFormConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.getPageData(selectedTab)));
    };
    return ViewAllComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~module-course-course-module-ngfactory~module-explore-explore-module-ngfactory~modules-learn-~a6936bc6.js.map