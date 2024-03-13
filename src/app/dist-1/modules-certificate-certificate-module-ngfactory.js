(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-certificate-certificate-module-ngfactory"],{

/***/ "/82b":
/*!*******************************************************************!*\
  !*** ./src/app/modules/certificate/certificate-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CertificateRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateRoutingModule", function() { return CertificateRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "Z4rR");



var ɵ0 = {
    telemetry: {
        env: 'certs', pageid: 'certificate-configuration', type: 'view', subtype: 'paginate', ver: '1.0'
    },
    roles: 'createBatchRole',
    hideHeaderNFooter: false
}, ɵ1 = {
    telemetry: {
        env: 'certs', pageid: 'certificate-create-template', type: 'view', subtype: 'paginate', ver: '1.0'
    },
    roles: 'createBatchRole',
    hideHeaderNFooter: false
}, ɵ2 = {
    telemetry: {
        env: 'certs', pageid: 'certificate-create-template', type: 'view', subtype: 'paginate', ver: '1.0'
    },
    roles: 'createBatchRole',
    hideHeaderNFooter: false
}, ɵ3 = {
    telemetry: {
        env: 'certs', pageid: 'certificate-details', type: 'view'
    }
};
var routes = [
    {
        path: 'configure/certificate', component: _components__WEBPACK_IMPORTED_MODULE_2__["CertificateConfigurationComponent"], canActivate: [_sunbird_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: ɵ0
    },
    {
        path: 'configure/create-template', component: _components__WEBPACK_IMPORTED_MODULE_2__["CreateTemplateComponent"], canActivate: [_sunbird_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: ɵ1
    },
    {
        path: 'configure/create-certificate-template', component: _components__WEBPACK_IMPORTED_MODULE_2__["SvgEditorComponent"], canActivate: [_sunbird_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: ɵ2
    },
    {
        path: ':uuid', component: _components__WEBPACK_IMPORTED_MODULE_2__["CertificateDetailsComponent"],
        data: ɵ3
    }
];
var CertificateRoutingModule = (function () {
    function CertificateRoutingModule() {
    }
    return CertificateRoutingModule;
}());




/***/ }),

/***/ "/Le/":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/svg-editor/svg-editor.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_SvgEditorComponent, View_SvgEditorComponent_0, View_SvgEditorComponent_Host_0, SvgEditorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SvgEditorComponent", function() { return RenderType_SvgEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgEditorComponent_0", function() { return View_SvgEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgEditorComponent_Host_0", function() { return View_SvgEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorComponentNgFactory", function() { return SvgEditorComponentNgFactory; });
/* harmony import */ var _svg_editor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-editor.component.scss.shim.ngstyle */ "SDaT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _node_modules_ng_svg_editor_ng_svg_editor_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/ng-svg-editor/ng-svg-editor.ngfactory */ "uKfN");
/* harmony import */ var ng_svg_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-svg-editor */ "FhpT");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component.ngfactory */ "aHSL");
/* harmony import */ var _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component */ "TbDo");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _svg_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg-editor.component */ "Jm7v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/cert-reg/cert-reg.service */ "6auv");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");






















var styles_SvgEditorComponent = [_svg_editor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SvgEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SvgEditorComponent, data: {} });

function View_SvgEditorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "cert-img-sb-card"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["alt", "certificate template"], ["class", "cert-img-sb-card__content d-flex flex-ai-center flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "certificate template"], ["tabindex", "0"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.chooseCertificate(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "cert-img-sb-card"; var currVal_1 = ((((_co.selectedCertificate == null) ? null : _co.selectedCertificate.identifier) === ((_v.context.$implicit == null) ? null : _v.context.$implicit.identifier)) ? "active" : ""); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.artifactUrl); _ck(_v, 3, 0, currVal_2); }); }
function View_SvgEditorComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "section", [["id", "content1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "sb-search-box m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "input-div relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "input", [["autofocus", ""], ["class", "sb-search-input"], ["maxlength", "80"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.selectedSVGObject.value = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "small", [["_ngcontent-nit-c26", ""], ["class", "pl-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " / 80 ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = "80"; _ck(_v, 6, 0, currVal_8); var currVal_9 = _co.selectedSVGObject.value; _ck(_v, 9, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).maxlength : null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = (80 - _co.selectedSVGObject.value.length); var currVal_11 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.characterleft))); _ck(_v, 13, 0, currVal_10, currVal_11); }); }
function View_SvgEditorComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "sb-modal sb-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "ui modal transition active visible small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "image-tabs px-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SvgEditorComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateSVGInputTag() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeSVGInputModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = (((_co.selectedSVGObject == null) ? null : _co.selectedSVGObject.type) === "text"); _ck(_v, 12, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updateDetails))); _ck(_v, 8, 0, currVal_4); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.update))); _ck(_v, 15, 0, currVal_6); var currVal_7 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel)); _ck(_v, 17, 0, currVal_7); }); }
function View_SvgEditorComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeSVGInputModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_SvgEditorComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "small"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_SvgEditorComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [["class", "sb-modal sb-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 22, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 21, "div", [["class", "ui modal sb-bg-color-white  transition active visible large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header sb-bg-color-white "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "sb-modal-content sb-bg-color-white "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "image-tabs px-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "sb-modal-actions sb-bg-color-white "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [["class", "ui stackable d-flex flex-jc-space-between mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "div", [["class", "sb-checkbox sb-checkbox-secondary pt-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "input", [["id", "check2"], ["name", "selected"], ["type", "checkbox"], ["value", "true"]], [[8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = ((_co.userConsent = !_co.userConsent) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "label", [["class", "text-left fsmall"], ["for", "check2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveUpdatedCertificate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](22, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_9 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_10 = _ck(_v, 22, 0, !_co.userConsent); _ck(_v, 21, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.certPreview))); _ck(_v, 8, 0, currVal_4); var currVal_5 = _co.previewSvgData; _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.userConsent; _ck(_v, 16, 0, currVal_6); var currVal_7 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.intxt == null) ? null : _co.resourceService.frmelmnts.cert.intxt.confrmtion)))); _ck(_v, 18, 0, currVal_7); var currVal_8 = !_co.userConsent; _ck(_v, 20, 0, currVal_8); var currVal_11 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.saveAsTemplate)))); _ck(_v, 23, 0, currVal_11); }); }
function View_SvgEditorComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeSaveAndPreview() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_SvgEditorComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[3, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "large"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_SvgEditorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { browseImage: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 37, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "sb-bg-color-white py-8 relative9 cc-player__content-header cc-player__border-fix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "d-flex flex-ai-center flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn mr-auto"], ["id", "goBack"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 27, "div", [["class", "certificate-container relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 26, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 25, "div", [["class", "sb-g mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-3 sb-g-col-lg-3 sb-g-col-xxxl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "certificate-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["class", "fmedium my-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "mt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SvgEditorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 17, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-9 sb-g-col-lg-9 sb-g-col-xxxl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 9, "div", [["class", "d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--md icon-back mr-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#question_on_play"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [["class", "preview-title mb-0 mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary ml-16"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.previewAndSave() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "cert-select-card my-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 4, "div", [["class", "d-flex flex-ai-center flex-dc cert-select-card__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "div", [["class", "d-flex flex-ai-center flex-jc-center cert-select-card__content__description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "div", [["class", "svgContainer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "svg-editor", [], null, [[null, "elementClicked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementClicked" === en)) {
        var pd_0 = (_co.elementClicked($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_svg_editor_ng_svg_editor_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_SvgEditorComponent_0"], _node_modules_ng_svg_editor_ng_svg_editor_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_SvgEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 770048, null, 0, ng_svg_editor__WEBPACK_IMPORTED_MODULE_9__["SvgEditorComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]], { svgContent: [0, "svgContent"], edit: [1, "edit"], save: [2, "save"], refreshEditor: [3, "refreshEditor"], togglePreview: [4, "togglePreview"] }, { elementClicked: "elementClicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SvgEditorComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "browse-image-popup", [], null, [[null, "assetData"], [null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("assetData" === en)) {
        var pd_0 = (_co.svgAssetData($event) !== false);
        ad = (pd_0 && ad);
    } if (("close" === en)) {
        var pd_1 = (_co.closeSVGInputModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_BrowseImagePopupComponent_0"], _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_BrowseImagePopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 114688, [[1, 4]], 0, _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_12__["BrowseImagePopupComponent"], [_services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_13__["UploadCertificateService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]], { showSelectImageModal: [0, "showSelectImageModal"], logoType: [1, "logoType"], enableUploadSignature: [2, "enableUploadSignature"], showUploadUserModal: [3, "showUploadUserModal"] }, { assetData: "assetData", close: "close" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SvgEditorComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.layoutConfiguration ? "sbt-inside-page-container py-16" : ""); _ck(_v, 2, 0, currVal_0); var currVal_3 = _co.defaultCertificates; _ck(_v, 20, 0, currVal_3); var currVal_7 = _co.logoHtml; var currVal_8 = _co.edit; var currVal_9 = _co.save; var currVal_10 = _co.refreshEditor; var currVal_11 = _co.togglePreview; _ck(_v, 38, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = ((_co.showSVGInputModal && _co.showPreviewButton) && (((_co.selectedSVGObject == null) ? null : _co.selectedSVGObject.type) === "text")); _ck(_v, 40, 0, currVal_12); var currVal_13 = ((_co.showSVGInputModal && _co.showPreviewButton) && (((_co.selectedSVGObject == null) ? null : _co.selectedSVGObject.type) === "image")); var currVal_14 = _co.logoType; var currVal_15 = true; var currVal_16 = _co.disableSVGImageModal; _ck(_v, 42, 0, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = _co.saveAndPreview; _ck(_v, 44, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 10, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.layout)))); _ck(_v, 17, 0, currVal_2); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.editCertificateTitle))); _ck(_v, 28, 0, currVal_4); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 30, 0, currVal_5); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.saveAndPreview))); _ck(_v, 32, 0, currVal_6); }); }
function View_SvgEditorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-svg-editor", [], null, null, null, View_SvgEditorComponent_0, RenderType_SvgEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _svg_editor_component__WEBPACK_IMPORTED_MODULE_17__["SvgEditorComponent"], [_services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_13__["UploadCertificateService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_19__["CertRegService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_20__["NavigationHelperService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_21__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SvgEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-svg-editor", _svg_editor_component__WEBPACK_IMPORTED_MODULE_17__["SvgEditorComponent"], View_SvgEditorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "0laf":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-configuration/certificate-configuration.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CertificateConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateConfigurationComponent", function() { return CertificateConfigurationComponent; });
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/cert-config-model/cert-config-model */ "LOdU");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");











var CertificateConfigurationComponent = (function () {
    function CertificateConfigurationComponent(certificateService, userService, playerService, sanitizer, resourceService, certRegService, uploadCertificateService, navigationHelperService, activatedRoute, toasterService, router, telemetryService, layoutService, formService) {
        this.certificateService = certificateService;
        this.userService = userService;
        this.playerService = playerService;
        this.sanitizer = sanitizer;
        this.resourceService = resourceService;
        this.certRegService = certRegService;
        this.uploadCertificateService = uploadCertificateService;
        this.navigationHelperService = navigationHelperService;
        this.activatedRoute = activatedRoute;
        this.toasterService = toasterService;
        this.router = router;
        this.telemetryService = telemetryService;
        this.layoutService = layoutService;
        this.formService = formService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.disableAddCertificate = true;
        this.showLoader = true;
        this.certTemplateList = [];
        this.screenStates = { 'default': 'default', 'certRules': 'certRules' };
        this.certConfigModalInstance = new _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_1__["CertConfigModel"]();
        this.isTemplateChanged = false;
        this.certEditable = true;
        this.showAlertModal = false;
        this.addScoreRule = false;
        this.arrayValue = {};
        this.isSingleAssessment = false;
        this.isStateCertificate = false;
        this.instance = document.getElementById('instance')
            ? document.getElementById('instance').value : 'sunbird';
    }
    CertificateConfigurationComponent.prototype.onPopState = function (event) {
        if (this.isTemplateChanged) {
            this.isTemplateChanged = false;
        }
    };
    CertificateConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeLabels();
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.redoLayout();
        this.currentState = this.screenStates.default;
        this.uploadCertificateService.certificate.subscribe(function (res) {
            if (res && !lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](res)) {
                _this.showAlertModal = true;
                _this.currentState = 'certRules';
                _this.showPreviewModal = false;
                _this.newTemplateIdentifier = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](res, 'identifier');
            }
        });
        this.navigationHelperService.setNavigationUrl();
        this.initializeFormFields();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.configurationMode = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.queryParams, 'type');
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.getCourseDetails(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId')), this.getBatchDetails(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId')), this.getTemplateList(), this.getCertificateFormData()).subscribe(function (data) {
            _this.showLoader = false;
            _this.checkMultipleAssessment();
        }, function (error) {
            _this.showLoader = false;
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    CertificateConfigurationComponent.prototype.checkMultipleAssessment = function () {
        try {
            var contentTypes = JSON.parse(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.courseDetails, 'contentTypesCount'));
            var selfAssessCount = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](contentTypes, 'SelfAssess');
            if (selfAssessCount && selfAssessCount > 1) {
                this.isSingleAssessment = false;
            }
            else if (selfAssessCount && selfAssessCount == 1) {
                this.isSingleAssessment = true;
            }
            else {
                this.isSingleAssessment = false;
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    CertificateConfigurationComponent.prototype.certificateCreation = function () {
        this.currentState = this.screenStates.certRules;
    };
    CertificateConfigurationComponent.prototype.ngAfterViewInit = function () {
        this.setTelemetryImpressionData();
    };
    CertificateConfigurationComponent.prototype.initializeLabels = function () {
        this.config = {
            select: {
                label: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'frmelmnts.lbl.Select'),
                name: 'Select',
                show: true
            },
            preview: {
                label: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'frmelmnts.cert.lbl.preview'),
                name: 'Preview',
                show: true
            },
            remove: {
                label: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'frmelmnts.cert.lbl.unselect'),
                name: 'Remove',
                show: false
            }
        };
    };
    CertificateConfigurationComponent.prototype.getCertConfigFields = function () {
        var _this = this;
        var request = {
            request: {
                orgId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userService, 'userProfile.rootOrgId'),
                key: 'certRules'
            }
        };
        this.certificateService.fetchCertificatePreferences(request).subscribe(function (certRulesData) {
            var dropDownValues = _this.certConfigModalInstance.getDropDownValues(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certRulesData, 'result.response.data.fields'));
            _this.certTypes = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](dropDownValues, 'certTypes');
            _this.issueTo = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](dropDownValues, 'issueTo');
            _this.scoreRange = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](dropDownValues, 'scoreRange');
        }, function (error) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    CertificateConfigurationComponent.prototype.getTemplateList = function () {
        var _this = this;
        var request = {
            'request': {
                'filters': {
                    'certType': 'cert template',
                    'channel': this.userService.channel,
                    'mediaType': 'image'
                },
                'sort_by': {
                    'lastUpdatedOn': 'desc'
                },
                'fields': ['indentifier', 'name', 'code', 'certType', 'data', 'issuer', 'signatoryList', 'artifactUrl', 'primaryCategory', 'channel'],
                'limit': 100
            }
        };
        return this.uploadCertificateService.getCertificates(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (certTemplateData) {
            var templatList = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certTemplateData, 'result.content');
            _this.certTemplateList = templatList;
            var tempIdToSelect;
            if (_this.newTemplateIdentifier) {
                tempIdToSelect = _this.newTemplateIdentifier;
            }
            else {
                tempIdToSelect = _this.templateIdentifier;
            }
            var templateData = templatList.find(function (templat) { return tempIdToSelect && (templat.identifier === tempIdToSelect); });
            if (templateData) {
                lodash_es__WEBPACK_IMPORTED_MODULE_3__["remove"](_this.certTemplateList, function (cert) { return lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](cert, 'identifier') === lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'identifier'); });
                _this.certTemplateList.unshift(templateData);
                _this.selectedTemplate = templateData;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])({});
        }));
    };
    CertificateConfigurationComponent.prototype.refreshData = function () {
        var _this = this;
        this.getTemplateList().subscribe(function (response) {
        }, function (error) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    CertificateConfigurationComponent.prototype.getBatchDetails = function (batchId) {
        var _this = this;
        return this.certificateService.getBatchDetails(batchId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (batchDetails) {
            _this.batchDetails = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](batchDetails, 'result.response');
            var cert_templates = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.batchDetails, 'cert_templates');
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](cert_templates)) {
                _this.getCertConfigFields();
            }
            else {
                if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["isArray"](cert_templates)) {
                    _this.batchDetails.cert_templates = cert_templates[0];
                }
                _this.processCertificateDetails(cert_templates);
            }
        }));
    };
    CertificateConfigurationComponent.prototype.initializeFormFields = function () {
        var _this = this;
        this.userPreference = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            scoreRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            issueTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            allowPermission: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.userPreference.valueChanges.subscribe(function (val) {
            _this.validateForm();
        });
    };
    CertificateConfigurationComponent.prototype.validateForm = function () {
        if (this.userPreference.status === 'VALID'
            && lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userPreference, 'value.allowPermission') && !lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.selectedTemplate)) {
            this.disableAddCertificate = false;
        }
        else {
            this.disableAddCertificate = true;
        }
    };
    CertificateConfigurationComponent.prototype.getCourseDetails = function (courseId) {
        var _this = this;
        return this.playerService.getCollectionHierarchy(courseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (courseData) {
            _this.courseDetails = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](courseData, 'result.content');
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])({});
        })));
    };
    CertificateConfigurationComponent.prototype.updateCertificate = function () {
        if (this.templateIdentifier !== lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'name')) {
            this.isTemplateChanged = true;
        }
        else {
            this.attachCertificateToBatch();
        }
    };
    CertificateConfigurationComponent.prototype.attachCertificateToBatch = function () {
        var _this = this;
        this.sendInteractData({ id: this.configurationMode === 'add' ? 'attach-certificate' : 'confirm-template-change' });
        if (this.addScoreRule === false) {
            this.userPreference.value['scoreRange'] = null;
        }
        var request = {
            'request': {
                'batch': {
                    'courseId': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId'),
                    'batchId': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId'),
                    'template': {
                        'identifier': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'identifier'),
                        'criteria': this.getCriteria(this.userPreference.value),
                        'name': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'name'),
                        'issuer': JSON.parse(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'issuer')),
                        'data': JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'data')),
                        'previewUrl': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'artifactUrl'),
                        'signatoryList': JSON.parse(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'signatoryList'))
                    }
                }
            }
        };
        if (this.isTemplateChanged) {
            request['request']['oldTemplateId'] = this.templateIdentifier;
        }
        this.certRegService.addCertificateTemplate(request).subscribe(function (data) {
            _this.isTemplateChanged = false;
            if (_this.configurationMode === 'add') {
                _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certAddSuccess'));
            }
            else {
                _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certUpdateSuccess'));
            }
            _this.certificateService.getBatchDetails(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.queryParams, 'batchId')).subscribe(function (batchDetails) {
                _this.batchDetails = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](batchDetails, 'result.response');
                _this.processCertificateDetails(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.batchDetails, 'cert_templates'));
                _this.goBack();
            }, function (error) {
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            });
        }, function (error) {
            if (_this.configurationMode === 'add') {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certAddError'));
            }
            else {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certEditError'));
            }
        });
    };
    CertificateConfigurationComponent.prototype.processCertificateDetails = function (certTemplateDetails) {
        var templateData = lodash_es__WEBPACK_IMPORTED_MODULE_3__["pick"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certTemplateDetails, Object.keys(certTemplateDetails)), ['criteria', 'previewUrl', 'artifactUrl', 'identifier', 'data', 'issuer', 'signatoryList', 'name', 'url']);
        this.templateIdentifier = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'identifier');
        this.selectedTemplate = {
            'name': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'name'),
            'identifier': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'identifier'),
            'previewUrl': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'previewUrl'),
            'issuer': JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'issuer')),
            'data': JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'data')),
            'signatoryList': JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'signatoryList')),
            'artifactUrl': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'artifactUrl')
        };
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'previewUrl') && lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'url')) {
            this.selectedTemplate['previewUrl'] = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'url');
            templateData['previewUrl'] = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'url');
        }
        this.previewUrl = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'previewUrl');
        this.setCertEditable();
        this.processCriteria(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](templateData, 'criteria'));
    };
    CertificateConfigurationComponent.prototype.setCertEditable = function () {
        this.certEditable = this.previewUrl ? true : false;
    };
    CertificateConfigurationComponent.prototype.editCertificate = function () {
        this.configurationMode = 'edit';
        this.currentState = this.screenStates.certRules;
        this.sendInteractData({ id: 'edit-certificate' });
    };
    CertificateConfigurationComponent.prototype.getCriteria = function (rawDropdownValues) {
        var processedData = this.certConfigModalInstance.processDropDownValues(rawDropdownValues, lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userService, 'userProfile.rootOrgId'));
        return processedData;
    };
    CertificateConfigurationComponent.prototype.processCriteria = function (criteria) {
        var data = this.certConfigModalInstance.processCriteria(criteria);
        this.issueTo = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](data, 'issueTo');
        var scoreRange = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](data, 'scoreRange');
        if (scoreRange) {
            this.addRule();
        }
        var scoreRangeFormEle = this.userPreference.controls['scoreRange'];
        var issueToFormEle = this.userPreference.controls['issueTo'];
        this.issueTo && this.issueTo.length > 0 ? issueToFormEle.setValue(this.issueTo[0].name) : issueToFormEle.setValue('');
        scoreRange ? scoreRangeFormEle.setValue(scoreRange) : scoreRangeFormEle.setValue('');
    };
    CertificateConfigurationComponent.prototype.handleCertificateEvent = function (event, template) {
        var show = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'name') === lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](template, 'name');
        switch (lodash_es__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'name'))) {
            case 'select':
                this.selectedTemplate = template;
                this.config.remove.show = show;
                this.config.select.show = !show;
                this.validateForm();
                this.sendInteractData({ id: 'select-template' });
                break;
            case 'remove':
                this.selectedTemplate = {};
                this.config.select.show = show;
                this.config.remove.show = !show;
                this.validateForm();
                this.sendInteractData({ id: 'unselect-template' });
                break;
            case 'preview':
                this.previewTemplate = template;
                this.showPreviewModal = true;
                this.sendInteractData({ id: 'preview-template' });
                break;
        }
    };
    CertificateConfigurationComponent.prototype.getConfig = function (config, template) {
        var show = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'name') === lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](template, 'name');
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'label')) === 'select') {
            return ({ show: !show, label: config.label, name: config.name });
        }
        else {
            return ({ show: show, label: config.label, name: config.name });
        }
    };
    CertificateConfigurationComponent.prototype.closeModal = function (event) {
        lodash_es__WEBPACK_IMPORTED_MODULE_3__["remove"](this.certTemplateList, function (template) { return lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](template, 'identifier') === lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'template.identifier'); });
        this.certTemplateList.unshift(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'template'));
        this.showPreviewModal = false;
        this.selectedTemplate = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'name') ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'template') : this.selectedTemplate;
        this.validateForm();
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'name')) {
            this.sendInteractData({ id: 'select-template' });
        }
        else {
            this.sendInteractData({ id: 'close-preview' });
        }
    };
    CertificateConfigurationComponent.prototype.closeTemplateDetectModal = function () {
        this.isTemplateChanged = false;
        this.sendInteractData({ id: 'cancel-template-change' });
    };
    CertificateConfigurationComponent.prototype.navigateToCertRules = function () {
        this.currentState = this.screenStates.certRules;
        this.sendInteractData({ id: 'add-certificate' });
    };
    CertificateConfigurationComponent.prototype.goBack = function () {
        if (this.currentState === this.screenStates.certRules) {
            this.currentState = this.screenStates.default;
        }
        else {
            this.router.navigate(["/learn/course/" + lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId')]);
        }
    };
    CertificateConfigurationComponent.prototype.cancelSelection = function () {
        this.currentState = this.screenStates.default;
        this.userPreference.controls['allowPermission'].reset();
        this.sendInteractData({ id: this.configurationMode === 'add' ? 'cancel-add-certificate' : 'cancel-update-certificate' });
        if (this.configurationMode === 'add') {
            this.userPreference.reset();
            this.selectedTemplate = {};
        }
        else {
            var cert_templates = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.batchDetails, 'cert_templates');
            this.processCertificateDetails(cert_templates);
        }
    };
    CertificateConfigurationComponent.prototype.setTelemetryImpressionData = function () {
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: [{
                        type: 'Batch',
                        id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId')
                    },
                    {
                        type: 'Course',
                        id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId')
                    }]
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.router.url,
                duration: this.navigationHelperService.getPageLoadTime()
            }
        };
        this.telemetryService.impression(this.telemetryImpression);
    };
    CertificateConfigurationComponent.prototype.sendInteractData = function (interactData) {
        var data = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: [{
                        type: 'Batch',
                        id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId')
                    },
                    {
                        type: 'Course',
                        id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId')
                    }]
            },
            edata: {
                id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](interactData, 'id'),
                type: 'CLICK',
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid
            }
        };
        if (this.configurationMode === 'edit') {
            data['object'] = {
                id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.selectedTemplate, 'name'),
                type: 'Certificate',
                ver: '1.0',
                rollup: { l1: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId') }
            };
        }
        this.telemetryService.interact(data);
    };
    CertificateConfigurationComponent.prototype.navigateToCreateTemplate = function () {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.certificateFormConfig, 'enableSVGEditor')) {
            this.router.navigate(["/certs/configure/create-certificate-template"], {
                queryParams: {
                    type: this.configurationMode,
                    courseId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId'),
                    batchId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId')
                }
            });
        }
        else {
            this.router.navigate(["/certs/configure/create-template"], {
                queryParams: {
                    type: this.configurationMode,
                    courseId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'courseId'),
                    batchId: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.queryParams, 'batchId')
                }
            });
        }
    };
    CertificateConfigurationComponent.prototype.removeSelectedCertificate = function () {
        this.selectedTemplate = null;
    };
    CertificateConfigurationComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.uploadCertificateService.certificate.next(null);
    };
    CertificateConfigurationComponent.prototype.addRule = function () {
        this.addScoreRule = true;
        var range = 100;
        var step = 10;
        var arr = [];
        while (range > 0) {
            arr.push(range);
            range = range - step;
        }
        this.arrayValue['range'] = arr;
    };
    CertificateConfigurationComponent.prototype.removeRule = function () {
        var _this = this;
        setTimeout(function () {
            _this.userPreference.value['scoreRange'] = null;
        }, 500);
        this.addScoreRule = false;
    };
    CertificateConfigurationComponent.prototype.redoLayout = function () {
        if (this.layoutConfiguration != null) {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
        }
        else {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
        }
    };
    CertificateConfigurationComponent.prototype.handleParameterChange = function (event) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](event, 'value') === 'My state teacher') {
            this.isStateCertificate = true;
        }
        else {
            this.isStateCertificate = false;
        }
    };
    CertificateConfigurationComponent.prototype.getCertificateFormData = function () {
        var _this = this;
        var formServiceInputParams = {
            formType: 'certificate',
            contentType: 'course',
            formAction: 'certificateCreate',
            component: 'portal'
        };
        return this.formService.getFormConfig(formServiceInputParams, null, 'data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            _this.certificateFormConfig = data;
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (mapping) {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
        }));
    };
    return CertificateConfigurationComponent;
}());



/***/ }),

