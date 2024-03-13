(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-profile-profile-module-ngfactory"],{

/***/ "/927":
/*!*************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-badge/profile-badge.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBadgeComponent", function() { return ProfileBadgeComponent; });
/* harmony import */ var _modules_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../modules/shared */ "btWG");
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../modules/core/services */ "bQbs");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "T89o");



var ProfileBadgeComponent = (function () {
    function ProfileBadgeComponent(resourceService, userService, badgeService, configService) {
        this.resourceService = resourceService;
        this.userService = userService;
        this.badgeService = badgeService;
        this.configService = configService;
        this.viewMore = true;
        this.defaultLimit = this.configService.appConfig.PROFILE.defaultShowMoreLimit;
        this.limit = this.defaultLimit;
        this.badgeArray = [];
    }
    ProfileBadgeComponent.prototype.ngOnInit = function () {
        this.getBadgeData();
    };
    ProfileBadgeComponent.prototype.getBadgeData = function () {
        var _this = this;
        this.userService.userData$.subscribe(function (user) {
            if (user && !user.err && user.userProfile.badgeAssertions) {
                _this.userProfile = user.userProfile;
                var badgeList_1 = [];
                lodash_es__WEBPACK_IMPORTED_MODULE_2__["each"](_this.userProfile.badgeAssertions, function (badge) {
                    badgeList_1.push(badge['badgeId']);
                });
                var req = {
                    request: {
                        filters: {
                            'badgeList': badgeList_1,
                            'type': 'user',
                            'rootOrgId': _this.userProfile.rootOrgId
                        }
                    }
                };
                _this.badgeArray = [];
                _this.badgeService.getDetailedBadgeAssertions(req, _this.userProfile.badgeAssertions).subscribe(function (detailedAssertion) {
                    if (detailedAssertion) {
                        _this.badgeArray.push(detailedAssertion);
                    }
                });
            }
        });
    };
    ProfileBadgeComponent.prototype.toggle = function (viewMore) {
        if (viewMore === true) {
            this.limit = this.badgeArray.length;
            this.viewMore = false;
        }
        else {
            this.viewMore = true;
            this.limit = this.defaultLimit;
        }
    };
    return ProfileBadgeComponent;
}());



/***/ }),

/***/ "/t99":
/*!***********************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-badge/profile-badge.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_ProfileBadgeComponent, View_ProfileBadgeComponent_0, View_ProfileBadgeComponent_Host_0, ProfileBadgeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProfileBadgeComponent", function() { return RenderType_ProfileBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileBadgeComponent_0", function() { return View_ProfileBadgeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileBadgeComponent_Host_0", function() { return View_ProfileBadgeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBadgeComponentNgFactory", function() { return ProfileBadgeComponentNgFactory; });
/* harmony import */ var _profile_badge_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-badge.component.scss.shim.ngstyle */ "UhvR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _profile_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-badge.component */ "/927");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_core_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/core/services/badges/badges.service */ "zM1L");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");








var styles_ProfileBadgeComponent = [_profile_badge_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProfileBadgeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProfileBadgeComponent, data: {} });

function View_ProfileBadgeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "px-60 py-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "my badges"], ["class", "ui small custom badge image"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.image || _v.context.$implicit.badgeClassImage), ""); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfileBadgeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ui semi-circular dodger-blue button mt-30"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "chevron down icon ml-5 mr-0"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.viewmore))); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfileBadgeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ui semi-circular dodger-blue button mt-30"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "chevron up icon ml-5 mr-0"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.viewless))); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfileBadgeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileBadgeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileBadgeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.viewMore; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.viewMore; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProfileBadgeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "section", [["class", "d-flex flex-ai-center flex-jc-center flex-dc pt-30 pb-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "fs-1-7 font-weight-bold mb-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " (", ")\u200E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "d-flex flex-ai-center flex-jc-center flex-dr flex-w-wrap badges-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ProfileBadgeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileBadgeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform(_co.badgeArray, 0, _co.limit)); _ck(_v, 5, 0, currVal_2); var currVal_3 = (_co.badgeArray.length > _co.defaultLimit); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.myBadges))); var currVal_1 = _co.badgeArray.length; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ProfileBadgeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileBadgeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.badgeArray && (_co.badgeArray.length > 0)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProfileBadgeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile-badge", [], null, null, null, View_ProfileBadgeComponent_0, RenderType_ProfileBadgeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profile_badge_component__WEBPACK_IMPORTED_MODULE_3__["ProfileBadgeComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _modules_core_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_6__["BadgesService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProfileBadgeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profile-badge", _profile_badge_component__WEBPACK_IMPORTED_MODULE_3__["ProfileBadgeComponent"], View_ProfileBadgeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "0ecf":
/*!***********************************************************!*\
  !*** ./src/app/plugins/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "60VW");


var telemetryEnv = 'profile';
var objectType = 'profile';
var ɵ0 = {
    menuBar: {
        visible: false
    },
    pageTitle: 'profile',
    telemetry: {
        env: telemetryEnv, type: 'view', mode: 'create', subtype: 'paginate', object: { type: objectType, ver: '1.0' }
    }, breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Profile', url: '' }]
}, ɵ1 = {
    menuBar: {
        visible: false
    },
    pageTitle: 'create-managed-user',
    telemetry: {
        env: telemetryEnv, type: 'view'
    }
}, ɵ2 = {
    menuBar: {
        visible: false
    },
    telemetry: {
        env: telemetryEnv, pageid: 'choose-managed-user', type: 'view',
        uri: '/profile/choose-managed-user',
    }
}, ɵ3 = {
    menuBar: {
        visible: false
    },
    telemetry: {
        env: telemetryEnv, pageid: 'teacher-declaration', type: 'view',
        uri: '/profile/submit-declaration',
    }
};
var routes = [
    {
        path: '', component: _components__WEBPACK_IMPORTED_MODULE_1__["ProfilePageComponent"],
        data: ɵ0
    },
    {
        path: 'create-managed-user', component: _components__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"],
        data: ɵ1
    },
    {
        path: 'choose-managed-user', component: _components__WEBPACK_IMPORTED_MODULE_1__["ChooseUserComponent"],
        data: ɵ2
    },
    {
        path: 'submit-declaration', component: _components__WEBPACK_IMPORTED_MODULE_1__["SubmitTeacherDetailsComponent"],
        data: ɵ3
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());




/***/ }),

/***/ "1/vJ":
/*!*********************************************************************************!*\
  !*** ./src/app/plugins/profile/components/create-user/create-user.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services */ "2Fx+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








var CreateUserComponent = (function () {
    function CreateUserComponent(resourceService, toasterService, profileService, formBuilder, router, userService, orgDetailsService, channelService, frameworkService, utilService, formService, activatedRoute, navigationhelperService, tncService, managedUserService, layoutService) {
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.router = router;
        this.userService = userService;
        this.orgDetailsService = orgDetailsService;
        this.channelService = channelService;
        this.frameworkService = frameworkService;
        this.utilService = utilService;
        this.formService = formService;
        this.activatedRoute = activatedRoute;
        this.navigationhelperService = navigationhelperService;
        this.tncService = tncService;
        this.managedUserService = managedUserService;
        this.layoutService = layoutService;
        this.enableSubmitBtn = false;
        this.showLoader = true;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.pageId = 'create-managed-user';
        this.sbFormBuilder = formBuilder;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationhelperService.setNavigationUrl();
        this.setTelemetryData();
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_3__["upperCase"](this.resourceService.instance || 'SUNBIRD');
        this.getFormDetails();
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    CreateUserComponent.prototype.goBack = function () {
        this.navigationhelperService.goBack();
    };
    CreateUserComponent.prototype.setTelemetryData = function () {
        this.telemetryImpression = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.pageId,
                subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
                uri: this.router.url,
                duration: this.navigationhelperService.getPageLoadTime()
            }
        };
        this.submitInteractEdata = {
            id: 'submit-create-managed-user',
            type: 'click',
            pageid: this.pageId
        };
        this.submitCancelInteractEdata = {
            id: 'cancel-create-managed-user',
            type: 'click',
            pageid: this.pageId
        };
    };
    CreateUserComponent.prototype.getFormDetails = function () {
        var _this = this;
        var formServiceInputParams = {
            formType: 'user',
            formAction: 'create',
            contentType: 'child',
            component: 'portal'
        };
        this.formService.getFormConfig(formServiceInputParams, this.userService.hashTagId).subscribe(function (formData) {
            _this.formData = formData;
            _this.initializeFormFields();
        }, function (err) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.emsg.m0005'));
            _this.showLoader = false;
        });
    };
    CreateUserComponent.prototype.initializeFormFields = function () {
        var formGroupObj = {};
        for (var _i = 0, _a = this.formData; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.visible && key.required) {
                formGroupObj[key.code] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else if (key.visible) {
                formGroupObj[key.code] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
            }
        }
        this.userDetailsForm = this.sbFormBuilder.group(formGroupObj, {
            validator: function (formControl) {
                var nameCtrl = formControl.controls.name;
                if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["trim"](nameCtrl.value) === '') {
                    nameCtrl.setErrors({ required: true });
                }
                return null;
            }
        });
        this.showLoader = false;
        this.enableSubmitBtn = (this.userDetailsForm.status === 'VALID');
        this.enableSubmitButton();
    };
    CreateUserComponent.prototype.enableSubmitButton = function () {
        var _this = this;
        this.userDetailsForm.valueChanges.subscribe(function (val) {
            _this.enableSubmitBtn = (_this.userDetailsForm.status === 'VALID');
        });
    };
    CreateUserComponent.prototype.onCancel = function () {
        this.navigationhelperService.navigateToLastUrl();
    };
    CreateUserComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.enableSubmitBtn = false;
        var createUserRequest = {
            request: {
                firstName: this.userDetailsForm.value.name,
                managedBy: this.managedUserService.getUserId()
            }
        };
        this.managedUserService.getParentProfile().subscribe(function (userProfileData) {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](userProfileData, 'userLocations'))) {
                createUserRequest.request['profileLocation'] = lodash_es__WEBPACK_IMPORTED_MODULE_3__["map"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](userProfileData, 'userLocations'), function (location) { return { code: location.code, type: location.type }; });
            }
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](userProfileData, 'framework') && !lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](userProfileData, 'framework'))) {
                createUserRequest.request['framework'] = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](userProfileData, 'framework');
            }
            _this.registerUser(createUserRequest, userProfileData);
        });
    };
    CreateUserComponent.prototype.registerUser = function (createUserRequest, userProfileData) {
        var _this = this;
        this.userService.registerUser(createUserRequest).subscribe(function (resp) {
            _this.managedUserService.updateUserList({
                firstName: _this.userDetailsForm.value.name,
                identifier: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](resp, 'result.userId'),
                id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](resp, 'result.userId'),
                managedBy: _this.managedUserService.getUserId()
            });
            var filterPipe = new _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__["InterpolatePipe"]();
            var successMessage = filterPipe.transform(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.imsg.m0096'), '{firstName}', _this.userDetailsForm.value.name);
            _this.toasterService.custom({
                message: successMessage,
                class: 'sb-toaster sb-toast-success sb-toast-normal'
            });
            _this.router.navigate(['/profile/choose-managed-user']);
        }, function (err) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](err, 'error.params.status') === 'MANAGED_USER_LIMIT_EXCEEDED') {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.resourceService, 'messages.fmsg.m0100'));
            }
            else {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0085);
            }
            _this.enableSubmitBtn = true;
        });
    };
    return CreateUserComponent;
}());



/***/ }),

/***/ "12xc":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/full-page-loader/full-page-loader.component.ngfactory.js ***!
  \****************************************************************************************************/
/*! exports provided: RenderType_FullPageLoaderComponent, View_FullPageLoaderComponent_0, View_FullPageLoaderComponent_Host_0, FullPageLoaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FullPageLoaderComponent", function() { return RenderType_FullPageLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FullPageLoaderComponent_0", function() { return View_FullPageLoaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FullPageLoaderComponent_Host_0", function() { return View_FullPageLoaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageLoaderComponentNgFactory", function() { return FullPageLoaderComponentNgFactory; });
/* harmony import */ var _full_page_loader_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-page-loader.component.scss.shim.ngstyle */ "CWUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resource/resource.service */ "vLro");
/* harmony import */ var _services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config/config.service */ "j0Qm");
/* harmony import */ var _full_page_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./full-page-loader.component */ "JicZ");








var styles_FullPageLoaderComponent = [_full_page_loader_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FullPageLoaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FullPageLoaderComponent, data: {} });

function View_FullPageLoaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "d-flex container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-loader", [], null, null, null, _app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppLoaderComponent_0"], _app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"], [_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_FullPageLoaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-full-page-loader", [], null, null, null, View_FullPageLoaderComponent_0, RenderType_FullPageLoaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _full_page_loader_component__WEBPACK_IMPORTED_MODULE_7__["FullPageLoaderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FullPageLoaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-full-page-loader", _full_page_loader_component__WEBPACK_IMPORTED_MODULE_7__["FullPageLoaderComponent"], View_FullPageLoaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "3kBE":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/account-recovery-info/account-recovery-info.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvcHJvZmlsZS9jb21wb25lbnRzL2FjY291bnQtcmVjb3ZlcnktaW5mby9hY2NvdW50LXJlY292ZXJ5LWluZm8uY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "60VW":
/*!*****************************************************!*\
  !*** ./src/app/plugins/profile/components/index.ts ***!
  \*****************************************************/
/*! exports provided: ProfileBadgeComponent, ProfilePageComponent, UpdateContactDetailsComponent, AccountRecoveryInfoComponent, CreateUserComponent, ChooseUserComponent, SubmitTeacherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-badge/profile-badge.component */ "/927");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileBadgeComponent", function() { return _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_0__["ProfileBadgeComponent"]; });

/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "sILy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__["ProfilePageComponent"]; });

/* harmony import */ var _update_contact_details_update_contact_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-contact-details/update-contact-details.component */ "L5X7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateContactDetailsComponent", function() { return _update_contact_details_update_contact_details_component__WEBPACK_IMPORTED_MODULE_2__["UpdateContactDetailsComponent"]; });

/* harmony import */ var _account_recovery_info_account_recovery_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-recovery-info/account-recovery-info.component */ "ajxR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryInfoComponent", function() { return _account_recovery_info_account_recovery_info_component__WEBPACK_IMPORTED_MODULE_3__["AccountRecoveryInfoComponent"]; });

/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "1/vJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"]; });

/* harmony import */ var _choose_user_choose_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-user/choose-user.component */ "Ovfy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChooseUserComponent", function() { return _choose_user_choose_user_component__WEBPACK_IMPORTED_MODULE_5__["ChooseUserComponent"]; });

/* harmony import */ var _submit_teacher_details_submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-teacher-details/submit-teacher-details.component */ "cRvx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitTeacherDetailsComponent", function() { return _submit_teacher_details_submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_6__["SubmitTeacherDetailsComponent"]; });










/***/ }),

/***/ "7ltE":
/*!***************************************************!*\
  !*** ./src/app/plugins/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: csCourseServiceFactory, csCertificateServiceFactory, ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csCourseServiceFactory", function() { return csCourseServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csCertificateServiceFactory", function() { return csCertificateServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-sunbird/client-services */ "6QGN");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");


var csCourseServiceFactory = function (csLibInitializerService) {
    if (!_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.isInitialised) {
        csLibInitializerService.initializeCs();
    }
    return _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.courseService;
};
var csCertificateServiceFactory = function (csLibInitializerService) {
    if (!_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.isInitialised) {
        csLibInitializerService.initializeCs();
    }
    return _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_0__["CsModule"].instance.certificateService;
};
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());



/***/ }),

/***/ "CWUT":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/full-page-loader/full-page-loader.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9mdWxsLXBhZ2UtbG9hZGVyL2Z1bGwtcGFnZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQ0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0QsdUJBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZnVsbC1wYWdlLWxvYWRlci9mdWxsLXBhZ2UtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gdG9wOiAwO1xuIGJvdHRvbTogMDtcbiBsZWZ0OiAwO1xuIHJpZ2h0OiAwO1xuIHBvc2l0aW9uOiBmaXhlZDtcbiB6LWluZGV4OiAxMDtcbiBhbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"];



/***/ }),

/***/ "D6Or":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/submit-teacher-details/submit-teacher-details.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%] {\n  max-width: 45rem;\n  width: calc(100% - 32px);\n  background: var(--white);\n  margin: 0 auto;\n  border-radius: 0.25rem;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .teacher-header[_ngcontent-%COMP%] {\n  border-bottom: 0.03125rem solid var(--rc-979797);\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--red-400) !important;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .invalid-msg[_ngcontent-%COMP%] {\n  color: var(--red-400);\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .primary.text[_ngcontent-%COMP%] {\n  color: var(--info-color);\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .ui.stackable.grid[_ngcontent-%COMP%]    > .wide.column[_ngcontent-%COMP%] {\n  padding: 0rem !important;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .sb-btn-border[_ngcontent-%COMP%] {\n  border-radius: 2.5rem;\n  text-transform: none;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.375rem;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  left: 0.5rem;\n  right: 0px;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  top: 0.125rem;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  left: 0.5rem;\n  right: 0px;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .phone-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0.5rem;\n  left: 0.25rem;\n  font-size: 0.75rem;\n  font-family: inherit;\n  font-weight: bold;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .phone-code[_ngcontent-%COMP%] {\n  right: 0.375rem;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%] {\n  font-weight: bold;\n  position: relative;\n}\n[_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown.phone-code-space[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: inherit;\n}\nhtml[dir=rtl]   [_nghost-%COMP%]   .sb-md-container[_ngcontent-%COMP%]   .sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown.phone-code-space[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n  padding-left: inherit;\n}\n.sb-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem 0px;\n  width: 100%;\n}\n.sb-field[_ngcontent-%COMP%]   .sb-field-label[_ngcontent-%COMP%] {\n  width: 4.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvc3VibWl0LXRlYWNoZXItZGV0YWlscy9zdWJtaXQtdGVhY2hlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBSEo7QUFLSTtFQUNFLGdEQUFBO0FBSE47QUFRSTtFQUNFLHVDQUFBO0FBTk47QUFTSTtFQUNFLHFCQUFBO0FBUE47QUFVSTtFQUNFLHdCQUFBO0FBUk47QUFXSTtFQUNFLHdCQUFBO0FBVE47QUFZSTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFWTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFYTjtBQWFNO0VBQ0UsWUFBQTtFQUNDLFVBQUE7QUFYVDtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQWJOO0FBY007RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQVpSO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFkTjtBQWVNO0VBQ0UsZUFBQTtBQWJSO0FBaUJJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWZOO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQWZOO0FBaUJNO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQWZSO0FBb0JBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBakJGO0FBa0JFO0VBQ0UsYUFBQTtBQWhCSiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvcHJvZmlsZS9jb21wb25lbnRzL3N1Ym1pdC10ZWFjaGVyLWRldGFpbHMvc3VibWl0LXRlYWNoZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnbWl4aW5zL21peGlucyc7XG5cbjpob3N0e1xuICAuc2ItbWQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSg3MjBweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oNHB4KTtcbiAgXG4gICAgLnRlYWNoZXItaGVhZGVye1xuICAgICAgYm9yZGVyLWJvdHRvbTogY2FsY3VsYXRlUmVtKDAuNXB4KSBzb2xpZCB2YXIoLS1yYy05Nzk3OTcpO1xuICAgIH1cbiAgICAudGVhY2hlci1idXR0b25ze1xuICAgICAgLy8gYm9yZGVyLXRvcDogY2FsY3VsYXRlUmVtKDAuNXB4KSBzb2xpZCB2YXIoLS1yYy05Nzk3OTcpO1xuICAgIH1cbiAgICAuaXMtaW52YWxpZCB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZC00MDApICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5pbnZhbGlkLW1zZyB7XG4gICAgICBjb2xvcjogdmFyKC0tcmVkLTQwMCk7XG4gICAgfVxuICAgIFxuICAgIC5wcmltYXJ5LnRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xuICAgIH1cbiAgICBcbiAgICAudWkuc3RhY2thYmxlLmdyaWQ+LndpZGUuY29sdW1uIHtcbiAgICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLnNiLWJ0bi1ib3JkZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDQwcHgpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5zdWNjZXNzLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgYm90dG9tOiBjYWxjdWxhdGVSZW0oNnB4KTtcbiAgXG4gICAgICBodG1sW2Rpcj1cInJ0bFwiXSAmIHtcbiAgICAgICAgbGVmdDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICAgICByaWdodDowcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndhcm5pbmctaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICB0b3A6IGNhbGN1bGF0ZVJlbSgycHgpO1xuICAgICAgaHRtbFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgIGxlZnQ6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgICByaWdodDowcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBob25lLWNvZGV7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdG9wOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICAgIGxlZnQ6IGNhbGN1bGF0ZVJlbSg0cHgpO1xuICAgICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTJweCk7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaHRtbFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgIHJpZ2h0OiBjYWxjdWxhdGVSZW0oNnB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNiLWZpZWxkIC51aS5zZWxlY3Rpb24uZHJvcGRvd24ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5zYi1maWVsZCAudWkuc2VsZWN0aW9uLmRyb3Bkb3duLnBob25lLWNvZGUtc3BhY2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogaW5oZXJpdDtcbiAgXG4gICAgICBodG1sW2Rpcj1cInJ0bFwiXSAmIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uc2ItZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjdWxhdGVSZW0oMTZweCkgMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLnNiLWZpZWxkLWxhYmVse1xuICAgIHdpZHRoOmNhbGN1bGF0ZVJlbSg3MnB4KTtcbiAgfVxufVxuXG5cbiJdfQ== */"];



/***/ }),

/***/ "L5X7":
/*!*******************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/update-contact-details/update-contact-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UpdateContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContactDetailsComponent", function() { return UpdateContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services */ "2Fx+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
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








var UpdateContactDetailsComponent = (function () {
    function UpdateContactDetailsComponent(resourceService, userService, otpService, toasterService, profileService, matDialog, configService) {
        this.resourceService = resourceService;
        this.userService = userService;
        this.otpService = otpService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.matDialog = matDialog;
        this.configService = configService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enableSubmitBtn = false;
        this.showUniqueError = '';
        this.showForm = false;
        this.verifiedUser = false;
        this.templateId = 'otpContactUpdateTemplate';
    }
    UpdateContactDetailsComponent.prototype.ngOnInit = function () {
        this.validateAndEditContact();
    };
    UpdateContactDetailsComponent.prototype.initializeFormFields = function () {
        if (this.contactType === 'phone') {
            this.contactTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]),
                uniqueContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
            this.onContactValueChange();
        }
        else if (this.contactType === 'email') {
            this.contactTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/)]),
                uniqueContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
            this.onContactValueChange();
        }
        this.enableSubmitButton();
        this.setInteractEventData();
    };
    UpdateContactDetailsComponent.prototype.validateAndEditContact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, otpData;
            return __generator(this, function (_a) {
                if (this.userProfile) {
                    request = {
                        key: this.userProfile.email || this.userProfile.phone || this.userProfile.recoveryEmail,
                        userId: this.userProfile.userId,
                        templateId: this.configService.appConfig.OTPTemplate.updateContactTemplate,
                        type: ''
                    };
                    if ((this.userProfile.email && !this.userProfile.phone) ||
                        (!this.userProfile.email && !this.userProfile.phone && this.userProfile.recoveryEmail)) {
                        request.type = 'email';
                    }
                    else if (this.userProfile.phone || this.userProfile.recoveryPhone) {
                        request.type = 'phone';
                    }
                    otpData = {
                        'type': request.type,
                        'value': request.key,
                        'instructions': this.resourceService.frmelmnts.lbl.otpcontactinfo,
                        'retryMessage': request.type === 'phone' ?
                            this.resourceService.frmelmnts.lbl.unableToUpdateMobile : this.resourceService.frmelmnts.lbl.unableToUpdateEmail,
                        'wrongOtpMessage': request.type === 'phone' ? this.resourceService.frmelmnts.lbl.wrongPhoneOTP :
                            this.resourceService.frmelmnts.lbl.wrongEmailOTP
                    };
                    this.verifiedUser = false;
                    this.generateOTP({ request: request }, otpData);
                }
                return [2];
            });
        });
    };
    UpdateContactDetailsComponent.prototype.closeModal = function () {
        this.closeMatDialog();
        this.close.emit();
    };
    UpdateContactDetailsComponent.prototype.enableSubmitButton = function () {
        var _this = this;
        this.contactTypeForm.valueChanges.subscribe(function (val) {
            _this.enableSubmitBtn = (_this.contactTypeForm.status === 'VALID');
        });
    };
    UpdateContactDetailsComponent.prototype.showParentForm = function (event) {
        if (event === 'true') {
            this.initializeFormFields();
            this.showForm = true;
        }
    };
    UpdateContactDetailsComponent.prototype.prepareOtpData = function (otpData) {
        this.otpData = otpData || {
            'type': this.contactType.toString(),
            'value': this.contactType === 'phone' ?
                this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value,
            'instructions': this.contactType === 'phone' ?
                this.resourceService.frmelmnts.instn.t0083 : this.resourceService.frmelmnts.instn.t0084,
            'retryMessage': this.contactType === 'phone' ?
                this.resourceService.frmelmnts.lbl.unableToUpdateMobile : this.resourceService.frmelmnts.lbl.unableToUpdateEmail,
            'wrongOtpMessage': this.contactType === 'phone' ? this.resourceService.frmelmnts.lbl.wrongPhoneOTP :
                this.resourceService.frmelmnts.lbl.wrongEmailOTP
        };
    };
    UpdateContactDetailsComponent.prototype.vaidateUserContact = function () {
        var _this = this;
        var value = this.contactType === 'phone' ?
            this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value;
        var uri = this.contactType + '/' + value;
        this.userService.getIsUserExistsUserByKey(uri).subscribe(function (data) {
            if (_this.userService.userid === data.result.response.id) {
                _this.showUniqueError = _this.contactType === 'phone' ?
                    _this.resourceService.frmelmnts.lbl.samePhoneNo : _this.resourceService.frmelmnts.lbl.sameEmailId;
            }
            else {
                _this.showUniqueError = _this.contactType === 'phone' ?
                    _this.resourceService.frmelmnts.lbl.uniqueMobile : _this.resourceService.frmelmnts.lbl.uniqueEmailId;
            }
        }, function (err) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](err, 'error.params.status') && err.error.params.status === 'USER_ACCOUNT_BLOCKED') {
                _this.showUniqueError = _this.resourceService.frmelmnts.lbl.blockedUserError;
            }
            else {
                _this.contactTypeForm.controls['uniqueContact'].setValue(true);
                _this.showUniqueError = '';
            }
        });
    };
    UpdateContactDetailsComponent.prototype.onContactValueChange = function () {
        var _this = this;
        var contactTypeControl = this.contactType === 'phone' ?
            this.contactTypeForm.get('phone') : this.contactTypeForm.get('email');
        var contactValue = '';
        contactTypeControl.valueChanges.subscribe(function (data) {
            if (contactTypeControl.status === 'VALID' && contactValue !== contactTypeControl.value) {
                _this.contactTypeForm.controls['uniqueContact'].setValue('');
                _this.vaidateUserContact();
                contactValue = contactTypeControl.value;
            }
        });
    };
    UpdateContactDetailsComponent.prototype.onSubmitForm = function () {
        this.enableSubmitBtn = false;
        if (this.contactTypeForm.valid) {
            this.generateOTP();
        }
    };
    UpdateContactDetailsComponent.prototype.generateOTP = function (request, otpData) {
        var _this = this;
        if (!request) {
            request = {
                'request': {
                    'key': this.contactType === 'phone' ?
                        this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value,
                    'type': this.contactType.toString()
                }
            };
        }
        this.otpService.generateOTP(request).subscribe(function (data) {
            _this.prepareOtpData(otpData);
            _this.showForm = false;
        }, function (err) {
            var failedgenerateOTPMessage = (err.error.params.status === 'PHONE_ALREADY_IN_USE') ||
                (err.error.params.status === 'EMAIL_IN_USE') ? err.error.params.errmsg : _this.resourceService.messages.fmsg.m0051;
            _this.toasterService.error(failedgenerateOTPMessage);
            _this.enableSubmitBtn = true;
            if (!_this.verifiedUser) {
                _this.closeModal();
            }
        });
    };
    UpdateContactDetailsComponent.prototype.updateProfile = function (data) {
        var _this = this;
        if (this.verifiedUser) {
            this.profileService.updateProfile(data).subscribe(function (res) {
                _this.closeModal();
                var sMessage = _this.contactType === 'phone' ?
                    _this.resourceService.messages.smsg.m0047 : _this.resourceService.messages.smsg.m0048;
                _this.toasterService.success(sMessage);
            }, function (err) {
                _this.closeModal();
                var fMessage = _this.contactType === 'phone' ?
                    _this.resourceService.messages.emsg.m0014 : _this.resourceService.messages.emsg.m0015;
                _this.toasterService.error(fMessage);
            });
        }
        else {
            this.initializeFormFields();
            this.verifiedUser = true;
            this.showForm = true;
        }
    };
    UpdateContactDetailsComponent.prototype.setInteractEventData = function () {
        var id = this.contactType === 'phone' ?
            'submit-mobile' : 'submit-emailId';
        this.submitInteractEdata = {
            id: id,
            type: 'click',
            pageid: 'profile-read'
        };
        this.telemetryInteractObject = {
            id: this.userService.userid,
            type: 'User',
            ver: '1.0'
        };
    };
    UpdateContactDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.closeMatDialog();
    };
    UpdateContactDetailsComponent.prototype.closeMatDialog = function () {
        var dialogRef = this.dialogProps && this.dialogProps.id && this.matDialog.getDialogById(this.dialogProps.id);
        dialogRef && dialogRef.close();
    };
    return UpdateContactDetailsComponent;
}());



