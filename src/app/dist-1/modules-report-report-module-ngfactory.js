(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-report-report-module-ngfactory"],{

/***/ "0jSo":
/*!***********************************************************!*\
  !*** ./src/app/modules/report/report.module.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: ReportModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModuleNgFactory", function() { return ReportModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _report_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.module */ "pCwN");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "ntJQ");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */ "9cE2");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "nmIE");
/* harmony import */ var _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/alert-modal/alert-modal.component.ngfactory */ "IuEi");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/ngx-daterangepicker-material/ngx-daterangepicker-material.ngfactory */ "dGgD");
/* harmony import */ var _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@project-sunbird/sb-dashlet-v9/project-sunbird-sb-dashlet-v9.ngfactory */ "4cR3");
/* harmony import */ var _components_solution_listing_solution_listing_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/solution-listing/solution-listing.component.ngfactory */ "O4jL");
/* harmony import */ var _components_report_view_report_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/report-view/report-view.component.ngfactory */ "BMcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-avatar */ "UTQ3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-chips */ "CLta");
/* harmony import */ var _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared-feature/shared-feature.module */ "GX4e");
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");
/* harmony import */ var _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../notification/services/notification/notification-service-impl */ "2QjS");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../core/services/user/user.service */ "chB/");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../notification/services/group-notification-wrapper/group-notification-wrapper.service */ "1Ind");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service */ "SaJQ");
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../core/guard/auth-gard.service */ "uakX");
/* harmony import */ var _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../core/core.module */ "6ZYd");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ "WN11");
/* harmony import */ var _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @project-sunbird/sunbird-player-sdk-v9 */ "amcy");
/* harmony import */ var _player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../player-helper/service/quml-player/quml-player.service */ "F/jw");
/* harmony import */ var _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @project-sunbird/sunbird-collection-editor-v9 */ "qSDK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-daterangepicker-material */ "kFe1");
/* harmony import */ var _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @project-sunbird/sb-dashlet-v9 */ "IJrI");
/* harmony import */ var _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../telemetry/telemetry.module */ "OW9C");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../shared/modules/material/material.module */ "CrH2");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @project-sunbird/web-extensions */ "q0uc");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ng2-material-dropdown */ "mB+Y");
/* harmony import */ var _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../plugins/location/location.module */ "hr7c");
/* harmony import */ var sb_notification__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! sb-notification */ "oikk");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../notification/notification.module */ "ME/D");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ngx-slick */ "k0v7");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @project-sunbird/sunbird-pdf-player-v9 */ "J49s");
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ "7l48");
/* harmony import */ var _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @project-sunbird/sunbird-epub-player-v9 */ "/eec");
/* harmony import */ var _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../player-helper/player-helper.module */ "9BjS");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.module */ "axVG");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./report-routing.module */ "HYDo");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @shikshalokam/sl-reports-library */ "HX6c");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _components_solution_listing_solution_listing_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/solution-listing/solution-listing.component */ "dX3e");
/* harmony import */ var _components_report_view_report_view_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/report-view/report-view.component */ "qPKA");































































































var ReportModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_report_module__WEBPACK_IMPORTED_MODULE_1__["ReportModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵbpNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵceNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AlertModalComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_lNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFormComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTimerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTextboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicTextareaComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicMultipleDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicCheckboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicMultiSelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TopicpickerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["KeywordsComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFrameworkCategorySelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵbNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicFrameworkComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicRadioComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DynamicDialcodeComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵcNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵdNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_9__["DaterangepickerComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ChartJsComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["BigNumberComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["DtTableComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["MapComponentNgFactory"], _components_solution_listing_solution_listing_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["SolutionListingComponentNgFactory"], _components_report_view_report_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ReportViewComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["ɵbx"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["ɵbx"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiLocalizationService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiLocalizationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModalService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModalService"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["ɵbx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPopupConfig"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPopupConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["ScrollbarHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["ScrollbarHelper"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["DimensionsHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["DimensionsHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["ColumnChangesService"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["ColumnChangesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_EXTEND"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵa"], ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵb"], ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵb"], [[2, ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵc"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["AvatarService"], ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["AvatarService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"], ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_30__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_30__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_NOTIFICATION_SERVICE", _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_31__["csNotificationServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_32__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, "SB_NOTIFICATION_SERVICE", _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_33__["NotificationServiceImpl"], ["CS_NOTIFICATION_SERVICE", _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_37__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["ActivatedRoute"], _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_38__["GroupNotificationWrapperService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_39__["CacheService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_39__["CacheService"], [ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_40__["CacheStorageAbstract"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"], _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_42__["PermissionService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_43__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_44__["ConfigService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"], _core_core_module__WEBPACK_IMPORTED_MODULE_45__["ɵ0"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_46__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_46__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["QumlLibraryService"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["QumlLibraryService"], [_project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ErrorService"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ErrorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["QuestionCursor"], null, [_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_49__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_50__["EditorCursor"], null, [_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_49__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_51__["ɵb"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_51__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["LocaleService"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["LocaleService"], [ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["LOCALE_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_53__["DATA_SERVICE"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_53__["DataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_USER_SERVICE", _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_31__["csUserServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_32__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiTransitionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiTransitionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDropdownModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiUtilityModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiUtilityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiLocalizationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiLocalizationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSelectModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDimmerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDimmerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModalModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiCollapseModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiAccordionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPopupModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiProgressModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiRatingModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["NgxDatatableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["NgxDatatableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_54__["TelemetryModule"], _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_54__["TelemetryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_55__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_55__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_55__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_56__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_56__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_57__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_57__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_57__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_57__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_55__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_58__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_58__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_59__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_60__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_60__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_61__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_61__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_62__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_62__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_63__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_63__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_64__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_65__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_65__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_66__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_66__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_67__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_67__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_67__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_67__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_71__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_71__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_73__["MaterialModule"], _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_73__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_74__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_74__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_36__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_75__["WebExtensionModule"], _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_75__["WebExtensionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["AvatarModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_28__["AvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CardModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ModalModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["LayoutModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["LibraryFiltersModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["LibraryFiltersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["AccordionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PipesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ContentDetailsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ContentDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["FaqModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["FaqModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PagesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CertificateActionsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CertificateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PillsGridModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["PillsGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ListViewModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["ListViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CommonConsumptionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_76__["CommonConsumptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_77__["ɵe"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_77__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_78__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_78__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_30__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_30__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_77__["CommonFormElementsModule"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_77__["CommonFormElementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_79__["LocationModule"], _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_79__["LocationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiMessageModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPaginationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiCheckboxModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDatepickerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSearchModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSidebarModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiTabsModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_15__["SuiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, sb_notification__WEBPACK_IMPORTED_MODULE_80__["SbNotificationModule"], sb_notification__WEBPACK_IMPORTED_MODULE_80__["SbNotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _notification_notification_module__WEBPACK_IMPORTED_MODULE_81__["NotificationModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_81__["NotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_45__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_45__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick__WEBPACK_IMPORTED_MODULE_82__["SlickModule"], ngx_slick__WEBPACK_IMPORTED_MODULE_82__["SlickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_83__["SunbirdPdfPlayerModule"], _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_83__["SunbirdPdfPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_46__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_46__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_48__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["QumlLibraryModule"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_47__["QumlLibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_84__["SunbirdVideoPlayerModule"], _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_84__["SunbirdVideoPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_85__["SunbirdEpubPlayerModule"], _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_85__["SunbirdEpubPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_86__["PlayerHelperModule"], _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_86__["PlayerHelperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_87__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_87__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_88__["DataTablesModule"], angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_88__["DataTablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_51__["NgMultiSelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_51__["NgMultiSelectDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["NgxDaterangepickerMd"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["NgxDaterangepickerMd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_53__["DashletModule"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_53__["DashletModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_31__["SharedFeatureModule"], _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_31__["SharedFeatureModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _report_routing_module__WEBPACK_IMPORTED_MODULE_89__["ReportRoutingModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_89__["ReportRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_88__["DataTablesModule"], angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_88__["DataTablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_90__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_90__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_91__["SlReportsLibraryModule"], _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_91__["SlReportsLibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _report_module__WEBPACK_IMPORTED_MODULE_1__["ReportModule"], _report_module__WEBPACK_IMPORTED_MODULE_1__["ReportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_62__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_92__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_52__["LOCALE_CONFIG"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_36__["ROUTES"], function () { return [[{ path: "solution-listing", component: _components_solution_listing_solution_listing_component__WEBPACK_IMPORTED_MODULE_93__["SolutionListingComponent"], data: _report_routing_module__WEBPACK_IMPORTED_MODULE_89__["ɵ0"] }, { path: "report-view", component: _components_report_view_report_view_component__WEBPACK_IMPORTED_MODULE_94__["ReportViewComponent"], data: _report_routing_module__WEBPACK_IMPORTED_MODULE_89__["ɵ1"] }]]; }, [])]); });



/***/ }),

/***/ "1/7i":
/*!****************************************************!*\
  !*** ./src/app/modules/report/components/index.ts ***!
  \****************************************************/
/*! exports provided: SolutionListingComponent, EntityListComponent, ReportViewComponent, AllEvidenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solution_listing_solution_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solution-listing/solution-listing.component */ "dX3e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SolutionListingComponent", function() { return _solution_listing_solution_listing_component__WEBPACK_IMPORTED_MODULE_0__["SolutionListingComponent"]; });

/* harmony import */ var _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-list/entity-list.component */ "5GII");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_1__["EntityListComponent"]; });

/* harmony import */ var _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-view/report-view.component */ "qPKA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportViewComponent", function() { return _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_2__["ReportViewComponent"]; });

/* harmony import */ var _all_evidence_all_evidence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-evidence/all-evidence.component */ "bsE+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllEvidenceComponent", function() { return _all_evidence_all_evidence_component__WEBPACK_IMPORTED_MODULE_3__["AllEvidenceComponent"]; });







/***/ }),

/***/ "5GII":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/entity-list/entity-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: EntityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return EntityListComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");



var EntityListComponent = (function () {
    function EntityListComponent(resourceService, location) {
        var _this = this;
        this.resourceService = resourceService;
        this.location = location;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showLoaderBox = false;
        this.throttle = 50;
        this.scrollDistance = 2;
        this.selectedListCount = 0;
        this.location.onPopState(function () {
            _this.modal.deny();
        });
    }
    EntityListComponent.prototype.ngOnInit = function () { };
    EntityListComponent.prototype.closeModal = function () {
        this.closeEvent.emit({ value: null });
    };
    EntityListComponent.prototype.onEntityChange = function (entity) {
        var _this = this;
        this.selectedEntity = {};
        this.solution.entities.forEach(function (item) {
            if (item._id !== entity._id) {
                item.selected = false;
            }
            else {
                item.selected = true;
                _this.selectedEntity = entity;
            }
        });
        this.selectedListCount = 1;
    };
    EntityListComponent.prototype.submit = function () {
        var data = {
            solutionDetail: this.solution,
            selectedEntity: this.selectedEntity
        };
        this.closeEvent.emit({ value: data });
    };
    return EntityListComponent;
}());



/***/ }),

/***/ "8TE5":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/solution-listing/solution-listing.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  padding: 0 1%;\n}\n.sbgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));\n  grid-gap: 1rem;\n}\n@media screen and (max-width: 1024px) {\n  .sb__DesktopOnly[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .ui.tabular.menu.report-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]  .listallreports-section .dataTables_wrapper .dataTables_filter input {\n  outline: 0;\n}\n.table-bottom[_ngcontent-%COMP%] {\n  border: 0.0625rem solid var(--gray-100);\n}\n.pull-right[_ngcontent-%COMP%] {\n  float: right !important;\n  width: 120px;\n}\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 0.8125rem;\n  font-weight: bold;\n  margin-top: 7px;\n}\nselect.search-entity[_ngcontent-%COMP%] {\n  width: 120px;\n  border: 1px solid #aaa;\n  color: #333;\n  border-radius: 3px;\n  padding: 4px;\n  font-size: 0.8125rem;\n  margin-bottom: 5px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\nselect[_ngcontent-%COMP%]   .select-entries[_ngcontent-%COMP%] {\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  background-color: transparent;\n  padding: 4px;\n  font-size: 0.8125rem;\n}\n.header-section[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: center;\n}\n.date-section[_ngcontent-%COMP%] {\n  width: 180px;\n  text-align: center;\n}\nlabel[_ngcontent-%COMP%] {\n  float: left;\n}\n.iconSize[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy9zb2x1dGlvbi1saXN0aW5nL3NvbHV0aW9uLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUN6QkY7QURxR0EsVUFBQTtBQ3BUQTtFQUNFLGFBQUE7QUFtTkY7QUFoTkE7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxjQUFBO0FBbU5GO0FBaE5BO0VBQ0U7SUFDRSxhQUFBO0VBbU5GO0FBQ0Y7QUEvTUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBaU5KO0FBM01JO0VBQ0UsVUFBQTtBQThNTjtBQXhNQTtFQUNFLHVDQUFBO0FBMk1GO0FBeE1BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBMk1GO0FBeE1BO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBMk1GO0FBeE1BO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBMk1GO0FBeE1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBMk1GO0FBeE1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBMk1GO0FBeE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBMk1GO0FBeE1BO0VBQ0UsV0FBQTtBQTJNRjtBQXhNQTtFQUNFLGVBQUE7QUEyTUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9jb21wb25lbnRzL3NvbHV0aW9uLWxpc3Rpbmcvc29sdXRpb24tbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nOjAgMSU7XG59XG5cbi5zYmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOTJweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNiX19EZXNrdG9wT25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIC51aS50YWJ1bGFyLm1lbnUucmVwb3J0LW1lbnUgLml0ZW0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG46aG9zdDo6bmctZGVlcCB7XG4gIC5saXN0YWxscmVwb3J0cy1zZWN0aW9uIHtcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi50YWJsZS1ib3R0b20ge1xuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OmxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDo3cHhcbn1cblxuc2VsZWN0LnNlYXJjaC1lbnRpdHkge1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5zZWxlY3QgLnNlbGVjdC1lbnRyaWVze1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0ZS1zZWN0aW9uIHtcbiAgd2lkdGg6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pY29uU2l6ZXtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"];



/***/ }),

/***/ "AtBH":
/*!*************************************************************!*\
  !*** ./node_modules/chartjs-plugin-stacked100/src/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Chart) {
  var isObject = function isObject(obj) {
    var type = typeof obj;
    return type === 'object' && !!obj;
  };

  var dataValue = function dataValue(dataPoint, isHorizontal) {
    if (isObject(dataPoint)) {
      return isHorizontal ? dataPoint.x : dataPoint.y;
    }

    return dataPoint;
  };

  var cloneArray = function cloneArray(srcAry) {
    var dstAry = [];
    var length = srcAry.length;

    for (var i = 0; i < length; i++) {
      dstAry.push(srcAry[i]);
    }

    return dstAry;
  };

  var setOriginalData = function setOriginalData(data) {
    data.originalData = data.datasets.map(function (dataset) {
      return cloneArray(dataset.data);
    });
  }; // set calculated rate (xx%) to data.calculatedData


  var calculateRate = function calculateRate(data, isHorizontal, precision) {
    var visibles = data.datasets.map(function (dataset) {
      if (!dataset._meta) return true;

      for (var i in dataset._meta) {
        return !dataset._meta[i].hidden;
      }
    });
    var datasetDataLength = 0;

    if (data && data.datasets && data.datasets[0] && data.datasets[0].data) {
      datasetDataLength = data.datasets[0].data.length;
    }

    var totals = Array.apply(null, new Array(datasetDataLength)).map(function (el, i) {
      return data.datasets.reduce(function (sum, dataset, j) {
        var key = dataset.stack;
        if (!sum[key]) sum[key] = 0;
        sum[key] += Math.abs(dataValue(dataset.data[i], isHorizontal)) * visibles[j];
        return sum;
      }, {});
    });
    data.calculatedData = data.datasets.map(function (dataset, i) {
      return dataset.data.map(function (val, i) {
        var total = totals[i][dataset.stack];
        var dv = dataValue(val, isHorizontal);
        return dv && total ? round(dv / total, precision) : 0;
      });
    });
  };

  var getPrecision = function getPrecision(pluginOptions) {
    // return the (validated) configured precision from pluginOptions or default 1
    var defaultPrecision = 1;
    if (!pluginOptions.hasOwnProperty("precision")) return defaultPrecision;
    if (!pluginOptions.precision) return defaultPrecision;
    var optionsPrecision = Math.floor(pluginOptions.precision);
    if (isNaN(optionsPrecision)) return defaultPrecision;
    if (optionsPrecision < 0 || optionsPrecision > 16) return defaultPrecision;
    return optionsPrecision;
  };

  var round = function round(value, precision) {
    var multiplicator = Math.pow(10, precision);
    return Math.round(value * 100 * multiplicator) / multiplicator;
  };

  var tooltipLabel = function tooltipLabel(isHorizontal) {
    return function (tooltipItem, data) {
      var datasetIndex = tooltipItem.datasetIndex;
      var index = tooltipItem.index;
      var datasetLabel = data.datasets[datasetIndex].label || "";
      var originalValue = data.originalData[datasetIndex][index];
      var rateValue = data.calculatedData[datasetIndex][index];
      return "" + datasetLabel + ": " + rateValue + "% (" + dataValue(originalValue, isHorizontal) + ")";
    };
  };

  var reflectData = function reflectData(srcData, datasets) {
    if (!srcData) return;
    srcData.forEach(function (data, i) {
      datasets[i].data = data;
    });
  };

  var isHorizontalChart = function isHorizontalChart(chartInstance) {
    return chartInstance.config.type === "horizontalBar";
  };

  var Stacked100Plugin = {
    id: "stacked100",
    beforeInit: function beforeInit(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;
      var xAxes = chartInstance.options.scales.xAxes;
      var yAxes = chartInstance.options.scales.yAxes;
      var isVertical = chartInstance.config.type === "bar" || chartInstance.config.type === "line";
      [xAxes, yAxes].forEach(function (axes) {
        axes.forEach(function (hash) {
          hash.stacked = true;
        });
      });
      (isVertical ? yAxes : xAxes).forEach(function (hash) {
        if (!hash.ticks.min) {
          var hasNegative = chartInstance.data.datasets.some(function (dataset) {
            return dataset.data.some(function (value) {
              return value < 0;
            });
          });
          hash.ticks.min = hasNegative ? -100 : 0;
        }

        if (!hash.ticks.max) hash.ticks.max = 100;
      }); // Replace tooltips

      if (pluginOptions.hasOwnProperty("replaceTooltipLabel") && !pluginOptions.replaceTooltipLabel) return;
      chartInstance.options.tooltips.callbacks.label = tooltipLabel(isHorizontalChart(chartInstance));
    },
    beforeDatasetsUpdate: function beforeDatasetsUpdate(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;
      setOriginalData(chartInstance.data);
      var precision = getPrecision(pluginOptions);
      calculateRate(chartInstance.data, isHorizontalChart(chartInstance), precision);
      reflectData(chartInstance.data.calculatedData, chartInstance.data.datasets);
    },
    afterDatasetsUpdate: function afterDatasetsUpdate(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;
      reflectData(chartInstance.data.originalData, chartInstance.data.datasets);
    }
  };
  Chart.pluginService.register(Stacked100Plugin);
}).call(this, Chart);

/***/ }),

/***/ "BMcZ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-view/report-view.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_ReportViewComponent, View_ReportViewComponent_0, View_ReportViewComponent_Host_0, ReportViewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReportViewComponent", function() { return RenderType_ReportViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportViewComponent_0", function() { return View_ReportViewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportViewComponent_Host_0", function() { return View_ReportViewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportViewComponentNgFactory", function() { return ReportViewComponentNgFactory; });
/* harmony import */ var _report_view_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-view.component.scss.shim.ngstyle */ "BmBK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/core/index.ngfactory */ "CeGm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/form-field/index.ngfactory */ "H3DK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/select/index.ngfactory */ "Y1Mv");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../node_modules/@shikshalokam/sl-reports-library/shikshalokam-sl-reports-library.ngfactory */ "exwH");
/* harmony import */ var _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shikshalokam/sl-reports-library */ "HX6c");
/* harmony import */ var _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/sb-dashlet-v9/project-sunbird-sb-dashlet-v9.ngfactory */ "4cR3");
/* harmony import */ var _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @project-sunbird/sb-dashlet-v9 */ "IJrI");
/* harmony import */ var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/tabs/index.ngfactory */ "Pwwu");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _all_evidence_all_evidence_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../all-evidence/all-evidence.component.ngfactory */ "ZpAJ");
/* harmony import */ var _all_evidence_all_evidence_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../all-evidence/all-evidence.component */ "bsE+");
/* harmony import */ var _core_services_dhiti_dhiti_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../core/services/dhiti/dhiti.service */ "VBLF");
/* harmony import */ var _report_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./report-view.component */ "qPKA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");








































var styles_ReportViewComponent = [_report_view_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ReportViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ReportViewComponent, data: {} });

function View_ReportViewComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "span", [["class", "ml-auto sb-last-update-status fnormal sb-color-gray-400 px-10 last-update"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "\u00A0: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" \u00A0 ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.lastSubmittedOn))); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _co.data.completedDate, "yyyy/MM/dd")); _ck(_v, 4, 0, currVal_1); }); }
function View_ReportViewComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "report-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.data; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), ((_co.data == null) ? null : _co.data.solutionName))); _ck(_v, 2, 0, currVal_0); }); }
function View_ReportViewComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-dropdown__options mat-option mat-focus-indicator"], ["role", "option"]], [[1, "aria-label", 0], [1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[12, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTGROUP"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_9 = _v.context.$implicit; _ck(_v, 1, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_10); }); }
function View_ReportViewComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "sb-field filter-drop mb-0 mr-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 23, "mat-form-field", [["appearance", "fill"], ["class", "sb-mat__dropdown w-100 mb-16 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _suffixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, [[5, 4], [6, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Submission"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 1, 8, "mat-select", [["aria-autocomplete", "none"], ["aria-haspopup", "true"], ["aria-label", "Select Submission"], ["class", "selection mat-select"], ["role", "combobox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-label", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "mat-select-multiple", null]], [[null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("selectionChange" === en)) {
        var pd_3 = (_co.handleParameterChange($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MAT_SELECT_CONFIG"]]], { ariaLabel: [0, "ariaLabel"] }, { selectionChange: "selectionChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[3, 4], [4, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_ReportViewComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_22 = "fill"; _ck(_v, 3, 0, currVal_22); var currVal_38 = "Select Submission"; _ck(_v, 19, 0, currVal_38); var currVal_39 = _v.parent.context.$implicit.filter.data; _ck(_v, 25, 0, currVal_39); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).appearance == "standard"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).appearance == "fill"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).appearance == "outline"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).appearance == "legacy"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._control.errorState; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._canLabelFloat(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldLabelFloat(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._hasFloatingLabel(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._hideControlPlaceholder(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._control.disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._control.autofilled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._control.focused; var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color == "accent"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color == "warn"); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("untouched"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("touched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("pristine"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("dirty"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("valid"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("invalid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._shouldForward("pending"); var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationsEnabled; _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).id; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).tabIndex; var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).panelOpen ? (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).id + "-panel") : null); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).panelOpen; var currVal_27 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ariaLabel || null); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required.toString(); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled.toString(); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).errorState; var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._getAriaActiveDescendant(); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).errorState; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).empty; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).multiple; _ck(_v, 17, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37]); }); }
