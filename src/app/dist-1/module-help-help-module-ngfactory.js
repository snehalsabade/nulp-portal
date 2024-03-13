(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-help-help-module-ngfactory"],{

/***/ "27CW":
/*!*********************************************************************!*\
  !*** ./src/app/modules/public/module/help/help.module.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: HelpModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModuleNgFactory", function() { return HelpModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _help_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.module */ "X5ws");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "ntJQ");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */ "9cE2");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "nmIE");
/* harmony import */ var _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/alert-modal/alert-modal.component.ngfactory */ "IuEi");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var _components_faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/faq/faq.component.ngfactory */ "IZFK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-avatar */ "UTQ3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-chips */ "CLta");
/* harmony import */ var _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../notification/services/notification/notification-service-impl */ "2QjS");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../notification/services/group-notification-wrapper/group-notification-wrapper.service */ "1Ind");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service */ "SaJQ");
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../core/guard/auth-gard.service */ "uakX");
/* harmony import */ var _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../core/core.module */ "6ZYd");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ "WN11");
/* harmony import */ var _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @project-sunbird/sunbird-player-sdk-v9 */ "amcy");
/* harmony import */ var _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../telemetry/telemetry.module */ "OW9C");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../../shared/modules/material/material.module */ "CrH2");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../../shared/shared.module */ "FpXt");
/* harmony import */ var _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @project-sunbird/web-extensions */ "q0uc");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ng2-material-dropdown */ "mB+Y");
/* harmony import */ var _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../../../plugins/location/location.module */ "hr7c");
/* harmony import */ var sb_notification__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! sb-notification */ "oikk");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../../notification/notification.module */ "ME/D");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./help-routing.module */ "WBIF");
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ "7l48");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/faq/faq.component */ "SqNk");












































































var HelpModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_help_module__WEBPACK_IMPORTED_MODULE_1__["HelpModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵbpNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵceNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AlertModalComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_lNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFormComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTimerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTextboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTextareaComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicMultipleDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicCheckboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicMultiSelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TopicpickerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["KeywordsComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFrameworkCategorySelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵbNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFrameworkComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicRadioComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicDialcodeComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵcNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵdNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _components_faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["FaqComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["ɵbx"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["ɵbx"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiLocalizationService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiLocalizationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModalService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModalService"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["ɵbx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPopupConfig"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPopupConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["ScrollbarHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["ScrollbarHelper"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DimensionsHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["DimensionsHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["ColumnChangesService"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["ColumnChangesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_EXTEND"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵb"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵb"], [[2, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵc"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarService"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_27__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_27__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, "SB_NOTIFICATION_SERVICE", _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_28__["NotificationServiceImpl"], ["CS_NOTIFICATION_SERVICE", _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_30__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_32__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["ActivatedRoute"], _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_33__["GroupNotificationWrapperService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_34__["CacheService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_34__["CacheService"], [ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_35__["CacheStorageAbstract"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_37__["PermissionService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_38__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_39__["ConfigService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_30__["ToasterService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], _core_core_module__WEBPACK_IMPORTED_MODULE_40__["ɵ0"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_41__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_41__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__["QumlLibraryService"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__["QumlLibraryService"], [_project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ErrorService"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ErrorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_44__["TelemetryModule"], _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_44__["TelemetryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiTransitionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiTransitionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDropdownModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiUtilityModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiUtilityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiLocalizationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiLocalizationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSelectModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDimmerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDimmerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModalModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiCollapseModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiAccordionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPopupModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiProgressModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiRatingModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_51__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_51__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_53__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_53__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_55__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_55__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_56__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_56__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_58__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_58__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_59__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_59__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_61__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_61__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_63__["MaterialModule"], _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_63__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_64__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_64__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_65__["WebExtensionModule"], _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_65__["WebExtensionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CardModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ModalModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["LayoutModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["LibraryFiltersModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["LibraryFiltersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["AccordionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PipesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ContentDetailsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ContentDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["FaqModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["FaqModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PagesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CertificateActionsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CertificateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PillsGridModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["PillsGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ListViewModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["ListViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CommonConsumptionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_66__["CommonConsumptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_67__["ɵe"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_67__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_68__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_68__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_27__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_27__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_67__["CommonFormElementsModule"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_67__["CommonFormElementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_69__["LocationModule"], _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_69__["LocationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiMessageModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPaginationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiCheckboxModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDatepickerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSearchModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSidebarModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiTabsModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_12__["SuiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, sb_notification__WEBPACK_IMPORTED_MODULE_70__["SbNotificationModule"], sb_notification__WEBPACK_IMPORTED_MODULE_70__["SbNotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _notification_notification_module__WEBPACK_IMPORTED_MODULE_71__["NotificationModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_71__["NotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_40__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_40__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _help_routing_module__WEBPACK_IMPORTED_MODULE_72__["HelpRoutingModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_72__["HelpRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_41__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_41__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_43__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__["QumlLibraryModule"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_42__["QumlLibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_73__["SunbirdVideoPlayerModule"], _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_73__["SunbirdVideoPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _help_module__WEBPACK_IMPORTED_MODULE_1__["HelpModule"], _help_module__WEBPACK_IMPORTED_MODULE_1__["HelpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_74__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ROUTES"], function () { return [[{ path: "", component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_75__["FaqComponent"], data: _help_routing_module__WEBPACK_IMPORTED_MODULE_72__["ɵ0"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "BRx5":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq-report/faq-report.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["h6[_ngcontent-%COMP%] {\n  color: #333333;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 0.75rem;\n}\n\n  sb-form.faq-sbforms .multi-select-container .list-border {\n  background: var(--white);\n  border: 0px solid #ddd !important;\n}\n\n  .sb-textarea {\n  border-radius: 1rem !important;\n}\n\n  .sb-modal-dropdown-web ul {\n  border: 0 solid #ddd !important;\n}\n\n  sb-form.faq-sbforms > div:first-child {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: auto;\n}\n\n@media (min-width: 768px) {\n    sb-form.faq-sbforms > div:first-child {\n    grid-template-columns: auto auto;\n  }\n    sb-form.faq-sbforms > div:first-child div:nth-child(1) {\n    grid-column-start: 1;\n    grid-column-end: 2;\n  }\n    sb-form.faq-sbforms > div:first-child div:nth-child(2) {\n    grid-column-start: 2;\n    grid-column-end: 2;\n  }\n    sb-form.faq-sbforms > div:first-child div:nth-child(3) {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n\n@media (min-width: 768px) {\n    sb-form.faq-sbforms.other-issue > div:first-child div:nth-child(2) {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n\n  sb-form sb-multiple-dropdown .list-border {\n  height: 3rem !important;\n}\n\n  sb-form sb-multiple-dropdown .list-border ul {\n  padding: 0;\n}\n\n  sb-form .sb-modal-dropdown-web ul {\n  top: auto !important;\n  border-radius: 2rem;\n  padding: 0 1rem;\n  overflow-y: auto !important;\n  overflow: hidden;\n}\n\n  sb-form .sb-modal-dropdown-web li {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n  sb-form .sb-modal-dropdown-web li > div {\n  cursor: pointer;\n  padding: 16px;\n}\n\n  sb-form sb-textarea textarea {\n  height: 16rem;\n}\n\n  sb-form sb-textarea .remaining-length {\n  color: #575757 !important;\n}\n\n.submit-feedback[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMvbW9kdWxlL2hlbHAvY29tcG9uZW50cy9mYXEtcmVwb3J0L2ZhcS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9taXhpbnMvX21lZGlhLXF1ZXJpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFPRTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7QUFKSjs7QUFPRTtFQUNFLDhCQUFBO0FBTEo7O0FBUUU7RUFDRSwrQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQVBKOztBQ0tJO0VEREY7SUFNSSxnQ0FBQTtFQU5KO0VBUUk7SUFDRSxvQkFBQTtJQUNBLGtCQUFBO0VBTk47RUFTSTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7RUFQTjtFQVVJO0lBQ0Usb0JBQUE7SUFDQSxrQkFBQTtFQVJOO0FBQ0Y7O0FDWkk7RUQyQkU7SUFDRSxvQkFBQTtJQUNBLGtCQUFBO0VBWk47QUFDRjs7QUFrQk07RUFJRSx1QkFBQTtBQW5CUjs7QUFnQlE7RUFDRSxVQUFBO0FBZFY7O0FBcUJNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBbkJSOztBQXFCTTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFuQlI7O0FBcUJRO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFuQlY7O0FBeUJNO0VBQ0UsYUFBQTtBQXZCUjs7QUF5Qk07RUFDRSx5QkFBQTtBQXZCUjs7QUE2QkE7RUFDRSxZQUFBO0FBMUJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMvbW9kdWxlL2hlbHAvY29tcG9uZW50cy9mYXEtcmVwb3J0L2ZhcS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG5oNiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbnNiLWZvcm0uZmFxLXNiZm9ybXMge31cblxuOjpuZy1kZWVwIHtcbiAgc2ItZm9ybS5mYXEtc2Jmb3JtcyAubXVsdGktc2VsZWN0LWNvbnRhaW5lciAubGlzdC1ib3JkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2ItdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zYi1tb2RhbC1kcm9wZG93bi13ZWIgdWwge1xuICAgIGJvcmRlcjogMCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIH1cblxuICBzYi1mb3JtLmZhcS1zYmZvcm1zPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDE2cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG5cbiAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgfVxuXG4gICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgIH1cblxuICAgICAgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzYi1mb3JtLmZhcS1zYmZvcm1zLm90aGVyLWlzc3VlPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge1xuICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2ItZm9ybXtcbiAgICBzYi1tdWx0aXBsZS1kcm9wZG93bntcbiAgICAgIC5saXN0LWJvcmRlcntcbiAgICAgICAgdWx7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2ItbW9kYWwtZHJvcGRvd24td2ViIHtcbiAgICAgIHVse1xuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2ItdGV4dGFyZWF7XG4gICAgICB0ZXh0YXJlYXtcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICAgIH1cbiAgICAgIC5yZW1haW5pbmctbGVuZ3RoIHtcbiAgICAgICAgY29sb3I6ICM1NzU3NTcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN1Ym1pdC1mZWVkYmFja3tcbiAgZmxvYXQ6cmlnaHQ7XG59IiwiLy9cbi8vICBNRURJQSBRVUVSSUVTXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBBIG1hcCBvZiBicmVha3BvaW50cy5cbiRicmVha3BvaW50czogKFxuICB4czogNTc2cHgsXG4gIHNtOiA3NjhweCxcbiAgbWQ6IDk5MnB4LFxuICBsZzogMTI4MHB4LFxuICB4bDogMTQ0MHB4LFxuICB4eGw6IDE2MDBweCxcbiAgeHh4bDogMTkwMHB4XG4pO1xuXG5cbi8vXG4vLyAgUkVTUE9ORCBBQk9WRVxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge31cbkBtaXhpbiByZXNwb25kLWFib3ZlKCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFTE9XXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7fVxuQG1peGluIHJlc3BvbmQtYmVsb3coJGJyZWFrcG9pbnQpIHtcblxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogKCRicmVha3BvaW50LXZhbHVlIC0gMSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuXG4vL1xuLy8gIFJFU1BPTkQgQkVUV0VFTlxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZXR3ZWVuKHNtLCBtZCkge31cbkBtaXhpbiByZXNwb25kLWJldHdlZW4oJGxvd2VyLCAkdXBwZXIpIHtcblxuICAvLyBJZiBib3RoIHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMgZXhpc3QgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcblxuICAgIC8vIEdldCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzLlxuICAgICRsb3dlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGxvd2VyKTtcbiAgICAkdXBwZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDogKCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIG9uZSBvciBib3RoIG9mIHRoZSBicmVha3BvaW50cyBkb24ndCBleGlzdC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIGxvd2VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xuICAgIH1cblxuICAgIC8vIElmIHVwcGVyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xuXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XG4gICAgfVxuICB9XG59Il19 */"];



/***/ }),

/***/ "IZFK":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq/faq.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_FaqComponent, View_FaqComponent_0, View_FaqComponent_Host_0, FaqComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FaqComponent", function() { return RenderType_FaqComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FaqComponent_0", function() { return View_FaqComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FaqComponent_Host_0", function() { return View_FaqComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponentNgFactory", function() { return FaqComponentNgFactory; });
/* harmony import */ var _faq_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.component.scss.shim.ngstyle */ "UGuT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _faq_report_faq_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../faq-report/faq-report.component.ngfactory */ "uAK0");
/* harmony import */ var _faq_report_faq_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../faq-report/faq-report.component */ "pBgw");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _plugins_profile_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../plugins/profile/services/profile/profile.service */ "gcPr");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _node_modules_project_sunbird_sunbird_video_player_v9_project_sunbird_sunbird_video_player_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../node_modules/@project-sunbird/sunbird-video-player-v9/project-sunbird-sunbird-video-player-v9.ngfactory */ "i7ao");
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ "7l48");
/* harmony import */ var _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @project-sunbird/sunbird-player-sdk-v9 */ "amcy");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _core_directives_desktop_only_desktop_only_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/desktop-only/desktop-only.directive */ "B6Z7");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./faq.component */ "SqNk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../core/services/tenant/tenant.service */ "LePv");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _services_faq_faq_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../services/faq/faq.service */ "m1vd");
/* harmony import */ var _core_services_public_data_public_data_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../core/services/public-data/public-data.service */ "BZPo");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../core/services/form/form.service */ "9dCP");







































var styles_FaqComponent = [_faq_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FaqComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FaqComponent, data: {} });

function View_FaqComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.learn_more))), "{instance}", _co.instance)); _ck(_v, 1, 0, currVal_0); }); }
function View_FaqComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.frequentlyAskedQuestions))); _ck(_v, 1, 0, currVal_0); }); }
function View_FaqComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "help-page__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_FaqComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "m-16 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.frequentlyAskedQuestions))); _ck(_v, 1, 0, currVal_0); }); }
function View_FaqComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "section", [["class", "sbhelp_container__left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "category-list-mobile": 0, "category-list-web": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sb-list", [["tabindex", "0"]], null, [[null, "itemClick"], [null, "btnClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("itemClick" === en)) {
        var pd_0 = (_co.onCategorySelect($event) !== false);
        ad = (pd_0 && ad);
    } if (("btnClick" === en)) {
        var pd_1 = (_co.enableFaqReport($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ListComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, [[1, 4], ["sbFaqCategoryList", 4]], 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__["ListComponent"], [], { title: [0, "title"], listData: [1, "listData"], btnImg: [2, "btnImg"], btnText: [3, "btnText"] }, { itemClick: "itemClick", btnClick: "btnClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sbhelp_container__left"; var currVal_1 = _ck(_v, 2, 0, _co.isMobileView, !_co.isMobileView); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.selectCategoryTitle)); var currVal_3 = ((_co.faqData == null) ? null : _co.faqData.categories); var currVal_4 = "./assets/images/report.svg"; var currVal_5 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.reportIssueMsg)); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_FaqComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isExpanded = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs ml-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/common-consumption/images/sprite.svg#arrow-up"]], null, null, null, null, null))], null, null); }
function View_FaqComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isExpanded = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs ml-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/common-consumption/images/sprite.svg#arrow-down"]], null, null, null, null, null))], null, null); }
function View_FaqComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "section", [["class", "sbhelp_container__left sbhelp_container__debug mt-16"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "category-list-mobile": 0, "category-list-web": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 20, "div", [["class", "sb-developer-option-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "sb-developer-option-panel-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "sb-developer-option-panel-heading__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "sb-developer-option-panel-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "sb-developer-option-panel-body"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 7, "div", [["class", "sb-developer-option-panel-body__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "enable-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "label", [["class", "switch"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "input", [["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.enableDebugMode($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "span", [["class", "slider round"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "sb-developer-option-panel-body__info"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 3)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sbhelp_container__left sbhelp_container__debug mt-16"; var currVal_1 = _ck(_v, 2, 0, _co.isMobileView, !_co.isMobileView); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _co.isExpanded; _ck(_v, 9, 0, currVal_3); var currVal_4 = !_co.isExpanded; _ck(_v, 11, 0, currVal_4); var currVal_9 = _ck(_v, 19, 0, _co.isDisabled); _ck(_v, 18, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.debugModeTitle))); _ck(_v, 6, 0, currVal_2); var currVal_5 = !_co.isExpanded; _ck(_v, 12, 0, currVal_5); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.enableDebugMode))); _ck(_v, 14, 0, currVal_6); var currVal_7 = _co.isDisabled; var currVal_8 = _co.isDisabled; _ck(_v, 17, 0, currVal_7, currVal_8); var currVal_10 = !_co.isDisabled; _ck(_v, 21, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.messages == null) ? null : ((_co.resourceService.messages.smsg == null) ? null : _co.resourceService.messages.smsg.debugMode))), "{time}", _co.time)); _ck(_v, 22, 0, currVal_11); }); }
function View_FaqComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "d-flex flex-ai-center mb-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h4", [["class", "ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.selectedFaqCategory == null) ? null : _co.selectedFaqCategory.name); _ck(_v, 3, 0, currVal_0); }); }
function View_FaqComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sb-carousel", [], null, [[null, "itemClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("itemClick" === en)) {
        var pd_0 = (_co.onVideoSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CarouselComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], [], { title: [0, "title"], listData: [1, "listData"] }, { itemClick: "itemClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.videoTitle)); var currVal_1 = ((_co.selectedFaqCategory == null) ? null : _co.selectedFaqCategory.videos); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_FaqComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "faq_title mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "sbhelp_container__faq"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "sb-faq", [["tabindex", "0"]], null, [[null, "toggleGroupEvent"], [null, "yesClickedEvent"], [null, "noClickedEvent"], [null, "submitClickedEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleGroupEvent" === en)) {
        var pd_0 = (_co.logInteractEvent($event, "toggle-clicked") !== false);
        ad = (pd_0 && ad);
    } if (("yesClickedEvent" === en)) {
        var pd_1 = (_co.logInteractEvent($event, "yes-clicked") !== false);
        ad = (pd_1 && ad);
    } if (("noClickedEvent" === en)) {
        var pd_2 = (_co.logInteractEvent($event, "no-clicked") !== false);
        ad = (pd_2 && ad);
    } if (("submitClickedEvent" === en)) {
        var pd_3 = (_co.logInteractEvent($event, "submit-clicked") !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FaqComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FaqComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"], [], { data: [0, "data"], extraTemplate: [1, "extraTemplate"] }, { toggleGroupEvent: "toggleGroupEvent", yesClickedEvent: "yesClickedEvent", noClickedEvent: "noClickedEvent", submitClickedEvent: "submitClickedEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.selectedFaqCategory; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 33); _ck(_v, 5, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.faqTitle)); _ck(_v, 2, 0, currVal_0); }); }
function View_FaqComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.showOnlyFaqCategory && _co.isMobileView); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.selectedFaqCategory == null) ? null : ((_co.selectedFaqCategory.videos == null) ? null : _co.selectedFaqCategory.videos.length)); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.selectedFaqCategory == null) ? null : ((_co.selectedFaqCategory.faqs == null) ? null : _co.selectedFaqCategory.faqs.length)); _ck(_v, 6, 0, currVal_2); }, null); }
function View_FaqComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-faq-report", [], null, null, null, _faq_report_faq_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_FaqReportComponent_0"], _faq_report_faq_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_FaqReportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _faq_report_faq_report_component__WEBPACK_IMPORTED_MODULE_11__["FaqReportComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"], _plugins_profile_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_13__["ProfileService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]], { faqData: [0, "faqData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.faqData; _ck(_v, 2, 0, currVal_0); }, null); }
function View_FaqComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "section", [["class", "sbhelp_container__right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "faq-section-mobile": 0, "faq-section-web": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sbhelp_container__right"; var currVal_1 = _ck(_v, 2, 0, _co.isMobileView, !_co.isMobileView); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_co.showFaqReport; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.showFaqReport; _ck(_v, 6, 0, currVal_3); }, null); }
function View_FaqComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "help-page__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "sbhelp_container mt-24"], ["style", "min-height:600px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "flex-basis-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.isMobileView && _co.showOnlyFaqCategory) || !_co.isMobileView); _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_co.isMobileView && _co.showOnlyFaqCategory) || !_co.isMobileView); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.isMobileView && !_co.showOnlyFaqCategory) || !_co.isMobileView); _ck(_v, 8, 0, currVal_2); }, null); }
function View_FaqComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "help-page__visit-helpcenter mt-24 w-100 p-16 d-flex flex-ai-center relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "fnormal mr-auto visit-helpcenter__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary"]], [[8, "href", 4], [8, "target", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_16__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.setTelemetryInteractEdata("help-center"); _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.stillCouldntFind))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lnk == null) ? null : _co.resourceService.frmelmnts.lnk.footerHelpCenter)); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.defaultFooterConfig == null) ? null : _co.defaultFooterConfig.helpCenterLink), ""); var currVal_3 = (_co.isDesktopApp ? "_blank" : "_self"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.goToHelpCenter))); _ck(_v, 7, 0, currVal_5); }); }
function View_FaqComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "fnormal visit-helpcenter__text mr-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "a", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary visit-helpcenter__btn"]], [[8, "href", 4], [8, "target", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_16__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.setTelemetryInteractEdata("help-center"); _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.stillCouldntFind))); _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lnk == null) ? null : _co.resourceService.frmelmnts.lnk.footerHelpCenter)); _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.defaultFooterConfig == null) ? null : _co.defaultFooterConfig.helpCenterLink), ""); var currVal_3 = (_co.isDesktopApp ? "_blank" : "_self"); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.goToHelpCenter))); _ck(_v, 6, 0, currVal_5); }); }
function View_FaqComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "ui modal transition active visible large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "sb-modal-content height-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "sunbird-video-player", [], null, [["document", "TelemetryEvent"], ["window", "beforeunload"]], function (_v, en, $event) { var ad = true; if (("document:TelemetryEvent" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTelemetryEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:beforeunload" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngOnDestroy() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_project_sunbird_sunbird_video_player_v9_project_sunbird_sunbird_video_player_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_SunbirdVideoPlayerComponent_0"], _node_modules_project_sunbird_sunbird_video_player_v9_project_sunbird_sunbird_video_player_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_SunbirdVideoPlayerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4440064, [[2, 4], ["videoPlayer", 4]], 0, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_19__["SunbirdVideoPlayerComponent"], [_project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_19__["SunbirdVideoPlayerService"], _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_19__["ɵb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_20__["ErrorService"]], { playerConfig: [0, "playerConfig"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = _co.playerConfig; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_FaqComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showVideoModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_22__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_FaqComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[3, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_22__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "large"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_FaqComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_24__["InterpolatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { sbFaqCategoryList: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { videoPlayer: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_26__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_27__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 16, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 14, "div", [["class", "ui container d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "div", [["class", "d-flex flex-dc ml-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "h4", [["class", "mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 9, "div", [["class", "help-page relative9 sbt-inside-page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 8, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 81920, null, 0, _core_directives_desktop_only_desktop_only_directive__WEBPACK_IMPORTED_MODULE_28__["DesktopOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["extraTemplate", 2]], null, 0, null, View_FaqComponent_17)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.layoutConfiguration; var currVal_2 = true; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = "relative position mt-0"; var currVal_4 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_6 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_7 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 10, 0, currVal_6, currVal_7); var currVal_10 = _co.isDesktopApp; _ck(_v, 20, 0, currVal_10); var currVal_11 = !_co.isDesktopApp; _ck(_v, 22, 0, currVal_11); var currVal_12 = _co.showLoader; _ck(_v, 26, 0, currVal_12); _ck(_v, 28, 0); var currVal_13 = (_co.faqData && !_co.showLoader); _ck(_v, 30, 0, currVal_13); var currVal_14 = (_co.faqData && !_co.showLoader); _ck(_v, 32, 0, currVal_14); var currVal_15 = (_co.showVideoModal && _co.playerConfig); _ck(_v, 35, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "\u201C", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))), "\u201D"); _ck(_v, 9, 0, currVal_5); var currVal_8 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 15, 0, currVal_8); var currVal_9 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.tab == null) ? null : _co.resourceService.frmelmnts.tab.help))); _ck(_v, 18, 0, currVal_9); }); }
function View_FaqComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-faq", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_FaqComponent_0, RenderType_FaqComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _faq_component__WEBPACK_IMPORTED_MODULE_29__["FaqComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_31__["CacheService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_32__["UtilService"], _core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_33__["TenantService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_34__["NavigationHelperService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_14__["TelemetryService"], _services_faq_faq_service__WEBPACK_IMPORTED_MODULE_35__["FaqService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _core_services_public_data_public_data_service__WEBPACK_IMPORTED_MODULE_36__["PublicDataService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_37__["ContentUtilsServiceService"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_38__["FormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FaqComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-faq", _faq_component__WEBPACK_IMPORTED_MODULE_29__["FaqComponent"], View_FaqComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "SqNk":
/*!****************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq/faq.component.ts ***!
  \****************************************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cache-service */ "RiOY");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_faq_faq_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/faq/faq.service */ "m1vd");
/* harmony import */ var _faq_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq-data */ "urIY");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/form/form.service */ "9dCP");
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













var TEN_MINUTES = 1000 * 60 * 10;
var FaqComponent = (function () {
    function FaqComponent(http, _cacheService, utilService, tenantService, resourceService, activatedRoute, layoutService, navigationHelperService, location, router, telemetryService, faqService, toasterService, configService, publicDataService, contentUtilsServiceService, formService) {
        this.http = http;
        this._cacheService = _cacheService;
        this.utilService = utilService;
        this.tenantService = tenantService;
        this.resourceService = resourceService;
        this.activatedRoute = activatedRoute;
        this.layoutService = layoutService;
        this.navigationHelperService = navigationHelperService;
        this.location = location;
        this.router = router;
        this.telemetryService = telemetryService;
        this.faqService = faqService;
        this.toasterService = toasterService;
        this.configService = configService;
        this.publicDataService = publicDataService;
        this.contentUtilsServiceService = contentUtilsServiceService;
        this.formService = formService;
        this.showLoader = true;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.defaultToEnglish = false;
        this.isDesktopApp = false;
        this.helpCenterLink = '/help/faqs/user/index.html';
        this.isMobileView = false;
        this.showOnlyFaqCategory = true;
        this.showVideoModal = false;
        this.isDisabled = false;
        this.timeInterval = String(TEN_MINUTES);
        this.time = 0;
        this.isExpanded = false;
    }
    FaqComponent.prototype.onResize = function (event) {
        if (event && event.target && event.target.innerWidth) {
            this.checkScreenView(event.target && event.target.innerWidth);
        }
    };
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDesktopApp = this.utilService.isDesktopApp;
        this.setTelemetryImpression();
        this.initLayout();
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_6__["upperCase"](this.resourceService.instance);
        this.defaultFooterConfig = {
            helpCenterLink: this.helpCenterLink,
            helpDeskEmail: "support@" + lodash_es__WEBPACK_IMPORTED_MODULE_6__["lowerCase"](this.instance) + "-ncte.freshdesk.com"
        };
        this.selectedLanguage = this._cacheService.get('portalLanguage') || 'en';
        if (this.isDesktopApp) {
            var baseUrl = this.utilService.getAppBaseUrl();
            this.defaultFooterConfig.helpCenterLink = "" + baseUrl + this.helpCenterLink;
            this.getDesktopFAQ(this.selectedLanguage);
        }
        else {
            this.faqService.getFaqJSON()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
                _this.faqBaseUrl = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](data, 'result.response.value');
                _this.getFaqJson();
            }, function (err) {
                _this.showLoader = false;
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            });
        }
        this.utilService.languageChange.subscribe(function (langData) {
            _this.showLoader = true;
            _this.selectedLanguage = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](langData, 'value') || 'en';
            if (_this.isDesktopApp) {
                _this.getDesktopFAQ(_this.selectedLanguage);
            }
            else {
                _this.getFaqJson();
            }
        });
        this.checkScreenView(window.innerWidth);
        if (localStorage.getItem('debugDisabled')) {
            this.isDisabled = (localStorage.getItem('debugDisabled') === 'true') ? true : false;
            this.updateButtonVisibility();
        }
    };
    FaqComponent.prototype.getFaqJson = function () {
        var _this = this;
        this.faqData = undefined;
        this.http.get(this.faqBaseUrl + "/faq-" + this.selectedLanguage + ".json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (data) {
            _this.selectInitialCategory(data);
            _this.showLoader = false;
            _this.defaultToEnglish = false;
        }, function (err) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](err, 'status') === 404 && !_this.defaultToEnglish) {
                _this.selectedLanguage = 'en';
                _this.defaultToEnglish = true;
                _this.getFaqJson();
            }
            else {
                _this.showLoader = false;
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            }
        });
    };
    FaqComponent.prototype.getDesktopFAQ = function (languageCode) {
        var _this = this;
        if (languageCode === void 0) { languageCode = 'en'; }
        var requestParams = {
            url: this.configService.urlConFig.URLS.OFFLINE.READ_FAQ + "/" + languageCode
        };
        this.faqData = undefined;
        this.publicDataService.get(requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (response) {
            _this.showLoader = false;
            var faqData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](response, 'result.faqs');
            _this.selectInitialCategory(faqData);
            _this.defaultToEnglish = false;
        }, function (error) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](error, 'status') === 404 && !_this.defaultToEnglish) {
                _this.selectedLanguage = 'en';
                _this.defaultToEnglish = true;
                _this.getDesktopFAQ();
            }
            else {
                _this.showLoader = false;
                console.log("Received Error while fetching faqs " + JSON.stringify(error.error));
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            }
        });
    };
    FaqComponent.prototype.selectInitialCategory = function (data) {
        var _this = this;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](data, 'categories.length')) {
            this.faqData = this.prepareFaqData(data);
            this.selectedFaqCategory = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.faqData, 'categories.0');
            this.selectedFaqCategory['constants'] = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.faqData, 'constants');
            setTimeout(function () {
                if (_this.sbFaqCategoryList && _this.sbFaqCategoryList.selectedIndex !== undefined) {
                    _this.sbFaqCategoryList.selectedIndex = 0;
                }
            }, 0);
        }
    };
    FaqComponent.prototype.prepareFaqData = function (data) {
        for (var i = 0; i < data.categories.length; i++) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](data.categories[i], 'faqs.length')) {
                for (var j = 0; j < data.categories[i].faqs.length; j++) {
                    data.categories[i].faqs[j].topic = lodash_es__WEBPACK_IMPORTED_MODULE_6__["replace"](data.categories[i].faqs[j].topic, /{instance}/g, this.instance);
                    data.categories[i].faqs[j].description = lodash_es__WEBPACK_IMPORTED_MODULE_6__["replace"](data.categories[i].faqs[j].description, /{instance}/g, this.instance);
                }
            }
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](data.categories[i], 'videos.length')) {
                for (var j = 0; j < data.categories[i].videos.length; j++) {
                    data.categories[i].videos[j].name = lodash_es__WEBPACK_IMPORTED_MODULE_6__["replace"](data.categories[i].videos[j].name, /{instance}/g, this.instance);
                }
            }
        }
        return data;
    };
    FaqComponent.prototype.setTelemetryImpression = function () {
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.router.url,
                subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
                duration: this.navigationHelperService.getPageLoadTime()
            }
        };
    };
    FaqComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    FaqComponent.prototype.goBack = function () {
        if (!this.showOnlyFaqCategory && this.isMobileView) {
            this.showOnlyFaqCategory = true;
            return;
        }
        this.location.back();
    };
    FaqComponent.prototype.setTelemetryInteractEdata = function (type) {
        return {
            id: type,
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute, 'root.firstChild.snapshot.data.telemetry.pageid')
        };
    };
    FaqComponent.prototype.logInteractEvent = function (event, subtype) {
        var cardClickInteractData = {
            context: {
                cdata: [],
                env: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute, 'root.firstChild.snapshot.data.telemetry.env'),
            },
            edata: {
                id: 'faq',
                subtype: subtype,
                type: 'TOUCH',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute, 'root.firstChild.snapshot.data.telemetry.pageid'),
                extra: { values: event.data }
            }
        };
        this.telemetryService.interact(cardClickInteractData);
    };
    FaqComponent.prototype.onCategorySelect = function (event) {
        var _this = this;
        this.showOnlyFaqCategory = false;
        this.showFaqReport = false;
        this.selectedFaqCategory = undefined;
        if (!event || !event.data) {
            return;
        }
        setTimeout(function () {
            var faqCategory = event.data;
            faqCategory.constants = _this.faqData.constants;
            _this.selectedFaqCategory = faqCategory;
        }, 0);
    };
    FaqComponent.prototype.checkScreenView = function (width) {
        if (width <= 767) {
            this.isMobileView = true;
            this.showOnlyFaqCategory = true;
        }
        else {
            this.isMobileView = false;
        }
    };
    FaqComponent.prototype.onVideoSelect = function (event) {
        if (!event || !event.data) {
            return;
        }
        var video = _faq_data__WEBPACK_IMPORTED_MODULE_11__["VideoConfig"];
        video.metadata.appIcon = event.data.thumbnail;
        video.metadata.name = event.data.name;
        video.metadata.artifactUrl = event.data.url;
        this.playerConfig = video;
        this.showVideoModal = true;
        this.videoPlayer.changes.subscribe(function () {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](document.getElementsByClassName('sb-player-side-menu-icon'), '0.style')) {
                document.getElementsByClassName('sb-player-side-menu-icon')[0]['style'].display = 'none';
            }
        });
    };
    FaqComponent.prototype.enableFaqReport = function (event) {
        this.showOnlyFaqCategory = false;
        this.showFaqReport = true;
        if (this.sbFaqCategoryList && this.sbFaqCategoryList.selectedIndex !== undefined) {
            this.sbFaqCategoryList.selectedIndex = -1;
        }
    };
    FaqComponent.prototype.getDebugTimeInterval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, formFields, field, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = { formType: 'config', formAction: 'get', contentType: 'debugMode', component: 'portal' };
                        return [4, this.formService.getFormConfig(params).toPromise()];
                    case 1:
                        formFields = _a.sent();
                        field = formFields.filter(function (item) { return item.timeInterval; });
                        if (field.length) {
                            this.timeInterval = field[0].timeInterval;
                        }
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.timeInterval = String(TEN_MINUTES);
                        return [3, 3];
                    case 3:
                        this.time = Number(this.timeInterval) / (1000 * 60);
                        return [2, new Promise(function (resolve) { return resolve(_this.timeInterval); })];
                }
            });
        });
    };
    FaqComponent.prototype.updateButtonVisibility = function () {
        var _this = this;
        var currentTime = Math.floor(Date.now());
        var valueStored = Number(localStorage.getItem('debugDisabledAt'));
        var disableTime = Number(valueStored + Number(this.timeInterval));
        if (currentTime > disableTime) {
            this.isDisabled = false;
            localStorage.setItem('debugDisabled', 'false');
            localStorage.setItem('debugDisabledAt', '0');
        }
        else {
            var time = disableTime - currentTime;
            this.time = Number(this.timeInterval) / (1000 * 60);
            setTimeout(function () {
                _this.isDisabled = false;
                localStorage.setItem('debugDisabled', 'false');
                localStorage.setItem('debugDisabledAt', '0');
            }, time);
        }
    };
    FaqComponent.prototype.enableDebugMode = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var timeInterval, httpOptions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getDebugTimeInterval()];
                    case 1:
                        timeInterval = _a.sent();
                        localStorage.setItem('debugDisabled', 'true');
                        localStorage.setItem('debugDisabledAt', String(Math.floor(Date.now())));
                        this.isDisabled = true;
                        this.updateButtonVisibility();
                        httpOptions = {
                            params: {
                                logLevel: 'debug',
                                timeInterval: timeInterval
                            }
                        };
                        this.http.get('/enableDebugMode', httpOptions).subscribe(function (res) {
                            _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.resourceService, 'frmelmnts.alert.debugModeEnabledSuccess'));
                        }, function (error) {
                            console.error('Error while enabling debug mode');
                            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.resourceService, 'frmelmnts.alert.debugModeEnabledFailed'));
                        });
                        return [2];
                }
            });
        });
    };
    return FaqComponent;
}());



