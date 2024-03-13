(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~explore-page-explore-page-module-ngfactory~modules-observation-observation-module-ngfactory"],{

/***/ "/7AU":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-details/observation-details.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_ObservationDetailsComponent, View_ObservationDetailsComponent_0, View_ObservationDetailsComponent_Host_0, ObservationDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ObservationDetailsComponent", function() { return RenderType_ObservationDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ObservationDetailsComponent_0", function() { return View_ObservationDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ObservationDetailsComponent_Host_0", function() { return View_ObservationDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationDetailsComponentNgFactory", function() { return ObservationDetailsComponentNgFactory; });
/* harmony import */ var _observation_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation-details.component.scss.shim.ngstyle */ "6uWQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity-list/entity-list.component.ngfactory */ "3tlD");
/* harmony import */ var _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity-list/entity-list.component */ "1406");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _submissions_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../submissions/submission.component.ngfactory */ "BDc4");
/* harmony import */ var _submissions_submission_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../submissions/submission.component */ "Oq+Q");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _add_entity_add_entity_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../add-entity/add-entity.component.ngfactory */ "MJfJ");
/* harmony import */ var _add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../add-entity/add-entity.component */ "LUDo");
/* harmony import */ var _core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/observation/observation.service */ "0wbY");
/* harmony import */ var _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/services/kendra/kendra.service */ "30tS");
/* harmony import */ var _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/observation-util/observation-util.service */ "Lv/I");
/* harmony import */ var _edit_submission_edit_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../edit-submission/edit-submission.component.ngfactory */ "dqjh");
/* harmony import */ var _edit_submission_edit_submission_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../edit-submission/edit-submission.component */ "zm5l");
/* harmony import */ var _player_helper_components_course_info_course_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../player-helper/components/course-info/course-info.component.ngfactory */ "34xT");
/* harmony import */ var _player_helper_components_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../player-helper/components/course-info/course-info.component */ "jQTu");
/* harmony import */ var _observation_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./observation-details.component */ "xzAq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");



























var styles_ObservationDetailsComponent = [_observation_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ObservationDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ObservationDetailsComponent, data: {} });

function View_ObservationDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "entity-list", [], null, [[null, "onAction"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onAction" === en)) {
        var pd_0 = (_co.actionOnEntity($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EntityListComponent_0"], _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EntityListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_3__["EntityListComponent"], [], { entities: [0, "entities"], selectedEntity: [1, "selectedEntity"] }, { onAction: "onAction" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.entities == null) ? null : _co.entities.entities); var currVal_1 = _co.selectedEntity; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ObservationDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_5__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessageForEntity; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-flex flex-ai-end flex-w-wrap content-header__buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-primary sb-btn-normal mr-8"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.observeAgainConfirm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.observeAgain)); _ck(_v, 2, 0, currVal_0); }); }
function View_ObservationDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "observation-detail-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "content-header__title font-weight-bold ellipsis text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.entities == null) ? null : _co.entities.allowMultipleAssessemts); _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.observationForm)); _ck(_v, 3, 0, currVal_0); }); }
function View_ObservationDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column margin-btm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "submission", [], null, [[null, "selectedSubmission"], [null, "onAction"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedSubmission" === en)) {
        var pd_0 = (_co.redirectToQuestions($event) !== false);
        ad = (pd_0 && ad);
    } if (("onAction" === en)) {
        var pd_1 = (_co.actionOnSubmission($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _submissions_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SubmissionsComponent_0"], _submissions_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SubmissionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _submissions_submission_component__WEBPACK_IMPORTED_MODULE_13__["SubmissionsComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]], { submission: [0, "submission"], allowMultipleAssessemts: [1, "allowMultipleAssessemts"] }, { selectedSubmission: "selectedSubmission", onAction: "onAction" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = ((_co.entities == null) ? null : _co.entities.allowMultipleAssessemts); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ObservationDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "txt-transform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " : ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.dashboardsortbystatus); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.notstarted)); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ObservationDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "txt-transform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " : ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.dashboardsortbystatus); var currVal_1 = _v.parent.context.$implicit.status; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ObservationDetailsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_v.parent.parent.parent.context.$implicit.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.start)); _ck(_v, 1, 0, currVal_0); }); }
function View_ObservationDetailsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_v.parent.parent.parent.context.$implicit.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.continue)); _ck(_v, 1, 0, currVal_0); }); }
function View_ObservationDetailsComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_v.parent.parent.parent.context.$implicit.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.view)); _ck(_v, 1, 0, currVal_0); }); }
function View_ObservationDetailsComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "ellipsis vertical icon large"]], null, null, null, null, null))], null, null); }
function View_ObservationDetailsComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "item"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.dropDownAction(_v.parent.parent.parent.parent.context.$implicit, _v.context.$implicit.type) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[3, 4]], 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_14__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.icon, ""); _ck(_v, 5, 0, currVal_1); }); }
function View_ObservationDetailsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "ui dropdown"], ["suiDropdown", ""], ["tabindex", "0"]], [[2, "active", null], [2, "disabled", null], [1, "tabindex", 0]], [[null, "click"], [null, "focusout"], [null, "keypress"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("focusout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onFocusOut($event) !== false);
        ad = (pd_1 && ad);
    } if (("keypress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onKeypress($event) !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = ($event.stopPropagation() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1064960, [[2, 4]], 2, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_14__["ɵbk"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { _tabIndex: [0, "_tabIndex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _children: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "menu"], ["suiDropdownMenu", ""]], [[2, "transition", null], [2, "visible", null], [2, "hidden", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1196032, [[1, 4]], 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_14__["ɵbj"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _itemsQueryInternal: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "0"; _ck(_v, 1, 0, currVal_3); var currVal_4 = ((_v.parent.parent.parent.context.$implicit.status != "completed") && (_v.parent.parent.parent.context.$implicit.status != "ratingPending")); _ck(_v, 5, 0, currVal_4); var currVal_8 = _co.actions; _ck(_v, 10, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isActive; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isDisabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabIndex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transitionClass; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isVisible; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isHidden; _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7); }); }
function View_ObservationDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "evidences-list cc-player__content-header sb-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "sb-g-col-xs-12 sb-g-col-sm-12 sb-g-col-md-8 sb-g-col-lg-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "content-header__title font-weight-bold ellipsis text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "white-space-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "certified-course__btn ng-star-inserted sb-g-col-xs-12 sb-g-col-sm-12 sb-g-col-md-4 sb-g-col-lg-3 center-align"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_v.context.$implicit.status == "notstarted"); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_v.context.$implicit.status != "notstarted"); _ck(_v, 8, 0, currVal_2); var currVal_3 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "notstarted"); _ck(_v, 11, 0, currVal_3); var currVal_4 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "draft"); _ck(_v, 13, 0, currVal_4); var currVal_5 = ((((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "completed") || (((_co.evidence == null) ? null : _co.evidence.status) === "ratingPending")); _ck(_v, 15, 0, currVal_5); var currVal_6 = ((_co.entities == null) ? null : _co.entities.allowMultipleAssessemts); _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_0); }); }
function View_ObservationDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "pt-0 pb-8"], ["content", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.evidencesStatus); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["rubricCard", 2]], null, 0, null, View_ObservationDetailsComponent_8))], function (_ck, _v) { var currVal_0 = ((((_v.context.$implicit == null) ? null : ((_v.context.$implicit.evidencesStatus == null) ? null : _v.context.$implicit.evidencesStatus.length)) > 1) || (_v.context.$implicit.criteriaLevelReport && _v.context.$implicit.isRubricDriven)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ObservationDetailsComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "add-entity", [], null, [[null, "closeEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("closeEvent" === en)) {
        var pd_0 = (_co.modalClose() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _add_entity_add_entity_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_AddEntityComponent_0"], _add_entity_add_entity_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_AddEntityComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_16__["AddEntityComponent"], [_core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_17__["ObservationService"], _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_18__["KendraService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_19__["ObservationUtilService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { observationId: [0, "observationId"], solutionId: [1, "solutionId"] }, { closeEvent: "closeEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.observationId; var currVal_1 = _co.solutionId; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ObservationDetailsComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-edit-submission", [], null, [[null, "onAction"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onAction" === en)) {
        var pd_0 = (_co.closeEditModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _edit_submission_edit_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_EditSubmissionComponent_0"], _edit_submission_edit_submission_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_EditSubmissionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _edit_submission_edit_submission_component__WEBPACK_IMPORTED_MODULE_21__["EditSubmissionComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { editData: [0, "editData"] }, { onAction: "onAction" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.openEditModal.data; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "d-flex flex-dc ml-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [["class", "mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 30, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 28, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 27, "div", [["class", "sb-course-details sb-g sb-g--gap24 py-16 text-left course-consumption-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 23, "div", [["class", "sb-course-details__training sb-g-col-xs-12 sb-g-col-md-9 sb-g-col-lg-9 sb-g-col-xxxl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 22, "div", [["class", "training-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h4", [["class", "font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 19, "div", [["class", "training-relevant my-16 content-header__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "div", [["class", "observation-detail-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "div", [["class", "content-header__title font-weight-bold ellipsis text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [["class", "d-flex flex-ai-end flex-w-wrap content-header__buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "button", [["class", "sb-btn sb-btn-primary sb-btn-normal mr-8"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addEntity() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](32, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "div", [["class", "submissions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "div", [["class", "sb-course-details__info sb-g-col-xs-12 sb-g-col-md-3 sb-g-col-lg-3 sb-g-col-xxxl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "app-course-info", [], null, null, null, _player_helper_components_course_info_course_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_CourseInfoComponent_0"], _player_helper_components_course_info_course_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_CourseInfoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 638976, null, 0, _player_helper_components_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_23__["CourseInfoComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]], { courseHierarchy: [0, "courseHierarchy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationDetailsComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "relative position mt-0"; var currVal_1 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back py-8"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_7 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 17, 0, currVal_7); var currVal_12 = ((_co.entities == null) ? null : ((_co.entities.entities == null) ? null : _co.entities.entities.length)); _ck(_v, 34, 0, currVal_12); var currVal_13 = ((((_co.entities == null) ? null : _co.entities.length) === 0) && !_co.showLoader); _ck(_v, 36, 0, currVal_13); var currVal_14 = ((_co.entities == null) ? null : ((_co.entities.entities == null) ? null : _co.entities.entities.length)); _ck(_v, 38, 0, currVal_14); var currVal_15 = _co.showLoader; _ck(_v, 41, 0, currVal_15); var currVal_16 = _co.submissions; _ck(_v, 43, 0, currVal_16); var currVal_17 = _co.courseHierarchy; _ck(_v, 46, 0, currVal_17); var currVal_18 = _co.showDownloadModal; _ck(_v, 48, 0, currVal_18); var currVal_19 = ((_co.openEditModal == null) ? null : _co.openEditModal.show); _ck(_v, 50, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 10, 0, currVal_4); var currVal_5 = _co.solution; _ck(_v, 13, 0, currVal_5); var currVal_6 = _co.programName; _ck(_v, 15, 0, currVal_6); var currVal_8 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.observationDetails)); _ck(_v, 23, 0, currVal_8); var currVal_9 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectEntity)); _ck(_v, 28, 0, currVal_9); var currVal_10 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.add)); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 1, _ck(_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.entities == null) ? null : _co.entities.entityType))); _ck(_v, 31, 0, currVal_10, currVal_11); }); }
function View_ObservationDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-observation-details", [], null, null, null, View_ObservationDetailsComponent_0, RenderType_ObservationDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _observation_details_component__WEBPACK_IMPORTED_MODULE_24__["ObservationDetailsComponent"], [_core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_17__["ObservationService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ActivatedRoute"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_19__["ObservationUtilService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_26__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ObservationDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-observation-details", _observation_details_component__WEBPACK_IMPORTED_MODULE_24__["ObservationDetailsComponent"], View_ObservationDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "/PL1":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-listing/observation-listing.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_ObservationListingComponent, View_ObservationListingComponent_0, View_ObservationListingComponent_Host_0, ObservationListingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ObservationListingComponent", function() { return RenderType_ObservationListingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ObservationListingComponent_0", function() { return View_ObservationListingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ObservationListingComponent_Host_0", function() { return View_ObservationListingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationListingComponentNgFactory", function() { return ObservationListingComponentNgFactory; });
/* harmony import */ var _observation_listing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation-listing.component.scss.shim.ngstyle */ "RG7s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_components_network_status_network_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/network-status/network-status.component.ngfactory */ "NI4W");
/* harmony import */ var _shared_components_network_status_network_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/network-status/network-status.component */ "+VRb");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _shared_components_load_offline_content_load_offline_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/load-offline-content/load-offline-content.component.ngfactory */ "gOlP");
/* harmony import */ var _shared_components_load_offline_content_load_offline_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/load-offline-content/load-offline-content.component */ "5Cdb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_services_electron_electron_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/electron/electron.service */ "F078");
/* harmony import */ var _shared_components_system_warning_system_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/system-warning/system-warning.component.ngfactory */ "VKz2");
/* harmony import */ var _shared_components_system_warning_system_warning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/system-warning/system-warning.component */ "HDNh");
/* harmony import */ var _public_module_offline_services_system_info_system_info_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/module/offline/services/system-info/system-info.service */ "XaO1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _content_search_components_global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../content-search/components/global-search-filter/global-search-filter.component.ngfactory */ "8636");
/* harmony import */ var _content_search_components_global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../content-search/components/global-search-filter/global-search-filter.component */ "XQ1L");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _content_search_components_global_search_selected_filter_global_search_selected_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../content-search/components/global-search-selected-filter/global-search-selected-filter.component.ngfactory */ "KWJi");
/* harmony import */ var _content_search_components_global_search_selected_filter_global_search_selected_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../content-search/components/global-search-selected-filter/global-search-selected-filter.component */ "pfh8");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _shared_directives_content_direction_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/directives/content-direction.directive */ "kSm4");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var angular_inport_dist_inview_item_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-inport/dist/inview-item.directive */ "ErdF");
/* harmony import */ var angular_inport_dist_inview_item_directive__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(angular_inport_dist_inview_item_directive__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var angular_inport_dist_inview_container_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-inport/dist/inview-container.directive */ "0q1A");
/* harmony import */ var angular_inport_dist_inview_container_directive__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(angular_inport_dist_inview_container_directive__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var angular_inport_dist_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-inport/dist/utils/scroll-observable */ "Gnpr");
/* harmony import */ var angular_inport_dist_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angular_inport_dist_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var angular_inport_dist_utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-inport/dist/utils/viewport-ruler */ "4gLq");
/* harmony import */ var angular_inport_dist_utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angular_inport_dist_utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _content_search_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../content-search/components/no-result/no-result.component.ngfactory */ "HG5U");
/* harmony import */ var _content_search_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../content-search/components/no-result/no-result.component */ "HMKN");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../core/services/form/form.service */ "9dCP");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _observation_listing_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./observation-listing.component */ "NOlU");
/* harmony import */ var _core_services_search_search_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../core/services/search/search.service */ "9UN5");
/* harmony import */ var _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/services/pagination/pagination.service */ "X/Ol");
/* harmony import */ var _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../core/services/course/course.service */ "hK/R");
/* harmony import */ var _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../core/services/player/player.service */ "ikcW");
/* harmony import */ var _shared_services_browser_cache_ttl_browser_cache_ttl_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../shared/services/browser-cache-ttl/browser-cache-ttl.service */ "DlBX");
/* harmony import */ var _core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../core/services/org-details/org-details.service */ "wUTf");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _core_services_schema_schema_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../core/services/schema/schema.service */ "+/iq");
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../shared/services/offline-card-service/offline-card.service */ "vzIX");
/* harmony import */ var _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../core/services/kendra/kendra.service */ "30tS");
/* harmony import */ var _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../core/services/observation-util/observation-util.service */ "Lv/I");




















































