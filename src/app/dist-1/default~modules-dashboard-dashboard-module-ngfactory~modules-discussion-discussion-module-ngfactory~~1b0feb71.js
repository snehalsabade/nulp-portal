(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-module-ngfactory~modules-discussion-discussion-module-ngfactory~~1b0feb71"],{

/***/ "+qE3":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "7RJT":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = __webpack_require__(/*! ./Subject */ "ds6q");

var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "Mxlh");

var BehaviorSubject = function (_super) {
  __extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function get() {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(Subject_1.Subject);

exports.BehaviorSubject = BehaviorSubject;

/***/ }),

/***/ "9AGB":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var identity_1 = __webpack_require__(/*! ./identity */ "yoF8");

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

exports.pipe = pipe;

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity_1.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

exports.pipeFromArray = pipeFromArray;

/***/ }),

/***/ "FWf1":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "pshJ");

var Observer_1 = __webpack_require__(/*! ./Observer */ "GiSu");

var Subscription_1 = __webpack_require__(/*! ./Subscription */ "zB/H");

var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "p//D");

var config_1 = __webpack_require__(/*! ./config */ "n3uD");

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "MkmW");

var Subscriber = function (_super) {
  __extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = Observer_1.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = Observer_1.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(Subscription_1.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (isFunction_1.isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== Observer_1.empty) {
        context = Object.create(observerOrNext);

        if (isFunction_1.isFunction(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        hostReportError_1.hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError_1.hostReportError(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function wrappedComplete() {
          return _this._complete.call(_this._context);
        };

        if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError_1.hostReportError(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError_1.hostReportError(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

/***/ }),

/***/ "FiyT":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscription_1 = __webpack_require__(/*! ./Subscription */ "zB/H");

var SubjectSubscription = function (_super) {
  __extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(Subscription_1.Subscription);

exports.SubjectSubscription = SubjectSubscription;

/***/ }),

/***/ "G1Em":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@project-sunbird/discussions-ui-v8/fesm2015/project-sunbird-discussions-ui-v8.js ***!
  \*******************************************************************************************************/
/*! exports provided: ɵd, ɵm, ɵg, ɵf, ɵl, ɵh, ɵk, ɵa, ɵj, ɵe, ɵn, ɵo, ɵbe, ɵu, ɵt, ɵr, ɵs, ɵp, ɵx, ɵq, ɵv, ɵw, ɵz, ɵbd, ɵbb, ɵy, ɵba, ɵbc, ɵb, ɵi, ɵc, provideCsModule, DiscussionUiModule, DiscussionEventsService, ConfigService, CONTEXT_PROPS, DiscussionService, WrapperNavigateService, EventsService, NavigationServiceService, AbstractConfigService, CategoryWidgetComponent, BaseWrapperComponent, TagsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DiscussAllComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DiscussCategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DiscussHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DiscussStartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return DiscussTagsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return DiscussionDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LibEntryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MyDiscussionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SidePannelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TagAllDiscussionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return TrendingTagsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return DiscussionRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return AppLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return AvatarPhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CategoryCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DiscussCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return ElementsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return LoadAlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return PostReplyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return RelatedDiscussionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return SlidersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return PipeFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return PipeListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return PipeRelativeTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return PipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return SortByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return SplitInitialsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RouterServiceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DiscussUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TelemetryUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideCsModule", function() { return provideCsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionUiModule", function() { return DiscussionUiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionEventsService", function() { return DiscussionEventsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_PROPS", function() { return CONTEXT_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionService", function() { return DiscussionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperNavigateService", function() { return WrapperNavigateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function() { return NavigationServiceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractConfigService", function() { return AbstractConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWidgetComponent", function() { return CategoryWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseWrapperComponent", function() { return BaseWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsWidgetComponent", function() { return TagsWidgetComponent; });
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "md7G");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct */ "2WcH");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @project-sunbird/client-services */ "6QGN");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! events */ "+qE3");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-chips */ "CLta");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ "9ac6");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "SVse");








function _callSuper(t, o, e) { return o = Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(o), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(t, Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])() ? Reflect.construct(o, e || [], Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(t).constructor) : o.apply(t, e)); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
















/* tslint:enable */

var DiscussionEventsService = /*#__PURE__*/function () {
  function DiscussionEventsService() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussionEventsService);

    this.telemetryEvent = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussionEventsService, [{
    key: "emitTelemetry",
    value: function emitTelemetry(event) {
      console.log('Lib Event', event);

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEmpty"])(event)) {
        this.telemetryEvent.next(event);
      }
    }
  }]);

  return DiscussionEventsService;
}();

DiscussionEventsService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

DiscussionEventsService.ctorParameters = function () {
  return [];
};

DiscussionEventsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function DiscussionEventsService_Factory() {
    return new DiscussionEventsService();
  },
  token: DiscussionEventsService,
  providedIn: "root"
});

var TelemetryUtilsService = /*#__PURE__*/function () {
  function TelemetryUtilsService(discussionEvents, router) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TelemetryUtilsService);

    this.discussionEvents = discussionEvents;
    this.router = router;
    this._context = [];
    this.currentObj = {};
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TelemetryUtilsService, [{
    key: "setContext",
    value: function setContext(context) {
      this._context = context;
      this.currentObj = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["last"])(context);
    }
  }, {
    key: "uppendContext",
    value: function uppendContext(data) {
      var matchedC = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["find"])(this._context, {
        id: data.id
      });

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEmpty"])(data) && !Object(lodash__WEBPACK_IMPORTED_MODULE_19__["isEqual"])(data, matchedC)) {
        this._context.push(data);
      }

      this.currentObj = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["last"])(this._context);
    }
  }, {
    key: "deleteContext",
    value: function deleteContext(prevTopic) {
      var topic = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["find"])(this._context, prevTopic);

      if (topic) {
        this._context = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["reject"])(this._context, topic);
      }
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this._context;
    }
  }, {
    key: "logImpression",
    value: function logImpression(pageId) {
      this.discussionEvents.emitTelemetry({});
      var impressionEvent = {
        eid: 'IMPRESSION',
        edata: {
          type: 'view',
          pageid: pageId,
          uri: this.router.url
        }
      };

      if (this.currentObj) {
        impressionEvent.context = {
          cdata: [{
            id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'id').toString(),
            type: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'type')
          }]
        };
      }

      this.discussionEvents.emitTelemetry(impressionEvent);
    }
  }, {
    key: "logInteract",
    value: function logInteract(event, pageId) {
      var target = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'currentTarget.attributes.id') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'target.attributes.id') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'srcElement.attributes.id');
      var interactEvent = {
        eid: 'INTERACT',
        edata: {
          id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(target, 'value') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action'),
          type: 'CLICK',
          pageid: pageId
        }
      };

      if (this.currentObj) {
        var object = {
          id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'id').toString(),
          type: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'type'),
          ver: '1'
        };
        object['rollup'] = this._context.length > 1 ? this.getRollUp() : {};
        interactEvent.context = {
          cdata: [{
            id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'id').toString(),
            type: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'type')
          }],
          object: object
        };
      }

      this.discussionEvents.emitTelemetry(interactEvent);
    }
  }, {
    key: "getRollUp",
    value: function getRollUp() {
      var rollUp = {};
      var data = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["reject"])(this._context, this.currentObj);

      if (this._context.length > 1) {
        data.forEach(function (element, index) {
          console.log('rollup', element);
          rollUp['l' + (index + 1)] = element.toString();
        });
      }

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.currentObj, 'type') !== 'Post') {
        return rollUp;
      }

      return {};
    }
  }]);

  return TelemetryUtilsService;
}();

TelemetryUtilsService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

TelemetryUtilsService.ctorParameters = function () {
  return [{
    type: DiscussionEventsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }];
};

TelemetryUtilsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function TelemetryUtilsService_Factory() {
    return new TelemetryUtilsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(DiscussionEventsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]));
  },
  token: TelemetryUtilsService,
  providedIn: "root"
});

var CategoryCardComponent = /*#__PURE__*/function () {
  function CategoryCardComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CategoryCardComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CategoryCardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log(this.category);
    }
  }]);

  return CategoryCardComponent;
}();

CategoryCardComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-category-card',
    template: "<div class=\"category-card\" tabindex=\"0\" role=\"link\">\n    <div class=\"category-card-header\">\n      <div class=\"category-card-header-image\">\n        <img src=\"./assets/discussion-ui/images/Buffer-512.webp\" alt=\"category card icon\" class=\"category-card-img\">\n      </div>\n        <div class=\"category-card-header-label\" [innerHTML]=\"category.name\"></div>\n    </div>\n    <p class=\"category-card-header-text\">{{category.description}}</p>\n    <div class=\"category-card-main\">\n      <div class=\"category-card-main-content\">\n        <div class=\"discussion-label\">{{category.totalTopicCount}} Discussions</div>\n        <div class=\"post-label\">{{category.totalPostCount}} Posts</div>\n      </div>\n    <div><img src=\"./assets/discussion-ui/images/eye-icon.png\" class=\"eye-icon\" alt=\"eye icon\">\n    </div>\n  </div>\n</div>",
    styles: ["::ng-deep:root{--df-category-card-label:var(--df-text);--df-category-card-text:var(--df-text)}.category-card{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;border-radius:.25rem;height:11rem;width:auto;padding:1rem;cursor:pointer}.category-card .category-card-header{display:flex;flex-direction:row;align-items:center}.category-card .category-card-header .category-card-header-image{border:.0625rem solid var(--red-0);border-radius:50%;max-width:3.125rem;width:100%;height:3.125rem;position:relative}.category-card .category-card-header .category-card-header-image .category-card-img{position:absolute;top:.5rem;left:.5rem;width:2rem;height:2rem}.category-card .category-card-header .category-card-header-label{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:var(--df-category-card-label);word-break:break-word;margin:0 .5rem;font-weight:700}.category-card .category-card-header-text{color:var(--df-category-card-text);-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;word-break:break-all;padding:.5rem 0;font-size:.875rem}.category-card .category-card-main{display:flex;justify-content:space-between;align-items:center;color:var(--df-category-card-text);margin:.5rem 0;font-size:.875rem;font-weight:700}.category-card .category-card-main .category-card-main-content{display:flex}.category-card .category-card-main .post-label{margin:0 1rem}.category-card .category-card-main .eye-icon{width:1.4rem;height:1.4rem}"]
  }]
}];
/** @nocollapse */

CategoryCardComponent.ctorParameters = function () {
  return [];
};

CategoryCardComponent.propDecorators = {
  category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }]
};

var DiscussCardComponent = /*#__PURE__*/function () {
  function DiscussCardComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussCardComponent);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussCardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log('discussionData', this.discussionData);
    }
  }, {
    key: "getBgColor",
    value: function getBgColor(tagTitle) {
      var bgColor = this.stringToColor(tagTitle.toLowerCase());
      var color = this.getContrast();
      return {
        color: color,
        'background-color': bgColor
      };
    }
  }, {
    key: "stringToColor",
    value: function stringToColor(title) {
      var hash = 0;

      for (var i = 0; i < title.length; i++) {
        // tslint:disable-next-line: no-bitwise
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
      }

      var hue = Math.abs(hash % 360); // tslint:disable-next-line: prefer-template

      var colour = 'hsl(' + hue + ',100%,30%)';
      return colour;
    }
  }, {
    key: "getContrast",
    value: function getContrast() {
      return 'rgba(255, 255, 255, 80%)';
    }
  }, {
    key: "IsSingleComent",
    value: function IsSingleComent(postCount) {
      if (postCount && postCount - 1 == 1) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return DiscussCardComponent;
}();

DiscussCardComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-card',
    template: "<!-- Card container -->\n<div class=\"discuss-card-content\" tabindex=\"0\" role=\"link\">\n\n  <!-- Card header -->\n  <div tabindex=\"0\" role=\"link\">\n      <!-- <a href=\"javascript:void(0)\" i18n-aria-label tabindex=\"0\" role=\"link\"> -->\n        <h3 class='discuss-card-title' *ngIf=\"discussionData?.title\" [innerHTML]=\"discussionData?.title\"></h3>\n        <h3 class='discuss-card-title' *ngIf=\"!discussionData?.title && discussionData?.topic?.title\" [innerHTML]=\"discussionData?.topic?.title\"></h3>\n        <h3 class='discuss-card-title' *ngIf=\"!discussionData?.title && !discussionData?.topic?.title && discussionData?.name\" [innerHTML]=\"discussionData?.name\"></h3>\n      <!-- </a> -->\n\n    <!-- Card subtitle -->\n    <div class=\"discuss-card-subtitle\">\n      <div class=\"card-label-container\">\n        <div *ngIf=\"discussionData?.category?.name\" class=\"discuss-card-label\">\n          <img src=\"./assets/discussion-ui/images/Buffer-512.webp\" alt=\"category card icon\" width=\"20px\" class=\"mr-4\">\n          {{discussionData.category.name}}\n        </div>\n        <div>\n          <span class=\"dot\"></span>\n          <span class=\"discuss-user-label\" *ngIf=\"discussionData?.user?.username\">{{discussionData?.user?.username}}</span>\n          <span class=\"discuss-user-label\" *ngIf=\"!(discussionData?.user?.username)\">{{'Anonymous'}}</span>\n        </div>\n      </div>\n\n      <div class=\"timing\">{{discussionData.lastposttime | date}}</div>\n      <!-- <span class=\"margin-left-l\">{{discussionData.timestamp | pipeRelativeTime}}</span> -->\n    </div>\n    <!-- /Card subtitle -->\n  </div>\n  <!-- /Card header -->\n\n  <!-- Card content -->\n  <div class=\"tags\">\n    <ng-container *ngIf=\"discussionData && discussionData.tags && discussionData.tags.length > 0\">\n      <span *ngFor=\"let tag of discussionData.tags\" class=\"tag\" [ngStyle]=\"getBgColor(tag.value)\">\n        {{tag.value}}\n      </span>\n    </ng-container>\n  </div>\n  <!-- /Card content -->\n\n  <!-- Card footer -->\n  <div class=\"discuss-card-comments\">\n    <div class=\"comments-content\">\n      <span class=\"votes-content\">\n        <!-- <mat-icon class=\"cursor-pointer\">import_export</mat-icon> -->\n        <img src=\"./assets/discussion-ui/images/votes.svg\" alt=\"votes icon\">\n        <span>{{(discussionData.upvotes + discussionData.downvotes) || 0 }} Votes</span>\n      </span>\n      <span class=\"views-content\">\n        <!-- <mat-icon>trending_up</mat-icon> -->\n        <img src=\"./assets/discussion-ui/images/views.svg\" alt=\"views icon\">\n        <span>{{discussionData.viewcount || 0}} Views</span>\n      </span>\n    </div>\n    <div class=\"comments-count\">{{((discussionData.postcount || 1) -1) }}\n        comments\n    </div>\n  </div>\n\n  <!-- /Card footer -->\n</div>\n<!-- /Card header -->",
    styles: [".discuss-card-content{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:1rem;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;word-break:break-all;cursor:pointer;width:auto}.discuss-card-content .discuss-card-title{margin:0;color:var(--df-text);cursor:pointer;font-size:1rem;font-weight:700;word-break:break-word}.discuss-card-content .discuss-card-subtitle{margin:8px 0 0;font-size:.875rem;display:flex;align-items:center}@media screen and (max-width:768px){.discuss-card-content .discuss-card-subtitle{align-items:flex-start}}.discuss-card-content .discuss-card-subtitle .card-label-container{display:flex;align-items:center}@media screen and (max-width:768px){.discuss-card-content .discuss-card-subtitle .card-label-container{margin-right:auto;flex-wrap:wrap}}.discuss-card-content .discuss-card-subtitle .card-label-container .discuss-card-label{color:var(--primary);display:flex;align-items:center}.discuss-card-content .discuss-card-subtitle .card-label-container .discuss-card-label img{margin-right:.25rem}.discuss-card-content .discuss-card-subtitle .card-label-container .dot{height:.375rem;width:.375rem;background-color:var(--gray-400);border-radius:50%;display:inline-block;margin:0 .5rem;position:relative;bottom:.0625rem}.discuss-card-content .discuss-card-subtitle .card-label-container .discuss-user-label{word-break:break-word}.discuss-card-content .discuss-card-subtitle .timing{margin:0 .5rem}@media screen and (max-width:768px){.discuss-card-content .discuss-card-subtitle .card-label-container .discuss-card-label{flex-basis:100%}.discuss-card-content .discuss-card-subtitle .timing{flex:0 0 auto}}.discuss-card-content .discuss-card-comments{display:flex;justify-content:space-between;font-size:.875rem;flex-wrap:wrap;font-weight:700;align-items:center;padding-top:.5rem}.discuss-card-content .discuss-card-comments .comments-content{display:flex}.discuss-card-content .discuss-card-comments .comments-content .views-content,.discuss-card-content .discuss-card-comments .comments-content .votes-content{display:flex;align-items:center;font-size:.875rem}.discuss-card-content .discuss-card-comments .comments-content .views-content span,.discuss-card-content .discuss-card-comments .comments-content .votes-content span{margin:0 .5rem}.discuss-card-content .discuss-card-comments .comments-content .views-content{margin-left:1.5rem}.discuss-card-content .discuss-card-comments .comments-content .views-content img,.discuss-card-content .discuss-card-comments .comments-content .votes-content img{height:1rem;width:1rem;cursor:pointer}.discuss-card-content .discuss-card-comments .comments-count{color:var(--primary);font-weight:700}"]
  }]
}];
/** @nocollapse */

DiscussCardComponent.ctorParameters = function () {
  return [];
};

DiscussCardComponent.propDecorators = {
  discussionData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }]
};

var AvatarPhotoComponent = /*#__PURE__*/function () {
  function AvatarPhotoComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AvatarPhotoComponent);

    this.size = '';
    this.randomColor = false;
    this.showInitials = false;
    this.random = Math.random().toString(36).slice(2); // public initials!: string

    this.colors = [// '#EB7181', // red
    '#306933'];
    this.randomcolors = ['#EB7181', '#006400', '#000000', '#3670B2', '#4E9E87', '#7E4C8D'];
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AvatarPhotoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.photoUrl) {
        this.showInitials = true;

        if (!this.initials) {
          this.createInititals();
        }

        var randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
        this.circleColor = this.colors[randomIndex];

        if (this.randomColor) {
          var randomIndex1 = Math.floor(Math.random() * Math.floor(this.randomcolors.length));
          this.circleColor = this.randomcolors[randomIndex1];
        }
      }
    }
  }, {
    key: "createInititals",
    value: function createInititals() {
      var initials = '';
      var array = "".concat(this.name, " ").toString().split(' ');

      if (array[0] !== 'undefined' && typeof array[1] !== 'undefined') {
        initials += array[0].charAt(0);
        initials += array[1].charAt(0);
      } else {
        for (var i = 0; i < this.name.length; i += 1) {
          if (this.name.charAt(i) === ' ') {
            continue;
          }

          if (this.name.charAt(i) === this.name.charAt(i)) {
            initials += this.name.charAt(i);

            if (initials.length === 2) {
              break;
            }
          }
        }
      }

      this.initials = initials.toUpperCase();
    }
  }]);

  return AvatarPhotoComponent;
}();

AvatarPhotoComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-avatar-photo',
    template: "<div [ngClass]=\"{'circle-s' : size=== 's',\n'circle-m' : size=== 'm',\n'circle-l' : size=== 'l',\n'circle-xl' : size=== 'xl',\n'circle-xxl' : size=== 'xxl',\n'circle-xl-s' : size=== 'xl-s',\n'circle-xxl-s': size=== 'xxl-s'}\" [ngStyle]=\"{'background-color':  circleColor }\">\n  <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\" [alt]=\"photoUrl? '' :(name || initials || size || random)\">\n\n  <div *ngIf=\"showInitials\" class=\"initials\" i18n-aria-label>\n    {{ initials }}\n  </div>\n</div>",
    styles: [""]
  }]
}];
AvatarPhotoComponent.propDecorators = {
  photoUrl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  randomColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  initials: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }]
};

var ɵ0 = function ɵ0() {
  return "".concat(urlConfig.host).concat(urlConfig.apiSlug);
},
    ɵ1 = function ɵ1() {
  return "".concat(urlConfig.apiBasePath(), "/categories");
},
    ɵ2 = function ɵ2(cid) {
  return "".concat(urlConfig.apiBasePath(), "/category/").concat(cid);
},
    ɵ3 = function ɵ3() {
  return "".concat(urlConfig.apiBasePath(), "/tags");
},
    ɵ4 = function ɵ4(tag) {
  return "".concat(urlConfig.apiBasePath(), "/tags/").concat(tag);
},
    ɵ5 = function ɵ5() {
  return "".concat(urlConfig.apiBasePath(), "/v2/topics");
},
    ɵ6 = function ɵ6(pid) {
  return "".concat(urlConfig.apiBasePath(), "/v2/posts/").concat(pid, "/vote");
},
    ɵ7 = function ɵ7(tid) {
  return "".concat(urlConfig.apiBasePath(), "/v2/topics/").concat(tid);
},
    ɵ8 = function ɵ8(pid) {
  return "".concat(urlConfig.apiBasePath(), "/v2/posts/").concat(pid, "/bookmark");
},
    ɵ9 = function ɵ9() {
  return "".concat(urlConfig.apiBasePath(), "/recent");
},
    ɵ10 = function ɵ10() {
  return "".concat(urlConfig.apiBasePath(), "/popular");
},
    ɵ11 = function ɵ11() {
  return "".concat(urlConfig.apiBasePath(), "/topics/unread/total");
},
    ɵ12 = function ɵ12() {
  return "".concat(urlConfig.apiBasePath(), "/topic");
},
    ɵ13 = function ɵ13() {
  return "".concat(urlConfig.apiBasePath(), "/users/me");
},
    ɵ14 = function ɵ14(slug) {
  return "".concat(urlConfig.apiBasePath(), "/users/").concat(slug, "/about");
},
    ɵ15 = function ɵ15(slug) {
  return "".concat(urlConfig.apiBasePath(), "/user/").concat(slug, "/upvoted");
},
    ɵ16 = function ɵ16(slug) {
  return "".concat(urlConfig.apiBasePath(), "/user/").concat(slug, "/downvoted");
},
    ɵ17 = function ɵ17(slug) {
  return "".concat(urlConfig.apiBasePath(), "/user/").concat(slug, "/bookmarks");
},
    ɵ18 = function ɵ18(username) {
  return "".concat(urlConfig.apiBasePath(), "/user/").concat(username);
},
    ɵ19 = function ɵ19(slug) {
  return "".concat(urlConfig.apiBasePath(), "/category/").concat(slug);
},
    ɵ20 = function ɵ20() {
  return "".concat(urlConfig.apiBasePath(), "/user/v1/create");
},
    ɵ21 = function ɵ21() {
  return "".concat(urlConfig.apiBasePath(), "/category/list");
},
    ɵ22 = function ɵ22() {
  return "".concat(urlConfig.apiBasePath(), "/tags/list");
};

var urlConfig = {
  // endpoint configs...!
  host: 'http://localhost:3002',
  // host: 'https://dev.sunbirded.org',
  apiSlug: '/discussion',
  apiBasePath: ɵ0,
  // URLs...!
  getAllCategories: ɵ1,
  getSingleCategoryDetails: ɵ2,
  getAllTags: ɵ3,
  getTagBasedDiscussion: ɵ4,
  createPost: ɵ5,
  votePost: ɵ6,
  replyPost: ɵ7,
  bookmarkPost: ɵ8,
  recentPost: ɵ9,
  popularPost: ɵ10,
  unread: ɵ11,
  getTopic: ɵ12,
  profile: ɵ13,
  fetchProfile: ɵ14,
  listUpVote: ɵ15,
  listDownVoted: ɵ16,
  listSaved: ɵ17,
  fetchNetworkProfile: "user/profileDetails/getUserRegistry",
  userDetails: ɵ18,
  getContextBasedTopics: ɵ19,
  registerUser: ɵ20,
  getContextBasedDiscussion: ɵ21,
  getContextBasedTagDiscussion: ɵ22
};
/* tslint:enable */

var CONTEXT_PROPS = {
  cid: 'cid',
  tid: 'tid',
  uid: 'uid'
};

var DiscussionService = /*#__PURE__*/function () {
  function DiscussionService(http, csModule) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussionService);

    this.http = http;
    this.csModule = csModule; // tslint:disable-next-line:variable-name

    this._context = {};
    this.alertEvent = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"](); // TODO: Take from the logged in user data;
    // this.usr = this.configSvc.userProfile

    this.usr = {
      userId: '1234'
    };
    console.log('CsModule init---', _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8__["CsModule"].instance);
    this.csDiscussionService = _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8__["CsModule"].instance.discussionService;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussionService, [{
    key: "initializeUserDetails",
    value: function initializeUserDetails(userId) {
      var _this = this;

      userId = userId;
      this.userDetails = JSON.parse(sessionStorage.getItem('dFUserDetails'));
      this.fetchUserProfile(userId).subscribe(function (response) {
        _this.userDetails = response;
        sessionStorage.setItem('dFUserDetails', JSON.stringify(response));
      }, function (error) {
        // TODO: toaster error
        console.log('error fetching user details');
      });
    }
  }, {
    key: "appendPage",
    value: function appendPage(page, url) {
      if (page) {
        return "".concat(url, "?page=").concat(page);
      }

      return "".concat(url, "?page=1");
    }
  }, {
    key: "fetchAllTags",
    value: function fetchAllTags() {
      // const tags = this.http.get(urlConfig.getAllTags())
      //   .toPromise();
      // return tags;
      console.log('innn fetchAllTags');
      return this.csDiscussionService.fetchAllTags();
    }
  }, {
    key: "createPost",
    value: function createPost(data) {
      // return this.http.post(urlConfig.createPost(), data);
      return this.csDiscussionService.createPost(data);
    }
    /**
     * @description To get all the categories
     */

  }, {
    key: "fetchAllCategories",
    value: function fetchAllCategories() {
      // return this.http.get<NSDiscussData.ICategorie[]>(urlConfig.getAllCategories()).pipe(
      //   map((data: any) => {
      //       // Taking only "categories" from the response
      //       const resp = (data as any).categories;
      //       return resp;
      //   }),
      //   catchError( error => {
      //     return throwError( 'Something went wrong!' );
      //   })
      // );
      console.log('in fetchall categories');
      return this.csDiscussionService.fetchAllCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
        return data.categories;
      }));
    }
  }, {
    key: "fetchSingleCategoryDetails",
    value: function fetchSingleCategoryDetails(cid) {
      return this.csDiscussionService.fetchSingleCategoryDetails(cid); // return this.http.get<NSDiscussData.ICategorie>(urlConfig.getSingleCategoryDetails(cid));
    }
  }, {
    key: "fetchSingleCategoryDetailsSort",
    value: function fetchSingleCategoryDetailsSort(cid, sort, page) {
      return this.csDiscussionService.fetchSingleCategoryDetails(cid);
    }
  }, {
    key: "fetchAllTag",
    value: function fetchAllTag() {
      return this.csDiscussionService.fetchAllTags(); // return this.http.get(urlConfig.getAllTags());
    }
  }, {
    key: "contextBasedTags",
    value: function contextBasedTags(data) {
      return this.csDiscussionService.contextBasedTags(data); // return this.http.get(urlConfig.getAllTags());
    }
  }, {
    key: "fetchPostDetails",
    value: function fetchPostDetails() {
      return this.csDiscussionService.fetchAllTags(); // return this.http.get(urlConfig.getAllTags());
    }
  }, {
    key: "votePost",
    value: function votePost(pid, data) {
      return this.csDiscussionService.votePost(pid, data); // const url = urlConfig.votePost(pid);
      // return this.http.post(url, data);
    }
  }, {
    key: "deleteVotePost",
    value: function deleteVotePost(pid) {
      // const url = urlConfig.votePost(pid);
      // return this.http.delete(url);
      return this.csDiscussionService.deleteVotePost(pid);
    }
  }, {
    key: "bookmarkPost",
    value: function bookmarkPost(pid) {
      // const url = urlConfig.bookmarkPost(pid);
      // return this.http.post(url, {});
      return this.csDiscussionService.bookmarkPost(pid);
    }
  }, {
    key: "deleteBookmarkPost",
    value: function deleteBookmarkPost(pid) {
      // const url = urlConfig.bookmarkPost(pid);
      // return this.http.delete(url);
      return this.csDiscussionService.deleteBookmarkPost(pid);
    }
  }, {
    key: "replyPost",
    value: function replyPost(tid, data) {
      // const url = urlConfig.replyPost(tid);
      // return this.http.post(url, data);
      return this.csDiscussionService.replyPost(tid, data);
    }
  }, {
    key: "fetchRecentPost",
    value: function fetchRecentPost(pageId) {
      return this.csDiscussionService.recentPost(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this._userDetails, 'username'), pageId);
    }
  }, {
    key: "getTagBasedDiscussion",
    value: function getTagBasedDiscussion(tag, page) {
      return this.csDiscussionService.getTagBasedDiscussion(tag);
    }
  }, {
    key: "getContextBasedDiscussion",
    value: function getContextBasedDiscussion(data) {
      return this.csDiscussionService.getContextBasedDiscussion(data);
    }
  }, {
    key: "getContextBasedTagDiscussion",
    value: function getContextBasedTagDiscussion(data) {
      return this.csDiscussionService.getContextBasedTagDiscussion(data);
    }
  }, {
    key: "fetchPopularD",
    value: function fetchPopularD(page) {
      return this.csDiscussionService.popularPost(page);
    }
  }, {
    key: "fetchTopicById",
    value: function fetchTopicById(topicId, slug, page) {
      // let url = urlConfig.getTopic() + '/' + topicId.toString() + '/' + slug;
      // url = this.appendPage(page, url);
      // return this.http.get(url);
      return this.csDiscussionService.fetchTopicById(topicId, slug, page);
    }
  }, {
    key: "fetchTopicByIdSort",
    value: function fetchTopicByIdSort(topicId, sort, page) {
      // let url = urlConfig.getTopic + topicId.toString();
      // url = this.appendPage(page, url);
      // return this.http.get(`${url}&sort=${sort}`);
      return this.csDiscussionService.fetchTopicById(topicId, sort, page);
    }
  }, {
    key: "fetchUnreadCOunt",
    value: function fetchUnreadCOunt() {
      // return this.http.get<any>(urlConfig.unread());
      return this.csDiscussionService.fetchUnreadCOunt();
    } // fetchProfile() {
    //   // return this.http.get(urlConfig.profile());
    //   return this.csDiscussionService.fetchProfile();
    // }

  }, {
    key: "fetchProfileInfo",
    value: function fetchProfileInfo(slug) {
      // return this.http.get(urlConfig.fetchProfile(slug));
      return this.csDiscussionService.fetchProfileInfo(slug);
    }
  }, {
    key: "fetchUpvoted",
    value: function fetchUpvoted(pageId) {
      // return this.http.get(urlConfig.listUpVote(_.get(this._userDetails, 'username')));
      return this.csDiscussionService.fetchUpvoted(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this._userDetails, 'username'), pageId);
    }
  }, {
    key: "fetchDownvoted",
    value: function fetchDownvoted(pageId) {
      // return this.http.get(urlConfig.listDownVoted(_.get(this._userDetails, 'username')));
      return this.csDiscussionService.fetchDownvoted(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this._userDetails, 'username'), pageId);
    }
  }, {
    key: "fetchSaved",
    value: function fetchSaved(pageId) {
      // return this.http.get(urlConfig.listSaved(_.get(this._userDetails, 'username')));
      return this.csDiscussionService.fetchSaved(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this._userDetails, 'username'), pageId);
    }
  }, {
    key: "fetchBestPost",
    value: function fetchBestPost(pageId) {
      return this.csDiscussionService.fetchBestPost(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this._userDetails, 'username'), pageId);
    }
  }, {
    key: "fetchUserProfile",
    value: function fetchUserProfile(userId) {
      // return this.http.get<any>(urlConfig.userDetails(userName));
      return this.csDiscussionService.getUserDetails(userId);
    }
  }, {
    key: "getContextBasedTopic",
    value: function getContextBasedTopic(slug, pageId) {
      // return this.http.get(urlConfig.getContextBasedTopics(slug));
      return this.csDiscussionService.getContextBasedTopic(slug, pageId);
    }
  }, {
    key: "registerUser",
    value: function registerUser(data) {
      return this.http.post(urlConfig.registerUser(), data);
    }
  }, {
    key: "createForum",
    value: function createForum(data) {
      return this.csDiscussionService.createForum(data);
    }
  }, {
    key: "getForumIds",
    value: function getForumIds(data) {
      return this.csDiscussionService.getForumIds(data).toPromise();
    }
  }, {
    key: "userDetails",
    get: function get() {
      return this._userDetails;
    },
    set: function set(userDetails) {
      this._userDetails = userDetails;
    }
  }, {
    key: "userId",
    get: function get() {
      return this._userId;
    },
    set: function set(userId) {
      this._userId = userId;
    }
  }, {
    key: "forumIds",
    get: function get() {
      return this._forumIds;
    },
    set: function set(ids) {
      this._forumIds = ids;
    }
  }, {
    key: "setContext",
    value: function setContext(key, value) {
      if (CONTEXT_PROPS[key]) {
        this._context[key] = value;
      } else {
        console.log('Context can not be set for this key: ', key);
      }
    }
  }, {
    key: "getContext",
    value: function getContext(key) {
      return key ? this._context[key] : this._context;
    }
  }, {
    key: "editPost",
    value: function editPost(pid, data) {
      return this.csDiscussionService.editPost(pid, data);
    }
  }, {
    key: "deletePost",
    value: function deletePost(pid, uid) {
      return this.csDiscussionService.deletePost(pid, uid);
    }
  }, {
    key: "editTopic",
    value: function editTopic(tid, data) {
      return this.csDiscussionService.editTopic(tid, data);
    }
  }, {
    key: "deleteTopic",
    value: function deleteTopic(tid) {
      return this.csDiscussionService.deleteTopic(tid);
    }
    /** To check the error code and show alert message
     *  if it is 502 - error
     */

  }, {
    key: "showTrafficAlert",
    value: function showTrafficAlert(errorObject) {
      var errorCode = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(errorObject, 'response.responseCode');

      if (errorCode) {
        if ([502, '502'].includes(errorCode)) {
          this.alertEvent.next();
        }
      }
    }
  }]);

  return DiscussionService;
}();

DiscussionService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

DiscussionService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
  }, {
    type: _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_8__["CsModule"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Inject"],
      args: ['CsModule']
    }]
  }];
};

DiscussionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function DiscussionService_Factory() {
    return new DiscussionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])("CsModule"));
  },
  token: DiscussionService,
  providedIn: "root"
});
/* tslint:enable */

var AppLoaderComponent = /*#__PURE__*/function () {
  function AppLoaderComponent(discussionService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AppLoaderComponent);

    this.discussionService = discussionService;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AppLoaderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.headerMessage = 'Please wait';
      this.loaderMessage = 'We are fetching details';

      if (this.data) {
        this.headerMessage = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'headerMessage') || this.headerMessage;
        this.loaderMessage = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'loaderMessage') || this.loaderMessage;
      }

      this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["timer"])(10000).subscribe(function () {
        _this2.discussionService.alertEvent.next();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.countDown.unsubscribe();
    }
  }]);

  return AppLoaderComponent;
}();

AppLoaderComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-app-loader',
    template: "<ng-container>\n  <div class=\"dt-app-loader-container\">\n    <img src=\"./assets/discussion-ui/images/loader-icon.svg\" width=\"50px\">\n    <div class=\"loader-content\">\n        <div class=\"loader-label\">\n          {{headerMessage}}\n        </div>\n        <p>{{loaderMessage}}</p>\n      </div>\n  </div>\n</ng-container>",
    styles: [".dt-app-loader-container{background:var(--gray-100);width:94%!important;margin:1rem auto;border-radius:1.5rem;border:0;display:flex;padding:1rem}\u200B .loader-content{margin:0 1rem;font-size:.875rem}\u200B .loader-label{font-weight:700;margin-bottom:.25rem}"]
  }]
}];
/** @nocollapse */

AppLoaderComponent.ctorParameters = function () {
  return [{
    type: DiscussionService
  }];
};

AppLoaderComponent.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }]
};

var ConfigService = /*#__PURE__*/function () {
  function ConfigService(activatedRoute, discussionService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ConfigService);

    this.activatedRoute = activatedRoute;
    this.discussionService = discussionService;
    this.setCategoryId = new rxjs__WEBPACK_IMPORTED_MODULE_13__["ReplaySubject"](1);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ConfigService, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "setConfig",
    value: function setConfig(activatedRoute) {
      var _this3 = this;

      activatedRoute.data.subscribe(function (config) {
        _this3._config = config.data;
      });
    }
  }, {
    key: "setConfigFromParams",
    value: function setConfigFromParams(activatedRoute) {
      var _this4 = this;

      activatedRoute.queryParams.subscribe(function (params) {
        var obj = {
          userId: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(params, 'userId'),
          categories: JSON.parse(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(params, 'categories'))
        };
        _this4._config = obj;
      });
    }
  }, {
    key: "setConfigFromWidgetBaseClass",
    value: function setConfigFromWidgetBaseClass(config) {
      this._config = config;
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this._config;
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      this.getParams = this.getConfig();
      return Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.getParams, 'categories');
    }
  }, {
    key: "hasContext",
    value: function hasContext() {
      this.hasContextData = this.getCategories() ? this.getCategories().result ? this.getCategories().result.length : null : null;
      return this.hasContextData;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      this.getContextData = this.getCategories() ? this.getCategories().result ? this.getCategories().result : null : null;
      return this.getContextData;
    }
  }, {
    key: "setCategoryid",
    value: function setCategoryid(id) {
      this.categoryId = id;
      this.setCategoryId.next(id);
    }
  }, {
    key: "getHeaderOption",
    value: function getHeaderOption() {
      return this._config.headerOptions !== undefined ? this._config.headerOptions : true;
    }
  }, {
    key: "getBannerOption",
    value: function getBannerOption() {
      return this._config.bannerOption ? this._config.bannerOption : false;
    }
  }, {
    key: "getCategoryid",
    value: function getCategoryid() {
      return this.categoryId;
    }
  }, {
    key: "getRouterSlug",
    value: function getRouterSlug() {
      return this._config.routerSlug ? this._config.routerSlug : '';
    }
  }]);

  return ConfigService;
}();

ConfigService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

ConfigService.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: DiscussionService
  }];
};