/***/ }),

/***/ "TRSW":
/*!****************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/index.ts ***!
  \****************************************************************/
/*! exports provided: FaqComponent, OfflineHelpVideosComponent, FaqReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq/faq.component */ "SqNk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return _faq_faq_component__WEBPACK_IMPORTED_MODULE_0__["FaqComponent"]; });

/* harmony import */ var _offline_help_videos_offline_help_videos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline-help-videos/offline-help-videos.component */ "V0Ci");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfflineHelpVideosComponent", function() { return _offline_help_videos_offline_help_videos_component__WEBPACK_IMPORTED_MODULE_1__["OfflineHelpVideosComponent"]; });

/* harmony import */ var _faq_report_faq_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-report/faq-report.component */ "pBgw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqReportComponent", function() { return _faq_report_faq_report_component__WEBPACK_IMPORTED_MODULE_2__["FaqReportComponent"]; });






/***/ }),

/***/ "UGuT":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq/faq.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --visit-helpcenter-bg:var(--white);\n}\n\u200B   [_nghost-%COMP%]  \u200B .help-page__content {\n  margin-top: 1.5rem;\n}\n\u200B   [_nghost-%COMP%]  \u200B .help-page__content .panel .panel-heading, \u200B   [_nghost-%COMP%]  \u200B .help-page__content .panel .panel-interact, \u200B   [_nghost-%COMP%]  \u200B .help-page__content .panel .panel-info {\n  background: var(--cc-faq-panel-interact-bg);\n}\n\u200B   [_nghost-%COMP%]  \u200B .help-page__content .panel .panel-info {\n  max-width: 100%;\n  padding: 1rem;\n}\n\u200B   [_nghost-%COMP%]  \u200B .help-page__content ul li {\n  margin-bottom: auto;\n  list-style: initial;\n}\n\u200B   [_nghost-%COMP%]  \u200B .help-page__visit-helpcenter {\n  background-color: var(--visit-helpcenter-bg);\n}\n@media (max-width: 767px) {\n  \u200B   [_nghost-%COMP%]  \u200B .help-page__visit-helpcenter .visit-helpcenter__text {\n    flex-basis: 50%;\n  }\n}\n[_nghost-%COMP%]  \u200B .help-page code {\n  background-color: #eee;\n  border-radius: 3px;\n  font-family: courier, monospace;\n  padding: 0 3px;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]  \u200B .extraTemplate {\n    flex-wrap: wrap;\n  }\n  [_nghost-%COMP%]  \u200B .extraTemplate .visit-helpcenter__text, [_nghost-%COMP%]  \u200B .extraTemplate .visit-helpcenter__btn {\n    flex-basis: 100%;\n  }\n  [_nghost-%COMP%]  \u200B .extraTemplate .visit-helpcenter__btn {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]  sb-list .listView-compt section.mt-24 button {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n[_nghost-%COMP%]  sb-list .listView-compt section.mt-24 button img {\n  height: 1rem;\n}\n[_nghost-%COMP%]  sb-faq .panel ul {\n  list-style: disc;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]  sb-faq .panel ul li {\n  margin-bottom: auto;\n}\n[_nghost-%COMP%]  sb-faq .panel code {\n  background-color: #eee;\n  border-radius: 3px;\n  font-family: courier, monospace;\n  padding: 0 3px;\n}\n.faq_title[_ngcontent-%COMP%] {\n  color: var(--carousel-title);\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 1.5rem;\n}\n.debug-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.sbhelp_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.sbhelp_container[_ngcontent-%COMP%]   .category-list-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.sbhelp_container[_ngcontent-%COMP%]   .faq-section-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  float: none;\n}\n.sbhelp_container[_ngcontent-%COMP%]   .category-list-web[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sbhelp_container__left[_ngcontent-%COMP%] {\n  min-width: 19.5rem;\n  flex: 1;\n  padding: 1.5rem;\n  min-height: 8rem;\n  background: var(--sbfaq-compt-bg);\n  transition: all ease-in-out 0.3s;\n}\n.sbhelp_container__right[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  width: 100%;\n  transition: all ease-in-out 0.3s;\n}\n@media (max-width: 767px) {\n  .sbhelp_container__right[_ngcontent-%COMP%] {\n    padding-left: 0rem;\n  }\n}\n.sbhelp_container__faq[_ngcontent-%COMP%] {\n  background: var(--sbfaq-compt-bg);\n  padding: 1.5rem;\n  border-radius: 1.5rem;\n}\n.sbhelp_container__debug[_ngcontent-%COMP%] {\n  min-height: auto;\n  padding: 1rem 1.5rem;\n}\n.sb-developer-option-panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.sb-developer-option-panel-heading__title[_ngcontent-%COMP%] {\n  color: var(--cc-listView-compt-title);\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 1.25rem;\n}\n.sb-developer-option-panel-heading[_ngcontent-%COMP%]   .sb-developer-option-panel-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%] {\n  color: var(--cc-listView-compt-itemText);\n  font-size: 0.875rem;\n  letter-spacing: 0;\n  line-height: normal;\n  padding-top: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 2.5rem;\n  height: 1.25rem;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 1.125rem;\n  width: 1.125rem;\n  bottom: 0.125rem;\n  background-color: var(--white);\n  transition: 0.4s;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0.0625rem var(--primary-color);\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(21px);\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 2.125rem;\n}\n.sb-developer-option-panel-body__title[_ngcontent-%COMP%]   .enable-checkbox[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.sb-developer-option-panel-body__info[_ngcontent-%COMP%] {\n  color: var(--cc-listView-compt-itemText);\n  font-size: 0.75rem;\n  opacity: 0.5;\n  max-width: 12.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMvbW9kdWxlL2hlbHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWl4aW5zL19tZWRpYS1xdWVyaWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0ksa0NBQUE7QUFDSjtBQUtBO0VBRVksa0JBQUE7QUFIWjtBQUtnQjtFQUNJLDJDQUFBO0FBSHBCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFIcEI7QUFNWTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFKaEI7QUFPQTtFQUVZLDRDQUFBO0FBTlo7QUNvQ0k7RUQ3QlE7SUFFUSxlQUFBO0VBTGxCO0FBQ0Y7QUFTUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFQWjtBQ3lCSTtFRGZKO0lBR1ksZUFBQTtFQVRWO0VBVVU7SUFDSSxnQkFBQTtFQVJkO0VBVVU7SUFDSSxnQkFBQTtFQVJkO0FBQ0Y7QUFlZ0I7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBYnBCO0FBY29CO0VBQ0ksWUFBQTtBQVp4QjtBQXFCWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW5CaEI7QUFxQlk7RUFDSSxtQkFBQTtBQW5CaEI7QUFxQlk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBbkJoQjtBQXdCQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQXVCQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFwQko7QUFzQkE7RUFZSSxhQUFBO0VBQ0EsdUJBQUE7QUE5Qko7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQWhCUjtBQWtCSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBaEJSO0FBa0JJO0VBQ0kscUJBQUE7QUFoQlI7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBbEJSO0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFsQlI7QUNqREk7RURnRUE7SUFLUSxrQkFBQTtFQWhCVjtBQUNGO0FBa0JJO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQlI7QUFtQkE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBaEJKO0FBa0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBZko7QUFnQkk7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFkUjtBQWdCSTtFQUNJLGVBQUE7QUFkUjtBQWtCSTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFmUjtBQWlCWTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWZoQjtBQWtCYztFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWhCaEI7QUFtQmM7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQWpCaEI7QUFvQmM7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7QUFsQmhCO0FBcUJjO0VBQ0Usc0NBQUE7QUFuQmhCO0FBc0JjO0VBQ0UsOENBQUE7QUFwQmhCO0FBdUJjO0VBR0UsMkJBQUE7QUFyQmhCO0FBdUJjO0VBQ0UsZUFBQTtBQXJCaEI7QUF1QmM7RUFDRSx1QkFBQTtBQXJCaEI7QUF3QmM7RUFDRSxrQkFBQTtBQXRCaEI7QUEwQkk7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBeEJSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMvbW9kdWxlL2hlbHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcbjpyb290IHtcbiAgICAtLXZpc2l0LWhlbHBjZW50ZXItYmc6dmFyKC0td2hpdGUpO1xufVxuXG46aG9zdDo6bmctZGVlcCB7XG7igItcbiAgICAuaGVscC1wYWdlIHtcbuKAi1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgICAgICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1pbnRlcmFjdCwgLnBhbmVsLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYy1mYXEtcGFuZWwtaW50ZXJhY3QtYmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGFuZWwtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbuKAi1xuICAgICAgICAmX192aXNpdC1oZWxwY2VudGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpc2l0LWhlbHBjZW50ZXItYmcpO1xuICAgICAgICAgICAgLnZpc2l0LWhlbHBjZW50ZXJfX3RleHQge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgICAgfVxuICAgIH1cbuKAi1xuICAgIC5leHRyYVRlbXBsYXRlIHtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgLnZpc2l0LWhlbHBjZW50ZXJfX3RleHQsIC52aXNpdC1oZWxwY2VudGVyX19idG4ge1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmlzaXQtaGVscGNlbnRlcl9fYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2ItbGlzdCB7XG4gICAgICAgIC5saXN0Vmlldy1jb21wdHtcbiAgICAgICAgICAgIHNlY3Rpb24ubXQtMjR7XG4gICAgICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2ItZmFxIHtcbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGNvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5mYXFfdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jYXJvdXNlbC10aXRsZSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbi5kZWJ1Zy1idG4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2JoZWxwX2NvbnRhaW5lciB7XG4gICAgLmNhdGVnb3J5LWxpc3QtbW9iaWxle1xuICAgICAgICB3aWR0aDoxMDAlOyBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5mYXEtc2VjdGlvbi1tb2JpbGV7XG4gICAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgICBmbG9hdDpub25lO1xuICAgIH1cbiAgICAuY2F0ZWdvcnktbGlzdC13ZWJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAmX19sZWZ0IHtcbiAgICAgICAgbWluLXdpZHRoOiBjYWxjdWxhdGVSZW0oMzEycHgpO1xuICAgICAgICBmbGV4OjE7XG4gICAgICAgIHBhZGRpbmc6MS41cmVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA4cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYmZhcS1jb21wdC1iZyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XG4gICAgfVxuICAgICZfX3JpZ2h0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ZhcSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNiZmFxLWNvbXB0LWJnKTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgfVxufVxuLnNiaGVscF9jb250YWluZXJfX2RlYnVne1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzoxcmVtIDEuNXJlbTtcbn1cbi5zYi1kZXZlbG9wZXItb3B0aW9uLXBhbmVsLWhlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgJl9fdGl0bGV7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYy1saXN0Vmlldy1jb21wdC10aXRsZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIH1cbiAgICAuc2ItZGV2ZWxvcGVyLW9wdGlvbi1wYW5lbC1pY29ue1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLnNiLWRldmVsb3Blci1vcHRpb24tcGFuZWwtYm9keXtcbiAgICAmX190aXRsZXtcbiAgICAgICAgY29sb3I6IHZhcigtLWNjLWxpc3RWaWV3LWNvbXB0LWl0ZW1UZXh0KTtcbiAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5lbmFibGUtY2hlY2tib3h7XG4gICAgICAgICAgICAuc3dpdGNoIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNDBweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMjBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5zd2l0Y2ggaW5wdXQgeyBcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSgxOHB4KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDE4cHgpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsY3VsYXRlUmVtKDJweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjdWxhdGVSZW0oMXB4KSB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMXB4KTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIxcHgpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMXB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dDpkaXNhYmxlZCArIC5zbGlkZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oMzRweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19pbmZve1xuICAgICAgICBjb2xvcjogdmFyKC0tY2MtbGlzdFZpZXctY29tcHQtaXRlbVRleHQpO1xuICAgICAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSgyMDBweCk7XG4gICAgfVxufSIsIi8vXG4vLyAgTUVESUEgUVVFUklFU1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDU3NnB4LFxuICBzbTogNzY4cHgsXG4gIG1kOiA5OTJweCxcbiAgbGc6IDEyODBweCxcbiAgeGw6IDE0NDBweCxcbiAgeHhsOiAxNjAwcHgsXG4gIHh4eGw6IDE5MDBweFxuKTtcblxuXG4vL1xuLy8gIFJFU1BPTkQgQUJPVkVcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRUxPV1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFVFdFRU5cbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "V0Ci":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/offline-help-videos/offline-help-videos.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OfflineHelpVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineHelpVideosComponent", function() { return OfflineHelpVideosComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







var OfflineHelpVideosComponent = (function () {
    function OfflineHelpVideosComponent(document, resourceService, configService, activatedRoute, cdr) {
        this.document = document;
        this.resourceService = resourceService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.closeVideoModal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.instance = document.getElementById('instance')
            ? document.getElementById('instance').value : 'sunbird';
    }
    OfflineHelpVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideConfig = this.configService.offlineConfig.watchVideo;
        this.resourceService.languageSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function (item) {
            _this.slideData = [
                {
                    id: 'add-content-offline',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.instn.t0095),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_download_content_from_DIKSHA_Library.mp4'
                },
                {
                    id: 'add-content-online',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.instn.t0094),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_load_content_to_the_desktop_app.mp4'
                },
                {
                    id: 'copy-content',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.instn.t0097),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_copy_content_to_my_pen_drive.mp4'
                },
                {
                    id: 'find-content-offline',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.instn.t0096),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_play_content.mp4'
                },
                {
                    id: 'add-content-online-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.loadcontent),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_load_content_to_the_desktop_app_joyful_theme.mp4'
                },
                {
                    id: 'add-content-offline-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.downloadcontent),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_download_content_from_DIKSHA_Library_joyful_theme.mp4'
                },
                {
                    id: 'find-content-offline-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.playcontent),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_play_content_joyful_theme.mp4'
                },
                {
                    id: 'copy-content-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.copycontent),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_copy_content_to_my_pen_drive_joyful_theme.mp4'
                },
                {
                    id: 'how-to-login',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.login),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_on_diksha.mp4'
                },
                {
                    id: 'recover-account',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.recovaccnt),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_recover_myaccount.mp4'
                },
                {
                    id: 'register-on-diksha',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.register),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_register_on_diksha.mp4'
                },
                {
                    id: 'how-to-login-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.loginnewtheme),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_on_diksha_joyful_theme.mp4'
                },
                {
                    id: 'recover-account-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.recovaccntnewtheme),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_recover_myaccount_joyful_theme.mp4'
                },
                {
                    id: 'register-on-diksha-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.registernewtheme),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_register_on_diksha_joyful_theme.mp4'
                },
                {
                    id: 'add-managed-user',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.manageuser),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_add_users_on_DIKSHA.mp4'
                },
                {
                    id: 'add-managed-user-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.manageusernewtheme),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_add_users_on_DIKSHA_joyful_theme.mp4'
                },
                {
                    id: 'login-with-sso-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.SSologinnewtheme),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_using_my_State_ID_joyful_theme.mp4'
                },
                {
                    id: 'login-with-sso',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.loginSSO),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_using_my_State_ID.mp4'
                },
                {
                    id: 'login-with-google-joyful-theme',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.newthemegooglelogin),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_using_my_Google_ID_joyful_theme.mp4'
                },
                {
                    id: 'login-with-google',
                    name: _this.interpolateInstance(_this.resourceService.frmelmnts.vidttl.googlelogin),
                    thumbnail: 'assets/images/play-icon.svg',
                    url: 'assets/videos/How_do_I_login_using_my_Google_ID.mp4'
                }
            ];
            _this.activeVideoObject = _this.slideData[0];
        });
    };
    OfflineHelpVideosComponent.prototype.ngAfterViewInit = function () {
        this.setVideoHeight();
        this.cdr.detectChanges();
    };
    OfflineHelpVideosComponent.prototype.setVideoHeight = function () {
        console.log('aspect ratio value', this.aspectRatio);
        this.aspectRatioHeight = this.aspectRatio.nativeElement.offsetHeight;
        this.playerInfoHeight = this.playerInfo.nativeElement.offsetHeight;
        this.videoContainerHeight = this.aspectRatioHeight + this.playerInfoHeight;
    };
    OfflineHelpVideosComponent.prototype.interpolateInstance = function (message) {
        return message.replace('{instance}', lodash_es__WEBPACK_IMPORTED_MODULE_4__["upperCase"](this.instance));
    };
    OfflineHelpVideosComponent.prototype.changeVideoAttributes = function (data) {
        this.activeVideoObject = data;
        jquery__WEBPACK_IMPORTED_MODULE_3__('#video').attr('src', data.url);
    };
    OfflineHelpVideosComponent.prototype.closeModal = function () {
        this.closeVideoModal.emit('success');
    };
    OfflineHelpVideosComponent.prototype.setInteractData = function (data) {
        return {
            id: data.id,
            type: 'click',
            pageid: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.activatedRoute.snapshot.data.telemetry, 'pageid') || 'help'
        };
    };
    OfflineHelpVideosComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return OfflineHelpVideosComponent;
}());



