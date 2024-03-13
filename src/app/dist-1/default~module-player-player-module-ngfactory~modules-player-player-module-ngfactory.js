(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-player-player-module-ngfactory~modules-player-player-module-ngfactory"],{

/***/ "0g+F":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/collection-player/collection-player.component.ngfactory.js ***!
  \**************************************************************************************************************/
/*! exports provided: RenderType_CollectionPlayerComponent, View_CollectionPlayerComponent_0, View_CollectionPlayerComponent_Host_0, CollectionPlayerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CollectionPlayerComponent", function() { return RenderType_CollectionPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CollectionPlayerComponent_0", function() { return View_CollectionPlayerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CollectionPlayerComponent_Host_0", function() { return View_CollectionPlayerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPlayerComponentNgFactory", function() { return CollectionPlayerComponentNgFactory; });
/* harmony import */ var _collection_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-player.component.scss.shim.ngstyle */ "jHUg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/directives/permission/permission.directive */ "aRTg");
/* harmony import */ var _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/add-to-group/add-to-group.directive */ "7aMg");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_activity_dashboard_activity_dashboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/activity-dashboard/activity-dashboard.service */ "XBEe");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../player-helper/components/contentplayer-page/contentplayer-page.component.ngfactory */ "S/RL");
/* harmony import */ var _player_helper_components_contentplayer_page_contentplayer_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../player-helper/components/contentplayer-page/contentplayer-page.component */ "uM3J");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _player_helper_components_content_chapterlist_content_chapterlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../player-helper/components/content-chapterlist/content-chapterlist.component.ngfactory */ "HfFN");
/* harmony import */ var _player_helper_components_content_chapterlist_content_chapterlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../player-helper/components/content-chapterlist/content-chapterlist.component */ "7MCS");
/* harmony import */ var _player_helper_components_content_licence_content_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../player-helper/components/content-licence/content-licence.component.ngfactory */ "omXM");
/* harmony import */ var _player_helper_components_content_licence_content_licence_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../player-helper/components/content-licence/content-licence.component */ "FXgK");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component.ngfactory */ "kasK");
/* harmony import */ var _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component */ "DJnx");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _telemetry_directives_telemetry_start_telemetry_start_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-start/telemetry-start.directive */ "QUCn");
/* harmony import */ var _telemetry_directives_telemetry_end_telemetry_end_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-end/telemetry-end.directive */ "wlDG");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _collection_player_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./collection-player.component */ "DfIe");
/* harmony import */ var _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../core/services/player/player.service */ "ikcW");
/* harmony import */ var _shared_services_window_scroll_window_scroll_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/services/window-scroll/window-scroll.service */ "b1H8");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _core_services_copy_content_copy_content_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../core/services/copy-content/copy-content.service */ "4KAb");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var _shared_services_exturl_util_exturl_util_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../shared/services/exturl-util/exturl-util.service */ "/O/T");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _core_services_generalisedLable_generaliseLable_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../core/services/generalisedLable/generaliseLable.service */ "2EPz");
/* harmony import */ var _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../core/services/course/course.service */ "hK/R");
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../shared/services/offline-card-service/offline-card.service */ "vzIX");





















































var styles_CollectionPlayerComponent = [_collection_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CollectionPlayerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CollectionPlayerComponent, data: {} });

function View_CollectionPlayerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.board)); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot-divider"]], null, null, null, null, null))], null, null); }
function View_CollectionPlayerComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.medium)); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot-divider"]], null, null, null, null, null))], null, null); }
function View_CollectionPlayerComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.gradeLevel)); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "content-header__info mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.board)); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.medium)); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.medium)); _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.gradeLevel)); _ck(_v, 8, 0, currVal_3); var currVal_4 = ((_co.collectionTreeNodes == null) ? null : ((_co.collectionTreeNodes.data == null) ? null : _co.collectionTreeNodes.data.gradeLevel)); _ck(_v, 10, 0, currVal_4); }, null); }
function View_CollectionPlayerComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateCollection(_co.collectionData) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.updateTextbook)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["tabindex", "0"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.logTelemetry("confirm-delete-collection");
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disableDelete; _ck(_v, 0, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.deleteBook)))); _ck(_v, 1, 0, currVal_1); }); }
function View_CollectionPlayerComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.exportCollection(_co.collectionData) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.saveToPenDrive))); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.isYoutubeContentPresent(_co.collectionData) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.downloadBook)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.downloading))); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-outline-primary sb-btn-normal mr-8"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.downloadingPaused)); _ck(_v, 1, 0, currVal_0); }); }
function View_CollectionPlayerComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.isConnected && _co.checkStatus("DOWNLOADED")) && _co.showUpdate); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.checkStatus("DOWNLOADED"); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.checkStatus("DOWNLOADED"); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.checkStatus("DOWNLOAD"); _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.checkStatus("DOWNLOADING"); _ck(_v, 10, 0, currVal_4); var currVal_5 = _co.checkStatus("PAUSED"); _ck(_v, 12, 0, currVal_5); }, null); }
function View_CollectionPlayerComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.onShareLink();
        var pd_0 = ((_co.sharelinkModal = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "blue share alternate icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.share))); _ck(_v, 2, 0, currVal_0); }); }
function View_CollectionPlayerComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.copyContent(_co.collectionTreeNodes.data) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "blue clone outline icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collectionInteractObject; var currVal_1 = _co.copyContentInteractEdata; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 3, 0, "CONTENT_CREATOR", "CONTENT_REVIEWER"); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copy))); _ck(_v, 5, 0, currVal_3); }); }
function View_CollectionPlayerComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.copyContent(_co.collectionTreeNodes.data) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "blue clone outline icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collectionInteractObject; var currVal_1 = _co.copyContentInteractEdata; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 3, 0, "BOOK_CREATOR"); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copy))); _ck(_v, 5, 0, currVal_3); }); }
function View_CollectionPlayerComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["href", "javascript:void(0)"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.copyAsCourse() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "copy-clone"], ["class", "mr-4 pt-2"], ["src", "assets/images/copy-clone.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collectionInteractObject; var currVal_1 = _co.copyAsCourseInteractEdata; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 3, 0, "CONTENT_CREATOR"); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copyAsCourse))); _ck(_v, 5, 0, currVal_3); }); }
function View_CollectionPlayerComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["href", "javascript:void(0)"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.clearSelection() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collectionInteractObject; var currVal_1 = _co.cancelInteractEdata; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 3, 0, "CONTENT_CREATOR"); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 4, 0, currVal_3); }); }
function View_CollectionPlayerComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["href", "javascript:void(0)"], ["tabindex", "0"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.createCourse() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "sb-btn-disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_2 = _ck(_v, 2, 0, !(_co.selectedItems.length > 0)); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.collectionInteractObject; var currVal_4 = _co.createCourseInteractEdata; _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_5 = _ck(_v, 5, 0, "CONTENT_CREATOR"); _ck(_v, 4, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !(_co.selectedItems.length > 0); _ck(_v, 0, 0, currVal_0); var currVal_6 = ((_co.generaliseLabelService == null) ? null : ((_co.generaliseLabelService.frmelmnts == null) ? null : ((_co.generaliseLabelService.frmelmnts.btn == null) ? null : _co.generaliseLabelService.frmelmnts.btn.create))); _ck(_v, 6, 0, currVal_6); }); }
function View_CollectionPlayerComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "certified-course__btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "button", [["appAddToGroup", ""], ["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).clickEvent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, "CS_GROUP_SERVICE", _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_8__["csGroupServiceFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 81920, null, 0, _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_8__["AddToGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], "CS_GROUP_SERVICE", _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _shared_services_activity_dashboard_activity_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["ActivityDashboardService"]], { pageId: [0, "pageId"], identifier: [1, "identifier"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.collectionData == null) ? null : ((_co.collectionData.primaryCategory == null) ? null : _co.collectionData.primaryCategory.toLowerCase())); var currVal_1 = ((_co.collectionData == null) ? null : _co.collectionData.identifier); _ck(_v, 3, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.AddtoGroup))); _ck(_v, 4, 0, currVal_2); }); }
function View_CollectionPlayerComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ui active inverted dimmer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "ui text centered inline loader mt-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.copycontent; _ck(_v, 2, 0, currVal_0); }); }
function View_CollectionPlayerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["class", "content-header flex-basis-1 ml-16 p-0 mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "content-header__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 18, "div", [["class", "d-flex flex-ai-end flex-w-wrap content-header__buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.collectionTreeNodes; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.isDesktopApp; _ck(_v, 9, 0, currVal_2); var currVal_3 = !_co.isCopyAsCourseClicked; _ck(_v, 11, 0, currVal_3); var currVal_4 = (((!_co.isDesktopApp && _co.permissionService.permissionAvailable) && (_co.collectionTreeNodes.data.contentType !== "TextBook")) && !_co.isCopyAsCourseClicked); _ck(_v, 13, 0, currVal_4); var currVal_5 = (((!_co.isDesktopApp && _co.permissionService.permissionAvailable) && (_co.collectionTreeNodes.data.contentType === "TextBook")) && !_co.isCopyAsCourseClicked); _ck(_v, 15, 0, currVal_5); var currVal_6 = (((!_co.isDesktopApp && _co.permissionService.permissionAvailable) && (_co.collectionTreeNodes.data.contentType === "TextBook")) && !_co.isCopyAsCourseClicked); _ck(_v, 17, 0, currVal_6); var currVal_7 = (((!_co.isDesktopApp && _co.permissionService.permissionAvailable) && (_co.collectionTreeNodes.data.contentType === "TextBook")) && _co.isCopyAsCourseClicked); _ck(_v, 19, 0, currVal_7); var currVal_8 = (((!_co.isDesktopApp && _co.permissionService.permissionAvailable) && (_co.collectionTreeNodes.data.contentType === "TextBook")) && _co.isCopyAsCourseClicked); _ck(_v, 21, 0, currVal_8); var currVal_9 = _co.isGroupAdmin; _ck(_v, 23, 0, currVal_9); var currVal_10 = (!_co.isDesktopApp && _co.showCopyLoader); _ck(_v, 25, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collectionData.name; _ck(_v, 4, 0, currVal_0); }); }
function View_CollectionPlayerComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "section", [["class", "sb-g-col-xs-12 sb-g-col-md-8 sb-g-col-lg-8 sb-g-col-xxxl-12 cc-player__video sb-toc-player-column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_13__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "app-contentplayer-page", [], null, null, null, _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ContentPlayerPageComponent_0"], _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ContentPlayerPageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, null, 0, _player_helper_components_contentplayer_page_contentplayer_page_component__WEBPACK_IMPORTED_MODULE_15__["ContentPlayerPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_19__["PublicPlayerService"]], { contentDetails: [0, "contentDetails"], collectionData: [1, "collectionData"], playerConfig: [2, "playerConfig"], tocPage: [3, "tocPage"], isContentPresent: [4, "isContentPresent"], objectRollUp: [5, "objectRollUp"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sb-g-col-xs-12 sb-g-col-md-8 sb-g-col-lg-8 sb-g-col-xxxl-12 cc-player__video sb-toc-player-column"; var currVal_1 = (_co.layoutConfiguration ? "" : "pt-16"); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.telemetryImpression; _ck(_v, 2, 0, currVal_2); var currVal_3 = _co.activeContent; var currVal_4 = _co.collectionData; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform(_co.playerConfig)); var currVal_6 = true; var currVal_7 = _co.isContentPresent; var currVal_8 = _co.objectRollUp; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
function View_CollectionPlayerComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "toc-box-shadow mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "sbselectpopover sbselectpopover--bg-white d-flex flex-ai-center p-16"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h6", [["class", "sb-color-primary font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "sb-checkbox sb-checkbox-rightaligned sb-checkbox-primary ml-auto m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "input", [["id", "checkbox"], ["name", "example"], ["tabindex", "0"], ["type", "checkbox"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectAllItem() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "mb-0 mr-0 sb-color-primary"], ["for", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sbselectpopover sbselectpopover--bg-white d-flex flex-ai-center p-16"; var currVal_1 = (_co.layoutConfiguration ? "" : "sb-bg-color-white"); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.generaliseLabelService == null) ? null : ((_co.generaliseLabelService.frmelmnts == null) ? null : ((_co.generaliseLabelService.frmelmnts.lbl == null) ? null : _co.generaliseLabelService.frmelmnts.lbl.selectContentFromCourse))); _ck(_v, 4, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectAll))); _ck(_v, 8, 0, currVal_3); }); }
function View_CollectionPlayerComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "section", [["class", "sb-g-col-xs-12 sb-g-col-md-4 sb-g-col-lg-4 sb-g-col-xxxl-4 cc-player__list mb-16 relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "toc-box-shadow mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "sb-library-filters", [], [[8, "hidden", 0]], [[null, "selectedMimeType"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedMimeType" === en)) {
        var pd_0 = (_co.selectedFilter($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_LibraryFiltersComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_LibraryFiltersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 573440, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_21__["LibraryFiltersComponent"], [], { tocList: [0, "tocList"], layout: [1, "layout"] }, { selectedMimeType: "selectedMimeType" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "main-side-toc-content"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "sb-toc-item", [["appTelemetryInteract", ""]], null, [[null, "tocCardClick"], [null, "noContent"], [null, "selectedItem"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("tocCardClick" === en)) {
        var pd_1 = (_co.tocCardClickHandler($event) !== false);
        ad = (pd_1 && ad);
    } if (("noContent" === en)) {
        var pd_2 = (_co.showNoContent($event) !== false);
        ad = (pd_2 && ad);
    } if (("selectedItem" === en)) {
        var pd_3 = (_co.handleSelectedItem($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_TocItemComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_TocItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_21__["MimeTypePipe"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_21__["MimeTypePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_3__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"], telemetryInteractCdata: [1, "telemetryInteractCdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4964352, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_21__["TocItemComponent"], [], { tocData: [0, "tocData"], activeMimeTypeFilter: [1, "activeMimeTypeFilter"], noContentMessage: [2, "noContentMessage"], selectMode: [3, "selectMode"], selectAll: [4, "selectAll"], platform: [5, "platform"], trackableDefaultImage: [6, "trackableDefaultImage"], type: [7, "type"], activeContent: [8, "activeContent"] }, { tocCardClick: "tocCardClick", noContent: "noContent", selectedItem: "selectedItem" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-content-chapterlist", [], null, [[null, "tocChapterClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tocChapterClick" === en)) {
        var pd_0 = (_co.tocChapterClickHandler($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _player_helper_components_content_chapterlist_content_chapterlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_ContentChapterlistComponent_0"], _player_helper_components_content_chapterlist_content_chapterlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_ContentChapterlistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 770048, null, 0, _player_helper_components_content_chapterlist_content_chapterlist_component__WEBPACK_IMPORTED_MODULE_23__["ContentChapterlistComponent"], [], { contentDetails: [0, "contentDetails"], activeContent: [1, "activeContent"] }, { tocChapterClick: "tocChapterClick" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "app-content-licence", [], null, null, null, _player_helper_components_content_licence_content_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_ContentLicenceComponent_0"], _player_helper_components_content_licence_content_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_ContentLicenceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, _player_helper_components_content_licence_content_licence_component__WEBPACK_IMPORTED_MODULE_25__["ContentLicenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"]], { content: [0, "content"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isCopyAsCourseClicked; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.mimeTypeFilters; var currVal_3 = "round-with-icon"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_5 = _co.tocTelemetryInteractEdata; var currVal_6 = _co.tocTelemetryInteractCdata; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_7 = _co.collectionData; var currVal_8 = _co.activeMimeTypeFilter; var currVal_9 = _co.noContentMessage; var currVal_10 = _co.isCopyAsCourseClicked; var currVal_11 = _co.selectAll; var currVal_12 = _co.PlatformType.PORTAL; var currVal_13 = "assets/images/mask-image/courses.svg"; var currVal_14 = _co.TocCardType.TRACKABLE; var currVal_15 = _co.activeContent; _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_17 = _co.collectionData; var currVal_18 = _co.activeContent; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_19 = _co.collectionData; _ck(_v, 17, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isSelectChapter; _ck(_v, 4, 0, currVal_1); var currVal_4 = _co.isSelectChapter; _ck(_v, 6, 0, currVal_4); var currVal_16 = !_co.isSelectChapter; _ck(_v, 11, 0, currVal_16); }); }
function View_CollectionPlayerComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ui container py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_27__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ui container py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_27__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-share-link", [], null, null, null, _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_ShareLinkComponent_0"], _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_ShareLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_29__["ShareLinkComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], { shareLink: [0, "shareLink"], telemetryShareData: [1, "telemetryShareData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shareLink; var currVal_1 = _co.telemetryShareData; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CollectionPlayerComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.sharelinkModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CollectionPlayerComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[1, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "div", [], [[4, "display", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_13__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeCollectionPlayer() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 11, "div", [], null, [["window", "unload"]], function (_v, en, $event) { var ad = true; if (("window:unload" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).unloadHandler($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 540672, null, 0, _telemetry_directives_telemetry_start_telemetry_start_directive__WEBPACK_IMPORTED_MODULE_34__["TelemetryStartDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"]], { appTelemetryStart: [0, "appTelemetryStart"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 147456, null, 0, _telemetry_directives_telemetry_end_telemetry_end_directive__WEBPACK_IMPORTED_MODULE_35__["TelemetryEndDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"]], { appTelemetryEnd: [0, "appTelemetryEnd"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "div", [["class", "ui container relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", "cc-player sb-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.telemetryContentImpression; _ck(_v, 1, 0, currVal_1); var currVal_2 = "relative position mt-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_5 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_7 = _co.collectionData; _ck(_v, 13, 0, currVal_7); var currVal_8 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 15, 0, currVal_8); var currVal_9 = _co.telemetryCourseStart; _ck(_v, 16, 0, currVal_9); var currVal_10 = _co.telemetryCourseEndEvent; _ck(_v, 17, 0, currVal_10); var currVal_11 = _co.collectionData; _ck(_v, 21, 0, currVal_11); var currVal_12 = _co.collectionData; _ck(_v, 23, 0, currVal_12); var currVal_13 = _co.showLoader; _ck(_v, 25, 0, currVal_13); var currVal_14 = _co.showLoader; _ck(_v, 27, 0, currVal_14); var currVal_15 = _co.sharelinkModal; _ck(_v, 29, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.showLoader ? "block" : "none"); _ck(_v, 0, 0, currVal_0); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 11, 0, currVal_6); }); }
function View_CollectionPlayerComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.downloadCollection(_co.collectionData);
        var pd_0 = ((_co.showModal = !_co.showModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.logTelemetry("cancel-download-collection");
        var pd_0 = ((_co.showModal = !_co.showModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.download)); _ck(_v, 8, 0, currVal_4); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.messages == null) ? null : ((_co.resourceService.messages.stmsg == null) ? null : _co.resourceService.messages.stmsg.m0137))); _ck(_v, 11, 0, currVal_5); var currVal_6 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.download)); _ck(_v, 14, 0, currVal_6); var currVal_7 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel)); _ck(_v, 16, 0, currVal_7); }); }
function View_CollectionPlayerComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showModal = !_co.showModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CollectionPlayerComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteCollection(_co.collectionData);
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.logTelemetry("cancel-delete-collection");
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.delete))); _ck(_v, 8, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.deleteCollection)))), "{name}", ((_co.collectionData == null) ? null : _co.collectionData.name))); _ck(_v, 11, 0, currVal_5); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.delete))); _ck(_v, 15, 0, currVal_6); var currVal_7 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel)); _ck(_v, 17, 0, currVal_7); }); }
function View_CollectionPlayerComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CollectionPlayerComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[3, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_27__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], { data: [0, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { loaderMessage: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.exportingContent)), "{contentName}", ((_co.collectionData == null) ? null : _co.collectionData.name)))); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_27__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], { data: [0, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { loaderMessage: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.downloadingContent)), "{contentName}", ((_co.collectionData == null) ? null : _co.collectionData.name)))); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CollectionPlayerComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showModal; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.showDeleteModal; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.showExportLoader; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.showDownloadLoader; _ck(_v, 8, 0, currVal_3); }, null); }
function View_CollectionPlayerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_36__["InterpolatePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_38__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CollectionPlayerComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.layoutConfiguration; var currVal_1 = true; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.collectionData; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.isDesktopApp; _ck(_v, 6, 0, currVal_3); }, null); }
function View_CollectionPlayerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-collection-player", [], null, null, null, View_CollectionPlayerComponent_0, RenderType_CollectionPlayerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _collection_player_component__WEBPACK_IMPORTED_MODULE_39__["CollectionPlayerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_40__["PlayerService"], _shared_services_window_scroll_window_scroll_service__WEBPACK_IMPORTED_MODULE_41__["WindowScrollService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_42__["DeviceDetectorService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"], _core_services_copy_content_copy_content_service__WEBPACK_IMPORTED_MODULE_43__["CopyContentService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_44__["ContentUtilsServiceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _service_popup_control_service__WEBPACK_IMPORTED_MODULE_45__["PopupControlService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], _shared_services_exturl_util_exturl_util_service__WEBPACK_IMPORTED_MODULE_46__["ExternalUrlPreviewService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_47__["UserService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _core_services_generalisedLable_generaliseLable_service__WEBPACK_IMPORTED_MODULE_48__["GeneraliseLabelService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_19__["PublicPlayerService"], _core_services_course_course_service__WEBPACK_IMPORTED_MODULE_49__["CoursesService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_50__["ContentManagerService"], _shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_51__["ConnectionService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_4__["TelemetryService"], _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_52__["OfflineCardService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CollectionPlayerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-collection-player", _collection_player_component__WEBPACK_IMPORTED_MODULE_39__["CollectionPlayerComponent"], View_CollectionPlayerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "1tIb":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/sso-merge-confirmation/sso-merge-confirmation.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SsoMergeConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsoMergeConfirmationComponent", function() { return SsoMergeConfirmationComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");


var SsoMergeConfirmationComponent = (function () {
    function SsoMergeConfirmationComponent(resourceService, tenantService) {
        this.resourceService = resourceService;
        this.tenantService = tenantService;
        this.telemetryCdata = [{
                id: 'user:account:migrate',
                type: 'Feature'
            }, {
                id: 'SB-13773',
                type: 'Task'
            }];
        this.instance = document.getElementById('instance')
            ? document.getElementById('instance').value.toUpperCase() : 'SUNBIRD';
    }
    SsoMergeConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantDataSubscription = this.tenantService.tenantData$.subscribe(function (data) {
            if (data && !data.err && data.tenantData) {
                _this.logo = data.tenantData.logo;
                _this.tenantName = data.tenantData.titleName;
            }
        });
    };
    SsoMergeConfirmationComponent.prototype.createNewUser = function () {
        var queryParams = '&identifier=' + this.identifierType + '&identifierValue=' + this.identifierValue + '&freeUser=true';
        queryParams = queryParams + '&tncAccepted=' + this.isTncAccepted + '&tncVersion=' + this.tncVersionAccepted;
        window.location.href = 'v1/sso/create/user?userId=' + this.userDetails.id + queryParams;
    };
    SsoMergeConfirmationComponent.prototype.closeModal = function () {
    };
    SsoMergeConfirmationComponent.prototype.migrateUser = function () {
        var queryParams = '&identifier=' + this.identifierType + '&identifierValue=' + this.identifierValue + '&freeUser=true';
        queryParams = queryParams + '&tncAccepted=' + this.isTncAccepted + '&tncVersion=' + this.tncVersionAccepted;
        window.location.href = '/v1/sso/migrate/account/initiate?userId=' + this.userDetails.id + queryParams;
    };
    SsoMergeConfirmationComponent.prototype.ngOnDestroy = function () {
        if (this.tenantDataSubscription) {
            this.tenantDataSubscription.unsubscribe();
        }
    };
    return SsoMergeConfirmationComponent;
}());



/***/ }),

/***/ "7MCS":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-chapterlist/content-chapterlist.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ContentChapterlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentChapterlistComponent", function() { return ContentChapterlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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

var ContentChapterlistComponent = (function () {
    function ContentChapterlistComponent() {
        this.tocChapterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContentChapterlistComponent.prototype.ngOnInit = function () {
    };
    ContentChapterlistComponent.prototype.onTocChapterClick = function (event, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.activeContent && this.activeContent.sbUniqueIdentifier !== content.sbUniqueIdentifier) {
                    this.tocChapterClick.emit({ event: event, data: __assign({}, content) });
                }
                return [2];
            });
        });
    };
    ContentChapterlistComponent.prototype.ngOnChanges = function () {
    };
    ContentChapterlistComponent.prototype.ngOnDestroy = function () {
    };
    return ContentChapterlistComponent;
}());