/***/ }),

/***/ "Ovfy":
/*!*********************************************************************************!*\
  !*** ./src/app/plugins/profile/components/choose-user/choose-user.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChooseUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUserComponent", function() { return ChooseUserComponent; });
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _sunbird_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/environment */ "AytR");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








var ChooseUserComponent = (function () {
    function ChooseUserComponent(userService, navigationhelperService, toasterService, router, utilService, resourceService, telemetryService, configService, managedUserService, activatedRoute, courseService, connectionService, layoutService) {
        this.userService = userService;
        this.navigationhelperService = navigationhelperService;
        this.toasterService = toasterService;
        this.router = router;
        this.utilService = utilService;
        this.resourceService = resourceService;
        this.telemetryService = telemetryService;
        this.configService = configService;
        this.managedUserService = managedUserService;
        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        this.connectionService = connectionService;
        this.layoutService = layoutService;
        this.userList = [];
        this.memberCardConfig = {
            size: this.configService.constants.SIZE.MEDIUM,
            isSelectable: true,
            view: this.configService.constants.VIEW.HORIZONTAL,
            isBold: false
        };
        this.isConnected = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.instance = document.getElementById('instance')
            ? document.getElementById('instance').value.toUpperCase() : 'SUNBIRD';
    }
    ChooseUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationhelperService.setNavigationUrl();
        this.userDataSubscription = this.userService.userData$.subscribe(function (user) {
            _this.getManagedUserList();
        });
        this.telemetryImpressionEvent();
        this.setTelemetryData();
        this.connectionService.monitor()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (isConnected) {
            _this.isConnected = isConnected;
        });
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ChooseUserComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        if (this.userDataSubscription) {
            this.userDataSubscription.unsubscribe();
        }
    };
    ChooseUserComponent.prototype.goBack = function () {
        this.navigationhelperService.goBack();
    };
    ChooseUserComponent.prototype.switchUser = function () {
        var _this = this;
        var userId = this.selectedUser.identifier;
        var switchUserRequest = {
            userId: this.selectedUser.identifier,
            isManagedUser: this.selectedUser.managedBy ? true : false
        };
        this.managedUserService.initiateSwitchUser(switchUserRequest).subscribe(function (data) {
            _this.managedUserService.setSwitchUserData(userId, lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.userSid'));
            _this.userService.userData$.subscribe(function (user) {
                if (user && !user.err && user.userProfile.userId === userId) {
                    if (_this.utilService.isDesktopApp && !_this.isConnected) {
                        _this.initializeManagedUser();
                    }
                    else {
                        _this.courseService.getEnrolledCourses().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe$)).subscribe(function (enrolledCourse) {
                            _this.initializeManagedUser();
                        });
                    }
                }
            });
        }, function (err) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
        });
    };
    ChooseUserComponent.prototype.telemetryImpressionEvent = function () {
        this.telemetryService.impression({
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.activatedRoute.snapshot.data.telemetry.uri,
                duration: this.navigationhelperService.getPageLoadTime()
            }
        });
    };
    ChooseUserComponent.prototype.selectUser = function (event) {
        var _this = this;
        this.selectedUser = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'data.data');
        if (this.selectedUser.selected) {
            this.selectedUser = null;
        }
        var userId = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'data.data.identifier');
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["forEach"](this.userList, function (userData, index) {
            if (userData.identifier === userId) {
                _this.userList[index].selected = !userData.selected;
            }
            else {
                _this.userList[index].selected = userData.identifier === userId;
            }
        });
    };
    ChooseUserComponent.prototype.setTelemetryData = function () {
        this.submitInteractEdata = {
            id: 'submit-choose-managed-user',
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
        };
    };
    ChooseUserComponent.prototype.navigateToCreateUser = function () {
        this.router.navigate(['/profile/create-managed-user']);
    };
    ChooseUserComponent.prototype.getManagedUserList = function () {
        var _this = this;
        var requests = [this.managedUserService.managedUserList$];
        if (this.userService.userProfile.managedBy) {
            requests.push(this.managedUserService.getParentProfile());
        }
        rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"].apply(void 0, requests).subscribe(function (data) {
            var userListToProcess = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data[0], 'result.response.content');
            if (data[1]) {
                userListToProcess = [data[1]].concat(userListToProcess);
            }
            _this.userList = _this.managedUserService.processUserList(userListToProcess, _this.userService.userid);
        }, function (err) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
        });
    };
    ChooseUserComponent.prototype.getTelemetryContext = function () {
        var userProfile = this.userService.userProfile;
        var buildNumber = document.getElementById('buildNumber');
        var version = buildNumber && buildNumber.value ? buildNumber.value.slice(0, buildNumber.value.lastIndexOf('.')) : '1.0';
        return {
            userOrgDetails: {
                userId: userProfile.userId,
                rootOrgId: userProfile.rootOrgId,
                rootOrg: userProfile.rootOrg,
                organisationIds: userProfile.hashTagIds
            },
            config: {
                pdata: {
                    id: this.userService.appId,
                    ver: version,
                    pid: this.configService.appConfig.TELEMETRY.PID
                },
                endpoint: this.configService.urlConFig.URLS.TELEMETRY.SYNC,
                apislug: this.configService.urlConFig.URLS.CONTENT_PREFIX,
                host: '',
                uid: userProfile.userId,
                sid: this.userService.sessionId,
                channel: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](userProfile, 'rootOrg.hashTagId'),
                env: 'home',
                enableValidation: _sunbird_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].enableTelemetryValidation,
                timeDiff: this.userService.getServerTimeDiff
            }
        };
    };
    ChooseUserComponent.prototype.closeSwitchUser = function () {
        this.navigationhelperService.navigateToLastUrl();
    };
    ChooseUserComponent.prototype.initializeManagedUser = function () {
        var _this = this;
        this.telemetryService.syncEvents(false);
        this.telemetryService.setInitialization(false);
        this.telemetryService.initialize(this.getTelemetryContext());
        this.toasterService.custom({
            message: this.managedUserService.getMessage(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'messages.imsg.m0095'), this.selectedUser.firstName),
            class: 'sb-toaster sb-toast-success sb-toast-normal'
        });
        setTimeout(function () {
            _this.utilService.redirect('/resources');
        }, 5100);
    };
    return ChooseUserComponent;
}());



/***/ }),

/***/ "R4aK":
/*!***************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/create-user/create-user.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".user-profile-box[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  max-width: 480px;\n  width: calc(100% - 32px);\n  background: var(--white);\n  border-radius: 0.5rem;\n}\n.user-profile-box__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.user-profile-box__actions[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--rc-dddddd);\n  padding: 1rem 0px 0px 0px;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.user-profile-box[_ngcontent-%COMP%]   .ui.stackable.grid[_ngcontent-%COMP%]    > .wide.column[_ngcontent-%COMP%] {\n  padding: 0rem !important;\n}\n.user-profile-box[_ngcontent-%COMP%]   .field-focus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n}\n.user-profile-box[_ngcontent-%COMP%]   .member-list-container[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3BhZ2VzL191c2VyLW1nbXQuc2NzcyIsInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQUE7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNBRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsNENBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0RKO0FESUU7RUFDRSx3QkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hKO0FEY0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wbHVnaW5zL3Byb2ZpbGUvY29tcG9uZW50cy9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVzZXIgY3JlYXRlIGFuZCBjaG9vc2UgdXNlciBwYWdlIFVJIHN0eWxlcyAqL1xuXG4udXNlci1wcm9maWxlLWJveCB7XG4gIG1hcmdpbjogY2FsY3VsYXRlUmVtKDMycHgpIGF1dG87XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oOHB4KTtcblxuICAmX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgYm9yZGVyLXRvcDogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgdmFyKC0tcmMtZGRkZGRkKTtcbiAgICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oMTZweCkgMHB4IDBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAudWkuc3RhY2thYmxlLmdyaWQ+LndpZGUuY29sdW1uIHtcbiAgICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmllbGQtZm9jdXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLy8gLm9yYW5nZS1ib3JkZXIge1xuICAvLyAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLTEwMCkgIWltcG9ydGFudDtcbiAgLy8gfVxuXG4gIC8vIC5vcmFuZ2UudGV4dCB7XG4gIC8vICAgY29sb3I6IHZhcigtLXJlZC0xMDApO1xuICAvLyB9XG5cbiAgLm1lbWJlci1saXN0LWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogY2FsY3VsYXRlUmVtKDMyMHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG4iLCIvKiB1c2VyIGNyZWF0ZSBhbmQgY2hvb3NlIHVzZXIgcGFnZSBVSSBzdHlsZXMgKi9cbi51c2VyLXByb2ZpbGUtYm94IHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4udXNlci1wcm9maWxlLWJveF9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udXNlci1wcm9maWxlLWJveF9fYWN0aW9ucyB7XG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1yYy1kZGRkZGQpO1xuICBwYWRkaW5nOiAxcmVtIDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4udXNlci1wcm9maWxlLWJveCAudWkuc3RhY2thYmxlLmdyaWQgPiAud2lkZS5jb2x1bW4ge1xuICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4udXNlci1wcm9maWxlLWJveCAuZmllbGQtZm9jdXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnVzZXItcHJvZmlsZS1ib3ggLm1lbWJlci1saXN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"];



/***/ }),

/***/ "RBT8":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/update-contact-details/update-contact-details.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! exports provided: RenderType_UpdateContactDetailsComponent, View_UpdateContactDetailsComponent_0, View_UpdateContactDetailsComponent_Host_0, UpdateContactDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UpdateContactDetailsComponent", function() { return RenderType_UpdateContactDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UpdateContactDetailsComponent_0", function() { return View_UpdateContactDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UpdateContactDetailsComponent_Host_0", function() { return View_UpdateContactDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContactDetailsComponentNgFactory", function() { return UpdateContactDetailsComponentNgFactory; });
/* harmony import */ var _update_contact_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-contact-details.component.scss.shim.ngstyle */ "uJel");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component.ngfactory */ "jloS");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component */ "ldyU");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/core/services/tenant/tenant.service */ "LePv");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/core/services/otp/otp.service */ "4Np/");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _update_contact_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./update-contact-details.component */ "L5X7");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/profile/profile.service */ "gcPr");




















var styles_UpdateContactDetailsComponent = [_update_contact_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UpdateContactDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UpdateContactDetailsComponent, data: {} });

function View_UpdateContactDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updateEmailId))); _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updatePhoneNo))); _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "ui basic blue error label pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.validEmail))); _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "ui basic blue error label pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showUniqueError; _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "sb-field-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "sb-field ui input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "input", [["class", "sb-form-control"], ["formControlName", "email"], ["type", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = "email"; _ck(_v, 7, 0, currVal_9); var currVal_10 = (_co.contactTypeForm.controls.email.dirty && _co.contactTypeForm.controls["email"].errors); _ck(_v, 11, 0, currVal_10); var currVal_11 = (_co.showUniqueError && !(_co.contactTypeForm.controls.email.touched && _co.contactTypeForm.controls["email"].errors)); _ck(_v, 13, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.prmpt == null) ? null : _co.resourceService.frmelmnts.prmpt.enteremailID))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.enterEmail))), ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_UpdateContactDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "ui basic blue error label pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.validPhone))); _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "ui basic blue error label pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showUniqueError; _ck(_v, 1, 0, currVal_0); }); }
function View_UpdateContactDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "sb-field-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "sb-field ui left icon input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "input", [["class", "sb-form-control"], ["formControlName", "phone"], ["type", "number"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["class", " icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", "-"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = "phone"; _ck(_v, 8, 0, currVal_9); var currVal_11 = (_co.contactTypeForm.controls.phone.dirty && _co.contactTypeForm.controls["phone"].errors); _ck(_v, 14, 0, currVal_11); var currVal_12 = (_co.showUniqueError && !_co.contactTypeForm.controls["phone"].errors); _ck(_v, 16, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.prmpt == null) ? null : _co.resourceService.frmelmnts.prmpt.enterphoneno))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.enterPhoneNumber))), ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.indPhoneCode))); _ck(_v, 12, 0, currVal_10); }); }
function View_UpdateContactDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 17, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["aria-level", "2"], ["class", "sb-modal-header font-weight-bold fmedium"], ["role", "heading"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "form", [["class", "sb-form borderd"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "sb-mat__modal__actions text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onSubmitForm() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](24, { "sb-btn-disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_5__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_6__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contactType; _ck(_v, 5, 0, currVal_0); var currVal_1 = "email"; _ck(_v, 7, 0, currVal_1); var currVal_2 = "phone"; _ck(_v, 9, 0, currVal_2); var currVal_10 = _co.contactTypeForm; _ck(_v, 12, 0, currVal_10); var currVal_11 = _co.contactType; _ck(_v, 16, 0, currVal_11); var currVal_12 = "email"; _ck(_v, 18, 0, currVal_12); var currVal_13 = "phone"; _ck(_v, 20, 0, currVal_13); var currVal_14 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_15 = _ck(_v, 24, 0, !_co.enableSubmitBtn); _ck(_v, 23, 0, currVal_14, currVal_15); var currVal_16 = _co.telemetryInteractObject; var currVal_17 = _co.submitInteractEdata; _ck(_v, 25, 0, currVal_16, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_18 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit))); _ck(_v, 26, 0, currVal_18); }); }
function View_UpdateContactDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-otp-popup", [], null, [[null, "verificationSuccess"], [null, "closeContactForm"], [null, "redirectToParent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("verificationSuccess" === en)) {
        var pd_0 = (_co.updateProfile($event) !== false);
        ad = (pd_0 && ad);
    } if (("closeContactForm" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } if (("redirectToParent" === en)) {
        var pd_2 = (_co.showParentForm($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_OtpPopupComponent_0"], _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_OtpPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__["OtpPopupComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_11__["TenantService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__["DeviceDetectorService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__["OtpService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"]], { otpData: [0, "otpData"], redirectToLogin: [1, "redirectToLogin"] }, { redirectToParent: "redirectToParent", verificationSuccess: "verificationSuccess", closeContactForm: "closeContactForm" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.otpData; var currVal_1 = false; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_UpdateContactDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "sb-mat__modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "mb-0 mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UpdateContactDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_3 = "close dialog"; var currVal_4 = ""; _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_5 = _co.showForm; _ck(_v, 6, 0, currVal_5); var currVal_6 = !_co.showForm; _ck(_v, 8, 0, currVal_6); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_1, currVal_2); }); }
function View_UpdateContactDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-update-contact-details", [], null, null, null, View_UpdateContactDetailsComponent_0, RenderType_UpdateContactDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _update_contact_details_component__WEBPACK_IMPORTED_MODULE_18__["UpdateContactDetailsComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__["OtpService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__["ProfileService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UpdateContactDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-update-contact-details", _update_contact_details_component__WEBPACK_IMPORTED_MODULE_18__["UpdateContactDetailsComponent"], View_UpdateContactDetailsComponent_Host_0, { contactType: "contactType", userProfile: "userProfile", dialogProps: "dialogProps" }, { close: "close" }, []);



/***/ }),

/***/ "UhvR":
/*!*******************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-badge/profile-badge.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".ui.small.custom.badge.image[_ngcontent-%COMP%] {\n  height: 4.6875rem;\n  width: 4.6875rem;\n  max-height: 4.6875rem;\n  max-width: 4.6875rem;\n}\n\n.badges-container[_ngcontent-%COMP%] {\n  max-width: calc(195px * 4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZmlsZS1iYWRnZS9wcm9maWxlLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wbHVnaW5zL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLWJhZGdlL3Byb2ZpbGUtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMvbWl4aW5zJztcblxuLnVpLnNtYWxsLmN1c3RvbS5iYWRnZS5pbWFnZSB7XG4gIGhlaWdodDogY2FsY3VsYXRlUmVtKDc1cHgpO1xuICB3aWR0aDogY2FsY3VsYXRlUmVtKDc1cHgpO1xuICBtYXgtaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNzVweCk7XG4gIG1heC13aWR0aDogY2FsY3VsYXRlUmVtKDc1cHgpO1xufVxuXG4uYmFkZ2VzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogY2FsYygxOTVweCAqIDQpO1xufVxuIl19 */"];



/***/ }),

/***/ "VOct":
/*!*************************************************************!*\
  !*** ./src/app/plugins/profile/profile.module.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: ProfileModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModuleNgFactory", function() { return ProfileModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.module */ "7ltE");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _components_profile_page_profile_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile-page/profile-page.component.ngfactory */ "i4Li");
/* harmony import */ var _components_create_user_create_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-user/create-user.component.ngfactory */ "cTpC");
/* harmony import */ var _components_choose_user_choose_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/choose-user/choose-user.component.ngfactory */ "g1qI");
/* harmony import */ var _components_submit_teacher_details_submit_teacher_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/submit-teacher-details/submit-teacher-details.component.ngfactory */ "c8Pe");
/* harmony import */ var _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ng2-semantic-ui-v9/ng2-semantic-ui-v9.ngfactory */ "8rnI");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "ntJQ");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */ "9cE2");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "nmIE");
/* harmony import */ var _modules_shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/shared/components/alert-modal/alert-modal.component.ngfactory */ "IuEi");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/ngx-daterangepicker-material/ngx-daterangepicker-material.ngfactory */ "dGgD");
/* harmony import */ var _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@project-sunbird/sb-dashlet-v9/project-sunbird-sb-dashlet-v9.ngfactory */ "4cR3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-semantic-ui-v9 */ "0LfT");
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
/* harmony import */ var _modules_shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../modules/shared-feature/shared-feature.module */ "GX4e");
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");
/* harmony import */ var _modules_notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../modules/notification/services/notification/notification-service-impl */ "2QjS");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _modules_notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../modules/notification/services/group-notification-wrapper/group-notification-wrapper.service */ "1Ind");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service */ "SaJQ");
/* harmony import */ var ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _modules_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../modules/core/guard/auth-gard.service */ "uakX");
/* harmony import */ var _modules_core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../modules/core/services/permission/permission.service */ "A0Vx");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../modules/core/core.module */ "6ZYd");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ "WN11");
/* harmony import */ var _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @project-sunbird/sunbird-player-sdk-v9 */ "amcy");
/* harmony import */ var _modules_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../modules/player-helper/service/quml-player/quml-player.service */ "F/jw");
/* harmony import */ var _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @project-sunbird/sunbird-collection-editor-v9 */ "qSDK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-daterangepicker-material */ "kFe1");
/* harmony import */ var _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @project-sunbird/sb-dashlet-v9 */ "IJrI");
/* harmony import */ var sb_svg2pdf__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! sb-svg2pdf */ "7C15");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./profile-routing.module */ "0ecf");
/* harmony import */ var _modules_telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../modules/telemetry/telemetry.module */ "OW9C");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _modules_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../modules/shared/modules/material/material.module */ "CrH2");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../../modules/shared/shared.module */ "FpXt");
/* harmony import */ var _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @project-sunbird/web-extensions */ "q0uc");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ng2-material-dropdown */ "mB+Y");
/* harmony import */ var _location_location_module__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../location/location.module */ "hr7c");
/* harmony import */ var sb_notification__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! sb-notification */ "oikk");
/* harmony import */ var _modules_notification_notification_module__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../modules/notification/notification.module */ "ME/D");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ngx-slick */ "k0v7");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @project-sunbird/sunbird-pdf-player-v9 */ "J49s");
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ "7l48");
/* harmony import */ var _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @project-sunbird/sunbird-epub-player-v9 */ "/eec");
/* harmony import */ var _modules_player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../modules/player-helper/player-helper.module */ "9BjS");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.module */ "axVG");
/* harmony import */ var _modules_content_search_content_search_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../modules/content-search/content-search.module */ "CPp/");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "sILy");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "1/vJ");
/* harmony import */ var _components_choose_user_choose_user_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/choose-user/choose-user.component */ "Ovfy");
/* harmony import */ var _components_submit_teacher_details_submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./components/submit-teacher-details/submit-teacher-details.component */ "cRvx");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");



































































































var ProfileModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _components_profile_page_profile_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ProfilePageComponentNgFactory"], _components_create_user_create_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponentNgFactory"], _components_choose_user_choose_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ChooseUserComponentNgFactory"], _components_submit_teacher_details_submit_teacher_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SubmitTeacherDetailsComponentNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵbpNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵceNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TooltipComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["MatCalendarHeaderNgFactory"], _modules_shared_components_alert_modal_alert_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AlertModalComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFormComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTimerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTextboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicTextareaComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicMultipleDropdownComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicCheckboxComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicMultiSelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["TopicpickerComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["KeywordsComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFrameworkCategorySelectComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵbNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicFrameworkComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicRadioComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DynamicDialcodeComponentNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵcNgFactory"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵdNgFactory"], _node_modules_ng2_semantic_ui_v9_ng2_semantic_ui_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵsNgFactory"], _node_modules_ngx_daterangepicker_material_ngx_daterangepicker_material_ngfactory__WEBPACK_IMPORTED_MODULE_13__["DaterangepickerComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ChartJsComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["BigNumberComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["DtTableComponentNgFactory"], _node_modules_project_sunbird_sb_dashlet_v9_project_sunbird_sb_dashlet_v9_ngfactory__WEBPACK_IMPORTED_MODULE_14__["MapComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["ɵbx"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["ɵbx"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiLocalizationService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiLocalizationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModalService"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModalService"], [ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["ɵbx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPopupConfig"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPopupConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ScrollbarHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ScrollbarHelper"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["DimensionsHelper"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["DimensionsHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ColumnChangesService"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["ColumnChangesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_EXTEND"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵa"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"], [[2, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵc"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarService"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_32__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_32__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_NOTIFICATION_SERVICE", _modules_shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["csNotificationServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, "SB_NOTIFICATION_SERVICE", _modules_notification_services_notification_notification_service_impl__WEBPACK_IMPORTED_MODULE_35__["NotificationServiceImpl"], ["CS_NOTIFICATION_SERVICE", _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"], _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_39__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["ActivatedRoute"], _modules_notification_services_group_notification_wrapper_group_notification_wrapper_service__WEBPACK_IMPORTED_MODULE_40__["GroupNotificationWrapperService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__["CacheService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_41__["CacheService"], [ng2_cache_service_dist_src_services_storage_cache_storage_abstract_service__WEBPACK_IMPORTED_MODULE_42__["CacheStorageAbstract"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"], _modules_core_guard_auth_gard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"], _modules_core_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_44__["PermissionService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_45__["ResourceService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_46__["ConfigService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_37__["ToasterService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], _modules_core_core_module__WEBPACK_IMPORTED_MODULE_47__["ɵ0"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselConfig"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryService"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryService"], [_project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ErrorService"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ErrorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QuestionCursor"], null, [_modules_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _project_sunbird_sunbird_collection_editor_v9__WEBPACK_IMPORTED_MODULE_52__["EditorCursor"], null, [_modules_player_helper_service_quml_player_quml_player_service__WEBPACK_IMPORTED_MODULE_51__["QumlPlayerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["ɵb"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LocaleService"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LocaleService"], [ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LOCALE_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DATA_SERVICE"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_USER_SERVICE", _modules_shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["csUserServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "DOMTOIMAGE", sb_svg2pdf__WEBPACK_IMPORTED_MODULE_56__["domtoimageFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "JSPDF", sb_svg2pdf__WEBPACK_IMPORTED_MODULE_56__["jsPdfFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_COURSE_SERVICE", _profile_module__WEBPACK_IMPORTED_MODULE_1__["csCourseServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CS_CERTIFICATE_SERVICE", _profile_module__WEBPACK_IMPORTED_MODULE_1__["csCertificateServiceFactory"], [_service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_34__["CsLibInitializerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_38__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_38__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_38__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_38__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ProfileRoutingModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ProfileRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiTransitionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiTransitionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDropdownModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiUtilityModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiUtilityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiLocalizationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiLocalizationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSelectModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDimmerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDimmerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModalModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiCollapseModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiAccordionModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPopupModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPopupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiProgressModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiRatingModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_58__["TelemetryModule"], _modules_telemetry_telemetry_module__WEBPACK_IMPORTED_MODULE_58__["TelemetryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_59__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_59__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_59__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_59__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_62__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_64__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_64__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_65__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_65__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_66__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_66__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_67__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_67__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_68__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_68__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_69__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_69__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_70__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_70__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_72__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_72__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_73__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_73__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_74__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_76__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_76__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_77__["MaterialModule"], _modules_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_77__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_78__["SharedModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_78__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_79__["WebExtensionModule"], _project_sunbird_web_extensions__WEBPACK_IMPORTED_MODULE_79__["WebExtensionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_30__["AvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CardModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ModalModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["LayoutModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["LibraryFiltersModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["LibraryFiltersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["AccordionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["AccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PipesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ContentDetailsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ContentDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["FaqModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["FaqModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PagesModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CertificateActionsModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CertificateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PillsGridModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["PillsGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ListViewModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["ListViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CommonConsumptionModule"], _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_80__["CommonConsumptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["ɵe"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["ɵe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_82__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_82__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_32__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_32__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["CommonFormElementsModule"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["CommonFormElementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _location_location_module__WEBPACK_IMPORTED_MODULE_83__["LocationModule"], _location_location_module__WEBPACK_IMPORTED_MODULE_83__["LocationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiMessageModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPaginationModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiCheckboxModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDatepickerModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSearchModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSidebarModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiTabsModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModule"], ng2_semantic_ui_v9__WEBPACK_IMPORTED_MODULE_17__["SuiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, sb_notification__WEBPACK_IMPORTED_MODULE_84__["SbNotificationModule"], sb_notification__WEBPACK_IMPORTED_MODULE_84__["SbNotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_notification_notification_module__WEBPACK_IMPORTED_MODULE_85__["NotificationModule"], _modules_notification_notification_module__WEBPACK_IMPORTED_MODULE_85__["NotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_core_core_module__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], _modules_core_core_module__WEBPACK_IMPORTED_MODULE_47__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick__WEBPACK_IMPORTED_MODULE_86__["SlickModule"], ngx_slick__WEBPACK_IMPORTED_MODULE_86__["SlickModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_87__["SunbirdPdfPlayerModule"], _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_87__["SunbirdPdfPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_48__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], _project_sunbird_sunbird_player_sdk_v9__WEBPACK_IMPORTED_MODULE_50__["SunbirdPlayerSdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryModule"], _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_49__["QumlLibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_88__["SunbirdVideoPlayerModule"], _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_88__["SunbirdVideoPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_89__["SunbirdEpubPlayerModule"], _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_89__["SunbirdEpubPlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_90__["PlayerHelperModule"], _modules_player_helper_player_helper_module__WEBPACK_IMPORTED_MODULE_90__["PlayerHelperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_91__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_91__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__["DataTablesModule"], angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_92__["DataTablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["NgMultiSelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__["NgMultiSelectDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["NgxDaterangepickerMd"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["NgxDaterangepickerMd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DashletModule"], _project_sunbird_sb_dashlet_v9__WEBPACK_IMPORTED_MODULE_55__["DashletModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["SharedFeatureModule"], _modules_shared_feature_shared_feature_module__WEBPACK_IMPORTED_MODULE_33__["SharedFeatureModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["SbSearchFilterModule"], common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_81__["SbSearchFilterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_content_search_content_search_module__WEBPACK_IMPORTED_MODULE_93__["ContentSearchModule"], _modules_content_search_content_search_module__WEBPACK_IMPORTED_MODULE_93__["ContentSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, sb_svg2pdf__WEBPACK_IMPORTED_MODULE_56__["CertificateDirectivesModule"], sb_svg2pdf__WEBPACK_IMPORTED_MODULE_56__["CertificateDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], _profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_38__["ROUTES"], function () { return [[{ path: "", component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_94__["ProfilePageComponent"], data: _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ɵ0"] }, { path: "create-managed-user", component: _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_95__["CreateUserComponent"], data: _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ɵ1"] }, { path: "choose-managed-user", component: _components_choose_user_choose_user_component__WEBPACK_IMPORTED_MODULE_96__["ChooseUserComponent"], data: _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ɵ2"] }, { path: "submit-declaration", component: _components_submit_teacher_details_submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_97__["SubmitTeacherDetailsComponent"], data: _profile_routing_module__WEBPACK_IMPORTED_MODULE_57__["ɵ3"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_66__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_98__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_54__["LOCALE_CONFIG"], {}, [])]); });



/***/ }),

/***/ "ajxR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/account-recovery-info/account-recovery-info.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AccountRecoveryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryInfoComponent", function() { return AccountRecoveryInfoComponent; });
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services */ "2Fx+");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");







var AccountRecoveryInfoComponent = (function () {
    function AccountRecoveryInfoComponent(resourceService, profileService, userService, matDialog, toasterService, otpService, configService) {
        this.resourceService = resourceService;
        this.profileService = profileService;
        this.userService = userService;
        this.matDialog = matDialog;
        this.toasterService = toasterService;
        this.otpService = otpService;
        this.configService = configService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.enableSubmitButton = false;
        this.telemetryCdata = [];
    }
    AccountRecoveryInfoComponent.prototype.ngOnInit = function () {
        this.contactType = 'emailId';
        this.validateAndEditContact();
    };
    AccountRecoveryInfoComponent.prototype.initializeFormFields = function () {
        if (this.contactType === 'emailId') {
            this.accountRecoveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/)]),
            });
        }
        else if (this.contactType === 'phoneNo') {
            this.accountRecoveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]),
            });
        }
        this.handleSubmitButton();
        this.setTelemetryData();
    };
    AccountRecoveryInfoComponent.prototype.validateAndEditContact = function () {
        if (this.userProfile) {
            var request = {
                key: this.userProfile.email || this.userProfile.phone || this.userProfile.recoveryEmail,
                userId: this.userProfile.userId,
                templateId: this.configService.appConfig.OTPTemplate.updateContactTemplate,
                type: ''
            };
            if ((this.userProfile.email && !this.userProfile.phone) ||
                (!this.userProfile.email && !this.userProfile.phone && this.userProfile.recoveryEmail)) {
                request.type = 'email';
            }
            else if (this.userProfile.phone || this.userProfile.recoveryPhone) {
                request.type = 'phone';
            }
            this.otpData = {
                'type': request.type,
                'value': request.key,
                'instructions': this.resourceService.frmelmnts.lbl.otpcontactinfo,
                'retryMessage': request.type === 'phone' ?
                    this.resourceService.frmelmnts.lbl.unableToUpdateMobile : this.resourceService.frmelmnts.lbl.unableToUpdateEmail,
                'wrongOtpMessage': request.type === 'phone' ? this.resourceService.frmelmnts.lbl.wrongPhoneOTP :
                    this.resourceService.frmelmnts.lbl.wrongEmailOTP
            };
            this.showOTPForm = true;
            this.generateOTP({ request: request });
        }
    };
    AccountRecoveryInfoComponent.prototype.generateOTP = function (request) {
        var _this = this;
        console.log('Request', request);
        this.otpService.generateOTP(request).subscribe(function (data) {
        }, function (err) {
            var failedgenerateOTPMessage = (err.error.params.status === 'PHONE_ALREADY_IN_USE') ||
                (err.error.params.status === 'EMAIL_IN_USE') ? err.error.params.errmsg : _this.resourceService.messages.fmsg.m0051;
            _this.toasterService.error(failedgenerateOTPMessage);
            _this.closeModal();
        });
    };
    AccountRecoveryInfoComponent.prototype.userVerificationSuccess = function () {
        this.initializeFormFields();
        this.showOTPForm = false;
    };
    AccountRecoveryInfoComponent.prototype.updateRecoveryId = function () {
        var _this = this;
        this.enableSubmitButton = false;
        if (this.contactType === 'emailId') {
            this.request = {
                'recoveryEmail': this.accountRecoveryForm.get('email').value,
                'recoveryPhone': ''
            };
        }
        else if (this.contactType === 'phoneNo') {
            this.request = {
                'recoveryPhone': this.accountRecoveryForm.get('phone').value,
                'recoveryEmail': ''
            };
        }
        this.profileService.updateProfile(this.request).subscribe(function (data) {
            _this.closeModal();
        }, function (error) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](error, 'error.params.err') === 'RECOVERY_PARAM_MATCH_EXCEPTION') {
                _this.duplicateRecoveryId = true;
                _this.accountRecoveryForm.reset();
            }
            else {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0051);
                _this.closeModal();
            }
        });
    };
    AccountRecoveryInfoComponent.prototype.handleSubmitButton = function () {
        var _this = this;
        this.enableSubmitButton = false;
        this.accountRecoveryForm.valueChanges.subscribe(function (val) {
            _this.enableSubmitButton = (_this.accountRecoveryForm.status === 'VALID');
        });
    };
    AccountRecoveryInfoComponent.prototype.ngOnDestroy = function () {
        this.closeMatDialog();
    };
    AccountRecoveryInfoComponent.prototype.onItemChange = function () {
        this.duplicateRecoveryId = false;
        this.initializeFormFields();
    };
    AccountRecoveryInfoComponent.prototype.closeModal = function () {
        this.closeMatDialog();
        this.close.emit();
    };
    AccountRecoveryInfoComponent.prototype.setTelemetryData = function () {
        var id = this.contactType === 'phoneNo' ?
            'submit-phone-recovery' : 'submit-emailId-recovery';
        this.submitInteractEdata = {
            id: id,
            type: 'click',
            pageid: 'profile-read'
        };
        this.telemetryCdata = [
            {
                id: 'user:account:recovery',
                type: 'Feature'
            },
            {
                id: 'SC-1288',
                type: 'Task'
            }
        ];
        this.telemetryInteractObject = {
            id: this.userService.userid,
            type: 'User',
            ver: '1.0'
        };
    };
    AccountRecoveryInfoComponent.prototype.closeMatDialog = function () {
        var dialogRef = this.dialogProps && this.dialogProps.id && this.matDialog.getDialogById(this.dialogProps.id);
        dialogRef && dialogRef.close();
    };
    return AccountRecoveryInfoComponent;
}());



/***/ }),

/***/ "c8Pe":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/submit-teacher-details/submit-teacher-details.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! exports provided: RenderType_SubmitTeacherDetailsComponent, View_SubmitTeacherDetailsComponent_0, View_SubmitTeacherDetailsComponent_Host_0, SubmitTeacherDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SubmitTeacherDetailsComponent", function() { return RenderType_SubmitTeacherDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SubmitTeacherDetailsComponent_0", function() { return View_SubmitTeacherDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SubmitTeacherDetailsComponent_Host_0", function() { return View_SubmitTeacherDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitTeacherDetailsComponentNgFactory", function() { return SubmitTeacherDetailsComponentNgFactory; });
/* harmony import */ var _submit_teacher_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-teacher-details.component.scss.shim.ngstyle */ "D6Or");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _modules_shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/common-form-elements-web-v9/common-form-elements-web-v9.ngfactory */ "vcGM");
/* harmony import */ var common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common-form-elements-web-v9 */ "rvEx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _modules_shared_feature_components_tnc_popup_terms_conditions_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/tnc-popup/terms-conditions-popup.component.ngfactory */ "c7Hs");
/* harmony import */ var _modules_shared_feature_components_tnc_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/tnc-popup/terms-conditions-popup.component */ "KwqX");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../modules/core/services/tenant/tenant.service */ "LePv");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component.ngfactory */ "jloS");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component */ "ldyU");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../modules/core/services/otp/otp.service */ "4Np/");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./submit-teacher-details.component */ "cRvx");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../services/profile/profile.service */ "gcPr");
/* harmony import */ var _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../modules/core/services/form/form.service */ "9dCP");
/* harmony import */ var _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../modules/shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _modules_core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../modules/core/services/tnc/tnc.service */ "2lf2");



































var styles_SubmitTeacherDetailsComponent = [_submit_teacher_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SubmitTeacherDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SubmitTeacherDetailsComponent, data: {} });

function View_SubmitTeacherDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.provideTeacherDetails))); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmitTeacherDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updateDetails))); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmitTeacherDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.provideTeacherDetails))); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmitTeacherDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updateDetails))); _ck(_v, 1, 0, currVal_0); }); }
function View_SubmitTeacherDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppLoaderComponent_0"], _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_SubmitTeacherDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sb-form", [], null, [[null, "initialize"], [null, "valueChanges"], [null, "statusChanges"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("initialize" === en)) {
        _co.tenantPersonaFormValueChanges((($event == null) ? null : $event.value));
        var pd_0 = (_co.tenantPersonaFormStatusChanges($event) !== false);
        ad = (pd_0 && ad);
    } if (("valueChanges" === en)) {
        var pd_1 = (_co.tenantPersonaFormValueChanges($event) !== false);
        ad = (pd_1 && ad);
    } if (("statusChanges" === en)) {
        var pd_2 = (_co.tenantPersonaFormStatusChanges($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_FormComponent_0"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_FormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_8__["FormComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]], { platform: [0, "platform"], config: [1, "config"] }, { initialize: "initialize", valueChanges: "valueChanges", statusChanges: "statusChanges" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "web"; var currVal_1 = _co.tenantPersonaForm; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_SubmitTeacherDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sb-form", [], null, [[null, "valueChanges"], [null, "statusChanges"], [null, "linkClicked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChanges" === en)) {
        var pd_0 = (_co.declarationFormValueChanges($event) !== false);
        ad = (pd_0 && ad);
    } if (("statusChanges" === en)) {
        var pd_1 = (_co.declarationFormStatusChanges($event) !== false);
        ad = (pd_1 && ad);
    } if (("linkClicked" === en)) {
        var pd_2 = (_co.linkClicked($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_FormComponent_0"], _node_modules_common_form_elements_web_v9_common_form_elements_web_v9_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_FormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, common_form_elements_web_v9__WEBPACK_IMPORTED_MODULE_8__["FormComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]], { platform: [0, "platform"], config: [1, "config"] }, { linkClicked: "linkClicked", valueChanges: "valueChanges", statusChanges: "statusChanges" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "web"; var currVal_1 = _co.teacherDetailsForm; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_SubmitTeacherDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.submit() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "sb-btn-disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_11__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_2 = _ck(_v, 2, 0, (!_co.isTenantPersonaFormValid || !_co.isDeclarationFormValid)); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.submitInteractEdata; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.isTenantPersonaFormValid || !_co.isDeclarationFormValid); _ck(_v, 0, 0, currVal_0); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit))); _ck(_v, 4, 0, currVal_4); }); }
function View_SubmitTeacherDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.submit() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "sb-btn-disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_11__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_2 = _ck(_v, 2, 0, (!_co.isTenantPersonaFormValid || !_co.isDeclarationFormValid)); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.getUpdateTelemetry(); _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.isTenantPersonaFormValid || !_co.isDeclarationFormValid); _ck(_v, 0, 0, currVal_0); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.update))); _ck(_v, 4, 0, currVal_4); }); }
function View_SubmitTeacherDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "teacher-buttons text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tenantPersonaForm; _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.teacherDetailsForm == null) ? null : _co.teacherDetailsForm.length); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.formAction === "submit"); _ck(_v, 7, 0, currVal_2); var currVal_3 = (_co.formAction === "update"); _ck(_v, 9, 0, currVal_3); }, null); }
function View_SubmitTeacherDetailsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "ui modal transition active visible small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "sb-modal-header font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "sb-modal-content text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "my-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-success"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeSuccessModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_11__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.submitDetailsInteractEdata; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.thankyouForSubmittingDetails))); _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.editProfileInfo))); _ck(_v, 7, 0, currVal_1); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.ok))); _ck(_v, 11, 0, currVal_3); }); }
function View_SubmitTeacherDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.closeSuccessModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ModalWrapperComponent_0"], _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[1, 4], ["modal", 4]], 1, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_SubmitTeacherDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "small"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_SubmitTeacherDetailsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tnc-popup", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.showAndHidePopup(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_feature_components_tnc_popup_terms_conditions_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TermsAndConditionsPopupComponent_0"], _modules_shared_feature_components_tnc_popup_terms_conditions_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TermsAndConditionsPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _modules_shared_feature_components_tnc_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_19__["TermsAndConditionsPopupComponent"], [_modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"], _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_22__["TenantService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["DomSanitizer"], _service_popup_control_service__WEBPACK_IMPORTED_MODULE_24__["PopupControlService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]], { tncUrl: [0, "tncUrl"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.termsAndConditionLink; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SubmitTeacherDetailsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "ui modal transition active visible small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-otp-popup", [], null, [[null, "verificationSuccess"], [null, "closeContactForm"], [null, "redirectToParent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("verificationSuccess" === en)) {
        var pd_0 = (_co.onVerificationSuccess($event) !== false);
        ad = (pd_0 && ad);
    } if (("closeContactForm" === en)) {
        var pd_1 = (_co.onOtpPopupClose() !== false);
        ad = (pd_1 && ad);
    } if (("redirectToParent" === en)) {
        var pd_2 = (_co.onOtpVerificationError($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_OtpPopupComponent_0"], _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_OtpPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 0, _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_26__["OtpPopupComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_22__["TenantService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_27__["DeviceDetectorService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_28__["OtpService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_29__["UtilService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"]], { otpData: [0, "otpData"], redirectToLogin: [1, "redirectToLogin"] }, { redirectToParent: "redirectToParent", verificationSuccess: "verificationSuccess", closeContactForm: "closeContactForm" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.otpData; var currVal_1 = false; _ck(_v, 4, 0, currVal_0, currVal_1); }, null); }
function View_SubmitTeacherDetailsComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = (_co.onOtpPopupClose() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ModalWrapperComponent_0"], _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[1, 4], ["modal", 4]], 1, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_SubmitTeacherDetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[3, 4]], 0, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "small"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_SubmitTeacherDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 14, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "content-header__content w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 10, "div", [["class", "mt-24 sb-md-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "div", [["class", "sb-modal-header teacher-header font-weight-bold px-24 py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "div", [["class", "py-16 px-32"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SubmitTeacherDetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "relative position mt-0"; var currVal_1 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_5 = (_co.formAction === "submit"); _ck(_v, 15, 0, currVal_5); var currVal_6 = (_co.formAction === "update"); _ck(_v, 17, 0, currVal_6); var currVal_7 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_co.formAction === "submit"); _ck(_v, 23, 0, currVal_8); var currVal_9 = (_co.formAction === "update"); _ck(_v, 25, 0, currVal_9); var currVal_10 = _co.showLoader; _ck(_v, 28, 0, currVal_10); var currVal_11 = !_co.showLoader; _ck(_v, 30, 0, currVal_11); var currVal_12 = _co.showSuccessModal; _ck(_v, 32, 0, currVal_12); var currVal_13 = _co.showTncPopup; _ck(_v, 34, 0, currVal_13); var currVal_14 = _co.isOtpVerificationRequired; _ck(_v, 36, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 10, 0, currVal_4); }); }
function View_SubmitTeacherDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-submit-teacher-details", [], null, null, null, View_SubmitTeacherDetailsComponent_0, RenderType_SubmitTeacherDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_30__["SubmitTeacherDetailsComponent"], ["CS_USER_SERVICE", _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_12__["TelemetryService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_31__["ProfileService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_32__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_33__["NavigationHelperService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_28__["OtpService"], _modules_core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_34__["TncService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_29__["UtilService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubmitTeacherDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-submit-teacher-details", _submit_teacher_details_component__WEBPACK_IMPORTED_MODULE_30__["SubmitTeacherDetailsComponent"], View_SubmitTeacherDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "cRvx":
/*!*******************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/submit-teacher-details/submit-teacher-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SubmitTeacherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitTeacherDetailsComponent", function() { return SubmitTeacherDetailsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @project-sunbird/client-services/models */ "xU6r");
/* harmony import */ var _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services */ "2Fx+");
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









var SubmitTeacherDetailsComponent = (function () {
    function SubmitTeacherDetailsComponent(csUserService, activatedRoute, telemetryService, resourceService, toasterService, profileService, userService, formService, router, navigationHelperService, otpService, tncService, utilService, layoutService) {
        this.csUserService = csUserService;
        this.activatedRoute = activatedRoute;
        this.telemetryService = telemetryService;
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.userService = userService;
        this.formService = formService;
        this.router = router;
        this.navigationHelperService = navigationHelperService;
        this.otpService = otpService;
        this.tncService = tncService;
        this.utilService = utilService;
        this.layoutService = layoutService;
        this.showSuccessModal = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.forChanges = {
            prevPersonaValue: '',
            prevTenantValue: '',
            prevPhoneValue: '',
            prevEmailValue: ''
        };
        this.showLoader = true;
        this.showTncPopup = false;
        this.isOtpVerificationRequired = false;
        this.validationType = {
            'declared-phone': {
                isVerified: false,
                isVerificationRequired: false
            },
            'declared-email': {
                isVerified: false,
                isVerificationRequired: false
            }
        };
        this.formGroupObj = {};
        this.selectedTenant = '';
        this.isDeclarationFormValid = false;
        this.isTenantPersonaFormValid = false;
        this.globalConsent = 'global-consent';
        this.isglobalConsent = true;
        this.showGlobalConsentPopUpSection = false;
        this.isTenantChanged = false;
    }
    SubmitTeacherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_5__["upperCase"](this.resourceService.instance || 'SUNBIRD');
        this.consentConfig = { tncLink: this.resourceService.frmelmnts.lbl.tncLabelLink,
            tncText: this.resourceService.frmelmnts.lbl.nonCustodianTC };
        this.fetchTncData();
        var queryParams = this.activatedRoute.snapshot.queryParams;
        this.formAction = queryParams.formaction;
        this.telemetryImpressionEvent();
        this.userService.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (user) {
            if (user.userProfile) {
                _this.userProfile = user.userProfile;
                _this.getLocations();
                if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, 'declarations.length')) {
                    _this.declaredDetails = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, 'declarations')[0] || '';
                    _this.forChanges.prevPersonaValue = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.declaredDetails, 'persona');
                    _this.forChanges.prevTenantValue = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.declaredDetails, 'orgId');
                }
                _this.getPersonaTenant();
                _this.showLoader = false;
            }
        });
        this.setTelemetryData();
    };
    SubmitTeacherDetailsComponent.prototype.fetchTncData = function () {
        var _this = this;
        this.tncService.getTncConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            var response = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'result.response.value');
            if (response) {
                try {
                    var tncConfig = _this.utilService.parseJson(response);
                    _this.tncLatestVersion = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](tncConfig, 'latestVersion') || {};
                    _this.termsAndConditionLink = tncConfig[_this.tncLatestVersion].url;
                }
                catch (e) {
                    _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.fmsg.m0004'));
                }
            }
        }, function (err) {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.fmsg.m0004'));
        });
    };
    SubmitTeacherDetailsComponent.prototype.showAndHidePopup = function (mode) {
        this.showTncPopup = mode;
    };
    SubmitTeacherDetailsComponent.prototype.telemetryImpressionEvent = function () {
        this.telemetryService.impression({
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env
            },
            edata: {
                type: this.activatedRoute.snapshot.data.telemetry.type,
                subtype: this.formAction,
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
                uri: this.activatedRoute.snapshot.data.telemetry.uri,
                duration: this.navigationHelperService.getPageLoadTime()
            }
        });
    };
    SubmitTeacherDetailsComponent.prototype.setTelemetryData = function () {
        this.submitInteractEdata = {
            id: 'submit-teacher-details',
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid
        };
        this.cancelInteractEdata = {
            id: "cancel-" + this.formAction + "-teacher-details",
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid
        };
        this.submitDetailsInteractEdata = {
            id: "teacher-details-submit-success",
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid
        };
    };
    SubmitTeacherDetailsComponent.prototype.generateTelemetry = function (fieldType) {
        var interactData = {
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: []
            },
            edata: {
                id: "validate-" + fieldType + "-" + this.formAction + "-teacher-details",
                type: 'click',
                pageid: this.activatedRoute.snapshot.data.telemetry.pageid
            }
        };
        this.telemetryService.interact(interactData);
    };
    SubmitTeacherDetailsComponent.prototype.generateOTP = function (fieldType, value) {
        var _this = this;
        this.generateTelemetry(fieldType);
        var request = {
            request: {
                key: value.toString(),
                type: fieldType === 'declared-phone' ? 'phone' : 'email'
            }
        };
        this.otpService.generateOTP(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this.otpData = _this.prepareOtpData(fieldType, value);
            _this.setOtpValidation(true);
        }, function (err) {
            _this.toasterService.error(_this.resourceService.messages.fmsg.m0051);
        });
    };
    SubmitTeacherDetailsComponent.prototype.onVerificationSuccess = function (event) {
        this.setOtpValidation(false);
        this.otpConfirm.next(true);
        this.otpConfirm.complete();
    };
    SubmitTeacherDetailsComponent.prototype.getFieldType = function (data) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'phone') ? 'declared-phone' : 'declared-email';
    };
    SubmitTeacherDetailsComponent.prototype.onOtpPopupClose = function () {
        this.setOtpValidation(false);
    };
    SubmitTeacherDetailsComponent.prototype.setOtpValidation = function (valueToSet) {
        this.isOtpVerificationRequired = valueToSet;
    };
    SubmitTeacherDetailsComponent.prototype.onOtpVerificationError = function (data) {
        this.setOtpValidation(false);
    };
    SubmitTeacherDetailsComponent.prototype.prepareOtpData = function (fieldType, value) {
        var otpData = {};
        switch (fieldType) {
            case 'declared-phone':
                otpData.instructions = this.resourceService.frmelmnts.instn.t0083;
                otpData.retryMessage = this.resourceService.frmelmnts.lbl.unableToUpdateMobile;
                otpData.wrongOtpMessage = this.resourceService.frmelmnts.lbl.wrongPhoneOTP;
                break;
            case 'declared-email':
                otpData.instructions = this.resourceService.frmelmnts.instn.t0084;
                otpData.retryMessage = this.resourceService.frmelmnts.lbl.unableToUpdateEmail;
                otpData.wrongOtpMessage = this.resourceService.frmelmnts.lbl.wrongEmailOTP;
                break;
        }
        otpData.type = fieldType === 'declared-phone' ? 'phone' : 'email';
        otpData.value = value;
        return otpData;
    };
    SubmitTeacherDetailsComponent.prototype.getLocations = function () {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["map"](this.userProfile.userLocations, function (locations) {
            if (locations.type === 'state') {
                _this.selectedState = locations.name;
            }
            if (locations.type === 'district') {
                _this.selectedDistrict = locations.name;
            }
        });
    };
    SubmitTeacherDetailsComponent.prototype.getUpdateTelemetry = function () {
        var fieldsChanged = [];
        if (this.forChanges.prevPersonaValue !== lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.tenantPersonaLatestFormValue, 'persona')) {
            fieldsChanged.push('Persona');
        }
        if (this.forChanges.prevTenantValue !== lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.tenantPersonaLatestFormValue, 'tenant')) {
            fieldsChanged.push('Tenant');
        }
        if (this.declaredDetails && lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.declaredLatestFormValue, 'children.externalIds')) {
            var userDeclaredValues = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.declaredLatestFormValue, 'children.externalIds');
            for (var _i = 0, _a = Object.entries(userDeclaredValues); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (!lodash_es__WEBPACK_IMPORTED_MODULE_5__["includes"](['state', 'district', 'name'], key) &&
                    this.declaredDetails.info[key] !== this.declaredLatestFormValue.children.externalIds[key]) {
                    fieldsChanged.push(key);
                }
            }
        }
        var updateInteractEdata = {
            id: 'update-teacher-details',
            type: 'click',
            pageid: this.activatedRoute.snapshot.data.telemetry.pageid
        };
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](fieldsChanged)) {
            updateInteractEdata['extra'] = { fieldsChanged: fieldsChanged };
        }
        return updateInteractEdata;
    };
    SubmitTeacherDetailsComponent.prototype.closeSuccessModal = function () {
        this.modal.deny();
        this.showSuccessModal = false;
        this.navigateToProfile();
    };
    SubmitTeacherDetailsComponent.prototype.updateProfile = function (data) {
        var _this = this;
        this.profileService.declarations(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (res) {
            if (_this.formAction === 'update') {
                _this.toasterService.success(_this.resourceService.messages.smsg.m0037);
                _this.navigateToProfile();
            }
            else {
                if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.declaredLatestFormValue, 'tnc')) {
                    _this.logAuditEvent();
                }
                _this.showSuccessModal = true;
            }
        }, function (err) {
            _this.navigateToProfile();
            _this.toasterService.error(_this.formAction === 'submit' ? _this.resourceService.messages.emsg.m0051 :
                _this.resourceService.messages.emsg.m0052);
        });
    };
    SubmitTeacherDetailsComponent.prototype.goBack = function () {
        this.navigationHelperService.goBack();
    };
    SubmitTeacherDetailsComponent.prototype.logAuditEvent = function () {
        this.telemetryService.audit({
            context: {
                env: this.activatedRoute.snapshot.data.telemetry.env,
                cdata: [{ id: 'teacher-self-declaration', type: 'FromPage' }]
            },
            object: { id: 'data-sharing', type: 'TnC', ver: this.tncLatestVersion },
            edata: { state: 'Updated', props: [], prevstate: '', type: 'tnc-data-sharing' }
        });
    };
    SubmitTeacherDetailsComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/profile']);
    };
    SubmitTeacherDetailsComponent.prototype.getPersonaTenant = function () {
        var _this = this;
        this.profileService.getPersonaTenantForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (response) {
            _this.selectedTenant = (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, 'declarations[0].orgId')) || '';
            response.forEach(function (config) {
                if (config.code === 'persona') {
                    config.default = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, 'declarations[0].persona');
                }
                else if (config.code === 'tenant') {
                    config.default = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, 'declarations[0].orgId');
                }
            });
            _this.tenantPersonaForm = response;
            if (_this.selectedTenant) {
                _this.getTeacherDetailsForm();
            }
        }, function (error) {
            console.error('Unable to fetch form', error);
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
            _this.navigateToProfile();
        });
    };
    SubmitTeacherDetailsComponent.prototype.tenantPersonaFormValueChanges = function (event) {
        this.tenantPersonaLatestFormValue = event;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'tenant')) {
            if (!this.selectedTenant || event.tenant !== this.selectedTenant) {
                this.previousOrgId = this.selectedTenant;
                this.isTenantChanged = this.selectedTenant ? true : false;
                this.selectedTenant = event.tenant;
                this.getTeacherDetailsForm();
            }
        }
    };
    SubmitTeacherDetailsComponent.prototype.linkClicked = function (event) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'event.preventDefault')) {
            event.event.preventDefault();
            this.showTncPopup = true;
        }
    };
    SubmitTeacherDetailsComponent.prototype.declarationFormValueChanges = function (event) {
        this.declaredLatestFormValue = event;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'children.externalIds')) {
            if (!this.selectedStateCode && lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'children.externalIds.declared-state')) {
                this.selectedStateCode = event.children.externalIds['declared-state'];
            }
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'children.externalIds["declared-state"]') && this.selectedStateCode !== lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](event, 'children.externalIds.declared-state')) {
                this.selectedStateCode = event.children.externalIds['declared-state'];
            }
        }
    };
    SubmitTeacherDetailsComponent.prototype.tenantPersonaFormStatusChanges = function (event) {
        this.isTenantPersonaFormValid = event.isValid || event.valid;
    };
    SubmitTeacherDetailsComponent.prototype.declarationFormStatusChanges = function (event) {
        this.isDeclarationFormValid = event.isValid;
    };
    SubmitTeacherDetailsComponent.prototype.getTeacherDetailsForm = function () {
        var _this = this;
        this.profileService.getSelfDeclarationForm(this.selectedTenant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (formConfig) {
            console.log('formConfig', formConfig);
            _this.initializeFormData(formConfig);
        }, function (error) {
            console.error('Unable to fetch form', error);
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
        });
    };
    SubmitTeacherDetailsComponent.prototype.initializeFormData = function (formConfig) {
        var _this = this;
        this.teacherDetailsForm = formConfig.map(function (config) {
            switch (config.code) {
                case 'name':
                    config.templateOptions.labelHtml.values['$1'] = _this.userProfile.firstName;
                    break;
                case 'state':
                    config.templateOptions.labelHtml.values['$1'] = _this.selectedState || 'Enter location from Profile page';
                    break;
                case 'district':
                    config.templateOptions.labelHtml.values['$1'] = _this.selectedDistrict || 'Enter location from Profile page';
                    break;
                case 'externalIds':
                    config.children = config.children.map(function (childConfig) {
                        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](childConfig, "templateOptions['dataSrc'].marker") === 'LOCATION_LIST') {
                            if (childConfig.templateOptions['dataSrc'].params.id === 'state') {
                                var stateCode = void 0;
                                if (_this.selectedState) {
                                    stateCode = _this.selectedState;
                                }
                                else {
                                    var stateDetails = void 0;
                                    if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, "declarations[0].info[" + childConfig.code + "]")) {
                                        stateDetails = _this.userProfile.declarations[0].info[childConfig.code];
                                    }
                                    stateCode = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](stateDetails, 'id');
                                }
                            }
                            else if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](childConfig, 'templateOptions["dataSrc"].params.id') === 'district') {
                                var districtDetails = void 0;
                                if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.userProfile, "declarations[0].info[" + childConfig.code + "]")) {
                                    districtDetails = _this.userProfile.declarations[0].info[childConfig.code];
                                }
                            }
                            return childConfig;
                        }
                        _this.assignDefaultValue(childConfig);
                        if (childConfig.asyncValidation) {
                            childConfig = _this.assignDefaultValue(childConfig);
                            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](childConfig, 'asyncValidation.marker') === 'MOBILE_OTP_VALIDATION') {
                                childConfig.asyncValidation.asyncValidatorFactory = _this.mobileVerificationAsyncFactory(childConfig, _this.userProfile, childConfig.default);
                            }
                            else if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](childConfig, 'asyncValidation.marker') === 'EMAIL_OTP_VALIDATION') {
                                childConfig.asyncValidation.asyncValidatorFactory = _this.emailVerificationAsyncFactory(childConfig, _this.userProfile, childConfig.default);
                            }
                            return childConfig;
                        }
                        return childConfig;
                    });
                    break;
                case 'tnc':
                    if (_this.formAction === 'update') {
                        config = undefined;
                    }
                    break;
            }
            return config;
        }).filter(function (formData) { return formData; });
    };
    SubmitTeacherDetailsComponent.prototype.assignDefaultValue = function (childConfig) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.userProfile, "declarations[0].info[" + childConfig.code + "]")) {
            childConfig.default = this.userProfile.declarations[0].info[childConfig.code];
        }
        if (this.formAction === 'submit') {
            if (childConfig.code === 'declared-phone') {
                childConfig.default = this.userProfile['maskedPhone'];
            }
            if (childConfig.code === 'declared-email') {
                childConfig.default = this.userProfile['maskedEmail'];
            }
        }
        return childConfig;
    };
    SubmitTeacherDetailsComponent.prototype.mobileVerificationAsyncFactory = function (formElement, profile, initialMobileVal) {
        var _this = this;
        return function (marker, trigger) {
            if (marker === 'MOBILE_OTP_VALIDATION') {
                return function (control) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        if ((control && !control.value) || (initialMobileVal && initialMobileVal === control.value)) {
                            return [2, null];
                        }
                        return [2, new Promise(function (resolve) {
                                if (trigger) {
                                    var that_1 = _this;
                                    _this.otpConfirm = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                                    trigger.onclick = (function () { return __awaiter(_this, void 0, void 0, function () {
                                        var isOtpVerified, e_1;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    that_1.generateOTP('declared-phone', control.value);
                                                    return [4, that_1.otpConfirm.toPromise()];
                                                case 1:
                                                    isOtpVerified = _a.sent();
                                                    if (isOtpVerified) {
                                                        resolve(null);
                                                    }
                                                    else {
                                                        resolve({ asyncValidation: 'error' });
                                                    }
                                                    return [3, 3];
                                                case 2:
                                                    e_1 = _a.sent();
                                                    console.error(e_1);
                                                    return [3, 3];
                                                case 3: return [2];
                                            }
                                        });
                                    }); }).bind(_this);
                                    return;
                                }
                                resolve(null);
                            })];
                    });
                }); };
            }
            return function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2, null];
            }); }); };
        };
    };
    SubmitTeacherDetailsComponent.prototype.emailVerificationAsyncFactory = function (formElement, profile, initialEmailVal) {
        var _this = this;
        return function (marker, trigger) {
            if (marker === 'EMAIL_OTP_VALIDATION') {
                return function (control) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        if ((control && !control.value) || (initialEmailVal && initialEmailVal === control.value)) {
                            return [2, null];
                        }
                        return [2, new Promise(function (resolve) {
                                if (trigger) {
                                    var that_2 = _this;
                                    _this.otpConfirm = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                                    trigger.onclick = (function () { return __awaiter(_this, void 0, void 0, function () {
                                        var isOtpVerified, e_2;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    that_2.generateOTP('declared-email', control.value);
                                                    return [4, that_2.otpConfirm.toPromise()];
                                                case 1:
                                                    isOtpVerified = _a.sent();
                                                    if (isOtpVerified) {
                                                        resolve(null);
                                                    }
                                                    else {
                                                        resolve({ asyncValidation: 'error' });
                                                    }
                                                    return [3, 3];
                                                case 2:
                                                    e_2 = _a.sent();
                                                    console.error(e_2);
                                                    return [3, 3];
                                                case 3: return [2];
                                            }
                                        });
                                    }); }).bind(_this);
                                    return;
                                }
                                resolve(null);
                            })];
                    });
                }); };
            }
            return function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2, null];
            }); }); };
        };
    };
    SubmitTeacherDetailsComponent.prototype.closeConsentPopUp = function () {
        this.showGlobalConsentPopUpSection = false;
        this.isglobalConsent = false;
        this.globalConsent = '';
    };
    SubmitTeacherDetailsComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue, declarations, declaredDetails, operation, tenantPersonaData, data;
            return __generator(this, function (_a) {
                if (!this.declaredLatestFormValue || !this.tenantPersonaLatestFormValue) {
                    this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.resourceService, 'messages.fmsg.m0051'));
                    return [2];
                }
                formValue = this.declaredLatestFormValue.children.externalIds;
                declarations = [];
                declaredDetails = this.declaredLatestFormValue.children && this.declaredLatestFormValue.children.externalIds;
                operation = '';
                if (!this.userProfile.declarations || !lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.userProfile, 'declarations.length')) {
                    operation = 'add';
                }
                else if (this.tenantPersonaLatestFormValue.tenant === this.userProfile.declarations[0].orgId) {
                    operation = 'edit';
                }
                else if (this.tenantPersonaLatestFormValue.tenant !== this.userProfile.declarations[0].orgId) {
                    tenantPersonaData = { persona: this.userProfile.declarations[0].persona, tenant: this.userProfile.declarations[0].orgId };
                    declarations.push(this.getDeclarationReqObject('remove', this.userProfile.declarations[0].info, tenantPersonaData));
                    operation = 'add';
                }
                declarations.push(this.getDeclarationReqObject(operation, declaredDetails, this.tenantPersonaLatestFormValue));
                data = { declarations: declarations };
                this.getProfileInfo(declarations);
                this.updateProfile(data);
                if (this.formAction === 'submit') {
                    this.updateUserConsent(declarations[0].orgId);
                }
                else if (this.formAction === 'update' && this.isTenantChanged) {
                    this.updateUserConsent(declarations[1].orgId, this.previousOrgId);
                }
                return [2];
            });
        });
    };
    SubmitTeacherDetailsComponent.prototype.updateUserConsent = function (currentOrgId, previousOrgId) {
        var _this = this;
        if (this.isTenantChanged && !!previousOrgId) {
            var requestFoRevoked = {
                status: _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2__["ConsentStatus"].REVOKED,
                userId: this.userService.userid,
                consumerId: previousOrgId,
                objectId: previousOrgId,
                objectType: 'Organisation'
            };
            this.csUserService.updateConsent(requestFoRevoked, { apiPath: '/learner/user/v1' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function (response) {
                if (response && response.consent) {
                    _this.isTenantChanged = false;
                    var requestForActive = {
                        status: _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2__["ConsentStatus"].ACTIVE,
                        userId: _this.userService.userid,
                        consumerId: currentOrgId,
                        objectId: currentOrgId,
                        objectType: 'Organisation'
                    };
                    _this.csUserService.updateConsent(requestForActive, { apiPath: '/learner/user/v1' })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.unsubscribe))
                        .subscribe(function () {
                        _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.smsg.dataSettingSubmitted'));
                    }, function (error) {
                        _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
                        console.error('Error while updating user consent', error);
                    });
                }
            }, function (error) {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
                console.error('Error while updating user consent', error);
            });
        }
        else {
            var request = {
                status: _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_2__["ConsentStatus"].ACTIVE,
                userId: this.userService.userid,
                consumerId: currentOrgId,
                objectId: currentOrgId,
                objectType: 'Organisation'
            };
            this.csUserService.updateConsent(request, { apiPath: '/learner/user/v1' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function () {
                _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.smsg.dataSettingSubmitted'));
            }, function (error) {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](_this.resourceService, 'messages.emsg.m0005'));
                console.error('Error while updating user consent', error);
            });
        }
    };
    SubmitTeacherDetailsComponent.prototype.getProfileInfo = function (declarations) {
        this.profileInfo = {
            emailId: '',
            phone: '',
            schoolId: '',
            schoolName: ''
        };
        for (var _i = 0, _a = Object.entries(declarations[0].info); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            switch (key) {
                case 'declared-email':
                    this.profileInfo['emailId'] = value;
                    break;
                case 'declared-phone':
                    this.profileInfo['phone'] = value;
                    break;
                case 'declared-school-udise-code':
                    this.profileInfo['schoolId'] = value;
                    break;
                case 'declared-school-name':
                    this.profileInfo['schoolName'] = value;
                    break;
            }
        }
    };
    SubmitTeacherDetailsComponent.prototype.getDeclarationReqObject = function (operation, declaredDetails, tenantPersonaDetails) {
        return {
            operation: operation,
            userId: this.userProfile.userId,
            orgId: tenantPersonaDetails.tenant,
            persona: tenantPersonaDetails.persona,
            info: declaredDetails
        };
    };
    SubmitTeacherDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.modal, 'deny')) {
            this.modal.deny();
        }
    };
    return SubmitTeacherDetailsComponent;
}());



