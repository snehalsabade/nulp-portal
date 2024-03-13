(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-player-player-module-ngfactory~modules-learn-course-consumption-module-ngfactory~modu~14a7e3bd"],{

/***/ "Dha3":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/credits-and-licence/credits-and-licence.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreditsAndLicenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsAndLicenceComponent", function() { return CreditsAndLicenceComponent; });
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "T89o");


var CreditsAndLicenceComponent = (function () {
    function CreditsAndLicenceComponent(resourceService) {
        this.resourceService = resourceService;
        this.isCollapsed = false;
        this.showDownloadPopup = false;
        this.options = [];
        this.transcriptLanguage = '';
    }
    CreditsAndLicenceComponent.prototype.ngOnInit = function () {
        this.instance = lodash_es__WEBPACK_IMPORTED_MODULE_1__["upperCase"](this.resourceService.instance);
        this.createOptionOrDownload();
    };
    CreditsAndLicenceComponent.prototype.showDownloadTranscript = function () {
        this.showDownloadPopup = true;
    };
    CreditsAndLicenceComponent.prototype.changeTranscriptlanguage = function (event) {
        this.transcriptLanguage = event.value;
    };
    CreditsAndLicenceComponent.prototype.createOptionOrDownload = function (download) {
        var _this = this;
        var _a;
        var transcriptsObj = (_a = this.contentData) === null || _a === void 0 ? void 0 : _a.transcripts;
        if (transcriptsObj) {
            var transcripts = [];
            if (typeof transcriptsObj === 'string') {
                transcripts = JSON.parse(transcriptsObj);
            }
            else {
                transcripts = transcriptsObj;
            }
            if (transcripts && transcripts.length > 0) {
                transcripts.forEach(function (item) {
                    if (download) {
                        if (item.language === _this.transcriptLanguage) {
                            var url = (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](item, 'artifactUrl'));
                            if (url) {
                                window.open(url, '_blank');
                            }
                        }
                    }
                    else {
                        _this.options.push(item.language);
                    }
                });
            }
        }
    };
    CreditsAndLicenceComponent.prototype.dowloadTranscript = function () {
        this.transcriptsInteractEdata = {
            id: 'download-transcripts',
            type: 'click',
            pageid: 'content-details'
        };
        this.showDownloadPopup = false;
        this.createOptionOrDownload(true);
    };
    return CreditsAndLicenceComponent;
}());



/***/ }),

/***/ "TAIQ":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/credits-and-licence/credits-and-licence.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.content-metadeta__content[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--gray-100);\n}\n.content-metadeta__title[_ngcontent-%COMP%] {\n  color: var(--gray-200);\n}\n.content-metadeta__text[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n}\n.content-metadeta__text__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.download-scripts-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n}\n.icon-download-transcripts[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]     .ui.styled.accordion .title {\n  color: var(--primary-400) !important;\n}\n[_nghost-%COMP%]     .ui.styled.accordion .active.title, [_nghost-%COMP%]     .ui.styled.accordion .accordion .active.title {\n  padding: 1rem 1rem 0.5rem 1rem !important;\n}\n[_nghost-%COMP%]     .ui.accordion .active.title .chevron.down.icon {\n  position: relative;\n  top: 0.5rem;\n}\n.contentdata-description[_ngcontent-%COMP%] {\n  border-bottom: 0.03125rem solid var(--rc-979797);\n}\n.credits-section[_ngcontent-%COMP%] {\n  background-color: var(--white);\n}\n.credits-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--gray-200);\n  font-size: 0.625rem;\n  font-weight: bold;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  font-size: 0.875rem;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 0.875rem;\n  word-wrap: break-word;\n}\n.credits-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .credits-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .credits-section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY3JlZGl0cy1hbmQtbGljZW5jZS9jcmVkaXRzLWFuZC1saWNlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBUUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUdBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBR0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUdBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FDekJGO0FEcUdBLFVBQUE7QUNuVEU7RUFDRSw4Q0FBQTtBQWtOSjtBQS9NRTtFQUNFLHNCQUFBO0FBaU5KO0FBOU1FO0VBQ0Usc0JBQUE7QUFnTko7QUE5TUk7RUFDRSwwQkFBQTtBQWdOTjtBQTVNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUErTUY7QUE3TUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWdORjtBQTdNRTtFQUNFLG9DQUFBO0FBZ05KO0FBN01FOztFQUVFLHlDQUFBO0FBK01KO0FBNU1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBOE1KO0FBek1BO0VBQ0UsZ0RBQUE7QUE0TUY7QUF6TUE7RUFDRSw4QkFBQTtBQTRNRjtBQTFNRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBNE1KO0FBek1FO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBMk1KO0FBeE1FO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBME1KO0FBdk1FOzs7RUFHRSxvQkFBQTtBQXlNSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWVyLWhlbHBlci9jb21wb25lbnRzL2NyZWRpdHMtYW5kLWxpY2VuY2UvY3JlZGl0cy1hbmQtbGljZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgLy8gYmFzZSBjb2xvcnNcbiAgLS1ibHVlOiAjMDI0ZjlkO1xuICAtLWdyZWVuOiAjMDA4ODQwO1xuICAtLW9yYW5nZTogI2U1NWEyODtcbiAgLS1yZWQ6ICNmZjQ1NTg7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG5cbiAgLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4gIC0tZ3JheS1oczogMCwgMCU7XG4gIC0tZ3JheTogaHNsKHZhcigtLWdyYXktaHMpLCAyMCUpO1xuICAtLWdyYXktMDogaHNsKHZhcigtLWdyYXktaHMpLCA5NSUpOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4gIC0tZ3JheS0yMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNjAlKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4gIC0tZ3JheS00MDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNDAlKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbiAgLy8gYmFzZXRoZW1lXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAyNGY5ZDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDg4NDA7XG4gIC0tdGVydGlhcnktY29sb3I6ICNlNTVhMjg7XG5cbiAgLy8gcHJpbWFyeSBjb2xvcnNcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7IC8vIGJnXG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7IC8vIGRlZmF1bHQgYnV0dG9uIGJnXG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7IC8vIGRpdmlkZXJcbiAgLS1wcmltYXJ5LTI1MDogI2QzZTdmNDsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7IC8vIG91dGxpbmUsIGZvY3VzIGZpZWxkc1xuICAtLXByaW1hcnktNDAwOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4gIC0tcHJpbWFyeS02MDA6ICMwMDUzOTE7IC8vIG9uIHByZXNzXG4gIC0tcHJpbWFyeS04MDA6ICMwMDJlNTA7IC8vIGhvdmVyXG5cbiAgLy8gc2Vjb25kYXJ5IGNvbG9yc1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmOyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS1zZWNvbmRhcnktMTAwOiAjMDBjNzg2OyAvLyBidXR0b24gYmcgYmcsIHRvYXN0XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTsgLy8gYnV0dG9uIGJnXG4gIC0tc2Vjb25kYXJ5LTQwMDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgLy8gaG92ZXJcblxuICAvLyB0ZXJ0aWFyeSBjb2xvcnNcbiAgLS10ZXJ0aWFyeS0wOiAjZmVlZGQ3OyAvLyB0b2FzdCBiZywgbGFiZWxcbiAgLS10ZXJ0aWFyeS0xMDA6ICNmZmExMWQ7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4gIC0tdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuICAvLyByZWQgY29sb3JzXG4gIC0tcmVkLTA6ICNmYmNjZDE7IC8vIHRvYXN0IGJnXG4gIC0tcmVkLTEwMDogI2ZmNjk3OTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS1yZWQtNDAwOiB2YXIoLS1yZWQpOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbiAgLy8gc3RhdHVzIGNvbG9yc1xuICAtLWluZm8tY29sb3I6IHZhcigtLWJsdWUpO1xuICAtLXN1Y2Nlc3MtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgLS13YXJuaW5nLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAtLWRhbmdlci1jb2xvcjogdmFyKC0tcmVkKTtcblxuICAvLyBlbGVtZW50IGJhc2VkIHZhcmlhYmxlc1xuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0wKTtcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgLS1iZy1ib2R5OiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWdyYXktODAwKTtcblxuICAvLyBhbHBoYVxuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuXG4gIC8vIGZvbnRzXG4gIC0tZm9udC1kZWZhdWx0LXNpemU6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7IC8vIDE0cHggQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4gIC0tZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XG4gIC0tZm9udC13ZWlnaHQtYmFzZTogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgLS1saW5lLWhlaWdodC1iYXNlOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDEuNjE4MDMzOTg4NzUpO1xuICAtLWgxLWZvbnQtc2l6ZTogMnJlbTsgLy8gMzJweFxuICAtLWgyLWZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtOyAvLyAyNHB4XG4gIC0taDQtZm9udC1zaXplOiAxLjJyZW07IC8vIDIwcHhcbiAgLS1oNS1mb250LXNpemU6IDFyZW07IC8vIDE2cHhcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuICAtLWZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4gIC0tZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLXNtOiAwLjc1cmVtOyAvLyAxMnB4XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTsgLy8gMTBweFxuICAtLXAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4gIC8vIGJhc2UgdmFyaWFibGVzXG4gIC0tYmFzZS1mb250LXNpemU6IDAuODc1cmVtO1xuICAtLWJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTsgLy84cHgsXG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcblxuICAvL3JhbmRvbSBjb2xvcnMgYW5kIGJhY2tncm91bmRzXG4gIC0tcmMtOTZDOERBOiAjOTZDOERBO1xuICAtLXJjLTAwNzZGRTogIzAwNzZGRTtcbiAgLS1yYy1FNUVERjU6ICNFNUVERjU7XG4gIC0tcmMtN2M3YjdiOiAjN2M3YjdiO1xuICAtLXJjLWY1ZjVmNTogI2Y1ZjVmNTtcbiAgLS1yYy1mZGZkZmQ6ICNmZGZkZmQ7XG4gIC0tcmMtZGVkZWRlOiAjZGVkZWRlO1xuICAtLXJjLUY1RjlGQzogI0Y1RjlGQztcbiAgLS1yYy1jNGM0YzQ6ICNjNGM0YzQ7XG4gIC0tcmMtZDhkOGQ4OiAjZDhkOGQ4O1xuICAtLXJjLWU5ZTVlNTogI2U5ZTVlNTtcbiAgLS1yYy1kZGRkZGQ6ICNkZGRkZGQ7XG4gIC0tcmMtN2I4NmY0OiAjN2I4NmY0O1xuICAtLXJjLWQwZDBkMDogI2QwZDBkMDtcbiAgLS1yYy01YzhkYjc6ICM1YzhkYjc7XG4gIC0tcmMtOTFhZWNjOiAjOTFhZWNjO1xuICAtLXJjLWY5ZjlmOTogI2Y5ZjlmOTtcbiAgLS1yYy1kNGQzZDM6ICNkNGQzZDM7XG4gIC0tcmMtRkFGQUZBOiAjRkFGQUZBO1xuICAtLXJjLTg2NkE2QTogIzg2NmE2YTtcbiAgLS1yYy05Nzk3OTc6ICM5Nzk3OTc7XG4gIC0tcmMtZTBlMWUyOiAjZTBlMWUyO1xuICAtLXJjLTAwQkQ3RjogIzAwQkQ3RjtcbiAgLS1yYy05RjlGOUY6ICM5RjlGOUY7XG4gIC0tcmMtRjNGOEZGOiAjRjNGOEZGO1xuICAtLXJjLTgwQTdDRTogIzgwQTdDRTtcbiAgLS1yYy05YjliOWI6ICM5YjliOWI7XG4gIC0tcmMtMmNhNThkOiAjMmNhNThkO1xuICAtLXJjLTAwN0FGRjogIzAwN0FGRjtcbiAgLS1yYy1iZGJkYmQ6ICNiZGJkYmQ7XG4gIC0tcmMtY2VjZWNlOiAjY2VjZWNlO1xuICAtLXJjLTI5NzJhNDogIzI5NzJhNDtcbiAgLS1yYy1FMEYxRkQ6ICNFMEYxRkQ7XG4gIC0tcmMtQzhENkVBOiAjQzhENkVBO1xuICAtLXJjLWUyZTNlNTogI2UyZTNlNTtcbiAgLS1yYy1CQ0JFQzA6ICNCQ0JFQzA7XG4gIC0tcmMtZDRkNGQ1OiAjZDRkNGQ1O1xuICAtLXJjLWQ0ZDhkYTogI2Q0ZDhkYTtcbiAgLS1yYy1iZmUxY2Y6ICNiZmUxY2Y7XG4gIC0tcmMtMjg5ZmQ5OiAjMjg5ZmQ5O1xuICAtLXJjLWU2ODkwMDogI2U2ODkwMDtcbiAgLS1yYy0yZjQyNzI6ICMyZjQyNzI7XG4gIC0tcmMtZTBlMGUwOiAjZTBlMGUwO1xuICAtLXJjLTIzNjFmZjogIzIzNjFmZjtcbiAgLS1yYy1jMmMyYzI6ICNjMmMyYzI7XG4gIC0tcmMtZTVlNWU1OiAjZTVlNWU1O1xuICAtLXJjLWZmYjMwMDogI2ZmYjMwMDtcbiAgLS1yYy1kOGRlZTI6ICNkOGRlZTI7XG4gIC0tcmMtMjUyNTI1OiAjMjUyNTI1O1xuICAtLXJjLWZjZjJkNjogI2ZjZjJkNjtcbiAgLS1yYy1hZGQ4ZTY6ICNhZGQ4ZTY7XG4gIC0tcmMtYWZkOWU3OiAjYWZkOWU3O1xuICAtLXJjLUQ5RTRGMjogI0Q5RTRGMjtcbiAgLS1yYy04OEI3RTY6ICM4OEI3RTY7XG4gIC0tcmMtNGE0YTRhOiAjNGE0YTRhO1xuICAtLXJjLWZmZjZmNjogI2ZmZjZmNjtcbiAgLS1yYy1mN2Y3Zjc6ICNmN2Y3Zjc7XG4gIC0tcmMtNjZjN2Y0OiAjNjZjN2Y0O1xuICAtLXJjLTFCNDc4NTogIzFCNDc4NTtcbiAgLS1yYy1hOWE5YTk6ICNhOWE5YTk7XG4gIC0tcmMtZWVlZWVlOiAjZWVlZWVlO1xuICAtLXJjLTFiMWMxZDogIzFiMWMxZDtcbiAgLS1yYy1kZWRlZGY6ICNkZWRlZGY7XG4gIC0tcmMtYWFhYWFhOiAjYWFhYWFhO1xuICAtLXJjLTA0MkQ1NTogIzA0MkQ1NTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtYmJiYmJiOiAjYmJiYmJiO1xuICAtLXJjLTAwOUQ1MzogIzAwOUQ1MztcbiAgLS1yYy1FMEVGRkY6ICNFMEVGRkY7XG4gIC0tcmMtMTk2REFCOiAjMTk2REFCO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtYzNjM2MzOiAjYzNjM2MzO1xuICAtLXJjLTAwYWJjNzojMDBhYmM3O1xuICAtLXJjLUZDRTZFNjojRkNFNkU2O1xuICAtLXJjLURFQ0FDQTojREVDQUNBO1xuICAtLXJjLTQyNDI0MjojNDI0MjQyO1xuICAtLXJjLUY1RDdENzojRjVEN0Q3O1xuICAtLXJjLUY3RkZGNTojRjdGRkY1O1xuICAtLXJjLUQzREVEMTojRDNERUQxO1xuICAtLXJjLUVCRjZFMDojRUJGNkUwO1xuICAtLXJjLUY2RjZGNjojRjZGNkY2O1xuICAtLXJjLTMzQjZDQzojMzNCNkNDO1xuICAtLXJjLTJkYWRjMjojMmRhZGMyO1xuICAtLXJjLTBmYmFkNjojMGZiYWQ2O1xuICAtLXJjLWY3ZmZlYzojZjdmZmVjO1xuICAtLXJjLWQyZGRjNzojZDJkZGM3O1xuICAtLXJjLWZmZTFlMTojZmZlMWUxO1xuICAtLXJjLWU2YzhjODojZTZjOGM4O1xuICAtLXJjLWY1NmI1NjojZjU2YjU2O1xuICAtLXJjLWRjNTIzZDojZGM1MjNkO1xuICAtLXJjLWU2NWM0NzojZTY1YzQ3O1xuICAtLXJjLTU2NWM3MDojNTY1YzcwO1xuICAtLXJjLTZENzI3ODojNkQ3Mjc4O1xuICAtLXJjLUUwOEEyMDojRTA4QTIwO1xuICAtLXJjLURENjgwRjojREQ2ODBGO1xuICAtLXJjLWRhZDljYjojZGFkOWNiO1xuICAtLXJjLUZGRDk1NDojRkZEOTU0O1xuICAtLXJjLXJnYmEtYmxhY2s6IDAsIDAsIDA7IC8vIHZhcigtLWJsYWNrKVxuICAtLXJjLXJnYmEtd2hpdGU6IDI1NSwgMjU1LCAyNTU7IC8vIHZhcigtLXdoaXRlKVxuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTsgLy8gdmFyKC0tZ3JheS0zMDApXG4gIC0tcmMtcmdiYS1wcmltYXJ5OiAyLCA3OSwgMTU3OyAvLyB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAtLXJjLXJnYmEtcHJpbWFyeS0zMDA6IDQxLCAxMTQsIDE2NDsgLy92YXIoLS1wcmltYXJ5LTMwMClcbiAgLS1yYy1yZ2JhLWdyYXktMzAwOiAzNCwgMzYsIDM4OyAvL3ZhcigtLWdyYXktMTAwKVxuICAtLXJjLXJnYmEtODY2YTZhOiAxMzQsIDEwNiwgMTA2O1xuICAtLXJjLXJnYmEtZDBkMGQwOiAyMDgsIDIwOCwgMjA4O1xuICAtLXJjLXJnYmEtN2I4NmY0OiAxMjMsIDEzNCwgMjQ0O1xuICAtLXJjLXJnYmEtQzhENkVBOiAyMDAsIDIxNCwgMjM0O1xuICAtLXVpLWRyb3Bkb3duLXNlbGVjdGlvbi1pY29uOiM0OUIxRjI7XG59XG5cbi8vIFZhcmlhYmxlc1xuJGZvbnQtc3RhY2stZW46IHZhcigtLWZvbnQtc3RhY2stZW4pO1xuJGZvbnQtc3RhY2staGk6IHZhcigtLWZvbnQtc3RhY2staGkpO1xuJGZvbnQtc3RhY2stdXI6IHZhcigtLWZvbnQtc3RhY2stdXIpO1xuXG4vLyBCYXNlIENvbG9yc1xuJGJsdWU6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJGdyZWVuOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJG9yYW5nZTogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuJHJlZDogdmFyKC0tcmVkKTtcbiRibGFjazogdmFyKC0tYmxhY2spO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kaW5kaWdvOiB2YXIoLS1pbmRpZ28pO1xuJHB1cnBsZTogdmFyKC0tcHVycGxlKTtcbiRwaW5rOiB2YXIoLS1waW5rKTtcbiR5ZWxsb3c6IHZhcigtLXllbGxvdyk7XG4kdGVhbDogdmFyKC0tdGVhbCk7XG4kY3lhbjogdmFyKC0tY3lhbik7XG4kZ3JheTogdmFyKC0tZ3JheSk7XG5cbi8vIGJyYW5kIENvbG9yc1xuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiR0ZXJ0aWFyeS1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuLy8gTmV1dHJhbCBDb2xvcnNcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xuLy8gZ3JheSBjb2xvcnMgc2hhZGVzXG4kZ3JheS0wOiB2YXIoLS1ncmF5LTApOyAvLyBwbGFjZSBob2xkZXIgYWN0aXZlIGJnICNGMkYyRjJcbiRncmF5LTEwMDogdmFyKC0tZ3JheS0xMDApOyAvLyBkaXNhYmxlIGJ0biBiZywgaWNvbiBjb2xvciAjQ0NDQ0NDXG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTsgLy8gZGlzYWJsZSB0ZXh0LCBwbGFjZSBob2xkZXIgdGV4dCAjOTk5OTk5XG4kZ3JheS0zMDA6IHZhcigtLWdyYXktMzAwKTsgLy8gc3ViIGhlYWRpbmcgMiAjOTY5Njk2XG4kZ3JheS00MDA6IHZhcigtLWdyYXktNDAwKTsgLy8gc3ViIGhlYWRpbmcgIzY2NjY2NlxuJGdyYXktODAwOiB2YXIoLS1ncmF5LTgwMCk7IC8vIHRleHQgY29sb3IgIzMzMzMzM1xuXG4vLyBwcmltYXJ5IGNvbG9ycyBzaGFkZXNcbiRwcmltYXJ5LTA6IHZhcigtLXByaW1hcnktMCk7IC8vIGJnXG4kcHJpbWFyeS0xMDA6IHZhcigtLXByaW1hcnktMTAwKTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiRwcmltYXJ5LTIwMDogdmFyKC0tcHJpbWFyeS0yMDApOyAvLyBkaXZpZGVyXG4kcHJpbWFyeS0yNTA6IHZhcigtLXByaW1hcnktMjUwKTsgLy9wYWdpbmF0aW9uIGJnIGNvbG9yXG4kcHJpbWFyeS0zMDA6IHZhcigtLXByaW1hcnktMzAwKTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4kcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktNDAwKTsgLy8gYnV0dG9uIGJnLCBoZWFkaW5nLCB0YWJsZSB0aXRsZXMsIGxpbmtzLCB0b2dnbGVzXG4kcHJpbWFyeS02MDA6IHZhcigtLXByaW1hcnktNjAwKTsgLy8gb24gcHJlc3NcbiRwcmltYXJ5LTgwMDogdmFyKC0tcHJpbWFyeS04MDApOyAvLyBob3ZlclxuXG4vLyBzZWNvbmRhcnkgY29sb3JzIHNoYWRlc1xuJHNlY29uZGFyeS0wOiB2YXIoLS1zZWNvbmRhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHNlY29uZGFyeS0xMDA6IHZhcigtLXNlY29uZGFyeS0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHNlY29uZGFyeS0yMDA6IHZhcigtLXNlY29uZGFyeS0yMDApOyAvLyBidXR0b24gYmdcbiRzZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktNDAwKTsgLy8gaG92ZXJcblxuLy8gdGVydGlhcnkgY29sb3JzIHNoYWRlc1xuJHRlcnRpYXJ5LTA6IHZhcigtLXRlcnRpYXJ5LTApOyAvLyB0b2FzdCBiZywgbGFiZWxcbiR0ZXJ0aWFyeS0xMDA6IHZhcigtLXRlcnRpYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kdGVydGlhcnktNDAwOiB2YXIoLS10ZXJ0aWFyeS00MDApOyAvLyBpY29uLCBsYWJlbCwgbm90aWZpY2F0aW9uIGJnXG5cbi8vIHJlZCBjb2xvcnMgc2hhZGVzXG4kcmVkLTA6IHZhcigtLXJlZC0wKTsgLy8gdG9hc3QgYmdcbiRyZWQtMTAwOiB2YXIoLS1yZWQtMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiRyZWQtNDAwOiB2YXIoLS1yZWQtNDAwKTsgLy8gaWNvbiBjb2xvciwgbGFibGUsIG5vdGlmaWNhdGlvblxuXG4vLyBpbnB1dCBib3JkZXIgd2lkdGhcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcblxuLy8gU3RhdHVzIENvbG9yc1xuJGluZm8tY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiRzdWNjZXNzLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcbiR3YXJuaW5nLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS00MDApO1xuJGRhbmdlci1jb2xvcjogdmFyKC0tcmVkLTEwMCk7XG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuJGRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuJGJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4kYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4vKiBGb250cyAqL1xuJGZvbnQtZGVmYXVsdC1zaXplOiB2YXIoLS1mb250LWRlZmF1bHQtc2l6ZSk7XG4kZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXdlaWdodC1saWdodDogdmFyKC0tZm9udC13ZWlnaHQtbGlnaHQpO1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiRmb250LXdlaWdodC1ib2xkOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiRmb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4kaDEtZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpOyAvLyAzMnB4XG4kaDItZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpOyAvLyAyOHB4XG4kaDMtZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpOyAvLyAyNHB4XG4kaDQtZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLyAyMHB4XG4kaDUtZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kaDYtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiRmb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1tZDogdmFyKC0taDUtZm9udC1zaXplKTsgLy8gMTZweFxuJGZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1zbTogdmFyKC0tZm9udC1zaXplLXNtKTsgLy8gMTJweFxuJGZvbnQtc2l6ZS14czogdmFyKC0tZm9udC1zaXplLXhzKTsgLy8gMTBweFxuJHAtZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vMTRweFxuXG4vLyBzcGFjZXNcbiRiYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zL21peGlucyc7XG5cbi5jb250ZW50LW1ldGFkZXRhIHtcbiAgJl9fY29udGVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogY2FsY3VsYXRlUmVtKDFweCkgc29saWQgdmFyKC0tZ3JheS0xMDApO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTIwMCk7XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gICAgJl9fbGluazpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cbi5kb3dubG9hZC1zY3JpcHRzLWJ0bntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTZweCk7XG59XG4uaWNvbi1kb3dubG9hZC10cmFuc2NyaXB0cyBzdmd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAge1xuICAudWkuc3R5bGVkLmFjY29yZGlvbiAudGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC51aS5zdHlsZWQuYWNjb3JkaW9uIC5hY3RpdmUudGl0bGUsXG4gIC51aS5zdHlsZWQuYWNjb3JkaW9uIC5hY2NvcmRpb24gLmFjdGl2ZS50aXRsZSB7XG4gICAgcGFkZGluZzogY2FsY3VsYXRlUmVtKDE2cHgpIGNhbGN1bGF0ZVJlbSgxNnB4KSBjYWxjdWxhdGVSZW0oOHB4KSBjYWxjdWxhdGVSZW0oMTZweCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC51aS5hY2NvcmRpb24gLmFjdGl2ZS50aXRsZSAuY2hldnJvbi5kb3duLmljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICB9XG5cbn1cblxuLmNvbnRlbnRkYXRhLWRlc2NyaXB0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogY2FsY3VsYXRlUmVtKDAuNXB4KSBzb2xpZCB2YXIoLS1yYy05Nzk3OTcpO1xufVxuXG4uY3JlZGl0cy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gIC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWdyYXktMjAwKTtcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgxMHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTRweCk7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgLnN1Yi1zZWN0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oMTRweCk7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgLnRpdGxlLFxuICAuZGVzY3JpcHRpb24sXG4gIC5zdWItc2VjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */"];