var styles_ObservationListingComponent = [_observation_listing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ObservationListingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ObservationListingComponent, data: {} });

function View_ObservationListingComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-network-status", [], null, null, null, _shared_components_network_status_network_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NetworkStatusComponent_0"], _shared_components_network_status_network_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NetworkStatusComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_network_status_network_status_component__WEBPACK_IMPORTED_MODULE_3__["NetworkStatusComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-load-offline-content", [], null, null, null, _shared_components_load_offline_content_load_offline_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LoadOfflineContentComponent_0"], _shared_components_load_offline_content_load_offline_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LoadOfflineContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 0, _shared_components_load_offline_content_load_offline_content_component__WEBPACK_IMPORTED_MODULE_7__["LoadOfflineContentComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _core_services_electron_electron_service__WEBPACK_IMPORTED_MODULE_10__["ElectronService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-system-warning", [], null, null, null, _shared_components_system_warning_system_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_SystemWarningComponent_0"], _shared_components_system_warning_system_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_SystemWarningComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 245760, null, 0, _shared_components_system_warning_system_warning_component__WEBPACK_IMPORTED_MODULE_12__["SystemWarningComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _public_module_offline_services_system_info_system_info_service__WEBPACK_IMPORTED_MODULE_13__["SystemInfoService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); }, null); }
function View_ObservationListingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDesktopApp; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationListingComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-global-search-filter", [], null, [[null, "filterChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("filterChange" === en)) {
        var pd_0 = (_co.getFilters($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _content_search_components_global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_GlobalSearchFilterComponent_0"], _content_search_components_global_search_filter_global_search_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_GlobalSearchFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _content_search_components_global_search_filter_global_search_filter_component__WEBPACK_IMPORTED_MODULE_16__["GlobalSearchFilterComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19__["CacheService"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"]], { facets: [0, "facets"], layoutConfiguration: [1, "layoutConfiguration"], isOpen: [2, "isOpen"] }, { filterChange: "filterChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.facets; var currVal_1 = _co.layoutConfiguration; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ObservationListingComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "sb-pageSection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "sb-pageSection-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "h4", [["class", "sb-pageSection-title m-0 mr-5"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "badge"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.observation))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.totalCount; _ck(_v, 4, 0, currVal_1); }); }
function View_ObservationListingComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-global-search-selected-filter", [], null, [[null, "filterChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("filterChange" === en)) {
        var pd_0 = (_co.getFilters($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _content_search_components_global_search_selected_filter_global_search_selected_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_GlobalSearchSelectedFilterComponent_0"], _content_search_components_global_search_selected_filter_global_search_selected_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_GlobalSearchSelectedFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _content_search_components_global_search_selected_filter_global_search_selected_filter_component__WEBPACK_IMPORTED_MODULE_21__["GlobalSearchSelectedFilterComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], { facets: [0, "facets"], selectedFilters: [1, "selectedFilters"] }, { filterChange: "filterChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.facets; var currVal_1 = _co.selectedFilters; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ObservationListingComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "sb-library-card", [["appContentDirection", ""], ["appTelemetryInteract", ""]], null, [[null, "cardClick"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("cardClick" === en)) {
        var pd_1 = (_co.playContent($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_LibraryCardComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_LibraryCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4210688, null, 0, _shared_directives_content_direction_directive__WEBPACK_IMPORTED_MODULE_23__["ContentDirectionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19__["CacheService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_24__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { id: 0, type: 1, ver: 2 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4308992, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_26__["LibraryCardComponent"], [], { content: [0, "content"], cardImg: [1, "cardImg"], layoutConfig: [2, "layoutConfig"], indexToDisplay: [3, "indexToDisplay"] }, { cardClick: "cardClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit.metaData.identifier, (_v.parent.context.$implicit.metaData.contentType || "Content"), "1.0"); var currVal_1 = _co.cardIntractEdata; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit; var currVal_3 = "assets/images/book.png"; var currVal_4 = _co.layoutConfiguration; var currVal_5 = _v.parent.context.index; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_ObservationListingComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "sb-grid--item"], ["in-view-item", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, [[1, 4]], 0, angular_inport_dist_inview_item_directive__WEBPACK_IMPORTED_MODULE_27__["InviewItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { data: [0, "data"], id: [1, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _v.context.index; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_co.isDesktopApp; var currVal_3 = _co.desktopCard; _ck(_v, 3, 0, currVal_2, currVal_3); }, null); }
function View_ObservationListingComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "twelve wide column"], ["in-view-container", ""]], null, [[null, "inview"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("inview" === en)) {
        var pd_0 = (_co.inView($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_28__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4407296, null, 1, angular_inport_dist_inview_container_directive__WEBPACK_IMPORTED_MODULE_29__["InviewContainerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_inport_dist_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_30__["ScrollObservable"], angular_inport_dist_utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_31__["WindowRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, { inview: "inview" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _inviewChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "sb-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 1, 0, currVal_0); _ck(_v, 2, 0); var currVal_1 = ((_co.initFilters && _co.facets) && _co.layoutConfiguration); _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.contentList; _ck(_v, 8, 0, currVal_2); }, null); }
function View_ObservationListingComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "twelve wide column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_28__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-no-result-found", [], null, null, null, _content_search_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_32__["View_NoResultComponent_0"], _content_search_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_32__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _content_search_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_33__["NoResultComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_34__["FormService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"]], { title: [0, "title"], subTitle: [1, "subTitle"], buttonText: [2, "buttonText"], showExploreContentButton: [3, "showExploreContentButton"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.noResultMessage == null) ? null : _co.noResultMessage.title); var currVal_2 = ((_co.noResultMessage == null) ? null : _co.noResultMessage.subTitle); var currVal_3 = ((_co.noResultMessage == null) ? null : _co.noResultMessage.buttonText); var currVal_4 = ((_co.noResultMessage == null) ? null : _co.noResultMessage.showExploreContentButton); _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_ObservationListingComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "sb-grid--item"], ["in-view-item", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, angular_inport_dist_inview_item_directive__WEBPACK_IMPORTED_MODULE_27__["InviewItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { data: [0, "data"], id: [1, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "sb-library-card", [], null, null, null, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_LibraryCardComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_LibraryCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4308992, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_26__["LibraryCardComponent"], [], { isLoading: [0, "isLoading"], layoutConfig: [1, "layoutConfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.content; var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = true; var currVal_3 = _co.layoutConfiguration; _ck(_v, 3, 0, currVal_2, currVal_3); }, null); }
function View_ObservationListingComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "sb-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.numberOfSections; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ObservationListingComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["aria-current", "\u201Cpage\u201D"], ["class", "sb-item"], ["role", "\u201Cbutton\u201D"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { active: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item"; var currVal_3 = _ck(_v, 2, 0, (_co.paginationDetails.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit; _ck(_v, 3, 0, currVal_4); }); }
function View_ObservationListingComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "sb-pagination-container flex-jc-flex-end mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "div", [["class", "sb-pagination my-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00AB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.paginationDetails.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "a", [["class", "sb-item"], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.paginationDetails.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [">"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"], ["tabindex", "0"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_co.paginationDetails.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](18, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00BB"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item "; var currVal_3 = _ck(_v, 4, 0, (_co.paginationDetails.currentPage === 1)); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_6 = "sb-item "; var currVal_7 = _ck(_v, 8, 0, (_co.paginationDetails.currentPage === 1)); _ck(_v, 7, 0, currVal_6, currVal_7); var currVal_8 = _co.paginationDetails.pages; _ck(_v, 11, 0, currVal_8); var currVal_11 = "sb-item"; var currVal_12 = _ck(_v, 14, 0, (_co.paginationDetails.currentPage === _co.paginationDetails.totalPages)); _ck(_v, 13, 0, currVal_11, currVal_12); var currVal_15 = "sb-item "; var currVal_16 = _ck(_v, 18, 0, (_co.paginationDetails.currentPage === _co.paginationDetails.totalPages)); _ck(_v, 17, 0, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); _ck(_v, 12, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); _ck(_v, 16, 0, currVal_13, currVal_14); }); }
function View_ObservationListingComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column right aligned"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.paginationDetails.pages.length; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ObservationListingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_37__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_38__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], { textToDisplay: [0, "textToDisplay"], svgToDisplay: [1, "svgToDisplay"], layoutConfiguration: [2, "layoutConfiguration"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 27, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 25, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 14, "div", [["class", "w-100"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 10, "div", [["class", "content-grid relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ObservationListingComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.observation))); var currVal_1 = _co.svgToDisplay; var currVal_2 = _co.layoutConfiguration; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.layoutConfiguration ? "sbt-fluid-content-bg" : ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = (_co.layoutConfiguration ? "sb-g sbt-container sbt-page-content" : "sb-g"); _ck(_v, 5, 0, currVal_4); var currVal_5 = _co.FIRST_PANEL_LAYOUT; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.layoutConfiguration; _ck(_v, 9, 0, currVal_6); var currVal_7 = (_co.isDesktopApp ? "sb-desktop-filter-section" : ""); _ck(_v, 11, 0, currVal_7); var currVal_8 = (_co.initFilters && _co.allTabData); _ck(_v, 14, 0, currVal_8); var currVal_9 = "w-100"; var currVal_10 = _co.SECOND_PANEL_LAYOUT; _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_11 = (_co.layoutConfiguration ? "sbt-page-content-area" : "ui container mt-24"); _ck(_v, 18, 0, currVal_11); var currVal_12 = (!_co.showLoader && (_co.totalCount > 0)); _ck(_v, 21, 0, currVal_12); var currVal_13 = (!_co.showLoader && _co.contentList.length); _ck(_v, 23, 0, currVal_13); var currVal_14 = (((_co.contentList.length === 0) && !_co.showLoader) && _co.noResultMessage); _ck(_v, 25, 0, currVal_14); var currVal_15 = _co.showLoader; _ck(_v, 27, 0, currVal_15); var currVal_16 = !_co.showLoader; _ck(_v, 29, 0, currVal_16); }, null); }
function View_ObservationListingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-observation-listing", [], null, null, null, View_ObservationListingComponent_0, RenderType_ObservationListingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _observation_listing_component__WEBPACK_IMPORTED_MODULE_39__["ObservationListingComponent"], [_core_services_search_search_service__WEBPACK_IMPORTED_MODULE_40__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_41__["PaginationService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"], _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_42__["CoursesService"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_43__["PlayerService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_19__["CacheService"], _shared_services_browser_cache_ttl_browser_cache_ttl_service__WEBPACK_IMPORTED_MODULE_44__["BrowserCacheTtlService"], _core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_45__["OrgDetailsService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_46__["NavigationHelperService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_38__["LayoutService"], _core_services_schema_schema_service__WEBPACK_IMPORTED_MODULE_47__["SchemaService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_48__["ContentManagerService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"], _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_49__["OfflineCardService"], _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_50__["KendraService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_51__["ObservationUtilService"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ObservationListingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-observation-listing", _observation_listing_component__WEBPACK_IMPORTED_MODULE_39__["ObservationListingComponent"], View_ObservationListingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "1406":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/observation/components/entity-list/entity-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EntityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return EntityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

var EntityListComponent = (function () {
    function EntityListComponent() {
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EntityListComponent.prototype.ngOnInit = function () { };
    EntityListComponent.prototype.action = function (entity, type) {
        this.onAction.emit({ action: type, data: entity });
    };
    return EntityListComponent;
}());



/***/ }),

/***/ "3s9v":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/add-entity/add-entity.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-modal-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 350px) !important;\n}\n.content[_ngcontent-%COMP%] {\n  max-height: 65vh;\n}\n.content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--sb-prominent-filter-title);\n}\n.content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  background: var(--sb-card-bg);\n  border-top: none;\n}\n.search-box[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.sb-onboard__header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0px;\n  padding-left: 15px;\n}\n.sb-onboard__content[_ngcontent-%COMP%] {\n  width: 40.5rem;\n  max-width: 100%;\n  margin-bottom: auto;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.sb-onboard__footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n  text-align: center;\n}\n@media (max-width: 767px) {\n    .sb-onbrd-modal .ui.modal {\n    margin: 0 0 0 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n  }\n    .sb-onbrd-modal .ui.modal.scroll {\n    position: fixed !important;\n    top: 0;\n    width: 100%;\n    left: 0px;\n    right: 0px;\n    margin: 0 !important;\n  }\n}\n.sbt-search-box[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0;\n}\n.load-mr-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-size: 1rem;\n  padding: 0.5rem 2rem;\n}\n.load-mr-bt-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\ninput[type=checkbox][disabled][_ngcontent-%COMP%] {\n  background: var(--sb-card-bg);\n  border: #ccc;\n}\n.search-results[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL2FkZC1lbnRpdHkvYWRkLWVudGl0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNwVEU7RUFDRSxzQ0FBQTtBQW1OSjtBQWpORTtFQUNFLGdCQUFBO0FBb05KO0FBbk5JO0VBQ0UsdUNBQUE7QUFxTk47QUFuTkk7RUFDRSxlQUFBO0FBcU5OO0FBbE5FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFxTko7QUFuTkU7RUFDRSxnQkFBQTtBQXNOSjtBQWxOSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBcU5OO0FBbE5JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFvTk47QUFqTkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQW1OTjtBQ3RNSTtFRExFO0lBQ0UsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBK01OO0VBNU1JO0lBQ0UsMEJBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUE4TU47QUFDRjtBQTFNRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQTZNSjtBQTNNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUE4TUo7QUE1TUU7RUFDRSxrQkFBQTtBQStNSjtBQTVNQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQStNRjtBQTdNQTtFQUFpQixZQUFBO0VBQWUsa0JBQUE7QUFrTmhDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL2FkZC1lbnRpdHkvYWRkLWVudGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG4gIC5zYi1tb2RhbC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCkgIWltcG9ydGFudDtcbiAgICB9XG4gIC5jb250ZW50e1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gICAgbGFiZWx7XG4gICAgICBjb2xvcjogdmFyKC0tc2ItcHJvbWluZW50LWZpbHRlci10aXRsZSk7XG4gICAgfVxuICAgIGxhYmVsOmhvdmVye1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLWNhcmQtYmcpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaC1ib3h7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zYi1vbmJvYXJkIHtcbiAgICAmX19oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0IDogMTVweDtcbiAgICB9XG4gIFxuICAgICZfX2NvbnRlbnQge1xuICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg2NDhweCk7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICBcbiAgICAmX19mb290ZXIge1xuICAgICAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuXG46Om5nLWRlZXAge1xuICAuc2Itb25icmQtbW9kYWwge1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAgIC51aS5tb2RhbCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnVpLm1vZGFsLnNjcm9sbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICAuc2J0LXNlYXJjaC1ib3h7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmxvYWQtbXItYnRue1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIH1cbiAgLmxvYWQtbXItYnQtY2VudGVye1xuICAgIHRleHQtYWxpZ246Y2VudGVyXG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLWNhcmQtYmcpO1xuICBib3JkZXI6ICNjY2M7XG59XG4uc2VhcmNoLXJlc3VsdHN7IGhlaWdodCA6IDEwMCU7IG92ZXJmbG93LXk6IHNjcm9sbDsgfVxuIiwiLy9cbi8vICBNRURJQSBRVUVSSUVTXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBBIG1hcCBvZiBicmVha3BvaW50cy5cbiRicmVha3BvaW50czogKFxuICB4czogNTc2cHgsXG4gIHNtOiA3NjhweCxcbiAgbWQ6IDk5MnB4LFxuICBsZzogMTI4MHB4LFxuICB4bDogMTQ0MHB4LFxuICB4eGw6IDE2MDBweCxcbiAgeHh4bDogMTkwMHB4XG4pO1xuXG5cbi8vXG4vLyAgUkVTUE9ORCBBQk9WRVxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge31cbkBtaXhpbiByZXNwb25kLWFib3ZlKCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFTE9XXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7fVxuQG1peGluIHJlc3BvbmQtYmVsb3coJGJyZWFrcG9pbnQpIHtcblxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogKCRicmVha3BvaW50LXZhbHVlIC0gMSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuXG4vL1xuLy8gIFJFU1BPTkQgQkVUV0VFTlxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZXR3ZWVuKHNtLCBtZCkge31cbkBtaXhpbiByZXNwb25kLWJldHdlZW4oJGxvd2VyLCAkdXBwZXIpIHtcblxuICAvLyBJZiBib3RoIHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMgZXhpc3QgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcblxuICAgIC8vIEdldCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzLlxuICAgICRsb3dlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGxvd2VyKTtcbiAgICAkdXBwZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDogKCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIG9uZSBvciBib3RoIG9mIHRoZSBicmVha3BvaW50cyBkb24ndCBleGlzdC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIGxvd2VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xuICAgIH1cblxuICAgIC8vIElmIHVwcGVyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xuXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XG4gICAgfVxuICB9XG59Il19 */"];



/***/ }),

/***/ "3tlD":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/observation/components/entity-list/entity-list.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_EntityListComponent, View_EntityListComponent_0, View_EntityListComponent_Host_0, EntityListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EntityListComponent", function() { return RenderType_EntityListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EntityListComponent_0", function() { return View_EntityListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EntityListComponent_Host_0", function() { return View_EntityListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponentNgFactory", function() { return EntityListComponentNgFactory; });
/* harmony import */ var _entity_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-list.component.scss.shim.ngstyle */ "CHrp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _entity_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-list.component */ "1406");




var styles_EntityListComponent = [_entity_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EntityListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EntityListComponent, data: {} });

function View_EntityListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "trash large icon"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.action(_v.parent.context.$implicit, "delete") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_EntityListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "d-flex flex-dc flex-w-wrap entity-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "d-flex sb-radio-btn-checkbox sb-radio-btn-primary flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", " w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "input", [["name", "radio-group"], ["type", "radio"]], [[8, "id", 0], [8, "checked", 0], [8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.action(_v.context.$implicit, "change") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "label", [["class", "d-flex w-100 flex-jc-space-between"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_5 = (_v.context.$implicit.submissionsCount == 0); _ck(_v, 8, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_1 = (_v.context.$implicit._id == _co.selectedEntity._id); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 4, 0, currVal_3); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.name); _ck(_v, 5, 0, currVal_4); }); }
function View_EntityListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.entities; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EntityListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "entity-list", [], null, null, null, View_EntityListComponent_0, RenderType_EntityListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _entity_list_component__WEBPACK_IMPORTED_MODULE_3__["EntityListComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EntityListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("entity-list", _entity_list_component__WEBPACK_IMPORTED_MODULE_3__["EntityListComponent"], View_EntityListComponent_Host_0, { entities: "entities", selectedEntity: "selectedEntity" }, { onAction: "onAction" }, []);



/***/ }),

/***/ "6uWQ":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-details/observation-details.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".observation-detail-box[_ngcontent-%COMP%] {\n  display: inline-flex;\n  max-width: 100%;\n  min-width: 100%;\n  margin: 15px 0px;\n}\n\n.submissions[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.submissions[_ngcontent-%COMP%]   .evidences-list[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n  background: var(--sb-card-bg) !important;\n  border-radius: var(--sbt-bradius-24);\n  padding: 8px 24px;\n}\n\n.icon-svg[_ngcontent-%COMP%] {\n  background: none;\n  box-shadow: none;\n}\n\n.sbaccordion__panel-header__title[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n}\n\n.margin-btm[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]     .ui.dropdown .menu > .item {\n  color: var(--sb-linkmenu-text);\n}\n\n[_nghost-%COMP%]     .ui.dropdown .menu {\n  background: var(--sb-card-bg);\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: var(--primary-400) !important;\n}\n\n.txt-transform[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  padding: 5px 0;\n}\n\n.white-space-wrap[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL29ic2VydmF0aW9uLWRldGFpbHMvb2JzZXJ2YXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFDSTtFQUNJLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLHNCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQUFDO0VBQ0csOEJBQUE7QUFHSjs7QUFEQztFQUNHLDZCQUFBO0FBR0o7O0FBQUE7RUFDRSxvQ0FBQTtBQUdGOztBQURBO0VBQ0UscUNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL29ic2VydmF0aW9uLWRldGFpbHMvb2JzZXJ2YXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vYnNlcnZhdGlvbi1kZXRhaWwtYm94e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5zdWJtaXNzaW9uc3tcbiAgICBoNXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmV2aWRlbmNlcy1saXN0e1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICB2YXIoLS1zYi1jYXJkLWJnKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYnQtYnJhZGl1cy0yNCk7XG4gICAgICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIH1cbn1cbi5pY29uLXN2Z3tcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLnNiYWNjb3JkaW9uX19wYW5lbC1oZWFkZXJfX3RpdGxle1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XG4gIH1cbiAgLm1hcmdpbi1idG17XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgeyBcbiAudWkuZHJvcGRvd24gLm1lbnU+Lml0ZW17XG4gICAgY29sb3I6IHZhcigtLXNiLWxpbmttZW51LXRleHQpO1xuIH1cbiAudWkuZHJvcGRvd24gLm1lbnV7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItY2FyZC1iZyk7XG4gfVxufVxuLmljb257XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCkgIWltcG9ydGFudDtcbn1cbi50eHQtdHJhbnNmb3JtIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5jZW50ZXItYWxpZ24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi53aGl0ZS1zcGFjZS13cmFwIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"];



/***/ }),

/***/ "BDc4":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/observation/components/submissions/submission.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: RenderType_SubmissionsComponent, View_SubmissionsComponent_0, View_SubmissionsComponent_Host_0, SubmissionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SubmissionsComponent", function() { return RenderType_SubmissionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SubmissionsComponent_0", function() { return View_SubmissionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SubmissionsComponent_Host_0", function() { return View_SubmissionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsComponentNgFactory", function() { return SubmissionsComponentNgFactory; });
/* harmony import */ var _submission_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submission.component.scss.shim.ngstyle */ "tn6C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _submission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submission.component */ "Oq+Q");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");







var styles_SubmissionsComponent = [_submission_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SubmissionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SubmissionsComponent, data: {} });

function View_SubmissionsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "ellipsis vertical icon large"]], null, null, null, null, null))], null, null); }
function View_SubmissionsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "item"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.actionEvent(_co.submission, _v.context.$implicit.type) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[4, 4]], 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.icon, ""); _ck(_v, 5, 0, currVal_1); }); }
function View_SubmissionsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "ui dropdown"], ["suiDropdown", ""], ["tabindex", "0"]], [[2, "active", null], [2, "disabled", null], [1, "tabindex", 0]], [[null, "click"], [null, "focusout"], [null, "keypress"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("focusout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onFocusOut($event) !== false);
        ad = (pd_1 && ad);
    } if (("keypress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onKeypress($event) !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = ($event.stopPropagation() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1064960, [[3, 4]], 2, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__["ɵbk"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { _tabIndex: [0, "_tabIndex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _children: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "menu"], ["suiDropdownMenu", ""]], [[2, "transition", null], [2, "visible", null], [2, "hidden", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1196032, [[2, 4]], 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _itemsQueryInternal: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "0"; _ck(_v, 1, 0, currVal_3); var currVal_4 = ((_co.submission.status != "completed") && (_co.submission.status != "ratingPending")); _ck(_v, 5, 0, currVal_4); var currVal_8 = _co.actions; _ck(_v, 10, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isActive; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isDisabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabIndex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transitionClass; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isVisible; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isHidden; _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7); }); }
function View_SubmissionsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "txt-transform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " : ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.dashboardsortbystatus); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.notstarted)); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubmissionsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "txt-transform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " : ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.dashboardsortbystatus); var currVal_1 = _v.parent.context.$implicit.status; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubmissionsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "txt-transform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ":", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.dashboardsortbystatus); var currVal_1 = _co.resourceService.frmelmnts.lbl.notApplicable; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubmissionsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_co.submission.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.start)); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmissionsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_co.submission.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.continue)); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmissionsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_co.submission.submissionNumber, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.view)); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmissionsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-disabled ml-auto textbook__addbtn"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.start)); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmissionsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-secondary sb-btn-normal ml-8 textbook__addbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.actionEvent(_v.parent.context.$implicit, "markEcmNotApplicable") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.notApplicable; _ck(_v, 1, 0, currVal_0); }); }
function View_SubmissionsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "evidences-list cc-player__content-header sb-g "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", " sb-g-col-xs-12 sb-g-col-sm-12 sb-g-col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "content-header__title font-weight-bold ellipsis text-left sb-g-col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "white-space-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "div", [["class", "certified-course__btn center-align sb-g-col-xs-12 sb-g-col-sm-12 sb-g-col-lg-4 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_v.context.$implicit.status == "notstarted"); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_v.context.$implicit.status != "notstarted") && !((_v.context.$implicit == null) ? null : _v.context.$implicit.notApplicable)); _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.notApplicable); _ck(_v, 10, 0, currVal_3); var currVal_4 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "notstarted"); _ck(_v, 13, 0, currVal_4); var currVal_5 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "draft"); _ck(_v, 15, 0, currVal_5); var currVal_6 = (!((_v.context.$implicit == null) ? null : _v.context.$implicit.notApplicable) && ((((_v.context.$implicit == null) ? null : _v.context.$implicit.status) === "completed") || (((_co.evidence == null) ? null : _co.evidence.status) === "ratingPending"))); _ck(_v, 17, 0, currVal_6); var currVal_7 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.notApplicable); _ck(_v, 19, 0, currVal_7); var currVal_8 = (((((_v.context.$implicit == null) ? null : _v.context.$implicit.canBeNotAllowed) && (((_v.context.$implicit == null) ? null : _v.context.$implicit.status) !== "completed")) && (((_co.evidence == null) ? null : _co.evidence.status) !== "ratingPending")) || ((_v.context.$implicit == null) ? null : _v.context.$implicit.notApplicable)); _ck(_v, 21, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_0); }); }
function View_SubmissionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "sui-accordion", [["class", "styled fluid sb-accordion sb-new-theme-accordion submissions"]], [[2, "ui", null], [2, "accordion", null]], null, null, _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ɵh_0"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ɵh"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__["ɵh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _panels: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 11, "sui-accordion-panel", [["class", "sb-accordion-title submission-title"]], null, null, null, _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ɵg_0"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ɵg"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, [[1, 4]], 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_2__["ɵg"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 6, "div", [["aria-controls", "submissionTitle"], ["class", "sb-mat-accordion__title d-flex flex-ai-center flex-jc-space-between"], ["tabindex", "0"], ["title", ""]], [[1, "aria-expanded", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isOpen = !_co.isOpen) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "dropdown large icon"], ["role", "img"], ["title", "expand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 1, 2, "div", [["aria-labelledby", "submissionTitle"], ["class", "content-submission sb-bg-color-white pt-0 pb-8 sb-g-col-xs-12"], ["content", ""], ["id", "submissionTitle"], ["role", "region"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmissionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.allowMultipleAssessemts; _ck(_v, 11, 0, currVal_5); var currVal_6 = ((_co.submission == null) ? null : _co.submission.evidencesStatus); _ck(_v, 14, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasClasses; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasClasses; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.isOpen; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.submission == null) ? null : _co.submission.title), " accordion"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = ((_co.submission == null) ? null : _co.submission.title); _ck(_v, 7, 0, currVal_4); }); }
function View_SubmissionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "submission", [], null, null, null, View_SubmissionsComponent_0, RenderType_SubmissionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _submission_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionsComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubmissionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("submission", _submission_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionsComponent"], View_SubmissionsComponent_Host_0, { submission: "submission", allowMultipleAssessemts: "allowMultipleAssessemts" }, { selectedSubmission: "selectedSubmission", onAction: "onAction" }, []);



/***/ }),