function View_ReportViewComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.filter.type == "dropdown"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary filter-btn "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.btn.exportAs); _ck(_v, 1, 0, currVal_0); }); }
function View_ReportViewComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform(_v.parent.context.$implicit.header)); _ck(_v, 1, 0, currVal_0); }); }
function View_ReportViewComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary filter-btn "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.filterModalPopup(_v.parent.context.$implicit.filter.data, _v.parent.context.$implicit.filter.keyToSend) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.filters))); _ck(_v, 1, 0, currVal_0); }); }
function View_ReportViewComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.filter.type == "modal"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "ui bottom p-0 b-0 no-bg graph-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "double-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "column-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "dropdown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary filter-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "dropdown-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary filter-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.download() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pdf "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "column-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.filters; _ck(_v, 11, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.btn.exportAs); _ck(_v, 5, 0, currVal_0); }); }
function View_ReportViewComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.criteriaName; _ck(_v, 1, 0, currVal_0); }); }
function View_ReportViewComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "sb-dashlet", [["class", "chart-container"]], null, null, null, _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_DashletComponent_0"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_DashletComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, [[1, 4], ["lib", 4]], 1, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_19__["DashletComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { type: [0, "type"], config: [1, "config"], data: [2, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = "pie"; var currVal_3 = _co.getconfig(_v.parent.context.$implicit); var currVal_4 = _co.getData(_v.parent.context.$implicit); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "sb-dashlet", [["class", "chart-container"]], null, null, null, _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_DashletComponent_0"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_DashletComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, [[1, 4], ["lib", 4]], 1, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_19__["DashletComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { type: [0, "type"], config: [1, "config"], data: [2, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = "pie"; var currVal_3 = _co.getconfig(_v.parent.context.$implicit); var currVal_4 = _co.getData(_v.parent.context.$implicit); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-percentage-column-charts", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_PercentageColumnChartsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_PercentageColumnChartsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["PercentageColumnChartsComponent"], [], { chartData: [0, "chartData"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-expansion-table", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ExpansionTableComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ExpansionTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ExpansionTableComponent"], [], { datas: [0, "datas"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ReportViewComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-expansion-panel", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ExpansionPanelComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ExpansionPanelComponent"], [], { datas: [0, "datas"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ReportViewComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ReportsTextComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ReportsTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "sb-dashlet", [["class", "chart-container"]], null, null, null, _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_DashletComponent_0"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_DashletComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, [[1, 4], ["lib", 4]], 1, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_19__["DashletComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { type: [0, "type"], config: [1, "config"], data: [2, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = "pie"; var currVal_3 = _co.getconfig(_v.parent.context.$implicit); var currVal_4 = _co.getData(_v.parent.context.$implicit); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "sb-dashlet", [["class", "chart-container"]], null, null, null, _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_DashletComponent_0"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_DashletComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, [[1, 4], ["lib", 4]], 1, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_19__["DashletComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { type: [0, "type"], config: [1, "config"], data: [2, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = "pie"; var currVal_3 = _co.getconfig(_v.parent.context.$implicit); var currVal_4 = _co.getData(_v.parent.context.$implicit); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "sl-bar-chart", [["class", "bar-chart-container"]], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_BarChartComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_41(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = _v.context.$implicit.extension; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_42(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary filter-btn filter-modal-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllEvidence(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" View More "]))], null, null); }
function View_ReportViewComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["bottom", ""], ["graph-section", ""], ["ui", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "sb-graph-section p-24 my-24"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "div", [["class", "card-align"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.responseType); _ck(_v, 2, 0, currVal_0); var currVal_1 = "text"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "number"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "date"; _ck(_v, 8, 0, currVal_3); var currVal_4 = "radio"; _ck(_v, 12, 0, currVal_4); var currVal_5 = "pie"; _ck(_v, 14, 0, currVal_5); var currVal_6 = "column"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "bar"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "multiselect"; _ck(_v, 20, 0, currVal_8); var currVal_9 = _v.context.$implicit.evidences; _ck(_v, 23, 0, currVal_9); var currVal_10 = (_v.context.$implicit.evidence_count > 3); _ck(_v, 25, 0, currVal_10); }, null); }
function View_ReportViewComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.instanceQuestions); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.index + 1); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_43(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_17__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = _v.context.$implicit.extension; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ReportViewComponent_44(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary filter-btn filter-modal-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllEvidence(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" View More "]))], null, null); }
function View_ReportViewComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 32, "div", [["class", "sb-graph-section p-24 my-24"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "div", [["class", "card-align"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.responseType); _ck(_v, 2, 0, currVal_0); var currVal_1 = "text"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "number"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "date"; _ck(_v, 8, 0, currVal_3); var currVal_4 = "radio"; _ck(_v, 12, 0, currVal_4); var currVal_5 = "pie"; _ck(_v, 14, 0, currVal_5); var currVal_6 = "column"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "bar"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "multiselect"; _ck(_v, 20, 0, currVal_8); var currVal_9 = "horizontalBar"; _ck(_v, 22, 0, currVal_9); var currVal_10 = "expansion-table"; _ck(_v, 24, 0, currVal_10); var currVal_11 = "expansion"; _ck(_v, 26, 0, currVal_11); var currVal_12 = "matrix"; _ck(_v, 28, 0, currVal_12); var currVal_13 = _v.context.$implicit.evidences; _ck(_v, 31, 0, currVal_13); var currVal_14 = (_v.context.$implicit.evidence_count > 3); _ck(_v, 33, 0, currVal_14); }, null); }
function View_ReportViewComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "sb-graph-section p-24 my-24": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit.criteriaName); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.criteriaName); _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.questionArray); _ck(_v, 7, 0, currVal_2); }, null); }
function View_ReportViewComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 12, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, [[15, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MAT_TAB_GROUP"]]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { _explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "tabHeader": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_ReportViewComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["ɵangular_material_src_material_tabs_tabs_b"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabLabel"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ReportViewComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "div", [["class", "ui bottom p-0 b-0 no-bg my-24 graph-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, ((_v.context.$implicit == null) ? null : _v.context.$implicit.header)); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.segmentfilter; _ck(_v, 9, 0, currVal_1); var currVal_2 = _co.reportSections; _ck(_v, 12, 0, currVal_2); }, null); }
function View_ReportViewComponent_45(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_23__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "my-16"], ["id", "report-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "mat-tab-group", [["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], [[null, "selectedTabChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedTabChange" === en)) {
        var pd_0 = (_co.selectedTabChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, { selectedTabChange: "selectedTabChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { _allTabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tabs; _ck(_v, 8, 0, currVal_2); var currVal_3 = !_co.reportSections; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dynamicHeight; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).headerPosition === "below"); _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_ReportViewComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "sb-sideview-tab-container pb-48 p-0 w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "report__header"], ["id", "report-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 24, "div", [["class", "cc-player__content-header relative9 reports-content-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 23, "div", [["class", "ui container py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 20, "div", [["class", "content-header__content p-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "content-header__title font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "d-flex flex-dc flex-basis-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "span", [["class", "relative position relative9 reports-back-btn my-0 pl-0 pr-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "span", [["class", "ui py-8 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["aria-label", "back-button"], ["class", "sb-btn sb-btn-link sb-btn-link-primary sb-left-icon-btn back-btn-new mb-5"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoSolutionListPage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "div", [["class", "dropdown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "div", [["class", "dropdown-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary filter-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.download() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pdf "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [["class", "m-0 report-description py-15 pl-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; _ck(_v, 16, 0, currVal_0); var currVal_1 = _co.filters; _ck(_v, 18, 0, currVal_1); var currVal_2 = !_co.segmentfilter; _ck(_v, 21, 0, currVal_2); var currVal_4 = _co.data; _ck(_v, 28, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.data.entityName; _ck(_v, 26, 0, currVal_3); }); }
function View_ReportViewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "ui report-main-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "twelve wide column px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "stackable grid m-0 sb-mid-container-min-height dashboard-body-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showComponent; _ck(_v, 5, 0, currVal_0); }, null); }
function View_ReportViewComponent_46(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_23__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_47(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_26__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_27__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_28__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ReportViewComponent_50(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "sb-checkbox sb-checkbox-secondary pt-24 ui checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "value", 0], [8, "id", 0], [8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onQuestionClick(_v.context.$implicit._id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "questions"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_2 = ((_co.filteredData == null) ? null : _co.filteredData.includes(((_v.context.$implicit == null) ? null : _v.context.$implicit._id))); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_4); }); }
function View_ReportViewComponent_49(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "sb-mat__modal sb-onboard modalDimention"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "flex-jc-center mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "sb-onboard__header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_50)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "mat-dialog-actions", [["class", "mb-0 sb-mat__modal__actions flex-jc-center mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "div", [["class", "sb-onboard__footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary text-uppercase"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyFilter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](18, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " ", " "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_4 = "close dialog"; var currVal_5 = ""; _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_6 = _co.modalFilterData; _ck(_v, 12, 0, currVal_6); var currVal_8 = "sb-btn sb-btn-normal sb-btn-primary text-uppercase"; var currVal_9 = _ck(_v, 18, 0, (_co.selectedListCount == 0)); _ck(_v, 17, 0, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.segmentValue == "Questions") ? ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectquestionfilter))) : ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectcriteriafilter)))); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ariaLabel || null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).type; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_7 = (_co.selectedListCount == 0); _ck(_v, 16, 0, currVal_7); var currVal_10 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.apply))); var currVal_11 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.filters))); _ck(_v, 19, 0, currVal_10, currVal_11); }); }
function View_ReportViewComponent_48(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[2, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ReportViewComponent_49)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[22, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_31__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "normal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ReportViewComponent_51(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-all-evidence", [], null, [[null, "closeEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("closeEvent" === en)) {
        var pd_0 = (_co.modalClose($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _all_evidence_all_evidence_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_AllEvidenceComponent_0"], _all_evidence_all_evidence_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_AllEvidenceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _all_evidence_all_evidence_component__WEBPACK_IMPORTED_MODULE_34__["AllEvidenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_28__["ConfigService"], _core_services_dhiti_dhiti_service__WEBPACK_IMPORTED_MODULE_35__["DhitiService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { data: [0, "data"] }, { closeEvent: "closeEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.evidenceParam; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ReportViewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { lib: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_46)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_47)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_48)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ReportViewComponent_51)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.layoutConfiguration ? "sbt-inside-page-container" : "pt-16"); _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.data; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.noResult; _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.showLoader; _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.filterModal; _ck(_v, 13, 0, currVal_4); var currVal_5 = _co.showEvidence; _ck(_v, 15, 0, currVal_5); }, null); }
function View_ReportViewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-report-view", [], null, null, null, View_ReportViewComponent_0, RenderType_ReportViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8503296, null, 0, _report_view_component__WEBPACK_IMPORTED_MODULE_36__["ReportViewComponent"], [_core_services_dhiti_dhiti_service__WEBPACK_IMPORTED_MODULE_35__["DhitiService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_28__["ConfigService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_27__["LayoutService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_24__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_38__["ToasterService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_39__["NavigationHelperService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReportViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-report-view", _report_view_component__WEBPACK_IMPORTED_MODULE_36__["ReportViewComponent"], View_ReportViewComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "BmBK":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-view/report-view.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-graph-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 15px !important;\n  border: 0.0625rem solid var(--rc-dddddd);\n  padding: 1.5rem;\n  margin-top: 1.5rem;\n  background-color: var(--sb-card-bg);\n  color: var(--sb-text);\n  box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);\n  border-radius: 0.25rem;\n}\n.sb-graph-section[_ngcontent-%COMP%]   .sb-table-fixed[_ngcontent-%COMP%]   .sb-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sb-graph-section[_ngcontent-%COMP%]   .sb-table-fixed[_ngcontent-%COMP%]   .sb-table-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-overflow: initial;\n  overflow: initial;\n  white-space: unset;\n}\n.graph-section[_ngcontent-%COMP%] {\n  background-color: var(--sb-card-bg);\n  color: var(--sb-text);\n}\n.sb-btn-normal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\uF019\";\n  font-size: 0.8125rem;\n  color: var(--white);\n}\n.no-bg[_ngcontent-%COMP%] {\n  background: none;\n}\n.dashboard-body-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.hawkeye-label[_ngcontent-%COMP%] {\n  line-height: normal;\n  border-radius: 2rem;\n  vertical-align: middle;\n}\n.sb-btn-normal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\" !important;\n  font-size: 0.8125rem;\n  color: var(--white);\n}\n.sb-sideview-tab-container[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.content-header[_ngcontent-%COMP%] {\n  min-height: 0.875rem;\n}\n.content-header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .content-header__content[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.content-header__title[_ngcontent-%COMP%] {\n  color: var(--primary-400);\n  font-size: 1.125rem;\n}\n.content-header__info[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  font-size: 0.875rem;\n}\n.content-header[_ngcontent-%COMP%]   .dot-divider[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  border-radius: 100%;\n  background-color: var(--gray-800);\n  display: inline-block;\n  margin: 0px 0.5rem;\n}\n@media (max-width: 767px) {\n  .content-header__buttons[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n  .sb-field .ui.selection.dropdown {\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n  .sb-hawkeye-modal.sb-modal .ui.modal {\n  margin: 0 auto 0 !important;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.sbt-report-btns-panel[_ngcontent-%COMP%] {\n  margin-top: 0.0625rem;\n  background-color: #e9e8d9 !important;\n  border-radius: 0px !important;\n}\n.content-header__content[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  align-items: flex-start !important;\n}\n@media (max-width: 767px) {\n  .report-panel[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n}\n.report-description[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 4rem !important;\n  text-align: justify;\n  font-size: 18px;\n}\n@media (max-width: 767px) {\n  .report-description[_ngcontent-%COMP%] {\n    flex: auto;\n    margin: 0 0 1rem 0 !important;\n  }\n}\n.sbt-report-tabs-panel[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding-bottom: 0.125rem;\n}\n.sb-graph-section.global-filter[_ngcontent-%COMP%] {\n  background-color: var(--sbt-compt-bg) !important;\n}\n.global-filter[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  position: initial;\n}\n.global-filter[_ngcontent-%COMP%]     .form .sb-prominent-filter {\n  background: #e9e8d9 !important;\n}\n.graph-section[_ngcontent-%COMP%] {\n  background-color: var(--sbt-compt-bg) !important;\n  border-radius: 0px 0px 0px 0px !important;\n  margin-top: 0px !important;\n  padding-top: 5px !important;\n}\n.ui.selection.dropdown[_ngcontent-%COMP%] {\n  color: var(--ui-dropdown-selection-icon) !important;\n}\n.report-block[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #e9e8d9 !important;\n  margin-top: 0px !important;\n  border-radius: 0px 0px 24px 24px !important;\n}\n.select-filter-label[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-family: \"Noto Sans\";\n  font-size: 17px;\n}\n.sb-select-searchfilter[_ngcontent-%COMP%] {\n  min-height: 40px !important;\n  padding: 0.75rem 0.5rem !important;\n  position: inside;\n  widows: 311px !important;\n  border-radius: 24px !important;\n  border: 1px #d7d7d7 solid !important;\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #333333;\n  opacity: 0.3;\n  font-family: \"Noto Sans\";\n  font-weight: 600;\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%] {\n  color: #024f9d !important;\n  opacity: 1 !important;\n  border-bottom-width: 4px !important;\n  border-color: #024f9d !important;\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%] {\n  height: 72px !important;\n}\n.sbt-report-btns-panel-new[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  background: var(--white) !important;\n}\n.sb-field[_ngcontent-%COMP%]     .ui.selection.dropdown {\n  color: #333 !important;\n  font-size: 15px !important;\n  min-height: 40px !important;\n  border-radius: 24px !important;\n  border: 1px #d7d7d7 solid !important;\n  background-color: #fff;\n}\n.label-success[_ngcontent-%COMP%] {\n  color: green;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.sb-label-primary-100[_ngcontent-%COMP%] {\n  background: none !important;\n  font-size: 14px !important;\n}\n.label-warning[_ngcontent-%COMP%] {\n  color: brown;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.back-btn-new[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  height: 55px !important;\n  width: 57px !important;\n  border-radius: 50% !important;\n  min-width: auto !important;\n  background: #fff;\n  box-shadow: var(--sbt-box-shadow-6px) !important;\n}\n.report-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--sb-prominent-filter-title);\n  font-family: \"Noto Sans\";\n  line-height: 24px;\n  font-weight: 500;\n}\n.icon-back[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 48px;\n}\n.icon-back[_ngcontent-%COMP%]   .icon-svg--primary[_ngcontent-%COMP%] {\n  fill: #333;\n}\n.icon-back[_ngcontent-%COMP%]     svg.icon {\n  height: 20px;\n}\n.reports-content-header[_ngcontent-%COMP%] {\n  border-radius: 24px !important;\n  background: #e9e8d9 !important;\n}\n.cc-player__btn-back[_ngcontent-%COMP%] {\n  background: #e9e8d9 !important;\n}\n.ui.dropdown.selection[_ngcontent-%COMP%]     .dropdown.icon {\n  color: #024f9d !important;\n}\n.sb-label-value[_ngcontent-%COMP%] {\n  background: #ddd;\n  border-radius: 16px;\n  padding: 6px;\n  box-shadow: var(--sbt-box-shadow-6px);\n  margin-right: 10px;\n}\n.table-view[_ngcontent-%COMP%] {\n  background: #e9e8d9 !important;\n}\n.sb-btn-tertiary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #024f9d;\n  font-weight: 600;\n}\n.sb-btn-normal[_ngcontent-%COMP%] {\n  min-width: 96px !important;\n  font-weight: 500 !important;\n  font-size: 15px !important;\n  padding-left: 18px !important;\n  padding-right: 18px !important;\n}\n.active-btn[_ngcontent-%COMP%] {\n  padding-left: 19px !important;\n  min-width: 113px !important;\n  background-color: #024f9d !important;\n  box-shadow: var(--sbt-box-shadow-6px) !important;\n}\n.active-btn[_ngcontent-%COMP%]     .default .text {\n  color: #fff !important;\n}\n.active-btn[_ngcontent-%COMP%]     {\n  color: #fff !important;\n  font-weight: 500;\n}\n.reset-filter-section[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n}\n.reset-filter[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n.last-update[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #333 !important;\n  font-weight: 500;\n  border-left: 1px solid #ccc;\n  margin-left: 10px !important;\n}\n.sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%]     .text {\n  color: #fff !important;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.filter-drop[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%]     .text {\n  color: #333 !important;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.sb-label-value[_ngcontent-%COMP%] {\n  background-color: #f2f2ea !important;\n}\n.files-block[_ngcontent-%COMP%] {\n  background: #e9e8d9 !important;\n  margin: 0px !important;\n  border-radius: 0px 0px 24px 24px !important;\n  box-shadow: none;\n  border-top: 1px solid #ccc;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding: 0 1%;\n}\n.report-main-block[_ngcontent-%COMP%] {\n  padding: 0 0;\n}\n.chart-container[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 400px;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.bar-chart-container[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 900px;\n  max-height: 450px;\n  margin: 0 auto;\n}\n.thumbnail-card[_ngcontent-%COMP%] {\n  height: 98px;\n  margin-top: 5px;\n  display: inline;\n  justify-content: space-around;\n  align-items: center;\n}\n.card-align[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.filter-modal-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.sb-filter__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  min-height: 400px;\n  background-color: #e9e8d9 !important;\n  padding: 1.5rem;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .sb-filter__container[_ngcontent-%COMP%] {\n    border-radius: 0.5rem;\n    max-width: 63rem;\n    height: auto;\n  }\n}\n.sb-filter__header[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  max-width: 20.5rem;\n}\n.sb-filter__content[_ngcontent-%COMP%] {\n  width: 40.5rem;\n  max-width: 100%;\n  margin-bottom: auto;\n}\n.sb-filter__footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .sb-filter__footer[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n@media (max-width: 767px) {\n    .sb-filter-modal .ui.modal {\n    width: 95%;\n    margin: 0 0 0 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n  }\n    .sb-filter-modal .ui.modal.scroll {\n    position: fixed !important;\n    margin-top: o !important;\n    margin-bottom: 0px !important;\n    top: 0;\n    width: 100%;\n    left: 0px;\n    right: 0px;\n    margin: 0 !important;\n  }\n}\n.sb-filter__content[_ngcontent-%COMP%]     .sb-prominent-filter-field {\n  width: 50%;\n}\n.filter-modal[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 12px;\n}\n.add-entity-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 60vh;\n}\n.add-entity-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--sb-prominent-filter-title);\n}\n.add-entity-modal[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--sb-card-bg);\n  border-top: none;\n  display: flex;\n  justify-content: flex-end;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  background: var(--sb-card-bg);\n  border: #ccc;\n}\n.questions[_ngcontent-%COMP%] {\n  color: var(--sb-prominent-filter-title);\n  font-weight: 500;\n}\n.ui.checkbox[_ngcontent-%COMP%]   input.hidden[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  font-weight: 500;\n}\n.card-images[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-right: 5px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 100px;\n  z-index: 3;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.column-btn[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  float: right;\n  margin-right: 5px;\n}\n.double-btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.modalDimention[_ngcontent-%COMP%] {\n  min-width: 60vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy9yZXBvcnQtdmlldy9yZXBvcnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQVFBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUdBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBR0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBR0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFHQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFHQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtBRHhCRjtBQ29HQSxVQUFBO0FEcFRBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxtRUFBQTtFQUVBLHNCQUFBO0FBbU5GO0FBbE5FOztFQUVFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQW9OSjtBQWhOQTtFQUNFLG1DQUFBO0VBQ0EscUJBQUE7QUFtTkY7QUFoTkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQW1ORjtBQWpOQTtFQUNFLGdCQUFBO0FBb05GO0FBak5BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBb05GO0FBak5BO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBb05GO0FBak5BO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBb05GO0FBbE5BO0VBQ0UsbUJBQUE7QUFxTkY7QUFsTkE7RUFFRSxvQkFBQTtBQW9ORjtBQW5ORTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBcU5KO0FFM05JO0VGR0Y7SUFLSSxjQUFBO0VBdU5KO0FBQ0Y7QUFyTkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBdU5KO0FBcE5FO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQXNOSjtBQW5ORTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFxTko7QUVoUEk7RUYrQkE7SUFDRSxrQkFBQTtFQW9OSjtBQUNGO0FBL01FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWtOSjtBQS9NSTtFQUNFLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBaU5OO0FBN01BO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBZ05GO0FBOU1BO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFpTkY7QUU1UUk7RUY2REo7SUFFSSxhQUFBO0lBQ0Esc0JBQUE7RUFrTkY7QUFDRjtBQWhOQTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQW1ORjtBRTFSSTtFRm1FSjtJQU1JLFVBQUE7SUFDQSw2QkFBQTtFQXFORjtBQUNGO0FBbk5BO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBc05GO0FBcE5BO0VBQ0UsZ0RBQUE7QUF1TkY7QUFyTkE7RUFFRSxzQkFBQTtFQUNBLGlCQUFBO0FBdU5GO0FBak5NO0VBQ0UsOEJBQUE7QUFvTlI7QUEvTUE7RUFJRSxnREFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQStNRjtBQTVNQTtFQUNFLG1EQUFBO0FBK01GO0FBNU1BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtBQStNRjtBQTdNQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBZ05GO0FBOU1BO0VBQ0UsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBaU5GO0FBNU1BO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUErTUY7QUE3TUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtBQWdORjtBQTlNQTtFQUNFLHVCQUFBO0FBaU5GO0FBL01BO0VBQ0UsNkJBQUE7RUFDQSxtQ0FBQTtBQWtORjtBQS9NRTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWtOSjtBQTlNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaU5GO0FBL01BO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQWtORjtBQS9NQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBa05GO0FBaE5BO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUFtTkY7QUFqTkE7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFvTkY7QUFsTkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXFORjtBQW5OQTtFQUNFLFVBQUE7QUFzTkY7QUFsTkk7RUFDRSxZQUFBO0FBcU5OO0FBak5BO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtBQW9ORjtBQWpOQTtFQUNFLDhCQUFBO0FBb05GO0FBL01JO0VBQ0UseUJBQUE7QUFrTk47QUE5TUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFpTkY7QUEvTUE7RUFDRSw4QkFBQTtBQWtORjtBQS9NQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBa05GO0FBaE5BO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQW1ORjtBQWpOQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQ0FBQTtFQUNBLGdEQUFBO0FBbU5GO0FBak5JO0VBQ0Usc0JBQUE7QUFtTk47QUE3TUU7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBZ05KO0FBNU1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBK01GO0FBN01BO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQWdORjtBQTdNQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFnTkY7QUEzTUk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE4TU47QUF4TUk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUEyTU47QUF2TUE7RUFDRSxvQ0FBQTtBQTBNRjtBQXhNQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUEyTUY7QUF4TUE7RUFDRSxhQUFBO0FBMk1GO0FBek1BO0VBQ0UsWUFBQTtBQTRNRjtBQXpNQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTRNRjtBQXpNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTRNRjtBQXpNQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUE0TUY7QUF6TUE7RUFDRSxnQkFBQTtBQTRNRjtBQXZNQTtFQUNFLGdCQUFBO0FBME1GO0FBdE1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXlNSjtBRXpsQkk7RUZvWUY7SUFlSSxxQkFBQTtJQUNBLGdCQUFBO0lBRUEsWUFBQTtFQXlNSjtBQUNGO0FBdE1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF3TUo7QUFyTUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBdU1KO0FBcE1FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFzTUo7QUUvbUJJO0VGc2FGO0lBTUksY0FBQTtFQXVNSjtBQUNGO0FFemxCSTtFRnlaRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFvTU47RUFqTUk7SUFDRSwwQkFBQTtJQUNBLHdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUFtTU47QUFDRjtBQTVMSTtFQUNFLFVBQUE7QUErTE47QUExTEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUE2TEY7QUF4TEU7RUFDRSxnQkFBQTtBQTJMSjtBQTFMSTtFQUNFLHVDQUFBO0FBNExOO0FBekxFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUEyTEo7QUF2TEE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUEwTEY7QUF2TEE7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0FBMExGO0FBdkxBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FBMExGO0FBdkxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTBMRjtBQXRMQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUF5TEY7QUF0TEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXlMRjtBQXRMQTtFQUNFLGNBQUE7QUF5TEY7QUFyTEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXdMRjtBQXJMQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXdMRjtBQXJMQTtFQUNFLGVBQUE7QUF3TEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9jb21wb25lbnRzL3JlcG9ydC12aWV3L3JlcG9ydC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcblxuLnNiLWdyYXBoLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IGNhbGN1bGF0ZVJlbSgxcHgpIHNvbGlkIHZhcigtLXJjLWRkZGRkZCk7XG4gIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDI0cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYi1jYXJkLWJnKTtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQpO1xuICBib3gtc2hhZG93OiAwIGNhbGN1bGF0ZVJlbSgycHgpIGNhbGN1bGF0ZVJlbSg3cHgpIDBcbiAgICByZ2JhKHZhcigtLXJjLXJnYmEtYmxhY2spLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDRweCk7XG4gIC5zYi10YWJsZS1maXhlZCAuc2ItdGFibGUgdGJvZHkgdGQsXG4gIC5zYi10YWJsZS1maXhlZCAuc2ItdGFibGUtYm9keSB0ZCB7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIH1cbn1cblxuLmdyYXBoLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYi1jYXJkLWJnKTtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQpO1xufVxuXG4uc2ItYnRuLW5vcm1hbCBpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMDE5XCI7XG4gIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDEzcHgpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLm5vLWJnIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmRhc2hib2FyZC1ib2R5LXNjcm9sbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaGF3a2V5ZS1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGN1bGF0ZVJlbSgzMnB4KTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNiLWJ0bi1ub3JtYWwgaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnNiLXNpZGV2aWV3LXRhYi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1yYy1GQUZBRkEpO1xuICBtaW4taGVpZ2h0OiBjYWxjdWxhdGVSZW0oMTRweCk7XG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDE4cHgpO1xuICB9XG5cbiAgJl9faW5mbyB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxNHB4KTtcbiAgfVxuXG4gIC5kb3QtZGl2aWRlciB7XG4gICAgd2lkdGg6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDBweCAwLjVyZW07XG4gIH1cblxuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgJl9fYnV0dG9ucyB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnNiLWZpZWxkIC51aS5zZWxlY3Rpb24uZHJvcGRvd24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5zYi1oYXdrZXllLW1vZGFsLnNiLW1vZGFsIHtcbiAgICAudWkubW9kYWwge1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMCAhaW1wb3J0YW50O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICB9XG59XG4uc2J0LXJlcG9ydC1idG5zLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDFweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU4ZDkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1oZWFkZXJfX2NvbnRlbnQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cbi5yZXBvcnQtcGFuZWwge1xuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ucmVwb3J0LWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDRyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgZmxleDogYXV0bztcbiAgICBtYXJnaW46IDAgMCAxcmVtIDAgIWltcG9ydGFudDtcbiAgfVxufVxuLnNidC1yZXBvcnQtdGFicy1wYW5lbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsY3VsYXRlUmVtKDJweCk7XG59XG4uc2ItZ3JhcGgtc2VjdGlvbi5nbG9iYWwtZmlsdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2J0LWNvbXB0LWJnKSAhaW1wb3J0YW50O1xufVxuLmdsb2JhbC1maWx0ZXIge1xuICAvLyBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oMjRweCk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGN1bGF0ZVJlbSg0cHgpO1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZ2xvYmFsLWZpbHRlciB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmZvcm0ge1xuICAgICAgLnNiLXByb21pbmVudC1maWx0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOGQ5ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZ3JhcGgtc2VjdGlvbiB7XG4gIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlOWU4ZDkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2J0LWNvbXB0LWJnKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLnNlbGVjdGlvbi5kcm9wZG93biB7XG4gIGNvbG9yOiB2YXIoLS11aS1kcm9wZG93bi1zZWxlY3Rpb24taWNvbikgIWltcG9ydGFudDtcbn1cblxuLnJlcG9ydC1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZThkOSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNHB4IDI0cHggIWltcG9ydGFudDtcbn1cbi5zZWxlY3QtZmlsdGVyLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnNiLXNlbGVjdC1zZWFyY2hmaWx0ZXIge1xuICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBpbnNpZGU7XG4gIHdpZG93czogMzExcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZDdkN2Q3IHNvbGlkICFpbXBvcnRhbnQ7XG59XG4vLyAgIC5zYi1wcm9taW5lbnQtZmlsdGVyLWZpZWxkIC51aS5zZWxlY3Rpb24uZHJvcGRvd24gLnRleHQge1xuXG4vLyAgIH1cbi51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSAuaXRlbSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMzMzMztcbiAgb3BhY2l0eTogMC4zO1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSAuYWN0aXZlLml0ZW0ge1xuICBjb2xvcjogIzAyNGY5ZCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMjRmOWQgIWltcG9ydGFudDtcbn1cbi51aS5zZWNvbmRhcnkucG9pbnRpbmcubWVudSB7XG4gIGhlaWdodDogNzJweCAhaW1wb3J0YW50O1xufVxuLnNidC1yZXBvcnQtYnRucy1wYW5lbC1uZXcge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDp2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cbi5zYi1maWVsZCA6Om5nLWRlZXAge1xuICAudWkuc2VsZWN0aW9uLmRyb3Bkb3duIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggI2Q3ZDdkNyBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmxhYmVsLXN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNiLWxhYmVsLXByaW1hcnktMTAwIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXdhcm5pbmcge1xuICBjb2xvcjogYnJvd247XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmJhY2stYnRuLW5ldyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDU3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiB2YXIoLS1zYnQtYm94LXNoYWRvdy02cHgpICFpbXBvcnRhbnQ7XG59XG4ucmVwb3J0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0tc2ItcHJvbWluZW50LWZpbHRlci10aXRsZSk7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pY29uLWJhY2sge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuLmljb24tYmFjayAuaWNvbi1zdmctLXByaW1hcnkge1xuICBmaWxsOiAjMzMzO1xufVxuLmljb24tYmFjayB7XG4gIDo6bmctZGVlcCB7XG4gICAgc3ZnLmljb24ge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuLnJlcG9ydHMtY29udGVudC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlOWU4ZDkgIWltcG9ydGFudDtcbn1cblxuLmNjLXBsYXllcl9fYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZTllOGQ5ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5kcm9wZG93bi5zZWxlY3Rpb24ge1xuICA6Om5nLWRlZXAge1xuICAgIC5kcm9wZG93bi5pY29uIHtcbiAgICAgIGNvbG9yOiAjMDI0ZjlkICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4uc2ItbGFiZWwtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNidC1ib3gtc2hhZG93LTZweCk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50YWJsZS12aWV3IHtcbiAgYmFja2dyb3VuZDogI2U5ZThkOSAhaW1wb3J0YW50O1xufVxuXG4uc2ItYnRuLXRlcnRpYXJ5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMjRmOWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2ItYnRuLW5vcm1hbCB7XG4gIG1pbi13aWR0aDogOTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMThweCAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZS1idG4ge1xuICBwYWRkaW5nLWxlZnQ6IDE5cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMTNweCAhaW1wb3J0YW50O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRmOWQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2J0LWJveC1zaGFkb3ctNnB4KSAhaW1wb3J0YW50O1xuICA6Om5nLWRlZXAge1xuICAgIC5kZWZhdWx0IC50ZXh0IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5hY3RpdmUtYnRuIHtcbiAgOjpuZy1kZWVwIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLnJlc2V0LWZpbHRlci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG4ucmVzZXQtZmlsdGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmxhc3QtdXBkYXRlIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnNiLWZpZWxkIC51aS5zZWxlY3Rpb24uZHJvcGRvd24ge1xuICA6Om5nLWRlZXAge1xuICAgIC50ZXh0IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbi5maWx0ZXItZHJvcCAudWkuc2VsZWN0aW9uLmRyb3Bkb3duIHtcbiAgOjpuZy1kZWVwIHtcbiAgICAudGV4dCB7XG4gICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5zYi1sYWJlbC12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZWEgIWltcG9ydGFudDtcbn1cbi5maWxlcy1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNlOWU4ZDkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNHB4IDI0cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6MCAxJTtcbn1cbi5yZXBvcnQtbWFpbi1ibG9jayB7XG4gIHBhZGRpbmc6IDAgMDtcbn1cblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5iYXItY2hhcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRodW1ibmFpbC1jYXJkIHtcbiAgaGVpZ2h0OiA5OHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWFsaWduIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZpbHRlci1tb2RhbC1idXR0b257XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zYi1maWx0ZXIge1xuICAmX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZThkOSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHNtKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICAgIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDEwMDhweCk7XG4gICAgICAvLyBtaW4taGVpZ2h0OiBjYWxjdWxhdGVSZW0oNjEwcHgpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDMyOHB4KTtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNjQ4cHgpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjdWxhdGVSZW0oMTZweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge1xuICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5zYi1maWx0ZXItbW9kYWwge1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgICAgIC51aS5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnVpLm1vZGFsLnNjcm9sbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiBvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2ItZmlsdGVyX19jb250ZW50IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAuc2ItcHJvbWluZW50LWZpbHRlci1maWVsZCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxufVxuXG4uZmlsdGVyLW1vZGFsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5cbi5hZGQtZW50aXR5LW1vZGFsIHtcbiAgLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXNiLXByb21pbmVudC1maWx0ZXItdGl0bGUpO1xuICAgIH1cbiAgfVxuICAuZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1jYXJkLWJnKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1jYXJkLWJnKTtcbiAgYm9yZGVyOiAjY2NjO1xufVxuXG4ucXVlc3Rpb25zIHtcbiAgY29sb3I6IHZhcigtLXNiLXByb21pbmVudC1maWx0ZXItdGl0bGUpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udWkuY2hlY2tib3ggaW5wdXQuaGlkZGVuICsgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWltYWdlcyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiAzO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uY29sdW1uLWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuLmRvdWJsZS1idG46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tb2RhbERpbWVudGlvbntcbiAgbWluLXdpZHRoOiA2MHZ3O1xufSIsIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCIvL1xuLy8gIE1FRElBIFFVRVJJRVNcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEEgbWFwIG9mIGJyZWFrcG9pbnRzLlxuJGJyZWFrcG9pbnRzOiAoXG4gIHhzOiA1NzZweCxcbiAgc206IDc2OHB4LFxuICBtZDogOTkycHgsXG4gIGxnOiAxMjgwcHgsXG4gIHhsOiAxNDQwcHgsXG4gIHh4bDogMTYwMHB4LFxuICB4eHhsOiAxOTAwcHhcbik7XG5cblxuLy9cbi8vICBSRVNQT05EIEFCT1ZFXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHNtKSB7fVxuQG1peGluIHJlc3BvbmQtYWJvdmUoJGJyZWFrcG9pbnQpIHtcblxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcblxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuXG4vL1xuLy8gIFJFU1BPTkQgQkVMT1dcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAoJGJyZWFrcG9pbnQtdmFsdWUgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRVRXRUVOXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuXG4vLyBAaW5jbHVkZSByZXNwb25kLWJldHdlZW4oc20sIG1kKSB7fVxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xuXG4gIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xuXG4gICAgLy8gR2V0IHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMuXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICR1cHBlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOiAoJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxuICB9IEBlbHNlIHtcblxuICAgIC8vIElmIGxvd2VyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xuXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgfVxuXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciB1cHBlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICB9XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "HX6c":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@shikshalokam/sl-reports-library/fesm2015/shikshalokam-sl-reports-library.js ***!
  \***************************************************************************************************/
/*! exports provided: AttachmentsComponent, BarChartComponent, ExpansionPanelComponent, ExpansionTableComponent, GenericChartComponent, MatrixChartComponent, PercentageColumnChartsComponent, PieChartComponent, ReportHeaderComponent, ReportsTextComponent, ScatterChartsComponent, SlReportsLibraryComponent, SlReportsLibraryModule, SlReportsLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsComponent", function() { return AttachmentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionTableComponent", function() { return ExpansionTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericChartComponent", function() { return GenericChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixChartComponent", function() { return MatrixChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageColumnChartsComponent", function() { return PercentageColumnChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHeaderComponent", function() { return ReportHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsTextComponent", function() { return ReportsTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChartsComponent", function() { return ScatterChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlReportsLibraryComponent", function() { return SlReportsLibraryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlReportsLibraryModule", function() { return SlReportsLibraryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlReportsLibraryService", function() { return SlReportsLibraryService; });
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "9ac6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "qb46");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var chartjs_plugin_stacked100__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-plugin-stacked100 */ "AtBH");
/* harmony import */ var chartjs_plugin_stacked100__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_stacked100__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");










var SlReportsLibraryService = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SlReportsLibraryService() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SlReportsLibraryService);
});

SlReportsLibraryService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function SlReportsLibraryService_Factory() {
    return new SlReportsLibraryService();
  },
  token: SlReportsLibraryService,
  providedIn: "root"
});
SlReportsLibraryService = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
  providedIn: 'root'
})], SlReportsLibraryService);

var SlReportsLibraryComponent = /*#__PURE__*/function () {
  function SlReportsLibraryComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SlReportsLibraryComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SlReportsLibraryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SlReportsLibraryComponent;
}();

SlReportsLibraryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-reports-library',
  template: "\n    <p>\n      sl-reports-library works!\n    </p>\n  "
})], SlReportsLibraryComponent);

var ReportHeaderComponent = /*#__PURE__*/function () {
  function ReportHeaderComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReportHeaderComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ReportHeaderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ReportHeaderComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ReportHeaderComponent.prototype, "title", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ReportHeaderComponent.prototype, "lastdate", void 0);

ReportHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-report-header',
  template: "<div class=\"report-title\"> {{title}}</div>\n<span class=\"ml-auto sb-last-update-status fnormal sb-color-gray-400 px-10 last-update\">\n    <span>Last Updated on&nbsp;: </span> &nbsp;\n    {{lastdate}}\n</span>",
  styles: [".report-title{font-size:22px;color:var(--sb-text);font-family:\"Noto Sans\";line-height:24px;font-weight:500}.report-subtitle{font-size:19px;color:var(--sb-search-input-text);font-family:\"Noto Sans\";line-height:24px;font-weight:600}"]
})], ReportHeaderComponent);

var PieChartComponent = /*#__PURE__*/function () {
  function PieChartComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PieChartComponent);

    this.pieChartOptions = {
      responsive: true,
      legend: {
        position: 'bottom',
        align: 'start'
      }
    };
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PieChartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.pieChartLabels = this.data.chart.data.labels;
      this.pieChartData = this.data.chart.data.datasets[0].data;
      this.chartColors = [{
        backgroundColor: this.data.chart.data.datasets[0].backgroundColor
      }];
    }
  }]);

  return PieChartComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PieChartComponent.prototype, "data", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PieChartComponent.prototype, "questionNumber", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chartRootElement')], PieChartComponent.prototype, "chartRootElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chartCanvas')], PieChartComponent.prototype, "chartCanvas", void 0);

PieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-pie-chart',
  template: "<div *ngIf=\"pieChartData\" >\n  <div class=\"heading\">\n    <h4>{{ questionNumber }} {{ data?.question }}</h4>\n  </div>\n  <div *ngIf=\"data?.chart?.data\" class=\"chart-container\">\n    <canvas \n    baseChart\n    [data]=\"pieChartData\"\n    [labels]=\"pieChartLabels\"\n    [chartType]=\"pieChartType\"\n    [options]=\"pieChartOptions\"\n    [legend]=\"pieChartLegend\"\n    [colors]=\"chartColors\"\n  >\n  </canvas>\n</div>\n\n  <div class=\"errorMsg\" *ngIf=\"!data?.chart?.data\">No data found</div>\n</div>",
  styles: [".heading{text-align:center;padding:15px 10px}.errorMsg{color:grey;text-align:center;padding:20px 0}.chart-container{height:350px}"]
})], PieChartComponent);

var BarChartComponent = /*#__PURE__*/function () {
  function BarChartComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BarChartComponent);

    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: 100
          },
          scaleLabel: {
            display: true,
            labelString: 'Response in %'
          }
        }],
        yAxes: [{
          ticks: {
            callback: function callback(value, index, values) {
              // // return createSubstrArr(value, 5) || value;
              var strArr = value.split(' ');
              var tempString = '';
              var result = [];

              for (var x = 0; x < strArr.length; x++) {
                tempString += ' ' + strArr[x];

                if (x % 4 === 0 && x !== 0 || x == strArr.length - 1) {
                  tempString = tempString.slice(1);
                  result.push(tempString);
                  tempString = '';
                }
              }

              return result || value;
            },
            fontSize: 15
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Response'
          }
        }]
      }
    };
    this.barChartType = 'horizontalBar';
    this.barChartLegend = false;
    this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__];
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BarChartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.barChartLabels = this.data.chart.data.labels;
      this.barChartData = [{
        data: this.data.chart.data.datasets[0].data,
        label: 'Series A'
      }];
      this.chartColors = [{
        backgroundColor: this.data.chart.data.datasets[0].backgroundColor
      }]; // this.barChartPlugins = [
      //   {
      //     beforeUpdate: function (c) {
      //       var chartHeight = c.chart.height;
      //       var size = (chartHeight * 5) / 100;
      //       c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
      //     },
      //   },
      // ];
    }
  }]);

  return BarChartComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], BarChartComponent.prototype, "data", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], BarChartComponent.prototype, "questionNumber", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chartRootElement')], BarChartComponent.prototype, "chartRootElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chartCanvas')], BarChartComponent.prototype, "chartCanvas", void 0);

BarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-bar-chart',
  template: "<div *ngIf=\"barChartData\" class=\"graph-filters\" #chartRootElement>\n  <div *ngIf=\"data?.chart?.data\" class=\"bar-chart-wrapper\">\n    <canvas\n      #chartCanvas \n      baseChart \n      [datasets]=\"barChartData\"\n      [labels]=\"barChartLabels\"\n      [options]=\"barChartOptions\"\n      [chartType]=\"barChartType\"\n      [legend]=\"barChartLegend\"\n      [plugins]=\"barChartPlugins\"\n      [colors]=\"chartColors\"\n    ></canvas>\n  </div>\n\n  <div *ngIf=\"!data?.chart?.data\" class=\"errorMsg\">No data found</div>\n</div>\n",
  styles: [".heading{padding:15px 10px;text-align:center}.errorMsg{color:grey;text-align:center;padding:20px 0}.bar-chart-wrapper{display:block;max-width:900px;max-height:450px;margin:0 auto}"]
})], BarChartComponent);

var GenericChartComponent = /*#__PURE__*/function () {
  function GenericChartComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GenericChartComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(GenericChartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "extension",
    value: function extension(name) {
      return name.split(".").pop();
    }
  }, {
    key: "openFile",
    value: function openFile(file) {
      window.open(file.url, "_blank");
    }
  }]);

  return GenericChartComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], GenericChartComponent.prototype, "reportSections", void 0);

GenericChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-generic-chart',
  template: "<div *ngFor=\"let section of reportSections\">\n  <div class=\"ui bottom p-0 b-0 no-bg my-24 graph-content-section\">\n    <div *ngFor=\"let element of section?.questionArray; let i = index\">\n      <div\n        class=\"ui segment chart-conent-section\"\n        [ngSwitch]=\"element?.responseType\"\n      >\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'text'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'number'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'date'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchDefault\n        ></sl-reports-text>\n        <sl-pie-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'radio'\"\n        ></sl-pie-chart>\n        <sl-pie-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'pie'\"\n        ></sl-pie-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'bar'\"\n        ></sl-bar-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'multiselect'\"\n        ></sl-bar-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'column'\"\n        ></sl-bar-chart>\n        <sl-percentage-column-charts\n          [chartData]=\"element\"\n          *ngSwitchCase=\"'horizontalBar'\"\n        >\n        </sl-percentage-column-charts>\n        <sl-matrix-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'matrix'\"\n        ></sl-matrix-chart>\n        <sl-expansion-table\n          [datas]=\"element\"\n          *ngSwitchCase=\"'expansion-table'\"\n        ></sl-expansion-table>\n      </div>\n      <div\n        *ngFor=\"let e of element.evidences\"\n        (click)=\"openFile(e)\"\n        class=\"area\"\n      >\n        <div *ngIf=\"e.extension == 'png'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'jpg'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'jpeg'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'pdf'\" class=\"mx-10\">\n          <i class=\"file pdf outline icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
  styles: [".graph-content-section{padding-bottom:15px!important;background-color:#e9e8d9!important;border-radius:0 0 24px 24px!important;margin-top:0!important;padding-top:5px!important}.chart-conent-section{position:relative;z-index:3;margin:15px!important;border:.0625rem solid var(--rc-dddddd);padding:1.5rem;background:#fff;box-shadow:0 .125rem .4375rem 0 rgba(var(--rc-rgba-black),.16);border-radius:24px!important}"]
})], GenericChartComponent);

var PercentageColumnChartsComponent = /*#__PURE__*/function () {
  function PercentageColumnChartsComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PercentageColumnChartsComponent);

    this.barChartType = 'horizontalBar';
    this.barChartLegend = true;
    this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__, chartjs_plugin_stacked100__WEBPACK_IMPORTED_MODULE_7__];
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PercentageColumnChartsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.submiisionDateArray = this.chartData.chart.submissionDateArray;
      this.barChartData = this.chartData.chart.data.datasets;
      this.barChartLabels = this.chartData.chart.data.labels;
      this.barChartOptions = {
        scales: {
          xAxes: [{
            stacked: false,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Criteria'
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              fontSize: 12
            }
          }]
        },
        plugins: {
          stacked100: {
            enable: true,
            replaceTooltipLabel: true
          },
          datalabels: {
            offset: 0,
            anchor: 'end',
            align: 'left',
            font: {
              size: 12
            },
            formatter: function formatter(value, data) {
              var d = data.chart.data;
              var datasetIndex = data.datasetIndex,
                  dataIndex = data.dataIndex; // to remove  0 data in  report

              if (d.originalData[datasetIndex][dataIndex] == 0) {
                if ((data.datasetIndex + 1) % _this.barChartData.length == 0 && _this.submiisionDateArray.length) {
                  return ['', '', _this.submiisionDateArray[data.dataIndex]];
                }

                return '';
              } // to remove date in instance report


              if (_this.submiisionDateArray && !_this.submiisionDateArray.length) {
                return "".concat(d.originalData[datasetIndex][dataIndex]);
              } // for last value


              if ((data.datasetIndex + 1) % _this.barChartData.length == 0) {
                // console.log(data.datasetIndex)
                if (d.originalData[datasetIndex][dataIndex] == 1) {
                  return ['', '', _this.submiisionDateArray[data.dataIndex]];
                }

                return ["                                              ".concat(d.originalData[datasetIndex][dataIndex]), '', "                                ".concat(_this.submiisionDateArray[data.dataIndex])];
              } else {
                return "".concat(d.originalData[datasetIndex][dataIndex]);
              }
            }
          }
        }
      }; // this.barChartPlugins = [
      //   {
      //     beforeUpdate: function (c) {
      //       var chartHeight = c.chart.height;
      //       var size = (chartHeight * 3) / 100;
      //       c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
      //     },
      //   },
      // ];
    } // events

  }, {
    key: "chartClicked",
    value: function chartClicked(_ref) {// console.log(event, active);

      var event = _ref.event,
          active = _ref.active;
    }
  }]);

  return PercentageColumnChartsComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chartCanvas')], PercentageColumnChartsComponent.prototype, "chartCanvas", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PercentageColumnChartsComponent.prototype, "chartData", void 0);

PercentageColumnChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-percentage-column-charts',
  template: "<div class=\"graph-filters\" #chartRootElement>\n  <ng-container *ngIf=\"chartData?.chart?.data\" class=\"bar-chart-wrapper\">\n    <canvas\n      #chartCanvas\n      baseChart\n      [datasets]=\"barChartData\"\n      [labels]=\"barChartLabels\"\n      [options]=\"barChartOptions\"\n      [plugins]=\"barChartPlugins\"\n      [legend]=\"barChartLegend\"\n      [chartType]=\"barChartType\"\n    ></canvas>\n  </ng-container>\n</div>\n",
  styles: [".bar-chart-wrapper{display:block;max-width:900px;max-height:450px;margin:0 auto}"]
})], PercentageColumnChartsComponent);

var ScatterChartsComponent = /*#__PURE__*/function () {
  function ScatterChartsComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScatterChartsComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ScatterChartsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ScatterChartsComponent;
}();

ScatterChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-scatter-charts',
  template: "<p>scatter-charts works!</p>\n",
  styles: [""]
})], ScatterChartsComponent);

var MatrixChartComponent = /*#__PURE__*/function () {
  function MatrixChartComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatrixChartComponent);

    this.allEvidence = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatrixChartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "extension",
    value: function extension(name) {
      return name.split(".").pop();
    }
  }, {
    key: "openFile",
    value: function openFile(file) {
      window.open(file.url, "_blank");
    }
  }]);

  return MatrixChartComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], MatrixChartComponent.prototype, "data", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], MatrixChartComponent.prototype, "questionNumber", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], MatrixChartComponent.prototype, "allEvidence", void 0);

MatrixChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-matrix-chart',
  template: "<div>\n  <div class=\"heading\">\n    <h4>{{ questionNumber }}) {{ data?.question }}</h4>\n  </div>\n  <div class=\"ui bottom p-0 b-0 no-bg my-24 graph-content-section\">\n    <div *ngFor=\"let element of data?.instanceQuestions; let i = index\">\n      <div\n        class=\"ui segment chart-conent-section\"\n        [ngSwitch]=\"element?.responseType\"\n      >\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'text'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'number'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'date'\"\n        ></sl-reports-text>\n        <sl-reports-text\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchDefault\n        ></sl-reports-text>\n        <sl-pie-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'radio'\"\n        ></sl-pie-chart>\n        <sl-pie-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'pie'\"\n        ></sl-pie-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'bar'\"\n        ></sl-bar-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'multiselect'\"\n        ></sl-bar-chart>\n        <sl-bar-chart\n          [data]=\"element\"\n          [questionNumber]=\"i + 1\"\n          *ngSwitchCase=\"'column'\"\n        ></sl-bar-chart>\n      </div>\n      <div\n        *ngFor=\"let e of element.evidences\"\n        (click)=\"openFile(e)\"\n        class=\"area\"\n      >\n        <div *ngIf=\"e.extension == 'png'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'jpg'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'jpeg'\" class=\"mx-10\">\n          <i class=\"file image outline icon\"></i>\n        </div>\n        <div *ngIf=\"e.extension == 'pdf'\" class=\"mx-10\">\n          <i class=\"file pdf outline icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
  styles: [".area{position:relative}i{font-size:40px}.heading{padding:15px 10px;text-align:center}.graph-content-section{padding-bottom:15px!important;background-color:#c4c3c1!important;border-radius:0 0 24px 24px!important;margin-top:0!important;padding-top:5px!important}.chart-conent-section{position:relative;z-index:3;margin:15px!important;border:.0625rem solid var(--rc-dddddd);padding:1.5rem;background:#fff;box-shadow:0 .125rem .4375rem 0 rgba(var(--rc-rgba-black),.16);border-radius:24px!important}"]
})], MatrixChartComponent);

var ReportsTextComponent = /*#__PURE__*/function () {
  function ReportsTextComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReportsTextComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ReportsTextComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ReportsTextComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ReportsTextComponent.prototype, "data", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ReportsTextComponent.prototype, "questionNumber", void 0);

ReportsTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-reports-text',
  template: "<strong>{{ questionNumber }}) {{ data?.question }}</strong>\n<div class=\"answer-list\">\n  <div *ngFor=\"let answer of data?.answers\">\n    {{\n      data?.resposeType === \"date\" && answer\n        ? (answer | date: \"medium\":\"IST\")\n        : answer\n    }}\n  </div>\n</div>\n",
  styles: [".heading{text-align:center;padding:15px 10px}.answer-list{margin-top:3px;border-top:1px solid #ccc!important}"]
})], ReportsTextComponent);

var ExpansionTableComponent = /*#__PURE__*/function () {
  function ExpansionTableComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExpansionTableComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ExpansionTableComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ExpansionTableComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ExpansionTableComponent.prototype, "datas", void 0);

ExpansionTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-expansion-table',
  template: "<div *ngIf=\"datas?.chart\">\n     <strong>{{ datas?.chart?.title }}</strong> \n  \n    <sui-accordion class=\"styled fluid sb-accordion sb-new-theme-accordion drop-accordian\" *ngFor=\"let item of datas?.chart?.domains; let i = index\">\n      <sui-accordion-panel [isOpen]=\"false\">\n        <div title class=\"sb-accordion-title fsmall d-flex flex-ai-center flex-jc-space-between\">\n          <span>{{ item?.domainName }}</span>\n          <i class=\"chevron down icon\" role=\"img\" title=\"expand\"></i>\n        </div>\n        <div content class=\"sb-accordion-content sb-bg-color-white pt-0 pb-8\">\n          <table>\n            <tr class=\"_flex-box\">\n              <td text-wrap style=\"flex: 1\"></td>\n              <td class=\"_flex-box\" class=\"assess\" *ngFor=\"let head of datas?.chart?.heading\">\n                {{ head }}\n              </td>\n            </tr>\n            <tr *ngFor=\"let criteria of item.criterias\" class=\"_flex-box _justify-content-space-between _noWrap\">\n              <td class=\"ion-text-wrap\" style=\"flex: 1\">{{ criteria?.name }}</td>\n              <td class=\"_flex-box\" *ngFor=\"let level of criteria?.levelsWithScores\">\n                <h5>{{level?.level}}</h5>\n                <p>{{level?.score}}</p>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </sui-accordion-panel>\n    </sui-accordion>\n  </div>\n  ",
  styles: ["table{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;background:#fff;color:var(--sb-text)}td,th{text-align:center;padding:12px 4px;color:#000}tr:nth-child(even){background-color:#f2f2f2}.expansionPanel{border-radius:10px;width:100%;margin:16px 0!important;padding:0!important}.assess{flex:0;text-align:-webkit-center}.heading{padding:15px 10px;text-align:center}.domain{display:flex;justify-content:space-between;margin-bottom:3px;border:1px solig;color:var(--sb-text)}.drop-accordian{margin-bottom:4px}"]
})], ExpansionTableComponent);

var ExpansionPanelComponent = /*#__PURE__*/function () {
  function ExpansionPanelComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExpansionPanelComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ExpansionPanelComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ExpansionPanelComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ExpansionPanelComponent.prototype, "datas", void 0);

ExpansionPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-expansion-panel',
  template: "<!-- <h2 *ngIf=\"datas?.chart\" class=\"heading\">{{ datas?.chart?.title }}</h2>\n<div *ngIf=\"datas?.chart\" >\n  <div *ngFor=\"let entity of datas?.chart?.entities\">\n    <h4 class=\"heading\">{{ entity.entityName }}</h4>\n\n    <div\n      (click)=\"isOpenIndex = isOpenIndex == i ? -1 : i\"\n      class=\"expansionPanel\"\n      margin\n      *ngFor=\"let item of entity?.domains; let i = index\"\n    >\n      <div class=\"domain\" >\n        <h4 style=\"flex: 1\" >{{ item?.domainName }}</h4>\n        <i *ngIf=\"!(isOpenIndex == i)\" class=\"arrow down icon medium\"  ></i>\n        <i *ngIf=\"isOpenIndex == i\" class=\"arrow up icon medium\" ></i>\n      </div>\n      <div *ngIf=\"isOpenIndex == i\" class=\"ion-padding\">\n        <table>\n          <tr *ngFor=\"let criteria of item.criterias\" class=\"domain _noWrap\">\n            <td  style=\"flex: 1\">{{ criteria?.name }}</td>\n            <td class=\"_flex-box\">: {{ criteria?.level }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n<div *ngIf=\"datas?.chart\">\n  <strong>{{ datas?.chart?.title }}</strong>\n  <div *ngFor=\"let entity of datas?.chart?.entities\">\n    <strong>{{ entity.entityName }}</strong>\n\n    <sui-accordion class=\"styled fluid sb-accordion sb-new-theme-accordion drop-accordian\"\n      *ngFor=\"let item of entity?.domains; let i = index\">\n      <sui-accordion-panel [isOpen]=\"false\">\n        <div title class=\"sb-accordion-title fsmall d-flex flex-ai-center flex-jc-space-between\">\n          <span>{{ item?.domainName }}</span>\n          <i class=\"chevron down icon\" role=\"img\" title=\"expand\"></i>\n        </div>\n        <div content class=\"sb-accordion-content sb-bg-color-white pt-0 pb-8\">\n          <table>\n            <tr *ngFor=\"let criteria of item.criterias\" class=\"domain _noWrap\">\n              <td style=\"flex: 1\">{{ criteria?.name }}</td>\n              <td class=\"_flex-box\">: {{ criteria?.level }}</td>\n            </tr>\n          </table>\n        </div>\n      </sui-accordion-panel>\n    </sui-accordion>\n  </div>\n</div>",
  styles: ["table{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;background:#fff;color:var(--sb-text)}td,th{text-align:center;padding:12px 4px;color:#000}tr:nth-child(even){background-color:#f2f2f2}.expansionPanel{border-radius:10px;width:100%;margin:16px 0!important;padding:0!important}.assess{flex:0;text-align:-webkit-center}.heading{padding:15px 10px;text-align:center}.domain{display:flex;justify-content:space-between;margin-bottom:3px;border:1px solig;color:var(--sb-text)}.drop-accordian{margin-bottom:4px}"]
})], ExpansionPanelComponent);
var FileExtension = {
  videoFormats: ["mp4", "WMV", "WEBM", "flv", "avi", "3GP", "OGG", "m4v"],
  audioFormats: ["AIF", "cda", "mpa", "ogg", "wav", "wma", "mp3"],
  pptFormats: ["ppt", "pptx", "pps", "ppsx"],
  wordFormats: ["docx", "doc", "docm", "dotx"],
  imageFormats: ["jpg", "png", "jpeg"],
  pdfFormats: ["pdf"],
  spreadSheetFormats: ["xls", "xlsx"]
};

var AttachmentsComponent = /*#__PURE__*/function () {
  function AttachmentsComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AttachmentsComponent);

    this.imageFormats = FileExtension.imageFormats;
    this.videoFormats = FileExtension.videoFormats;
    this.audioFormats = FileExtension.audioFormats;
    this.pdfFormats = FileExtension.pdfFormats;
    this.wordFormats = FileExtension.wordFormats;
    this.spreadSheetFormats = FileExtension.spreadSheetFormats;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AttachmentsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "openImage",
    value: function openImage(url) {
      window.open(url, "_blank");
    }
  }]);

  return AttachmentsComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AttachmentsComponent.prototype, "url", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AttachmentsComponent.prototype, "extension", void 0);

AttachmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sl-attachments',
  template: "<div class=\"thumbnail-card\">\n    <img [src]=\"url\" *ngIf=\"imageFormats.includes(extension)\" (click)=\"openImage(url)\" class=\"card-images\" />\n    <!-- <fa name=\"file-video-o\" class=\"attachmentIcon\" *ngIf=\"videoFormats.includes(extension)\" (click)=\"playVideo(url)\"></fa> -->\n    <i\n    class=\"video icon attachmentIcon\"\n      *ngIf=\"videoFormats.includes(extension)\"\n      (click)=\"openImage(url)\"\n    ></i>\n  \n    <!-- <fa *ngIf=\"audioFormats.includes(extension)\" name=\"file-audio-o\" class=\"attachmentIcon\" (click)=\"playAudio(url)\"></fa> -->\n    <i\n      *ngIf=\"audioFormats.includes(extension)\"\n      class=\"file audio icon attachmentIcon\"\n      (click)=\"openImage(url)\"\n    ></i>\n    <!-- <fa class=\"attachmentIcon\" name=\"file-pdf-o\" *ngIf=\"pdfFormats.includes(extension)\" (click)=\"openDocument(url)\"></fa> -->\n    <i\n      class=\"file alternate icon attachmentIcon\"\n      *ngIf=\"pdfFormats.includes(extension)\"\n      (click)=\"openImage(url)\"\n    ></i>\n  \n    <i\n    class=\"file alternate icon attachmentIcon\"\n    *ngIf=\"spreadSheetFormats.includes(extension) || wordFormats.includes(extension) \"\n    (click)=\"openImage(url)\"\n  ></i>\n  </div>\n  ",
  styles: [".attachmentIcon{margin-top:10px;font-size:70px}.thumbnail-card{height:98px;display:inline;justify-content:space-around;align-items:center}.card-images{width:90px;height:90px;margin-right:2px;margin-bottom:2px;border-radius:10px}"]
})], AttachmentsComponent);

var SlReportsLibraryModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SlReportsLibraryModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SlReportsLibraryModule);
});

SlReportsLibraryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
  declarations: [SlReportsLibraryComponent, ReportHeaderComponent, PieChartComponent, BarChartComponent, GenericChartComponent, PercentageColumnChartsComponent, ScatterChartsComponent, MatrixChartComponent, ReportsTextComponent, ExpansionTableComponent, ExpansionPanelComponent, AttachmentsComponent],
  imports: [ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_8__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_8__["SuiAccordionModule"]],
  exports: [SlReportsLibraryComponent, ReportHeaderComponent, PieChartComponent, BarChartComponent, GenericChartComponent, PercentageColumnChartsComponent, ScatterChartsComponent, MatrixChartComponent, ReportsTextComponent, ExpansionTableComponent, ExpansionPanelComponent, AttachmentsComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
})], SlReportsLibraryModule);
/*
 * Public API Surface of sl-reports-library
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "HYDo":
/*!*********************************************************!*\
  !*** ./src/app/modules/report/report-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "1/7i");
/* harmony import */ var _components_report_view_report_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/report-view/report-view.component */ "qPKA");



var telemetryEnv = 'solution';
var ɵ0 = {
    telemetry: { env: telemetryEnv, pageid: 'solution-listing', type: 'view' },
    menuBar: {
        visible: false
    }
}, ɵ1 = {
    telemetry: { env: telemetryEnv, pageid: 'report-view', type: 'view' },
    menuBar: {
        visible: false
    }
};
var routes = [
    {
        path: 'solution-listing',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["SolutionListingComponent"],
        data: ɵ0
    },
    {
        path: 'report-view',
        component: _components_report_view_report_view_component__WEBPACK_IMPORTED_MODULE_2__["ReportViewComponent"],
        data: ɵ1
    }
];
var ReportRoutingModule = (function () {
    function ReportRoutingModule() {
    }
    return ReportRoutingModule;
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

/***/ "O4jL":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/solution-listing/solution-listing.component.ngfactory.js ***!
  \****************************************************************************************************/
/*! exports provided: RenderType_SolutionListingComponent, View_SolutionListingComponent_0, View_SolutionListingComponent_Host_0, SolutionListingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SolutionListingComponent", function() { return RenderType_SolutionListingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SolutionListingComponent_0", function() { return View_SolutionListingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SolutionListingComponent_Host_0", function() { return View_SolutionListingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionListingComponentNgFactory", function() { return SolutionListingComponentNgFactory; });
/* harmony import */ var _solution_listing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solution-listing.component.scss.shim.ngstyle */ "8TE5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.directive */ "K+Kt");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity-list/entity-list.component.ngfactory */ "Xaoh");
/* harmony import */ var _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../entity-list/entity-list.component */ "5GII");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _solution_listing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./solution-listing.component */ "dX3e");
/* harmony import */ var _core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/observation/observation.service */ "0wbY");
/* harmony import */ var _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/services/observation-util/observation-util.service */ "Lv/I");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/services/pagination/pagination.service */ "X/Ol");
/* harmony import */ var _core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/services/tnc/tnc.service */ "2lf2");

























var styles_SolutionListingComponent = [_solution_listing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SolutionListingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SolutionListingComponent, data: {} });