ConfigService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function ConfigService_Factory() {
    return new ConfigService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(DiscussionService));
  },
  token: ConfigService,
  providedIn: "root"
});
var ROUTES = {
  TOPIC: "/discussion-forum/topic/",
  DISCUSSION: "/discussion-forum/",
  CATEGORY: "/discussion-forum/category/",
  TAG: "/discussion-forum/tags/"
};
var MENUOPTIONS = [{
  route: "all-discussions",
  label: "All discussions",
  enable: false
}, {
  route: "categories",
  label: "Categories",
  enable: true
}, {
  route: "tags",
  label: "Tags",
  enable: true
}, {
  route: "my-discussion",
  label: "My discussion",
  enable: true
}];
var CATEGORY = "category";
var CATEGORY_DETAILS = "categoryDetails";
var CATEGORY_HOME = "categoryHome";
var TAG_ALL_DISCUSS = "tagAllDiscuss";
var TAGS = "TAGS";
var TAGSALL = "TAGSALL";

var RouterServiceService = /*#__PURE__*/function () {
  function RouterServiceService(router) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RouterServiceService);

    this.router = router;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RouterServiceService, [{
    key: "navigate",
    value: function navigate(input) {
      // this.router.navigate(url)
      this.router.navigate([input.data.url], {
        queryParams: input.data.queryParams,
        queryParamsHandling: "merge"
      });
    }
  }]);

  return RouterServiceService;
}();

RouterServiceService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

RouterServiceService.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }];
};

RouterServiceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function RouterServiceService_Factory() {
    return new RouterServiceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]));
  },
  token: RouterServiceService,
  providedIn: "root"
}); // import {BehaviorSubject} from 'rxjs/BehaviorSubject';

var EventsService = /*#__PURE__*/function () {
  function EventsService() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, EventsService);

    this._navItemSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](0); // Observable navItem stream

    this.navItem$ = this._navItemSource.asObservable();
    this.registeredEvents = [];
    this.toggleMenuItem = new rxjs__WEBPACK_IMPORTED_MODULE_13__["ReplaySubject"](1);
  }
  /**
   * This function is used to update the states in widget with data
   * @param  {} data
   * TODO: Not being used anymore have to cleanup
   */


  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(EventsService, [{
    key: "toggle",
    value: function toggle(data) {
      this.toggleMenuItem.next(data);
    }
  }]);

  return EventsService;
}();

EventsService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

EventsService.ctorParameters = function () {
  return [];
};

EventsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function EventsService_Factory() {
    return new EventsService();
  },
  token: EventsService,
  providedIn: "root"
}); //TODO: Need to cleanup this service since we are not gonna use

var WrapperNavigateService = /*#__PURE__*/function () {
  function WrapperNavigateService(_eventService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, WrapperNavigateService);

    this._eventService = _eventService;
    this.closeSideNav = new events__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(WrapperNavigateService, [{
    key: "navigate",
    value: function navigate(input) {//  this._eventService.toggle(input)
    }
  }]);

  return WrapperNavigateService;
}();

WrapperNavigateService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

WrapperNavigateService.ctorParameters = function () {
  return [{
    type: EventsService
  }];
};

WrapperNavigateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function WrapperNavigateService_Factory() {
    return new WrapperNavigateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(EventsService));
  },
  token: WrapperNavigateService,
  providedIn: "root"
});

var NavigationServiceService = /*#__PURE__*/function () {
  function NavigationServiceService(wrapperService, routerService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NavigationServiceService);

    this.wrapperService = wrapperService;
    this.routerService = routerService;
    this.navigateService = "routerService";
  }
  /**
   * used to intialize the navigation service with the wrapperservice or routerservice
   * @param  {string} wrapperService
   */


  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NavigationServiceService, [{
    key: "initService",
    value: function initService(wrapperService) {
      this.navigateService = wrapperService;
    }
    /**
     * used for navigating  to the other pages based on the service initalized
     * @param  {} input
     */

  }, {
    key: "navigate",
    value: function navigate(input) {
      if (this.navigateService === 'routerService') {
        this.routerService.navigate(input);
      } else {
        this.wrapperService.navigate(input);
      }
    }
  }]);

  return NavigationServiceService;
}();

NavigationServiceService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

NavigationServiceService.ctorParameters = function () {
  return [{
    type: WrapperNavigateService
  }, {
    type: RouterServiceService
  }];
};

NavigationServiceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function NavigationServiceService_Factory() {
    return new NavigationServiceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(WrapperNavigateService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"])(RouterServiceService));
  },
  token: NavigationServiceService,
  providedIn: "root"
});

var RelatedDiscussionComponent = /*#__PURE__*/function () {
  function RelatedDiscussionComponent(router, configService, discussionService, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RelatedDiscussionComponent);

    this.router = router;
    this.configService = configService;
    this.discussionService = discussionService;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.fetchSingleCategoryLoader = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RelatedDiscussionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      if (this.catId) {
        this.fetchRelatedDiscussionData(this.catId);
      }
    }
  }, {
    key: "fetchRelatedDiscussionData",
    value: function fetchRelatedDiscussionData(cid) {
      var _this5 = this;

      this.fetchSingleCategoryLoader = true;
      this.discussionService.fetchSingleCategoryDetails(cid).subscribe(function (data) {
        _this5.relatedDiscussions = [];

        lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"].filter(data.topics, function (topic) {
          if (topic.deleted === 0 && _this5.topicId !== topic.tid) {
            _this5.relatedDiscussions.push(topic);
          }
        });

        _this5.fetchSingleCategoryLoader = false;
      }, function (err) {
        console.log('Error in fetching category details'); // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError)

        _this5.fetchSingleCategoryLoader = false;
      });
    }
  }, {
    key: "getDiscussion",
    value: function getDiscussion(discuss) {
      var input = {
        data: {
          url: "".concat(this.configService.getRouterSlug()).concat(ROUTES.DISCUSSION, "topic/").concat(discuss.slug),
          queryParams: {}
        }
      };
      this.navigationService.navigate(input);
      this.stateChange.emit(discuss);
    }
  }]);

  return RelatedDiscussionComponent;
}();

RelatedDiscussionComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-related-discussion',
    template: "<h5 aria-label=\"Related discussions\" class=\"related-discuss-label\">Related discussions</h5>\n<ng-container *ngIf=\"relatedDiscussions && relatedDiscussions.length > 0\">\n    <div *ngFor=\"let discussion of relatedDiscussions | slice:0:5;\" class=\"related-discuss-card df-card\" tabindex=\"0\">\n        <label role=\"link\" tabindex=\"0\" aria-label=\"related discussion post df-text-color\"\n            class=\"related-discuss-card-content discuss-user-label\" (click)=\"getDiscussion(discussion)\"\n            [innerHTML]=\"discussion?.title\">\n        </label>\n        <div class=\"related-discuss-card-description mt-8\">\n            <div class=\"category-name\" [innerHTML]=\"discussion.category.name\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"time\">{{ discussion.timestamp | pipeRelativeTime }}</div>\n        </div>\n    </div>\n</ng-container>",
    styles: ["::ng-deep:root{--df-related-card-bg:var(--df-background)}.related-discuss-card{padding:1rem;display:flex;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-related-card-bg);color:var(--df-text);margin-bottom:1rem;flex-direction:column;max-width:18.75rem}.related-discuss-label{font-weight:700;margin:0 0 1rem;color:var(--df-text)}@media (max-width:768px){.related-discuss-card{max-width:100%}.related-discuss-label{margin:1rem 0}}.related-discuss-card-content{margin:0;cursor:pointer;font-size:.875rem;font-weight:700;word-break:break-all}.related-discuss-card-description{display:flex;align-items:center;font-size:.875rem;flex-wrap:wrap;margin-top:.5rem}.related-discuss-card-description .dot{height:.375rem;width:.375rem;background-color:var(--gray-400);border-radius:50%;display:inline-block;margin:0 .5rem;position:relative;bottom:0}"]
  }]
}];
/** @nocollapse */

RelatedDiscussionComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: ConfigService
  }, {
    type: DiscussionService
  }, {
    type: NavigationServiceService
  }];
};

RelatedDiscussionComponent.propDecorators = {
  catId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  topicId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};

var PipeFilterPipe = /*#__PURE__*/function () {
  function PipeFilterPipe() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PipeFilterPipe);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PipeFilterPipe, [{
    key: "transform",
    value: function transform(value, keys, term) {
      if (!term) {
        return value;
      }

      return (value || []).filter(function (item) {
        return keys.split(',').some(function (key) {
          return item.hasOwnProperty(key) && new RegExp("^".concat(term, "$"), 'gi').test(item[key]);
        });
      });
    }
  }]);

  return PipeFilterPipe;
}();

PipeFilterPipe.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Pipe"],
  args: [{
    name: 'pipeFilter'
  }]
}];
/* tslint:enable */

var SortByPipe = /*#__PURE__*/function () {
  function SortByPipe() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SortByPipe);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SortByPipe, [{
    key: "transform",
    value: function transform(data, sortField, sortOrder) {
      if (!data || !data.length || sortOrder === '' || !sortOrder) {
        return data;
      }

      if (!sortField || sortField === '') {
        data = data.map(function (e) {
          return e.trim();
        });

        if (sortOrder === 'asc') {
          return data.sort();
        } else {
          return data.sort().reverse();
        }
      }

      data.forEach(function (obj) {
        obj[sortField] = obj[sortField].trim();
      });
      return Object(lodash_es__WEBPACK_IMPORTED_MODULE_11__["orderBy"])(data, [sortField], [sortOrder]);
    }
  }]);

  return SortByPipe;
}();

SortByPipe.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Pipe"],
  args: [{
    name: 'sortBy'
  }]
}];

var PipeRelativeTimePipe = /*#__PURE__*/function () {
  function PipeRelativeTimePipe() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PipeRelativeTimePipe);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PipeRelativeTimePipe, [{
    key: "transform",
    value: function transform(value) {
      if (value) {
        var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'Just now';
        var intervals = {
          'year': 31536000,
          'month': 2592000,
          'week': 604800,
          'day': 86400,
          'hour': 3600,
          'minute': 60,
          'second': 1
        };
        var counter;

        for (var i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0) if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's ago'; // plural (2 days ago)
          }
        }
      }

      return value;
    }
  }]);

  return PipeRelativeTimePipe;
}();

PipeRelativeTimePipe.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Pipe"],
  args: [{
    name: 'pipeRelativeTime'
  }]
}];

var SplitInitialsPipe = /*#__PURE__*/function () {
  function SplitInitialsPipe() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SplitInitialsPipe);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SplitInitialsPipe, [{
    key: "transform",
    value: function transform(value) {
      if (value) {
        var userInitial = '';
        var name = value.split(' ');
        name.forEach(function (element) {
          userInitial = userInitial + element.charAt(0);
        });
        return userInitial;
      }
    }
  }]);

  return SplitInitialsPipe;
}();

SplitInitialsPipe.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Pipe"],
  args: [{
    name: 'splitInitials'
  }]
}];

var PipeListFilterPipe = /*#__PURE__*/function () {
  function PipeListFilterPipe() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PipeListFilterPipe);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PipeListFilterPipe, [{
    key: "transform",
    value: function transform(value, keys, term) {
      if (!term) {
        return value;
      }

      return (value || []).filter(function (item) {
        return keys.split(',').some(function (key) {
          return item.hasOwnProperty(key) && item[key] && "".concat(item[key], " ").toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });
      }); // new RegExp(`^${term}$`, 'gi').test(item[key])
    }
  }]);

  return PipeListFilterPipe;
}();

PipeListFilterPipe.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Pipe"],
  args: [{
    name: 'pipeListFilter'
  }]
}];

var PipesModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function PipesModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PipesModule);
});

PipesModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
  args: [{
    declarations: [PipeFilterPipe, SortByPipe, PipeRelativeTimePipe, SplitInitialsPipe, PipeListFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"]],
    exports: [PipeFilterPipe, SortByPipe, PipeRelativeTimePipe, SplitInitialsPipe, PipeListFilterPipe]
  }]
}];

var PostReplyComponent = /*#__PURE__*/function () {
  function PostReplyComponent(formBuilder) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PostReplyComponent);

    this.formBuilder = formBuilder;
    this.showCancel = true;
    this.mode = 'add';
    this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.isButtonEnabled = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PostReplyComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log('conent came', this.content);
      this.initializeFormFields();
    }
  }, {
    key: "initializeFormFields",
    value: function initializeFormFields() {
      var _this6 = this;

      this.replyForm = this.formBuilder.group({
        replyContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]
      });
      this.replyForm.valueChanges.subscribe(function (val) {
        _this6.isButtonEnabled = _this6.validateForm();
      });
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      if (this.replyForm.status === 'VALID') {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isFieldValid",
    value: function isFieldValid(field) {
      var valueNoWhiteSpace = this.replyForm.get(field).value;

      if (valueNoWhiteSpace) {
        var length = valueNoWhiteSpace.length;

        if (length >= 2 && valueNoWhiteSpace.charAt(length - 2) === " ") {
          this.replyForm.patchValue({
            replyContent: this.replyForm.get(field).value.trim()
          });
        } else {
          this.replyForm.patchValue({
            replyContent: this.replyForm.get(field).value.trimStart()
          });
        }
      }

      return !this.replyForm.get(field).valid && this.replyForm.get(field).dirty;
    }
  }, {
    key: "onReplyClick",
    value: function onReplyClick(mode) {
      // tslint:disable-next-line:no-string-literal
      this.actionEvent.emit({
        action: mode,
        content: this.replyForm.controls['replyContent'].value.trim()
      });
    }
  }, {
    key: "onCancelClick",
    value: function onCancelClick() {
      this.actionEvent.emit({
        action: 'cancel'
      });
    }
  }]);

  return PostReplyComponent;
}();

PostReplyComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-post-reply',
    template: "<form [formGroup]=\"replyForm\">\n  <div appearance=\"outline\" class=\"text-form-field\">\n    <label class=\"text-form-label\">Your answer here</label>\n    <textarea placeholder=\"Type here (minimum 10 characters)\" \n      minlength=\"10\" aria-label=\"Type your message here\"\n      formControlName=\"replyContent\" \n      class=\"text-content\"\n      [ngModel]=\"content\"\n      [ngClass]=\"{'is-invalid' : isFieldValid('replyContent')}\">\n  </textarea>\n  </div>\n</form>\n<div class=\"updatePostActions\">\n    <button class=\"df-btn df-btn-normal df-cancel-btn\"\n      *ngIf=\"showCancel\"\n      (click)=\"onCancelClick()\" \n      id=\"cancel-update-post\" \n      type=\"button\">\n      <span class=\"text-white\">Cancel</span>\n    </button>\n    <button [ngClass]=\"{'df-btn-disabled': !isButtonEnabled }\" \n      *ngIf=\"mode === 'edit'\"\n      [disabled]=\"!isButtonEnabled\" \n      class=\"df-btn df-btn-normal df-btn-primary\" \n      (click)=\"onReplyClick('edit')\" \n      id=\"update-post\"\n      type=\"button\">\n      <span class=\"text-white\">Update</span>\n    </button>\n    <button [ngClass]=\"{'df-btn-disabled': !replyForm.valid }\" \n      *ngIf=\"mode !== 'edit'\"\n      [disabled]=\"!isButtonEnabled\" \n      class=\"df-btn df-btn-normal df-btn-primary\" \n      (click)=\"onReplyClick('reply')\" \n      id=\"update-post\"\n      type=\"button\">\n      <span class=\"text-white\">Post Reply</span>\n    </button>\n</div>",
    styles: [".text-form-field{display:flex;flex-direction:column}.text-form-label{font-size:.875rem;margin-bottom:1rem}.text-content{min-height:6.75rem;max-height:33.75rem;margin-bottom:.875rem;background-color:var(--df-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;cursor:pointer;outline:0;padding:.5rem .875rem}.updatePostActions{display:flex;justify-content:flex-end;margin-bottom:1rem}.df-post-reply-btn,.df-update-btn{margin:.5rem 0}.cancel-update-post{margin-right:20px}.df-btn-disabled{background-color:var(--gray-100);border:solid var(--gray-100)}"]
  }]
}];
/** @nocollapse */

PostReplyComponent.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
  }];
};

PostReplyComponent.propDecorators = {
  showCancel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  mode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  actionEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
}; // import { EventService } from '@sunbird-cb/utils'

var SlidersComponent = /*#__PURE__*/function () {
  function SlidersComponent() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SlidersComponent);

    this.id = "banner_".concat(Math.random());
    this.currentIndex = 0;
    this.slideInterval = null; // super()
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SlidersComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.reInitiateSlideInterval();
    }
  }, {
    key: "reInitiateSlideInterval",
    value: function reInitiateSlideInterval() {
      var _this7 = this;

      console.log('---------------', this.bannerData);

      if (this.bannerData.widgetData.length > 1) {
        try {
          if (this.slideInterval) {
            this.slideInterval.unsubscribe();
          }
        } catch (e) {} finally {
          this.slideInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["interval"])(8000).subscribe(function () {
            if (_this7.currentIndex === _this7.bannerData.widgetData.length - 1) {
              _this7.currentIndex = 0;
            } else {
              _this7.currentIndex += 1;
            }
          });
        }
      }
    }
  }, {
    key: "slideTo",
    value: function slideTo(index) {
      if (index >= 0 && index < this.bannerData.widgetData.length) {
        this.currentIndex = index;
      } else if (index === this.bannerData.widgetDatalength) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.bannerData.widgetData.length + index;
      }

      this.reInitiateSlideInterval();
    }
  }, {
    key: "isOpenInNewTab",
    get: function get() {
      var currentData = this.bannerData[this.currentIndex];

      if (currentData.redirectUrl && currentData.redirectUrl.includes('mailto') || this.bannerData[this.currentIndex].openInNewTab) {
        return true;
      }

      return false;
    }
  }, {
    key: "openInNewTab",
    value: function openInNewTab() {
      var currentData = this.bannerData[this.currentIndex];

      if (currentData.redirectUrl && currentData.redirectUrl.includes('mailto') || this.bannerData[this.currentIndex].openInNewTab) {
        window.open(currentData.redirectUrl);
      }
    }
  }]);

  return SlidersComponent;
}();

SlidersComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'ws-widget-sliders',
    template: "<div class=\"banner-container\" (swipeleft)=\"slideTo(currentIndex + 1)\" (swiperight)=\"slideTo(currentIndex - 1)\"\n    *ngIf=\"bannerData.widgetData?.length > 1\">\n\n    <div class=\"banner WidgetInstanceId\" *ngFor=\"let slide of bannerData.widgetData; let i = index\" [hidden]=\"i !== currentIndex\">\n        <p>{{slide.banners | json}}</p>\n        <img i18n-alt alt=\"Page Banner\" [src]=\"slide.banners\" wsUtilsImageResponsive class=\"banner-image\" />\n    </div>\n    <div class=\"banner-meta\">\n        <!-- <a [routerLink]=\" !isOpenInNewTab ? widgetData[currentIndex].redirectUrl : './'\"\n            class=\"banner-title text-truncate\" *ngIf=\"widgetData[currentIndex].title\"\n            [title]=\"widgetData[currentIndex].title\">\n            {{ widgetData[currentIndex].title }}\n        </a> -->\n        <div class=\"dots-container\" *ngIf=\"bannerData.widgetData?.length > 1\">\n            <span class=\"dot\" [ngClass]=\"{ active: j === currentIndex }\" *ngFor=\"let slide of bannerData.widgetData; let j = index\"\n                (click)=\"slideTo(j)\"></span>\n        </div>\n    </div>\n    <a *ngIf=\"bannerData.widgetData?.length > 1\" role=\"button\" class=\"prev\" (click)=\"slideTo(currentIndex - 1)\">&#10094;</a>\n    <a *ngIf=\"bannerData.widgetData?.length > 1\" role=\"button\" class=\"next\" (click)=\"slideTo(currentIndex + 1)\">&#10095;</a>\n</div>\n<div class=\"banner-container-solo\" *ngIf=\"bannerData.widgetData?.length == 1\">\n    <img i18n-alt alt=\"Page Banner\" [src]=\"bannerData.widgetData[0].banners.xl\" wsUtilsImageResponsive class=\"banner-image-solo\" />\n</div>\n",
    styles: [".banner-container{min-height:243px;overflow:hidden;position:relative;margin:auto;border-radius:12px}.banner-overlay{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:linear-gradient(to left,rgba(0,0,0,.25) 0,rgba(0,0,0,0) 15%,rgba(0,0,0,0) 85%,rgba(0,0,0,.25) 100%)}.banner{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}.banner .banner-image{width:100%;min-height:243px;display:block;height:350px;border-radius:12px}.banner-meta{text-align:center;z-index:2;position:absolute;bottom:0;left:50%;border-radius:12px;transform:translateX(-50%);box-sizing:border-box}.banner-meta .banner-title{color:#f2f2f2;font-size:1.1rem}.banner-meta .dots-container{display:flex;align-items:center;justify-content:center}.banner-meta .dots-container .dot{cursor:pointer;margin:0 6px;background-color:rgba(120,120,120,.75);box-shadow:1px 1px 4px rgba(0,0,0,.6);border-radius:50%;display:inline-block;transition:background-color .5s!important}.banner-meta .dots-container .dot.active{background-color:#d3d3d3}@-webkit-keyframes fade{from{opacity:.25}to{opacity:1}}@keyframes fade{from{opacity:.25}to{opacity:1}}.next,.prev{cursor:pointer;position:absolute;top:50%;transform:translateY(-50%);color:#fff;font-weight:700;z-index:2;border-radius:0 3px 3px 0}.next{right:0;border-radius:3px 0 0 3px}.banner-container-solo{overflow:hidden;margin:auto;border-radius:12px}.banner-image-solo{width:100%;display:block;border-radius:12px}"]
  }]
}];
/** @nocollapse */

SlidersComponent.ctorParameters = function () {
  return [];
};

SlidersComponent.propDecorators = {
  bannerData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["HostBinding"],
    args: ['id']
  }]
}; // import { IGroup } from '../../infy/routes/navigator/models/navigator.model'

var NSDiscussData;

(function (NSDiscussData) {
  var IPageName;

  (function (IPageName) {
    IPageName["HOME"] = "discussion-home";
    IPageName["START"] = "discussion-start";
    IPageName["DETAILS"] = "discussion-details";
    IPageName["CATEGORY"] = "discussion-category";
    IPageName["TAGS"] = "discussion-category";
    IPageName["MY_DISCUSSION"] = "my-discussion";
    IPageName["LIB_ENTRY"] = "lib-entry";
    IPageName["LOAD_ALERT"] = "load-alert";
  })(IPageName = NSDiscussData.IPageName || (NSDiscussData.IPageName = {}));
})(NSDiscussData || (NSDiscussData = {}));
/* tslint:enable */


var LoadAlertComponent = /*#__PURE__*/function () {
  function LoadAlertComponent(telemetryUtils) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, LoadAlertComponent);

    this.telemetryUtils = telemetryUtils;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.exit = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(LoadAlertComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.LOAD_ALERT);
    }
  }, {
    key: "exitForum",
    value: function exitForum(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.LOAD_ALERT);
      this.exit.emit(event);
    }
  }, {
    key: "closeModal",
    value: function closeModal(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.LOAD_ALERT);
      this.close.emit();
    }
  }]);

  return LoadAlertComponent;
}();

LoadAlertComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-load-alert',
    template: "<div class=\"modal fade\" id=\"alertModal\">\n    <div class=\"df-dimmer-alert-modal\">\n        <div class=\"df-alert-modal\">  \n        <div class=\"df-alert-modal-header\">Alert</div> \n        <div class=\"df-alert-modal-content\">\n            <label class=\"df-alert-label\">We are experiencing high traffic.Please try after sometime.</label>\n        </div>\n        <div class=\"df-alert-modal-buttons\">\n            <button class=\"df-btn df-btn-normal df-btn-primary df-alert-close-btn\" id=\"load-alert-close\" (click)=\"exitForum($event)\">Close</button>\n        </div>\n        </div>\n    </div>\n</div>",
    styles: ["#alertModal{display:block;opacity:2!important}.df-dimmer-alert-modal{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .1s ease-in;pointer-events:auto}.df-dimmer-alert-modal .df-alert-modal{max-width:30rem;width:100%;margin:0 auto;border-radius:.1875rem;background:var(--white);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:auto;height:auto}.df-dimmer-alert-modal .df-alert-modal .df-alert-modal-header{background-color:var(--primary);color:var(--white);font-weight:700;font-size:1rem;padding:.5rem 1rem;border-bottom:0 solid var(--gray-100);min-height:2.5rem;line-height:1.5rem}.df-dimmer-alert-modal .df-alert-modal .df-alert-modal-content{padding:1rem;min-height:3.75rem}.df-dimmer-alert-modal .df-alert-modal .df-alert-modal-content .df-alert-label{display:inline-block;margin-bottom:0;font-size:.8125rem;font-weight:700}.df-dimmer-alert-modal .df-alert-modal .df-alert-modal-buttons{padding:.5rem 1rem;background:var(--white);border-top:.0625rem solid var(--gray-100);min-height:3.5rem;display:flex;flex-direction:row-reverse;align-items:center;cursor:pointer}"]
  }]
}];
/** @nocollapse */

LoadAlertComponent.ctorParameters = function () {
  return [{
    type: TelemetryUtilsService
  }];
};

LoadAlertComponent.propDecorators = {
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }],
  exit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};

var ElementsModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function ElementsModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ElementsModule);
});

ElementsModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
  args: [{
    declarations: [PostReplyComponent, CategoryCardComponent, DiscussCardComponent, AvatarPhotoComponent, AppLoaderComponent, RelatedDiscussionComponent, SlidersComponent, LoadAlertComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
    exports: [CategoryCardComponent, DiscussCardComponent, AvatarPhotoComponent, AppLoaderComponent, RelatedDiscussionComponent, AppLoaderComponent, PostReplyComponent, SlidersComponent, LoadAlertComponent]
  }]
}];
/* tslint:enable */

var LibEntryComponent = /*#__PURE__*/function () {
  function LibEntryComponent(activatedRoute, discussionService, configService, location, navigationServiceService, discussionEventService, telemetryUtils) {
    var _this8 = this;

    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, LibEntryComponent);

    this.activatedRoute = activatedRoute;
    this.discussionService = discussionService;
    this.configService = configService;
    this.location = location;
    this.navigationServiceService = navigationServiceService;
    this.discussionEventService = discussionEventService;
    this.telemetryUtils = telemetryUtils;
    this.headerOption = true;
    this.currentRoute = 'all-discussions';
    this.showLoaderAlert = false;
    this.bannerSubscription = this.activatedRoute.data.subscribe(function (data) {
      if (data && data.pageData) {
        _this8.banner = data.pageData.data.banner || [];
      }
    });
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(LibEntryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      /**
       * calling the initservice to tell navigationservice to use the router service
       * because this component is invoke only in router approach
       */
      this.navigationServiceService.initService('routerService');
      this.histtoryStartIndex = window.history.length - 1;
      this.configService.setConfig(this.activatedRoute); // this.activatedRoute.data.subscribe((data) => {

      this.data = this.configService.getConfig();

      if (!this.data) {
        // fallback for query params
        this.configService.setConfigFromParams(this.activatedRoute);
        this.data = this.configService.getConfig();
      }

      this.discussionService.userId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'userId');
      var rawCategories = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'categories');
      this.discussionService.forumIds = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(rawCategories, 'result');
      this.discussionService.initializeUserDetails(this.discussionService.userId);
      this.handleLoaderAlert();
    }
  }, {
    key: "handleLoaderAlert",
    value: function handleLoaderAlert() {
      var _this9 = this;

      this.subscription = this.discussionService.alertEvent.subscribe(function () {
        _this9.showLoaderAlert = true;
      });
    }
  }, {
    key: "goBack",
    value: function goBack() {
      var eventAction = {
        action: 'DF_BACK'
      };
      this.discussionEventService.emitTelemetry(eventAction);
      this.location.back();
    }
  }, {
    key: "close",
    value: function close(event) {
      this.showLoaderAlert = false;
      var eventAction = {
        action: 'DF_CLOSE'
      };
      this.discussionEventService.emitTelemetry(eventAction);
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.LIB_ENTRY);
      window.history.go(-(window.history.length - this.histtoryStartIndex));
    }
  }, {
    key: "closeLoadAlert",
    value: function closeLoadAlert() {
      this.showLoaderAlert = false;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }, {
    key: "onScrollTopActive",
    value: function onScrollTopActive(event) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }]);

  return LibEntryComponent;
}();

LibEntryComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-lib-entry',
    template: "<div class=\"sbt-inside-page-container ui container\">\n    <div class=\"df-header\">\n        <button type=\"button\" class=\"df-btn df-btn-normal df-btn-primary df-back-btn\" tabindex=\"0\" autofocus\n            role=\"button\" (click)=\"goBack()\">\n            <img src=\"./assets/discussion-ui/images/back-img.png\" alt=\"back icon\" />\n            Back\n        </button>\n        <button (click)=\"close($event)\" class=\"df-btn df-btn-normal df-btn-danger df-close-btn\" tabindex=\"0\"\n            id=\"close-discussion-forum\" type=\"button\" autofocus>\n            Close\n            <img src=\"./assets/discussion-ui/images/close.png\" alt=\"close icon\" />\n        </button>\n    </div>\n\n    <div class=\"discussion-forum-content\">\n        <div class=\"discuss-left-panel\">\n            <lib-side-pannel></lib-side-pannel>\n        </div>\n        <div class=\"discuss-right-panel\">\n            <router-outlet (activate)=\"onScrollTopActive($event)\"></router-outlet>\n        </div>\n    </div>\n</div>\n\n<lib-load-alert *ngIf=\"showLoaderAlert\" (exit)=\"close($event)\" (close)=\"closeLoadAlert()\"></lib-load-alert>",

    /* tslint:disable */
    host: {
      class: 'flex-1 main_discuss_lib'
    },
    styles: ["::ng-deep:root{--df-header-bg:var(--df-common-bg)}.df-header{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--df-header-bg);margin-bottom:1rem}.df-header .df-back-btn{display:flex;align-items:center}.df-header .df-back-btn img{width:1rem;height:1rem;margin-right:.25rem;filter:invert(1)}.df-header .df-close-btn img{width:.5rem;height:.5rem;margin-left:.25rem;filter:invert(1)}.discussion-forum-content{display:-ms-grid;display:grid;-ms-grid-columns:1fr 4fr;grid-template-columns:1fr 4fr;grid-gap:1.5rem}@media (max-width:768px){.discussion-forum-content{-ms-grid-columns:1fr;grid-template-columns:1fr}}.ui.container{display:block;max-width:100%!important}@media only screen and (max-width:767px){.ui.container{width:auto!important;margin-left:1em!important;margin-right:1em!important}}@media only screen and (max-width:1800px) and (min-width:768px){.ui.container{width:90%;margin-left:auto!important;margin-right:auto!important}}"]
  }]
}];
/** @nocollapse */

LibEntryComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]
  }, {
    type: NavigationServiceService
  }, {
    type: DiscussionEventsService
  }, {
    type: TelemetryUtilsService
  }];
};
/* tslint:enable */


var SidePannelComponent = /*#__PURE__*/function () {
  function SidePannelComponent(router, discussService, activatedRoute, telemetryUtils, configService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SidePannelComponent);

    this.router = router;
    this.discussService = discussService;
    this.activatedRoute = activatedRoute;
    this.telemetryUtils = telemetryUtils;
    this.configService = configService;
    this.defaultPage = 'categories';
    this.menu = [];
    this.showSideMenu = true;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SidePannelComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // TODO: loader or spinner
      this.telemetryUtils.setContext([]);
      this.hideSidePanel = document.body.classList.contains('widget');
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.HOME);
      this.data = this.configService.getConfig();
      var menuArr = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'menuOptions') && Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'menuOptions').length > 0 ? this.data.menuOptions : MENUOPTIONS; // })

      for (var i = 0; i < menuArr.length; i++) {
        if (menuArr[i].enable) {
          this.menu.push(menuArr[i]);
        }
      }
    }
  }, {
    key: "isActive",
    value: function isActive(selectedItem) {
      this.landingPage = this.data.defaultLandingPage ? this.data.defaultLandingPage : 'categories';

      if (this.router.url.indexOf("/".concat(selectedItem)) > -1 || this.selectedTab === selectedItem) {
        if (!this.selectedTab) {
          this.selectedTab = selectedItem;
        }

        return true;
      } else if (selectedItem === this.landingPage && !this.selectedTab) {
        return true;
      }

      return false;
    }
  }, {
    key: "navigate",
    value: function navigate(pageName, event) {
      this.selectedTab = pageName;
      this.telemetryUtils.setContext([]);

      if (event) {
        this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.HOME);
      }

      this.router.navigate(["".concat(this.configService.getRouterSlug()).concat(ROUTES.DISCUSSION).concat(pageName)], {
        queryParamsHandling: "merge"
      });
      this.closeNav();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.paramsSubscription) {
        this.paramsSubscription.unsubscribe();
      }
    }
  }, {
    key: "showMenuButton",
    value: function showMenuButton() {
      this.showSideMenu = this.showSideMenu ? false : true;
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      this.showSideMenu = this.showSideMenu ? false : true;
    }
  }]);

  return SidePannelComponent;
}();

SidePannelComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-side-pannel',
    template: "<ul class=\"sb-sidebar-menu pl-0\" *ngIf=\"!hideSidePanel\">\n  <!-- <li class=\"df-sidebar-menu-list\" *ngIf=\"false\" (click)=\"navigate('home', $event)\" id=\"all-discussions\"><a>All discussions</a></li> -->\n  <li *ngFor='let d of menu' class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\" [ngClass]=\"{'menu-active': isActive(d.route)}\"\n    (click)=\"navigate(d.route, $event)\" id=\"d.route\"><a>{{d.label}}</a></li>\n    <!-- <li class=\"df-sidebar-menu-list\" id=\"leader-board\"><a>Leaderboard</a></li> -->\n</ul>\n\n<!-- for mobile-view -->\n<button type=\"button\" class=\"open-btn\" (click)=\"showMenuButton()\">\u2630</button> \n<div class=\"overlay-sidebar\" *ngIf=\"!showSideMenu\">\n  <div class=\"overlay-sidebar__menu\">\n      <a href=\"javascript:void(0)\" class=\"close-btn\" (click)=\"closeNav()\">&times;</a>\n      <div class=\"overlay-sidebar__menu__content\">\n        <ul class=\"sb-sidebar-menu-mob pl-0\">\n          <li *ngFor='let d of menu' class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\" [ngClass]=\"{'menu-active': isActive(d.route)}\"\n          (click)=\"navigate(d.route, $event)\" id=\"d.route\"><a>{{d.label}}</a></li>\n          <!-- <li class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\" *ngIf=\"false\" (click)=\"navigate('home', $event)\" id=\"all-discussions\"><a>All discussions</a></li>\n          <li class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\" [ngClass]=\"{'menu-active': selectedTab === 'categories'}\" (click)=\"navigate('categories', $event)\" id=\"discussion-categories\"><a>Categories</a></li>\n          <li class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\"[ngClass]=\"{'menu-active': selectedTab === 'tags'}\" (click)=\"navigate('tags', $event)\" id=\"discussion-tags\"><a>Tags</a></li>\n          <li class=\"df-sidebar-menu-list\" tabindex=\"0\" role=\"link\" [ngClass]=\"{'menu-active': selectedTab === 'my-discussion'}\" (click)=\"navigate('my-discussion', $event)\" id=\"my-discussion\"><a>My discussions</a></li> -->\n      </ul>\n      </div>\n  </div>\n</div>",
    styles: ["::ng-deep:root{--df-sidebar-menu-text:var(--gray-600);--df-sidebar-menu-active-text:var(--primary);--df-sidebar-menu-bl:var(--primary);--df-sidebar-menu-active-bg:var(--df-common-bg);--open-btn-bg:var(--white);--open-btn-color:var(--gray-800);--df-overlay-sidebar-bg:var(--black);--df-overlay-sidebar-bg-menu:#f5f6fa}.sb-sidebar-menu{list-style-type:none;margin-bottom:0;height:100%;display:inline}.df-sidebar-menu-list{margin-bottom:.5rem;padding:.75rem 1rem;font-size:14px;color:var(--df-sidebar-menu-text);border-left:.125rem solid transparent;cursor:pointer}.df-sidebar-menu-list.menu-active,.df-sidebar-menu-list:hover{background-color:var(--df-sidebar-menu-active-bg);font-weight:700;border-left:.1875rem solid var(--df-sidebar-menu-bl);color:var(--df-sidebar-menu-active-text);border-bottom:0}.sb-sidebar-menu-mob{list-style-type:none;margin-bottom:0;height:100%;display:inline}.open-btn,.overlay-sidebar{display:none}@media (max-width:768px){.sb-sidebar-menu{display:none}.open-btn{display:inline;border:none;cursor:pointer;height:2.5rem;width:2.5rem;border-radius:1rem;font-size:1.375rem;background-color:var(--open-btn-bg);box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:var(--open-btn-color)}.overlay-sidebar{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:var(--df-overlay-sidebar-bg-menu);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.overlay-sidebar__menu .close-btn{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.overlay-sidebar__menu__content{padding:0 1rem;height:100%}}"]
  }]
}];
/** @nocollapse */

SidePannelComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: DiscussionService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: TelemetryUtilsService
  }, {
    type: ConfigService
  }];
};
/* tslint:enable */