/***/ }),

/***/ "VcEb":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/global-consent-pii/global-consent-pii.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GlobalConsentPiiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConsentPiiComponent", function() { return GlobalConsentPiiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @project-sunbird/client-services/models */ "xU6r");
/* harmony import */ var _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sunbird_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/core */ "q/PB");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_popup_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/popup-control.service */ "ym0t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");









var GlobalConsentPiiComponent = (function () {
    function GlobalConsentPiiComponent(csUserService, toasterService, userService, resourceService, tncService, utilService, popupControlService, activatedRoute, coursesService, router, generaliseLabelService) {
        this.csUserService = csUserService;
        this.toasterService = toasterService;
        this.userService = userService;
        this.resourceService = resourceService;
        this.tncService = tncService;
        this.utilService = utilService;
        this.popupControlService = popupControlService;
        this.activatedRoute = activatedRoute;
        this.coursesService = coursesService;
        this.router = router;
        this.generaliseLabelService = generaliseLabelService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
        this.consentPii = 'Yes';
        this.isDataShareOn = false;
        this.lastUpdatedOn = '';
        this.userInformation = [];
        this.editSetting = false;
        this.isTncAgreed = false;
        this.showTncPopup = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.instance = document.getElementById('instance')
            ? document.getElementById('instance').value.toUpperCase() : 'SUNBIRD';
    }
    GlobalConsentPiiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersProfile = lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.userService.userProfile);
        this.getUserInformation();
        this.getUserConsent();
        if (this.isglobalConsent) {
            this.showSettingsPage = false;
        }
        else {
            this.showSettingsPage = true;
        }
        this.checkQueryParams();
        this.coursesService.revokeConsent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (res) {
            _this.updateUserConsent(false);
        });
    };
    GlobalConsentPiiComponent.prototype.checkQueryParams = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (response) {
            if (response.consent) {
                if (_this.type === 'course-consent' || _this.type === 'global-consent') {
                    _this.showConsentPopup = true;
                }
                _this.removeQueryParam();
            }
        });
    };
    GlobalConsentPiiComponent.prototype.getUserInformation = function () {
        var _this = this;
        this.userInformation['name'] = this.usersProfile.lastName ?
            this.usersProfile.firstName + " " + this.usersProfile.lastName : this.usersProfile.firstName;
        this.userInformation['userid'] = this.usersProfile.userId;
        this.userInformation['emailId'] = this.usersProfile.email;
        this.userInformation['phone'] = this.usersProfile.phone;
        if (this.usersProfile && this.usersProfile.externalIds) {
            lodash_es__WEBPACK_IMPORTED_MODULE_4__["forEach"](this.usersProfile.externalIds, function (externaleId) {
                if (externaleId.provider === _this.usersProfile.channel) {
                    _this.userInformation['externalId'] = externaleId.id;
                }
            });
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.usersProfile, 'userLocations.length')) {
            this.usersProfile.userLocations.forEach(function (locDetail) {
                switch (locDetail.type) {
                    case 'state':
                        _this.userInformation['state'] = locDetail.name;
                        break;
                    case 'district':
                        _this.userInformation['district'] = locDetail.name;
                        break;
                    case 'block':
                        _this.userInformation['block'] = locDetail.name;
                        break;
                    case 'school':
                        _this.userInformation['schoolName'] = locDetail.name;
                        _this.userInformation['schoolId'] = locDetail.code;
                        break;
                }
            });
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.usersProfile, 'declarations.length')) {
            for (var _i = 0, _a = Object.entries(this.usersProfile.declarations[0].info); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                switch (key) {
                    case 'declared-email':
                        this.userInformation['emailId'] = value;
                        break;
                    case 'declared-phone':
                        this.userInformation['phone'] = value;
                        break;
                    case 'declared-school-udise-code':
                        this.userInformation['schoolId'] = this.userInformation['schoolId'] || value;
                        break;
                    case 'declared-school-name':
                        this.userInformation['schoolName'] = this.userInformation['schoolName'] || value;
                        break;
                }
            }
        }
        if (this.profileInfo) {
            this.userInformation = lodash_es__WEBPACK_IMPORTED_MODULE_4__["assign"](this.userInformation, this.profileInfo);
        }
    };
    GlobalConsentPiiComponent.prototype.fetchTncData = function () {
        var _this = this;
        this.tncService.getTncConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            var response = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'result.response.value');
            if (response) {
                try {
                    var tncConfig = _this.utilService.parseJson(response);
                    var version = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](tncConfig, 'latestVersion') || {};
                    _this.termsAndConditionLink = tncConfig[version].url;
                }
                catch (e) {
                    _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.fmsg.m0004'));
                }
            }
        }, function () {
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.fmsg.m0004'));
        });
    };
    GlobalConsentPiiComponent.prototype.saveConsent = function () {
        var isActive = lodash_es__WEBPACK_IMPORTED_MODULE_4__["upperCase"](this.consentPii) === 'YES';
        if (isActive) {
            this.showConsentPopup = true;
        }
        else {
            this.updateUserConsent(isActive);
        }
        this.toggleEditSetting();
    };
    GlobalConsentPiiComponent.prototype.toggleEditSetting = function () {
        this.editSetting = !this.editSetting;
    };
    GlobalConsentPiiComponent.prototype.showAndHidePopup = function (mode) {
        this.showTncPopup = mode;
        this.popupControlService.changePopupStatus(true);
    };
    GlobalConsentPiiComponent.prototype.getUserConsent = function () {
        var _this = this;
        var request = {
            userId: this.userService.userid,
            consumerId: '',
            objectId: ''
        };
        if (this.type === 'course-consent') {
            request.consumerId = this.collection ? this.collection.channel : '';
            request.objectId = this.collection ? this.collection.identifier : '';
        }
        else if (this.type === 'global-consent') {
            request.consumerId = this.userService.channel;
            request.objectId = this.userService.channel;
            var declReq = [];
            if (this.getDeclarationReqObject(this.usersProfile)) {
                declReq.push(this.getDeclarationReqObject(this.usersProfile));
                this.updateUserDeclaration(declReq);
            }
        }
        this.csUserService.getConsent(request, { apiPath: '/learner/user/v1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (res) {
            if (_this.type === 'global-consent') {
                _this.showConsentPopup = false;
                _this.type = '';
                _this.isglobalConsent = false;
            }
            _this.isDataShareOn = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](res, 'consents[0].status') === _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1__["ConsentStatus"].ACTIVE;
            _this.consentPii = _this.isDataShareOn ? 'No' : 'Yes';
            _this.lastUpdatedOn = lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](res, 'consents[0].lastUpdatedOn') || '';
        }, function (error) {
            console.error('error', error);
            if (error.code === 'HTTP_CLIENT_ERROR' && lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](error, 'response.responseCode') === 404) {
                _this.showConsentPopup = true;
            }
            else {
                _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.fmsg.m0004'));
            }
        });
    };
    GlobalConsentPiiComponent.prototype.updateUserConsent = function (isActive) {
        var _this = this;
        this.showConsentPopup = false;
        var request = {
            status: isActive ? _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1__["ConsentStatus"].ACTIVE : _project_sunbird_client_services_models__WEBPACK_IMPORTED_MODULE_1__["ConsentStatus"].REVOKED,
            userId: this.userService.userid,
            consumerId: '',
            objectId: '',
            objectType: ''
        };
        if (this.type === 'course-consent') {
            request.consumerId = this.collection ? this.collection.channel : '';
            request.objectId = this.collection ? this.collection.identifier : '';
            request.objectType = 'Collection';
        }
        else if (this.type === 'global-consent') {
            request.consumerId = this.userService.channel;
            request.objectId = this.userService.channel;
            request.objectType = 'Organisation';
        }
        this.csUserService.updateConsent(request, { apiPath: '/learner/user/v1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function () {
            _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.smsg.dataSettingSubmitted'));
            _this.getUserConsent();
            _this.close.emit();
            _this.popupControlService.changePopupStatus(true);
        }, function (error) {
            _this.isTncAgreed = false;
            _this.toasterService.error(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.emsg.m0005'));
            console.error('Error while updating user consent', error);
        });
    };
    GlobalConsentPiiComponent.prototype.removeQueryParam = function () {
        this.router.navigate([], {
            queryParams: { 'consent': null },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
    };
    GlobalConsentPiiComponent.prototype.updateUserDeclaration = function (request) {
        var _this = this;
        this.csUserService.updateUserDeclarations(request, { apiPath: '/learner/user/v1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function () {
            _this.toasterService.success(lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](_this.resourceService, 'messages.smsg.m0037'));
        }, function (err) {
            _this.toasterService.error(_this.resourceService.messages.emsg.m0052);
        });
    };
    GlobalConsentPiiComponent.prototype.getDeclarationReqObject = function (usersProfile) {
        var userExternalId = null;
        if (usersProfile && usersProfile.externalIds) {
            lodash_es__WEBPACK_IMPORTED_MODULE_4__["forEach"](usersProfile.externalIds, function (externaleId) {
                if (externaleId.provider === usersProfile.channel) {
                    userExternalId = externaleId.id;
                }
            });
        }
        var info = {
            'declared-ext-id': userExternalId,
            'declared-phone': '',
            'declared-email': ''
        };
        var declarationObj = {
            operation: 'add',
            userId: usersProfile.userId,
            orgId: usersProfile.rootOrgId,
            info: info
        };
        if (userExternalId) {
            return declarationObj;
        }
        else {
            return null;
        }
    };
    GlobalConsentPiiComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["get"](this.profileDetailsModal, 'deny')) {
            this.profileDetailsModal.deny();
        }
    };
    return GlobalConsentPiiComponent;
}());