/***/ }),

/***/ "8QQp":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/year-of-birth/year-of-birth.component.ts ***!
  \********************************************************************************************/
/*! exports provided: YearOfBirthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearOfBirthComponent", function() { return YearOfBirthComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _sunbird_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/profile */ "XCaa");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");




var YearOfBirthComponent = (function () {
    function YearOfBirthComponent(profileService, configService, resourceService, matDialog) {
        this.profileService = profileService;
        this.configService = configService;
        this.resourceService = resourceService;
        this.matDialog = matDialog;
        this.birthYearOptions = [];
        this.showYearOfBirthPopup = false;
    }
    YearOfBirthComponent.prototype.ngOnInit = function () {
        this.initiateYearSelector();
    };
    YearOfBirthComponent.prototype.submitYearOfBirth = function () {
        if (this.selectedYearOfBirth) {
            var req = { dob: this.selectedYearOfBirth.toString() };
            this.profileService.updateProfile(req).subscribe();
            var dialogRef = this.dialogProps && this.dialogProps.id && this.matDialog.getDialogById(this.dialogProps.id);
            dialogRef && dialogRef.close();
        }
    };
    YearOfBirthComponent.prototype.initiateYearSelector = function () {
        var endYear = new Date().getFullYear();
        var startYear = endYear - this.configService.constants.SIGN_UP.MAX_YEARS;
        for (var year = endYear; year > startYear; year--) {
            this.birthYearOptions.push(year);
        }
    };
    YearOfBirthComponent.prototype.changeBirthYear = function (year) {
        this.selectedYearOfBirth = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](year, 'value');
    };
    return YearOfBirthComponent;
}());



/***/ }),

/***/ "8tQW":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/onboarding-user-selection/onboarding-user-selection.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OnboardingUserSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingUserSelectionComponent", function() { return OnboardingUserSelectionComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sunbird/profile */ "XCaa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










var OnboardingUserSelectionComponent = (function () {
    function OnboardingUserSelectionComponent(resourceService, tenantService, router, navigationHelperService, telemetryService, activatedRoute, formService, profileService, userService, toasterService) {
        this.resourceService = resourceService;
        this.tenantService = tenantService;
        this.router = router;
        this.navigationHelperService = navigationHelperService;
        this.telemetryService = telemetryService;
        this.activatedRoute = activatedRoute;
        this.formService = formService;
        this.profileService = profileService;
        this.userService = userService;
        this.toasterService = toasterService;
        this.userSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.guestList = [];
        this.updateUserSelection$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](undefined);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    OnboardingUserSelectionComponent.prototype.ngOnInit = function () {
        this.setPopupInteractEdata();
        this.initialize().subscribe();
    };
    OnboardingUserSelectionComponent.prototype.initialize = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.getFormConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (fields) {
            _this.guestList = _this.prepareGuestList(fields);
        })), this.updateUserSelection()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$));
    };
    OnboardingUserSelectionComponent.prototype.prepareGuestList = function (fields) {
        var _this = this;
        if (fields === void 0) { fields = []; }
        return lodash_es__WEBPACK_IMPORTED_MODULE_3__["reduce"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["sortBy"](fields, ['index']), function (result, field) {
            var _a = field || {}, _b = _a.name, name = _b === void 0 ? null : _b, _c = _a.visibility, visibility = _c === void 0 ? true : _c, _d = _a.image, image = _d === void 0 ? 'guest-img3.svg' : _d, _e = _a.searchFilter, searchFilter = _e === void 0 ? [] : _e, _f = _a.code, code = _f === void 0 ? null : _f, _g = _a.label, label = _g === void 0 ? null : _g, _h = _a.translations, translations = _h === void 0 ? null : _h;
            if (visibility) {
                result.push({
                    name: name, searchFilter: searchFilter, code: code,
                    isActive: false,
                    icon: "assets/images/" + image,
                    label: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, label || translations)
                });
            }
            return result;
        }, []);
    };
    OnboardingUserSelectionComponent.prototype.getFormConfig = function () {
        var _this = this;
        var formServiceInputParams = {
            formType: 'config',
            formAction: 'get',
            contentType: 'userType',
            component: 'portal'
        };
        return this.formService.getFormConfig(formServiceInputParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (err) {
            _this.userSelect.emit(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
        }));
    };
    OnboardingUserSelectionComponent.prototype.updateUserSelection = function () {
        var _this = this;
        return this.updateUserSelection$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skipWhile"])(function (data) { return data === undefined || data === null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (userType) {
            var payload = {
                userId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.userService, 'userid'),
                profileUserTypes: [{
                        'type': userType.toLowerCase()
                    }]
            };
            return _this.profileService.updateProfile(payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function () {
                return _this.userService.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (v) { console.log(v); _this.userSelect.emit(true); }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (err) {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.emsg.m0005'));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["empty"])();
            }));
        }));
    };
    OnboardingUserSelectionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.telemetryImpression = {
                context: {
                    env: 'user-type'
                },
                edata: {
                    type: 'view',
                    pageid: 'user-type-popup',
                    uri: _this.router.url,
                    duration: _this.navigationHelperService.getPageLoadTime()
                }
            };
        });
    };
    OnboardingUserSelectionComponent.prototype.selectUserType = function (selectedGuest) {
        this.selectedUserType = selectedGuest;
        this.guestList.forEach(function (guest) {
            guest.isActive = guest === selectedGuest;
        });
    };
    OnboardingUserSelectionComponent.prototype.submit = function () {
        var code = this.selectedUserType.code;
        localStorage.setItem('userType', code);
        if (this.userService.loggedIn) {
            this.updateUserSelection$.next(code);
        }
        else {
            var name_1 = this.selectedUserType.name;
            localStorage.setItem('guestUserType', name_1);
            this.userSelect.emit(true);
        }
        this.logAuditEvent(code);
    };
    OnboardingUserSelectionComponent.prototype.logAuditEvent = function (code) {
        var auditEventInput = {
            'context': {
                'env': 'onboarding',
                'cdata': [
                    { id: code, type: 'UserType' },
                ]
            },
            'object': {
                'id': code,
                'type': '',
                'ver': ''
            },
            'edata': {
                'state': 'Updated',
                'props': [
                    'profile_type'
                ],
                'type': 'set-usertype',
                'prevstate': 'set-usertype',
            }
        };
        this.telemetryService.audit(auditEventInput);
    };
    OnboardingUserSelectionComponent.prototype.setPopupInteractEdata = function () {
        this.userSelectionInteractEdata = {
            id: 'user-type-select',
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.activatedRoute, 'snapshot.data.telemetry.pageid') || this.router.url.split('/')[1]
        };
    };
    OnboardingUserSelectionComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return OnboardingUserSelectionComponent;
}());



/***/ }),

/***/ "9KZG":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-player/content-player.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_ContentPlayerComponent, View_ContentPlayerComponent_0, View_ContentPlayerComponent_Host_0, ContentPlayerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentPlayerComponent", function() { return RenderType_ContentPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerComponent_0", function() { return View_ContentPlayerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerComponent_Host_0", function() { return View_ContentPlayerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponentNgFactory", function() { return ContentPlayerComponentNgFactory; });
/* harmony import */ var _content_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-player.component.scss.shim.ngstyle */ "pYps");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _content_actions_content_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-actions/content-actions.component.ngfactory */ "vroN");
/* harmony import */ var _content_actions_content_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-actions/content-actions.component */ "mSyn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/offline-card-service/offline-card.service */ "vzIX");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../player/player.component.ngfactory */ "5rFI");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../player/player.component */ "SSdx");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/form/form.service */ "9dCP");
/* harmony import */ var _core_services_content_content_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/services/content/content.service */ "MthD");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _content_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./content-player.component */ "P/Kf");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
























var styles_ContentPlayerComponent = [_content_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentPlayerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentPlayerComponent, data: {} });