/***/ "CHrp":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/entity-list/entity-list.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".entity-list[_ngcontent-%COMP%] {\n  background: var(--sb-card-bg);\n  padding: 10px 24px;\n  border-radius: 30px;\n  margin: 15px 0px;\n}\n.entity-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.entity-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--primary-400) !important;\n}\n.entity-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL2VudGl0eS1saXN0L2VudGl0eS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksb0NBQUE7QUFFUjtBQUFRO0VBQ0ksZUFBQTtBQUVaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL2VudGl0eS1saXN0L2VudGl0eS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudGl0eS1saXN0e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLWNhcmQtYmcpO1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDs7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApICFpbXBvcnRhbnQ7O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbn0iXX0= */"];



/***/ }),

/***/ "LUDo":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/observation/components/add-entity/add-entity.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntityComponent", function() { return AddEntityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




var AddEntityComponent = (function () {
    function AddEntityComponent(observationService, kendraService, resourceService, observationUtilService, config, location) {
        this.observationService = observationService;
        this.kendraService = kendraService;
        this.resourceService = resourceService;
        this.observationUtilService = observationUtilService;
        this.location = location;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.throttle = 50;
        this.scrollDistance = 1;
        this.selectedListCount = 0;
        this.limit = 25;
        this.page = 1;
        this.count = 0;
        this.showDownloadModal = true;
        this.showLoaderBox = false;
        this.noResultMessage = {
            'messageText': 'frmelmnts.lbl.noDataFound'
        };
        this.selectedEntities = [];
        this.config = config;
    }
    AddEntityComponent.prototype.ngOnInit = function () {
        this.getProfileData();
    };
    AddEntityComponent.prototype.getProfileData = function () {
        var _this = this;
        this.observationUtilService.getProfileDataList().then(function (data) {
            _this.payload = data;
            _this.getTargettedEntityType();
        });
    };
    AddEntityComponent.prototype.closeModal = function () {
        this.showDownloadModal = false;
        this.closeEvent.emit();
    };
    AddEntityComponent.prototype.getTargettedEntityType = function () {
        var _this = this;
        this.showLoaderBox = true;
        var paramOptions = {
            url: this.config.urlConFig.URLS.KENDRA.TARGETTED_ENTITY_TYPES + this.solutionId,
            param: {},
            data: this.payload,
        };
        this.kendraService.post(paramOptions).subscribe(function (data) {
            _this.showLoaderBox = false;
            _this.targetEntity = data.result;
            _this.entities = [];
            _this.search();
        }, function (error) {
            _this.showLoaderBox = false;
        });
    };
    AddEntityComponent.prototype.selectEntity = function (event) {
        if (this.selectedEntities.includes(event._id)) {
            var i = this.selectedEntities.indexOf(event._id);
            this.selectedEntities.splice(i, 1);
        }
        else {
            this.selectedEntities.push(event._id);
        }
        if (!event.isSelected) {
            event.selected = !event.selected;
        }
        event.selected ? this.selectedListCount++ : this.selectedListCount--;
    };
    AddEntityComponent.prototype.search = function () {
        var _this = this;
        this.showLoaderBox = true;
        var url = this.config.urlConFig.URLS.OBSERVATION.SEARCH_ENTITY + '?observationId=' + this.observationId + '&search=' + encodeURIComponent(this.searchQuery ? this.searchQuery : '') + '&page=' + this.page + '&limit=' + this.limit;
        var paramOptions = {
            url: url + ("&parentEntityId=" + encodeURIComponent(this.targetEntity._id)),
            param: {},
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.showLoaderBox = false;
            var resp = data.result[0];
            if (resp.data.length) {
                for (var i = 0; i < resp.data.length; i++) {
                    resp.data[i].isSelected = resp.data[i].selected;
                    resp.data[i].preSelected = resp.data[i].selected ? true : false;
                }
                _this.entities = _this.entities.concat(resp.data);
                _this.count = resp.count;
            }
        }, function (error) {
            _this.showLoaderBox = false;
        });
    };
    AddEntityComponent.prototype.searchEntity = function () {
        this.page = 1;
        this.entities = [];
        this.search();
    };
    AddEntityComponent.prototype.loadMore = function () {
        if (this.count > this.entities.length) {
            this.page = this.page + 1;
            this.search();
        }
    };
    AddEntityComponent.prototype.submit = function () {
        var _this = this;
        this.payload.data = this.selectedEntities;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_UPDATE_ENTITES + ("" + this.observationId),
            param: {},
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.closeModal();
        }, function (error) {
        });
    };
    return AddEntityComponent;
}());