/***/ }),

/***/ "WBIF":
/*!*******************************************************************!*\
  !*** ./src/app/modules/public/module/help/help-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HelpRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpRoutingModule", function() { return HelpRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "TRSW");


var ɵ0 = {
    routeReuse: {
        reuse: true,
        path: 'help'
    },
    menuBar: {
        visible: false
    },
    telemetry: {
        env: 'help', pageid: 'faq', type: 'view', subtype: 'paginate'
    }
};
var routes = [
    {
        path: '', component: _components__WEBPACK_IMPORTED_MODULE_1__["FaqComponent"],
        data: ɵ0
    }
];
var HelpRoutingModule = (function () {
    function HelpRoutingModule() {
    }
    return HelpRoutingModule;
}());




/***/ }),

/***/ "X5ws":
/*!***********************************************************!*\
  !*** ./src/app/modules/public/module/help/help.module.ts ***!
  \***********************************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
var HelpModule = (function () {
    function HelpModule() {
    }
    return HelpModule;
}());



/***/ }),

/***/ "m1vd":
/*!************************************************************************!*\
  !*** ./src/app/modules/public/module/help/services/faq/faq.service.ts ***!
  \************************************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_learner_learner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/learner/learner.service */ "lysQ");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/config/config.service */ "j0Qm");