function View_ContentPlayerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-actions", [["class", "player-fullscreen-action-items"]], null, null, null, _content_actions_content_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContentActionsComponent_0"], _content_actions_content_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContentActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _content_actions_content_actions_component__WEBPACK_IMPORTED_MODULE_3__["ContentActionsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_7__["ContentUtilsServiceService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_8__["TelemetryService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_11__["ContentManagerService"], _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_12__["OfflineCardService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]], { contentData: [0, "contentData"], isFullScreen: [1, "isFullScreen"], assessmentEvents: [2, "assessmentEvents"], objectRollUp: [3, "objectRollUp"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData; var currVal_1 = true; var currVal_2 = _co.assessmentEvents; var currVal_3 = _co.objectRollUp; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_ContentPlayerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-actions", [], null, [[null, "contentDownloaded"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("contentDownloaded" === en)) {
        var pd_0 = (_co.checkContentDownloading($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _content_actions_content_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContentActionsComponent_0"], _content_actions_content_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContentActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _content_actions_content_actions_component__WEBPACK_IMPORTED_MODULE_3__["ContentActionsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_7__["ContentUtilsServiceService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_8__["TelemetryService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_11__["ContentManagerService"], _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_12__["OfflineCardService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]], { contentData: [0, "contentData"], isFullScreen: [1, "isFullScreen"], assessmentEvents: [2, "assessmentEvents"], objectRollUp: [3, "objectRollUp"] }, { contentDownloaded: "contentDownloaded" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData; var currVal_1 = false; var currVal_2 = _co.assessmentEvents; var currVal_3 = _co.objectRollUp; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_ContentPlayerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { contentIframe: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "content-video"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "section", [["class", ""], ["id", "player-area-height"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [["aspectRatio", 1]], null, 6, "div", [["class", "aspectratio sbt-shadow-radius"], ["data-ratio", "16:9"], ["id", "help-video-aspect-ratio"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, { "player-fullscreen": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-player", [["class", "content-player"]], null, [[null, "assessmentEvents"], [null, "questionScoreSubmitEvents"], [null, "questionScoreReviewEvents"], ["window", "popstate"], ["window", "orientationchange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:popstate" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onPopState($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:orientationchange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).handleOrientationChange($event) !== false);
        ad = (pd_1 && ad);
    } if (("assessmentEvents" === en)) {
        var pd_2 = (_co.onAssessmentEvents($event) !== false);
        ad = (pd_2 && ad);
    } if (("questionScoreSubmitEvents" === en)) {
        var pd_3 = (_co.onQuestionScoreSubmitEvents($event) !== false);
        ad = (pd_3 && ad);
    } if (("questionScoreReviewEvents" === en)) {
        var pd_4 = (_co.onQuestionScoreReviewEvents($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, _player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_PlayerComponent_0"], _player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_PlayerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4964352, null, 0, _player_player_component__WEBPACK_IMPORTED_MODULE_16__["PlayerComponent"], [_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_19__["FormService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_7__["ContentUtilsServiceService"], _core_services_content_content_service__WEBPACK_IMPORTED_MODULE_20__["ContentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_21__["PublicPlayerService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]], { playerConfig: [0, "playerConfig"], contentProgressEvents$: [1, "contentProgressEvents$"], playerOption: [2, "playerOption"], isContentDeleted: [3, "isContentDeleted"] }, { assessmentEvents: "assessmentEvents", questionScoreSubmitEvents: "questionScoreSubmitEvents", questionScoreReviewEvents: "questionScoreReviewEvents" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "aspectratio sbt-shadow-radius"; var currVal_1 = _ck(_v, 6, 0, _co.isFullScreenView); _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _co.playerConfig; var currVal_3 = _co.contentProgressEvents$; var currVal_4 = _co.playerOption; var currVal_5 = _co.contentDeleted; _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.isFullScreenView; _ck(_v, 10, 0, currVal_6); var currVal_7 = (_co.contentData && !_co.isFullScreenView); _ck(_v, 12, 0, currVal_7); }, null); }
function View_ContentPlayerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-player", [], null, null, null, View_ContentPlayerComponent_0, RenderType_ContentPlayerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4964352, null, 0, _content_player_component__WEBPACK_IMPORTED_MODULE_22__["ContentPlayerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_23__["LayoutService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_9__["NavigationHelperService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_21__["PublicPlayerService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_11__["ContentManagerService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentPlayerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content-player", _content_player_component__WEBPACK_IMPORTED_MODULE_22__["ContentPlayerComponent"], View_ContentPlayerComponent_Host_0, { playerConfig: "playerConfig", contentProgressEvents$: "contentProgressEvents$", playerOption: "playerOption", isContentDeleted: "isContentDeleted", isContentPresent: "isContentPresent", objectRollUp: "objectRollUp", contentData: "contentData", layoutConfiguration: "layoutConfiguration" }, { assessmentEvents: "assessmentEvents", questionScoreSubmitEvents: "questionScoreSubmitEvents", questionScoreReviewEvents: "questionScoreReviewEvents", playerOnDestroyEvent: "playerOnDestroyEvent", sceneChangeEvent: "sceneChangeEvent", deletedContent: "deletedContent" }, []);



/***/ }),

/***/ "DfIe":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/collection-player/collection-player.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CollectionPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPlayerComponent", function() { return CollectionPlayerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var tree_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tree-model */ "c+yi");
/* harmony import */ var tree_model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tree_model__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @project-sunbird/client-services/blocs */ "nJui");
/* harmony import */ var _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_module_offline_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/module/offline/services */ "3yhm");














var CollectionPlayerComponent = (function () {
    function CollectionPlayerComponent(route, playerService, windowScrollService, router, navigationHelperService, toasterService, deviceDetectorService, resourceService, permissionService, copyContentService, contentUtilsServiceService, configService, popupControlService, navigationhelperService, externalUrlPreviewService, userService, layoutService, generaliseLabelService, publicPlayerService, coursesService, utilService, contentManagerService, connectionService, telemetryService, offlineCardService) {
        this.route = route;
        this.playerService = playerService;
        this.windowScrollService = windowScrollService;
        this.router = router;
        this.navigationHelperService = navigationHelperService;
        this.toasterService = toasterService;
        this.deviceDetectorService = deviceDetectorService;
        this.resourceService = resourceService;
        this.permissionService = permissionService;
        this.copyContentService = copyContentService;
        this.contentUtilsServiceService = contentUtilsServiceService;
        this.configService = configService;
        this.popupControlService = popupControlService;
        this.navigationhelperService = navigationhelperService;
        this.externalUrlPreviewService = externalUrlPreviewService;
        this.userService = userService;
        this.layoutService = layoutService;
        this.generaliseLabelService = generaliseLabelService;
        this.publicPlayerService = publicPlayerService;
        this.coursesService = coursesService;
        this.utilService = utilService;
        this.contentManagerService = contentManagerService;
        this.connectionService = connectionService;
        this.telemetryService = telemetryService;
        this.offlineCardService = offlineCardService;
        this.showPlayer = false;
        this.triggerContentImpression = false;
        this.showCopyLoader = false;
        this.contentDetails = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isContentPresent = false;
        this.tocList = [];
        this.isSelectChapter = false;
        this.showLoader = true;
        this.isCopyAsCourseClicked = false;
        this.selectAll = false;
        this.selectedItems = [];
        this.loaderMessage = {
            headerMessage: 'Please wait...',
            loaderMessage: 'Fetching content details!'
        };
        this.TocCardType = _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_11__["TocCardType"];
        this.PlatformType = _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_11__["PlatformType"];
        this.isDesktopApp = false;
        this.isConnected = true;
        this.contentDownloadStatus = {};
        this.showUpdate = false;
        this.showExportLoader = false;
        this.showModal = false;
        this.showDownloadLoader = false;
        this.disableDelete = false;
        this.isAvailableLocally = false;
        this.noContentMessage = '';
        this.router.onSameUrlNavigation = 'ignore';
        this.collectionTreeOptions = this.configService.appConfig.collectionTreeOptions;
        this.playerOption = { showContentRating: true };
        this.activeMimeTypeFilter = ['all'];
    }
    CollectionPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setMimeTypeFilters();
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.isDesktopApp = this.utilService.isDesktopApp;
        this.noContentMessage = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'messages.stmsg.m0121');
        this.playerServiceReference = this.userService.loggedIn ? this.playerService : this.publicPlayerService;
        this.initLayout();
        this.dialCode = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.route, 'snapshot.queryParams.dialCode');
        this.contentType = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.route, 'snapshot.queryParams.contentType') || 'Collection';
        this.contentData = this.getContent();
        _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_12__["CsGroupAddableBloc"].instance.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
            _this.isGroupAdmin = !lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.route.snapshot, 'queryParams.groupId')) && lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data.params, 'groupData.isAdmin');
            _this.groupId = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'groupId') || lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.route.snapshot, 'queryParams.groupId');
        });
        if (this.isDesktopApp) {
            this.contentManagerService.contentDownloadStatus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (contentDownloadStatus) {
                _this.contentDownloadStatus = contentDownloadStatus;
                _this.checkDownloadStatus();
            });
            this.connectionService.monitor().subscribe(function (isConnected) {
                _this.isConnected = isConnected;
            });
        }
    };
    CollectionPlayerComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    CollectionPlayerComponent.prototype.onShareLink = function () {
        this.shareLink = this.contentUtilsServiceService.getPublicShareUrl(this.collectionId, this.mimeType);
        this.setTelemetryShareData(this.collectionData);
    };
    CollectionPlayerComponent.prototype.setTelemetryShareData = function (param) {
        this.telemetryShareData = [{
                id: param.identifier,
                type: param.contentType,
                ver: param.pkgVersion ? param.pkgVersion.toString() : '1.0'
            }];
    };
    CollectionPlayerComponent.prototype.printPdf = function (pdfUrl) {
        window.open(pdfUrl, '_blank');
    };
    CollectionPlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var CData = _this.dialCode ? [{ id: _this.route.snapshot.params.collectionId, type: _this.contentType },
                { id: _this.dialCode, type: 'dialCode' }] : [{ id: _this.route.snapshot.params.collectionId, type: _this.contentType }];
            if (_this.groupId) {
                CData.push({ id: _this.groupId, type: 'Group' });
            }
            _this.telemetryImpression = {
                context: {
                    env: _this.route.snapshot.data.telemetry.env,
                    cdata: CData
                },
                object: {
                    id: _this.collectionId,
                    type: _this.contentType,
                    ver: '1.0'
                },
                edata: {
                    type: _this.route.snapshot.data.telemetry.type,
                    pageid: _this.route.snapshot.data.telemetry.pageid,
                    uri: _this.router.url,
                    subtype: _this.route.snapshot.data.telemetry.subtype,
                    duration: _this.navigationhelperService.getPageLoadTime()
                }
            };
        });
    };
    CollectionPlayerComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    CollectionPlayerComponent.prototype.initPlayer = function (id) {
        var _this = this;
        this.playerConfig = this.getPlayerConfig(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (content) {
            if (_this.activeContent.mimeType === _this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.questionset) {
                var contentDetails = { contentId: id, contentData: content.questionSet };
                content = _this.playerServiceReference.getConfig(contentDetails);
                _this.publicPlayerService.getQuestionSetRead(id).subscribe(function (data) {
                    content['metadata']['instructions'] = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'result.questionset.instructions');
                });
            }
            var CData = _this.dialCode ? [{ id: _this.dialCode, type: 'dialCode' }] : [];
            if (_this.groupId) {
                CData.push({ id: _this.groupId, type: 'Group' });
            }
            content.context.objectRollup = _this.objectRollUp;
            _this.telemetryContentImpression = {
                context: {
                    env: _this.route.snapshot.data.telemetry.env,
                    cdata: CData
                },
                edata: {
                    type: _this.route.snapshot.data.telemetry.env,
                    pageid: _this.route.snapshot.data.telemetry.env,
                    uri: _this.router.url
                },
                object: {
                    id: content.metadata.identifier,
                    type: _this.contentType || content.metadata.resourceType || content,
                    ver: content.metadata.pkgVersion ? content.metadata.pkgVersion.toString() : '1.0',
                    rollup: _this.objectRollUp
                }
            };
            _this.closeContentIntractEdata = {
                id: 'content-close',
                type: 'click',
                pageid: _this.route.snapshot.data.telemetry.pageid
            };
            _this.objectContentInteract = {
                id: content.metadata.identifier,
                type: _this.contentType || content.metadata.resourceType || 'content',
                ver: content.metadata.pkgVersion ? content.metadata.pkgVersion.toString() : '1.0',
                rollup: _this.objectRollUp
            };
            _this.triggerContentImpression = true;
            return content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log("unable to get player config for content " + id, error);
            return error;
        }));
    };
    CollectionPlayerComponent.prototype.selectedFilter = function (event) {
        this.activeMimeTypeFilter = event.data.value;
    };
    CollectionPlayerComponent.prototype.showNoContent = function (event) {
        if (event.message === 'No Content Available') {
            this.isContentPresent = false;
        }
    };
    CollectionPlayerComponent.prototype.playContent = function (data) {
        this.showPlayer = true;
        this.contentTitle = data.title;
        this.initPlayer(data.id);
    };
    CollectionPlayerComponent.prototype.navigateToContent = function (content, id) {
        var navigationExtras;
        navigationExtras = {
            queryParams: {},
            relativeTo: this.route
        };
        if (id) {
            if (this.queryParams) {
                this.queryParams['contentId'] = id;
            }
            else {
                this.queryParams = {};
                this.queryParams['contentId'] = id;
            }
            navigationExtras.queryParams = this.queryParams;
        }
        else if (content) {
            navigationExtras.queryParams = { 'contentId': content.id };
        }
        this.router.navigate([], navigationExtras);
    };
    CollectionPlayerComponent.prototype.getPlayerConfig = function (contentId) {
        if (this.activeContent.mimeType === this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.questionset) {
            return this.publicPlayerService.getQuestionSetHierarchy(contentId);
        }
        else {
            if (this.dialCode) {
                return this.playerServiceReference.getConfigByContent(contentId, { dialCode: this.dialCode });
            }
            else {
                return this.playerServiceReference.getConfigByContent(contentId);
            }
        }
    };
    CollectionPlayerComponent.prototype.findContentById = function (collection, id) {
        var model = new tree_model__WEBPACK_IMPORTED_MODULE_7__();
        return model.parse(collection.data).first(function (node) {
            return node.model.identifier === id;
        });
    };
    CollectionPlayerComponent.prototype.parseChildContent = function (collection) {
        var _this = this;
        var model = new tree_model__WEBPACK_IMPORTED_MODULE_7__();
        if (collection.data) {
            this.treeModel = model.parse(collection.data);
            this.treeModel.walk(function (node) {
                if (node.model.mimeType !== 'application/vnd.ekstep.content-collection') {
                    _this.contentDetails.push({ id: node.model.identifier, title: node.model.name });
                    _this.tocList.push({ id: node.model.identifier, title: node.model.name, mimeType: node.model.mimeType });
                }
                _this.setContentNavigators();
            });
        }
    };
    CollectionPlayerComponent.prototype.setContentNavigators = function () {
        var index = lodash_es__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.contentDetails, ['id', this.contentId]);
        this.prevPlaylistItem = this.contentDetails[index - 1];
        this.nextPlaylistItem = this.contentDetails[index + 1];
    };
    CollectionPlayerComponent.prototype.OnPlayContent = function (content, isClicked) {
        if (content && content.id) {
            this.navigateToContent(null, content.id);
            this.setContentNavigators();
            this.playContent(content);
            if (!isClicked) {
                var playContentDetails = this.findContentById(this.collectionTreeNodes, content.id);
                if (playContentDetails.model.mimeType === this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.xUrl) {
                    this.externalUrlPreviewService.generateRedirectUrl(playContentDetails.model);
                }
            }
            this.windowScrollService.smoothScroll('app-player-collection-renderer', 10);
        }
        else {
            throw new Error("Unable to play collection content for " + this.collectionId);
        }
    };
    CollectionPlayerComponent.prototype.getGeneraliseResourceBundle = function (data) {
        var _this = this;
        this.resourceService.languageSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (item) {
            _this.generaliseLabelService.initialize(data, item.value);
            _this.noContentMessage = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.stmsg.m0121');
            _this.setMimeTypeFilters();
        });
    };
    CollectionPlayerComponent.prototype.getContent = function () {
        var _this = this;
        this.subscription = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (params) { return params.collectionId !== _this.collectionId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (params) {
            _this.showLoader = true;
            _this.collectionId = params.collectionId;
            _this.telemetryCdata = [{ id: _this.collectionId, type: _this.contentType }];
            if (_this.dialCode) {
                _this.telemetryCdata.push({ id: _this.dialCode, type: 'dialCode' });
            }
            if (_this.groupId) {
                _this.telemetryCdata.push({ id: _this.groupId, type: 'Group' });
            }
            _this.collectionStatus = params.collectionStatus;
            return _this.getCollectionHierarchy(params.collectionId);
        }))
            .subscribe(function (data) {
            _this.collectionTreeNodes = data;
            _this.showLoader = false;
            _this.isAvailableLocally = Boolean(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'data.desktopAppMetadata.isAvailable'));
            if (_this.isDesktopApp && _this.isAvailableLocally) {
                _this.layoutService.updateSelectedContentType.emit('mydownloads');
            }
            else {
                _this.layoutService.updateSelectedContentType.emit(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'data.contentType'));
            }
            _this.getGeneraliseResourceBundle(data.data);
            _this.setTelemetryData();
            _this.setTelemetryStartEndData();
            _this.route.queryParams.subscribe(function (queryParams) {
                _this.contentId = queryParams.contentId;
                if (_this.contentId) {
                    var content = _this.findContentById(data, _this.contentId);
                    _this.selectedContent = content;
                    if (content) {
                        _this.activeContent = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](content, 'model');
                        _this.objectRollUp = _this.contentUtilsServiceService.getContentRollup(content);
                        _this.OnPlayContent({ title: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](content, 'model.name'), id: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](content, 'model.identifier') });
                    }
                    else {
                        _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
                    }
                }
                else {
                    _this.closeContentPlayer();
                }
            });
            _this.parseChildContent(_this.collectionTreeNodes);
        }, function (error) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    CollectionPlayerComponent.prototype.setTelemetryData = function () {
        this.closeIntractEdata = {
            id: 'collection-close',
            type: 'click',
            pageid: 'collection-player'
        };
        this.printPdfInteractEdata = {
            id: 'print-pdf-button',
            type: 'click',
            pageid: 'collection-player'
        };
        this.copyContentInteractEdata = {
            id: 'copy-content-button',
            type: 'click',
            pageid: 'collection-player'
        };
        this.copyAsCourseInteractEdata = {
            id: 'copy-as-course-button',
            type: 'click',
            pageid: 'collection-player'
        };
        this.cancelInteractEdata = {
            id: 'cancel-button',
            type: 'click',
            pageid: 'collection-player'
        };
        this.createCourseInteractEdata = {
            id: 'create-course-button',
            type: 'click',
            pageid: 'collection-player'
        };
        this.collectionInteractObject = {
            id: this.collectionId,
            type: this.contentType,
            ver: this.collectionData.pkgVersion ? this.collectionData.pkgVersion.toString() : '1.0'
        };
    };
    CollectionPlayerComponent.prototype.getCollectionHierarchy = function (collectionId) {
        var _this = this;
        var option = { params: {} };
        option.params = this.configService.appConfig.PublicPlayer.contentApiQueryParams;
        if (this.collectionStatus && this.collectionStatus === 'Unlisted') {
            option.params['mode'] = 'edit';
        }
        return this.playerServiceReference.getCollectionHierarchy(collectionId, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            _this.collectionData = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content');
            _this.contentType = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content.contentType');
            _this.mimeType = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content.mimeType');
            _this.collectionTitle = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content.name') || 'Untitled Collection';
            _this.badgeData = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content.badgeAssertions');
            _this.showUpdate = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.collectionData, 'desktopAppMetadata.updateAvailable');
            return { data: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.content') };
        }));
    };
    CollectionPlayerComponent.prototype.closeCollectionPlayer = function () {
        if (this.dialCode) {
            this.router.navigate(['/get/dial/', this.dialCode]);
        }
        else {
            var previousPageUrl = this.navigationHelperService.getPreviousUrl();
            var url_1 = previousPageUrl.url, _a = previousPageUrl.queryParams, _b = (_a === void 0 ? {} : _a).textbook, textbook = _b === void 0 ? null : _b;
            if (url_1 && ['/explore-course', '/learn'].some(function (val) { return url_1.startsWith(val); }) && textbook) {
                var navigateUrl = this.userService.loggedIn ? '/search/Library' : '/explore';
                this.router.navigate([navigateUrl, 1], { queryParams: { key: textbook } });
            }
            else if (previousPageUrl.queryParams) {
                this.router.navigate([previousPageUrl.url], { queryParams: previousPageUrl.queryParams });
            }
            else {
                var url_2 = this.userService.loggedIn ? '/resources' : '/explore';
                this.router.navigate([url_2], { queryParams: { selectedTab: 'textbook' } });
            }
        }
    };
    CollectionPlayerComponent.prototype.closeContentPlayer = function () {
        this.selectedContent = {};
        this.showPlayer = false;
        this.triggerContentImpression = false;
        var contentType = this.isAvailableLocally ? 'mydownloads' : this.contentType;
        var navigationExtras = {
            relativeTo: this.route,
            queryParams: { contentType: contentType }
        };
        if (this.dialCode) {
            navigationExtras.queryParams['dialCode'] = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.route, 'snapshot.queryParams.dialCode');
        }
        this.router.navigate([], navigationExtras);
    };
    CollectionPlayerComponent.prototype.callinitPlayer = function (event) {
        if (event.data.identifier !== lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.activeContent, 'identifier')) {
            this.isContentPresent = true;
            this.activeContent = event.data;
            this.objectRollUp = this.getContentRollUp(event.rollup);
            this.initPlayer(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.activeContent, 'identifier'));
        }
    };
    CollectionPlayerComponent.prototype.setTelemetryInteractData = function () {
        this.tocTelemetryInteractEdata = {
            id: 'library-toc',
            type: 'CLICK',
            pageid: this.route.snapshot.data.telemetry.pageid
        };
        if (this.groupId) {
            this.tocTelemetryInteractEdata.id = 'group-library-toc';
            this.tocTelemetryInteractCdata = [{ id: this.groupId, type: 'Group' }];
        }
    };
    CollectionPlayerComponent.prototype.tocCardClickHandler = function (event) {
        this.setTelemetryInteractData();
        if (event && event.data && event.data.trackable && event.data.trackable.enabled === 'Yes') {
            if (this.userService.loggedIn) {
                var _a = this.coursesService.findEnrolledCourses(event.data.identifier), onGoingBatchCount = _a.onGoingBatchCount, expiredBatchCount = _a.expiredBatchCount, openBatch = _a.openBatch, inviteOnlyBatch = _a.inviteOnlyBatch;
                if (!expiredBatchCount && !onGoingBatchCount) {
                    this.playerService.playContent(event.data, { textbook: this.collectionData.identifier });
                }
                else if (onGoingBatchCount === 1) {
                    event.data.batchId = openBatch.ongoing.length ? openBatch.ongoing[0].batchId : inviteOnlyBatch.ongoing[0].batchId;
                    this.playerService.playContent(event.data, { textbook: this.collectionData.identifier });
                }
            }
            else {
                this.publicPlayerService.playContent(event, { textbook: this.collectionData.identifier });
            }
        }
        else {
            this.callinitPlayer(event);
        }
    };
    CollectionPlayerComponent.prototype.tocChapterClickHandler = function (event) {
        if (this.isSelectChapter) {
            this.isSelectChapter = false;
        }
        this.callinitPlayer(event);
    };
    CollectionPlayerComponent.prototype.getContentRollUp = function (rollup) {
        var objectRollUp = {};
        if (rollup) {
            for (var i = 0; i < rollup.length; i++) {
                objectRollUp["l" + (i + 1)] = rollup[i];
            }
        }
        return objectRollUp;
    };
    CollectionPlayerComponent.prototype.showChapter = function () {
        this.isSelectChapter = this.isSelectChapter ? false : true;
    };
    CollectionPlayerComponent.prototype.copyContent = function (contentData) {
        var _this = this;
        this.showCopyLoader = true;
        this.copyContentService.copyContent(contentData).subscribe(function (response) {
            _this.toasterService.success(_this.resourceService.messages.smsg.m0042);
            _this.showCopyLoader = false;
        }, function (err) {
            _this.showCopyLoader = false;
            _this.toasterService.error(_this.resourceService.messages.emsg.m0008);
        });
    };
    CollectionPlayerComponent.prototype.copyAsCourse = function () {
        this.isCopyAsCourseClicked = !this.isCopyAsCourseClicked;
    };
    CollectionPlayerComponent.prototype.clearSelection = function () {
        this.isCopyAsCourseClicked = !this.isCopyAsCourseClicked;
        this.selectAll = false;
        this.selectedItems = [];
        this.collectionData['children'].forEach(function (item) {
            item.selected = false;
        });
    };
    CollectionPlayerComponent.prototype.selectAllItem = function () {
        this.selectAll = !this.selectAll;
    };
    CollectionPlayerComponent.prototype.setTelemetryStartEndData = function () {
        var _this = this;
        if (this.groupId && !lodash_es__WEBPACK_IMPORTED_MODULE_4__["find"](this.telemetryCdata, { id: this.groupId })) {
            this.telemetryCdata.push({ id: this.groupId, type: 'Group' });
        }
        var deviceInfo = this.deviceDetectorService.getDeviceInfo();
        setTimeout(function () {
            _this.telemetryCourseStart = {
                context: {
                    env: _this.route.snapshot.data.telemetry.env,
                    cdata: _this.telemetryCdata
                },
                object: {
                    id: _this.collectionId,
                    type: _this.contentType,
                    ver: '1.0',
                },
                edata: {
                    type: _this.route.snapshot.data.telemetry.type,
                    pageid: _this.route.snapshot.data.telemetry.pageid,
                    mode: 'play',
                    duration: _this.navigationhelperService.getPageLoadTime(),
                    uaspec: {
                        agent: deviceInfo.browser,
                        ver: deviceInfo.browser_version,
                        system: deviceInfo.os_version,
                        platform: deviceInfo.os,
                        raw: deviceInfo.userAgent
                    }
                }
            };
        }, 100);
        this.telemetryCourseEndEvent = {
            object: {
                id: this.collectionId,
                type: this.contentType,
                ver: '1.0',
            },
            context: {
                env: this.route.snapshot.data.telemetry.env,
                cdata: this.telemetryCdata
            },
            edata: {
                type: this.route.snapshot.data.telemetry.type,
                pageid: this.route.snapshot.data.telemetry.pageid,
                mode: 'play'
            }
        };
    };
    CollectionPlayerComponent.prototype.createCourse = function () {
        var _this = this;
        var collection = lodash_es__WEBPACK_IMPORTED_MODULE_4__["assign"]({}, this.collectionData);
        collection = this.utilService.reduceTreeProps(collection, ['mimeType', 'visibility', 'identifier', 'selected', 'name', 'contentType', 'children',
            'primaryCategory', 'additionalCategory', 'parent', 'code', 'framework', 'description']);
        this.userService.userOrgDetails$.subscribe(function () {
            _this.showCopyLoader = true;
            _this.copyContentService.copyAsCourse(collection).subscribe(function (response) {
                _this.toasterService.success(_this.resourceService.messages.smsg.m0042);
                _this.showCopyLoader = false;
            }, function (err) {
                _this.showCopyLoader = false;
                _this.clearSelection();
                _this.toasterService.error(_this.resourceService.messages.emsg.m0008);
            });
        });
    };
    CollectionPlayerComponent.prototype.handleSelectedItem = function (event) {
        if ('selectAll' in event) {
            this.handleSelectAll(event);
        }
        else {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](event, 'data.selected') === true) {
                this.selectedItems.push(event.data);
            }
            else {
                lodash_es__WEBPACK_IMPORTED_MODULE_4__["remove"](this.selectedItems, function (item) {
                    return (item === event.data);
                });
            }
        }
    };
    CollectionPlayerComponent.prototype.handleSelectAll = function (event) {
        var _this = this;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](event, 'selectAll') === true) {
            event.data.forEach(function (element) {
                if (_this.selectedItems.indexOf(element) === -1) {
                    _this.selectedItems.push(element);
                }
            });
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](event, 'selectAll') === false) {
            this.selectedItems = [];
        }
    };
    CollectionPlayerComponent.prototype.checkStatus = function (status) {
        this.checkDownloadStatus();
        return this.utilService.getPlayerDownloadStatus(status, this.collectionData);
    };
    CollectionPlayerComponent.prototype.checkDownloadStatus = function () {
        if (this.collectionData) {
            var downloadStatus = ['CANCELED', 'CANCEL', 'FAILED', 'DOWNLOAD'];
            var status_1 = this.contentDownloadStatus[this.collectionData.identifier];
            this.collectionData['downloadStatus'] = lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEqual"](downloadStatus, status_1) ? 'DOWNLOAD' :
                (lodash_es__WEBPACK_IMPORTED_MODULE_4__["includes"](['INPROGRESS', 'RESUME', 'INQUEUE'], status_1) ? 'DOWNLOADING' : lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEqual"](status_1, 'COMPLETED') ? 'DOWNLOADED' : status_1);
        }
    };
    CollectionPlayerComponent.prototype.updateCollection = function (collection) {
        var _this = this;
        collection['downloadStatus'] = this.resourceService.messages.stmsg.m0140;
        this.logTelemetry('update-collection');
        var request = {
            contentId: collection.identifier
        };
        this.contentManagerService.updateContent(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
            collection['downloadStatus'] = _this.resourceService.messages.stmsg.m0140;
            _this.showUpdate = false;
        }, function (err) {
            _this.showUpdate = true;
            var errorMessage = !_this.isConnected ? lodash_es__WEBPACK_IMPORTED_MODULE_4__["replace"](_this.resourceService.messages.smsg.m0056, '{contentName}', collection.name) :
                _this.resourceService.messages.fmsg.m0096;
            _this.toasterService.error(errorMessage);
        });
    };
    CollectionPlayerComponent.prototype.exportCollection = function (collection) {
        var _this = this;
        this.logTelemetry('export-collection');
        this.showExportLoader = true;
        this.contentManagerService.exportContent(collection.identifier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (data) {
            _this.showExportLoader = false;
            _this.toasterService.success(_this.resourceService.messages.smsg.m0059);
        }, function (error) {
            _this.showExportLoader = false;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](error, 'error.responseCode') !== 'NO_DEST_FOLDER') {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0091);
            }
        });
    };
    CollectionPlayerComponent.prototype.isYoutubeContentPresent = function (collection) {
        this.logTelemetry('is-youtube-in-collection');
        this.showModal = this.offlineCardService.isYoutubeContent(collection);
        if (!this.showModal) {
            this.downloadCollection(collection);
        }
    };
    CollectionPlayerComponent.prototype.downloadCollection = function (collection) {
        var _this = this;
        this.showDownloadLoader = true;
        this.disableDelete = false;
        collection['downloadStatus'] = this.resourceService.messages.stmsg.m0140;
        this.logTelemetry('download-collection');
        this.contentManagerService.downloadContentId = collection.identifier;
        this.contentManagerService.downloadContentData = collection;
        this.contentManagerService.failedContentName = collection.name;
        this.contentManagerService.startDownload({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
            _this.contentManagerService.downloadContentId = '';
            _this.contentManagerService.downloadContentData = {};
            _this.showDownloadLoader = false;
            collection['downloadStatus'] = _this.resourceService.messages.stmsg.m0140;
        }, function (error) {
            _this.disableDelete = true;
            _this.showDownloadLoader = false;
            _this.contentManagerService.downloadContentId = '';
            _this.contentManagerService.downloadContentData = {};
            _this.contentManagerService.failedContentName = '';
            collection['downloadStatus'] = _this.resourceService.messages.stmsg.m0138;
            if (!(error.error.params.err === 'LOW_DISK_SPACE')) {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0090);
            }
        });
    };
    CollectionPlayerComponent.prototype.deleteCollection = function (collectionData) {
        var _this = this;
        this.disableDelete = true;
        this.logTelemetry('delete-collection');
        var request = { request: { contents: [collectionData.identifier] } };
        this.contentManagerService.deleteContent(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
            _this.toasterService.success(_this.resourceService.messages.stmsg.desktop.deleteTextbookSuccessMessage);
            collectionData['downloadStatus'] = 'DOWNLOAD';
            collectionData['desktopAppMetadata.isAvailable'] = false;
            _this.closeCollectionPlayer();
        }, function (err) {
            _this.disableDelete = false;
            _this.toasterService.error(_this.resourceService.messages.etmsg.desktop.deleteTextbookErrorMessage);
        });
    };
    CollectionPlayerComponent.prototype.logTelemetry = function (id) {
        var interactData = {
            context: {
                env: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.route.snapshot.data.telemetry, 'env') || 'content',
                cdata: [],
            },
            edata: {
                id: id,
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.route.snapshot.data.telemetry, 'pageid') || 'play-collection',
            },
            object: {
                id: this.collectionData['identifier'],
                type: this.collectionData['contentType'],
                ver: "" + this.collectionData['pkgVersion'] || '1.0',
            }
        };
        this.telemetryService.interact(interactData);
    };
    CollectionPlayerComponent.prototype.setMimeTypeFilters = function () {
        this.mimeTypeFilters = [
            { text: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'frmelmnts.btn.all', 'All'), value: 'all' },
            { text: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'frmelmnts.btn.video', 'Video'), value: 'video' },
            { text: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'frmelmnts.btn.interactive', 'Interactive'), value: 'interactive' },
            { text: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'frmelmnts.btn.docs', 'Docs'), value: 'docs' }
        ];
    };
    return CollectionPlayerComponent;
}());



/***/ }),

/***/ "FXgK":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-licence/content-licence.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContentLicenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLicenceComponent", function() { return ContentLicenceComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");


var ContentLicenceComponent = (function () {
    function ContentLicenceComponent(resourceService) {
        this.resourceService = resourceService;
        this.expanded = false;
    }
    ContentLicenceComponent.prototype.ngOnInit = function () {
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_1__["upperCase"](this.resourceService.instance);
        if (this.content && lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.content, 'attributions')) {
            var attributions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isString"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.content, 'attributions')) ?
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.content, 'attributions').split(',') : lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.content, 'attributions');
            this.attributions = (lodash_es__WEBPACK_IMPORTED_MODULE_1__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["uniq"](attributions).sort()).join(', '));
        }
    };
    return ContentLicenceComponent;
}());



/***/ }),

/***/ "HfFN":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-chapterlist/content-chapterlist.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! exports provided: RenderType_ContentChapterlistComponent, View_ContentChapterlistComponent_0, View_ContentChapterlistComponent_Host_0, ContentChapterlistComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentChapterlistComponent", function() { return RenderType_ContentChapterlistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentChapterlistComponent_0", function() { return View_ContentChapterlistComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentChapterlistComponent_Host_0", function() { return View_ContentChapterlistComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentChapterlistComponentNgFactory", function() { return ContentChapterlistComponentNgFactory; });
/* harmony import */ var _content_chapterlist_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-chapterlist.component.scss.shim.ngstyle */ "rX4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _content_chapterlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-chapterlist.component */ "7MCS");




var styles_ContentChapterlistComponent = [_content_chapterlist_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentChapterlistComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentChapterlistComponent, data: {} });

function View_ContentChapterlistComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "sbchapter-open__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ContentChapterlistComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "sbchapter-open__topics__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ContentChapterlistComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "sbchapter-open__topic"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onTocChapterClick($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "sbchapter__item--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sbchapter-open__topic"; var currVal_1 = _ck(_v, 3, 0, (((_co.activeContent == null) ? null : _co.activeContent.sbUniqueIdentifier) === ((_v.context.$implicit == null) ? null : _v.context.$implicit.sbUniqueIdentifier))); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_2); }); }
function View_ContentChapterlistComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "sbchapter-open__topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.children); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentChapterlistComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sbchapter-open__topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.children == null) ? null : _v.context.$implicit.children.length)); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.children == null) ? null : _v.context.$implicit.children.length)); _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContentChapterlistComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.children); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentChapterlistComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sbchapter-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.children == null) ? null : _v.context.$implicit.children.length)); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.children == null) ? null : _v.context.$implicit.children.length)); _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContentChapterlistComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "sbtoc-container sbtoc-container--detailed"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentDetails == null) ? null : _co.contentDetails.children); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentChapterlistComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentChapterlistComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentDetails == null) ? null : ((_co.contentDetails.children == null) ? null : _co.contentDetails.children.length)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentChapterlistComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-chapterlist", [], null, null, null, View_ContentChapterlistComponent_0, RenderType_ContentChapterlistComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _content_chapterlist_component__WEBPACK_IMPORTED_MODULE_3__["ContentChapterlistComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentChapterlistComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content-chapterlist", _content_chapterlist_component__WEBPACK_IMPORTED_MODULE_3__["ContentChapterlistComponent"], View_ContentChapterlistComponent_Host_0, { contentDetails: "contentDetails", activeContent: "activeContent" }, { tocChapterClick: "tocChapterClick" }, []);



/***/ }),

