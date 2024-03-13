(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-module-ngfactory~modules-learn-course-consumption-module-ngfacto~9e08451a"],{

/***/ "7C15":
/*!********************************************************!*\
  !*** ./node_modules/sb-svg2pdf/fesm2015/sb-svg2pdf.js ***!
  \********************************************************/
/*! exports provided: CertificateDirectivesModule, CertificateDownloadAsPdfDirective, CertificateDownloadAsPdfService, CertificateDownloadService, PdfDownloadComponent, PdfDownloadModule, PdfDownloadService, domtoimageFactory, jsPdfFactory, normalizeCommonJSImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDirectivesModule", function() { return CertificateDirectivesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDownloadAsPdfDirective", function() { return CertificateDownloadAsPdfDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDownloadAsPdfService", function() { return CertificateDownloadAsPdfService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateDownloadService", function() { return CertificateDownloadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadComponent", function() { return PdfDownloadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadModule", function() { return PdfDownloadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadService", function() { return PdfDownloadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domtoimageFactory", function() { return domtoimageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsPdfFactory", function() { return jsPdfFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeCommonJSImport", function() { return normalizeCommonJSImport; });
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "9ac6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }




var PdfDownloadService = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function PdfDownloadService() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PdfDownloadService);
});

PdfDownloadService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function PdfDownloadService_Factory() {
    return new PdfDownloadService();
  },
  token: PdfDownloadService,
  providedIn: "root"
});
PdfDownloadService = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
  providedIn: 'root'
}), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [])], PdfDownloadService);

var PdfDownloadComponent = /*#__PURE__*/function () {
  function PdfDownloadComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PdfDownloadComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PdfDownloadComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return PdfDownloadComponent;
}();

PdfDownloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
  selector: 'sb-pdf-download',
  template: "\n    <p>\n      pdf-download works!\n    </p>\n  "
}), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [])], PdfDownloadComponent);

var PdfDownloadModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function PdfDownloadModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PdfDownloadModule);
});

PdfDownloadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
  declarations: [PdfDownloadComponent],
  imports: [],
  exports: [PdfDownloadComponent]
})], PdfDownloadModule);

var CertificateDirectivesUtility = /*#__PURE__*/function () {
  function CertificateDirectivesUtility() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CertificateDirectivesUtility);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CertificateDirectivesUtility, null, [{
    key: "appendGhostDiv",
    value: function appendGhostDiv(id, dimensions) {
      var divElement = document.createElement('div');
      divElement.id = id; // divElement.style.position = 'absolute';

      divElement.style.left = -dimensions.width + 'px';
      divElement.style.height = dimensions.height + 'px';
      divElement.style.width = dimensions.width + 'px';
      divElement.style.letterSpacing = 'normal';
      document.body.appendChild(divElement);
      return divElement;
    }
  }, {
    key: "extractFileName",
    value: function extractFileName(template) {
      try {
        return template.split('/').pop().indexOf('.svg') === -1 ? 'certificate' : template.split('/').pop().split('.svg')[0];
      } catch (e) {
        return 'certificate';
      }
    }
  }]);

  return CertificateDirectivesUtility;
}();

var CertificateDownloadAsPdfService = /*#__PURE__*/function () {
  function CertificateDownloadAsPdfService(domtoimageModule, jsPDFModule) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CertificateDownloadAsPdfService);

    this.domtoimageModule = domtoimageModule;
    this.jsPDFModule = jsPDFModule;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CertificateDownloadAsPdfService, [{
    key: "download",
    value: function download(template, handlePdfData, fileName) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;

        var canvasElement, domtoimage;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (template.startsWith('data:image/svg+xml,')) {
                template = decodeURIComponent(template.replace(/data:image\/svg\+xml,/, '')).replace(/\<!--\s*[a-zA-Z0-9\-]*\s*--\>/g, '');
              }

              canvasElement = CertificateDirectivesUtility.appendGhostDiv('sbCertificateDownloadAsPdfCanvas' + Date.now(), {
                width: 1060,
                height: 750
              });
              canvasElement.innerHTML = template;
              _context2.next = 5;
              return this.domtoimageModule;

            case 5:
              domtoimage = _context2.sent;
              domtoimage.toPng(canvasElement, {
                style: {
                  left: '0',
                  right: '0',
                  bottom: '0',
                  top: '0'
                }
              }).then(function (blob) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var JsPDF, pdf;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.jsPDFModule;

                      case 2:
                        JsPDF = _context.sent;
                        pdf = new JsPDF({
                          orientation: 'landscape',
                          unit: 'pt',
                          format: [1060 / 1.33, 750 / 1.33]
                        });
                        pdf.addImage(blob, 'PNG', 0, 0);
                        fileName = fileName || CertificateDirectivesUtility.extractFileName(template);

                        if (handlePdfData) {
                          handlePdfData(fileName + '.pdf', pdf.output('blob'));
                        } else {
                          pdf.save(fileName + '.pdf');
                        }

                        canvasElement.remove();

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }]);

  return CertificateDownloadAsPdfService;
}();