var DiscussHomeComponent = /*#__PURE__*/function () {
  function DiscussHomeComponent(router, route, discussionService, configService, telemetryUtils, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussHomeComponent);

    this.router = router;
    this.route = route;
    this.discussionService = discussionService;
    this.configService = configService;
    this.telemetryUtils = telemetryUtils;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.discussionList = [];
    this.showStartDiscussionModal = false; // categoryId: string;

    this.isTopicCreator = false;
    this.showLoader = false;
    this.currentActivePage = 1;
    this.pagination = Object.create({}); // Input parameters for infinite scroll

    this.InfiniteScrollConfig = {
      modalScrollDistance: 2,
      modalScrollThrottle: 50
    }; // Input parameters for infinite scroll

    this.modalScrollDistance = -12;
    this.modalScrollThrottle = 500;
    this.scrollUpDistance = 5;
    this.currentPage = 0;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussHomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this10 = this;

      this.telemetryUtils.logImpression(NSDiscussData.IPageName.HOME);
      this.route.params.subscribe(function (params) {
        _this10.configService.setCategoryId.subscribe(function (categoryIds) {
          _this10.routeParams = categoryIds; // categoryIds = this.discussionService.getContext(CONTEXT_PROPS.cid)

          categoryIds = _this10.categoryId ? _this10.categoryId : categoryIds;

          _this10.getDiscussionList(categoryIds);
        });

        _this10.routeParams = params;
        _this10.categoryId = _this10.discussionService.getContext(CONTEXT_PROPS.cid); // this.getDiscussionList(_.get(this.routeParams, 'slug'));
      });
    }
    /**
    * @description - set the scroll container height
    */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.elementView && this.elementView.nativeElement && !this.elementView.nativeElement.style.height) {
        // the number 10 is just a random value to reduce the height of the parent container to the infinite scroll
        this.elementView.nativeElement.style.height = this.elementView.nativeElement.clientHeight - 10 + 'px';
      }
    }
  }, {
    key: "navigateToDiscussionDetails",
    value: function navigateToDiscussionDetails(discussionData) {
      var matchedTopic = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["find"])(this.telemetryUtils.getContext(), {
        type: 'Topic'
      });

      if (matchedTopic) {
        this.telemetryUtils.deleteContext(matchedTopic);
      }

      this.telemetryUtils.uppendContext({
        id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'tid'),
        type: 'Topic'
      });
      var routerSlug = this.configService.getConfig().routerSlug ? this.configService.getConfig().routerSlug : '';
      var input = {
        data: {
          url: "".concat(routerSlug).concat(ROUTES.TOPIC).concat(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["trim"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'slug'))),
          queryParams: {},
          tid: discussionData.tid,
          title: discussionData.title
        },
        action: CATEGORY_DETAILS
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        tid: discussionData.tid,
        title: discussionData.title,
        action: this.categoryHomeAction
      });
    }
    /**
     * @description - To get all the topics
     * @param - required cid as a slug
     */

  }, {
    key: "getDiscussionList",
    value: function getDiscussionList(slug) {
      var _this11 = this;

      this.showLoader = true;
      var scrollIndex = this.pagination.currentPage ? this.pagination.currentPage : 1;
      this.discussionService.getContextBasedTopic(slug, scrollIndex).subscribe(function (data) {
        _this11.pagination = data.pagination;
        _this11.showLoader = false;
        _this11.isTopicCreator = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'privileges.topics:create') === true ? true : false;
        _this11.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this11.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["union"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'topics'), Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'children'))));
      }, function (error) {
        _this11.showLoader = false; // error code check

        _this11.discussionService.showTrafficAlert(error); // TODO: Toaster


        console.log('error fetching topic list', error);
      });
    }
  }, {
    key: "startDiscussion",
    value: function startDiscussion() {
      this.showStartDiscussionModal = true;
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.HOME);
    }
  }, {
    key: "closeModal",
    value: function closeModal(event) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'message') === 'success') {
        this.discussionList = [];
        this.pagination.currentPage = this.pagination.first.page;
        this.getDiscussionList(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.routeParams, 'slug'));
      }

      this.showStartDiscussionModal = false;
    }
    /**
     * @description - call the topic get api when scrolled down
     */

  }, {
    key: "onModalScrollDown",
    value: function onModalScrollDown() {
      if (this.pagination.currentPage !== this.pagination.pageCount) {
        this.pagination.currentPage = this.pagination.next.page;
        this.getDiscussionList(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.routeParams, 'slug'));
      }
    }
  }]);

  return DiscussHomeComponent;
}();

DiscussHomeComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-home',
    template: "<button *ngIf=\"isTopicCreator\" (click)=\"startDiscussion();logTelemetry($event)\" role=\"link\" tabindex=\"0\"\n    class=\"df-btn df-btn-normal df-btn-primary df-start-btn\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\" data-keyboard=\"false\"\n    id=\"start-discussion\">Start Discussion</button>\n<div *ngIf=\"discussionList && discussionList.length > 0\" class=\"topic-list-container\" id=\"topic-scroll\" #scrollContainerHeight>\n    <div [infiniteScrollContainer]=\"'.topic-list-container'\" infinite-scroll class=\"infinite-scroll\"\n        [scrollWindow]=\"false\" [infiniteScrollDistance]=\"InfiniteScrollConfig.modalScrollDistance\" [fromRoot]=\"true\"\n        [infiniteScrollThrottle]=\"InfiniteScrollConfig.modalScrollThrottle\" (scrolled)=\"onModalScrollDown()\">\n        <div *ngFor=\"let discussionData of discussionList\"\n            (click)=\"navigateToDiscussionDetails(discussionData);logTelemetry($event)\" id=\"topic-card\">\n            <lib-discuss-card [discussionData]=\"discussionData\"></lib-discuss-card>\n        </div>\n    </div>\n</div>\n<ng-container *ngIf=\"!(discussionList && discussionList.length > 0)\">\n    <div class=\"no-card-content\" id=\"topic-card\" tabindex=\"0\">\n        <div class=\"no-data-label\">No Data</div>\n        <div>\n            <span>&nbsp;</span>\n        </div>\n    </div>\n</ng-container>\n<lib-app-loader *ngIf=\"showLoader\"></lib-app-loader>\n<lib-discuss-start [categoryId]=\"categoryId\" (close)=\"closeModal($event)\" *ngIf=\"showStartDiscussionModal\">\n</lib-discuss-start>",
    styles: [".df-start-btn{margin-bottom:1rem}"]
  }]
}];
/** @nocollapse */

DiscussHomeComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: TelemetryUtilsService
  }, {
    type: NavigationServiceService
  }];
};

DiscussHomeComponent.propDecorators = {
  categoryId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  categoryHomeAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }],
  elementView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["ViewChild"],
    args: ['scrollContainerHeight', {
      static: false
    }]
  }]
};
/* tslint:enable */

var DiscussCategoryComponent = /*#__PURE__*/function () {
  function DiscussCategoryComponent(discussService, configService, router, activatedRoute, telemetryUtils, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussCategoryComponent);

    this.discussService = discussService;
    this.configService = configService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.telemetryUtils = telemetryUtils;
    this.navigationService = navigationService;
    this.categories = [];
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.pageId = 0;
    this.isTopicCreator = false;
    this.showStartDiscussionModal = false;
    this.showLoader = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussCategoryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this12 = this;

      /** It will look for the queryParams, if back button is clicked,
       * the queryParams will change and it will fetch the categories
       * if there is no queryParams available, then it will fetch the default categories of the forumIds
       */
      this.telemetryUtils.setContext([]);
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.CATEGORY);
      this.forumIds = this.categoryIds ? this.categoryIds : this.discussService.forumIds;
      this.paramsSubscription = this.activatedRoute.queryParams.subscribe(function (params) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(params, 'cid')) {
          _this12.navigateToDiscussionPage(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(params, 'cid'));
        } else {
          _this12.categories = [];

          if (_this12.forumIds.length) {
            _this12.fetchAllAvailableCategories(_this12.forumIds);
          } else {
            _this12.fetchAllCategories();
          }
        }
      });
    }
  }, {
    key: "fetchAllAvailableCategories",
    value: function fetchAllAvailableCategories(ids) {
      var _this13 = this;

      this.showLoader = true;
      ids.forEach(function (cid) {
        _this13.fetchCategory(cid).subscribe(function (data) {
          _this13.showLoader = false;

          _this13.categories.push(data);
        }, function (error) {
          // TODO: Toast error
          // error code check
          _this13.discussService.showTrafficAlert(error);

          console.log('issue fetching category', error);
          _this13.showLoader = false;
        });
      });
    }
  }, {
    key: "fetchAllCategories",
    value: function fetchAllCategories() {
      var _this14 = this;

      this.showLoader = true;
      this.discussService.fetchAllCategories().subscribe(function (data) {
        _this14.showLoader = false;
        _this14.categories = data;
      }, function (error) {
        // TODO: Toast error
        // error code check
        _this14.discussService.showTrafficAlert(error);

        console.log('issue fetching category', error);
        _this14.showLoader = false;
      });
    }
  }, {
    key: "fetchCategory",
    value: function fetchCategory(cid) {
      return this.discussService.fetchSingleCategoryDetails(cid);
    }
    /**
     * It will fetch the children for each category click.
     * if there is no children available the it will redirect to the topic list page
     */

  }, {
    key: "navigateToDiscussionPage",
    value: function navigateToDiscussionPage(cid, slug) {
      var _this15 = this;

      this.showLoader = true;
      this.telemetryUtils.uppendContext({
        id: cid,
        type: 'Category'
      });
      this.discussService.fetchSingleCategoryDetails(cid).subscribe(function (response) {
        _this15.showLoader = false;
        _this15.categoryId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'cid');
        _this15.isTopicCreator = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'privileges.topics:create') === true ? true : false;
        _this15.showStartDiscussionModal = false;
        var input;

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'children').length > 0) {
          _this15.router.navigate([], {
            relativeTo: _this15.activatedRoute.parent,
            queryParams: {
              cid: _this15.categoryId
            }
          }); // input = { data: { url: '', queryParams: { cid: this.categoryId } }, action: this.categoryAction}
          // this.navigationService.navigate(input)


          Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'children').forEach(function (subCategoryData) {
            _this15.categories.push(subCategoryData);
          });
        } else {
          _this15.discussService.setContext(CONTEXT_PROPS.cid, _this15.categoryId);

          _this15.configService.setCategoryid(_this15.categoryId);

          var routerSlug = _this15.configService.getConfig().routerSlug ? _this15.configService.getConfig().routerSlug : '';
          input = {
            data: {
              url: "".concat(routerSlug).concat(ROUTES.CATEGORY).concat(_this15.categoryId),
              queryParams: {}
            },
            action: CATEGORY_HOME
          };

          _this15.navigationService.navigate(input);

          _this15.stateChange.emit({
            action: _this15.categoryAction,
            categoryId: _this15.categoryId
          });
        }
      }, function (error) {
        // error code check
        _this15.discussService.showTrafficAlert(error);

        _this15.showLoader = false; // TODO: Toast error

        console.log('issue fetching category', error);
      });
    }
  }, {
    key: "startDiscussion",
    value: function startDiscussion() {
      this.showStartDiscussionModal = true;
    }
  }, {
    key: "closeModal",
    value: function closeModal(event) {
      this.showStartDiscussionModal = false;
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.CATEGORY);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.paramsSubscription) {
        this.paramsSubscription.unsubscribe();
      }
    }
  }]);

  return DiscussCategoryComponent;
}();

DiscussCategoryComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-category',
    template: "<lib-app-loader *ngIf=\"showLoader\"></lib-app-loader>\n <!-- <button (click)=\"startDiscussion();logTelemetry($event)\" *ngIf=\"isTopicCreator\" class=\"df-btn df-btn-primary df-btn-normal mb-16\" id=\"start-discussion\">Start Discussion</button> -->\n  <div class=\"discuss-category-cards\">\n    <ng-container  *ngFor=\"let data of categories\">\n      <div (click)=\"navigateToDiscussionPage(data?.cid, data?.slug);logTelemetry($event)\" class=\"categories-card-content\" id=\"category-card\">\n      <lib-category-card [category]=\"data\" ></lib-category-card>\n      </div>\n    </ng-container>\n  </div>\n\n  <lib-discuss-start (close)=\"closeModal($event)\" [categoryId]=\"categoryId\" *ngIf=\"showStartDiscussionModal\" ></lib-discuss-start>\n",
    styles: [".discuss-category-cards{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(292px,1fr));grid-gap:1.5rem;margin-bottom:1.5rem;cursor:pointer;position:relative;z-index:unset}@media (max-width:700px){.discuss-category-cards{-ms-grid-columns:1fr;grid-template-columns:1fr}}"]
  }]
}];
/** @nocollapse */

DiscussCategoryComponent.ctorParameters = function () {
  return [{
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: TelemetryUtilsService
  }, {
    type: NavigationServiceService
  }];
};

DiscussCategoryComponent.propDecorators = {
  categoryIds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  categoryAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};

var DiscussUtilsService = /*#__PURE__*/function () {
  function DiscussUtilsService() {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussUtilsService);
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussUtilsService, [{
    key: "stringToColor",
    value: function stringToColor(title) {
      var hash = 0;

      for (var i = 0; i < title.length; i++) {
        // tslint:disable-next-line: no-bitwise
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
      }

      var hue = Math.abs(hash % 360); // tslint:disable-next-line: prefer-template

      var colour = 'hsl(' + hue + ',100%,30%)';
      return colour;
    }
  }, {
    key: "getContrast",
    value: function getContrast() {
      return 'rgba(255, 255, 255, 80%)';
    }
    /**
     * The htmlDecode() method parses a string containing either HTML or XML
     * @param  {any} str
     */

  }, {
    key: "htmlDecode",
    value: function htmlDecode(str) {
      var doc = new DOMParser().parseFromString(str, "text/html");
      return doc.documentElement.textContent;
    }
  }]);

  return DiscussUtilsService;
}();

DiscussUtilsService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Injectable"],
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */

DiscussUtilsService.ctorParameters = function () {
  return [];
};

DiscussUtilsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"])({
  factory: function DiscussUtilsService_Factory() {
    return new DiscussUtilsService();
  },
  token: DiscussUtilsService,
  providedIn: "root"
});
/* tslint:enable */

var DiscussTagsComponent = /*#__PURE__*/function () {
  function DiscussTagsComponent(discussionService, telemetryUtils, router, activatedRoute, configService, discussUtils, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussTagsComponent);

    this.discussionService = discussionService;
    this.telemetryUtils = telemetryUtils;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.configService = configService;
    this.discussUtils = discussUtils;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.showLoader = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussTagsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.telemetryUtils.setContext([]);
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.TAGS);
      this.cIds = this.configService.getCategories();

      if (this.configService.hasContext()) {
        this.getContextBasedTags(this.cIds.result);
      } else {
        this.fetchAllTags();
      }
    }
  }, {
    key: "fetchAllTags",
    value: function fetchAllTags() {
      var _this16 = this;

      this.showLoader = true;
      this.discussionService.fetchAllTag().subscribe(function (data) {
        _this16.showLoader = false;
        _this16.filteredTags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'tags');
      }, function (error) {
        _this16.showLoader = false; // TODO: toaster

        console.log('error fetching tags');
      });
    }
  }, {
    key: "getContextBasedTags",
    value: function getContextBasedTags(cid) {
      var _this17 = this;

      var req = {
        cids: cid
      };
      this.showLoader = true;
      this.discussionService.contextBasedTags(req).subscribe(function (data) {
        _this17.showLoader = false;
        _this17.filteredTags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'result');
      }, function (error) {
        _this17.showLoader = false; // TODO: toaster

        console.log('error fetching tags');
      });
    }
  }, {
    key: "getBgColor",
    value: function getBgColor(tagTitle) {
      var bgColor = this.discussUtils.stringToColor(tagTitle.toLowerCase());
      var color = this.discussUtils.getContrast();
      return {
        color: color,
        'background-color': bgColor
      };
    }
  }, {
    key: "getAllDiscussions",
    value: function getAllDiscussions(tag) {
      this.queryParam = tag.value;
      var tagdata = {
        tagname: ''
      };
      tagdata.tagname = tag.value;
      this.queryParam = tagdata;
      var routerSlug = this.configService.getConfig().routerSlug ? this.configService.getConfig().routerSlug : '';
      var input = {
        data: {
          url: "".concat(routerSlug).concat(ROUTES.TAG, "tag-discussions"),
          queryParams: this.queryParam,
          tagName: this.queryParam.tagName
        },
        action: 'tagsAll'
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        action: TAG_ALL_DISCUSS,
        title: tag.value,
        tid: 'sd'
      }); // tslint:disable-next-line: max-line-length
      // this.router.navigate([`${this.configService.getRouterSlug()}${CONSTANTS.ROUTES.TAG}tag-discussions`], { queryParams: this.queryParam });
    }
  }]);

  return DiscussTagsComponent;
}();

DiscussTagsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-tags',
    template: "<lib-app-loader *ngIf=\"showLoader\"></lib-app-loader>\n<div class=\"flex flex-1 margin-top-m flex-column discussion-tag-content\">\n  <ng-container *ngIf=\"filteredTags && filteredTags.length > 0\">\n    <div class=\"tags\">\n      <div *ngFor=\"let tag of filteredTags \" class=\"tag\" [ngStyle]=\"getBgColor(tag.value)\"\n        (click)=\"getAllDiscussions(tag)\">\n        <!-- Can enable random colors from below commented code -->\n        <!-- <div *ngFor=\"let tag of filteredTags | pipeFilter:'score,value':query\"\n        class=\"tag text-capitalize\" [ngStyle]=\"getBgColor(tag.value)\"> -->\n        <span class=\"margin-left-m\">{{tag.value}}</span>\n        <span class=\"ws-mat-default-text count\">{{tag.score}}</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n\u200B\n\u200B\n<div class=\"tag-empty-container\" *ngIf=\"!showLoader && !filteredTags.length\">\n  <div class=\"tag-empty-img\"><img src=\"./assets/discussion-ui/images/empty.svg\" alt=\"empty image\"></div>\n  <label class=\"tag-empty-label\">No tags Available !</label>\n  <p class=\"tag-empty-text\">Stay tuned ! we will be updating our tags library and add them here</p>\n</div>\n",
    styles: ["::ng-deep:root{--df-tag-empty-bg:var(--df-common-bg)}.sb-search-box{display:flex;align-items:center;border:0}.sb-search-box .sb-search-input{width:100%;font-size:.875rem;min-height:2rem;outline:0;border-radius:.25rem;line-height:normal;background:0 0;padding:1em;border:0}.search-icon{width:1.125rem;height:1.125rem;margin:1rem 0 1rem 1rem}.sb-search-box .input-div{border-radius:1.5rem;background:var(--white);display:flex;align-items:center;border:.0625rem solid var(--gray-100);width:100%}.sb-search-box .input-div:hover{border-color:var(--primary)}.tag{cursor:pointer}@media (max-width:768px){.discuss-tags{flex-direction:column}}.tag-empty-container{background:var(--white);background:var(--df-tag-empty-bg);color:var(--df-text);display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:.25rem;height:100%;min-height:28.125rem}.tag-empty-container .tag-empty-img{width:100%;max-width:13.875rem}.tag-empty-container .tag-empty-label{font-size:.875rem;font-weight:700;margin:1.5rem 0 .75rem;color:var(--black)!important}.tag-empty-container .tag-empty-text{font-size:.875rem;font-weight:400;text-align:center;color:var(--black)!important}"]
  }]
}];
/** @nocollapse */

DiscussTagsComponent.ctorParameters = function () {
  return [{
    type: DiscussionService
  }, {
    type: TelemetryUtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: ConfigService
  }, {
    type: DiscussUtilsService
  }, {
    type: NavigationServiceService
  }];
};

DiscussTagsComponent.propDecorators = {
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};
/* tslint:enable */

var MyDiscussionComponent = /*#__PURE__*/function () {
  function MyDiscussionComponent(discussService, configService, router, telemetryUtils) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MyDiscussionComponent);

    this.discussService = discussService;
    this.configService = configService;
    this.router = router;
    this.telemetryUtils = telemetryUtils;
    this.discussionList = []; // this is for posts

    this.currentFilter = 'timestamp';
    this.userInitial = '';
    this.showLoader = false;
    this.pagination = Object.create({}); // Input parameters for infinite scroll

    this.InfiniteScrollConfig = {
      modalScrollDistance: 2,
      modalScrollThrottle: 50
    };
  }
  /** To fetch user details */


  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MyDiscussionComponent, [{
    key: "fetchUserProfile",
    value: function fetchUserProfile(userName) {
      var _this18 = this;

      this.discussService.fetchUserProfile(userName).subscribe(function (response) {
        _this18.showLoader = false;
        console.log(response);
        _this18.data = response;

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this18.data, 'posts')) {
          _this18.discussionList = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this18.data, 'posts').filter(function (p) {
            return p.isMainPost === true;
          });
        } // if (this.configSvc.userProfile) {
        //   localStorage.setItem(this.configSvc.userProfile.userId, this.profilePhoto);
        // }

      }, function (error) {
        _this18.showLoader = false; // error code check

        _this18.discussService.showTrafficAlert(error); // TODO: Toaster


        console.log('error fetching user details');
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.telemetryUtils.setContext([]);
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.MY_DISCUSSION);
      this.filter(this.currentFilter, false);
    }
    /**
     * @description - set the scroll container height
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.elementView && this.elementView.nativeElement && !this.elementView.nativeElement.style.height) {
        // the number 10 is just a random value to reduce the height of the parent container to the infinite scroll
        this.elementView.nativeElement.style.height = this.elementView.nativeElement.clientHeight - 10 + 'px';
      }
    }
    /**
     * @param  {string|'timestamp'|'best'|'saved'|'watched'|'upvoted'|'downvoted'} key
     * @param  {boolean} resetpagination - its used to reset the pagination value based on the filter data
     */

  }, {
    key: "filter",
    value: function filter(key, resetpagination) {
      var _this19 = this;

      this.currentFilter = key;

      if (key) {
        // reset the currentpage value to 1 and reset the discussionList data based on the respective api response when the filter is changed
        if (resetpagination) {
          this.discussionList = [];
          this.pagination.currentPage = 1;
        } // setting the current page index 


        var scrollIndex = this.pagination.currentPage ? this.pagination.currentPage : 1;
        this.showLoader = true;

        switch (key) {
          case 'timestamp':
            this.getRecentTopics(scrollIndex);
            break;

          case 'best':
            // this.discussionList = _.uniqBy(this.data.bestPosts, 'tid');
            this.discussService.fetchBestPost(scrollIndex).subscribe(function (result) {
              if (result) {
                var bestPost = result['posts'].filter(function (p) {
                  return p.isMainPost === true;
                });
                _this19.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this19.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(bestPost));
                _this19.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(result, 'pagination');
                _this19.showLoader = false;
              } else {
                _this19.showLoader = false;
                _this19.discussionList = [];
              }
            }, function (error) {
              // error code check
              _this19.discussService.showTrafficAlert(error);
            });
            break;

          case 'saved':
            this.discussService.fetchSaved(scrollIndex).subscribe(function (response) {
              if (response) {
                // this.discussionList = _.uniqBy(response['posts'], 'tid');
                _this19.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this19.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(response['posts']));
                _this19.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'pagination');
                _this19.showLoader = false;
              } else {
                _this19.showLoader = false;
                _this19.discussionList = [];
              }
            }, // tslint:disable-next-line
            function (error) {
              // error code check
              _this19.discussService.showTrafficAlert(error);

              _this19.discussionList = [];
            });
            break;

          case 'watched':
            this.showLoader = false;
            this.discussionList = [];
            break;

          case 'upvoted':
            this.discussService.fetchUpvoted(scrollIndex).subscribe(function (response) {
              if (response) {
                // this.discussionList = _.uniqBy(response['posts'], 'tid');
                var upvoted = response['posts'].filter(function (p) {
                  return p.isMainPost === true;
                });
                _this19.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'pagination');
                _this19.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this19.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(upvoted));
                _this19.showLoader = false;
              } else {
                _this19.showLoader = false;
                _this19.discussionList = [];
              }
            }, // tslint:disable-next-line
            function (error) {
              _this19.discussionList = []; // error code check

              _this19.discussService.showTrafficAlert(error);
            });
            break;

          case 'downvoted':
            this.discussService.fetchDownvoted(scrollIndex).subscribe(function (response) {
              if (response) {
                // this.discussionList = _.uniqBy(response['posts'], 'tid');
                var downvoted = response['posts'].filter(function (p) {
                  return p.isMainPost === true;
                });
                _this19.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this19.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(downvoted));
                _this19.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(response, 'pagination');
                _this19.showLoader = false;
              } else {
                _this19.showLoader = false;
                _this19.discussionList = [];
              }
            }, // tslint:disable-next-line
            function (error) {
              _this19.discussionList = []; // error code check

              _this19.discussService.showTrafficAlert(error);
            });
            break;

          default:
            // this.discussionList = _.uniqBy(this.data.latestPosts, 'tid');
            this.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'pagination');
            this.discussionList = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.data, 'latestPosts');
            break;
        }
      }
    }
  }, {
    key: "navigateToDiscussionDetails",
    value: function navigateToDiscussionDetails(discussionData) {
      console.log('discussionData', discussionData);
      var slug = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'slug') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'topic.slug');
      this.router.navigate(["".concat(this.configService.getRouterSlug()).concat(ROUTES.TOPIC).concat(slug)]);
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.MY_DISCUSSION);
    }
    /**
     * @description - getting the recent post data
     * @param  {number} scrollIndex
     */

  }, {
    key: "getRecentTopics",
    value: function getRecentTopics(scrollIndex) {
      var _this20 = this;

      var userId = this.discussService.userId; // const userSlug = this.discussService.userDetails.userslug;

      Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["combineLatest"])([this.discussService.fetchUserProfile(userId), this.discussService.fetchRecentPost(scrollIndex)]).subscribe(function (result) {
        console.log('getRecentTopics', result);
        _this20.showLoader = false;
        _this20.data = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["merge"])(result[0], result[1]);
        _this20.discussionList = [].concat(Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this20.discussionList), Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this20.data, 'posts')));
        _this20.discussionList = _this20.discussionList.filter(function (p) {
          return p.isMainPost === true;
        });
        _this20.pagination = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this20.data, 'pagination');
      }, function (error) {
        _this20.showLoader = false;
        console.log(error);
      });
    }
    /**
     * @description - call the topic get api when scrolled down and setting the limit of API Call
     */

  }, {
    key: "onModalScrollDown",
    value: function onModalScrollDown() {
      var _this21 = this;

      if (this.pagination.currentPage !== this.pagination.pageCount) {
        this.pagination.currentPage = this.pagination.next.page;
        var resetpagination = false; // using settimeout to avoid the function call before getting the pagination response from api, 
        // because the api is called twice with the same page index

        setTimeout(function () {
          _this21.filter(_this21.currentFilter, resetpagination);
        }, 800);
      }
    }
  }]);

  return MyDiscussionComponent;
}();

MyDiscussionComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-my-discussion',
    template: "<lib-app-loader *ngIf=\"showLoader\"></lib-app-loader>\n\n<div class=\"profileCard\">\n  <div class=\"profile-card-content\">\n    <div class=\"profile-header-image\">\n      <div class=\"box-text\">\n        <span class=\"box-label\"></span>{{ data?.username | splitInitials }}\n      </div>\n    </div>\n    <div>\n      <div class=\"profile-label name\" [innerHTML]=\"data?.username\"></div>\n      <div class=\"profile-label department\">{{ department }}</div>\n      <div class=\"profile-label location\">{{ location }}</div>\n      <div class=\"profile-label email\">{{ data?.email || data?.username }}</div>\n      <ng-container>\n        <div class=\"my-discuss-topics\">\n          <div class=\"my-discuss-topics__content\">\n            <div class=\"my-discuss-label\">\n              <span class=\"number\">{{ data?.topiccount || 0 }}</span>\n              Discussions\n            </div>\n            <div class=\"post-count-area my-discuss-label\">\n              <span class=\"number\">{{ data?.postcount || 0 }}</span>\n              Posts\n            </div>\n          </div>\n          <div class=\"text-right\">\n            <!-- Enable lated when other user can visit your profile -->\n            <!-- <span class=\"noocoments\" mat-card-subtitle>Last online {{data?.lastonline | pipeRelativeTime}}</span> -->\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-container>\n  <div class=\"recent-tabs\">\n    <div class=\"tabs-content\">\n      <div class=\"tabs-filter\">\n        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{\n            'tabs-active': currentFilter === 'timestamp',\n            'ws-mat-accent-border font-medium': currentFilter !== 'timestamp'\n          }\" (click)=\"filter('timestamp', true); logTelemetry($event)\" id=\"recent-post\">\n          Recent posts\n        </a>\n        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{\n            'tabs-active': currentFilter === 'best',\n            'ws-mat-accent-border font-medium': currentFilter !== 'best'\n          }\" (click)=\"filter('best', true); logTelemetry($event)\" id=\"best-post\">\n          Best posts\n        </a>\n        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{\n            'tabs-active': currentFilter === 'saved',\n            'ws-mat-accent-border font-medium': currentFilter !== 'saved'\n          }\" (click)=\"filter('saved', true); logTelemetry($event)\" id=\"saved-post\">\n          Saved posts\n        </a>\n        <!-- <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option \" [ngClass]=\"{'ws-mat-accent-border-active' : currentFilter === 'watched',\n                                            'ws-mat-accent-border font-medium':currentFilter !== 'watched'}\" mat-button\n            (click)=\"filter('watched')\">\n            Watched </a> -->\n        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{\n            'tabs-active': currentFilter === 'upvoted',\n            'ws-mat-accent-border font-medium': currentFilter !== 'upvoted'\n          }\" (click)=\"filter('upvoted', true); logTelemetry($event)\" id=\"upvoted-post\">\n          Upvoted\n        </a>\n\n        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{\n            'tabs-active': currentFilter === 'downvoted',\n            'ws-mat-accent-border font-medium': currentFilter !== 'downvoted'\n          }\" (click)=\"filter('downvoted', true); logTelemetry($event)\" id=\"downvoted-post\">\n          Downvoted\n        </a>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<div *ngIf=\"discussionList && discussionList.length > 0\" class=\"topic-list-container\" id=\"topic-scroll\"\n  #scrollContainerHeight>\n  <!--infinite scroll-->\n  <div [infiniteScrollContainer]=\"'.topic-list-container'\" infinite-scroll class=\"infinite-scroll\"\n    [scrollWindow]=\"false\" [infiniteScrollDistance]=\"InfiniteScrollConfig.modalScrollDistance\" [fromRoot]=\"true\"\n    [infiniteScrollThrottle]=\"InfiniteScrollConfig.modalScrollThrottle\" (scrolled)=\"onModalScrollDown()\">\n    <ng-container *ngFor=\"let data of discussionList\">\n      <div (click)=\"navigateToDiscussionDetails(data); logTelemetry($event)\" id=\"discuss-card\">\n        <lib-discuss-card [discussionData]=\"data\"></lib-discuss-card>\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<lib-app-loader *ngIf=\"showLoader\"></lib-app-loader>\n<ng-container *ngIf=\"!(discussionList && discussionList.length > 0)\">\n  <div class=\"no-card-content\" tabindex=\"0\">\n    <div class=\"no-data-label\">No Data</div>\n    <div>\n      <span>&nbsp;</span>\n    </div>\n  </div>\n</ng-container>",
    styles: ["::ng-deep:root{--df-box-text:var(--white);--df-profile-bg:var(--primary-400)}.profileCard{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:0;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;width:auto}.profileCard .profile-card-content{display:flex;flex-wrap:wrap}.profileCard .profile-card-content .profile-header-image{display:flex;justify-content:center;align-items:center;width:100%;border-radius:.25rem;max-width:9.5rem;height:8.4375rem;border:.0625rem solid var(--gray-100);margin-right:1.5rem;background:var(--df-profile-bg);text-align:center}.profileCard .profile-card-content .profile-header-image .box-text{font-size:4rem;color:var(--df-box-text);text-transform:uppercase}.profileCard .profile-card-content .profile-header-image .box-text .box-label{color:var(--white);font-size:1rem;line-height:.75rem;letter-spacing:.2625px;text-transform:uppercase}.profileCard .profile-card-content .profile-label{font-weight:700;margin-bottom:.5rem;font-size:.875rem}.profileCard .profile-card-content .name{font-size:1rem}.profileCard .profile-card-content .my-discuss-topics{font-size:.875rem;margin:1rem 0;font-weight:600}.profileCard .profile-card-content .my-discuss-topics__content{display:flex}.profileCard .profile-card-content .my-discuss-topics__content .my-discussion-label{margin:0 .5rem}.profileCard .profile-card-content .my-discuss-topics__content .my-discussion-label .number{color:var(--primary-300)}.profileCard .profile-card-content .my-discuss-topics__content .post-count-area{margin-left:2rem}"]
  }]
}];
/** @nocollapse */

MyDiscussionComponent.ctorParameters = function () {
  return [{
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: TelemetryUtilsService
  }];
};

MyDiscussionComponent.propDecorators = {
  elementView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["ViewChild"],
    args: ['scrollContainerHeight', {
      static: false
    }]
  }]
};
var MSGS = {
  deletePost: "Are you sure you want to delete this Post? This can't be undone.",
  deleteTopic: "Are you sure you want to delete this topic? Your action cannot be undone."
};