/***/ "5FRM":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/browse-image-popup/browse-image-popup.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .asterik[_ngcontent-%COMP%] {\n  color: var(--red-400);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-tabs[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background: var(--white);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 0.875rem 1.5rem;\n  font-weight: 600;\n  text-align: center;\n  color: #bbb;\n  border: 0.0625rem solid transparent;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-label[_ngcontent-%COMP%]:before {\n  font-family: fontawesome;\n  font-weight: normal;\n  margin-right: 0.625rem;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-label[_ngcontent-%COMP%]:hover {\n  color: #888;\n  cursor: pointer;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .image-input[_ngcontent-%COMP%]:checked    + .image-label[_ngcontent-%COMP%] {\n  color: #555;\n  border-bottom: 0.1875rem solid var(--primary-400);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   #tab1[_ngcontent-%COMP%]:checked    ~ #content1[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   #tab2[_ngcontent-%COMP%]:checked    ~ #content2[_ngcontent-%COMP%] {\n  display: block;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: none;\n  padding: 1rem 0 0;\n  border-top: 1px solid var(--rc-dddddd);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .sb-search-box[_ngcontent-%COMP%]   .sb-search-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 2.75rem;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .sb-search-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  background: var(--gray-200);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   i.icon.search[_ngcontent-%COMP%]:before {\n  content: \"\uF002\";\n  background: var(--gray-200);\n  position: relative;\n  top: 0.125rem;\n  color: var(--white);\n  font-size: 0.75rem;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   i.icon.close[_ngcontent-%COMP%]:before {\n  content: \"\uF00D\";\n  position: relative;\n  top: 0.1875rem;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .common-contribution-card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 0.5px solid rgba(123, 134, 244, 0.39);\n  border-radius: 0.25rem;\n  background-color: var(--white);\n  box-shadow: none;\n  height: 100%;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 18.25rem;\n  min-height: 0;\n  background: var(--white);\n  padding: 0;\n  border: none;\n  border-radius: 0.28571429rem;\n  box-shadow: 0 0.0625rem 0.1875rem 0 #d4d4d5, 0 0 0 0.0625rem #d4d4d5;\n  transition: box-shadow 0.1s ease, transform 0.1s ease;\n  z-index: \"\";\n  position: relative;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card.active[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card.active[_ngcontent-%COMP%] {\n  transform: scale(1.03, 1.03);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card.active[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card.active[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.25rem;\n  top: 0;\n  display: block;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]:hover, .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03, 1.03);\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: none;\n  border-top: 0.0625rem solid rgba(34, 36, 38, 0.1);\n  background: 0 0;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  font-size: 1em;\n  border-radius: 0;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  height: 9.375rem;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-actions[_ngcontent-%COMP%]   .or-toggle[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: 50%;\n  width: 24px;\n  height: 1.5rem;\n  position: absolute;\n  left: 42%;\n  z-index: 2;\n}\n.sb-imagemodal[_ngcontent-%COMP%]   .sb-modal-actions[_ngcontent-%COMP%]   .or-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.1875rem;\n  left: 0.3125rem;\n  font-size: 0.875rem;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .asterik[_ngcontent-%COMP%] {\n  color: red;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .choose-img-box[_ngcontent-%COMP%] {\n  border: 3px solid #000;\n  padding: 24px;\n  border-style: dashed;\n  border-radius: 4px;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .border-line[_ngcontent-%COMP%] {\n  border-left: 2px solid #ddd;\n  height: 100%;\n  padding-left: 16px;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .border-line[_ngcontent-%COMP%] {\n  border-right: 2px solid #ddd;\n  height: 100%;\n  padding-right: 16px;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .drop-img-text[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  border-bottom: 1px solid #999;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-bottom: 0;\n  position: relative;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: #0245fd;\n  border-radius: 3px 0 0 3px;\n  color: #fff;\n  display: inline-block;\n  height: 26px;\n  line-height: 26px;\n  padding: 0 20px 0 23px;\n  position: relative;\n  margin: 0 10px 10px 0;\n  text-decoration: none;\n  -webkit-transition: color 0.2s;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]::before {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n  content: \"\";\n  height: 6px;\n  left: 10px;\n  position: absolute;\n  width: 6px;\n  top: 10px;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-content[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]::after {\n  background: #fff;\n  border-bottom: 13px solid transparent;\n  border-left: 10px solid 10px solid #0245fd;\n  border-top: 13px solid transparent;\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-actions[_ngcontent-%COMP%]   .or-toggle[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  left: 31%;\n  z-index: 2;\n}\n.sb-uploadmodal[_ngcontent-%COMP%]   .sb-modal-actions[_ngcontent-%COMP%]   .or-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  left: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2Jyb3dzZS1pbWFnZS1wb3B1cC9icm93c2UtaW1hZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FEeEJGO0FDb0dBLFVBQUE7QURqVEk7RUFDRSxxQkFBQTtBQWlOTjtBQTlNSTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQWdOTjtBQTdNSTtFQUNFLGFBQUE7QUErTU47QUE1TUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FBOE1OO0FBM01JO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBNk1OO0FBMU1JO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUE0TU47QUF6TUk7RUFDRSxXQUFBO0VBQ0EsaURBQUE7QUEyTU47QUF4TUk7O0VBRUUsY0FBQTtBQTBNTjtBQXZNSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBeU1OO0FBdk1NO0VBQ0Usd0JBQUE7QUF5TVI7QUF0TU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUF3TVI7QUFyTU07RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBdU1SO0FBcE1NO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXNNUjtBQW5NTTtFQUNFLGdCQUFBO0FBcU1SO0FBbE1NO0VBQ0UsYUFBQTtBQW9NUjtBQWpNTTtFQUNFLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbU1SO0FBaE1NO0VBQ0UsYUFBQTtBQWtNUjtBQS9MTTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9FQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFpTVI7QUFoTVE7O0VBQ0UsYUFBQTtBQW1NVjtBQWpNUTs7RUFDRSw0QkFBQTtBQW9NVjtBQW5NVTs7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQXNNWjtBQW5NUTs7RUFDRSw0QkFBQTtBQXNNVjtBQWxNTTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvTVI7QUFqTU07O0VBRUUscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW1NUjtBQTVMSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUE4TE47QUE1TE07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE4TFI7QUFwTEk7RUFDRSxVQUFBO0FBdUxOO0FBckxJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQXVMTjtBQXJMSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdUxOO0FBdExNO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF3TFI7QUFyTEk7RUFDRSxrQkFBQTtBQXVMTjtBQXBMTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBc0xSO0FBcExNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFzTFI7QUFyTFE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUF1TFY7QUFwTE07RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQXNMUjtBQXBMTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFzTFI7QUFwTE07RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBc0xSO0FBakxJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQW1MTjtBQWxMTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBb0xSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2Jyb3dzZS1pbWFnZS1wb3B1cC9icm93c2UtaW1hZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zL21peGluc1wiO1xuQGltcG9ydCAndmFyaWFibGVzJztcblxuLy8gaW1hZ2UgbW9kYWwgY3NzIC8vXG4uc2ItaW1hZ2Vtb2RhbCB7XG4gIC5zYi1tb2RhbC1jb250ZW50IHtcbiAgICAuYXN0ZXJpa3tcbiAgICAgIGNvbG9yOiB2YXIoLS1yZWQtNDAwKTtcbiAgICB9XG5cbiAgICAuaW1hZ2UtdGFicyB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICB9XG5cbiAgICAuaW1hZ2UtaW5wdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaW1hZ2UtbGFiZWwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwIDAgLTFweDtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSgxNHB4KSBjYWxjdWxhdGVSZW0oMjRweCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNiYmI7XG4gICAgICBib3JkZXI6IGNhbGN1bGF0ZVJlbSgxcHgpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5pbWFnZS1sYWJlbDpiZWZvcmUge1xuICAgICAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsY3VsYXRlUmVtKDEwcHgpO1xuICAgIH1cblxuICAgIC5pbWFnZS1sYWJlbDpob3ZlciB7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuaW1hZ2UtaW5wdXQ6Y2hlY2tlZCsuaW1hZ2UtbGFiZWwge1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgICBib3JkZXItYm90dG9tOiBjYWxjdWxhdGVSZW0oM3B4KSBzb2xpZCB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgfVxuXG4gICAgI3RhYjE6Y2hlY2tlZH4jY29udGVudDEsXG4gICAgI3RhYjI6Y2hlY2tlZH4jY29udGVudDIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDE2cHgpIDAgMDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1yYy1kZGRkZGQpO1xuXG4gICAgICAuc2Itc2VhcmNoLWJveCAuc2Itc2VhcmNoLWlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAyLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAuc2Itc2VhcmNoLWJveCAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSgyNHB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XG4gICAgICB9XG5cbiAgICAgIGkuaWNvbi5zZWFyY2g6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXGYwMDJcIjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDpjYWxjdWxhdGVSZW0oMnB4KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTJweCk7XG4gICAgICB9XG5cbiAgICAgIGkuaWNvbi5jbG9zZTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcZjAwZFwiO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogY2FsY3VsYXRlUmVtKDNweCk7XG4gICAgICB9XG5cbiAgICAgIC51aS5jYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAudWkuY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5jb21tb24tY29udHJpYnV0aW9uLWNhcmQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IC41cHggc29saWQgcmdiYSgxMjMsIDEzNCwgMjQ0LCAuMzkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAudWkuY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICB9XG5cbiAgICAgIC51aS5jYXJkLFxuICAgICAgLnVpLmNhcmRzPi5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oMjkycHgpO1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIGNhbGN1bGF0ZVJlbSgxcHgpIGNhbGN1bGF0ZVJlbSgzcHgpIDAgI2Q0ZDRkNSwgMCAwIDAgY2FsY3VsYXRlUmVtKDFweCkgI2Q0ZDRkNTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMXMgZWFzZSwgdHJhbnNmb3JtIC4xcyBlYXNlO1xuICAgICAgICB6LWluZGV4OiAnJztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2VsZWN0ZWQtbWFya3tcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xuICAgICAgICAgIC5zZWxlY3RlZC1tYXJre1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6Y2FsY3VsYXRlUmVtKDRweCk7XG4gICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xuICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnVpLmNhcmQ+LmNvbnRlbnQsXG4gICAgICAudWkuY2FyZHM+LmNhcmQ+LmNvbnRlbnQge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXRvcDogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgcmdiYSgzNCwgMzYsIDM4LCAuMSk7XG4gICAgICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLnVpLmNhcmQgLmNvbnRlbnQgaW1nLFxuICAgICAgLnVpLmNhcmRzPi5jYXJkIC5jb250ZW50IGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDE1MHB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5zYi1tb2RhbC1hY3Rpb25zIHtcbiAgICAub3ItdG9nZ2xlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMjRweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA0MiU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IGNhbGN1bGF0ZVJlbSgzcHgpO1xuICAgICAgICBsZWZ0OiBjYWxjdWxhdGVSZW0oNXB4KTtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTRweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4uc2ItdXBsb2FkbW9kYWwge1xuICAuc2ItbW9kYWwtY29udGVudCB7XG4gICAgLmFzdGVyaWt7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAuY2hvb3NlLWltZy1ib3h7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAuYm9yZGVyLWxpbmV7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBodG1sW2Rpcj0ncnRsJ10gJiB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZHJvcC1pbWctdGV4dHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICB9XG4gICAgLnNiLWZpZWxkIHtcbiAgICAgIC50YWdzIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbiAgICAgIH1cbiAgICAgIC50YWdzIGxpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRhZyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjQ1ZmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICB9XG4gICAgICAudGFnOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgLnRhZzo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAxMHB4IHNvbGlkICMwMjQ1ZmQ7XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zYi1tb2RhbC1hY3Rpb25zIHtcbiAgICAub3ItdG9nZ2xlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDMxJTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiBjc3MzIHZhcmlhYmxlICYgc2FzcyB2YXJpYWJsZXMgKi9cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWZvbnQtc3RhY2stZW46IFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2staGk6IFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2stdXI6IFwiTm90byBTYW5zXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIixcbiAgICBcIk5vdG8gU2FucyBUYW1pbFwiLCBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLFxuICAgIFwiTm90byBTYW5zIEd1cm11a2hpXCIsIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLFxuICAgIFwiTm90byBTYW5zIEthbm5hZGFcIiwgXCJOb3RvIFNhbnMgT3JpeWFcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuXG4gIC8vIGJhc2UgY29sb3JzXG4gIC0tYmx1ZTogIzAyNGY5ZDtcbiAgLS1ncmVlbjogIzAwODg0MDtcbiAgLS1vcmFuZ2U6ICNlNTVhMjg7XG4gIC0tcmVkOiAjZmY0NTU4O1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuXG4gIC8vIGdyYXkgY29sb3JzIHNoYWRlc1xuICAtLWdyYXktaHM6IDAsIDAlO1xuICAtLWdyYXk6IGhzbCh2YXIoLS1ncmF5LWhzKSwgMjAlKTtcbiAgLS1ncmF5LTA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgOTUlKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4gIC0tZ3JheS0xMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgODAlKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuICAtLWdyYXktMjAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDYwJSk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuICAtLWdyYXktMzAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDU5JSk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuICAtLWdyYXktNDAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDQwJSk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiAgLS1ncmF5LTgwMDogdmFyKC0tZ3JheSk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4gIC8vIGJhc2V0aGVtZVxuICAtLXByaW1hcnktY29sb3I6ICMwMjRmOWQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDA4ODQwO1xuICAtLXRlcnRpYXJ5LWNvbG9yOiAjZTU1YTI4O1xuXG4gIC8vIHByaW1hcnkgY29sb3JzXG4gIC0tcHJpbWFyeS0wOiAjZjNmN2ZhOyAvLyBiZ1xuICAtLXByaW1hcnktMTAwOiAjZWRmNGY5OyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuICAtLXByaW1hcnktMjAwOiAjODBhN2NlOyAvLyBkaXZpZGVyXG4gIC0tcHJpbWFyeS0yNTA6ICNkM2U3ZjQ7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuICAtLXByaW1hcnktMzAwOiAjN2FiNGVlOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiAgLS1wcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS1jb2xvcik7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuICAtLXByaW1hcnktNjAwOiAjMDA1MzkxOyAvLyBvbiBwcmVzc1xuICAtLXByaW1hcnktODAwOiAjMDAyZTUwOyAvLyBob3ZlclxuXG4gIC8vIHNlY29uZGFyeSBjb2xvcnNcbiAgLS1zZWNvbmRhcnktMDogI2UxZmZkZjsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tc2Vjb25kYXJ5LTEwMDogIzAwYzc4NjsgLy8gYnV0dG9uIGJnIGJnLCB0b2FzdFxuICAtLXNlY29uZGFyeS0yMDA6ICMwN2JjODE7IC8vIGJ1dHRvbiBiZ1xuICAtLXNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7IC8vIGhvdmVyXG5cbiAgLy8gdGVydGlhcnkgY29sb3JzXG4gIC0tdGVydGlhcnktMDogI2ZlZWRkNzsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tdGVydGlhcnktMTAwOiAjZmZhMTFkOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktY29sb3IpOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbiAgLy8gcmVkIGNvbG9yc1xuICAtLXJlZC0wOiAjZmJjY2QxOyAvLyB0b2FzdCBiZ1xuICAtLXJlZC0xMDA6ICNmZjY5Nzk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tcmVkLTQwMDogdmFyKC0tcmVkKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4gIC8vIHN0YXR1cyBjb2xvcnNcbiAgLS1pbmZvLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIC0td2FybmluZy1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgLS1kYW5nZXItY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgLy8gZWxlbWVudCBiYXNlZCB2YXJpYWJsZXNcbiAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIC0tYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1ib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbiAgLy8gYWxwaGFcbiAgLS1hbHBoYTA6IDA7XG4gIC0tYWxwaGEyNTogMC4yNTtcbiAgLS1hbHBoYTUwOiAwLjU7XG4gIC0tYWxwaGE3NTogMC43NTtcblxuICAvLyBmb250c1xuICAtLWZvbnQtZGVmYXVsdC1zaXplOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuICAtLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAtLWZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIC0tbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiAgLS1oMS1mb250LXNpemU6IDJyZW07IC8vIDMycHhcbiAgLS1oMi1mb250LXNpemU6IDEuNzVyZW07IC8vIDI4cHhcbiAgLS1oMy1mb250LXNpemU6IDEuNXJlbTsgLy8gMjRweFxuICAtLWg0LWZvbnQtc2l6ZTogMS4ycmVtOyAvLyAyMHB4XG4gIC0taDUtZm9udC1zaXplOiAxcmVtOyAvLyAxNnB4XG4gIC0taDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuICAtLWZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuICAtLWZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1zbTogMC43NXJlbTsgLy8gMTJweFxuICAtLWZvbnQtc2l6ZS14czogMC42MjVyZW07IC8vIDEwcHhcbiAgLS1wLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuICAvLyBiYXNlIHZhcmlhYmxlc1xuICAtLWJhc2UtZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLS1iYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07IC8vOHB4LFxuICAtLWljb24tc3ZnLXh4czogMC43NXJlbTtcbiAgLS1pY29uLXN2Zy14czogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDIpO1xuICAtLWljb24tc3ZnLXNtOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMyk7XG4gIC0taWNvbi1zdmctbWQ6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA0KTtcbiAgLS1pY29uLXN2Zy1sZzogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDUpO1xuICAtLWljb24tc3ZnLXhsOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNik7XG5cbiAgLy9yYW5kb20gY29sb3JzIGFuZCBiYWNrZ3JvdW5kc1xuICAtLXJjLTk2QzhEQTogIzk2QzhEQTtcbiAgLS1yYy0wMDc2RkU6ICMwMDc2RkU7XG4gIC0tcmMtRTVFREY1OiAjRTVFREY1O1xuICAtLXJjLTdjN2I3YjogIzdjN2I3YjtcbiAgLS1yYy1mNWY1ZjU6ICNmNWY1ZjU7XG4gIC0tcmMtZmRmZGZkOiAjZmRmZGZkO1xuICAtLXJjLWRlZGVkZTogI2RlZGVkZTtcbiAgLS1yYy1GNUY5RkM6ICNGNUY5RkM7XG4gIC0tcmMtYzRjNGM0OiAjYzRjNGM0O1xuICAtLXJjLWQ4ZDhkODogI2Q4ZDhkODtcbiAgLS1yYy1lOWU1ZTU6ICNlOWU1ZTU7XG4gIC0tcmMtZGRkZGRkOiAjZGRkZGRkO1xuICAtLXJjLTdiODZmNDogIzdiODZmNDtcbiAgLS1yYy1kMGQwZDA6ICNkMGQwZDA7XG4gIC0tcmMtNWM4ZGI3OiAjNWM4ZGI3O1xuICAtLXJjLTkxYWVjYzogIzkxYWVjYztcbiAgLS1yYy1mOWY5Zjk6ICNmOWY5Zjk7XG4gIC0tcmMtZDRkM2QzOiAjZDRkM2QzO1xuICAtLXJjLUZBRkFGQTogI0ZBRkFGQTtcbiAgLS1yYy04NjZBNkE6ICM4NjZhNmE7XG4gIC0tcmMtOTc5Nzk3OiAjOTc5Nzk3O1xuICAtLXJjLWUwZTFlMjogI2UwZTFlMjtcbiAgLS1yYy0wMEJEN0Y6ICMwMEJEN0Y7XG4gIC0tcmMtOUY5RjlGOiAjOUY5RjlGO1xuICAtLXJjLUYzRjhGRjogI0YzRjhGRjtcbiAgLS1yYy04MEE3Q0U6ICM4MEE3Q0U7XG4gIC0tcmMtOWI5YjliOiAjOWI5YjliO1xuICAtLXJjLTJjYTU4ZDogIzJjYTU4ZDtcbiAgLS1yYy0wMDdBRkY6ICMwMDdBRkY7XG4gIC0tcmMtYmRiZGJkOiAjYmRiZGJkO1xuICAtLXJjLWNlY2VjZTogI2NlY2VjZTtcbiAgLS1yYy0yOTcyYTQ6ICMyOTcyYTQ7XG4gIC0tcmMtRTBGMUZEOiAjRTBGMUZEO1xuICAtLXJjLUM4RDZFQTogI0M4RDZFQTtcbiAgLS1yYy1lMmUzZTU6ICNlMmUzZTU7XG4gIC0tcmMtQkNCRUMwOiAjQkNCRUMwO1xuICAtLXJjLWQ0ZDRkNTogI2Q0ZDRkNTtcbiAgLS1yYy1kNGQ4ZGE6ICNkNGQ4ZGE7XG4gIC0tcmMtYmZlMWNmOiAjYmZlMWNmO1xuICAtLXJjLTI4OWZkOTogIzI4OWZkOTtcbiAgLS1yYy1lNjg5MDA6ICNlNjg5MDA7XG4gIC0tcmMtMmY0MjcyOiAjMmY0MjcyO1xuICAtLXJjLWUwZTBlMDogI2UwZTBlMDtcbiAgLS1yYy0yMzYxZmY6ICMyMzYxZmY7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1mZmIzMDA6ICNmZmIzMDA7XG4gIC0tcmMtZDhkZWUyOiAjZDhkZWUyO1xuICAtLXJjLTI1MjUyNTogIzI1MjUyNTtcbiAgLS1yYy1mY2YyZDY6ICNmY2YyZDY7XG4gIC0tcmMtYWRkOGU2OiAjYWRkOGU2O1xuICAtLXJjLWFmZDllNzogI2FmZDllNztcbiAgLS1yYy1EOUU0RjI6ICNEOUU0RjI7XG4gIC0tcmMtODhCN0U2OiAjODhCN0U2O1xuICAtLXJjLTRhNGE0YTogIzRhNGE0YTtcbiAgLS1yYy1mZmY2ZjY6ICNmZmY2ZjY7XG4gIC0tcmMtZjdmN2Y3OiAjZjdmN2Y3O1xuICAtLXJjLTY2YzdmNDogIzY2YzdmNDtcbiAgLS1yYy0xQjQ3ODU6ICMxQjQ3ODU7XG4gIC0tcmMtYTlhOWE5OiAjYTlhOWE5O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy0xYjFjMWQ6ICMxYjFjMWQ7XG4gIC0tcmMtZGVkZWRmOiAjZGVkZWRmO1xuICAtLXJjLWFhYWFhYTogI2FhYWFhYTtcbiAgLS1yYy0wNDJENTU6ICMwNDJENTU7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLWJiYmJiYjogI2JiYmJiYjtcbiAgLS1yYy0wMDlENTM6ICMwMDlENTM7XG4gIC0tcmMtRTBFRkZGOiAjRTBFRkZGO1xuICAtLXJjLTE5NkRBQjogIzE5NkRBQjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWMzYzNjMzogI2MzYzNjMztcbiAgLS1yYy0wMGFiYzc6IzAwYWJjNztcbiAgLS1yYy1GQ0U2RTY6I0ZDRTZFNjtcbiAgLS1yYy1ERUNBQ0E6I0RFQ0FDQTtcbiAgLS1yYy00MjQyNDI6IzQyNDI0MjtcbiAgLS1yYy1GNUQ3RDc6I0Y1RDdENztcbiAgLS1yYy1GN0ZGRjU6I0Y3RkZGNTtcbiAgLS1yYy1EM0RFRDE6I0QzREVEMTtcbiAgLS1yYy1FQkY2RTA6I0VCRjZFMDtcbiAgLS1yYy1GNkY2RjY6I0Y2RjZGNjtcbiAgLS1yYy0zM0I2Q0M6IzMzQjZDQztcbiAgLS1yYy0yZGFkYzI6IzJkYWRjMjtcbiAgLS1yYy0wZmJhZDY6IzBmYmFkNjtcbiAgLS1yYy1mN2ZmZWM6I2Y3ZmZlYztcbiAgLS1yYy1kMmRkYzc6I2QyZGRjNztcbiAgLS1yYy1mZmUxZTE6I2ZmZTFlMTtcbiAgLS1yYy1lNmM4Yzg6I2U2YzhjODtcbiAgLS1yYy1mNTZiNTY6I2Y1NmI1NjtcbiAgLS1yYy1kYzUyM2Q6I2RjNTIzZDtcbiAgLS1yYy1lNjVjNDc6I2U2NWM0NztcbiAgLS1yYy01NjVjNzA6IzU2NWM3MDtcbiAgLS1yYy02RDcyNzg6IzZENzI3ODtcbiAgLS1yYy1FMDhBMjA6I0UwOEEyMDtcbiAgLS1yYy1ERDY4MEY6I0RENjgwRjtcbiAgLS1yYy1kYWQ5Y2I6I2RhZDljYjtcbiAgLS1yYy1GRkQ5NTQ6I0ZGRDk1NDtcbiAgLS1yYy1yZ2JhLWJsYWNrOiAwLCAwLCAwOyAvLyB2YXIoLS1ibGFjaylcbiAgLS1yYy1yZ2JhLXdoaXRlOiAyNTUsIDI1NSwgMjU1OyAvLyB2YXIoLS13aGl0ZSlcbiAgLS1yYy1yZ2JhLWdyYXk6IDUxLCA1MSwgNTE7IC8vIHZhcigtLWdyYXktMzAwKVxuICAtLXJjLXJnYmEtcHJpbWFyeTogMiwgNzksIDE1NzsgLy8gdmFyKC0tcHJpbWFyeS1jb2xvcilcbiAgLS1yYy1yZ2JhLXByaW1hcnktMzAwOiA0MSwgMTE0LCAxNjQ7IC8vdmFyKC0tcHJpbWFyeS0zMDApXG4gIC0tcmMtcmdiYS1ncmF5LTMwMDogMzQsIDM2LCAzODsgLy92YXIoLS1ncmF5LTEwMClcbiAgLS1yYy1yZ2JhLTg2NmE2YTogMTM0LCAxMDYsIDEwNjtcbiAgLS1yYy1yZ2JhLWQwZDBkMDogMjA4LCAyMDgsIDIwODtcbiAgLS1yYy1yZ2JhLTdiODZmNDogMTIzLCAxMzQsIDI0NDtcbiAgLS1yYy1yZ2JhLUM4RDZFQTogMjAwLCAyMTQsIDIzNDtcbiAgLS11aS1kcm9wZG93bi1zZWxlY3Rpb24taWNvbjojNDlCMUYyO1xufVxuXG4vLyBWYXJpYWJsZXNcbiRmb250LXN0YWNrLWVuOiB2YXIoLS1mb250LXN0YWNrLWVuKTtcbiRmb250LXN0YWNrLWhpOiB2YXIoLS1mb250LXN0YWNrLWhpKTtcbiRmb250LXN0YWNrLXVyOiB2YXIoLS1mb250LXN0YWNrLXVyKTtcblxuLy8gQmFzZSBDb2xvcnNcbiRibHVlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRncmVlbjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiRvcmFuZ2U6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiRyZWQ6IHZhcigtLXJlZCk7XG4kYmxhY2s6IHZhcigtLWJsYWNrKTtcbiR3aGl0ZTogdmFyKC0td2hpdGUpO1xuJGluZGlnbzogdmFyKC0taW5kaWdvKTtcbiRwdXJwbGU6IHZhcigtLXB1cnBsZSk7XG4kcGluazogdmFyKC0tcGluayk7XG4keWVsbG93OiB2YXIoLS15ZWxsb3cpO1xuJHRlYWw6IHZhcigtLXRlYWwpO1xuJGN5YW46IHZhcigtLWN5YW4pO1xuJGdyYXk6IHZhcigtLWdyYXkpO1xuXG4vLyBicmFuZCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kdGVydGlhcnktY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbi8vIE5ldXRyYWwgQ29sb3JzXG4kd2hpdGUtY29sb3I6IHZhcigtLXdoaXRlKTtcbi8vIGdyYXkgY29sb3JzIHNoYWRlc1xuJGdyYXktMDogdmFyKC0tZ3JheS0wKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4kZ3JheS0xMDA6IHZhcigtLWdyYXktMTAwKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuJGdyYXktMjAwOiB2YXIoLS1ncmF5LTIwMCk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuJGdyYXktMzAwOiB2YXIoLS1ncmF5LTMwMCk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuJGdyYXktNDAwOiB2YXIoLS1ncmF5LTQwMCk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiRncmF5LTgwMDogdmFyKC0tZ3JheS04MDApOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuLy8gcHJpbWFyeSBjb2xvcnMgc2hhZGVzXG4kcHJpbWFyeS0wOiB2YXIoLS1wcmltYXJ5LTApOyAvLyBiZ1xuJHByaW1hcnktMTAwOiB2YXIoLS1wcmltYXJ5LTEwMCk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4kcHJpbWFyeS0yMDA6IHZhcigtLXByaW1hcnktMjAwKTsgLy8gZGl2aWRlclxuJHByaW1hcnktMjUwOiB2YXIoLS1wcmltYXJ5LTI1MCk7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuJHByaW1hcnktMzAwOiB2YXIoLS1wcmltYXJ5LTMwMCk7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuJHByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LTQwMCk7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuJHByaW1hcnktNjAwOiB2YXIoLS1wcmltYXJ5LTYwMCk7IC8vIG9uIHByZXNzXG4kcHJpbWFyeS04MDA6IHZhcigtLXByaW1hcnktODAwKTsgLy8gaG92ZXJcblxuLy8gc2Vjb25kYXJ5IGNvbG9ycyBzaGFkZXNcbiRzZWNvbmRhcnktMDogdmFyKC0tc2Vjb25kYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiRzZWNvbmRhcnktMTAwOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRzZWNvbmRhcnktMjAwOiB2YXIoLS1zZWNvbmRhcnktMjAwKTsgLy8gYnV0dG9uIGJnXG4kc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LTQwMCk7IC8vIGhvdmVyXG5cbi8vIHRlcnRpYXJ5IGNvbG9ycyBzaGFkZXNcbiR0ZXJ0aWFyeS0wOiB2YXIoLS10ZXJ0aWFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kdGVydGlhcnktMTAwOiB2YXIoLS10ZXJ0aWFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktNDAwKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4vLyByZWQgY29sb3JzIHNoYWRlc1xuJHJlZC0wOiB2YXIoLS1yZWQtMCk7IC8vIHRvYXN0IGJnXG4kcmVkLTEwMDogdmFyKC0tcmVkLTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kcmVkLTQwMDogdmFyKC0tcmVkLTQwMCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuLy8gaW5wdXQgYm9yZGVyIHdpZHRoXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG5cbi8vIFN0YXR1cyBDb2xvcnNcbiRpbmZvLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4kc3VjY2Vzcy1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XG4kd2FybmluZy1jb2xvcjogdmFyKC0tdGVydGlhcnktNDAwKTtcbiRkYW5nZXItY29sb3I6IHZhcigtLXJlZC0xMDApO1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiRkZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiRiZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuJGJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuLyogRm9udHMgKi9cbiRmb250LWRlZmF1bHQtc2l6ZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpO1xuJGZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC13ZWlnaHQtbGlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiRmb250LXdlaWdodC1ub3JtYWw6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4kZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRsaW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuJGgxLWZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTsgLy8gMzJweFxuJGgyLWZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTsgLy8gMjhweFxuJGgzLWZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTsgLy8gMjRweFxuJGg0LWZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTsgLy8gMjBweFxuJGg1LWZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiRmb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRmb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtc206IHZhcigtLWZvbnQtc2l6ZS1zbSk7IC8vIDEycHhcbiRmb250LXNpemUteHM6IHZhcigtLWZvbnQtc2l6ZS14cyk7IC8vIDEwcHhcbiRwLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuLy8gc3BhY2VzXG4kYmFzZS1ibG9jay1zcGFjZTogMC41cmVtO1xuIl19 */"];



/***/ }),

/***/ "6H+8":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/certificate/services/upload-certificate/upload-certificate.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: UploadCertificateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCertificateService", function() { return UploadCertificateService; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _modules_core_services_content_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../modules/core/services/content/content.service */ "MthD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_public_data_public_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/public-data/public-data.service */ "BZPo");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");












var UploadCertificateService = (function () {
    function UploadCertificateService(publicDataService, http, configService, contentService, userService) {
        this.publicDataService = publicDataService;
        this.http = http;
        this.configService = configService;
        this.contentService = contentService;
        this.userService = userService;
        this.certificate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    UploadCertificateService.prototype.getAssetData = function (query, type) {
        var body = {
            'request': {
                'filters': {
                    'mediaType': ['image'],
                    'contentType': ['Asset'],
                    'compatibilityLevel': { 'min': 1, 'max': 2 },
                    'status': ['Live'],
                    'primaryCategory': 'Asset'
                },
                'sort_by': {
                    'lastUpdatedOn': 'desc'
                },
                'limit': 50,
                'offset': 0
            }
        };
        if (!type) {
            body['request']['filters']['channel'] = this.userService.channel;
        }
        if (query) {
            body['request']['query'] = query;
        }
        var option = {
            url: this.configService.urlConFig.URLS.CONTENT.SEARCH,
            data: body
        };
        return this.publicDataService.post(option);
    };
    UploadCertificateService.prototype.getCertificates = function (request) {
        var option = {
            url: this.configService.urlConFig.URLS.COMPOSITE.SEARCH,
            data: request
        };
        return this.contentService.post(option);
    };
    UploadCertificateService.prototype.createAsset = function (reqObj, type) {
        var body = {
            'request': {
                'content': {
                    'name': reqObj.assetCaption,
                    'creator': reqObj.creator,
                    'createdBy': reqObj.creatorId,
                    'code': 'org.ekstep0.9002440445885993',
                    'mimeType': 'image/png',
                    'mediaType': 'image',
                    'contentType': 'Asset',
                    'primaryCategory': 'Asset',
                    'osId': 'org.ekstep.quiz.app',
                    'language': ['English'],
                    'channel': this.userService.channel
                }
            }
        };
        var option = {
            url: this.configService.urlConFig.URLS.CONTENT.CREATE,
            data: body
        };
        return this.contentService.post(option);
    };
    UploadCertificateService.prototype.storeAsset = function (file, identifier) {
        var formData = new FormData();
        formData.append('file', file);
        var option = {
            url: this.configService.urlConFig.URLS.CERTIFICATE.UPLOAD_CERT_TEMPLATE + "/" + identifier,
            data: formData
        };
        return this.contentService.post(option);
    };
    UploadCertificateService.prototype.getSvg = function (path) {
        return this.http.get(path, { responseType: 'text' }).toPromise();
    };
    UploadCertificateService.prototype.createCertTemplate = function (data) {
        var option = {
            url: this.configService.urlConFig.URLS.CERTIFICATE.CREATE_CERT_TEMPLATE,
            data: data
        };
        return this.contentService.post(option);
    };
    UploadCertificateService.prototype.uploadTemplate = function (svgFile, identifier) {
        var formData = new FormData();
        formData.append('file', svgFile);
        var option = {
            url: this.configService.urlConFig.URLS.CERTIFICATE.UPLOAD_CERT_TEMPLATE + "/" + identifier,
            data: formData
        };
        return this.contentService.post(option);
    };
    UploadCertificateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function UploadCertificateService_Factory() { return new UploadCertificateService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_public_data_public_data_service__WEBPACK_IMPORTED_MODULE_6__["PublicDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_modules_core_services_content_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); }, token: UploadCertificateService, providedIn: "root" });
    return UploadCertificateService;
}());



/***/ }),

/***/ "9A5R":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-details/certificate-details.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_CertificateDetailsComponent, View_CertificateDetailsComponent_0, View_CertificateDetailsComponent_Host_0, CertificateDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CertificateDetailsComponent", function() { return RenderType_CertificateDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertificateDetailsComponent_0", function() { return View_CertificateDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertificateDetailsComponent_Host_0", function() { return View_CertificateDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDetailsComponentNgFactory", function() { return CertificateDetailsComponentNgFactory; });
/* harmony import */ var _certificate_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificate-details.component.scss.shim.ngstyle */ "VePS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _player_helper_components_player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../player-helper/components/player/player.component.ngfactory */ "5rFI");
/* harmony import */ var _player_helper_components_player_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../player-helper/components/player/player.component */ "SSdx");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/form/form.service */ "9dCP");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _core_services_content_content_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/content/content.service */ "MthD");
/* harmony import */ var _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/services/public-player/public-player.service */ "eOgm");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _certificate_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./certificate-details.component */ "fIOR");
/* harmony import */ var _core_services_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../core/services/certificate/certificate.service */ "dd+U");
/* harmony import */ var _core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/services/tenant/tenant.service */ "LePv");

























var styles_CertificateDetailsComponent = [_certificate_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CertificateDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CertificateDetailsComponent, data: {} });