/***/ }),

/***/ "MJfJ":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/observation/components/add-entity/add-entity.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_AddEntityComponent, View_AddEntityComponent_0, View_AddEntityComponent_Host_0, AddEntityComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddEntityComponent", function() { return RenderType_AddEntityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddEntityComponent_0", function() { return View_AddEntityComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddEntityComponent_Host_0", function() { return View_AddEntityComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntityComponentNgFactory", function() { return AddEntityComponentNgFactory; });
/* harmony import */ var _add_entity_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-entity.component.scss.shim.ngstyle */ "3s9v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _add_entity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-entity.component */ "LUDo");
/* harmony import */ var _core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/observation/observation.service */ "0wbY");
/* harmony import */ var _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/services/kendra/kendra.service */ "30tS");
/* harmony import */ var _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/observation-util/observation-util.service */ "Lv/I");




















var styles_AddEntityComponent = [_add_entity_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddEntityComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddEntityComponent, data: {} });

function View_AddEntityComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "sb-checkbox sb-checkbox-secondary pt-24 ui checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "input", [["type", "checkbox"]], [[8, "value", 0], [8, "id", 0], [8, "disabled", 0], [8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.selectEntity(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "disabled-checkbox": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "label", [["class", "text-left fsmall"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_4 = _ck(_v, 4, 0, _v.context.$implicit.isSelected); _ck(_v, 3, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_2 = _v.context.$implicit.isSelected; var currVal_3 = (_v.context.$implicit.selected || ((_co.selectedEntities == null) ? null : _co.selectedEntities.includes(_v.context.$implicit._id))); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 5, 0, currVal_5); var currVal_6 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_6); }); }
function View_AddEntityComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEntityComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.entities; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AddEntityComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_4__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AddEntityComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_9__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AddEntityComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 40, "div", [["class", "sb-mat__modal sb-onboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "flex-jc-center mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "sb-onboard__header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 9, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 8, "div", [["class", "sbt-search-box search-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "div", [["class", "input-div relative"], ["id", "search-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "img", [["alt", "Search Icon"], ["class", "search icon"], ["src", "assets/images/search-icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "input", [["class", "sb-search-input"], ["name", "filter_search"], ["type", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.searchQuery = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = (_co.searchEntity() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 10, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "div", [["class", "sb-modal-content content search-results"], ["infinite-scroll", ""]], null, [[null, "scrolled"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scrolled" === en)) {
        var pd_0 = (_co.loadMore() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4866048, null, 0, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { infiniteScrollDistance: [0, "infiniteScrollDistance"], infiniteScrollThrottle: [1, "infiniteScrollThrottle"], scrollWindow: [2, "scrollWindow"] }, { scrolled: "scrolled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEntityComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEntityComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEntityComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 9, "mat-dialog-actions", [["class", "mb-0 sb-mat__modal__actions flex-jc-center mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 7, "div", [["class", "sb-onboard__footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-sm sb-btn-white text-uppercase flex-basis-1"], ["tabindex", "0"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "div", [["class", "w-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-sm sb-btn-primary text-uppercase flex-basis-1"], ["tabindex", "0"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](39, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_4 = "close dialog"; var currVal_5 = ""; _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_14 = "filter_search"; var currVal_15 = _co.searchQuery; _ck(_v, 17, 0, currVal_14, currVal_15); var currVal_16 = _co.scrollDistance; var currVal_17 = _co.throttle; var currVal_18 = false; _ck(_v, 24, 0, currVal_16, currVal_17, currVal_18); var currVal_19 = ((_co.entities == null) ? null : _co.entities.length); _ck(_v, 26, 0, currVal_19); var currVal_20 = _co.showLoaderBox; _ck(_v, 28, 0, currVal_20); var currVal_21 = (!_co.showLoaderBox && (((_co.entities == null) ? null : _co.entities.length) === 0)); _ck(_v, 30, 0, currVal_21); var currVal_24 = "sb-btn sb-btn-sm sb-btn-primary text-uppercase flex-basis-1"; var currVal_25 = _ck(_v, 39, 0, (_co.selectedListCount == 0)); _ck(_v, 38, 0, currVal_24, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.addEntity)); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ariaLabel || null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).type; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.lbl.search), ""); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 14, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_22 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.close)); _ck(_v, 35, 0, currVal_22); var currVal_23 = (_co.selectedListCount == 0); _ck(_v, 37, 0, currVal_23); var currVal_26 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit)); _ck(_v, 40, 0, currVal_26); }); }
function View_AddEntityComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showDownloadSuccessModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, [[1, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { disableClose: 0, size: 1, panelClass: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AddEntityComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 5, 0, true, "normal", _ck(_v, 4, 0, "overflow-visible", "material-modal")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AddEntityComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "add-entity", [], null, null, null, View_AddEntityComponent_0, RenderType_AddEntityComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_entity_component__WEBPACK_IMPORTED_MODULE_16__["AddEntityComponent"], [_core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_17__["ObservationService"], _core_services_kendra_kendra_service__WEBPACK_IMPORTED_MODULE_18__["KendraService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_19__["ObservationUtilService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddEntityComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("add-entity", _add_entity_component__WEBPACK_IMPORTED_MODULE_16__["AddEntityComponent"], View_AddEntityComponent_Host_0, { observationId: "observationId", solutionId: "solutionId" }, { closeEvent: "closeEvent" }, []);



/***/ }),

/***/ "MiFo":
/*!***********************************************************!*\
  !*** ./src/app/modules/observation/observation.module.ts ***!
  \***********************************************************/
/*! exports provided: ObservationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationModule", function() { return ObservationModule; });
var ObservationModule = (function () {
    function ObservationModule() {
    }
    return ObservationModule;
}());



/***/ }),

/***/ "NOlU":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-listing/observation-listing.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ObservationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationListingComponent", function() { return ObservationListingComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cache-service */ "RiOY");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ObservationListingComponent = (function () {
    function ObservationListingComponent(searchService, router, activatedRoute, paginationService, resourceService, toasterService, changeDetectorRef, configService, utilService, coursesService, playerService, userService, cacheService, browserCacheTtlService, orgDetailsService, navigationhelperService, layoutService, schemaService, contentManagerService, telemetryService, offlineCardService, kendraService, config, observationUtil, location) {
        this.searchService = searchService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.paginationService = paginationService;
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.configService = configService;
        this.utilService = utilService;
        this.coursesService = coursesService;
        this.playerService = playerService;
        this.userService = userService;
        this.cacheService = cacheService;
        this.browserCacheTtlService = browserCacheTtlService;
        this.orgDetailsService = orgDetailsService;
        this.navigationhelperService = navigationhelperService;
        this.layoutService = layoutService;
        this.schemaService = schemaService;
        this.contentManagerService = contentManagerService;
        this.telemetryService = telemetryService;
        this.offlineCardService = offlineCardService;
        this.kendraService = kendraService;
        this.observationUtil = observationUtil;
        this.location = location;
        this.pageTitleSrc = 'resourceService?.frmelmnts?.lbl?.observation';
        this.svgToDisplay = 'textbooks-banner-img.svg';
        this.contentList = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.inViewLogs = [];
        this.showLoader = true;
        this.initFilters = false;
        this.isDesktopApp = false;
        this.totalCount = 0;
        this.searchData = '';
        this.numberOfSections = new Array(this.configService.appConfig.SEARCH.PAGE_LIMIT);
        this.queryParam = {};
        this.showEditUserDetailsPopup = true;
        this.limit = 50;
        this.config = config;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.paginationDetails = this.paginationService.getPager(0, 1, this.configService.appConfig.SEARCH.PAGE_LIMIT);
    }
    ObservationListingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, metaData, returnData, queryParam;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.initLayout();
                        _a = this;
                        return [4, this.observationUtil.getProfileInfo()];
                    case 1:
                        _a.showEditUserDetailsPopup = _b.sent();
                        if (!!this.showEditUserDetailsPopup) return [3, 3];
                        metaData = this.observationUtil.getAlertMetaData();
                        metaData.type = 'update profile';
                        metaData.isClosed = true;
                        metaData.size = 'mini';
                        metaData.content.title = this.resourceService.frmelmnts.lbl.updateProfileTitle;
                        metaData.content.body.type = 'text';
                        metaData.content.body.data = this.resourceService.frmelmnts.lbl.updateprofilecontent;
                        metaData.footer.className = 'single-btn';
                        metaData.footer.buttons.push({
                            type: 'accept',
                            returnValue: true,
                            buttonText: this.resourceService.frmelmnts.btn.update,
                            className: 'popup-btn'
                        });
                        return [4, this.observationUtil.showPopupAlert(metaData)];
                    case 2:
                        returnData = _b.sent();
                        if (returnData) {
                            queryParam = {
                                showEditUserDetailsPopup: true
                            };
                            this.router.navigate(['profile'], { queryParams: queryParam });
                        }
                        return [2];
                    case 3:
                        this.activatedRoute.queryParams.subscribe(function (params) {
                            if (params['key']) {
                                _this.searchData = params['key'];
                                return _this.fetchContentList();
                            }
                            _this.searchData = '';
                            _this.fetchContentList();
                        });
                        this.listenLanguageChange();
                        return [2];
                }
            });
        });
    };
    ObservationListingComponent.prototype.getProfileCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.observationUtil.getProfileInfo()
                            .then(function (result) {
                            return result;
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ObservationListingComponent.prototype.listenLanguageChange = function () {
        var _this = this;
        this.resourceService.languageSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (languageData) {
            _this.setNoResultMessage();
        });
    };
    ObservationListingComponent.prototype.setNoResultMessage = function () {
        var noContentfoundSubTitle = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'frmelmnts.lbl').noContentfoundSubTitle;
        var title = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'messages.stmsg.m0006');
        this.noResultMessage = { title: title, noContentfoundSubTitle: noContentfoundSubTitle };
    };
    ObservationListingComponent.prototype.getDataParam = function () {
        var _this = this;
        this.observationUtil.getProfileDataList()
            .then(function (result) {
            _this.payload = result;
        });
    };
    ObservationListingComponent.prototype.back = function () {
        this.location.back();
    };
    ObservationListingComponent.prototype.fetchContentList = function (page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var paramOption;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getDataParam()];
                    case 1:
                        _a.sent();
                        paramOption = {
                            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_LISTING,
                            param: { page: page, limit: this.limit, search: this.searchData },
                            data: this.payload
                        };
                        this.kendraService.post(paramOption).subscribe(function (data) {
                            _this.totalCount = data.result.count;
                            _this.paginationDetails.currentPage = page;
                            _this.paginationDetails = _this.paginationService.getPager(data.result.count, _this.paginationDetails.currentPage, _this.limit);
                            _this.setFormat(data.result.data);
                        }, function (error) { });
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                        return [2];
                }
            });
        });
    };
    ObservationListingComponent.prototype.navigateToPage = function (page) {
        if (page < 1 || page > this.paginationDetails.totalPages) {
            return;
        }
        this.fetchContentList(page);
    };
    ObservationListingComponent.prototype.setFormat = function (data) {
        var _this = this;
        var result = [];
        this.contentList = [];
        data.forEach(function (value) {
            var solution_name = value.name;
            solution_name = (solution_name && solution_name.length) ? solution_name[0].toUpperCase() + solution_name.slice(1) : '';
            var subject = [];
            subject.push(value.programName);
            var obj = {
                name: solution_name,
                contentType: 'Observation',
                metaData: {
                    identifier: value.solutionId,
                },
                identifier: value.solutionId,
                solutionId: value.solutionId,
                programId: value.programId,
                medium: value.language,
                organization: value.creator,
                _id: value._id,
                subject: subject
            };
            if (value.creator && value.creator.length) {
                var creator = [];
                creator.push(value.creator);
                obj['gradeLevel'] = creator;
            }
            result.push(obj);
            _this.contentList = result;
        });
        this.showLoader = false;
    };
    ObservationListingComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.redoLayout();
        this.layoutService
            .switchableLayout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
            _this.redoLayout();
        });
    };
    ObservationListingComponent.prototype.redoLayout = function () {
        if (this.layoutConfiguration != null) {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__["COLUMN_TYPE"].threeToNine, true);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__["COLUMN_TYPE"].threeToNine, true);
        }
        else {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__["COLUMN_TYPE"].fullLayout);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__["COLUMN_TYPE"].fullLayout);
        }
    };
    ObservationListingComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ObservationListingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setTelemetryData();
        });
    };
    ObservationListingComponent.prototype.setTelemetryData = function () {
        this.inViewLogs = [];
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.userService.slug
                    ? '/' + this.userService.slug + this.router.url
                    : this.router.url,
                subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
                duration: this.navigationhelperService.getPageLoadTime(),
            },
        };
        this.cardIntractEdata = {
            id: 'content-card',
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
        };
    };
    ObservationListingComponent.prototype.playContent = function (event) {
        var data = event.data;
        this.queryParam = {
            programId: data.programId,
            solutionId: data.solutionId,
            observationId: data._id,
            solutionName: data.name,
            programName: data.subject[0]
        };
        this.router.navigate(['observation/details'], {
            queryParams: this.queryParam,
        });
    };
    ObservationListingComponent.prototype.inView = function (event) {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](event.inview, function (elem, key) {
            var obj = lodash_es__WEBPACK_IMPORTED_MODULE_5__["find"](_this.inViewLogs, {
                objid: elem.data.metaData.identifier,
            });
            if (!obj) {
                _this.inViewLogs.push({
                    objid: elem.data.metaData.identifier,
                    objtype: elem.data.metaData.contentType || 'content',
                    index: elem.id,
                });
            }
        });
        if (this.telemetryImpression) {
            this.telemetryImpression.edata.visits = this.inViewLogs;
            this.telemetryImpression.edata.subtype = 'pageexit';
            this.telemetryImpression = Object.assign({}, this.telemetryImpression);
        }
    };
    return ObservationListingComponent;
}());