var DiscussionDetailsComponent = /*#__PURE__*/function () {
  function DiscussionDetailsComponent(route, discussionService, configService, formBuilder, router, telemetryUtils, renderer, location, navigationService) {
    var _this22 = this;

    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussionDetailsComponent);

    this.route = route;
    this.discussionService = discussionService;
    this.configService = configService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.telemetryUtils = telemetryUtils;
    this.renderer = renderer;
    this.location = location;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.currentActivePage = 1;
    this.currentFilter = 'timestamp'; // 'recent

    this.pager = {};
    this.fetchSingleCategoryLoader = false;
    this.editMode = false;
    this.updatedPost = false;
    this.showEditTopicModal = false;
    this.dropdownContent = true;
    this.showLoader = false;
    /**
     * @description - It will check for the outside click while kebab menu is in open mode.
     */

    this.renderer.listen('window', 'click', function (e) {
      // tslint:disable-next-line:no-string-literal
      if (e.target['id'] !== 'group-actions') {
        _this22.dropdownContent = true;
      }
    });
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussionDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this23 = this;

      this.initializeFormFiled();

      if (this.widget) {
        this.fetchSingleCategoryLoader = true;
      }

      if (!this.topicId && !this.slug) {
        this.route.params.subscribe(function (params) {
          _this23.routeParams = params;
          _this23.slug = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this23.routeParams, 'slug');
          _this23.topicId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this23.routeParams, 'topicId');

          _this23.refreshPostData(_this23.currentActivePage); // this.getRealtedDiscussion(this.cid)

        });
      } else {
        this.refreshPostData(this.currentActivePage); // this.getRealtedDiscussion(this.cid)
      }

      this.telemetryUtils.logImpression(NSDiscussData.IPageName.DETAILS);
    } // tslint:disable-next-line: use-life-cycle-interface

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _this24 = this;

      if (!this.topicId && !this.slug) {
        this.route.params.subscribe(function (params) {
          _this24.routeParams = params;
          _this24.slug = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this24.routeParams, 'slug');
          _this24.topicId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(_this24.routeParams, 'topicId');

          _this24.refreshPostData(_this24.currentActivePage); // this.getRealtedDiscussion(this.cid)

        });
      } else {
        this.refreshPostData(this.currentActivePage); // this.getRealtedDiscussion(this.cid)
      }
    } // new method

  }, {
    key: "acceptData",
    value: function acceptData(discuss) {
      // debugger
      var matchedTopic = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["find"])(this.telemetryUtils.getContext(), {
        type: 'Topic'
      });

      if (matchedTopic) {
        this.telemetryUtils.deleteContext(matchedTopic);
      }

      this.telemetryUtils.uppendContext({
        id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discuss, 'tid'),
        type: 'Topic'
      });
      var slug = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["trim"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discuss, 'slug'));
      var input = {
        data: {
          url: "".concat(this.configService.getRouterSlug()).concat(ROUTES.TOPIC).concat(slug),
          queryParams: {}
        },
        action: CATEGORY_DETAILS
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        action: CATEGORY_DETAILS,
        title: discuss.title,
        tid: discuss.tid
      });
    }
  }, {
    key: "initializeFormFiled",
    value: function initializeFormFiled() {
      this.postAnswerForm = this.formBuilder.group({
        answer: []
      });
      this.UpdatePostAnswerForm = this.formBuilder.group({
        updatedAnswer: []
      });
      this.replyForm = this.formBuilder.group({
        reply: []
      });
    }
  }, {
    key: "refreshPostData",
    value: function refreshPostData(page) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_16__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this25 = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.currentFilter === 'timestamp') {
                this.discussionService.fetchTopicById(this.topicId, this.slug, page).subscribe(function (data) {
                  _this25.appendResponse(data);

                  _this25.showLoader = true;
                }, function (err) {
                  // error code check
                  _this25.discussionService.showTrafficAlert(err);

                  console.log('Error in fetching topics'); // toast message
                  // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);
                });
              } else {
                this.discussionService.fetchTopicByIdSort(this.topicId, 'voted', page).subscribe(function (data) {
                  _this25.appendResponse(data);

                  _this25.showLoader = true;
                }, function (err) {
                  // error code check
                  _this25.discussionService.showTrafficAlert(err);

                  console.log('Error in fetching topics');
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "appendResponse",
    value: function appendResponse(data) {
      this.data = data;
      this.paginationData = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'pagination'); // TODO: After updating the nodebb version to v1.18.6 or above. Remove the fallback after 2/3 releases.

      this.mainUid = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'loggedInUser.uid') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'privileges.uid');
      this.categoryId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'cid');
      this.topicId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'tid');
    }
  }, {
    key: "setPagination",
    value: function setPagination() {
      this.pager = {
        startIndex: this.paginationData.first.page,
        endIndex: this.paginationData.last.page,
        pages: this.paginationData.pages,
        currentPage: this.paginationData.currentPage,
        totalPage: this.paginationData.pageCount
      };
    }
  }, {
    key: "upvote",
    value: function upvote(discuss) {
      var req = {
        delta: 1
      };
      this.processVote(discuss, req);
    }
  }, {
    key: "downvote",
    value: function downvote(discuss) {
      var req = {
        delta: -1
      };
      this.processVote(discuss, req);
    }
  }, {
    key: "processVote",
    value: function processVote(discuss, req) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_16__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this26 = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (discuss && discuss.uid) {
                this.discussionService.votePost(discuss.pid, req).subscribe(function () {
                  // toast
                  // this.openSnackbar(this.toastSuccess.nativeElement.value);
                  _this26.postAnswerForm.reset();

                  _this26.refreshPostData(_this26.currentActivePage);
                }, function (err) {
                  // error code check
                  _this26.discussionService.showTrafficAlert(err); // toast
                  // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "bookmark",
    value: function bookmark(discuss) {
      var _this27 = this;

      this.discussionService.bookmarkPost(discuss.pid).subscribe(function (data) {
        // toast
        // this.openSnackbar('Bookmark added successfully!');
        _this27.refreshPostData(_this27.currentActivePage);
      }, function (err) {
        // error code check
        _this27.discussionService.showTrafficAlert(err); // toast
        // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

      });
    }
  }, {
    key: "unBookMark",
    value: function unBookMark(discuss) {
      var _this28 = this;

      this.discussionService.deleteBookmarkPost(discuss.pid).subscribe(function (data) {
        // toast
        _this28.refreshPostData(_this28.currentActivePage);
      }, function (err) {
        // error code check
        _this28.discussionService.showTrafficAlert(err); // toast
        // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

      });
    }
  }, {
    key: "deleteVote",
    value: function deleteVote(discuss) {
      var _this29 = this;

      this.discussionService.deleteVotePost(discuss.pid).subscribe(function (data) {
        // toast
        _this29.refreshPostData(_this29.currentActivePage);
      }, function (err) {
        // error code check
        _this29.discussionService.showTrafficAlert(err); // toast
        // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

      });
    }
  }, {
    key: "postReply",
    value: function postReply(replyContent, post) {
      var _this30 = this;

      var req = {
        content: replyContent
      };
      this.postAnswerForm.controls['answer'].setValue('');

      if (post && post.tid) {
        this.discussionService.replyPost(post.tid, req).subscribe(function () {
          // toast
          // this.openSnackbar('Your reply was saved succesfuly!');
          // this.fetchNewData = true;
          _this30.refreshPostData(_this30.currentActivePage);
        }, function (err) {
          // error code check
          _this30.discussionService.showTrafficAlert(err); // toast
          // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

        });
      }
    }
  }, {
    key: "postCommentsReply",
    value: function postCommentsReply(replyContent, post) {
      var _this31 = this;

      var req = {
        content: replyContent,
        toPid: post.pid
      };

      if (post && post.tid) {
        this.discussionService.replyPost(post.tid, req).subscribe(function () {
          // toast
          // this.openSnackbar('Your reply was saved succesfuly!');
          _this31.refreshPostData(_this31.currentActivePage);
        }, function (err) {
          // error code check
          _this31.discussionService.showTrafficAlert(err); // toast
          // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError);

        });
      }
    }
  }, {
    key: "confirmDelete",
    value: function confirmDelete(pid) {
      if (window.confirm(MSGS.deletePost)) {
        this.deletePost(pid);
      }
    }
  }, {
    key: "filter",
    value: function filter(key) {
      if (key) {
        this.currentFilter = key;
        this.refreshPostData(this.currentActivePage);
      }
    }
  }, {
    key: "navigateWithPage",
    value: function navigateWithPage(page) {
      if (page !== this.currentActivePage) {
        this.router.navigate(["".concat(this.configService.getRouterSlug()).concat(ROUTES.CATEGORY, " ").concat(this.topicId)], {
          queryParams: {
            page: page
          },
          queryParamsHandling: "merge"
        });
      }
    }
  }, {
    key: "showError",
    value: function showError(meta) {
      if (meta) {
        return true;
      }

      return false;
    }
  }, {
    key: "getBgColor",
    value: function getBgColor(tagTitle) {
      var bgColor = this.stringToColor(tagTitle.toLowerCase());
      var color = this.getContrast();
      return {
        color: color,
        'background-color': bgColor
      };
    }
  }, {
    key: "stringToColor",
    value: function stringToColor(title) {
      var hash = 0;

      for (var i = 0; i < title.length; i++) {
        // tslint:disable-next-line: no-bitwise
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
      }

      var hue = Math.abs(hash % 360); // tslint:disable-next-line: prefer-template

      var colour = 'hsl(' + hue + ',100%,30%)';
      return colour;
    }
  }, {
    key: "getContrast",
    value: function getContrast() {
      return 'rgba(255, 255, 255, 80%)';
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event, data) {
      var pid = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'pid') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'mainPid') ? {
        id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'pid') || Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'mainPid'),
        type: 'Post'
      } : {};
      this.telemetryUtils.uppendContext(pid);
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.DETAILS);
    }
  }, {
    key: "onEditMode",
    value: function onEditMode(UpdatePostStatus) {
      if (UpdatePostStatus) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    }
  }, {
    key: "getRealtimePost",
    value: function getRealtimePost(post, index) {
      this.editMode = true;
      this.editContentIndex = index;
      this.contentPost = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(post, 'content').replace(/<[^>]*>/g, '');
      post.toggle = false;
    }
  }, {
    key: "updatePost",
    value: function updatePost(updatedPostContent, pid) {
      var _this32 = this;

      this.editMode = false;
      var req = {
        content: updatedPostContent,
        title: '',
        tags: [],
        uid: this.mainUid
      };
      this.discussionService.editPost(pid, req).subscribe(function (data) {
        // TODO: Success toast
        _this32.refreshPostData(_this32.currentActivePage);
      }, function (error) {
        // error code check
        _this32.discussionService.showTrafficAlert(error); // TODO: error toast


        console.log('e', error);
      });
      console.log(pid);
    }
  }, {
    key: "deletePost",
    value: function deletePost(postId) {
      var _this33 = this;

      this.discussionService.deletePost(postId, this.mainUid).subscribe(function (data) {
        // TODO: Success toast
        _this33.refreshPostData(_this33.currentActivePage);
      }, function (error) {
        // error code check
        _this33.discussionService.showTrafficAlert(error); // TODO: error toast


        console.log('e', error);
      });
    }
  }, {
    key: "editReplyHandler",
    value: function editReplyHandler(event, post) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'cancel') {
        this.onEditMode(false);
      } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'edit') {
        this.updatePost(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'content'), Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(post, 'pid'));
        this.logTelemetry(event, post);
      }
    }
  }, {
    key: "commentReplyHandler",
    value: function commentReplyHandler(event, post) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'cancel') {
        this.togglePost(post);
      } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'reply') {
        this.postCommentsReply(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'content'), post);
        this.logTelemetry(event, post);
      }
    }
  }, {
    key: "postReplyHandler",
    value: function postReplyHandler(event, post) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'reply') {
        this.postReply(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'content'), post);
        this.logTelemetry(event, post);
      }
    }
  }, {
    key: "togglePost",
    value: function togglePost(post) {
      post.toggle = !post.toggle;
      this.onEditMode(false);
    }
    /**
     * @description - It will trigger the event handlers and close the update thread popup.
     */

  }, {
    key: "closeModal",
    value: function closeModal(event) {
      console.log('close event', event);

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'action') === 'update') {
        this.editTopicHandler(event, Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'tid'), Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'request'));
      }

      this.showEditTopicModal = false;
    }
    /**
     * @description - It will open update thread popup.
     */

  }, {
    key: "editTopic",
    value: function editTopic(event, topicData) {
      this.showEditTopicModal = true;
      this.logTelemetry(event, topicData);
    }
    /**
     * @description - It will all the update topic api. If success, then will refresh the data.
     */

  }, {
    key: "editTopicHandler",
    value: function editTopicHandler(event, tid, updateTopicRequest) {
      var _this34 = this;

      this.logTelemetry(event, this.editableTopicDetails);
      this.discussionService.editPost(tid, updateTopicRequest).subscribe(function (data) {
        console.log('update success', data);

        _this34.refreshPostData(_this34.currentActivePage);
      }, function (error) {
        // error code check
        _this34.discussionService.showTrafficAlert(error);

        console.log('error while updating', error);
      });
    }
    /**
     * @description - It will open the confirmation popup before deleting the topic,
     *                If clicked yes, then will call the delete topic handler.
     */

  }, {
    key: "deleteTopic",
    value: function deleteTopic(event, topicData) {
      if (window.confirm(MSGS.deleteTopic)) {
        this.logTelemetry(event, topicData);
        this.deleteTopicHandler(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(topicData, 'tid'));
      }
    }
    /**
     * @description - It will all the delete topic api. If success, then will navigate back to the previous page.
     */

  }, {
    key: "deleteTopicHandler",
    value: function deleteTopicHandler(topicId) {
      var _this35 = this;

      this.discussionService.deleteTopic(topicId).subscribe(function (data) {
        _this35.location.back();
      }, function (error) {
        // error code check
        _this35.discussionService.showTrafficAlert(error);

        console.log('error while deleting', error);
      });
    }
    /**
     * @description - It will toggle the kebab menu click
     */

  }, {
    key: "onMenuClick",
    value: function onMenuClick() {
      this.dropdownContent = !this.dropdownContent;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.paramsSubscription) {
        this.paramsSubscription.unsubscribe();
      }
    }
  }]);

  return DiscussionDetailsComponent;
}();

DiscussionDetailsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discussion-details',
    template: "<lib-app-loader *ngIf=\"!showLoader\"></lib-app-loader>\n<div class=\"discuss-details-content\" *ngIf=\"showLoader\">\n  <div class=\"discussion-details\" tabindex=\"0\" role=\"link\">\n\n      <!-- header -->\n      <div class=\"discuss-card-kabab-menu\">\n        <h3 class=\"discussion-card-title df-label-color\" [innerHTML]=\"data?.title\"></h3>\n        <div *ngIf=\"data?.uid === mainUid\">\n          <div class=\"kabab-menu\" id=\"group-actions\" (click)=\"onMenuClick()\" tabindex=\"0\"></div>\n          <div class=\"kabab-menu-dropdown-content\" [hidden]=\"dropdownContent\">\n              <div id=\"edit-topic\" class=\"list\" tabindex=\"0\"\n                (click)=\"editTopic($event, data); editableTopicDetails = data\">Edit\n              </div>\n              <div id=\"delete-topic\" class=\"list\" (click)=\"deleteTopic($event, data)\" tabindex=\"0\">Delete</div>\n          </div>\n        </div>\n      </div>\n      <!-- /header -->\n\n      <ng-container *ngFor=\"let post of data?.posts\">\n        <div class=\"post-reply-card\" *ngIf=\"post?.index === 0\">\n          <h3 class=\"discussion-heading df-text-color\" [innerHTML]=\"post?.content\"></h3>\n          <div class=\"discussion-content\">\n            <div class=\"circle-text\">\n              <div class=\"circle-label\">{{ post?.user?.username | splitInitials }}</div>\n            </div>\n            <div class=\"discussion-labels\">{{'Asked by '}}</div>\n            <div class=\"discussion-labels\" *ngIf=\"post.user.fullname\" [innerHTML]=\"post.user.fullname\"></div>\n            <div class=\"discussion-labels\" *ngIf=\"!post.user.fullname\" [innerHTML]=\"post.user.username\"></div>\n          </div>\n\n          <div class=\"tags\" aria-label=\"tags\">\n            <ng-container *ngIf=\"data && data?.tags && data?.tags?.length > 0\">\n              <span *ngFor=\"let tag of data?.tags\" class=\"tag\" role=\"link\" tabindex=\"0\"\n                [ngStyle]=\"getBgColor(tag.value)\">\n                {{tag.value}}\n              </span>\n            </ng-container>\n          </div>\n\n          <div class=\"comments-area\">\n            <div>\n              <span class=\"post-icons mobile\">\n                <span role=\"link\" tabindex=\"0\" *ngIf=\"!post.upvoted\" (click)=\"upvote(post);logTelemetry($event, post)\"\n                  aria-label=\"upvote the post\" id=\"up-vote\">\n                  <!-- upward arrow -->\n                  <img src=\"./assets/discussion-ui/images/up-arrow.png\" alt=\"up-arrow\" class=\"icons\"\n                    alt=\"up arrow icon for like the post\">\n                </span>\n                <span *ngIf=\"post.upvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"deleteVote(post);logTelemetry($event, post)\" aria-label=\"remove upvote\" id=\"delete-vote\">\n                  <!-- upward arrow -->\n                  <img src=\"./assets/discussion-ui/images/up.svg\" alt=\"select-up-arrow\" class=\"icons\" alt=\"up image\">\n                </span>\n                <span class=\"vote-value\" role=\"text\"\n                  [attr.aria-label]=\"'total upvoat is' + data?.upvotes\">{{data?.upvotes}}</span>\n              </span>\n              <span class=\"post-icons mobile\">\n                <span *ngIf=\"!post?.downvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"downvote(post);logTelemetry($event, post)\" aria-label=\"downvote post\" id=\"down-vote\">\n                  <!-- downward arrow -->\n                  <img src=\"./assets/discussion-ui/images/down-arrow.png\" class=\"icons\"\n                    alt=\"down arrow icon for unlike post\">\n                </span>\n                <span *ngIf=\"post?.downvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"deleteVote(post);logTelemetry($event, post)\" aria-label=\"remove down vote\" id=\"delete-vote\">\n                  <!-- downward arrow -->\n                  <img src=\"./assets/discussion-ui/images/down.svg\" class=\"icons\" alt=\"down image\">\n                </span>\n                <span class=\"vote-value\" role=\"text\"\n                  [attr.aria-label]=\"'total upvoat is' + data?.upvotes\">{{data?.downvotes}}</span>\n              </span>\n              <span class=\"post-icons mobile\" role=\"link\" tabindex=\"0\">\n                <!-- trending -->\n                <img src=\"./assets/discussion-ui/images/views.svg\" alt=\"views icon for seeing the posts\" class=\"icons\">\n                <span class=\"vote-value\" aria-label=\"views count\">{{data.viewcount}} Views</span>\n              </span>\n              <span class=\"post-icons mobile\">\n                <span *ngIf=\"!data?.posts[0]?.bookmarked\" role=\"link\" tabindex=\"0\"\n                  (click)=\"bookmark(post);logTelemetry($event, post)\" aria-label=\"Bookmark post\" id=\"bookmark\">\n                  <!-- bookmark -->\n                  <img src=\"./assets/discussion-ui/images/bookmarks.png\" class=\"icons\" alt=\"bookmark icon\">\n                </span>\n                <span *ngIf=\"data?.posts[0]?.bookmarked\" role=\"link\" tabindex=\"0\"\n                  (click)=\"unBookMark(post);logTelemetry($event, post)\" aria-label=\"unBookmark post\"\n                  id=\"un-bookmark-vote\">\n                  <!-- bookmark -->\n                  <img src=\"./assets/discussion-ui/images/select-bookmarks.png\" class=\"icons bookmark-icon\"\n                    alt=\"select bookmark icon\">\n                </span>\n              </span>\n            </div>\n            <div class=\"comments-count\">\n              <span *ngIf=\"data?.postcount-1 > 0\" aria-label=\"comments count\">\n                {{data?.postcount-1}}\n                comments\n              </span>\n              <span *ngIf=\"data?.postcount-1 <=0\" aria-label=\"comments count\">\n                0 comments</span>\n            </div>\n          </div>\n        <!-- /card content -->\n        <!-- post reply -->\n        <lib-post-reply (actionEvent)=\"postReplyHandler($event, post); logTelemetry($event, post)\" [mode]=\"'reply'\"\n          [showCancel]=\"false\"></lib-post-reply>\n          \n        </div>\n      </ng-container>\n    <!-- /card end -->\n\n    <ng-container *ngIf=\"data?.posts && data?.postcount > 1\">\n      <div class=\"recent-tabs\">\n        <div class=\"tabs-content\">\n          <div class=\"tabs-filter\">\n            <a href=\"javascript:void(0)\" class=\"filter-option\" role=\"link\" tabindex=\"0\" [ngClass]=\"{'tabs-active' : currentFilter === 'timestamp',\n                            'ws-mat-accent-border':currentFilter !== 'timestamp'}\"\n              (click)=\"filter('timestamp');logTelemetry($event)\" id=\"recent-post\">\n              Recent </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngFor=\"let post of data?.posts | sortBy: 'timestampISO':'desc'; index as i\">\n      <!-- card content -->\n      <div *ngIf=\"post?.index != 0\" class=\"post-card\">\n        <!-- header -->\n        <div class=\"comment-section\">\n          <div class=\"post-header-content\">\n            <span class=\"circle-text\"><span class=\"circle-label\">{{ post?.user?.username | splitInitials\n                }}</span></span>\n            <span class=\"post-name\" *ngIf=\"post?.user?.fullname\" [innerHTML]=\"post?.user?.fullname\"></span>\n            <span class=\"post-name df-label-color\" *ngIf=\"!post?.user?.fullname\"\n              [innerHTML]=\"post?.user?.username\"></span>\n          </div>\n          <div class=\"custom-actions\">\n            <span class=\"post-time\">{{ post?.timestamp | date: 'dd MMM yyyy hh:mm a'}}</span>\n            <ng-container *ngIf=\"mainUid === post?.uid\">\n              <img src=\"./assets/discussion-ui/images/edit.svg\" class=\"edit-icon\" id=\"edit-post\" alt=\"edit icon\"\n                (click)=\"getRealtimePost(post, i)\" tabindex=\"0\">\n              <img src=\"./assets/discussion-ui/images/delete.svg\" class=\"delete-icon\" id=\"delete-post\" alt=\"delete icon\"\n                (click)=\"confirmDelete(post?.pid)\" tabindex=\"0\">\n            </ng-container>\n          </div>\n        </div>\n        <!-- / header -->\n        <div>\n          <div class=\"edit-text\" *ngIf=\"!editMode || editContentIndex !== i\">\n            <p [innerHTML]=\"post?.content\" class=\"post-labels df-text-color\"></p>\n            <div class=\"edited-text\" *ngIf=\"post?.edited\">(edited)</div>\n          </div>\n          <div *ngIf=\"editMode && editContentIndex === i\">\n            <lib-post-reply (actionEvent)=\"editReplyHandler($event, post)\" [mode]=\"'edit'\" [showCancel]=\"true\"\n              [content]=\"contentPost\"></lib-post-reply>\n          </div>\n          <div class=\"reply-area\">\n            <div>\n              <span class=\"flex mobile\">\n                <!-- upward arrow -->\n                <span class=\"up-vote-text\" *ngIf=\"!post?.upvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"upvote(post);logTelemetry($event, post)\" aria-label=\"upvote comment\" id=\"up-vote\">\n                  <img src=\"./assets/discussion-ui/images/up.svg\" class=\"icons\" alt=\"up icon\">\n                </span>\n              </span>\n              <span class=\"post-icons mobile\">\n                <!-- upward arrow -->\n                <span class=\"down-vote-text\" *ngIf=\"post.upvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"deleteVote(post);logTelemetry($event, post)\" aria-label=\"delete upvote on comment\"\n                  id=\"delete-vote\">\n                  <img src=\"./assets/discussion-ui/images/up.svg\" class=\"icons\" alt=\"up icon\">\n                </span>\n                <span class=\"vote-value\">{{post?.upvotes}}</span>\n              </span>\n\n              <span class=\"flex mobile\">\n                <span id=\"down-vote\" *ngIf=\"!post?.downvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"downvote(post);logTelemetry($event, post)\" aria-label=\"downvote comment\">\n                  <!-- downward arrow -->\n                  <img src=\"./assets/discussion-ui/images/down-arrow.png\" class=\"icons\" alt=\"down arrow icon\">\n                </span>\n              </span>\n              <span class=\"post-icons mobile\">\n                <span id=\"delete-vote\" *ngIf=\"post?.downvoted\" role=\"link\" tabindex=\"0\"\n                  (click)=\"deleteVote(post);logTelemetry($event, post)\" aria-label=\"delete downvote on comment\">\n                  <!-- down arrow -->\n                  <img src=\"./assets/discussion-ui/images/down.svg\" class=\"icons\" alt=\"down icon\">\n                </span>\n                <span class=\"vote-value\">{{post?.downvotes}}</span>\n              </span>\n            </div>\n\n            <button (click)=\"togglePost(post); logTelemetry($event, post)\"\n              class=\"df-btn df-btn-normal df-btn-primary df-reply-btn\" id=\"reply-comment\">\n              Reply </button>\n\n          </div>\n          <div class=\"replies\" *ngIf=\"post?.toggle\">\n            <ng-container [ngTemplateOutlet]=\"reply\" [ngTemplateOutletContext]=\"{post:post}\">\n            </ng-container>\n          </div>\n          <ng-container *ngIf=\"post?.replies?.count > 0\">\n            <div>\n              <div>\n                <div class=\"reply-content\" (click)=\"post.replyCountToggle = !post.replyCountToggle\" tabindex=\"0\">\n                  <span class=\"replies-count\"> {{post?.replies?.count}} reply(s) </span>\n                  <div *ngIf=\"post?.replyCountToggle\" role=\"link\" tabindex=\"0\" aria-label=\"reply toggle\">\n                    <span class=\"toggle-icon\" *ngIf=\"post?.replyCountToggle\" aria-label=\"reply toggle upwards\">\n                      <!-- up arrow -->\n                      <img src=\"./assets/discussion-ui/images/up-chevron.png\" class=\"icons\" alt=\"up chevron icon\">\n                    </span>\n                  </div>\n                  <div *ngIf=\"!post.replyCountToggle\" role=\"link\" tabindex=\"0\" aria-label=\"reply toggle\">\n                    <span class=\"toggle-icon\" *ngIf=\"!post.replyCountToggle\" aria-label=\"reply toggle downwards\">\n                      <!-- down arrow -->\n                      <img src=\"./assets/discussion-ui/images/down-chevron.png\" class=\"icons\" alt=\"down chevron icon\">\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"last-reply-data\">\n                <span *ngIf=\"!post.replyCountToggle\">Last reply\n                  {{ post?.replies?.timestampISO | date: 'dd MMM yyyy hh:mm a' }} </span>\n              </div>\n            </div>\n            <div class=\"replies\" *ngIf=\"post?.replyCountToggle\">\n              <ng-container [ngTemplateOutlet]=\"replies\"\n                [ngTemplateOutletContext]=\"{posts:data.posts, postId:post.pid}\">\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n        <!-- /card content -->\n      </div>\n      <!--  / card -->\n      <!-- Divider -->\n      <div *ngIf=\"post.index != 0\"></div>\n    </ng-container>\n  </div>\n\n  <div class=\"related-discuss-part\">\n    <div *ngIf=\"fetchSingleCategoryLoader\" class=\"related-discuss-part-content\"></div>\n    <lib-related-discussion *ngIf=\"!fetchSingleCategoryLoader\" [catId]=\"categoryId\" [topicId]=\"topicId\">\n    </lib-related-discussion>\n  </div>\n</div>\n\n<ng-template #reply let-post=\"post\">\n  <lib-post-reply (actionEvent)=\"commentReplyHandler($event, post)\" [mode]=\"'reply'\" [showCancel]=\"true\">\n  </lib-post-reply>\n</ng-template>\n\n<ng-template #replies let-posts=\"posts\" let-postId=\"postId\">\n  <ng-container *ngFor=\"let post of posts | pipeFilter:'toPid': postId; index as index; last as last\">\n    <!-- card -->\n    <div class=\"post-sub-card\">\n      <!-- card-header -->\n      <div class=\"comment-section\">\n        <div class=\"post-header-content\">\n          <div class=\"circle-text\"><div class=\"circle-label\">{{ post?.user?.username | splitInitials }}</div></div>\n          <div class=\"post-name\" *ngIf=\"post?.user?.fullname\" [innerHTML]=\"post?.user?.fullname\"></div>\n          <div class=\"df-label-color post-name\" *ngIf=\"!post?.user?.fullname\"\n            [innerHTML]=\"post?.user?.username\"></div>\n        </div>\n        <div class=\"post-time\">{{ post?.timestamp | date}}</div>\n      </div>\n      <!-- /card-header -->\n\n      <!-- card-content -->\n      <div>\n        <p role=\"link\" tabindex=\"0\" tabindex=\"0\" [innerHTML]=\"post?.content\"></p>\n        <div class=\"reply-area\">\n          <div class=\"reply-area-content\">\n            <span class=\"post-icons mobile\">\n              <!-- up arrow -->\n              <img *ngIf=\"!post?.upvoted\" class=\"cursor-pointer\" (click)=\"upvote(post);logTelemetry($event, post)\"\n                src=\"./assets/discussion-ui/images/up-arrow.png\" alt=\"up arrow icon\" class=\"icons\" tabindex=\"0\">\n              <img *ngIf=\"post?.upvoted\" class=\"cursor-pointer\" (click)=\"deleteVote(post);logTelemetry($event, post)\"\n                src=\"./assets/discussion-ui/images/up.svg\" alt=\"select up arrow icon\" class=\"icons\" tabindex=\"0\">\n              <span class=\"vote-value\">{{post.upvotes}}</span>\n            </span>\n            <span class=\"post-icons mobile\">\n              <img *ngIf=\"!post?.downvoted\" class=\"cursor-pointer\" (click)=\"downvote(post); logTelemetry($event, post)\"\n                id=\"up-vote\" tabindex=\"0\" src=\"./assets/discussion-ui/images/down-arrow.png\" alt=\"down arrow icon\"\n                class=\"icons\">\n              <img *ngIf=\"post?.downvoted\" class=\"cursor-pointer\" (click)=\"deleteVote(post);logTelemetry($event, post)\"\n                id=\"delete-vote\" tabindex=\"0\" src=\"./assets/discussion-ui/images/down.svg\" alt=\"select down arrow icon\"\n                class=\"icons\">\n              <span class=\"vote-value\">{{post?.downvotes}}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>  \n    <!-- /card -->\n  </ng-container>\n</ng-template>\n\n<input type=\"hidden\" i18-value i18-aria-value aria-value=\"Thank you for voting!\" value=\"Thank you for voting!!\"\n  #toastSuccess />\n<input type=\"hidden\" i18-value i18-aria-value aria-value=\"Something went wrong, please try again later!\"\n  value=\"Something went wrong, please try again later!\" #toastError />\n\n<lib-discuss-start [mode]=\"'edit'\" [topicData]=\"editableTopicDetails\" (close)=\"closeModal($event)\"\n  *ngIf=\"showEditTopicModal\"></lib-discuss-start>",
    styles: [".discuss-details-content{display:flex;flex-direction:row}.discussion-details{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:3;height:auto;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:.875rem 1rem;justify-content:space-between;z-index:unset;margin-bottom:1rem}.related-discuss-part{padding:0 0 1rem 1.5rem;position:relative;z-index:2}.related-discuss-part .related-discuss-part-content{padding:0 .25rem}.discussion-card-title{font-size:1.25rem;font-weight:700}.discussion-heading{font-size:.875rem;font-weight:400;pointer-events:none;margin-bottom:0;margin-top:.5rem}.discussion-content{display:flex;align-items:center;font-size:.875rem;flex-wrap:wrap;margin-bottom:0;margin-top:1rem}.comment-section{display:flex;align-items:center;justify-content:space-between;margin:.5rem 0;flex-direction:row;flex-wrap:wrap}.post-header-content{display:flex;align-items:center}.circle-text{border-radius:50%;width:1.75rem;height:1.75rem;display:flex;justify-content:center;align-items:center;background-color:#306933}.circle-label{color:var(--white);font-size:1rem;line-height:.75rem;letter-spacing:.2625px;text-transform:uppercase}.discussion-labels{color:var(--gray-400);margin-left:.5rem;font-size:00.875rem}.comments-area{display:flex;align-items:center;justify-content:space-between;font-weight:700;flex-direction:row;font-size:.875rem;margin:1rem 0}.text-form-field{display:flex;flex-direction:column}.text-content{min-height:6.75rem;max-height:33.75rem;margin-bottom:.875rem;background-color:var(--df-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;cursor:pointer;outline:0;padding:.5rem .875rem}.text-content.is-invalid,.text-content.is-invalid:focus,.text-content.is-invalid:hover{border:.0625rem solid var(--red-100)}.text-content.is-valid,.text-content.is-valid:focus,.text-content.is-valid:hover{border:.0625rem solid var(--primary-400)}.down-vote-text,.up-vote-text{font-size:1rem;color:var(--black);margin-right:.5rem}.post-card,.post-reply-card{border-bottom:.0625rem solid var(--gray-100);margin-bottom:1.5rem}.post-sub-card{margin:0 .5rem .5rem;border:0}.comments-section{display:flex;align-items:center;justify-content:space-between}.post-icons{margin-right:1rem}.post-name{font-size:1rem;font-weight:700;margin-left:1rem;word-break:break-all;text-transform:capitalize}.post-time{color:var(var(--gray-400));margin:0 1rem;font-size:.875rem}.post-labels{font-size:.875rem;margin:0}.reply-area{display:flex;justify-content:space-between;align-items:center}.reply-area-content{position:relative;margin-top:1rem}.margin-gap-tb{margin:1rem 0}.custom-actions{display:flex;align-items:center}.edit-post{margin-right:1.25rem}.border-0{border-bottom:0}.comments-count{color:var(--primary);font-weight:700;cursor:pointer}@media (max-width:768px){.discuss-details-content{flex-direction:column}.related-discuss-part{padding:0}.post-btn{width:100%;margin-top:.5rem;cursor:pointer}.post-time{margin-top:.5rem;margin-left:0}.comment-section{display:flex;flex-direction:column;align-items:start;margin-bottom:.5rem}}.df-btn-disabled{background-color:var(--gray-100)!important;color:var(--gray-200)!important}.df-reply-btn{margin-bottom:.5rem}.edited-text{padding-left:.5rem;margin-top:.25rem;font-size:.75rem;color:var(--gray-200)}.delete-icon,.edit-icon{cursor:pointer;width:1rem;height:1rem;margin:0 .5rem}.discuss-card-kabab-menu{display:flex;justify-content:space-between;flex-wrap:wrap}.kabab-menu{color:var(--primary-400);width:1.875rem;height:1.875rem;line-height:1.75rem;text-align:center;border-radius:50%;padding-left:.5rem;position:absolute;right:.5rem}.kabab-menu:hover{background:var(--gray-0);cursor:pointer}.kabab-menu::after{content:'\\2807';font-size:1.5rem}.kabab-menu-dropdown-content{position:absolute;border-radius:.125rem;background-color:var(--white);box-shadow:0 3px 5px 4px rgba(var(--rc-rgba-black),.05);padding:.5rem;z-index:1;text-align:left;right:0;top:0;min-width:13.125rem}.kabab-menu-dropdown-content .list{display:flex;align-items:center;width:100%;cursor:pointer;font-size:.875rem;padding:.5rem}.kabab-menu-dropdown-content .list:active,.kabab-menu-dropdown-content .list:hover{background-color:var(--primary-100)}.kabab-menu-dropdown-content .list:last-child .df-btn-normal{color:var(--red-400)}.kabab-menu-dropdown-content .list .df-btn-normal{font-size:.875rem}::ng-deep html[dir=rtl] .kabab-menu-dropdown-content{right:auto;left:0}.vote-value{margin-left:.5rem}.icons{width:.875rem;height:.875rem;position:relative;cursor:pointer}.edit-text{display:flex}.last-reply-data{margin:1rem 0;font-size:.875rem}.reply-content{display:flex;align-items:center}.replies{width:100%}.replies-count{font-size:.875rem;font-weight:700;cursor:pointer}.toggle-icon{padding:0 1rem;cursor:pointer}"]
  }]
}];
/** @nocollapse */

DiscussionDetailsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: TelemetryUtilsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Renderer2"]
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]
  }, {
    type: NavigationServiceService
  }];
};

DiscussionDetailsComponent.propDecorators = {
  topicId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  slug: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  widget: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};
/* tslint:enable */

var DiscussStartComponent = /*#__PURE__*/function () {
  function DiscussStartComponent(discussService, formBuilder, telemetryUtils, configService, discussUtils) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussStartComponent);

    this.discussService = discussService;
    this.formBuilder = formBuilder;
    this.telemetryUtils = telemetryUtils;
    this.configService = configService;
    this.discussUtils = discussUtils;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.editable = true;
    this.postTagsArray = [];
    this.uploadSaveData = false;
    this.showErrorMsg = false;
    this.showSelectCategory = false;
    this.createErrorMsg = '';
    this.defaultError = 'Something went wrong, Please try again after sometime!';
    this.enableSubmitButton = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussStartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      document.querySelector('[tabindex="-1"]').focus(); // debugger

      this.telemetryUtils.logImpression(NSDiscussData.IPageName.START);
      this.cIds = this.configService.getCategories();

      if (this.categoryId) {
        this.showSelectCategory = false;
      } else {
        this.showSelectCategory = true;
      }

      this.initializeData();
      this.initializeFormFields(this.topicData);
    }
  }, {
    key: "initializeFormFields",
    value: function initializeFormFields(topicData) {
      var _this36 = this;

      this.startForm = this.formBuilder.group({
        question: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].minLength(8)]],
        description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].minLength(8)]],
        tags: [],
        category: []
      });
      this.startForm.valueChanges.subscribe(function (val) {
        _this36.validateForm();
      });
      /** If popup is in edit mode */

      if (topicData) {
        var tags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["map"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(topicData, 'tags'), function (element) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(element, 'value');
        });
        /** calling htmlDecode method to get the parsed string */

        this.startForm.controls['question'].setValue(this.discussUtils.htmlDecode(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(topicData, 'title')));
        this.startForm.controls['description'].setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(topicData, 'posts[0].content').replace(/<[^>]+>/g, ''));
        this.startForm.controls['tags'].setValue(tags);
        this.validateForm();
      }
    }
  }, {
    key: "isFieldValid",
    value: function isFieldValid(field) {
      var valueNoWhiteSpace = this.startForm.get(field).value;

      if (valueNoWhiteSpace) {
        var index = valueNoWhiteSpace.length;

        if (index >= 2 && valueNoWhiteSpace.charAt(index - 2) === " ") {
          this.startForm.patchValue({
            replyContent: this.startForm.get(field).value.trim()
          });
        } else {
          this.startForm.patchValue({
            replyContent: this.startForm.get(field).value.trimStart()
          });
        }
      }

      return !this.startForm.get(field).valid && this.startForm.get(field).dirty;
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      if (this.startForm.status === 'VALID') {
        this.enableSubmitButton = true;
      } else {
        this.enableSubmitButton = false;
      }
    }
  }, {
    key: "initializeData",
    value: function initializeData() {
      var _this37 = this;

      // debugger
      if (this.configService.hasContext() && !this.categoryId) {
        var req = {
          cids: this.cIds.result
        };
        this.discussService.getContextBasedDiscussion(req).subscribe(function (data) {
          _this37.allCategories = data.result;
          if (_this37.startForm.get('category')) ;

          _this37.startForm.controls['category'].setValue(_this37.allCategories[0].cid);
        });
      } else if (this.categoryId) {
        var _req = {
          cids: [this.categoryId]
        };
        this.showSelectCategory = false;
        this.editable = false;
        this.discussService.getContextBasedDiscussion(_req).subscribe(function (data) {
          _this37.allCategories = data.result;
          if (_this37.startForm.get('category')) ;

          _this37.startForm.controls.category.setValue(_this37.allCategories[0].cid);
        });
      } else {
        this.discussService.fetchAllCategories().subscribe(function (data) {
          _this37.allCategories = data;
          if (_this37.startForm.get('category')) ;

          _this37.startForm.controls['category'].setValue(_this37.allCategories[1].cid);
        });
      }

      this.discussService.fetchAllTag().subscribe(function (data) {
        var tags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'tags');
        _this37.allTags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["map"])(tags, function (tag) {
          return tag.value;
        });
      });
    }
  }, {
    key: "showError",
    value: function showError(meta) {
      if (meta) {
        return true;
      }

      return false;
    }
  }, {
    key: "submitPost",
    value: function submitPost(form) {
      var _this38 = this;

      this.uploadSaveData = true;
      this.showErrorMsg = false;
      var postCreateReq = {
        cid: this.categoryId ? this.categoryId : parseInt(form.value.category),
        title: form.value.question,
        content: form.value.description,
        tags: form.value.tags
      };
      this.discussService.createPost(postCreateReq).subscribe(function () {
        _this38.closeModal('success');

        form.reset();
        _this38.uploadSaveData = false; // success toast;
        // this.openSnackbar(this.toastSuccess.nativeElement.value)
        // close the modal
      }, function (err) {
        _this38.closeModal('discard'); // error toast
        // .openSnackbar(this.toastError.nativeElement.value)


        _this38.uploadSaveData = false;

        if (err) {
          if (err.error && err.error.message) {
            _this38.showErrorMsg = true;
            _this38.createErrorMsg = err.error.message.split('|')[1] || _this38.defaultError;
          }
        }
      });
    }
    /**
     * @param  {any} form
     * @description - It will emit an event when popup is opened in edit topic/thread mode
     *                Here, as 'tid', we are passing the main topic pid from the post array
     */

  }, {
    key: "updatePost",
    value: function updatePost(form) {
      var updateTopicRequest = {
        title: form.value.question,
        content: form.value.description,
        tags: form.value.tags,
        uid: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.topicData, 'uid')
      };
      this.close.emit({
        action: 'update',
        tid: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.topicData, 'posts[0].pid'),
        request: updateTopicRequest
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal(eventMessage) {
      this.close.emit({
        message: eventMessage
      });
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.START);
    }
  }]);

  return DiscussStartComponent;
}();

DiscussStartComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-start',
    template: "<!--modals-->\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"discussion-start-modal\">\n    <div class=\"discussion-start-modal-content\" id=\"topic-scroll\" tabindex=\"-1\" role=\"dialog\">\n      <form [formGroup]=\"startForm\" class=\"discussion-start-form\">\n\n        <div class=\"start-form-content\" *ngIf=\"showSelectCategory\" [ngClass]=\"{ 'is-invalid': showError('subTitle') }\">\n          <label class=\"start-form-label\">Select category*</label>\n          <div class=\"start-form-field\">\n            <label class=\"start-form-label\" for=\"myList\">Select list </label>\n            <select formControlName=\"category\" #category [required]=\"true\" id=\"myList\" class=\"select-category\">\n              <option [value]=\"c.cid\" *ngFor=\"let c of allCategories\" [innerHTML]=\"c.name\"></option>\n            </select>\n          </div>\n          <small class=\"mandatory-label\" *ngIf=\"!startForm.get('category').valid\" i18n=\"category Error|Explains category is required\">\n            category is mandatory</small>\n        </div>\n\n        <div class=\"start-form-content\" [ngClass]=\"{ 'is-invalid': showError('subTitle') }\">\n          <label class=\"start-form-label\">Discussion topic*</label>\n          <div class=\"start-form-field\">\n            <input [ngClass]=\"{'is-invalid' : isFieldValid('question')}\" class=\"start-form-field-control\" placeholder=\"Type here (minimum 8 characters)\"\n              formControlName=\"question\" #question maxlength=\"1000\" />\n          </div>\n          <small class=\"mandatory-label\" *ngIf=\"!startForm.get('question').valid\" i18n=\"question Error|Explains question is required\">\n            Question is mandatory. It should be minimum of\n            8 characters</small>\n        </div>\n\n        <div class=\"start-form-content\">\n          <div class=\"start-form-field\">\n            <label class=\"start-form-label\" for=\"description\">Please elaborate your question or idea here*</label>\n            <textarea [ngClass]=\"{'is-invalid' : isFieldValid('description')}\" minlength=\"8\" class=\"start-form-field-control\" rows=\"8\" formControlName=\"description\"\n              #description name=\"moretext\" placeholder=\"Type here (minimum 8 characters)\" id=\"description\"></textarea>\n          </div>\n          <small class=\"mandatory-label\" *ngIf=\"!startForm.get('description').valid\"\n            i18n=\"description Error|Explains description is required\"> Description is mandatory. It should be minimum of\n            8 characters </small>\n        </div>\n\n        <div #postTags [ngClass]=\"{ 'is-invalid': showError('tags') }\" class=\"start-tags\">\n          <label class=\"mb-0\">Tags</label>\n          <div *ngFor=\"let tag of postTagsArray\">\n            {{ tag }}\n          </div>\n          <!-- TODO: check the padding for placeholder -->\n          <tag-input class=\"tag-input\" secondaryPlaceholder=\"Add a tag and press Enter\" formControlName=\"tags\"\n            [modelAsStrings]=\"true\">\n          </tag-input>\n        </div>\n\n        <div *ngIf=\"showErrorMsg\">\n          <small class=\"mandatory-label\">\n            {{createErrorMsg}}\n          </small>\n        </div>\n\n        <div class=\"start-modal-buttons\">\n          <button (click)=\"closeModal('discard');logTelemetry($event)\" mat-raised-button type=\"button\"\n            class=\"df-btn df-btn-normal df-cancel-btn\" id=\"discard-discussion-start-form\">Cancel\n          </button>\n          <span *ngIf=\"uploadSaveData\">\n          </span>\n          <button *ngIf=\"mode !== 'edit'\" type=\"submit\" class=\"df-btn df-btn-normal df-btn-primary df-submit-btn\"\n            [ngClass]=\"{'df-btn-disabled': !enableSubmitButton }\" [disabled]=\"!enableSubmitButton\"\n            (click)=\"submitPost(startForm);logTelemetry($event)\" id=\"submit-discussion-start-form\">\n            <span class=\"text-white\">Submit</span>\n          </button>\n          <button *ngIf=\"mode === 'edit'\" type=\"submit\" class=\"df-btn df-btn-normal df-btn-primary df-update-btn\"\n            [ngClass]=\"{'df-btn-disabled': !enableSubmitButton }\" [disabled]=\"!enableSubmitButton\"\n            (click)=\"updatePost(startForm);logTelemetry($event)\" id=\"update-topic-popup\">\n            <span class=\"text-white\">Update</span>\n          </button>\n        </div>\n        \u200B\n      </form>\n      \u200B\n      <input type=\"hidden\" i18-value i18-aria-value aria-value=\"Post created successful\"\n        value=\"Post created successfully!\" #toastSuccess />\n      <input type=\"hidden\" i18-value i18-aria-value aria-value=\"unable to create post\"\n        value=\"Error in creating new post!\" #toastError />\n    </div>\n  </div>\n</div>",
    styles: ["::ng-deep:root{--df-modal-content-bg:var(--df-common-bg);--df-modal-field-control-bg:var(--df-background);--df-tag-bg:var(--df-e9e8d9);--df-ng-tag-bg:var(--df-background)}.discussion-start-modal{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .1s ease-in;pointer-events:auto}.discussion-start-modal .discussion-start-modal-content{max-width:50rem;width:90%;margin:0 auto;padding:1rem;border-radius:.1875rem;background:var(--df-modal-content-bg);color:var(--df-text);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:auto;max-height:calc(100% - 156px)}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-content{margin-bottom:.5rem}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-label{display:inline-block;margin-bottom:.5rem;font-size:.8125rem;font-weight:700}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-field{position:relative;margin-bottom:0}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-field .select-category{border:.0625rem solid var(--gray-200);color:var(--df-text);margin:0 .5rem;padding:.5rem .25rem;background:var(--df-field-control-bg)}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-field .start-form-field-control{background-color:var(--df-modal-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;width:96%;cursor:pointer;outline:0;padding:.5rem .875rem}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-field .start-form-field-control .active,.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-form-field .start-form-field-control:focus{border-color:var(--primary-400)!important}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .mandatory-label{font-size:.75rem;color:var(--red-100)}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-modal-buttons{float:right}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-modal-buttons .df-submit-btn,.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-modal-buttons .df-update-btn{margin-left:.5rem}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-modal-buttons .df-cancel-btn{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border:0;margin:0 .5rem}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-modal-buttons .df-btn-disabled{background-color:var(--gray-100)}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-tags{margin-bottom:1.5rem}.discussion-start-modal .discussion-start-modal-content .discussion-start-form .start-tags label{display:inline-block;font-size:.8125rem;font-weight:700;margin-bottom:0}#myModal{display:block;opacity:2!important}::ng-deep .ng2-tag-input{border:.0625rem solid!important;border-radius:.1875rem;color:var(--df-text)!important;display:block;font-size:.8125rem!important;max-width:100%;padding:.25rem .5rem;margin:.5rem 0;background:var(--df-field-control-bg);border-bottom:.0625rem solid!important}::ng-deep .ng2-tag-input--focused{border-color:var(--primary-400)!important}::ng-deep .ng2-tag-input__text-input{height:2.25rem;margin:0 .5rem;color:var(--df-text);background:var(--df-ng-tag-bg)}::ng-deep .ng2-tag-input.active{border-color:var(--primary-400)!important}::ng-deep tag{background:var(--df-tag-bg)!important;color:var(--df-text)!important}::ng-deep tag:first-child{margin-left:.5rem!important}"]
  }]
}];
/** @nocollapse */

DiscussStartComponent.ctorParameters = function () {
  return [{
    type: DiscussionService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
  }, {
    type: TelemetryUtilsService
  }, {
    type: ConfigService
  }, {
    type: DiscussUtilsService
  }];
};

DiscussStartComponent.propDecorators = {
  categoryId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  topicData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  mode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
}; // import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

/* tslint:enable */

var DiscussAllComponent = /*#__PURE__*/function () {
  function DiscussAllComponent(router, route, discussionService, configService, activatedRoute, telemetryUtils, navigationService // private modalService: BsModalService
  ) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussAllComponent);

    this.router = router;
    this.route = route;
    this.discussionService = discussionService;
    this.configService = configService;
    this.activatedRoute = activatedRoute;
    this.telemetryUtils = telemetryUtils;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.showStartDiscussionModal = false;
    this.isTopicCreator = false;
    this.showLoader = false;
    this.currentFilter = 'recent';
    this.currentActivePage = 1;
    this.cIds = [];
    this.sticky = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DiscussAllComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.telemetryUtils.logImpression(NSDiscussData.IPageName.HOME);

      if (this.context) {
        this.isWidget = true;
        this.getForumIds();
      } else {
        this.cIds = this.configService.getCategories().result;
        this.loadDiscussionData();
      }
    }
  }, {
    key: "getForumIds",
    value: function getForumIds() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_16__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this39 = this;

        var body, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              body = {
                "identifier": this.context.contextIdArr,
                "type": this.context.contextType
              };
              _context3.next = 3;
              return this.discussionService.getForumIds(body);

            case 3:
              resp = _context3.sent;

              if (resp.result.length > 0) {
                resp.result.forEach(function (forum) {
                  _this39.cIds.push(forum.cid);
                });
              } else {
                this.discussionService.createForum(this.context.categoryObj).subscribe(function (data) {
                  data.result.forEach(function (forum) {
                    _this39.cIds.push(forum.newCid);
                  });
                });
              }

              this.loadDiscussionData();

            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "loadDiscussionData",
    value: function loadDiscussionData() {
      // debugger
      // this.cIds = this.context ? this.context.categories : this.configService.getCategories()
      this.categoryId = this.discussionService.getContext(CONTEXT_PROPS.cid);

      if (this.configService.hasContext() || this.context) {
        this.getContextBasedDiscussion(this.cIds); // This is to show context based trending tags

        this.getContextBasedTags(this.cIds);
      } else {
        // this.currentActivePage = 1
        this.refreshData(); // This is to show trending tags

        this.fetchAllTags();
      }
    }
  }, {
    key: "navigateToDiscussionDetails",
    value: function navigateToDiscussionDetails(discussionData) {
      var matchedTopic = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["find"])(this.telemetryUtils.getContext(), {
        type: 'Topic'
      });

      if (matchedTopic) {
        this.telemetryUtils.deleteContext(matchedTopic);
      }

      this.telemetryUtils.uppendContext({
        id: Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'tid'),
        type: 'Topic'
      });
      var slug = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["trim"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(discussionData, 'slug')); // tslint:disable-next-line: max-line-length

      var input = {
        data: {
          url: "".concat(this.configService.getRouterSlug()).concat(ROUTES.TOPIC).concat(slug),
          queryParams: {}
        },
        action: CATEGORY_DETAILS
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        action: CATEGORY_DETAILS,
        title: discussionData.title,
        tid: discussionData.tid
      }); // this.router.navigate([`${this.configService.getRouterSlug()}${CONSTANTS.ROUTES.TOPIC}${slug}`], { queryParamsHandling: "merge" });
    }
  }, {
    key: "acceptData",
    value: function acceptData(singleTagDetails) {
      // debugger
      if (this.context) {
        singleTagDetails.cIds = this.cIds;
      }

      this.stateChange.emit(singleTagDetails);
    }
  }, {
    key: "getDiscussionList",
    value: function getDiscussionList(slug) {
      var _this40 = this;

      this.showLoader = true; // TODO : this.currentActivePage shoulb be dynamic when pagination will be implemented

      this.discussionService.getContextBasedTopic(slug, this.currentActivePage).subscribe(function (data) {
        _this40.showLoader = false;
        _this40.isTopicCreator = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'privileges.topics:create') === true ? true : false;
        _this40.discussionList = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["union"])(Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'topics'), Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'children'));
      }, function (error) {
        _this40.showLoader = false; // TODO: Toaster

        console.log('error fetching topic list', error);
      });
    }
  }, {
    key: "filter",
    value: function filter(key) {
      if (key) {
        this.currentFilter = key;

        switch (key) {
          case 'recent':
            this.cIds.length ? this.getContextData(this.cIds.result) : this.fillrecent();
            break;

          case 'popular':
            this.cIds.length ? this.getContextData(this.cIds.result) : this.fillPopular();
            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "fillrecent",
    value: function fillrecent(_page) {
      this.getRecentData();
    }
  }, {
    key: "fillPopular",
    value: function fillPopular(page) {
      var _this41 = this;

      this.showLoader = true;
      return this.discussionService.fetchPopularD(page).subscribe(function (response) {
        _this41.showLoader = false;
        _this41.discussionList = [];
        Object(lodash__WEBPACK_IMPORTED_MODULE_19__["filter"])(response.topics, function (topic) {
          if (topic.user.uid !== 0 && topic.cid !== 1) {
            _this41.discussionList.push(topic);
          }
        }); // this.discussionList = _.get(response, 'topics')
      }, function (error) {
        _this41.showLoader = false; // TODO: Toaster

        console.log('error fetching topic list', error);
      });
    }
  }, {
    key: "getContextBasedDiscussion",
    value: function getContextBasedDiscussion(cid) {
      this.currentFilter === 'recent' ? this.getContextData(cid) : this.getContextData(cid);
    }
  }, {
    key: "refreshData",
    value: function refreshData(page) {
      this.currentFilter === 'recent' ? this.getRecentData() : this.fillPopular(page);
    }
  }, {
    key: "getRecentData",
    value: function getRecentData() {
      var _this42 = this;

      this.showLoader = true;
      return this.discussionService.fetchRecentPost().subscribe(function (data) {
        _this42.showLoader = false;
        _this42.discussionList = [];
        Object(lodash__WEBPACK_IMPORTED_MODULE_19__["filter"])(data.topics, function (topic) {
          if (topic.user.uid !== 0 && topic.cid !== 1) {
            _this42.discussionList.push(topic);
          }
        });
        _this42.discussionList = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'posts');
      }, function (error) {
        _this42.showLoader = false; // TODO: Toaster

        console.log('error fetching topic list', error);
      });
    }
  }, {
    key: "getContextData",
    value: function getContextData(cid) {
      var _this43 = this;

      this.showLoader = true;
      var req = {
        // request: {
        cids: cid // }

      };
      return this.discussionService.getContextBasedDiscussion(req).subscribe(function (data) {
        _this43.showLoader = false;
        var result = data.result;
        var res = result.filter(function (elem) {
          return elem.statusCode !== 404;
        });
        _this43.allTopics = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["map"])(res, function (topic) {
          return topic.topics;
        });
        _this43.discussionList = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["flatten"])(_this43.allTopics);
      }, function (error) {
        _this43.showLoader = false; // TODO: Toaster

        console.log('error fetching topic list', error);
      });
    }
  }, {
    key: "fetchAllTags",
    value: function fetchAllTags() {
      var _this44 = this;

      this.showLoader = true;
      this.discussionService.fetchAllTag().subscribe(function (data) {
        _this44.showLoader = false;
        _this44.trendingTags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'tags');
      }, function (error) {
        _this44.showLoader = false; // TODO: toaster

        console.log('error fetching tags');
      });
    }
  }, {
    key: "getContextBasedTags",
    value: function getContextBasedTags(cid) {
      var _this45 = this;

      var req = {
        cids: cid
      };
      this.showLoader = true;
      this.discussionService.contextBasedTags(req).subscribe(function (data) {
        _this45.showLoader = false;
        _this45.trendingTags = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(data, 'result');
      }, function (error) {
        _this45.showLoader = false; // TODO: toaster

        console.log('error fetching tags');
      });
    } // startDiscussion(template: TemplateRef<any>) {
    //   this.modalRef = this.modalService.show(template);
    // this.showStartDiscussionModal = true;
    // this.bsModalRef = this.modalService.show(DiscussStartComponent);
    // this.bsModalRef.content.onClose().subscribe(
    //   console.log('completed')
    // );
    // }

  }, {
    key: "startDiscussion",
    value: function startDiscussion() {
      debugger;
      this.showStartDiscussionModal = true;

      if (this.context) {
        this.startDiscussionCategoryId = this.cIds;
      }
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.HOME);
    }
  }, {
    key: "closeModal",
    value: function closeModal(event) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(event, 'message') === 'success') {
        if (this.context) {
          this.getContextBasedDiscussion(this.cIds);
        } else {
          this.refreshData();
        } // this.getDiscussionList(_.get(this.routeParams, 'slug'));

      }

      this.showStartDiscussionModal = false;
    }
  }]);

  return DiscussAllComponent;
}();

DiscussAllComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-all',
    template: "<div class=\"main-div\">\n\n    <!-- <button (click)=\"startDiscussion();logTelemetry($event)\" class=\"df-btn df-btn-normal df-btn-primary\" data-toggle=\"modal\"\n        data-target=\"#myModal\" id=\"start-discussion\">Start Discussion</button> -->\n\n\n    <div class=\"flex flex-1 custom discussion_outer_box\">\n        <div class=\"flex flex-3 flex-column discussion_main_box\">\n            <div (click)=\"startDiscussion();logTelemetry($event)\" data-toggle=\"modal\"\n            data-target=\"#myModal\" id=\"start-discussion\">\n                <a href=\"javascript:void(0)\" class=\"flex flex-1 cursor-pointer margin-fix height-48\" i18n-aria-label role=\"link\">\n                  <div\n                    class=\"flex flex-1 items-center border discuss border-solid discuss-border ws-mat-primary-background-op100 \">\n                    <div class=\"w-full discuss truncate\">\n                      <span class=\"overflow ml-4 start-btn-hint mb-0 mat-body-1\">Ask a question or post an idea</span>\n                    </div>\n                    <div class=\"discuss-home text-white flex items-center justify-center cursor-pointer mat-subheading-2\">\n                      Start discussion\n                    </div>\n                  </div>\n                  <!-- <div class=\"text-box\">Ask a question or post an idea</div> \n              <div class=\"buton\">start discussion</div> -->\n                </a>\n              </div>\n\n            <ng-container>\n                <div class=\"flex flex-1 flex-row margin-fix tab_margin\">\n                    <div class=\"flex flex-1 filter max-height-60\">\n                        <a href=\"javascript:void(0)\" role=\"link\" class=\"filter-option\" [ngClass]=\"{'tabs-active' : currentFilter === 'recent',\n          ' font-medium':currentFilter !== 'recent'}\" mat-button (click)=\"filter('recent')\" role=\"button\">Recent</a>\n                        <a href=\"javascript:void(0)\"  role=\"link\" class=\"filter-option\" [ngClass]=\"{'tabs-active' : currentFilter === 'popular',\n          ' font-medium':currentFilter !== 'popular'}\" mat-button (click)=\"filter('popular')\" role=\"button\">Popular</a>\n                        <a href=\"javascript:void(0)\"  role=\"link\" class=\"filter-option watching_link\"  mat-button role=\"button\">Watching</a>\n                    </div>\n                    <div class=\"flex items-center\">\n                        <a class=\"all_category_link mat-subheading-2 margin-remove\">All categories </a>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- <lib-app-loader *ngIf=\"showLoader\"></lib-app-loader> -->\n\n\n            <ng-container *ngIf=\"discussionList  && discussionList.length > 0\">\n                <div (click)=\"navigateToDiscussionDetails(data);logTelemetry($event)\"\n                    *ngFor=\"let data of discussionList\" id=\"discuss-card\">\n                    <lib-discuss-card [discussionData]=\"data\"></lib-discuss-card>\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\" !(discussionList && discussionList.length > 0)\">\n                <div class=\"no-card-content\" tabindex=\"0\">\n                    <div class=\"no-data-label\">No Data</div>\n                    <div>\n                        <span>&nbsp;</span>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- <div class=\"flex flex-1 flex-column margin-fix pagination-container\">\n            <ws-app-pagination [pager]=\"pager\" (changePage)=\"navigateWithPage($event)\"></ws-app-pagination>\n        </div> -->\n        </div>\n        <div *ngIf=\"!isWidget\" class=\"flex flex-1 right_tag_box\" #stickyMenu [class.sticky]=\"sticky\">\n            <lib-discuss-trending-tags [tags]=\"trendingTags\" (stateChange)=\"acceptData($event)\"></lib-discuss-trending-tags>\n        </div>\n    </div>\n\n    <lib-discuss-start (close)=\"closeModal($event)\" *ngIf=\"showStartDiscussionModal\" [categoryId]=\"startDiscussionCategoryId\">\n    </lib-discuss-start>\n</div>",
    styles: [".fade:not(.show){opacity:1!important}.buton{display:flex;border:.0625rem solid;flex:1;background:var(--red);align-content:center;text-align:center}.sticky{position:fixed;top:0;overflow:hidden;z-index:10;width:100%}.text-box{display:flex;border:.0625rem solid;flex:3;align-content:center;text-align:center}.overflow{overflow:hidden}.font-medium{font-weight:500!important}.discuss-border{border-radius:.25rem;border:.0625rem solid var(--gray-200);flex:1}.discuss .mat-form-field-wrapper{padding-bottom:0}.discuss .mat-form-field-wrapper .mat-form-field-infix{border-top-width:.25rem!important;padding:0 0 .25rem}.discuss-home{background:var(--primary) 0 0 no-repeat padding-box;border-radius:0 .25rem .25rem 0;padding:.875rem 2rem;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;margin:0 1rem 1rem}.flex-3{flex:3}.filter .filter-option{border-radius:0;border-bottom:.0625rem solid var(--black);border-width:0 0 .125rem}.filter .filter-option.tabs-active{border-bottom:.1875rem solid var(--blue)}.start-btn-hint{display:block;margin-bottom:0;padding:1rem}.tab_margin{margin-bottom:1rem!important}a.all_category_link{color:var(--primary);display:none}.watching_link{display:none}@media (max-width:768px){.main-div{display:block!important;width:100%!important;padding:0!important}.discussion_outer_box{display:block!important}.discussion_main_box,.right_tag_box{width:100%;display:block!important;float:none}}"]
  }]
}];
/** @nocollapse */

DiscussAllComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: DiscussionService
  }, {
    type: ConfigService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: TelemetryUtilsService
  }, {
    type: NavigationServiceService
  }];
};

DiscussAllComponent.propDecorators = {
  context: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  categoryAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};

var TagAllDiscussionComponent = /*#__PURE__*/function () {
  function TagAllDiscussionComponent(route, router, discussService, activatedRoute, configService, telemetryUtils, discussUtils, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TagAllDiscussionComponent);

    this.route = route;
    this.router = router;
    this.discussService = discussService;
    this.activatedRoute = activatedRoute;
    this.configService = configService;
    this.telemetryUtils = telemetryUtils;
    this.discussUtils = discussUtils;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.fetchSingleCategoryLoader = false;
    this.defaultError = 'Something went wrong, Please try again after sometime!';
    this.pager = {};
    this.fetchNewData = false;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TagAllDiscussionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this46 = this;

      // debugger
      this.cIds = this.widgetcIds ? this.widgetcIds : this.configService.getCategories();

      if (this.widgetTagName) {
        this.tagName = this.widgetTagName;
      } else {
        this.activatedRoute.queryParams.subscribe(function (params) {
          _this46.tagName = params.tagname ? params.tagname : _this46.tagName;
        });
      } // To check wheather any contexts are there or not from the config service


      if (this.configService.hasContext() || this.widgetcIds) {
        this.fetchContextBasedTagDetails(this.tagName, this.cIds, this.currentActivePage);
      } else {
        this.fetchSingleTagDetails(this.tagName, this.currentActivePage);
      }
    }
    /**Method to fetch the tag based discussion */

  }, {
    key: "fetchSingleTagDetails",
    value: function fetchSingleTagDetails(tagname, page) {
      var _this47 = this;

      this.fetchSingleCategoryLoader = true;
      this.discussService.getTagBasedDiscussion(tagname).subscribe(function (data) {
        _this47.similarPosts = data.topics;
        _this47.paginationData = data.pagination;
        _this47.fetchSingleCategoryLoader = false;

        _this47.setPagination();
      }, function (err) {
        console.error('Error in fetching single tag details', err); // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError)

        _this47.fetchSingleCategoryLoader = false;
      });
    }
    /** Method to fetch the context based discussions */

  }, {
    key: "fetchContextBasedTagDetails",
    value: function fetchContextBasedTagDetails(tagname, cid, page) {
      var _this48 = this;

      this.fetchSingleCategoryLoader = true;
      var req = {
        cid: cid.result,
        tag: tagname
      };
      this.discussService.getContextBasedTagDiscussion(req).subscribe(function (data) {
        _this48.similarPosts = data.result; // this.paginationData = data.pagination

        _this48.fetchSingleCategoryLoader = false;

        _this48.setPagination();
      }, function (err) {
        console.error('Error in fetching context based tag details', err); // this.openSnackbar(err.error.message.split('|')[1] || this.defaultError)

        _this48.fetchSingleCategoryLoader = false;
      });
    } // TODO : for pagination
    // getNextData(tagname: string, page: any) {
    //   return this.discussService.fetchNextTagD(tagname, page).subscribe(
    //     (data: any) => {
    //       this.paginationData = data.pagination
    //       this.setPagination()
    //       this.similarPosts = _.get(data, 'topics')
    //     })
    // }

  }, {
    key: "setPagination",
    value: function setPagination() {
      this.pager = {
        startIndex: this.paginationData.first.page,
        endIndex: this.paginationData.last.page,
        pages: this.paginationData.pages,
        currentPage: this.paginationData.currentPage,
        totalPage: this.paginationData.pageCount
      };
    }
  }, {
    key: "navigateWithPage",
    value: function navigateWithPage(page) {
      if (page !== this.currentActivePage) {
        this.fetchNewData = true;
        this.router.navigate(["".concat(this.configService.getRouterSlug()).concat(ROUTES.TAG, "tag-discussions")], {
          queryParams: {
            page: page,
            tagname: this.queryParam
          },
          queryParamsHandling: "merge"
        });
      }
    }
    /** Method to navigate to the dicussion detail page on click of tag related discussion */

  }, {
    key: "navigateToDiscussionDetails",
    value: function navigateToDiscussionDetails(discussionData) {
      var matchedTopic = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.find(this.telemetryUtils.getContext(), {
        type: 'Topic'
      });

      if (matchedTopic) {
        this.telemetryUtils.deleteContext(matchedTopic);
      }

      this.telemetryUtils.uppendContext({
        id: lodash__WEBPACK_IMPORTED_MODULE_19___default.a.get(discussionData, 'tid'),
        type: 'Topic'
      });

      var slug = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_19___default.a.get(discussionData, 'slug'));

      var input = {
        data: {
          url: "".concat(this.configService.getRouterSlug()).concat(ROUTES.TOPIC).concat(slug),
          queryParams: {}
        },
        action: CATEGORY_DETAILS
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        action: CATEGORY_DETAILS,
        title: discussionData.title,
        tid: discussionData.tid
      }); // this.router.navigate([`${this.configService.getRouterSlug()}${CONSTANTS.ROUTES.TOPIC}${_.trim(_.get(discussionData, 'slug'))}`], { queryParamsHandling: "merge" });
    }
  }, {
    key: "logTelemetry",
    value: function logTelemetry(event) {
      this.telemetryUtils.logInteract(event, NSDiscussData.IPageName.HOME);
    } // TODO: add refershdata function
    // refreshData(tagname: string, page: any) {
    //   if (this.fetchNewData) {
    //     // this.getNextData(tagname, page)
    //   }
    // }
    // for tag color

  }, {
    key: "getBgColor",
    value: function getBgColor(tagTitle) {
      var bgColor = this.discussUtils.stringToColor(tagTitle.toLowerCase());
      var color = this.discussUtils.getContrast();
      return {
        color: color,
        'background-color': bgColor
      };
    }
  }]);

  return TagAllDiscussionComponent;
}();

TagAllDiscussionComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-tag-all-discussion',
    template: "<div class=\"main-div\">\n    <div class=\"flex flex-1 margin-top-xl\">\n        <h2 class=\"margin-remove-bottom tagtitle\" [ngStyle]=\"getBgColor(tagName)\">{{tagName}}</h2>\n    </div>\n    <div>\n        <span>&nbsp;</span>\n    </div>\n    <div class=\"flex flex-1 custom\">\n        <div class=\"flex flex-1 flex-column margin-fix\">\n            <lib-app-loader *ngIf=\"fetchSingleCategoryLoader\"></lib-app-loader>\n\n            <ng-container *ngIf=\"similarPosts && similarPosts.length > 0\">\n                <div (click)=\"navigateToDiscussionDetails(data);logTelemetry($event)\"\n                    *ngFor=\"let data of similarPosts\" id=\"discuss-card\">\n                    <lib-discuss-card [discussionData]=\"data\"></lib-discuss-card>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"!(similarPosts && similarPosts.length > 0)\">\n                <div class=\"no-card-content\" tabindex=\"0\"> \n                    <div class=\"no-data-label\">No Data</div>\n                    <div>\n                        <span>&nbsp;</span>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    <!-- <div class=\"flex flex-1 flex-column margin-top-xl margin-bottom-xl pagination-container\">\n        <ws-app-pagination [pager]=\"pager\" (changePage)=\"navigateWithPage($event)\"></ws-app-pagination>\n    </div> -->\n</div>",
    styles: [".flex.flex-5{flex-direction:column}.tagtitle{margin:0 .25rem;padding:.25rem 1rem;min-width:3.125rem;justify-content:center;border-radius:1.25rem .25rem .25rem 1.25rem}"]
  }]
}];
/** @nocollapse */

TagAllDiscussionComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: DiscussionService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]
  }, {
    type: ConfigService
  }, {
    type: TelemetryUtilsService
  }, {
    type: DiscussUtilsService
  }, {
    type: NavigationServiceService
  }];
};

TagAllDiscussionComponent.propDecorators = {
  widgetTagName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  widgetcIds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};
/* tslint:enable */

var TrendingTagsComponent = /*#__PURE__*/function () {
  function TrendingTagsComponent(router, configService, navigationService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TrendingTagsComponent);

    this.router = router;
    this.configService = configService;
    this.navigationService = navigationService;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_20__["EventEmitter"]();
    this.max = 0;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TrendingTagsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // debugger
      this.max = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_19___default.a.maxBy(this.tags, 'score'), 'score') || 0;
      this.trandingTags = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.chain(this.tags).orderBy('score', 'desc').take(5).value();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(data) {
      // debugger
      // this.tableData!.columns = data.tableData.currentValue.columns
      this.tags = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.get(data, 'tags.currentValue');
      this.max = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_19___default.a.maxBy(this.tags, 'score'), 'score') || 0;
      this.trandingTags = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.chain(this.tags).orderBy('score', 'desc').take(5).value();
    } // TODO: To enable trending tags click and navigate to tags detals page

  }, {
    key: "getAllDiscussions",
    value: function getAllDiscussions(tag) {
      // debugger
      this.queryParam = tag.value;
      var tagdata = {
        tagname: ''
      };
      tagdata.tagname = tag.value;
      this.queryParam = tagdata;
      var routerSlug = this.configService.getConfig().routerSlug ? this.configService.getConfig().routerSlug : '';
      var input = {
        data: {
          url: "".concat(routerSlug).concat(ROUTES.TAG, "tag-discussions"),
          queryParams: this.queryParam,
          tagName: this.queryParam.tagName
        },
        action: 'tagsAll'
      };
      this.navigationService.navigate(input);
      this.stateChange.emit({
        action: TAG_ALL_DISCUSS,
        title: tag.value,
        tid: 'sd'
      }); // tslint:disable-next-line: max-line-length
      // this.router.navigate([`${this.configService.getRouterSlug()}${CONSTANTS.ROUTES.TAG}tag-discussions`], { queryParams: this.queryParam });
    }
  }, {
    key: "css",
    value: function css() {// return 'linear - gradient(to left, #00ff00 " + 80 + " %, #ff0000 20 %)"
    }
  }]);

  return TrendingTagsComponent;
}();

TrendingTagsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'lib-discuss-trending-tags',
    template: "<div class=\"margin-left-l right_tag_inner_box\">\n    <span class=\"mat-subheading-2\" role=\"link\" tabindex=\"0\" aria-label=\"Trending tags\">Trending tags</span>\n    <ng-container *ngIf=\"trandingTags && trandingTags.length > 0\">\n      <div *ngFor=\"let tag of trandingTags\" class=\"tag ws-mat-primary-lite-background-important cursor-pointer\" role=\"link\" tabindex=\"0\"\n        [attr.aria-label]=\"tag.value\"\n        [ngStyle]=\"{'background-image':'linear-gradient(to right, #ECECEC, #ECECEC ' + ((tag.score / max) *100 ) + '%, #FFF 24px)'}\" (click)=\"getAllDiscussions(tag)\">\n        <span class=\"margin-left-m mat-caption\">{{tag.value}}</span>\n        <span class=\"custom-margin margin-right-m mat-subheading-2\">{{tag.score}}</span>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"update_box margin-left-l\"> \n    <span class=\"mat-subheading-2\" role=\"link\" tabindex=\"0\" aria-label=\"Updates\">Updates</span>\n    <div class=\"update_inner_box flex flex-col items-center justify-center\">\n\n      <div class=\"mat-card flex flex-col update_card margin-bottom-s\">\n        <div class=\"flex fex-1 items-center justify-start card_head\">\n          <p class=\"mat-subheading-1 blue_heading\">1 Upvote on your question</p>\n        </div>\n        <div class=\"flex fex-1 items-center justify-start card_body\">\n          <p class=\"mat-body-2\">What is the most reliable and useful source for COVID related ..</p>\n        </div>\n      </div>\n\n      <div class=\"mat-card flex flex-col update_card margin-bottom-s\">\n        <div class=\"flex fex-1 items-center justify-start card_head\">\n          <p class=\"mat-subheading-1 blue_heading\">@sundaramraj answered your question</p>\n        </div>\n        <div class=\"flex fex-1 items-center justify-start card_body\">\n          <p class=\"mat-body-2\">I think the solution to such a problem would be to extensively..</p>\n        </div>\n      </div>\n\n      <div class=\"mat-card flex flex-col update_card margin-bottom-s\">\n        <div class=\"flex fex-1 items-center justify-start card_head\">\n          <p class=\"mat-subheading-1 blue_heading\">1 Upvote on your question</p>\n        </div>\n        <div class=\"flex fex-1 items-center justify-start card_body\">\n          <p class=\"mat-body-2\">What is the most reliable and useful source for COVID related ..</p>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col items-center update_btn_box\">\n        <a class=\"all_update_link flex mat-subheading-2 justify-center\">ALL UPDATES</a>\n      </div>\n\n    </div>\n  </div>",
    styles: [":root{font-size:16px;--blue:#024f9d;--green:#008840;--black:#000000;--white:#ffffff;--red:#ff4558;--primary:var(--blue);--secondary:#008840;--tertiary:#e55a28;--gray-hs:0,0%;--gray:hsl(var(--gray-hs), 20%);--gray-0:hsl(var(--gray-hs), 95%);--gray-100:hsl(var(--gray-hs), 80%);--gray-200:hsl(var(--gray-hs), 60%);--gray-300:hsl(var(--gray-hs), 59%);--gray-400:hsl(var(--gray-hs), 40%);--gray-800:var(--gray);--primary-hs:210,97%;--primary:hsl(var(--primary-hs), 31%);--primary-0:hsl(var(--primary-hs), 98%);--primary-100:hsl(var(--primary-hs), 88%);--primary-200:hsl(var(--primary-hs), 78%);--primary-250:hsl(var(--primary-hs), 73%);--primary-300:hsl(var(--primary-hs), 68%);--primary-400:var(--primary);--primary-600:hsl(var(--primary), 48%);--primary-800:hsl(var(--primary-hs), 38%);--secondary-hs:148,100%;--secondary:hsl(var(--secondary-hs), 27%);--secondary-0:hsl(var(--secondary-hs), 94%);--secondary-100:hsl(var(--secondary-hs), 39%);--secondary-200:hsl(var(--secondary-hs), 38%);--secondary-400:var(--secondary);--tertiary-hs:16,78%;--tertiary:hsl(var(--tertiary-hs), 53%);--tertiary-0:hsl(var(--tertiary-hs), 92%);--tertiary-100:hsl(var(--tertiary-hs), 56%);--tertiary-400:var(--tertiary);--red-0:#fbccd1;--red-100:#ff6979;--red-400:var(--red);--df-e9e8d9:#e9e8d9;--df-333:#333;--text-color:var(--df-333);--df-background:var(--white);--df-common-bg:var(--white);--df-body-bg:var(--primary-0);--df-theme-bg:var(--df-background);--df-text:var(--text-color);--df-card-bg:var(--df-background);--df-btn-default-color:var(--white);--df-field-control-bg:var(--df-background);--df-cancel-btn-bg:var(--df-background);--df-tab-bg:var(--df-background);--df-tab-text:var(--primary);--df-tab-bg-active:var(--primary);--df-tab-text-active:var(--white)}.recent-tabs{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;box-shadow:none!important;border-radius:unset;background:inherit!important;z-index:unset;padding-bottom:.5rem}.recent-tabs .tabs-content{display:flex;flex:1 1 0%;flex-direction:column}.recent-tabs .tabs-content .tabs-filter{display:flex;flex:1 1 0%;flex-wrap:wrap}.recent-tabs .tabs-content .tabs-filter .filter-option{background:var(--df-tab-bg);padding:.5rem 1rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);font-size:.875rem;font-weight:700;margin-right:.75rem;margin-top:.5rem;transition:.3s;display:flex;align-items:center;cursor:pointer;white-space:nowrap;text-decoration:none;color:var(--df-tab-text)}.recent-tabs .tabs-content .tabs-filter .filter-option:first-child{margin-left:0}.recent-tabs .tabs-content .tabs-filter .filter-option.tabs-active,.recent-tabs .tabs-content .tabs-filter .filter-option:hover{color:var(--df-btn-default-color);text-decoration:none;background-color:var(--df-tab-bg-active)}.tags{display:flex;flex:1;flex-direction:row;flex-wrap:wrap;position:relative;z-index:2}.tags .tag{font-size:.75rem;display:flex;width:auto;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;max-height:2rem;justify-content:space-between;align-items:center;text-transform:lowercase;margin:.5rem 1rem .5rem 0;padding:.5rem 1rem;border-radius:1.5rem;cursor:pointer}.df-cancel-btn{background-color:var(--white);color:var(--primary-400);border-color:var(--primary-400);margin:0 .5rem}.df-cancel-btn:active,.df-cancel-btn:hover{color:var(--primary-800);background-color:var(--primary-100)}.topic-list-container{overflow-y:auto;overflow-x:hidden;height:calc(100vh - 150px)!important}#topic-scroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#ccc}#topic-scroll::-webkit-scrollbar{width:8px}#topic-scroll::-webkit-scrollbar-thumb{background:grey}.no-card-content{cursor:pointer;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:0;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;width:auto}.no-card-content .no-data-label{font-size:1.25rem;font-weight:700}.df-btn{white-space:nowrap;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;display:inline-block;border:0;cursor:pointer;min-width:4rem;border-radius:.125rem;position:relative;line-height:1;text-transform:inherit;text-decoration:none}.df-btn-normal{height:2rem;padding:.5rem 1rem;font-size:.75rem}.df-btn-primary{background-color:var(--primary-400)}.df-btn-secondary{background-color:var(--secondary-200)}.df-btn-tertiary{background-color:var(--tertiary-100)}.df-btn-danger{background-color:var(--red-100)}.df-btn-danger:hover{background-color:var(--red-400)}.df-btn-danger,.df-btn-primary,.df-btn-secondary,.df-btn-tertiary{color:var(--df-btn-default-color)}.df-btn-primary.active,.df-btn-primary:active,.df-btn-primary:hover{background-color:var(--primary-800)}.df-btn-secondary.active,.df-btn-secondary:active,.df-btn-secondary:hover{background-color:var(--secondary-400)}.df-btn-tertiary.active,.df-btn-tertiary:active,.df-btn-tertiary:hover{background-color:var(--tertiary-400)}.tag{display:flex;width:17.25rem;height:2rem;border-radius:.25rem;justify-content:space-between;margin:.5rem 0;align-items:center;box-sizing:border-box}.custom-margin{margin-top:auto!important;margin-bottom:auto!important}@media (max-width:768px){.tags{z-index:unset}.right_tag_inner_box{width:100%;margin-left:0!important}}.update_box{box-sizing:border-box;margin-top:2rem;display:none}.update_box .update_inner_box{box-sizing:border-box;margin-top:1rem}.update_box .update_inner_box .update_card{box-sizing:border-box}.update_box .update_inner_box .update_card .card_head p.blue_heading{color:var(--primary);margin-bottom:.5rem}.update_box .update_inner_box .update_btn_box{width:100%;margin-top:.5rem}.update_box .update_inner_box .update_btn_box a.all_update_link{width:100%;padding:.5rem 0;text-align:center;color:var(--primary);border-radius:.25rem;border:.0625rem solid var(--black)}"]
  }]
}];
/** @nocollapse */

TrendingTagsComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]
  }, {
    type: ConfigService
  }, {
    type: NavigationServiceService
  }];
};

TrendingTagsComponent.propDecorators = {
  tags: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }],
  stateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Output"]
  }]
};

var ComponentsModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function ComponentsModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComponentsModule);
});

ComponentsModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
  args: [{
    declarations: [SidePannelComponent, DiscussHomeComponent, DiscussCategoryComponent, DiscussTagsComponent, MyDiscussionComponent, DiscussionDetailsComponent, DiscussStartComponent, DiscussAllComponent, TagAllDiscussionComponent, TrendingTagsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ElementsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_15__["TagInputModule"], PipesModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"]],
    exports: [SidePannelComponent, DiscussHomeComponent, DiscussCategoryComponent, DiscussTagsComponent, MyDiscussionComponent, DiscussionDetailsComponent, DiscussStartComponent, // TODO: Add this components
    DiscussAllComponent, TagAllDiscussionComponent, TrendingTagsComponent],
    providers: [DiscussionService, ConfigService]
  }]
}];
var routes = [{
  path: '',
  component: LibEntryComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: DiscussCategoryComponent
  }, {
    path: 'all-discussions',
    pathMatch: 'full',
    component: DiscussAllComponent
  }, {
    path: 'categories',
    pathMatch: 'full',
    component: DiscussCategoryComponent
  }, {
    path: 'tags',
    pathMatch: 'full',
    component: DiscussTagsComponent
  }, // TODO: ADD LATER
  {
    path: 'tags/tag-discussions',
    pathMatch: 'full',
    component: TagAllDiscussionComponent
  }, {
    path: 'my-discussion',
    pathMatch: 'full',
    component: MyDiscussionComponent
  }, {
    path: 'category/:slug',
    pathMatch: 'full',
    component: DiscussHomeComponent
  }, {
    path: 'topic/:topicId/:slug',
    pathMatch: 'full',
    component: DiscussionDetailsComponent
  }]
}];

var DiscussionRoutingModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function DiscussionRoutingModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussionRoutingModule);
});

DiscussionRoutingModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
  args: [{
    declarations: [],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"]],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
  }]
}];

var BaseWrapperComponent = /*#__PURE__*/function () {
  function BaseWrapperComponent(navigationServiceService, eventService, configSvc, discussionService) {
    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, BaseWrapperComponent);

    this.navigationServiceService = navigationServiceService;
    this.eventService = eventService;
    this.configSvc = configSvc;
    this.discussionService = discussionService;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(BaseWrapperComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this49 = this;

      this.navigationServiceService.initService('wrapperService');
      this.configSvc.setConfigFromWidgetBaseClass(this.config);
      this.discussionService.userId = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.config, 'userName');
      var rawCategories = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(this.config, 'categories');
      this.discussionService.forumIds = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(rawCategories, 'result');
      this.discussionService.initializeUserDetails(this.config.userName);
      this.eventService.toggleMenuItem.subscribe(function (data) {
        _this49.wrapperEventListener(data);

        _this49.state = data.action;
      });
      this.wrapperInit();
    }
  }, {
    key: "wrapperInit",
    value: function wrapperInit() {}
  }, {
    key: "wrapperEventListener",
    value: function wrapperEventListener(data) {}
  }]);

  return BaseWrapperComponent;
}();

BaseWrapperComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'sb-base-wrapper',
    template: "<p>base-wrapper works!</p>\n",
    providers: [NavigationServiceService, EventsService],
    styles: [""]
  }]
}];
/** @nocollapse */

BaseWrapperComponent.ctorParameters = function () {
  return [{
    type: NavigationServiceService
  }, {
    type: EventsService
  }, {
    type: ConfigService
  }, {
    type: DiscussionService
  }];
};

BaseWrapperComponent.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Input"]
  }]
};

var CategoryWidgetComponent = /*#__PURE__*/function (_BaseWrapperComponent) {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CategoryWidgetComponent, _BaseWrapperComponent);

  function CategoryWidgetComponent(configSvc, discussionService, navigationServiceService, eventService) {
    var _this50;

    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CategoryWidgetComponent);

    _this50 = _callSuper(this, CategoryWidgetComponent, [navigationServiceService, eventService, configSvc, discussionService]);
    _this50.detailsToggle = true;
    _this50.category = CATEGORY;
    _this50.detailsPage = CATEGORY_DETAILS;
    _this50.homePage = CATEGORY_HOME;
    return _this50;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CategoryWidgetComponent, [{
    key: "wrapperInit",
    value: function wrapperInit() {
      this.state = this.detailsPage;
    }
  }, {
    key: "stateChange",
    value: function stateChange(event) {
      this.state = event.action;

      if (event.action === this.detailsPage) {
        this.tid = event.tid;
        this.slug = event.title;
      }
    }
  }, {
    key: "wrapperEventListener",
    value: function wrapperEventListener(data) {}
  }]);

  return CategoryWidgetComponent;
}(BaseWrapperComponent);

CategoryWidgetComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'sb-category-widget',
    template: "<div class='widget-container'>\n    <!-- <lib-discuss-category *ngIf='state === category ' [categoryAction]='homePage' (stateChange)='stateChange($event)'></lib-discuss-category>\n    <lib-discuss-home *ngIf='state === homePage' [categoryHomeAction]='detailsPage' (stateChange)='stateChange($event)'></lib-discuss-home> -->\n    <!-- <lib-discussion-details *ngIf='state === detailsPage' [widget]=\"true\" [topicId]='tid' [slug]='slug'></lib-discussion-details> -->\n    <lib-discuss-all [context]='context'></lib-discuss-all>\n</div>",
    styles: [".widget-container{display:flex;width:100%}"]
  }]
}];
/** @nocollapse */

CategoryWidgetComponent.ctorParameters = function () {
  return [{
    type: ConfigService
  }, {
    type: DiscussionService
  }, {
    type: NavigationServiceService
  }, {
    type: EventsService
  }];
};

var TagsWidgetComponent = /*#__PURE__*/function (_BaseWrapperComponent2) {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TagsWidgetComponent, _BaseWrapperComponent2);

  function TagsWidgetComponent(configSvc, discussionService, navigationServiceService, eventService) {
    var _this51;

    Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TagsWidgetComponent);

    _this51 = _callSuper(this, TagsWidgetComponent, [navigationServiceService, eventService, configSvc, discussionService]);
    _this51.tags = TAGS;
    _this51.tagsAll = TAGSALL;
    return _this51;
  }

  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TagsWidgetComponent, [{
    key: "wrapperInit",
    value: function wrapperInit() {
      this.state = this.tags;
    }
  }, {
    key: "wrapperEventListener",
    value: function wrapperEventListener(data) {
      // if (data.action === this.tags || data.action === this.tagName) {
      //   this.state = data.action
      // }
      this.tagName = data.tagName;
    }
  }]);

  return TagsWidgetComponent;
}(BaseWrapperComponent);

TagsWidgetComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["Component"],
  args: [{
    selector: 'sb-tags-widget',
    template: "<div >\n    <lib-discuss-tags *ngIf='state === tags'></lib-discuss-tags>\n    <!-- <lib-tag-all-discussion *ngIf='state === tagsAll' [tagName]='tagName'></lib-tag-all-discussion> -->\n    <!-- <lib-discuss-home *ngIf='state === homePage'></lib-discuss-home>\n    <lib-discussion-details *ngIf='state === detailsPage' [topicId]='tid' [slug]='slug'></lib-discussion-details> -->\n</div>",
    styles: [""]
  }]
}];
/** @nocollapse */

TagsWidgetComponent.ctorParameters = function () {
  return [{
    type: ConfigService
  }, {
    type: DiscussionService
  }, {
    type: NavigationServiceService
  }, {
    type: EventsService
  }];
};

function provideCsModule() {
  return window['CsModule'];
}

var DiscussionUiModule = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function DiscussionUiModule() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DiscussionUiModule);
});

DiscussionUiModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
  args: [{
    declarations: [LibEntryComponent, CategoryWidgetComponent, BaseWrapperComponent, TagsWidgetComponent],
    imports: [ComponentsModule, DiscussionRoutingModule, ElementsModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"]],
    exports: [ComponentsModule, CategoryWidgetComponent, BaseWrapperComponent, TagsWidgetComponent],
    providers: [DiscussionEventsService, TelemetryUtilsService, {
      provide: 'CsModule',
      useFactory: provideCsModule
    }]
  }]
}];

var AbstractConfigService = /*#__PURE__*/Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(function AbstractConfigService() {
  Object(_home_ttpl_lt_049_Music_NULP_react_nulp_portal_src_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractConfigService);
});
/*
 * Public API Surface of discussion-ui
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "GMZp":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function isObject(x) {
  return x !== null && typeof x === 'object';
}

exports.isObject = isObject;

/***/ }),

/***/ "GiSu":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_1 = __webpack_require__(/*! ./config */ "n3uD");

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "MkmW");

exports.empty = {
  closed: true,
  next: function next(value) {},
  error: function error(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError_1.hostReportError(err);
    }
  },
  complete: function complete() {}
};

/***/ }),

/***/ "LBXl":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var UnsubscriptionErrorImpl = function () {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
}();

exports.UnsubscriptionError = UnsubscriptionErrorImpl;

/***/ }),

/***/ "MkmW":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}

exports.hostReportError = hostReportError;

/***/ }),

/***/ "Mxlh":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ObjectUnsubscribedErrorImpl = function () {
  function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
  }

  ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
  return ObjectUnsubscribedErrorImpl;
}();

exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/***/ }),

/***/ "Q1FS":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "yx2s");

var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "Xwq/");

var observable_1 = __webpack_require__(/*! ./symbol/observable */ "zfKp");

var pipe_1 = __webpack_require__(/*! ./util/pipe */ "9AGB");

var config_1 = __webpack_require__(/*! ./config */ "n3uD");

var Observable = function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (canReportError_1.canReportError(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[observable_1.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return pipe_1.pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config_1.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}

/***/ }),

/***/ "Sft5":
/*!*********************************************************!*\
  !*** ./src/app/modules/discussion/discussion.module.ts ***!
  \*********************************************************/
/*! exports provided: DiscussionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionModule", function() { return DiscussionModule; });
/* harmony import */ var _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-sunbird/discussions-ui-v8 */ "G1Em");
/* harmony import */ var _shared_services_discussion_telemetry_discussion_telemetry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/discussion-telemetry/discussion-telemetry.service */ "013R");
/* harmony import */ var _sunbird_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sunbird/shared */ "btWG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @project-sunbird/client-services */ "6QGN");
/* harmony import */ var _project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_CsLibInitializer_cs_lib_initializer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/CsLibInitializer/cs-lib-initializer.service */ "R9cb");






var DiscussionModule = (function () {
    function DiscussionModule(discussionEvents, discussionTelemetryService, navigationHelperService, router, csLibInitializerService) {
        var _this = this;
        this.discussionEvents = discussionEvents;
        this.discussionTelemetryService = discussionTelemetryService;
        this.navigationHelperService = navigationHelperService;
        this.router = router;
        this.csLibInitializerService = csLibInitializerService;
        if (!_project_sunbird_client_services__WEBPACK_IMPORTED_MODULE_4__["CsModule"].instance.isInitialised) {
            this.csLibInitializerService.initializeCs();
        }
        this.discussionEvents.telemetryEvent.subscribe(function (event) {
            _this.discussionTelemetryService.logTelemetryEvent(event);
        });
        if (this.router.events) {
            this.router.events.subscribe(function (e) {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                    if (e.url && e.url.includes('discussion-forum')) {
                        setTimeout(function () {
                            _this.navigationHelperService.popHistory();
                        }, 200);
                    }
                }
            });
        }
    }
    return DiscussionModule;
}());



/***/ }),

/***/ "Xwq/":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "FWf1");

var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "p//D");

var Observer_1 = __webpack_require__(/*! ../Observer */ "GiSu");

function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber_1.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
      return nextOrObserver[rxSubscriber_1.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new Subscriber_1.Subscriber(Observer_1.empty);
  }

  return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}

exports.toSubscriber = toSubscriber;

/***/ }),

/***/ "ds6q":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = __webpack_require__(/*! ./Observable */ "Q1FS");

var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "FWf1");

var Subscription_1 = __webpack_require__(/*! ./Subscription */ "zB/H");

var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "Mxlh");

var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "FiyT");

var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "p//D");

var SubjectSubscriber = function (_super) {
  __extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(Subscriber_1.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject = function (_super) {
  __extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription_1.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return Subscription_1.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new Observable_1.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(Observable_1.Observable);

exports.Subject = Subject;

var AnonymousSubject = function (_super) {
  __extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return Subscription_1.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;

/***/ }),

/***/ "evAe":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@project-sunbird/discussions-ui-v8/project-sunbird-discussions-ui-v8.ngfactory.js ***!
  \********************************************************************************************************/
/*! exports provided: DiscussionUiModuleNgFactory, ɵdNgFactory, ɵpNgFactory, ɵyNgFactory, ɵbeNgFactory, RenderType_CategoryWidgetComponent, View_CategoryWidgetComponent_0, View_CategoryWidgetComponent_Host_0, CategoryWidgetComponentNgFactory, RenderType_BaseWrapperComponent, View_BaseWrapperComponent_0, View_BaseWrapperComponent_Host_0, BaseWrapperComponentNgFactory, RenderType_TagsWidgetComponent, View_TagsWidgetComponent_0, View_TagsWidgetComponent_Host_0, TagsWidgetComponentNgFactory, RenderType_ɵa, View_ɵa_0, View_ɵa_Host_0, ɵaNgFactory, RenderType_ɵe, View_ɵe_0, View_ɵe_Host_0, ɵeNgFactory, RenderType_ɵf, View_ɵf_0, View_ɵf_Host_0, ɵfNgFactory, RenderType_ɵg, View_ɵg_0, View_ɵg_Host_0, ɵgNgFactory, RenderType_ɵh, View_ɵh_0, View_ɵh_Host_0, ɵhNgFactory, RenderType_ɵj, View_ɵj_0, View_ɵj_Host_0, ɵjNgFactory, RenderType_ɵk, View_ɵk_0, View_ɵk_Host_0, ɵkNgFactory, RenderType_ɵl, View_ɵl_0, View_ɵl_Host_0, ɵlNgFactory, RenderType_ɵm, View_ɵm_0, View_ɵm_Host_0, ɵmNgFactory, RenderType_ɵn, View_ɵn_0, View_ɵn_Host_0, ɵnNgFactory, RenderType_ɵo, View_ɵo_0, View_ɵo_Host_0, ɵoNgFactory, RenderType_ɵq, View_ɵq_0, View_ɵq_Host_0, ɵqNgFactory, RenderType_ɵr, View_ɵr_0, View_ɵr_Host_0, ɵrNgFactory, RenderType_ɵs, View_ɵs_0, View_ɵs_Host_0, ɵsNgFactory, RenderType_ɵt, View_ɵt_0, View_ɵt_Host_0, ɵtNgFactory, RenderType_ɵu, View_ɵu_0, View_ɵu_Host_0, ɵuNgFactory, RenderType_ɵv, View_ɵv_0, View_ɵv_Host_0, ɵvNgFactory, RenderType_ɵw, View_ɵw_0, View_ɵw_Host_0, ɵwNgFactory, RenderType_ɵx, View_ɵx_0, View_ɵx_Host_0, ɵxNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionUiModuleNgFactory", function() { return DiscussionUiModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵdNgFactory", function() { return ɵdNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵpNgFactory", function() { return ɵpNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵyNgFactory", function() { return ɵyNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbeNgFactory", function() { return ɵbeNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryWidgetComponent", function() { return RenderType_CategoryWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryWidgetComponent_0", function() { return View_CategoryWidgetComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryWidgetComponent_Host_0", function() { return View_CategoryWidgetComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWidgetComponentNgFactory", function() { return CategoryWidgetComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BaseWrapperComponent", function() { return RenderType_BaseWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BaseWrapperComponent_0", function() { return View_BaseWrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BaseWrapperComponent_Host_0", function() { return View_BaseWrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseWrapperComponentNgFactory", function() { return BaseWrapperComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagsWidgetComponent", function() { return RenderType_TagsWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsWidgetComponent_0", function() { return View_TagsWidgetComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsWidgetComponent_Host_0", function() { return View_TagsWidgetComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsWidgetComponentNgFactory", function() { return TagsWidgetComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵa", function() { return RenderType_ɵa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_0", function() { return View_ɵa_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_Host_0", function() { return View_ɵa_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵaNgFactory", function() { return ɵaNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵe", function() { return RenderType_ɵe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵe_0", function() { return View_ɵe_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵe_Host_0", function() { return View_ɵe_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵeNgFactory", function() { return ɵeNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵf", function() { return RenderType_ɵf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵf_0", function() { return View_ɵf_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵf_Host_0", function() { return View_ɵf_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵfNgFactory", function() { return ɵfNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵg", function() { return RenderType_ɵg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵg_0", function() { return View_ɵg_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵg_Host_0", function() { return View_ɵg_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgNgFactory", function() { return ɵgNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵh", function() { return RenderType_ɵh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵh_0", function() { return View_ɵh_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵh_Host_0", function() { return View_ɵh_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵhNgFactory", function() { return ɵhNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵj", function() { return RenderType_ɵj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵj_0", function() { return View_ɵj_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵj_Host_0", function() { return View_ɵj_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵjNgFactory", function() { return ɵjNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵk", function() { return RenderType_ɵk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵk_0", function() { return View_ɵk_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵk_Host_0", function() { return View_ɵk_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵkNgFactory", function() { return ɵkNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵl", function() { return RenderType_ɵl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵl_0", function() { return View_ɵl_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵl_Host_0", function() { return View_ɵl_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlNgFactory", function() { return ɵlNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵm", function() { return RenderType_ɵm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵm_0", function() { return View_ɵm_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵm_Host_0", function() { return View_ɵm_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵmNgFactory", function() { return ɵmNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵn", function() { return RenderType_ɵn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵn_0", function() { return View_ɵn_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵn_Host_0", function() { return View_ɵn_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵnNgFactory", function() { return ɵnNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵo", function() { return RenderType_ɵo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵo_0", function() { return View_ɵo_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵo_Host_0", function() { return View_ɵo_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵoNgFactory", function() { return ɵoNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵq", function() { return RenderType_ɵq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵq_0", function() { return View_ɵq_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵq_Host_0", function() { return View_ɵq_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵqNgFactory", function() { return ɵqNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵr", function() { return RenderType_ɵr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵr_0", function() { return View_ɵr_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵr_Host_0", function() { return View_ɵr_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵrNgFactory", function() { return ɵrNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵs", function() { return RenderType_ɵs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵs_0", function() { return View_ɵs_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵs_Host_0", function() { return View_ɵs_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵsNgFactory", function() { return ɵsNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵt", function() { return RenderType_ɵt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵt_0", function() { return View_ɵt_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵt_Host_0", function() { return View_ɵt_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵtNgFactory", function() { return ɵtNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵu", function() { return RenderType_ɵu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵu_0", function() { return View_ɵu_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵu_Host_0", function() { return View_ɵu_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵuNgFactory", function() { return ɵuNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵv", function() { return RenderType_ɵv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵv_0", function() { return View_ɵv_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵv_Host_0", function() { return View_ɵv_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵvNgFactory", function() { return ɵvNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵw", function() { return RenderType_ɵw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵw_0", function() { return View_ɵw_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵw_Host_0", function() { return View_ɵw_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵwNgFactory", function() { return ɵwNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵx", function() { return RenderType_ɵx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵx_0", function() { return View_ɵx_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵx_Host_0", function() { return View_ɵx_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵxNgFactory", function() { return ɵxNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @project-sunbird/discussions-ui-v8 */ "G1Em");
/* harmony import */ var _angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "CLta");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-material-dropdown */ "mB+Y");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ngx-chips/ngx-chips.ngfactory */ "e83u");











var DiscussionUiModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionUiModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], ɵaNgFactory, ɵgNgFactory, ɵmNgFactory, ɵhNgFactory, ɵnNgFactory, ɵjNgFactory, ɵfNgFactory, ɵkNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, "CsModule", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["provideCsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], "CsModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionEventsService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionEventsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionEventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_8__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_8__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbe"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionUiModule"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionUiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () { return [[{ path: "", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵa"], children: [{ path: "", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"] }, { path: "all-discussions", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵm"] }, { path: "categories", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"] }, { path: "tags", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵh"] }, { path: "tags/tag-discussions", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵn"] }, { path: "my-discussion", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵj"] }, { path: "category/:slug", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵf"] }, { path: "topic/:topicId/:slug", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵk"] }] }]]; }, [])]); });

var ɵdNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵd"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], "CsModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_8__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_8__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"], false, [])]); });

var ɵpNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵp"], [])]); });

var ɵyNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵy"], [])]); });

var ɵbeNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbe"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], ɵaNgFactory, ɵgNgFactory, ɵmNgFactory, ɵhNgFactory, ɵnNgFactory, ɵjNgFactory, ɵfNgFactory, ɵkNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbe"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () { return [[{ path: "", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵa"], children: [{ path: "", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"] }, { path: "all-discussions", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵm"] }, { path: "categories", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"] }, { path: "tags", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵh"] }, { path: "tags/tag-discussions", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵn"] }, { path: "my-discussion", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵj"] }, { path: "category/:slug", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵf"] }, { path: "topic/:topicId/:slug", pathMatch: "full", component: _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵk"] }] }]]; }, [])]); });

var styles_CategoryWidgetComponent = [".widget-container[_ngcontent-%COMP%]{display:flex;width:100%}"];
var RenderType_CategoryWidgetComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoryWidgetComponent, data: {} });

function View_CategoryWidgetComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "widget-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-discuss-all", [], null, null, null, View_ɵm_0, RenderType_ɵm)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵm"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], { context: [0, "context"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.context; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CategoryWidgetComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sb-category-widget", [], null, null, null, View_CategoryWidgetComponent_0, RenderType_CategoryWidgetComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["CategoryWidgetComponent"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["EventsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoryWidgetComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sb-category-widget", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["CategoryWidgetComponent"], View_CategoryWidgetComponent_Host_0, { config: "config" }, {}, []);

var styles_BaseWrapperComponent = [""];
var RenderType_BaseWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_BaseWrapperComponent, data: {} });

function View_BaseWrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["base-wrapper works!"]))], null, null); }
function View_BaseWrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "sb-base-wrapper", [], null, null, null, View_BaseWrapperComponent_0, RenderType_BaseWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["WrapperNavigateService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["EventsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["BaseWrapperComponent"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var BaseWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sb-base-wrapper", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["BaseWrapperComponent"], View_BaseWrapperComponent_Host_0, { config: "config" }, {}, []);

var styles_TagsWidgetComponent = [""];
var RenderType_TagsWidgetComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_TagsWidgetComponent, data: {} });

function View_TagsWidgetComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-tags", [], null, null, null, View_ɵh_0, RenderType_ɵh)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵh"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TagsWidgetComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TagsWidgetComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.state === _co.tags); _ck(_v, 2, 0, currVal_0); }, null); }
function View_TagsWidgetComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sb-tags-widget", [], null, null, null, View_TagsWidgetComponent_0, RenderType_TagsWidgetComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["TagsWidgetComponent"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["EventsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TagsWidgetComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sb-tags-widget", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["TagsWidgetComponent"], View_TagsWidgetComponent_Host_0, { config: "config" }, {}, []);

var styles_ɵa = [":root{--df-header-bg:var(--df-common-bg)}.df-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--df-header-bg);margin-bottom:1rem}.df-header[_ngcontent-%COMP%]   .df-back-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.df-header[_ngcontent-%COMP%]   .df-back-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1rem;height:1rem;margin-right:.25rem;filter:invert(1)}.df-header[_ngcontent-%COMP%]   .df-close-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:.5rem;height:.5rem;margin-left:.25rem;filter:invert(1)}.discussion-forum-content[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 4fr;grid-template-columns:1fr 4fr;grid-gap:1.5rem}@media (max-width:768px){.discussion-forum-content[_ngcontent-%COMP%]{-ms-grid-columns:1fr;grid-template-columns:1fr}}.ui.container[_ngcontent-%COMP%]{display:block;max-width:100%!important}@media only screen and (max-width:767px){.ui.container[_ngcontent-%COMP%]{width:auto!important;margin-left:1em!important;margin-right:1em!important}}@media only screen and (max-width:1800px) and (min-width:768px){.ui.container[_ngcontent-%COMP%]{width:90%;margin-left:auto!important;margin-right:auto!important}}"];
var RenderType_ɵa = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵa, data: {} });

function View_ɵa_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-load-alert", [], null, [[null, "exit"], [null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("exit" === en)) {
        var pd_0 = (_co.close($event) !== false);
        ad = (pd_0 && ad);
    } if (("close" === en)) {
        var pd_1 = (_co.closeLoadAlert() !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_ɵx_0, RenderType_ɵx)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵx"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], null, { close: "close", exit: "exit" })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵa_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "sbt-inside-page-container ui container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "df-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "button", [["autofocus", ""], ["class", "df-btn df-btn-normal df-btn-primary df-back-btn"], ["role", "button"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "back icon"], ["src", "./assets/discussion-ui/images/back-img.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "button", [["autofocus", ""], ["class", "df-btn df-btn-normal df-btn-danger df-close-btn"], ["id", "close-discussion-forum"], ["tabindex", "0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Close "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "close icon"], ["src", "./assets/discussion-ui/images/close.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 6, "div", [["class", "discussion-forum-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "discuss-left-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "lib-side-pannel", [], null, null, null, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "div", [["class", "discuss-right-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 16777216, null, null, 1, "router-outlet", [], null, [[null, "activate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("activate" === en)) {
        var pd_0 = (_co.onScrollTopActive($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, { activateEvents: "activate" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 11, 0); _ck(_v, 14, 0); var currVal_0 = _co.showLoaderAlert; _ck(_v, 16, 0, currVal_0); }, null); }
function View_ɵa_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-lib-entry", [["class", "flex-1 main_discuss_lib"]], null, null, null, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionEventsService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵaNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-lib-entry", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵa"], View_ɵa_Host_0, {}, {}, []);

var styles_ɵe = [":root{--df-sidebar-menu-text:var(--gray-600);--df-sidebar-menu-active-text:var(--primary);--df-sidebar-menu-bl:var(--primary);--df-sidebar-menu-active-bg:var(--df-common-bg);--open-btn-bg:var(--white);--open-btn-color:var(--gray-800);--df-overlay-sidebar-bg:var(--black);--df-overlay-sidebar-bg-menu:#f5f6fa}.sb-sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.df-sidebar-menu-list[_ngcontent-%COMP%]{margin-bottom:.5rem;padding:.75rem 1rem;font-size:14px;color:var(--df-sidebar-menu-text);border-left:.125rem solid transparent;cursor:pointer}.df-sidebar-menu-list.menu-active[_ngcontent-%COMP%], .df-sidebar-menu-list[_ngcontent-%COMP%]:hover{background-color:var(--df-sidebar-menu-active-bg);font-weight:700;border-left:.1875rem solid var(--df-sidebar-menu-bl);color:var(--df-sidebar-menu-active-text);border-bottom:0}.sb-sidebar-menu-mob[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.open-btn[_ngcontent-%COMP%], .overlay-sidebar[_ngcontent-%COMP%]{display:none}@media (max-width:768px){.sb-sidebar-menu[_ngcontent-%COMP%]{display:none}.open-btn[_ngcontent-%COMP%]{display:inline;border:none;cursor:pointer;height:2.5rem;width:2.5rem;border-radius:1rem;font-size:1.375rem;background-color:var(--open-btn-bg);box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:var(--open-btn-color)}.overlay-sidebar[_ngcontent-%COMP%]{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu[_ngcontent-%COMP%]{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:var(--df-overlay-sidebar-bg-menu);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.overlay-sidebar__menu[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.overlay-sidebar__menu__content[_ngcontent-%COMP%]{padding:0 1rem;height:100%}}"];
var RenderType_ɵe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵe, data: {} });

function View_ɵe_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "df-sidebar-menu-list"], ["id", "d.route"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigate(_v.context.$implicit.route, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "menu-active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "df-sidebar-menu-list"; var currVal_1 = _ck(_v, 2, 0, _co.isActive(_v.context.$implicit.route)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 4, 0, currVal_2); }); }
function View_ɵe_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "sb-sidebar-menu pl-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menu; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵe_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "df-sidebar-menu-list"], ["id", "d.route"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigate(_v.context.$implicit.route, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "menu-active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "df-sidebar-menu-list"; var currVal_1 = _ck(_v, 2, 0, _co.isActive(_v.context.$implicit.route)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 4, 0, currVal_2); }); }
function View_ɵe_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "overlay-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "overlay-sidebar__menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "a", [["class", "close-btn"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeNav() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "div", [["class", "overlay-sidebar__menu__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "ul", [["class", "sb-sidebar-menu-mob pl-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menu; _ck(_v, 7, 0, currVal_0); }, null); }
function View_ɵe_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "button", [["class", "open-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showMenuButton() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u2630"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hideSidePanel; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.showSideMenu; _ck(_v, 5, 0, currVal_1); }, null); }
function View_ɵe_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-side-pannel", [], null, null, null, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵeNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-side-pannel", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵe"], View_ɵe_Host_0, {}, {}, []);

var styles_ɵf = [".df-start-btn[_ngcontent-%COMP%]{margin-bottom:1rem}"];
var RenderType_ɵf = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵf, data: {} });

function View_ɵf_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "df-btn df-btn-normal df-btn-primary df-start-btn"], ["data-backdrop", "static"], ["data-keyboard", "false"], ["data-target", "#myModal"], ["data-toggle", "modal"], ["id", "start-discussion"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.startDiscussion();
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Start Discussion"]))], null, null); }
function View_ɵf_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["id", "topic-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.navigateToDiscussionDetails(_v.context.$implicit);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-discuss-card", [], null, null, null, View_ɵs_0, RenderType_ɵs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], [], { discussionData: [0, "discussionData"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵf_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["scrollContainerHeight", 1]], null, 4, "div", [["class", "topic-list-container"], ["id", "topic-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "infinite-scroll"], ["infinite-scroll", ""]], null, [[null, "scrolled"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scrolled" === en)) {
        var pd_0 = (_co.onModalScrollDown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4866048, null, 0, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], { infiniteScrollDistance: [0, "infiniteScrollDistance"], infiniteScrollThrottle: [1, "infiniteScrollThrottle"], infiniteScrollContainer: [2, "infiniteScrollContainer"], scrollWindow: [3, "scrollWindow"], fromRoot: [4, "fromRoot"] }, { scrolled: "scrolled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.InfiniteScrollConfig.modalScrollDistance; var currVal_1 = _co.InfiniteScrollConfig.modalScrollThrottle; var currVal_2 = ".topic-list-container"; var currVal_3 = false; var currVal_4 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.discussionList; _ck(_v, 4, 0, currVal_5); }, null); }
function View_ɵf_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "no-card-content"], ["id", "topic-card"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "no-data-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0"]))], null, null); }
function View_ɵf_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵf_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-start", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], { categoryId: [0, "categoryId"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categoryId; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵf_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { elementView: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isTopicCreator; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 4, 0, currVal_1); var currVal_2 = !(_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.showLoader; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.showStartDiscussionModal; _ck(_v, 10, 0, currVal_4); }, null); }
function View_ɵf_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-home", [], null, null, null, View_ɵf_0, RenderType_ɵf)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 8503296, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵf"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵfNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-home", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵf"], View_ɵf_Host_0, { categoryId: "categoryId", categoryHomeAction: "categoryHomeAction" }, { stateChange: "stateChange" }, []);

var styles_ɵg = [".discuss-category-cards[_ngcontent-%COMP%]{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(292px,1fr));grid-gap:1.5rem;margin-bottom:1.5rem;cursor:pointer;position:relative;z-index:unset}@media (max-width:700px){.discuss-category-cards[_ngcontent-%COMP%]{-ms-grid-columns:1fr;grid-template-columns:1fr}}"];
var RenderType_ɵg = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵg, data: {} });

function View_ɵg_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵg_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "categories-card-content"], ["id", "category-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.navigateToDiscussionPage(((_v.context.$implicit == null) ? null : _v.context.$implicit.cid), ((_v.context.$implicit == null) ? null : _v.context.$implicit.slug));
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "lib-category-card", [], null, null, null, View_ɵr_0, RenderType_ɵr)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵr"], [], { category: [0, "category"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ɵg_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-start", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], { categoryId: [0, "categoryId"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categoryId; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵg_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵg_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [["class", "discuss-category-cards"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵg_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵg_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showLoader; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.categories; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.showStartDiscussionModal; _ck(_v, 6, 0, currVal_2); }, null); }
function View_ɵg_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-category", [], null, null, null, View_ɵg_0, RenderType_ɵg)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵgNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-category", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵg"], View_ɵg_Host_0, { categoryIds: "categoryIds", categoryAction: "categoryAction" }, { stateChange: "stateChange" }, []);

var styles_ɵh = [":root{--df-tag-empty-bg:var(--df-common-bg)}.sb-search-box[_ngcontent-%COMP%]{display:flex;align-items:center;border:0}.sb-search-box[_ngcontent-%COMP%]   .sb-search-input[_ngcontent-%COMP%]{width:100%;font-size:.875rem;min-height:2rem;outline:0;border-radius:.25rem;line-height:normal;background:0 0;padding:1em;border:0}.search-icon[_ngcontent-%COMP%]{width:1.125rem;height:1.125rem;margin:1rem 0 1rem 1rem}.sb-search-box[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]{border-radius:1.5rem;background:var(--white);display:flex;align-items:center;border:.0625rem solid var(--gray-100);width:100%}.sb-search-box[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]:hover{border-color:var(--primary)}.tag[_ngcontent-%COMP%]{cursor:pointer}@media (max-width:768px){.discuss-tags[_ngcontent-%COMP%]{flex-direction:column}}.tag-empty-container[_ngcontent-%COMP%]{background:var(--white);background:var(--df-tag-empty-bg);color:var(--df-text);display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:.25rem;height:100%;min-height:28.125rem}.tag-empty-container[_ngcontent-%COMP%]   .tag-empty-img[_ngcontent-%COMP%]{width:100%;max-width:13.875rem}.tag-empty-container[_ngcontent-%COMP%]   .tag-empty-label[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;margin:1.5rem 0 .75rem;color:var(--black)!important}.tag-empty-container[_ngcontent-%COMP%]   .tag-empty-text[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;text-align:center;color:var(--black)!important}"];
var RenderType_ɵh = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵh, data: {} });

function View_ɵh_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵh_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "tag"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllDiscussions(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "margin-left-m"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "ws-mat-default-text count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getBgColor(_v.context.$implicit.value); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.value; _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.score; _ck(_v, 5, 0, currVal_2); }); }
function View_ɵh_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵh_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.filteredTags; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ɵh_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "tag-empty-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "tag-empty-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "empty image"], ["src", "./assets/discussion-ui/images/empty.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "label", [["class", "tag-empty-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No tags Available !"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "p", [["class", "tag-empty-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Stay tuned ! we will be updating our tags library and add them here"]))], null, null); }
function View_ɵh_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵh_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [["class", "flex flex-1 margin-top-m flex-column discussion-tag-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵh_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\u200B\n\u200B\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵh_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showLoader; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.filteredTags && (_co.filteredTags.length > 0)); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.showLoader && !_co.filteredTags.length); _ck(_v, 7, 0, currVal_2); }, null); }
function View_ɵh_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-tags", [], null, null, null, View_ɵh_0, RenderType_ɵh)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵh"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵhNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-tags", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵh"], View_ɵh_Host_0, {}, { stateChange: "stateChange" }, []);

var styles_ɵj = [":root{--df-box-text:var(--white);--df-profile-bg:var(--primary-400)}.profileCard[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:0;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;width:auto}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .profile-header-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;border-radius:.25rem;max-width:9.5rem;height:8.4375rem;border:.0625rem solid var(--gray-100);margin-right:1.5rem;background:var(--df-profile-bg);text-align:center}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .profile-header-image[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]{font-size:4rem;color:var(--df-box-text);text-transform:uppercase}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .profile-header-image[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%]{color:var(--white);font-size:1rem;line-height:.75rem;letter-spacing:.2625px;text-transform:uppercase}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .profile-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem;font-size:.875rem}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .my-discuss-topics[_ngcontent-%COMP%]{font-size:.875rem;margin:1rem 0;font-weight:600}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .my-discuss-topics__content[_ngcontent-%COMP%]{display:flex}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .my-discuss-topics__content[_ngcontent-%COMP%]   .my-discussion-label[_ngcontent-%COMP%]{margin:0 .5rem}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .my-discuss-topics__content[_ngcontent-%COMP%]   .my-discussion-label[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:var(--primary-300)}.profileCard[_ngcontent-%COMP%]   .profile-card-content[_ngcontent-%COMP%]   .my-discuss-topics__content[_ngcontent-%COMP%]   .post-count-area[_ngcontent-%COMP%]{margin-left:2rem}"];
var RenderType_ɵj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵj, data: {} });