function View_CertificateDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "sb-certificatePage-label"], ["for", "certificate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.enterCertificateCode))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "sb-field-error-label sb-certificatePage-label sb-color-error"], ["for", "certificate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.enterValidCertificateCode))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "div", [["class", "sb-certificatePage"]], [[2, "loading", null], [2, "error", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "sb-certificatePage-overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "sb-certificatePage-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "sb-certificatePage-logo"]], [[8, "alt", 0], [8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "sb-certificatePage-desc mb-auto m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "sb-certificatePage-loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "Loader"], ["class", "sb-certificatePage-loader-img"], ["src", "assets/images/loader.gif"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "img", [["alt", "Certificate Desc"], ["class", "sb-certificatePage-desc-img"], ["src", "assets/images/certificate.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 20, "div", [["class", "sb-certificatePage-form mb-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 19, "div", [["class", "sb-form-field-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 14, "div", [["class", "sb-certificatePage-field sb-field"], ["id", "certificate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, [[1, 0], ["codeInputField", 1]], null, 9, "input", [["autofocus", ""], ["class", "sb-form-control text-center"], ["maxlength", "6"], ["name", "certificate"], ["pattern", "^[-a-zA-Z0-9@\\.+_]+$"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup"], [null, "keydown.space"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup" === en)) {
        var pd_4 = (_co.getCodeLength($event) !== false);
        ad = (pd_4 && ad);
    } if (("keydown.space" === en)) {
        var pd_5 = ($event.preventDefault() !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = ((_co.certificateCode = $event) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0, p2_0) { return [p0_0, p1_0, p2_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-primary sb-btn-normal width-100 mt-32"], ["tabindex", "0"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.certificateVerify() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_4__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_5__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"], telemetryInteractCdata: [1, "telemetryInteractCdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](29, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = !_co.wrongCertificateCode; _ck(_v, 13, 0, currVal_5); var currVal_6 = _co.wrongCertificateCode; _ck(_v, 15, 0, currVal_6); var currVal_17 = ""; _ck(_v, 19, 0, currVal_17); var currVal_18 = "6"; _ck(_v, 20, 0, currVal_18); var currVal_19 = "^[-a-zA-Z0-9@\\.+_]+$"; _ck(_v, 21, 0, currVal_19); var currVal_20 = "certificate"; var currVal_21 = _co.certificateCode; _ck(_v, 24, 0, currVal_20, currVal_21); var currVal_23 = _ck(_v, 29, 0, "verify-certificate-button", "click", _co.pageId); var currVal_24 = _co.telemetryCdata; _ck(_v, 28, 0, currVal_23, currVal_24); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loader; var currVal_1 = _co.error; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.tenantName, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.logo, ""); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.verifyingCertificate))); _ck(_v, 7, 0, currVal_4); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required ? "" : null); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).maxlength : null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).pattern : null); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending; _ck(_v, 17, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_22 = !_co.enableVerifyButton; _ck(_v, 27, 0, currVal_22); var currVal_25 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.verify))); _ck(_v, 30, 0, currVal_25); }); }
function View_CertificateDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "sb-certificatePage-holder-desc sb-certificatePage-holder-desc-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.certificateIssuedTo))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "sb-certificatePage-holder-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recipient; _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "p", [["class", "sb-certificatePage-holder-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "strong", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\u201C", "\u201D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "span", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.completingCourseSuccessfully))); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.courseName; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.onDiksha))), "{instance}", _co.instance)); _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.issuedOn; _ck(_v, 8, 0, currVal_3); }); }
function View_CertificateDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["appTelemetryInteract", ""], ["class", "player-thumbnail"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.playContent(_co.contentId) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_4__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_5__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { id: 0, type: 1, pageid: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, "watch-video-button", "click", _co.pageId); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CertificateDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "h-100 certificate-area-player"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-player", [["class", "content-player"]], null, [["window", "popstate"], ["window", "orientationchange"]], function (_v, en, $event) { var ad = true; if (("window:popstate" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onPopState($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:orientationchange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).handleOrientationChange($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _player_helper_components_player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PlayerComponent_0"], _player_helper_components_player_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PlayerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4964352, null, 0, _player_helper_components_player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"], [_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_12__["NavigationHelperService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__["DeviceDetectorService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_15__["FormService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_16__["ContentUtilsServiceService"], _core_services_content_content_service__WEBPACK_IMPORTED_MODULE_17__["ContentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__["PublicPlayerService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_19__["UtilService"]], { playerConfig: [0, "playerConfig"], overlayImagePath: [1, "overlayImagePath"], isSingleContent: [2, "isSingleContent"], pageId: [3, "pageId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.playerConfig; var currVal_1 = "assets/images/featured-content.jpg"; var currVal_2 = false; var currVal_3 = _co.pageId; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_CertificateDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "sb-mobileDevice text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "sb-mobileDevice-screen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "sb-mobileDevice-sensors"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "sb-mobileDevice-sensor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "sb-mobileDevice-speaker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "sb-mobileDevice-sensor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showVideoThumbnail; _ck(_v, 7, 0, currVal_0); var currVal_1 = !_co.showVideoThumbnail; _ck(_v, 9, 0, currVal_1); }, null); }
function View_CertificateDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "sb-certificatePage sb-certificate-view sb-certificatePage-flexHeight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "sb-certificatePage-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "sb-certificatePage-logo"]], [[8, "alt", 0], [8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "sb-certificatePage-holder-details mb-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Badge"], ["class", "sb-icon-badge mt-24 mb-8"], ["src", "assets/images/badge.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "sb-certificatePage sb-certificate-view min-height-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "sb-certificatePage-holder-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "a", [["appTelemetryInteract", ""], ["class", "mt-32 width-100 d-flex flex-jc-space-between p-8 cursor-pointer sb-btn-arrow"], ["tabindex", "0"], ["title", "Return to Courses"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateToCoursesPage() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_4__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_5__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](18, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "i", [["class", "angle right icon"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.recipient; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.recipient; _ck(_v, 9, 0, currVal_3); var currVal_4 = (_co.courseName && _co.issuedOn); _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.watchVideoLink; _ck(_v, 13, 0, currVal_5); var currVal_6 = _ck(_v, 18, 0, "return-to-courses-button", "click", _co.pageId); _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.tenantName, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.logo, ""); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_7 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.returnToCourses))); _ck(_v, 19, 0, currVal_7); }); }
function View_CertificateDetailsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "sb-certificatePage-holder-desc sb-certificatePage-holder-desc-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.certificateIssuedTo))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "sb-certificatePage-holder-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recipient; _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateDetailsComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "p", [["class", "sb-certificatePage-holder-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "strong", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\u201C", "\u201D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "span", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.completingCourseSuccessfully))); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.courseName; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.onDiksha))), "{instance}", _co.instance)); _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.issuedOn; _ck(_v, 8, 0, currVal_3); }); }
function View_CertificateDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "sb-certificatePage sb-certificate-view sb-certificatePage-flexHeight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "sb-certificatePage-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "sb-certificatePage-logo"]], [[8, "alt", 0], [8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "sb-certificatePage-holder-details mb-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Badge"], ["class", "sb-icon-badge mt-24 mb-8"], ["src", "assets/images/badge.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.recipient; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.recipient; _ck(_v, 9, 0, currVal_3); var currVal_4 = (_co.courseName && _co.issuedOn); _ck(_v, 11, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.tenantName, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.logo, ""); _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_CertificateDetailsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "sb-certificatePage"]], [[2, "loading", null], [2, "error", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "sb-certificatePage sb-certificate-view sb-certificatePage-flexHeight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "sb-certificatePage-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "sb-certificatePage-logo"]], [[8, "alt", 0], [8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "sb-certificatePage-holder-details mb-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["class", "mr-8"], ["src", "assets/images/exclamation.svg"], ["width", "20px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loader; var currVal_1 = _co.error; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.tenantName, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.logo, ""); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.imsg == null) ? null : _co.resourceService.frmelmnts.cert.imsg.rcInvalid)))); _ck(_v, 6, 0, currVal_4); }); }
function View_CertificateDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_20__["InterpolatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { codeInputField: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "sb-certificatePage-bg"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 737280, null, 0, _telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_21__["TelemetryImpressionDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_5__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateDetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpressionData; _ck(_v, 3, 0, currVal_0); var currVal_1 = (!_co.viewCertificate && !_co.validateRCCertificate); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_co.viewCertificate && !_co.validateRCCertificate); _ck(_v, 7, 0, currVal_2); var currVal_3 = (_co.validateRCCertificate && _co.viewCertificate); _ck(_v, 9, 0, currVal_3); var currVal_4 = ((_co.validateRCCertificate && !_co.viewCertificate) && _co.isInvalidCertificate); _ck(_v, 11, 0, currVal_4); }, null); }
function View_CertificateDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-certificate-details", [], null, null, null, View_CertificateDetailsComponent_0, RenderType_CertificateDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _certificate_details_component__WEBPACK_IMPORTED_MODULE_22__["CertificateDetailsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _core_services_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_23__["CertificateService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _public_services_public_player_public_player_service__WEBPACK_IMPORTED_MODULE_18__["PublicPlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_24__["TenantService"], "CS_CERTIFICATE_SERVICE", _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CertificateDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-certificate-details", _certificate_details_component__WEBPACK_IMPORTED_MODULE_22__["CertificateDetailsComponent"], View_CertificateDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "DOJC":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-configuration/certificate-configuration.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_nghost-%COMP%]   .back-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .textbook-container[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n  background-color: var(--rc-FAFAFA);\n}\n[_nghost-%COMP%]   .textbook__details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n[_nghost-%COMP%]   .textbook__bookimg[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n[_nghost-%COMP%]   .textbook__bookimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n[_nghost-%COMP%]   .textbook__heading[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n[_nghost-%COMP%]   .textbook__heading[_ngcontent-%COMP%]   .textbook__title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .textbook__addbtn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.125rem;\n  z-index: 2;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-scrollbar[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  padding-left: 0;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-scrollbar[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificates-label[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  letter-spacing: 0;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-content-area[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background: var(--white);\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%] {\n    height: auto;\n    margin-bottom: 0px;\n  }\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%]   .certificate-sbcard[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-family: \"Noto Sans\";\n  font-size: 0.75rem;\n  min-height: 3.25rem;\n  box-shadow: 0 3px 4px 0 rgba(2, 79, 157, 0.1);\n  background-color: var(--white);\n  border: 0.0625rem solid var(--rc-dedede);\n  border-radius: 0.75rem;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out, opacity 0.2s ease-out;\n  transition-delay: 0.1s;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%]   .certificate-sbcard[_ngcontent-%COMP%]:active {\n  color: var(--primary-400);\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%]   .certificate-sbcard[_ngcontent-%COMP%]:active   .border-right[_ngcontent-%COMP%] {\n  border-right: 0.25rem solid var(--primary-400);\n  height: 1.5rem;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%]   .certificate-sbcard[_ngcontent-%COMP%]   .certificate-card-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-sidebar[_ngcontent-%COMP%]   .certificate-sbcard[_ngcontent-%COMP%]   .certificate-card-count[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0.125rem;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .select-template-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .select-template-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .select-template-content[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .select-template-content[_ngcontent-%COMP%]   .no-template-text[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  text-align: center;\n  max-width: 19.375rem;\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .select-template-content[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0.0625rem;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%] {\n  background: var(--white);\n  width: 100%;\n  height: 100vh;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"smallcard smallcard2\";\n  grid-gap: 1.5rem;\n  grid-template-columns: 1fr 1fr;\n  background: var(--white);\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%] {\n    grid-template-areas: \"smallcard\" \"smallcard2\";\n    grid-template-columns: 1fr;\n  }\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  border: 0.0625rem solid #E8E8E8;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]:nth-child(1) {\n  grid-area: smallcard;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]:nth-child(2) {\n  grid-area: smallcard2;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]   .certificate-edit-sbcard-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]   .certificate-edit-sbcard-content[_ngcontent-%COMP%]   .certificate-frame[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.4375rem 0 rgba(0, 0, 0, 0.16);\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]   .certificate-edit-sbcard-content[_ngcontent-%COMP%]   .certificate-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .certificate-edit-content[_ngcontent-%COMP%]   .certificate-edit-area[_ngcontent-%COMP%]   .certificate-edit-sbcard[_ngcontent-%COMP%]   .certificate-edit-sbcard-content[_ngcontent-%COMP%]   .certificate-frame[_ngcontent-%COMP%]   .no-cert[_ngcontent-%COMP%] {\n  min-height: 18.75rem;\n}\n[_nghost-%COMP%]     .ui.selection.dropdown > .text {\n  cursor: text;\n  font-weight: bold;\n  position: relative;\n  left: 8px;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]     .ui.selection.dropdown > .text {\n  right: 8px;\n  left: 0px;\n}\n[_nghost-%COMP%]   .sb-batch-update-modal[_ngcontent-%COMP%]   .checkbox-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 3rem;\n  display: inline;\n  width: 2rem;\n  height: 2rem;\n  background-color: var(--rc-009D53);\n  -webkit-mask-image: url('dist/warning.svg');\n  mask-image: url('dist/warning.svg');\n  -webkit-mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  mask-position: 50% 50%;\n  mask-repeat: no-repeat;\n}\n.add-new-template-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  background-color: var(--white);\n  box-shadow: 0 0.1875rem 0.25rem 0 rgba(2, 79, 157, 0.1);\n  position: relative;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .rules-form-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .ui.grid[_ngcontent-%COMP%]    > [class*=\"twelve wide\"].column[_ngcontent-%COMP%] {\n    padding: 0px !important;\n  }\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .progress-separator[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 0.125rem;\n  opacity: 0.3;\n  background-color: var(--rc-d8d8d8);\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .completion-text[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .completion-text[_ngcontent-%COMP%]   .asterik[_ngcontent-%COMP%] {\n  color: var(--red-400);\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .close-score[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .close-score[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[_nghost-%COMP%]   .rules-configuration[_ngcontent-%COMP%]   .close-score[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n  .overlay-buttons .sb-btn-no-border {\n  align-items: center;\n}\n.progess-add-content[_ngcontent-%COMP%]   .left-border[_ngcontent-%COMP%] {\n  width: 0.0625rem;\n  background-color: var(--rc-bdbdbd);\n  height: 2rem;\n  margin-left: 1.25rem;\n}\n.progess-add-content[_ngcontent-%COMP%]   .add-score-btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  background-color: var(--white);\n  box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(0, 0, 0, 0.1);\n  border: none;\n  color: var(--rc-DD680F);\n  text-transform: uppercase;\n}\n.progess-add-content[_ngcontent-%COMP%]   .plus-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: var(--white);\n  border: none;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2NlcnRpZmljYXRlLWNvbmZpZ3VyYXRpb24vY2VydGlmaWNhdGUtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsV0FBQTtBQUpKO0FBU0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVBOO0FBVUk7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQVJOO0FBV0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVRSO0FBYUk7RUFDRSxZQUFBO0FBWE47QUFhTTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYUjtBQWVJO0VBQ0UsbUJBQUE7QUFiTjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFmSjtBQWlCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWZOO0FBZ0JNO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQWRSO0FBaUJJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBZk47QUFrQkk7RUFDRSxXQUFBO0FBaEJOO0FBbUJJO0VBQ0UsYUFBQTtFQUVBLFdBQUE7RUFDQSx3QkFBQTtBQWxCTjtBQ0ZJO0VEZ0JBO0lBT0ksWUFBQTtJQUNBLGtCQUFBO0VBakJOO0FBQ0Y7QUFtQk07RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvRkFBQTtFQUNBLHNCQUFBO0FBakJSO0FBbUJRO0VBR0UseUJBQUE7RUFDQSxpQkFBQTtBQW5CVjtBQXFCVTtFQUNFLDhDQUFBO0VBQ0EsY0FBQTtBQW5CWjtBQXVCUTtFQUNFLGtCQUFBO0FBckJWO0FBd0JRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXRCVjtBQTJCSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQXpCTjtBQTRCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBMUJOO0FDOUNJO0VEc0VBO0lBTUksWUFBQTtFQTFCTjtBQUNGO0FBNEJNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUExQlI7QUE2Qk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBM0JSO0FBK0JJO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTdCTjtBQ2xFSTtFRDRGQTtJQU1JLFlBQUE7RUE1Qk47QUFDRjtBQThCTTtFQUNFLGFBQUE7RUFDQSwyQ0FDRTtFQUNGLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQTdCUjtBQzlFSTtFRHFHRTtJQVNJLDZDQUNFO0lBRUYsMEJBQUE7RUE5QlI7QUFDRjtBQWdDUTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQTlCVjtBQWdDVTtFQUNFLG9CQUFBO0FBOUJaO0FBaUNVO0VBQ0UscUJBQUE7QUEvQlo7QUFrQ1U7RUFDRSxZQUFBO0FBaENaO0FBa0NZO0VBQ0Usc0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoQ2Q7QUFrQ2M7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQWhDaEI7QUFtQ2M7RUFDRSxvQkFBQTtBQWpDaEI7QUE0Q0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUExQ047QUE0Q007RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQTFDUjtBQWdESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUE5Q047QUFvREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBakRGO0FBcURFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7QUFsREo7QUN2Skk7RURxTUY7SUFPSSxzQkFBQTtFQWpESjtFQW1ESTtJQUNFLHNCQUFBO0VBakROO0VBb0RJO0lBQ0UsdUJBQUE7RUFsRE47QUFDRjtBQXFESTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQW5ETjtBQXNESTtFQUNFLHNCQUFBO0FBcEROO0FBc0RNO0VBQ0UscUJBQUE7QUFwRFI7QUF3REk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBdEROO0FBd0RNO0VBQ0UsVUFBQTtBQXREUjtBQXlETTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBdkRSO0FBNkRFO0VBQ0UsbUJBQUE7QUExREo7QUErREU7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBNURKO0FBK0RFO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUE3REo7QUFnRUU7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBOURKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2NlcnRpZmljYXRlLWNvbmZpZ3VyYXRpb24vY2VydGlmaWNhdGUtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnMvbWl4aW5zXCI7XG5cbjpob3N0IHtcblxuICAvL2JhY2staGVhZGVyXG4gIC5iYWNrLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyB0ZXh0Ym9vayBoZWFkZXJcbiAgLnRleHRib29rIHtcbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmMtRkFGQUZBKTtcbiAgICB9XG5cbiAgICAmX19kZXRhaWxzIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJl9fYm9va2ltZyB7XG4gICAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDQ4cHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNDhweCk7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNDhweCk7XG4gICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDQ4cHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2hlYWRpbmcge1xuICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAudGV4dGJvb2tfX3RpdGxlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hZGRidG4ge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cblxuICAuY2VydGlmaWNhdGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBjYWxjdWxhdGVSZW0oMnB4KTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLmNlcnRpZmljYXRlLXNjcm9sbGJhciB7XG4gICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBodG1sW2Rpcj1cInJ0bFwiXSAmIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5jZXJ0aWZpY2F0ZXMtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMThweCk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5jZXJ0aWZpY2F0ZS1jb250ZW50LWFyZWEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNlcnRpZmljYXRlLXNpZGViYXIge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIC8vIHotaW5kZXg6IDI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIH1cblxuICAgICAgLmNlcnRpZmljYXRlLXNiY2FyZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xuICAgICAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiAgICAgICAgbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDUycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA0cHggMCByZ2JhKDIsIDc5LCAxNTcsIDAuMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyOiAuMDYyNXJlbSBzb2xpZCB2YXIoLS1yYy1kZWRlZGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oMTJweCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcyBlYXNlLW91dCwgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCwgb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xcztcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgLy8gYm9yZGVyOiAuMDYyNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCA3OSwgMTU3LCAwLjEpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAuYm9yZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogY2FsY3VsYXRlUmVtKDRweCkgc29saWQgdmFyKC0tcHJpbWFyeS00MDApO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMjRweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNlcnRpZmljYXRlLWNhcmQtaW1nIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2VydGlmaWNhdGUtY2FyZC1jb3VudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvdHRvbTogY2FsY3VsYXRlUmVtKDJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0LXRlbXBsYXRlLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnNlbGVjdC10ZW1wbGF0ZS1jb250ZW50IHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5uby10ZW1wbGF0ZS10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSgzMTBweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDEycHgpO1xuICAgICAgfVxuXG4gICAgICAucGx1cy1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IGNhbGN1bGF0ZVJlbSgxcHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jZXJ0aWZpY2F0ZS1lZGl0LWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLmNlcnRpZmljYXRlLWVkaXQtYXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgXCJzbWFsbGNhcmQgc21hbGxjYXJkMlwiO1xuICAgICAgICBncmlkLWdhcDogY2FsY3VsYXRlUmVtKDI0cHgpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwic21hbGxjYXJkXCJcbiAgICAgICAgICAgIFwic21hbGxjYXJkMlwiO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNlcnRpZmljYXRlLWVkaXQtc2JjYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCAjRThFOEU4O1xuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBzbWFsbGNhcmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBzbWFsbGNhcmQyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jZXJ0aWZpY2F0ZS1lZGl0LXNiY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgLmNlcnRpZmljYXRlLWZyYW1lIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjQzNzVyZW0gMCByZ2JhKDAsIDAsIDAsIC4xNik7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubm8tY2VydCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDMwMHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgOjpuZy1kZWVwIHtcbiAgICAudWkuc2VsZWN0aW9uLmRyb3Bkb3duPi50ZXh0IHtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogOHB4O1xuXG4gICAgICBodG1sW2Rpcj1cInJ0bFwiXSAmIHtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zYi1iYXRjaC11cGRhdGUtbW9kYWwge1xuICAgIC5jaGVja2JveC1pbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwLjVyZW07XG4gICAgICBsZWZ0OiAzcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYy0wMDlENTMpO1xuICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YXJuaW5nLnN2Zyk7XG4gICAgICBtYXNrLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YXJuaW5nLnN2Zyk7XG4gICAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcbiAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIG1hc2stc2l6ZTogY29udGFpbjtcbiAgICAgIG1hc2stcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgfVxuXG59XG5cbi5hZGQtbmV3LXRlbXBsYXRlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbjpob3N0e1xuICAucnVsZXMtY29uZmlndXJhdGlvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDEycHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiAwIGNhbGN1bGF0ZVJlbSgzcHgpIGNhbGN1bGF0ZVJlbSg0cHgpIDAgcmdiYSgyLCA3OSwgMTU3LCAwLjEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gICAgICAucnVsZXMtZm9ybS1jb250ZW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgXG4gICAgICAudWkuZ3JpZD5bY2xhc3MqPVwidHdlbHZlIHdpZGVcIl0uY29sdW1uIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucHJvZ3Jlc3Mtc2VwYXJhdG9yIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDJweCk7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYy1kOGQ4ZDgpO1xuICAgIH1cbiAgXG4gICAgLmNvbXBsZXRpb24tdGV4dCB7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xuICBcbiAgICAgIC5hc3RlcmlrIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC00MDApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmNsb3NlLXNjb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgdG9wOiAxcmVtO1xuICBcbiAgICAgIGh0bWxbZGlyPVwicnRsXCJdICYge1xuICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgLm92ZXJsYXktYnV0dG9ucyAuc2ItYnRuLW5vLWJvcmRlcntcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5wcm9nZXNzLWFkZC1jb250ZW50IHtcbiAgLmxlZnQtYm9yZGVyIHtcbiAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDFweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmMtYmRiZGJkKTtcbiAgICBoZWlnaHQ6IDIuMHJlbTtcbiAgICBtYXJnaW4tbGVmdDogY2FsY3VsYXRlUmVtKDIwcHgpO1xuICB9XG5cbiAgLmFkZC1zY29yZS1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogY2FsY3VsYXRlUmVtKDVweCkgY2FsY3VsYXRlUmVtKDVweCkgY2FsY3VsYXRlUmVtKDJweCkgMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1yYy1ERDY4MEYpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAucGx1cy1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oNDBweCk7XG4gICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNDBweCk7XG4gIH1cbn1cbiIsIi8vXG4vLyAgTUVESUEgUVVFUklFU1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDU3NnB4LFxuICBzbTogNzY4cHgsXG4gIG1kOiA5OTJweCxcbiAgbGc6IDEyODBweCxcbiAgeGw6IDE0NDBweCxcbiAgeHhsOiAxNjAwcHgsXG4gIHh4eGw6IDE5MDBweFxuKTtcblxuXG4vL1xuLy8gIFJFU1BPTkQgQUJPVkVcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRUxPV1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFVFdFRU5cbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "FhpT":
/*!**************************************************************!*\
  !*** ./node_modules/ng-svg-editor/fesm2015/ng-svg-editor.js ***!
  \**************************************************************/
/*! exports provided: SvgEditorComponent, SvgEditorModule, SvgEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorComponent", function() { return SvgEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorModule", function() { return SvgEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorService", function() { return SvgEditorService; });
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








var SvgEditorService = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SvgEditorService() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SvgEditorService);
});

SvgEditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  factory: function SvgEditorService_Factory() {
    return new SvgEditorService();
  },
  token: SvgEditorService,
  providedIn: "root"
});
SvgEditorService = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
  providedIn: 'root'
})], SvgEditorService);

var SvgEditorComponent = /*#__PURE__*/function () {
  function SvgEditorComponent(sanitized) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SvgEditorComponent);

    this.sanitized = sanitized;
    this.showPreviewButton = false;
    this.icon = 'M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 5 15 C 5 15 6.005 15.005 6.5 15.5 C 6.995 15.995 6.984375 16.984375 6.984375 16.984375 C 6.984375 16.984375 8.003 17.003 8.5 17.5 C 8.997 17.997 9 19 9 19 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979688 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.537109 6.6347656 L 17.365234 5.4628906 L 18.414062 4.4140625 z M 15.951172 6.8769531 L 17.123047 8.0488281 L 9.4609375 15.710938 C 9.2099375 15.538938 8.9455469 15.408594 8.6855469 15.308594 C 8.5875469 15.050594 8.4590625 14.789063 8.2890625 14.539062 L 15.951172 6.8769531 z M 3.6699219 17 L 3 21 L 7 20.330078 L 3.6699219 17 z';
    this.elementClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.restrict = ['$', '{'];
    this.enableEdit = true;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SvgEditorComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      setTimeout(function () {
        _this.generateMaskForSvgElements();
      }, 1000);

      if (this.edit) {
        /* istanbul ignore next */
        this.edit.subscribe(function (data) {
          _this.updateSVGTag(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'element'), lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'type'), lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'value'));
        });
      }

      if (this.togglePreview) {
        /* istanbul ignore next */
        this.togglePreview.subscribe(function (data) {
          _this.toggleSVGPreview(data);
        });
      }

      if (this.save) {
        /* istanbul ignore next */
        this.save.subscribe(function (data) {
          _this.saveSVG(data);
        });
      }

      if (this.refreshEditor) {
        /* istanbul ignore next */
        this.refreshEditor.subscribe(function () {
          setTimeout(function () {
            _this.generateMaskForSvgElements();
          }, 1000);
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {// setTimeout(() => {
      //   this.generateMaskForSvgElements();
      // }, 1000);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.edit.unsubscribe();
      this.save.unsubscribe();
      if (this.refreshEditor) this.refreshEditor.unsubscribe();
    }
    /**
     * @description
     * - Function to iterate `text` and `image` elements in SVG file
     * - Add edit icon to text and image elements in SVG file
     */

  }, {
    key: "generateMaskForSvgElements",
    value: function generateMaskForSvgElements() {
      var _this2 = this;

      var _a, _b;

      var textElement = (_a = document.getElementById('templateSvg')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('text');

      if (document.getElementsByClassName('svg-edit-icon').length == 0) {
        textElement === null || textElement === void 0 ? void 0 : textElement.forEach(function (svgElement, index) {
          var _a;

          var _elementId = _this2.setElementId(svgElement, index, 'text'); // Pen icon height


          var editIconHeight = 25; // Set custom id for SVG element

          svgElement.setAttribute('id', _elementId); // Add event listener for text

          if (_this2.isStringEditable(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](svgElement, 'textContent'))) {
            svgElement.style.cursor = 'pointer';
            svgElement.addEventListener('click', function (e) {
              // Modal popup for text input
              _this2.svgElementClicked(svgElement, 'text');
            }); // Add pen icon to SVG DOM to end of text tag

            (_a = svgElement === null || svgElement === void 0 ? void 0 : svgElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(_this2.createEditIcon(svgElement, editIconHeight, _elementId), svgElement);
          } else {
            svgElement.style.cursor = 'not-allowed';
          }
        });
        var imageElements = (_b = document.getElementById('templateSvg')) === null || _b === void 0 ? void 0 : _b.querySelectorAll('image');
        imageElements === null || imageElements === void 0 ? void 0 : imageElements.forEach(function (imageElement, index) {
          var _a;

          var _elementId = _this2.setElementId(imageElement, index, 'image'); // Pen icon height


          var editIconHeight = 25; // Set custom id for SVG element

          imageElement.setAttribute('id', _elementId); // Add event listener for image

          imageElement.style.cursor = 'pointer';
          imageElement.addEventListener('click', function (e) {
            // Modal popup for image input
            _this2.svgElementClicked(imageElement, 'image');
          }); // Add pen icon to SVG DOM to end of image tag

          (_a = imageElement === null || imageElement === void 0 ? void 0 : imageElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(_this2.createEditIcon(imageElement, editIconHeight, _elementId), imageElement);
        });
      }
    }
    /**
     * @param  {SVGElement} svgElement  - SVG element
     * @param  {number} editIconHeight  - Edit icon height
     * @param  {string} _elementId      - `id` for SVG element
     * @description                     - Function to construct SVG edit icon
     * @returns                         - SVG element with edit icon
     */

  }, {
    key: "createEditIcon",
    value: function createEditIcon(svgElement, editIconHeight, _elementId) {
      var bBox = svgElement.getBBox(); // Create pen icon wrap for text

      var svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgTag.setAttribute('x', (bBox['x'] + bBox['width']).toString()); // Calculate icon position based on text element height

      if (bBox['height'] > 30) {
        var _iconSpace = bBox['height'] - editIconHeight;

        svgTag.setAttribute('y', (bBox['y'] + _iconSpace / 2).toString());
      } else {
        svgTag.setAttribute('y', bBox['y'].toString());
      }

      svgTag.setAttribute('height', '50');
      svgTag.setAttribute('width', '50');
      svgTag.setAttribute('class', 'svg-edit-icon ' + _elementId);
      var editIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      editIconPath.setAttribute('id', 'pathIdD');
      editIconPath.setAttribute('d', this.icon);
      editIconPath.setAttribute('opacity', '1');
      editIconPath.setAttribute('fill', 'red');
      svgTag.append(editIconPath);
      return svgTag;
    }
    /**
     * @param  {SVGElement} svgElement - SVG element which is clicked
     * @param  {string} type           - Type of element (text / image)
     * @description
     * - Function to emit Output event when user click on SVG element
     */

  }, {
    key: "svgElementClicked",
    value: function svgElementClicked(svgElement, type) {
      if (this.enableEdit) {
        this.elementClicked.emit({
          type: type,
          element: svgElement
        });
      }
    }
    /**
     * @param  {SVGElement} e   - SVG element
     * @param  {number} index   - Index of an element in SVG elements node
     * @param  {string} type    - Type of element (text / image)
     * @description             - Function to set `id` for element
     * @returns {string}        - `id` for an element
     */

  }, {
    key: "setElementId",
    value: function setElementId(e, index, type) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](e, 'id') ? lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](e, 'id') + ' ' + type + '_' + index : type + '_' + index;
    }
    /**
     * @param  {any} html - SVG file string
     * @description
     * - ̌DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS)
     * - by sanitizing values to be safe to use in the different DOM contexts
     * @returns {string}  - Return SGV file with scripts tag executable
     */

  }, {
    key: "sanitizeHTML",
    value: function sanitizeHTML(html) {
      return this.sanitized.bypassSecurityTrustHtml(html);
    }
    /**
     * @param  {SVGElement} element - SVG element
     * @param  {string} type        - Type of element (text / image)
     * @param  {string} value       - Either updated text value or image href value (URL path / Base64 string)
     * @description
     * - Function to modify the provided SVG element with new value
     * - In case of image element; `href` and `xlink:href` both are updated with new value
     * - Once new value are updated to respective tags;
     * - - `updateSVGRectBoundary` is called for redrawing icon position
     */

  }, {
    key: "updateSVGTag",
    value: function updateSVGTag(element, type, value) {
      var _element = document === null || document === void 0 ? void 0 : document.getElementById(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](element, 'id'));

      if (_element && type === 'text') {
        if (this.isStringEditable(value)) {
          _element.textContent = value;
        } else {
          alert('Updated value starts with restricted characters ' + this.restrict);
        }
      }

      if (_element && type === 'image') {
        _element.setAttribute('xlink:href', value);

        _element.setAttribute('href', value);
      }

      this.updateSVGRectBoundary(element);
    }
    /**
     * @param  {SVGElement} svgElement - SVG element
     * @description
     * - Function to update edit icon with new position based on updated value dimensions
     */

  }, {
    key: "updateSVGRectBoundary",
    value: function updateSVGRectBoundary(svgElement) {
      var element = document.getElementById(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](svgElement, 'id')); // Determine the coordinates of the text tag

      var bBox = element.getBBox(); // Update edit icon wrap boundaries for text tag

      var svgTag = document.getElementsByClassName(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](svgElement, 'id'));
      svgTag[0].setAttribute('x', (bBox['x'] + bBox['width']).toString());
      svgTag[0].setAttribute('y', bBox['y'].toString());
      svgTag[0].setAttribute('height', '50');
      svgTag[0].setAttribute('width', '50');
    }
    /**
     * @param  {string} data  - String whether to show / hide edit icon
     * @description
     * - Function to toggle show / hide edit icon
     */

  }, {
    key: "toggleSVGPreview",
    value: function toggleSVGPreview(data) {
      if (typeof data !== 'string') return false;

      if (data === 'show') {
        document.querySelectorAll('.svg-edit-icon').forEach(function (el) {
          el.style.display = 'inline';
        });
      } else if (data === 'hide') {
        document.querySelectorAll('.svg-edit-icon').forEach(function (el) {
          el.style.display = 'none';
        });
      } else {
        return false;
      }
    }
    /**
     * @param  {any} textString - String to be validated
     * @description
     * Function to check whether string is starting with restricted characters or not
     */

  }, {
    key: "isStringEditable",
    value: function isStringEditable(textString) {
      return !this.restrict.some(function (t) {
        return textString.includes(t);
      });
    }
    /**
     * @param  {string} data - String
     * @description
     * Function to remove all edit icon elements and disable edit on fields
     */

  }, {
    key: "saveSVG",
    value: function saveSVG(data) {
      var _a, _b;

      this.enableEdit = false;
      var textElement = (_a = document.getElementById('templateSvg')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('text');
      textElement === null || textElement === void 0 ? void 0 : textElement.forEach(function (svgElement, index) {
        svgElement.style.cursor = 'default';
      });
      var imageElements = (_b = document.getElementById('templateSvg')) === null || _b === void 0 ? void 0 : _b.querySelectorAll('image');
      imageElements === null || imageElements === void 0 ? void 0 : imageElements.forEach(function (imageElement, index) {
        imageElement.style.cursor = 'default';
      });
      document.querySelectorAll('.svg-edit-icon').forEach(function (el) {
        el.remove();
      });
    }
  }]);

  return SvgEditorComponent;
}();

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "icon", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "svgContent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "edit", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "save", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "refreshEditor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], SvgEditorComponent.prototype, "elementClicked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "togglePreview", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], SvgEditorComponent.prototype, "restrict", void 0);

SvgEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'svg-editor',
  template: "<div *ngIf='svgContent' id='templateSvg' [innerHTML]='svgContent'></div>"
})], SvgEditorComponent);

var SvgEditorModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SvgEditorModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SvgEditorModule);
});

SvgEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
  declarations: [SvgEditorComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
  exports: [SvgEditorComponent]
})], SvgEditorModule);
/*
 * Public API Surface of svg-editor
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "Jm7v":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/certificate/components/svg-editor/svg-editor.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SvgEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorComponent", function() { return SvgEditorComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/cert-config-model/cert-config-model */ "LOdU");
/* harmony import */ var _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component */ "TbDo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
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











var SvgEditorComponent = (function () {
    function SvgEditorComponent(uploadCertificateService, userService, sanitizer, activatedRoute, certRegService, toasterService, resourceService, navigationHelperService, layoutService) {
        var _this = this;
        this.uploadCertificateService = uploadCertificateService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.certRegService = certRegService;
        this.toasterService = toasterService;
        this.resourceService = resourceService;
        this.navigationHelperService = navigationHelperService;
        this.layoutService = layoutService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.selectStateOption = [];
        this.selectLanguageOption = [];
        this.certLogos = [];
        this.certSigns = [];
        this.defaultCertificates = [];
        this.selectedCertificate = {};
        this.center = 275;
        this.disableCreateTemplate = true;
        this.certConfigModalInstance = new _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_7__["CertConfigModel"]();
        this.images = {
            'LOGO1': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'LOGO2': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'SIGN1': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'SIGN2': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' }
        };
        this.classNames = {
            'STATE_LOGOS': 'state-logo',
            'STATE_TITLE': 'state-title',
            'SIGN_LOGO': ['signatureImg1', 'signatureImg2'],
            'CERT_TITLE': 'cert-title',
            'DESIGNATIONS_NAMES': ['signatureTitle1', 'signatureTitle2'],
            'DESIGNATIONS': ['signatureTitle1a', 'signatureTitle2a']
        };
        this.optionSing = 'SIGN2';
        this.edit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.refreshEditor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.togglePreview = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.save = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.showSVGInputModal = false;
        this.disableSVGImageModal = false;
        this.selectedSVGObject = {};
        this.showPreviewButton = true;
        this.previewButton = 'show';
        this.saveAndPreview = false;
        this.userConsent = false;
        this.getBase64FromUrl = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var data, blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(url)];
                    case 1:
                        data = _a.sent();
                        return [4, data.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2, new Promise(function (resolve) {
                                var reader = new FileReader();
                                reader.readAsDataURL(blob);
                                reader.onloadend = function () {
                                    var base64data = reader.result;
                                    resolve(base64data);
                                };
                            })];
                }
            });
        }); };
    }
    SvgEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.mode = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.queryParams, 'type');
        });
        this.navigationHelperService.setNavigationUrl();
        this.initializeFormFields();
        this.getDefaultTemplates();
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.redoLayout();
    };
    SvgEditorComponent.prototype.getDefaultTemplates = function () {
        var _this = this;
        var request = {
            'request': {
                'filters': {
                    'certType': 'cert template layout',
                    'channel': this.userService.channel,
                    'mediaType': 'image'
                },
                'fields': ['identifier', 'name', 'code', 'certType', 'data', 'issuer', 'signatoryList', 'artifactUrl', 'primaryCategory', 'channel'],
                'limit': 100
            }
        };
        this.uploadCertificateService.getCertificates(request).subscribe(function (res) {
            _this.defaultCertificates = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](res, 'result.content');
            _this.selectedCertificate = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.defaultCertificates[0]);
            _this.getSVGTemplate();
        });
    };
    SvgEditorComponent.prototype.initializeFormFields = function () {
        var _this = this;
        this.createTemplateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            certificateTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            stateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            authoritySignature_0: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            authoritySignature_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            allowPermission: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.createTemplateForm.valueChanges.subscribe(function (val) {
            _this.validateForm();
        });
    };
    SvgEditorComponent.prototype.validateForm = function () {
        var logo = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.images, 'LOGO1.url');
        var sign = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.images, 'SIGN1.url');
        if (this.createTemplateForm.status === 'VALID' && lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.createTemplateForm, 'value.allowPermission')
            && logo && sign) {
            this.disableCreateTemplate = false;
        }
        else {
            this.disableCreateTemplate = true;
        }
    };
    SvgEditorComponent.prototype.getSVGTemplate = function () {
        var _this = this;
        this.uploadCertificateService.getSvg(this.selectedCertificate.artifactUrl).then(function (res) {
            var svgFile = res;
            _this.logoHtml = _this.sanitizeHTML(svgFile);
            _this.refreshEditor.next({});
            _this.previewCertificate();
        });
    };
    SvgEditorComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SvgEditorComponent.prototype.createCertTemplate = function () {
        var _this = this;
        this.validateForm();
        if (this.disableCreateTemplate) {
            this.createTemplateForm.controls.certificateTitle.markAsTouched();
            this.createTemplateForm.controls.stateName.markAsTouched();
            this.createTemplateForm.controls.authoritySignature_0.markAsTouched();
            this.createTemplateForm.controls.authoritySignature_1.markAsTouched();
            this.createTemplateForm.controls.allowPermission.markAsTouched();
        }
        else {
            this.previewCertificate();
            setTimeout(function () {
                var channel = _this.userService.channel;
                var request = _this.certConfigModalInstance.prepareCreateAssetRequest(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.createTemplateForm, 'value'), channel, _this.selectedCertificate, _this.images);
                _this.disableCreateTemplate = true;
                _this.uploadCertificateService.createCertTemplate(request).subscribe(function (response) {
                    var assetId = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'result.identifier');
                    _this.uploadTemplate(_this.finalSVGurl, assetId);
                }, function (error) {
                    _this.toasterService.error('Something went wrong, please try again later');
                });
            }, 1000);
        }
    };
    SvgEditorComponent.prototype.uploadTemplate = function (base64Url, identifier) {
        var _this = this;
        this.uploadCertificateService.storeAsset(base64Url, identifier).subscribe(function (response) {
            _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certAddSuccess'));
            var templateIdentifier = { 'identifier': lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'result.identifier') };
            _this.uploadCertificateService.certificate.next(templateIdentifier);
            _this.navigationHelperService.navigateToLastUrl();
        }, function (error) {
            _this.toasterService.error('Something went wrong, please try again later');
            console.log('error', error);
        });
    };
    SvgEditorComponent.prototype.assetData = function (data) {
        if (data.key === this.optionSing) {
            this.createTemplateForm.get('authoritySignature_1').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.createTemplateForm.get('authoritySignature_1').updateValueAndValidity();
        }
        this.images[data.key] = data;
        this.validateForm();
    };
    SvgEditorComponent.prototype.close = function () {
        this.showSelectImageModal = false;
        this.showUploadUserModal = false;
    };
    SvgEditorComponent.prototype.removeImage = function (key) {
        if (key === 'SIGN2') {
            this.createTemplateForm.get('authoritySignature_1').clearValidators();
            this.createTemplateForm.get('authoritySignature_1').updateValueAndValidity();
        }
        this.images[key] = {};
        this.validateForm();
    };
    SvgEditorComponent.prototype.openSateLogos = function (type) {
        this.logoType = type;
        this.showSelectImageModal = true;
        this.browseImage.getAssetList();
    };
    SvgEditorComponent.prototype.openSignLogos = function (type) {
        this.logoType = type;
        this.showSelectImageModal = false;
        this.showUploadUserModal = true;
    };
    SvgEditorComponent.prototype.chooseCertificate = function (certificate) {
        this.logoHtml = null;
        this.selectedCertificate = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](certificate);
        this.getSVGTemplate();
    };
    SvgEditorComponent.prototype.convertHtml = function (tag) {
        if (tag) {
            var html = tag.toString();
            return new DOMParser().parseFromString(html, 'text/html');
        }
    };
    SvgEditorComponent.prototype.previewCertificate = function () {
        var _this = this;
        this.svgData = this.convertHtml(this.logoHtml);
        var stateLogos = this.svgData.getElementsByClassName(this.classNames.STATE_LOGOS);
        var digitalSigns = this.classNames.SIGN_LOGO.map(function (id) { return _this.svgData.getElementById(id); });
        this.updateStateLogos(stateLogos);
        this.updateSigns(digitalSigns);
    };
    SvgEditorComponent.prototype.previewUpdatedSVGCertificate = function () {
        this.svgData = this.convertHtml(this.sanitizeHTML(document.getElementById('templateSvg').innerHTML));
        this.certificateCreation(this.svgData.getElementsByTagName('svg')[0]);
    };
    SvgEditorComponent.prototype.updateTitles = function () {
        var _this = this;
        var certTitle = this.svgData.getElementsByClassName(this.classNames.CERT_TITLE);
        certTitle[0].innerHTML = this.createTemplateForm.controls.certificateTitle.value;
        var stateTitle = this.svgData.getElementsByClassName(this.classNames.STATE_TITLE);
        stateTitle[0].innerHTML = this.createTemplateForm.controls.stateName.value;
        this.classNames.DESIGNATIONS_NAMES.forEach(function (id, index) {
            var designation_html = _this.svgData.getElementById(id);
            if (designation_html) {
                var title = _this.createTemplateForm.get("authoritySignature_" + index).value;
                designation_html.innerHTML = title;
            }
        });
    };
    SvgEditorComponent.prototype.updateStateLogos = function (stateLogos) {
        var _this = this;
        var logosArray = Object.values(this.images).filter(function (x) { return !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](x) && x['type'] === 'LOGO'; });
        this.editSVG(logosArray, stateLogos).then(function (res) {
            _this.certificateCreation(_this.svgData.getElementsByTagName('svg')[0]);
        });
    };
    SvgEditorComponent.prototype.updateSigns = function (stateLogos) {
        var logosArray = Object.values(this.images).filter(function (x) { return !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](x) && x['type'] === 'SIGN'; });
        this.editSVG(logosArray, stateLogos).then(function (res) {
        });
    };
    SvgEditorComponent.prototype.editSVG = function (logosArray, stateLogos) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var i, logo, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < logosArray.length)) return [3, 4];
                        logo = logosArray[i];
                        if (!logo) return [3, 3];
                        return [4, this.toDataURL(logo)];
                    case 2:
                        res = _a.sent();
                        if (res && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](stateLogos) && stateLogos[i]) {
                            stateLogos[i].setAttribute('xlink:href', res['url']);
                        }
                        if (i === (logosArray.length - 1)) {
                            resolve();
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }); });
    };
    SvgEditorComponent.prototype.toDataURL = function (image) {
        return fetch(image.url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve({ url: reader.result, type: image.type }); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); });
    };
    SvgEditorComponent.prototype.urltoFile = function (url, filename, mimeType) {
        return (fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        }));
    };
    SvgEditorComponent.prototype.certificateCreation = function (ev) {
        var _this = this;
        var dataURL = this.getBase64Data(ev);
        this.selectedCertificate['artifactUrl'] = this.sanitizer.bypassSecurityTrustResourceUrl(dataURL);
        this.urltoFile(dataURL, "certificate_" + dayjs__WEBPACK_IMPORTED_MODULE_10___default()().format('YYYY-MM-DD_HH_mm') + ".svg", 'image/svg+xml')
            .then(function (file) {
            _this.finalSVGurl = file;
        });
    };
    SvgEditorComponent.prototype.sanitizeHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SvgEditorComponent.prototype.getImagePath = function () {
        if (this.selectedCertificate) {
            return this.selectedCertificate.artifactUrl;
        }
    };
    SvgEditorComponent.prototype.getBase64Data = function (ev) {
        var div = document.createElement('div');
        div.appendChild(ev.cloneNode(true));
        var b64 = 'data:image/svg+xml;base64,' + window.btoa(div.innerHTML);
        return b64;
    };
    SvgEditorComponent.prototype.back = function () {
        this.uploadCertificateService.certificate.next(null);
        this.navigationHelperService.navigateToLastUrl();
    };
    SvgEditorComponent.prototype.redoLayout = function () {
        if (this.layoutConfiguration != null) {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
        }
        else {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
        }
    };
    SvgEditorComponent.prototype.elementClicked = function (e) {
        this.selectedSVGObject = {
            type: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](e, 'type'),
            value: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](e, 'element.textContent'),
            element: e.element
        };
        if (e.type === 'image') {
            this.logoType = { type: 'LOGO', index: 0, key: 'LOGO1' };
            this.browseImage.getAssetList();
        }
        this.showSVGInputModal = true;
    };
    SvgEditorComponent.prototype.updateSVGInputTag = function () {
        this.showSVGInputModal = false;
        this.edit.next({
            element: this.selectedSVGObject.element,
            type: 'text',
            value: this.selectedSVGObject.value
        });
        this.selectedSVGObject = {};
    };
    SvgEditorComponent.prototype.closeSVGInputModal = function () {
        this.showSVGInputModal = false;
    };
    SvgEditorComponent.prototype.svgAssetData = function (imageObj) {
        var _this = this;
        this.getBase64FromUrl(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageObj, 'url')).then(function (base64String) {
            _this.showSVGInputModal = false;
            _this.edit.next({
                element: _this.selectedSVGObject.element,
                type: 'image',
                value: base64String
            });
            _this.selectedSVGObject = {};
        });
    };
    SvgEditorComponent.prototype.toggleSVGPreview = function () {
        this.previewButton = this.previewButton == 'show' ? 'hide' : 'show';
        this.togglePreview.next(this.previewButton);
    };
    SvgEditorComponent.prototype.saveUpdatedCertificate = function () {
        var _this = this;
        var certificateCodeName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.queryParams, 'courseId') + '_' + lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.queryParams, 'batchId').toString();
        this.svgData = null;
        this.save.next('');
        this.previewUpdatedSVGCertificate();
        setTimeout(function () {
            var channel = _this.userService.channel;
            var request = _this.certConfigModalInstance.prepareCreateAssetRequest(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.createTemplateForm, 'value'), channel, _this.selectedCertificate, _this.images);
            request.request.asset.code = certificateCodeName;
            request.request.asset.name = certificateCodeName;
            _this.uploadCertificateService.createCertTemplate(request).subscribe(function (response) {
                var assetId = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'result.identifier');
                _this.uploadTemplate(_this.finalSVGurl, assetId);
            }, function (error) {
                _this.toasterService.error('Something went wrong, please try again later');
            });
        }, 1000);
    };
    SvgEditorComponent.prototype.previewAndSave = function () {
        this.toggleSVGPreview();
        this.saveAndPreview = true;
        this.previewSvgData = this.sanitizeHTML(document.getElementById('templateSvg').innerHTML);
    };
    SvgEditorComponent.prototype.closeSaveAndPreview = function () {
        this.toggleSVGPreview();
        this.saveAndPreview = false;
        this.userConsent = false;
    };
    return SvgEditorComponent;
}());



/***/ }),

/***/ "JyhY":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/create-template/create-template.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_CreateTemplateComponent, View_CreateTemplateComponent_0, View_CreateTemplateComponent_Host_0, CreateTemplateComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CreateTemplateComponent", function() { return RenderType_CreateTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateTemplateComponent_0", function() { return View_CreateTemplateComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateTemplateComponent_Host_0", function() { return View_CreateTemplateComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComponentNgFactory", function() { return CreateTemplateComponentNgFactory; });
/* harmony import */ var _create_template_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-template.component.scss.shim.ngstyle */ "s74J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component.ngfactory */ "aHSL");
/* harmony import */ var _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component */ "TbDo");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _create_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-template.component */ "hpz1");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/cert-reg/cert-reg.service */ "6auv");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
















var styles_CreateTemplateComponent = [_create_template_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CreateTemplateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CreateTemplateComponent, data: {} });

