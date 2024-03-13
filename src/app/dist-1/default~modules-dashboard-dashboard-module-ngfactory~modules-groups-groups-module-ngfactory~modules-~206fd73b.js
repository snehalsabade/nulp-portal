(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-module-ngfactory~modules-groups-groups-module-ngfactory~modules-~206fd73b"],{

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

/***/ "X5Lf":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/discussion/components/access-discussion/access-discussion.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AccessDiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDiscussionComponent", function() { return AccessDiscussionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "NJqk");
/* harmony import */ var _shared_services_discussion_telemetry_discussion_telemetry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/discussion-telemetry/discussion-telemetry.service */ "013R");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services */ "bQbs");
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @project-sunbird/client-services */ "6QGN");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_7__);








var AccessDiscussionComponent = (function () {
    function AccessDiscussionComponent(resourceService, router, toasterService, discussionTelemetryService, navigationHelperService, userService, csLibInitializerService) {
        this.resourceService = resourceService;
        this.router = router;
        this.toasterService = toasterService;
        this.discussionTelemetryService = discussionTelemetryService;
        this.navigationHelperService = navigationHelperService;
        this.userService = userService;
        this.csLibInitializerService = csLibInitializerService;
        this.routerData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showLoader = false;
        if (!_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_7__["CsModule"].instance.isInitialised) {
            this.csLibInitializerService.initializeCs();
        }
        this.discussionCsService = _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_7__["CsModule"].instance.discussionService;
    }
    AccessDiscussionComponent.prototype.ngOnInit = function () {
        if (!this.forumIds) {
            this.fetchForumIds();
        }
    };
    AccessDiscussionComponent.prototype.fetchForumIds = function () {
        var _this = this;
        this.discussionCsService.getForumIds(this.fetchForumIdReq).subscribe(function (forumDetails) {
            _this.forumIds = lodash_es__WEBPACK_IMPORTED_MODULE_4__["map"](lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](forumDetails, 'result'), 'cid');
        }, function (error) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    AccessDiscussionComponent.prototype.navigateToDiscussionForum = function () {
        var _this = this;
        this.showLoader = true;
        var createUserReq = {
            username: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.userService.userProfile, 'userName'),
            identifier: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.userService.userProfile, 'userId'),
        };
        this.discussionTelemetryService.contextCdata = [
            {
                id: this.fetchForumIdReq.identifier.toString(),
                type: this.fetchForumIdReq.type
            }
        ];
        var event = {
            context: {
                cdata: this.discussionTelemetryService.contextCdata,
                object: {}
            },
            edata: {
                pageid: 'group-details',
                type: 'CLICK',
                id: 'forum-click'
            },
            eid: 'INTERACT'
        };
        this.discussionTelemetryService.logTelemetryEvent(event);
        this.navigationHelperService.setNavigationUrl({ url: this.router.url });
        this.discussionCsService.createUser(createUserReq).subscribe(function (response) {
            var routerData = {
                userId: lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](response, 'result.userId.uid'),
                forumIds: _this.forumIds
            };
            console.log("routerData===", routerData);
            _this.routerData.emit(routerData);
        }, function (error) {
            _this.showLoader = false;
            _this.toasterService.error(_this.resourceService.messages.emsg.m0005);
        });
    };
    return AccessDiscussionComponent;
}());



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

/***/ "oL/1":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/discussion/components/access-discussion/access-discussion.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! exports provided: RenderType_AccessDiscussionComponent, View_AccessDiscussionComponent_0, View_AccessDiscussionComponent_Host_0, AccessDiscussionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AccessDiscussionComponent", function() { return RenderType_AccessDiscussionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccessDiscussionComponent_0", function() { return View_AccessDiscussionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccessDiscussionComponent_Host_0", function() { return View_AccessDiscussionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDiscussionComponentNgFactory", function() { return AccessDiscussionComponentNgFactory; });
/* harmony import */ var _access_discussion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-discussion.component.scss.shim.ngstyle */ "xCni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _access_discussion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-discussion.component */ "X5Lf");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_discussion_telemetry_discussion_telemetry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/discussion-telemetry/discussion-telemetry.service */ "013R");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/user/user.service */ "chB/");
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");











var styles_AccessDiscussionComponent = [_access_discussion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AccessDiscussionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AccessDiscussionComponent, data: {} });

function View_AccessDiscussionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn ml-8 sb-btn-icon-fix"], ["tabindex", "0"], ["title", "Forum"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToDiscussionForum() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "mr-8"], ["src", "assets/images/forum.svg"], ["width", "20px"]], [[8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.discussionForum))), ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.discussionForum))); _ck(_v, 2, 0, currVal_1); }); }
function View_AccessDiscussionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccessDiscussionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.forumIds && (_co.forumIds.length > 0)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_AccessDiscussionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-access-discussion", [], null, null, null, View_AccessDiscussionComponent_0, RenderType_AccessDiscussionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _access_discussion_component__WEBPACK_IMPORTED_MODULE_3__["AccessDiscussionComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _shared_services_discussion_telemetry_discussion_telemetry_service__WEBPACK_IMPORTED_MODULE_7__["DiscussionTelemetryService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_8__["NavigationHelperService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_10__["CsLibInitializerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AccessDiscussionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-access-discussion", _access_discussion_component__WEBPACK_IMPORTED_MODULE_3__["AccessDiscussionComponent"], View_AccessDiscussionComponent_Host_0, { fetchForumIdReq: "fetchForumIdReq", forumIds: "forumIds" }, { routerData: "routerData" }, []);



/***/ }),

/***/ "xCni":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/discussion/components/access-discussion/access-discussion.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGlzY3Vzc2lvbi9jb21wb25lbnRzL2FjY2Vzcy1kaXNjdXNzaW9uL2FjY2Vzcy1kaXNjdXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ })

}]);
//# sourceMappingURL=default~modules-dashboard-dashboard-module-ngfactory~modules-groups-groups-module-ngfactory~modules-~206fd73b.js.map