/***/ }),

/***/ "ORTf":
/*!*********************************************************!*\
  !*** ./src/app/modules/observation/components/index.ts ***!
  \*********************************************************/
/*! exports provided: ObservationListingComponent, ObservationDetailsComponent, AddEntityComponent, SubmissionsComponent, EntityListComponent, EditSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observation_listing_observation_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation-listing/observation-listing.component */ "NOlU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservationListingComponent", function() { return _observation_listing_observation_listing_component__WEBPACK_IMPORTED_MODULE_0__["ObservationListingComponent"]; });

/* harmony import */ var _observation_details_observation_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-details/observation-details.component */ "xzAq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservationDetailsComponent", function() { return _observation_details_observation_details_component__WEBPACK_IMPORTED_MODULE_1__["ObservationDetailsComponent"]; });

/* harmony import */ var _add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entity/add-entity.component */ "LUDo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddEntityComponent", function() { return _add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_2__["AddEntityComponent"]; });

/* harmony import */ var _submissions_submission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submissions/submission.component */ "Oq+Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionsComponent", function() { return _submissions_submission_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionsComponent"]; });

/* harmony import */ var _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-list/entity-list.component */ "1406");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_4__["EntityListComponent"]; });

/* harmony import */ var _edit_submission_edit_submission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-submission/edit-submission.component */ "zm5l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditSubmissionComponent", function() { return _edit_submission_edit_submission_component__WEBPACK_IMPORTED_MODULE_5__["EditSubmissionComponent"]; });