function View_SolutionListingComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_SolutionListingComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "tr", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (((((_v.context.$implicit == null) ? null : ((_v.context.$implicit.entities == null) ? null : _v.context.$implicit.entities.length)) > 1) ? _co.goToEntityList(_v.context.$implicit) : _co.goToReports(_v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "header-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["aria-label", "file-icon"], ["class", "sb-btn sb-btn-link sb-btn-link-primary sb-btn-normal iconSize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "icon copy outline alternate large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "sb-media"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "sb-media-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h6", [["class", "p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "media-description sb__ellipsis"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [["class", "date-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2)], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_1); var currVal_2 = _v.context.$implicit.programName; _ck(_v, 12, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.completedDate, "yyyy/MM/dd")); _ck(_v, 14, 0, currVal_3); }); }
function View_SolutionListingComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["aria-current", "\u201Cpage\u201D"], ["class", "sb-item"], ["role", "\u201Cbutton\u201D"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { active: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item"; var currVal_3 = _ck(_v, 2, 0, (_co.paginationDetails.currentPage === _v.context.$implicit)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit; _ck(_v, 3, 0, currVal_4); }); }
function View_SolutionListingComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "sb-pagination-container flex-jc-flex-end mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "div", [["class", "sb-pagination my-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00AB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.paginationDetails.currentPage - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "a", [["class", "sb-item"], ["role", "button"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage((_co.paginationDetails.currentPage + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [">"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "a", [["class", "sb-item "], ["role", "button"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToPage(_co.paginationDetails.totalPages) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](18, { disabled: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00BB"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "sb-item "; var currVal_3 = _ck(_v, 4, 0, (_co.paginationDetails.currentPage === 1)); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_6 = "sb-item "; var currVal_7 = _ck(_v, 8, 0, (_co.paginationDetails.currentPage === 1)); _ck(_v, 7, 0, currVal_6, currVal_7); var currVal_8 = _co.paginationDetails.pages; _ck(_v, 11, 0, currVal_8); var currVal_11 = "sb-item"; var currVal_12 = _ck(_v, 14, 0, (_co.paginationDetails.currentPage === _co.paginationDetails.totalPages)); _ck(_v, 13, 0, currVal_11, currVal_12); var currVal_15 = "sb-item "; var currVal_16 = _ck(_v, 18, 0, (_co.paginationDetails.currentPage === _co.paginationDetails.totalPages)); _ck(_v, 17, 0, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.first))), ""); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.previous))), ""); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.next))), ""); _ck(_v, 12, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.last))), ""); _ck(_v, 16, 0, currVal_13, currVal_14); }); }
function View_SolutionListingComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column right aligned"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.paginationDetails.pages.length; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SolutionListingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 66, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 65, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 64, "sui-tabset", [], null, null, null, _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ɵdd_0"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ɵdd"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1097728, null, 2, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵdd"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tabHeaders: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _tabContents: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 6, "div", [["class", "ui top attached tabular menu report-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "a", [["class", "item"], ["suiTabHeader", "1"]], [[2, "item", null], [2, "active", null], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { childDropdownMenu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[1, 4]], 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵdf"], [], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "icon chart line alternate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 53, "div", [["class", "ui bottom attached segment"], ["suiTabContent", "1"]], [[2, "tab", null], [2, "active", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, [[2, 4]], 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵde"], [], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 51, "div", [["class", "ui bottom attached small p-0 b-0 no-bg py-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 20, "div", [["class", "pull-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" show "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 17, "select", [["class", "dataTables_filter search-entries"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.pageSize = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.changeLimit($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "option", [["selected", ""], ["value", "10"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "option", [["value", "20"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["20"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "option", [["value", "25"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["25"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" entries "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 12, "div", [["class", "pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 11, "select", [["class", "dataTables_filter search-entity"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedEntity = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.getDataByEntity($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 3, "option", [["disabled", ""], ["hidden", ""], ["selected", ""], ["value", "selected"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Entity Filter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 13, "table", [["class", "\n                      sb-table sb-table-hover sb-table-striped sb-table-sortable\n                      width-100 table-bottom \n                    "], ["datatable", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 8, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "th", [["class", "header-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "th", [["class", "header-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "th", [["class", "date-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "div", [["class", "content-grid relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "1"; _ck(_v, 10, 0, currVal_3); var currVal_7 = "1"; _ck(_v, 14, 0, currVal_7); var currVal_15 = _co.pageSize; _ck(_v, 21, 0, currVal_15); var currVal_16 = "10"; _ck(_v, 25, 0, currVal_16); var currVal_17 = "10"; _ck(_v, 26, 0, currVal_17); var currVal_18 = "20"; _ck(_v, 29, 0, currVal_18); var currVal_19 = "20"; _ck(_v, 30, 0, currVal_19); var currVal_20 = "25"; _ck(_v, 33, 0, currVal_20); var currVal_21 = "25"; _ck(_v, 34, 0, currVal_21); var currVal_29 = _co.selectedEntity; _ck(_v, 41, 0, currVal_29); var currVal_30 = "selected"; _ck(_v, 45, 0, currVal_30); var currVal_31 = "selected"; _ck(_v, 46, 0, currVal_31); var currVal_32 = _co.filters; _ck(_v, 49, 0, currVal_32); var currVal_33 = _co.dtOptions; _ck(_v, 51, 0, currVal_33); var currVal_37 = _co.solutionList; _ck(_v, 63, 0, currVal_37); var currVal_38 = (_co.paginationDetails.totalItems > 5); _ck(_v, 66, 0, currVal_38); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hasClasses; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).isActive; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).isDisabled; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lnk == null) ? null : _co.resourceService.frmelmnts.lnk.report)); _ck(_v, 12, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hasClasses; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isActive; _ck(_v, 13, 0, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending; _ck(_v, 38, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.serialno))); _ck(_v, 55, 0, currVal_34); var currVal_35 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.title))); _ck(_v, 58, 0, currVal_35); var currVal_36 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.latestSubmission))); _ck(_v, 60, 0, currVal_36); }); }
function View_SolutionListingComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_8__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SolutionListingComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_11__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SolutionListingComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-entity-list", [], null, [[null, "closeEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("closeEvent" === en)) {
        var pd_0 = (_co.modalClose($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_EntityListComponent_0"], _entity_list_entity_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_EntityListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_15__["EntityListComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { solution: [0, "solution"] }, { closeEvent: "closeEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.solution; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SolutionListingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-landing-section", [], null, null, null, _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_AppLandingSectionComponent_0"], _shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_17__["AppLandingSectionComponent"], [_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "py-0 d-flex flex-ai-center w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "em", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "textbook d-flex flex-ai-center flex-jc-space-between w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "h5", [["class", "textbook__title sb-color-primary font-weight-bold mb-0"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 8, "div", [["class", "sb-pageSection my-24 ui container listallreports-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "div", [["class", "sb-pageSection-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SolutionListingComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.layoutConfiguration; var currVal_1 = true; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "relative position mt-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-color-white back-btn-container cc-player__btn-back relative9"); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_5 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = (_co.layoutConfiguration ? "sbt-inside-page-container" : "pt-16"); _ck(_v, 17, 0, currVal_7); var currVal_8 = _co.solutionList.length; _ck(_v, 22, 0, currVal_8); var currVal_9 = _co.noResult; _ck(_v, 24, 0, currVal_9); var currVal_10 = _co.showLoader; _ck(_v, 26, 0, currVal_10); var currVal_11 = _co.showModal; _ck(_v, 28, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 13, 0, currVal_6); }); }
function View_SolutionListingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-solution-listing", [], null, null, null, View_SolutionListingComponent_0, RenderType_SolutionListingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _solution_listing_component__WEBPACK_IMPORTED_MODULE_18__["SolutionListingComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"], _core_services_observation_observation_service__WEBPACK_IMPORTED_MODULE_19__["ObservationService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"], _core_services_observation_util_observation_util_service__WEBPACK_IMPORTED_MODULE_20__["ObservationUtilService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_23__["PaginationService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"], _core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_24__["TncService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SolutionListingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-solution-listing", _solution_listing_component__WEBPACK_IMPORTED_MODULE_18__["SolutionListingComponent"], View_SolutionListingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "PgeQ":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/entity-list/entity-list.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.add-entity-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 60vh;\n}\n.add-entity-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--sb-prominent-filter-title);\n}\n.add-entity-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.add-entity-modal[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background: var(--sb-card-bg);\n  border-top: none;\n}\n.add-entity-modal[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.sb-onboard__header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0px;\n  padding-left: 15px;\n}\n.sb-onboard__content[_ngcontent-%COMP%] {\n  width: 40.5rem;\n  max-width: 100%;\n  margin-bottom: auto;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.sb-onboard__footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n  text-align: center;\n}\n@media (max-width: 767px) {\n    .sb-onbrd-modal .ui.modal {\n    margin: 0 0 0 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n  }\n    .sb-onbrd-modal .ui.modal.scroll {\n    position: fixed !important;\n    top: 0;\n    width: 100%;\n    left: 0px;\n    right: 0px;\n    margin: 0 !important;\n  }\n}\n.sbt-search-box[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0;\n}\n.load-mr-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-size: 1rem;\n  padding: 0.5rem 2rem;\n}\n.load-mr-bt-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.checked-box[_ngcontent-%COMP%] {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy9lbnRpdHktbGlzdC9lbnRpdHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNoVEU7RUFDRSxnQkFBQTtBQStNSjtBQTlNSTtFQUNFLHVDQUFBO0FBZ05OO0FBOU1JO0VBQ0UsZUFBQTtBQWdOTjtBQTdNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUErTUo7QUE3TUU7RUFDRSxnQkFBQTtBQStNSjtBQTFNRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBNk1KO0FBMU1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE0TUo7QUF6TUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTJNSjtBQy9MSTtFRExFO0lBQ0UsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBd01OO0VBck1JO0lBQ0UsMEJBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUF1TU47QUFDRjtBQW5NRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQXNNSjtBQXBNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUF1TUo7QUFyTUU7RUFDRSxrQkFBQTtBQXdNSjtBQXJNQztFQUNDLGdCQUFBO0FBd01GIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy9lbnRpdHktbGlzdC9lbnRpdHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuXG4uYWRkLWVudGl0eS1tb2RhbHtcbiAgLy8gLnNiLW1vZGFsLWNvbnRlbnQge1xuICAvLyAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KSAhaW1wb3J0YW50O1xuICAvLyAgIH1cbiAgLmNvbnRlbnR7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBsYWJlbHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zYi1wcm9taW5lbnQtZmlsdGVyLXRpdGxlKTtcbiAgICB9XG4gICAgbGFiZWw6aG92ZXJ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIC5mb290ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLWNhcmQtYmcpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaC1ib3h7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufVxuXG4uc2Itb25ib2FyZCB7XG4gICZfX2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQgOiAxNXB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg2NDhweCk7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjdWxhdGVSZW0oMTZweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5zYi1vbmJyZC1tb2RhbCB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgLnVpLm1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAudWkubW9kYWwuc2Nyb2xsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4gIC5zYnQtc2VhcmNoLWJveHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubG9hZC1tci1idG57XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgfVxuICAubG9hZC1tci1idC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXJcbn1cblxuIC5jaGVja2VkLWJveHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbiIsIi8vXG4vLyAgTUVESUEgUVVFUklFU1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDU3NnB4LFxuICBzbTogNzY4cHgsXG4gIG1kOiA5OTJweCxcbiAgbGc6IDEyODBweCxcbiAgeGw6IDE0NDBweCxcbiAgeHhsOiAxNjAwcHgsXG4gIHh4eGw6IDE5MDBweFxuKTtcblxuXG4vL1xuLy8gIFJFU1BPTkQgQUJPVkVcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRUxPV1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFVFdFRU5cbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "VYbW":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/all-evidence/all-evidence.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.thumbnail-card[_ngcontent-%COMP%] {\n  height: 98px;\n  margin-top: 10px;\n  display: inline;\n  justify-content: space-around;\n  align-items: center;\n}\n.evidence-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 70vh;\n  padding: 10px;\n  overflow-y: auto;\n  background: var(--sb-modal-content-bg);\n  border-radius: 24px;\n}\n.evidence-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--sb-prominent-filter-title);\n}\n.sbt-report-tabs-panel[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding-bottom: 0.125rem;\n  border-radius: var(--sbt-bradius-24) !important;\n  background-color: var(--sb-card-bg);\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #333333;\n  opacity: 0.3;\n  font-family: \"Noto Sans\";\n  font-weight: 600;\n  overflow: hidden;\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%] {\n  color: #024f9d !important;\n  opacity: 1 !important;\n  border-bottom-width: 4px !important;\n  border-color: #024f9d !important;\n  overflow: hidden;\n}\n.ui.secondary.pointing.menu[_ngcontent-%COMP%] {\n  height: 60px !important;\n  overflow: hidden;\n}\n.sbt-report-btns-panel-new[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  background-color: var(--white);\n}\n.report-block[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  margin-top: 10px !important;\n  background-color: transparent;\n  color: var(--sb-text);\n}\n.item[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy9hbGwtZXZpZGVuY2UvYWxsLWV2aWRlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNwVEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQW1ORjtBQS9NRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBa05KO0FBak5JO0VBQ0ksdUNBQUE7QUFtTlI7QUE5TUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1DQUFBO0FBaU5GO0FBOU1BO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWlORjtBQS9NQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFrTkY7QUFoTkE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBbU5GO0FBak5BO0VBQ0UsNkJBQUE7RUFDRCw4QkFBQTtBQW9ORDtBQWhOQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFtTko7QUFoTkU7RUFDSSxnQkFBQTtBQW1OTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L2NvbXBvbmVudHMvYWxsLWV2aWRlbmNlL2FsbC1ldmlkZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuLnRodW1ibmFpbC1jYXJkIHtcbiAgaGVpZ2h0OiA5OHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXZpZGVuY2UtbW9kYWwge1xuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1tb2RhbC1jb250ZW50LWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGxhYmVse1xuICAgICAgICBjb2xvcjogdmFyKC0tc2ItcHJvbWluZW50LWZpbHRlci10aXRsZSk7XG4gICAgICB9XG4gIH1cbn1cblxuLnNidC1yZXBvcnQtdGFicy1wYW5lbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsY3VsYXRlUmVtKDJweCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNidC1icmFkaXVzLTI0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYi1jYXJkLWJnKTtcbn1cblxuLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IC5pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvcGFjaXR5OiAwLjM7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IC5hY3RpdmUuaXRlbSB7XG4gIGNvbG9yOiAjMDI0ZjlkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAyNGY5ZCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVpLnNlY29uZGFyeS5wb2ludGluZy5tZW51IHtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2J0LXJlcG9ydC1idG5zLXBhbmVsLW5ldyB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuXG4ucmVwb3J0LWJsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1zYi10ZXh0KTtcbiAgfVxuXG4gIC5pdGVte1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gICJdfQ== */"];



/***/ }),

/***/ "Xaoh":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/report/components/entity-list/entity-list.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_EntityListComponent, View_EntityListComponent_0, View_EntityListComponent_Host_0, EntityListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EntityListComponent", function() { return RenderType_EntityListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EntityListComponent_0", function() { return View_EntityListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EntityListComponent_Host_0", function() { return View_EntityListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponentNgFactory", function() { return EntityListComponentNgFactory; });
/* harmony import */ var _entity_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-list.component.scss.shim.ngstyle */ "PgeQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component.ngfactory */ "KmdA");
/* harmony import */ var _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/no-result/no-result.component */ "hHht");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _entity_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entity-list.component */ "5GII");
















var styles_EntityListComponent = [_entity_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EntityListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EntityListComponent, data: {} });

function View_EntityListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "sb-radio-btn-checkbox sb-radio-btn-primary checked-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "input", [["type", "radio"]], [[8, "value", 0], [8, "id", 0], [8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onEntityChange(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); var currVal_2 = _v.context.$implicit.selected; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_4); }); }
function View_EntityListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.solution.entities; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EntityListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-no-result", [], null, null, null, _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NoResultComponent_0"], _shared_components_no_result_no_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NoResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _shared_components_no_result_no_result_component__WEBPACK_IMPORTED_MODULE_4__["NoResultComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noResultMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EntityListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [["class", "sb-mat__modal sb-onboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "flex-jc-center mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "sb-onboard__header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "div", [["class", "content search-results"], ["infinite-scroll", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4866048, null, 0, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { infiniteScrollDistance: [0, "infiniteScrollDistance"], infiniteScrollThrottle: [1, "infiniteScrollThrottle"], scrollWindow: [2, "scrollWindow"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "mat-dialog-actions", [["class", "mb-0 sb-mat__modal__actions flex-jc-center mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 8, "div", [["class", "actions footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary text-uppercase"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](22, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "span", [["class", "arrow-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "em", [["class", "icon-svg icon-svg--xxs icon-back"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-right"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_4 = "close dialog"; var currVal_5 = ""; _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_6 = _co.scrollDistance; var currVal_7 = _co.throttle; var currVal_8 = false; _ck(_v, 12, 0, currVal_6, currVal_7, currVal_8); var currVal_9 = ((_co.solution.entities == null) ? null : _co.solution.entities.length); _ck(_v, 14, 0, currVal_9); var currVal_10 = !((_co.solution.entities == null) ? null : _co.solution.entities.length); _ck(_v, 16, 0, currVal_10); var currVal_12 = "sb-btn sb-btn-normal sb-btn-primary text-uppercase"; var currVal_13 = _ck(_v, 22, 0, (_co.selectedListCount == 0)); _ck(_v, 21, 0, currVal_12, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectEntity)); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ariaLabel || null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).type; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_11 = (_co.selectedListCount == 0); _ck(_v, 20, 0, currVal_11); var currVal_14 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit)); _ck(_v, 23, 0, currVal_14); }); }
function View_EntityListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_9__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderMessage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EntityListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, [[1, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { disableClose: 0, size: 1, panelClass: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_EntityListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EntityListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 5, 0, false, "normal", _ck(_v, 4, 0, "overflow-visible", "material-modal")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.showLoaderBox; _ck(_v, 9, 0, currVal_1); }, null); }
function View_EntityListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-entity-list", [], null, null, null, View_EntityListComponent_0, RenderType_EntityListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _entity_list_component__WEBPACK_IMPORTED_MODULE_15__["EntityListComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EntityListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-entity-list", _entity_list_component__WEBPACK_IMPORTED_MODULE_15__["EntityListComponent"], View_EntityListComponent_Host_0, { solution: "solution" }, { closeEvent: "closeEvent" }, []);



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

/***/ "ZpAJ":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/report/components/all-evidence/all-evidence.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_AllEvidenceComponent, View_AllEvidenceComponent_0, View_AllEvidenceComponent_Host_0, AllEvidenceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AllEvidenceComponent", function() { return RenderType_AllEvidenceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AllEvidenceComponent_0", function() { return View_AllEvidenceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AllEvidenceComponent_Host_0", function() { return View_AllEvidenceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEvidenceComponentNgFactory", function() { return AllEvidenceComponentNgFactory; });
/* harmony import */ var _all_evidence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-evidence.component.scss.shim.ngstyle */ "VYbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@shikshalokam/sl-reports-library/shikshalokam-sl-reports-library.ngfactory */ "exwH");
/* harmony import */ var _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shikshalokam/sl-reports-library */ "HX6c");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/tabs/index.ngfactory */ "Pwwu");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _all_evidence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-evidence.component */ "bsE+");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_services_dhiti_dhiti_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/services/dhiti/dhiti.service */ "VBLF");

















var styles_AllEvidenceComponent = [_all_evidence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AllEvidenceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AllEvidenceComponent, data: {} });

function View_AllEvidenceComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_3__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = _v.context.$implicit.extension; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AllEvidenceComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "p", [["class", "item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Images"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images; _ck(_v, 6, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_3__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.url; var currVal_1 = _co.mp4; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AllEvidenceComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "p", [["class", "item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Videos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.videos; _ck(_v, 6, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_3__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = _v.context.$implicit.extension; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AllEvidenceComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "p", [["class", "item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Documents"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.documents; _ck(_v, 6, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sl-attachments", [], null, null, null, _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AttachmentsComponent_0"], _node_modules_shikshalokam_sl_reports_library_shikshalokam_sl_reports_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AttachmentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_3__["AttachmentsComponent"], [], { url: [0, "url"], extension: [1, "extension"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = _v.context.$implicit.extension; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AllEvidenceComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "p", [["class", "item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { childDropdownMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Audios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.audios; _ck(_v, 6, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ") ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_AllEvidenceComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "report-block ui bottom attached segment p-0 b-0 no-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.remarks; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 31, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 29, "div", [["class", "sb-onboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 27, "div", [["class", "p-0 w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "div", [["class", "sb-modal-content content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 24, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 23, "div", [["class", "my-16"], ["id", "report-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 22, "mat-tab-group", [["class", "mat-tab-group"], ["mat-align-tabs", "center"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _allTabs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 16777216, null, null, 12, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 770048, [[3, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MAT_TAB_GROUP"]]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 8, "div", [["class", "report-block ui bottom attached segment p-0 b-0 no-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllEvidenceComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, null, 5, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 770048, [[3, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MAT_TAB_GROUP"]]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AllEvidenceComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "div", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.evidences))), ""); _ck(_v, 14, 0, currVal_2); var currVal_3 = ((_co.images == null) ? null : _co.images.length); _ck(_v, 19, 0, currVal_3); var currVal_4 = ((_co.videos == null) ? null : _co.videos.length); _ck(_v, 21, 0, currVal_4); var currVal_5 = ((_co.documents == null) ? null : _co.documents.length); _ck(_v, 23, 0, currVal_5); var currVal_6 = (_co.audios && ((_co.audios == null) ? null : _co.audios.length)); _ck(_v, 25, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.remarks))), ""); _ck(_v, 27, 0, currVal_7); var currVal_8 = ((_co.remarks == null) ? null : _co.remarks.length); _ck(_v, 31, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dynamicHeight; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).headerPosition === "below"); _ck(_v, 9, 0, currVal_0, currVal_1); }); }
function View_AllEvidenceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, [[1, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AllEvidenceComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, true, "normal"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AllEvidenceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-all-evidence", [], null, null, null, View_AllEvidenceComponent_0, RenderType_AllEvidenceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _all_evidence_component__WEBPACK_IMPORTED_MODULE_13__["AllEvidenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_14__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"], _core_services_dhiti_dhiti_service__WEBPACK_IMPORTED_MODULE_16__["DhitiService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AllEvidenceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-all-evidence", _all_evidence_component__WEBPACK_IMPORTED_MODULE_13__["AllEvidenceComponent"], View_AllEvidenceComponent_Host_0, { data: "data" }, { closeEvent: "closeEvent" }, []);



/***/ }),

/***/ "bsE+":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/all-evidence/all-evidence.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AllEvidenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEvidenceComponent", function() { return AllEvidenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




var AllEvidenceComponent = (function () {
    function AllEvidenceComponent(resourceService, config, dhitiService, location) {
        var _this = this;
        this.resourceService = resourceService;
        this.dhitiService = dhitiService;
        this.location = location;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.throttle = 50;
        this.scrollDistance = 2;
        this.remarks = [];
        this.images = [];
        this.videos = [];
        this.documents = [];
        this.audios = [];
        this.config = config;
        this.location.onPopState(function () {
            _this.modal.deny();
        });
    }
    AllEvidenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = {
            url: this.config.urlConFig.URLS.DHITI.ALL_EVIDENCE,
            data: this.data,
        };
        this.dhitiService.post(config).subscribe(function (success) {
            if (success.result === true && success.data) {
                _this.images = success.data.images;
                _this.videos = success.data.videos;
                _this.documents = success.data.documents;
                _this.remarks = success.data.remarks;
                _this.audios = success.data.audios;
            }
        }, function (error) { });
    };
    AllEvidenceComponent.prototype.closeModal = function () {
        this.modal.approve();
        this.closeEvent.emit({ value: null });
    };
    return AllEvidenceComponent;
}());



/***/ }),

/***/ "dX3e":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/report/components/solution-listing/solution-listing.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SolutionListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionListingComponent", function() { return SolutionListingComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net */ "FlOX");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
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






var SolutionListingComponent = (function () {
    function SolutionListingComponent(resourceService, layoutService, observationService, config, observationUtilService, userService, router, paginationService, configService, tncService, location) {
        this.resourceService = resourceService;
        this.layoutService = layoutService;
        this.observationService = observationService;
        this.observationUtilService = observationUtilService;
        this.userService = userService;
        this.router = router;
        this.paginationService = paginationService;
        this.configService = configService;
        this.tncService = tncService;
        this.location = location;
        this.entityType = '';
        this.pageSize = 10;
        this.pageNo = 1;
        this.solutionList = [];
        this.showLoadMore = true;
        this.filters = [];
        this.dtOptions = {};
        this.showModal = false;
        this.showLoader = true;
        this.noResult = false;
        this.showTncPopup = false;
        this.config = config;
        this.paginationDetails = this.paginationService.getPager(0, 1, this.pageSize);
        this.noResultMessage = {
            'messageText': 'messages.stmsg.m0131'
        };
    }
    SolutionListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            autoWidth: true,
            searching: false,
            pageLength: this.pageSize,
            info: false,
            dom: '<"pull-right">rt'
        };
        this.selectedEntity = 'selected';
        this.userService.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (user && user.userProfile) {
                    this.userProfile = user.userProfile;
                }
                return [2];
            });
        }); });
        this.initLayout();
        this.getProfileData();
    };
    SolutionListingComponent.prototype.getProfileData = function () {
        var _this = this;
        this.observationUtilService.getProfileDataList().then(function (data) {
            _this.payload = data;
            _this.getSolutions();
        }, function (error) { });
    };
    SolutionListingComponent.prototype.goBack = function () {
        this.location.back();
    };
    SolutionListingComponent.prototype.getSolutions = function () {
        var _this = this;
        this.solutionList = [];
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION
                .OBSERVATION_REPORT_SOLUTION_LIST +
                ("limit=" + this.pageSize + "&page=" + this.pageNo + "&entityType=" + this.entityType),
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            if (data.result) {
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
                _this.noResult = true;
            }
            _this.solutionList =
                data && data.result ? _this.solutionList.concat(data.result.data) : [];
            _this.filters = data && data.result && !_this.filters.length ? data.result.entityType : _this.filters;
            _this.paginationDetails.currentPage = _this.pageNo;
            _this.paginationDetails = _this.paginationService.getPager(data.result.count, _this.paginationDetails.currentPage, _this.pageSize);
            _this.showLoadMore =
                _this.solutionList.length < data.result.count ? true : false;
            if (_this.solutionList.length > 0) {
                _this.showLoader = false;
            }
            else {
                _this.showLoader = false;
                _this.noResult = true;
            }
        }, function (error) {
            _this.showLoader = false;
            _this.noResult = true;
        });
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    SolutionListingComponent.prototype.navigateToPage = function (page) {
        if (page < 1 || page > this.paginationDetails.totalPages) {
            return;
        }
        this.pageNo = page;
        this.getSolutions();
    };
    SolutionListingComponent.prototype.getDataByEntity = function (e) {
        var _this = this;
        this.selectedEntity = e.target.value;
        this.entityType = this.selectedEntity;
        this.pageNo = 1;
        this.solutionList = [];
        var paramOptions = {
            url: this.config.urlConFig.URLS.OBSERVATION
                .OBSERVATION_REPORT_SOLUTION_LIST +
                ("limit=" + this.pageSize + "&page=" + this.pageNo + "&entityType=" + this.entityType),
            data: this.payload,
        };
        this.observationService.post(paramOptions).subscribe(function (data) {
            _this.solutionList =
                data && data.result ? _this.solutionList.concat(data.result.data) : [];
            _this.paginationDetails.currentPage = _this.pageNo;
            _this.paginationDetails = _this.paginationService.getPager(data.result.count, _this.paginationDetails.currentPage, _this.pageSize);
            _this.showLoadMore =
                _this.solutionList.length < data.result.count ? true : false;
        }, function (error) { });
    };
    SolutionListingComponent.prototype.changeLimit = function (e) {
        this.pageSize = e.target.value;
        this.pageNo = 1;
        this.dtOptions.pageLength = this.pageSize;
        this.getSolutions();
    };
    SolutionListingComponent.prototype.goToEntityList = function (data) {
        this.solution = data;
        this.showModal = true;
    };
    SolutionListingComponent.prototype.goToReports = function (solution) {
        this.showModal = false;
        var state = {
            scores: false,
            observation: true,
            entityId: solution.entities[0]._id,
            entityType: solution.entityType,
            observationId: solution.observationId,
            solutionId: solution.solutionId,
        };
        if (solution.isRubricDriven) {
            state.scores = true;
        }
        if (!solution.criteriaLevelReport) {
            state['filter'] = { questionId: [] };
            state['criteriaWise'] = false;
        }
        this.router.navigate(['solution/report-view'], {
            queryParams: state,
        });
    };
    SolutionListingComponent.prototype.modalClose = function (event) {
        this.showModal = false;
        if (event.value) {
            var entity = event.value.selectedEntity;
            var solutionDetails = event.value.solutionDetail;
            var state = {
                scores: false,
                observation: true,
                entityId: entity._id,
                entityType: solutionDetails.entityType,
                observationId: solutionDetails.observationId,
                solutionId: solutionDetails.solutionId,
            };
            if (solutionDetails.isRubricDriven) {
                state.scores = true;
            }
            if (!solutionDetails.criteriaLevelReport) {
                state['filter'] = { questionId: [] };
                state['criteriaWise'] = false;
            }
            this.router.navigate(['solution/report-view'], {
                queryParams: state,
            });
        }
    };
    SolutionListingComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    return SolutionListingComponent;
}());



/***/ }),

/***/ "exwH":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@shikshalokam/sl-reports-library/shikshalokam-sl-reports-library.ngfactory.js ***!
  \****************************************************************************************************/
/*! exports provided: SlReportsLibraryModuleNgFactory, RenderType_SlReportsLibraryComponent, View_SlReportsLibraryComponent_0, View_SlReportsLibraryComponent_Host_0, SlReportsLibraryComponentNgFactory, RenderType_ReportHeaderComponent, View_ReportHeaderComponent_0, View_ReportHeaderComponent_Host_0, ReportHeaderComponentNgFactory, RenderType_PieChartComponent, View_PieChartComponent_0, View_PieChartComponent_Host_0, PieChartComponentNgFactory, RenderType_BarChartComponent, View_BarChartComponent_0, View_BarChartComponent_Host_0, BarChartComponentNgFactory, RenderType_GenericChartComponent, View_GenericChartComponent_0, View_GenericChartComponent_Host_0, GenericChartComponentNgFactory, RenderType_ScatterChartsComponent, View_ScatterChartsComponent_0, View_ScatterChartsComponent_Host_0, ScatterChartsComponentNgFactory, RenderType_PercentageColumnChartsComponent, View_PercentageColumnChartsComponent_0, View_PercentageColumnChartsComponent_Host_0, PercentageColumnChartsComponentNgFactory, RenderType_MatrixChartComponent, View_MatrixChartComponent_0, View_MatrixChartComponent_Host_0, MatrixChartComponentNgFactory, RenderType_ReportsTextComponent, View_ReportsTextComponent_0, View_ReportsTextComponent_Host_0, ReportsTextComponentNgFactory, RenderType_ExpansionPanelComponent, View_ExpansionPanelComponent_0, View_ExpansionPanelComponent_Host_0, ExpansionPanelComponentNgFactory, RenderType_ExpansionTableComponent, View_ExpansionTableComponent_0, View_ExpansionTableComponent_Host_0, ExpansionTableComponentNgFactory, RenderType_AttachmentsComponent, View_AttachmentsComponent_0, View_AttachmentsComponent_Host_0, AttachmentsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlReportsLibraryModuleNgFactory", function() { return SlReportsLibraryModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SlReportsLibraryComponent", function() { return RenderType_SlReportsLibraryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SlReportsLibraryComponent_0", function() { return View_SlReportsLibraryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SlReportsLibraryComponent_Host_0", function() { return View_SlReportsLibraryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlReportsLibraryComponentNgFactory", function() { return SlReportsLibraryComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReportHeaderComponent", function() { return RenderType_ReportHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportHeaderComponent_0", function() { return View_ReportHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportHeaderComponent_Host_0", function() { return View_ReportHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHeaderComponentNgFactory", function() { return ReportHeaderComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PieChartComponent", function() { return RenderType_PieChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_0", function() { return View_PieChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_Host_0", function() { return View_PieChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponentNgFactory", function() { return PieChartComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BarChartComponent", function() { return RenderType_BarChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_0", function() { return View_BarChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_Host_0", function() { return View_BarChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponentNgFactory", function() { return BarChartComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GenericChartComponent", function() { return RenderType_GenericChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GenericChartComponent_0", function() { return View_GenericChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GenericChartComponent_Host_0", function() { return View_GenericChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericChartComponentNgFactory", function() { return GenericChartComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScatterChartsComponent", function() { return RenderType_ScatterChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScatterChartsComponent_0", function() { return View_ScatterChartsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScatterChartsComponent_Host_0", function() { return View_ScatterChartsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChartsComponentNgFactory", function() { return ScatterChartsComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PercentageColumnChartsComponent", function() { return RenderType_PercentageColumnChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PercentageColumnChartsComponent_0", function() { return View_PercentageColumnChartsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PercentageColumnChartsComponent_Host_0", function() { return View_PercentageColumnChartsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageColumnChartsComponentNgFactory", function() { return PercentageColumnChartsComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatrixChartComponent", function() { return RenderType_MatrixChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatrixChartComponent_0", function() { return View_MatrixChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatrixChartComponent_Host_0", function() { return View_MatrixChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixChartComponentNgFactory", function() { return MatrixChartComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReportsTextComponent", function() { return RenderType_ReportsTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportsTextComponent_0", function() { return View_ReportsTextComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReportsTextComponent_Host_0", function() { return View_ReportsTextComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsTextComponentNgFactory", function() { return ReportsTextComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ExpansionPanelComponent", function() { return RenderType_ExpansionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExpansionPanelComponent_0", function() { return View_ExpansionPanelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExpansionPanelComponent_Host_0", function() { return View_ExpansionPanelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponentNgFactory", function() { return ExpansionPanelComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ExpansionTableComponent", function() { return RenderType_ExpansionTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExpansionTableComponent_0", function() { return View_ExpansionTableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExpansionTableComponent_Host_0", function() { return View_ExpansionTableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionTableComponentNgFactory", function() { return ExpansionTableComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AttachmentsComponent", function() { return RenderType_AttachmentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttachmentsComponent_0", function() { return View_AttachmentsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttachmentsComponent_Host_0", function() { return View_AttachmentsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsComponentNgFactory", function() { return AttachmentsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shikshalokam/sl-reports-library */ "HX6c");
/* harmony import */ var _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "hrfs");







var SlReportsLibraryModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["SlReportsLibraryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵceNgFactory"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵbpNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵbx"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵbx"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPopupConfig"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPopupConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiLocalizationService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiLocalizationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModalService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModalService"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵbx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiTransitionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiTransitionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiMessageModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPaginationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiCollapseModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiAccordionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiCheckboxModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiUtilityModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiUtilityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPopupModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiLocalizationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiLocalizationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDatepickerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDimmerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDimmerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDropdownModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModalModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiProgressModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiRatingModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSearchModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSelectModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSidebarModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiTabsModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["SuiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["SlReportsLibraryModule"], _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["SlReportsLibraryModule"], [])]); });

var styles_SlReportsLibraryComponent = [];
var RenderType_SlReportsLibraryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SlReportsLibraryComponent, data: {} });

function View_SlReportsLibraryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" sl-reports-library works! "]))], null, null); }
function View_SlReportsLibraryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-library", [], null, null, null, View_SlReportsLibraryComponent_0, RenderType_SlReportsLibraryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["SlReportsLibraryComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SlReportsLibraryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-reports-library", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["SlReportsLibraryComponent"], View_SlReportsLibraryComponent_Host_0, {}, {}, []);

var styles_ReportHeaderComponent = [".report-title[_ngcontent-%COMP%]{font-size:22px;color:var(--sb-text);font-family:\"Noto Sans\";line-height:24px;font-weight:500}.report-subtitle[_ngcontent-%COMP%]{font-size:19px;color:var(--sb-search-input-text);font-family:\"Noto Sans\";line-height:24px;font-weight:600}"];
var RenderType_ReportHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ReportHeaderComponent, data: {} });

function View_ReportHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "report-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "span", [["class", "ml-auto sb-last-update-status fnormal sb-color-gray-400 px-10 last-update"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Last Updated on\u00A0: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" \u00A0 ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.lastdate; _ck(_v, 5, 0, currVal_1); }); }
function View_ReportHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-report-header", [], null, null, null, View_ReportHeaderComponent_0, RenderType_ReportHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportHeaderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReportHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-report-header", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportHeaderComponent"], View_ReportHeaderComponent_Host_0, { title: "title", lastdate: "lastdate" }, {}, []);

var styles_PieChartComponent = [".heading[_ngcontent-%COMP%]{text-align:center;padding:15px 10px}.errorMsg[_ngcontent-%COMP%]{color:grey;text-align:center;padding:20px 0}.chart-container[_ngcontent-%COMP%]{height:350px}"];
var RenderType_PieChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_PieChartComponent, data: {} });

function View_PieChartComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "chart-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], { data: [0, "data"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pieChartData; var currVal_1 = _co.pieChartLabels; var currVal_2 = _co.pieChartOptions; var currVal_3 = _co.pieChartType; var currVal_4 = _co.chartColors; var currVal_5 = _co.pieChartLegend; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_PieChartComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data found"]))], null, null); }
function View_PieChartComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.data == null) ? null : ((_co.data.chart == null) ? null : _co.data.chart.data)); _ck(_v, 5, 0, currVal_2); var currVal_3 = !((_co.data == null) ? null : ((_co.data.chart == null) ? null : _co.data.chart.data)); _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.questionNumber; var currVal_1 = ((_co.data == null) ? null : _co.data.question); _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_PieChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { chartRootElement: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, { chartCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pieChartData; _ck(_v, 3, 0, currVal_0); }, null); }
function View_PieChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PieChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-pie-chart", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], View_PieChartComponent_Host_0, { data: "data", questionNumber: "questionNumber" }, {}, []);

var styles_BarChartComponent = [".heading[_ngcontent-%COMP%]{padding:15px 10px;text-align:center}.errorMsg[_ngcontent-%COMP%]{color:grey;text-align:center;padding:20px 0}.bar-chart-wrapper[_ngcontent-%COMP%]{display:block;max-width:900px;max-height:450px;margin:0 auto}"];
var RenderType_BarChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_BarChartComponent, data: {} });

function View_BarChartComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "bar-chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[2, 0], ["chartCanvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"], plugins: [6, "plugins"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.barChartData; var currVal_1 = _co.barChartLabels; var currVal_2 = _co.barChartOptions; var currVal_3 = _co.barChartType; var currVal_4 = _co.chartColors; var currVal_5 = _co.barChartLegend; var currVal_6 = _co.barChartPlugins; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_BarChartComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data found"]))], null, null); }
function View_BarChartComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["chartRootElement", 1]], null, 4, "div", [["class", "graph-filters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BarChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BarChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.data == null) ? null : ((_co.data.chart == null) ? null : _co.data.chart.data)); _ck(_v, 2, 0, currVal_0); var currVal_1 = !((_co.data == null) ? null : ((_co.data.chart == null) ? null : _co.data.chart.data)); _ck(_v, 4, 0, currVal_1); }, null); }
function View_BarChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { chartRootElement: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, { chartCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BarChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.barChartData; _ck(_v, 3, 0, currVal_0); }, null); }
function View_BarChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BarChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-bar-chart", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], View_BarChartComponent_Host_0, { data: "data", questionNumber: "questionNumber" }, {}, []);

var styles_GenericChartComponent = [".graph-content-section[_ngcontent-%COMP%]{padding-bottom:15px!important;background-color:#e9e8d9!important;border-radius:0 0 24px 24px!important;margin-top:0!important;padding-top:5px!important}.chart-conent-section[_ngcontent-%COMP%]{position:relative;z-index:3;margin:15px!important;border:.0625rem solid var(--rc-dddddd);padding:1.5rem;background:#fff;box-shadow:0 .125rem .4375rem 0 rgba(var(--rc-rgba-black),.16);border-radius:24px!important}"];
var RenderType_GenericChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_GenericChartComponent, data: {} });

function View_GenericChartComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-percentage-column-charts", [], null, null, null, View_PercentageColumnChartsComponent_0, RenderType_PercentageColumnChartsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PercentageColumnChartsComponent"], [], { chartData: [0, "chartData"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GenericChartComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-matrix-chart", [], null, null, null, View_MatrixChartComponent_0, RenderType_MatrixChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["MatrixChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GenericChartComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-expansion-table", [], null, null, null, View_ExpansionTableComponent_0, RenderType_ExpansionTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ExpansionTableComponent"], [], { datas: [0, "datas"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GenericChartComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_GenericChartComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_GenericChartComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_GenericChartComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file pdf outline icon"]], null, null, null, null, null))], null, null); }
function View_GenericChartComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "area"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openFile(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.extension == "png"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.$implicit.extension == "jpg"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_v.context.$implicit.extension == "jpeg"); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_v.context.$implicit.extension == "pdf"); _ck(_v, 8, 0, currVal_3); }, null); }
function View_GenericChartComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 25, "div", [["class", "ui segment chart-conent-section"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.responseType); _ck(_v, 2, 0, currVal_0); var currVal_1 = "text"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "number"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "date"; _ck(_v, 8, 0, currVal_3); var currVal_4 = "radio"; _ck(_v, 12, 0, currVal_4); var currVal_5 = "pie"; _ck(_v, 14, 0, currVal_5); var currVal_6 = "bar"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "multiselect"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "column"; _ck(_v, 20, 0, currVal_8); var currVal_9 = "horizontalBar"; _ck(_v, 22, 0, currVal_9); var currVal_10 = "matrix"; _ck(_v, 24, 0, currVal_10); var currVal_11 = "expansion-table"; _ck(_v, 26, 0, currVal_11); var currVal_12 = _v.context.$implicit.evidences; _ck(_v, 28, 0, currVal_12); }, null); }
function View_GenericChartComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "ui bottom p-0 b-0 no-bg my-24 graph-content-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.questionArray); _ck(_v, 3, 0, currVal_0); }, null); }
function View_GenericChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GenericChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.reportSections; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GenericChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-generic-chart", [], null, null, null, View_GenericChartComponent_0, RenderType_GenericChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["GenericChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GenericChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-generic-chart", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["GenericChartComponent"], View_GenericChartComponent_Host_0, { reportSections: "reportSections" }, {}, []);