/***/ }),

/***/ "cTpC":
/*!*******************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/create-user/create-user.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_CreateUserComponent, View_CreateUserComponent_0, View_CreateUserComponent_Host_0, CreateUserComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CreateUserComponent", function() { return RenderType_CreateUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateUserComponent_0", function() { return View_CreateUserComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateUserComponent_Host_0", function() { return View_CreateUserComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponentNgFactory", function() { return CreateUserComponentNgFactory; });
/* harmony import */ var _create_user_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user.component.scss.shim.ngstyle */ "R4aK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/shared/components/app-loader/app-loader.component.ngfactory */ "meMm");
/* harmony import */ var _modules_shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/shared/components/app-loader/app-loader.component */ "ASwK");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/core/directives/online-only/online-only.directive */ "qgzf");
/* harmony import */ var _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _modules_telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _create_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-user.component */ "1/vJ");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/profile/profile.service */ "gcPr");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../modules/core/services/org-details/org-details.service */ "wUTf");
/* harmony import */ var _modules_core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../modules/core/services/channel/channel.service */ "Rr+m");
/* harmony import */ var _modules_core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../modules/core/services/framework/framework.service */ "YAhW");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../modules/core/services/form/form.service */ "9dCP");
/* harmony import */ var _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../modules/shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _modules_core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../modules/core/services/tnc/tnc.service */ "2lf2");
/* harmony import */ var _modules_core_services_managed_user_managed_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../modules/core/services/managed-user/managed-user.service */ "29lr");



























var styles_CreateUserComponent = [_create_user_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CreateUserComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CreateUserComponent, data: {} });