/***/ "L4qV":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/contentplayer-page/contentplayer-page.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-single-resource[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 56rem;\n  margin: 0 auto;\n}\n@media (min-width: 1280px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 60rem;\n  }\n}\n@media (min-width: 1440px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 64rem;\n  }\n}\n@media (min-width: 1900px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 68rem;\n  }\n}\n  .toc-content {\n  width: 100%;\n  height: 100%;\n}\n  .toc-content app-credits-and-licence sb-accordion .sbaccordion__panel {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY29udGVudHBsYXllci1wYWdlL2NvbnRlbnRwbGF5ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNwVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW1ORjtBQzVMSTtFRDNCSjtJQU1JLGdCQUFBO0VBcU5GO0FBQ0Y7QUNqTUk7RUQzQko7SUFTSSxnQkFBQTtFQXVORjtBQUNGO0FDdE1JO0VEM0JKO0lBWUksZ0JBQUE7RUF5TkY7QUFDRjtBQXJORTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBd05KO0FBcE5RO0VBQ0UsZ0JBQUE7QUFzTlYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYXllci1oZWxwZXIvY29tcG9uZW50cy9jb250ZW50cGxheWVyLXBhZ2UvY29udGVudHBsYXllci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbWl4aW5zXCI7XG5cbi5zYi1zaW5nbGUtcmVzb3VyY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSg4OTZweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBAaW5jbHVkZSByZXNwb25kLWFib3ZlKGxnKSB7XG4gICAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oOTYwcHgpO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoeGwpIHtcbiAgICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSgxMDI0cHgpO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoeHh4bCkge1xuICAgIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDEwODhweCk7XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnRvYy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBhcHAtY3JlZGl0cy1hbmQtbGljZW5jZSB7XG4gICAgICBzYi1hY2NvcmRpb24ge1xuICAgICAgICAuc2JhY2NvcmRpb25fX3BhbmVsIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gIE1FRElBIFFVRVJJRVNcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEEgbWFwIG9mIGJyZWFrcG9pbnRzLlxuJGJyZWFrcG9pbnRzOiAoXG4gIHhzOiA1NzZweCxcbiAgc206IDc2OHB4LFxuICBtZDogOTkycHgsXG4gIGxnOiAxMjgwcHgsXG4gIHhsOiAxNDQwcHgsXG4gIHh4bDogMTYwMHB4LFxuICB4eHhsOiAxOTAwcHhcbik7XG5cblxuLy9cbi8vICBSRVNQT05EIEFCT1ZFXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHNtKSB7fVxuQG1peGluIHJlc3BvbmQtYWJvdmUoJGJyZWFrcG9pbnQpIHtcblxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuXG4vL1xuLy8gIFJFU1BPTkQgQkVMT1dcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAoJGJyZWFrcG9pbnQtdmFsdWUgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRVRXRUVOXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWJldHdlZW4oc20sIG1kKSB7fVxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xuXG4gIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xuXG4gICAgLy8gR2V0IHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMuXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICR1cHBlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOiAoJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxuICB9IEBlbHNlIHtcblxuICAgIC8vIElmIGxvd2VyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xuXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgfVxuXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciB1cHBlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICB9XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "LJSI":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared-feature/interfaces/deviceProfile.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "P/Kf":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-player/content-player.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ContentPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponent", function() { return ContentPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");
/* harmony import */ var _public_module_offline_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/module/offline/services */ "3yhm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var OFFLINE_ARTIFACT_MIME_TYPES = ['application/epub', 'video/webm', 'video/mp4', 'application/pdf'];


var ContentPlayerComponent = (function () {
    function ContentPlayerComponent(router, layoutService, navigationHelperService, playerService, resourceService, contentManagerService, utilService) {
        this.router = router;
        this.layoutService = layoutService;
        this.navigationHelperService = navigationHelperService;
        this.playerService = playerService;
        this.resourceService = resourceService;
        this.contentManagerService = contentManagerService;
        this.utilService = utilService;
        this.assessmentEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionScoreSubmitEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionScoreReviewEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playerOnDestroyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sceneChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletedContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentRatingModal = false;
        this.contentDeleted = false;
        this.isContentPresent = true;
        this.objectRollUp = {};
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.CONSTANT = {
            ACCESSEVENT: 'renderer:question:submitscore',
            ACCESSREVIEWEVENT: 'renderer:question:reviewAssessment'
        };
        this.isLoading = false;
        this.isDesktopApp = false;
        this.buildNumber = document.getElementById('buildNumber')
            ? document.getElementById('buildNumber').value : '1.0';
        this.previewCdnUrl = document.getElementById('previewCdnUrl')
            ? document.getElementById('previewCdnUrl').value : undefined;
        this.isCdnWorking = document.getElementById('cdnWorking')
            ? document.getElementById('cdnWorking').value : 'no';
    }
    ContentPlayerComponent.prototype.ngAfterViewInit = function () { };
    ContentPlayerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.isDesktopApp && this.isContentDeleted) {
            this.isContentDeleted.subscribe(function (data) {
                _this.contentDeleted = data.value && !_this.router.url.includes('browse');
            });
        }
        this.contentRatingModal = false;
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.playerConfig)) {
            this.objectRollUp = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.playerConfig, 'context.objectRollup') || {};
        }
    };
    ContentPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDesktopApp = this.utilService.isDesktopApp;
        this.checkFullScreenView();
        if (this.contentProgressEvents$) {
            this.contentProgressEvents$.subscribe(function (data) {
                _this.contentProgressEvents$.next(data);
            });
        }
        this.initLayout();
        if (this.isDesktopApp) {
            this.contentManagerService.deletedContent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
                _this.deleteContent(data);
            });
        }
    };
    ContentPlayerComponent.prototype.deleteContent = function (event) {
        if (!this.router.url.includes('mydownloads')) {
            this.contentDeleted = true;
            this.deletedContent.emit(event);
        }
    };
    ContentPlayerComponent.prototype.checkContentDownloading = function (event) {
        if (this.isDesktopApp && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.contentData, 'desktopAppMetadata.isAvailable')) {
            this.contentDeleted = false;
            var contentDetails = {
                contentId: event.identifier,
                contentData: event
            };
            this.contentData = event;
            this.playerConfig = this.playerService.getConfig(contentDetails);
        }
    };
    ContentPlayerComponent.prototype.checkFullScreenView = function () {
        var _this = this;
        this.navigationHelperService.contentFullScreenEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (isFullScreen) {
            _this.isFullScreenView = isFullScreen;
        });
    };
    ContentPlayerComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ContentPlayerComponent.prototype.generateScoreSubmitEvent = function (event) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](event.data) === (lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](this.CONSTANT.ACCESSEVENT))) {
            this.questionScoreSubmitEvents.emit(event);
        }
        if (event.data.toLowerCase() === (this.CONSTANT.ACCESSREVIEWEVENT).toLowerCase()) {
            this.questionScoreReviewEvents.emit(event);
        }
    };
    ContentPlayerComponent.prototype.onAssessmentEvents = function (event) {
        this.assessmentEvents.emit(event);
    };
    ContentPlayerComponent.prototype.onQuestionScoreSubmitEvents = function (event) {
        this.questionScoreSubmitEvents.emit(event);
    };
    ContentPlayerComponent.prototype.onQuestionScoreReviewEvents = function (event) {
        this.questionScoreReviewEvents.emit(event);
    };
    ContentPlayerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return ContentPlayerComponent;
}());



/***/ }),

/***/ "S/RL":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/contentplayer-page/contentplayer-page.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_ContentPlayerPageComponent, View_ContentPlayerPageComponent_0, View_ContentPlayerPageComponent_Host_0, ContentPlayerPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentPlayerPageComponent", function() { return RenderType_ContentPlayerPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerPageComponent_0", function() { return View_ContentPlayerPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerPageComponent_Host_0", function() { return View_ContentPlayerPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerPageComponentNgFactory", function() { return ContentPlayerPageComponentNgFactory; });
/* harmony import */ var _contentplayer_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentplayer-page.component.scss.shim.ngstyle */ "L4qV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _credits_and_licence_credits_and_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../credits-and-licence/credits-and-licence.component.ngfactory */ "lE07");
/* harmony import */ var _credits_and_licence_credits_and_licence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credits-and-licence/credits-and-licence.component */ "Dha3");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/expansion/index.ngfactory */ "W3M2");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _content_player_content_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-player/content-player.component.ngfactory */ "9KZG");
/* harmony import */ var _content_player_content_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-player/content-player.component */ "P/Kf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _contentplayer_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contentplayer-page.component */ "uM3J");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
























var styles_ContentPlayerPageComponent = [_contentplayer_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentPlayerPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentPlayerPageComponent, data: {} });

function View_ContentPlayerPageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-credits-and-licence", [], null, null, null, _credits_and_licence_credits_and_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CreditsAndLicenceComponent_0"], _credits_and_licence_credits_and_licence_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CreditsAndLicenceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _credits_and_licence_credits_and_licence_component__WEBPACK_IMPORTED_MODULE_3__["CreditsAndLicenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], { contentData: [0, "contentData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentDetails; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentPlayerPageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "training-relevant__class mb-4 sb-color-gray-400 fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.board))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.collectionData.se_boards; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentPlayerPageComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "training-relevant__medium mb-4 sb-color-gray-400 fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.medium))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.collectionData == null) ? null : ((_co.collectionData.se_mediums == null) ? null : _co.collectionData.se_mediums.join(", "))); _ck(_v, 4, 0, currVal_1); }); }
function View_ContentPlayerPageComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "training-relevant__subject mb-4 sb-color-gray-400 fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.class))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.collectionData.se_gradeLevels; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentPlayerPageComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "training-relevant__medium mb-4 sb-color-gray-400 fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.userType))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.collectionData == null) ? null : ((_co.collectionData.audience == null) ? null : _co.collectionData.audience.join(", "))); _ck(_v, 4, 0, currVal_1); }); }
function View_ContentPlayerPageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "mat-accordion", [["class", "sb-mat-accordion mb-16 mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _headers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 17, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [2, "_mat-animation-noopable", null], [4, "height", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4374528, [[1, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "mat-panel-title", [["class", "sb-mat-accordion__title mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 8, "div", [["class", "sb-mat-accordion__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_15 = ((_co.collectionData == null) ? null : _co.collectionData.se_boards); _ck(_v, 15, 0, currVal_15); var currVal_16 = ((_co.collectionData == null) ? null : _co.collectionData.se_mediums); _ck(_v, 17, 0, currVal_16); var currVal_17 = ((_co.collectionData == null) ? null : _co.collectionData.se_gradeLevels); _ck(_v, 19, 0, currVal_17); var currVal_18 = ((_co.collectionData == null) ? null : _co.collectionData.audience); _ck(_v, 21, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multi; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expanded; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasSpacing(); _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel._headerId; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled ? (-1) : 0); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getPanelId(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel.disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded(); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "after"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "before"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getHeaderHeight(); _ck(_v, 8, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.collectionRelevantFor))); _ck(_v, 12, 0, currVal_14); }); }
function View_ContentPlayerPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "toc-content text-left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_11__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-content-player", [], null, [[null, "assessmentEvents"], [null, "questionScoreSubmitEvents"], [null, "questionScoreReviewEvents"], [null, "deletedContent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("assessmentEvents" === en)) {
        var pd_0 = (_co.onAssessmentEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("questionScoreSubmitEvents" === en)) {
        var pd_1 = (_co.onQuestionScoreSubmitEvents($event) !== false);
        ad = (pd_1 && ad);
    } if (("questionScoreReviewEvents" === en)) {
        var pd_2 = (_co.onQuestionScoreReviewEvents($event) !== false);
        ad = (pd_2 && ad);
    } if (("deletedContent" === en)) {
        var pd_3 = (_co.goBack() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _content_player_content_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ContentPlayerComponent_0"], _content_player_content_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ContentPlayerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4964352, null, 0, _content_player_content_player_component__WEBPACK_IMPORTED_MODULE_14__["ContentPlayerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_17__["NavigationHelperService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__["PublicPlayerService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_19__["ContentManagerService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_20__["UtilService"]], { playerConfig: [0, "playerConfig"], contentProgressEvents$: [1, "contentProgressEvents$"], isContentDeleted: [2, "isContentDeleted"], isContentPresent: [3, "isContentPresent"], contentData: [4, "contentData"] }, { assessmentEvents: "assessmentEvents", questionScoreSubmitEvents: "questionScoreSubmitEvents", questionScoreReviewEvents: "questionScoreReviewEvents", deletedContent: "deletedContent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.playerConfig; var currVal_2 = _co.contentProgressEvents$; var currVal_3 = _co.isContentDeleted; var currVal_4 = true; var currVal_5 = _co.contentDetails; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.contentDetails; _ck(_v, 6, 0, currVal_6); var currVal_7 = _co.collectionData; _ck(_v, 8, 0, currVal_7); }, null); }
function View_ContentPlayerPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tocPage; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentPlayerPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contentplayer-page", [], null, null, null, View_ContentPlayerPageComponent_0, RenderType_ContentPlayerPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _contentplayer_page_component__WEBPACK_IMPORTED_MODULE_21__["ContentPlayerPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_22__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_17__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_23__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_20__["UtilService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__["PublicPlayerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentPlayerPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contentplayer-page", _contentplayer_page_component__WEBPACK_IMPORTED_MODULE_21__["ContentPlayerPageComponent"], View_ContentPlayerPageComponent_Host_0, { contentDetails: "contentDetails", collectionData: "collectionData", playerConfig: "playerConfig", tocPage: "tocPage", dialCode: "dialCode", isContentPresent: "isContentPresent", objectRollUp: "objectRollUp", contentProgressEvents$: "contentProgressEvents$" }, { assessmentEvents: "assessmentEvents", questionScoreSubmitEvents: "questionScoreSubmitEvents", questionScoreReviewEvents: "questionScoreReviewEvents", contentDownloaded: "contentDownloaded", deletedContent: "deletedContent" }, []);



/***/ }),

/***/ "UeM3":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/content-player/content-player.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ContentPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponent", function() { return ContentPlayerComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");
/* harmony import */ var _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @project-sunbird/client-services/blocs */ "nJui");
/* harmony import */ var _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_9__);











var ContentPlayerComponent = (function () {
    function ContentPlayerComponent(activatedRoute, navigationHelperService, userService, resourceService, router, toasterService, windowScrollService, playerService, publicPlayerService, copyContentService, permissionService, contentUtilsServiceService, popupControlService, configService, layoutService, telemetryService) {
        this.activatedRoute = activatedRoute;
        this.navigationHelperService = navigationHelperService;
        this.userService = userService;
        this.resourceService = resourceService;
        this.router = router;
        this.toasterService = toasterService;
        this.windowScrollService = windowScrollService;
        this.playerService = playerService;
        this.publicPlayerService = publicPlayerService;
        this.copyContentService = copyContentService;
        this.permissionService = permissionService;
        this.contentUtilsServiceService = contentUtilsServiceService;
        this.popupControlService = popupControlService;
        this.configService = configService;
        this.layoutService = layoutService;
        this.telemetryService = telemetryService;
        this.showPlayer = false;
        this.showError = false;
        this.showLoader = true;
        this.isFullScreenView = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.objectRollup = {};
        this.isQuestionSet = false;
        this.isDesktopApp = false;
        this.playerOption = {
            showContentRating: true
        };
    }
    ContentPlayerComponent.prototype.canDeactivate = function () {
        var deviceType = this.telemetryService.getDeviceType();
        return deviceType === 'Desktop' && this.isQuestionSet ? false : true;
    };
    ContentPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isQuestionSet = lodash_es__WEBPACK_IMPORTED_MODULE_2__["includes"](this.router.url, 'questionset');
        this.isDesktopApp = this.userService.isDesktopApp;
        this.initLayout();
        this.activatedRoute.params.subscribe(function (params) {
            _this.showPlayer = false;
            _this.contentId = params.contentId;
            _this.contentStatus = params.contentStatus;
            _this.dialCode = lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](_this.activatedRoute, 'snapshot.queryParams.dialCode');
            if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](_this.activatedRoute, 'snapshot.queryParams.l1Parent')) {
                _this.objectRollup = {
                    l1: lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](_this.activatedRoute, 'snapshot.queryParams.l1Parent')
                };
            }
            _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_9__["CsGroupAddableBloc"].instance.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this.unsubscribe$)).subscribe(function (data) {
                _this.groupId = lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](data, 'groupId') || lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](_this.activatedRoute.snapshot, 'queryParams.groupId');
            });
            _this.getContent();
            _project_sunbird_client_services_blocs__WEBPACK_IMPORTED_MODULE_9__["CsGroupAddableBloc"].instance.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this.unsubscribe$)).subscribe(function (data) {
                _this.isGroupAdmin = !lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](_this.activatedRoute.snapshot, 'queryParams.groupId'))
                    && lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](data.params, 'groupData.isAdmin');
            });
        });
        this.navigationHelperService.contentFullScreenEvent.
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (isFullScreen) {
            _this.isFullScreenView = isFullScreen;
        });
    };
    ContentPlayerComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ContentPlayerComponent.prototype.setTelemetryData = function () {
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: this.groupId ? [{ id: this.groupId, type: 'Group' }] : [],
            },
            object: {
                id: this.contentId,
                type: this.contentData.contentType,
                ver: this.contentData.pkgVersion ? this.contentData.pkgVersion.toString() : '1.0'
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.router.url,
                subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
                duration: this.pageLoadDuration
            }
        };
        this.objectInteract = {
            id: this.contentId,
            type: this.contentData.contentType,
            ver: this.contentData.pkgVersion ? this.contentData.pkgVersion.toString() : '1.0'
        };
        this.copyContentInteractEdata = {
            id: 'copy-content-button',
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid
        };
    };
    ContentPlayerComponent.prototype.goBack = function () {
        this.navigationHelperService.goBack();
    };
    ContentPlayerComponent.prototype.getContent = function () {
        var _this = this;
        if (this.isQuestionSet) {
            this.getQuestionSetHierarchy();
        }
        else if (this.userService.loggedIn) {
            var option = { params: this.configService.appConfig.ContentPlayer.contentApiQueryParams };
            if (this.contentStatus && this.contentStatus === 'Unlisted') {
                option.params = { mode: 'edit' };
            }
            this.playerService.getContent(this.contentId, option).subscribe(function (response) {
                _this.showLoader = false;
                if (response.result.content.status === 'Live' || response.result.content.status === 'Unlisted') {
                    _this.showPlayer = true;
                    var contentDetails = {
                        contentId: _this.contentId,
                        contentData: response.result.content
                    };
                    _this.playerConfig = _this.playerService.getConfig(contentDetails);
                    _this.contentData = response.result.content;
                    _this.setTelemetryData();
                    _this.windowScrollService.smoothScroll('content-player');
                }
                else {
                    _this.toasterService.warning(_this.resourceService.messages.imsg.m0027);
                }
            }, function (err) {
                _this.showLoader = false;
                _this.showError = true;
                _this.errorMessage = _this.resourceService.messages.stmsg.m0009;
            });
        }
        else {
            this.getPublicContent();
        }
    };
    ContentPlayerComponent.prototype.getQuestionSetHierarchy = function () {
        var _this = this;
        var serveiceRef = this.userService.loggedIn ? this.playerService : this.publicPlayerService;
        this.publicPlayerService.getQuestionSetHierarchy(this.contentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (response) {
            _this.showLoader = false;
            var contentDetails = {
                contentId: _this.contentId,
                contentData: response.questionSet
            };
            _this.playerConfig = serveiceRef.getConfig(contentDetails);
            _this.playerConfig.context.objectRollup = _this.objectRollup;
            _this.contentData = response.questionSet;
            _this.showPlayer = true;
        }, function (err) {
            _this.showLoader = false;
            _this.showError = true;
            _this.errorMessage = _this.resourceService.messages.stmsg.m0009;
        });
    };
    ContentPlayerComponent.prototype.getPublicContent = function () {
        var _this = this;
        var options = { dialCode: this.dialCode };
        var params = { params: this.configService.appConfig.PublicPlayer.contentApiQueryParams };
        this.publicPlayerService.getContent(this.contentId, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (response) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](response, 'result.content.status') === 'Unlisted') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])({
                    code: 'UNLISTED_CONTENT'
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (response) {
            _this.showLoader = false;
            var contentDetails = {
                contentId: _this.contentId,
                contentData: response.result.content
            };
            _this.playerConfig = _this.publicPlayerService.getConfig(contentDetails, options);
            _this.playerConfig.context.objectRollup = _this.objectRollup;
            _this.contentData = response.result.content;
            _this.showPlayer = true;
        }, function (err) {
            _this.showLoader = false;
            _this.showError = true;
            _this.errorMessage = _this.resourceService.messages.stmsg.m0009;
        });
    };
    ContentPlayerComponent.prototype.copyContent = function (contentData) {
        var _this = this;
        this.copyContentService.copyContent(contentData).subscribe(function (response) {
            _this.toasterService.success(_this.resourceService.messages.smsg.m0042);
        }, function (err) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0008);
        });
    };
    ContentPlayerComponent.prototype.onShareLink = function () {
        this.shareLink = this.contentUtilsServiceService.getPublicShareUrl(this.contentId, this.contentData.mimeType);
        this.setTelemetryShareData(this.contentData);
    };
    ContentPlayerComponent.prototype.ngAfterViewInit = function () {
        this.pageLoadDuration = this.navigationHelperService.getPageLoadTime();
    };
    ContentPlayerComponent.prototype.setTelemetryShareData = function (param) {
        this.telemetryShareData = [{
                id: param.identifier,
                type: param.contentType,
                ver: param.pkgVersion ? param.pkgVersion.toString() : '1.0'
            }];
    };
    ContentPlayerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return ContentPlayerComponent;
}());



/***/ }),

/***/ "XPDT":
/*!*************************************************!*\
  !*** ./src/app/modules/shared-feature/index.ts ***!
  \*************************************************/