/***/ }),

/***/ "Oq+Q":
/*!************************************************************************************!*\
  !*** ./src/app/modules/observation/components/submissions/submission.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsComponent", function() { return SubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
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


var SubmissionsComponent = (function () {
    function SubmissionsComponent(resourceService) {
        this.resourceService = resourceService;
        this.showPopOver = true;
        this.selectedSubmission = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
        this.actions = [{
                name: this.resourceService.frmelmnts.lbl.edit,
                icon: 'pencil alternate large icon',
                type: 'edit'
            },
            {
                name: this.resourceService.frmelmnts.lbl.delete,
                icon: 'trash  large icon',
                type: 'delete'
            }];
    }
    SubmissionsComponent.prototype.ngOnInit = function () { };
    SubmissionsComponent.prototype.open = function (sbnum, data) {
        data.submissionNumber = sbnum;
        this.selectedSubmission.emit(data);
    };
    SubmissionsComponent.prototype.actionEvent = function (data, type) {
        this.onAction.emit({ action: type, data: __assign(__assign({}, data), { submissionId: this.submission._id }) });
    };
    return SubmissionsComponent;
}());



/***/ }),

/***/ "RG7s":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-listing/observation-listing.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".sb-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));\n  grid-gap: 1rem;\n  grid-row-gap: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL29ic2VydmF0aW9uLWxpc3Rpbmcvb2JzZXJ2YXRpb24tbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL29ic2VydmF0aW9uLWxpc3Rpbmcvb2JzZXJ2YXRpb24tbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYi1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMjUycHgsMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAxLjVyZW07XG4gICAgJi0taXRlbXtcbiAgICAgICAgXG4gICAgfVxufSJdfQ== */"];



/***/ }),