function View_CreateTemplateComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "small", [["class", "pl-4 py-4 fsmall"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sanitizeHTML(((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.intxt == null) ? null : _co.resourceService.frmelmnts.cert.intxt.imgdimensions))))); _ck(_v, 0, 0, currVal_0); }); }
function View_CreateTemplateComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "pl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "assets/images/close.svg"], ["tabindex", "0"], ["width", "12px"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeImage("LOGO1") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.images == null) ? null : ((_co.images.LOGO1 == null) ? null : _co.images.LOGO1.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "small", [["class", "pl-4 py-4 fsmall"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sanitizeHTML(((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.intxt == null) ? null : _co.resourceService.frmelmnts.cert.intxt.imgdimensions))))); _ck(_v, 0, 0, currVal_0); }); }
function View_CreateTemplateComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "pl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "assets/images/close.svg"], ["tabindex", "0"], ["width", "12px"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeImage("LOGO2") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.images == null) ? null : ((_co.images.LOGO2 == null) ? null : _co.images.LOGO2.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.signspec)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "pl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "assets/images/close.svg"], ["tabindex", "0"], ["width", "12px"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeImage("SIGN1") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.images == null) ? null : ((_co.images.SIGN1 == null) ? null : _co.images.SIGN1.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.signspec)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "small", [["class", "pl-4 py-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "pl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "assets/images/close.svg"], ["tabindex", "0"], ["width", "12px"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeImage("SIGN2") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.images == null) ? null : ((_co.images.SIGN2 == null) ? null : _co.images.SIGN2.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTemplateComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "selected-mark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "selected mark"], ["src", "assets/images/checkbox-icon.svg"]], null, null, null, null, null))], null, null); }
function View_CreateTemplateComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "cert-img-sb-card active mr-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["alt", "certificate template"], ["class", "cert-img-sb-card__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "certificate template"], ["tabindex", "0"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.chooseCertificate(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (((_co.selectedCertificate == null) ? null : _co.selectedCertificate.identifier) === ((_v.context.$implicit == null) ? null : _v.context.$implicit.identifier)); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.artifactUrl); _ck(_v, 2, 0, currVal_0); }); }
function View_CreateTemplateComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { browseImage: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 182, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "sb-bg-color-white relative position back-btn-container cc-player__btn-back relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "py-16 d-flex flex-ai-center flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn mr-auto"], ["id", "goBack"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 172, "div", [["class", "certificate-container py-16 cc-player__content-header relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 166, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 165, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 144, "div", [["class", "six wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 143, "div", [["class", "certificate-content certificate-bg p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 140, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 17, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 16, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 13, "div", [["class", "sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["class", "hide"], ["for", "certificateTitle-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 6, "input", [["class", "sb-form-control"], ["formControlName", "certificateTitle"], ["id", "certificateTitle-input"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "small", [["class", "pl-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "div", [["class", "fnormal pt-16 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 17, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 16, "div", [["class", "twelve wide column py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 13, "div", [["class", "sb-field d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 3, "label", [["class", "state-labels"], ["for", "state"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "label", [["class", "hide"], ["for", "stateName-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](51, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 6, "input", [["class", "sb-form-control"], ["formControlName", "stateName"], ["id", "stateName-input"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "small", [["class", "pl-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 24, "div", [["class", "ui stackable grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 12, "div", [["class", "six wide column py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 6, "div", [["class", "sb-field mb-0 d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 3, "label", [["class", "pl-4 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-browse-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSateLogos({ type: "LOGO", index: 0, key: "LOGO1" }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 4, "div", [["class", "d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 10, "div", [["class", "six wide column py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 4, "div", [["class", "sb-field mb-0 d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "label", [["class", "pl-4 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-browse-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSateLogos({ type: "LOGO", index: 1, key: "LOGO2" }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](80, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 4, "div", [["class", "d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "div", [["class", "fnormal pt-24 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 31, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 12, "div", [["class", "six wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 11, "div", [["class", "sb-field d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 3, "label", [["class", "pl-4 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](92, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-browse-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSignLogos({ type: "SIGN", index: 0, key: "SIGN1" }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](96, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "div", [["class", "d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 17, "div", [["class", "six wide column py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 16, "div", [["class", "sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 3, "label", [["class", "mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](105, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 9, "div", [["class", "sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 1, "label", [["class", "hide"], ["for", "authoritySignature_0-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](110, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 6, "input", [["class", "sb-form-control"], ["formControlName", "authoritySignature_0"], ["id", "authoritySignature_0-input"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "small", [["class", "pl-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](119, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 27, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 10, "div", [["class", "six wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 4, "div", [["class", "sb-field d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "label", [["class", "pl-4 state-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](124, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-browse-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSignLogos({ type: "SIGN", index: 1, key: "SIGN2" }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](126, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 4, "div", [["class", "d-flex flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 15, "div", [["class", "six wide column py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 14, "div", [["class", "sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "label", [["class", "mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](135, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 9, "div", [["class", "sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 1, "label", [["class", "hide"], ["for", "authoritySignature_1-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](138, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 6, "input", [["class", "sb-form-control"], ["formControlName", "authoritySignature_1"], ["id", "authoritySignature_1-input"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 1, "small", [["class", "pl-4 fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](147, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 10, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 9, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 8, "div", [["class", "sb-checkbox sb-checkbox-secondary pt-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 5, "input", [["formControlName", "allowPermission"], ["id", "check2"], ["name", "selected"], ["type", "checkbox"], ["value", "true"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](156, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 1, "label", [["class", "text-left fsmall"], ["for", "check2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](158, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 19, "div", [["class", "six wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 18, "div", [["class", "select-template-content certificate-bg p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 4, "div", [["class", "d-flex flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 1, "label", [["class", "preview-title mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](163, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.previewCertificate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](165, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 5, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 4, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 3, "div", [["class", "cert-select-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 2, "div", [["class", "d-flex flex-ai-center flex-dc cert-select-card__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 1, "div", [["class", "d-flex flex-ai-center flex-jc-center cert-select-card__content__description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 0, "img", [["alt", "Certificate template"], ["class", "w-100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 6, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 5, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](175, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 2, "div", [["class", "d-flex flex-w-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateTemplateComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 4, "div", [["class", "ui stackable grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 3, "div", [["class", "twelve wide column px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 2, "div", [["class", "d-flex flex-ai-center flex-jc-flex-end sb-bg-color-white p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary ml-8 px-24"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.createCertTemplate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](183, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 1, "browse-image-popup", [], null, [[null, "assetData"], [null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("assetData" === en)) {
        var pd_0 = (_co.assetData($event) !== false);
        ad = (pd_0 && ad);
    } if (("close" === en)) {
        var pd_1 = (_co.close() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_BrowseImagePopupComponent_0"], _browse_image_popup_browse_image_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_BrowseImagePopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 114688, [[1, 4]], 0, _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_5__["BrowseImagePopupComponent"], [_services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_6__["UploadCertificateService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_8__["ResourceService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]], { showSelectImageModal: [0, "showSelectImageModal"], logoType: [1, "logoType"], showUploadUserModal: [2, "showUploadUserModal"] }, { assetData: "assetData", close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 2, 0, currVal_0); var currVal_10 = _co.createTemplateForm; _ck(_v, 20, 0, currVal_10); var currVal_21 = "sb-form-control"; var currVal_22 = ((_co.createTemplateForm.controls.certificateTitle.touched && _co.createTemplateForm.controls.certificateTitle.invalid) ? "is-invalid" : "is-valid"); _ck(_v, 33, 0, currVal_21, currVal_22); var currVal_23 = "certificateTitle"; _ck(_v, 36, 0, currVal_23); var currVal_36 = "sb-form-control"; var currVal_37 = ((_co.createTemplateForm.controls.stateName.touched && _co.createTemplateForm.controls.stateName.invalid) ? "is-invalid" : "is-valid"); _ck(_v, 53, 0, currVal_36, currVal_37); var currVal_38 = "stateName"; _ck(_v, 56, 0, currVal_38); var currVal_42 = !((_co.images == null) ? null : ((_co.images.LOGO1 == null) ? null : _co.images.LOGO1.name)); _ck(_v, 72, 0, currVal_42); var currVal_43 = ((_co.images == null) ? null : ((_co.images.LOGO1 == null) ? null : _co.images.LOGO1.name)); _ck(_v, 74, 0, currVal_43); var currVal_46 = !((_co.images == null) ? null : ((_co.images.LOGO2 == null) ? null : _co.images.LOGO2.name)); _ck(_v, 83, 0, currVal_46); var currVal_47 = ((_co.images == null) ? null : ((_co.images.LOGO2 == null) ? null : _co.images.LOGO2.name)); _ck(_v, 85, 0, currVal_47); var currVal_51 = !((_co.images == null) ? null : ((_co.images.SIGN1 == null) ? null : _co.images.SIGN1.name)); _ck(_v, 99, 0, currVal_51); var currVal_52 = ((_co.images == null) ? null : ((_co.images.SIGN1 == null) ? null : _co.images.SIGN1.name)); _ck(_v, 101, 0, currVal_52); var currVal_63 = "sb-form-control"; var currVal_64 = ((_co.createTemplateForm.controls.authoritySignature_0.touched && _co.createTemplateForm.controls.authoritySignature_0.invalid) ? "is-invalid" : "is-valid"); _ck(_v, 112, 0, currVal_63, currVal_64); var currVal_65 = "authoritySignature_0"; _ck(_v, 115, 0, currVal_65); var currVal_69 = !((_co.images == null) ? null : ((_co.images.SIGN2 == null) ? null : _co.images.SIGN2.name)); _ck(_v, 129, 0, currVal_69); var currVal_70 = ((_co.images == null) ? null : ((_co.images.SIGN2 == null) ? null : _co.images.SIGN2.name)); _ck(_v, 131, 0, currVal_70); var currVal_81 = "sb-form-control"; var currVal_82 = ((_co.createTemplateForm.controls.authoritySignature_1.touched && _co.createTemplateForm.controls.authoritySignature_1.invalid) ? "is-invalid" : "is-valid"); _ck(_v, 140, 0, currVal_81, currVal_82); var currVal_83 = "authoritySignature_1"; _ck(_v, 143, 0, currVal_83); var currVal_92 = "allowPermission"; _ck(_v, 154, 0, currVal_92); var currVal_98 = _co.defaultCertificates; _ck(_v, 178, 0, currVal_98); var currVal_100 = _co.showSelectImageModal; var currVal_101 = _co.logoType; var currVal_102 = _co.showUploadUserModal; _ck(_v, 185, 0, currVal_100, currVal_101, currVal_102); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 10, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.languageSupportNote)))); _ck(_v, 17, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 18, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certtitle)))); _ck(_v, 27, 0, currVal_11); var currVal_12 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmpt == null) ? null : _co.resourceService.frmelmnts.cert.prmpt.certtitle)))); _ck(_v, 31, 0, currVal_12); var currVal_13 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmpt == null) ? null : _co.resourceService.frmelmnts.cert.prmpt.certtitle)))); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending; _ck(_v, 32, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_24 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.certtitle)))); _ck(_v, 40, 0, currVal_24); var currVal_25 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.statedet)))); _ck(_v, 42, 0, currVal_25); var currVal_26 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.name))); _ck(_v, 47, 0, currVal_26); var currVal_27 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmttxt == null) ? null : _co.resourceService.frmelmnts.cert.prmttxt.statedet)))); _ck(_v, 51, 0, currVal_27); var currVal_28 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmttxt == null) ? null : _co.resourceService.frmelmnts.cert.prmttxt.statedet)))); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending; _ck(_v, 52, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_39 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.statedet)))); _ck(_v, 60, 0, currVal_39); var currVal_40 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.statelogo)))); _ck(_v, 65, 0, currVal_40); var currVal_41 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.browse)))); _ck(_v, 69, 0, currVal_41); var currVal_44 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.statelogo2)))); _ck(_v, 78, 0, currVal_44); var currVal_45 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.browse)))); _ck(_v, 80, 0, currVal_45); var currVal_48 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.signatory)))); _ck(_v, 87, 0, currVal_48); var currVal_49 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.sign)))); _ck(_v, 92, 0, currVal_49); var currVal_50 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.browse)))); _ck(_v, 96, 0, currVal_50); var currVal_53 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.signdesig)))); _ck(_v, 105, 0, currVal_53); var currVal_54 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.designation)))); _ck(_v, 110, 0, currVal_54); var currVal_55 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.designation)))); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassUntouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassTouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassPristine; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassDirty; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassValid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassInvalid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ngClassPending; _ck(_v, 111, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_66 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.signdet)))); _ck(_v, 119, 0, currVal_66); var currVal_67 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.sign2)))); _ck(_v, 124, 0, currVal_67); var currVal_68 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.browse)))); _ck(_v, 126, 0, currVal_68); var currVal_71 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.signdesig2)))); _ck(_v, 135, 0, currVal_71); var currVal_72 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.designation)))); _ck(_v, 138, 0, currVal_72); var currVal_73 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.designation)))); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassUntouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassTouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassPristine; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassDirty; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassValid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassInvalid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).ngClassPending; _ck(_v, 139, 0, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_84 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.inlntxt == null) ? null : _co.resourceService.frmelmnts.cert.inlntxt.signdet)))); _ck(_v, 147, 0, currVal_84); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassUntouched; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassTouched; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassPristine; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassDirty; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassValid; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassInvalid; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 156).ngClassPending; _ck(_v, 151, 0, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91); var currVal_93 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.intxt == null) ? null : _co.resourceService.frmelmnts.cert.intxt.confrmtion)))); _ck(_v, 158, 0, currVal_93); var currVal_94 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certprew)))); _ck(_v, 163, 0, currVal_94); var currVal_95 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.refresh)))); _ck(_v, 165, 0, currVal_95); var currVal_96 = _co.getImagePath(); _ck(_v, 171, 0, currVal_96); var currVal_97 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.layout)))); _ck(_v, 175, 0, currVal_97); var currVal_99 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.saveAsTemplate)))); _ck(_v, 183, 0, currVal_99); }); }
function View_CreateTemplateComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-create-template", [], null, null, null, View_CreateTemplateComponent_0, RenderType_CreateTemplateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _create_template_component__WEBPACK_IMPORTED_MODULE_10__["CreateTemplateComponent"], [_services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_6__["UploadCertificateService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_13__["CertRegService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_8__["ResourceService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_14__["NavigationHelperService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CreateTemplateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-create-template", _create_template_component__WEBPACK_IMPORTED_MODULE_10__["CreateTemplateComponent"], View_CreateTemplateComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "LOdU":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/certificate/models/cert-config-model/cert-config-model.ts ***!
  \***********************************************************************************/
/*! exports provided: CertConfigModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertConfigModel", function() { return CertConfigModel; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "T89o");

var CertConfigModel = (function () {
    function CertConfigModel() {
        this.dropDownFields = {
            COMPLETION_CERTIFICATE: 'Completion certificate',
            MY_STATE_TEACHER: 'My state teacher',
            ALL: 'All'
        };
    }
    CertConfigModel.prototype.processDropDownValues = function (rawValues, rootOrgId) {
        var criteria = {};
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawValues, 'issueTo') !== this.dropDownFields.ALL) {
            criteria['user'] = { rootOrgId: rootOrgId };
        }
        criteria['enrollment'] = { status: 2 };
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawValues, 'scoreRange')) {
            var scoreRange = (lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawValues, 'scoreRange')).substr(0, (lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawValues, 'scoreRange')).indexOf('%'));
            criteria['assessment'] = { score: { '>=': parseInt(scoreRange) } };
        }
        return criteria;
    };
    CertConfigModel.prototype.processCriteria = function (criteria) {
        var dropDowns = {};
        dropDowns['issueTo'] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](criteria, 'user.rootOrgId') ?
            [{ name: this.dropDownFields.MY_STATE_TEACHER }] : [{ name: this.dropDownFields.ALL }];
        dropDowns['certTypes'] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](criteria, 'enrollment.status') === 2 ? [{ name: this.dropDownFields.COMPLETION_CERTIFICATE }] : [{}];
        dropDowns['scoreRange'] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](criteria, 'assessment.score') ? criteria.assessment.score['>='] + '%' : '';
        return dropDowns;
    };
    CertConfigModel.prototype.getDropDownValues = function (certTypeData) {
        var processedDropdownValues = {};
        var certTypes = certTypeData.filter(function (val) {
            return val.code === 'certTypes';
        });
        processedDropdownValues['certTypes'] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](certTypes[0], 'range');
        var issueTo = certTypeData.filter(function (data) {
            return data.code === 'issueTo';
        });
        processedDropdownValues['issueTo'] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](issueTo[0], 'range');
        return processedDropdownValues;
    };
    CertConfigModel.prototype.prepareCreateAssetRequest = function (rawFormValues, channel, certificate, images) {
        var sign_1 = this.splitName(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](images, 'SIGN1.url'), rawFormValues, 'authoritySignature_0');
        var signatoryList = [];
        signatoryList.push(sign_1);
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](images['SIGN2']) && lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](images, 'SIGN2.name')) {
            var sign_2 = this.splitName(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](images, 'SIGN2.url'), rawFormValues, 'authoritySignature_1');
            signatoryList.push(sign_2);
        }
        var issuer = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](certificate, 'issuer');
        if (typeof issuer === 'string') {
            issuer = JSON.parse(issuer);
        }
        var requestBody = {
            'request': {
                'asset': {
                    'name': lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawFormValues, 'certificateTitle'),
                    'code': lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](rawFormValues, 'certificateTitle'),
                    'mimeType': 'image/svg+xml',
                    'license': 'CC BY 4.0',
                    'primaryCategory': 'Certificate Template',
                    'mediaType': 'image',
                    'certType': 'cert template',
                    'channel': channel,
                    'issuer': issuer,
                    'signatoryList': signatoryList
                }
            }
        };
        return requestBody;
    };
    CertConfigModel.prototype.splitName = function (imageUrl, sign, key) {
        var name = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](sign, key);
        var signValues = name.split(',');
        var designation = signValues[1] || 'CEO';
        var signatoryList = {
            name: name,
            image: imageUrl,
            designation: designation,
            id: designation + "/CEO"
        };
        return signatoryList;
    };
    return CertConfigModel;
}());



/***/ }),

/***/ "SDaT":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/svg-editor/svg-editor.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.certificate-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.cert-img-sb-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: var(--white);\n  border: 0.125rem solid var(--gray-200);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  transition: all 0.3s ease-out;\n}\n.cert-img-sb-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cert-img-sb-card.active[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.25rem;\n  top: 0;\n  display: block;\n}\n.cert-img-sb-card.active[_ngcontent-%COMP%], .cert-img-sb-card[_ngcontent-%COMP%]:hover {\n  border: 2px solid var(--primary-color);\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  overflow: hidden;\n  position: relative;\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  display: none;\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.select-template-content[_ngcontent-%COMP%] {\n  background: var(--white);\n  height: 100%;\n}\n.cert-select-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n.cert-select-card__content[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--white);\n}\n.cert-select-card__content__description[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  border-style: dashed;\n  border-color: var(--gray-100);\n}\n.cert-select-card__content__description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--gray-100);\n}\n.cert-select-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cert-select-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0.0625rem solid;\n  margin-bottom: 1rem;\n}\n.cert-view-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cert-view-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0.0625rem solid;\n}\n.asterik[_ngcontent-%COMP%] {\n  color: var(--red-400);\n}\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.state-labels[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n}\n.list-border[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--gray-200);\n}\n.sb-browse-btn[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: 0.1875rem;\n  cursor: pointer;\n  border-radius: 24px;\n  border: 2px solid var(--primary-300);\n  color: var(--primary-300);\n  font-weight: bold;\n  background: var(--primary-100);\n}\n.svgContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL3N2Zy1lZGl0b3Ivc3ZnLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQVFBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUdBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBR0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBR0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFHQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFHQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtBQ3pCRjtBRHFHQSxVQUFBO0FDcFRBO0VBQ0UsWUFBQTtBQW1ORjtBQWhOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBbU5GO0FBak5FO0VBQ0UsZ0JBQUE7QUFtTko7QUEvTUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQWlOTjtBQTdNRTtFQUVFLHNDQUFBO0FBOE1KO0FBM01FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE2TUo7QUEzTUk7RUFDRSxhQUFBO0FBNk1OO0FBMU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE0TU47QUF2TUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUEwTUY7QUF2TUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBME1GO0FBeE1FO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBME1KO0FBeE1JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQTBNTjtBQXhNTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUEwTVI7QUFwTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXVNRjtBQXJNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXVNSjtBQW5NQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBc01GO0FBcE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXNNSjtBQWxNQTtFQUNFLHFCQUFBO0FBcU1GO0FBbE1BO0VBQ0Usa0JBQUE7QUFxTUY7QUFsTUE7RUFDRSxzQkFBQTtBQXFNRjtBQWxNQTtFQUNFLDhDQUFBO0FBcU1GO0FBbE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFxTUY7QUFuTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXNNRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2VydGlmaWNhdGUvY29tcG9uZW50cy9zdmctZWRpdG9yL3N2Zy1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MzIHZhcmlhYmxlICYgc2FzcyB2YXJpYWJsZXMgKi9cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWZvbnQtc3RhY2stZW46IFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2staGk6IFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2stdXI6IFwiTm90byBTYW5zXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIixcbiAgICBcIk5vdG8gU2FucyBUYW1pbFwiLCBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLFxuICAgIFwiTm90byBTYW5zIEd1cm11a2hpXCIsIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLFxuICAgIFwiTm90byBTYW5zIEthbm5hZGFcIiwgXCJOb3RvIFNhbnMgT3JpeWFcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuXG4gIC8vIGJhc2UgY29sb3JzXG4gIC0tYmx1ZTogIzAyNGY5ZDtcbiAgLS1ncmVlbjogIzAwODg0MDtcbiAgLS1vcmFuZ2U6ICNlNTVhMjg7XG4gIC0tcmVkOiAjZmY0NTU4O1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuXG4gIC8vIGdyYXkgY29sb3JzIHNoYWRlc1xuICAtLWdyYXktaHM6IDAsIDAlO1xuICAtLWdyYXk6IGhzbCh2YXIoLS1ncmF5LWhzKSwgMjAlKTtcbiAgLS1ncmF5LTA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgOTUlKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4gIC0tZ3JheS0xMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgODAlKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuICAtLWdyYXktMjAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDYwJSk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuICAtLWdyYXktMzAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDU5JSk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuICAtLWdyYXktNDAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDQwJSk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiAgLS1ncmF5LTgwMDogdmFyKC0tZ3JheSk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4gIC8vIGJhc2V0aGVtZVxuICAtLXByaW1hcnktY29sb3I6ICMwMjRmOWQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDA4ODQwO1xuICAtLXRlcnRpYXJ5LWNvbG9yOiAjZTU1YTI4O1xuXG4gIC8vIHByaW1hcnkgY29sb3JzXG4gIC0tcHJpbWFyeS0wOiAjZjNmN2ZhOyAvLyBiZ1xuICAtLXByaW1hcnktMTAwOiAjZWRmNGY5OyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuICAtLXByaW1hcnktMjAwOiAjODBhN2NlOyAvLyBkaXZpZGVyXG4gIC0tcHJpbWFyeS0yNTA6ICNkM2U3ZjQ7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuICAtLXByaW1hcnktMzAwOiAjN2FiNGVlOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiAgLS1wcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS1jb2xvcik7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuICAtLXByaW1hcnktNjAwOiAjMDA1MzkxOyAvLyBvbiBwcmVzc1xuICAtLXByaW1hcnktODAwOiAjMDAyZTUwOyAvLyBob3ZlclxuXG4gIC8vIHNlY29uZGFyeSBjb2xvcnNcbiAgLS1zZWNvbmRhcnktMDogI2UxZmZkZjsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tc2Vjb25kYXJ5LTEwMDogIzAwYzc4NjsgLy8gYnV0dG9uIGJnIGJnLCB0b2FzdFxuICAtLXNlY29uZGFyeS0yMDA6ICMwN2JjODE7IC8vIGJ1dHRvbiBiZ1xuICAtLXNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7IC8vIGhvdmVyXG5cbiAgLy8gdGVydGlhcnkgY29sb3JzXG4gIC0tdGVydGlhcnktMDogI2ZlZWRkNzsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tdGVydGlhcnktMTAwOiAjZmZhMTFkOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktY29sb3IpOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbiAgLy8gcmVkIGNvbG9yc1xuICAtLXJlZC0wOiAjZmJjY2QxOyAvLyB0b2FzdCBiZ1xuICAtLXJlZC0xMDA6ICNmZjY5Nzk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tcmVkLTQwMDogdmFyKC0tcmVkKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4gIC8vIHN0YXR1cyBjb2xvcnNcbiAgLS1pbmZvLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIC0td2FybmluZy1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgLS1kYW5nZXItY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgLy8gZWxlbWVudCBiYXNlZCB2YXJpYWJsZXNcbiAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIC0tYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1ib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbiAgLy8gYWxwaGFcbiAgLS1hbHBoYTA6IDA7XG4gIC0tYWxwaGEyNTogMC4yNTtcbiAgLS1hbHBoYTUwOiAwLjU7XG4gIC0tYWxwaGE3NTogMC43NTtcblxuICAvLyBmb250c1xuICAtLWZvbnQtZGVmYXVsdC1zaXplOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuICAtLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAtLWZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIC0tbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiAgLS1oMS1mb250LXNpemU6IDJyZW07IC8vIDMycHhcbiAgLS1oMi1mb250LXNpemU6IDEuNzVyZW07IC8vIDI4cHhcbiAgLS1oMy1mb250LXNpemU6IDEuNXJlbTsgLy8gMjRweFxuICAtLWg0LWZvbnQtc2l6ZTogMS4ycmVtOyAvLyAyMHB4XG4gIC0taDUtZm9udC1zaXplOiAxcmVtOyAvLyAxNnB4XG4gIC0taDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuICAtLWZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuICAtLWZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1zbTogMC43NXJlbTsgLy8gMTJweFxuICAtLWZvbnQtc2l6ZS14czogMC42MjVyZW07IC8vIDEwcHhcbiAgLS1wLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuICAvLyBiYXNlIHZhcmlhYmxlc1xuICAtLWJhc2UtZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLS1iYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07IC8vOHB4LFxuICAtLWljb24tc3ZnLXh4czogMC43NXJlbTtcbiAgLS1pY29uLXN2Zy14czogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDIpO1xuICAtLWljb24tc3ZnLXNtOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMyk7XG4gIC0taWNvbi1zdmctbWQ6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA0KTtcbiAgLS1pY29uLXN2Zy1sZzogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDUpO1xuICAtLWljb24tc3ZnLXhsOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNik7XG5cbiAgLy9yYW5kb20gY29sb3JzIGFuZCBiYWNrZ3JvdW5kc1xuICAtLXJjLTk2QzhEQTogIzk2QzhEQTtcbiAgLS1yYy0wMDc2RkU6ICMwMDc2RkU7XG4gIC0tcmMtRTVFREY1OiAjRTVFREY1O1xuICAtLXJjLTdjN2I3YjogIzdjN2I3YjtcbiAgLS1yYy1mNWY1ZjU6ICNmNWY1ZjU7XG4gIC0tcmMtZmRmZGZkOiAjZmRmZGZkO1xuICAtLXJjLWRlZGVkZTogI2RlZGVkZTtcbiAgLS1yYy1GNUY5RkM6ICNGNUY5RkM7XG4gIC0tcmMtYzRjNGM0OiAjYzRjNGM0O1xuICAtLXJjLWQ4ZDhkODogI2Q4ZDhkODtcbiAgLS1yYy1lOWU1ZTU6ICNlOWU1ZTU7XG4gIC0tcmMtZGRkZGRkOiAjZGRkZGRkO1xuICAtLXJjLTdiODZmNDogIzdiODZmNDtcbiAgLS1yYy1kMGQwZDA6ICNkMGQwZDA7XG4gIC0tcmMtNWM4ZGI3OiAjNWM4ZGI3O1xuICAtLXJjLTkxYWVjYzogIzkxYWVjYztcbiAgLS1yYy1mOWY5Zjk6ICNmOWY5Zjk7XG4gIC0tcmMtZDRkM2QzOiAjZDRkM2QzO1xuICAtLXJjLUZBRkFGQTogI0ZBRkFGQTtcbiAgLS1yYy04NjZBNkE6ICM4NjZhNmE7XG4gIC0tcmMtOTc5Nzk3OiAjOTc5Nzk3O1xuICAtLXJjLWUwZTFlMjogI2UwZTFlMjtcbiAgLS1yYy0wMEJEN0Y6ICMwMEJEN0Y7XG4gIC0tcmMtOUY5RjlGOiAjOUY5RjlGO1xuICAtLXJjLUYzRjhGRjogI0YzRjhGRjtcbiAgLS1yYy04MEE3Q0U6ICM4MEE3Q0U7XG4gIC0tcmMtOWI5YjliOiAjOWI5YjliO1xuICAtLXJjLTJjYTU4ZDogIzJjYTU4ZDtcbiAgLS1yYy0wMDdBRkY6ICMwMDdBRkY7XG4gIC0tcmMtYmRiZGJkOiAjYmRiZGJkO1xuICAtLXJjLWNlY2VjZTogI2NlY2VjZTtcbiAgLS1yYy0yOTcyYTQ6ICMyOTcyYTQ7XG4gIC0tcmMtRTBGMUZEOiAjRTBGMUZEO1xuICAtLXJjLUM4RDZFQTogI0M4RDZFQTtcbiAgLS1yYy1lMmUzZTU6ICNlMmUzZTU7XG4gIC0tcmMtQkNCRUMwOiAjQkNCRUMwO1xuICAtLXJjLWQ0ZDRkNTogI2Q0ZDRkNTtcbiAgLS1yYy1kNGQ4ZGE6ICNkNGQ4ZGE7XG4gIC0tcmMtYmZlMWNmOiAjYmZlMWNmO1xuICAtLXJjLTI4OWZkOTogIzI4OWZkOTtcbiAgLS1yYy1lNjg5MDA6ICNlNjg5MDA7XG4gIC0tcmMtMmY0MjcyOiAjMmY0MjcyO1xuICAtLXJjLWUwZTBlMDogI2UwZTBlMDtcbiAgLS1yYy0yMzYxZmY6ICMyMzYxZmY7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1mZmIzMDA6ICNmZmIzMDA7XG4gIC0tcmMtZDhkZWUyOiAjZDhkZWUyO1xuICAtLXJjLTI1MjUyNTogIzI1MjUyNTtcbiAgLS1yYy1mY2YyZDY6ICNmY2YyZDY7XG4gIC0tcmMtYWRkOGU2OiAjYWRkOGU2O1xuICAtLXJjLWFmZDllNzogI2FmZDllNztcbiAgLS1yYy1EOUU0RjI6ICNEOUU0RjI7XG4gIC0tcmMtODhCN0U2OiAjODhCN0U2O1xuICAtLXJjLTRhNGE0YTogIzRhNGE0YTtcbiAgLS1yYy1mZmY2ZjY6ICNmZmY2ZjY7XG4gIC0tcmMtZjdmN2Y3OiAjZjdmN2Y3O1xuICAtLXJjLTY2YzdmNDogIzY2YzdmNDtcbiAgLS1yYy0xQjQ3ODU6ICMxQjQ3ODU7XG4gIC0tcmMtYTlhOWE5OiAjYTlhOWE5O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy0xYjFjMWQ6ICMxYjFjMWQ7XG4gIC0tcmMtZGVkZWRmOiAjZGVkZWRmO1xuICAtLXJjLWFhYWFhYTogI2FhYWFhYTtcbiAgLS1yYy0wNDJENTU6ICMwNDJENTU7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLWJiYmJiYjogI2JiYmJiYjtcbiAgLS1yYy0wMDlENTM6ICMwMDlENTM7XG4gIC0tcmMtRTBFRkZGOiAjRTBFRkZGO1xuICAtLXJjLTE5NkRBQjogIzE5NkRBQjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWMzYzNjMzogI2MzYzNjMztcbiAgLS1yYy0wMGFiYzc6IzAwYWJjNztcbiAgLS1yYy1GQ0U2RTY6I0ZDRTZFNjtcbiAgLS1yYy1ERUNBQ0E6I0RFQ0FDQTtcbiAgLS1yYy00MjQyNDI6IzQyNDI0MjtcbiAgLS1yYy1GNUQ3RDc6I0Y1RDdENztcbiAgLS1yYy1GN0ZGRjU6I0Y3RkZGNTtcbiAgLS1yYy1EM0RFRDE6I0QzREVEMTtcbiAgLS1yYy1FQkY2RTA6I0VCRjZFMDtcbiAgLS1yYy1GNkY2RjY6I0Y2RjZGNjtcbiAgLS1yYy0zM0I2Q0M6IzMzQjZDQztcbiAgLS1yYy0yZGFkYzI6IzJkYWRjMjtcbiAgLS1yYy0wZmJhZDY6IzBmYmFkNjtcbiAgLS1yYy1mN2ZmZWM6I2Y3ZmZlYztcbiAgLS1yYy1kMmRkYzc6I2QyZGRjNztcbiAgLS1yYy1mZmUxZTE6I2ZmZTFlMTtcbiAgLS1yYy1lNmM4Yzg6I2U2YzhjODtcbiAgLS1yYy1mNTZiNTY6I2Y1NmI1NjtcbiAgLS1yYy1kYzUyM2Q6I2RjNTIzZDtcbiAgLS1yYy1lNjVjNDc6I2U2NWM0NztcbiAgLS1yYy01NjVjNzA6IzU2NWM3MDtcbiAgLS1yYy02RDcyNzg6IzZENzI3ODtcbiAgLS1yYy1FMDhBMjA6I0UwOEEyMDtcbiAgLS1yYy1ERDY4MEY6I0RENjgwRjtcbiAgLS1yYy1kYWQ5Y2I6I2RhZDljYjtcbiAgLS1yYy1GRkQ5NTQ6I0ZGRDk1NDtcbiAgLS1yYy1yZ2JhLWJsYWNrOiAwLCAwLCAwOyAvLyB2YXIoLS1ibGFjaylcbiAgLS1yYy1yZ2JhLXdoaXRlOiAyNTUsIDI1NSwgMjU1OyAvLyB2YXIoLS13aGl0ZSlcbiAgLS1yYy1yZ2JhLWdyYXk6IDUxLCA1MSwgNTE7IC8vIHZhcigtLWdyYXktMzAwKVxuICAtLXJjLXJnYmEtcHJpbWFyeTogMiwgNzksIDE1NzsgLy8gdmFyKC0tcHJpbWFyeS1jb2xvcilcbiAgLS1yYy1yZ2JhLXByaW1hcnktMzAwOiA0MSwgMTE0LCAxNjQ7IC8vdmFyKC0tcHJpbWFyeS0zMDApXG4gIC0tcmMtcmdiYS1ncmF5LTMwMDogMzQsIDM2LCAzODsgLy92YXIoLS1ncmF5LTEwMClcbiAgLS1yYy1yZ2JhLTg2NmE2YTogMTM0LCAxMDYsIDEwNjtcbiAgLS1yYy1yZ2JhLWQwZDBkMDogMjA4LCAyMDgsIDIwODtcbiAgLS1yYy1yZ2JhLTdiODZmNDogMTIzLCAxMzQsIDI0NDtcbiAgLS1yYy1yZ2JhLUM4RDZFQTogMjAwLCAyMTQsIDIzNDtcbiAgLS11aS1kcm9wZG93bi1zZWxlY3Rpb24taWNvbjojNDlCMUYyO1xufVxuXG4vLyBWYXJpYWJsZXNcbiRmb250LXN0YWNrLWVuOiB2YXIoLS1mb250LXN0YWNrLWVuKTtcbiRmb250LXN0YWNrLWhpOiB2YXIoLS1mb250LXN0YWNrLWhpKTtcbiRmb250LXN0YWNrLXVyOiB2YXIoLS1mb250LXN0YWNrLXVyKTtcblxuLy8gQmFzZSBDb2xvcnNcbiRibHVlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRncmVlbjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiRvcmFuZ2U6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiRyZWQ6IHZhcigtLXJlZCk7XG4kYmxhY2s6IHZhcigtLWJsYWNrKTtcbiR3aGl0ZTogdmFyKC0td2hpdGUpO1xuJGluZGlnbzogdmFyKC0taW5kaWdvKTtcbiRwdXJwbGU6IHZhcigtLXB1cnBsZSk7XG4kcGluazogdmFyKC0tcGluayk7XG4keWVsbG93OiB2YXIoLS15ZWxsb3cpO1xuJHRlYWw6IHZhcigtLXRlYWwpO1xuJGN5YW46IHZhcigtLWN5YW4pO1xuJGdyYXk6IHZhcigtLWdyYXkpO1xuXG4vLyBicmFuZCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kdGVydGlhcnktY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbi8vIE5ldXRyYWwgQ29sb3JzXG4kd2hpdGUtY29sb3I6IHZhcigtLXdoaXRlKTtcbi8vIGdyYXkgY29sb3JzIHNoYWRlc1xuJGdyYXktMDogdmFyKC0tZ3JheS0wKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4kZ3JheS0xMDA6IHZhcigtLWdyYXktMTAwKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuJGdyYXktMjAwOiB2YXIoLS1ncmF5LTIwMCk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuJGdyYXktMzAwOiB2YXIoLS1ncmF5LTMwMCk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuJGdyYXktNDAwOiB2YXIoLS1ncmF5LTQwMCk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiRncmF5LTgwMDogdmFyKC0tZ3JheS04MDApOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuLy8gcHJpbWFyeSBjb2xvcnMgc2hhZGVzXG4kcHJpbWFyeS0wOiB2YXIoLS1wcmltYXJ5LTApOyAvLyBiZ1xuJHByaW1hcnktMTAwOiB2YXIoLS1wcmltYXJ5LTEwMCk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4kcHJpbWFyeS0yMDA6IHZhcigtLXByaW1hcnktMjAwKTsgLy8gZGl2aWRlclxuJHByaW1hcnktMjUwOiB2YXIoLS1wcmltYXJ5LTI1MCk7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuJHByaW1hcnktMzAwOiB2YXIoLS1wcmltYXJ5LTMwMCk7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuJHByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LTQwMCk7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuJHByaW1hcnktNjAwOiB2YXIoLS1wcmltYXJ5LTYwMCk7IC8vIG9uIHByZXNzXG4kcHJpbWFyeS04MDA6IHZhcigtLXByaW1hcnktODAwKTsgLy8gaG92ZXJcblxuLy8gc2Vjb25kYXJ5IGNvbG9ycyBzaGFkZXNcbiRzZWNvbmRhcnktMDogdmFyKC0tc2Vjb25kYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiRzZWNvbmRhcnktMTAwOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRzZWNvbmRhcnktMjAwOiB2YXIoLS1zZWNvbmRhcnktMjAwKTsgLy8gYnV0dG9uIGJnXG4kc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LTQwMCk7IC8vIGhvdmVyXG5cbi8vIHRlcnRpYXJ5IGNvbG9ycyBzaGFkZXNcbiR0ZXJ0aWFyeS0wOiB2YXIoLS10ZXJ0aWFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kdGVydGlhcnktMTAwOiB2YXIoLS10ZXJ0aWFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktNDAwKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4vLyByZWQgY29sb3JzIHNoYWRlc1xuJHJlZC0wOiB2YXIoLS1yZWQtMCk7IC8vIHRvYXN0IGJnXG4kcmVkLTEwMDogdmFyKC0tcmVkLTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kcmVkLTQwMDogdmFyKC0tcmVkLTQwMCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuLy8gaW5wdXQgYm9yZGVyIHdpZHRoXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG5cbi8vIFN0YXR1cyBDb2xvcnNcbiRpbmZvLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4kc3VjY2Vzcy1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XG4kd2FybmluZy1jb2xvcjogdmFyKC0tdGVydGlhcnktNDAwKTtcbiRkYW5nZXItY29sb3I6IHZhcigtLXJlZC0xMDApO1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiRkZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiRiZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuJGJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuLyogRm9udHMgKi9cbiRmb250LWRlZmF1bHQtc2l6ZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpO1xuJGZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC13ZWlnaHQtbGlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiRmb250LXdlaWdodC1ub3JtYWw6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4kZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRsaW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuJGgxLWZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTsgLy8gMzJweFxuJGgyLWZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTsgLy8gMjhweFxuJGgzLWZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTsgLy8gMjRweFxuJGg0LWZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTsgLy8gMjBweFxuJGg1LWZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiRmb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRmb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtc206IHZhcigtLWZvbnQtc2l6ZS1zbSk7IC8vIDEycHhcbiRmb250LXNpemUteHM6IHZhcigtLWZvbnQtc2l6ZS14cyk7IC8vIDEwcHhcbiRwLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuLy8gc3BhY2VzXG4kYmFzZS1ibG9jay1zcGFjZTogMC41cmVtO1xuIiwiQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jZXJ0aWZpY2F0ZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VydC1pbWctc2ItY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMnB4KSBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IGNhbGN1bGF0ZVJlbSgxNnB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIC5zZWxlY3RlZC1tYXJrIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiBjYWxjdWxhdGVSZW0oNHB4KTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5zZWxlY3RlZC1tYXJrIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0LXRlbXBsYXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlcnQtc2VsZWN0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJl9fY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktMTAwKTtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNlcnQtc2VsZWN0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IGNhbGN1bGF0ZVJlbSgxcHgpIHNvbGlkO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGN1bGF0ZVJlbSgxNnB4KTtcbiAgfVxufVxuXG4uY2VydC12aWV3LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IGNhbGN1bGF0ZVJlbSgxcHgpIHNvbGlkO1xuICB9XG59XG5cbi5hc3RlcmlrIHtcbiAgY29sb3I6IHZhcigtLXJlZC00MDApO1xufVxuXG4ucHJldmlldy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDIwcHgpO1xufVxuXG4uc3RhdGUtbGFiZWxzIHtcbiAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbn1cblxuLmxpc3QtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgdmFyKC0tZ3JheS0yMDApO1xufVxuXG4uc2ItYnJvd3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogY2FsY3VsYXRlUmVtKDNweCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS0zMDApO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS0zMDApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMDApO1xufVxuLnN2Z0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"];



/***/ }),

/***/ "TbDo":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/browse-image-popup/browse-image-popup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BrowseImagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseImagePopupComponent", function() { return BrowseImagePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
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






var BrowseImagePopupComponent = (function () {
    function BrowseImagePopupComponent(uploadCertificateService, toasterService, resourceService, userService) {
        this.uploadCertificateService = uploadCertificateService;
        this.toasterService = toasterService;
        this.resourceService = resourceService;
        this.userService = userService;
        this.showSelectImageModal = false;
        this.enableUploadSignature = false;
        this.assetData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showUploadUserModal = false;
        this.imagesList = [];
        this.sign = 'SIGN';
        this.imageDimensions = {
            'LOGO': { type: 'PNG', dimensions: '88px X 88px' },
            'SIGN': { type: 'PNG', dimensions: '112px X 46px' }
        };
        this.allImagesList = [];
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            assetCaption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            creator: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            creatorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    }
    BrowseImagePopupComponent.prototype.ngOnInit = function () {
    };
    BrowseImagePopupComponent.prototype.getAssetList = function () {
        var _this = this;
        this.imageName = '';
        this.selectedLogo = null;
        this.uploadCertificateService.getAssetData().subscribe(function (res) {
            _this.imagesList = res.result.content;
        }, function (error) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0004'));
        });
    };
    BrowseImagePopupComponent.prototype.searchImage = function (type) {
        var _this = this;
        this.uploadCertificateService.getAssetData(this.imageName, type).subscribe(function (res) {
            if (res && res.result) {
                if (!type) {
                    _this.imagesList = res.result.content;
                }
                else {
                    _this.allImagesList = res.result.content;
                }
            }
        }, function (error) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0004'));
        });
    };
    BrowseImagePopupComponent.prototype.fileChange = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var imageProperties, isDimensionMatched, isTypeMatched, isSizeMatched, fileName, userName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uploadForm.reset();
                        return [4, this.getImageProperties(ev.target.files[0])];
                    case 1:
                        imageProperties = _a.sent();
                        isDimensionMatched = this.dimentionCheck(imageProperties);
                        isTypeMatched = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](imageProperties, 'type').includes('png');
                        isSizeMatched = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](imageProperties, 'size') < 1;
                        if (imageProperties && isSizeMatched && isTypeMatched && isDimensionMatched) {
                            this.fileObj = ev.target.files[0];
                            fileName = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.fileObj, 'name').split('.')[0];
                            userName = (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userService, 'userProfile.firstName') || '') + " " + (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userService, 'userProfile.lastName') || '');
                            this.uploadForm.patchValue({
                                'assetCaption': fileName,
                                'creator': userName,
                                'creatorId': lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userService, 'userProfile.id')
                            });
                        }
                        else {
                            this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'frmelmnts.cert.lbl.imageErrorMsg'));
                        }
                        return [2];
                }
            });
        });
    };
    BrowseImagePopupComponent.prototype.getAllImages = function () {
        var _this = this;
        this.imageName = '';
        this.selectedLogo = null;
        this.uploadCertificateService.getAssetData(null, 'all').subscribe(function (res) {
            _this.allImagesList = res.result.content;
        }, function (error) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0004'));
        });
    };
    BrowseImagePopupComponent.prototype.dimentionCheck = function (image) {
        var flag = false;
        if (image) {
            var dimension = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](image, 'width') + "px X " + lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](image, 'height') + "px";
            var logoType = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.logoType, 'type');
            var requiredDimensions = this.imageDimensions[logoType]['dimensions'];
            flag = lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEqual"](dimension, requiredDimensions);
        }
        return flag;
    };
    BrowseImagePopupComponent.prototype.getImageProperties = function (ev) {
        return new Promise(function (resolve, reject) {
            var imageData;
            var file = ev;
            var img = new Image();
            if (file.url) {
                img.src = file.url;
            }
            else {
                img.src = window.URL.createObjectURL(file);
            }
            img.onload = function () {
                var width = img.naturalWidth;
                var height = img.naturalHeight;
                imageData = {
                    'height': height,
                    'width': width,
                    'size': lodash_es__WEBPACK_IMPORTED_MODULE_3__["toNumber"]((file.size / (1024 * 1024)).toFixed(2)),
                    'type': file.type
                };
                resolve(imageData);
            };
        });
    };
    BrowseImagePopupComponent.prototype.browseImages = function () {
        this.showUploadUserModal = true;
        this.selectedLogo = null;
    };
    BrowseImagePopupComponent.prototype.upload = function () {
        var _this = this;
        if (this.logoType.type !== this.sign) {
            this.uploadCertificateService.createAsset(this.uploadForm.value, this.logoType.type).subscribe(function (res) {
                if (res && res.result) {
                    _this.uploadBlob(res);
                }
            }, function (error) {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0004'));
            });
        }
        else {
            this.getImageURLs();
        }
    };
    BrowseImagePopupComponent.prototype.getImageURLs = function () {
        var _this = this;
        var file = this.fileObj;
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = function () {
                var imageURL = reader.result;
                var image = {
                    'name': _this.uploadForm.controls.assetCaption.value,
                    'url': imageURL,
                    'type': _this.logoType.type,
                    'key': _this.logoType.key,
                    'index': _this.logoType.index
                };
                _this.assetData.emit(image);
                _this.uploadForm.reset();
                _this.closeModel();
            };
        }
    };
    BrowseImagePopupComponent.prototype.uploadBlob = function (data) {
        var _this = this;
        if (data) {
            var identifier = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](data, 'result.content_id');
            this.uploadCertificateService.storeAsset(this.fileObj, identifier).subscribe(function (imageData) {
                if (imageData.result) {
                    _this.showUploadUserModal = false;
                    _this.showSelectImageModal = false;
                    var image = {
                        'name': _this.uploadForm.controls.assetCaption.value,
                        'url': imageData.result.artifactUrl,
                        'type': _this.logoType.type,
                        'key': _this.logoType.key,
                        'index': _this.logoType.index
                    };
                    _this.assetData.emit(image);
                    _this.uploadForm.reset();
                    _this.closeModel();
                }
            }, function (error) {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0004'));
                _this.closeModel();
                _this.uploadForm.reset();
            });
        }
    };
    BrowseImagePopupComponent.prototype.selectLogo = function (logo) {
        return __awaiter(this, void 0, void 0, function () {
            var file, imageProperties, isDimensionMatched, isTypeMatched, isSizeMatched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = {
                            url: logo.artifactUrl,
                            type: logo.mimeType,
                            size: logo.size
                        };
                        return [4, this.getImageProperties(file)];
                    case 1:
                        imageProperties = _a.sent();
                        isDimensionMatched = this.dimentionCheck(imageProperties);
                        isTypeMatched = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](imageProperties, 'type').includes('png');
                        isSizeMatched = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](imageProperties, 'size') < 1;
                        if (imageProperties && isSizeMatched && isTypeMatched && isDimensionMatched) {
                            this.selectedLogo = logo;
                        }
                        else {
                            this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'frmelmnts.cert.lbl.imageErrorMsg'));
                        }
                        return [2];
                }
            });
        });
    };
    BrowseImagePopupComponent.prototype.back = function () {
        if (this.logoType.type === this.sign) {
            this.closeModel();
        }
        else {
            this.showUploadUserModal = false;
            this.showSelectImageModal = true;
            this.uploadForm.reset();
            this.selectedLogo = null;
        }
    };
    BrowseImagePopupComponent.prototype.closeModel = function () {
        this.uploadForm.reset();
        this.showUploadUserModal = false;
        this.showSelectImageModal = false;
        this.selectedLogo = null;
        this.close.emit();
    };
    BrowseImagePopupComponent.prototype.selectAndUseLogo = function () {
        var image = {
            'name': this.selectedLogo.name,
            'url': this.selectedLogo.artifactUrl,
            'type': this.logoType.type,
            'key': this.logoType.key,
            'index': this.logoType.index
        };
        this.assetData.emit(image);
        this.selectedLogo = null;
        this.closeModel();
    };
    BrowseImagePopupComponent.prototype.showUploadSignature = function () {
        this.logoType = { type: 'SIGN', index: 0, key: 'SIGN1' };
        this.showSelectImageModal = false;
        this.showUploadUserModal = true;
    };
    return BrowseImagePopupComponent;
}());



/***/ }),

/***/ "VePS":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-details/certificate-details.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%] {\n  height: calvulteRem(202.5px);\n  width: 22.5rem;\n  border: 0.625rem solid var(--black);\n  border-radius: 0.9375rem;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n.sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%]   .sb-mobileDevice-sensors[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: auto;\n  left: 0;\n  background: var(--black);\n  padding: 0.625rem 0.3125rem 0.625rem 0;\n  border-top-right-radius: 1.5625rem;\n  border-bottom-right-radius: 1.5625rem;\n}\n.sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%]   .sb-mobileDevice-sensors[_ngcontent-%COMP%]   .sb-mobileDevice-sensor[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: var(--rc-252525);\n  border-radius: 50%;\n}\n.sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%]   .sb-mobileDevice-sensors[_ngcontent-%COMP%]   .sb-mobileDevice-speaker[_ngcontent-%COMP%] {\n  width: 0.3125rem;\n  height: 4.625rem;\n  background: var(--rc-252525);\n  border-radius: 0.625rem;\n  margin: 0.625rem 0 0.625rem 0.0625rem;\n}\n.sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%]   .sb-mobileDevice-videoScreen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.3125rem;\n  border: none;\n}\n@media only screen and (min-width: 540px) {\n  .sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%] {\n    height: 21.25rem;\n    width: 42.5rem;\n  }\n}\n@media only screen and (min-width: 769px) {\n  .sb-mobileDevice[_ngcontent-%COMP%]   .sb-mobileDevice-screen[_ngcontent-%COMP%] {\n    height: 25rem;\n    max-width: 50rem;\n  }\n}\n.player-thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: url('dist/featured-content.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.3125rem;\n}\n  .certificate-area-player .contentViewerIframeShadow {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2NlcnRpZmljYXRlLWRldGFpbHMvY2VydGlmaWNhdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQVFBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUdBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBR0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBR0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFHQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrREFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFHQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtBQ3pCRjtBRHFHQSxVQUFBO0FDbFRJO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaU5OO0FBaE5NO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtBQWtOUjtBQWpOUTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQW1OVjtBQWpOUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFtTlY7QUFoTk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFrTlI7QUFoTk07RUF4Q0Y7SUF5Q0ksZ0JBQUE7SUFDQSxjQUFBO0VBbU5OO0FBQ0Y7QUFsTk07RUE1Q0Y7SUE2Q0ksYUFBQTtJQUNBLGdCQUFBO0VBcU5OO0FBQ0Y7QUFqTkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFvTko7QUEvTU07RUFDRSx1QkFBQTtBQWtOUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2VydGlmaWNhdGUvY29tcG9uZW50cy9jZXJ0aWZpY2F0ZS1kZXRhaWxzL2NlcnRpZmljYXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MzIHZhcmlhYmxlICYgc2FzcyB2YXJpYWJsZXMgKi9cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWZvbnQtc3RhY2stZW46IFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2staGk6IFwiTm90byBTYW5zIERldmFuYWdhcmlcIiwgXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgVGFtaWxcIixcbiAgICBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLCBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLFxuICAgIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLCBcIk5vdG8gU2FucyBLYW5uYWRhXCIsXG4gICAgXCJOb3RvIFNhbnMgT3JpeWFcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc3RhY2stdXI6IFwiTm90byBTYW5zXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIFwiTm90byBTYW5zIERldmFuYWdhcmlcIixcbiAgICBcIk5vdG8gU2FucyBUYW1pbFwiLCBcIk5vdG8gU2FucyBCZW5nYWxpXCIsIFwiTm90byBTYW5zIE1hbGF5YWxhbVwiLFxuICAgIFwiTm90byBTYW5zIEd1cm11a2hpXCIsIFwiTm90byBTYW5zIEd1amFyYXRpXCIsIFwiTm90byBTYW5zIFRlbHVndVwiLFxuICAgIFwiTm90byBTYW5zIEthbm5hZGFcIiwgXCJOb3RvIFNhbnMgT3JpeWFcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuXG4gIC8vIGJhc2UgY29sb3JzXG4gIC0tYmx1ZTogIzAyNGY5ZDtcbiAgLS1ncmVlbjogIzAwODg0MDtcbiAgLS1vcmFuZ2U6ICNlNTVhMjg7XG4gIC0tcmVkOiAjZmY0NTU4O1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuXG4gIC8vIGdyYXkgY29sb3JzIHNoYWRlc1xuICAtLWdyYXktaHM6IDAsIDAlO1xuICAtLWdyYXk6IGhzbCh2YXIoLS1ncmF5LWhzKSwgMjAlKTtcbiAgLS1ncmF5LTA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgOTUlKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4gIC0tZ3JheS0xMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgODAlKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuICAtLWdyYXktMjAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDYwJSk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuICAtLWdyYXktMzAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDU5JSk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuICAtLWdyYXktNDAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDQwJSk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiAgLS1ncmF5LTgwMDogdmFyKC0tZ3JheSk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4gIC8vIGJhc2V0aGVtZVxuICAtLXByaW1hcnktY29sb3I6ICMwMjRmOWQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDA4ODQwO1xuICAtLXRlcnRpYXJ5LWNvbG9yOiAjZTU1YTI4O1xuXG4gIC8vIHByaW1hcnkgY29sb3JzXG4gIC0tcHJpbWFyeS0wOiAjZjNmN2ZhOyAvLyBiZ1xuICAtLXByaW1hcnktMTAwOiAjZWRmNGY5OyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuICAtLXByaW1hcnktMjAwOiAjODBhN2NlOyAvLyBkaXZpZGVyXG4gIC0tcHJpbWFyeS0yNTA6ICNkM2U3ZjQ7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuICAtLXByaW1hcnktMzAwOiAjN2FiNGVlOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiAgLS1wcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS1jb2xvcik7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuICAtLXByaW1hcnktNjAwOiAjMDA1MzkxOyAvLyBvbiBwcmVzc1xuICAtLXByaW1hcnktODAwOiAjMDAyZTUwOyAvLyBob3ZlclxuXG4gIC8vIHNlY29uZGFyeSBjb2xvcnNcbiAgLS1zZWNvbmRhcnktMDogI2UxZmZkZjsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tc2Vjb25kYXJ5LTEwMDogIzAwYzc4NjsgLy8gYnV0dG9uIGJnIGJnLCB0b2FzdFxuICAtLXNlY29uZGFyeS0yMDA6ICMwN2JjODE7IC8vIGJ1dHRvbiBiZ1xuICAtLXNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7IC8vIGhvdmVyXG5cbiAgLy8gdGVydGlhcnkgY29sb3JzXG4gIC0tdGVydGlhcnktMDogI2ZlZWRkNzsgLy8gdG9hc3QgYmcsIGxhYmVsXG4gIC0tdGVydGlhcnktMTAwOiAjZmZhMTFkOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktY29sb3IpOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbiAgLy8gcmVkIGNvbG9yc1xuICAtLXJlZC0wOiAjZmJjY2QxOyAvLyB0b2FzdCBiZ1xuICAtLXJlZC0xMDA6ICNmZjY5Nzk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tcmVkLTQwMDogdmFyKC0tcmVkKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4gIC8vIHN0YXR1cyBjb2xvcnNcbiAgLS1pbmZvLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIC0td2FybmluZy1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgLS1kYW5nZXItY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgLy8gZWxlbWVudCBiYXNlZCB2YXJpYWJsZXNcbiAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIC0tYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1ib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbiAgLy8gYWxwaGFcbiAgLS1hbHBoYTA6IDA7XG4gIC0tYWxwaGEyNTogMC4yNTtcbiAgLS1hbHBoYTUwOiAwLjU7XG4gIC0tYWxwaGE3NTogMC43NTtcblxuICAvLyBmb250c1xuICAtLWZvbnQtZGVmYXVsdC1zaXplOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuICAtLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAtLWZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIC0tbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiAgLS1oMS1mb250LXNpemU6IDJyZW07IC8vIDMycHhcbiAgLS1oMi1mb250LXNpemU6IDEuNzVyZW07IC8vIDI4cHhcbiAgLS1oMy1mb250LXNpemU6IDEuNXJlbTsgLy8gMjRweFxuICAtLWg0LWZvbnQtc2l6ZTogMS4ycmVtOyAvLyAyMHB4XG4gIC0taDUtZm9udC1zaXplOiAxcmVtOyAvLyAxNnB4XG4gIC0taDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuICAtLWZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuICAtLWZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1zbTogMC43NXJlbTsgLy8gMTJweFxuICAtLWZvbnQtc2l6ZS14czogMC42MjVyZW07IC8vIDEwcHhcbiAgLS1wLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuICAvLyBiYXNlIHZhcmlhYmxlc1xuICAtLWJhc2UtZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLS1iYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07IC8vOHB4LFxuICAtLWljb24tc3ZnLXh4czogMC43NXJlbTtcbiAgLS1pY29uLXN2Zy14czogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDIpO1xuICAtLWljb24tc3ZnLXNtOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMyk7XG4gIC0taWNvbi1zdmctbWQ6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA0KTtcbiAgLS1pY29uLXN2Zy1sZzogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDUpO1xuICAtLWljb24tc3ZnLXhsOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNik7XG5cbiAgLy9yYW5kb20gY29sb3JzIGFuZCBiYWNrZ3JvdW5kc1xuICAtLXJjLTk2QzhEQTogIzk2QzhEQTtcbiAgLS1yYy0wMDc2RkU6ICMwMDc2RkU7XG4gIC0tcmMtRTVFREY1OiAjRTVFREY1O1xuICAtLXJjLTdjN2I3YjogIzdjN2I3YjtcbiAgLS1yYy1mNWY1ZjU6ICNmNWY1ZjU7XG4gIC0tcmMtZmRmZGZkOiAjZmRmZGZkO1xuICAtLXJjLWRlZGVkZTogI2RlZGVkZTtcbiAgLS1yYy1GNUY5RkM6ICNGNUY5RkM7XG4gIC0tcmMtYzRjNGM0OiAjYzRjNGM0O1xuICAtLXJjLWQ4ZDhkODogI2Q4ZDhkODtcbiAgLS1yYy1lOWU1ZTU6ICNlOWU1ZTU7XG4gIC0tcmMtZGRkZGRkOiAjZGRkZGRkO1xuICAtLXJjLTdiODZmNDogIzdiODZmNDtcbiAgLS1yYy1kMGQwZDA6ICNkMGQwZDA7XG4gIC0tcmMtNWM4ZGI3OiAjNWM4ZGI3O1xuICAtLXJjLTkxYWVjYzogIzkxYWVjYztcbiAgLS1yYy1mOWY5Zjk6ICNmOWY5Zjk7XG4gIC0tcmMtZDRkM2QzOiAjZDRkM2QzO1xuICAtLXJjLUZBRkFGQTogI0ZBRkFGQTtcbiAgLS1yYy04NjZBNkE6ICM4NjZhNmE7XG4gIC0tcmMtOTc5Nzk3OiAjOTc5Nzk3O1xuICAtLXJjLWUwZTFlMjogI2UwZTFlMjtcbiAgLS1yYy0wMEJEN0Y6ICMwMEJEN0Y7XG4gIC0tcmMtOUY5RjlGOiAjOUY5RjlGO1xuICAtLXJjLUYzRjhGRjogI0YzRjhGRjtcbiAgLS1yYy04MEE3Q0U6ICM4MEE3Q0U7XG4gIC0tcmMtOWI5YjliOiAjOWI5YjliO1xuICAtLXJjLTJjYTU4ZDogIzJjYTU4ZDtcbiAgLS1yYy0wMDdBRkY6ICMwMDdBRkY7XG4gIC0tcmMtYmRiZGJkOiAjYmRiZGJkO1xuICAtLXJjLWNlY2VjZTogI2NlY2VjZTtcbiAgLS1yYy0yOTcyYTQ6ICMyOTcyYTQ7XG4gIC0tcmMtRTBGMUZEOiAjRTBGMUZEO1xuICAtLXJjLUM4RDZFQTogI0M4RDZFQTtcbiAgLS1yYy1lMmUzZTU6ICNlMmUzZTU7XG4gIC0tcmMtQkNCRUMwOiAjQkNCRUMwO1xuICAtLXJjLWQ0ZDRkNTogI2Q0ZDRkNTtcbiAgLS1yYy1kNGQ4ZGE6ICNkNGQ4ZGE7XG4gIC0tcmMtYmZlMWNmOiAjYmZlMWNmO1xuICAtLXJjLTI4OWZkOTogIzI4OWZkOTtcbiAgLS1yYy1lNjg5MDA6ICNlNjg5MDA7XG4gIC0tcmMtMmY0MjcyOiAjMmY0MjcyO1xuICAtLXJjLWUwZTBlMDogI2UwZTBlMDtcbiAgLS1yYy0yMzYxZmY6ICMyMzYxZmY7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1mZmIzMDA6ICNmZmIzMDA7XG4gIC0tcmMtZDhkZWUyOiAjZDhkZWUyO1xuICAtLXJjLTI1MjUyNTogIzI1MjUyNTtcbiAgLS1yYy1mY2YyZDY6ICNmY2YyZDY7XG4gIC0tcmMtYWRkOGU2OiAjYWRkOGU2O1xuICAtLXJjLWFmZDllNzogI2FmZDllNztcbiAgLS1yYy1EOUU0RjI6ICNEOUU0RjI7XG4gIC0tcmMtODhCN0U2OiAjODhCN0U2O1xuICAtLXJjLTRhNGE0YTogIzRhNGE0YTtcbiAgLS1yYy1mZmY2ZjY6ICNmZmY2ZjY7XG4gIC0tcmMtZjdmN2Y3OiAjZjdmN2Y3O1xuICAtLXJjLTY2YzdmNDogIzY2YzdmNDtcbiAgLS1yYy0xQjQ3ODU6ICMxQjQ3ODU7XG4gIC0tcmMtYTlhOWE5OiAjYTlhOWE5O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy0xYjFjMWQ6ICMxYjFjMWQ7XG4gIC0tcmMtZGVkZWRmOiAjZGVkZWRmO1xuICAtLXJjLWFhYWFhYTogI2FhYWFhYTtcbiAgLS1yYy0wNDJENTU6ICMwNDJENTU7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLWJiYmJiYjogI2JiYmJiYjtcbiAgLS1yYy0wMDlENTM6ICMwMDlENTM7XG4gIC0tcmMtRTBFRkZGOiAjRTBFRkZGO1xuICAtLXJjLTE5NkRBQjogIzE5NkRBQjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWMzYzNjMzogI2MzYzNjMztcbiAgLS1yYy0wMGFiYzc6IzAwYWJjNztcbiAgLS1yYy1GQ0U2RTY6I0ZDRTZFNjtcbiAgLS1yYy1ERUNBQ0E6I0RFQ0FDQTtcbiAgLS1yYy00MjQyNDI6IzQyNDI0MjtcbiAgLS1yYy1GNUQ3RDc6I0Y1RDdENztcbiAgLS1yYy1GN0ZGRjU6I0Y3RkZGNTtcbiAgLS1yYy1EM0RFRDE6I0QzREVEMTtcbiAgLS1yYy1FQkY2RTA6I0VCRjZFMDtcbiAgLS1yYy1GNkY2RjY6I0Y2RjZGNjtcbiAgLS1yYy0zM0I2Q0M6IzMzQjZDQztcbiAgLS1yYy0yZGFkYzI6IzJkYWRjMjtcbiAgLS1yYy0wZmJhZDY6IzBmYmFkNjtcbiAgLS1yYy1mN2ZmZWM6I2Y3ZmZlYztcbiAgLS1yYy1kMmRkYzc6I2QyZGRjNztcbiAgLS1yYy1mZmUxZTE6I2ZmZTFlMTtcbiAgLS1yYy1lNmM4Yzg6I2U2YzhjODtcbiAgLS1yYy1mNTZiNTY6I2Y1NmI1NjtcbiAgLS1yYy1kYzUyM2Q6I2RjNTIzZDtcbiAgLS1yYy1lNjVjNDc6I2U2NWM0NztcbiAgLS1yYy01NjVjNzA6IzU2NWM3MDtcbiAgLS1yYy02RDcyNzg6IzZENzI3ODtcbiAgLS1yYy1FMDhBMjA6I0UwOEEyMDtcbiAgLS1yYy1ERDY4MEY6I0RENjgwRjtcbiAgLS1yYy1kYWQ5Y2I6I2RhZDljYjtcbiAgLS1yYy1GRkQ5NTQ6I0ZGRDk1NDtcbiAgLS1yYy1yZ2JhLWJsYWNrOiAwLCAwLCAwOyAvLyB2YXIoLS1ibGFjaylcbiAgLS1yYy1yZ2JhLXdoaXRlOiAyNTUsIDI1NSwgMjU1OyAvLyB2YXIoLS13aGl0ZSlcbiAgLS1yYy1yZ2JhLWdyYXk6IDUxLCA1MSwgNTE7IC8vIHZhcigtLWdyYXktMzAwKVxuICAtLXJjLXJnYmEtcHJpbWFyeTogMiwgNzksIDE1NzsgLy8gdmFyKC0tcHJpbWFyeS1jb2xvcilcbiAgLS1yYy1yZ2JhLXByaW1hcnktMzAwOiA0MSwgMTE0LCAxNjQ7IC8vdmFyKC0tcHJpbWFyeS0zMDApXG4gIC0tcmMtcmdiYS1ncmF5LTMwMDogMzQsIDM2LCAzODsgLy92YXIoLS1ncmF5LTEwMClcbiAgLS1yYy1yZ2JhLTg2NmE2YTogMTM0LCAxMDYsIDEwNjtcbiAgLS1yYy1yZ2JhLWQwZDBkMDogMjA4LCAyMDgsIDIwODtcbiAgLS1yYy1yZ2JhLTdiODZmNDogMTIzLCAxMzQsIDI0NDtcbiAgLS1yYy1yZ2JhLUM4RDZFQTogMjAwLCAyMTQsIDIzNDtcbiAgLS11aS1kcm9wZG93bi1zZWxlY3Rpb24taWNvbjojNDlCMUYyO1xufVxuXG4vLyBWYXJpYWJsZXNcbiRmb250LXN0YWNrLWVuOiB2YXIoLS1mb250LXN0YWNrLWVuKTtcbiRmb250LXN0YWNrLWhpOiB2YXIoLS1mb250LXN0YWNrLWhpKTtcbiRmb250LXN0YWNrLXVyOiB2YXIoLS1mb250LXN0YWNrLXVyKTtcblxuLy8gQmFzZSBDb2xvcnNcbiRibHVlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRncmVlbjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiRvcmFuZ2U6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiRyZWQ6IHZhcigtLXJlZCk7XG4kYmxhY2s6IHZhcigtLWJsYWNrKTtcbiR3aGl0ZTogdmFyKC0td2hpdGUpO1xuJGluZGlnbzogdmFyKC0taW5kaWdvKTtcbiRwdXJwbGU6IHZhcigtLXB1cnBsZSk7XG4kcGluazogdmFyKC0tcGluayk7XG4keWVsbG93OiB2YXIoLS15ZWxsb3cpO1xuJHRlYWw6IHZhcigtLXRlYWwpO1xuJGN5YW46IHZhcigtLWN5YW4pO1xuJGdyYXk6IHZhcigtLWdyYXkpO1xuXG4vLyBicmFuZCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kdGVydGlhcnktY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbi8vIE5ldXRyYWwgQ29sb3JzXG4kd2hpdGUtY29sb3I6IHZhcigtLXdoaXRlKTtcbi8vIGdyYXkgY29sb3JzIHNoYWRlc1xuJGdyYXktMDogdmFyKC0tZ3JheS0wKTsgLy8gcGxhY2UgaG9sZGVyIGFjdGl2ZSBiZyAjRjJGMkYyXG4kZ3JheS0xMDA6IHZhcigtLWdyYXktMTAwKTsgLy8gZGlzYWJsZSBidG4gYmcsIGljb24gY29sb3IgI0NDQ0NDQ1xuJGdyYXktMjAwOiB2YXIoLS1ncmF5LTIwMCk7IC8vIGRpc2FibGUgdGV4dCwgcGxhY2UgaG9sZGVyIHRleHQgIzk5OTk5OVxuJGdyYXktMzAwOiB2YXIoLS1ncmF5LTMwMCk7IC8vIHN1YiBoZWFkaW5nIDIgIzk2OTY5NlxuJGdyYXktNDAwOiB2YXIoLS1ncmF5LTQwMCk7IC8vIHN1YiBoZWFkaW5nICM2NjY2NjZcbiRncmF5LTgwMDogdmFyKC0tZ3JheS04MDApOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuLy8gcHJpbWFyeSBjb2xvcnMgc2hhZGVzXG4kcHJpbWFyeS0wOiB2YXIoLS1wcmltYXJ5LTApOyAvLyBiZ1xuJHByaW1hcnktMTAwOiB2YXIoLS1wcmltYXJ5LTEwMCk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4kcHJpbWFyeS0yMDA6IHZhcigtLXByaW1hcnktMjAwKTsgLy8gZGl2aWRlclxuJHByaW1hcnktMjUwOiB2YXIoLS1wcmltYXJ5LTI1MCk7IC8vcGFnaW5hdGlvbiBiZyBjb2xvclxuJHByaW1hcnktMzAwOiB2YXIoLS1wcmltYXJ5LTMwMCk7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuJHByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LTQwMCk7IC8vIGJ1dHRvbiBiZywgaGVhZGluZywgdGFibGUgdGl0bGVzLCBsaW5rcywgdG9nZ2xlc1xuJHByaW1hcnktNjAwOiB2YXIoLS1wcmltYXJ5LTYwMCk7IC8vIG9uIHByZXNzXG4kcHJpbWFyeS04MDA6IHZhcigtLXByaW1hcnktODAwKTsgLy8gaG92ZXJcblxuLy8gc2Vjb25kYXJ5IGNvbG9ycyBzaGFkZXNcbiRzZWNvbmRhcnktMDogdmFyKC0tc2Vjb25kYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiRzZWNvbmRhcnktMTAwOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRzZWNvbmRhcnktMjAwOiB2YXIoLS1zZWNvbmRhcnktMjAwKTsgLy8gYnV0dG9uIGJnXG4kc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LTQwMCk7IC8vIGhvdmVyXG5cbi8vIHRlcnRpYXJ5IGNvbG9ycyBzaGFkZXNcbiR0ZXJ0aWFyeS0wOiB2YXIoLS10ZXJ0aWFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kdGVydGlhcnktMTAwOiB2YXIoLS10ZXJ0aWFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktNDAwKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4vLyByZWQgY29sb3JzIHNoYWRlc1xuJHJlZC0wOiB2YXIoLS1yZWQtMCk7IC8vIHRvYXN0IGJnXG4kcmVkLTEwMDogdmFyKC0tcmVkLTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kcmVkLTQwMDogdmFyKC0tcmVkLTQwMCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuLy8gaW5wdXQgYm9yZGVyIHdpZHRoXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG5cbi8vIFN0YXR1cyBDb2xvcnNcbiRpbmZvLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4kc3VjY2Vzcy1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XG4kd2FybmluZy1jb2xvcjogdmFyKC0tdGVydGlhcnktNDAwKTtcbiRkYW5nZXItY29sb3I6IHZhcigtLXJlZC0xMDApO1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiRkZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiRiZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuJGJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuLyogRm9udHMgKi9cbiRmb250LWRlZmF1bHQtc2l6ZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpO1xuJGZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC13ZWlnaHQtbGlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiRmb250LXdlaWdodC1ub3JtYWw6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4kZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRsaW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuJGgxLWZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTsgLy8gMzJweFxuJGgyLWZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTsgLy8gMjhweFxuJGgzLWZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTsgLy8gMjRweFxuJGg0LWZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTsgLy8gMjBweFxuJGg1LWZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiRmb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRmb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtc206IHZhcigtLWZvbnQtc2l6ZS1zbSk7IC8vIDEycHhcbiRmb250LXNpemUteHM6IHZhcigtLWZvbnQtc2l6ZS14cyk7IC8vIDEwcHhcbiRwLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLzE0cHhcblxuLy8gc3BhY2VzXG4kYmFzZS1ibG9jay1zcGFjZTogMC41cmVtO1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgXCJtaXhpbnMvbWl4aW5zXCI7XG5cblxuLnNiLW1vYmlsZURldmljZSB7XG4gICAgLnNiLW1vYmlsZURldmljZS1zY3JlZW4ge1xuICAgICAgaGVpZ2h0OiBjYWx2dWx0ZVJlbSgyMDIuNXB4KTtcbiAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oMzYwcHgpO1xuICAgICAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMTBweCkgc29saWQgdmFyKC0tYmxhY2spO1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDE1cHgpO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgLnNiLW1vYmlsZURldmljZS1zZW5zb3JzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDEwcHgpIGNhbGN1bGF0ZVJlbSg1cHgpIGNhbGN1bGF0ZVJlbSgxMHB4KSAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsY3VsYXRlUmVtKDI1cHgpO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsY3VsYXRlUmVtKDI1cHgpO1xuICAgICAgICAuc2ItbW9iaWxlRGV2aWNlLXNlbnNvciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmMtMjUyNTI1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnNiLW1vYmlsZURldmljZS1zcGVha2VyIHtcbiAgICAgICAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDVweCk7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNzRweCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmMtMjUyNTI1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oMTBweCk7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjdWxhdGVSZW0oMTBweCkgMCBjYWxjdWxhdGVSZW0oMTBweCkgY2FsY3VsYXRlUmVtKDFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zYi1tb2JpbGVEZXZpY2UtdmlkZW9TY3JlZW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGN1bGF0ZVJlbSg1cHgpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDM0MHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg2ODBweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDQwMHB4KTtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oODAwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wbGF5ZXItdGh1bWJuYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZWQtY29udGVudC5qcGcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGN1bGF0ZVJlbSg1cHgpO1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAuY2VydGlmaWNhdGUtYXJlYS1wbGF5ZXIge1xuICAgICAgLmNvbnRlbnRWaWV3ZXJJZnJhbWVTaGFkb3cge1xuICAgICAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICJdfQ== */"];



/***/ }),

/***/ "XZ5I":
/*!*********************************************************************!*\
  !*** ./src/app/modules/certificate/certificate.module.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: CertificateModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateModuleNgFactory", function() { return CertificateModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _certificate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificate.module */ "vDza");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _components_certificate_configuration_certificate_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/certificate-configuration/certificate-configuration.component.ngfactory */ "pkmB");
/* harmony import */ var _components_create_template_create_template_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-template/create-template.component.ngfactory */ "JyhY");
/* harmony import */ var _components_svg_editor_svg_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/svg-editor/svg-editor.component.ngfactory */ "/Le/");
/* harmony import */ var _components_certificate_details_certificate_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/certificate-details/certificate-details.component.ngfactory */ "9A5R");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "ntJQ");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */ "9cE2");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "nmIE");
/* harmony import */ var _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/alert-modal/alert-modal.component.ngfactory */ "IuEi");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/ngx-daterangepicker-material/ngx-daterangepicker-material.ngfactory */ "dGgD");
/* harmony import */ var _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@project-sunbird/sb-dashlet-v9/project-sunbird-sb-dashlet-v9.ngfactory */ "4cR3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-avatar */ "UTQ3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-chips */ "CLta");
/* harmony import */ var _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared-feature/shared-feature.module */ "GX4e");
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");
/* harmony import */ var _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../notification/services/notification/notification-service-impl */ "2QjS");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../core/services/user/user.service */ "chB/");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../notification/services/group-notification-wrapper/group-notification-wrapper.service */ "1Ind");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service */ "SaJQ");
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../core/guard/auth-gard.service */ "uakX");
/* harmony import */ var _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../core/core.module */ "6ZYd");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ "WN11");
/* harmony import */ var _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @project-sunbird/sunbird-player-sdk-v9 */ "amcy");
/* harmony import */ var _player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../player-helper/service/quml-player/quml-player.service */ "F/jw");
/* harmony import */ var _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @project-sunbird/sunbird-collection-editor-v9 */ "qSDK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-daterangepicker-material */ "kFe1");
/* harmony import */ var _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @project-sunbird/sb-dashlet-v9 */ "IJrI");
/* harmony import */ var _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./certificate-routing.module */ "/82b");
/* harmony import */ var _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../telemetry/telemetry.module */ "OW9C");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../shared/modules/material/material.module */ "CrH2");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @project-sunbird/web-extensions */ "q0uc");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ng2-material-dropdown */ "mB+Y");
/* harmony import */ var _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../plugins/location/location.module */ "hr7c");
/* harmony import */ var sb_notification__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! sb-notification */ "oikk");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../notification/notification.module */ "ME/D");
/* harmony import */ var _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @project-sunbird/sunbird-pdf-player-v9 */ "J49s");
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ "7l48");
/* harmony import */ var _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @project-sunbird/sunbird-epub-player-v9 */ "/eec");
/* harmony import */ var _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../player-helper/player-helper.module */ "9BjS");
/* harmony import */ var ng_svg_editor__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ng-svg-editor */ "FhpT");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ngx-slick */ "k0v7");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.module */ "axVG");
/* harmony import */ var _components_certificate_configuration_certificate_configuration_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/certificate-configuration/certificate-configuration.component */ "0laf");
/* harmony import */ var _components_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/create-template/create-template.component */ "hpz1");
/* harmony import */ var _components_svg_editor_svg_editor_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/svg-editor/svg-editor.component */ "Jm7v");
/* harmony import */ var _components_certificate_details_certificate_details_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/certificate-details/certificate-details.component */ "fIOR");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");


































































































var CertificateModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_certificate_module__WEBPACK_IMPORTED_MODULE_1__["CertificateModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵbpNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_certificate_configuration_certificate_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CertificateConfigurationComponentNgFactory"], _components_create_template_create_template_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CreateTemplateComponentNgFactory"], _components_svg_editor_svg_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SvgEditorComponentNgFactory"], _components_certificate_details_certificate_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CertificateDetailsComponentNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵceNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TooltipComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["MatCalendarHeaderNgFactory"], _shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AlertModalComponentNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFormComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTimerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTextboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTextareaComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicMultipleDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicCheckboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicMultiSelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["TopicpickerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["KeywordsComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFrameworkCategorySelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵbNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFrameworkComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicRadioComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicDialcodeComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵcNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵdNgFactory"], _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_13__["DaterangepickerComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ChartJsComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["BigNumberComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["DtTableComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["MapComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["ɵbx"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["ɵbx"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModalService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModalService"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["ɵbx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiLocalizationService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiLocalizationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPopupConfig"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPopupConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ScrollbarHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ScrollbarHelper"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["DimensionsHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["DimensionsHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ColumnChangesService"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ColumnChangesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_EXTEND"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵa"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"], [[2, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵc"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarService"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_32__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_32__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_NOTIFICATION_SERVICE", _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["csNotificationServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, "SB_NOTIFICATION_SERVICE", _notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_35__["NotificationServiceImpl"], ["CS_NOTIFICATION_SERVICE", _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_39__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["ActivatedRoute"], _notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_40__["GroupNotificationWrapperService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__["CacheService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__["CacheService"], [ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__["CacheStorageAbstract"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"], _core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"], _core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_44__["PermissionService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_45__["ResourceService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_46__["ConfigService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__["ToasterService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], _core_core_module__WEBPACK_IMPORTED_MODULE_47__["ɵ0"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryService"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryService"], [_project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ErrorService"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ErrorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QuestionCursor"], null, [_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_52__["EditorCursor"], null, [_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["ɵb"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LocaleService"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LocaleService"], [ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LOCALE_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DATA_SERVICE"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_USER_SERVICE", _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["csUserServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_CERTIFICATE_SERVICE", _certificate_module__WEBPACK_IMPORTED_MODULE_1__["csCertificateServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiTransitionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiTransitionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDimmerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDimmerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiUtilityModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiUtilityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModalModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_38__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_38__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["CertificateRoutingModule"], _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["CertificateRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDropdownModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiLocalizationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiLocalizationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSelectModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiCollapseModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiAccordionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPopupModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiProgressModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiRatingModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_57__["TelemetryModule"], _telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_57__["TelemetryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_58__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_58__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_58__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_59__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_59__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_60__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_60__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_60__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_60__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_58__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_61__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_61__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_62__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_63__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_63__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_68__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_68__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_69__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_69__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_70__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_70__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_70__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_70__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_71__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_71__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_72__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_72__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_73__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_73__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_73__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_73__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_74__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_74__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_75__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_75__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_76__["MaterialModule"], _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_76__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_77__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_77__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiMessageModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPaginationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiCheckboxModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDatepickerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSearchModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSidebarModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiTabsModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_16__["SuiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_78__["WebExtensionModule"], _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_78__["WebExtensionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CardModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ModalModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["LayoutModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["LibraryFiltersModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["LibraryFiltersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["AccordionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PipesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ContentDetailsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ContentDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["FaqModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["FaqModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PagesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CertificateActionsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CertificateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PillsGridModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["PillsGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ListViewModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["ListViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CommonConsumptionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_79__["CommonConsumptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_80__["ɵe"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_80__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_81__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_81__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_32__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_32__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_80__["CommonFormElementsModule"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_80__["CommonFormElementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_82__["LocationModule"], _plugins_location_location_module__WEBPACK_IMPORTED_MODULE_82__["LocationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, sb_notification__WEBPACK_IMPORTED_MODULE_83__["SbNotificationModule"], sb_notification__WEBPACK_IMPORTED_MODULE_83__["SbNotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _notification_notification_module__WEBPACK_IMPORTED_MODULE_84__["NotificationModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_84__["NotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_85__["SunbirdPdfPlayerModule"], _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_85__["SunbirdPdfPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryModule"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_86__["SunbirdVideoPlayerModule"], _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_86__["SunbirdVideoPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_87__["SunbirdEpubPlayerModule"], _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_87__["SunbirdEpubPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_88__["PlayerHelperModule"], _player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_88__["PlayerHelperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_svg_editor__WEBPACK_IMPORTED_MODULE_89__["SvgEditorModule"], ng_svg_editor__WEBPACK_IMPORTED_MODULE_89__["SvgEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick__WEBPACK_IMPORTED_MODULE_90__["SlickModule"], ngx_slick__WEBPACK_IMPORTED_MODULE_90__["SlickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_91__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_91__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__["DataTablesModule"], angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__["DataTablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["NgMultiSelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["NgMultiSelectDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["NgxDaterangepickerMd"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["NgxDaterangepickerMd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DashletModule"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DashletModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["SharedFeatureModule"], _shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["SharedFeatureModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _certificate_module__WEBPACK_IMPORTED_MODULE_1__["CertificateModule"], _certificate_module__WEBPACK_IMPORTED_MODULE_1__["CertificateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_38__["ROUTES"], function () { return [[{ path: "configure/certificate", component: _components_certificate_configuration_certificate_configuration_component__WEBPACK_IMPORTED_MODULE_93__["CertificateConfigurationComponent"], canActivate: [_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"]], data: _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ0"] }, { path: "configure/create-template", component: _components_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_94__["CreateTemplateComponent"], canActivate: [_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"]], data: _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ1"] }, { path: "configure/create-certificate-template", component: _components_svg_editor_svg_editor_component__WEBPACK_IMPORTED_MODULE_95__["SvgEditorComponent"], canActivate: [_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"]], data: _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ2"] }, { path: ":uuid", component: _components_certificate_details_certificate_details_component__WEBPACK_IMPORTED_MODULE_96__["CertificateDetailsComponent"], data: _certificate_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ3"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_97__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LOCALE_CONFIG"], {}, [])]); });



/***/ }),

/***/ "Z4rR":
/*!*********************************************************!*\
  !*** ./src/app/modules/certificate/components/index.ts ***!
  \*********************************************************/
/*! exports provided: CertificateDetailsComponent, CertificateConfigurationComponent, CreateTemplateComponent, SvgEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _certificate_details_certificate_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificate-details/certificate-details.component */ "fIOR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificateDetailsComponent", function() { return _certificate_details_certificate_details_component__WEBPACK_IMPORTED_MODULE_0__["CertificateDetailsComponent"]; });

/* harmony import */ var _certificate_configuration_certificate_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificate-configuration/certificate-configuration.component */ "0laf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificateConfigurationComponent", function() { return _certificate_configuration_certificate_configuration_component__WEBPACK_IMPORTED_MODULE_1__["CertificateConfigurationComponent"]; });

/* harmony import */ var _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-template/create-template.component */ "hpz1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComponent", function() { return _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_2__["CreateTemplateComponent"]; });

/* harmony import */ var _svg_editor_svg_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-editor/svg-editor.component */ "Jm7v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgEditorComponent", function() { return _svg_editor_svg_editor_component__WEBPACK_IMPORTED_MODULE_3__["SvgEditorComponent"]; });







/***/ }),

/***/ "aHSL":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/browse-image-popup/browse-image-popup.component.ngfactory.js ***!
  \*************************************************************************************************************/
/*! exports provided: RenderType_BrowseImagePopupComponent, View_BrowseImagePopupComponent_0, View_BrowseImagePopupComponent_Host_0, BrowseImagePopupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BrowseImagePopupComponent", function() { return RenderType_BrowseImagePopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BrowseImagePopupComponent_0", function() { return View_BrowseImagePopupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BrowseImagePopupComponent_Host_0", function() { return View_BrowseImagePopupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseImagePopupComponentNgFactory", function() { return BrowseImagePopupComponentNgFactory; });
/* harmony import */ var _browse_image_popup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse-image-popup.component.scss.shim.ngstyle */ "5FRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _browse_image_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browse-image-popup.component */ "TbDo");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");













var styles_BrowseImagePopupComponent = [_browse_image_popup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BrowseImagePopupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BrowseImagePopupComponent, data: {} });

function View_BrowseImagePopupComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "selected-mark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "24px"], ["src", "assets/images/checkbox-icon.svg"], ["width", "24px"]], null, null, null, null, null))], null, null); }
function View_BrowseImagePopupComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "three wide column p-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "ui card text-center common-contribution-card active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["rel", "placeholder"], ["tabindex", "0"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectLogo(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.versionKey) === ((_co.selectedLogo == null) ? null : _co.selectedLogo.versionKey)); _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.artifactUrl); _ck(_v, 3, 0, currVal_0); }); }
function View_BrowseImagePopupComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "selected-mark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "24px"], ["src", "assets/images/checkbox-icon.svg"], ["width", "24px"]], null, null, null, null, null))], null, null); }
function View_BrowseImagePopupComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "three wide column p-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "ui card text-center common-contribution-card active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["rel", "placeholder"], ["tabindex", "0"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectLogo(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.versionKey) === ((_co.selectedLogo == null) ? null : _co.selectedLogo.versionKey)); _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.artifactUrl); _ck(_v, 3, 0, currVal_0); }); }
function View_BrowseImagePopupComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "1"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showUploadSignature() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.uploadSignature)); _ck(_v, 1, 0, currVal_0); }); }
function View_BrowseImagePopupComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 59, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 58, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 57, "div", [["class", "ui modal transition active visible large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "d-flex flex-ai-center sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "mr-8"], ["height", "20px"], ["src", "assets/images/image.svg"], ["width", "24px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 37, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 36, "div", [["class", "image-tabs px-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "input", [["checked", ""], ["class", "image-input"], ["id", "tab1"], ["name", "tabs"], ["type", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [["class", "image-label mr-8"], ["for", "tab1"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAssetList() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "input", [["class", "image-input"], ["id", "tab2"], ["name", "tabs"], ["type", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "label", [["class", "image-label"], ["for", "tab2"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllImages() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 14, "section", [["id", "content1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 13, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 9, "div", [["class", "sb-search-box mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "div", [["class", "input-div relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "input", [["class", "sb-search-input"], ["type", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup.enter"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.imageName = $event) !== false);
        ad = (pd_4 && ad);
    } if (("keyup.enter" === en)) {
        var pd_5 = (_co.searchImage() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "i", [["class", "close icon"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAssetList() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "search icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "ui grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 14, "section", [["id", "content2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 13, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 9, "div", [["class", "sb-search-box mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 8, "div", [["class", "input-div relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "input", [["class", "sb-search-input"], ["type", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup.enter"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.imageName = $event) !== false);
        ad = (pd_4 && ad);
    } if (("keyup.enter" === en)) {
        var pd_5 = (_co.searchImage("all") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "i", [["class", "close icon"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllImages() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "i", [["class", "search icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "div", [["class", "ui grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 15, "div", [["class", "sb-modal-actions d-flex flex-jc-space-between flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 9, "div", [["class", "d-flex flex-ai-center relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-error mr-4"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "div", [["class", "or-toggle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectAndUseLogo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](53, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 4, "div", [["class", "d-flex flex-ai-center relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary mr-8"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.browseImages() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](57, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_11 = _co.imageName; _ck(_v, 21, 0, currVal_11); var currVal_12 = _co.imagesList; _ck(_v, 28, 0, currVal_12); var currVal_21 = _co.imageName; _ck(_v, 36, 0, currVal_21); var currVal_22 = _co.allImagesList; _ck(_v, 43, 0, currVal_22); var currVal_26 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_27 = _ck(_v, 53, 0, !_co.selectedLogo); _ck(_v, 52, 0, currVal_26, currVal_27); var currVal_30 = _co.enableUploadSignature; _ck(_v, 59, 0, currVal_30); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selectImage)); _ck(_v, 5, 0, currVal_0); var currVal_1 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.myImages)); _ck(_v, 10, 0, currVal_1); var currVal_2 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.allImages)); _ck(_v, 13, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmpt == null) ? null : _co.resourceService.frmelmnts.cert.prmpt.searchImage)))); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_13 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.prmpt == null) ? null : _co.resourceService.frmelmnts.cert.prmpt.searchImage)))); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending; _ck(_v, 33, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_23 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 47, 0, currVal_23); var currVal_24 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.or)); _ck(_v, 50, 0, currVal_24); var currVal_25 = !_co.selectedLogo; _ck(_v, 51, 0, currVal_25); var currVal_28 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.Select))); _ck(_v, 54, 0, currVal_28); var currVal_29 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.uploadAndUse)); _ck(_v, 57, 0, currVal_29); }); }
function View_BrowseImagePopupComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BrowseImagePopupComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[1, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "large"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_BrowseImagePopupComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 73, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 72, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 71, "div", [["class", "ui modal transition active visible large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "d-flex flex-ai-center sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "mr-8"], ["height", "20px"], ["src", "assets/images/upload.svg"], ["width", "24px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 54, "div", [["class", "sb-modal-content px-24 sb-bg-color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 53, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 52, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 19, "div", [["class", "six wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "choose-img-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "input", [["class", "sb-btn-upload upload-btn fnormal"], ["name", "file"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.fileChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "div", [["class", "ui info message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "ol", [["class", "ui list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "li", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "li", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "li", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "p", [["class", "fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 31, "div", [["class", "six wide column pl-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 30, "div", [["class", "border-line"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 4, "div", [["class", "ui info message p-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "img", [["class", "mr-8"], ["height", "22px"], ["src", "assets/images/information-icon.svg"], ["width", "24px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "div", [["class", "drop-img-text fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 11, "div", [["class", "sb-field mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 3, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "input", [["class", "sb-form-control is-valid"], ["formControlName", "assetCaption"], ["placeholder", "Enter asset caption"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 9, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 6, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 5, "input", [["class", "sb-form-control is-valid"], ["formControlName", "creator"], ["placeholder", "Enter Name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 12, "div", [["class", "sb-modal-actions d-flex flex-jc-space-between flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 9, "div", [["class", "d-flex flex-ai-center relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-error mr-4"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](64, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "div", [["class", "or-toggle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](67, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](70, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](71, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-gray"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_16 = _co.uploadForm; _ck(_v, 31, 0, currVal_16); var currVal_26 = "assetCaption"; _ck(_v, 48, 0, currVal_26); var currVal_35 = "creator"; _ck(_v, 58, 0, currVal_35); var currVal_39 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_40 = _ck(_v, 70, 0, (!_co.uploadForm.valid || !_co.fileObj)); _ck(_v, 69, 0, currVal_39, currVal_40); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.uploadAndUse)); _ck(_v, 5, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.chooseImageNote))); _ck(_v, 11, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.chooseImageType))); var currVal_3 = ((_co.imageDimensions[_co.logoType.type] == null) ? null : _co.imageDimensions[_co.logoType.type].type); _ck(_v, 17, 0, currVal_2, currVal_3); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.chooseImageSize))); _ck(_v, 19, 0, currVal_4); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.chooseImagedimensions))); var currVal_6 = ((_co.imageDimensions[_co.logoType.type] == null) ? null : _co.imageDimensions[_co.logoType.type].dimensions); _ck(_v, 21, 0, currVal_5, currVal_6); var currVal_7 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copyrights))); _ck(_v, 24, 0, currVal_7); var currVal_8 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.uploadlicense))); _ck(_v, 28, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending; _ck(_v, 30, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_17 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.imageDrapAndDrop))); _ck(_v, 38, 0, currVal_17); var currVal_18 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.assetCaption))); _ck(_v, 41, 0, currVal_18); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPending; _ck(_v, 45, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_27 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.creator))); _ck(_v, 53, 0, currVal_27); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_36 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 64, 0, currVal_36); var currVal_37 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.or)); _ck(_v, 67, 0, currVal_37); var currVal_38 = (!_co.uploadForm.valid || !_co.fileObj); _ck(_v, 68, 0, currVal_38); var currVal_41 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.uploadAndUse)); _ck(_v, 71, 0, currVal_41); var currVal_42 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 73, 0, currVal_42); }); }
function View_BrowseImagePopupComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BrowseImagePopupComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "large"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_BrowseImagePopupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BrowseImagePopupComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showSelectImageModal; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.showUploadUserModal; _ck(_v, 3, 0, currVal_1); }, null); }
function View_BrowseImagePopupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "browse-image-popup", [], null, null, null, View_BrowseImagePopupComponent_0, RenderType_BrowseImagePopupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _browse_image_popup_component__WEBPACK_IMPORTED_MODULE_8__["BrowseImagePopupComponent"], [_services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_9__["UploadCertificateService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BrowseImagePopupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("browse-image-popup", _browse_image_popup_component__WEBPACK_IMPORTED_MODULE_8__["BrowseImagePopupComponent"], View_BrowseImagePopupComponent_Host_0, { showSelectImageModal: "showSelectImageModal", logoType: "logoType", enableUploadSignature: "enableUploadSignature", showUploadUserModal: "showUploadUserModal" }, { assetData: "assetData", close: "close" }, []);



/***/ }),