/***/ }),

/***/ "W4HH":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-actions/content-actions.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = ["[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n  --font-stack-en: \"Noto Sans\", \"Noto Sans Devanagari\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-hi: \"Noto Sans Devanagari\", \"Noto Sans\", \"Noto Sans Tamil\",\n    \"Noto Sans Bengali\", \"Noto Sans Malayalam\", \"Noto Sans Gurmukhi\",\n    \"Noto Sans Gujarati\", \"Noto Sans Telugu\", \"Noto Sans Kannada\",\n    \"Noto Sans Oriya\", \"Noto Nastaliq Urdu\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --font-stack-ur: \"Noto Sans\", \"Noto Nastaliq Urdu\", \"Noto Sans Devanagari\",\n    \"Noto Sans Tamil\", \"Noto Sans Bengali\", \"Noto Sans Malayalam\",\n    \"Noto Sans Gurmukhi\", \"Noto Sans Gujarati\", \"Noto Sans Telugu\",\n    \"Noto Sans Kannada\", \"Noto Sans Oriya\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\",\n    sans-serif;\n  --blue: #024f9d;\n  --green: #008840;\n  --orange: #e55a28;\n  --red: #ff4558;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --yellow: #ffc107;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --black: #000000;\n  --white: #ffffff;\n  --gray-hs: 0, 0%;\n  --gray: hsl(var(--gray-hs), 20%);\n  --gray-0: hsl(var(--gray-hs), 95%);\n  --gray-100: hsl(var(--gray-hs), 80%);\n  --gray-200: hsl(var(--gray-hs), 60%);\n  --gray-300: hsl(var(--gray-hs), 59%);\n  --gray-400: hsl(var(--gray-hs), 40%);\n  --gray-800: var(--gray);\n  --primary-color: #024f9d;\n  --secondary-color: #008840;\n  --tertiary-color: #e55a28;\n  --primary-0: #f3f7fa;\n  --primary-100: #edf4f9;\n  --primary-200: #80a7ce;\n  --primary-250: #d3e7f4;\n  --primary-300: #7ab4ee;\n  --primary-400: var(--primary-color);\n  --primary-600: #005391;\n  --primary-800: #002e50;\n  --secondary-0: #e1ffdf;\n  --secondary-100: #00c786;\n  --secondary-200: #07bc81;\n  --secondary-400: var(--secondary-color);\n  --tertiary-0: #feedd7;\n  --tertiary-100: #ffa11d;\n  --tertiary-400: var(--tertiary-color);\n  --red-0: #fbccd1;\n  --red-100: #ff6979;\n  --red-400: var(--red);\n  --info-color: var(--blue);\n  --success-color: var(--green);\n  --warning-color: var(--orange);\n  --danger-color: var(--red);\n  --body-background-color: var(--primary-0);\n  --default-text-color: var(--gray-800);\n  --bg-body: var(--primary-0);\n  --body-color: var(--gray-800);\n  --alpha0: 0;\n  --alpha25: 0.25;\n  --alpha50: 0.5;\n  --alpha75: 0.75;\n  --font-default-size: 0.875rem;\n  --font-size-base: var(--font-default-size);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 700;\n  --font-weight-base: var(--font-weight-normal);\n  --line-height-base: calc(var(--font-size-base) * 1.61803398875);\n  --h1-font-size: 2rem;\n  --h2-font-size: 1.75rem;\n  --h3-font-size: 1.5rem;\n  --h4-font-size: 1.2rem;\n  --h5-font-size: 1rem;\n  --h6-font-size: var(--font-size-base);\n  --font-size-lg: var(--h4-font-size);\n  --font-size-md: var(--h5-font-size);\n  --font-size-normal: var(--font-size-base);\n  --font-size-sm: 0.75rem;\n  --font-size-xs: 0.625rem;\n  --p-font-size: var(--font-size-base);\n  --base-font-size: 0.875rem;\n  --base-block-space: 0.5rem;\n  --icon-svg-xxs: 0.75rem;\n  --icon-svg-xs: calc(var(--base-block-space) * 2);\n  --icon-svg-sm: calc(var(--base-block-space) * 3);\n  --icon-svg-md: calc(var(--base-block-space) * 4);\n  --icon-svg-lg: calc(var(--base-block-space) * 5);\n  --icon-svg-xl: calc(var(--base-block-space) * 6);\n  --rc-96C8DA: #96C8DA;\n  --rc-0076FE: #0076FE;\n  --rc-E5EDF5: #E5EDF5;\n  --rc-7c7b7b: #7c7b7b;\n  --rc-f5f5f5: #f5f5f5;\n  --rc-fdfdfd: #fdfdfd;\n  --rc-dedede: #dedede;\n  --rc-F5F9FC: #F5F9FC;\n  --rc-c4c4c4: #c4c4c4;\n  --rc-d8d8d8: #d8d8d8;\n  --rc-e9e5e5: #e9e5e5;\n  --rc-dddddd: #dddddd;\n  --rc-7b86f4: #7b86f4;\n  --rc-d0d0d0: #d0d0d0;\n  --rc-5c8db7: #5c8db7;\n  --rc-91aecc: #91aecc;\n  --rc-f9f9f9: #f9f9f9;\n  --rc-d4d3d3: #d4d3d3;\n  --rc-FAFAFA: #FAFAFA;\n  --rc-866A6A: #866a6a;\n  --rc-979797: #979797;\n  --rc-e0e1e2: #e0e1e2;\n  --rc-00BD7F: #00BD7F;\n  --rc-9F9F9F: #9F9F9F;\n  --rc-F3F8FF: #F3F8FF;\n  --rc-80A7CE: #80A7CE;\n  --rc-9b9b9b: #9b9b9b;\n  --rc-2ca58d: #2ca58d;\n  --rc-007AFF: #007AFF;\n  --rc-bdbdbd: #bdbdbd;\n  --rc-cecece: #cecece;\n  --rc-2972a4: #2972a4;\n  --rc-E0F1FD: #E0F1FD;\n  --rc-C8D6EA: #C8D6EA;\n  --rc-e2e3e5: #e2e3e5;\n  --rc-BCBEC0: #BCBEC0;\n  --rc-d4d4d5: #d4d4d5;\n  --rc-d4d8da: #d4d8da;\n  --rc-bfe1cf: #bfe1cf;\n  --rc-289fd9: #289fd9;\n  --rc-e68900: #e68900;\n  --rc-2f4272: #2f4272;\n  --rc-e0e0e0: #e0e0e0;\n  --rc-2361ff: #2361ff;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-ffb300: #ffb300;\n  --rc-d8dee2: #d8dee2;\n  --rc-252525: #252525;\n  --rc-fcf2d6: #fcf2d6;\n  --rc-add8e6: #add8e6;\n  --rc-afd9e7: #afd9e7;\n  --rc-D9E4F2: #D9E4F2;\n  --rc-88B7E6: #88B7E6;\n  --rc-4a4a4a: #4a4a4a;\n  --rc-fff6f6: #fff6f6;\n  --rc-f7f7f7: #f7f7f7;\n  --rc-66c7f4: #66c7f4;\n  --rc-1B4785: #1B4785;\n  --rc-a9a9a9: #a9a9a9;\n  --rc-eeeeee: #eeeeee;\n  --rc-1b1c1d: #1b1c1d;\n  --rc-dededf: #dededf;\n  --rc-aaaaaa: #aaaaaa;\n  --rc-042D55: #042D55;\n  --rc-eeeeee: #eeeeee;\n  --rc-bbbbbb: #bbbbbb;\n  --rc-009D53: #009D53;\n  --rc-E0EFFF: #E0EFFF;\n  --rc-196DAB: #196DAB;\n  --rc-c2c2c2: #c2c2c2;\n  --rc-e5e5e5: #e5e5e5;\n  --rc-c3c3c3: #c3c3c3;\n  --rc-00abc7:#00abc7;\n  --rc-FCE6E6:#FCE6E6;\n  --rc-DECACA:#DECACA;\n  --rc-424242:#424242;\n  --rc-F5D7D7:#F5D7D7;\n  --rc-F7FFF5:#F7FFF5;\n  --rc-D3DED1:#D3DED1;\n  --rc-EBF6E0:#EBF6E0;\n  --rc-F6F6F6:#F6F6F6;\n  --rc-33B6CC:#33B6CC;\n  --rc-2dadc2:#2dadc2;\n  --rc-0fbad6:#0fbad6;\n  --rc-f7ffec:#f7ffec;\n  --rc-d2ddc7:#d2ddc7;\n  --rc-ffe1e1:#ffe1e1;\n  --rc-e6c8c8:#e6c8c8;\n  --rc-f56b56:#f56b56;\n  --rc-dc523d:#dc523d;\n  --rc-e65c47:#e65c47;\n  --rc-565c70:#565c70;\n  --rc-6D7278:#6D7278;\n  --rc-E08A20:#E08A20;\n  --rc-DD680F:#DD680F;\n  --rc-dad9cb:#dad9cb;\n  --rc-FFD954:#FFD954;\n  --rc-rgba-black: 0, 0, 0;\n  --rc-rgba-white: 255, 255, 255;\n  --rc-rgba-gray: 51, 51, 51;\n  --rc-rgba-primary: 2, 79, 157;\n  --rc-rgba-primary-300: 41, 114, 164;\n  --rc-rgba-gray-300: 34, 36, 38;\n  --rc-rgba-866a6a: 134, 106, 106;\n  --rc-rgba-d0d0d0: 208, 208, 208;\n  --rc-rgba-7b86f4: 123, 134, 244;\n  --rc-rgba-C8D6EA: 200, 214, 234;\n  --ui-dropdown-selection-icon:#49B1F2;\n}\n\n.content-video__player__details[_ngcontent-%COMP%] {\n  align-items: center;\n  min-height: 4rem;\n  padding: 0.5rem;\n  background-color: var(--white);\n}\n.content-video__player__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary-400);\n  font-size: var(--h5-font-size);\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%] {\n  color: var(--gray-800);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%]   .dot-divider[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  border-radius: 100%;\n  background-color: var(--gray-800);\n  display: inline-block;\n  margin: 0px 0.5rem;\n}\n.content-video__player__title__subtitle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.content-video__player__screenpart[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.content-video__player__screenpart[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  border-left: 0.03125rem solid var(--gray-100);\n  height: 2.5rem;\n  width: 0.5rem;\n}\n.content-video__content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  margin-right: -0.5rem;\n  padding-bottom: 0.5rem;\n}\n.aspectratio[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  width: 100%;\n  z-index: 99;\n}\n.aspectratio[data-ratio=\"16:9\"][_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n}\n.aspectratio[_ngcontent-%COMP%]   [data-ratio=\"4:3\"][_ngcontent-%COMP%] {\n  padding-top: 75%;\n}\n.aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .aspectratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n}\n.aspectratio.player-fullscreen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 4rem) !important;\n  position: fixed !important;\n  top: 0rem;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  margin: 0;\n  padding: 0;\n  z-index: 9999;\n}\n.aspectratio.player-fullscreen[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .aspectratio.player-fullscreen[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 4rem) !important;\n  background: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbGF5ZXItaGVscGVyL2NvbXBvbmVudHMvY29udGVudC1hY3Rpb25zL2NvbnRlbnQtYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvX3ZpZGVvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BOzs7OztjQUFBO0VBTUE7Ozs7O2NBQUE7RUFRQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUdBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBR0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFHQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBR0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7QUN6QkY7QURxR0EsVUFBQTtBRWpUSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QURnTk47QUM3TUk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUQrTU47QUM3TU07RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEK01SO0FDOU1RO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRGdOVjtBQzlNUTtFQUNFLG9CQUFBO0FEZ05WO0FDM01JO0VBQ0Usb0JBQUE7QUQ2TU47QUM1TU07RUFDRSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEOE1SO0FDek1FO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUQyTUo7QUN0TUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRHlNRjtBQ3hNRTtFQUNFLG1CQUFBO0FEME1KO0FDdk1FO0VBQ0UsZ0JBQUE7QUR5TUo7QUN0TUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR3TUo7QUN0TUk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUR3TU47QUNwTUU7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FEc01KO0FDcE1HO0VBQ0MsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7QURzTUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYXllci1oZWxwZXIvY29tcG9uZW50cy9jb250ZW50LWFjdGlvbnMvY29udGVudC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzMyB2YXJpYWJsZSAmIHNhc3MgdmFyaWFibGVzICovXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1mb250LXN0YWNrLWVuOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLWhpOiBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTYW5zIFRhbWlsXCIsXG4gICAgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIiwgXCJOb3RvIFNhbnMgR3VybXVraGlcIixcbiAgICBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIiwgXCJOb3RvIFNhbnMgS2FubmFkYVwiLFxuICAgIFwiTm90byBTYW5zIE9yaXlhXCIsIFwiTm90byBOYXN0YWxpcSBVcmR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLS1mb250LXN0YWNrLXVyOiBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCBcIk5vdG8gU2FucyBEZXZhbmFnYXJpXCIsXG4gICAgXCJOb3RvIFNhbnMgVGFtaWxcIiwgXCJOb3RvIFNhbnMgQmVuZ2FsaVwiLCBcIk5vdG8gU2FucyBNYWxheWFsYW1cIixcbiAgICBcIk5vdG8gU2FucyBHdXJtdWtoaVwiLCBcIk5vdG8gU2FucyBHdWphcmF0aVwiLCBcIk5vdG8gU2FucyBUZWx1Z3VcIixcbiAgICBcIk5vdG8gU2FucyBLYW5uYWRhXCIsIFwiTm90byBTYW5zIE9yaXlhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcblxuICAvLyBiYXNlIGNvbG9yc1xuICAtLWJsdWU6ICMwMjRmOWQ7XG4gIC0tZ3JlZW46ICMwMDg4NDA7XG4gIC0tb3JhbmdlOiAjZTU1YTI4O1xuICAtLXJlZDogI2ZmNDU1ODtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcblxuICAvLyBncmF5IGNvbG9ycyBzaGFkZXNcbiAgLS1ncmF5LWhzOiAwLCAwJTtcbiAgLS1ncmF5OiBoc2wodmFyKC0tZ3JheS1ocyksIDIwJSk7XG4gIC0tZ3JheS0wOiBoc2wodmFyKC0tZ3JheS1ocyksIDk1JSk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuICAtLWdyYXktMTAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDgwJSk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiAgLS1ncmF5LTIwMDogaHNsKHZhcigtLWdyYXktaHMpLCA2MCUpOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiAgLS1ncmF5LTMwMDogaHNsKHZhcigtLWdyYXktaHMpLCA1OSUpOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4gIC0tZ3JheS04MDA6IHZhcigtLWdyYXkpOyAvLyB0ZXh0IGNvbG9yICMzMzMzMzNcblxuICAvLyBiYXNldGhlbWVcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcblxuICAvLyBwcmltYXJ5IGNvbG9yc1xuICAtLXByaW1hcnktMDogI2YzZjdmYTsgLy8gYmdcbiAgLS1wcmltYXJ5LTEwMDogI2VkZjRmOTsgLy8gZGVmYXVsdCBidXR0b24gYmdcbiAgLS1wcmltYXJ5LTIwMDogIzgwYTdjZTsgLy8gZGl2aWRlclxuICAtLXByaW1hcnktMjUwOiAjZDNlN2Y0OyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiAgLS1wcmltYXJ5LTMwMDogIzdhYjRlZTsgLy8gb3V0bGluZSwgZm9jdXMgZmllbGRzXG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiAgLS1wcmltYXJ5LTYwMDogIzAwNTM5MTsgLy8gb24gcHJlc3NcbiAgLS1wcmltYXJ5LTgwMDogIzAwMmU1MDsgLy8gaG92ZXJcblxuICAvLyBzZWNvbmRhcnkgY29sb3JzXG4gIC0tc2Vjb25kYXJ5LTA6ICNlMWZmZGY7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7IC8vIGJ1dHRvbiBiZyBiZywgdG9hc3RcbiAgLS1zZWNvbmRhcnktMjAwOiAjMDdiYzgxOyAvLyBidXR0b24gYmdcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAvLyBob3ZlclxuXG4gIC8vIHRlcnRpYXJ5IGNvbG9yc1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7IC8vIHRvYXN0IGJnLCBsYWJlbFxuICAtLXRlcnRpYXJ5LTEwMDogI2ZmYTExZDsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiAgLS10ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTsgLy8gaWNvbiwgbGFiZWwsIG5vdGlmaWNhdGlvbiBiZ1xuXG4gIC8vIHJlZCBjb2xvcnNcbiAgLS1yZWQtMDogI2ZiY2NkMTsgLy8gdG9hc3QgYmdcbiAgLS1yZWQtMTAwOiAjZmY2OTc5OyAvLyBidXR0b25nIGJnLCB0b2FzdFxuICAtLXJlZC00MDA6IHZhcigtLXJlZCk7IC8vIGljb24gY29sb3IsIGxhYmxlLCBub3RpZmljYXRpb25cblxuICAvLyBzdGF0dXMgY29sb3JzXG4gIC0taW5mby1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIC0tc3VjY2Vzcy1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAtLXdhcm5pbmctY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIC0tZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQpO1xuXG4gIC8vIGVsZW1lbnQgYmFzZWQgdmFyaWFibGVzXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gIC8vIGFscGhhXG4gIC0tYWxwaGEwOiAwO1xuICAtLWFscGhhMjU6IDAuMjU7XG4gIC0tYWxwaGE1MDogMC41O1xuICAtLWFscGhhNzU6IDAuNzU7XG5cbiAgLy8gZm9udHNcbiAgLS1mb250LWRlZmF1bHQtc2l6ZTogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLWJhc2U6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTsgLy8gMTRweCBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiAgLS1mb250LXdlaWdodC1saWdodDogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcbiAgLS1mb250LXdlaWdodC1iYXNlOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAtLWxpbmUtaGVpZ2h0LWJhc2U6IGNhbGModmFyKC0tZm9udC1zaXplLWJhc2UpICogMS42MTgwMzM5ODg3NSk7XG4gIC0taDEtZm9udC1zaXplOiAycmVtOyAvLyAzMnB4XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtOyAvLyAyOHB4XG4gIC0taDMtZm9udC1zaXplOiAxLjVyZW07IC8vIDI0cHhcbiAgLS1oNC1mb250LXNpemU6IDEuMnJlbTsgLy8gMjBweFxuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTsgLy8gMTZweFxuICAtLWg2LWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4gIC0tZm9udC1zaXplLWxnOiB2YXIoLS1oNC1mb250LXNpemUpOyAvLzIwcHhcbiAgLS1mb250LXNpemUtbWQ6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiAgLS1mb250LXNpemUtbm9ybWFsOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IC8vIDE0cHhcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07IC8vIDEycHhcbiAgLS1mb250LXNpemUteHM6IDAuNjI1cmVtOyAvLyAxMHB4XG4gIC0tcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbiAgLy8gYmFzZSB2YXJpYWJsZXNcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tYmFzZS1ibG9jay1zcGFjZTogMC41cmVtOyAvLzhweCxcbiAgLS1pY29uLXN2Zy14eHM6IDAuNzVyZW07XG4gIC0taWNvbi1zdmcteHM6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAyKTtcbiAgLS1pY29uLXN2Zy1zbTogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDMpO1xuICAtLWljb24tc3ZnLW1kOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNCk7XG4gIC0taWNvbi1zdmctbGc6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA1KTtcbiAgLS1pY29uLXN2Zy14bDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDYpO1xuXG4gIC8vcmFuZG9tIGNvbG9ycyBhbmQgYmFja2dyb3VuZHNcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDsgLy8gdmFyKC0tYmxhY2spXG4gIC0tcmMtcmdiYS13aGl0ZTogMjU1LCAyNTUsIDI1NTsgLy8gdmFyKC0td2hpdGUpXG4gIC0tcmMtcmdiYS1ncmF5OiA1MSwgNTEsIDUxOyAvLyB2YXIoLS1ncmF5LTMwMClcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7IC8vIHZhcigtLXByaW1hcnktY29sb3IpXG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0OyAvL3ZhcigtLXByaW1hcnktMzAwKVxuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7IC8vdmFyKC0tZ3JheS0xMDApXG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLy8gVmFyaWFibGVzXG4kZm9udC1zdGFjay1lbjogdmFyKC0tZm9udC1zdGFjay1lbik7XG4kZm9udC1zdGFjay1oaTogdmFyKC0tZm9udC1zdGFjay1oaSk7XG4kZm9udC1zdGFjay11cjogdmFyKC0tZm9udC1zdGFjay11cik7XG5cbi8vIEJhc2UgQ29sb3JzXG4kYmx1ZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kZ3JlZW46IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4kb3JhbmdlOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4kcmVkOiB2YXIoLS1yZWQpO1xuJGJsYWNrOiB2YXIoLS1ibGFjayk7XG4kd2hpdGU6IHZhcigtLXdoaXRlKTtcbiRpbmRpZ286IHZhcigtLWluZGlnbyk7XG4kcHVycGxlOiB2YXIoLS1wdXJwbGUpO1xuJHBpbms6IHZhcigtLXBpbmspO1xuJHllbGxvdzogdmFyKC0teWVsbG93KTtcbiR0ZWFsOiB2YXIoLS10ZWFsKTtcbiRjeWFuOiB2YXIoLS1jeWFuKTtcbiRncmF5OiB2YXIoLS1ncmF5KTtcblxuLy8gYnJhbmQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuJHRlcnRpYXJ5LWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4vLyBOZXV0cmFsIENvbG9yc1xuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyBncmF5IGNvbG9ycyBzaGFkZXNcbiRncmF5LTA6IHZhcigtLWdyYXktMCk7IC8vIHBsYWNlIGhvbGRlciBhY3RpdmUgYmcgI0YyRjJGMlxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7IC8vIGRpc2FibGUgYnRuIGJnLCBpY29uIGNvbG9yICNDQ0NDQ0NcbiRncmF5LTIwMDogdmFyKC0tZ3JheS0yMDApOyAvLyBkaXNhYmxlIHRleHQsIHBsYWNlIGhvbGRlciB0ZXh0ICM5OTk5OTlcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApOyAvLyBzdWIgaGVhZGluZyAyICM5Njk2OTZcbiRncmF5LTQwMDogdmFyKC0tZ3JheS00MDApOyAvLyBzdWIgaGVhZGluZyAjNjY2NjY2XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTsgLy8gdGV4dCBjb2xvciAjMzMzMzMzXG5cbi8vIHByaW1hcnkgY29sb3JzIHNoYWRlc1xuJHByaW1hcnktMDogdmFyKC0tcHJpbWFyeS0wKTsgLy8gYmdcbiRwcmltYXJ5LTEwMDogdmFyKC0tcHJpbWFyeS0xMDApOyAvLyBkZWZhdWx0IGJ1dHRvbiBiZ1xuJHByaW1hcnktMjAwOiB2YXIoLS1wcmltYXJ5LTIwMCk7IC8vIGRpdmlkZXJcbiRwcmltYXJ5LTI1MDogdmFyKC0tcHJpbWFyeS0yNTApOyAvL3BhZ2luYXRpb24gYmcgY29sb3JcbiRwcmltYXJ5LTMwMDogdmFyKC0tcHJpbWFyeS0zMDApOyAvLyBvdXRsaW5lLCBmb2N1cyBmaWVsZHNcbiRwcmltYXJ5LTQwMDogdmFyKC0tcHJpbWFyeS00MDApOyAvLyBidXR0b24gYmcsIGhlYWRpbmcsIHRhYmxlIHRpdGxlcywgbGlua3MsIHRvZ2dsZXNcbiRwcmltYXJ5LTYwMDogdmFyKC0tcHJpbWFyeS02MDApOyAvLyBvbiBwcmVzc1xuJHByaW1hcnktODAwOiB2YXIoLS1wcmltYXJ5LTgwMCk7IC8vIGhvdmVyXG5cbi8vIHNlY29uZGFyeSBjb2xvcnMgc2hhZGVzXG4kc2Vjb25kYXJ5LTA6IHZhcigtLXNlY29uZGFyeS0wKTsgLy8gdG9hc3QgYmcsIGxhYmVsXG4kc2Vjb25kYXJ5LTEwMDogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IC8vIGJ1dHRvbmcgYmcsIHRvYXN0XG4kc2Vjb25kYXJ5LTIwMDogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7IC8vIGJ1dHRvbiBiZ1xuJHNlY29uZGFyeS00MDA6IHZhcigtLXNlY29uZGFyeS00MDApOyAvLyBob3ZlclxuXG4vLyB0ZXJ0aWFyeSBjb2xvcnMgc2hhZGVzXG4kdGVydGlhcnktMDogdmFyKC0tdGVydGlhcnktMCk7IC8vIHRvYXN0IGJnLCBsYWJlbFxuJHRlcnRpYXJ5LTEwMDogdmFyKC0tdGVydGlhcnktMTAwKTsgLy8gYnV0dG9uZyBiZywgdG9hc3RcbiR0ZXJ0aWFyeS00MDA6IHZhcigtLXRlcnRpYXJ5LTQwMCk7IC8vIGljb24sIGxhYmVsLCBub3RpZmljYXRpb24gYmdcblxuLy8gcmVkIGNvbG9ycyBzaGFkZXNcbiRyZWQtMDogdmFyKC0tcmVkLTApOyAvLyB0b2FzdCBiZ1xuJHJlZC0xMDA6IHZhcigtLXJlZC0xMDApOyAvLyBidXR0b25nIGJnLCB0b2FzdFxuJHJlZC00MDA6IHZhcigtLXJlZC00MDApOyAvLyBpY29uIGNvbG9yLCBsYWJsZSwgbm90aWZpY2F0aW9uXG5cbi8vIGlucHV0IGJvcmRlciB3aWR0aFxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuXG4vLyBTdGF0dXMgQ29sb3JzXG4kaW5mby1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuJHN1Y2Nlc3MtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xuJHdhcm5pbmctY29sb3I6IHZhcigtLXRlcnRpYXJ5LTQwMCk7XG4kZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQtMTAwKTtcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMCk7XG4kZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4kYmctYm9keTogdmFyKC0tcHJpbWFyeS0wKTtcbiRib2R5LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG5cbi8qIEZvbnRzICovXG4kZm9udC1kZWZhdWx0LXNpemU6IHZhcigtLWZvbnQtZGVmYXVsdC1zaXplKTtcbiRmb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4IEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1saWdodCk7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4kbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiRoMS1mb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7IC8vIDMycHhcbiRoMi1mb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7IC8vIDI4cHhcbiRoMy1mb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7IC8vIDI0cHhcbiRoNC1mb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7IC8vIDIwcHhcbiRoNS1mb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSk7IC8vIDE2cHhcbiRoNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1sZzogdmFyKC0taDQtZm9udC1zaXplKTsgLy8yMHB4XG4kZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpOyAvLyAxNnB4XG4kZm9udC1zaXplLW5vcm1hbDogdmFyKC0tZm9udC1zaXplLWJhc2UpOyAvLyAxNHB4XG4kZm9udC1zaXplLXNtOiB2YXIoLS1mb250LXNpemUtc20pOyAvLyAxMnB4XG4kZm9udC1zaXplLXhzOiB2YXIoLS1mb250LXNpemUteHMpOyAvLyAxMHB4XG4kcC1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgLy8xNHB4XG5cbi8vIHNwYWNlc1xuJGJhc2UtYmxvY2stc3BhY2U6IDAuNXJlbTtcbiIsIi8qIGNzczMgdmFyaWFibGUgJiBzYXNzIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tZm9udC1zdGFjay1lbjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay1oaTogXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLCBcIk5vdG8gU2Fuc1wiLCBcIk5vdG8gU2FucyBUYW1pbFwiLFxuICAgIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsIFwiTm90byBTYW5zIEd1cm11a2hpXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsIFwiTm90byBTYW5zIEthbm5hZGFcIixcbiAgICBcIk5vdG8gU2FucyBPcml5YVwiLCBcIk5vdG8gTmFzdGFsaXEgVXJkdVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zdGFjay11cjogXCJOb3RvIFNhbnNcIiwgXCJOb3RvIE5hc3RhbGlxIFVyZHVcIiwgXCJOb3RvIFNhbnMgRGV2YW5hZ2FyaVwiLFxuICAgIFwiTm90byBTYW5zIFRhbWlsXCIsIFwiTm90byBTYW5zIEJlbmdhbGlcIiwgXCJOb3RvIFNhbnMgTWFsYXlhbGFtXCIsXG4gICAgXCJOb3RvIFNhbnMgR3VybXVraGlcIiwgXCJOb3RvIFNhbnMgR3VqYXJhdGlcIiwgXCJOb3RvIFNhbnMgVGVsdWd1XCIsXG4gICAgXCJOb3RvIFNhbnMgS2FubmFkYVwiLCBcIk5vdG8gU2FucyBPcml5YVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIC0tYmx1ZTogIzAyNGY5ZDtcbiAgLS1ncmVlbjogIzAwODg0MDtcbiAgLS1vcmFuZ2U6ICNlNTVhMjg7XG4gIC0tcmVkOiAjZmY0NTU4O1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuICAtLWdyYXktaHM6IDAsIDAlO1xuICAtLWdyYXk6IGhzbCh2YXIoLS1ncmF5LWhzKSwgMjAlKTtcbiAgLS1ncmF5LTA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgOTUlKTtcbiAgLS1ncmF5LTEwMDogaHNsKHZhcigtLWdyYXktaHMpLCA4MCUpO1xuICAtLWdyYXktMjAwOiBoc2wodmFyKC0tZ3JheS1ocyksIDYwJSk7XG4gIC0tZ3JheS0zMDA6IGhzbCh2YXIoLS1ncmF5LWhzKSwgNTklKTtcbiAgLS1ncmF5LTQwMDogaHNsKHZhcigtLWdyYXktaHMpLCA0MCUpO1xuICAtLWdyYXktODAwOiB2YXIoLS1ncmF5KTtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDI0ZjlkO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwODg0MDtcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2U1NWEyODtcbiAgLS1wcmltYXJ5LTA6ICNmM2Y3ZmE7XG4gIC0tcHJpbWFyeS0xMDA6ICNlZGY0Zjk7XG4gIC0tcHJpbWFyeS0yMDA6ICM4MGE3Y2U7XG4gIC0tcHJpbWFyeS0yNTA6ICNkM2U3ZjQ7XG4gIC0tcHJpbWFyeS0zMDA6ICM3YWI0ZWU7XG4gIC0tcHJpbWFyeS00MDA6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAtLXByaW1hcnktNjAwOiAjMDA1MzkxO1xuICAtLXByaW1hcnktODAwOiAjMDAyZTUwO1xuICAtLXNlY29uZGFyeS0wOiAjZTFmZmRmO1xuICAtLXNlY29uZGFyeS0xMDA6ICMwMGM3ODY7XG4gIC0tc2Vjb25kYXJ5LTIwMDogIzA3YmM4MTtcbiAgLS1zZWNvbmRhcnktNDAwOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAtLXRlcnRpYXJ5LTA6ICNmZWVkZDc7XG4gIC0tdGVydGlhcnktMTAwOiAjZmZhMTFkO1xuICAtLXRlcnRpYXJ5LTQwMDogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAtLXJlZC0wOiAjZmJjY2QxO1xuICAtLXJlZC0xMDA6ICNmZjY5Nzk7XG4gIC0tcmVkLTQwMDogdmFyKC0tcmVkKTtcbiAgLS1pbmZvLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgLS1zdWNjZXNzLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIC0td2FybmluZy1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgLS1kYW5nZXItY29sb3I6IHZhcigtLXJlZCk7XG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTApO1xuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWJnLWJvZHk6IHZhcigtLXByaW1hcnktMCk7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAtLWFscGhhMDogMDtcbiAgLS1hbHBoYTI1OiAwLjI1O1xuICAtLWFscGhhNTA6IDAuNTtcbiAgLS1hbHBoYTc1OiAwLjc1O1xuICAtLWZvbnQtZGVmYXVsdC1zaXplOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogdmFyKC0tZm9udC1kZWZhdWx0LXNpemUpO1xuICAtLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuICAtLWZvbnQtd2VpZ2h0LWJhc2U6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIC0tbGluZS1oZWlnaHQtYmFzZTogY2FsYyh2YXIoLS1mb250LXNpemUtYmFzZSkgKiAxLjYxODAzMzk4ODc1KTtcbiAgLS1oMS1mb250LXNpemU6IDJyZW07XG4gIC0taDItZm9udC1zaXplOiAxLjc1cmVtO1xuICAtLWgzLWZvbnQtc2l6ZTogMS41cmVtO1xuICAtLWg0LWZvbnQtc2l6ZTogMS4ycmVtO1xuICAtLWg1LWZvbnQtc2l6ZTogMXJlbTtcbiAgLS1oNi1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgLS1mb250LXNpemUtbGc6IHZhcigtLWg0LWZvbnQtc2l6ZSk7XG4gIC0tZm9udC1zaXplLW1kOiB2YXIoLS1oNS1mb250LXNpemUpO1xuICAtLWZvbnQtc2l6ZS1ub3JtYWw6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgLS1mb250LXNpemUtc206IDAuNzVyZW07XG4gIC0tZm9udC1zaXplLXhzOiAwLjYyNXJlbTtcbiAgLS1wLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICAtLWJhc2UtZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLS1iYXNlLWJsb2NrLXNwYWNlOiAwLjVyZW07XG4gIC0taWNvbi1zdmcteHhzOiAwLjc1cmVtO1xuICAtLWljb24tc3ZnLXhzOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogMik7XG4gIC0taWNvbi1zdmctc206IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiAzKTtcbiAgLS1pY29uLXN2Zy1tZDogY2FsYyh2YXIoLS1iYXNlLWJsb2NrLXNwYWNlKSAqIDQpO1xuICAtLWljb24tc3ZnLWxnOiBjYWxjKHZhcigtLWJhc2UtYmxvY2stc3BhY2UpICogNSk7XG4gIC0taWNvbi1zdmcteGw6IGNhbGModmFyKC0tYmFzZS1ibG9jay1zcGFjZSkgKiA2KTtcbiAgLS1yYy05NkM4REE6ICM5NkM4REE7XG4gIC0tcmMtMDA3NkZFOiAjMDA3NkZFO1xuICAtLXJjLUU1RURGNTogI0U1RURGNTtcbiAgLS1yYy03YzdiN2I6ICM3YzdiN2I7XG4gIC0tcmMtZjVmNWY1OiAjZjVmNWY1O1xuICAtLXJjLWZkZmRmZDogI2ZkZmRmZDtcbiAgLS1yYy1kZWRlZGU6ICNkZWRlZGU7XG4gIC0tcmMtRjVGOUZDOiAjRjVGOUZDO1xuICAtLXJjLWM0YzRjNDogI2M0YzRjNDtcbiAgLS1yYy1kOGQ4ZDg6ICNkOGQ4ZDg7XG4gIC0tcmMtZTllNWU1OiAjZTllNWU1O1xuICAtLXJjLWRkZGRkZDogI2RkZGRkZDtcbiAgLS1yYy03Yjg2ZjQ6ICM3Yjg2ZjQ7XG4gIC0tcmMtZDBkMGQwOiAjZDBkMGQwO1xuICAtLXJjLTVjOGRiNzogIzVjOGRiNztcbiAgLS1yYy05MWFlY2M6ICM5MWFlY2M7XG4gIC0tcmMtZjlmOWY5OiAjZjlmOWY5O1xuICAtLXJjLWQ0ZDNkMzogI2Q0ZDNkMztcbiAgLS1yYy1GQUZBRkE6ICNGQUZBRkE7XG4gIC0tcmMtODY2QTZBOiAjODY2YTZhO1xuICAtLXJjLTk3OTc5NzogIzk3OTc5NztcbiAgLS1yYy1lMGUxZTI6ICNlMGUxZTI7XG4gIC0tcmMtMDBCRDdGOiAjMDBCRDdGO1xuICAtLXJjLTlGOUY5RjogIzlGOUY5RjtcbiAgLS1yYy1GM0Y4RkY6ICNGM0Y4RkY7XG4gIC0tcmMtODBBN0NFOiAjODBBN0NFO1xuICAtLXJjLTliOWI5YjogIzliOWI5YjtcbiAgLS1yYy0yY2E1OGQ6ICMyY2E1OGQ7XG4gIC0tcmMtMDA3QUZGOiAjMDA3QUZGO1xuICAtLXJjLWJkYmRiZDogI2JkYmRiZDtcbiAgLS1yYy1jZWNlY2U6ICNjZWNlY2U7XG4gIC0tcmMtMjk3MmE0OiAjMjk3MmE0O1xuICAtLXJjLUUwRjFGRDogI0UwRjFGRDtcbiAgLS1yYy1DOEQ2RUE6ICNDOEQ2RUE7XG4gIC0tcmMtZTJlM2U1OiAjZTJlM2U1O1xuICAtLXJjLUJDQkVDMDogI0JDQkVDMDtcbiAgLS1yYy1kNGQ0ZDU6ICNkNGQ0ZDU7XG4gIC0tcmMtZDRkOGRhOiAjZDRkOGRhO1xuICAtLXJjLWJmZTFjZjogI2JmZTFjZjtcbiAgLS1yYy0yODlmZDk6ICMyODlmZDk7XG4gIC0tcmMtZTY4OTAwOiAjZTY4OTAwO1xuICAtLXJjLTJmNDI3MjogIzJmNDI3MjtcbiAgLS1yYy1lMGUwZTA6ICNlMGUwZTA7XG4gIC0tcmMtMjM2MWZmOiAjMjM2MWZmO1xuICAtLXJjLWMyYzJjMjogI2MyYzJjMjtcbiAgLS1yYy1lNWU1ZTU6ICNlNWU1ZTU7XG4gIC0tcmMtZmZiMzAwOiAjZmZiMzAwO1xuICAtLXJjLWQ4ZGVlMjogI2Q4ZGVlMjtcbiAgLS1yYy0yNTI1MjU6ICMyNTI1MjU7XG4gIC0tcmMtZmNmMmQ2OiAjZmNmMmQ2O1xuICAtLXJjLWFkZDhlNjogI2FkZDhlNjtcbiAgLS1yYy1hZmQ5ZTc6ICNhZmQ5ZTc7XG4gIC0tcmMtRDlFNEYyOiAjRDlFNEYyO1xuICAtLXJjLTg4QjdFNjogIzg4QjdFNjtcbiAgLS1yYy00YTRhNGE6ICM0YTRhNGE7XG4gIC0tcmMtZmZmNmY2OiAjZmZmNmY2O1xuICAtLXJjLWY3ZjdmNzogI2Y3ZjdmNztcbiAgLS1yYy02NmM3ZjQ6ICM2NmM3ZjQ7XG4gIC0tcmMtMUI0Nzg1OiAjMUI0Nzg1O1xuICAtLXJjLWE5YTlhOTogI2E5YTlhOTtcbiAgLS1yYy1lZWVlZWU6ICNlZWVlZWU7XG4gIC0tcmMtMWIxYzFkOiAjMWIxYzFkO1xuICAtLXJjLWRlZGVkZjogI2RlZGVkZjtcbiAgLS1yYy1hYWFhYWE6ICNhYWFhYWE7XG4gIC0tcmMtMDQyRDU1OiAjMDQyRDU1O1xuICAtLXJjLWVlZWVlZTogI2VlZWVlZTtcbiAgLS1yYy1iYmJiYmI6ICNiYmJiYmI7XG4gIC0tcmMtMDA5RDUzOiAjMDA5RDUzO1xuICAtLXJjLUUwRUZGRjogI0UwRUZGRjtcbiAgLS1yYy0xOTZEQUI6ICMxOTZEQUI7XG4gIC0tcmMtYzJjMmMyOiAjYzJjMmMyO1xuICAtLXJjLWU1ZTVlNTogI2U1ZTVlNTtcbiAgLS1yYy1jM2MzYzM6ICNjM2MzYzM7XG4gIC0tcmMtMDBhYmM3OiMwMGFiYzc7XG4gIC0tcmMtRkNFNkU2OiNGQ0U2RTY7XG4gIC0tcmMtREVDQUNBOiNERUNBQ0E7XG4gIC0tcmMtNDI0MjQyOiM0MjQyNDI7XG4gIC0tcmMtRjVEN0Q3OiNGNUQ3RDc7XG4gIC0tcmMtRjdGRkY1OiNGN0ZGRjU7XG4gIC0tcmMtRDNERUQxOiNEM0RFRDE7XG4gIC0tcmMtRUJGNkUwOiNFQkY2RTA7XG4gIC0tcmMtRjZGNkY2OiNGNkY2RjY7XG4gIC0tcmMtMzNCNkNDOiMzM0I2Q0M7XG4gIC0tcmMtMmRhZGMyOiMyZGFkYzI7XG4gIC0tcmMtMGZiYWQ2OiMwZmJhZDY7XG4gIC0tcmMtZjdmZmVjOiNmN2ZmZWM7XG4gIC0tcmMtZDJkZGM3OiNkMmRkYzc7XG4gIC0tcmMtZmZlMWUxOiNmZmUxZTE7XG4gIC0tcmMtZTZjOGM4OiNlNmM4Yzg7XG4gIC0tcmMtZjU2YjU2OiNmNTZiNTY7XG4gIC0tcmMtZGM1MjNkOiNkYzUyM2Q7XG4gIC0tcmMtZTY1YzQ3OiNlNjVjNDc7XG4gIC0tcmMtNTY1YzcwOiM1NjVjNzA7XG4gIC0tcmMtNkQ3Mjc4OiM2RDcyNzg7XG4gIC0tcmMtRTA4QTIwOiNFMDhBMjA7XG4gIC0tcmMtREQ2ODBGOiNERDY4MEY7XG4gIC0tcmMtZGFkOWNiOiNkYWQ5Y2I7XG4gIC0tcmMtRkZEOTU0OiNGRkQ5NTQ7XG4gIC0tcmMtcmdiYS1ibGFjazogMCwgMCwgMDtcbiAgLS1yYy1yZ2JhLXdoaXRlOiAyNTUsIDI1NSwgMjU1O1xuICAtLXJjLXJnYmEtZ3JheTogNTEsIDUxLCA1MTtcbiAgLS1yYy1yZ2JhLXByaW1hcnk6IDIsIDc5LCAxNTc7XG4gIC0tcmMtcmdiYS1wcmltYXJ5LTMwMDogNDEsIDExNCwgMTY0O1xuICAtLXJjLXJnYmEtZ3JheS0zMDA6IDM0LCAzNiwgMzg7XG4gIC0tcmMtcmdiYS04NjZhNmE6IDEzNCwgMTA2LCAxMDY7XG4gIC0tcmMtcmdiYS1kMGQwZDA6IDIwOCwgMjA4LCAyMDg7XG4gIC0tcmMtcmdiYS03Yjg2ZjQ6IDEyMywgMTM0LCAyNDQ7XG4gIC0tcmMtcmdiYS1DOEQ2RUE6IDIwMCwgMjE0LCAyMzQ7XG4gIC0tdWktZHJvcGRvd24tc2VsZWN0aW9uLWljb246IzQ5QjFGMjtcbn1cblxuLyogRm9udHMgKi9cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX2RldGFpbHMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTtcbn1cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX3RpdGxlX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX3RpdGxlX19zdWJ0aXRsZSAuZG90LWRpdmlkZXIge1xuICB3aWR0aDogMC4yNXJlbTtcbiAgaGVpZ2h0OiAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggMC41cmVtO1xufVxuLmNvbnRlbnQtdmlkZW9fX3BsYXllcl9fdGl0bGVfX3N1YnRpdGxlIGkge1xuICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX3NjcmVlbnBhcnQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cbi5jb250ZW50LXZpZGVvX19wbGF5ZXJfX3NjcmVlbnBhcnQgLnNlcGFyYXRvciB7XG4gIGJvcmRlci1sZWZ0OiAwLjAzMTI1cmVtIHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAwLjVyZW07XG59XG4uY29udGVudC12aWRlb19fY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYXNwZWN0cmF0aW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuLmFzcGVjdHJhdGlvW2RhdGEtcmF0aW89XCIxNjo5XCJdIHtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cbi5hc3BlY3RyYXRpbyBbZGF0YS1yYXRpbz1cIjQ6M1wiXSB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG59XG4uYXNwZWN0cmF0aW8gPiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXNwZWN0cmF0aW8gPiAqIHZpZGVvLCAuYXNwZWN0cmF0aW8gPiAqIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5hc3BlY3RyYXRpby5wbGF5ZXItZnVsbHNjcmVlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwcmVtO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5hc3BlY3RyYXRpby5wbGF5ZXItZnVsbHNjcmVlbiBpZnJhbWUsIC5hc3BlY3RyYXRpby5wbGF5ZXItZnVsbHNjcmVlbiB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGlucy9taXhpbnNcIjtcblxuLy8gY29udGVudCB2aWRlb1xuLmNvbnRlbnQtdmlkZW8ge1xuICAmX19wbGF5ZXIge1xuICAgICZfX2RldGFpbHMge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGN1bGF0ZVJlbSg2NHB4KTtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplKTtcblxuICAgICAgJl9fc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICBjYWxjdWxhdGVSZW0oMTJweCk7XG4gICAgICAgIC5kb3QtZGl2aWRlciB7XG4gICAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVJlbSg0cHgpO1xuICAgICAgICAgIGhlaWdodDogY2FsY3VsYXRlUmVtKDRweCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fc2NyZWVucGFydCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBjYWxjdWxhdGVSZW0oMC41cHgpIHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjdWxhdGVSZW0oNDBweCk7XG4gICAgICAgIHdpZHRoOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGN1bGF0ZVJlbSg4cHgpO1xuICAgIG1hcmdpbi1yaWdodDogY2FsY3VsYXRlUmVtKC04cHgpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjdWxhdGVSZW0oOHB4KTtcbiAgfVxufVxuXG4vL2FzcGVjdCByYXRpb1xuLmFzcGVjdHJhdGlvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgJltkYXRhLXJhdGlvPVwiMTY6OVwiXSB7XG4gICAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgfVxuXG4gIFtkYXRhLXJhdGlvPVwiNDozXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICB9XG5cbiAgJiA+ICoge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICB2aWRlbyxpZnJhbWUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIC8vIGJvcmRlcjogY2FsY3VsYXRlUmVtKDZweCkgc29saWQgdmFyKC0tYmxhY2spO1xuICAgIH1cbiAgfVxuICAmLnBsYXllci1mdWxsc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOmZpeGVkICFpbXBvcnRhbnQ7XG4gICAgdG9wOmNhbGN1bGF0ZVJlbSgwcHgpOy8vNTBweFxuICAgIGxlZnQ6MDtcbiAgICBib3R0b206MDsgXG4gICAgcmlnaHQ6MDtcbiAgICBib3JkZXI6bm9uZTsgXG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowOyBcbiAgICB6LWluZGV4Ojk5OTk7XG4gICB9XG4gICAmLnBsYXllci1mdWxsc2NyZWVuIGlmcmFtZSwgJi5wbGF5ZXItZnVsbHNjcmVlbiB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXdoaXRlKTtcbiB9XG59XG4iXX0= */"];