/*! exports provided: csUserServiceFactory, csNotificationServiceFactory, SharedFeatureModule, ProfileFrameworkPopupComponent, TermsAndConditionsPopupComponent, OtpPopupComponent, BatchInfoComponent, SsoMergeConfirmationComponent, ValidateTeacherIdentifierPopupComponent, UserLocationComponent, Stage, UserOnboardingComponent, OnboardingUserSelectionComponent, ConfirmationPopupComponent, CertPreviewPopupComponent, ContentPlayerComponent, GlobalConsentPiiComponent, CollectionPlayerComponent, YearOfBirthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-feature.module */ "GX4e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csUserServiceFactory", function() { return _shared_feature_module__WEBPACK_IMPORTED_MODULE_0__["csUserServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csNotificationServiceFactory", function() { return _shared_feature_module__WEBPACK_IMPORTED_MODULE_0__["csNotificationServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedFeatureModule", function() { return _shared_feature_module__WEBPACK_IMPORTED_MODULE_0__["SharedFeatureModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "p78a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileFrameworkPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ProfileFrameworkPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["TermsAndConditionsPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtpPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["OtpPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchInfoComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["BatchInfoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsoMergeConfirmationComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["SsoMergeConfirmationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateTeacherIdentifierPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ValidateTeacherIdentifierPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLocationComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["UserLocationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["Stage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserOnboardingComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["UserOnboardingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnboardingUserSelectionComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["OnboardingUserSelectionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ConfirmationPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertPreviewPopupComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["CertPreviewPopupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ContentPlayerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConsentPiiComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["GlobalConsentPiiComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionPlayerComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["CollectionPlayerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearOfBirthComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["YearOfBirthComponent"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "YiZV");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "YiZV":
/*!************************************************************!*\
  !*** ./src/app/modules/shared-feature/interfaces/index.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviceProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deviceProfile */ "LJSI");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "hPGq":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/content-player/content-player.component.ngfactory.js ***!
  \********************************************************************************************************/
/*! exports provided: RenderType_ContentPlayerComponent, View_ContentPlayerComponent_0, View_ContentPlayerComponent_Host_0, ContentPlayerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentPlayerComponent", function() { return RenderType_ContentPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerComponent_0", function() { return View_ContentPlayerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentPlayerComponent_Host_0", function() { return View_ContentPlayerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponentNgFactory", function() { return ContentPlayerComponentNgFactory; });
/* harmony import */ var _content_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-player.component.scss.shim.ngstyle */ "pkCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/directives/permission/permission.directive */ "aRTg");
/* harmony import */ var _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/add-to-group/add-to-group.directive */ "7aMg");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_activity_dashboard_activity_dashboard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/activity-dashboard/activity-dashboard.service */ "XBEe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component.ngfactory */ "kasK");
/* harmony import */ var _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component */ "DJnx");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../player-helper/components/contentplayer-page/contentplayer-page.component.ngfactory */ "S/RL");
/* harmony import */ var _player_helper_components_contentplayer_page_contentplayer_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../player-helper/components/contentplayer-page/contentplayer-page.component */ "uM3J");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _content_player_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./content-player.component */ "UeM3");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _shared_services_window_scroll_window_scroll_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/services/window-scroll/window-scroll.service */ "b1H8");
/* harmony import */ var _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../core/services/player/player.service */ "ikcW");
/* harmony import */ var _core_services_copy_content_copy_content_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../core/services/copy-content/copy-content.service */ "4KAb");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");





































var styles_ContentPlayerComponent = [_content_player_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentPlayerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentPlayerComponent, data: {} });

function View_ContentPlayerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.subject); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentPlayerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot-divider"]], null, null, null, null, null))], null, null); }
function View_ContentPlayerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.gradeLevel); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentPlayerComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["appPermission", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.copyContent(_co.contentData) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_2__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _core_directives_permission_permission_directive__WEBPACK_IMPORTED_MODULE_5__["PermissionDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"]], { permission: [0, "permission"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "blue clone outline icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.objectInteract; var currVal_1 = _co.copyContentInteractEdata; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 3, 0, "CONTENT_CREATOR", "CONTENT_REVIEWER"); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copy))); _ck(_v, 5, 0, currVal_3); }); }
function View_ContentPlayerComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "certified-course__btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "button", [["appAddToGroup", ""], ["class", "sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).clickEvent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, "CS_GROUP_SERVICE", _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_7__["csGroupServiceFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 81920, null, 0, _shared_directives_add_to_group_add_to_group_directive__WEBPACK_IMPORTED_MODULE_7__["AddToGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], "CS_GROUP_SERVICE", _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__["TelemetryService"], _shared_services_activity_dashboard_activity_dashboard_service__WEBPACK_IMPORTED_MODULE_11__["ActivityDashboardService"]], { pageId: [0, "pageId"], identifier: [1, "identifier"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.primaryCategory.toLowerCase()); var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.identifier); _ck(_v, 3, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.AddtoGroup))); _ck(_v, 4, 0, currVal_2); }); }
function View_ContentPlayerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "content-header__content w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "content-header__info mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "d-flex flex-ai-end flex-w-wrap content-header__buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "a", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["href", "javascript:void(0)"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.onShareLink();
        var pd_0 = ((_co.sharelinkModal = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "blue share alternate icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.subject); _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.contentData.gradeLevel; _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.contentData == null) ? null : _co.contentData.gradeLevel); _ck(_v, 10, 0, currVal_3); var currVal_5 = (!_co.isDesktopApp && ((_co.permissionService == null) ? null : _co.permissionService.permissionAvailable)); _ck(_v, 16, 0, currVal_5); var currVal_6 = _co.isGroupAdmin; _ck(_v, 18, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData.name; _ck(_v, 3, 0, currVal_0); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.share))); _ck(_v, 14, 0, currVal_4); }); }
function View_ContentPlayerComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_14__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentPlayerComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-share-link", [], null, null, null, _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ShareLinkComponent_0"], _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ShareLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_18__["ShareLinkComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], { shareLink: [0, "shareLink"], telemetryShareData: [1, "telemetryShareData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shareLink; var currVal_1 = _co.telemetryShareData; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ContentPlayerComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.sharelinkModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ContentPlayerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[1, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentPlayerComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "relative9"]], [[4, "display", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "sb-single-resource"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "cc-player sb-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "section", [["class", "sb-g-col-xs-12 sb-g-col-md-12 sb-g-col-lg-12 sb-g-col-xxxl-16 cc-player__video"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_23__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-contentplayer-page", [], null, null, null, _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_ContentPlayerPageComponent_0"], _player_helper_components_contentplayer_page_contentplayer_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_ContentPlayerPageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 770048, null, 0, _player_helper_components_contentplayer_page_contentplayer_page_component__WEBPACK_IMPORTED_MODULE_25__["ContentPlayerPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__["NavigationHelperService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_26__["UtilService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__["TelemetryService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_27__["PublicPlayerService"]], { contentDetails: [0, "contentDetails"], playerConfig: [1, "playerConfig"], tocPage: [2, "tocPage"], isContentPresent: [3, "isContentPresent"], objectRollUp: [4, "objectRollUp"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.telemetryImpression; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.contentData; var currVal_3 = _co.playerConfig; var currVal_4 = true; var currVal_5 = _co.isContentPresent; var currVal_6 = _co.objectRollup; _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.showLoader; _ck(_v, 9, 0, currVal_7); var currVal_8 = _co.sharelinkModal; _ck(_v, 11, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.showLoader ? "block" : "none"); _ck(_v, 0, 0, currVal_0); }); }
function View_ContentPlayerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_29__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentPlayerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.layoutConfiguration; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "relative position mt-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_5 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_7 = _co.contentData; _ck(_v, 13, 0, currVal_7); var currVal_8 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 15, 0, currVal_8); var currVal_9 = _co.contentData; _ck(_v, 17, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 11, 0, currVal_6); }); }
function View_ContentPlayerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-player", [], null, [["window", "beforeunload"]], function (_v, en, $event) { var ad = true; if (("window:beforeunload" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).canDeactivate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ContentPlayerComponent_0, RenderType_ContentPlayerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _content_player_component__WEBPACK_IMPORTED_MODULE_30__["ContentPlayerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__["NavigationHelperService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_31__["UserService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"], _shared_services_window_scroll_window_scroll_service__WEBPACK_IMPORTED_MODULE_32__["WindowScrollService"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_33__["PlayerService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_27__["PublicPlayerService"], _core_services_copy_content_copy_content_service__WEBPACK_IMPORTED_MODULE_34__["CopyContentService"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_35__["ContentUtilsServiceService"], _service_popup_control_service__WEBPACK_IMPORTED_MODULE_36__["PopupControlService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_3__["TelemetryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentPlayerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content-player", _content_player_component__WEBPACK_IMPORTED_MODULE_30__["ContentPlayerComponent"], View_ContentPlayerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "jHUg":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/collection-player/collection-player.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  min-height: 0.875rem;\n}\n.content-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .content-header__content[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.content-header__title[_ngcontent-%COMP%] {\n  color: var(--primary-400);\n  font-size: 1.125rem;\n}\n.content-header__info[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  font-size: 0.875rem;\n  max-height: 48px;\n  overflow-y: auto;\n}\n.content-header[_ngcontent-%COMP%]   .dot-divider[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  border-radius: 100%;\n  background-color: var(--gray-800);\n  display: inline-block;\n  margin: 0px 0.5rem;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .content-header__buttons[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .ui.container.sb-toc-view-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n  }\n}\n[_nghost-%COMP%]   .main-side-toc-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .main-side-toc-content[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 100%;\n  }\n}\n@media screen and (min-width: 240px) and (max-width: 767px) {\n  .toggleInMobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n  .sb-toc-items sb-accordion .sbaccordion__panel-content {\n  overflow: inherit;\n  max-height: 100%;\n  border-top: 0px;\n  background-color: var(--white);\n}\n  .main-side-toc-content sb-toc-item .sb-card-swap {\n  flex-direction: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtZmVhdHVyZS9jb21wb25lbnRzL2NvbGxlY3Rpb24tcGxheWVyL2NvbGxlY3Rpb24tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWl4aW5zL19tZWRpYS1xdWVyaWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUN6QkY7QURxR0EsVUFBQTtBQ3JUQTtFQUVFLG9CQUFBO0FBbU5GO0FBbE5JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFvTlI7QUNuS0k7RURwREE7SUFLTSxjQUFBO0VBc05SO0FBQ0Y7QUFwTkk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBc05SO0FBbk5JO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxTk47QUFsTkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFvTlI7QUMzTEk7RURyQkE7SUFDRSxrQkFBQTtFQW1OSjtBQUNGO0FDaE1JO0VEWkE7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0VBZ05KO0FBQ0Y7QUE3TUU7RUFDRSxnQkFBQTtBQStNSjtBQzFNSTtFRE5GO0lBTUksWUFBQTtJQUNBLGdCQUFBO0VBOE1KO0FBQ0Y7QUF6TUE7RUFDRTtJQUNFLGFBQUE7RUE0TUY7QUFDRjtBQXRNTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUF3TVI7QUFsTU07RUFDRSxxQkFBQTtBQW9NUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLWZlYXR1cmUvY29tcG9uZW50cy9jb2xsZWN0aW9uLXBsYXllci9jb2xsZWN0aW9uLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuLmNvbnRlbnQtaGVhZGVyIHtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tcmMtRkFGQUZBKTtcbiAgbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDE0cHgpO1xuICAgICZfX2NvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fdGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgICAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxOHB4KTtcbiAgICB9XG4gICAgXG4gICAgJl9faW5mbyB7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIG1heC1oZWlnaHQ6IDQ4cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuZG90LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogMC4yNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAwLjI1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwcHggMC41cmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgXG4gIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAmX19idXR0b25zIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgIC51aS5jb250YWluZXIuc2ItdG9jLXZpZXctY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1haW4tc2lkZS10b2MtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjY1cHgpO1xuICAgIC8vIGhlaWdodDogYXV0bztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudG9nZ2xlSW5Nb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnNiLXRvYy1pdGVtcyB7XG4gICAgc2ItYWNjb3JkaW9uIHtcbiAgICAgIC5zYmFjY29yZGlvbl9fcGFuZWwtY29udGVudCB7XG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1haW4tc2lkZS10b2MtY29udGVudHtcbiAgICBzYi10b2MtaXRlbXtcbiAgICAgIC5zYi1jYXJkLXN3YXB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyAgTUVESUEgUVVFUklFU1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDU3NnB4LFxuICBzbTogNzY4cHgsXG4gIG1kOiA5OTJweCxcbiAgbGc6IDEyODBweCxcbiAgeGw6IDE0NDBweCxcbiAgeHhsOiAxNjAwcHgsXG4gIHh4eGw6IDE5MDBweFxuKTtcblxuXG4vL1xuLy8gIFJFU1BPTkQgQUJPVkVcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRUxPV1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFVFdFRU5cbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "lauh":
/*!***************************************************!*\
  !*** ./src/app/modules/badging/badging.module.ts ***!
  \***************************************************/
/*! exports provided: BadgingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgingModule", function() { return BadgingModule; });
var BadgingModule = (function () {
    function BadgingModule() {
    }
    return BadgingModule;
}());



/***/ }),

/***/ "ldyU":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/otp-popup/otp-popup.component.ts ***!
  \************************************************************************************/
/*! exports provided: OtpPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPopupComponent", function() { return OtpPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
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







var OtpPopupComponent = (function () {
    function OtpPopupComponent(resourceService, tenantService, deviceDetectorService, otpService, userService, utilService, configService, toasterService) {
        this.resourceService = resourceService;
        this.tenantService = tenantService;
        this.deviceDetectorService = deviceDetectorService;
        this.otpService = otpService;
        this.userService = userService;
        this.utilService = utilService;
        this.configService = configService;
        this.toasterService = toasterService;
        this.redirectToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.verificationSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeContactForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.enableSubmitBtn = false;
        this.disableResendButton = false;
        this.enableResendButton = false;
        this.resendOtpCounter = 0;
        this.maxResendTry = 4;
    }
    OtpPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantDataSubscription = this.tenantService.tenantData$.subscribe(function (data) {
            if (data && !data.err) {
                _this.logo = data.tenantData.logo;
                _this.tenantName = data.tenantData.titleName;
            }
        });
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.resendOtpEnablePostTimer();
        this.enableSubmitButton();
        this.setInteractEventData();
    };
    OtpPopupComponent.prototype.resendOtpEnablePostTimer = function () {
        var _this = this;
        this.counter = 20;
        this.disableResendButton = false;
        this.enableResendButton = false;
        setTimeout(function () {
            _this.enableResendButton = true;
        }, 22000);
        var interval = setInterval(function () {
            _this.resendOTPbtn = _this.resourceService.frmelmnts.lbl.resendOTP + ' (' + _this.counter + ')';
            _this.counter--;
            if (_this.counter < 0) {
                _this.resendOTPbtn = _this.resourceService.frmelmnts.lbl.resendOTP;
                clearInterval(interval);
            }
        }, 1000);
    };
    OtpPopupComponent.prototype.verifyOTP = function () {
        var _this = this;
        var wrongOTPMessage = this.otpData.type === 'phone' ? this.resourceService.frmelmnts.lbl.wrongPhoneOTP :
            this.resourceService.frmelmnts.lbl.wrongEmailOTP;
        this.enableSubmitBtn = false;
        var request = {
            'request': __assign({ 'key': this.otpData.value, 'type': this.otpData.type, 'otp': this.otpForm.controls.otp.value }, (this.otpData.value && this.otpData.value.match(/(([a-z]|[A-Z])+[*]{1,}([a-z]*[A-Z]*[0-9]*)*@)|([*]{1,})+/g) &&
                { 'userId': this.userService.userid }))
        };
        this.otpService.verifyOTP(request).subscribe(function (data) {
            _this.infoMessage = '';
            _this.errorMessage = '';
            var emitData = {};
            if (_this.otpData.type === 'phone') {
                emitData = { 'phone': _this.otpData.value, 'phoneVerified': true };
            }
            else if (_this.otpData.type === 'email') {
                emitData = { 'email': _this.otpData.value, 'emailVerified': true };
            }
            _this.verificationSuccess.emit(emitData);
        }, function (err) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](err, 'error.result.remainingAttempt') === 0) {
                if (_this.redirectToLogin) {
                    _this.utilService.redirectToLogin(_this.resourceService.messages.emsg.m0050);
                }
                else {
                    _this.toasterService.error(_this.resourceService.messages.emsg.m0050);
                    _this.closeContactForm.emit('true');
                }
            }
            else {
                _this.otpForm.controls['otp'].setValue('');
                _this.enableSubmitBtn = true;
                _this.infoMessage = '';
                _this.remainingAttempt = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](err, 'error.result.remainingAttempt') || 1;
                _this.errorMessage =
                    lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](err, 'error.params.status') === _this.configService.constants.HTTP_STATUS_CODES.OTP_VERIFICATION_FAILED ?
                        lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.imsg.m0086') : wrongOTPMessage;
            }
        });
    };
    OtpPopupComponent.prototype.resendOTP = function () {
        var _this = this;
        this.disableResendButton = false;
        this.enableResendButton = false;
        this.resendOtpCounter = this.resendOtpCounter + 1;
        if (this.resendOtpCounter >= this.maxResendTry) {
            this.disableResendButton = false;
            this.infoMessage = '';
            this.errorMessage = this.resourceService.frmelmnts.lbl.OTPresendMaxretryreached;
            return false;
        }
        this.otpForm.controls['otp'].setValue('');
        var request = {
            'request': __assign({ 'key': this.otpData.value, 'type': this.otpData.type }, (this.otpData.value && this.otpData.value.match(/(([a-z]|[A-Z])+[*]{1,}([a-z]*[A-Z]*[0-9]*)*@)|([*]{1,})+/g) &&
                { userId: this.userService.userid, templateId: this.configService.appConfig.OTPTemplate.updateContactTemplate }))
        };
        this.otpService.generateOTP(request).subscribe(function (data) {
            _this.resendOtpEnablePostTimer();
            _this.errorMessage = '';
            _this.infoMessage = _this.resourceService.frmelmnts.lbl.resentOTP;
        }, function (err) {
            _this.infoMessage = '';
            _this.errorMessage = _this.resourceService.messages.fmsg.m0051;
        });
    };
    OtpPopupComponent.prototype.enableSubmitButton = function () {
        var _this = this;
        this.otpForm.valueChanges.subscribe(function (val) {
            _this.enableSubmitBtn = (_this.otpForm.status === 'VALID');
        });
    };
    OtpPopupComponent.prototype.redirectToParentComponent = function () {
        this.redirectToParent.emit('true');
    };
    OtpPopupComponent.prototype.ngOnDestroy = function () {
        if (this.tenantDataSubscription) {
            this.tenantDataSubscription.unsubscribe();
        }
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    OtpPopupComponent.prototype.setInteractEventData = function () {
        this.submitInteractEdata = {
            id: 'submit-otp',
            type: 'click',
            pageid: 'profile-read'
        };
        this.resendOtpInteractEdata = {
            id: 'resend-otp',
            type: 'click',
            pageid: 'profile-read'
        };
        this.telemetryInteractObject = {
            id: this.userService.userid,
            type: 'User',
            ver: '1.0'
        };
    };
    return OtpPopupComponent;
}());



/***/ }),

/***/ "nix3":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-licence/content-licence.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n  .sb-toc-credits .sbaccordion__panel {\n  box-shadow: none !important;\n}\n  .sb-toc-credits .sb-bg-color-gray-0 .sbaccordion__panel-header {\n  background: var(--gray-0) !important;\n  height: 2.5rem !important;\n}\n  .sb-toc-credits .sbaccordion__panel-header__title {\n  width: auto;\n  padding-right: 1rem;\n  font-weight: normal;\n}\n  .sb-toc-credits .sbaccordion__panel-content {\n  overflow: inherit;\n  max-height: 100%;\n  border-top: 0px;\n  background-color: transparent !important;\n}\n.contentdata-description[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid var(--rc-979797);\n}\n.credits-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--gray-200);\n  font-size: 0.625rem;\n  font-weight: bold;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  font-size: 0.875rem;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .description__url[_ngcontent-%COMP%]   a.url[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.credits-section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 0.875rem;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .credits-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .credits-section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY29udGVudC1saWNlbmNlL2NvbnRlbnQtbGljZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQVFBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUdBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBR0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBR0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFHQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFHQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtBQ3pCRjtBRHFHQSxVQUFBO0FDbFRJO0VBQ0UsMkJBQUE7QUFpTk47QUE5TU07RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBZ05SO0FBNU1JO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE4TU47QUE1TUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBOE1OO0FBek1BO0VBQ0UsMkNBQUE7QUE0TUY7QUF4TUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQTJNSjtBQXpNRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQTJNSjtBQXhNSTtFQUNFLHFCQUFBO0FBME1OO0FBdk1FO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBeU1KO0FBdE1FO0VBQ0Usb0JBQUE7QUF3TUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYXllci1oZWxwZXIvY29tcG9uZW50cy9jb250ZW50LWxpY2VuY2UvY29udGVudC1saWNlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMvbWl4aW5zJztcblxuOjpuZy1kZWVwe1xuICAuc2ItdG9jLWNyZWRpdHMge1xuICAgIC5zYmFjY29yZGlvbl9fcGFuZWwge1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2ItYmctY29sb3ItZ3JheS0wIHtcbiAgICAgIC5zYmFjY29yZGlvbl9fcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1ncmF5LTApICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoyLjVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNiYWNjb3JkaW9uX19wYW5lbC1oZWFkZXJfX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgLnNiYWNjb3JkaW9uX19wYW5lbC1jb250ZW50e1xuICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnRkYXRhLWRlc2NyaXB0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0tcmMtOTc5Nzk3KTtcbn1cblxuLmNyZWRpdHMtc2VjdGlvbiB7XG4gIC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktMjAwKTtcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IFxuICB9XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxNHB4KTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IFxuICB9XG4gIC5kZXNjcmlwdGlvbl9fdXJsIHtcbiAgICBhLnVybCB7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICB9XG4gIC5zdWItc2VjdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDE0cHgpO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC50aXRsZSwgLmRlc2NyaXB0aW9uLCAuc3ViLXNlY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB9XG59XG5cbiJdfQ== */"];



/***/ }),

/***/ "omXM":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-licence/content-licence.component.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: RenderType_ContentLicenceComponent, View_ContentLicenceComponent_0, View_ContentLicenceComponent_Host_0, ContentLicenceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentLicenceComponent", function() { return RenderType_ContentLicenceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentLicenceComponent_0", function() { return View_ContentLicenceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentLicenceComponent_Host_0", function() { return View_ContentLicenceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLicenceComponentNgFactory", function() { return ContentLicenceComponentNgFactory; });
/* harmony import */ var _content_licence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-licence.component.scss.shim.ngstyle */ "nix3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_pipes_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/date-format/date-format.pipe */ "movY");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/expansion/index.ngfactory */ "W3M2");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _content_licence_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-licence.component */ "FXgK");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");












var styles_ContentLicenceComponent = [_content_licence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentLicenceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentLicenceComponent, data: {} });