var styles_ScatterChartsComponent = [""];
var RenderType_ScatterChartsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ScatterChartsComponent, data: {} });

function View_ScatterChartsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["scatter-charts works!"]))], null, null); }
function View_ScatterChartsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-scatter-charts", [], null, null, null, View_ScatterChartsComponent_0, RenderType_ScatterChartsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ScatterChartsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ScatterChartsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-scatter-charts", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ScatterChartsComponent"], View_ScatterChartsComponent_Host_0, {}, {}, []);

var styles_PercentageColumnChartsComponent = [".bar-chart-wrapper[_ngcontent-%COMP%]{display:block;max-width:900px;max-height:450px;margin:0 auto}"];
var RenderType_PercentageColumnChartsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_PercentageColumnChartsComponent, data: {} });

function View_PercentageColumnChartsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["chartCanvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], legend: [4, "legend"], plugins: [5, "plugins"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.barChartData; var currVal_1 = _co.barChartLabels; var currVal_2 = _co.barChartOptions; var currVal_3 = _co.barChartType; var currVal_4 = _co.barChartLegend; var currVal_5 = _co.barChartPlugins; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_PercentageColumnChartsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { chartCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [["chartRootElement", 1]], null, 2, "div", [["class", "graph-filters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PercentageColumnChartsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.chartData == null) ? null : ((_co.chartData.chart == null) ? null : _co.chartData.chart.data)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_PercentageColumnChartsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-percentage-column-charts", [], null, null, null, View_PercentageColumnChartsComponent_0, RenderType_PercentageColumnChartsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PercentageColumnChartsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PercentageColumnChartsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-percentage-column-charts", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PercentageColumnChartsComponent"], View_PercentageColumnChartsComponent_Host_0, { chartData: "chartData" }, {}, []);

var styles_MatrixChartComponent = [".area[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{font-size:40px}.heading[_ngcontent-%COMP%]{padding:15px 10px;text-align:center}.graph-content-section[_ngcontent-%COMP%]{padding-bottom:15px!important;background-color:#c4c3c1!important;border-radius:0 0 24px 24px!important;margin-top:0!important;padding-top:5px!important}.chart-conent-section[_ngcontent-%COMP%]{position:relative;z-index:3;margin:15px!important;border:.0625rem solid var(--rc-dddddd);padding:1.5rem;background:#fff;box-shadow:0 .125rem .4375rem 0 rgba(var(--rc-rgba-black),.16);border-radius:24px!important}"];
var RenderType_MatrixChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_MatrixChartComponent, data: {} });

function View_MatrixChartComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], [], { data: [0, "data"], questionNumber: [1, "questionNumber"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = (_v.parent.context.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_MatrixChartComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_MatrixChartComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_MatrixChartComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file image outline icon"]], null, null, null, null, null))], null, null); }
function View_MatrixChartComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mx-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "file pdf outline icon"]], null, null, null, null, null))], null, null); }
function View_MatrixChartComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "area"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openFile(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.extension == "png"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.$implicit.extension == "jpg"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_v.context.$implicit.extension == "jpeg"); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_v.context.$implicit.extension == "pdf"); _ck(_v, 8, 0, currVal_3); }, null); }
function View_MatrixChartComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 19, "div", [["class", "ui segment chart-conent-section"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.responseType); _ck(_v, 2, 0, currVal_0); var currVal_1 = "text"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "number"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "date"; _ck(_v, 8, 0, currVal_3); var currVal_4 = "radio"; _ck(_v, 12, 0, currVal_4); var currVal_5 = "pie"; _ck(_v, 14, 0, currVal_5); var currVal_6 = "bar"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "multiselect"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "column"; _ck(_v, 20, 0, currVal_8); var currVal_9 = _v.context.$implicit.evidences; _ck(_v, 22, 0, currVal_9); }, null); }
function View_MatrixChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [["class", "ui bottom p-0 b-0 no-bg my-24 graph-content-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatrixChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.data == null) ? null : _co.data.instanceQuestions); _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.questionNumber; var currVal_1 = ((_co.data == null) ? null : _co.data.question); _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_MatrixChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-matrix-chart", [], null, null, null, View_MatrixChartComponent_0, RenderType_MatrixChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["MatrixChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MatrixChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-matrix-chart", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["MatrixChartComponent"], View_MatrixChartComponent_Host_0, { data: "data", questionNumber: "questionNumber" }, { allEvidence: "allEvidence" }, []);

var styles_ReportsTextComponent = [".heading[_ngcontent-%COMP%]{text-align:center;padding:15px 10px}.answer-list[_ngcontent-%COMP%]{margin-top:3px;border-top:1px solid #ccc!important}"];
var RenderType_ReportsTextComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ReportsTextComponent, data: {} });

function View_ReportsTextComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((((_co.data == null) ? null : _co.data.resposeType) === "date") && _v.context.$implicit) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), _v.context.$implicit, "medium", "IST")) : _v.context.$implicit); _ck(_v, 1, 0, currVal_0); }); }
function View_ReportsTextComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ") ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["class", "answer-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ReportsTextComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.data == null) ? null : _co.data.answers); _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.questionNumber; var currVal_1 = ((_co.data == null) ? null : _co.data.question); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ReportsTextComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-reports-text", [], null, null, null, View_ReportsTextComponent_0, RenderType_ReportsTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReportsTextComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-reports-text", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ReportsTextComponent"], View_ReportsTextComponent_Host_0, { data: "data", questionNumber: "questionNumber" }, {}, []);

var styles_ExpansionPanelComponent = ["table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;background:#fff;color:var(--sb-text)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center;padding:12px 4px;color:#000}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.expansionPanel[_ngcontent-%COMP%]{border-radius:10px;width:100%;margin:16px 0!important;padding:0!important}.assess[_ngcontent-%COMP%]{flex:0;text-align:-webkit-center}.heading[_ngcontent-%COMP%]{padding:15px 10px;text-align:center}.domain[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:3px;border:1px solig;color:var(--sb-text)}.drop-accordian[_ngcontent-%COMP%]{margin-bottom:4px}"];
var RenderType_ExpansionPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ExpansionPanelComponent, data: {} });