function View_CreateUserComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ui container py-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-loader", [], null, null, null, _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppLoaderComponent_0"], _modules_shared_components_app_loader_app_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_shared_components_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_CreateUserComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "label", [["class", "font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "sb-color-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateUserComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "font-weight-normal orange text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.nameRequired))); _ck(_v, 1, 0, currVal_0); }); }
function View_CreateUserComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "twelve wide column p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "d-flex fields-selection p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "sb-field field-focus mb-8 w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "input", [["aria-label", "Enter Name"], ["class", "sb-form-control"], ["type", "text"]], [[8, "name", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { "orange-border": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [["class", "fsmall my-8 text-left line-height-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", "\u200E"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "sb-form-control"; var currVal_10 = _ck(_v, 5, 0, (_co.userDetailsForm.controls[_v.parent.context.$implicit.code].touched && _co.userDetailsForm.controls[_v.parent.context.$implicit.code].errors)); _ck(_v, 4, 0, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.code, ""); _ck(_v, 8, 0, currVal_11); var currVal_12 = !(_co.userDetailsForm.controls[_v.parent.context.$implicit.code].touched && _co.userDetailsForm.controls[_v.parent.context.$implicit.code].errors); _ck(_v, 12, 0, currVal_12); var currVal_13 = (_co.userDetailsForm.controls[_v.parent.context.$implicit.code].touched && _co.userDetailsForm.controls[_v.parent.context.$implicit.code].errors); _ck(_v, 14, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.code, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.description, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_14 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.preferenceCanBeUpdated))); _ck(_v, 16, 0, currVal_14); }); }
function View_CreateUserComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ui stackable grid m-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.inputType === "input") && (_v.context.$implicit.visible === true)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CreateUserComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "user-profile-box p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "d-flex flex-jc-space-between py-16 px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["aria-level", "1"], ["class", "user-profile-box__title"], ["role", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "twelve wide column p-0 mx-16 mb-8 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "profile-icon"], ["src", "../../assets/images/profile-icon.svg"], ["width", "88px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "form", [["class", "sb-form mb-16 px-16"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "div", [["class", "user-profile-box__actions pb-16 px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "button", [["appOnlineOnly", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.onSubmitForm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { "sb-btn-disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onCancel() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" ", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.userDetailsForm; _ck(_v, 8, 0, currVal_8); var currVal_9 = _co.formData; _ck(_v, 12, 0, currVal_9); var currVal_11 = "sb-btn sb-btn-normal sb-btn-primary"; var currVal_12 = _ck(_v, 16, 0, !_co.enableSubmitBtn); _ck(_v, 15, 0, currVal_11, currVal_12); var currVal_13 = _co.submitInteractEdata; _ck(_v, 17, 0, currVal_13); _ck(_v, 18, 0); var currVal_15 = _co.submitCancelInteractEdata; _ck(_v, 21, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.createUser))); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = !_co.enableSubmitBtn; _ck(_v, 14, 0, currVal_10); var currVal_14 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addUser))); _ck(_v, 19, 0, currVal_14); var currVal_16 = ((_co.resourceService == null) ? null : _co.resourceService.frmelmnts.btn.cancel); _ck(_v, 22, 0, currVal_16); }); }
function View_CreateUserComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _modules_telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_15__["TelemetryImpressionDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "content-header__content w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateUserComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 1, 0, currVal_0); var currVal_1 = "relative position mt-0"; var currVal_2 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_4 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_7 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 17, 0, currVal_7); var currVal_8 = _co.showLoader; _ck(_v, 19, 0, currVal_8); var currVal_9 = !_co.showLoader; _ck(_v, 21, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 11, 0, currVal_5); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.createUser))); _ck(_v, 15, 0, currVal_6); }); }
function View_CreateUserComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-create-user", [], null, null, null, View_CreateUserComponent_0, RenderType_CreateUserComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_user_component__WEBPACK_IMPORTED_MODULE_16__["CreateUserComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_17__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_19__["OrgDetailsService"], _modules_core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_20__["ChannelService"], _modules_core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_21__["FrameworkService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_22__["UtilService"], _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_23__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_24__["NavigationHelperService"], _modules_core_services_tnc_tnc_service__WEBPACK_IMPORTED_MODULE_25__["TncService"], _modules_core_services_managed_user_managed_user_service__WEBPACK_IMPORTED_MODULE_26__["ManagedUserService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CreateUserComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-create-user", _create_user_component__WEBPACK_IMPORTED_MODULE_16__["CreateUserComponent"], View_CreateUserComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "e2/c":
/*!*****************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-page/profile-page.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.content-header__title[_ngcontent-%COMP%] {\n  color: var(--primary-400);\n  font-size: 1.125rem;\n}\n\n.font-w-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n\n.color-2[_ngcontent-%COMP%] {\n  color: var(--rc-007AFF) !important;\n}\n\n.profile-bg-c-3[_ngcontent-%COMP%] {\n  background: var(--sbt-page-header-bg) !important;\n}\n.profile-bg-c-4[_ngcontent-%COMP%] {\n  background: var(--sb-profile-bg-c-4) !important;\n  color: var(--black);\n}\n@media (max-width: 991px) {\n  .profile-bg-c-4[_ngcontent-%COMP%] {\n    margin: 0 2% 1.5rem 2%;\n    border-radius: 1.5rem;\n  }\n}\n\n.max-w-300[_ngcontent-%COMP%] {\n  max-width: 18.75rem !important;\n}\n.max-w-400[_ngcontent-%COMP%] {\n  max-width: 25rem !important;\n}\n.profile-label-container[_ngcontent-%COMP%] {\n  max-width: 37.5rem !important;\n}\n.profile-label-container[_ngcontent-%COMP%]   .ui.basic.label[_ngcontent-%COMP%]:hover {\n  border: 0.0625rem solid var(--rc-fdfdfd) !important;\n}\n@media only screen and (max-width: 767px) {\n  .profile-label-container[_ngcontent-%COMP%] {\n    max-width: 12.5rem !important;\n  }\n\n  .m-responsive-flex-dc[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .m-responsive-mt-15[_ngcontent-%COMP%] {\n    margin-top: 0.9375rem;\n  }\n}\n.text-warm-grey[_ngcontent-%COMP%] {\n  color: var(--rc-9b9b9b);\n}\n.name-info[_ngcontent-%COMP%] {\n  background-color: var(--gray-400);\n  -webkit-mask-image: url('dist/info-icon.svg');\n  mask-image: url('dist/info-icon.svg');\n  -webkit-mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  mask-position: 50% 50%;\n  mask-repeat: no-repeat;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-top: 0.1875rem;\n  margin-left: 0.3125rem;\n  display: inline-block;\n}\n  .ui.popup .arrow {\n  display: none;\n}\n.ui.semi-circular.dodger-blue.basic.label[_ngcontent-%COMP%] {\n  border-radius: 1.15625rem;\n  font-size: 1.16rem;\n  padding: 0.5rem 1rem;\n  color: var(--primary-color);\n}\n.ui.semi-circular.dodger-blue.basic.label[_ngcontent-%COMP%]:hover {\n  border: 0;\n}\n.ui.semi-circular.dodger-blue.basic.label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ui.semi-circular.update.basic.label[_ngcontent-%COMP%], .ui.semi-circular.basic.label[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary-color);\n  border-radius: 1.15625rem;\n  font-size: 1.16rem;\n  padding: 0.5rem 1rem;\n  color: var(--rc-9b9b9b);\n  background: var(--sb-profile-page-basic-label-bg);\n}\n.ui.label[_ngcontent-%COMP%]    > .recovery-img[_ngcontent-%COMP%] {\n  background-color: var(--rc-9b9b9b);\n  -webkit-mask-image: url(/assets/images/Recovery.svg) no-repeat 50% 50%;\n  -webkit-mask: url(/assets/images/Recovery.svg) no-repeat 50% 50%;\n  mask: url(/assets/images/Recovery.svg) no-repeat 50% 50%;\n  -webkit-mask-size: cover;\n  mask-size: cover;\n  height: 1rem;\n  width: 1rem;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  width: 6.125rem;\n  height: 6.125rem;\n  margin: 0 auto;\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar-tickmark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  left: 67%;\n}\n.my-avatar.verified[_ngcontent-%COMP%]     .avatar-content {\n  border: 0.0625rem solid var(--secondary-color) !important;\n}\n@media (max-width: 767px) {\n  .avatar-tickmark[_ngcontent-%COMP%] {\n    left: 67%;\n  }\n}\n.ui.label.dodger-blue[_ngcontent-%COMP%]    > .recovery-img[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.school-id-section[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.sb-btn-border[_ngcontent-%COMP%] {\n  border-radius: 2.5rem;\n  text-transform: none;\n}\n.profile-user-label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.status-progress[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.status-completed[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.no-text-transform[_ngcontent-%COMP%] {\n  text-transform: unset;\n}\n.self-declared-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.sb-certificate-trained[_ngcontent-%COMP%] {\n  border: 0.03125rem solid var(--gray-100);\n  border-radius: 0.25rem;\n  background-color: var(--sb-profile-certificate-bg);\n  margin: 0 auto;\n}\n.sb-certificate-trained[_ngcontent-%COMP%]   .sb-ct-list[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n@media (max-width: 991px) {\n  .sb-certificate-trained[_ngcontent-%COMP%]   .sb-ct-list[_ngcontent-%COMP%] {\n    position: relative;\n    padding-right: 0.5rem;\n    flex-direction: column;\n  }\n}\n.sb-course-progress-status-label[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem 0.5rem 0 0;\n  justify-content: space-between;\n  display: flex;\n  padding: 0.5rem 1rem;\n}\n.sb-profile-page-container[_ngcontent-%COMP%]   .ui.segment[_ngcontent-%COMP%] {\n  background: var(--sb-profile-page-container);\n}\n@media (max-width: 991px) {\n  .content-preference[_ngcontent-%COMP%] {\n    padding: 0 2%;\n  }\n  .content-preference__info[_ngcontent-%COMP%] {\n    background: var(--sb-profile-bg-c-4);\n    padding: 1rem 0;\n    border-radius: 1.5rem;\n    width: 100%;\n    color: var(--black);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGlucy9fbWVkaWEtcXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNwVEE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBbU5GO0FBak5BLFVBQUE7QUFDQTtFQUNFLDRCQUFBO0FBb05GO0FBak5BLFdBQUE7QUFDQTtFQUNFLGtDQUFBO0FBb05GO0FBak5BLDhCQUFBO0FBQ0E7RUFDRSxnREFBQTtBQW9ORjtBQWpOQTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7QUFvTkY7QUNuTEk7RUQ5Qko7SUFFSSxzQkFBQTtJQUNBLHFCQUFBO0VBb05GO0FBQ0Y7QUFqTkEsVUFBQTtBQUNBO0VBQ0UsOEJBQUE7QUFvTkY7QUFqTkE7RUFDRSwyQkFBQTtBQW9ORjtBQWpOQTtFQUNFLDZCQUFBO0FBb05GO0FBbE5FO0VBQ0UsbURBQUE7QUFvTko7QUFoTkE7RUFDRTtJQUNFLDZCQUFBO0VBbU5GOztFQWhOQTtJQUNFLHNCQUFBO0VBbU5GOztFQWhOQTtJQUNFLHFCQUFBO0VBbU5GO0FBQ0Y7QUFoTkE7RUFDRSx1QkFBQTtBQWtORjtBQS9NQTtFQUNFLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBa05GO0FBN01JO0VBQ0UsYUFBQTtBQWdOTjtBQXpNQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FBNE1GO0FBMU1FO0VBQ0UsU0FBQTtBQTRNSjtBQXpNRTtFQUNFLFNBQUE7QUEyTUo7QUF2TUE7O0VBRUUsc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0FBME1GO0FBdk1BO0VBQ0Usa0NBQUE7RUFDQSxzRUFBQTtFQUNBLGdFQUFBO0VBQ0Esd0RBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEwTUY7QUF2TUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBME1GO0FBeE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUEwTUo7QUF0TUE7RUFDRSx5REFBQTtBQXlNRjtBQ2xTSTtFRDZGRjtJQUNFLFNBQUE7RUF5TUY7QUFDRjtBQXRNQTtFQUNFLHNDQUFBO0FBd01GO0FBck1BO0VBQ0UsbUJBQUE7QUF3TUY7QUFyTUE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBd01GO0FBck1BO0VBQ0UsZUFBQTtBQXdNRjtBQXJNQTtFQUNFLDJCQUFBO0FBd01GO0FBck1BO0VBQ0UsNkJBQUE7QUF3TUY7QUFyTUE7RUFDRSxxQkFBQTtBQXdNRjtBQXJNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUF3TUY7QUFyTUE7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxjQUFBO0FBd01GO0FBdE1FO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBd01KO0FDdFZJO0VEMElGO0lBT0ksa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0VBeU1KO0FBQ0Y7QUFyTUE7RUFFRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQXVNRjtBQWpNRTtFQUNFLDRDQUFBO0FBbU1KO0FDeFdJO0VEeUtKO0lBRUksYUFBQTtFQWtNRjtFQWpNRTtJQUNFLG9DQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBbU1KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbHVnaW5zL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGlucy9taXhpbnNcIjtcblxuLmNvbnRlbnQtaGVhZGVyX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4vKiBmb250cyAqL1xuLmZvbnQtdy1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLyogY29sb3JzICovXG4uY29sb3ItMiB7XG4gIGNvbG9yOiB2YXIoLS1yYy0wMDdBRkYpICFpbXBvcnRhbnQ7XG59XG5cbi8qIHByb2ZpbGUgcGFnZSBjb2xvciBwYWxhdGUgKi9cbi5wcm9maWxlLWJnLWMtMyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNidC1wYWdlLWhlYWRlci1iZykgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtYmctYy00IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItcHJvZmlsZS1iZy1jLTQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOnZhcigtLWJsYWNrKTtcbn1cblxuLnByb2ZpbGUtYmctYy00IHtcbiAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhtZCkge1xuICAgIG1hcmdpbjogMCAyJSBjYWxjdWxhdGVSZW0oMjRweCkgMiU7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDI0cHgpO1xuICB9XG59XG5cbi8qIHdpZHRoICovXG4ubWF4LXctMzAwIHtcbiAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oMzAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgtdy00MDAge1xuICBtYXgtd2lkdGg6IGNhbGN1bGF0ZVJlbSg0MDBweCkgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtbGFiZWwtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oNjAwcHgpICFpbXBvcnRhbnQ7XG5cbiAgLnVpLmJhc2ljLmxhYmVsOmhvdmVyIHtcbiAgICBib3JkZXI6IGNhbGN1bGF0ZVJlbSgxcHgpIHNvbGlkIHZhcigtLXJjLWZkZmRmZCkgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcm9maWxlLWxhYmVsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiBjYWxjdWxhdGVSZW0oMjAwcHgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1yZXNwb25zaXZlLWZsZXgtZGMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubS1yZXNwb25zaXZlLW10LTE1IHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjdWxhdGVSZW0oMTVweCk7XG4gIH1cbn1cblxuLnRleHQtd2FybS1ncmV5IHtcbiAgY29sb3I6IHZhcigtLXJjLTliOWI5Yik7XG59XG5cbi5uYW1lLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW5mby1pY29uLnN2Zyk7XG4gIG1hc2staW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2luZm8taWNvbi5zdmcpO1xuICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hc2stc2l6ZTogY29udGFpbjtcbiAgbWFzay1wb3NpdGlvbjogNTAlIDUwJTtcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IGNhbGN1bGF0ZVJlbSgyMHB4KTtcbiAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMjBweCk7XG4gIG1hcmdpbi10b3A6IGNhbGN1bGF0ZVJlbSgzcHgpO1xuICBtYXJnaW4tbGVmdDogY2FsY3VsYXRlUmVtKDVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuOjpuZy1kZWVwIHtcbiAgLnVpLnBvcHVwIHtcbiAgICAuYXJyb3cge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzo6bmVlZCB0byBtb3ZlIHRoaXMgdG8gc3R5bGVzIGNvbXBvbmVudChyaWdodCBub3cgdGhpcyBpcyBkb25lIHRvIGF2b2lkIHNoYWRvdyBET00pXG5cbi51aS5zZW1pLWNpcmN1bGFyLmRvZGdlci1ibHVlLmJhc2ljLmxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDE4LjVweCk7XG4gIGZvbnQtc2l6ZTogMS4xNnJlbTtcbiAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDhweCkgY2FsY3VsYXRlUmVtKDE2cHgpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLmljb24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4udWkuc2VtaS1jaXJjdWxhci51cGRhdGUuYmFzaWMubGFiZWwsXG4udWkuc2VtaS1jaXJjdWxhci5iYXNpYy5sYWJlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oMTguNXB4KTtcbiAgZm9udC1zaXplOiAxLjE2cmVtO1xuICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oOHB4KSBjYWxjdWxhdGVSZW0oMTZweCk7XG4gIGNvbG9yOiB2YXIoLS1yYy05YjliOWIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1wcm9maWxlLXBhZ2UtYmFzaWMtbGFiZWwtYmcpO1xufVxuXG4udWkubGFiZWw+LnJlY292ZXJ5LWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJjLTliOWI5Yik7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL1JlY292ZXJ5LnN2Zykgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIC13ZWJraXQtbWFzazogdXJsKC9hc3NldHMvaW1hZ2VzL1JlY292ZXJ5LnN2Zykgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIG1hc2s6IHVybCgvYXNzZXRzL2ltYWdlcy9SZWNvdmVyeS5zdmcpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XG4gIG1hc2stc2l6ZTogY292ZXI7XG4gIGhlaWdodDogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICB3aWR0aDogY2FsY3VsYXRlUmVtKDE2cHgpO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjdWxhdGVSZW0oOThweCk7XG4gIGhlaWdodDogY2FsY3VsYXRlUmVtKDk4cHgpO1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuYXZhdGFyLXRpY2ttYXJrIHtcbiAgICB3aWR0aDogY2FsY3VsYXRlUmVtKDMycHgpO1xuICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDMycHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA2NyU7XG4gIH1cbn1cblxuLm15LWF2YXRhci52ZXJpZmllZCA6Om5nLWRlZXAgLmF2YXRhci1jb250ZW50IHtcbiAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMXB4KSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbkBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcbiAgLmF2YXRhci10aWNrbWFyayB7XG4gICAgbGVmdDogNjclO1xuICB9XG59XG5cbi51aS5sYWJlbC5kb2RnZXItYmx1ZT4ucmVjb3ZlcnktaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5zY2hvb2wtaWQtc2VjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5zYi1idG4tYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDQwcHgpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnByb2ZpbGUtdXNlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDMycHgpO1xufVxuXG4uc3RhdHVzLXByb2dyZXNzIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uc3RhdHVzLWNvbXBsZXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubm8tdGV4dC10cmFuc2Zvcm0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG59XG5cbi5zZWxmLWRlY2xhcmVkLXRpdGxle1xuICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zYi1jZXJ0aWZpY2F0ZS10cmFpbmVkIHtcbiAgYm9yZGVyOiBjYWxjdWxhdGVSZW0oMC41cHgpIHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNiLXByb2ZpbGUtY2VydGlmaWNhdGUtYmcpO1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuc2ItY3QtbGlzdCB7XG4gICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhtZCkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsY3VsYXRlUmVtKDhweCk7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5zYi1jb3Vyc2UtcHJvZ3Jlc3Mtc3RhdHVzLWxhYmVse1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOmNhbGN1bGF0ZVJlbSg4cHgpIGNhbGN1bGF0ZVJlbSg4cHgpIDAgMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oOHB4KSBjYWxjdWxhdGVSZW0oMTZweCk7XG4gIC5saXN0LWl0ZW1zX19pdGVte1xuICAgIC8vIGNvbG9yOiB2YXIoLS1zYi1jb3Vyc2UtcHJvZ3Jlc3Mtc3RhdHVzLWxhYmVsKTtcbiAgfVxufVxuLnNiLXByb2ZpbGUtcGFnZS1jb250YWluZXJ7XG4gIC51aS5zZWdtZW50e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLXByb2ZpbGUtcGFnZS1jb250YWluZXIpO1xuICB9XG59XG5cbi5jb250ZW50LXByZWZlcmVuY2Uge1xuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KG1kKSB7XG4gICAgcGFkZGluZzogMCAyJTtcbiAgICAmX19pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLXByb2ZpbGUtYmctYy00KTtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSgxNnB4KSAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDI0cHgpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIH1cbiAgfVxufSIsIi8vXG4vLyAgTUVESUEgUVVFUklFU1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDU3NnB4LFxuICBzbTogNzY4cHgsXG4gIG1kOiA5OTJweCxcbiAgbGc6IDEyODBweCxcbiAgeGw6IDE0NDBweCxcbiAgeHhsOiAxNjAwcHgsXG4gIHh4eGw6IDE5MDBweFxuKTtcblxuXG4vL1xuLy8gIFJFU1BPTkQgQUJPVkVcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XG5AbWl4aW4gcmVzcG9uZC1hYm92ZSgkYnJlYWtwb2ludCkge1xuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICBcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG5cbi8vXG4vLyAgUkVTUE9ORCBCRUxPV1xuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcblxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xuICB9XG59XG5cblxuLy9cbi8vICBSRVNQT05EIEJFVFdFRU5cbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG5cbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XG5cbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG5cbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIFxuICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXG4gIH0gQGVsc2Uge1xuXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XG5cbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICB9XG5cbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcblxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgIH1cbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "g1qI":
/*!*******************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/choose-user/choose-user.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_ChooseUserComponent, View_ChooseUserComponent_0, View_ChooseUserComponent_Host_0, ChooseUserComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChooseUserComponent", function() { return RenderType_ChooseUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChooseUserComponent_0", function() { return View_ChooseUserComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChooseUserComponent_Host_0", function() { return View_ChooseUserComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUserComponentNgFactory", function() { return ChooseUserComponentNgFactory; });
/* harmony import */ var _choose_user_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-user.component.scss.shim.ngstyle */ "ydsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/core/directives/online-only/online-only.directive */ "qgzf");
/* harmony import */ var _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _choose_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./choose-user.component */ "Ovfy");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _modules_core_services_managed_user_managed_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/core/services/managed-user/managed-user.service */ "29lr");
/* harmony import */ var _modules_core_services_course_course_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../modules/core/services/course/course.service */ "hK/R");
/* harmony import */ var _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../modules/shared/services/layoutconfig/layout.service */ "8mYS");





















var styles_ChooseUserComponent = [_choose_user_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChooseUserComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChooseUserComponent, data: {} });

function View_ChooseUserComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _modules_shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_2__["InterpolatePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "content-header__content w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 23, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 21, "div", [["class", "user-profile-box my-32 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "div", [["class", "d-flex flex-jc-space-between px-16 pt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "div", [["class", "user-profile-box__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "button", [["appOnlineOnly", ""], ["class", "sb-btn sb-btn-sm sb-btn-outline-secondary sb-left-icon-btn w-100 mt-16 mb-24"], ["tabindex", "0"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateToCreateUser() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_4__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "chevron plus icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "div", [["class", "px-16 mb-16 member-list-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "sb-member-list", [], null, [[null, "cardClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cardClick" === en)) {
        var pd_0 = (_co.selectUser($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MemberListComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MemberListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_9__["MemberListComponent"], [], { memberList: [0, "memberList"], isMenu: [1, "isMenu"], layoutConfig: [2, "layoutConfig"] }, { cardClick: "cardClick" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 8, "div", [["class", "user-profile-box__actions pb-16 px-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "button", [["appOnlineOnly", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal"], ["tabindex", "0"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.switchUser() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](34, { "sb-btn-disabled": 0, "sb-btn-primary": 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_10__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_4__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary mr-8"], ["tabindex", "0"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeSwitchUser() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "relative position mt-0"; var currVal_1 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_6 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 17, 0, currVal_6); _ck(_v, 25, 0); var currVal_9 = _co.userList; var currVal_10 = false; var currVal_11 = _co.memberCardConfig; _ck(_v, 30, 0, currVal_9, currVal_10, currVal_11); var currVal_13 = "sb-btn sb-btn-normal"; var currVal_14 = _ck(_v, 34, 0, !_co.selectedUser, _co.selectedUser); _ck(_v, 33, 0, currVal_13, currVal_14); var currVal_15 = _co.submitInteractEdata; _ck(_v, 35, 0, currVal_15); _ck(_v, 36, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 10, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.useInstanceAs)), "{instance}", _co.instance)); _ck(_v, 14, 0, currVal_5); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.useInstanceAs)), "{instance}", _co.instance)); _ck(_v, 21, 0, currVal_7); var currVal_8 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addUser)); _ck(_v, 27, 0, currVal_8); var currVal_12 = !_co.selectedUser; _ck(_v, 32, 0, currVal_12); var currVal_16 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.switchUser)); _ck(_v, 37, 0, currVal_16); var currVal_17 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel)); _ck(_v, 39, 0, currVal_17); }); }
function View_ChooseUserComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-choose-user", [], null, null, null, View_ChooseUserComponent_0, RenderType_ChooseUserComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _choose_user_component__WEBPACK_IMPORTED_MODULE_13__["ChooseUserComponent"], [_modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_15__["NavigationHelperService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"], _modules_core_services_managed_user_managed_user_service__WEBPACK_IMPORTED_MODULE_18__["ManagedUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _modules_core_services_course_course_service__WEBPACK_IMPORTED_MODULE_19__["CoursesService"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_20__["LayoutService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChooseUserComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-choose-user", _choose_user_component__WEBPACK_IMPORTED_MODULE_13__["ChooseUserComponent"], View_ChooseUserComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "i4Li":
/*!*********************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-page/profile-page.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_ProfilePageComponent, View_ProfilePageComponent_0, View_ProfilePageComponent_Host_0, ProfilePageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProfilePageComponent", function() { return RenderType_ProfilePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfilePageComponent_0", function() { return View_ProfilePageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfilePageComponent_Host_0", function() { return View_ProfilePageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponentNgFactory", function() { return ProfilePageComponentNgFactory; });
/* harmony import */ var _profile_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.component.scss.shim.ngstyle */ "e2/c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/core/directives/online-only/online-only.directive */ "qgzf");
/* harmony import */ var _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/shared/services/connection-service/connection.service */ "C0Yv");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _profile_badge_profile_badge_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../profile-badge/profile-badge.component.ngfactory */ "/t99");
/* harmony import */ var _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../profile-badge/profile-badge.component */ "/927");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_core_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../modules/core/services/badges/badges.service */ "zM1L");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _modules_content_search_components_page_section_page_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../modules/content-search/components/page-section/page-section.component.ngfactory */ "ViCK");
/* harmony import */ var _modules_content_search_components_page_section_page_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../modules/content-search/components/page-section/page-section.component */ "4Dwl");
/* harmony import */ var _modules_telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-impression/telemetry-impression.directive */ "xdOv");
/* harmony import */ var _node_modules_ngx_avatar_ngx_avatar_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-avatar/ngx-avatar.ngfactory */ "tx0H");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-avatar */ "UTQ3");
/* harmony import */ var _modules_shared_feature_components_profile_framework_popup_profile_framework_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/profile-framework-popup/profile-framework-popup.component.ngfactory */ "Lg30");
/* harmony import */ var _modules_shared_feature_components_profile_framework_popup_profile_framework_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/profile-framework-popup/profile-framework-popup.component */ "B1ZI");
/* harmony import */ var _modules_core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../modules/core/services/framework/framework.service */ "YAhW");
/* harmony import */ var _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../modules/core/services/form/form.service */ "9dCP");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-cache-service/dist/src/services/cache.service */ "Ol50");
/* harmony import */ var ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _modules_core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../modules/core/services/channel/channel.service */ "Rr+m");
/* harmony import */ var _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../modules/core/services/org-details/org-details.service */ "wUTf");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../modules/shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../modules/shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _update_contact_details_update_contact_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../update-contact-details/update-contact-details.component.ngfactory */ "RBT8");
/* harmony import */ var _update_contact_details_update_contact_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../update-contact-details/update-contact-details.component */ "L5X7");
/* harmony import */ var _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../modules/core/services/otp/otp.service */ "4Np/");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../services/profile/profile.service */ "gcPr");
/* harmony import */ var _location_components_location_selection_location_selection_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../location/components/location-selection/location-selection.component.ngfactory */ "ndVD");
/* harmony import */ var _location_components_location_selection_location_selection_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../location/components/location-selection/location-selection.component */ "ie3F");
/* harmony import */ var _location_services_location_location_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../location/services/location/location.service */ "Y01d");
/* harmony import */ var _modules_core_services_device_register_device_register_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../modules/core/services/device-register/device-register.service */ "bj+0");
/* harmony import */ var _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../modules/shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _modules_shared_components_full_page_loader_full_page_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../../modules/shared/components/full-page-loader/full-page-loader.component.ngfactory */ "12xc");
/* harmony import */ var _modules_shared_components_full_page_loader_full_page_loader_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../../modules/shared/components/full-page-loader/full-page-loader.component */ "JicZ");
/* harmony import */ var _account_recovery_info_account_recovery_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../account-recovery-info/account-recovery-info.component.ngfactory */ "sAMZ");
/* harmony import */ var _account_recovery_info_account_recovery_info_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../account-recovery-info/account-recovery-info.component */ "ajxR");
/* harmony import */ var _modules_shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../../modules/shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _modules_shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../../modules/shared/components/app-landing-section/app-landing-section.component.ngfactory */ "uRIy");
/* harmony import */ var _modules_shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../../modules/shared/components/app-landing-section/app-landing-section.component */ "yiMY");
/* harmony import */ var _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../../../modules/shared/services/layoutconfig/layout.service */ "8mYS");
/* harmony import */ var sb_svg2pdf__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! sb-svg2pdf */ "7C15");
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./profile-page.component */ "sILy");
/* harmony import */ var _modules_core_services_course_course_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../../modules/core/services/course/course.service */ "hK/R");
/* harmony import */ var _modules_core_services_search_search_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../../modules/core/services/search/search.service */ "9UN5");
/* harmony import */ var _modules_core_services_player_player_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../../modules/core/services/player/player.service */ "ikcW");
/* harmony import */ var _modules_core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../../modules/core/services/cert-reg/cert-reg.service */ "6auv");





























































var styles_ProfilePageComponent = [_profile_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProfilePageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProfilePageComponent, data: {} });

function View_ProfilePageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "img", [["alt", "certified"], ["class", "avatar-tickmark mat-tooltip-trigger"], ["role", "img"], ["src", "assets/images/avatar-tickmark.svg"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MAT_TOOLTIP_DEFAULT_OPTIONS"]]], { position: [0, "position"], message: [1, "message"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "right"; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.resourceService.frmelmnts.lbl.stateVerified, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ProfilePageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "ui dodger-blue basic label mr-15 mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mb-15 text-center profile-label-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ProfilePageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.roles, 0, _co.showMoreRolesLimit)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfilePageComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["+ ", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "chevron down icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.roles.length - _co.configService.appConfig.PROFILE.defaultShowMoreLimit); var currVal_1 = _co.resourceService.frmelmnts.lbl.more; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ProfilePageComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "chevron up icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.showLess; _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "fs-1 color-2 mb-8 font-w-bold cursor-pointer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showMoreRoles; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.showMoreRoles; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProfilePageComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "fs-1-5 font-w-bold d-flex mb-8 text-center org-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.orgDetails.orgName; _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mb-30 d-flex flex-jc-center m-responsive-flex-dc m-responsive-mt-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "fmedium text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "fmedium ml-5 font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.suborgname; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.userProfile.organisations[1].orgName; _ck(_v, 4, 0, currVal_1); }); }
function View_ProfilePageComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "fmedium font-w-bold pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _co.convertToString(_co.userProfile.framework.board), "CBSE", "CBSE/NCERT")); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.userProfile.framework; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.boards; _ck(_v, 2, 0, currVal_0); }); }
function View_ProfilePageComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.medium); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.userProfile.framework; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.medium; _ck(_v, 2, 0, currVal_0); }); }
function View_ProfilePageComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.gradeLevel); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.userProfile.framework; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.classes; _ck(_v, 2, 0, currVal_0); }); }
function View_ProfilePageComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.subject); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "d-flex flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.userProfile.framework; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.lbl.subjects; _ck(_v, 2, 0, currVal_0); }); }
function View_ProfilePageComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "d-flex flex-jc-center flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "max-w-400 computer only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "button", [["appOnlineOnly", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-primary sb-btn-normal my-16 sb-btn-border computer only"], ["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = ((_co.showEdit = !_co.showEdit) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.board); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.convertToString(_co.userProfile.framework.medium); _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.convertToString(_co.userProfile.framework.gradeLevel); _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.convertToString(_co.userProfile.framework.subject); _ck(_v, 9, 0, currVal_3); var currVal_5 = _co.myFrameworkEditEdata; _ck(_v, 11, 0, currVal_5); _ck(_v, 12, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](6, "", _co.resourceService.frmelmnts.lbl.edit, " ", _co.resourceService.frmelmnts.lbl.boards, ",", _co.resourceService.frmelmnts.lbl.medium, ",", _co.resourceService.frmelmnts.lbl.classes, ",", _co.convertToString(_co.userProfile.framework.gradeLevel), ",", _co.resourceService.frmelmnts.lbl.subjects, ""); _ck(_v, 10, 0, currVal_4); var currVal_6 = _co.resourceService.frmelmnts.lbl.edit; _ck(_v, 13, 0, currVal_6); }); }
function View_ProfilePageComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "fmedium font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.convertToString(_co.userProfile.framework.board), "CBSE", "CBSE/NCERT")); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.medium); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.gradeLevel); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "fmedium font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.convertToString(_co.userProfile.framework.subject); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "fnormal white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "fnormal font-w-bold mt-4 mb-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.label; _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.code === "declared-phone") ? "+91" : ""); var currVal_2 = _v.context.$implicit.value; _ck(_v, 4, 0, currVal_1, currVal_2); }); }
function View_ProfilePageComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "section", [["class", "pt-30 pb-30 d-flex flex-jc-center profile-bg-c-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "flex-ai-jc-center flex-dc text-center school-id-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "self-declared-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "my-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["appOnlineOnly", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-outline-primary sb-btn-border"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.navigate("/profile/submit-declaration", "update") !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.selfDeclaredInfo; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.updateTeacherDetailsInteractEdata; _ck(_v, 12, 0, currVal_4); _ck(_v, 13, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.selfDeclaredInfo)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.wishToShareDataWith))); _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_co.tenantInfo == null) ? null : _co.tenantInfo.label); _ck(_v, 7, 0, currVal_2); var currVal_5 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.update)); _ck(_v, 14, 0, currVal_5); }); }
function View_ProfilePageComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile-badge", [], null, null, null, _profile_badge_profile_badge_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ProfileBadgeComponent_0"], _profile_badge_profile_badge_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ProfileBadgeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profile_badge_profile_badge_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBadgeComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_core_services_badges_badges_service__WEBPACK_IMPORTED_MODULE_19__["BadgesService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ProfilePageComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "fs-1-7 font-w-bold pl-20 mobile only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " (", ")\u200E"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.scttl.contributions; var currVal_1 = _co.totalContributions; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ProfilePageComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "ui segments"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "ui segment computer only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "fs-1-7 pl-10 font-w-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " (", ")\u200E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "ui segment"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "regular slider pt-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "app-page-section", [], null, [[null, "visits"], [null, "playEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("visits" === en)) {
        var pd_0 = (_co.prepareVisits($event) !== false);
        ad = (pd_0 && ad);
    } if (("playEvent" === en)) {
        var pd_1 = (_co.openContent($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _modules_content_search_components_page_section_page_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_PageSectionComponent_0"], _modules_content_search_components_page_section_page_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_PageSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 770048, null, 0, _modules_content_search_components_page_section_page_section_component__WEBPACK_IMPORTED_MODULE_22__["PageSectionComponent"], [_modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { section: [0, "section"] }, { playEvent: "playEvent", visits: "visits" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { contents: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 8, 0, _co.contributions); _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceService.frmelmnts.scttl.contributions; var currVal_1 = _co.totalContributions; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_ProfilePageComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-items__item list-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 2), _v.parent.parent.context.$implicit.completedOn, "MMMM yyy")); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-items__item list-items__bar computer only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "bar mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "bar"]], null, null, null, null, null))], null, null); }