/***/ "TpJT":
/*!*******************************************************************!*\
  !*** ./src/app/modules/observation/observation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ObservationRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationRoutingModule", function() { return ObservationRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "ORTf");


var telemetryEnv = 'observation';
var ɵ0 = {
    telemetry: { env: telemetryEnv, pageid: 'observation-list', type: 'view' },
}, ɵ1 = {
    telemetry: { env: telemetryEnv, pageid: 'observation-details', type: 'view' },
    menuBar: {
        visible: false
    }
};
var routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["ObservationListingComponent"],
        data: ɵ0
    },
    {
        path: 'details',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["ObservationDetailsComponent"],
        data: ɵ1
    }
];
var ObservationRoutingModule = (function () {
    function ObservationRoutingModule() {
    }
    return ObservationRoutingModule;
}());




/***/ }),

/***/ "dqjh":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/edit-submission/edit-submission.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_EditSubmissionComponent, View_EditSubmissionComponent_0, View_EditSubmissionComponent_Host_0, EditSubmissionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EditSubmissionComponent", function() { return RenderType_EditSubmissionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditSubmissionComponent_0", function() { return View_EditSubmissionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EditSubmissionComponent_Host_0", function() { return View_EditSubmissionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubmissionComponentNgFactory", function() { return EditSubmissionComponentNgFactory; });
/* harmony import */ var _edit_submission_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-submission.component.scss.shim.ngstyle */ "xbQq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _edit_submission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-submission.component */ "zm5l");









var styles_EditSubmissionComponent = [_edit_submission_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EditSubmissionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EditSubmissionComponent, data: {} });