function View_ExpansionPanelComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "tr", [["class", "domain _noWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [["style", "flex: 1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "td", [["class", "_flex-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [": ", ""]))], null, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.name); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.level); _ck(_v, 4, 0, currVal_1); }); }
function View_ExpansionPanelComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "sui-accordion", [["class", "styled fluid sb-accordion sb-new-theme-accordion drop-accordian"]], [[2, "ui", null], [2, "accordion", null]], null, null, _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵh_0"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵh"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1097728, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _panels: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 9, "sui-accordion-panel", [], null, null, null, _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵg_0"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵg"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, [[1, 4]], 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵg"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { isOpen: [0, "isOpen"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 3, "div", [["class", "sb-accordion-title fsmall d-flex flex-ai-center flex-jc-space-between"], ["title", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "chevron down icon"], ["role", "img"], ["title", "expand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 1, 3, "div", [["class", "sb-accordion-content sb-bg-color-white pt-0 pb-8"], ["content", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = false; _ck(_v, 4, 0, currVal_2); var currVal_4 = _v.context.$implicit.criterias; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).hasClasses; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).hasClasses; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.domainName); _ck(_v, 7, 0, currVal_3); }); }
function View_ExpansionPanelComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.domains); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.entityName; _ck(_v, 2, 0, currVal_0); }); }
function View_ExpansionPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.datas == null) ? null : ((_co.datas.chart == null) ? null : _co.datas.chart.entities)); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.datas == null) ? null : ((_co.datas.chart == null) ? null : _co.datas.chart.title)); _ck(_v, 2, 0, currVal_0); }); }
function View_ExpansionPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.datas == null) ? null : _co.datas.chart); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ExpansionPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-expansion-panel", [], null, null, null, View_ExpansionPanelComponent_0, RenderType_ExpansionPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ExpansionPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-expansion-panel", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelComponent"], View_ExpansionPanelComponent_Host_0, { datas: "datas" }, {}, []);

var styles_ExpansionTableComponent = ["table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;background:#fff;color:var(--sb-text)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center;padding:12px 4px;color:#000}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.expansionPanel[_ngcontent-%COMP%]{border-radius:10px;width:100%;margin:16px 0!important;padding:0!important}.assess[_ngcontent-%COMP%]{flex:0;text-align:-webkit-center}.heading[_ngcontent-%COMP%]{padding:15px 10px;text-align:center}.domain[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:3px;border:1px solig;color:var(--sb-text)}.drop-accordian[_ngcontent-%COMP%]{margin-bottom:4px}"];
var RenderType_ExpansionTableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ExpansionTableComponent, data: {} });

function View_ExpansionTableComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "td", [["class", "assess"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_ExpansionTableComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "td", [["class", "_flex-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.level); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.score); _ck(_v, 4, 0, currVal_1); }); }
function View_ExpansionTableComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "tr", [["class", "_flex-box _justify-content-space-between _noWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [["class", "ion-text-wrap"], ["style", "flex: 1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionTableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.levelsWithScores); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.name); _ck(_v, 2, 0, currVal_0); }); }
function View_ExpansionTableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "sui-accordion", [["class", "styled fluid sb-accordion sb-new-theme-accordion drop-accordian"]], [[2, "ui", null], [2, "accordion", null]], null, null, _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵh_0"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵh"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1097728, null, 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _panels: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 13, "sui-accordion-panel", [], null, null, null, _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵg_0"], _ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵg"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, [[1, 4]], 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_5__["ɵg"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { isOpen: [0, "isOpen"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 3, "div", [["class", "sb-accordion-title fsmall d-flex flex-ai-center flex-jc-space-between"], ["title", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "chevron down icon"], ["role", "img"], ["title", "expand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 1, 7, "div", [["class", "sb-accordion-content sb-bg-color-white pt-0 pb-8"], ["content", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 6, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "tr", [["class", "_flex-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "td", [["style", "flex: 1"], ["text-wrap", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionTableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionTableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = false; _ck(_v, 4, 0, currVal_2); var currVal_4 = ((_co.datas == null) ? null : ((_co.datas.chart == null) ? null : _co.datas.chart.heading)); _ck(_v, 14, 0, currVal_4); var currVal_5 = _v.context.$implicit.criterias; _ck(_v, 16, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).hasClasses; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).hasClasses; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.domainName); _ck(_v, 7, 0, currVal_3); }); }
function View_ExpansionTableComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionTableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.datas == null) ? null : ((_co.datas.chart == null) ? null : _co.datas.chart.domains)); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.datas == null) ? null : ((_co.datas.chart == null) ? null : _co.datas.chart.title)); _ck(_v, 2, 0, currVal_0); }); }
function View_ExpansionTableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionTableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.datas == null) ? null : _co.datas.chart); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ExpansionTableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-expansion-table", [], null, null, null, View_ExpansionTableComponent_0, RenderType_ExpansionTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ExpansionTableComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ExpansionTableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-expansion-table", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["ExpansionTableComponent"], View_ExpansionTableComponent_Host_0, { datas: "datas" }, {}, []);

var styles_AttachmentsComponent = [".attachmentIcon[_ngcontent-%COMP%]{margin-top:10px;font-size:70px}.thumbnail-card[_ngcontent-%COMP%]{height:98px;display:inline;justify-content:space-around;align-items:center}.card-images[_ngcontent-%COMP%]{width:90px;height:90px;margin-right:2px;margin-bottom:2px;border-radius:10px}"];
var RenderType_AttachmentsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_AttachmentsComponent, data: {} });

function View_AttachmentsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["class", "card-images"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.url; _ck(_v, 0, 0, currVal_0); }); }
function View_AttachmentsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "video icon attachmentIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AttachmentsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "file audio icon attachmentIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AttachmentsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "file alternate icon attachmentIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AttachmentsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "file alternate icon attachmentIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AttachmentsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "div", [["class", "thumbnail-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AttachmentsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AttachmentsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AttachmentsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AttachmentsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AttachmentsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imageFormats.includes(_co.extension); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.videoFormats.includes(_co.extension); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.audioFormats.includes(_co.extension); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.pdfFormats.includes(_co.extension); _ck(_v, 8, 0, currVal_3); var currVal_4 = (_co.spreadSheetFormats.includes(_co.extension) || _co.wordFormats.includes(_co.extension)); _ck(_v, 10, 0, currVal_4); }, null); }
function View_AttachmentsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sl-attachments", [], null, null, null, View_AttachmentsComponent_0, RenderType_AttachmentsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["AttachmentsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AttachmentsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sl-attachments", _shikshalokam_sl_reports_library__WEBPACK_IMPORTED_MODULE_1__["AttachmentsComponent"], View_AttachmentsComponent_Host_0, { url: "url", extension: "extension" }, {}, []);



/***/ }),

/***/ "pCwN":
/*!*************************************************!*\
  !*** ./src/app/modules/report/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
var ReportModule = (function () {
    function ReportModule() {
    }
    return ReportModule;
}());



/***/ }),

/***/ "qPKA":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-view/report-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportViewComponent", function() { return ReportViewComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
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







var ReportViewComponent = (function () {
    function ReportViewComponent(dhitiService, config, layoutService, location, resourceService, routerParam, cdref, toasterService, locations, navigationhelperService) {
        var _this = this;
        this.dhitiService = dhitiService;
        this.layoutService = layoutService;
        this.location = location;
        this.resourceService = resourceService;
        this.routerParam = routerParam;
        this.cdref = cdref;
        this.toasterService = toasterService;
        this.locations = locations;
        this.navigationhelperService = navigationhelperService;
        this.state = {};
        this.showComponent = true;
        this.segmentfilter = false;
        this.filterModal = false;
        this.selectedListCount = 0;
        this.name = ['filter'];
        this.filteredData = [];
        this.active = [];
        this.tabs = [
            { header: this.resourceService.frmelmnts.lbl.question },
        ];
        this.noResult = false;
        this.showLoader = true;
        this.showPdf = false;
        this.showEvidence = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.config = config;
        this.locations.onPopState(function () {
            _this.modal.deny();
        });
        this.routerParam.queryParams.subscribe(function (data) {
            _this.state['entityId'] = data.entityId;
            _this.state['observationId'] = data.observationId;
            _this.state['entityType'] = data.entityType;
            _this.state['solutionId'] = data.solutionId;
            if (data.filter) {
                _this.state['filter'] = { questionId: [] };
                _this.state['criteriaWise'] = false;
            }
            data.scores == 'true'
                ? (_this.state['scores'] = true)
                : (_this.state['scores'] = false);
            data.observation == 'true'
                ? (_this.state['observation'] = true)
                : (_this.state['observation'] = false);
        });
    }
    ReportViewComponent.prototype.ngAfterViewChecked = function () {
        this.cdref.detectChanges();
    };
    ReportViewComponent.prototype.ngOnInit = function () {
        this.initLayout();
        this.noResultMessage = {
            messageText: 'messages.stmsg.reportNotReady',
        };
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        this.segmentValue = 'Questions';
        this.state['pdf'] = false;
        this.getReport();
    };
    ReportViewComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ReportViewComponent.prototype.getReport = function () {
        var _this = this;
        this.state = lodash_es__WEBPACK_IMPORTED_MODULE_4__["omitBy"](this.state, lodash_es__WEBPACK_IMPORTED_MODULE_4__["isNil"]);
        this.error = null;
        var config = {
            url: this.config.urlConFig.URLS.DHITI.GENERIC_REPORTS,
            data: this.state,
        };
        this.dhitiService.post(config).subscribe(function (success) {
            if (success.result === true && success.reportSections) {
                _this.data = success;
                _this.reportSections = _this.filterBySegment();
                if (_this.data.filters && !_this.filters) {
                    _this.filters = _this.data.filters;
                }
                if (_this.data.filters) {
                    var modalFilter_1 = _this.data.filters.filter(function (filter) { return filter.filter.type == 'modal'; })[0];
                    _this.filters = _this.filters.map(function (filter) {
                        if (filter.filter.type == 'modal') {
                            filter = modalFilter_1;
                        }
                        return filter;
                    });
                }
            }
            else {
                _this.noResult = true;
                _this.showLoader = false;
            }
            _this.filters.forEach(function (element) {
                if (element.filter.type == 'segment') {
                    if (_this.tabs.length == 1) {
                        _this.active.push(true);
                        _this.tabs.push({
                            header: _this.resourceService.frmelmnts.lbl.criteria,
                        });
                    }
                    _this.segmentfilter = true;
                }
            });
            _this.showLoader = false;
        }, function (err) {
            _this.reportSections = [];
            _this.error = err;
            if (!_this.error.result) {
                _this.noResult = true;
                _this.showLoader = false;
            }
        });
    };
    ReportViewComponent.prototype.gotoSolutionListPage = function () {
        this.location.back();
    };
    ReportViewComponent.prototype.filterBySegment = function () {
        if (this.segmentValue == 'Questions') {
            var reportSections = [{ questionArray: this.data.reportSections }];
            return reportSections;
        }
        return this.data.reportSections;
    };
    ReportViewComponent.prototype.getData = function (element) {
        var data = {
            values: element.chart.data.datasets[0].data,
        };
        return data;
    };
    ReportViewComponent.prototype.getconfig = function (element) {
        var config = {
            labels: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'chart.data.labels'),
            datasets: [{ data: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'chart.data.datasets[0].data'), label: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'chart.data.labels[0]') }],
            options: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'chart.options'),
            colors: [
                { backgroundColor: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'chart.data.datasets[0].backgroundColor') },
            ]
        };
        return config;
    };
    ReportViewComponent.prototype.handleParameterChange = function (event) {
        this.state['submissionId'] = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](event, 'value._id');
        this.getReport();
    };
    ReportViewComponent.prototype.segmentChanged = function (segment) {
        segment === 'Criteria'
            ? (this.state.criteriaWise = true)
            : (this.state.criteriaWise = false);
        this.state.filter = null;
        this.modalFilterData = null;
        this.segmentValue = segment;
        this.getReport();
    };
    ReportViewComponent.prototype.openFile = function (file) {
        window.open(file.url, '_blank');
    };
    ReportViewComponent.prototype.filterModalPopup = function (data, keyToSend) {
        this.key = keyToSend;
        this.modalFilterData ? null : (this.modalFilterData = data);
        var filteredData;
        if (this.state.filter && this.state.filter.length) {
            filteredData = this.state.filter[keyToSend];
        }
        else {
            filteredData = data.map(function (d) { return d._id; });
        }
        this.state.criteriaWise ? 'criteria' : 'question';
        this.filteredData = filteredData;
        this.selectedListCount = this.modalFilterData.length;
        this.filterModal = true;
    };
    ReportViewComponent.prototype.closeModal = function () {
        this.filterModal = false;
    };
    ReportViewComponent.prototype.onQuestionClick = function (id) {
        if (this.filteredData.includes(id)) {
            var indexOfQuestion = this.filteredData.indexOf(id);
            this.filteredData.splice(indexOfQuestion, 1);
        }
        else {
            this.filteredData.push(id);
        }
    };
    ReportViewComponent.prototype.applyFilter = function () {
        if (!this.filteredData.length) {
            var msgData = this.segmentValue == 'Questions'
                ? 'messages.smsg.selectquestions'
                : 'messages.smsg.selectcriteria';
            this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.resourceService, msgData));
        }
        else {
            this.state.filter = {};
            this.state.filter[this.key] = this.filteredData;
            this.getReport();
            this.filterModal = false;
        }
    };
    ReportViewComponent.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.callApi()];
                    case 1:
                        url = _a.sent();
                        window.location.href = url;
                        return [2];
                }
            });
        });
    };
    ReportViewComponent.prototype.callApi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var payload = Object.assign({}, _this.state, { pdf: true });
            var config = {
                url: _this.config.urlConFig.URLS.DHITI.GENERIC_REPORTS,
                data: payload,
            };
            _this.dhitiService.post(config).subscribe(function (res) {
                if (res.status != 'success' && !res.pdfUrl) {
                    reject();
                }
                resolve(res.pdfUrl);
            });
        });
    };
    ReportViewComponent.prototype.getAllEvidence = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                this.questionId = element.order;
                payload = {
                    submissionId: this.state.submissionId,
                    observationId: this.state.observationId,
                    entityId: this.state.entityId,
                    questionId: element.order,
                    entityType: this.state.entityType,
                    solutionId: this.state.solutionId,
                };
                this.evidenceParam = payload;
                this.showEvidence = true;
                return [2];
            });
        });
    };
    ReportViewComponent.prototype.modalClose = function (event) {
        this.showEvidence = false;
    };
    ReportViewComponent.prototype.selectedTabChange = function (event) {
        var tabHeader = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](event, 'tab.textLabel').tabHeader;
        tabHeader && this.segmentChanged(tabHeader);
    };
    ReportViewComponent.prototype.goBack = function () {
        this.navigationhelperService.goBack();
    };
    return ReportViewComponent;
}());



/***/ }),