var FaqService = (function () {
    function FaqService(learnerService, config) {
        this.learnerService = learnerService;
        this.config = config;
    }
    FaqService.prototype.getFaqJSON = function () {
        var systemSetting = {
            url: this.config.urlConFig.URLS.SYSTEM_SETTING.FAQ_URL,
        };
        return this.learnerService.get(systemSetting);
    };
    FaqService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function FaqService_Factory() { return new FaqService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_learner_learner_service__WEBPACK_IMPORTED_MODULE_3__["LearnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"])); }, token: FaqService, providedIn: "root" });
    return FaqService;
}());



/***/ }),

/***/ "pBgw":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq-report/faq-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FaqReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqReportComponent", function() { return FaqReportComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/profile */ "XCaa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
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







var FaqReportComponent = (function () {
    function FaqReportComponent(resourceService, toasterService, profileService, telemetryService, activatedRoute) {
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.telemetryService = telemetryService;
        this.activatedRoute = activatedRoute;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    FaqReportComponent.prototype.ngOnInit = function () {
        this.fetchFaqReportConfig();
    };
    FaqReportComponent.prototype.fetchFaqReportConfig = function () {
        var _this = this;
        this.profileService.getFaqReportIssueForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (formConfig) {
            _this.formStatus = undefined;
            _this.faqReportConfig = formConfig;
        }, function (error) {
            console.error('Unable to fetch form', error);
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.emsg.m0005'));
        });
    };
    FaqReportComponent.prototype.valueChanged = function (event) {
        this.formValues = event;
        if (!(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.faqReportConfig, '1.templateOptions'))) {
            return;
        }
        if (event.category === 'otherissues') {
            this.faqReportConfig[1].templateOptions.hidden = true;
        }
        else {
            this.faqReportConfig[1].templateOptions.hidden = false;
        }
    };
    FaqReportComponent.prototype.statusChanged = function (event) {
        this.formStatus = event;
    };
    FaqReportComponent.prototype.faqReportSubmit = function () {
        var _a, _b;
        if (!this.formStatus || !this.formStatus.isValid) {
            return false;
        }
        var params = [];
        for (var _i = 0, _c = Object.entries(this.formValues); _i < _c.length; _i++) {
            var _d = _c[_i], key = _d[0], value = _d[1];
            if (key === 'children') {
                for (var _e = 0, _f = this.formValues[key]; _e < _f.length; _e++) {
                    var _g = _f[_e], childKey = _g[0], childValue = _g[1];
                    params.push((_a = {}, _a[childKey] = childValue, _a));
                }
            }
            else {
                params.push((_b = {}, _b[key] = value, _b));
            }
        }
        var telemetryContextObj = { env: 'portal', cdata: [] };
        var edata = { type: 'system', pageid: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.activatedRoute, 'snapshot.data.telemetry.pageid') };
        var interactEvent = { context: telemetryContextObj, edata: __assign(__assign({ id: 'submit-clicked' }, edata), { type: 'support' }) };
        var logEvent = {
            context: telemetryContextObj,
            edata: __assign({ level: 'INFO', message: 'faq', params: params }, edata)
        };
        this.telemetryService.log(logEvent);
        this.telemetryService.interact(interactEvent);
        var message = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.faqData, 'constants.thanksForFeedbackMsg');
        this.toasterService.custom({
            message: message.replace('{{app_name}}', lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, 'instance')),
            class: 'sb-toaster sb-toast-success sb-toast-normal'
        });
        this.faqReportConfig = undefined;
        this.fetchFaqReportConfig();
    };
    FaqReportComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    return FaqReportComponent;
}());