/***/ "e6OA":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/cert-preview-popup/cert-preview-popup.component.ngfactory.js ***!
  \****************************************************************************************************************/
/*! exports provided: RenderType_CertPreviewPopupComponent, View_CertPreviewPopupComponent_0, View_CertPreviewPopupComponent_Host_0, CertPreviewPopupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CertPreviewPopupComponent", function() { return RenderType_CertPreviewPopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertPreviewPopupComponent_0", function() { return View_CertPreviewPopupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertPreviewPopupComponent_Host_0", function() { return View_CertPreviewPopupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertPreviewPopupComponentNgFactory", function() { return CertPreviewPopupComponentNgFactory; });
/* harmony import */ var _cert_preview_popup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cert-preview-popup.component.scss.shim.ngstyle */ "hN3z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cert-preview-popup.component */ "pvbH");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");









var styles_CertPreviewPopupComponent = [_cert_preview_popup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CertPreviewPopupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CertPreviewPopupComponent, data: {} });

function View_CertPreviewPopupComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cert-preview-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal("select") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certPreview)))); _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.certTemplateURL(((_co.template == null) ? null : _co.template.artifactUrl)); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.selectTemplate)))); _ck(_v, 10, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.close))); _ck(_v, 12, 0, currVal_3); }); }
function View_CertPreviewPopupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, [[1, 4], ["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CertPreviewPopupComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, true, "normal"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CertPreviewPopupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cert-preview-popup", [], null, [["window", "popstate"]], function (_v, en, $event) { var ad = true; if (("window:popstate" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onPopState($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_CertPreviewPopupComponent_0, RenderType_CertPreviewPopupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_6__["CertPreviewPopupComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CertPreviewPopupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cert-preview-popup", _cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_6__["CertPreviewPopupComponent"], View_CertPreviewPopupComponent_Host_0, { template: "template" }, { close: "close" }, []);



/***/ }),

/***/ "fIOR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-details/certificate-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CertificateDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDetailsComponent", function() { return CertificateDetailsComponent; });
/* harmony import */ var _sunbird_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/public */ "8EeZ");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);







var CertificateDetailsComponent = (function () {
    function CertificateDetailsComponent(activatedRoute, certificateService, resourceService, configService, userService, playerService, router, tenantService, CsCertificateService, toasterService) {
        this.activatedRoute = activatedRoute;
        this.certificateService = certificateService;
        this.resourceService = resourceService;
        this.configService = configService;
        this.userService = userService;
        this.playerService = playerService;
        this.router = router;
        this.tenantService = tenantService;
        this.CsCertificateService = CsCertificateService;
        this.toasterService = toasterService;
        this.error = false;
        this.enableVerifyButton = false;
        this.wrongCertificateCode = false;
        this.telemetryCdata = [];
        this.showVideoThumbnail = true;
        this.validateRCCertificate = false;
        this.isInvalidCertificate = false;
    }
    CertificateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_5__["upperCase"](this.resourceService.instance);
        this.pageId = this.activatedRoute.snapshot.data.telemetry.pageid;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.data')) {
            this.validateRCCertificate = true;
            this.validateCertificate();
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.t')) {
            this.validateRCCertificate = true;
            this.validateTCertificate();
        }
        this.setTelemetryData();
        this.tenantDataSubscription = this.tenantService.tenantData$.subscribe(function (data) {
            if (data && !data.err && data.tenantData) {
                _this.logo = data.tenantData.logo;
                _this.tenantName = data.tenantData.titleName;
            }
        });
    };
    CertificateDetailsComponent.prototype.certificateVerify = function () {
        var _this = this;
        this.loader = true;
        var request = {
            request: {
                'certId': this.activatedRoute.snapshot.params.uuid,
                'accessCode': lodash_es__WEBPACK_IMPORTED_MODULE_5__["trim"](this.certificateCode),
                'verifySignature': true,
            }
        };
        this.certificateService.validateCertificate(request).subscribe(function (data) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.response.related.certVideoUrl')) {
                _this.watchVideoLink = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.response.related.certVideoUrl');
                _this.processVideoUrl(_this.watchVideoLink);
            }
            else {
                _this.getCourseVideoUrl(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.response.related.courseId'));
            }
            var certData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.response.json');
            _this.loader = false;
            _this.viewCertificate = true;
            _this.recipient = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'recipient.name');
            _this.courseName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'badge.name');
            _this.issuedOn = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'issuedOn'))).format('DD MMM YYYY');
        }, function (err) {
            _this.wrongCertificateCode = true;
            _this.loader = false;
            _this.codeInputField.nativeElement.value = '';
            _this.codeInputField.nativeElement.focus();
            _this.enableVerifyButton = false;
        });
    };
    CertificateDetailsComponent.prototype.getCodeLength = function (event) {
        this.wrongCertificateCode = false;
        if (event.target.value.length === 6) {
            this.enableVerifyButton = true;
        }
        else {
            this.enableVerifyButton = false;
        }
    };
    CertificateDetailsComponent.prototype.navigateToCoursesPage = function () {
        if (this.activatedRoute.snapshot.queryParams.clientId === 'android') {
            window.location.href = '/explore-course';
        }
        else {
            this.router.navigate(['/explore-course']);
        }
    };
    CertificateDetailsComponent.prototype.setTelemetryData = function () {
        var context = { env: this.activatedRoute.snapshot.data.telemetry.env };
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.clientId') === 'android' &&
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.context')) {
            var telemetryData = JSON.parse(decodeURIComponent(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.context')));
            context['env'] = telemetryData.env;
        }
        this.telemetryImpressionData = {
            context: context,
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.pageId,
                uri: this.router.url
            }
        };
        this.telemetryCdata = [
            {
                id: 'course:qrcode:scan:cert',
                type: 'Feature'
            },
            {
                id: 'SB-13854',
                type: 'Task'
            }
        ];
    };
    CertificateDetailsComponent.prototype.getCourseVideoUrl = function (courseId) {
        var _this = this;
        this.playerService.getCollectionHierarchy(courseId).subscribe(function (response) {
            _this.watchVideoLink = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](response, 'result.content.certVideoUrl');
            _this.processVideoUrl(_this.watchVideoLink);
        }, function (error) {
        });
    };
    CertificateDetailsComponent.prototype.processVideoUrl = function (url) {
        var _this = this;
        if (url) {
            var splitedData = url.split('/');
            splitedData.forEach(function (value) {
                if (value.includes('do_')) {
                    _this.contentId = value;
                }
            });
        }
    };
    CertificateDetailsComponent.prototype.playContent = function (contentId) {
        var _this = this;
        this.showVideoThumbnail = false;
        var option = { params: this.configService.appConfig.ContentPlayer.contentApiQueryParams };
        this.playerService.getContent(contentId, option).subscribe(function (response) {
            var contentDetails = {
                contentId: contentId,
                contentData: response.result.content
            };
            _this.playerConfig = _this.playerService.getConfig(contentDetails);
        }, function (err) {
        });
    };
    CertificateDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.tenantDataSubscription) {
            this.tenantDataSubscription.unsubscribe();
        }
    };
    CertificateDetailsComponent.prototype.validateCertificate = function () {
        var _this = this;
        this.loader = true;
        var url = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.queryParams.data').toString();
        url = url.replace(/ /g, "+");
        this.CsCertificateService
            .getEncodedData(url)
            .then(function (resp) {
            var requestBody = {
                certificateData: resp,
                schemaName: 'certificate',
                certificateId: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.activatedRoute, 'snapshot.params.uuid'),
            };
            _this.CsCertificateService.verifyCertificate(requestBody, {
                apiPath: '/learner/certreg/v2',
                apiPathLegacy: '/certreg/v1',
                rcApiPath: '/learner/rc/${schemaName}/v1',
            }).subscribe(function (data) {
                var certData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'certificateData');
                _this.loader = false;
                if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'verified')) {
                    _this.viewCertificate = true;
                    _this.recipient = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'issuedTo');
                    _this.courseName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'trainingName');
                    _this.issuedOn = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'issuanceDate'))).format('DD MMM YYYY');
                }
                else {
                    _this.viewCertificate = false;
                    _this.isInvalidCertificate = true;
                }
            }, function (err) {
                _this.loader = false;
                _this.viewCertificate = false;
                _this.isInvalidCertificate = true;
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            });
        }).catch(function (error) {
            _this.viewCertificate = false;
            _this.isInvalidCertificate = true;
        });
    };
    CertificateDetailsComponent.prototype.validateTCertificate = function () {
        var _this = this;
        var requestBody = {
            schemaName: 'certificate',
            certificateId: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.activatedRoute, 'snapshot.params.uuid'),
        };
        this.CsCertificateService.verifyCertificate(requestBody, {
            apiPath: '/learner/certreg/v2',
            apiPathLegacy: '/certreg/v1',
            rcApiPath: '/learner/rc/${schemaName}/v1',
        }).subscribe(function (data) {
            var certData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'certificateData');
            _this.loader = false;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'verified')) {
                _this.viewCertificate = true;
                _this.recipient = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'issuedTo');
                _this.courseName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'trainingName');
                _this.issuedOn = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](certData, 'issuanceDate'))).format('DD MMM YYYY');
            }
            else {
                _this.viewCertificate = false;
                _this.isInvalidCertificate = true;
            }
        }, function (err) {
            _this.loader = false;
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            _this.viewCertificate = false;
            _this.isInvalidCertificate = true;
        });
    };
    return CertificateDetailsComponent;
}());



/***/ }),

/***/ "hN3z":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/cert-preview-popup/cert-preview-popup.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLWZlYXR1cmUvY29tcG9uZW50cy9jZXJ0LXByZXZpZXctcG9wdXAvY2VydC1wcmV2aWV3LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "hpz1":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/create-template/create-template.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComponent", function() { return CreateTemplateComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../models/cert-config-model/cert-config-model */ "LOdU");
/* harmony import */ var _browse_image_popup_browse_image_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../browse-image-popup/browse-image-popup.component */ "TbDo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
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











var CreateTemplateComponent = (function () {
    function CreateTemplateComponent(uploadCertificateService, userService, sanitizer, activatedRoute, certRegService, toasterService, resourceService, navigationHelperService, layoutService) {
        this.uploadCertificateService = uploadCertificateService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.certRegService = certRegService;
        this.toasterService = toasterService;
        this.resourceService = resourceService;
        this.navigationHelperService = navigationHelperService;
        this.layoutService = layoutService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.selectStateOption = [];
        this.selectLanguageOption = [];
        this.certLogos = [];
        this.certSigns = [];
        this.defaultCertificates = [];
        this.selectedCertificate = {};
        this.center = 275;
        this.disableCreateTemplate = true;
        this.certConfigModalInstance = new _models_cert_config_model_cert_config_model__WEBPACK_IMPORTED_MODULE_7__["CertConfigModel"]();
        this.images = {
            'LOGO1': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'LOGO2': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'SIGN1': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' },
            'SIGN2': { 'index': null, 'name': '', 'key': '', 'type': '', 'url': '' }
        };
        this.classNames = {
            'STATE_LOGOS': 'state-logo',
            'STATE_TITLE': 'state-title',
            'SIGN_LOGO': ['signatureImg1', 'signatureImg2'],
            'CERT_TITLE': 'cert-title',
            'DESIGNATIONS_NAMES': ['signatureTitle1', 'signatureTitle2'],
            'DESIGNATIONS': ['signatureTitle1a', 'signatureTitle2a']
        };
        this.optionSing = 'SIGN2';
    }
    CreateTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.mode = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.queryParams, 'type');
        });
        this.navigationHelperService.setNavigationUrl();
        this.initializeFormFields();
        this.getDefaultTemplates();
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.redoLayout();
    };
    CreateTemplateComponent.prototype.getDefaultTemplates = function () {
        var _this = this;
        var request = {
            'request': {
                'filters': {
                    'certType': 'cert template layout',
                    'channel': this.userService.channel,
                    'mediaType': 'image'
                },
                'fields': ['identifier', 'name', 'code', 'certType', 'data', 'issuer', 'signatoryList', 'artifactUrl', 'primaryCategory', 'channel'],
                'limit': 100
            }
        };
        this.uploadCertificateService.getCertificates(request).subscribe(function (res) {
            _this.defaultCertificates = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](res, 'result.content');
            _this.selectedCertificate = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.defaultCertificates[0]);
            _this.getSVGTemplate();
        });
    };
    CreateTemplateComponent.prototype.initializeFormFields = function () {
        var _this = this;
        this.createTemplateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            certificateTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            stateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            authoritySignature_0: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            authoritySignature_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            allowPermission: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.createTemplateForm.valueChanges.subscribe(function (val) {
            _this.validateForm();
        });
    };
    CreateTemplateComponent.prototype.validateForm = function () {
        var logo = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.images, 'LOGO1.url');
        var sign = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.images, 'SIGN1.url');
        if (this.createTemplateForm.status === 'VALID' && lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.createTemplateForm, 'value.allowPermission')
            && logo && sign) {
            this.disableCreateTemplate = false;
        }
        else {
            this.disableCreateTemplate = true;
        }
    };
    CreateTemplateComponent.prototype.getSVGTemplate = function () {
        var _this = this;
        this.uploadCertificateService.getSvg(this.selectedCertificate.artifactUrl).then(function (res) {
            var svgFile = res;
            _this.logoHtml = _this.sanitizeHTML(svgFile);
            _this.previewCertificate();
        });
    };
    CreateTemplateComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    CreateTemplateComponent.prototype.createCertTemplate = function () {
        var _this = this;
        this.validateForm();
        if (this.disableCreateTemplate) {
            this.createTemplateForm.controls.certificateTitle.markAsTouched();
            this.createTemplateForm.controls.stateName.markAsTouched();
            this.createTemplateForm.controls.authoritySignature_0.markAsTouched();
            this.createTemplateForm.controls.authoritySignature_1.markAsTouched();
            this.createTemplateForm.controls.allowPermission.markAsTouched();
        }
        else {
            this.previewCertificate();
            setTimeout(function () {
                var channel = _this.userService.channel;
                var request = _this.certConfigModalInstance.prepareCreateAssetRequest(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.createTemplateForm, 'value'), channel, _this.selectedCertificate, _this.images);
                _this.disableCreateTemplate = true;
                _this.uploadCertificateService.createCertTemplate(request).subscribe(function (response) {
                    var assetId = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'result.identifier');
                    _this.uploadTemplate(_this.finalSVGurl, assetId);
                }, function (error) {
                    _this.toasterService.error('Something went wrong, please try again later');
                });
            }, 1000);
        }
    };
    CreateTemplateComponent.prototype.uploadTemplate = function (base64Url, identifier) {
        var _this = this;
        this.uploadCertificateService.storeAsset(base64Url, identifier).subscribe(function (response) {
            _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_this.resourceService, 'frmelmnts.cert.lbl.certAddSuccess'));
            var templateIdentifier = { 'identifier': lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'result.identifier') };
            _this.uploadCertificateService.certificate.next(templateIdentifier);
            _this.navigationHelperService.navigateToLastUrl();
        }, function (error) {
            _this.toasterService.error('Something went wrong, please try again later');
            console.log('error', error);
        });
    };
    CreateTemplateComponent.prototype.assetData = function (data) {
        if (data.key === this.optionSing) {
            this.createTemplateForm.get('authoritySignature_1').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.createTemplateForm.get('authoritySignature_1').updateValueAndValidity();
        }
        this.images[data.key] = data;
        this.validateForm();
    };
    CreateTemplateComponent.prototype.close = function () {
        this.showSelectImageModal = false;
        this.showUploadUserModal = false;
    };
    CreateTemplateComponent.prototype.removeImage = function (key) {
        if (key === 'SIGN2') {
            this.createTemplateForm.get('authoritySignature_1').clearValidators();
            this.createTemplateForm.get('authoritySignature_1').updateValueAndValidity();
        }
        this.images[key] = {};
        this.validateForm();
    };
    CreateTemplateComponent.prototype.openSateLogos = function (type) {
        this.logoType = type;
        this.showSelectImageModal = true;
        this.browseImage.getAssetList();
    };
    CreateTemplateComponent.prototype.openSignLogos = function (type) {
        this.logoType = type;
        this.showSelectImageModal = false;
        this.showUploadUserModal = true;
    };
    CreateTemplateComponent.prototype.chooseCertificate = function (certificate) {
        this.logoHtml = null;
        this.selectedCertificate = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](certificate);
        this.getSVGTemplate();
    };
    CreateTemplateComponent.prototype.convertHtml = function (tag) {
        if (tag) {
            var html = tag.toString();
            return new DOMParser().parseFromString(html, 'text/html');
        }
    };
    CreateTemplateComponent.prototype.previewCertificate = function () {
        var _this = this;
        this.svgData = this.convertHtml(this.logoHtml);
        var stateLogos = this.svgData.getElementsByClassName(this.classNames.STATE_LOGOS);
        var digitalSigns = this.classNames.SIGN_LOGO.map(function (id) { return _this.svgData.getElementById(id); });
        this.updateTitles();
        this.updateStateLogos(stateLogos);
        this.updateSigns(digitalSigns);
    };
    CreateTemplateComponent.prototype.updateTitles = function () {
        var _this = this;
        var certTitle = this.svgData.getElementsByClassName(this.classNames.CERT_TITLE);
        certTitle[0].innerHTML = this.createTemplateForm.controls.certificateTitle.value;
        var stateTitle = this.svgData.getElementsByClassName(this.classNames.STATE_TITLE);
        stateTitle[0].innerHTML = this.createTemplateForm.controls.stateName.value;
        this.classNames.DESIGNATIONS_NAMES.forEach(function (id, index) {
            var designation_html = _this.svgData.getElementById(id);
            if (designation_html) {
                var title = _this.createTemplateForm.get("authoritySignature_" + index).value;
                designation_html.innerHTML = title;
            }
        });
    };
    CreateTemplateComponent.prototype.updateStateLogos = function (stateLogos) {
        var _this = this;
        var logosArray = Object.values(this.images).filter(function (x) { return !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](x) && x['type'] === 'LOGO'; });
        this.editSVG(logosArray, stateLogos).then(function (res) {
            var _a;
            _this.certificateCreation((_a = _this.svgData) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('svg')[0]);
        });
    };
    CreateTemplateComponent.prototype.updateSigns = function (stateLogos) {
        var _this = this;
        var logosArray = Object.values(this.images).filter(function (x) { return !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](x) && x['type'] === 'SIGN'; });
        this.editSVG(logosArray, stateLogos).then(function (res) {
            var _a;
            _this.certificateCreation((_a = _this.svgData) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('svg')[0]);
        });
    };
    CreateTemplateComponent.prototype.editSVG = function (logosArray, stateLogos) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var i, logo, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < logosArray.length)) return [3, 4];
                        logo = logosArray[i];
                        if (!logo) return [3, 3];
                        return [4, this.toDataURL(logo)];
                    case 2:
                        res = _a.sent();
                        if (res && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](stateLogos) && stateLogos[i]) {
                            stateLogos[i].setAttribute('xlink:href', res['url']);
                        }
                        if (i === (logosArray.length - 1)) {
                            resolve();
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }); });
    };
    CreateTemplateComponent.prototype.toDataURL = function (image) {
        return fetch(image.url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve({ url: reader.result, type: image.type }); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); });
    };
    CreateTemplateComponent.prototype.urltoFile = function (url, filename, mimeType) {
        return (fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        }));
    };
    CreateTemplateComponent.prototype.certificateCreation = function (ev) {
        var _this = this;
        var dataURL = this.getBase64Data(ev);
        this.selectedCertificate['artifactUrl'] = this.sanitizer.bypassSecurityTrustResourceUrl(dataURL);
        this.urltoFile(dataURL, "certificate_" + dayjs__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD_HH_mm') + ".svg", 'image/svg+xml')
            .then(function (file) {
            _this.finalSVGurl = file;
        });
    };
    CreateTemplateComponent.prototype.sanitizeHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    CreateTemplateComponent.prototype.getImagePath = function () {
        if (this.selectedCertificate) {
            return this.selectedCertificate.artifactUrl;
        }
    };
    CreateTemplateComponent.prototype.getBase64Data = function (ev) {
        var div = document === null || document === void 0 ? void 0 : document.createElement('div');
        div === null || div === void 0 ? void 0 : div.appendChild(ev === null || ev === void 0 ? void 0 : ev.cloneNode(true));
        var b64 = 'data:image/svg+xml;base64,' + window.btoa(div.innerHTML);
        return b64;
    };
    CreateTemplateComponent.prototype.back = function () {
        this.uploadCertificateService.certificate.next(null);
        this.navigationHelperService.navigateToLastUrl();
    };
    CreateTemplateComponent.prototype.redoLayout = function () {
        if (this.layoutConfiguration != null) {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, this.layoutConfiguration, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].threeToNine);
        }
        else {
            this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
            this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, _sunbird_shared__WEBPACK_IMPORTED_MODULE_5__["COLUMN_TYPE"].fullLayout);
        }
    };
    return CreateTemplateComponent;
}());