CertificateDownloadAsPdfService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['DOMTOIMAGE']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['JSPDF']
    }]
  }];
};

CertificateDownloadAsPdfService = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('DOMTOIMAGE')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('JSPDF')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object])], CertificateDownloadAsPdfService);

var CertificateDownloadAsPdfDirective = /*#__PURE__*/function () {
  function CertificateDownloadAsPdfDirective(canvgModule, jsPDFModule, certificateDownloadAsPdfService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CertificateDownloadAsPdfDirective);

    this.canvgModule = canvgModule;
    this.jsPDFModule = jsPDFModule;
    this.certificateDownloadAsPdfService = certificateDownloadAsPdfService;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CertificateDownloadAsPdfDirective, [{
    key: "onClick",
    value: function onClick($event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.certificateDownloadAsPdfService.download(this.template);

            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }]);

  return CertificateDownloadAsPdfDirective;
}();

CertificateDownloadAsPdfDirective.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['CANVG']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['JSPDF']
    }]
  }, {
    type: CertificateDownloadAsPdfService
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], CertificateDownloadAsPdfDirective.prototype, "template", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", Promise)], CertificateDownloadAsPdfDirective.prototype, "onClick", null);

CertificateDownloadAsPdfDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
  selector: '[sbCertificateDownloadAsPdf]',
  providers: [CertificateDownloadAsPdfService]
}), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('CANVG')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('JSPDF')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, CertificateDownloadAsPdfService])], CertificateDownloadAsPdfDirective);

function normalizeCommonJSImport(importPromise) {
  // CommonJS's `module.exports` is wrapped as `default` in ESModule.
  return importPromise.then(function (m) {
    return m.default || m;
  });
}

var domtoimageImport;

function domtoimageFactory() {
  if (!domtoimageImport) {
    return normalizeCommonJSImport( // @dynamic
    __webpack_require__.e(/*! import() | domtoimage */ "domtoimage").then(__webpack_require__.t.bind(null, /*! dom-to-image */ "cLAn", 7))).then(function (i) {
      domtoimageImport = i;
      return domtoimageImport;
    });
  }

  return domtoimageImport;
}

var jspdfImport;

function jsPdfFactory() {
  if (!jspdfImport) {
    return normalizeCommonJSImport( // @dynamic
    __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~modules-dashboard-dashboard-module-ngfactory~modules-learn-course-consumption-module-ngfactory").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7))).then(function (i) {
      jspdfImport = i;
      return jspdfImport;
    });
  }

  return jspdfImport;
}

var CertificateDirectivesModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CertificateDirectivesModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CertificateDirectivesModule);
});

CertificateDirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
  declarations: [CertificateDownloadAsPdfDirective],
  exports: [CertificateDownloadAsPdfDirective],
  providers: [{
    provide: 'DOMTOIMAGE',
    useFactory: domtoimageFactory
  }, {
    provide: 'JSPDF',
    useFactory: jsPdfFactory
  }]
})], CertificateDirectivesModule);

var CertificateDownloadService = /*#__PURE__*/function () {
  function CertificateDownloadService(domtoimageModule, jsPDFModule) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CertificateDownloadService);

    this.domtoimageModule = domtoimageModule;
    this.jsPDFModule = jsPDFModule;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CertificateDownloadService, [{
    key: "buildBlob",
    value: function buildBlob(certificateContainer, format) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var domtoimage, JsPDF, options, pngUriString, pdf;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.domtoimageModule;

            case 2:
              domtoimage = _context4.sent;
              _context4.next = 5;
              return this.jsPDFModule;

            case 5:
              JsPDF = _context4.sent;
              options = {
                width: 1060,
                height: 750,
                style: {
                  left: '0',
                  right: '0',
                  bottom: '0',
                  top: '0'
                }
              };

              if (!(format === 'png')) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt("return", domtoimage.toBlob(certificateContainer, options));

            case 9:
              _context4.next = 11;
              return domtoimage.toPng(certificateContainer, options);

            case 11:
              pngUriString = _context4.sent;
              pdf = new JsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [1060 * 0.352778 / 1.333, 750 * 0.352778 / 1.333]
              });
              pdf.addImage(pngUriString, 'PNG', 0, 0);
              return _context4.abrupt("return", pdf.output('blob'));

            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }]);

  return CertificateDownloadService;
}();

CertificateDownloadService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['DOMTOIMAGE']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: ['JSPDF']
    }]
  }];
};

CertificateDownloadService = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('DOMTOIMAGE')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('JSPDF')), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object])], CertificateDownloadService);
/*
 * Public API Surface of pdf-download
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default~modules-dashboard-dashboard-module-ngfactory~modules-learn-course-consumption-module-ngfacto~9e08451a.js.map