function View_ContentLicenceComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.author))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.createdon))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updatedon))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.attributions))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.licenseTerms))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.content.licenseDetails["url"], ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.content.licenseDetails["url"]; _ck(_v, 2, 0, currVal_1); }); }
function View_ContentLicenceComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "p", [["class", "description__url"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " ", "\u200E "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.content.licenseDetails["url"]; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.content.licenseDetails["name"]; var currVal_1 = _co.content.licenseDetails["description"]; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ContentLicenceComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copyRight))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [",\u00A0", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.content == null) ? null : _co.content.copyrightYear); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentLicenceComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sb-meta-data mb-16 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.content))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.content == null) ? null : ((_co.content.originData == null) ? null : _co.content.originData.name)); _ck(_v, 4, 0, currVal_1); }); }
function View_ContentLicenceComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sb-meta-data mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.authorOfSourceContent))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.content.originData.author; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentLicenceComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sb-meta-data mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.licenseTerms))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.content.originData.license; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentLicenceComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "mailto:", ((_co.content.orgDetails == null) ? null : _co.content.orgDetails.email), "?subject=", _co.content.name, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = ((_co.content.orgDetails == null) ? null : _co.content.orgDetails.email); _ck(_v, 1, 0, currVal_1); }); }
function View_ContentLicenceComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "sb-meta-data mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "title"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.content.orgDetails == null) ? null : _co.content.orgDetails.email); _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.publishedOnInstanceName), "{instance}", _co.instance)); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.content.originData.organisation.join(", "); _ck(_v, 4, 0, currVal_1); }); }
function View_ContentLicenceComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "sub-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.content.originData.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.content.originData.author; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.content.originData.license; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.content.originData.organisation; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.contentcopiedtitle))); _ck(_v, 2, 0, currVal_0); }); }
function View_ContentLicenceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_3__["DateFormatPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_4__["InterpolatePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 45, "mat-accordion", [["class", "sb-mat-accordion mb-16 mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _headers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 41, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 4, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [2, "_mat-animation-noopable", null], [4, "height", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4374528, [[1, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-panel-title", [["class", "sb-mat-accordion__title mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 32, "div", [["aria-labelledby", "creditsAndLicenceInfo"], ["class", "sb-mat-accordion__content credits-section"], ["id", "creditsAndLicenceInfo"], ["role", "region"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentLicenceComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_15 = ((_co.content == null) ? null : _co.content.author); _ck(_v, 17, 0, currVal_15); var currVal_17 = ((_co.content == null) ? null : _co.content.createdOn); _ck(_v, 21, 0, currVal_17); var currVal_19 = ((_co.content == null) ? null : _co.content.lastUpdatedOn); _ck(_v, 26, 0, currVal_19); var currVal_21 = _co.attributions; _ck(_v, 31, 0, currVal_21); var currVal_23 = ((_co.content == null) ? null : _co.content.license); _ck(_v, 35, 0, currVal_23); var currVal_25 = ((_co.content == null) ? null : ((_co.content.licenseDetails == null) ? null : _co.content.licenseDetails.name)); _ck(_v, 39, 0, currVal_25); var currVal_26 = ((_co.content == null) ? null : _co.content.copyright); _ck(_v, 41, 0, currVal_26); var currVal_28 = ((_co.content == null) ? null : _co.content.copyrightYear); _ck(_v, 45, 0, currVal_28); var currVal_29 = _co.content.originData; _ck(_v, 47, 0, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).multi; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).expanded; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations"); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._hasSpacing(); _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).panel._headerId; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled ? (-1) : 0); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._getPanelId(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._isExpanded(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).panel.disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._isExpanded(); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._getTogglePosition() === "after"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._getTogglePosition() === "before"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations"); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._getHeaderHeight(); _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.creditsAndLicenceInfo)))); _ck(_v, 14, 0, currVal_14); var currVal_16 = ((_co.content == null) ? null : _co.content.author); _ck(_v, 19, 0, currVal_16); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.content == null) ? null : _co.content.createdOn))); _ck(_v, 23, 0, currVal_18); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.content == null) ? null : _co.content.lastUpdatedOn))); _ck(_v, 28, 0, currVal_20); var currVal_22 = _co.attributions; _ck(_v, 33, 0, currVal_22); var currVal_24 = _co.content.license; _ck(_v, 37, 0, currVal_24); var currVal_27 = ((_co.content == null) ? null : _co.content.copyright); _ck(_v, 43, 0, currVal_27); }); }
function View_ContentLicenceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-licence", [], null, null, null, View_ContentLicenceComponent_0, RenderType_ContentLicenceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _content_licence_component__WEBPACK_IMPORTED_MODULE_10__["ContentLicenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentLicenceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content-licence", _content_licence_component__WEBPACK_IMPORTED_MODULE_10__["ContentLicenceComponent"], View_ContentLicenceComponent_Host_0, { content: "content" }, {}, []);



/***/ }),

/***/ "p78a":
/*!************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/index.ts ***!
  \************************************************************/
/*! exports provided: ProfileFrameworkPopupComponent, TermsAndConditionsPopupComponent, OtpPopupComponent, BatchInfoComponent, SsoMergeConfirmationComponent, ValidateTeacherIdentifierPopupComponent, UserLocationComponent, Stage, UserOnboardingComponent, OnboardingUserSelectionComponent, ConfirmationPopupComponent, CertPreviewPopupComponent, ContentPlayerComponent, GlobalConsentPiiComponent, CollectionPlayerComponent, YearOfBirthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_framework_popup_profile_framework_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-framework-popup/profile-framework-popup.component */ "B1ZI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileFrameworkPopupComponent", function() { return _profile_framework_popup_profile_framework_popup_component__WEBPACK_IMPORTED_MODULE_0__["ProfileFrameworkPopupComponent"]; });

/* harmony import */ var _tnc_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tnc-popup/terms-conditions-popup.component */ "KwqX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPopupComponent", function() { return _tnc_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_1__["TermsAndConditionsPopupComponent"]; });

/* harmony import */ var _otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-popup/otp-popup.component */ "ldyU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtpPopupComponent", function() { return _otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_2__["OtpPopupComponent"]; });

/* harmony import */ var _batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch-info/batch-info.component */ "4CUb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchInfoComponent", function() { return _batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_3__["BatchInfoComponent"]; });

/* harmony import */ var _sso_merge_confirmation_sso_merge_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sso-merge-confirmation/sso-merge-confirmation.component */ "1tIb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsoMergeConfirmationComponent", function() { return _sso_merge_confirmation_sso_merge_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["SsoMergeConfirmationComponent"]; });

/* harmony import */ var _validate_teacher_identifier_popup_validate_teacher_identifier_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate-teacher-identifier-popup/validate-teacher-identifier-popup.component */ "B9vr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateTeacherIdentifierPopupComponent", function() { return _validate_teacher_identifier_popup_validate_teacher_identifier_popup_component__WEBPACK_IMPORTED_MODULE_5__["ValidateTeacherIdentifierPopupComponent"]; });

/* harmony import */ var _user_location_user_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-location/user-location.component */ "sb+b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLocationComponent", function() { return _user_location_user_location_component__WEBPACK_IMPORTED_MODULE_6__["UserLocationComponent"]; });

/* harmony import */ var _user_onboarding_user_onboarding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-onboarding/user-onboarding.component */ "i7uz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _user_onboarding_user_onboarding_component__WEBPACK_IMPORTED_MODULE_7__["Stage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserOnboardingComponent", function() { return _user_onboarding_user_onboarding_component__WEBPACK_IMPORTED_MODULE_7__["UserOnboardingComponent"]; });

/* harmony import */ var _onboarding_user_selection_onboarding_user_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboarding-user-selection/onboarding-user-selection.component */ "8tQW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnboardingUserSelectionComponent", function() { return _onboarding_user_selection_onboarding_user_selection_component__WEBPACK_IMPORTED_MODULE_8__["OnboardingUserSelectionComponent"]; });

/* harmony import */ var _confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmation-popup/confirmation-popup.component */ "ry1x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return _confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationPopupComponent"]; });

/* harmony import */ var _cert_preview_popup_cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cert-preview-popup/cert-preview-popup.component */ "pvbH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertPreviewPopupComponent", function() { return _cert_preview_popup_cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_10__["CertPreviewPopupComponent"]; });

/* harmony import */ var _content_player_content_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-player/content-player.component */ "UeM3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerComponent", function() { return _content_player_content_player_component__WEBPACK_IMPORTED_MODULE_11__["ContentPlayerComponent"]; });

/* harmony import */ var _global_consent_pii_global_consent_pii_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global-consent-pii/global-consent-pii.component */ "VcEb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConsentPiiComponent", function() { return _global_consent_pii_global_consent_pii_component__WEBPACK_IMPORTED_MODULE_12__["GlobalConsentPiiComponent"]; });

/* harmony import */ var _collection_player_collection_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection-player/collection-player.component */ "DfIe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionPlayerComponent", function() { return _collection_player_collection_player_component__WEBPACK_IMPORTED_MODULE_13__["CollectionPlayerComponent"]; });

/* harmony import */ var _year_of_birth_year_of_birth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year-of-birth/year-of-birth.component */ "8QQp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearOfBirthComponent", function() { return _year_of_birth_year_of_birth_component__WEBPACK_IMPORTED_MODULE_14__["YearOfBirthComponent"]; });


















/***/ }),

/***/ "pYps":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-player/content-player.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n\n[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.content-video__player__details[_ngcontent-%COMP%] {\n  align-items: center;\n  min-height: 4rem;\n  padding: 0.5rem;\n  background-color: var(--white);\n}\n.content-video__player__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary-400);\n  font-size: var(--h5-font-size);\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%]   .dot-divider[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  border-radius: 100%;\n  background-color: var(--gray-800);\n  display: inline-block;\n  margin: 0px 0.5rem;\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.content-video__player__screenpart[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.content-video__player__screenpart[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  border-left: 0.03125rem solid var(--gray-100);\n  height: 2.5rem;\n  width: 0.5rem;\n}\n.content-video__content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  margin-right: -0.5rem;\n  padding-bottom: 0.5rem;\n}\n.aspectratio[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  width: 100%;\n  z-index: 99;\n}\n.aspectratio[data-ratio=\"16:9\"][_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n}\n.aspectratio[_ngcontent-%COMP%]   [data-ratio=\"4:3\"][_ngcontent-%COMP%] {\n  padding-top: 75%;\n}\n.aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n}\n.aspectratio.player-fullscreen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 4rem) !important;\n  position: fixed !important;\n  top: 0rem;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  margin: 0;\n  padding: 0;\n  z-index: 9999;\n}\n.aspectratio.player-fullscreen[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .aspectratio.player-fullscreen[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 4rem) !important;\n  background: var(--white);\n}\n.no-content-player[_ngcontent-%COMP%] {\n  background: var(--black);\n  color: var(--white);\n  width: 100%;\n  height: 100%;\n}\n.no-content-player__text[_ngcontent-%COMP%] {\n  max-width: 18.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY29udGVudC1wbGF5ZXIvY29udGVudC1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9jb21wb25lbnRzL192aWRlby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUF2VEEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUM0TEY7QURoSEEsVUFBQTtBRWpUSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QURxYU47QUNsYUk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QURvYU47QUNsYU07RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEb2FSO0FDbmFRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRHFhVjtBQ25hUTtFQUNFLG9CQUFBO0FEcWFWO0FDaGFJO0VBQ0Usb0JBQUE7QURrYU47QUNqYU07RUFDRSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEbWFSO0FDOVpFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QURnYUo7QUMzWkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRDhaRjtBQzdaRTtFQUNFLG1CQUFBO0FEK1pKO0FDNVpFO0VBQ0UsZ0JBQUE7QUQ4Wko7QUMzWkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUQ2Wko7QUMzWkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUQ2Wk47QUN6WkU7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FEMlpKO0FDelpHO0VBQ0MsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7QUQyWko7QUF4ZkE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEyZko7QUExZkk7RUFDSSxtQkFBQTtBQTRmUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWVyLWhlbHBlci9jb21wb25lbnRzL2NvbnRlbnQtcGxheWVyL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcbkBpbXBvcnQgJ2NvbXBvbmVudHMvdmlkZW8nO1xuXG4ubm8tY29udGVudC1wbGF5ZXJ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICZfX3RleHR7XG4gICAgICAgIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDMwMHB4KTsgICBcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG4vLyBjb250ZW50IHZpZGVvXG4uY29udGVudC12aWRlbyB7XG4gICZfX3BsYXllciB7XG4gICAgJl9fZGV0YWlscyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDY0cHgpO1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpO1xuXG4gICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogIGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiAgICAgICAgLmRvdC1kaXZpZGVyIHtcbiAgICAgICAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDRweCk7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNHB4KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwcHggY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19zY3JlZW5wYXJ0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGNhbGN1bGF0ZVJlbSgwLjVweCkgc29saWQgdmFyKC0tZ3JheS0xMDApO1xuICAgICAgICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSg0MHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjdWxhdGVSZW0oLThweCk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICB9XG59XG5cbi8vYXNwZWN0IHJhdGlvXG4uYXNwZWN0cmF0aW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICAmW2RhdGEtcmF0aW89XCIxNjo5XCJdIHtcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICB9XG5cbiAgW2RhdGEtcmF0aW89XCI0OjNcIl0ge1xuICAgIHBhZGRpbmctdG9wOiA3NSU7XG4gIH1cblxuICAmID4gKiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHZpZGVvLGlmcmFtZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgLy8gYm9yZGVyOiBjYWxjdWxhdGVSZW0oNnB4KSBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgfVxuICB9XG4gICYucGxheWVyLWZ1bGxzY3JlZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246Zml4ZWQgIWltcG9ydGFudDtcbiAgICB0b3A6Y2FsY3VsYXRlUmVtKDBweCk7Ly81MHB4XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTowOyBcbiAgICByaWdodDowO1xuICAgIGJvcmRlcjpub25lOyBcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7IFxuICAgIHotaW5kZXg6OTk5OTtcbiAgIH1cbiAgICYucGxheWVyLWZ1bGxzY3JlZW4gaWZyYW1lLCAmLnBsYXllci1mdWxsc2NyZWVuIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6dmFyKC0td2hpdGUpO1xuIH1cbn1cbiJdfQ== */"];



/***/ }),