/***/ }),

/***/ "lE07":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/credits-and-licence/credits-and-licence.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! exports provided: RenderType_CreditsAndLicenceComponent, View_CreditsAndLicenceComponent_0, View_CreditsAndLicenceComponent_Host_0, CreditsAndLicenceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CreditsAndLicenceComponent", function() { return RenderType_CreditsAndLicenceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreditsAndLicenceComponent_0", function() { return View_CreditsAndLicenceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreditsAndLicenceComponent_Host_0", function() { return View_CreditsAndLicenceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsAndLicenceComponentNgFactory", function() { return CreditsAndLicenceComponentNgFactory; });
/* harmony import */ var _credits_and_licence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credits-and-licence.component.scss.shim.ngstyle */ "TAIQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/core/index.ngfactory */ "CeGm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/form-field/index.ngfactory */ "H3DK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/select/index.ngfactory */ "Y1Mv");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../telemetry/directives/telemetry-interact/telemetry-interact.directive */ "JEXW");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/expansion/index.ngfactory */ "W3M2");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _credits_and_licence_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./credits-and-licence.component */ "Dha3");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");




























var styles_CreditsAndLicenceComponent = [_credits_and_licence_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CreditsAndLicenceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CreditsAndLicenceComponent, data: {} });

function View_CreditsAndLicenceComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "content-metadeta sb-bg-color-white mt-8 text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "mx-16 py-16 content-metadeta__content"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["aria-level", "2"], ["class", "content-metadeta__title fnormal font-weight-bold"], ["role", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "content-metadeta__text fnormal pt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.description))); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.description); _ck(_v, 5, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "py-8"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showDownloadTranscript() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["class", "sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn download-scripts-btn"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "i", [["class", "icon-svg icon-svg--sm icon-download-transcripts icon-svg--primary ml-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:use", [[":xlink:href", "./assets/images/sprite.svg#file_download"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.DownloadTranscript))); _ck(_v, 2, 0, currVal_0); }); }
function View_CreditsAndLicenceComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.author))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.author); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.attributions))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.attributions); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.licenseTerms))); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.contentData.license; _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "break-all"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.contentData.licenseDetails["url"], ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.contentData.licenseDetails["url"]; _ck(_v, 2, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " ", "\u200E "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.contentData.licenseDetails["url"]; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData.licenseDetails["name"]; var currVal_1 = _co.contentData.licenseDetails["description"]; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CreditsAndLicenceComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : ((_co.contentData.licenseDetails == null) ? null : _co.contentData.licenseDetails.name)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_CreditsAndLicenceComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [",\u00A0", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.copyrightYear); _ck(_v, 1, 0, currVal_0); }); }
function View_CreditsAndLicenceComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.contentData == null) ? null : _co.contentData.copyrightYear); _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.copyRight))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.copyright); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal sb-color-primary-400"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.contentcopiedtitle))); _ck(_v, 1, 0, currVal_0); }); }
function View_CreditsAndLicenceComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.content))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.name)); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.authorOfSourceContent))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.author)); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.licenseTerms))); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.license)); _ck(_v, 4, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "content-metadeta__text fnormal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.organisation.join(", "))); _ck(_v, 1, 0, currVal_0); }); }
function View_CreditsAndLicenceComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "mailto:", ((_co.contentData.orgDetails == null) ? null : _co.contentData.orgDetails.email), "?subject=", _co.contentData.name, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = ((_co.contentData.orgDetails == null) ? null : _co.contentData.orgDetails.email); _ck(_v, 1, 0, currVal_1); }); }
function View_CreditsAndLicenceComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "py-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "content-metadeta__title fsmall mb-4"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.organisation)); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.contentData == null) ? null : ((_co.contentData.orgDetails == null) ? null : _co.contentData.orgDetails.email)); _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.publishedOnInstanceName), "{instance}", _co.instance)); _ck(_v, 1, 0, currVal_0); }); }
function View_CreditsAndLicenceComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.originData); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.name)); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.author)); _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.license)); _ck(_v, 8, 0, currVal_3); var currVal_4 = ((_co.contentData == null) ? null : ((_co.contentData.originData == null) ? null : _co.contentData.originData.organisation)); _ck(_v, 10, 0, currVal_4); }, null); }
function View_CreditsAndLicenceComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-dropdown__options mat-option mat-focus-indicator"], ["role", "option"]], [[1, "aria-label", 0], [1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[13, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTGROUP"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_9 = _v.context.$implicit; _ck(_v, 1, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _v.context.$implicit; _ck(_v, 2, 0, currVal_10); }); }
function View_CreditsAndLicenceComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 41, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 40, "div", [["class", "ui modal transition active visible small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["aria-label", "close dialog"], ["class", "mat-close-btn"], ["mat-dialog-close", ""]], [[1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._onButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]], { ariaLabel: [0, "ariaLabel"], dialogResult: [1, "dialogResult"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 27, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 25, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 24, "div", [["class", "ui center aligned segment text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 23, "mat-form-field", [["appearance", "fill"], ["class", "sb-mat__dropdown mb-16 w-100 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _suffixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[6, 4], [7, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 1, 8, "mat-select", [["aria-autocomplete", "none"], ["aria-haspopup", "true"], ["aria-label", "Export As"], ["class", "selection mat-select"], ["role", "combobox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-label", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "mat-select-multiple", null]], [[null, "valueChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("valueChange" === en)) {
        var pd_3 = ((_co.selectedLanguage = $event) !== false);
        ad = (pd_3 && ad);
    } if (("selectionChange" === en)) {
        var pd_4 = (_co.changeTranscriptlanguage($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MAT_FORM_FIELD"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MAT_SELECT_CONFIG"]]], { value: [0, "value"], ariaLabel: [1, "ariaLabel"] }, { selectionChange: "selectionChange", valueChange: "valueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4], [5, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_CreditsAndLicenceComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "mat-dialog-actions", [["class", "sb-mat__modal__actions mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "button", [["appTelemetryInteract", ""], ["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.dowloadTranscript() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _telemetry_directives_telemetry_interact_telemetry_interact_directive__WEBPACK_IMPORTED_MODULE_16__["TelemetryInteractDirective"], [_telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_17__["TelemetryService"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]], { telemetryInteractObject: [0, "telemetryInteractObject"], telemetryInteractEdata: [1, "telemetryInteractEdata"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](41, { id: 0, type: 1, ver: 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "close dialog"; var currVal_3 = ""; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_27 = "fill"; _ck(_v, 14, 0, currVal_27); var currVal_44 = _co.selectedLanguage; var currVal_45 = "Export As"; _ck(_v, 30, 0, currVal_44, currVal_45); var currVal_46 = _co.options; _ck(_v, 36, 0, currVal_46); var currVal_47 = _ck(_v, 41, 0, _co.transcripts, "transcripts", "1.0"); var currVal_48 = _co.transcriptsInteractEdata; _ck(_v, 40, 0, currVal_47, currVal_48); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaLabel || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).type; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.DownloadTranscript))); _ck(_v, 8, 0, currVal_4); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "standard"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "fill"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "outline"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "legacy"); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.errorState; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._canLabelFloat(); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldLabelFloat(); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._hasFloatingLabel(); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._hideControlPlaceholder(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.disabled; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.autofilled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.focused; var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color == "accent"); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color == "warn"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("untouched"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("touched"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("pristine"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("dirty"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("valid"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("invalid"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("pending"); var currVal_26 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationsEnabled; _ck(_v, 13, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26]); var currVal_28 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.selectLanguage)); _ck(_v, 27, 0, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).tabIndex; var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).panelOpen ? (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id + "-panel") : null); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).panelOpen; var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ariaLabel || null); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required.toString(); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled.toString(); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).errorState; var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._ariaDescribedby || null); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._getAriaActiveDescendant(); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).errorState; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).empty; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).multiple; _ck(_v, 28, 1, [currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); var currVal_49 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.dashboard == null) ? null : _co.resourceService.frmelmnts.lbl.dashboard.download)))); _ck(_v, 42, 0, currVal_49); }); }
function View_CreditsAndLicenceComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showAlertModal = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_CreditsAndLicenceComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[3, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_20__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true, "small"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CreditsAndLicenceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_22__["InterpolatePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "mat-accordion", [["class", "sb-mat-accordion mb-16 mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _headers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 16777216, null, null, 23, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_25__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 4, "mat-expansion-panel-header", [["class", "sb-mat-accordion__title fnormal mat-expansion-panel-header mat-focus-indicator"], ["role", "button"], ["tabindex", "0"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [2, "_mat-animation-noopable", null], [4, "height", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4374528, [[1, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 14, "div", [["aria-labelledby", "aboutTheContent"], ["class", "sb-mat-accordion__content"], ["content", ""], ["id", "aboutTheContent"], ["role", "region"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreditsAndLicenceComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData.description; _ck(_v, 2, 0, currVal_0); var currVal_16 = ((_co.contentData == null) ? null : _co.contentData.transcripts); _ck(_v, 18, 0, currVal_16); var currVal_17 = ((_co.contentData == null) ? null : _co.contentData.author); _ck(_v, 20, 0, currVal_17); var currVal_18 = ((_co.contentData == null) ? null : _co.contentData.attributions); _ck(_v, 22, 0, currVal_18); var currVal_19 = ((_co.contentData == null) ? null : _co.contentData.license); _ck(_v, 24, 0, currVal_19); var currVal_20 = ((_co.contentData == null) ? null : ((_co.contentData.licenseDetails == null) ? null : _co.contentData.licenseDetails.name)); _ck(_v, 26, 0, currVal_20); var currVal_21 = ((_co.contentData == null) ? null : _co.contentData.copyright); _ck(_v, 28, 0, currVal_21); var currVal_22 = _co.contentData.originData; _ck(_v, 30, 0, currVal_22); var currVal_23 = _co.showDownloadPopup; _ck(_v, 32, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).multi; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).expanded; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._hasSpacing(); _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).panel._headerId; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled ? (-1) : 0); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getPanelId(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._isExpanded(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).panel.disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._isExpanded(); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getTogglePosition() === "after"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getTogglePosition() === "before"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations"); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getHeaderHeight(); _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.aboutTheContent))); _ck(_v, 15, 0, currVal_15); }); }
function View_CreditsAndLicenceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-credits-and-licence", [], null, null, null, View_CreditsAndLicenceComponent_0, RenderType_CreditsAndLicenceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _credits_and_licence_component__WEBPACK_IMPORTED_MODULE_26__["CreditsAndLicenceComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_27__["ResourceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CreditsAndLicenceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-credits-and-licence", _credits_and_licence_component__WEBPACK_IMPORTED_MODULE_26__["CreditsAndLicenceComponent"], View_CreditsAndLicenceComponent_Host_0, { contentData: "contentData" }, {}, []);



/***/ }),

/***/ "mSyn":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-actions/content-actions.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContentActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentActionsComponent", function() { return ContentActionsComponent; });
/* harmony import */ var _sunbird_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sunbird/telemetry */ "RnNo");
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionButtons */ "zVxz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_module_offline_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/module/offline/services */ "3yhm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











var ContentActionsComponent = (function () {
    function ContentActionsComponent(router, activatedRoute, resourceService, toasterService, contentUtilsServiceService, telemetryService, navigationHelperService, deviceDetectorService, contentManagerService, offlineCardService, utilService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.resourceService = resourceService;
        this.toasterService = toasterService;
        this.contentUtilsServiceService = contentUtilsServiceService;
        this.telemetryService = telemetryService;
        this.navigationHelperService = navigationHelperService;
        this.deviceDetectorService = deviceDetectorService;
        this.contentManagerService = contentManagerService;
        this.offlineCardService = offlineCardService;
        this.utilService = utilService;
        this.isFullScreen = false;
        this.contentDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.actionButtons = _actionButtons__WEBPACK_IMPORTED_MODULE_1__["actionButtons"];
        this.fullScreenActionButtons = _actionButtons__WEBPACK_IMPORTED_MODULE_1__["fullScreenActionButtons"];
        this.contentRatingModal = false;
        this.showExportLoader = false;
        this.showModal = false;
        this.showDeleteModal = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.objectRollUp = {};
        this.contentDownloadStatus = {};
        this.showDownloadLoader = false;
        this.deleteContentIds = [];
        this.sharelinkModal = false;
    }
    ContentActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enableDisableactionButtons();
        this.isDesktopApp = this.utilService.isDesktopApp;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["toLower"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.contentData, 'board')) === 'cbse') {
            this.contentData.board = 'CBSE/NCERT';
        }
        var isVideoMimetype = lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](['video/mp4', 'video/webm'], lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.contentData, 'mimeType'));
        this.activatedRoute.params.subscribe(function (params) {
            _this.collectionId = params.collectionId;
        });
        this.actionButtons = lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_actionButtons__WEBPACK_IMPORTED_MODULE_1__["actionButtons"]);
        this.fullScreenActionButtons = lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_actionButtons__WEBPACK_IMPORTED_MODULE_1__["fullScreenActionButtons"]);
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.actionButtons, function (button) {
            button.disabled = (button.label === 'Fullscreen') ? (isVideoMimetype || _this.deviceDetectorService.isMobile() ||
                _this.deviceDetectorService.isTablet()) : button.disabled;
        });
        this.collectionId = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute, 'snapshot.params.collectionId');
        this.mimeType = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.contentData, 'mimeType');
        this.contentPrintable();
        this.subscription = this.contentUtilsServiceService.contentShareEvent.subscribe(function (data) {
            if (data === 'open') {
                _this.shareContent(_this.contentData);
            }
        });
        if (this.isDesktopApp) {
            this.contentManagerService.contentDownloadStatus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe$)).subscribe(function (contentDownloadStatus) {
                _this.contentDownloadStatus = contentDownloadStatus;
                _this.changeContentStatus();
            });
        }
    };
    ContentActionsComponent.prototype.enableDisableactionButtons = function () {
        var _this = this;
        if (!this.isFullScreen) {
            lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.actionButtons, function (data) {
                if (data.name === 'fullscreen') {
                    data.isInActive = false;
                }
            });
        }
        else {
            lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.fullScreenActionButtons, function (data) {
                if (data.name === 'minimize') {
                    data.isInActive = false;
                }
            });
        }
        if (this.assessmentEvents) {
            this.telemetryEventSubscription$ = this.assessmentEvents.subscribe(function (telemetry) {
                var eid = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](telemetry, 'detail.telemetryData.eid');
                if (eid === 'ASSESS') {
                    if (!_this.isFullScreen) {
                        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](_this.actionButtons, function (data) {
                            if (data.name === 'fullscreen') {
                                data.isInActive = true;
                            }
                        });
                    }
                    else {
                        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](_this.fullScreenActionButtons, function (data) {
                            if (data.name === 'minimize') {
                                data.isInActive = true;
                            }
                        });
                    }
                }
            });
        }
    };
    ContentActionsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.enableDisableactionButtons();
        this.contentPrintable();
        if (this.isDesktopApp && lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](changes, 'contentData') && !lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](changes, 'contentData.firstChange')) {
            this.contentData = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](changes, 'contentData.currentValue');
            this.contentManagerService.contentDownloadStatus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe$)).subscribe(function (contentDownloadStatus) {
                _this.contentDownloadStatus = contentDownloadStatus;
                if (_this.contentData &&
                    (contentDownloadStatus[_this.contentData.identifier] === 'COMPLETED' ||
                        contentDownloadStatus[_this.contentData.identifier] === 'DOWNLOADED') && _this.router.url.includes('mydownloads')) {
                    _this.contentDownloaded.emit(_this.contentData);
                }
                _this.changeContentStatus();
            });
        }
    };
    ContentActionsComponent.prototype.onActionButtonClick = function (event, content) {
        switch (event.data.name.toUpperCase()) {
            case 'RATE':
                this.contentRatingModal = true;
                this.logTelemetry('rate-content', content);
                break;
            case 'SHARE':
                if (this.isDesktopApp) {
                    this.exportContent(content);
                }
                else {
                    this.shareContent(content);
                }
                break;
            case 'UPDATE':
                this.updateContent(content);
                this.logTelemetry('update-content', content);
                break;
            case 'DOWNLOAD':
                this.isYoutubeContentPresent(content);
                var id = content.mimeType === 'application/vnd.ekstep.content-collection' ? 'download-collection' : 'download-content';
                this.logTelemetry(id, content);
                break;
            case 'DELETE':
                this.showDeleteModal = true;
                this.logTelemetry('confirm-delete-content', content);
                break;
            case 'PRINT':
                this.printPdf(content);
                this.logTelemetry('print-content', content);
                break;
            case 'FULLSCREEN':
                this.navigationHelperService.emitFullScreenEvent(true);
                this.logTelemetry('fullscreen-content', content);
                break;
            case 'MINIMIZE':
                this.navigationHelperService.emitFullScreenEvent(false);
                this.logTelemetry('minimize-screen-content', content);
                break;
        }
    };
    ContentActionsComponent.prototype.shareContent = function (content) {
        this.sharelinkModal = true;
        var param = {
            identifier: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'identifier'),
            type: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'contentType'),
        };
        this.setTelemetryShareData(param);
        this.shareLink = this.collectionId && lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'identifier') ?
            this.contentUtilsServiceService.getPublicShareUrl(lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'identifier'), lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'mimeType'), this.collectionId) :
            this.contentUtilsServiceService.getPublicShareUrl(lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'identifier'), lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'mimeType'));
        this.logTelemetry('share-content', content);
    };
    ContentActionsComponent.prototype.printPdf = function (content) {
        var pdfUrl = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](content, 'itemSetPreviewUrl');
        window.open(pdfUrl, '_blank');
    };
    ContentActionsComponent.prototype.setTelemetryShareData = function (param) {
        this.telemetryShareData = [{
                id: param.identifier,
                type: param.contentType,
                ver: param.pkgVersion ? param.pkgVersion.toString() : '1.0'
            }];
    };
    ContentActionsComponent.prototype.logTelemetry = function (id, content) {
        var interactData = {
            context: {
                env: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute.snapshot.data.telemetry, 'env') || 'content',
                cdata: []
            },
            edata: {
                id: id,
                type: 'click',
                pageid: lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.activatedRoute.snapshot.data.telemetry, 'pageid') || 'play-content',
            },
            object: {
                id: content['identifier'],
                type: content['contentType'],
                ver: "" + content['pkgVersion'],
                rollup: this.objectRollUp,
            }
        };
        this.telemetryService.interact(interactData);
    };
    ContentActionsComponent.prototype.contentPrintable = function () {
        var _this = this;
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.actionButtons, function (data) {
            if (data.name === 'print') {
                if (_this.contentData.itemSetPreviewUrl) {
                    data.disabled = false;
                }
                else {
                    data.disable = true;
                }
            }
        });
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.fullScreenActionButtons, function (data) {
            if (data.name === 'print') {
                if (_this.contentData.itemSetPreviewUrl) {
                    data.disabled = false;
                }
                else {
                    data.disable = true;
                }
            }
        });
    };
    ContentActionsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription.unsubscribe) {
            this.subscription.unsubscribe();
        }
        this.telemetryEventSubscription$ && this.telemetryEventSubscription$.unsubscribe();
    };
    ContentActionsComponent.prototype.changeContentStatus = function () {
        var _this = this;
        var status = {
            DOWNLOADING: this.resourceService.messages.stmsg.m0140,
            FAILED: this.resourceService.messages.stmsg.m0143,
            DOWNLOADED: this.resourceService.messages.stmsg.m0139,
            PAUSED: this.resourceService.messages.stmsg.m0142,
            CANCELED: this.resourceService.messages.stmsg.m0143,
            COMPLETED: this.resourceService.messages.stmsg.m0139,
            INPROGRESS: this.resourceService.messages.stmsg.m0140,
            RESUME: this.resourceService.messages.stmsg.m0140,
            INQUEUE: this.resourceService.messages.stmsg.m0140
        };
        lodash_es__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.actionButtons, function (data) {
            var disableButton = ['Download', 'Failed', 'Canceled', 'Cancel'];
            if (data.name === 'download') {
                var contentStatus = status[_this.contentDownloadStatus[_this.contentData.identifier]];
                if (_this.contentData) {
                    data.label = contentStatus ? lodash_es__WEBPACK_IMPORTED_MODULE_6__["capitalize"](contentStatus) : _this.isAvailable() ? 'Downloaded' : 'Download';
                }
                else {
                    data.label = 'Download';
                }
                data.disabled = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.contentData, 'downloadUrl') ? !lodash_es__WEBPACK_IMPORTED_MODULE_6__["includes"](disableButton, data.label) : true;
            }
            else if (data.name === 'update') {
                data.label = lodash_es__WEBPACK_IMPORTED_MODULE_6__["capitalize"](data.name);
                data.disabled =
                    !(lodash_es__WEBPACK_IMPORTED_MODULE_6__["has"](_this.contentData, 'desktopAppMetadata') && lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](_this.contentData, 'desktopAppMetadata.updateAvailable'));
            }
            else if (data.name === 'fullscreen') {
                data.disabled = false;
                data.label = 'Full screen';
            }
            else if (!['rate', 'print'].includes(data.name)) {
                var downloaded = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](_this.actionButtons, { name: 'download' });
                data.label = lodash_es__WEBPACK_IMPORTED_MODULE_6__["capitalize"](data.name);
                data.disabled = !lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEqual"](downloaded.label, 'Downloaded');
            }
        });
    };
    ContentActionsComponent.prototype.isAvailable = function () {
        return (lodash_es__WEBPACK_IMPORTED_MODULE_6__["has"](this.contentData, 'desktopAppMetadata') ? (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["has"](this.contentData, 'desktopAppMetadata.isAvailable')
            || lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.contentData, 'desktopAppMetadata.isAvailable')) : false);
    };
    ContentActionsComponent.prototype.isYoutubeContentPresent = function (content) {
        this.showModal = this.offlineCardService.isYoutubeContent(content);
        if (!this.showModal) {
            this.downloadContent(content);
        }
    };
    ContentActionsComponent.prototype.downloadContent = function (content) {
        var _this = this;
        this.showDownloadLoader = true;
        this.contentData['downloadStatus'] = this.resourceService.messages.stmsg.m0140;
        this.contentManagerService.downloadContentId = content.identifier;
        this.contentManagerService.downloadContentData = content;
        this.contentManagerService.failedContentName = content.name;
        this.contentManagerService.startDownload({}).subscribe(function (data) {
            _this.contentManagerService.downloadContentId = '';
            _this.contentManagerService.downloadContentData = {};
            _this.showDownloadLoader = false;
            _this.contentData['downloadStatus'] = _this.resourceService.messages.stmsg.m0140;
        }, function (error) {
            _this.showDownloadLoader = false;
            _this.contentManagerService.downloadContentId = '';
            _this.contentManagerService.downloadContentData = {};
            _this.contentManagerService.failedContentName = '';
            _this.contentData['downloadStatus'] = _this.resourceService.messages.stmsg.m0138;
            if (!(error.error.params.err === 'LOW_DISK_SPACE')) {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0090);
            }
        });
    };
    ContentActionsComponent.prototype.updateContent = function (content) {
        var _this = this;
        this.contentData.desktopAppMetadata['updateAvailable'] = false;
        var request = !lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.collectionId) ? { contentId: content.identifier, parentId: this.collectionId } :
            { contentId: content.identifier };
        this.contentManagerService.updateContent(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
        }, function (err) {
            _this.contentData.desktopAppMetadata['updateAvailable'] = true;
            var errorMessage = !_this.isConnected ? lodash_es__WEBPACK_IMPORTED_MODULE_6__["replace"](_this.resourceService.messages.smsg.m0056, '{contentName}', content.name) :
                _this.resourceService.messages.fmsg.m0096;
            _this.toasterService.error(errorMessage);
        });
    };
    ContentActionsComponent.prototype.exportContent = function (content) {
        var _this = this;
        this.showExportLoader = true;
        this.contentManagerService.exportContent(content.identifier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (data) {
            _this.showExportLoader = false;
            _this.toasterService.success(_this.resourceService.messages.smsg.m0059);
        }, function (error) {
            _this.showExportLoader = false;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](error, 'error.responseCode') !== 'NO_DEST_FOLDER') {
                _this.toasterService.error(_this.resourceService.messages.fmsg.m0091);
            }
        });
    };
    ContentActionsComponent.prototype.deleteContent = function (content) {
        var _this = this;
        var button = lodash_es__WEBPACK_IMPORTED_MODULE_6__["find"](this.actionButtons, { label: 'Delete' });
        button.disabled = true;
        this.logTelemetry('delete-content', content);
        var request = !lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](this.collectionId) ? { request: { contents: [content.identifier], visibility: 'Parent' } } :
            { request: { contents: [content.identifier] } };
        this.contentManagerService.deleteContent(request).subscribe(function (data) {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](data, 'result.deleted'))) {
                _this.contentData['desktopAppMetadata.isAvailable'] = false;
                _this.toasterService.success(_this.resourceService.messages.stmsg.desktop.deleteContentSuccessMessage);
            }
            else {
                _this.toasterService.error(_this.resourceService.messages.etmsg.desktop.deleteContentErrorMessage);
            }
        }, function (err) {
            _this.toasterService.error(_this.resourceService.messages.etmsg.desktop.deleteContentErrorMessage);
        });
    };
    return ContentActionsComponent;
}());