function View_ProfilePageComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "list-items__item status-progress fsmall font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.ongoing))); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "list-items__item status-progress fsmall font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.expiredbatch))); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "list-items__item status-completed fsmall font-weight-bold text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.completed))); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn fnormal"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.downloadCert(_v.parent.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"], telemetryInteractCdata: [1, "telemetryInteractCdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { id: 0, type: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { id: 0, type: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "download icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.downloadCertificateEData; var currVal_1 = _ck(_v, 5, 0, _ck(_v, 3, 0, "course:download:cert", "Feature"), _ck(_v, 4, 0, "SB-14120", "Task")); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.downloadCertificate))); _ck(_v, 7, 0, currVal_2); }); }
function View_ProfilePageComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-items__item list-items__bar computer only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "bar mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "bar"]], null, null, null, null, null))], null, null); }
function View_ProfilePageComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "list-items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["class", "sb__ellipsis mr-auto mb-0 text-left"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToCourse(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.completedOn; _ck(_v, 8, 0, currVal_2); var currVal_3 = !_v.parent.context.$implicit.completedOn; _ck(_v, 10, 0, currVal_3); var currVal_4 = (((_v.parent.context.$implicit.status === 0) || (_v.parent.context.$implicit.status === 1)) && (_v.parent.context.$implicit.batch.status !== 2)); _ck(_v, 12, 0, currVal_4); var currVal_5 = (((_v.parent.context.$implicit.status === 0) || (_v.parent.context.$implicit.status === 1)) && (_v.parent.context.$implicit.batch.status === 2)); _ck(_v, 14, 0, currVal_5); var currVal_6 = (_v.parent.context.$implicit.status === 2); _ck(_v, 16, 0, currVal_6); var currVal_7 = (((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.certificates == null) ? null : _v.parent.context.$implicit.certificates.length)) || ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.issuedCertificates == null) ? null : _v.parent.context.$implicit.issuedCertificates.length))); _ck(_v, 18, 0, currVal_7); var currVal_8 = (!((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.certificates == null) ? null : _v.parent.context.$implicit.certificates.length)) && !((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.issuedCertificates == null) ? null : _v.parent.context.$implicit.issuedCertificates.length))); _ck(_v, 20, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.courseName; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.batch.name; _ck(_v, 6, 0, currVal_1); }); }
function View_ProfilePageComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-item-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.courseName; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfilePageComponent_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleCourse(true, _co.attendedTraining.length) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" +", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "chevron down icon"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "view-more", "click", "profile-read"); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.attendedTraining.length - 3); var currVal_2 = _co.resourceService.frmelmnts.lbl.viewmore; _ck(_v, 3, 0, currVal_1, currVal_2); }); }
function View_ProfilePageComponent_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleCourse(false, _co.attendedTraining.length) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "chevron up icon"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "view-less", "click", "profile-read"); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.resourceService.frmelmnts.lbl.viewless; _ck(_v, 3, 0, currVal_1); }); }
function View_ProfilePageComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "flex-ai-jc-center sb-ct-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showMoreTrainings; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.showMoreTrainings; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProfilePageComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "container my-16 sb-certificate-trained"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "list-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "label", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "(", ")\u200E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "fsmall mt-4 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\u00A0(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 15, "div", [["class", "list-item-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 14, "div", [["class", "list-items sb-course-progress-status-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "span", [["class", "sb__ellipsis mr-auto mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ProfilePageComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transform(_co.attendedTraining, 0, _co.courseLimit)); _ck(_v, 23, 0, currVal_7); var currVal_8 = (_co.attendedTraining.length > 3); _ck(_v, 26, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.myLearning))); var currVal_1 = _co.attendedTraining.length; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.refreshedDaily))); _ck(_v, 5, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.course))); _ck(_v, 10, 0, currVal_3); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.batch))); _ck(_v, 13, 0, currVal_4); var currVal_5 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.coursecompletiondate))); _ck(_v, 16, 0, currVal_5); var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.status))); _ck(_v, 19, 0, currVal_6); }); }
function View_ProfilePageComponent_44(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "label", [["class", "list-items__item list-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 2), _v.parent.parent.context.$implicit.issuedOn, "dd MMMM yyy")); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfilePageComponent_45(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "list-items__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["appOnlineOnly", ""], ["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.downloadOldAndRCCert(_v.parent.parent.context.$implicit) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "download icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.downloadOthersCertificateEData; _ck(_v, 2, 0, currVal_0); _ck(_v, 3, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.downloadCertificate))); _ck(_v, 5, 0, currVal_1); }); }
function View_ProfilePageComponent_46(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-items__item list-items__bar computer only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "bar"]], null, null, null, null, null))], null, null); }
function View_ProfilePageComponent_43(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "list-items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_46)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.issuedOn; _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.id); _ck(_v, 8, 0, currVal_3); var currVal_4 = !((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.length); _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.trainingName; _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.issuerName); _ck(_v, 4, 0, currVal_1); }); }
function View_ProfilePageComponent_42(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-item-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.issuerName); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfilePageComponent_48(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleOtherCertific(true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "chevron down icon"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "view-more", "click", "profile-read"); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.resourceService.frmelmnts.lbl.viewmore; _ck(_v, 3, 0, currVal_1); }); }
function View_ProfilePageComponent_49(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleOtherCertific(false) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { id: 0, type: 1, pageid: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "chevron up icon"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "view-less", "click", "profile-read"); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.resourceService.frmelmnts.lbl.viewless; _ck(_v, 3, 0, currVal_1); }); }
function View_ProfilePageComponent_47(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "flex-ai-jc-center sb-ct-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_48)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_49)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showMoreCertificates; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.showMoreCertificates; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProfilePageComponent_41(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "container my-16 sb-certificate-trained"], ["id", "learner-passbook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "list-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "label", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "\u200E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "list-item-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "list-items sb-course-progress-status-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "label", [["class", "list-items__item mb-0 last-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "label", [["class", "list-items__item mb-0 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ProfilePageComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_47)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(_co.otherCertificates, 0, _co.otherCertificateLimit)); _ck(_v, 15, 0, currVal_4); var currVal_5 = (_co.otherCertificates.length > 3); _ck(_v, 18, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.learnerPassbook)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.course))); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.certgivenby))); _ck(_v, 9, 0, currVal_2); var currVal_3 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.certissuedon))); _ck(_v, 11, 0, currVal_3); }); }
function View_ProfilePageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 91, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _modules_telemetry_directives_telemetry_impression_telemetry_impression_directive__WEBPACK_IMPORTED_MODULE_23__["TelemetryImpressionDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"]], { appTelemetryImpression: [0, "appTelemetryImpression"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 34, "section", [["class", "py-24 d-flex flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["aria-label", "Profile"], ["class", "mb-15 d-flex flex-jc-center relative avatar-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "ngx-avatar", [["class", "my-avatar"], ["initialsSize", "1"]], null, null, null, _node_modules_ngx_avatar_ngx_avatar_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_AvatarComponent_0"], _node_modules_ngx_avatar_ngx_avatar_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_AvatarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, { verified: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 704512, null, 0, ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_avatar__WEBPACK_IMPORTED_MODULE_25__["AvatarService"]], { size: [0, "size"], textSizeRatio: [1, "textSizeRatio"], style: [2, "style"], initials: [3, "initials"], initialsSize: [4, "initialsSize"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, { backgroundColor: 0, border: 1, boxShadow: 2, borderRadius: 3, color: 4, fontWeight: 5, fontFamily: 6 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "profile-user-label font-w-bold d-flex text-center relative position"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 13, "div", [["class", "mt-8 mb-16 d-flex flex-jc-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", " :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](19, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "fnormal ml-5"], ["id", "copyUser"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 16777216, null, null, 7, "div", [["class", "ml-8 cursor-pointer mat-tooltip-trigger"], ["role", "button"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.copyToClipboard(_co.userProfile.userName) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4341760, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MAT_TOOLTIP_DEFAULT_OPTIONS"]]], { position: [0, "position"], message: [1, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xs icon-edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#copy-alternate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "span", [["class", "sb-color-primary"], ["role", "link"], ["tabindex", "0"]], [[1, "aria-label", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 8, "section", [["class", "d-flex flex-ai-center flex-dc pb-24 content-preference"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "div", [["class", "ui container content-preference__info pt-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "div", [["class", "mb-0 d-flex flex-jc-center m-responsive-flex-dc m-responsive-mt-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "div", [["class", "fmedium text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "div", [["class", "fmedium ml-5 font-w-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 29, "section", [["class", "d-flex flex-ai-center flex-dc pt-30 pb-30 profile-bg-c-4 content-preference"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "div", [["class", "ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 25, "div", [["class", "max-w-300 mobile only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, ["", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](63, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 4, "div", [["class", "mb-15 d-flex flex-ai-center flex-dc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "span", [["class", "fmedium white-space-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](68, null, ["", " :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 4, "div", [["appTelemetryInteract", ""], ["class", "d-flex flex-ai-center flex-jc-center"], ["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.showEdit = !_co.showEdit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_9__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]], { telemetryInteractEdata: [0, "telemetryInteractEdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "button", [["appOnlineOnly", ""], ["class", "sb-btn sb-btn-primary sb-btn-xs mt-30"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 212992, null, 0, _modules_core_directives_online_only_online_only_directive__WEBPACK_IMPORTED_MODULE_12__["OnlineOnlyDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](75, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 11, "div", [["class", "pt-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 10, "div", [["class", "sb-profile-page-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "div", [["class", "ui divider my-5 mobile only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.telemetryImpression; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.userProfile.stateValidated || !_co.isCustodianOrgUser); _ck(_v, 6, 0, currVal_1); var currVal_2 = "my-avatar"; var currVal_3 = _ck(_v, 9, 0, _co.userProfile.stateValidated); _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = 98; var currVal_5 = 2; var currVal_6 = _ck(_v, 11, 0, "#ffffff", "1px solid #fff", "0 0 6px 0 rgba(0,0,0,0.38)", "50%", "#9017FF", "700", "inherit"); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.userProfile.firstName, " "); var currVal_8 = "1"; _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_13 = "left"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 1, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copyid)), "{instance}", _co.instance)), ""); _ck(_v, 23, 0, currVal_13, currVal_14); var currVal_17 = (_co.roles && (_co.roles.length > 0)); _ck(_v, 31, 0, currVal_17); var currVal_18 = (_co.roles.length > _co.configService.appConfig.PROFILE.defaultShowMoreLimit); _ck(_v, 33, 0, currVal_18); var currVal_19 = (_co.orgDetails && _co.orgDetails.orgName); _ck(_v, 36, 0, currVal_19); var currVal_22 = (_co.userProfile.organisations.length > 1); _ck(_v, 45, 0, currVal_22); var currVal_23 = (_co.userProfile && _co.userProfile.framework); _ck(_v, 49, 0, currVal_23); var currVal_25 = _co.userProfile.framework; _ck(_v, 55, 0, currVal_25); var currVal_27 = _co.userProfile.framework; _ck(_v, 60, 0, currVal_27); var currVal_29 = _co.userProfile.framework; _ck(_v, 65, 0, currVal_29); var currVal_31 = _co.userProfile.framework; _ck(_v, 70, 0, currVal_31); var currVal_33 = _co.myFrameworkEditEdata; _ck(_v, 72, 0, currVal_33); _ck(_v, 74, 0); var currVal_35 = (_co.declarationDetails && !_co.userProfile.stateValidated); _ck(_v, 77, 0, currVal_35); var currVal_36 = (_co.userProfile.badgeAssertions && (_co.userProfile.badgeAssertions.length > 0)); _ck(_v, 79, 0, currVal_36); var currVal_37 = "sb-profile-page-container"; var currVal_38 = (_co.layoutConfiguration ? "sbt-center-container" : "ui container"); _ck(_v, 82, 0, currVal_37, currVal_38); var currVal_39 = (_co.contributions && (_co.contributions.length > 0)); _ck(_v, 84, 0, currVal_39); var currVal_40 = (_co.contributions && (_co.contributions.length > 0)); _ck(_v, 87, 0, currVal_40); var currVal_41 = (_co.attendedTraining && _co.attendedTraining.length); _ck(_v, 89, 0, currVal_41); var currVal_42 = (_co.otherCertificates && _co.otherCertificates.length); _ck(_v, 91, 0, currVal_42); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.userProfile.firstName)); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 1, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.userProfile.lastName)); _ck(_v, 13, 0, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.instacnceId))), "{instance}", _co.instance)); _ck(_v, 18, 0, currVal_11); var currVal_12 = _co.userProfile.userName; _ck(_v, 21, 0, currVal_12); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "\u201C", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copy))), "\u201D"); _ck(_v, 28, 0, currVal_15); var currVal_16 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copy))); _ck(_v, 29, 0, currVal_16); var currVal_20 = _co.resourceService.frmelmnts.lbl.orgname; _ck(_v, 41, 0, currVal_20); var currVal_21 = _co.userProfile.organisations[0].orgName; _ck(_v, 43, 0, currVal_21); var currVal_24 = _co.resourceService.frmelmnts.lbl.boards; _ck(_v, 53, 0, currVal_24); var currVal_26 = _co.resourceService.frmelmnts.lbl.medium; _ck(_v, 58, 0, currVal_26); var currVal_28 = _co.resourceService.frmelmnts.lbl.classes; _ck(_v, 63, 0, currVal_28); var currVal_30 = _co.resourceService.frmelmnts.lbl.subjects; _ck(_v, 68, 0, currVal_30); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.editPersonalDetails))), ""); _ck(_v, 71, 0, currVal_32); var currVal_34 = _co.resourceService.frmelmnts.lbl.edit; _ck(_v, 75, 0, currVal_34); }); }
function View_ProfilePageComponent_51(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-popup", [], null, [[null, "submit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_co.updateProfile($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_feature_components_profile_framework_popup_profile_framework_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_ProfileFrameworkPopupComponent_0"], _modules_shared_feature_components_profile_framework_popup_profile_framework_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_ProfileFrameworkPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _modules_shared_feature_components_profile_framework_popup_profile_framework_popup_component__WEBPACK_IMPORTED_MODULE_27__["ProfileFrameworkPopupComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_core_services_framework_framework_service__WEBPACK_IMPORTED_MODULE_28__["FrameworkService"], _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_29__["FormService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_30__["CacheService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_core_services_channel_channel_service__WEBPACK_IMPORTED_MODULE_31__["ChannelService"], _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_32__["OrgDetailsService"], _service_popup_control_service__WEBPACK_IMPORTED_MODULE_33__["PopupControlService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"]], { showCloseIcon: [0, "showCloseIcon"], buttonLabel: [1, "buttonLabel"], formInput: [2, "formInput"], dialogProps: [3, "dialogProps"] }, { submit: "submit" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit))); var currVal_2 = _co.userFrameWork; var currVal_3 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_ProfilePageComponent_50(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showEdit = !_co.showEdit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_ModalWrapperComponent_0"], _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[1, 4], ["profileModal", 4]], 1, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ProfilePageComponent_51)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[3, 4]], 0, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, false, _ck(_v, 3, 0, "overflow-visible", "material-modal")); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProfilePageComponent_53(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-update-contact-details", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = ((_co.showContactPopup = !_co.showContactPopup) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _update_contact_details_update_contact_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_UpdateContactDetailsComponent_0"], _update_contact_details_update_contact_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_UpdateContactDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _update_contact_details_update_contact_details_component__WEBPACK_IMPORTED_MODULE_38__["UpdateContactDetailsComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_39__["OtpService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_40__["ProfileService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]], { contactType: [0, "contactType"], userProfile: [1, "userProfile"], dialogProps: [2, "dialogProps"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contactType; var currVal_1 = _co.userProfile; var currVal_2 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ProfilePageComponent_52(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showContactPopup = !_co.showContactPopup) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_ModalWrapperComponent_0"], _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ProfilePageComponent_53)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[4, 4]], 0, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, false, _ck(_v, 3, 0, "overflow-visible", "material-modal")); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProfilePageComponent_54(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "app-location-selection", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.onLocationModalClose($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _location_components_location_selection_location_selection_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["View_LocationSelectionComponent_0"], _location_components_location_selection_location_selection_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["RenderType_LocationSelectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _location_components_location_selection_location_selection_component__WEBPACK_IMPORTED_MODULE_42__["LocationSelectionComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _location_services_location_location_service__WEBPACK_IMPORTED_MODULE_43__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_core_services_device_register_device_register_service__WEBPACK_IMPORTED_MODULE_44__["DeviceRegisterService"], _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_45__["NavigationHelperService"], _service_popup_control_service__WEBPACK_IMPORTED_MODULE_33__["PopupControlService"], _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_29__["FormService"], _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_32__["OrgDetailsService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_46__["UtilService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"]], null, { close: "close" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 1, 2, "div", [["slot", "popup-sub-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", "\u200E"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.editPersonalDetails))); _ck(_v, 4, 0, currVal_0); }); }
function View_ProfilePageComponent_55(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-full-page-loader", [], null, null, null, _modules_shared_components_full_page_loader_full_page_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["View_FullPageLoaderComponent_0"], _modules_shared_components_full_page_loader_full_page_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["RenderType_FullPageLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_shared_components_full_page_loader_full_page_loader_component__WEBPACK_IMPORTED_MODULE_48__["FullPageLoaderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ProfilePageComponent_57(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-account-recovery-info", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = ((_co.showRecoveryId = !_co.showRecoveryId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _account_recovery_info_account_recovery_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["View_AccountRecoveryInfoComponent_0"], _account_recovery_info_account_recovery_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["RenderType_AccountRecoveryInfoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _account_recovery_info_account_recovery_info_component__WEBPACK_IMPORTED_MODULE_50__["AccountRecoveryInfoComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_40__["ProfileService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_39__["OtpService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"]], { dialogProps: [0, "dialogProps"], mode: [1, "mode"], userProfile: [2, "userProfile"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _co.mode; var currVal_2 = _co.userProfile; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ProfilePageComponent_56(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showRecoveryId = !_co.showRecoveryId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_ModalWrapperComponent_0"], _modules_shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ProfilePageComponent_57)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[5, 4]], 0, _modules_shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_36__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ProfilePageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _modules_shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_51__["InterpolatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { profileModal: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { slickModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-landing-section", [], null, null, null, _modules_shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["View_AppLandingSectionComponent_0"], _modules_shared_components_app_landing_section_app_landing_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["RenderType_AppLandingSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 245760, null, 0, _modules_shared_components_app_landing_section_app_landing_section_component__WEBPACK_IMPORTED_MODULE_53__["AppLandingSectionComponent"], [_modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_54__["LayoutService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"]], { layoutConfiguration: [0, "layoutConfiguration"], noTitle: [1, "noTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 13, "div", [["class", "relative position mt-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["class", "ui container py-0 px-0 d-flex flex-ai-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--xxs icon-back mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, ":svg:svg", [["class", "icon icon-svg--primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, ":svg:use", [[":xlink:href", "assets/images/sprite.svg#arrow-long-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "div", [["class", "content-header__content w-100 ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "d-flex flex-dc flex-basis-1 mr-32 min-w-0 content-header__content__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "div", [["aria-level", "2"], ["class", "content-header__title font-weight-bold ellipsis text-left"], ["role", "heading"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_50)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_52)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_54)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_55)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfilePageComponent_56)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵEMPTY_MAP"]; var currVal_1 = true; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = "relative position mt-0"; var currVal_3 = (_co.layoutConfiguration ? "sb-back-actionbar" : "sb-bg-white cc-player__btn-back"); _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn px-0"; var currVal_5 = (_co.layoutConfiguration ? "sb-btn-round" : ""); _ck(_v, 11, 0, currVal_4, currVal_5); var currVal_8 = (_co.layoutConfiguration ? "sbt-inside-page-container" : ""); _ck(_v, 22, 0, currVal_8); var currVal_9 = (_co.layoutConfiguration ? "relative9" : ""); _ck(_v, 24, 0, currVal_9); var currVal_10 = _co.userProfile; _ck(_v, 26, 0, currVal_10); var currVal_11 = _co.showEdit; _ck(_v, 28, 0, currVal_11); var currVal_12 = _co.showContactPopup; _ck(_v, 30, 0, currVal_12); var currVal_13 = _co.showEditUserDetailsPopup; _ck(_v, 32, 0, currVal_13); var currVal_14 = _co.showFullScreenLoader; _ck(_v, 34, 0, currVal_14); var currVal_15 = _co.showRecoveryId; _ck(_v, 36, 0, currVal_15); _ck(_v, 38, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.back))); _ck(_v, 16, 0, currVal_6); var currVal_7 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lnk == null) ? null : _co.resourceService.frmelmnts.lnk.profile)); _ck(_v, 20, 0, currVal_7); }); }
function View_ProfilePageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ng-component", [], null, null, null, View_ProfilePageComponent_0, RenderType_ProfilePageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, sb_svg2pdf__WEBPACK_IMPORTED_MODULE_55__["CertificateDownloadAsPdfService"], sb_svg2pdf__WEBPACK_IMPORTED_MODULE_55__["CertificateDownloadAsPdfService"], ["DOMTOIMAGE", "JSPDF"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4440064, null, 0, _profile_page_component__WEBPACK_IMPORTED_MODULE_56__["ProfilePageComponent"], ["CS_COURSE_SERVICE", ng2_cache_service_dist_src_services_cache_service__WEBPACK_IMPORTED_MODULE_30__["CacheService"], _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_15__["ResourceService"], _modules_core_services_course_course_service__WEBPACK_IMPORTED_MODULE_57__["CoursesService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_40__["ProfileService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_46__["UtilService"], _modules_core_services_search_search_service__WEBPACK_IMPORTED_MODULE_58__["SearchService"], _modules_core_services_player_player_service__WEBPACK_IMPORTED_MODULE_59__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _modules_core_services_org_details_org_details_service__WEBPACK_IMPORTED_MODULE_32__["OrgDetailsService"], _modules_shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_45__["NavigationHelperService"], _modules_core_services_cert_reg_cert_reg_service__WEBPACK_IMPORTED_MODULE_60__["CertRegService"], _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_10__["TelemetryService"], _modules_shared_services_layoutconfig_layout_service__WEBPACK_IMPORTED_MODULE_54__["LayoutService"], _modules_core_services_form_form_service__WEBPACK_IMPORTED_MODULE_29__["FormService"], sb_svg2pdf__WEBPACK_IMPORTED_MODULE_55__["CertificateDownloadAsPdfService"], _modules_shared_services_connection_service_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], "CS_CERTIFICATE_SERVICE"], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var ProfilePageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _profile_page_component__WEBPACK_IMPORTED_MODULE_56__["ProfilePageComponent"], View_ProfilePageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "sAMZ":
/*!***************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/account-recovery-info/account-recovery-info.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_AccountRecoveryInfoComponent, View_AccountRecoveryInfoComponent_0, View_AccountRecoveryInfoComponent_Host_0, AccountRecoveryInfoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AccountRecoveryInfoComponent", function() { return RenderType_AccountRecoveryInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccountRecoveryInfoComponent_0", function() { return View_AccountRecoveryInfoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccountRecoveryInfoComponent_Host_0", function() { return View_AccountRecoveryInfoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryInfoComponentNgFactory", function() { return AccountRecoveryInfoComponentNgFactory; });
/* harmony import */ var _account_recovery_info_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-recovery-info.component.scss.shim.ngstyle */ "3kBE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component.ngfactory */ "jloS");
/* harmony import */ var _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/shared-feature/components/otp-popup/otp-popup.component */ "ldyU");
/* harmony import */ var _modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/core/services/tenant/tenant.service */ "LePv");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/core/services/otp/otp.service */ "4Np/");
/* harmony import */ var _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/core/services/user/user.service */ "chB/");
/* harmony import */ var _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/shared/services/util/util.service */ "+lQ8");
/* harmony import */ var _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../modules/shared/services/config/config.service */ "j0Qm");
/* harmony import */ var _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../modules/shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _account_recovery_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account-recovery-info.component */ "ajxR");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/profile/profile.service */ "gcPr");




















var styles_AccountRecoveryInfoComponent = [_account_recovery_info_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AccountRecoveryInfoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AccountRecoveryInfoComponent, data: {} });

function View_AccountRecoveryInfoComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.updateRecoveryId))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.addRecoveryId))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "sb-color-error fnormal mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.validEmail))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "sb-color-error fnormal mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.duplicateEmailAddress))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "input", [["class", "sb-form-control mb-8"], ["formControlName", "email"], ["id", "email"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "email"; _ck(_v, 4, 0, currVal_7); var currVal_8 = (_co.accountRecoveryForm.controls.email.dirty && _co.accountRecoveryForm.controls["email"].errors); _ck(_v, 8, 0, currVal_8); var currVal_9 = _co.duplicateRecoveryId; _ck(_v, 10, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_AccountRecoveryInfoComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "sb-color-error fnormal mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.prmpt == null) ? null : _co.resourceService.frmelmnts.prmpt.enterphoneno))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "sb-color-error fnormal mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.duplicatePhoneNumber))); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountRecoveryInfoComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "sb-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "input", [["class", "sb-form-control mb-8"], ["formControlName", "phone"], ["maxlength", "10"], ["type", "tel"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "10"; _ck(_v, 3, 0, currVal_8); var currVal_9 = "phone"; _ck(_v, 6, 0, currVal_9); var currVal_10 = (_co.accountRecoveryForm.controls.phone.dirty && _co.accountRecoveryForm.controls["phone"].errors); _ck(_v, 10, 0, currVal_10); var currVal_11 = _co.duplicateRecoveryId; _ck(_v, 12, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).maxlength : null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_AccountRecoveryInfoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 46, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 37, "div", [["class", "sb-mat__modal__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "sb-modal-header font-weight-bold fmedium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 20, "div", [["class", "d-flex flex-w-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 9, "div", [["class", "sb-radio-btn-checkbox sb-radio-btn-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "input", [["checked", ""], ["id", "email"], ["name", "contactType"], ["tabindex", "0"], ["type", "radio"], ["value", "emailId"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("change" === en)) {
        var pd_6 = (_co.onItemChange() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.contactType = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { name: [0, "name"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 9, "div", [["class", "sb-radio-btn-checkbox sb-radio-btn-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "input", [["id", "phone"], ["name", "contactType"], ["tabindex", "0"], ["type", "radio"], ["value", "phoneNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("change" === en)) {
        var pd_6 = (_co.onItemChange() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.contactType = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { name: [0, "name"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["for", "phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 8, "form", [["class", "sb-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 5, "div", [["class", "sb-mat__modal__actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 4, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal"], ["tabindex", "0"]], [[8, "disabled", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.updateRecoveryId() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](44, { "sb-btn-disabled": 0, "sb-btn-primary": 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _modules_telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_5__["TelemetryInteractDirective"], [_modules_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_6__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"], telemetryInteractCdata: [2, "telemetryInteractCdata"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.mode === "edit"); _ck(_v, 6, 0, currVal_0); var currVal_1 = (_co.mode === "add"); _ck(_v, 8, 0, currVal_1); var currVal_10 = "contactType"; var currVal_11 = "emailId"; _ck(_v, 15, 0, currVal_10, currVal_11); var currVal_12 = "contactType"; var currVal_13 = _co.contactType; _ck(_v, 17, 0, currVal_12, currVal_13); var currVal_22 = "contactType"; var currVal_23 = "phoneNo"; _ck(_v, 25, 0, currVal_22, currVal_23); var currVal_24 = "contactType"; var currVal_25 = _co.contactType; _ck(_v, 27, 0, currVal_24, currVal_25); var currVal_34 = _co.accountRecoveryForm; _ck(_v, 34, 0, currVal_34); var currVal_35 = (_co.contactType === "emailId"); _ck(_v, 38, 0, currVal_35); var currVal_36 = (_co.contactType === "phoneNo"); _ck(_v, 40, 0, currVal_36); var currVal_39 = "sb-btn sb-btn-normal"; var currVal_40 = _ck(_v, 44, 0, !_co.enableSubmitButton, _co.enableSubmitButton); _ck(_v, 43, 0, currVal_39, currVal_40); var currVal_41 = _co.telemetryInteractObject; var currVal_42 = _co.submitInteractEdata; var currVal_43 = _co.telemetryCdata; _ck(_v, 45, 0, currVal_41, currVal_42, currVal_43); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.accountRecoveryDescription))); _ck(_v, 10, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 13, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_14 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.emailAddress))); _ck(_v, 21, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 23, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_26 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.phoneNumber))); _ck(_v, 31, 0, currVal_26); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending; _ck(_v, 32, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_37 = !_co.enableSubmitButton; var currVal_38 = (!_co.enableSubmitButton ? "disabled" : null); _ck(_v, 42, 0, currVal_37, currVal_38); var currVal_44 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.submit))); _ck(_v, 46, 0, currVal_44); }); }
function View_AccountRecoveryInfoComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-otp-popup", [], null, [[null, "verificationSuccess"], [null, "closeContactForm"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("verificationSuccess" === en)) {
        var pd_0 = (_co.userVerificationSuccess($event) !== false);
        ad = (pd_0 && ad);
    } if (("closeContactForm" === en)) {
        var pd_1 = (_co.closeModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_OtpPopupComponent_0"], _modules_shared_feature_components_otp_popup_otp_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_OtpPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _modules_shared_feature_components_otp_popup_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__["OtpPopupComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _modules_core_services_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_11__["TenantService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__["DeviceDetectorService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__["OtpService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _modules_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"]], { otpData: [0, "otpData"], redirectToLogin: [1, "redirectToLogin"] }, { verificationSuccess: "verificationSuccess", closeContactForm: "closeContactForm" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.otpData; var currVal_1 = false; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AccountRecoveryInfoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "sb-mat__modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "mb-0 mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["aria-label", "close dialog"], ["class", "close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccountRecoveryInfoComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_3 = "close dialog"; var currVal_4 = ""; _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_5 = !_co.showOTPForm; _ck(_v, 6, 0, currVal_5); var currVal_6 = _co.showOTPForm; _ck(_v, 8, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_1, currVal_2); }); }
function View_AccountRecoveryInfoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-account-recovery-info", [], null, null, null, View_AccountRecoveryInfoComponent_0, RenderType_AccountRecoveryInfoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _account_recovery_info_component__WEBPACK_IMPORTED_MODULE_18__["AccountRecoveryInfoComponent"], [_modules_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__["ProfileService"], _modules_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _modules_shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__["ToasterService"], _modules_core_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_13__["OtpService"], _modules_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AccountRecoveryInfoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-account-recovery-info", _account_recovery_info_component__WEBPACK_IMPORTED_MODULE_18__["AccountRecoveryInfoComponent"], View_AccountRecoveryInfoComponent_Host_0, { dialogProps: "dialogProps", mode: "mode", userProfile: "userProfile" }, { close: "close" }, []);



/***/ }),

/***/ "sILy":
/*!***********************************************************************************!*\
  !*** ./src/app/plugins/profile/components/profile-page/profile-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "2Fx+");
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cache-service */ "RiOY");
/* harmony import */ var ng2_cache_service__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cache_service__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sb_svg2pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sb-svg2pdf */ "7C15");
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










var ProfilePageComponent = (function () {
    function ProfilePageComponent(courseCService, cacheService, resourceService, coursesService, toasterService, profileService, userService, configService, router, utilService, searchService, playerService, activatedRoute, orgDetailsService, navigationhelperService, certRegService, telemetryService, layoutService, formService, certDownloadAsPdf, connectionService, CsCertificateService) {
        this.courseCService = courseCService;
        this.cacheService = cacheService;
        this.resourceService = resourceService;
        this.coursesService = coursesService;
        this.toasterService = toasterService;
        this.profileService = profileService;
        this.userService = userService;
        this.configService = configService;
        this.router = router;
        this.utilService = utilService;
        this.searchService = searchService;
        this.playerService = playerService;
        this.activatedRoute = activatedRoute;
        this.orgDetailsService = orgDetailsService;
        this.navigationhelperService = navigationhelperService;
        this.certRegService = certRegService;
        this.telemetryService = telemetryService;
        this.layoutService = layoutService;
        this.formService = formService;
        this.certDownloadAsPdf = certDownloadAsPdf;
        this.connectionService = connectionService;
        this.CsCertificateService = CsCertificateService;
        this.contributions = [];
        this.showMoreRoles = true;
        this.showMoreTrainings = true;
        this.showMoreCertificates = true;
        this.isCustodianOrgUser = true;
        this.showMoreRolesLimit = this.configService.appConfig.PROFILE.defaultShowMoreLimit;
        this.courseLimit = this.configService.appConfig.PROFILE.defaultViewMoreLimit;
        this.otherCertificateLimit = this.configService.appConfig.PROFILE.defaultViewMoreLimit;
        this.showEdit = false;
        this.orgDetails = [];
        this.showContactPopup = false;
        this.showEditUserDetailsPopup = false;
        this.showRecoveryId = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.nonCustodianUserLocation = {};
        this.selfDeclaredInfo = [];
        this.selfDeclaredErrorTypes = [];
        this.isConnected = true;
        this.showFullScreenLoader = false;
        this.getNavParams();
    }
    ProfilePageComponent.prototype.getNavParams = function () {
        this.scrollToId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.router.getCurrentNavigation(), 'extras.state.scrollToId');
    };
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDesktopApp = this.utilService.isDesktopApp;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['showEditUserDetailsPopup']) {
                _this.showEditUserDetailsPopup = true;
            }
        });
        if (this.isDesktopApp) {
            this.connectionService.monitor()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (isConnected) {
                _this.isConnected = isConnected;
            });
        }
        this.initLayout();
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_3__["upperFirst"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["toLower"](this.resourceService.instance || 'SUNBIRD'));
        this.getCustodianOrgUser();
        this.userSubscription = this.userService.userData$.subscribe(function (user) {
            _this.showFullScreenLoader = false;
            if (user.userProfile) {
                _this.userProfile = user.userProfile;
                var role = (!_this.userProfile.profileUserType.type ||
                    (_this.userProfile.profileUserType.type && _this.userProfile.profileUserType.type === 'OTHER')) ? '' : _this.userProfile.profileUserType.type;
                _this.userLocation = _this.getUserLocation(_this.userProfile);
                _this.getPersonaConfig(role).then(function (val) {
                    _this.persona = val;
                });
                _this.getSubPersonaConfig(role.toLowerCase(), _this.userLocation).then(function (val) {
                    _this.subPersona = val;
                });
                _this.userFrameWork = _this.userProfile.framework ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](_this.userProfile.framework) : {};
                _this.getOrgDetails();
                _this.getContribution();
                _this.getOtherCertificates(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.userProfile, 'userId'), 'all');
                _this.getTrainingAttended();
                _this.setNonCustodianUserLocation();
                if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.userProfile, 'declarations') && _this.userProfile.declarations.length > 0) {
                    _this.declarationDetails = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.userProfile, 'declarations')[0];
                    if (_this.declarationDetails.errorType) {
                        _this.selfDeclaredErrorTypes = _this.declarationDetails.errorType.split(',');
                    }
                    _this.getSelfDeclaredDetails();
                }
            }
        });
        this.setInteractEventData();
    };
    ProfilePageComponent.prototype.initLayout = function () {
        var _this = this;
        this.layoutConfiguration = this.layoutService.initlayoutConfig();
        this.layoutService.switchableLayout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (layoutConfig) {
            if (layoutConfig != null) {
                _this.layoutConfiguration = layoutConfig.layout;
            }
        });
    };
    ProfilePageComponent.prototype.setNonCustodianUserLocation = function () {
        var _this = this;
        var subOrgs = lodash_es__WEBPACK_IMPORTED_MODULE_3__["filter"](this.userProfile.organisations, function (org) {
            if (_this.userProfile.rootOrgId !== org.organisationId) {
                return org;
            }
        });
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](subOrgs)) {
            var sortedSubOrgs = lodash_es__WEBPACK_IMPORTED_MODULE_3__["reverse"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["sortBy"](subOrgs, 'orgjoindate'));
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](sortedSubOrgs[0]) && !lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](sortedSubOrgs[0].locations)) {
                lodash_es__WEBPACK_IMPORTED_MODULE_3__["forEach"](sortedSubOrgs[0].locations, function (location) {
                    _this.nonCustodianUserLocation[location.type] = location.name;
                });
            }
        }
    };
    ProfilePageComponent.prototype.getOrgDetails = function () {
        var _this = this;
        var orgList = [];
        this.roles = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.userProfile.organisations, function (org, index) {
            if (_this.userProfile.rootOrgId !== org.organisationId) {
                if (org.locations && org.locations.length === 0) {
                    if (_this.userProfile.organisations[0].locationIds && _this.userProfile.organisations[0].locations) {
                        org.locationIds = _this.userProfile.organisations[0].locationIds;
                        org.locations = _this.userProfile.organisations[0].locations;
                    }
                }
                if (org.orgjoindate) {
                    org.modifiedJoinDate = new Date(org.orgjoindate).getTime();
                }
                orgList.push(org);
            }
            else {
                if (org.locations && org.locations.length !== 0) {
                    if (org.orgjoindate) {
                        org.modifiedJoinDate = new Date(org.orgjoindate).getTime();
                    }
                    orgList.push(org);
                }
            }
        });
        var userRoles;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userProfile, 'roles') && !lodash_es__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.userProfile.roles)) {
            userRoles = lodash_es__WEBPACK_IMPORTED_MODULE_3__["map"](this.userProfile.roles, 'role');
        }
        lodash_es__WEBPACK_IMPORTED_MODULE_3__["forEach"](userRoles, function (value, key) {
            if (value !== 'PUBLIC') {
                var roleName = lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"](_this.userProfile.roleList, { id: value });
                if (roleName) {
                    _this.roles.push(roleName['name']);
                }
            }
        });
        this.roles = lodash_es__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.roles).sort();
        orgList = lodash_es__WEBPACK_IMPORTED_MODULE_3__["sortBy"](orgList, ['modifiedJoinDate']);
        this.orgDetails = lodash_es__WEBPACK_IMPORTED_MODULE_3__["last"](orgList);
    };
    ProfilePageComponent.prototype.convertToString = function (value) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_3__["isArray"](value) ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["join"](value, ', ') : undefined;
    };
    ProfilePageComponent.prototype.getLocationDetails = function (locations, type) {
        var location = lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"](locations, { type: type });
        return location ? location.name : false;
    };
    ProfilePageComponent.prototype.getContribution = function () {
        var _this = this;
        var _a = this.configService.appConfig.Course.otherCourse, constantData = _a.constantData, metaData = _a.metaData, dynamicFields = _a.dynamicFields;
        var searchParams = {
            status: ['Live'],
            contentType: this.configService.appConfig.WORKSPACE.contentType,
            params: { lastUpdatedOn: 'desc' }
        };
        var inputParams = { params: this.configService.appConfig.PROFILE.contentApiQueryParams };
        this.searchService.searchContentByUserId(searchParams, inputParams).subscribe(function (data) {
            _this.contributions = _this.utilService.getDataForCard(data.result.content, constantData, dynamicFields, metaData);
            _this.totalContributions = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](data, 'result.count') || 0;
        });
    };
    ProfilePageComponent.prototype.getTrainingAttended = function () {
        var _this = this;
        this.coursesService.enrolledCourseData$.pipe().subscribe(function (data) {
            _this.attendedTraining = lodash_es__WEBPACK_IMPORTED_MODULE_3__["reverse"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["sortBy"](data.enrolledCourses, function (val) {
                return lodash_es__WEBPACK_IMPORTED_MODULE_3__["isNumber"](lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](val, 'completedOn')) ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](val, 'completedOn') : Date.parse(val.completedOn);
            })) || [];
        });
    };
    ProfilePageComponent.prototype.getOtherCertificates = function (userId, certType) {
        var _this = this;
        this.otherCertificates = [];
        var requestBody = { userId: userId, schemaName: 'certificate' };
        if (this.otherCertificatesCounts) {
            requestBody['size'] = this.otherCertificatesCounts;
        }
        this.CsCertificateService.fetchCertificates(requestBody, {
            apiPath: '/learner/certreg/v2',
            apiPathLegacy: '/certreg/v1',
            rcApiPath: '/learner/rc/${schemaName}/v1',
        }).subscribe(function (_res) {
            var _a;
            if (_res && ((_a = _res === null || _res === void 0 ? void 0 : _res.certificates) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                _this.otherCertificates = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_res, 'certificates');
                _this.otherCertificatesCounts = (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_res, 'certRegCount') ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_res, 'certRegCount') : 0) + (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_res, 'rcCount') ? lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_res, 'rcCount') : 0);
            }
        }, function (error) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            console.log('Portal :: CSL : Fetch certificate CSL API failed ', error);
        });
    };
    ProfilePageComponent.prototype.downloadCert = function (course) {
        var _this = this;
        if (this.isDesktopApp && !this.isConnected) {
            this.toasterService.error(this.resourceService.messages.desktop.emsg.cannotAccessCertificate);
            return;
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](course, 'issuedCertificates.length')) {
            this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'messages.smsg.certificateGettingDownloaded'));
            var certificateInfo_1 = course.issuedCertificates[0];
            var courseName_1 = course.courseName || lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](course, 'issuedCertificates[0].name') || 'certificate';
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certificateInfo_1, 'type') === 'TrainingCertificate') {
                var courseObj = {
                    id: certificateInfo_1.identifier,
                    type: 'rc_certificate_registry',
                    templateUrl: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certificateInfo_1, 'templateUrl'),
                    trainingName: courseName_1
                };
                this.downloadOldAndRCCert(courseObj);
            }
            else if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certificateInfo_1, 'identifier')) {
                this.courseCService.getSignedCourseCertificate(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](certificateInfo_1, 'identifier'))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$))
                    .subscribe(function (resp) {
                    if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](resp, 'printUri')) {
                        _this.certDownloadAsPdf.download(resp.printUri, null, courseName_1);
                    }
                    else if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](course, 'certificates.length')) {
                        _this.downloadPdfCertificate(course.certificates[0]);
                    }
                    else {
                        _this.toasterService.error(_this.resourceService.messages.emsg.m0076);
                    }
                }, function (error) {
                    _this.downloadPdfCertificate(certificateInfo_1);
                });
            }
            else {
                this.downloadPdfCertificate(certificateInfo_1);
            }
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](course, 'certificates.length')) {
            this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.resourceService, 'messages.smsg.certificateGettingDownloaded'));
            this.downloadPdfCertificate(course.certificates[0]);
        }
        else {
            this.toasterService.error(this.resourceService.messages.emsg.m0076);
        }
    };
    ProfilePageComponent.prototype.downloadOldAndRCCert = function (courseObj) {
        var _this = this;
        var requestBody = {
            certificateId: courseObj.id,
            schemaName: 'certificate',
            type: courseObj.type,
            templateUrl: courseObj.templateUrl
        };
        this.CsCertificateService.getCerificateDownloadURI(requestBody, {
            apiPath: '/learner/certreg/v2',
            apiPathLegacy: '/certreg/v1',
            rcApiPath: '/learner/rc/${schemaName}/v1',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (resp) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](resp, 'printUri')) {
                _this.certDownloadAsPdf.download(resp.printUri, null, courseObj.trainingName);
            }
            else {
                _this.toasterService.error(_this.resourceService.messages.emsg.m0076);
            }
        }, function (error) {
            console.log('Portal :: CSL : Download certificate CSL API failed ', error);
        });
    };
    ProfilePageComponent.prototype.downloadPdfCertificate = function (value) {
        var _this = this;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](value, 'url')) {
            var request = {
                request: {
                    pdfUrl: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](value, 'url')
                }
            };
            this.profileService.downloadCertificates(request).subscribe(function (apiResponse) {
                var signedPdfUrl = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](apiResponse, 'result.signedUrl');
                if (signedPdfUrl) {
                    window.open(signedPdfUrl, '_blank');
                }
                else {
                    _this.toasterService.error(_this.resourceService.messages.emsg.m0076);
                }
            }, function (err) {
                _this.toasterService.error(_this.resourceService.messages.emsg.m0076);
            });
        }
        else {
            this.toasterService.error(this.resourceService.messages.emsg.m0076);
        }
    };
    ProfilePageComponent.prototype.toggle = function (showMore) {
        if (showMore === true) {
            this.showMoreRolesLimit = this.roles.length;
            this.showMoreRoles = false;
        }
        else {
            this.showMoreRoles = true;
            this.showMoreRolesLimit = this.configService.appConfig.PROFILE.defaultShowMoreLimit;
        }
    };
    ProfilePageComponent.prototype.toggleCourse = function (showMoreCourse, courseLimit) {
        if (showMoreCourse === true) {
            this.courseLimit = courseLimit;
            this.showMoreTrainings = false;
        }
        else {
            this.showMoreTrainings = true;
            this.courseLimit = 3;
        }
    };
    ProfilePageComponent.prototype.updateProfile = function (data) {
        var _this = this;
        this.profileService.updateProfile({ framework: data }).subscribe(function (res) {
            _this.userProfile.framework = data;
            _this.toasterService.success(_this.resourceService.messages.smsg.m0046);
            _this.profileModal && _this.profileModal.deny();
        }, function (err) {
            _this.toasterService.warning(_this.resourceService.messages.emsg.m0012);
            _this.profileModal && _this.profileModal.deny();
            _this.cacheService.set('showFrameWorkPopUp', 'installApp');
        });
    };
    ProfilePageComponent.prototype.openContent = function (content) {
        this.playerService.playContent(content.data.metaData);
    };
    ProfilePageComponent.prototype.prepareVisits = function (event) {
        var inViewLogs = lodash_es__WEBPACK_IMPORTED_MODULE_3__["map"](event, function (content, index) { return ({
            objid: content.metaData.courseId ? content.metaData.courseId : content.metaData.identifier,
            objtype: 'course', index: index,
            section: content.section,
        }); });
        if (this.telemetryImpression) {
            this.telemetryImpression.edata.visits = inViewLogs;
            this.telemetryImpression.edata.subtype = 'pageexit';
            this.telemetryImpression = Object.assign({}, this.telemetryImpression);
        }
    };
    ProfilePageComponent.prototype.getCustodianOrgUser = function () {
        var _this = this;
        this.orgDetailsService.getCustodianOrgDetails().subscribe(function (custodianOrg) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](_this.userService, 'userProfile.rootOrg.rootOrgId') === lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](custodianOrg, 'result.response.value')) {
                _this.isCustodianOrgUser = true;
            }
            else {
                _this.isCustodianOrgUser = false;
            }
        });
    };
    ProfilePageComponent.prototype.goBack = function () {
        this.navigationhelperService.goBack();
    };
    ProfilePageComponent.prototype.setInteractEventData = function () {
        this.myFrameworkEditEdata = {
            id: 'profile-edit-framework',
            type: 'click',
            pageid: 'profile-read'
        };
        this.editProfileInteractEdata = {
            id: 'profile-edit',
            type: 'click',
            pageid: 'profile-read'
        };
        this.editMobileInteractEdata = {
            id: 'profile-edit-mobile',
            type: 'click',
            pageid: 'profile-read'
        };
        this.editEmailInteractEdata = {
            id: 'profile-edit-emailId',
            type: 'click',
            pageid: 'profile-read'
        };
        this.downloadCertificateEData = {
            id: 'profile-download-certificate',
            type: 'click',
            pageid: 'profile-read'
        };
        this.editRecoveryIdInteractEdata = {
            id: 'profile-edit-recoveryId',
            type: 'click',
            pageid: 'profile-read'
        };
        this.addRecoveryIdInteractEdata = {
            id: 'profile-add-recoveryId',
            type: 'click',
            pageid: 'profile-read'
        };
        this.downloadOthersCertificateEData = {
            id: 'profile-download-others-certificate',
            type: 'click',
            pageid: 'profile-read'
        };
        this.submitTeacherDetailsInteractEdata = {
            id: 'add-teacher-details',
            type: 'click',
            pageid: 'profile-read'
        };
        this.updateTeacherDetailsInteractEdata = {
            id: 'edit-teacher-details',
            type: 'click',
            pageid: 'profile-read'
        };
    };
    ProfilePageComponent.prototype.navigate = function (url, formAction) {
        this.router.navigate([url], { queryParams: { formaction: formAction } });
    };
    ProfilePageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.telemetryImpression = {
                context: {
                    env: _this.activatedRoute.snapshot.data.telemetry.env
                },
                object: {
                    id: _this.userService.userid,
                    type: 'User',
                    ver: '1.0'
                },
                edata: {
                    type: _this.activatedRoute.snapshot.data.telemetry.type,
                    pageid: 'profile-read',
                    subtype: _this.activatedRoute.snapshot.data.telemetry.subtype,
                    uri: _this.router.url,
                    duration: _this.navigationhelperService.getPageLoadTime()
                }
            };
        });
    };
    ProfilePageComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ProfilePageComponent.prototype.navigateToCourse = function (coursedata) {
        var courseId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](coursedata, 'courseId');
        var batchId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](coursedata, 'batchId');
        var interactData = {
            context: {
                env: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.activatedRoute.snapshot.data.telemetry, 'env'),
                cdata: [{
                        type: 'batch',
                        id: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](coursedata, 'batchId')
                    }]
            },
            edata: {
                id: 'course-play',
                type: 'click',
                pageid: 'profile-read',
            },
            object: {
                id: courseId,
                type: lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](coursedata, 'content.contentType'),
                ver: '1.0',
                rollup: {},
            }
        };
        this.telemetryService.interact(interactData);
        this.router.navigate(["learn/course/" + courseId + "/batch/" + batchId]);
    };
    ProfilePageComponent.prototype.toggleOtherCertific = function (showMore) {
        if (showMore) {
            if (this.otherCertificates.length !== this.otherCertificatesCounts) {
                this.getOtherCertificates(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](this.userProfile, 'userId'), 'all');
            }
            this.otherCertificateLimit = this.otherCertificatesCounts;
            this.showMoreCertificates = false;
        }
        else {
            this.otherCertificateLimit = this.configService.appConfig.PROFILE.defaultViewMoreLimit;
            this.showMoreCertificates = true;
        }
    };
    ProfilePageComponent.prototype.getSelfDeclaredDetails = function () {
        var _this = this;
        this.selfDeclaredInfo = [];
        this.profileService.getPersonaTenantForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            var tenantConfig = res.find(function (config) { return config.code === 'tenant'; });
            _this.tenantInfo = lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](tenantConfig, 'templateOptions.options').find(function (tenant) { return tenant.value === _this.declarationDetails.orgId; });
            _this.profileService.getSelfDeclarationForm(_this.declarationDetails.orgId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this.unsubscribe$)).subscribe(function (formConfig) {
                var externalIdConfig = formConfig.find(function (config) { return config.code === 'externalIds'; });
                externalIdConfig.children.forEach(function (config) {
                    if (_this.declarationDetails.info[config.code]) {
                        _this.selfDeclaredInfo.push({ label: config.fieldName, value: _this.declarationDetails.info[config.code], code: config.code });
                    }
                });
            });
        });
    };
    ProfilePageComponent.prototype.copyToClipboard = function (userName) {
        var textElement = document.createElement('textarea');
        textElement.style.position = 'fixed';
        textElement.value = userName;
        document.body.appendChild(textElement);
        textElement.select();
        document.execCommand('copy');
        document.body.removeChild(textElement);
        this.toasterService.success((this.resourceService.messages.profile.smsg.m0041).replace('{instance}', this.instance));
    };
    ProfilePageComponent.prototype.triggerAutoScroll = function () {
        var _this = this;
        setTimeout(function () {
            var element = document.getElementById(_this.scrollToId);
            if (!element) {
                return;
            }
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition - 144;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    };
    ProfilePageComponent.prototype.getUserLocation = function (profile) {
        var userLocation = {};
        if (profile && profile.userLocations && profile.userLocations.length) {
            profile.userLocations.forEach(function (d) {
                userLocation[d.type] = d;
            });
        }
        return userLocation;
    };
    ProfilePageComponent.prototype.getPersonaConfig = function (persona) {
        return __awaiter(this, void 0, void 0, function () {
            var formFields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.formService.getFormConfig(ProfilePageComponent.SUPPORTED_PERSONA_LIST_FORM_REQUEST).toPromise()];
                    case 1:
                        formFields = _a.sent();
                        return [2, formFields.find(function (config) { return config.code === persona; })];
                }
            });
        });
    };
    ProfilePageComponent.prototype.getSubPersonaConfig = function (persona, userLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var formFields, state, e_1, personaConfig, personaChildrenConfig, subPersonaConfig, subPersonaList, subPersonaFieldConfigOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((!this.userProfile.profileUserTypes || !this.userProfile.profileUserTypes.length) &&
                            (!this.userProfile.profileUserType || !this.userProfile.profileUserType.subType)) {
                            return [2, undefined];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        state = userLocation.state;
                        return [4, this.formService.getFormConfig(__assign(__assign({}, ProfilePageComponent.DEFAULT_PERSONA_LOCATION_CONFIG_FORM_REQUEST), (state ? { contentType: state.code } : {}))).toPromise()];
                    case 2:
                        formFields = _a.sent();
                        return [3, 5];
                    case 3:
                        e_1 = _a.sent();
                        return [4, this.formService.getFormConfig(ProfilePageComponent.DEFAULT_PERSONA_LOCATION_CONFIG_FORM_REQUEST).toPromise()];
                    case 4:
                        formFields = _a.sent();
                        return [3, 5];
                    case 5:
                        personaConfig = formFields.find(function (formField) { return formField.code === 'persona'; });
                        personaChildrenConfig = personaConfig['children'][persona];
                        subPersonaConfig = personaChildrenConfig.find(function (formField) { return formField.code === 'subPersona'; });
                        if (!subPersonaConfig) {
                            return [2, undefined];
                        }
                        subPersonaList = [];
                        if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](subPersonaConfig, 'templateOptions.multiple')) {
                            if (this.userProfile.profileUserTypes && this.userProfile.profileUserTypes.length) {
                                this.userProfile.profileUserTypes.forEach(function (ele) {
                                    if (lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"](ele, 'subType')) {
                                        subPersonaList.push(ele.subType);
                                    }
                                });
                            }
                            else {
                                subPersonaList.push(this.userProfile.profileUserType.subType);
                            }
                        }
                        else {
                            subPersonaList.push(this.userProfile.profileUserType.subType);
                        }
                        subPersonaFieldConfigOption = [];
                        subPersonaList.forEach(function (ele) {
                            subPersonaFieldConfigOption.push(subPersonaConfig.templateOptions.options.
                                find(function (option) { return option.value === ele; }).label);
                        });
                        return [2, subPersonaFieldConfigOption];
                }
            });
        });
    };
    ProfilePageComponent.prototype.onLocationModalClose = function (event) {
        var _this = this;
        this.showEditUserDetailsPopup = !this.showEditUserDetailsPopup;
        this.showFullScreenLoader = !(event === null || event === void 0 ? void 0 : event.isSubmitted) ? false : true;
        setTimeout(function () {
            if (_this.showFullScreenLoader) {
                _this.showFullScreenLoader = false;
                _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
            }
        }, 5000);
    };
    ProfilePageComponent.SUPPORTED_PERSONA_LIST_FORM_REQUEST = { formType: 'config', formAction: 'get', contentType: 'userType', component: 'portal' };
    ProfilePageComponent.DEFAULT_PERSONA_LOCATION_CONFIG_FORM_REQUEST = { formType: 'profileConfig_v2', contentType: 'default', formAction: 'get' };
    return ProfilePageComponent;
}());