/***/ "pkCU":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/content-player/content-player.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-single-resource[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 56rem;\n  margin: 0 auto;\n}\n@media (min-width: 1280px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 60rem;\n  }\n}\n@media (min-width: 1440px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 64rem;\n  }\n}\n@media (min-width: 1900px) {\n  .sb-single-resource[_ngcontent-%COMP%] {\n    max-width: 68rem;\n  }\n}\n.cc-player__btn-back[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n.content-header[_ngcontent-%COMP%] {\n  min-height: 5rem;\n  background-color: var(--rc-FAFAFA);\n  box-shadow: 0 0 0.625rem 0 rgba(var(--rc-rgba-black), 0.25);\n  z-index: 99;\n}\n.content-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .content-header__content[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.content-header__title[_ngcontent-%COMP%] {\n  color: var(--primary-400);\n  font-size: 1.125rem;\n}\n.content-header__info[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  font-size: 0.875rem;\n  max-height: 48px;\n  overflow-y: auto;\n}\n.content-header[_ngcontent-%COMP%]   .dot-divider[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  border-radius: 100%;\n  background-color: var(--gray-800);\n  display: inline-block;\n  margin: 0px 0.5rem;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .content-header__buttons[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n@media (max-width: 767px) {\n  .ui.container.sb-toc-view-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n  }\n}\n.content-player-landscape[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.header-block[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtZmVhdHVyZS9jb21wb25lbnRzL2NvbnRlbnQtcGxheWVyL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWl4aW5zL19tZWRpYS1xdWVyaWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUN6QkY7QURxR0EsVUFBQTtBQ3BUQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbU5EO0FDNUxJO0VEM0JKO0lBTUksZ0JBQUE7RUFxTkY7QUFDRjtBQ2pNSTtFRDNCSjtJQVNJLGdCQUFBO0VBdU5GO0FBQ0Y7QUN0TUk7RUQzQko7SUFZSSxnQkFBQTtFQXlORjtBQUNGO0FBck5DO0VBQ0MsWUFBQTtBQXdORjtBQXBOQTtFQUVFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyREFBQTtFQUNBLFdBQUE7QUFzTkY7QUFwTkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXNOUjtBQ2hNSTtFRHpCQTtJQUtNLGNBQUE7RUF3TlI7QUFDRjtBQXROSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUF3TlI7QUFyTkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXVOTjtBQXBOSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXNOUjtBQ3hOSTtFRE1BO0lBQ0Usa0JBQUE7RUFxTko7QUFDRjtBQzdOSTtFRGFIO0lBQ0MsMkJBQUE7SUFDQSw0QkFBQTtFQW9OQTtBQUNGO0FBak5BO0VBQ0Usa0JBQUE7QUFtTkY7QUFoTkE7RUFDQyx3QkFBQTtBQW1ORCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLWZlYXR1cmUvY29tcG9uZW50cy9jb250ZW50LXBsYXllci9jb250ZW50LXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG4uc2Itc2luZ2xlLXJlc291cmNlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oODk2cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcbiAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShsZykge1xuICAgIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDk2MHB4KTtcbiAgfVxuICBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHhsKSB7XG4gICAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oMTAyNHB4KTtcbiAgfVxuICBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHh4eGwpIHtcbiAgICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSgxMDg4cHgpO1xuICB9XG4gIH1cblxuLmNjLXBsYXllciB7XG5cdCZfX2J0bi1iYWNrIHtcblx0XHR6LWluZGV4OiAxMDA7XG5cdH1cbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tcmMtRkFGQUZBKTtcbiAgbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDgwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYy1GQUZBRkEpO1xuICBib3gtc2hhZG93OiAwIDAgY2FsY3VsYXRlUmVtKDEwcHgpIDAgcmdiYSh2YXIoLS1yYy1yZ2JhLWJsYWNrKSwgMC4yNSk7XG4gIHotaW5kZXg6IDk5O1xuXG4gICAgJl9fY29udGVudHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDE4cHgpO1xuICAgIH1cbiAgICBcbiAgICAmX19pbmZvIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbWF4LWhlaWdodDogNDhweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5kb3QtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiAwLjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuMjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDBweCAwLjVyZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICBcbiAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICZfX2J1dHRvbnMge1xuICAgICAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcblx0LnVpLmNvbnRhaW5lci5zYi10b2Mtdmlldy1jb250YWluZXIge1xuXHRcdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcblx0XHRtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5jb250ZW50LXBsYXllci1sYW5kc2NhcGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5oZWFkZXItYmxvY2sge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH0iLCIvL1xuLy8gIE1FRElBIFFVRVJJRVNcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEEgbWFwIG9mIGJyZWFrcG9pbnRzLlxuJGJyZWFrcG9pbnRzOiAoXG4gIHhzOiA1NzZweCxcbiAgc206IDc2OHB4LFxuICBtZDogOTkycHgsXG4gIGxnOiAxMjgwcHgsXG4gIHhsOiAxNDQwcHgsXG4gIHh4bDogMTYwMHB4LFxuICB4eHhsOiAxOTAwcHhcbik7XG5cblxuLy9cbi8vICBSRVNQT05EIEFCT1ZFXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHNtKSB7fVxuQG1peGluIHJlc3BvbmQtYWJvdmUoJGJyZWFrcG9pbnQpIHtcblxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuXG4vL1xuLy8gIFJFU1BPTkQgQkVMT1dcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAoJGJyZWFrcG9pbnQtdmFsdWUgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRVRXRUVOXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWJldHdlZW4oc20sIG1kKSB7fVxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xuXG4gIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xuXG4gICAgLy8gR2V0IHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMuXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICR1cHBlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOiAoJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxuICB9IEBlbHNlIHtcblxuICAgIC8vIElmIGxvd2VyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xuXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgfVxuXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciB1cHBlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICB9XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "pvbH":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/cert-preview-popup/cert-preview-popup.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CertPreviewPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertPreviewPopupComponent", function() { return CertPreviewPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



var CertPreviewPopupComponent = (function () {
    function CertPreviewPopupComponent(resourceService, sanitizer) {
        this.resourceService = resourceService;
        this.sanitizer = sanitizer;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CertPreviewPopupComponent.prototype.onPopState = function (event) {
        this.modal.deny();
    };
    CertPreviewPopupComponent.prototype.ngOnInit = function () {
    };
    CertPreviewPopupComponent.prototype.closeModal = function (name) {
        if (this.modal) {
            this.modal.deny();
        }
        this.close.emit({ name: name, template: this.template });
    };
    CertPreviewPopupComponent.prototype.certTemplateURL = function (url) {
        if (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    };
    return CertPreviewPopupComponent;
}());



/***/ }),

/***/ "rX4O":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-chapterlist/content-chapterlist.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sbtoc-container[_ngcontent-%COMP%]   .sbselectpopover[_ngcontent-%COMP%] {\n  height: 3rem;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  box-shadow: 0 0.25rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.1);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbselectpopover--bg-white[_ngcontent-%COMP%] {\n  background: var(--white);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbselectpopover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: var(--primary-400);\n  margin: 0;\n  padding: 0px;\n  font-weight: bold;\n  width: 100%;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter[_ngcontent-%COMP%] {\n  height: 3rem;\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 0.125rem 0.625rem -0.3125rem rgba(var(--rc-rgba-black), 0.25);\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto;\n  border-bottom: 0.0625rem solid var(--rc-e0e0e0);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter--bg-gray[_ngcontent-%COMP%] {\n  background: var(--gray-0);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  padding: 0.5rem;\n  margin: 0px;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: flex-start;\n  background: var(--white);\n  font-size: 0.8em;\n  white-space: nowrap;\n  cursor: pointer;\n  min-width: 3rem;\n  justify-content: center;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item[_ngcontent-%COMP%]   .icon-svg[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item--active[_ngcontent-%COMP%], .sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-400);\n  color: var(--white);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item--active[_ngcontent-%COMP%]   .icon-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .sbtoc-container[_ngcontent-%COMP%]   .sbtoc-filter__grid-item[_ngcontent-%COMP%]:hover   .icon-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--white);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbaccordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbaccordion__panel[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  box-shadow: 0 0.25rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.1);\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbaccordion__panel-header[_ngcontent-%COMP%] {\n  background: var(--white);\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  height: 3rem;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbaccordion__panel-header__title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: normal;\n  color: var(--primary-400);\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n}\n.sbtoc-container[_ngcontent-%COMP%]   .sbaccordion__panel-content[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--rc-e0e0e0);\n  background: var(--gray-0);\n  min-height: auto;\n  overflow: hidden;\n  overflow-y: auto;\n  max-height: 18.75rem;\n}\n.sbtoc-container--detailed[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.1);\n  background: var(--white);\n}\n.sbchapter[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--rc-dddddd);\n  padding: 1rem;\n}\n.sbchapter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--gray-800);\n  margin-left: 1rem;\n}\n.sbchapter__item[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 0.0625rem solid var(--rc-dddddd);\n  box-shadow: 0 0.1875rem 0.25rem 0 rgba(var(--rc-rgba-primary), 0.1);\n  border: 0.03125rem solid rgba(var(--rc-rgba-primary), 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  min-height: 3.5rem;\n}\n.sbchapter__item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--primary-400);\n  margin: 0px;\n  padding: 0px;\n}\n.sbchapter__item[_ngcontent-%COMP%]   .sbchapter__img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 2.5rem;\n}\n.sbchapter__item[_ngcontent-%COMP%]   .sbchapter__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sbchapter__item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n.sbchapter__item[_ngcontent-%COMP%]:hover, .sbchapter__item--active[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n}\n.sbchapter-open[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--rc-e0e0e0);\n  padding-bottom: var(--base-block-space);\n}\n.sbchapter-open__title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: bold;\n  color: var(--primary-400);\n  margin: 0px;\n  padding: 1rem;\n  width: 100%;\n}\n.sbchapter-open__topics[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.sbchapter-open__topics__title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  margin: 0px 0px 0.5rem 0px;\n  color: var(--primary-400);\n  padding: 0px 1rem;\n}\n.sbchapter-open__topic[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  padding: 0.5rem 2rem;\n  margin: 0px;\n  color: var(--primary-400);\n}\n.sbchapter-open__topic--active[_ngcontent-%COMP%] {\n  background: var(--primary-100);\n}\n.sbchapter-open__topic[_ngcontent-%COMP%]:hover {\n  background: var(--gray-0);\n}\n.sbsmartscroll-style[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.3125rem;\n  height: 0.3125rem;\n  background-color: var(--primary-400);\n  -webkit-appearance: none;\n}\n.sbsmartscroll-style[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--gray-400);\n}\n.sbsmartscroll-style[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0.375rem rgba(var(--rc-rgba-black), 0);\n  background-color: var(--gray-0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY29udGVudC1jaGFwdGVybGlzdC9jb250ZW50LWNoYXB0ZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNuVEU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpRUFBQTtBQWtOSjtBQWhOSTtFQUNFLHdCQUFBO0FBa05OO0FBL01JO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFpTk47QUE3TUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2RUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FBK01KO0FBMU1JO0VBQ0UseUJBQUE7QUE0TU47QUF6TUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEyTU47QUF4TUk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQTBNTjtBQXhNTTtFQUNFLHFCQUFBO0FBME1SO0FBdE1JO0VBRUUsOEJBQUE7RUFDQSxtQkFBQTtBQXVNTjtBQXBNUTtFQUNFLGtCQUFBO0FBc01WO0FBaE1FO0VBQ0UsV0FBQTtBQWtNSjtBQTlMSTtFQUNFLHFCQUFBO0VBQ0EsaUVBQUE7QUFnTU47QUE3TEk7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQStMTjtBQTVMSTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQThMTjtBQTNMSTtFQUNFLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQTZMTjtBQXpMRTtFQUNFLGlFQUFBO0VBQ0Esd0JBQUE7QUEyTEo7QUF0TEE7RUFDRSwrQ0FBQTtFQUNBLGFBQUE7QUF5TEY7QUF2TEU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUF5TEo7QUF0TEU7RUFDRSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUVBQUE7RUFDQSwwREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBd0xKO0FBdExJO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0xOO0FBckxJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXVMTjtBQXJMTTtFQUNFLFdBQUE7QUF1TFI7QUFuTEk7RUFDRSxrQkFBQTtBQXFMTjtBQWxMSTtFQUVFLDhCQUFBO0FBbUxOO0FBOUtBO0VBQ0UsK0NBQUE7RUFDQSx1Q0FBQTtBQWlMRjtBQS9LRTtFQUVFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWdMSjtBQTdLRTtFQUNFLFVBQUE7QUErS0o7QUE1S0U7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQThLSjtBQTNLRTtFQUNFLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUE2S0o7QUExS0U7RUFDRSw4QkFBQTtBQTRLSjtBQXpLRTtFQUNFLHlCQUFBO0FBMktKO0FBbktFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUFzS0o7QUFuS0U7RUFDRSxpQ0FBQTtBQXFLSjtBQWxLRTtFQUVFLDREQUFBO0VBQ0EsK0JBQUE7QUFvS0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYXllci1oZWxwZXIvY29tcG9uZW50cy9jb250ZW50LWNoYXB0ZXJsaXN0L2NvbnRlbnQtY2hhcHRlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MzIHZhcmlhYmxlICYgc2FzcyB2YXJpYWJsZXMgKi9cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWZvbnQtc3RhY2stZW46IFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2staGk6IFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2stdXI6IFwiTm90byBTYW5zXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIixcbiAgICBcIk5vdG8gU2FucyBUYW1pbFwiLCBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLFxuICAgIFwiTm90byBTYW5zIEd1cm11a2hpXCIsIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLFxuICAgIFwiTm90byBTYW5zIEthbm5hZGFcIiwgXCJOb3RvIFNhbnMgT3JpeWFcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuXG4gIC8vIGJhc2UgY29sb3JzXG4gIC0tYmx1ZTogIzAyNGY5ZDtcbiAgLS1ncmVlbjogIzAwODg0MDtcbiAgLS1vcmFuZ2U6ICNlNTVhMjg7XG4gIC0tcmVkOiAjZmY0NTU4O1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuXG4gIC8vIGdyYXkgY29sb3JzIHNoYWRlc1xuICAtLWdyYXktaHM6IDAsIDAlO1xuICAtLWdyYXk6IGhzbCh2YXIoLS1ncmF5LWhzKSwgMjAlKTtcbiAgLS1ncmF5LTA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgOTUlKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4gIC0tZ3JheS0xMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgODAlKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuICAtLWdyYXktMjAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDYwJSk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuICAtLWdyYXktMzAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDU5JSk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuICAtLWdyYXktNDAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDQwJSk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiAgLS1ncmF5LTgwMDogdmFyKC0tZ3JheSk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4gIC8vIGJhc2V0aGVtZVxuICAtLXByaW1hcnktY29sb3I6ICMwMjRmOWQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDA4ODQwO1xuICAtLXRlcnRpYXJ5LWNvbG9yOiAjZTU1YTI4O1xuXG4gIC8vIHByaW1hcnkgY29sb3JzXG4gIC0tcHJpbWFyeS0wOiAjZjNmN2ZhOyAvLyBiZ1xuICAtLXByaW1hcnktMTAwOiAjZWRmNGY5OyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuICAtLXByaW1hcnktMjAwOiAjODBhN2NlOyAvLyBkaXZpZGVyXG4gIC0tcHJpbWFyeS0yNTA6ICNkM2U3ZjQ7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuICAtLXByaW1hcnktMzAwOiAjN2FiNGVlOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiAgLS1wcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS1jb2xvcik7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuICAtLXByaW1hcnktNjAwOiAjMDA1MzkxOyAvLyBvbiBwcmVzc1xuICAtLXByaW1hcnktODAwOiAjMDAyZTUwOyAvLyBob3ZlclxuXG4gIC8vIHNlY29uZGFyeSBjb2xvcnNcbiAgLS1zZWNvbmRhcnktMDogI2UxZmZkZjsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tc2Vjb25kYXJ5LTEwMDogIzAwYzc4NjsgLy8gYnV0dG9uIGJnIGJnLCB0b2FzdFxuICAtLXNlY29uZGFyeS0yMDA6ICMwN2JjODE7IC8vIGJ1dHRvbiBiZ1xuICAtLXNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7IC8vIGhvdmVyXG5cbiAgLy8gdGVydGlhcnkgY29sb3JzXG4gIC0tdGVydGlhcnktMDogI2ZlZWRkNzsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tdGVydGlhcnktMTAwOiAjZmZhMTFkOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktY29sb3IpOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbiAgLy8gcmVkIGNvbG9yc1xuICAtLXJlZC0wOiAjZmJjY2QxOyAvLyB0b2FzdCBiZ1xuICAtLXJlZC0xMDA6ICNmZjY5Nzk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tcmVkLTQwMDogdmFyKC0tcmVkKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4gIC8vIHN0YXR1cyBjb2xvcnNcbiAgLS1pbmZvLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIC0td2FybmluZy1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgLS1kYW5nZXItY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgLy8gZWxlbWVudCBiYXNlZCB2YXJpYWJsZXNcbiAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIC0tYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1ib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbiAgLy8gYWxwaGFcbiAgLS1hbHBoYTA6IDA7XG4gIC0tYWxwaGEyNTogMC4yNTtcbiAgLS1hbHBoYTUwOiAwLjU7XG4gIC0tYWxwaGE3NTogMC43NTtcblxuICAvLyBmb250c1xuICAtLWZvbnQtZGVmYXVsdC1zaXplOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuICAtLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAtLWZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIC0tbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiAgLS1oMS1mb250LXNpemU6IDJyZW07IC8vIDMycHhcbiAgLS1oMi1mb250LXNpemU6IDEuNzVyZW07IC8vIDI4cHhcbiAgLS1oMy1mb250LXNpemU6IDEuNXJlbTsgLy8gMjRweFxuICAtLWg0LWZvbnQtc2l6ZTogMS4ycmVtOyAvLyAyMHB4XG4gIC0taDUtZm9udC1zaXplOiAxcmVtOyAvLyAxNnB4XG4gIC0taDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuICAtLWZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuICAtLWZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1zbTogMC43NXJlbTsgLy8gMTJweFxuICAtLWZvbnQtc2l6ZS14czogMC42MjVyZW07IC8vIDEwcHhcbiAgLS1wLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuICAvLyBiYXNlIHZhcmlhYmxlc1xuICAtLWJhc2UtZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLS1iYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07IC8vOHB4LFxuICAtLWljb24tc3ZnLXh4czogMC43NXJlbTtcbiAgLS1pY29uLXN2Zy14czogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDIpO1xuICAtLWljb24tc3ZnLXNtOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMyk7XG4gIC0taWNvbi1zdmctbWQ6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA0KTtcbiAgLS1pY29uLXN2Zy1sZzogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDUpO1xuICAtLWljb24tc3ZnLXhsOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNik7XG5cbiAgLy9yYW5kb20gY29sb3JzIGFuZCBiYWNrZ3JvdW5kc1xuICAtLXJjLTk2QzhEQTogIzk2QzhEQTtcbiAgLS1yYy0wMDc2RkU6ICMwMDc2RkU7XG4gIC0tcmMtRTVFREY1OiAjRTVFREY1O1xuICAtLXJjLTdjN2I3YjogIzdjN2I3YjtcbiAgLS1yYy1mNWY1ZjU6ICNmNWY1ZjU7XG4gIC0tcmMtZmRmZGZkOiAjZmRmZGZkO1xuICAtLXJjLWRlZGVkZTogI2RlZGVkZTtcbiAgLS1yYy1GNUY5RkM6ICNGNUY5RkM7XG4gIC0tcmMtYzRjNGM0OiAjYzRjNGM0O1xuICAtLXJjLWQ4ZDhkODogI2Q4ZDhkODtcbiAgLS1yYy1lOWU1ZTU6ICNlOWU1ZTU7XG4gIC0tcmMtZGRkZGRkOiAjZGRkZGRkO1xuICAtLXJjLTdiODZmNDogIzdiODZmNDtcbiAgLS1yYy1kMGQwZDA6ICNkMGQwZDA7XG4gIC0tcmMtNWM4ZGI3OiAjNWM4ZGI3O1xuICAtLXJjLTkxYWVjYzogIzkxYWVjYztcbiAgLS1yYy1mOWY5Zjk6ICNmOWY5Zjk7XG4gIC0tcmMtZDRkM2QzOiAjZDRkM2QzO1xuICAtLXJjLUZBRkFGQTogI0ZBRkFGQTtcbiAgLS1yYy04NjZBNkE6ICM4NjZhNmE7XG4gIC0tcmMtOTc5Nzk3OiAjOTc5Nzk3O1xuICAtLXJjLWUwZTFlMjogI2UwZTFlMjtcbiAgLS1yYy0wMEJEN0Y6ICMwMEJEN0Y7XG4gIC0tcmMtOUY5RjlGOiAjOUY5RjlGO1xuICAtLXJjLUYzRjhGRjogI0YzRjhGRjtcbiAgLS1yYy04MEE3Q0U6ICM4MEE3Q0U7XG4gIC0tcmMtOWI5YjliOiAjOWI5YjliO1xuICAtLXJjLTJjYTU4ZDogIzJjYTU4ZDtcbiAgLS1yYy0wMDdBRkY6ICMwMDdBRkY7XG4gIC0tcmMtYmRiZGJkOiAjYmRiZGJkO1xuICAtLXJjLWNlY2VjZTogI2NlY2VjZTtcbiAgLS1yYy0yOTcyYTQ6ICMyOTcyYTQ7XG4gIC0tcmMtRTBGMUZEOiAjRTBGMUZEO1xuICAtLXJjLUM4RDZFQTogI0M4RDZFQTtcbiAgLS1yYy1lMmUzZTU6ICNlMmUzZTU7XG4gIC0tcmMtQkNCRUMwOiAjQkNCRUMwO1xuICAtLXJjLWQ0ZDRkNTogI2Q0ZDRkNTtcbiAgLS1yYy1kNGQ4ZGE6ICNkNGQ4ZGE7XG4gIC0tcmMtYmZlMWNmOiAjYmZlMWNmO1xuICAtLXJjLTI4OWZkOTogIzI4OWZkOTtcbiAgLS1yYy1lNjg5MDA6ICNlNjg5MDA7XG4gIC0tcmMtMmY0MjcyOiAjMmY0MjcyO1xuICAtLXJjLWUwZTBlMDogI2UwZTBlMDtcbiAgLS1yYy0yMzYxZmY6ICMyMzYxZmY7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1mZmIzMDA6ICNmZmIzMDA7XG4gIC0tcmMtZDhkZWUyOiAjZDhkZWUyO1xuICAtLXJjLTI1MjUyNTogIzI1MjUyNTtcbiAgLS1yYy1mY2YyZDY6ICNmY2YyZDY7XG4gIC0tcmMtYWRkOGU2OiAjYWRkOGU2O1xuICAtLXJjLWFmZDllNzogI2FmZDllNztcbiAgLS1yYy1EOUU0RjI6ICNEOUU0RjI7XG4gIC0tcmMtODhCN0U2OiAjODhCN0U2O1xuICAtLXJjLTRhNGE0YTogIzRhNGE0YTtcbiAgLS1yYy1mZmY2ZjY6ICNmZmY2ZjY7XG4gIC0tcmMtZjdmN2Y3OiAjZjdmN2Y3O1xuICAtLXJjLTY2YzdmNDogIzY2YzdmNDtcbiAgLS1yYy0xQjQ3ODU6ICMxQjQ3ODU7XG4gIC0tcmMtYTlhOWE5OiAjYTlhOWE5O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy0xYjFjMWQ6ICMxYjFjMWQ7XG4gIC0tcmMtZGVkZWRmOiAjZGVkZWRmO1xuICAtLXJjLWFhYWFhYTogI2FhYWFhYTtcbiAgLS1yYy0wNDJENTU6ICMwNDJENTU7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLWJiYmJiYjogI2JiYmJiYjtcbiAgLS1yYy0wMDlENTM6ICMwMDlENTM7XG4gIC0tcmMtRTBFRkZGOiAjRTBFRkZGO1xuICAtLXJjLTE5NkRBQjogIzE5NkRBQjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWMzYzNjMzogI2MzYzNjMztcbiAgLS1yYy0wMGFiYzc6IzAwYWJjNztcbiAgLS1yYy1GQ0U2RTY6I0ZDRTZFNjtcbiAgLS1yYy1ERUNBQ0E6I0RFQ0FDQTtcbiAgLS1yYy00MjQyNDI6IzQyNDI0MjtcbiAgLS1yYy1GNUQ3RDc6I0Y1RDdENztcbiAgLS1yYy1GN0ZGRjU6I0Y3RkZGNTtcbiAgLS1yYy1EM0RFRDE6I0QzREVEMTtcbiAgLS1yYy1FQkY2RTA6I0VCRjZFMDtcbiAgLS1yYy1GNkY2RjY6I0Y2RjZGNjtcbiAgLS1yYy0zM0I2Q0M6IzMzQjZDQztcbiAgLS1yYy0yZGFkYzI6IzJkYWRjMjtcbiAgLS1yYy0wZmJhZDY6IzBmYmFkNjtcbiAgLS1yYy1mN2ZmZWM6I2Y3ZmZlYztcbiAgLS1yYy1kMmRkYzc6I2QyZGRjNztcbiAgLS1yYy1mZmUxZTE6I2ZmZTFlMTtcbiAgLS1yYy1lNmM4Yzg6I2U2YzhjODtcbiAgLS1yYy1mNTZiNTY6I2Y1NmI1NjtcbiAgLS1yYy1kYzUyM2Q6I2RjNTIzZDtcbiAgLS1yYy1lNjVjNDc6I2U2NWM0NztcbiAgLS1yYy01NjVjNzA6IzU2NWM3MDtcbiAgLS1yYy02RDcyNzg6IzZENzI3ODtcbiAgLS1yYy1FMDhBMjA6I0UwOEEyMDtcbiAgLS1yYy1ERDY4MEY6I0RENjgwRjtcbiAgLS1yYy1kYWQ5Y2I6I2RhZDljYjtcbiAgLS1yYy1GRkQ5NTQ6I0ZGRDk1NDtcbiAgLS1yYy1yZ2JhLWJsYWNrOiAwLCAwLCAwOyAvLyB2YXIoLS1ibGFjaylcbiAgLS1yYy1yZ2JhLXdoaXRlOiAyNTUsIDI1NSwgMjU1OyAvLyB2YXIoLS13aGl0ZSlcbiAgLS1yYy1yZ2JhLWdyYXk6IDUxLCA1MSwgNTE7IC8vIHZhcigtLWdyYXktMzAwKVxuICAtLXJjLXJnYmEtcHJpbWFyeTogMiwgNzksIDE1NzsgLy8gdmFyKC0tcHJpbWFyeS1jb2xvcilcbiAgLS1yYy1yZ2JhLXByaW1hcnktMzAwOiA0MSwgMTE0LCAxNjQ7IC8vdmFyKC0tcHJpbWFyeS0zMDApXG4gIC0tcmMtcmdiYS1ncmF5LTMwMDogMzQsIDM2LCAzODsgLy92YXIoLS1ncmF5LTEwMClcbiAgLS1yYy1yZ2JhLTg2NmE2YTogMTM0LCAxMDYsIDEwNjtcbiAgLS1yYy1yZ2JhLWQwZDBkMDogMjA4LCAyMDgsIDIwODtcbiAgLS1yYy1yZ2JhLTdiODZmNDogMTIzLCAxMzQsIDI0NDtcbiAgLS1yYy1yZ2JhLUM4RDZFQTogMjAwLCAyMTQsIDIzNDtcbiAgLS11aS1kcm9wZG93bi1zZWxlY3Rpb24taWNvbjojNDlCMUYyO1xufVxuXG4vLyBWYXJpYWJsZXNcbiRmb250LXN0YWNrLWVuOiB2YXIoLS1mb250LXN0YWNrLWVuKTtcbiRmb250LXN0YWNrLWhpOiB2YXIoLS1mb250LXN0YWNrLWhpKTtcbiRmb250LXN0YWNrLXVyOiB2YXIoLS1mb250LXN0YWNrLXVyKTtcblxuLy8gQmFzZSBDb2xvcnNcbiRibHVlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRncmVlbjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiRvcmFuZ2U6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiRyZWQ6IHZhcigtLXJlZCk7XG4kYmxhY2s6IHZhcigtLWJsYWNrKTtcbiR3aGl0ZTogdmFyKC0td2hpdGUpO1xuJGluZGlnbzogdmFyKC0taW5kaWdvKTtcbiRwdXJwbGU6IHZhcigtLXB1cnBsZSk7XG4kcGluazogdmFyKC0tcGluayk7XG4keWVsbG93OiB2YXIoLS15ZWxsb3cpO1xuJHRlYWw6IHZhcigtLXRlYWwpO1xuJGN5YW46IHZhcigtLWN5YW4pO1xuJGdyYXk6IHZhcigtLWdyYXkpO1xuXG4vLyBicmFuZCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kdGVydGlhcnktY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbi8vIE5ldXRyYWwgQ29sb3JzXG4kd2hpdGUtY29sb3I6IHZhcigtLXdoaXRlKTtcbi8vIGdyYXkgY29sb3JzIHNoYWRlc1xuJGdyYXktMDogdmFyKC0tZ3JheS0wKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4kZ3JheS0xMDA6IHZhcigtLWdyYXktMTAwKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuJGdyYXktMjAwOiB2YXIoLS1ncmF5LTIwMCk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuJGdyYXktMzAwOiB2YXIoLS1ncmF5LTMwMCk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuJGdyYXktNDAwOiB2YXIoLS1ncmF5LTQwMCk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiRncmF5LTgwMDogdmFyKC0tZ3JheS04MDApOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuLy8gcHJpbWFyeSBjb2xvcnMgc2hhZGVzXG4kcHJpbWFyeS0wOiB2YXIoLS1wcmltYXJ5LTApOyAvLyBiZ1xuJHByaW1hcnktMTAwOiB2YXIoLS1wcmltYXJ5LTEwMCk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4kcHJpbWFyeS0yMDA6IHZhcigtLXByaW1hcnktMjAwKTsgLy8gZGl2aWRlclxuJHByaW1hcnktMjUwOiB2YXIoLS1wcmltYXJ5LTI1MCk7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuJHByaW1hcnktMzAwOiB2YXIoLS1wcmltYXJ5LTMwMCk7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuJHByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LTQwMCk7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuJHByaW1hcnktNjAwOiB2YXIoLS1wcmltYXJ5LTYwMCk7IC8vIG9uIHByZXNzXG4kcHJpbWFyeS04MDA6IHZhcigtLXByaW1hcnktODAwKTsgLy8gaG92ZXJcblxuLy8gc2Vjb25kYXJ5IGNvbG9ycyBzaGFkZXNcbiRzZWNvbmRhcnktMDogdmFyKC0tc2Vjb25kYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiRzZWNvbmRhcnktMTAwOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRzZWNvbmRhcnktMjAwOiB2YXIoLS1zZWNvbmRhcnktMjAwKTsgLy8gYnV0dG9uIGJnXG4kc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LTQwMCk7IC8vIGhvdmVyXG5cbi8vIHRlcnRpYXJ5IGNvbG9ycyBzaGFkZXNcbiR0ZXJ0aWFyeS0wOiB2YXIoLS10ZXJ0aWFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kdGVydGlhcnktMTAwOiB2YXIoLS10ZXJ0aWFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktNDAwKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4vLyByZWQgY29sb3JzIHNoYWRlc1xuJHJlZC0wOiB2YXIoLS1yZWQtMCk7IC8vIHRvYXN0IGJnXG4kcmVkLTEwMDogdmFyKC0tcmVkLTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kcmVkLTQwMDogdmFyKC0tcmVkLTQwMCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuLy8gaW5wdXQgYm9yZGVyIHdpZHRoXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG5cbi8vIFN0YXR1cyBDb2xvcnNcbiRpbmZvLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4kc3VjY2Vzcy1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XG4kd2FybmluZy1jb2xvcjogdmFyKC0tdGVydGlhcnktNDAwKTtcbiRkYW5nZXItY29sb3I6IHZhcigtLXJlZC0xMDApO1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiRkZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiRiZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuJGJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuLyogRm9udHMgKi9cbiRmb250LWRlZmF1bHQtc2l6ZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpO1xuJGZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC13ZWlnaHQtbGlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiRmb250LXdlaWdodC1ub3JtYWw6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4kZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRsaW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuJGgxLWZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTsgLy8gMzJweFxuJGgyLWZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTsgLy8gMjhweFxuJGgzLWZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTsgLy8gMjRweFxuJGg0LWZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTsgLy8gMjBweFxuJGg1LWZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiRmb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRmb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtc206IHZhcigtLWZvbnQtc2l6ZS1zbSk7IC8vIDEycHhcbiRmb250LXNpemUteHM6IHZhcigtLWZvbnQtc2l6ZS14cyk7IC8vIDEwcHhcbiRwLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuLy8gc3BhY2VzXG4kYmFzZS1ibG9jay1zcGFjZTogMC41cmVtO1xuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcblxuLnNidG9jLWNvbnRhaW5lciB7XG4gIC5zYnNlbGVjdHBvcG92ZXIge1xuICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDQ4cHgpO1xuICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg4cHgpIGNhbGN1bGF0ZVJlbSgxNnB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIGNhbGN1bGF0ZVJlbSg0cHgpIGNhbGN1bGF0ZVJlbSg3cHgpIDAgcmdiYSh2YXIoLS1yYy1yZ2JhLWJsYWNrKSwgMC4xKTtcblxuICAgICYtLWJnLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5zYnRvYy1maWx0ZXIge1xuICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDQ4cHgpO1xuICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg4cHgpIGNhbGN1bGF0ZVJlbSgxNnB4KTtcbiAgICBib3gtc2hhZG93OiAwcHggY2FsY3VsYXRlUmVtKDJweCkgY2FsY3VsYXRlUmVtKDEwcHgpIGNhbGN1bGF0ZVJlbSgtNXB4KSByZ2JhKHZhcigtLXJjLXJnYmEtYmxhY2spLCAwLjI1KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBib3JkZXItYm90dG9tOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1yYy1lMGUwZTApO1xuXG4gICAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8vICAgaGVpZ2h0OjBweDtcbiAgICAvLyB9XG4gICAgJi0tYmctZ3JheSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTApO1xuICAgIH1cblxuICAgICZfX2dyaWQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgJl9fZ3JpZC1pdGVtIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWluLXdpZHRoOiBjYWxjdWxhdGVSZW0oNDhweCk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmljb24tc3ZnIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjdWxhdGVSZW0oNHB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ncmlkLWl0ZW0tLWFjdGl2ZSxcbiAgICAmX19ncmlkLWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgICAgLmljb24tc3ZnIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2JhY2NvcmRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi0tdG9jIHt9XG5cbiAgICAmX19wYW5lbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgY2FsY3VsYXRlUmVtKDRweCkgY2FsY3VsYXRlUmVtKDdweCkgMCByZ2JhKHZhcigtLXJjLXJnYmEtYmxhY2spLCAwLjEpO1xuICAgIH1cblxuICAgICZfX3BhbmVsLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oOHB4KSBjYWxjdWxhdGVSZW0oMTZweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDQ4cHgpO1xuICAgIH1cblxuICAgICZfX3BhbmVsLWhlYWRlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fcGFuZWwtY29udGVudCB7XG4gICAgICBib3JkZXItdG9wOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1yYy1lMGUwZTApO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0wKTtcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGN1bGF0ZVJlbSgzMDBweCk7XG4gICAgfVxuICB9XG5cbiAgJi0tZGV0YWlsZWQge1xuICAgIGJveC1zaGFkb3c6IDAgY2FsY3VsYXRlUmVtKDRweCkgY2FsY3VsYXRlUmVtKDdweCkgMCByZ2JhKHZhcigtLXJjLXJnYmEtYmxhY2spLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgfVxufVxuXG4vL3NiY2hhcHRlciBjc3Ncbi5zYmNoYXB0ZXIge1xuICBib3JkZXItYm90dG9tOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1yYy1kZGRkZGQpO1xuICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oMTZweCk7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjdWxhdGVSZW0oMTZweCk7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1yYy1kZGRkZGQpO1xuICAgIGJveC1zaGFkb3c6IDAgY2FsY3VsYXRlUmVtKDNweCkgY2FsY3VsYXRlUmVtKDRweCkgMCByZ2JhKHZhcigtLXJjLXJnYmEtcHJpbWFyeSksIDAuMSk7XG4gICAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMC41cHgpIHNvbGlkIHJnYmEodmFyKC0tcmMtcmdiYS1wcmltYXJ5KSwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjdWxhdGVSZW0oNTZweCk7XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLnNiY2hhcHRlcl9faW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNDBweCk7XG4gICAgICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSg0MHB4KTtcbiAgICAgIGZsZXg6IDAgMCBjYWxjdWxhdGVSZW0oNDBweCk7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmLS1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMDApO1xuICAgIH1cbiAgfVxufVxuXG4uc2JjaGFwdGVyLW9wZW4ge1xuICBib3JkZXItYm90dG9tOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1yYy1lMGUwZTApO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tYmFzZS1ibG9jay1zcGFjZSk7XG5cbiAgJl9fdGl0bGUge1xuICAgIC8vQGV4dGVuZCAuc2JhY2NvcmRpb25fX3BhbmVsLWhlYWRlcl9fdGlsdGU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oMTZweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX190b3BpY3Mge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAmX190b3BpY3NfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgICBtYXJnaW46IDBweCAwcHggY2FsY3VsYXRlUmVtKDhweCkgMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgcGFkZGluZzogMHB4IGNhbGN1bGF0ZVJlbSgxNnB4KTtcbiAgfVxuXG4gICZfX3RvcGljIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDhweCkgY2FsY3VsYXRlUmVtKDMycHgpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gIH1cblxuICAmX190b3BpYy0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCk7XG4gIH1cblxuICAmX190b3BpYzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0wKTtcbiAgfVxufVxuXG5cblxuLy9zbWFydCBzY3JvbGwgLSB3aGljaCBpcyBoaWRlbiB2aXNpYmxlIG9uIGhvdmVyXG4uc2JzbWFydHNjcm9sbC1zdHlsZSB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDVweCk7XG4gICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNXB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNDAwKTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCBjYWxjdWxhdGVSZW0oNnB4KSByZ2JhKHZhcigtLXJjLXJnYmEtYmxhY2spLCAwKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgY2FsY3VsYXRlUmVtKDZweCkgcmdiYSh2YXIoLS1yYy1yZ2JhLWJsYWNrKSwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0wKTtcbiAgfVxufVxuIl19 */"];



/***/ }),