/***/ }),

/***/ "ry1x":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/shared-feature/components/confirmation-popup/confirmation-popup.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sunbird/shared */ "btWG");


var ConfirmationPopupComponent = (function () {
    function ConfirmationPopupComponent(resourceService) {
        this.resourceService = resourceService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmationPopupComponent.prototype.onPopState = function (event) {
        this.closeModal();
    };
    ConfirmationPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPopupComponent.prototype.closeModal = function () {
        this.confirmationModal && this.confirmationModal.deny();
        this.close.emit();
    };
    ConfirmationPopupComponent.prototype.navigateToAddCertificate = function () {
        this.confirmationModal && this.confirmationModal.deny();
        this.close.emit({ mode: 'add-certificates', batchId: this.batchId });
    };
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "vroN":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-actions/content-actions.component.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: RenderType_ContentActionsComponent, View_ContentActionsComponent_0, View_ContentActionsComponent_Host_0, ContentActionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentActionsComponent", function() { return RenderType_ContentActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentActionsComponent_0", function() { return View_ContentActionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentActionsComponent_Host_0", function() { return View_ContentActionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentActionsComponentNgFactory", function() { return ContentActionsComponentNgFactory; });
/* harmony import */ var _content_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-actions.component.scss.shim.ngstyle */ "W4HH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@project-sunbird/common-consumption-v9/project-sunbird-common-consumption-v9.ngfactory */ "1AqH");
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component.ngfactory */ "kasK");
/* harmony import */ var _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/share-link/share-link.component */ "DJnx");
/* harmony import */ var _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/resource/resource.service */ "vLro");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component.ngfactory */ "YgvI");
/* harmony import */ var _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modal-wrapper/modal-wrapper.component */ "rzaZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/interpolate/interpolate.pipe */ "0T8x");
/* harmony import */ var _content_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content-actions.component */ "mSyn");
/* harmony import */ var _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/toaster/toaster.service */ "feA6");
/* harmony import */ var _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/content-utils/content-utils.service */ "Gfqg");
/* harmony import */ var _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../telemetry/services/telemetry/telemetry.service */ "FgxX");
/* harmony import */ var _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/services/navigation-helper/navigation-helper.service */ "7E7R");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-device-detector */ "/IO6");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/module/offline/services/content-manager/content-manager.service */ "EJ3Z");
/* harmony import */ var _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/services/offline-card-service/offline-card.service */ "vzIX");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/util/util.service */ "+lQ8");