/***/ }),

/***/ "uAK0":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq-report/faq-report.component.ngfactory.js ***!
  \****************************************************************************************************/
/*! exports provided: RenderType_FaqReportComponent, View_FaqReportComponent_0, View_FaqReportComponent_Host_0, FaqReportComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FaqReportComponent", function() { return RenderType_FaqReportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FaqReportComponent_0", function() { return View_FaqReportComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FaqReportComponent_Host_0", function() { return View_FaqReportComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqReportComponentNgFactory", function() { return FaqReportComponentNgFactory; });
/* harmony import */ var _faq_report_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-report.component.scss.shim.ngstyle */ "BRx5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _faq_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq-report.component */ "pBgw");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _plugins_profile_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../plugins/profile/services/profile/profile.service */ "gcPr");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");












var styles_FaqReportComponent = [_faq_report_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FaqReportComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FaqReportComponent, data: {} });

function View_FaqReportComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "sb-form", [["class", "faq-sbforms"]], null, [[null, "valueChanges"], [null, "statusChanges"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChanges" === en)) {
        var pd_0 = (_co.valueChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("statusChanges" === en)) {
        var pd_1 = (_co.statusChanged($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_FormComponent_0"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_FormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "other-issue": 0, "": 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, null, 0, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]], { platform: [0, "platform"], config: [1, "config"] }, { valueChanges: "valueChanges", statusChanges: "statusChanges" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "faq-sbforms"; var currVal_1 = _ck(_v, 2, 0, (((_co.formValues == null) ? null : _co.formValues.category) === "otherissues"), (((_co.formValues == null) ? null : _co.formValues.category) !== "otherissues")); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "web"; var currVal_3 = _co.faqReportConfig; _ck(_v, 3, 0, currVal_2, currVal_3); }, null); }
function View_FaqReportComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "faq-report-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h6", [["class", "pb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqReportComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "div", [["class", "sb-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-6 sb-g-col-lg-9 sb-g-col-xxxl-22"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-6 sb-g-col-lg-3 sb-g-col-xxxl-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-primary sb-btn-normal submit-feedback"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.faqReportSubmit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.faqReportConfig; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.tellMoreMsg)); _ck(_v, 2, 0, currVal_0); var currVal_2 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.triggerEmailMsg)); _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.faqData == null) ? null : ((_co.faqData.constants == null) ? null : _co.faqData.constants.submitButton)); _ck(_v, 11, 0, currVal_3); }); }
function View_FaqReportComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-faq-report", [], null, null, null, View_FaqReportComponent_0, RenderType_FaqReportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _faq_report_component__WEBPACK_IMPORTED_MODULE_6__["FaqReportComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _plugins_profile_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FaqReportComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-faq-report", _faq_report_component__WEBPACK_IMPORTED_MODULE_6__["FaqReportComponent"], View_FaqReportComponent_Host_0, { faqData: "faqData" }, {}, []);