function View_EditSubmissionComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.editData == null) ? null : _co.editData.subTitle); _ck(_v, 1, 0, currVal_0); }); }
function View_EditSubmissionComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "input", [["class", "edit-sub-input"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.updatedValue = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.updatedValue; _ck(_v, 6, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_EditSubmissionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "sb-mat__modal sb-onboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "flex-jc-center mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "sb-onboard__header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EditSubmissionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EditSubmissionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 9, "mat-dialog-actions", [["class", "mb-0 sb-mat__modal__actions flex-jc-center mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "div", [["class", "sb-onboard__footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", " ui sb-btn sb-btn-sm sb-btn-white text-uppercase flex-basis-1"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "div", [["class", "w-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "button", [["class", "ui sb-btn sb-btn-sm sb-btn-primary text-uppercase flex-basis-1"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](20, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_2 = ((_co.editData == null) ? null : _co.editData.subTitle); _ck(_v, 7, 0, currVal_2); var currVal_5 = "close dialog"; var currVal_6 = ""; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_7 = _co.editData; _ck(_v, 11, 0, currVal_7); var currVal_10 = "ui sb-btn sb-btn-sm sb-btn-primary text-uppercase flex-basis-1"; var currVal_11 = _ck(_v, 20, 0, !_co.updatedValue); _ck(_v, 19, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.editData == null) ? null : _co.editData.title); _ck(_v, 5, 0, currVal_1); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ariaLabel || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).type; _ck(_v, 8, 0, currVal_3, currVal_4); var currVal_8 = ((_co.editData == null) ? null : _co.editData.leftBtnText); _ck(_v, 16, 0, currVal_8); var currVal_9 = !_co.updatedValue; _ck(_v, 18, 0, currVal_9); var currVal_12 = ((_co.editData == null) ? null : _co.editData.rightBtnText); _ck(_v, 21, 0, currVal_12); }); }
function View_EditSubmissionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, [[1, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_EditSubmissionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, false, "small"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_EditSubmissionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-edit-submission", [], null, null, null, View_EditSubmissionComponent_0, RenderType_EditSubmissionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _edit_submission_component__WEBPACK_IMPORTED_MODULE_8__["EditSubmissionComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EditSubmissionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-edit-submission", _edit_submission_component__WEBPACK_IMPORTED_MODULE_8__["EditSubmissionComponent"], View_EditSubmissionComponent_Host_0, { editData: "editData" }, { onAction: "onAction" }, []);



/***/ }),

/***/ "tn6C":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/submissions/submission.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".submissions[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  margin: 0.5rem 0;\n}\n.submissions[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.submissions[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n.submissions[_ngcontent-%COMP%]   .evidences-list[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n  background: var(--sbt-compt-bg) !important;\n  border-radius: var(--sbt-bradius-24);\n  padding: 8px 24px;\n}\n[_nghost-%COMP%]     .ui.styled.accordion .title {\n  background: var(--sb-card-bg) !important;\n}\n[_nghost-%COMP%]     .ui.dropdown .menu > .item {\n  color: var(--sb-linkmenu-text);\n}\n[_nghost-%COMP%]     .ui.dropdown .menu {\n  background: var(--sb-card-bg);\n}\n.content-submission[_ngcontent-%COMP%] {\n  background: var(--sb-card-bg) !important;\n  padding: 1rem 1.5rem !important;\n  border-radius: var(--sbt-bradius-24);\n}\n.content-submission[_ngcontent-%COMP%]   .txt-transform[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n.icon[_ngcontent-%COMP%] {\n  color: var(--primary-400) !important;\n  padding-left: 15px;\n}\n.center-align[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  padding: 5px 0;\n}\n.white-space-wrap[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL3N1Ym1pc3Npb25zL3N1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7QUFHUTtFQUNJLDRCQUFBO0FBRFo7QUFNSTtFQUNJLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQVNJO0VBQ0ksd0NBQUE7QUFOUjtBQVNJO0VBQ0ksOEJBQUE7QUFQUjtBQVVJO0VBQ0ksNkJBQUE7QUFSUjtBQVlBO0VBQ0ksd0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FBVEo7QUFXSTtFQUNJLHFDQUFBO0FBVFI7QUFhQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQWFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWFBO0VBQ0ksdUJBQUE7QUFWSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb2JzZXJ2YXRpb24vY29tcG9uZW50cy9zdWJtaXNzaW9ucy9zdWJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pc3Npb25zIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG5cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duIHtcbiAgICAgICAgLmVsbGlwc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZXZpZGVuY2VzLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNidC1jb21wdC1iZykgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2J0LWJyYWRpdXMtMjQpO1xuICAgICAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnVpLnN0eWxlZC5hY2NvcmRpb24gLnRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2ItY2FyZC1iZykgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudWkuZHJvcGRvd24gLm1lbnU+Lml0ZW0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2ItbGlua21lbnUtdGV4dCk7XG4gICAgfVxuXG4gICAgLnVpLmRyb3Bkb3duIC5tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2ItY2FyZC1iZyk7XG4gICAgfVxufVxuXG4uY29udGVudC1zdWJtaXNzaW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1jYXJkLWJnKSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2J0LWJyYWRpdXMtMjQpO1xuXG4gICAgLnR4dC10cmFuc2Zvcm0ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLndoaXRlLXNwYWNlLXdyYXAge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"];



/***/ }),

/***/ "xbQq":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/edit-submission/edit-submission.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".header[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: var(--sb-modal-content-bg);\n  color: var(--sb-linkmenu-text);\n}\n\n.edit-sub-input[_ngcontent-%COMP%], input.edit-sub-input[_ngcontent-%COMP%]:focus-visible {\n  width: 100%;\n  height: 2rem;\n  padding: 10px;\n  border: 0 !important;\n  background: transparent;\n  border-bottom: 2px solid var(--primary-color) !important;\n  color: var(--body-color);\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  border: none;\n  background: var(--sb-modal-content-bg);\n}\n\n.ui.small.modal[_ngcontent-%COMP%] {\n  width: 40% !important;\n}\n\n.sb-onboard__header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0px;\n  padding-left: 15px;\n}\n\n.sb-onboard__content[_ngcontent-%COMP%] {\n  width: calculateRem(648px);\n  max-width: 100%;\n  margin-bottom: auto;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.sb-onboard__footer[_ngcontent-%COMP%] {\n  margin-top: calculateRem(16px);\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vYnNlcnZhdGlvbi9jb21wb25lbnRzL2VkaXQtc3VibWlzc2lvbi9lZGl0LXN1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUNBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3REFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb2JzZXJ2YXRpb24vY29tcG9uZW50cy9lZGl0LXN1Ym1pc3Npb24vZWRpdC1zdWJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLW1vZGFsLWNvbnRlbnQtYmcpO1xuICBjb2xvcjogdmFyKC0tc2ItbGlua21lbnUtdGV4dCk7XG59XG4uZWRpdC1zdWItaW5wdXQsXG5pbnB1dC5lZGl0LXN1Yi1pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItbW9kYWwtY29udGVudC1iZyk7XG59XG5cbi51aS5zbWFsbC5tb2RhbCB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbn1cblxuLnNiLW9uYm9hcmQge1xuICAmX19oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0IDogMTVweDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNjQ4cHgpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gICZfX2Zvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"];



/***/ }),

/***/ "xzAq":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/observation/components/observation-details/observation-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ObservationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationDetailsComponent", function() { return ObservationDetailsComponent; });
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ObservationDetailsComponent = (function () {
    function ObservationDetailsComponent(observationService, config, router, routerParam, resourceService, observationUtilService, layoutService, location, toasterService) {
        var _this = this;
        this.observationService = observationService;
        this.router = router;
        this.routerParam = routerParam;
        this.resourceService = resourceService;
        this.observationUtilService = observationUtilService;
        this.layoutService = layoutService;
        this.location = location;
        this.toasterService = toasterService;
        this.selectedEntity = {};
        this.actions = [{
                name: this.resourceService.frmelmnts.lbl.edit,
                icon: 'pencil alternate large icon',
                type: 'edit'
            },
            {
                name: this.resourceService.frmelmnts.lbl.delete,
                icon: 'trash  large icon',
                type: 'delete'
            }];
        this.showDownloadModal = false;
        this.openEditModal = { show: false, data: null };
        this.showLoader = false;
        this.noResultMessageForEntity = {
            'messageText': 'frmelmnts.msg.noEntityFound'
        };
        this.courseHierarchy = {};
        this.config = config;
        routerParam.queryParams.subscribe(function (data) {
            _this.programId = data.programId;
            _this.solutionId = data.solutionId;
            _this.observationId = data.observationId;
            _this.solution = data.solutionName;
            _this.programName = data.programName;
        });
    }
    ObservationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout()
            .subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
        this.getProfileData();
    };
    ObservationDetailsComponent.prototype.getProfileData = function () {
        var _this = this;
        this.observationUtilService.getProfileDataList().then(function (data) {
            _this.payload = data;
            _this.getEntities();
        }, function (error) {
        });
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    ObservationDetailsComponent.prototype.getEntities = function () {
        var _this = this;
        this.showLoader = true;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_ENTITIES,
            param: {
                solutionId: this.solutionId,
            },
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.showLoader = false;
            if (data.result) {
                _this.entities = data.result;
                if (!_this.selectedEntity._id && data.result.entities && data.result.entities.length) {
                    _this.selectedEntity = _this.entities.entities[0];
                }
                _this.observationId = _this.entities._id;
                _this.getObservationForm();
            }
            else {
                _this.entities = [];
            }
            if (data.result && data.result.license) {
                _this.courseHierarchy = data.result.license;
            }
        }, function (error) {
            _this.showLoader = false;
        });
    };
    ObservationDetailsComponent.prototype.getObservationForm = function () {
        var _this = this;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.GET_OBSERVATION_SUBMISSIONS + (this.observationId + "?entityId=" + this.selectedEntity._id),
            param: {},
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.showLoader = false;
            _this.submissions = data.result;
            if (!_this.submissions.length && !_this.entities.allowMultipleAssessemts) {
                _this.observeAgain();
            }
        }, function (error) {
            _this.showLoader = false;
        });
    };
    ObservationDetailsComponent.prototype.actionOnEntity = function (event) {
        if (event.action == 'delete') {
            this.delete(event.data);
        }
        else if (event.action == 'change') {
            this.changeEntity(event.data);
        }
    };
    ObservationDetailsComponent.prototype.addEntity = function () {
        this.showDownloadModal = true;
    };
    ObservationDetailsComponent.prototype.changeEntity = function (event) {
        this.selectedEntity = event;
        this.getObservationForm();
    };
    ObservationDetailsComponent.prototype.modalClose = function () {
        this.showDownloadModal = false;
        this.getEntities();
    };
    ObservationDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ObservationDetailsComponent.prototype.observeAgainConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, returnData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.observationUtilService.getAlertMetaData()];
                    case 1:
                        metaData = _a.sent();
                        metaData.content.body.data = this.resourceService.frmelmnts.lbl.createObserveAgain;
                        metaData.content.body.type = 'text';
                        metaData.content.title = this.resourceService.frmelmnts.btn.observeAgain;
                        metaData.size = 'mini';
                        metaData.footer.buttons.push({
                            type: 'cancel',
                            returnValue: false,
                            buttonText: this.resourceService.frmelmnts.btn.no
                        });
                        metaData.footer.buttons.push({
                            type: 'accept',
                            returnValue: true,
                            buttonText: this.resourceService.frmelmnts.btn.yes
                        });
                        metaData.footer.className = 'double-btn';
                        return [4, this.observationUtilService.showPopupAlert(metaData)];
                    case 2:
                        returnData = _a.sent();
                        returnData ? this.observeAgain() : '';
                        return [2];
                }
            });
        });
    };
    ObservationDetailsComponent.prototype.observeAgain = function () {
        var _this = this;
        this.showLoader = true;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_SUBMISSION_CREATE + (this.observationId + "?entityId=" + this.selectedEntity._id),
            param: {},
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.showLoader = false;
            _this.getEntities();
        }, function (error) {
            _this.showLoader = false;
        });
    };
    ObservationDetailsComponent.prototype.redirectToQuestions = function (evidence) {
        this.router.navigate(["/questionnaire"], {
            queryParams: {
                observationId: this.observationId,
                entityId: this.selectedEntity._id,
                submissionNumber: evidence.submissionNumber,
                evidenceCode: evidence.code,
            },
        });
    };
    ObservationDetailsComponent.prototype.open = function (sbnum, data) {
        data.submissionNumber = sbnum;
        this.redirectToQuestions(data);
    };
    ObservationDetailsComponent.prototype.delete = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, returnData, paramOptions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.observationUtilService.getAlertMetaData()];
                    case 1:
                        metaData = _a.sent();
                        metaData.content.body.data = this.resourceService.frmelmnts.lbl.deleteConfirm;
                        metaData.content.body.type = 'text';
                        metaData.content.title = this.resourceService.frmelmnts.btn.delete;
                        metaData.size = 'mini';
                        metaData.footer.buttons.push({
                            type: 'cancel',
                            returnValue: false,
                            buttonText: this.resourceService.frmelmnts.btn.no
                        });
                        metaData.footer.buttons.push({
                            type: 'accept',
                            returnValue: true,
                            buttonText: this.resourceService.frmelmnts.btn.yes
                        });
                        metaData.footer.className = 'double-btn';
                        return [4, this.observationUtilService.showPopupAlert(metaData)];
                    case 2:
                        returnData = _a.sent();
                        if (returnData) {
                            this.showLoader = true;
                            this.payload.data = [
                                entity._id
                            ];
                            paramOptions = {
                                url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_UPDATE_ENTITES + this.observationId,
                                param: {},
                                data: this.payload,
                            };
                            if (this.selectedEntity._id == entity._id) {
                                this.selectedEntity = {};
                            }
                            this.observationService.delete(paramOptions).subscribe(function (data) {
                                _this.showLoader = false;
                                _this.getEntities();
                            }, function (error) {
                                _this.showLoader = false;
                            });
                        }
                        return [2];
                }
            });
        });
    };
    ObservationDetailsComponent.prototype.openEditSubmission = function (event) {
        var _a, _b, _c, _d, _e, _f;
        this.openEditModal.data = {
            title: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.instanceName,
            defaultValue: event.title,
            leftBtnText: (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.btn) === null || _d === void 0 ? void 0 : _d.cancel,
            rightBtnText: (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.btn) === null || _f === void 0 ? void 0 : _f.update,
            action: 'submissionTitleUpdate',
            returnParams: { submissionId: event._id }
        };
        this.openEditModal.show = true;
    };
    ObservationDetailsComponent.prototype.deleteSubmission = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, returnData, config;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.observationUtilService.getAlertMetaData()];
                    case 1:
                        metaData = _a.sent();
                        metaData.content.body.data = this.resourceService.frmelmnts.lbl.deleteSubmission;
                        metaData.content.body.type = 'text';
                        metaData.content.title = this.resourceService.frmelmnts.btn.delete;
                        metaData.size = 'mini';
                        metaData.footer.buttons.push({
                            type: 'cancel',
                            returnValue: false,
                            buttonText: this.resourceService.frmelmnts.btn.no
                        });
                        metaData.footer.buttons.push({
                            type: 'accept',
                            returnValue: true,
                            buttonText: this.resourceService.frmelmnts.btn.yes
                        });
                        metaData.footer.className = 'double-btn';
                        return [4, this.observationUtilService.showPopupAlert(metaData)];
                    case 2:
                        returnData = _a.sent();
                        if (returnData) {
                            config = {
                                url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_SUBMISSION_UPDATE + ("" + event._id),
                                param: {},
                                payload: this.payload,
                            };
                            this.observationService.delete(config).subscribe(function (data) {
                                _this.getObservationForm();
                            }, function (error) {
                                _this.toasterService.error(error.error.message);
                            });
                        }
                        return [2];
                }
            });
        });
    };
    ObservationDetailsComponent.prototype.closeEditModal = function (event) {
        this.openEditModal.show = false;
        if (!event.data) {
            return;
        }
        if (event.action === 'submissionTitleUpdate') {
            this.updateSubmission(event);
        }
        if (event.action === 'markEcmNotApplicable') {
            this.markEcmNotApplicable(event);
        }
    };
    ObservationDetailsComponent.prototype.updateSubmission = function (event) {
        var _this = this;
        this.showLoader = true;
        this.payload.title = event.data;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_SUBMISSION_UPDATE + event.returnParams.submissionId,
            param: {},
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.showLoader = false;
            _this.getEntities();
        }, function (error) {
            _this.showLoader = false;
        });
    };
    ObservationDetailsComponent.prototype.actionOnSubmission = function (event) {
        if (event.action == 'markEcmNotApplicable') {
            this.markEcmNotApplicableRemark(event.data);
            return;
        }
        event.action == 'edit' ? this.openEditSubmission(event.data) : this.deleteSubmission(event.data);
    };
    ObservationDetailsComponent.prototype.dropDownAction = function (submission, type) {
        var data = {
            action: type,
            data: submission
        };
        this.actionOnSubmission(data);
    };
    ObservationDetailsComponent.prototype.markEcmNotApplicableRemark = function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (e.notApplicable) {
            var metaData = this.observationUtilService.getAlertMetaData();
            metaData.content.body.data = this.resourceService.frmelmnts.lbl.allReadyNotApplicable;
            metaData.content.body.type = 'text';
            metaData.content.title = this.resourceService.frmelmnts.lbl.allReadyNotApplicableTitle;
            metaData.size = 'small';
            metaData.footer.buttons.push({
                type: 'cancel',
                returnValue: false,
                buttonText: 'Go back',
            });
            metaData.footer.className = 'double-btn';
            this.observationUtilService.showPopupAlert(metaData);
            return;
        }
        this.openEditModal.data = {
            title: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.notApplicable,
            subTitle: (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.notApplicableRemark,
            leftBtnText: (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.btn) === null || _f === void 0 ? void 0 : _f.goBack,
            rightBtnText: (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.btn) === null || _h === void 0 ? void 0 : _h.save,
            action: 'markEcmNotApplicable',
            returnParams: { submissionId: e.submissionId, code: e.code }
        };
        this.openEditModal.show = true;
    };
    ObservationDetailsComponent.prototype.markEcmNotApplicable = function (event) {
        var _this = this;
        var payload = {
            evidence: {},
        };
        var evidence = {
            externalId: event.returnParams.code,
            notApplicable: true,
            remarks: event.data
        };
        payload.evidence = evidence;
        var profile = this.observationUtilService.getProfileDataList();
        if (!profile) {
            return;
        }
        payload = __assign(__assign({}, profile), payload);
        var submissionId = event.returnParams.submissionId;
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_SUBMISSION_UPDATE +
                ("" + submissionId),
            data: payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            try {
                _this.submissions.find(function (sub) {
                    if (sub._id == event.returnParams.submissionId) {
                        sub.evidencesStatus.find(function (evidence) {
                            if (evidence.code == event.returnParams.code) {
                                evidence.notApplicable = true;
                                evidence.status = 'completed';
                            }
                        });
                    }
                });
            }
            catch (error) {
            }
        }, function (error) {
        });
    };
    return ObservationDetailsComponent;
}());



/***/ }),

/***/ "zm5l":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/observation/components/edit-submission/edit-submission.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubmissionComponent", function() { return EditSubmissionComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var EditSubmissionComponent = (function () {
    function EditSubmissionComponent(location) {
        var _this = this;
        this.location = location;
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.location.onPopState(function () {
            if (_this.modal && _this.modal.deny) {
                _this.modal.deny();
            }
        });
    }
    EditSubmissionComponent.prototype.ngOnInit = function () {
        if (this.editData.defaultValue) {
            this.updatedValue = this.editData.defaultValue;
        }
    };
    EditSubmissionComponent.prototype.closeModal = function () {
        if (this.modal && this.modal.deny) {
            this.modal.deny();
        }
        this.onAction.emit({ action: this.editData.action, data: null });
    };
    EditSubmissionComponent.prototype.submit = function () {
        if (this.modal && this.modal.deny) {
            this.modal.deny();
        }
        this.onAction.emit({ action: this.editData.action, data: this.updatedValue, returnParams: this.editData.returnParams });
    };
    return EditSubmissionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~explore-page-explore-page-module-ngfactory~modules-observation-observation-module-ngfactory.js.map