/***/ }),

/***/ "uJel":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/update-contact-details/update-contact-details.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n\n\n\n.sb-form[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n}\n.sb-field[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5rem;\n}\n.sb-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--sbfield-label-text);\n  font-size: 0.875rem;\n}\n.sb-field[_ngcontent-%COMP%]   .sb-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0;\n  display: block;\n  width: 2rem;\n  height: 2rem;\n  text-align: center;\n  pointer-events: none;\n}\n.sb-field.disabled[_ngcontent-%COMP%], .sb-field[_ngcontent-%COMP%]   [disabled][_ngcontent-%COMP%] {\n  background-color: var(--gray-100);\n  border: 0.0625rem solid var(--gray-100);\n  opacity: 1;\n  pointer-events: none;\n}\n.sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%] {\n  border-radius: 0.125rem;\n  font-size: 0.75rem;\n  width: 100%;\n  min-height: 2rem;\n  padding: 0.25rem 0.5rem;\n  border-color: var(--gray-200);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  background: var(--sb-dropdown-menu-bg);\n  color: var(--sb-dropdown-menu-text);\n}\n.sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 1.5;\n  margin: 0rem;\n}\n.sb-field[_ngcontent-%COMP%]   .ui.selection.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.3125rem;\n  padding: 0.75rem 0.625rem !important;\n  line-height: 1.4;\n  font-size: 0.75rem;\n  height: auto;\n}\n.sb-field[_ngcontent-%COMP%]   .ui.multiple.dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n}\n.sb-form-control[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  background-clip: padding-box;\n  border: 0.0625rem solid var(--gray-200);\n  border-radius: 0.1875rem;\n  color: var(--gray-800);\n  display: block;\n  font-size: 0.8125rem;\n  line-height: 1.3125rem;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  position: relative;\n  width: 100%;\n  min-height: 2rem;\n}\n.sb-form-control.sb-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sb-form-control[_ngcontent-%COMP%]:focus {\n  border: 0.0625rem solid var(--primary-600);\n  outline: 0 !important;\n}\n.sb-form-control[_ngcontent-%COMP%]:hover {\n  border: 0.0625rem solid var(--primary-300);\n}\n.sb-form-control.is-invalid[_ngcontent-%COMP%], .sb-form-control.is-invalid[_ngcontent-%COMP%]:hover, .sb-form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  border: 0.0625rem solid var(--red-400);\n  padding: 0.25rem 0.5rem;\n}\n.sb-form-control.is-valid[_ngcontent-%COMP%], .sb-form-control.is-valid[_ngcontent-%COMP%]:hover, .sb-form-control.is-valid[_ngcontent-%COMP%]:focus {\n  border: 0.0625rem solid var(--secondary-200);\n  padding: 0.25rem 0.5rem;\n}\n.characters-left[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  color: var(--gray-200);\n  font-size: var(--font-size-sm);\n  background: var(--white);\n  border-radius: 0.5rem;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .characters-left[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0.5rem;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: vertical;\n}\ninput[required][_ngcontent-%COMP%]:before, input.required[_ngcontent-%COMP%]:before {\n  color: var(--red);\n  content: \"*\";\n  position: absolute;\n  margin-left: -0.9375rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: bold;\n}\n.sb-footer-license[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: normal;\n  align-items: flex-start;\n  justify-content: center;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n.sb-error-text[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--red-400);\n}\ninput[_ngcontent-%COMP%]:-internal-autofill-previewed, input[_ngcontent-%COMP%]:-internal-autofill-selected, textarea[_ngcontent-%COMP%]:-internal-autofill-previewed, textarea[_ngcontent-%COMP%]:-internal-autofill-selected, select[_ngcontent-%COMP%]:-internal-autofill-previewed, select[_ngcontent-%COMP%]:-internal-autofill-selected {\n  background-color: var(--white) !important;\n}\n.batchAddUserForm[_ngcontent-%COMP%]   .sb-field-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]::after, .batchUpdateForm[_ngcontent-%COMP%]   .sb-field-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]::after {\n  margin: -0.2em 0 0 0.2em;\n  content: \"*\";\n  color: var(--red-100);\n}\n.batchAddUserForm[_ngcontent-%COMP%]   .sb-field.ui.left.icon.input[_ngcontent-%COMP%], .batchUpdateForm[_ngcontent-%COMP%]   .sb-field.ui.left.icon.input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.batchAddUserForm[_ngcontent-%COMP%]   .sb-field.ui.left.icon.input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .batchUpdateForm[_ngcontent-%COMP%]   .sb-field.ui.left.icon.input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.batchAddUserForm[_ngcontent-%COMP%]   .d-flex.flex-w-wrap[_ngcontent-%COMP%]   .sb-field-group[_ngcontent-%COMP%], .batchUpdateForm[_ngcontent-%COMP%]   .d-flex.flex-w-wrap[_ngcontent-%COMP%]   .sb-field-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-form[_ngcontent-%COMP%]   .sb-field-group.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .sb-form[_ngcontent-%COMP%]   .sb-field-group.error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--red-100);\n}\n.sb-form[_ngcontent-%COMP%]   .sb-field-group.error[_ngcontent-%COMP%]   .ui[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n.sb-form[_ngcontent-%COMP%]   .sb-field-group.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--rc-fff6f6);\n  border-color: var(--red-0);\n  color: var(--red-100);\n  border-radius: \"\";\n  box-shadow: none;\n}\n.ui.search.selection.dropdown[_ngcontent-%COMP%]    > input.search[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n.ui.multiple.search.dropdown[_ngcontent-%COMP%]    > input.search[_ngcontent-%COMP%] {\n  padding: 0px 0.5rem;\n  margin: 0px;\n}\n.sb-field[_ngcontent-%COMP%]   .ui.multiple.search.dropdown[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n.ui.grey.button[_ngcontent-%COMP%] {\n  background: var(--gray-200);\n  color: var(--white);\n  pointer-events: none !important;\n  cursor: not-allowed !important;\n  height: 2.375rem !important;\n  font-size: 1rem;\n}\n.ui.dodger-blue.button[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--white);\n  font-size: 1rem;\n  height: 2.375rem !important;\n}\n.ui.basic.error.label[_ngcontent-%COMP%] {\n  background: none !important;\n  color: #A30010 !important;\n  border: 0 !important;\n  padding-left: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  padding: 0.625rem 0;\n}\n.ui.left.icon.input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: inherit;\n}\n.height-200[_ngcontent-%COMP%] {\n  height: 12.5rem !important;\n}\n.sb-field.ui.input[_ngcontent-%COMP%] {\n  display: block;\n}\n.sb-field.ui.input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0.625rem;\n}\n.sb-field.ui.input[_ngcontent-%COMP%]   .sb-form-control[_ngcontent-%COMP%] {\n  border: 0.0625rem solid var(--gray-200);\n  line-height: 1.5;\n  padding: 0.5714rem;\n}\n.sb-field.ui.input[_ngcontent-%COMP%]   .sb-form-control[_ngcontent-%COMP%]:hover {\n  border: 0.0625rem solid var(--primary-300);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvdXBkYXRlLWNvbnRhY3QtZGV0YWlscy91cGRhdGUtY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9fZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUV0VEEsYUFBQTtBQU1BLGFBQUE7QUFhQSw0QkFBQTtBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBRDhLRjtBQzVLQTtFQUNFLGtCQUFBO0VBQ0EscUJBL0N1QjtBRDhOekI7QUM5S0U7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FEZ0xKO0FDOUtFO0VBQ0Usa0JBQUE7RUFDQSxXRnFSZTtFRXBSZixRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRGdMSjtBQzlLRTs7RUFFRSxpQ0Z3TU87RUV2TVAsdUNBL0R1QjtFQWdFdkIsVUEvRHdCO0VBZ0V4QixvQkFBQTtBRGdMSjtBQzlLRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBMUMrQjtFQTJDL0IsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FEZ0xKO0FDL0tJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGlMTjtBQy9LSTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRGlMTjtBQzdLSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRCtLTjtBQzNLQTtFQUNFLDhCRjZKWTtFRTVKWiw0QkFBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBaEd1QjtFQWlHdkIsc0JBbEdlO0VBbUdmLGNBQUE7RUFDQSxvQkF2R21CO0VBd0duQixzQkF2R3FCO0VBd0dyQixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRDhLRjtBQzdLRTtFQUNFLFdBQUE7QUQrS0o7QUM3S0U7RUFDRSwwQ0E1R29CO0VBNkdwQixxQkFBQTtBRCtLSjtBQzdLRTtFQUNFLDBDQS9Hb0I7QUQ4UnhCO0FDN0tFO0VBR0Usc0NBbkhvQjtFQW9IcEIsdUJBQUE7QUQ2S0o7QUMzS0U7RUFHRSw0Q0F4SHNCO0VBeUh0Qix1QkFBQTtBRDJLSjtBQ3ZLQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCRm9MYTtFRW5MYix3QkFBQTtFQUNBLHFCQUFBO0FEMEtGO0FDektFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUQyS0o7QUN2S0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUQwS0Y7QUNyS0U7O0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRHlLSjtBQ3JLQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkF6Sm1CO0VBMEpuQixpQkFBQTtBRHdLRjtBQ3JLQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQWhLbUI7RUFpS25CLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBRHdLRjtBQ3JLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBRHdLRjtBQ3JLQTtFQUNFLGtCQUFBO0VBQ0EscUJGcUdRO0FDbUVWO0FDcEtBOzs7Ozs7RUFNRSx5Q0FBQTtBRHVLRjtBQ2pLSTs7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRHFLTjtBQ2xLRTs7RUFDRSxXQUFBO0FEcUtKO0FDcEtJOztFQUNFLFVBQUE7QUR1S047QUNuS0k7O0VBQ0UsT0FBQTtBRHNLTjtBQ2pLQTs7RUFFRSxxQkFBQTtBRG9LRjtBQ2xLQTtFQUNFLGlDQUFBO0FEcUtGO0FDbktBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHNLRjtBQ25LQTtFQUNFLHNCQUFBO0FEc0tGO0FDcEtBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FEdUtGO0FDcktBO0VBQ0UsbUJBQUE7QUR3S0Y7QUFqYUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQW9hRjtBQWphQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFvYUY7QUFqYUE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFvYUY7QUFqYUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFvYUY7QUFqYUE7RUFDRSwwQkFBQTtBQW9hRjtBQWphQTtFQUNFLGNBQUE7QUFvYUY7QUFsYUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQW9hSjtBQWphRTtFQUNFLHVDQ2xDcUI7RURtQ3JCLGdCQUFBO0VBQ0Esa0JBQUE7QUFtYUo7QUFqYUk7RUFDRSwwQ0NyQ2tCO0FEd2N4QiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvcHJvZmlsZS9jb21wb25lbnRzL3VwZGF0ZS1jb250YWN0LWRldGFpbHMvdXBkYXRlLWNvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiY29tcG9uZW50cy9mb3JtXCI7XG5AaW1wb3J0IFwicGFnZXMvbWF0LW1vZGFsXCI7XG5cbi51aS5ncmV5LmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSgzOHB4KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi51aS5kb2RnZXItYmx1ZS5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IGNhbGN1bGF0ZVJlbSgzOHB4KSAhaW1wb3J0YW50O1xufVxuXG4udWkuYmFzaWMuZXJyb3IubGFiZWwge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQTMwMDEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDEwcHgpIDA7XG59XG5cbi51aS5sZWZ0Lmljb24uaW5wdXQgLmljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4uaGVpZ2h0LTIwMCB7XG4gIGhlaWdodDogY2FsY3VsYXRlUmVtKDIwMHB4KSAhaW1wb3J0YW50O1xufVxuXG4uc2ItZmllbGQudWkuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuaWNvbiB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IGNhbGN1bGF0ZVJlbSgxMHB4KTtcbiAgfVxuXG4gIC5zYi1mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogJHNiLWlucHV0LWJvcmRlci1ub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBwYWRkaW5nOiAwLjU3MTRyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogJHNiLWlucHV0LWJvcmRlci1ob3ZlcjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vbWl4aW5zL21peGlucyc7XG4vKiBzYi1maWVsZCAqL1xuJHNiLWZpZWxkLW1hcmdpbi1ib3R0b206IGNhbGN1bGF0ZVJlbSg4cHgpO1xuJHNiLWZpZWxkLWRpc2FibGVkLWJhY2tncm91bmQ6ICRncmF5LTEwMDtcbiRzYi1maWVsZC1kaXNhYmxlZC1ib3JkZXI6ICRpbnB1dC1ib3JkZXItd2lkdGggc29saWQgJGdyYXktMTAwO1xuJHNiLWZpZWxkLWRpc2FibGVkLW9wYWNpdHk6IDE7XG5cbi8qIHNiLWlucHV0ICovXG4kc2ItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJHNiLWlucHV0LWZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDEzcHgpO1xuJHNiLWlucHV0LWxpbmUtaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMjFweCk7XG4kc2ItaW5wdXQtcGFkZGluZzogY2FsY3VsYXRlUmVtKDlweCk7XG4kc2ItaW5wdXQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiRzYi1pbnB1dC1ib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oM3B4KTtcbiRzYi1pbnB1dC1ib3JkZXItbm9ybWFsOiAkaW5wdXQtYm9yZGVyLXdpZHRoIHNvbGlkICRncmF5LTIwMDtcbiRzYi1pbnB1dC1ib3JkZXItZm9jdXM6ICRpbnB1dC1ib3JkZXItd2lkdGggc29saWQgJHByaW1hcnktNjAwO1xuJHNiLWlucHV0LWJvcmRlci1ob3ZlcjogJGlucHV0LWJvcmRlci13aWR0aCBzb2xpZCAkcHJpbWFyeS0zMDA7XG4kc2ItaW5wdXQtYm9yZGVyLWVycm9yOiAkaW5wdXQtYm9yZGVyLXdpZHRoIHNvbGlkICRyZWQtNDAwO1xuJHNiLWlucHV0LWJvcmRlci1zdWNjZXNzOiAkaW5wdXQtYm9yZGVyLXdpZHRoIHNvbGlkICRzZWNvbmRhcnktMjAwO1xuXG4vKiBzYi1pbnB1dCBsYWJlbCBhbmQgdGV4dCAqL1xuJHNiLWVycm9yLXRleHQ6ICRyZWQtNDAwO1xuJHNiLWxhYmVsLWZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDEzcHgpO1xuLy8gRHJvcGRvd25cbiRzYi1kcm9wZG93bi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRzYi1kcm9wZG93bi1ib3JkZXItZm9jdXM6ICRwcmltYXJ5LTYwMDtcbiRzYi1kcm9wZG93bi1ib3JkZXItaG92ZXI6ICRwcmltYXJ5LTMwMDtcbiRzYi1kcm9wZG93bi1taW4taGVpZ2h0OiBjYWxjdWxhdGVSZW0oMzlweCk7XG4kc2ItZHJvcGRvd24tYm9yZGVyLXJhZGl1czogY2FsY3VsYXRlUmVtKDNweCk7XG4kc2ItZHJvcGRvd24tYm9yZGVyOiAkaW5wdXQtYm9yZGVyLXdpZHRoIHNvbGlkICRzYi1kcm9wZG93bi1ib3JkZXItY29sb3I7XG4kc2ItZHJvcGRvd24tYWN0aXZlLWl0ZW06ICRncmF5LTgwMDtcbiRzYi1tdWx0aS1zZWxlY3QtZHJvcGRvd24taWNvbi1mb250LXNpemU6IGNhbGN1bGF0ZVJlbSgyMHB4KTtcbiRzYi1kcm9wZG93bi1sYWJlbC1mb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiRzYi1zZWxlY3Rpb24tZHJvcGRvd24tbWluLWhlaWdodDogY2FsY3VsYXRlUmVtKDMycHgpO1xuJHNiLXNlbGVjdGlvbi1kcm9wZG93bi1wYWRkaW5nOiBjYWxjdWxhdGVSZW0oNHB4KSBjYWxjdWxhdGVSZW0oOHB4KTtcbiRzYi1tdWx0aXBsZS1kcm9wZG93bi1sYWJlbC1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kc2ItbXVsdGlwbGUtZHJvcGRvd24tbGFiZWwtbWFyZ2luLXJpZ2h0OiBjYWxjdWxhdGVSZW0oNHB4KTtcbiRzYi1tdWx0aXBsZS1kcm9wZG93bi10ZXh0LW1hcmdpbjogY2FsY3VsYXRlUmVtKDNweCkgMCBjYWxjdWxhdGVSZW0oM3B4KVxuICBjYWxjdWxhdGVSZW0oMTBweCk7XG4kc2ItbXVsdGlwbGUtZHJvcGRvd24tdGV4dC1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kc2Itc2VsZWN0aW9uLWxpbmUtaGVpZ2h0OiBjYWxjdWxhdGVSZW0oMThweCk7XG5cblxuLnNiLWZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5zYi1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogJHNiLWZpZWxkLW1hcmdpbi1ib3R0b207XG4gIGxhYmVsIHtcbiAgICBjb2xvcjp2YXIoLS1zYmZpZWxkLWxhYmVsLXRleHQpO1xuICAgIGZvbnQtc2l6ZTpjYWxjdWxhdGVSZW0oMTRweCk7XG4gIH1cbiAgLnNiLWlucHV0LWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6ICRiYXNlLWJsb2NrLXNwYWNlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAkYmFzZS1ibG9jay1zcGFjZSAqIDQ7XG4gICAgaGVpZ2h0OiAkYmFzZS1ibG9jay1zcGFjZSAqIDQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gICYuZGlzYWJsZWQsXG4gIFtkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzYi1maWVsZC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIGJvcmRlcjogJHNiLWZpZWxkLWRpc2FibGVkLWJvcmRlcjtcbiAgICBvcGFjaXR5OiAkc2ItZmllbGQtZGlzYWJsZWQtb3BhY2l0eTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAudWkuc2VsZWN0aW9uLmRyb3Bkb3duIHtcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oMnB4KTtcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMnB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAkc2Itc2VsZWN0aW9uLWRyb3Bkb3duLW1pbi1oZWlnaHQ7XG4gICAgcGFkZGluZzogKCRiYXNlLWJsb2NrLXNwYWNlIC8gMikgKCRiYXNlLWJsb2NrLXNwYWNlICogMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTIwMCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1kcm9wZG93bi1tZW51LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tc2ItZHJvcGRvd24tbWVudS10ZXh0KTtcbiAgICAudGV4dCB7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgbWFyZ2luOiAwcmVtO1xuICAgIH1cbiAgICAubWVudSA+IC5pdGVtIHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg3cHgpIGNhbGN1bGF0ZVJlbSg1cHgpO1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDEycHgpIGNhbGN1bGF0ZVJlbSgxMHB4KSAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDEycHgpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuICAudWkubXVsdGlwbGUuZHJvcGRvd24ge1xuICAgIC5sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjdWxhdGVSZW0oNHB4KTtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGN1bGF0ZVJlbSg0cHgpO1xuICAgICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTJweCk7XG4gICAgfVxuICB9XG59XG4uc2ItZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNiLWlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgdmFyKC0tZ3JheS0yMDApO1xuICBib3JkZXItcmFkaXVzOiAkc2ItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgY29sb3I6ICRzYi1pbnB1dC1jb2xvcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogJHNiLWlucHV0LWZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRzYi1pbnB1dC1saW5lLWhlaWdodDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oNHB4KSBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogKCRiYXNlLWJsb2NrLXNwYWNlICogNCk7XG4gICYuc2ItZmx1aWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlcjogJHNiLWlucHV0LWJvcmRlci1mb2N1cztcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAkc2ItaW5wdXQtYm9yZGVyLWhvdmVyO1xuICB9XG4gICYuaXMtaW52YWxpZCxcbiAgJi5pcy1pbnZhbGlkOmhvdmVyLFxuICAmLmlzLWludmFsaWQ6Zm9jdXMge1xuICAgIGJvcmRlcjogJHNiLWlucHV0LWJvcmRlci1lcnJvcjtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgfVxuICAmLmlzLXZhbGlkLFxuICAmLmlzLXZhbGlkOmhvdmVyLFxuICAmLmlzLXZhbGlkOmZvY3VzIHtcbiAgICBib3JkZXI6ICRzYi1pbnB1dC1ib3JkZXItc3VjY2VzcztcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgfVxufVxuXG4uY2hhcmFjdGVycy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICByaWdodDogY2FsY3VsYXRlUmVtKDhweCk7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTIwMCk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgaHRtbFtkaXI9XCJydGxcIl0gJiB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogY2FsY3VsYXRlUmVtKDhweCk7XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuaW5wdXRbcmVxdWlyZWRdLFxuaW5wdXQucmVxdWlyZWQge1xuICAmOmJlZm9yZSB7XG4gICAgY29sb3I6IHZhcigtLXJlZCk7XG4gICAgY29udGVudDogXCIqXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjdWxhdGVSZW0oLTE1cHgpO1xuICB9XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAkYmFzZS1ibG9jay1zcGFjZSAqIDE7XG4gIGZvbnQtc2l6ZTogJHNiLWxhYmVsLWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zYi1mb290ZXItbGljZW5zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICRiYXNlLWJsb2NrLXNwYWNlICogMTtcbiAgZm9udC1zaXplOiAkc2ItbGFiZWwtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zYi1lcnJvci10ZXh0IHtcbiAgbWFyZ2luLXRvcDogJGJhc2UtYmxvY2stc3BhY2UgKiAxO1xuICBjb2xvcjogJHNiLWVycm9yLXRleHQ7XG59XG5cblxuaW5wdXQ6LWludGVybmFsLWF1dG9maWxsLXByZXZpZXdlZCxcbmlucHV0Oi1pbnRlcm5hbC1hdXRvZmlsbC1zZWxlY3RlZCxcbnRleHRhcmVhOi1pbnRlcm5hbC1hdXRvZmlsbC1wcmV2aWV3ZWQsXG50ZXh0YXJlYTotaW50ZXJuYWwtYXV0b2ZpbGwtc2VsZWN0ZWQsXG5zZWxlY3Q6LWludGVybmFsLWF1dG9maWxsLXByZXZpZXdlZCxcbnNlbGVjdDotaW50ZXJuYWwtYXV0b2ZpbGwtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJhdGNoQWRkVXNlckZvcm0sXG4uYmF0Y2hVcGRhdGVGb3JtIHtcbiAgLnNiLWZpZWxkLWdyb3VwIHtcbiAgICAucmVxdWlyZWQ6OmFmdGVyIHtcbiAgICAgIG1hcmdpbjogLTAuMmVtIDAgMCAwLjJlbTtcbiAgICAgIGNvbnRlbnQ6IFwiKlwiO1xuICAgICAgY29sb3I6IHZhcigtLXJlZC0xMDApO1xuICAgIH1cbiAgfVxuICAuc2ItZmllbGQudWkubGVmdC5pY29uLmlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaWNvbiB7XG4gICAgICB6LWluZGV4OiA5O1xuICAgIH1cbiAgfVxuICAuZC1mbGV4LmZsZXgtdy13cmFwIHtcbiAgICAuc2ItZmllbGQtZ3JvdXAge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbn1cblxuLnNiLWZvcm0gLnNiLWZpZWxkLWdyb3VwLmVycm9yIGlucHV0LFxuLnNiLWZvcm0gLnNiLWZpZWxkLWdyb3VwLmVycm9yIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXJlZC0xMDApXG59XG4uc2ItZm9ybSAuc2ItZmllbGQtZ3JvdXAuZXJyb3IgLnVpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsY3VsYXRlUmVtKDRweCkgIWltcG9ydGFudDtcbn1cbi5zYi1mb3JtIC5zYi1maWVsZC1ncm91cC5lcnJvciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJjLWZmZjZmNik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLTApO1xuICBjb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IFwiXCI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi51aS5zZWFyY2guc2VsZWN0aW9uLmRyb3Bkb3duID4gaW5wdXQuc2VhcmNoIHtcbiAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDhweCkgY2FsY3VsYXRlUmVtKDhweCk7XG59XG4udWkubXVsdGlwbGUuc2VhcmNoLmRyb3Bkb3duID4gaW5wdXQuc2VhcmNoIHtcbiAgcGFkZGluZzogMHB4IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICBtYXJnaW46IDBweDtcbn1cbi5zYi1maWVsZCAudWkubXVsdGlwbGUuc2VhcmNoLmRyb3Bkb3duIC50ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */"];



/***/ }),

