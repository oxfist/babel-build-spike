"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var num = 3;

function sayHelloAfter(_x) {
  return _sayHelloAfter.apply(this, arguments);
}

function _sayHelloAfter() {
  _sayHelloAfter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(seconds) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setTimeout(() => {
              console.log("Hello");
            }, seconds * 1000);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sayHelloAfter.apply(this, arguments);
}

sayHelloAfter(num);