function View_ɵj_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵj_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["id", "discuss-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.navigateToDiscussionDetails(_v.context.$implicit);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "lib-discuss-card", [], null, null, null, View_ɵs_0, RenderType_ɵs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], [], { discussionData: [0, "discussionData"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ɵj_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["scrollContainerHeight", 1]], null, 4, "div", [["class", "topic-list-container"], ["id", "topic-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "infinite-scroll"], ["infinite-scroll", ""]], null, [[null, "scrolled"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scrolled" === en)) {
        var pd_0 = (_co.onModalScrollDown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4866048, null, 0, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], { infiniteScrollDistance: [0, "infiniteScrollDistance"], infiniteScrollThrottle: [1, "infiniteScrollThrottle"], infiniteScrollContainer: [2, "infiniteScrollContainer"], scrollWindow: [3, "scrollWindow"], fromRoot: [4, "fromRoot"] }, { scrolled: "scrolled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.InfiniteScrollConfig.modalScrollDistance; var currVal_1 = _co.InfiniteScrollConfig.modalScrollThrottle; var currVal_2 = ".topic-list-container"; var currVal_3 = false; var currVal_4 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.discussionList; _ck(_v, 4, 0, currVal_5); }, null); }
function View_ɵj_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵj_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "no-card-content"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "no-data-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0"]))], null, null); }
function View_ɵj_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { elementView: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 26, "div", [["class", "profileCard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 25, "div", [["class", "profile-card-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "div", [["class", "profile-header-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "div", [["class", "box-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "span", [["class", "box-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 19, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "div", [["class", "profile-label name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "div", [["class", "profile-label department"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "div", [["class", "profile-label location"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "div", [["class", "profile-label email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 10, "div", [["class", "my-discuss-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 8, "div", [["class", "my-discuss-topics__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 3, "div", [["class", "my-discuss-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "span", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Discussions "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 3, "div", [["class", "post-count-area my-discuss-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "span", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Posts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 0, "div", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 23, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 22, "div", [["class", "recent-tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 21, "div", [["class", "tabs-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 20, "div", [["class", "tabs-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "recent-post"], ["role", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("timestamp", true);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](37, { "tabs-active": 0, "ws-mat-accent-border font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Recent posts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "best-post"], ["role", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("best", true);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](41, { "tabs-active": 0, "ws-mat-accent-border font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Best posts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "saved-post"], ["role", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("saved", true);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](45, { "tabs-active": 0, "ws-mat-accent-border font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Saved posts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "upvoted-post"], ["role", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("upvoted", true);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](49, { "tabs-active": 0, "ws-mat-accent-border font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Upvoted "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "downvoted-post"], ["role", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("downvoted", true);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](53, { "tabs-active": 0, "ws-mat-accent-border font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Downvoted "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showLoader; _ck(_v, 3, 0, currVal_0); var currVal_8 = "filter-option"; var currVal_9 = _ck(_v, 37, 0, (_co.currentFilter === "timestamp"), (_co.currentFilter !== "timestamp")); _ck(_v, 36, 0, currVal_8, currVal_9); var currVal_10 = "filter-option"; var currVal_11 = _ck(_v, 41, 0, (_co.currentFilter === "best"), (_co.currentFilter !== "best")); _ck(_v, 40, 0, currVal_10, currVal_11); var currVal_12 = "filter-option"; var currVal_13 = _ck(_v, 45, 0, (_co.currentFilter === "saved"), (_co.currentFilter !== "saved")); _ck(_v, 44, 0, currVal_12, currVal_13); var currVal_14 = "filter-option"; var currVal_15 = _ck(_v, 49, 0, (_co.currentFilter === "upvoted"), (_co.currentFilter !== "upvoted")); _ck(_v, 48, 0, currVal_14, currVal_15); var currVal_16 = "filter-option"; var currVal_17 = _ck(_v, 53, 0, (_co.currentFilter === "downvoted"), (_co.currentFilter !== "downvoted")); _ck(_v, 52, 0, currVal_16, currVal_17); var currVal_18 = (_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 56, 0, currVal_18); var currVal_19 = _co.showLoader; _ck(_v, 58, 0, currVal_19); var currVal_20 = !(_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 60, 0, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), ((_co.data == null) ? null : _co.data.username))); _ck(_v, 9, 0, currVal_1); var currVal_2 = ((_co.data == null) ? null : _co.data.username); _ck(_v, 12, 0, currVal_2); var currVal_3 = _co.department; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co.location; _ck(_v, 16, 0, currVal_4); var currVal_5 = (((_co.data == null) ? null : _co.data.email) || ((_co.data == null) ? null : _co.data.username)); _ck(_v, 18, 0, currVal_5); var currVal_6 = (((_co.data == null) ? null : _co.data.topiccount) || 0); _ck(_v, 24, 0, currVal_6); var currVal_7 = (((_co.data == null) ? null : _co.data.postcount) || 0); _ck(_v, 28, 0, currVal_7); }); }
function View_ɵj_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-my-discussion", [], null, null, null, View_ɵj_0, RenderType_ɵj)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 8503296, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵj"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵjNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-my-discussion", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵj"], View_ɵj_Host_0, {}, {}, []);

var styles_ɵk = [".discuss-details-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.discussion-details[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:3;height:auto;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:.875rem 1rem;justify-content:space-between;z-index:unset;margin-bottom:1rem}.related-discuss-part[_ngcontent-%COMP%]{padding:0 0 1rem 1.5rem;position:relative;z-index:2}.related-discuss-part[_ngcontent-%COMP%]   .related-discuss-part-content[_ngcontent-%COMP%]{padding:0 .25rem}.discussion-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700}.discussion-heading[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;pointer-events:none;margin-bottom:0;margin-top:.5rem}.discussion-content[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.875rem;flex-wrap:wrap;margin-bottom:0;margin-top:1rem}.comment-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:.5rem 0;flex-direction:row;flex-wrap:wrap}.post-header-content[_ngcontent-%COMP%]{display:flex;align-items:center}.circle-text[_ngcontent-%COMP%]{border-radius:50%;width:1.75rem;height:1.75rem;display:flex;justify-content:center;align-items:center;background-color:#306933}.circle-label[_ngcontent-%COMP%]{color:var(--white);font-size:1rem;line-height:.75rem;letter-spacing:.2625px;text-transform:uppercase}.discussion-labels[_ngcontent-%COMP%]{color:var(--gray-400);margin-left:.5rem;font-size:00.875rem}.comments-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-weight:700;flex-direction:row;font-size:.875rem;margin:1rem 0}.text-form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column}.text-content[_ngcontent-%COMP%]{min-height:6.75rem;max-height:33.75rem;margin-bottom:.875rem;background-color:var(--df-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;cursor:pointer;outline:0;padding:.5rem .875rem}.text-content.is-invalid[_ngcontent-%COMP%], .text-content.is-invalid[_ngcontent-%COMP%]:focus, .text-content.is-invalid[_ngcontent-%COMP%]:hover{border:.0625rem solid var(--red-100)}.text-content.is-valid[_ngcontent-%COMP%], .text-content.is-valid[_ngcontent-%COMP%]:focus, .text-content.is-valid[_ngcontent-%COMP%]:hover{border:.0625rem solid var(--primary-400)}.down-vote-text[_ngcontent-%COMP%], .up-vote-text[_ngcontent-%COMP%]{font-size:1rem;color:var(--black);margin-right:.5rem}.post-card[_ngcontent-%COMP%], .post-reply-card[_ngcontent-%COMP%]{border-bottom:.0625rem solid var(--gray-100);margin-bottom:1.5rem}.post-sub-card[_ngcontent-%COMP%]{margin:0 .5rem .5rem;border:0}.comments-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.post-icons[_ngcontent-%COMP%]{margin-right:1rem}.post-name[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;margin-left:1rem;word-break:break-all;text-transform:capitalize}.post-time[_ngcontent-%COMP%]{color:var(var(--gray-400));margin:0 1rem;font-size:.875rem}.post-labels[_ngcontent-%COMP%]{font-size:.875rem;margin:0}.reply-area[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.reply-area-content[_ngcontent-%COMP%]{position:relative;margin-top:1rem}.margin-gap-tb[_ngcontent-%COMP%]{margin:1rem 0}.custom-actions[_ngcontent-%COMP%]{display:flex;align-items:center}.edit-post[_ngcontent-%COMP%]{margin-right:1.25rem}.border-0[_ngcontent-%COMP%]{border-bottom:0}.comments-count[_ngcontent-%COMP%]{color:var(--primary);font-weight:700;cursor:pointer}@media (max-width:768px){.discuss-details-content[_ngcontent-%COMP%]{flex-direction:column}.related-discuss-part[_ngcontent-%COMP%]{padding:0}.post-btn[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;cursor:pointer}.post-time[_ngcontent-%COMP%]{margin-top:.5rem;margin-left:0}.comment-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;margin-bottom:.5rem}}.df-btn-disabled[_ngcontent-%COMP%]{background-color:var(--gray-100)!important;color:var(--gray-200)!important}.df-reply-btn[_ngcontent-%COMP%]{margin-bottom:.5rem}.edited-text[_ngcontent-%COMP%]{padding-left:.5rem;margin-top:.25rem;font-size:.75rem;color:var(--gray-200)}.delete-icon[_ngcontent-%COMP%], .edit-icon[_ngcontent-%COMP%]{cursor:pointer;width:1rem;height:1rem;margin:0 .5rem}.discuss-card-kabab-menu[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.kabab-menu[_ngcontent-%COMP%]{color:var(--primary-400);width:1.875rem;height:1.875rem;line-height:1.75rem;text-align:center;border-radius:50%;padding-left:.5rem;position:absolute;right:.5rem}.kabab-menu[_ngcontent-%COMP%]:hover{background:var(--gray-0);cursor:pointer}.kabab-menu[_ngcontent-%COMP%]::after{content:'\\2807';font-size:1.5rem}.kabab-menu-dropdown-content[_ngcontent-%COMP%]{position:absolute;border-radius:.125rem;background-color:var(--white);box-shadow:0 3px 5px 4px rgba(var(--rc-rgba-black),.05);padding:.5rem;z-index:1;text-align:left;right:0;top:0;min-width:13.125rem}.kabab-menu-dropdown-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;cursor:pointer;font-size:.875rem;padding:.5rem}.kabab-menu-dropdown-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:active, .kabab-menu-dropdown-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:hover{background-color:var(--primary-100)}.kabab-menu-dropdown-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:last-child   .df-btn-normal[_ngcontent-%COMP%]{color:var(--red-400)}.kabab-menu-dropdown-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .df-btn-normal[_ngcontent-%COMP%]{font-size:.875rem}  html[dir=rtl] .kabab-menu-dropdown-content{right:auto;left:0}.vote-value[_ngcontent-%COMP%]{margin-left:.5rem}.icons[_ngcontent-%COMP%]{width:.875rem;height:.875rem;position:relative;cursor:pointer}.edit-text[_ngcontent-%COMP%]{display:flex}.last-reply-data[_ngcontent-%COMP%]{margin:1rem 0;font-size:.875rem}.reply-content[_ngcontent-%COMP%]{display:flex;align-items:center}.replies[_ngcontent-%COMP%]{width:100%}.replies-count[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;cursor:pointer}.toggle-icon[_ngcontent-%COMP%]{padding:0 1rem;cursor:pointer}"];
var RenderType_ɵk = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵk, data: {} });

function View_ɵk_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵk_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "div", [["class", "kabab-menu"], ["id", "group-actions"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onMenuClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "div", [["class", "kabab-menu-dropdown-content"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "list"], ["id", "edit-topic"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.editTopic($event, _co.data);
        var pd_0 = ((_co.editableTopicDetails = _co.data) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "list"], ["id", "delete-topic"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteTopic($event, _co.data) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Delete"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dropdownContent; _ck(_v, 2, 0, currVal_0); }); }
function View_ɵk_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "discussion-labels"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.user.fullname; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "discussion-labels"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.user.username; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "tag"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getBgColor(_v.context.$implicit.value); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }); }
function View_ɵk_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.data == null) ? null : _co.data.tags); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵk_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "upvote the post"], ["id", "up-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.upvote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "up arrow icon for like the post"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up-arrow.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "remove upvote"], ["id", "delete-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "up image"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up.svg"]], null, null, null, null, null))], null, null); }
function View_ɵk_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "downvote post"], ["id", "down-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.downvote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "down arrow icon for unlike post"], ["class", "icons"], ["src", "./assets/discussion-ui/images/down-arrow.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "remove down vote"], ["id", "delete-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "down image"], ["class", "icons"], ["src", "./assets/discussion-ui/images/down.svg"]], null, null, null, null, null))], null, null); }
function View_ɵk_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "Bookmark post"], ["id", "bookmark"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.bookmark(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "bookmark icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/bookmarks.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "unBookmark post"], ["id", "un-bookmark-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.unBookMark(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "select bookmark icon"], ["class", "icons bookmark-icon"], ["src", "./assets/discussion-ui/images/select-bookmarks.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "comments count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " comments "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.data == null) ? null : _co.data.postcount) - 1); _ck(_v, 1, 0, currVal_0); }); }
function View_ɵk_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "comments count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 0 comments"]))], null, null); }
function View_ɵk_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 47, "div", [["class", "post-reply-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "h3", [["class", "discussion-heading df-text-color"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 10, "div", [["class", "discussion-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "div", [["class", "circle-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [["class", "circle-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "div", [["class", "discussion-labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "div", [["aria-label", "tags"], ["class", "tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 29, "div", [["class", "comments-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 6, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "span", [["class", "vote-value"], ["role", "text"]], [[1, "aria-label", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 6, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "span", [["class", "vote-value"], ["role", "text"]], [[1, "aria-label", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 3, "span", [["class", "post-icons mobile"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 0, "img", [["alt", "views icon for seeing the posts"], ["class", "icons"], ["src", "./assets/discussion-ui/images/views.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "span", [["aria-label", "views count"], ["class", "vote-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](35, null, ["", " Views"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 4, "div", [["class", "comments-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "lib-post-reply", [], null, [[null, "actionEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("actionEvent" === en)) {
        _co.postReplyHandler($event, _v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵq_0, RenderType_ɵq)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵq"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]], { showCancel: [0, "showCancel"], mode: [1, "mode"] }, { actionEvent: "actionEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_3 = _v.parent.context.$implicit.user.fullname; _ck(_v, 10, 0, currVal_3); var currVal_4 = !_v.parent.context.$implicit.user.fullname; _ck(_v, 12, 0, currVal_4); var currVal_5 = ((_co.data && ((_co.data == null) ? null : _co.data.tags)) && (((_co.data == null) ? null : ((_co.data.tags == null) ? null : _co.data.tags.length)) > 0)); _ck(_v, 15, 0, currVal_5); var currVal_6 = !_v.parent.context.$implicit.upvoted; _ck(_v, 20, 0, currVal_6); var currVal_7 = _v.parent.context.$implicit.upvoted; _ck(_v, 22, 0, currVal_7); var currVal_10 = !((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.downvoted); _ck(_v, 27, 0, currVal_10); var currVal_11 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.downvoted); _ck(_v, 29, 0, currVal_11); var currVal_15 = !((_co.data == null) ? null : ((_co.data.posts[0] == null) ? null : _co.data.posts[0].bookmarked)); _ck(_v, 38, 0, currVal_15); var currVal_16 = ((_co.data == null) ? null : ((_co.data.posts[0] == null) ? null : _co.data.posts[0].bookmarked)); _ck(_v, 40, 0, currVal_16); var currVal_17 = ((((_co.data == null) ? null : _co.data.postcount) - 1) > 0); _ck(_v, 43, 0, currVal_17); var currVal_18 = ((((_co.data == null) ? null : _co.data.postcount) - 1) <= 0); _ck(_v, 45, 0, currVal_18); var currVal_19 = false; var currVal_20 = "reply"; _ck(_v, 47, 0, currVal_19, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.content); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.username)))); _ck(_v, 5, 0, currVal_1); var currVal_2 = "Asked by "; _ck(_v, 8, 0, currVal_2); var currVal_8 = ("total upvoat is" + ((_co.data == null) ? null : _co.data.upvotes)); _ck(_v, 23, 0, currVal_8); var currVal_9 = ((_co.data == null) ? null : _co.data.upvotes); _ck(_v, 24, 0, currVal_9); var currVal_12 = ("total upvoat is" + ((_co.data == null) ? null : _co.data.upvotes)); _ck(_v, 30, 0, currVal_12); var currVal_13 = ((_co.data == null) ? null : _co.data.downvotes); _ck(_v, 31, 0, currVal_13); var currVal_14 = _co.data.viewcount; _ck(_v, 35, 0, currVal_14); }); }
function View_ɵk_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.index) === 0); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵk_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "recent-tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "tabs-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["class", "tabs-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["id", "recent-post"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.filter("timestamp");
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](6, { "tabs-active": 0, "ws-mat-accent-border": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Recent "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "filter-option"; var currVal_1 = _ck(_v, 6, 0, (_co.currentFilter === "timestamp"), (_co.currentFilter !== "timestamp")); _ck(_v, 5, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "post-name"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ((_v.parent.parent.context.$implicit == null) ? null : ((_v.parent.parent.context.$implicit.user == null) ? null : _v.parent.parent.context.$implicit.user.fullname)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "post-name df-label-color"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ((_v.parent.parent.context.$implicit == null) ? null : ((_v.parent.parent.context.$implicit.user == null) ? null : _v.parent.parent.context.$implicit.user.username)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "edit icon"], ["class", "edit-icon"], ["id", "edit-post"], ["src", "./assets/discussion-ui/images/edit.svg"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getRealtimePost(_v.parent.parent.context.$implicit, _v.parent.parent.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "delete icon"], ["class", "delete-icon"], ["id", "delete-post"], ["src", "./assets/discussion-ui/images/delete.svg"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.confirmDelete(((_v.parent.parent.context.$implicit == null) ? null : _v.parent.parent.context.$implicit.pid)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ɵk_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "edited-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["(edited)"]))], null, null); }
function View_ɵk_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "edit-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "p", [["class", "post-labels df-text-color"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_25)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = ((_v.parent.parent.context.$implicit == null) ? null : _v.parent.parent.context.$implicit.edited); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.parent.parent.context.$implicit == null) ? null : _v.parent.parent.context.$implicit.content); _ck(_v, 1, 0, currVal_0); }); }
function View_ɵk_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-post-reply", [], null, [[null, "actionEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("actionEvent" === en)) {
        var pd_0 = (_co.editReplyHandler($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵq_0, RenderType_ɵq)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵq"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]], { showCancel: [0, "showCancel"], mode: [1, "mode"], content: [2, "content"] }, { actionEvent: "actionEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = "edit"; var currVal_2 = _co.contentPost; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ɵk_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "upvote comment"], ["class", "up-vote-text"], ["id", "up-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.upvote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "up icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up.svg"]], null, null, null, null, null))], null, null); }
function View_ɵk_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "delete upvote on comment"], ["class", "down-vote-text"], ["id", "delete-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "up icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up.svg"]], null, null, null, null, null))], null, null); }
function View_ɵk_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "downvote comment"], ["id", "down-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.downvote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "down arrow icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/down-arrow.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "delete downvote on comment"], ["id", "delete-vote"], ["role", "link"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "down icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/down.svg"]], null, null, null, null, null))], null, null); }
function View_ɵk_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "replies"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 2, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { post: 0 })], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.parent.parent.context.$implicit); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent, 8); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "reply toggle upwards"], ["class", "toggle-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "up chevron icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up-chevron.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["aria-label", "reply toggle"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_34)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.parent.parent.parent.context.$implicit == null) ? null : _v.parent.parent.parent.context.$implicit.replyCountToggle); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵk_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-label", "reply toggle downwards"], ["class", "toggle-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "down chevron icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/down-chevron.png"]], null, null, null, null, null))], null, null); }
function View_ɵk_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["aria-label", "reply toggle"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_36)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = !_v.parent.parent.parent.context.$implicit.replyCountToggle; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵk_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["Last reply ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent.parent, 2), ((_v.parent.parent.parent.context.$implicit == null) ? null : ((_v.parent.parent.parent.context.$implicit.replies == null) ? null : _v.parent.parent.parent.context.$implicit.replies.timestampISO)), "dd MMM yyyy hh:mm a")); _ck(_v, 1, 0, currVal_0); }); }
function View_ɵk_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "replies"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 2, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { posts: 0, postId: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.data.posts, _v.parent.parent.parent.context.$implicit.pid); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent.parent, 9); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "div", [["class", "reply-content"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = ((_v.parent.parent.context.$implicit.replyCountToggle = !_v.parent.parent.context.$implicit.replyCountToggle) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "replies-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" ", " reply(s) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_33)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_35)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "div", [["class", "last-reply-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_37)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_38)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_1 = ((_v.parent.parent.context.$implicit == null) ? null : _v.parent.parent.context.$implicit.replyCountToggle); _ck(_v, 7, 0, currVal_1); var currVal_2 = !_v.parent.parent.context.$implicit.replyCountToggle; _ck(_v, 9, 0, currVal_2); var currVal_3 = !_v.parent.parent.context.$implicit.replyCountToggle; _ck(_v, 12, 0, currVal_3); var currVal_4 = ((_v.parent.parent.context.$implicit == null) ? null : _v.parent.parent.context.$implicit.replyCountToggle); _ck(_v, 14, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = ((_v.parent.parent.context.$implicit == null) ? null : ((_v.parent.parent.context.$implicit.replies == null) ? null : _v.parent.parent.context.$implicit.replies.count)); _ck(_v, 5, 0, currVal_0); }); }
function View_ɵk_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 45, "div", [["class", "post-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 15, "div", [["class", "comment-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "div", [["class", "post-header-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "span", [["class", "circle-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "span", [["class", "circle-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 5, "div", [["class", "custom-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "span", [["class", "post-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](14, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_23)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 28, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_24)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_26)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 19, "div", [["class", "reply-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "span", [["class", "flex mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_27)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_28)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "span", [["class", "vote-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 2, "span", [["class", "flex mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_29)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 4, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_30)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "span", [["class", "vote-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](39, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "button", [["class", "df-btn df-btn-normal df-btn-primary df-reply-btn"], ["id", "reply-comment"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.togglePost(_v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Reply "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_31)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_32)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.fullname)); _ck(_v, 8, 0, currVal_1); var currVal_2 = !((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.fullname)); _ck(_v, 10, 0, currVal_2); var currVal_4 = (_co.mainUid === ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.uid)); _ck(_v, 16, 0, currVal_4); var currVal_5 = (!_co.editMode || (_co.editContentIndex !== _v.parent.context.index)); _ck(_v, 19, 0, currVal_5); var currVal_6 = (_co.editMode && (_co.editContentIndex === _v.parent.context.index)); _ck(_v, 21, 0, currVal_6); var currVal_7 = !((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.upvoted); _ck(_v, 26, 0, currVal_7); var currVal_8 = _v.parent.context.$implicit.upvoted; _ck(_v, 29, 0, currVal_8); var currVal_10 = !((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.downvoted); _ck(_v, 34, 0, currVal_10); var currVal_11 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.downvoted); _ck(_v, 37, 0, currVal_11); var currVal_13 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.toggle); _ck(_v, 43, 0, currVal_13); var currVal_14 = (((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.replies == null) ? null : _v.parent.context.$implicit.replies.count)) > 0); _ck(_v, 45, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.username)))); _ck(_v, 5, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2), ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.timestamp), "dd MMM yyyy hh:mm a")); _ck(_v, 13, 0, currVal_3); var currVal_9 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.upvotes); _ck(_v, 31, 0, currVal_9); var currVal_12 = ((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.downvotes); _ck(_v, 39, 0, currVal_12); }); }
function View_ɵk_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_ɵk_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_39)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.index) != 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.$implicit.index != 0); _ck(_v, 4, 0, currVal_1); }, null); }
function View_ɵk_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "related-discuss-part-content"]], null, null, null, null, null))], null, null); }
function View_ɵk_41(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-related-discussion", [], null, null, null, View_ɵv_0, RenderType_ɵv)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵv"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], { catId: [0, "catId"], topicId: [1, "topicId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categoryId; var currVal_1 = _co.topicId; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 17, "div", [["class", "discuss-details-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "div", [["class", "discussion-details"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "discuss-card-kabab-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "h3", [["class", "discussion-card-title df-label-color"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵk_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](12, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 4, "div", [["class", "related-discuss-part"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_40)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_41)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (((_co.data == null) ? null : _co.data.uid) === _co.mainUid); _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_co.data == null) ? null : _co.data.posts); _ck(_v, 7, 0, currVal_2); var currVal_3 = (((_co.data == null) ? null : _co.data.posts) && (((_co.data == null) ? null : _co.data.postcount) > 1)); _ck(_v, 9, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 1), ((_co.data == null) ? null : _co.data.posts), "timestampISO", "desc")); _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.fetchSingleCategoryLoader; _ck(_v, 15, 0, currVal_5); var currVal_6 = !_co.fetchSingleCategoryLoader; _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.data == null) ? null : _co.data.title); _ck(_v, 3, 0, currVal_0); }); }
function View_ɵk_42(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-post-reply", [], null, [[null, "actionEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("actionEvent" === en)) {
        var pd_0 = (_co.commentReplyHandler($event, _v.context.post) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵq_0, RenderType_ɵq)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵq"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]], { showCancel: [0, "showCancel"], mode: [1, "mode"] }, { actionEvent: "actionEvent" })], function (_ck, _v) { var currVal_0 = true; var currVal_1 = "reply"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_45(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "post-name"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.fullname)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_46(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "df-label-color post-name"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.user == null) ? null : _v.parent.context.$implicit.user.username)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵk_47(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "up arrow icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up-arrow.png"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.upvote(_v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ɵk_48(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "select up arrow icon"], ["class", "icons"], ["src", "./assets/discussion-ui/images/up.svg"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ɵk_49(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "down arrow icon"], ["class", "icons"], ["id", "up-vote"], ["src", "./assets/discussion-ui/images/down-arrow.png"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.downvote(_v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ɵk_50(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "select down arrow icon"], ["class", "icons"], ["id", "delete-vote"], ["src", "./assets/discussion-ui/images/down.svg"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteVote(_v.parent.context.$implicit);
        var pd_0 = (_co.logTelemetry($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ɵk_44(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 32, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 31, "div", [["class", "post-sub-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 12, "div", [["class", "comment-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "div", [["class", "post-header-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "div", [["class", "circle-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "circle-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_45)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_46)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "div", [["class", "post-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "p", [["role", "link"], ["tabindex", "0"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 15, "div", [["class", "reply-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 14, "div", [["class", "reply-area-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 6, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_47)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_48)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "span", [["class", "vote-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 6, "span", [["class", "post-icons mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_49)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_50)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "span", [["class", "vote-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](32, null, ["", ""]))], function (_ck, _v) { var currVal_1 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.user == null) ? null : _v.context.$implicit.user.fullname)); _ck(_v, 9, 0, currVal_1); var currVal_2 = !((_v.context.$implicit == null) ? null : ((_v.context.$implicit.user == null) ? null : _v.context.$implicit.user.fullname)); _ck(_v, 11, 0, currVal_2); var currVal_5 = !((_v.context.$implicit == null) ? null : _v.context.$implicit.upvoted); _ck(_v, 21, 0, currVal_5); var currVal_6 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.upvoted); _ck(_v, 23, 0, currVal_6); var currVal_8 = !((_v.context.$implicit == null) ? null : _v.context.$implicit.downvoted); _ck(_v, 28, 0, currVal_8); var currVal_9 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.downvoted); _ck(_v, 30, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.user == null) ? null : _v.context.$implicit.user.username)))); _ck(_v, 6, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2), ((_v.context.$implicit == null) ? null : _v.context.$implicit.timestamp))); _ck(_v, 13, 0, currVal_3); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.content); _ck(_v, 16, 0, currVal_4); var currVal_7 = _v.context.$implicit.upvotes; _ck(_v, 25, 0, currVal_7); var currVal_10 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.downvotes); _ck(_v, 32, 0, currVal_10); }); }
function View_ɵk_43(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵk_44)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 3), _v.context.posts, "toPid", _v.context.postId)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵk_51(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-start", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], { topicData: [0, "topicData"], mode: [1, "mode"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.editableTopicDetails; var currVal_1 = "edit"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵba"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵz"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["reply", 2]], null, 0, null, View_ɵk_42)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["replies", 2]], null, 0, null, View_ɵk_43)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, [["toastSuccess", 1]], null, 0, "input", [["aria-value", "Thank you for voting!"], ["i18-aria-value", ""], ["i18-value", ""], ["type", "hidden"], ["value", "Thank you for voting!!"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, [["toastError", 1]], null, 0, "input", [["aria-value", "Something went wrong, please try again later!"], ["i18-aria-value", ""], ["i18-value", ""], ["type", "hidden"], ["value", "Something went wrong, please try again later!"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_51)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.showLoader; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.showLoader; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.showEditTopicModal; _ck(_v, 13, 0, currVal_2); }, null); }
function View_ɵk_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discussion-details", [], null, null, null, View_ɵk_0, RenderType_ɵk)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵk"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵkNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discussion-details", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵk"], View_ɵk_Host_0, { topicId: "topicId", slug: "slug", widget: "widget" }, { stateChange: "stateChange" }, []);

var styles_ɵl = [":root{--df-modal-content-bg:var(--df-common-bg);--df-modal-field-control-bg:var(--df-background);--df-tag-bg:var(--df-e9e8d9);--df-ng-tag-bg:var(--df-background)}.discussion-start-modal[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .1s ease-in;pointer-events:auto}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]{max-width:50rem;width:90%;margin:0 auto;padding:1rem;border-radius:.1875rem;background:var(--df-modal-content-bg);color:var(--df-text);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:auto;max-height:calc(100% - 156px)}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-content[_ngcontent-%COMP%]{margin-bottom:.5rem}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:.5rem;font-size:.8125rem;font-weight:700}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-field[_ngcontent-%COMP%]{position:relative;margin-bottom:0}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-field[_ngcontent-%COMP%]   .select-category[_ngcontent-%COMP%]{border:.0625rem solid var(--gray-200);color:var(--df-text);margin:0 .5rem;padding:.5rem .25rem;background:var(--df-field-control-bg)}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-field[_ngcontent-%COMP%]   .start-form-field-control[_ngcontent-%COMP%]{background-color:var(--df-modal-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;width:96%;cursor:pointer;outline:0;padding:.5rem .875rem}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-field[_ngcontent-%COMP%]   .start-form-field-control[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-form-field[_ngcontent-%COMP%]   .start-form-field-control[_ngcontent-%COMP%]:focus{border-color:var(--primary-400)!important}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .mandatory-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--red-100)}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-modal-buttons[_ngcontent-%COMP%]{float:right}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-modal-buttons[_ngcontent-%COMP%]   .df-submit-btn[_ngcontent-%COMP%], .discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-modal-buttons[_ngcontent-%COMP%]   .df-update-btn[_ngcontent-%COMP%]{margin-left:.5rem}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-modal-buttons[_ngcontent-%COMP%]   .df-cancel-btn[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border:0;margin:0 .5rem}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-modal-buttons[_ngcontent-%COMP%]   .df-btn-disabled[_ngcontent-%COMP%]{background-color:var(--gray-100)}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-tags[_ngcontent-%COMP%]{margin-bottom:1.5rem}.discussion-start-modal[_ngcontent-%COMP%]   .discussion-start-modal-content[_ngcontent-%COMP%]   .discussion-start-form[_ngcontent-%COMP%]   .start-tags[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;font-size:.8125rem;font-weight:700;margin-bottom:0}#myModal[_ngcontent-%COMP%]{display:block;opacity:2!important}  .ng2-tag-input{border:.0625rem solid!important;border-radius:.1875rem;color:var(--df-text)!important;display:block;font-size:.8125rem!important;max-width:100%;padding:.25rem .5rem;margin:.5rem 0;background:var(--df-field-control-bg);border-bottom:.0625rem solid!important}  .ng2-tag-input--focused{border-color:var(--primary-400)!important}  .ng2-tag-input__text-input{height:2.25rem;margin:0 .5rem;color:var(--df-text);background:var(--df-ng-tag-bg)}  .ng2-tag-input.active{border-color:var(--primary-400)!important}  tag{background:var(--df-tag-bg)!important;color:var(--df-text)!important}  tag:first-child{margin-left:.5rem!important}"];
var RenderType_ɵl = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵl, data: {} });

function View_ɵl_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "option", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit.cid; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.cid; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵl_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "mandatory-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" category is mandatory"]))], null, null); }
function View_ɵl_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "start-form-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "is-invalid": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "label", [["class", "start-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select category*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 12, "div", [["class", "start-form-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "label", [["class", "start-form-label"], ["for", "myList"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select list "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, [["category", 1]], null, 9, "select", [["class", "select-category"], ["formControlName", "category"], ["id", "myList"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "start-form-content"; var currVal_1 = _ck(_v, 2, 0, _co.showError("subTitle")); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_10 = true; _ck(_v, 10, 0, currVal_10); var currVal_11 = "category"; _ck(_v, 13, 0, currVal_11); var currVal_12 = _co.allCategories; _ck(_v, 17, 0, currVal_12); var currVal_13 = !_co.startForm.get("category").valid; _ck(_v, 19, 0, currVal_13); }, function (_ck, _v) { var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).required ? "" : null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_ɵl_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "mandatory-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Question is mandatory. It should be minimum of 8 characters"]))], null, null); }
function View_ɵl_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "mandatory-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Description is mandatory. It should be minimum of 8 characters "]))], null, null); }
function View_ɵl_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_ɵl_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "small", [["class", "mandatory-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.createErrorMsg; _ck(_v, 2, 0, currVal_0); }); }
function View_ɵl_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
function View_ɵl_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "df-btn df-btn-normal df-btn-primary df-submit-btn"], ["id", "submit-discussion-start-form"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.submitPost(_co.startForm);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "df-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Submit"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "df-btn df-btn-normal df-btn-primary df-submit-btn"; var currVal_2 = _ck(_v, 2, 0, !_co.enableSubmitButton); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.enableSubmitButton; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵl_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "df-btn df-btn-normal df-btn-primary df-update-btn"], ["id", "update-topic-popup"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.updatePost(_co.startForm);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "df-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "df-btn df-btn-normal df-btn-primary df-update-btn"; var currVal_2 = _ck(_v, 2, 0, !_co.enableSubmitButton); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.enableSubmitButton; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵl_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 73, "div", [["class", "modal fade"], ["id", "myModal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 72, "div", [["class", "discussion-start-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 71, "div", [["class", "discussion-start-modal-content"], ["id", "topic-scroll"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 67, "form", [["class", "discussion-start-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 17, "div", [["class", "start-form-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](12, { "is-invalid": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "label", [["class", "start-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Discussion topic*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 10, "div", [["class", "start-form-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, [["question", 1]], null, 9, "input", [["class", "start-form-field-control"], ["formControlName", "question"], ["maxlength", "1000"], ["placeholder", "Type here (minimum 8 characters)"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](18, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 15, "div", [["class", "start-form-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 12, "div", [["class", "start-form-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "label", [["class", "start-form-label"], ["for", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Please elaborate your question or idea here*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, [["description", 1]], null, 9, "textarea", [["class", "start-form-field-control"], ["formControlName", "description"], ["id", "description"], ["minlength", "8"], ["name", "moretext"], ["placeholder", "Type here (minimum 8 characters)"], ["rows", "8"]], [[1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](34, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, [["postTags", 1]], null, 14, "div", [["class", "start-tags"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](46, { "is-invalid": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "label", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 7, "tag-input", [["class", "tag-input"], ["formControlName", "tags"], ["secondaryPlaceholder", "Add a tag and press Enter"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_TagInputComponent_0"], _ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["ɵc"]], { secondaryPlaceholder: [0, "secondaryPlaceholder"], modelAsStrings: [1, "modelAsStrings"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { dropdown: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { templates: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 8, "div", [["class", "start-modal-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "button", [["class", "df-btn df-btn-normal df-cancel-btn"], ["id", "discard-discussion-start-form"], ["mat-raised-button", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.closeModal("discard");
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵl_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u200B "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u200B "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, [["toastSuccess", 1]], null, 0, "input", [["aria-value", "Post created successful"], ["i18-aria-value", ""], ["i18-value", ""], ["type", "hidden"], ["value", "Post created successfully!"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, [["toastError", 1]], null, 0, "input", [["aria-value", "unable to create post"], ["i18-aria-value", ""], ["i18-value", ""], ["type", "hidden"], ["value", "Error in creating new post!"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.startForm; _ck(_v, 5, 0, currVal_7); var currVal_8 = _co.showSelectCategory; _ck(_v, 9, 0, currVal_8); var currVal_9 = "start-form-content"; var currVal_10 = _ck(_v, 12, 0, _co.showError("subTitle")); _ck(_v, 11, 0, currVal_9, currVal_10); var currVal_19 = "start-form-field-control"; var currVal_20 = _ck(_v, 18, 0, _co.isFieldValid("question")); _ck(_v, 17, 0, currVal_19, currVal_20); var currVal_21 = "1000"; _ck(_v, 20, 0, currVal_21); var currVal_22 = "question"; _ck(_v, 23, 0, currVal_22); var currVal_23 = !_co.startForm.get("question").valid; _ck(_v, 27, 0, currVal_23); var currVal_32 = "start-form-field-control"; var currVal_33 = _ck(_v, 34, 0, _co.isFieldValid("description")); _ck(_v, 33, 0, currVal_32, currVal_33); var currVal_34 = "8"; _ck(_v, 36, 0, currVal_34); var currVal_35 = "description"; _ck(_v, 39, 0, currVal_35); var currVal_36 = !_co.startForm.get("description").valid; _ck(_v, 43, 0, currVal_36); var currVal_37 = "start-tags"; var currVal_38 = _ck(_v, 46, 0, _co.showError("tags")); _ck(_v, 45, 0, currVal_37, currVal_38); var currVal_39 = _co.postTagsArray; _ck(_v, 50, 0, currVal_39); var currVal_48 = "Add a tag and press Enter"; var currVal_49 = true; _ck(_v, 52, 0, currVal_48, currVal_49); var currVal_50 = "tags"; _ck(_v, 56, 0, currVal_50); var currVal_51 = _co.showErrorMsg; _ck(_v, 60, 0, currVal_51); var currVal_52 = _co.uploadSaveData; _ck(_v, 65, 0, currVal_52); var currVal_53 = (_co.mode !== "edit"); _ck(_v, 67, 0, currVal_53); var currVal_54 = (_co.mode === "edit"); _ck(_v, 69, 0, currVal_54); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).maxlength : null); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 16, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).minlength : null); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 32, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52).tabindexAttr; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassUntouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassTouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassPristine; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassDirty; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassValid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassInvalid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassPending; _ck(_v, 51, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); }); }
function View_ɵl_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-start", [], null, null, null, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵlNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-start", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], View_ɵl_Host_0, { categoryId: "categoryId", topicData: "topicData", mode: "mode" }, { close: "close" }, []);

var styles_ɵm = [".fade[_ngcontent-%COMP%]:not(.show){opacity:1!important}.buton[_ngcontent-%COMP%]{display:flex;border:.0625rem solid;flex:1;background:var(--red);align-content:center;text-align:center}.sticky[_ngcontent-%COMP%]{position:fixed;top:0;overflow:hidden;z-index:10;width:100%}.text-box[_ngcontent-%COMP%]{display:flex;border:.0625rem solid;flex:3;align-content:center;text-align:center}.overflow[_ngcontent-%COMP%]{overflow:hidden}.font-medium[_ngcontent-%COMP%]{font-weight:500!important}.discuss-border[_ngcontent-%COMP%]{border-radius:.25rem;border:.0625rem solid var(--gray-200);flex:1}.discuss[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.discuss[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{border-top-width:.25rem!important;padding:0 0 .25rem}.discuss-home[_ngcontent-%COMP%]{background:var(--primary) 0 0 no-repeat padding-box;border-radius:0 .25rem .25rem 0;padding:.875rem 2rem;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;margin:0 1rem 1rem}.flex-3[_ngcontent-%COMP%]{flex:3}.filter[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]{border-radius:0;border-bottom:.0625rem solid var(--black);border-width:0 0 .125rem}.filter[_ngcontent-%COMP%]   .filter-option.tabs-active[_ngcontent-%COMP%]{border-bottom:.1875rem solid var(--blue)}.start-btn-hint[_ngcontent-%COMP%]{display:block;margin-bottom:0;padding:1rem}.tab_margin[_ngcontent-%COMP%]{margin-bottom:1rem!important}a.all_category_link[_ngcontent-%COMP%]{color:var(--primary);display:none}.watching_link[_ngcontent-%COMP%]{display:none}@media (max-width:768px){.main-div[_ngcontent-%COMP%]{display:block!important;width:100%!important;padding:0!important}.discussion_outer_box[_ngcontent-%COMP%]{display:block!important}.discussion_main_box[_ngcontent-%COMP%], .right_tag_box[_ngcontent-%COMP%]{width:100%;display:block!important;float:none}}"];
var RenderType_ɵm = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵm, data: {} });

function View_ɵm_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["id", "discuss-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.navigateToDiscussionDetails(_v.context.$implicit);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-discuss-card", [], null, null, null, View_ɵs_0, RenderType_ɵs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], [], { discussionData: [0, "discussionData"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵm_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵm_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.discussionList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵm_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "no-card-content"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "no-data-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0"]))], null, null); }
function View_ɵm_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [["stickyMenu", 1]], null, 2, "div", [["class", "flex flex-1 right_tag_box"]], [[2, "sticky", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-discuss-trending-tags", [], null, [[null, "stateChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("stateChange" === en)) {
        var pd_0 = (_co.acceptData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵo_0, RenderType_ɵo)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 638976, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵo"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], { tags: [0, "tags"] }, { stateChange: "stateChange" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.trendingTags; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sticky; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵm_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-start", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], { categoryId: [0, "categoryId"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.startDiscussionCategoryId; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵm_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 34, "div", [["class", "main-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 31, "div", [["class", "flex flex-1 custom discussion_outer_box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 28, "div", [["class", "flex flex-3 flex-column discussion_main_box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "div", [["data-target", "#myModal"], ["data-toggle", "modal"], ["id", "start-discussion"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.startDiscussion();
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 6, "a", [["class", "flex flex-1 cursor-pointer margin-fix height-48"], ["href", "javascript:void(0)"], ["role", "link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 5, "div", [["class", "flex flex-1 items-center border discuss border-solid discuss-border ws-mat-primary-background-op100 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "div", [["class", "w-full discuss truncate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "span", [["class", "overflow ml-4 start-btn-hint mb-0 mat-body-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ask a question or post an idea"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "div", [["class", "discuss-home text-white flex items-center justify-center cursor-pointer mat-subheading-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Start discussion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 15, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 14, "div", [["class", "flex flex-1 flex-row margin-fix tab_margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 10, "div", [["class", "flex flex-1 filter max-height-60"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["mat-button", ""], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.filter("recent") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](16, { "tabs-active": 0, " font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 3, "a", [["class", "filter-option"], ["href", "javascript:void(0)"], ["mat-button", ""], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.filter("popular") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](20, { "tabs-active": 0, " font-medium": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Popular"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "a", [["class", "filter-option watching_link"], ["href", "javascript:void(0)"], ["mat-button", ""], ["role", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Watching"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "div", [["class", "flex items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "a", [["class", "all_category_link mat-subheading-2 margin-remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["All categories "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵm_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵm_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵm_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵm_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "filter-option"; var currVal_1 = _ck(_v, 16, 0, (_co.currentFilter === "recent"), (_co.currentFilter !== "recent")); _ck(_v, 15, 0, currVal_0, currVal_1); var currVal_2 = "filter-option"; var currVal_3 = _ck(_v, 20, 0, (_co.currentFilter === "popular"), (_co.currentFilter !== "popular")); _ck(_v, 19, 0, currVal_2, currVal_3); var currVal_4 = (_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 28, 0, currVal_4); var currVal_5 = !(_co.discussionList && (_co.discussionList.length > 0)); _ck(_v, 30, 0, currVal_5); var currVal_6 = !_co.isWidget; _ck(_v, 32, 0, currVal_6); var currVal_7 = _co.showStartDiscussionModal; _ck(_v, 34, 0, currVal_7); }, null); }
function View_ɵm_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-all", [], null, null, null, View_ɵm_0, RenderType_ɵm)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵm"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵmNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-all", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵm"], View_ɵm_Host_0, { context: "context", categoryAction: "categoryAction" }, { stateChange: "stateChange" }, []);

var styles_ɵn = [".flex.flex-5[_ngcontent-%COMP%]{flex-direction:column}.tagtitle[_ngcontent-%COMP%]{margin:0 .25rem;padding:.25rem 1rem;min-width:3.125rem;justify-content:center;border-radius:1.25rem .25rem .25rem 1.25rem}"];
var RenderType_ɵn = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵn, data: {} });

function View_ɵn_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵn_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["id", "discuss-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.navigateToDiscussionDetails(_v.context.$implicit);
        var pd_0 = (_co.logTelemetry($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "lib-discuss-card", [], null, null, null, View_ɵs_0, RenderType_ɵs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], [], { discussionData: [0, "discussionData"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵn_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵn_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.similarPosts; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵn_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "no-card-content"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "no-data-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0"]))], null, null); }
function View_ɵn_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [["class", "main-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "flex flex-1 margin-top-xl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "h2", [["class", "margin-remove-bottom tagtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 7, "div", [["class", "flex flex-1 custom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 6, "div", [["class", "flex flex-1 flex-column margin-fix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵn_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵn_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵn_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getBgColor(_co.tagName); _ck(_v, 3, 0, currVal_0); var currVal_2 = _co.fetchSingleCategoryLoader; _ck(_v, 11, 0, currVal_2); var currVal_3 = (_co.similarPosts && (_co.similarPosts.length > 0)); _ck(_v, 13, 0, currVal_3); var currVal_4 = !(_co.similarPosts && (_co.similarPosts.length > 0)); _ck(_v, 15, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tagName; _ck(_v, 4, 0, currVal_1); }); }
function View_ɵn_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-tag-all-discussion", [], null, null, null, View_ɵn_0, RenderType_ɵn)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵi"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵnNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-tag-all-discussion", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵn"], View_ɵn_Host_0, { widgetTagName: "widgetTagName", widgetcIds: "widgetcIds" }, { stateChange: "stateChange" }, []);

var styles_ɵo = ["[_ngcontent-%COMP%]:root{font-size:16px;--blue:#024f9d;--green:#008840;--black:#000000;--white:#ffffff;--red:#ff4558;--primary:var(--blue);--secondary:#008840;--tertiary:#e55a28;--gray-hs:0,0%;--gray:hsl(var(--gray-hs), 20%);--gray-0:hsl(var(--gray-hs), 95%);--gray-100:hsl(var(--gray-hs), 80%);--gray-200:hsl(var(--gray-hs), 60%);--gray-300:hsl(var(--gray-hs), 59%);--gray-400:hsl(var(--gray-hs), 40%);--gray-800:var(--gray);--primary-hs:210,97%;--primary:hsl(var(--primary-hs), 31%);--primary-0:hsl(var(--primary-hs), 98%);--primary-100:hsl(var(--primary-hs), 88%);--primary-200:hsl(var(--primary-hs), 78%);--primary-250:hsl(var(--primary-hs), 73%);--primary-300:hsl(var(--primary-hs), 68%);--primary-400:var(--primary);--primary-600:hsl(var(--primary), 48%);--primary-800:hsl(var(--primary-hs), 38%);--secondary-hs:148,100%;--secondary:hsl(var(--secondary-hs), 27%);--secondary-0:hsl(var(--secondary-hs), 94%);--secondary-100:hsl(var(--secondary-hs), 39%);--secondary-200:hsl(var(--secondary-hs), 38%);--secondary-400:var(--secondary);--tertiary-hs:16,78%;--tertiary:hsl(var(--tertiary-hs), 53%);--tertiary-0:hsl(var(--tertiary-hs), 92%);--tertiary-100:hsl(var(--tertiary-hs), 56%);--tertiary-400:var(--tertiary);--red-0:#fbccd1;--red-100:#ff6979;--red-400:var(--red);--df-e9e8d9:#e9e8d9;--df-333:#333;--text-color:var(--df-333);--df-background:var(--white);--df-common-bg:var(--white);--df-body-bg:var(--primary-0);--df-theme-bg:var(--df-background);--df-text:var(--text-color);--df-card-bg:var(--df-background);--df-btn-default-color:var(--white);--df-field-control-bg:var(--df-background);--df-cancel-btn-bg:var(--df-background);--df-tab-bg:var(--df-background);--df-tab-text:var(--primary);--df-tab-bg-active:var(--primary);--df-tab-text-active:var(--white)}.recent-tabs[_ngcontent-%COMP%]{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;box-shadow:none!important;border-radius:unset;background:inherit!important;z-index:unset;padding-bottom:.5rem}.recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]{display:flex;flex:1 1 0%;flex-direction:column}.recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .tabs-filter[_ngcontent-%COMP%]{display:flex;flex:1 1 0%;flex-wrap:wrap}.recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .tabs-filter[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]{background:var(--df-tab-bg);padding:.5rem 1rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);font-size:.875rem;font-weight:700;margin-right:.75rem;margin-top:.5rem;transition:.3s;display:flex;align-items:center;cursor:pointer;white-space:nowrap;text-decoration:none;color:var(--df-tab-text)}.recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .tabs-filter[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:first-child{margin-left:0}.recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .tabs-filter[_ngcontent-%COMP%]   .filter-option.tabs-active[_ngcontent-%COMP%], .recent-tabs[_ngcontent-%COMP%]   .tabs-content[_ngcontent-%COMP%]   .tabs-filter[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:hover{color:var(--df-btn-default-color);text-decoration:none;background-color:var(--df-tab-bg-active)}.tags[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;flex-wrap:wrap;position:relative;z-index:2}.tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{font-size:.75rem;display:flex;width:auto;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;max-height:2rem;justify-content:space-between;align-items:center;text-transform:lowercase;margin:.5rem 1rem .5rem 0;padding:.5rem 1rem;border-radius:1.5rem;cursor:pointer}.df-cancel-btn[_ngcontent-%COMP%]{background-color:var(--white);color:var(--primary-400);border-color:var(--primary-400);margin:0 .5rem}.df-cancel-btn[_ngcontent-%COMP%]:active, .df-cancel-btn[_ngcontent-%COMP%]:hover{color:var(--primary-800);background-color:var(--primary-100)}.topic-list-container[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;height:calc(100vh - 150px)!important}#topic-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#ccc}#topic-scroll[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}#topic-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey}.no-card-content[_ngcontent-%COMP%]{cursor:pointer;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:0;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;width:auto}.no-card-content[_ngcontent-%COMP%]   .no-data-label[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700}.df-btn[_ngcontent-%COMP%]{white-space:nowrap;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;display:inline-block;border:0;cursor:pointer;min-width:4rem;border-radius:.125rem;position:relative;line-height:1;text-transform:inherit;text-decoration:none}.df-btn-normal[_ngcontent-%COMP%]{height:2rem;padding:.5rem 1rem;font-size:.75rem}.df-btn-primary[_ngcontent-%COMP%]{background-color:var(--primary-400)}.df-btn-secondary[_ngcontent-%COMP%]{background-color:var(--secondary-200)}.df-btn-tertiary[_ngcontent-%COMP%]{background-color:var(--tertiary-100)}.df-btn-danger[_ngcontent-%COMP%]{background-color:var(--red-100)}.df-btn-danger[_ngcontent-%COMP%]:hover{background-color:var(--red-400)}.df-btn-danger[_ngcontent-%COMP%], .df-btn-primary[_ngcontent-%COMP%], .df-btn-secondary[_ngcontent-%COMP%], .df-btn-tertiary[_ngcontent-%COMP%]{color:var(--df-btn-default-color)}.df-btn-primary.active[_ngcontent-%COMP%], .df-btn-primary[_ngcontent-%COMP%]:active, .df-btn-primary[_ngcontent-%COMP%]:hover{background-color:var(--primary-800)}.df-btn-secondary.active[_ngcontent-%COMP%], .df-btn-secondary[_ngcontent-%COMP%]:active, .df-btn-secondary[_ngcontent-%COMP%]:hover{background-color:var(--secondary-400)}.df-btn-tertiary.active[_ngcontent-%COMP%], .df-btn-tertiary[_ngcontent-%COMP%]:active, .df-btn-tertiary[_ngcontent-%COMP%]:hover{background-color:var(--tertiary-400)}.tag[_ngcontent-%COMP%]{display:flex;width:17.25rem;height:2rem;border-radius:.25rem;justify-content:space-between;margin:.5rem 0;align-items:center;box-sizing:border-box}.custom-margin[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}@media (max-width:768px){.tags[_ngcontent-%COMP%]{z-index:unset}.right_tag_inner_box[_ngcontent-%COMP%]{width:100%;margin-left:0!important}}.update_box[_ngcontent-%COMP%]{box-sizing:border-box;margin-top:2rem;display:none}.update_box[_ngcontent-%COMP%]   .update_inner_box[_ngcontent-%COMP%]{box-sizing:border-box;margin-top:1rem}.update_box[_ngcontent-%COMP%]   .update_inner_box[_ngcontent-%COMP%]   .update_card[_ngcontent-%COMP%]{box-sizing:border-box}.update_box[_ngcontent-%COMP%]   .update_inner_box[_ngcontent-%COMP%]   .update_card[_ngcontent-%COMP%]   .card_head[_ngcontent-%COMP%]   p.blue_heading[_ngcontent-%COMP%]{color:var(--primary);margin-bottom:.5rem}.update_box[_ngcontent-%COMP%]   .update_inner_box[_ngcontent-%COMP%]   .update_btn_box[_ngcontent-%COMP%]{width:100%;margin-top:.5rem}.update_box[_ngcontent-%COMP%]   .update_inner_box[_ngcontent-%COMP%]   .update_btn_box[_ngcontent-%COMP%]   a.all_update_link[_ngcontent-%COMP%]{width:100%;padding:.5rem 0;text-align:center;color:var(--primary);border-radius:.25rem;border:.0625rem solid var(--black)}"];
var RenderType_ɵo = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵo, data: {} });

function View_ɵo_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "tag ws-mat-primary-lite-background-important cursor-pointer"], ["role", "link"], ["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAllDiscussions(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "background-image": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "margin-left-m mat-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [["class", "custom-margin margin-right-m mat-subheading-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 2, 0, (("linear-gradient(to right, #ECECEC, #ECECEC " + ((_v.context.$implicit.score / _co.max) * 100)) + "%, #FFF 24px)")); _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit.value; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.score; _ck(_v, 6, 0, currVal_3); }); }
function View_ɵo_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵo_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.trandingTags; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵo_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "margin-left-l right_tag_inner_box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["aria-label", "Trending tags"], ["class", "mat-subheading-2"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Trending tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵo_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 27, "div", [["class", "update_box margin-left-l"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [["aria-label", "Updates"], ["class", "mat-subheading-2"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Updates"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 24, "div", [["class", "update_inner_box flex flex-col items-center justify-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 6, "div", [["class", "mat-card flex flex-col update_card margin-bottom-s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "mat-subheading-1 blue_heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1 Upvote on your question"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "p", [["class", "mat-body-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["What is the most reliable and useful source for COVID related .."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "div", [["class", "mat-card flex flex-col update_card margin-bottom-s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "p", [["class", "mat-subheading-1 blue_heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@sundaramraj answered your question"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "mat-body-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["I think the solution to such a problem would be to extensively.."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "div", [["class", "mat-card flex flex-col update_card margin-bottom-s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "p", [["class", "mat-subheading-1 blue_heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1 Upvote on your question"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 2, "div", [["class", "flex fex-1 items-center justify-start card_body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "p", [["class", "mat-body-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["What is the most reliable and useful source for COVID related .."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 2, "div", [["class", "flex flex-col items-center update_btn_box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "a", [["class", "all_update_link flex mat-subheading-2 justify-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ALL UPDATES"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.trandingTags && (_co.trandingTags.length > 0)); _ck(_v, 4, 0, currVal_0); }, null); }
function View_ɵo_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-trending-tags", [], null, null, null, View_ɵo_0, RenderType_ɵo)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵo"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵoNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-trending-tags", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵo"], View_ɵo_Host_0, { tags: "tags" }, { stateChange: "stateChange" }, []);

var styles_ɵq = [".text-form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column}.text-form-label[_ngcontent-%COMP%]{font-size:.875rem;margin-bottom:1rem}.text-content[_ngcontent-%COMP%]{min-height:6.75rem;max-height:33.75rem;margin-bottom:.875rem;background-color:var(--df-field-control-bg);border:.0625rem solid var(--gray-200);border-radius:.1875rem;color:var(--df-text);display:block;font-size:.8125rem;font-family:sans-serif;position:relative;cursor:pointer;outline:0;padding:.5rem .875rem}.updatePostActions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:1rem}.df-post-reply-btn[_ngcontent-%COMP%], .df-update-btn[_ngcontent-%COMP%]{margin:.5rem 0}.cancel-update-post[_ngcontent-%COMP%]{margin-right:20px}.df-btn-disabled[_ngcontent-%COMP%]{background-color:var(--gray-100);border:solid var(--gray-100)}"];
var RenderType_ɵq = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵq, data: {} });

function View_ɵq_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "button", [["class", "df-btn df-btn-normal df-cancel-btn"], ["id", "cancel-update-post"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancelClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"]))], null, null); }
function View_ɵq_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "df-btn df-btn-normal df-btn-primary"], ["id", "update-post"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onReplyClick("edit") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "df-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "df-btn df-btn-normal df-btn-primary"; var currVal_2 = _ck(_v, 2, 0, !_co.isButtonEnabled); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isButtonEnabled; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵq_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "df-btn df-btn-normal df-btn-primary"], ["id", "update-post"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onReplyClick("reply") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "df-btn-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Post Reply"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "df-btn df-btn-normal df-btn-primary"; var currVal_2 = _ck(_v, 2, 0, !_co.replyForm.valid); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isButtonEnabled; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵq_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 13, "div", [["appearance", "outline"], ["class", "text-form-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "label", [["class", "text-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Your answer here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 10, "textarea", [["aria-label", "Type your message here"], ["class", "text-content"], ["formControlName", "replyContent"], ["minlength", "10"], ["placeholder", "Type here (minimum 10 characters)"]], [[1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](10, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 6, "div", [["class", "updatePostActions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵq_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵq_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵq_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.replyForm; _ck(_v, 2, 0, currVal_7); var currVal_16 = "text-content"; var currVal_17 = _ck(_v, 10, 0, _co.isFieldValid("replyContent")); _ck(_v, 9, 0, currVal_16, currVal_17); var currVal_18 = "10"; _ck(_v, 12, 0, currVal_18); var currVal_19 = "replyContent"; var currVal_20 = _co.content; _ck(_v, 15, 0, currVal_19, currVal_20); var currVal_21 = _co.showCancel; _ck(_v, 21, 0, currVal_21); var currVal_22 = (_co.mode === "edit"); _ck(_v, 23, 0, currVal_22); var currVal_23 = (_co.mode !== "edit"); _ck(_v, 25, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).minlength : null); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
function View_ɵq_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-post-reply", [], null, null, null, View_ɵq_0, RenderType_ɵq)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵq"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵqNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-post-reply", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵq"], View_ɵq_Host_0, { showCancel: "showCancel", mode: "mode", content: "content" }, { actionEvent: "actionEvent" }, []);

var styles_ɵr = [":root{--df-category-card-label:var(--df-text);--df-category-card-text:var(--df-text)}.category-card[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;border-radius:.25rem;height:11rem;width:auto;padding:1rem;cursor:pointer}.category-card[_ngcontent-%COMP%]   .category-card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.category-card[_ngcontent-%COMP%]   .category-card-header[_ngcontent-%COMP%]   .category-card-header-image[_ngcontent-%COMP%]{border:.0625rem solid var(--red-0);border-radius:50%;max-width:3.125rem;width:100%;height:3.125rem;position:relative}.category-card[_ngcontent-%COMP%]   .category-card-header[_ngcontent-%COMP%]   .category-card-header-image[_ngcontent-%COMP%]   .category-card-img[_ngcontent-%COMP%]{position:absolute;top:.5rem;left:.5rem;width:2rem;height:2rem}.category-card[_ngcontent-%COMP%]   .category-card-header[_ngcontent-%COMP%]   .category-card-header-label[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:var(--df-category-card-label);word-break:break-word;margin:0 .5rem;font-weight:700}.category-card[_ngcontent-%COMP%]   .category-card-header-text[_ngcontent-%COMP%]{color:var(--df-category-card-text);-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;word-break:break-all;padding:.5rem 0;font-size:.875rem}.category-card[_ngcontent-%COMP%]   .category-card-main[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:var(--df-category-card-text);margin:.5rem 0;font-size:.875rem;font-weight:700}.category-card[_ngcontent-%COMP%]   .category-card-main[_ngcontent-%COMP%]   .category-card-main-content[_ngcontent-%COMP%]{display:flex}.category-card[_ngcontent-%COMP%]   .category-card-main[_ngcontent-%COMP%]   .post-label[_ngcontent-%COMP%]{margin:0 1rem}.category-card[_ngcontent-%COMP%]   .category-card-main[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]{width:1.4rem;height:1.4rem}"];
var RenderType_ɵr = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵr, data: {} });

function View_ɵr_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "category-card"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "category-card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "category-card-header-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "category card icon"], ["class", "category-card-img"], ["src", "./assets/discussion-ui/images/Buffer-512.webp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "category-card-header-label"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "p", [["class", "category-card-header-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 7, "div", [["class", "category-card-main"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 4, "div", [["class", "category-card-main-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "div", [["class", "discussion-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["", " Discussions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "post-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", " Posts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "img", [["alt", "eye icon"], ["class", "eye-icon"], ["src", "./assets/discussion-ui/images/eye-icon.png"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.category.description; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.category.totalTopicCount; _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.category.totalPostCount; _ck(_v, 12, 0, currVal_3); }); }
function View_ɵr_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-category-card", [], null, null, null, View_ɵr_0, RenderType_ɵr)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵr"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵrNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-category-card", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵr"], View_ɵr_Host_0, { category: "category" }, {}, []);

var styles_ɵs = [".discuss-card-content[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-card-bg);color:var(--df-text);flex:1;height:auto;margin-bottom:1rem;transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:1rem;border-radius:.25rem;word-break:break-all;cursor:pointer;width:auto}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-title[_ngcontent-%COMP%]{margin:0;color:var(--df-text);cursor:pointer;font-size:1rem;font-weight:700;word-break:break-word}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]{margin:8px 0 0;font-size:.875rem;display:flex;align-items:center}@media screen and (max-width:768px){.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]{align-items:flex-start}}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (max-width:768px){.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]{margin-right:auto;flex-wrap:wrap}}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]   .discuss-card-label[_ngcontent-%COMP%]{color:var(--primary);display:flex;align-items:center}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]   .discuss-card-label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:.25rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:.375rem;width:.375rem;background-color:var(--gray-400);border-radius:50%;display:inline-block;margin:0 .5rem;position:relative;bottom:.0625rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]   .discuss-user-label[_ngcontent-%COMP%]{word-break:break-word}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%]{margin:0 .5rem}@media screen and (max-width:768px){.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .card-label-container[_ngcontent-%COMP%]   .discuss-card-label[_ngcontent-%COMP%]{flex-basis:100%}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-subtitle[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%]{flex:0 0 auto}}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.875rem;flex-wrap:wrap;font-weight:700;align-items:center;padding-top:.5rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]{display:flex}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .views-content[_ngcontent-%COMP%], .discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .votes-content[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.875rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .views-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .votes-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 .5rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .views-content[_ngcontent-%COMP%]{margin-left:1.5rem}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .views-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-content[_ngcontent-%COMP%]   .votes-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1rem;width:1rem;cursor:pointer}.discuss-card-content[_ngcontent-%COMP%]   .discuss-card-comments[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%]{color:var(--primary);font-weight:700}"];
var RenderType_ɵs = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵs, data: {} });

function View_ɵs_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "h3", [["class", "discuss-card-title"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussionData == null) ? null : _co.discussionData.title); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵs_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "h3", [["class", "discuss-card-title"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussionData == null) ? null : ((_co.discussionData.topic == null) ? null : _co.discussionData.topic.title)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵs_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "h3", [["class", "discuss-card-title"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussionData == null) ? null : _co.discussionData.name); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵs_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "discuss-card-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "category card icon"], ["class", "mr-4"], ["src", "./assets/discussion-ui/images/Buffer-512.webp"], ["width", "20px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.discussionData.category.name; _ck(_v, 2, 0, currVal_0); }); }
function View_ɵs_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "discuss-user-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussionData == null) ? null : ((_co.discussionData.user == null) ? null : _co.discussionData.user.username)); _ck(_v, 1, 0, currVal_0); }); }
function View_ɵs_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "discuss-user-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = "Anonymous"; _ck(_v, 1, 0, currVal_0); }); }
function View_ɵs_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "tag"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getBgColor(_v.context.$implicit.value); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }); }
function View_ɵs_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.discussionData.tags; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵs_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 35, "div", [["class", "discuss-card-content"], ["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 19, "div", [["role", "link"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 12, "div", [["class", "discuss-card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 8, "div", [["class", "card-label-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "span", [["class", "dot"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "div", [["class", "timing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](20, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "div", [["class", "tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵs_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 11, "div", [["class", "discuss-card-comments"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 8, "div", [["class", "comments-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 3, "span", [["class", "votes-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "img", [["alt", "votes icon"], ["src", "./assets/discussion-ui/images/votes.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](30, null, ["", " Votes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 3, "span", [["class", "views-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "img", [["alt", "views icon"], ["src", "./assets/discussion-ui/images/views.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", " Views"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "div", [["class", "comments-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", " comments "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussionData == null) ? null : _co.discussionData.title); _ck(_v, 4, 0, currVal_0); var currVal_1 = (!((_co.discussionData == null) ? null : _co.discussionData.title) && ((_co.discussionData == null) ? null : ((_co.discussionData.topic == null) ? null : _co.discussionData.topic.title))); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((!((_co.discussionData == null) ? null : _co.discussionData.title) && !((_co.discussionData == null) ? null : ((_co.discussionData.topic == null) ? null : _co.discussionData.topic.title))) && ((_co.discussionData == null) ? null : _co.discussionData.name)); _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.discussionData == null) ? null : ((_co.discussionData.category == null) ? null : _co.discussionData.category.name)); _ck(_v, 12, 0, currVal_3); var currVal_4 = ((_co.discussionData == null) ? null : ((_co.discussionData.user == null) ? null : _co.discussionData.user.username)); _ck(_v, 16, 0, currVal_4); var currVal_5 = !((_co.discussionData == null) ? null : ((_co.discussionData.user == null) ? null : _co.discussionData.user.username)); _ck(_v, 18, 0, currVal_5); var currVal_7 = ((_co.discussionData && _co.discussionData.tags) && (_co.discussionData.tags.length > 0)); _ck(_v, 24, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), _co.discussionData.lastposttime)); _ck(_v, 20, 0, currVal_6); var currVal_8 = ((_co.discussionData.upvotes + _co.discussionData.downvotes) || 0); _ck(_v, 30, 0, currVal_8); var currVal_9 = (_co.discussionData.viewcount || 0); _ck(_v, 34, 0, currVal_9); var currVal_10 = ((_co.discussionData.postcount || 1) - 1); _ck(_v, 36, 0, currVal_10); }); }
function View_ɵs_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-discuss-card", [], null, null, null, View_ɵs_0, RenderType_ɵs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵsNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-discuss-card", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵs"], View_ɵs_Host_0, { discussionData: "discussionData" }, {}, []);

var styles_ɵt = [""];
var RenderType_ɵt = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵt, data: {} });

function View_ɵt_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.photoUrl, ""); var currVal_1 = (_co.photoUrl ? "" : (((_co.name || _co.initials) || _co.size) || _co.random)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ɵt_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "initials"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.initials; _ck(_v, 1, 0, currVal_0); }); }
function View_ɵt_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "circle-s": 0, "circle-m": 1, "circle-l": 2, "circle-xl": 3, "circle-xxl": 4, "circle-xl-s": 5, "circle-xxl-s": 6 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { "background-color": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵt_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵt_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (_co.size === "s"), (_co.size === "m"), (_co.size === "l"), (_co.size === "xl"), (_co.size === "xxl"), (_co.size === "xl-s"), (_co.size === "xxl-s")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, _co.circleColor); _ck(_v, 3, 0, currVal_1); var currVal_2 = !_co.showInitials; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.showInitials; _ck(_v, 8, 0, currVal_3); }, null); }
function View_ɵt_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-avatar-photo", [], null, null, null, View_ɵt_0, RenderType_ɵt)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵt"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵtNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-avatar-photo", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵt"], View_ɵt_Host_0, { photoUrl: "photoUrl", name: "name", size: "size", randomColor: "randomColor", initials: "initials" }, {}, []);

var styles_ɵu = [".dt-app-loader-container[_ngcontent-%COMP%]{background:var(--gray-100);width:94%!important;margin:1rem auto;border-radius:1.5rem;border:0;display:flex;padding:1rem}\u200B[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]{margin:0 1rem;font-size:.875rem}\u200B[_ngcontent-%COMP%]   .loader-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.25rem}"];
var RenderType_ɵu = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵu, data: {} });

function View_ɵu_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "dt-app-loader-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["src", "./assets/discussion-ui/images/loader-icon.svg"], ["width", "50px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["class", "loader-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["class", "loader-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headerMessage; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.loaderMessage; _ck(_v, 7, 0, currVal_1); }); }
function View_ɵu_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-app-loader", [], null, null, null, View_ɵu_0, RenderType_ɵu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵuNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-app-loader", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵu"], View_ɵu_Host_0, { data: "data" }, {}, []);

var styles_ɵv = [":root{--df-related-card-bg:var(--df-background)}.related-discuss-card[_ngcontent-%COMP%]{padding:1rem;display:flex;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:var(--df-related-card-bg);color:var(--df-text);margin-bottom:1rem;flex-direction:column;max-width:18.75rem}.related-discuss-label[_ngcontent-%COMP%]{font-weight:700;margin:0 0 1rem;color:var(--df-text)}@media (max-width:768px){.related-discuss-card[_ngcontent-%COMP%]{max-width:100%}.related-discuss-label[_ngcontent-%COMP%]{margin:1rem 0}}.related-discuss-card-content[_ngcontent-%COMP%]{margin:0;cursor:pointer;font-size:.875rem;font-weight:700;word-break:break-all}.related-discuss-card-description[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.875rem;flex-wrap:wrap;margin-top:.5rem}.related-discuss-card-description[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:.375rem;width:.375rem;background-color:var(--gray-400);border-radius:50%;display:inline-block;margin:0 .5rem;position:relative;bottom:0}"];
var RenderType_ɵv = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵv, data: {} });

function View_ɵv_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "related-discuss-card df-card"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "label", [["aria-label", "related discussion post df-text-color"], ["class", "related-discuss-card-content discuss-user-label"], ["role", "link"], ["tabindex", "0"]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getDiscussion(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "related-discuss-card-description mt-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "category-name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "dot"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 1)], null, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.title); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.category.name; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.timestamp)); _ck(_v, 6, 0, currVal_2); }); }
function View_ɵv_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵv_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transform(_co.relatedDiscussions, 0, 5)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵv_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵbb"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h5", [["aria-label", "Related discussions"], ["class", "related-discuss-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Related discussions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵv_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.relatedDiscussions && (_co.relatedDiscussions.length > 0)); _ck(_v, 4, 0, currVal_0); }, null); }
function View_ɵv_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-related-discussion", [], null, null, null, View_ɵv_0, RenderType_ɵv)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵv"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"], _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["NavigationServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵvNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-related-discussion", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵv"], View_ɵv_Host_0, { catId: "catId", topicId: "topicId" }, { stateChange: "stateChange" }, []);

var styles_ɵw = [".banner-container[_ngcontent-%COMP%]{min-height:243px;overflow:hidden;position:relative;margin:auto;border-radius:12px}.banner-overlay[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:linear-gradient(to left,rgba(0,0,0,.25) 0,rgba(0,0,0,0) 15%,rgba(0,0,0,0) 85%,rgba(0,0,0,.25) 100%)}.banner[_ngcontent-%COMP%]{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}.banner[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]{width:100%;min-height:243px;display:block;height:350px;border-radius:12px}.banner-meta[_ngcontent-%COMP%]{text-align:center;z-index:2;position:absolute;bottom:0;left:50%;border-radius:12px;transform:translateX(-50%);box-sizing:border-box}.banner-meta[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{color:#f2f2f2;font-size:1.1rem}.banner-meta[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.banner-meta[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{cursor:pointer;margin:0 6px;background-color:rgba(120,120,120,.75);box-shadow:1px 1px 4px rgba(0,0,0,.6);border-radius:50%;display:inline-block;transition:background-color .5s!important}.banner-meta[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background-color:#d3d3d3}@-webkit-keyframes fade{from{opacity:.25}to{opacity:1}}@keyframes fade{from{opacity:.25}to{opacity:1}}.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:50%;transform:translateY(-50%);color:#fff;font-weight:700;z-index:2;border-radius:0 3px 3px 0}.next[_ngcontent-%COMP%]{right:0;border-radius:3px 0 0 3px}.banner-container-solo[_ngcontent-%COMP%]{overflow:hidden;margin:auto;border-radius:12px}.banner-image-solo[_ngcontent-%COMP%]{width:100%;display:block;border-radius:12px}"];
var RenderType_ɵw = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵw, data: {} });

function View_ɵw_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "banner WidgetInstanceId"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "Page Banner"], ["class", "banner-image"], ["wsUtilsImageResponsive", ""]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index !== _co.currentIndex); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transform(_v.context.$implicit.banners)); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.banners; _ck(_v, 4, 0, currVal_2); }); }
function View_ɵw_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "dot"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.slideTo(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { active: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dot"; var currVal_1 = _ck(_v, 2, 0, (_v.context.index === _co.currentIndex)); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵw_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "dots-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.bannerData.widgetData; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ɵw_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a", [["class", "prev"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.slideTo((_co.currentIndex - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u276E"]))], null, null); }
function View_ɵw_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a", [["class", "next"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.slideTo((_co.currentIndex + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u276F"]))], null, null); }
function View_ɵw_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [["class", "banner-container"]], null, [[null, "swipeleft"], [null, "swiperight"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("swipeleft" === en)) {
        var pd_0 = (_co.slideTo((_co.currentIndex + 1)) !== false);
        ad = (pd_0 && ad);
    } if (("swiperight" === en)) {
        var pd_1 = (_co.slideTo((_co.currentIndex - 1)) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["class", "banner-meta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.bannerData.widgetData; _ck(_v, 2, 0, currVal_0); var currVal_1 = (((_co.bannerData.widgetData == null) ? null : _co.bannerData.widgetData.length) > 1); _ck(_v, 5, 0, currVal_1); var currVal_2 = (((_co.bannerData.widgetData == null) ? null : _co.bannerData.widgetData.length) > 1); _ck(_v, 7, 0, currVal_2); var currVal_3 = (((_co.bannerData.widgetData == null) ? null : _co.bannerData.widgetData.length) > 1); _ck(_v, 9, 0, currVal_3); }, null); }
function View_ɵw_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "banner-container-solo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Page Banner"], ["class", "banner-image-solo"], ["wsUtilsImageResponsive", ""]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.bannerData.widgetData[0].banners.xl; _ck(_v, 1, 0, currVal_0); }); }
function View_ɵw_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵw_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.bannerData.widgetData == null) ? null : _co.bannerData.widgetData.length) > 1); _ck(_v, 1, 0, currVal_0); var currVal_1 = (((_co.bannerData.widgetData == null) ? null : _co.bannerData.widgetData.length) == 1); _ck(_v, 3, 0, currVal_1); }, null); }
function View_ɵw_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ws-widget-sliders", [], [[8, "id", 0]], null, null, View_ɵw_0, RenderType_ɵw)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵw"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
var ɵwNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ws-widget-sliders", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵw"], View_ɵw_Host_0, { bannerData: "bannerData" }, {}, []);