var styles_ContentActionsComponent = [_content_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentActionsComponent, data: {} });

function View_ContentActionsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "mr-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.board)))), "{board}", ((_co.contentData == null) ? null : _co.contentData.board))); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentActionsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot-divider"]], null, null, null, null, null))], null, null); }
function View_ContentActionsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "mr-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.contentData == null) ? null : _co.contentData.me_averageRating) || "0"); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentActionsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "icon star outline"]], [[1, "aria-label", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.arialabelCourserating)), ""); _ck(_v, 1, 0, currVal_0); }); }
function View_ContentActionsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-flex flex-w-wrap content-video__player__tools"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sb-player-actions", [], null, [[null, "buttonClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("buttonClick" === en)) {
        var pd_0 = (_co.onActionButtonClick($event, _co.contentData) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PlayerActionsComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PlayerActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_3__["PlayerActionsComponent"], [], { actionButtons: [0, "actionButtons"] }, { buttonClick: "buttonClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fullScreenActionButtons; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentActionsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-flex flex-w-wrap content-video__player__tools"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sb-player-actions", [], null, [[null, "buttonClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("buttonClick" === en)) {
        var pd_0 = (_co.onActionButtonClick($event, _co.contentData) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PlayerActionsComponent_0"], _node_modules_project_sunbird_common_consumption_v9_project_sunbird_common_consumption_v9_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PlayerActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_3__["PlayerActionsComponent"], [], { actionButtons: [0, "actionButtons"] }, { buttonClick: "buttonClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionButtons; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ContentActionsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [["playerInfo", 1]], null, 16, "div", [["class", "d-flex flex-w-wrap content-video__player__details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "d-flex flex-dc flex-basis-1 ml-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "content-video__player__title mr-auto sb__ellipsis sb__ellipsis--one"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "content-video__player__title__subtitle fsmall mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.contentData == null) ? null : _co.contentData.board); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.contentData == null) ? null : _co.contentData.me_averageRating); _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.contentData == null) ? null : _co.contentData.me_averageRating); _ck(_v, 10, 0, currVal_3); var currVal_4 = ((_co.contentData == null) ? null : _co.contentData.me_averageRating); _ck(_v, 12, 0, currVal_4); var currVal_5 = _co.isFullScreen; _ck(_v, 14, 0, currVal_5); var currVal_6 = !_co.isFullScreen; _ck(_v, 16, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentData == null) ? null : _co.contentData.name); _ck(_v, 3, 0, currVal_0); }); }
function View_ContentActionsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-share-link", [], null, null, null, _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ShareLinkComponent_0"], _shared_components_share_link_share_link_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ShareLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_share_link_share_link_component__WEBPACK_IMPORTED_MODULE_6__["ShareLinkComponent"], [_shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], { shareLink: [0, "shareLink"], telemetryShareData: [1, "telemetryShareData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shareLink; var currVal_1 = _co.telemetryShareData; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ContentActionsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        _co.sharelinkModal = false;
        var pd_0 = (_co.contentUtilsServiceService.contentShareEvent.emit("close") !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, panelClass: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ContentActionsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[1, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "material-modal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentActionsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "sb-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "transition ui dimmer page modals active visible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "ui modal transition active visible normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "sb-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "sb-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "sb-modal-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteContent(_co.contentData);
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "button", [["class", "sb-btn sb-btn-normal sb-btn-outline-primary"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.logTelemetry("cancel-delete-content", _co.contentData);
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.delete))); _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : ((_co.resourceService.frmelmnts.lbl.desktop == null) ? null : _co.resourceService.frmelmnts.lbl.desktop.deleteContent)))), "{name}", ((_co.contentData == null) ? null : _co.contentData.name))); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co.resourceService == null) ? null : ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.lbl == null) ? null : _co.resourceService.frmelmnts.lbl.delete))); _ck(_v, 11, 0, currVal_2); var currVal_3 = ((_co.resourceService.frmelmnts == null) ? null : ((_co.resourceService.frmelmnts.btn == null) ? null : _co.resourceService.frmelmnts.btn.cancel)); _ck(_v, 13, 0, currVal_3); }); }
function View_ContentActionsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "app-modal-wrapper", [], null, [[null, "dismiss"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dismiss" === en)) {
        var pd_0 = ((_co.showDeleteModal = !_co.showDeleteModal) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ModalWrapperComponent_0"], _shared_components_modal_wrapper_modal_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ModalWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [["modal", 4]], 1, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalWrapperComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]], { config: [0, "config"] }, { dismiss: "dismiss" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { modalContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { disableClose: 0, size: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_ContentActionsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_components_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["ModalContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, false, "normal"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ContentActionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_interpolate_interpolate_pipe__WEBPACK_IMPORTED_MODULE_13__["InterpolatePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentActionsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contentData; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.sharelinkModal; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.showDeleteModal; _ck(_v, 6, 0, currVal_2); }, null); }
function View_ContentActionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content-actions", [], null, null, null, View_ContentActionsComponent_0, RenderType_ContentActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _content_actions_component__WEBPACK_IMPORTED_MODULE_14__["ContentActionsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _shared_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], _shared_services_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_15__["ToasterService"], _shared_services_content_utils_content_utils_service__WEBPACK_IMPORTED_MODULE_16__["ContentUtilsServiceService"], _telemetry_services_telemetry_telemetry_service__WEBPACK_IMPORTED_MODULE_17__["TelemetryService"], _shared_services_navigation_helper_navigation_helper_service__WEBPACK_IMPORTED_MODULE_18__["NavigationHelperService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_19__["DeviceDetectorService"], _public_module_offline_services_content_manager_content_manager_service__WEBPACK_IMPORTED_MODULE_20__["ContentManagerService"], _shared_services_offline_card_service_offline_card_service__WEBPACK_IMPORTED_MODULE_21__["OfflineCardService"], _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_22__["UtilService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content-actions", _content_actions_component__WEBPACK_IMPORTED_MODULE_14__["ContentActionsComponent"], View_ContentActionsComponent_Host_0, { contentData: "contentData", isFullScreen: "isFullScreen", assessmentEvents: "assessmentEvents", objectRollUp: "objectRollUp" }, { contentDownloaded: "contentDownloaded" }, []);



/***/ }),

/***/ "zVxz":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/player-helper/components/content-actions/actionButtons.ts ***!
  \***********************************************************************************/
/*! exports provided: actionButtons, fullScreenActionButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionButtons", function() { return actionButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreenActionButtons", function() { return fullScreenActionButtons; });
/* harmony import */ var _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-sunbird/common-consumption-v9 */ "2RKI");

var actionButtons = [
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].DOWNLOAD,
        label: 'Download',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].UPDATE,
        label: 'Update',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].SHARE,
        label: 'Share',
        disabled: false,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].RATE,
        label: 'Rate',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].PRINT,
        label: 'Print',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].DELETE,
        label: 'Delete',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].FULL_SCREEN,
        label: 'Fullscreen',
        disabled: false,
        isInActive: false,
        showSeperator: true
    }
];
var fullScreenActionButtons = [
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].SHARE,
        label: 'Share',
        disabled: false,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].RATE,
        label: 'Rate',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].PRINT,
        label: 'Print',
        disabled: true,
        isInActive: false,
        showSeperator: false
    },
    {
        name: _project_sunbird_common_consumption_v9__WEBPACK_IMPORTED_MODULE_0__["ActionButtonType"].MINIMIZE_SCREEN,
        label: 'Minimize',
        disabled: false,
        isInActive: false,
        showSeperator: true
    }
];


/***/ })

}]);
//# sourceMappingURL=default~module-player-player-module-ngfactory~modules-learn-course-consumption-module-ngfactory~modu~14a7e3bd.js.map