/***/ }),

/***/ "urIY":
/*!***********************************************************************!*\
  !*** ./src/app/modules/public/module/help/components/faq/faq-data.ts ***!
  \***********************************************************************/
/*! exports provided: VideoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConfig", function() { return VideoConfig; });
var VideoConfig = {
    'context': {
        'mode': 'play',
        'authToken': '',
        'sid': '',
        'did': '',
        'uid': '',
        'channel': '',
        'pdata': { 'id': '', 'ver': '', 'pid': '' },
        'contextRollup': { 'l1': '' },
        'tags': [''],
        'cdata': [],
        'timeDiff': 0,
        'objectRollup': {},
        'host': '',
        'endpoint': '',
        'userData': {
            'firstName': '',
            'lastName': ''
        }
    },
    'config': {
        'traceId': ''
    },
    'metadata': {
        'compatibilityLevel': 0,
        'copyright': '',
        'subject': [
            ''
        ],
        'channel': '',
        'language': [
            ''
        ],
        'mimeType': 'video/mp4',
        'objectType': 'Content',
        'gradeLevel': [
            ''
        ],
        'appIcon': '',
        'primaryCategory': '',
        'artifactUrl': '',
        'contentType': '',
        'identifier': '',
        'audience': [
            ''
        ],
        'visibility': 'Default',
        'mediaType': 'content',
        'osId': '',
        'languageCode': [
            ''
        ],
        'license': '',
        'name': '',
        'status': 'Live',
        'code': '',
        'streamingUrl': '',
        'medium': [
            ''
        ],
        'createdOn': '2020-08-24T17:58:32.911+0000',
        'copyrightYear': 2020,
        'lastUpdatedOn': '2020-08-25T04:36:47.587+0000',
        'creator': '',
        'pkgVersion': 1,
        'versionKey': '',
        'framework': '',
        'createdBy': '',
        'resourceType': 'Learn',
        'orgDetails': {
            'email': '',
            'orgName': ''
        },
        'licenseDetails': {
            'name': '',
            'url': '',
            'description': ''
        }
    },
    'data': {}
};


/***/ })

}]);
//# sourceMappingURL=module-help-help-module-ngfactory.js.map