/***/ "sb+b":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/user-location/user-location.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationComponent", function() { return UserLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/profile */ "XCaa");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");











var UserLocationComponent = (function () {
    function UserLocationComponent(resourceService, toasterService, formBuilder, profileService, activatedRoute, router, userService, deviceRegisterService, navigationhelperService, telemetryService, popupControlService) {
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.deviceRegisterService = deviceRegisterService;
        this.navigationhelperService = navigationhelperService;
        this.telemetryService = telemetryService;
        this.popupControlService = popupControlService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.processedDeviceLocation = {};
        this.showDistrictDivLoader = false;
        this.enableSubmitBtn = false;
        this.isDeviceProfileUpdateAllowed = false;
        this.isUserProfileUpdateAllowed = false;
        this.sbFormBuilder = formBuilder;
    }
    UserLocationComponent.prototype.ngOnInit = function () {
        this.popupControlService.changePopupStatus(false);
        this.initializeFormFields();
        this.getState();
    };
    UserLocationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.telemetryImpression = {
                context: {
                    env: 'user-location',
                    cdata: [{ id: 'user:state:districtConfimation', type: 'Feature' },
                        { id: 'SC-1373', type: 'Task' }
                    ]
                },
                edata: {
                    type: 'view',
                    pageid: 'location-popup',
                    uri: _this.router.url,
                    duration: _this.navigationhelperService.getPageLoadTime()
                }
            };
        });
    };
    UserLocationComponent.prototype.initializeFormFields = function () {
        this.userDetailsForm = this.sbFormBuilder.group({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.enableSubmitBtn = (this.userDetailsForm.status === 'VALID');
        this.enableSubmitButton();
    };
    UserLocationComponent.prototype.enableSubmitButton = function () {
        var _this = this;
        this.userDetailsForm.valueChanges.subscribe(function (val) {
            _this.enableSubmitBtn = (_this.userDetailsForm.status === 'VALID');
        });
    };
    UserLocationComponent.prototype.processStateLocation = function (state) {
        var locationExist = {};
        if (state) {
            locationExist = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.allStates, function (locations) {
                return locations.name.toLowerCase() === state.toLowerCase() && locations.type === 'state';
            });
        }
        return locationExist;
    };
    UserLocationComponent.prototype.processDistrictLocation = function (district, stateData) {
        var _this = this;
        var requestData = { 'filters': { 'type': 'district', parentId: stateData && stateData.id || '' } };
        return this.profileService.getUserLocation(requestData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
            _this.allDistricts = res.result.response;
            var locationExist = {};
            if (district) {
                locationExist = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](_this.allDistricts, function (locations) {
                    return locations.name.toLowerCase() === district.toLowerCase() && locations.type === 'district';
                });
            }
            return locationExist;
        }, function (err) {
            _this.closeModal();
            _this.toasterService.error(_this.resourceService.messages.emsg.m0017);
        }));
    };
    UserLocationComponent.prototype.setState = function (state) {
        var locationExist;
        if (state) {
            locationExist = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.allStates, function (locations) {
                return locations.code === state.code && locations.type === 'state';
            });
        }
        this.selectedState = locationExist;
        locationExist ? this.userDetailsForm.controls['state'].setValue(locationExist.code) :
            this.userDetailsForm.controls['state'].setValue('');
    };
    UserLocationComponent.prototype.setDistrict = function (district) {
        var locationExist;
        if (district) {
            locationExist = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.allDistricts, function (locations) {
                return locations.code === district.code && locations.type === 'district';
            });
        }
        this.selectedDistrict = locationExist;
        locationExist ? this.userDetailsForm.controls['district'].setValue(locationExist.code) :
            this.userDetailsForm.controls['district'].setValue('');
    };
    UserLocationComponent.prototype.getSelectionStrategy = function () {
        if (this.userService.loggedIn) {
            var userProfileData = this.userService.userProfile;
            var isUserLocationConfirmed = userProfileData && userProfileData.userLocations &&
                Array.isArray(userProfileData.userLocations) && userProfileData.userLocations.length >= 1;
            if (!isUserLocationConfirmed && this.deviceProfile.userDeclaredLocation) {
                this.suggestionType = 'userDeclared';
                this.setSelectedLocation(this.deviceProfile.userDeclaredLocation, true, false);
            }
            if (!(this.deviceProfile && this.deviceProfile.userDeclaredLocation)) {
                if (isUserLocationConfirmed) {
                    var userLocation = {
                        district: lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](userProfileData.userLocations, function (location) {
                            return location.type === 'district';
                        }),
                        state: lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](userProfileData.userLocations, function (location) {
                            return location.type === 'state';
                        })
                    };
                    this.isUserProfileUpdateAllowed = false;
                    this.isDeviceProfileUpdateAllowed = true;
                    this.setData(userLocation);
                    this.suggestionType = 'userLocation';
                }
                else if (!isUserLocationConfirmed) {
                    this.setSelectedLocation(this.deviceProfile.ipLocation, true, true);
                    this.suggestionType = 'ipLocation';
                }
            }
        }
        else {
            if (!(this.deviceProfile && this.deviceProfile.userDeclaredLocation)) {
                this.setSelectedLocation(this.deviceProfile.ipLocation, false, true);
                this.suggestionType = 'ipLocation';
            }
        }
    };
    UserLocationComponent.prototype.setSelectedLocation = function (location, updateUserProFile, updateDeviceProfile) {
        var _this = this;
        location = location ? location : { 'state': '', 'district': '' };
        var mappedStateDetails = this.processStateLocation(location.state);
        this.getLocationCodes(location).subscribe(function (mappedDistrictDetails) {
            _this.processedDeviceLocation = {
                district: mappedDistrictDetails,
                state: mappedStateDetails
            };
            _this.setStateDistrict(_this.processedDeviceLocation);
            _this.isUserProfileUpdateAllowed = updateUserProFile;
            _this.isDeviceProfileUpdateAllowed = updateDeviceProfile;
        });
    };
    UserLocationComponent.prototype.setData = function (location) {
        var _this = this;
        this.getDistrict(location.state.id).subscribe(function (districts) {
            _this.setStateDistrict(location);
        });
    };
    UserLocationComponent.prototype.setStateDistrict = function (location) {
        if (location) {
            this.suggestedLocation = location;
            if (location.state) {
                this.setState(location.state);
            }
            if (location.district) {
                this.setDistrict(location.district);
            }
        }
        this.onStateChange();
    };
    UserLocationComponent.prototype.getLocationCodes = function (locationToProcess) {
        var mappedStateDetails = this.processStateLocation(locationToProcess.state);
        return this.processDistrictLocation(locationToProcess.district, mappedStateDetails);
    };
    UserLocationComponent.prototype.getState = function () {
        var _this = this;
        var requestData = { 'filters': { 'type': 'state' } };
        this.profileService.getUserLocation(requestData).subscribe(function (res) {
            _this.allStates = res.result.response;
            _this.getSelectionStrategy();
        }, function (err) {
            _this.closeModal();
            _this.toasterService.error(_this.resourceService.messages.emsg.m0016);
        });
    };
    UserLocationComponent.prototype.onStateChange = function () {
        var _this = this;
        var stateControl = this.userDetailsForm.get('state');
        var stateValue = '';
        stateControl.valueChanges.subscribe(function (data) {
            if (stateControl.status === 'VALID' && stateValue !== stateControl.value) {
                _this.allDistricts = null;
                _this.userDetailsForm.get('district').reset();
                var state = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](_this.allStates, function (states) {
                    return states.code === stateControl.value;
                });
                _this.showDistrictDivLoader = true;
                _this.getDistrict(state.id).subscribe(function (districts) {
                    stateValue = stateControl.value;
                });
            }
        });
    };
    UserLocationComponent.prototype.getDistrict = function (stateId) {
        var _this = this;
        var requestData = { 'filters': { 'type': 'district', parentId: stateId } };
        return this.profileService.getUserLocation(requestData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
            _this.showDistrictDivLoader = false;
            _this.allDistricts = res.result.response;
            return res.result.response;
        }));
    };
    UserLocationComponent.prototype.closeModal = function () {
        this.popupControlService.changePopupStatus(true);
        this.userLocationModal.deny();
        this.close.emit();
    };
    UserLocationComponent.prototype.updateUserLocation = function () {
        var locationCodes = [];
        var locationDetails = {};
        if (this.userDetailsForm.value.state) {
            locationCodes.push(this.userDetailsForm.value.state);
            locationDetails.stateCode = this.userDetailsForm.value.state;
        }
        if (this.userDetailsForm.value.district) {
            locationCodes.push(this.userDetailsForm.value.district);
            locationDetails.districtCode = this.userDetailsForm.value.district;
        }
        var data = { profileLocation: locationCodes };
        var districtData, stateData, changeType = '';
        if (locationDetails.stateCode) {
            stateData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.allStates, function (states) {
                return states.code === locationDetails.stateCode;
            });
        }
        if (locationDetails.districtCode) {
            districtData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.allDistricts, function (districts) {
                return districts.code === locationDetails.districtCode;
            });
        }
        if (stateData.name !== lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.suggestedLocation, 'state.name')) {
            changeType = changeType + 'state-changed';
        }
        if (districtData.name !== lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.suggestedLocation, 'district.name')) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](changeType, 'state-changed')) {
                changeType = 'state-dist-changed';
            }
            else {
                changeType = changeType + 'dist-changed';
            }
        }
        var telemetryData = this.getTelemetryData(changeType);
        this.generateInteractEvent(telemetryData);
        this.updateLocation(data, { state: stateData, district: districtData });
    };
    UserLocationComponent.prototype.getTelemetryData = function (changeType) {
        return {
            locationIntractEdata: {
                id: 'submit-clicked',
                type: changeType ? 'location-changed' : 'location-unchanged',
                subtype: changeType
            },
            telemetryCdata: [
                { id: 'user:state:districtConfimation', type: 'Feature' },
                { id: 'SC-1373', type: 'Task' }
            ]
        };
    };
    UserLocationComponent.prototype.generateInteractEvent = function (telemetryData) {
        var intractEdata = telemetryData.locationIntractEdata;
        var telemetryInteractCdata = telemetryData.telemetryCdata;
        if (intractEdata) {
            var appTelemetryInteractData = {
                context: {
                    env: 'user-location',
                    cdata: [
                        { id: 'user:state:districtConfimation', type: 'Feature' },
                        { id: 'SC-1373', type: 'Task' }
                    ],
                },
                edata: intractEdata
            };
            if (telemetryInteractCdata) {
                appTelemetryInteractData.object = telemetryInteractCdata;
            }
            this.telemetryService.interact(appTelemetryInteractData);
        }
    };
    UserLocationComponent.prototype.updateLocation = function (data, locationDetails) {
        var _this = this;
        this.enableSubmitBtn = false;
        var response1;
        response1 = this.updateDeviceProfileData(data, locationDetails);
        var response2 = this.updateUserProfileData(data);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([response1, response2]).subscribe(function (res) {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](res[0])) {
                _this.telemetryLogEvents('Device Profile', true);
            }
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](res[1])) {
                _this.telemetryLogEvents('User Profile', true);
            }
            _this.closeModal();
        }, function (err) {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](err[0])) {
                _this.telemetryLogEvents('Device Profile', false);
            }
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](err[1])) {
                _this.telemetryLogEvents('User Profile', false);
            }
            _this.closeModal();
        });
    };
    UserLocationComponent.prototype.updateDeviceProfileData = function (data, locationDetails) {
        if (!this.isDeviceProfileUpdateAllowed) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
        }
        return this.deviceRegisterService.updateDeviceProfile({
            state: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](locationDetails, 'state.name'),
            district: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](locationDetails, 'district.name')
        });
    };
    UserLocationComponent.prototype.updateUserProfileData = function (data) {
        if (!this.isUserProfileUpdateAllowed || !this.isCustodianOrgUser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
        }
        return this.profileService.updateProfile(data);
    };
    UserLocationComponent.prototype.telemetryLogEvents = function (locationType, status) {
        var level = 'ERROR';
        var msg = 'Updation of ' + locationType + ' failed';
        if (status) {
            level = 'SUCCESS';
            msg = 'Updation of ' + locationType + ' success';
        }
        var event = {
            context: {
                env: 'portal'
            },
            edata: {
                type: 'update-location',
                level: level,
                message: msg
            }
        };
        this.telemetryService.log(event);
    };
    UserLocationComponent.prototype.ngOnDestroy = function () {
        this.popupControlService.changePopupStatus(true);
    };
    return UserLocationComponent;
}());



/***/ }),

/***/ "uM3J":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/contentplayer-page/contentplayer-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ContentPlayerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPlayerPageComponent", function() { return ContentPlayerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");








var ContentPlayerPageComponent = (function () {
    function ContentPlayerPageComponent(activatedRoute, configService, router, navigationHelperService, toasterService, resourceService, utilService, telemetryService, layoutService, playerService) {
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.router = router;
        this.navigationHelperService = navigationHelperService;
        this.toasterService = toasterService;
        this.resourceService = resourceService;
        this.utilService = utilService;
        this.telemetryService = telemetryService;
        this.layoutService = layoutService;
        this.playerService = playerService;
        this.tocPage = false;
        this.isContentPresent = true;
        this.assessmentEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionScoreSubmitEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionScoreReviewEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletedContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCollapsed = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isContentDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isDesktopApp = false;
    }
    ContentPlayerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDesktopApp = this.utilService.isDesktopApp;
        this.initLayout();
        this.utilService.emitHideHeaderTabsEvent(true);
        this.contentType = this.activatedRoute.snapshot.queryParams.contentType;
        this.getContentIdFromRoute();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (x) { if (!_this.tocPage) {
            _this.setPageExitTelemtry();
        } });
        this.playerOption = {
            showContentRating: true
        };
        this.activatedRoute.params.subscribe(function (params) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.activatedRoute, 'snapshot.queryParams.l1Parent') && !_this.tocPage) {
                _this.objectRollUp = {
                    l1: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.activatedRoute, 'snapshot.queryParams.l1Parent')
                };
            }
        });
        if (this.contentProgressEvents$) {
            this.contentProgressEvents$.subscribe(function (data) { return _this.contentProgressEvents$.next(data); });
        }
    };
    ContentPlayerPageComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ContentPlayerPageComponent.prototype.ngOnChanges = function () {
        if (this.contentDetails && this.tocPage) {
            this.contentId = this.contentDetails.identifier;
            this.getContent();
        }
    };
    ContentPlayerPageComponent.prototype.getContentIdFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (params) {
            if (params.contentId) {
                _this.contentId = params.contentId;
                _this.getContent();
            }
        });
    };
    ContentPlayerPageComponent.prototype.getContent = function () {
        var _this = this;
        var options = { dialCode: this.dialCode };
        if (this.isDesktopApp) {
            var params = { params: this.configService.appConfig.PublicPlayer.contentApiQueryParams };
            this.playerService.getContent(this.contentId, params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe(function (response) {
                _this.contentDetails = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'result.content') || lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'result.questionSet');
                var status = !lodash_es__WEBPACK_IMPORTED_MODULE_5__["has"](_this.contentDetails, 'desktopAppMetadata.isAvailable') ? false :
                    !lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.contentDetails, 'desktopAppMetadata.isAvailable');
                _this.isContentDeleted.next({ value: status });
                _this.getContentConfigDetails(_this.contentId, options);
                _this.setTelemetryData();
            }, function (error) {
                _this.contentDetails = {};
                _this.isContentDeleted.next({ value: true });
                _this.setTelemetryData();
            });
        }
    };
    ContentPlayerPageComponent.prototype.getContentConfigDetails = function (contentId, options) {
        var contentDetails = {
            contentId: contentId,
            contentData: this.contentDetails
        };
        this.playerConfig.context.objectRollup = this.objectRollUp;
    };
    ContentPlayerPageComponent.prototype.checkContentDeleted = function (event) {
        if (this.isDesktopApp && event) {
            this.isContentDeleted.next({ value: true });
            this.deletedContent.emit(this.contentDetails);
        }
    };
    ContentPlayerPageComponent.prototype.checkContentDownloading = function (event) {
        this.isContentDeleted.next({ value: false });
        this.contentDownloaded.emit(event);
    };
    ContentPlayerPageComponent.prototype.goBack = function () {
        this.logTelemetry('close-content-player');
        this.navigationHelperService.goBack();
    };
    ContentPlayerPageComponent.prototype.logTelemetry = function (id) {
        var interactData = {
            context: {
                env: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot.data.telemetry, 'env') || 'content',
                cdata: []
            },
            edata: {
                id: id,
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute.snapshot.data.telemetry, 'pageid') || 'play-content',
            }
        };
        this.telemetryService.interact(interactData);
    };
    ContentPlayerPageComponent.prototype.setTelemetryData = function () {
        var telemetryCdata;
        if (this.dialCode) {
            telemetryCdata = [{ 'type': 'DialCode', 'id': this.dialCode }];
        }
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: telemetryCdata || []
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.router.url,
            }
        };
        if (!this.tocPage) {
            this.telemetryImpression.edata['subtype'] = this.activatedRoute.snapshot.data.telemetry.subtype;
            this.telemetryImpression.edata['duration'] = this.navigationHelperService.getPageLoadTime();
        }
        if (this.contentDetails) {
            this.telemetryImpression.object = {
                id: this.contentDetails['identifier'],
                type: this.contentType,
                ver: "" + this.contentDetails['pkgVersion'] || '1.0',
                rollup: this.objectRollUp
            };
        }
    };
    ContentPlayerPageComponent.prototype.setPageExitTelemtry = function () {
        if (this.contentDetails) {
            this.telemetryImpression.object = {
                id: this.contentDetails['identifier'],
                type: this.contentDetails['contentType'],
                ver: "" + this.contentDetails['pkgVersion'] || '1.0',
            };
        }
        this.telemetryImpression.edata.subtype = 'pageexit';
        this.telemetryImpression = Object.assign({}, this.telemetryImpression);
    };
    ContentPlayerPageComponent.prototype.onAssessmentEvents = function (event) {
        this.assessmentEvents.emit(event);
    };
    ContentPlayerPageComponent.prototype.onQuestionScoreSubmitEvents = function (event) {
        this.questionScoreSubmitEvents.emit(event);
    };
    ContentPlayerPageComponent.prototype.onQuestionScoreReviewEvents = function (event) {
        this.questionScoreReviewEvents.emit(event);
    };
    ContentPlayerPageComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.utilService.emitHideHeaderTabsEvent(false);
    };
    return ContentPlayerPageComponent;
}());



/***/ }),

/***/ "uvkY":
/*!*******************************************************************!*\
  !*** ./src/app/modules/badging/services/content-badge.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentBadgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBadgeService", function() { return ContentBadgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");



var ContentBadgeService = (function () {
    function ContentBadgeService(config, learner) {
        this.badges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = config;
        this.learner = learner;
    }
    ContentBadgeService.prototype.addBadge = function (req) {
        var option = {
            url: this.config.urlConFig.URLS.BADGE.CREATE,
            data: { request: req }
        };
        return this.learner.post(option);
    };
    ContentBadgeService.prototype.setAssignBadge = function (badges) {
        this.badges.emit(badges);
    };
    return ContentBadgeService;
}());



/***/ })

}]);
//# sourceMappingURL=default~module-player-player-module-ngfactory~modules-player-player-module-ngfactory.js.map