/***/ "qb46":
/*!**********************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! chart.js */ "MO+k")) : undefined;
})(this, function (Chart) {
  'use strict';

  Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;
  var helpers = Chart.helpers;

  var devicePixelRatio = function () {
    if (typeof window !== 'undefined') {
      if (window.devicePixelRatio) {
        return window.devicePixelRatio;
      } // devicePixelRatio is undefined on IE10
      // https://stackoverflow.com/a/20204180/8837887
      // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85


      var screen = window.screen;

      if (screen) {
        return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
      }
    }

    return 1;
  }();

  var utils = {
    // @todo move this in Chart.helpers.toTextLines
    toTextLines: function toTextLines(inputs) {
      var lines = [];
      var input;
      inputs = [].concat(inputs);

      while (inputs.length) {
        input = inputs.pop();

        if (typeof input === 'string') {
          lines.unshift.apply(lines, input.split('\n'));
        } else if (Array.isArray(input)) {
          inputs.push.apply(inputs, input);
        } else if (!helpers.isNullOrUndef(inputs)) {
          lines.unshift('' + input);
        }
      }

      return lines;
    },
    // @todo move this method in Chart.helpers.canvas.toFont (deprecates helpers.fontString)
    // @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
    toFontString: function toFontString(font) {
      if (!font || helpers.isNullOrUndef(font.size) || helpers.isNullOrUndef(font.family)) {
        return null;
      }

      return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
    },
    // @todo move this in Chart.helpers.canvas.textSize
    // @todo cache calls of measureText if font doesn't change?!
    textSize: function textSize(ctx, lines, font) {
      var items = [].concat(lines);
      var ilen = items.length;
      var prev = ctx.font;
      var width = 0;
      var i;
      ctx.font = font.string;

      for (i = 0; i < ilen; ++i) {
        width = Math.max(ctx.measureText(items[i]).width, width);
      }

      ctx.font = prev;
      return {
        height: ilen * font.lineHeight,
        width: width
      };
    },
    // @todo move this method in Chart.helpers.options.toFont
    parseFont: function parseFont(value) {
      var global = Chart.defaults.global;
      var size = helpers.valueOrDefault(value.size, global.defaultFontSize);
      var font = {
        family: helpers.valueOrDefault(value.family, global.defaultFontFamily),
        lineHeight: helpers.options.toLineHeight(value.lineHeight, size),
        size: size,
        style: helpers.valueOrDefault(value.style, global.defaultFontStyle),
        weight: helpers.valueOrDefault(value.weight, null),
        string: ''
      };
      font.string = utils.toFontString(font);
      return font;
    },

    /**
     * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
     * @todo move this method in Chart.helpers.bound
     * https://doc.qt.io/qt-5/qtglobal.html#qBound
     */
    bound: function bound(min, value, max) {
      return Math.max(min, Math.min(value, max));
    },

    /**
     * Returns an array of pair [value, state] where state is:
     * * -1: value is only in a0 (removed)
     * *  1: value is only in a1 (added)
     */
    arrayDiff: function arrayDiff(a0, a1) {
      var prev = a0.slice();
      var updates = [];
      var i, j, ilen, v;

      for (i = 0, ilen = a1.length; i < ilen; ++i) {
        v = a1[i];
        j = prev.indexOf(v);

        if (j === -1) {
          updates.push([v, 1]);
        } else {
          prev.splice(j, 1);
        }
      }

      for (i = 0, ilen = prev.length; i < ilen; ++i) {
        updates.push([prev[i], -1]);
      }

      return updates;
    },

    /**
     * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
     */
    rasterize: function rasterize(v) {
      return Math.round(v * devicePixelRatio) / devicePixelRatio;
    }
  };

  function orient(point, origin) {
    var x0 = origin.x;
    var y0 = origin.y;

    if (x0 === null) {
      return {
        x: 0,
        y: -1
      };
    }

    if (y0 === null) {
      return {
        x: 1,
        y: 0
      };
    }

    var dx = point.x - x0;
    var dy = point.y - y0;
    var ln = Math.sqrt(dx * dx + dy * dy);
    return {
      x: ln ? dx / ln : 0,
      y: ln ? dy / ln : -1
    };
  }

  function aligned(x, y, vx, vy, align) {
    switch (align) {
      case 'center':
        vx = vy = 0;
        break;

      case 'bottom':
        vx = 0;
        vy = 1;
        break;

      case 'right':
        vx = 1;
        vy = 0;
        break;

      case 'left':
        vx = -1;
        vy = 0;
        break;

      case 'top':
        vx = 0;
        vy = -1;
        break;

      case 'start':
        vx = -vx;
        vy = -vy;
        break;

      case 'end':
        // keep natural orientation
        break;

      default:
        // clockwise rotation (in degree)
        align *= Math.PI / 180;
        vx = Math.cos(align);
        vy = Math.sin(align);
        break;
    }

    return {
      x: x,
      y: y,
      vx: vx,
      vy: vy
    };
  } // Line clipping (Cohen–Sutherland algorithm)
  // https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm


  var R_INSIDE = 0;
  var R_LEFT = 1;
  var R_RIGHT = 2;
  var R_BOTTOM = 4;
  var R_TOP = 8;

  function region(x, y, rect) {
    var res = R_INSIDE;

    if (x < rect.left) {
      res |= R_LEFT;
    } else if (x > rect.right) {
      res |= R_RIGHT;
    }

    if (y < rect.top) {
      res |= R_TOP;
    } else if (y > rect.bottom) {
      res |= R_BOTTOM;
    }

    return res;
  }

  function clipped(segment, area) {
    var x0 = segment.x0;
    var y0 = segment.y0;
    var x1 = segment.x1;
    var y1 = segment.y1;
    var r0 = region(x0, y0, area);
    var r1 = region(x1, y1, area);
    var r, x, y; // eslint-disable-next-line no-constant-condition

    while (true) {
      if (!(r0 | r1) || r0 & r1) {
        // both points inside or on the same side: no clipping
        break;
      } // at least one point is outside


      r = r0 || r1;

      if (r & R_TOP) {
        x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
        y = area.top;
      } else if (r & R_BOTTOM) {
        x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
        y = area.bottom;
      } else if (r & R_RIGHT) {
        y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
        x = area.right;
      } else if (r & R_LEFT) {
        y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
        x = area.left;
      }

      if (r === r0) {
        x0 = x;
        y0 = y;
        r0 = region(x0, y0, area);
      } else {
        x1 = x;
        y1 = y;
        r1 = region(x1, y1, area);
      }
    }

    return {
      x0: x0,
      x1: x1,
      y0: y0,
      y1: y1
    };
  }

  function compute(range, config) {
    var anchor = config.anchor;
    var segment = range;
    var x, y;

    if (config.clamp) {
      segment = clipped(segment, config.area);
    }

    if (anchor === 'start') {
      x = segment.x0;
      y = segment.y0;
    } else if (anchor === 'end') {
      x = segment.x1;
      y = segment.y1;
    } else {
      x = (segment.x0 + segment.x1) / 2;
      y = (segment.y0 + segment.y1) / 2;
    }

    return aligned(x, y, range.vx, range.vy, config.align);
  }

  var positioners = {
    arc: function arc(vm, config) {
      var angle = (vm.startAngle + vm.endAngle) / 2;
      var vx = Math.cos(angle);
      var vy = Math.sin(angle);
      var r0 = vm.innerRadius;
      var r1 = vm.outerRadius;
      return compute({
        x0: vm.x + vx * r0,
        y0: vm.y + vy * r0,
        x1: vm.x + vx * r1,
        y1: vm.y + vy * r1,
        vx: vx,
        vy: vy
      }, config);
    },
    point: function point(vm, config) {
      var v = orient(vm, config.origin);
      var rx = v.x * vm.radius;
      var ry = v.y * vm.radius;
      return compute({
        x0: vm.x - rx,
        y0: vm.y - ry,
        x1: vm.x + rx,
        y1: vm.y + ry,
        vx: v.x,
        vy: v.y
      }, config);
    },
    rect: function rect(vm, config) {
      var v = orient(vm, config.origin);
      var x = vm.x;
      var y = vm.y;
      var sx = 0;
      var sy = 0;

      if (vm.horizontal) {
        x = Math.min(vm.x, vm.base);
        sx = Math.abs(vm.base - vm.x);
      } else {
        y = Math.min(vm.y, vm.base);
        sy = Math.abs(vm.base - vm.y);
      }

      return compute({
        x0: x,
        y0: y + sy,
        x1: x + sx,
        y1: y,
        vx: v.x,
        vy: v.y
      }, config);
    },
    fallback: function fallback(vm, config) {
      var v = orient(vm, config.origin);
      return compute({
        x0: vm.x,
        y0: vm.y,
        x1: vm.x,
        y1: vm.y,
        vx: v.x,
        vy: v.y
      }, config);
    }
  };
  var helpers$1 = Chart.helpers;
  var rasterize = utils.rasterize;

  function boundingRects(model) {
    var borderWidth = model.borderWidth || 0;
    var padding = model.padding;
    var th = model.size.height;
    var tw = model.size.width;
    var tx = -tw / 2;
    var ty = -th / 2;
    return {
      frame: {
        x: tx - padding.left - borderWidth,
        y: ty - padding.top - borderWidth,
        w: tw + padding.width + borderWidth * 2,
        h: th + padding.height + borderWidth * 2
      },
      text: {
        x: tx,
        y: ty,
        w: tw,
        h: th
      }
    };
  }

  function getScaleOrigin(el) {
    var horizontal = el._model.horizontal;
    var scale = el._scale || horizontal && el._xScale || el._yScale;

    if (!scale) {
      return null;
    }

    if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
      return {
        x: scale.xCenter,
        y: scale.yCenter
      };
    }

    var pixel = scale.getBasePixel();
    return horizontal ? {
      x: pixel,
      y: null
    } : {
      x: null,
      y: pixel
    };
  }

  function getPositioner(el) {
    if (el instanceof Chart.elements.Arc) {
      return positioners.arc;
    }

    if (el instanceof Chart.elements.Point) {
      return positioners.point;
    }

    if (el instanceof Chart.elements.Rectangle) {
      return positioners.rect;
    }

    return positioners.fallback;
  }

  function drawFrame(ctx, rect, model) {
    var bgColor = model.backgroundColor;
    var borderColor = model.borderColor;
    var borderWidth = model.borderWidth;

    if (!bgColor && (!borderColor || !borderWidth)) {
      return;
    }

    ctx.beginPath();
    helpers$1.canvas.roundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
    ctx.closePath();

    if (bgColor) {
      ctx.fillStyle = bgColor;
      ctx.fill();
    }

    if (borderColor && borderWidth) {
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.lineJoin = 'miter';
      ctx.stroke();
    }
  }

  function textGeometry(rect, align, font) {
    var h = font.lineHeight;
    var w = rect.w;
    var x = rect.x;
    var y = rect.y + h / 2;

    if (align === 'center') {
      x += w / 2;
    } else if (align === 'end' || align === 'right') {
      x += w;
    }

    return {
      h: h,
      w: w,
      x: x,
      y: y
    };
  }

  function drawTextLine(ctx, text, cfg) {
    var shadow = ctx.shadowBlur;
    var stroked = cfg.stroked;
    var x = rasterize(cfg.x);
    var y = rasterize(cfg.y);
    var w = rasterize(cfg.w);

    if (stroked) {
      ctx.strokeText(text, x, y, w);
    }

    if (cfg.filled) {
      if (shadow && stroked) {
        // Prevent drawing shadow on both the text stroke and fill, so
        // if the text is stroked, remove the shadow for the text fill.
        ctx.shadowBlur = 0;
      }

      ctx.fillText(text, x, y, w);

      if (shadow && stroked) {
        ctx.shadowBlur = shadow;
      }
    }
  }

  function drawText(ctx, lines, rect, model) {
    var align = model.textAlign;
    var color = model.color;
    var filled = !!color;
    var font = model.font;
    var ilen = lines.length;
    var strokeColor = model.textStrokeColor;
    var strokeWidth = model.textStrokeWidth;
    var stroked = strokeColor && strokeWidth;
    var i;

    if (!ilen || !filled && !stroked) {
      return;
    } // Adjust coordinates based on text alignment and line height


    rect = textGeometry(rect, align, font);
    ctx.font = font.string;
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = model.textShadowBlur;
    ctx.shadowColor = model.textShadowColor;

    if (filled) {
      ctx.fillStyle = color;
    }

    if (stroked) {
      ctx.lineJoin = 'round';
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeColor;
    }

    for (i = 0, ilen = lines.length; i < ilen; ++i) {
      drawTextLine(ctx, lines[i], {
        stroked: stroked,
        filled: filled,
        w: rect.w,
        x: rect.x,
        y: rect.y + rect.h * i
      });
    }
  }

  var Label = function Label(config, ctx, el, index) {
    var me = this;
    me._config = config;
    me._index = index;
    me._model = null;
    me._rects = null;
    me._ctx = ctx;
    me._el = el;
  };

  helpers$1.extend(Label.prototype, {
    /**
     * @private
     */
    _modelize: function _modelize(display, lines, config, context) {
      var me = this;
      var index = me._index;
      var resolve = helpers$1.options.resolve;
      var font = utils.parseFont(resolve([config.font, {}], context, index));
      var color = resolve([config.color, Chart.defaults.global.defaultFontColor], context, index);
      return {
        align: resolve([config.align, 'center'], context, index),
        anchor: resolve([config.anchor, 'center'], context, index),
        area: context.chart.chartArea,
        backgroundColor: resolve([config.backgroundColor, null], context, index),
        borderColor: resolve([config.borderColor, null], context, index),
        borderRadius: resolve([config.borderRadius, 0], context, index),
        borderWidth: resolve([config.borderWidth, 0], context, index),
        clamp: resolve([config.clamp, false], context, index),
        clip: resolve([config.clip, false], context, index),
        color: color,
        display: display,
        font: font,
        lines: lines,
        offset: resolve([config.offset, 0], context, index),
        opacity: resolve([config.opacity, 1], context, index),
        origin: getScaleOrigin(me._el),
        padding: helpers$1.options.toPadding(resolve([config.padding, 0], context, index)),
        positioner: getPositioner(me._el),
        rotation: resolve([config.rotation, 0], context, index) * (Math.PI / 180),
        size: utils.textSize(me._ctx, lines, font),
        textAlign: resolve([config.textAlign, 'start'], context, index),
        textShadowBlur: resolve([config.textShadowBlur, 0], context, index),
        textShadowColor: resolve([config.textShadowColor, color], context, index),
        textStrokeColor: resolve([config.textStrokeColor, color], context, index),
        textStrokeWidth: resolve([config.textStrokeWidth, 0], context, index)
      };
    },
    update: function update(context) {
      var me = this;
      var model = null;
      var rects = null;
      var index = me._index;
      var config = me._config;
      var value, label, lines; // We first resolve the display option (separately) to avoid computing
      // other options in case the label is hidden (i.e. display: false).

      var display = helpers$1.options.resolve([config.display, true], context, index);

      if (display) {
        value = context.dataset.data[index];
        label = helpers$1.valueOrDefault(helpers$1.callback(config.formatter, [value, context]), value);
        lines = helpers$1.isNullOrUndef(label) ? [] : utils.toTextLines(label);

        if (lines.length) {
          model = me._modelize(display, lines, config, context);
          rects = boundingRects(model);
        }
      }

      me._model = model;
      me._rects = rects;
    },
    geometry: function geometry() {
      return this._rects ? this._rects.frame : {};
    },
    rotation: function rotation() {
      return this._model ? this._model.rotation : 0;
    },
    visible: function visible() {
      return this._model && this._model.opacity;
    },
    model: function model() {
      return this._model;
    },
    draw: function draw(chart, center) {
      var me = this;
      var ctx = chart.ctx;
      var model = me._model;
      var rects = me._rects;
      var area;

      if (!this.visible()) {
        return;
      }

      ctx.save();

      if (model.clip) {
        area = model.area;
        ctx.beginPath();
        ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
        ctx.clip();
      }

      ctx.globalAlpha = utils.bound(0, model.opacity, 1);
      ctx.translate(rasterize(center.x), rasterize(center.y));
      ctx.rotate(model.rotation);
      drawFrame(ctx, rects.frame, model);
      drawText(ctx, model.lines, rects.text, model);
      ctx.restore();
    }
  });
  var helpers$2 = Chart.helpers;
  var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger

  var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

  function rotated(point, center, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var cx = center.x;
    var cy = center.y;
    return {
      x: cx + cos * (point.x - cx) - sin * (point.y - cy),
      y: cy + sin * (point.x - cx) + cos * (point.y - cy)
    };
  }

  function projected(points, axis) {
    var min = MAX_INTEGER;
    var max = MIN_INTEGER;
    var origin = axis.origin;
    var i, pt, vx, vy, dp;

    for (i = 0; i < points.length; ++i) {
      pt = points[i];
      vx = pt.x - origin.x;
      vy = pt.y - origin.y;
      dp = axis.vx * vx + axis.vy * vy;
      min = Math.min(min, dp);
      max = Math.max(max, dp);
    }

    return {
      min: min,
      max: max
    };
  }

  function toAxis(p0, p1) {
    var vx = p1.x - p0.x;
    var vy = p1.y - p0.y;
    var ln = Math.sqrt(vx * vx + vy * vy);
    return {
      vx: (p1.x - p0.x) / ln,
      vy: (p1.y - p0.y) / ln,
      origin: p0,
      ln: ln
    };
  }

  var HitBox = function HitBox() {
    this._rotation = 0;
    this._rect = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
  };

  helpers$2.extend(HitBox.prototype, {
    center: function center() {
      var r = this._rect;
      return {
        x: r.x + r.w / 2,
        y: r.y + r.h / 2
      };
    },
    update: function update(center, rect, rotation) {
      this._rotation = rotation;
      this._rect = {
        x: rect.x + center.x,
        y: rect.y + center.y,
        w: rect.w,
        h: rect.h
      };
    },
    contains: function contains(point) {
      var me = this;
      var margin = 1;
      var rect = me._rect;
      point = rotated(point, me.center(), -me._rotation);
      return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
    },
    // Separating Axis Theorem
    // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
    intersects: function intersects(other) {
      var r0 = this._points();

      var r1 = other._points();

      var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
      var i, pr0, pr1;

      if (this._rotation !== other._rotation) {
        // Only separate with r1 axis if the rotation is different,
        // else it's enough to separate r0 and r1 with r0 axis only!
        axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
      }

      for (i = 0; i < axes.length; ++i) {
        pr0 = projected(r0, axes[i]);
        pr1 = projected(r1, axes[i]);

        if (pr0.max < pr1.min || pr1.max < pr0.min) {
          return false;
        }
      }

      return true;
    },

    /**
     * @private
     */
    _points: function _points() {
      var me = this;
      var rect = me._rect;
      var angle = me._rotation;
      var center = me.center();
      return [rotated({
        x: rect.x,
        y: rect.y
      }, center, angle), rotated({
        x: rect.x + rect.w,
        y: rect.y
      }, center, angle), rotated({
        x: rect.x + rect.w,
        y: rect.y + rect.h
      }, center, angle), rotated({
        x: rect.x,
        y: rect.y + rect.h
      }, center, angle)];
    }
  });

  function coordinates(view, model, geometry) {
    var point = model.positioner(view, model);
    var vx = point.vx;
    var vy = point.vy;

    if (!vx && !vy) {
      // if aligned center, we don't want to offset the center point
      return {
        x: point.x,
        y: point.y
      };
    }

    var w = geometry.w;
    var h = geometry.h; // take in account the label rotation

    var rotation = model.rotation;
    var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
    var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation)); // scale the unit vector (vx, vy) to get at least dx or dy equal to
    // w or h respectively (else we would calculate the distance to the
    // ellipse inscribed in the bounding rect)

    var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
    dx *= vx * vs;
    dy *= vy * vs; // finally, include the explicit offset

    dx += model.offset * vx;
    dy += model.offset * vy;
    return {
      x: point.x + dx,
      y: point.y + dy
    };
  }

  function collide(labels, collider) {
    var i, j, s0, s1; // IMPORTANT Iterate in the reverse order since items at the end of the
    // list have an higher weight/priority and thus should be less impacted
    // by the overlapping strategy.

    for (i = labels.length - 1; i >= 0; --i) {
      s0 = labels[i].$layout;

      for (j = i - 1; j >= 0 && s0._visible; --j) {
        s1 = labels[j].$layout;

        if (s1._visible && s0._box.intersects(s1._box)) {
          collider(s0, s1);
        }
      }
    }

    return labels;
  }

  function compute$1(labels) {
    var i, ilen, label, state, geometry, center; // Initialize labels for overlap detection

    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      state = label.$layout;

      if (state._visible) {
        geometry = label.geometry();
        center = coordinates(label._el._model, label.model(), geometry);

        state._box.update(center, geometry, label.rotation());
      }
    } // Auto hide overlapping labels


    return collide(labels, function (s0, s1) {
      var h0 = s0._hidable;
      var h1 = s1._hidable;

      if (h0 && h1 || h1) {
        s1._visible = false;
      } else if (h0) {
        s0._visible = false;
      }
    });
  }

  var layout = {
    prepare: function prepare(datasets) {
      var labels = [];
      var i, j, ilen, jlen, label;

      for (i = 0, ilen = datasets.length; i < ilen; ++i) {
        for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
          label = datasets[i][j];
          labels.push(label);
          label.$layout = {
            _box: new HitBox(),
            _hidable: false,
            _visible: true,
            _set: i,
            _idx: j
          };
        }
      } // TODO New `z` option: labels with a higher z-index are drawn
      // of top of the ones with a lower index. Lowest z-index labels
      // are also discarded first when hiding overlapping labels.


      labels.sort(function (a, b) {
        var sa = a.$layout;
        var sb = b.$layout;
        return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
      });
      this.update(labels);
      return labels;
    },
    update: function update(labels) {
      var dirty = false;
      var i, ilen, label, model, state;

      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        label = labels[i];
        model = label.model();
        state = label.$layout;
        state._hidable = model && model.display === 'auto';
        state._visible = label.visible();
        dirty |= state._hidable;
      }

      if (dirty) {
        compute$1(labels);
      }
    },
    lookup: function lookup(labels, point) {
      var i, state; // IMPORTANT Iterate in the reverse order since items at the end of
      // the list have an higher z-index, thus should be picked first.

      for (i = labels.length - 1; i >= 0; --i) {
        state = labels[i].$layout;

        if (state && state._visible && state._box.contains(point)) {
          return labels[i];
        }
      }

      return null;
    },
    draw: function draw(chart, labels) {
      var i, ilen, label, state, geometry, center;

      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        label = labels[i];
        state = label.$layout;

        if (state._visible) {
          geometry = label.geometry();
          center = coordinates(label._el._view, label.model(), geometry);

          state._box.update(center, geometry, label.rotation());

          label.draw(chart, center);
        }
      }
    }
  };
  var helpers$3 = Chart.helpers;

  var formatter = function formatter(value) {
    if (helpers$3.isNullOrUndef(value)) {
      return null;
    }

    var label = value;
    var keys, klen, k;

    if (helpers$3.isObject(value)) {
      if (!helpers$3.isNullOrUndef(value.label)) {
        label = value.label;
      } else if (!helpers$3.isNullOrUndef(value.r)) {
        label = value.r;
      } else {
        label = '';
        keys = Object.keys(value);

        for (k = 0, klen = keys.length; k < klen; ++k) {
          label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
        }
      }
    }

    return '' + label;
  };
  /**
   * IMPORTANT: make sure to also update tests and TypeScript definition
   * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
   */


  var defaults = {
    align: 'center',
    anchor: 'center',
    backgroundColor: null,
    borderColor: null,
    borderRadius: 0,
    borderWidth: 0,
    clamp: false,
    clip: false,
    color: undefined,
    display: true,
    font: {
      family: undefined,
      lineHeight: 1.2,
      size: undefined,
      style: undefined,
      weight: null
    },
    formatter: formatter,
    labels: undefined,
    listeners: {},
    offset: 4,
    opacity: 1,
    padding: {
      top: 4,
      right: 4,
      bottom: 4,
      left: 4
    },
    rotation: 0,
    textAlign: 'start',
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    textShadowBlur: 0,
    textShadowColor: undefined
  };
  /**
   * @see https://github.com/chartjs/Chart.js/issues/4176
   */

  var helpers$4 = Chart.helpers;
  var EXPANDO_KEY = '$datalabels';
  var DEFAULT_KEY = '$default';

  function configure(dataset, options) {
    var override = dataset.datalabels;
    var listeners = {};
    var configs = [];
    var labels, keys;

    if (override === false) {
      return null;
    }

    if (override === true) {
      override = {};
    }

    options = helpers$4.merge({}, [options, override]);
    labels = options.labels || {};
    keys = Object.keys(labels);
    delete options.labels;

    if (keys.length) {
      keys.forEach(function (key) {
        if (labels[key]) {
          configs.push(helpers$4.merge({}, [options, labels[key], {
            _key: key
          }]));
        }
      });
    } else {
      // Default label if no "named" label defined.
      configs.push(options);
    } // listeners: {<event-type>: {<label-key>: <fn>}}


    listeners = configs.reduce(function (target, config) {
      helpers$4.each(config.listeners || {}, function (fn, event) {
        target[event] = target[event] || {};
        target[event][config._key || DEFAULT_KEY] = fn;
      });
      delete config.listeners;
      return target;
    }, {});
    return {
      labels: configs,
      listeners: listeners
    };
  }

  function dispatchEvent(chart, listeners, label) {
    if (!listeners) {
      return;
    }

    var context = label.$context;
    var groups = label.$groups;
    var callback;

    if (!listeners[groups._set]) {
      return;
    }

    callback = listeners[groups._set][groups._key];

    if (!callback) {
      return;
    }

    if (helpers$4.callback(callback, [context]) === true) {
      // Users are allowed to tweak the given context by injecting values that can be
      // used in scriptable options to display labels differently based on the current
      // event (e.g. highlight an hovered label). That's why we update the label with
      // the output context and schedule a new chart render by setting it dirty.
      chart[EXPANDO_KEY]._dirty = true;
      label.update(context);
    }
  }

  function dispatchMoveEvents(chart, listeners, previous, label) {
    var enter, leave;

    if (!previous && !label) {
      return;
    }

    if (!previous) {
      enter = true;
    } else if (!label) {
      leave = true;
    } else if (previous !== label) {
      leave = enter = true;
    }

    if (leave) {
      dispatchEvent(chart, listeners.leave, previous);
    }

    if (enter) {
      dispatchEvent(chart, listeners.enter, label);
    }
  }

  function handleMoveEvents(chart, event) {
    var expando = chart[EXPANDO_KEY];
    var listeners = expando._listeners;
    var previous, label;

    if (!listeners.enter && !listeners.leave) {
      return;
    }

    if (event.type === 'mousemove') {
      label = layout.lookup(expando._labels, event);
    } else if (event.type !== 'mouseout') {
      return;
    }

    previous = expando._hovered;
    expando._hovered = label;
    dispatchMoveEvents(chart, listeners, previous, label);
  }

  function handleClickEvents(chart, event) {
    var expando = chart[EXPANDO_KEY];
    var handlers = expando._listeners.click;
    var label = handlers && layout.lookup(expando._labels, event);

    if (label) {
      dispatchEvent(chart, handlers, label);
    }
  } // https://github.com/chartjs/chartjs-plugin-datalabels/issues/108


  function invalidate(chart) {
    if (chart.animating) {
      return;
    } // `chart.animating` can be `false` even if there is animation in progress,
    // so let's iterate all animations to find if there is one for the `chart`.


    var animations = Chart.animationService.animations;

    for (var i = 0, ilen = animations.length; i < ilen; ++i) {
      if (animations[i].chart === chart) {
        return;
      }
    } // No render scheduled: trigger a "lazy" render that can be canceled in case
    // of hover interactions. The 1ms duration is a workaround to make sure an
    // animation is created so the controller can stop it before any transition.


    chart.render({
      duration: 1,
      lazy: true
    });
  }

  Chart.defaults.global.plugins.datalabels = defaults;
  var plugin = {
    id: 'datalabels',
    beforeInit: function beforeInit(chart) {
      chart[EXPANDO_KEY] = {
        _actives: []
      };
    },
    beforeUpdate: function beforeUpdate(chart) {
      var expando = chart[EXPANDO_KEY];
      expando._listened = false;
      expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}

      expando._datasets = []; // per dataset labels: [Label[]]

      expando._labels = []; // layouted labels: Label[]
    },
    afterDatasetUpdate: function afterDatasetUpdate(chart, args, options) {
      var datasetIndex = args.index;
      var expando = chart[EXPANDO_KEY];
      var labels = expando._datasets[datasetIndex] = [];
      var visible = chart.isDatasetVisible(datasetIndex);
      var dataset = chart.data.datasets[datasetIndex];
      var config = configure(dataset, options);
      var elements = args.meta.data || [];
      var ctx = chart.ctx;
      var i, j, ilen, jlen, cfg, key, el, label;
      ctx.save();

      for (i = 0, ilen = elements.length; i < ilen; ++i) {
        el = elements[i];
        el[EXPANDO_KEY] = [];

        if (visible && el && !el.hidden && !el._model.skip) {
          for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
            cfg = config.labels[j];
            key = cfg._key;
            label = new Label(cfg, ctx, el, i);
            label.$groups = {
              _set: datasetIndex,
              _key: key || DEFAULT_KEY
            };
            label.$context = {
              active: false,
              chart: chart,
              dataIndex: i,
              dataset: dataset,
              datasetIndex: datasetIndex
            };
            label.update(label.$context);
            el[EXPANDO_KEY].push(label);
            labels.push(label);
          }
        }
      }

      ctx.restore(); // Store listeners at the chart level and per event type to optimize
      // cases where no listeners are registered for a specific event.

      helpers$4.merge(expando._listeners, config.listeners, {
        merger: function merger(event, target, source) {
          target[event] = target[event] || {};
          target[event][args.index] = source[event];
          expando._listened = true;
        }
      });
    },
    afterUpdate: function afterUpdate(chart, options) {
      chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets, options);
    },
    // Draw labels on top of all dataset elements
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
    afterDatasetsDraw: function afterDatasetsDraw(chart) {
      layout.draw(chart, chart[EXPANDO_KEY]._labels);
    },
    beforeEvent: function beforeEvent(chart, event) {
      // If there is no listener registered for this chart, `listened` will be false,
      // meaning we can immediately ignore the incoming event and avoid useless extra
      // computation for users who don't implement label interactions.
      if (chart[EXPANDO_KEY]._listened) {
        switch (event.type) {
          case 'mousemove':
          case 'mouseout':
            handleMoveEvents(chart, event);
            break;

          case 'click':
            handleClickEvents(chart, event);
            break;

          default:
        }
      }
    },
    afterEvent: function afterEvent(chart) {
      var expando = chart[EXPANDO_KEY];
      var previous = expando._actives;
      var actives = expando._actives = chart.lastActive || []; // public API?!

      var updates = utils.arrayDiff(previous, actives);
      var i, ilen, j, jlen, update, label, labels;

      for (i = 0, ilen = updates.length; i < ilen; ++i) {
        update = updates[i];

        if (update[1]) {
          labels = update[0][EXPANDO_KEY] || [];

          for (j = 0, jlen = labels.length; j < jlen; ++j) {
            label = labels[j];
            label.$context.active = update[1] === 1;
            label.update(label.$context);
          }
        }
      }

      if (expando._dirty || updates.length) {
        layout.update(expando._labels);
        invalidate(chart);
      }

      delete expando._dirty;
    }
  }; // TODO Remove at version 1, we shouldn't automatically register plugins.
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/42

  Chart.plugins.register(plugin);
  return plugin;
});

/***/ })

}]);
//# sourceMappingURL=modules-report-report-module-ngfactory.js.map