/***/ }),

/***/ "pkmB":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/certificate-configuration/certificate-configuration.component.ngfactory.js ***!
  \***************************************************************************************************************************/
/*! exports provided: RenderType_CertificateConfigurationComponent, View_CertificateConfigurationComponent_0, View_CertificateConfigurationComponent_Host_0, CertificateConfigurationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CertificateConfigurationComponent", function() { return RenderType_CertificateConfigurationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertificateConfigurationComponent_0", function() { return View_CertificateConfigurationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CertificateConfigurationComponent_Host_0", function() { return View_CertificateConfigurationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateConfigurationComponentNgFactory", function() { return CertificateConfigurationComponentNgFactory; });
/* harmony import */ var _certificate_configuration_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificate-configuration.component.scss.shim.ngstyle */ "DOJC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/core/index.ngfactory */ "CeGm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/form-field/index.ngfactory */ "H3DK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/select/index.ngfactory */ "Y1Mv");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _shared_feature_components_cert_preview_popup_cert_preview_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared-feature/components/cert-preview-popup/cert-preview-popup.component.ngfactory */ "e6OA");
/* harmony import */ var _shared_feature_components_cert_preview_popup_cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared-feature/components/cert-preview-popup/cert-preview-popup.component */ "pvbH");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _certificate_configuration_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./certificate-configuration.component */ "0laf");
/* harmony import */ var _core_services_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../core/services/certificate/certificate.service */ "dd+U");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../core/services/player/player.service */ "ikcW");
/* harmony import */ var _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../core/services/cert-reg/cert-reg.service */ "6auv");
/* harmony import */ var _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../services/upload-certificate/upload-certificate.service */ "6H+8");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../core/services/form/form.service */ "9dCP");











































var styles_CertificateConfigurationComponent = [_certificate_configuration_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CertificateConfigurationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CertificateConfigurationComponent, data: {} });

function View_CertificateConfigurationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "two wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppLoaderComponent_0"], _shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_CertificateConfigurationComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "select-template-content p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "d-flex flex-dc flex-ai-center text-center mt-32"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "add certificate "], ["src", "../../assets/images/addcertificate.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "p", [["class", "no-template-text pt-16 pb-24 mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary px-24"], ["id", "addNewCert"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.certificateCreation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["alt", " Add certificate "], ["class", "ml-4 plus-icon"], ["src", "assets/images/plus-icon.svg"], ["width", "8px"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.noCertificate)))); _ck(_v, 5, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.addCert)))); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.button)))); _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.addCert)))); _ck(_v, 10, 0, currVal_3); }); }
function View_CertificateConfigurationComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "certificate edit"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.previewUrl, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-flex flex-jc-center flex-dc p-24 fnormal text-center sb-color-error w-100 no-cert"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.noEditAction)))); _ck(_v, 2, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "certificate-edit-content p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "fnormal pb-24 font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "certificate-edit-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "div", [["class", "certificate-edit-sbcard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "div", [["class", "d-flex flex-ai-center flex-dc p-16 certificate-edit-sbcard-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "certificate-frame"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["class", "d-flex flex-ai-center flex-jc-space-between w-100 pt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "d-flex flex-ai-center ml-auto d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-primary sb-btn-normal"], ["tabindex", "0"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editCertificate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.certEditable; _ck(_v, 9, 0, currVal_1); var currVal_2 = !_co.certEditable; _ck(_v, 11, 0, currVal_2); var currVal_4 = "sb-btn sb-btn-primary sb-btn-normal"; var currVal_5 = _ck(_v, 16, 0, !_co.certEditable); _ck(_v, 15, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certificate)))); _ck(_v, 3, 0, currVal_0); var currVal_3 = !_co.certEditable; _ck(_v, 14, 0, currVal_3); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.edit))); _ck(_v, 17, 0, currVal_6); }); }
function View_CertificateConfigurationComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "certificate-container py-16 cc-player__content-header relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 19, "div", [["class", "ui stackable grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "four wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 12, "div", [["class", "certificate-sidebar p-24 certificate-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "select-template-container d-flex flex-dc mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "certificates-label pb-24 font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [["class", "certificate-scrollbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "certificate-sbcard mb-16 py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "d-flex flex-ai-center flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "certificate-card-title sb__ellipsis sb__ellipsis--three px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "div", [["class", "d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "certificate-card-img px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "img", [["alt", "certificate-icon"], ["height", "20px"], ["src", "assets/images/certificate-icon.png"], ["width", "25px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "div", [["class", "border-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "div", [["class", "eight wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.selectedTemplate; _ck(_v, 19, 0, currVal_2); var currVal_3 = _co.selectedTemplate; _ck(_v, 21, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.configure)))); _ck(_v, 7, 0, currVal_0); var currVal_1 = ((_co.courseDetails == null) ? null : _co.courseDetails.name); _ck(_v, 12, 0, currVal_1); }); }
function View_CertificateConfigurationComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "pb-24 font-weight-bold certificates-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.addCert)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "pb-24 font-weight-bold certificates-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.editCert)))); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-dropdown__options mat-option mat-focus-indicator"], ["role", "option"]], [[1, "aria-label", 0], [1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[14, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_9 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_10); }); }
function View_CertificateConfigurationComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "label", [["class", "fnormal font-weight-normal text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.intxt == null) ? null : _co.resourceService.frmelmnts.intxt.ssousers))), "{instance}", _co.instance)); _ck(_v, 1, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "add-score-btn py-8 px-16 fsmall font-weight-bold"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["And"]))], null, null); }
function View_CertificateConfigurationComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d-flex flex-ai-center flex-jc-center plus-btn"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addRule() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["src", "assets/images/plus-icon.svg"]], null, null, null, null, null))], null, null); }
function View_CertificateConfigurationComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "left-border"]], null, null, null, null, null))], null, null); }
function View_CertificateConfigurationComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "progess-add-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "left-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.addScoreRule; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_co.addScoreRule; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.addScoreRule; _ck(_v, 7, 0, currVal_2); }, null); }
function View_CertificateConfigurationComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "sui-select-option", [], [[2, "item", null], [2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ɵcu_0"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ɵcu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[17, 4]], 1, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["ɵcu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { childDropdownMenu: 0 })], function (_ck, _v) { var currVal_2 = (_v.context.$implicit + "%"); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasClasses; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isActive; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CertificateConfigurationComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 28, "div", [["class", "twelve wide column pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 27, "div", [["class", "d-flex rules-configuration px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "d-flex flex-ai-center fnormal font-weight-normal mb-0 py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "mx-24 progress-separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 21, "div", [["class", "py-16 d-flex flex-dc rules-form-content my-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 20, "div", [["class", "ui stackable grid mt-0 sb-field-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "five wide column sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "input", [["class", "sb-form-control fnormal font-weight-bold"], ["placeholder", "Best attempt score"], ["readonly", "true"], ["type", "text"]], [[8, "value", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "three wide fnormal column mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "four wide column sb-field mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "sui-select", [["class", "selection form-control"], ["formControlName", "scoreRange"]], [[2, "ui", null], [2, "dropdown", null], [2, "active", null], [2, "visible", null], [2, "search", null], [2, "loading", null], [1, "tabindex", 0], [2, "disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "focusin"], [null, "focusout"], [null, "keypress"], [null, "keydown"], [null, "selectedOptionChange"], [null, "touched"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onFocusIn() !== false);
        ad = (pd_1 && ad);
    } if (("focusout" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onFocusOut($event) !== false);
        ad = (pd_2 && ad);
    } if (("keypress" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onKeyPress($event) !== false);
        ad = (pd_3 && ad);
    } if (("keydown" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onKeyDown($event) !== false);
        ad = (pd_4 && ad);
    } if (("selectedOptionChange" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onChange($event) !== false);
        ad = (pd_5 && ad);
    } if (("touched" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ɵcv_0"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ɵcv"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 1228800, [[4, 4], ["selectScoreRange", 4]], 2, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["ɵcv"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["SuiLocalizationService"]], { options: [0, "options"], placeholder: [1, "placeholder"] }, { onTouched: "touched", selectedOptionChange: "selectedOptionChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { _renderedOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { _manualSearch: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["ɵcw"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_11__["ɵcw"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CertificateConfigurationComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "p", [["class", "font-weight-normal fsmall mb-0 completion-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "close-score"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeRule() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "img", [["src", "assets/images/close.svg"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_18 = _co.scoreRange; var currVal_19 = "Select"; _ck(_v, 14, 0, currVal_18, currVal_19); var currVal_20 = "scoreRange"; _ck(_v, 19, 0, currVal_20); var currVal_21 = _co.arrayValue["range"]; _ck(_v, 23, 0, currVal_21); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addCertificatescorerule))); _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.bestScoreattempt))), ""); _ck(_v, 9, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addCertificategreaterThan))); _ck(_v, 11, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hasClasses; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hasClasses; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isActive; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isVisible; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hasSearchClass; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isSearching; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabindex; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isDisabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending; _ck(_v, 13, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17]); var currVal_22 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addCertificateText))); _ck(_v, 27, 0, currVal_22); }); }
function View_CertificateConfigurationComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "certificate-edit-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "certificate-edit-sbcard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "d-flex flex-dc p-16 certificate-edit-sbcard-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "certificate-frame"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["alt", "certificate edit"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "d-flex flex-ai-center flex-jc-space-between w-100 pt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "d-flex flex-ai-center ml-auto d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-primary sb-btn-normal"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeSelectedCertificate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (((_co.selectedTemplate == null) ? null : _co.selectedTemplate.artifactUrl) || ((_co.selectedTemplate == null) ? null : _co.selectedTemplate.previewUrl)), ""); _ck(_v, 6, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.remove))); _ck(_v, 10, 0, currVal_1); }); }
function View_CertificateConfigurationComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sb-certificate-actions", [], null, [[null, "buttonClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("buttonClick" === en)) {
        var pd_0 = (_co.handleCertificateEvent($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_CertificateActionsComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_CertificateActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_14__["CertificateActionsComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]], { preview: [0, "preview"], template: [1, "template"], isSelectedTemplate: [2, "isSelectedTemplate"] }, { buttonClick: "buttonClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.config == null) ? null : _co.config.preview); var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.artifactUrl); var currVal_2 = ((((_co.selectedTemplate == null) ? null : _co.selectedTemplate.identifier) === ((_v.context.$implicit == null) ? null : _v.context.$implicit.identifier)) && !_co.showPreviewModal); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CertificateConfigurationComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "certificate-scrollbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.certTemplateList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CertificateConfigurationComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary ml-8 px-24"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.attachCertificateToBatch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "sb-btn sb-btn-normal sb-btn-primary ml-8 px-24"; var currVal_2 = _ck(_v, 2, 0, _co.disableAddCertificate); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disableAddCertificate; _ck(_v, 0, 0, currVal_0); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.addCert)))); _ck(_v, 3, 0, currVal_3); }); }
function View_CertificateConfigurationComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary ml-8 px-24"], ["id", "update-certificate"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateCertificate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "sb-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "sb-btn sb-btn-normal sb-btn-primary ml-8 px-24"; var currVal_2 = _ck(_v, 2, 0, _co.disableAddCertificate); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disableAddCertificate; _ck(_v, 0, 0, currVal_0); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.updateCert)))); _ck(_v, 3, 0, currVal_3); }); }
function View_CertificateConfigurationComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "ui stackable grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "twelve wide column px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "d-flex flex-ai-center flex-jc-flex-end sb-bg-color-white p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelSelection() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.configurationMode === "add"); _ck(_v, 7, 0, currVal_1); var currVal_2 = (_co.configurationMode === "edit"); _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 5, 0, currVal_0); }); }
function View_CertificateConfigurationComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 99, "div", [["class", "certificate-container py-16 cc-player__content-header relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 96, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 95, "div", [["class", "sb-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 78, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-8 sb-g-col-lg-8 sb-g-col-xxxl-12 certificate-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 75, "div", [["class", "certificate-content-area p-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 74, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "five wide column pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 33, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 32, "div", [["class", "seven wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "pt-8 pb-16 font-weight-bold fnormal text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 27, "div", [["class", "d-flex flex-dc w-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 26, "mat-form-field", [["appearance", "fill"], ["class", "sb-mat__dropdown w-100 mb-16 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _suffixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, [[7, 4], [8, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 1, 11, "mat-select", [["aria-autocomplete", "none"], ["aria-haspopup", "true"], ["aria-label", "resourceService?.frmelmnts?.cert?.lbl?.issueTo"], ["class", "selection mat-select"], ["formControlName", "issueTo"], ["role", "combobox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-label", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "mat-select-multiple", null]], [[null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("selectionChange" === en)) {
        var pd_3 = (_co.handleParameterChange($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]], [8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MAT_SELECT_CONFIG"]]], { disabled: [0, "disabled"], ariaLabel: [1, "ariaLabel"] }, { selectionChange: "selectionChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[5, 4], [6, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_CertificateConfigurationComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 0, "hr", [["class", "mt-16 mb-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 13, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 12, "div", [["class", "twelve wide column pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 11, "div", [["class", "d-flex rules-configuration px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "label", [["class", "d-flex flex-ai-center fnormal font-weight-normal mb-0 py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "div", [["class", "mx-24 progress-separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 7, "div", [["class", "py-16 d-flex flex-wrap rules-form-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "div", [["class", "mr-16 sb-field-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "input", [["class", "sb-form-control fnormal font-weight-bold"], ["placeholder", "100%"], ["readonly", "true"], ["type", "text"], ["value", "100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 3, "p", [["class", "font-weight-normal fsmall mb-0 completion-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "span", [["class", "asterik"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](64, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 10, "div", [["class", "ui stackable grid mt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 9, "div", [["class", "twelve wide column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 8, "div", [["class", "sb-checkbox sb-checkbox-secondary pt-24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 5, "input", [["formControlName", "allowPermission"], ["id", "check2"], ["name", "selected"], ["type", "checkbox"], ["value", "true"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "label", [["class", "text-left"], ["for", "check2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](79, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 15, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-4 sb-g-col-lg-4 sb-g-col-xxxl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 14, "div", [["class", "select-template-content sb-bg-color-white p-24 certificate-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 13, "div", [["class", "select-template-container mb-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 5, "div", [["class", "d-flex flex-ai-center text-left flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "label", [["class", "certificates-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "button", [["class", "add-new-template-btn sb-btn sb-btn-normal sb-btn-outline-primary sb-left-icon-btn font-weight-bold"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToCreateTemplate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 0, "i", [["class", "plus alternate outline icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](90, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 4, "div", [["class", "d-flex flex-ai-center text-left flex-jc-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "label", [["class", "font-weight-normal fsmall"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](93, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary my-16"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.refreshData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](95, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.userPreference; _ck(_v, 7, 0, currVal_7); var currVal_8 = (_co.configurationMode === "add"); _ck(_v, 13, 0, currVal_8); var currVal_9 = (_co.configurationMode === "edit"); _ck(_v, 15, 0, currVal_9); var currVal_33 = "fill"; _ck(_v, 22, 0, currVal_33); var currVal_57 = "issueTo"; var currVal_58 = (_co.configurationMode === "edit"); _ck(_v, 38, 0, currVal_57, currVal_58); var currVal_59 = (_co.configurationMode === "edit"); var currVal_60 = "resourceService?.frmelmnts?.cert?.lbl?.issueTo"; _ck(_v, 41, 0, currVal_59, currVal_60); var currVal_61 = _co.issueTo; _ck(_v, 47, 0, currVal_61); var currVal_62 = _co.isStateCertificate; _ck(_v, 49, 0, currVal_62); var currVal_65 = _co.isSingleAssessment; _ck(_v, 66, 0, currVal_65); var currVal_66 = (_co.addScoreRule && _co.isSingleAssessment); _ck(_v, 68, 0, currVal_66); var currVal_74 = "allowPermission"; _ck(_v, 75, 0, currVal_74); var currVal_76 = _co.selectedTemplate; _ck(_v, 81, 0, currVal_76); var currVal_81 = _co.certTemplateList; _ck(_v, 97, 0, currVal_81); var currVal_82 = (_co.currentState === _co.screenStates.certRules); _ck(_v, 99, 0, currVal_82); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certRules)))); _ck(_v, 19, 0, currVal_10); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "standard"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "fill"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "outline"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "legacy"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.errorState; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._canLabelFloat(); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldLabelFloat(); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._hasFloatingLabel(); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._hideControlPlaceholder(); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.disabled; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.autofilled; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.focused; var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color == "accent"); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color == "warn"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("untouched"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("touched"); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("pristine"); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("dirty"); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("valid"); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("invalid"); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("pending"); var currVal_32 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationsEnabled; _ck(_v, 21, 1, [currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]); var currVal_34 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.issueTo)))); _ck(_v, 35, 0, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).tabIndex; var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).panelOpen ? (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id + "-panel") : null); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).panelOpen; var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ariaLabel || null); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required.toString(); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled.toString(); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState; var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._ariaDescribedby || null); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._getAriaActiveDescendant(); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).empty; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).multiple; _ck(_v, 36, 1, [currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56]); var currVal_63 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addCertificateprogressrule))); _ck(_v, 55, 0, currVal_63); var currVal_64 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addCertificateText))); _ck(_v, 64, 0, currVal_64); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassUntouched; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassTouched; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPristine; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassDirty; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassValid; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassInvalid; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPending; _ck(_v, 72, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73); var currVal_75 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.verified)))); _ck(_v, 79, 0, currVal_75); var currVal_77 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.templates)))); _ck(_v, 87, 0, currVal_77); var currVal_78 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.createtemp)))); _ck(_v, 90, 0, currVal_78); var currVal_79 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.certNote)))); _ck(_v, 93, 0, currVal_79); var currVal_80 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.btn == null) ? null : _co.resourceService.frmelmnts.cert.btn.refresh)))); _ck(_v, 95, 0, currVal_80); }); }
function View_CertificateConfigurationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "sb-bg-color-white relative position back-btn-container cc-player__btn-back relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "py-8 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn mr-auto"], ["id", "goBack"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "div", [["class", "textbook-container cc-player__content-header relative9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 12, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "textbook py-16 sb-g cc-player"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-9 sb-g-col-lg-9 sb-g-col-xxxl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "div", [["class", "textbook__details d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "textbook__bookimg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["alt", "textbook"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "div", [["class", "ml-8 textbook__heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "textbook__title sb-color-primary font-weight-bold mb-0"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "fs-1 pt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["class", "sb-g-col-xs-12 sb-g-col-md-3 sb-g-col-lg-3 sb-g-col-xxxl-4 certified-course"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "div", [["class", "ml-auto text-right mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.currentState === _co.screenStates.default); _ck(_v, 25, 0, currVal_4); var currVal_5 = (_co.currentState === _co.screenStates.certRules); _ck(_v, 27, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 8, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.courseDetails == null) ? null : _co.courseDetails.appIcon), ""); _ck(_v, 16, 0, currVal_1); var currVal_2 = ((_co.courseDetails == null) ? null : _co.courseDetails.name); _ck(_v, 19, 0, currVal_2); var currVal_3 = ((_co.courseDetails == null) ? null : _co.courseDetails.contentType); _ck(_v, 21, 0, currVal_3); }); }
function View_CertificateConfigurationComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cert-preview-popup", [], null, [[null, "close"], ["window", "popstate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:popstate" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onPopState($event) !== false);
        ad = (pd_0 && ad);
    } if (("close" === en)) {
        var pd_1 = (_co.closeModal($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_feature_components_cert_preview_popup_cert_preview_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_CertPreviewPopupComponent_0"], _shared_feature_components_cert_preview_popup_cert_preview_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_CertPreviewPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_feature_components_cert_preview_popup_cert_preview_popup_component__WEBPACK_IMPORTED_MODULE_26__["CertPreviewPopupComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]], { template: [0, "template"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.previewTemplate; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CertificateConfigurationComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "div", [["class", "ui stackable grid mt-16 mb-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "two wide column p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "checkbox-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "nine wide column p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [["class", "fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.attachCertificateToBatch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeTemplateDetectModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.changeDetected)))); _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.templateChange)))); _ck(_v, 11, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.continue))); _ck(_v, 14, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel))); _ck(_v, 16, 0, currVal_3); }); }
function View_CertificateConfigurationComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeTemplateDetectModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[3, 4], ["templateChangeModal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_28__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CertificateConfigurationComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[20, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_28__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "normal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CertificateConfigurationComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "ui modal transition active visible small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "ui center aligned segment text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], function (_ck, _v) { var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.lbl == null) ? null : _co.resourceService.frmelmnts.cert.lbl.alertHeader)))); _ck(_v, 8, 0, currVal_4); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.cert == null) ? null : ((_co.resourceService.frmelmnts.cert.imsg == null) ? null : _co.resourceService.frmelmnts.cert.imsg.alertMessageForCert)))); _ck(_v, 12, 0, currVal_5); }); }
function View_CertificateConfigurationComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showAlertModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_28__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CertificateConfigurationComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[21, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_28__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "small"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CertificateConfigurationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_31__["InterpolatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { selectCertType: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { selectRecipient: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, { templateChangeModal: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 4, { selectScoreRange: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CertificateConfigurationComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showLoader; _ck(_v, 6, 0, currVal_0); var currVal_1 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 8, 0, currVal_1); var currVal_2 = !_co.showLoader; _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.showPreviewModal; _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.isTemplateChanged; _ck(_v, 14, 0, currVal_4); var currVal_5 = _co.showAlertModal; _ck(_v, 16, 0, currVal_5); }, null); }
function View_CertificateConfigurationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-certificate-configuration", [], null, [["window", "popstate"]], function (_v, en, $event) { var ad = true; if (("window:popstate" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onPopState($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_CertificateConfigurationComponent_0, RenderType_CertificateConfigurationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _certificate_configuration_component__WEBPACK_IMPORTED_MODULE_32__["CertificateConfigurationComponent"], [_core_services_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_33__["CertificateService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"], _core_services_player_player_service__WEBPACK_IMPORTED_MODULE_35__["PlayerService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_36__["CertRegService"], _services_upload_certificate_upload_certificate_service__WEBPACK_IMPORTED_MODULE_37__["UploadCertificateService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_38__["NavigationHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["ActivatedRoute"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_40__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["Router"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_41__["TelemetryService"], _shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _core_services_form_form_service__WEBPACK_IMPORTED_MODULE_42__["FormService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CertificateConfigurationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-certificate-configuration", _certificate_configuration_component__WEBPACK_IMPORTED_MODULE_32__["CertificateConfigurationComponent"], View_CertificateConfigurationComponent_Host_0, {}, {}, []);



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

/***/ "s74J":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/certificate/components/create-template/create-template.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.certificate-content[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--white);\n}\n.cert-img-sb-card[_ngcontent-%COMP%] {\n  width: 6.375rem;\n  margin-bottom: 16px;\n  background-color: var(--white);\n  border: 0.0625rem solid var(--rc-dedede);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  margin-top: 0.1875rem;\n  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out, opacity 0.2s ease-out;\n  transition-delay: 0.1s;\n}\n.cert-img-sb-card.active[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary-300);\n  transform: scale(1.03, 1.03);\n}\n.cert-img-sb-card.active[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.25rem;\n  top: 0;\n  display: block;\n}\n.cert-img-sb-card[_ngcontent-%COMP%]:hover {\n  border: 2px solid var(--primary-300);\n  transform: scale(1.03, 1.03);\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%] {\n  height: 5.375rem;\n  padding: 0.5rem;\n  overflow: hidden;\n  position: relative;\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%]   .selected-mark[_ngcontent-%COMP%] {\n  display: none;\n}\n.cert-img-sb-card__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.select-template-content[_ngcontent-%COMP%] {\n  background: var(--white);\n  height: 100%;\n}\n.cert-select-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n.cert-select-card__content[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--white);\n}\n.cert-select-card__content__description[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 418px;\n  text-align: center;\n  border-style: dashed;\n  border-color: var(--gray-100);\n}\n.cert-select-card__content__description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--gray-100);\n}\n.cert-select-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cert-select-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0.0625rem solid;\n  margin-bottom: 1rem;\n}\n.cert-view-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cert-view-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0.0625rem solid;\n}\n.asterik[_ngcontent-%COMP%] {\n  color: var(--red-400);\n}\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.state-labels[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n}\n.list-border[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--gray-200);\n}\n.sb-browse-btn[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: 0.1875rem;\n  cursor: pointer;\n  border-radius: 24px;\n  border: 2px solid var(--primary-300);\n  color: var(--primary-300);\n  font-weight: bold;\n  background: var(--primary-100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jZXJ0aWZpY2F0ZS9jb21wb25lbnRzL2NyZWF0ZS10ZW1wbGF0ZS9jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUN6QkY7QURxR0EsVUFBQTtBQ3BUQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQW1OSjtBQWhOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvRkFBQTtFQUNBLHNCQUFBO0FBbU5KO0FBbE5JO0VBQ0Usb0NBQUE7RUFDQSw0QkFBQTtBQW9OTjtBQW5OTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0FBcU5SO0FBbE5NO0VBQ0Usb0NBQUE7RUFDQSw0QkFBQTtBQW9OUjtBQWxOQztFQUNHLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvTko7QUFuTkk7RUFDRSxhQUFBO0FBcU5OO0FBbk5DO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFxTkQ7QUFoTkE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUFtTkY7QUFoTkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBbU5KO0FBbE5JO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBb05OO0FBbk5LO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBcU5OO0FBcE5NO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQXNOUjtBQWhOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbU5GO0FBak5FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbU5KO0FBL01BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFrTkY7QUFoTkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBa05KO0FBOU1BO0VBQ0UscUJBQUE7QUFpTkY7QUE5TUE7RUFDQSxrQkFBQTtBQWlOQTtBQTlNQTtFQUNFLHNCQUFBO0FBaU5GO0FBOU1BO0VBQ0UsOENBQUE7QUFpTkY7QUE5TUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQWlORiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2VydGlmaWNhdGUvY29tcG9uZW50cy9jcmVhdGUtdGVtcGxhdGUvY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIkBpbXBvcnQgXCJtaXhpbnMvbWl4aW5zXCI7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY2VydGlmaWNhdGUtY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB9XG5cbi5jZXJ0LWltZy1zYi1jYXJkIHtcbiAgICB3aWR0aDogNi4zNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiAuMDYyNXJlbSBzb2xpZCB2YXIoLS1yYy1kZWRlZGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogLjE4NzVyZW07XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZS1vdXQsdHJhbnNmb3JtIC4zcyBlYXNlLW91dCxvcGFjaXR5IC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XG4gICAgJi5hY3RpdmUge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS0zMDApO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcbiAgICAgIC5zZWxlY3RlZC1tYXJre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OmNhbGN1bGF0ZVJlbSg0cHgpO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS0zMDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xuICAgIH1cblx0Jl9fY29udGVudCB7XG4gICAgaGVpZ2h0OiA1LjM3NXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnNlbGVjdGVkLW1hcmt7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblx0aW1ne1xuXHR3aWR0aDoxMDAlO1xuXHRoZWlnaHQ6MTAwJTtcbiAgfVxuIH1cbn1cblxuLnNlbGVjdC10ZW1wbGF0ZS1jb250ZW50e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGhlaWdodDoxMDAlO1xufVxuXG4uY2VydC1zZWxlY3QtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICZfX2NvbnRlbnR7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICZfX2Rlc2NyaXB0aW9ue1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiA0MThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgICB9XG4gICAgIH1cbiAgICB9XG4gfVxuXG4uY2VydC1zZWxlY3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogY2FsY3VsYXRlUmVtKDFweCkgc29saWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICB9XG59XG5cbi5jZXJ0LXZpZXctaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogY2FsY3VsYXRlUmVtKDFweCkgc29saWQ7XG4gIH1cbn1cblxuLmFzdGVyaWt7XG4gIGNvbG9yOiB2YXIoLS1yZWQtNDAwKTtcbn0gXG5cbi5wcmV2aWV3LXRpdGxle1xuZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMjBweCk7XG59XG5cbi5zdGF0ZS1sYWJlbHMge1xuICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xufVxuXG4ubGlzdC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG59XG5cbi5zYi1icm93c2UtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiBjYWxjdWxhdGVSZW0oM3B4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTMwMCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTMwMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnktMTAwKTtcbn0iXX0= */"];



/***/ }),

/***/ "uKfN":
/*!***************************************************************!*\
  !*** ./node_modules/ng-svg-editor/ng-svg-editor.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: SvgEditorModuleNgFactory, RenderType_SvgEditorComponent, View_SvgEditorComponent_0, View_SvgEditorComponent_Host_0, SvgEditorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorModuleNgFactory", function() { return SvgEditorModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SvgEditorComponent", function() { return RenderType_SvgEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgEditorComponent_0", function() { return View_SvgEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgEditorComponent_Host_0", function() { return View_SvgEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgEditorComponentNgFactory", function() { return SvgEditorComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-svg-editor */ "FhpT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




var SvgEditorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__["SvgEditorModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__["SvgEditorModule"], ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__["SvgEditorModule"], [])]); });

var styles_SvgEditorComponent = [];
var RenderType_SvgEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SvgEditorComponent, data: {} });

function View_SvgEditorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["id", "templateSvg"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.svgContent; _ck(_v, 0, 0, currVal_0); }); }
function View_SvgEditorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SvgEditorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.svgContent; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SvgEditorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "svg-editor", [], null, null, null, View_SvgEditorComponent_0, RenderType_SvgEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__["SvgEditorComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SvgEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("svg-editor", ng_svg_editor__WEBPACK_IMPORTED_MODULE_1__["SvgEditorComponent"], View_SvgEditorComponent_Host_0, { icon: "icon", svgContent: "svgContent", edit: "edit", save: "save", refreshEditor: "refreshEditor", togglePreview: "togglePreview", restrict: "restrict" }, { elementClicked: "elementClicked" }, []);



/***/ }),

/***/ "vDza":
/*!***********************************************************!*\
  !*** ./src/app/modules/certificate/certificate.module.ts ***!
  \***********************************************************/
/*! exports provided: csCertificateServiceFactory, CertificateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csCertificateServiceFactory", function() { return csCertificateServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateModule", function() { return CertificateModule; });
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-sunbird/client-services */ "6QGN");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");


var csCertificateServiceFactory = function (csLibInitializerService) {
    if (!_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.isInitialised) {
        csLibInitializerService.initializeCs();
    }
    return _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.certificateService;
};
var CertificateModule = (function () {
    function CertificateModule() {
    }
    return CertificateModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-certificate-certificate-module-ngfactory.js.map