var styles_ɵx = ["#alertModal[_ngcontent-%COMP%]{display:block;opacity:2!important}.df-dimmer-alert-modal[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .1s ease-in;pointer-events:auto}.df-dimmer-alert-modal[_ngcontent-%COMP%]   .df-alert-modal[_ngcontent-%COMP%]{max-width:30rem;width:100%;margin:0 auto;border-radius:.1875rem;background:var(--white);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:auto;height:auto}.df-dimmer-alert-modal[_ngcontent-%COMP%]   .df-alert-modal[_ngcontent-%COMP%]   .df-alert-modal-header[_ngcontent-%COMP%]{background-color:var(--primary);color:var(--white);font-weight:700;font-size:1rem;padding:.5rem 1rem;border-bottom:0 solid var(--gray-100);min-height:2.5rem;line-height:1.5rem}.df-dimmer-alert-modal[_ngcontent-%COMP%]   .df-alert-modal[_ngcontent-%COMP%]   .df-alert-modal-content[_ngcontent-%COMP%]{padding:1rem;min-height:3.75rem}.df-dimmer-alert-modal[_ngcontent-%COMP%]   .df-alert-modal[_ngcontent-%COMP%]   .df-alert-modal-content[_ngcontent-%COMP%]   .df-alert-label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:0;font-size:.8125rem;font-weight:700}.df-dimmer-alert-modal[_ngcontent-%COMP%]   .df-alert-modal[_ngcontent-%COMP%]   .df-alert-modal-buttons[_ngcontent-%COMP%]{padding:.5rem 1rem;background:var(--white);border-top:.0625rem solid var(--gray-100);min-height:3.5rem;display:flex;flex-direction:row-reverse;align-items:center;cursor:pointer}"];
var RenderType_ɵx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵx, data: {} });

function View_ɵx_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "alertModal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 9, "div", [["class", "df-dimmer-alert-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "div", [["class", "df-alert-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "df-alert-modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Alert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "df-alert-modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "label", [["class", "df-alert-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["We are experiencing high traffic.Please try after sometime."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [["class", "df-alert-modal-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "button", [["class", "df-btn df-btn-normal df-btn-primary df-alert-close-btn"], ["id", "load-alert-close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.exitForum($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], null, null); }
function View_ɵx_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "lib-load-alert", [], null, null, null, View_ɵx_0, RenderType_ɵx)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵx"], [_project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵxNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("lib-load-alert", _project_sunbird_discussions_ui_v8__WEBPACK_IMPORTED_MODULE_1__["ɵx"], View_ɵx_Host_0, {}, { close: "close", exit: "exit" }, []);



/***/ }),

/***/ "mbIT":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArray = function () {
  return Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
}();

/***/ }),

/***/ "n3uD":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};

/***/ }),

/***/ "p//D":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.rxSubscriber = function () {
  return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
}();

exports.$$rxSubscriber = exports.rxSubscriber;

/***/ }),

/***/ "pshJ":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

/***/ }),

/***/ "yoF8":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function identity(x) {
  return x;
}

exports.identity = identity;

/***/ }),

/***/ "yx2s":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "FWf1");

function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber_1.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}

exports.canReportError = canReportError;

/***/ }),

/***/ "zB/H":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = __webpack_require__(/*! ./util/isArray */ "mbIT");

var isObject_1 = __webpack_require__(/*! ./util/isObject */ "GMZp");

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "pshJ");

var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "LBXl");

var Subscription = function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._ctorUnsubscribe = true;
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _ctorUnsubscribe = _a._ctorUnsubscribe,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if (isFunction_1.isFunction(_unsubscribe)) {
      if (_ctorUnsubscribe) {
        this._unsubscribe = undefined;
      }

      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (isArray_1.isArray(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (isObject_1.isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new UnsubscriptionError_1.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
  }, []);
}

/***/ }),

/***/ "zfKp":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/***/ })

}]);
//# sourceMappingURL=default~modules-dashboard-dashboard-module-ngfactory~modules-discussion-discussion-module-ngfactory~~1b0feb71.js.map