/***/ "ydsG":
/*!***************************************************************************************************!*\
  !*** ./src/app/plugins/profile/components/choose-user/choose-user.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = [".user-profile-box[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  max-width: 480px;\n  width: calc(100% - 32px);\n  background: var(--white);\n  border-radius: 0.5rem;\n}\n.user-profile-box__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.user-profile-box__actions[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--rc-dddddd);\n  padding: 1rem 0px 0px 0px;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.user-profile-box[_ngcontent-%COMP%]   .ui.stackable.grid[_ngcontent-%COMP%]    > .wide.column[_ngcontent-%COMP%] {\n  padding: 0rem !important;\n}\n.user-profile-box[_ngcontent-%COMP%]   .field-focus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n}\n.user-profile-box[_ngcontent-%COMP%]   .member-list-container[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL3BhZ2VzL191c2VyLW1nbXQuc2NzcyIsInNyYy9hcHAvcGx1Z2lucy9wcm9maWxlL2NvbXBvbmVudHMvY2hvb3NlLXVzZXIvY2hvb3NlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQUE7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNBRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsNENBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0RKO0FESUU7RUFDRSx3QkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hKO0FEY0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wbHVnaW5zL3Byb2ZpbGUvY29tcG9uZW50cy9jaG9vc2UtdXNlci9jaG9vc2UtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVzZXIgY3JlYXRlIGFuZCBjaG9vc2UgdXNlciBwYWdlIFVJIHN0eWxlcyAqL1xuXG4udXNlci1wcm9maWxlLWJveCB7XG4gIG1hcmdpbjogY2FsY3VsYXRlUmVtKDMycHgpIGF1dG87XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjdWxhdGVSZW0oOHB4KTtcblxuICAmX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKDE2cHgpO1xuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgYm9yZGVyLXRvcDogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgdmFyKC0tcmMtZGRkZGRkKTtcbiAgICBwYWRkaW5nOiBjYWxjdWxhdGVSZW0oMTZweCkgMHB4IDBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAudWkuc3RhY2thYmxlLmdyaWQ+LndpZGUuY29sdW1uIHtcbiAgICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmllbGQtZm9jdXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLy8gLm9yYW5nZS1ib3JkZXIge1xuICAvLyAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLTEwMCkgIWltcG9ydGFudDtcbiAgLy8gfVxuXG4gIC8vIC5vcmFuZ2UudGV4dCB7XG4gIC8vICAgY29sb3I6IHZhcigtLXJlZC0xMDApO1xuICAvLyB9XG5cbiAgLm1lbWJlci1saXN0LWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogY2FsY3VsYXRlUmVtKDMyMHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG4iLCIvKiB1c2VyIGNyZWF0ZSBhbmQgY2hvb3NlIHVzZXIgcGFnZSBVSSBzdHlsZXMgKi9cbi51c2VyLXByb2ZpbGUtYm94IHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4udXNlci1wcm9maWxlLWJveF9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udXNlci1wcm9maWxlLWJveF9fYWN0aW9ucyB7XG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1yYy1kZGRkZGQpO1xuICBwYWRkaW5nOiAxcmVtIDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4udXNlci1wcm9maWxlLWJveCAudWkuc3RhY2thYmxlLmdyaWQgPiAud2lkZS5jb2x1bW4ge1xuICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4udXNlci1wcm9maWxlLWJveCAuZmllbGQtZm9jdXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnVzZXItcHJvZmlsZS1ib3ggLm1lbWJlci1saXN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"];



/***/ })

}]);
//# sourceMappingURL=plugins-profile-profile-module-ngfactory.js.map