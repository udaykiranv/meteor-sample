//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var page, qs, Triggers, Router, Group, Route, FlowRouter;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira_flow-router/packages/kadira_flow-router.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client.browserify.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser                                                                                  // 10
                                                                                                                      // 11
var process = module.exports = {};                                                                                    // 12
var queue = [];                                                                                                       // 13
var draining = false;                                                                                                 // 14
var currentQueue;                                                                                                     // 15
var queueIndex = -1;                                                                                                  // 16
                                                                                                                      // 17
function cleanUpNextTick() {                                                                                          // 18
    draining = false;                                                                                                 // 19
    if (currentQueue.length) {                                                                                        // 20
        queue = currentQueue.concat(queue);                                                                           // 21
    } else {                                                                                                          // 22
        queueIndex = -1;                                                                                              // 23
    }                                                                                                                 // 24
    if (queue.length) {                                                                                               // 25
        drainQueue();                                                                                                 // 26
    }                                                                                                                 // 27
}                                                                                                                     // 28
                                                                                                                      // 29
function drainQueue() {                                                                                               // 30
    if (draining) {                                                                                                   // 31
        return;                                                                                                       // 32
    }                                                                                                                 // 33
    var timeout = setTimeout(cleanUpNextTick);                                                                        // 34
    draining = true;                                                                                                  // 35
                                                                                                                      // 36
    var len = queue.length;                                                                                           // 37
    while(len) {                                                                                                      // 38
        currentQueue = queue;                                                                                         // 39
        queue = [];                                                                                                   // 40
        while (++queueIndex < len) {                                                                                  // 41
            currentQueue[queueIndex].run();                                                                           // 42
        }                                                                                                             // 43
        queueIndex = -1;                                                                                              // 44
        len = queue.length;                                                                                           // 45
    }                                                                                                                 // 46
    currentQueue = null;                                                                                              // 47
    draining = false;                                                                                                 // 48
    clearTimeout(timeout);                                                                                            // 49
}                                                                                                                     // 50
                                                                                                                      // 51
process.nextTick = function (fun) {                                                                                   // 52
    var args = new Array(arguments.length - 1);                                                                       // 53
    if (arguments.length > 1) {                                                                                       // 54
        for (var i = 1; i < arguments.length; i++) {                                                                  // 55
            args[i - 1] = arguments[i];                                                                               // 56
        }                                                                                                             // 57
    }                                                                                                                 // 58
    queue.push(new Item(fun, args));                                                                                  // 59
    if (queue.length === 1 && !draining) {                                                                            // 60
        setTimeout(drainQueue, 0);                                                                                    // 61
    }                                                                                                                 // 62
};                                                                                                                    // 63
                                                                                                                      // 64
// v8 likes predictible objects                                                                                       // 65
function Item(fun, array) {                                                                                           // 66
    this.fun = fun;                                                                                                   // 67
    this.array = array;                                                                                               // 68
}                                                                                                                     // 69
Item.prototype.run = function () {                                                                                    // 70
    this.fun.apply(null, this.array);                                                                                 // 71
};                                                                                                                    // 72
process.title = 'browser';                                                                                            // 73
process.browser = true;                                                                                               // 74
process.env = {};                                                                                                     // 75
process.argv = [];                                                                                                    // 76
process.version = ''; // empty string to avoid regexp issues                                                          // 77
process.versions = {};                                                                                                // 78
                                                                                                                      // 79
function noop() {}                                                                                                    // 80
                                                                                                                      // 81
process.on = noop;                                                                                                    // 82
process.addListener = noop;                                                                                           // 83
process.once = noop;                                                                                                  // 84
process.off = noop;                                                                                                   // 85
process.removeListener = noop;                                                                                        // 86
process.removeAllListeners = noop;                                                                                    // 87
process.emit = noop;                                                                                                  // 88
                                                                                                                      // 89
process.binding = function (name) {                                                                                   // 90
    throw new Error('process.binding is not supported');                                                              // 91
};                                                                                                                    // 92
                                                                                                                      // 93
// TODO(shtylman)                                                                                                     // 94
process.cwd = function () { return '/' };                                                                             // 95
process.chdir = function (dir) {                                                                                      // 96
    throw new Error('process.chdir is not supported');                                                                // 97
};                                                                                                                    // 98
process.umask = function() { return 0; };                                                                             // 99
                                                                                                                      // 100
},{}],2:[function(require,module,exports){                                                                            // 101
page = require('page');                                                                                               // 102
qs   = require('qs');                                                                                                 // 103
                                                                                                                      // 104
},{"page":3,"qs":6}],3:[function(require,module,exports){                                                             // 105
(function (process){                                                                                                  // 106
  /* globals require, module */                                                                                       // 107
                                                                                                                      // 108
  'use strict';                                                                                                       // 109
                                                                                                                      // 110
  /**                                                                                                                 // 111
   * Module dependencies.                                                                                             // 112
   */                                                                                                                 // 113
                                                                                                                      // 114
  var pathtoRegexp = require('path-to-regexp');                                                                       // 115
                                                                                                                      // 116
  /**                                                                                                                 // 117
   * Module exports.                                                                                                  // 118
   */                                                                                                                 // 119
                                                                                                                      // 120
  module.exports = page;                                                                                              // 121
                                                                                                                      // 122
  /**                                                                                                                 // 123
   * Detect click event                                                                                               // 124
   */                                                                                                                 // 125
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';               // 126
                                                                                                                      // 127
  /**                                                                                                                 // 128
   * To work properly with the URL                                                                                    // 129
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API                               // 130
   */                                                                                                                 // 131
                                                                                                                      // 132
  var location = ('undefined' !== typeof window) && (window.history.location || window.location);                     // 133
                                                                                                                      // 134
  /**                                                                                                                 // 135
   * Perform initial dispatch.                                                                                        // 136
   */                                                                                                                 // 137
                                                                                                                      // 138
  var dispatch = true;                                                                                                // 139
                                                                                                                      // 140
                                                                                                                      // 141
  /**                                                                                                                 // 142
   * Decode URL components (query string, pathname, hash).                                                            // 143
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.                                     // 144
   */                                                                                                                 // 145
  var decodeURLComponents = true;                                                                                     // 146
                                                                                                                      // 147
  /**                                                                                                                 // 148
   * Base path.                                                                                                       // 149
   */                                                                                                                 // 150
                                                                                                                      // 151
  var base = '';                                                                                                      // 152
                                                                                                                      // 153
  /**                                                                                                                 // 154
   * Running flag.                                                                                                    // 155
   */                                                                                                                 // 156
                                                                                                                      // 157
  var running;                                                                                                        // 158
                                                                                                                      // 159
  /**                                                                                                                 // 160
   * HashBang option                                                                                                  // 161
   */                                                                                                                 // 162
                                                                                                                      // 163
  var hashbang = false;                                                                                               // 164
                                                                                                                      // 165
  /**                                                                                                                 // 166
   * Previous context, for capturing                                                                                  // 167
   * page exit events.                                                                                                // 168
   */                                                                                                                 // 169
                                                                                                                      // 170
  var prevContext;                                                                                                    // 171
                                                                                                                      // 172
  /**                                                                                                                 // 173
   * Register `path` with callback `fn()`,                                                                            // 174
   * or route `path`, or redirection,                                                                                 // 175
   * or `page.start()`.                                                                                               // 176
   *                                                                                                                  // 177
   *   page(fn);                                                                                                      // 178
   *   page('*', fn);                                                                                                 // 179
   *   page('/user/:id', load, user);                                                                                 // 180
   *   page('/user/' + user.id, { some: 'thing' });                                                                   // 181
   *   page('/user/' + user.id);                                                                                      // 182
   *   page('/from', '/to')                                                                                           // 183
   *   page();                                                                                                        // 184
   *                                                                                                                  // 185
   * @param {String|Function} path                                                                                    // 186
   * @param {Function} fn...                                                                                          // 187
   * @api public                                                                                                      // 188
   */                                                                                                                 // 189
                                                                                                                      // 190
  function page(path, fn) {                                                                                           // 191
    // <callback>                                                                                                     // 192
    if ('function' === typeof path) {                                                                                 // 193
      return page('*', path);                                                                                         // 194
    }                                                                                                                 // 195
                                                                                                                      // 196
    // route <path> to <callback ...>                                                                                 // 197
    if ('function' === typeof fn) {                                                                                   // 198
      var route = new Route(path);                                                                                    // 199
      for (var i = 1; i < arguments.length; ++i) {                                                                    // 200
        page.callbacks.push(route.middleware(arguments[i]));                                                          // 201
      }                                                                                                               // 202
      // show <path> with [state]                                                                                     // 203
    } else if ('string' === typeof path) {                                                                            // 204
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);                                                   // 205
      // start [options]                                                                                              // 206
    } else {                                                                                                          // 207
      page.start(path);                                                                                               // 208
    }                                                                                                                 // 209
  }                                                                                                                   // 210
                                                                                                                      // 211
  /**                                                                                                                 // 212
   * Callback functions.                                                                                              // 213
   */                                                                                                                 // 214
                                                                                                                      // 215
  page.callbacks = [];                                                                                                // 216
  page.exits = [];                                                                                                    // 217
                                                                                                                      // 218
  /**                                                                                                                 // 219
   * Current path being processed                                                                                     // 220
   * @type {String}                                                                                                   // 221
   */                                                                                                                 // 222
  page.current = '';                                                                                                  // 223
                                                                                                                      // 224
  /**                                                                                                                 // 225
   * Number of pages navigated to.                                                                                    // 226
   * @type {number}                                                                                                   // 227
   *                                                                                                                  // 228
   *     page.len == 0;                                                                                               // 229
   *     page('/login');                                                                                              // 230
   *     page.len == 1;                                                                                               // 231
   */                                                                                                                 // 232
                                                                                                                      // 233
  page.len = 0;                                                                                                       // 234
                                                                                                                      // 235
  /**                                                                                                                 // 236
   * Get or set basepath to `path`.                                                                                   // 237
   *                                                                                                                  // 238
   * @param {String} path                                                                                             // 239
   * @api public                                                                                                      // 240
   */                                                                                                                 // 241
                                                                                                                      // 242
  page.base = function(path) {                                                                                        // 243
    if (0 === arguments.length) return base;                                                                          // 244
    base = path;                                                                                                      // 245
  };                                                                                                                  // 246
                                                                                                                      // 247
  /**                                                                                                                 // 248
   * Bind with the given `options`.                                                                                   // 249
   *                                                                                                                  // 250
   * Options:                                                                                                         // 251
   *                                                                                                                  // 252
   *    - `click` bind to click events [true]                                                                         // 253
   *    - `popstate` bind to popstate [true]                                                                          // 254
   *    - `dispatch` perform initial dispatch [true]                                                                  // 255
   *                                                                                                                  // 256
   * @param {Object} options                                                                                          // 257
   * @api public                                                                                                      // 258
   */                                                                                                                 // 259
                                                                                                                      // 260
  page.start = function(options) {                                                                                    // 261
    options = options || {};                                                                                          // 262
    if (running) return;                                                                                              // 263
    running = true;                                                                                                   // 264
    if (false === options.dispatch) dispatch = false;                                                                 // 265
    if (false === options.decodeURLComponents) decodeURLComponents = false;                                           // 266
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);                           // 267
    if (false !== options.click) {                                                                                    // 268
      document.addEventListener(clickEvent, onclick, false);                                                          // 269
    }                                                                                                                 // 270
    if (true === options.hashbang) hashbang = true;                                                                   // 271
    if (!dispatch) return;                                                                                            // 272
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);                                                                          // 274
  };                                                                                                                  // 275
                                                                                                                      // 276
  /**                                                                                                                 // 277
   * Unbind click and popstate event handlers.                                                                        // 278
   *                                                                                                                  // 279
   * @api public                                                                                                      // 280
   */                                                                                                                 // 281
                                                                                                                      // 282
  page.stop = function() {                                                                                            // 283
    if (!running) return;                                                                                             // 284
    page.current = '';                                                                                                // 285
    page.len = 0;                                                                                                     // 286
    running = false;                                                                                                  // 287
    document.removeEventListener(clickEvent, onclick, false);                                                         // 288
    window.removeEventListener('popstate', onpopstate, false);                                                        // 289
  };                                                                                                                  // 290
                                                                                                                      // 291
  /**                                                                                                                 // 292
   * Show `path` with optional `state` object.                                                                        // 293
   *                                                                                                                  // 294
   * @param {String} path                                                                                             // 295
   * @param {Object} state                                                                                            // 296
   * @param {Boolean} dispatch                                                                                        // 297
   * @return {Context}                                                                                                // 298
   * @api public                                                                                                      // 299
   */                                                                                                                 // 300
                                                                                                                      // 301
  page.show = function(path, state, dispatch, push) {                                                                 // 302
    var ctx = new Context(path, state);                                                                               // 303
    page.current = ctx.path;                                                                                          // 304
    if (false !== dispatch) page.dispatch(ctx);                                                                       // 305
    if (false !== ctx.handled && false !== push) ctx.pushState();                                                     // 306
    return ctx;                                                                                                       // 307
  };                                                                                                                  // 308
                                                                                                                      // 309
  /**                                                                                                                 // 310
   * Goes back in the history                                                                                         // 311
   * Back should always let the current route push state and then go back.                                            // 312
   *                                                                                                                  // 313
   * @param {String} path - fallback path to go back if no more history exists, if undefined defaults to page.base    // 314
   * @param {Object} [state]                                                                                          // 315
   * @api public                                                                                                      // 316
   */                                                                                                                 // 317
                                                                                                                      // 318
  page.back = function(path, state) {                                                                                 // 319
    if (page.len > 0) {                                                                                               // 320
      // this may need more testing to see if all browsers                                                            // 321
      // wait for the next tick to go back in history                                                                 // 322
      history.back();                                                                                                 // 323
      page.len--;                                                                                                     // 324
    } else if (path) {                                                                                                // 325
      setTimeout(function() {                                                                                         // 326
        page.show(path, state);                                                                                       // 327
      });                                                                                                             // 328
    }else{                                                                                                            // 329
      setTimeout(function() {                                                                                         // 330
        page.show(base, state);                                                                                       // 331
      });                                                                                                             // 332
    }                                                                                                                 // 333
  };                                                                                                                  // 334
                                                                                                                      // 335
                                                                                                                      // 336
  /**                                                                                                                 // 337
   * Register route to redirect from one path to other                                                                // 338
   * or just redirect to another route                                                                                // 339
   *                                                                                                                  // 340
   * @param {String} from - if param 'to' is undefined redirects to 'from'                                            // 341
   * @param {String} [to]                                                                                             // 342
   * @api public                                                                                                      // 343
   */                                                                                                                 // 344
  page.redirect = function(from, to) {                                                                                // 345
    // Define route from a path to another                                                                            // 346
    if ('string' === typeof from && 'string' === typeof to) {                                                         // 347
      page(from, function(e) {                                                                                        // 348
        setTimeout(function() {                                                                                       // 349
          page.replace(to);                                                                                           // 350
        }, 0);                                                                                                        // 351
      });                                                                                                             // 352
    }                                                                                                                 // 353
                                                                                                                      // 354
    // Wait for the push state and replace it with another                                                            // 355
    if ('string' === typeof from && 'undefined' === typeof to) {                                                      // 356
      setTimeout(function() {                                                                                         // 357
        page.replace(from);                                                                                           // 358
      }, 0);                                                                                                          // 359
    }                                                                                                                 // 360
  };                                                                                                                  // 361
                                                                                                                      // 362
  /**                                                                                                                 // 363
   * Replace `path` with optional `state` object.                                                                     // 364
   *                                                                                                                  // 365
   * @param {String} path                                                                                             // 366
   * @param {Object} state                                                                                            // 367
   * @return {Context}                                                                                                // 368
   * @api public                                                                                                      // 369
   */                                                                                                                 // 370
                                                                                                                      // 371
                                                                                                                      // 372
  page.replace = function(path, state, init, dispatch) {                                                              // 373
    var ctx = new Context(path, state);                                                                               // 374
    page.current = ctx.path;                                                                                          // 375
    ctx.init = init;                                                                                                  // 376
    ctx.save(); // save before dispatching, which may redirect                                                        // 377
    if (false !== dispatch) page.dispatch(ctx);                                                                       // 378
    return ctx;                                                                                                       // 379
  };                                                                                                                  // 380
                                                                                                                      // 381
  /**                                                                                                                 // 382
   * Dispatch the given `ctx`.                                                                                        // 383
   *                                                                                                                  // 384
   * @param {Object} ctx                                                                                              // 385
   * @api private                                                                                                     // 386
   */                                                                                                                 // 387
                                                                                                                      // 388
  page.dispatch = function(ctx) {                                                                                     // 389
    var prev = prevContext,                                                                                           // 390
      i = 0,                                                                                                          // 391
      j = 0;                                                                                                          // 392
                                                                                                                      // 393
    prevContext = ctx;                                                                                                // 394
                                                                                                                      // 395
    function nextExit() {                                                                                             // 396
      var fn = page.exits[j++];                                                                                       // 397
      if (!fn) return nextEnter();                                                                                    // 398
      fn(prev, nextExit);                                                                                             // 399
    }                                                                                                                 // 400
                                                                                                                      // 401
    function nextEnter() {                                                                                            // 402
      var fn = page.callbacks[i++];                                                                                   // 403
                                                                                                                      // 404
      if (ctx.path !== page.current) {                                                                                // 405
        ctx.handled = false;                                                                                          // 406
        return;                                                                                                       // 407
      }                                                                                                               // 408
      if (!fn) return unhandled(ctx);                                                                                 // 409
      fn(ctx, nextEnter);                                                                                             // 410
    }                                                                                                                 // 411
                                                                                                                      // 412
    if (prev) {                                                                                                       // 413
      nextExit();                                                                                                     // 414
    } else {                                                                                                          // 415
      nextEnter();                                                                                                    // 416
    }                                                                                                                 // 417
  };                                                                                                                  // 418
                                                                                                                      // 419
  /**                                                                                                                 // 420
   * Unhandled `ctx`. When it's not the initial                                                                       // 421
   * popstate then redirect. If you wish to handle                                                                    // 422
   * 404s on your own use `page('*', callback)`.                                                                      // 423
   *                                                                                                                  // 424
   * @param {Context} ctx                                                                                             // 425
   * @api private                                                                                                     // 426
   */                                                                                                                 // 427
                                                                                                                      // 428
  function unhandled(ctx) {                                                                                           // 429
    if (ctx.handled) return;                                                                                          // 430
    var current;                                                                                                      // 431
                                                                                                                      // 432
    if (hashbang) {                                                                                                   // 433
      current = base + location.hash.replace('#!', '');                                                               // 434
    } else {                                                                                                          // 435
      current = location.pathname + location.search;                                                                  // 436
    }                                                                                                                 // 437
                                                                                                                      // 438
    if (current === ctx.canonicalPath) return;                                                                        // 439
    page.stop();                                                                                                      // 440
    ctx.handled = false;                                                                                              // 441
    location.href = ctx.canonicalPath;                                                                                // 442
  }                                                                                                                   // 443
                                                                                                                      // 444
  /**                                                                                                                 // 445
   * Register an exit route on `path` with                                                                            // 446
   * callback `fn()`, which will be called                                                                            // 447
   * on the previous context when a new                                                                               // 448
   * page is visited.                                                                                                 // 449
   */                                                                                                                 // 450
  page.exit = function(path, fn) {                                                                                    // 451
    if (typeof path === 'function') {                                                                                 // 452
      return page.exit('*', path);                                                                                    // 453
    }                                                                                                                 // 454
                                                                                                                      // 455
    var route = new Route(path);                                                                                      // 456
    for (var i = 1; i < arguments.length; ++i) {                                                                      // 457
      page.exits.push(route.middleware(arguments[i]));                                                                // 458
    }                                                                                                                 // 459
  };                                                                                                                  // 460
                                                                                                                      // 461
  /**                                                                                                                 // 462
   * Remove URL encoding from the given `str`.                                                                        // 463
   * Accommodates whitespace in both x-www-form-urlencoded                                                            // 464
   * and regular percent-encoded form.                                                                                // 465
   *                                                                                                                  // 466
   * @param {str} URL component to decode                                                                             // 467
   */                                                                                                                 // 468
  function decodeURLEncodedURIComponent(val) {                                                                        // 469
    if (typeof val !== 'string') { return val; }                                                                      // 470
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;                                   // 471
  }                                                                                                                   // 472
                                                                                                                      // 473
  /**                                                                                                                 // 474
   * Initialize a new "request" `Context`                                                                             // 475
   * with the given `path` and optional initial `state`.                                                              // 476
   *                                                                                                                  // 477
   * @param {String} path                                                                                             // 478
   * @param {Object} state                                                                                            // 479
   * @api public                                                                                                      // 480
   */                                                                                                                 // 481
                                                                                                                      // 482
  function Context(path, state) {                                                                                     // 483
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;                     // 484
    var i = path.indexOf('?');                                                                                        // 485
                                                                                                                      // 486
    this.canonicalPath = path;                                                                                        // 487
    this.path = path.replace(base, '') || '/';                                                                        // 488
    if (hashbang) this.path = this.path.replace('#!', '') || '/';                                                     // 489
                                                                                                                      // 490
    this.title = document.title;                                                                                      // 491
    this.state = state || {};                                                                                         // 492
    this.state.path = path;                                                                                           // 493
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';                                     // 494
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);                                       // 495
    this.params = {};                                                                                                 // 496
                                                                                                                      // 497
    // fragment                                                                                                       // 498
    this.hash = '';                                                                                                   // 499
    if (!hashbang) {                                                                                                  // 500
      if (!~this.path.indexOf('#')) return;                                                                           // 501
      var parts = this.path.split('#');                                                                               // 502
      this.path = parts[0];                                                                                           // 503
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';                                                       // 504
      this.querystring = this.querystring.split('#')[0];                                                              // 505
    }                                                                                                                 // 506
  }                                                                                                                   // 507
                                                                                                                      // 508
  /**                                                                                                                 // 509
   * Expose `Context`.                                                                                                // 510
   */                                                                                                                 // 511
                                                                                                                      // 512
  page.Context = Context;                                                                                             // 513
                                                                                                                      // 514
  /**                                                                                                                 // 515
   * Push state.                                                                                                      // 516
   *                                                                                                                  // 517
   * @api private                                                                                                     // 518
   */                                                                                                                 // 519
                                                                                                                      // 520
  Context.prototype.pushState = function() {                                                                          // 521
    page.len++;                                                                                                       // 522
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };                                                                                                                  // 524
                                                                                                                      // 525
  /**                                                                                                                 // 526
   * Save the context state.                                                                                          // 527
   *                                                                                                                  // 528
   * @api public                                                                                                      // 529
   */                                                                                                                 // 530
                                                                                                                      // 531
  Context.prototype.save = function() {                                                                               // 532
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };                                                                                                                  // 534
                                                                                                                      // 535
  /**                                                                                                                 // 536
   * Initialize `Route` with the given HTTP `path`,                                                                   // 537
   * and an array of `callbacks` and `options`.                                                                       // 538
   *                                                                                                                  // 539
   * Options:                                                                                                         // 540
   *                                                                                                                  // 541
   *   - `sensitive`    enable case-sensitive routes                                                                  // 542
   *   - `strict`       enable strict matching for trailing slashes                                                   // 543
   *                                                                                                                  // 544
   * @param {String} path                                                                                             // 545
   * @param {Object} options.                                                                                         // 546
   * @api private                                                                                                     // 547
   */                                                                                                                 // 548
                                                                                                                      // 549
  function Route(path, options) {                                                                                     // 550
    options = options || {};                                                                                          // 551
    this.path = (path === '*') ? '(.*)' : path;                                                                       // 552
    this.method = 'GET';                                                                                              // 553
    this.regexp = pathtoRegexp(this.path,                                                                             // 554
      this.keys = [],                                                                                                 // 555
      options.sensitive,                                                                                              // 556
      options.strict);                                                                                                // 557
  }                                                                                                                   // 558
                                                                                                                      // 559
  /**                                                                                                                 // 560
   * Expose `Route`.                                                                                                  // 561
   */                                                                                                                 // 562
                                                                                                                      // 563
  page.Route = Route;                                                                                                 // 564
                                                                                                                      // 565
  /**                                                                                                                 // 566
   * Return route middleware with                                                                                     // 567
   * the given callback `fn()`.                                                                                       // 568
   *                                                                                                                  // 569
   * @param {Function} fn                                                                                             // 570
   * @return {Function}                                                                                               // 571
   * @api public                                                                                                      // 572
   */                                                                                                                 // 573
                                                                                                                      // 574
  Route.prototype.middleware = function(fn) {                                                                         // 575
    var self = this;                                                                                                  // 576
    return function(ctx, next) {                                                                                      // 577
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);                                                     // 578
      next();                                                                                                         // 579
    };                                                                                                                // 580
  };                                                                                                                  // 581
                                                                                                                      // 582
  /**                                                                                                                 // 583
   * Check if this route matches `path`, if so                                                                        // 584
   * populate `params`.                                                                                               // 585
   *                                                                                                                  // 586
   * @param {String} path                                                                                             // 587
   * @param {Object} params                                                                                           // 588
   * @return {Boolean}                                                                                                // 589
   * @api private                                                                                                     // 590
   */                                                                                                                 // 591
                                                                                                                      // 592
  Route.prototype.match = function(path, params) {                                                                    // 593
    var keys = this.keys,                                                                                             // 594
      qsIndex = path.indexOf('?'),                                                                                    // 595
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,                                                            // 596
      m = this.regexp.exec(decodeURIComponent(pathname));                                                             // 597
                                                                                                                      // 598
    if (!m) return false;                                                                                             // 599
                                                                                                                      // 600
    for (var i = 1, len = m.length; i < len; ++i) {                                                                   // 601
      var key = keys[i - 1];                                                                                          // 602
      var val = decodeURLEncodedURIComponent(m[i]);                                                                   // 603
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {                                            // 604
        params[key.name] = val;                                                                                       // 605
      }                                                                                                               // 606
    }                                                                                                                 // 607
                                                                                                                      // 608
    return true;                                                                                                      // 609
  };                                                                                                                  // 610
                                                                                                                      // 611
                                                                                                                      // 612
  /**                                                                                                                 // 613
   * Handle "populate" events.                                                                                        // 614
   */                                                                                                                 // 615
                                                                                                                      // 616
  var onpopstate = (function () {                                                                                     // 617
    var loaded = false;                                                                                               // 618
    if ('undefined' === typeof window) {                                                                              // 619
      return;                                                                                                         // 620
    }                                                                                                                 // 621
    if (document.readyState === 'complete') {                                                                         // 622
      loaded = true;                                                                                                  // 623
    } else {                                                                                                          // 624
      window.addEventListener('load', function() {                                                                    // 625
        setTimeout(function() {                                                                                       // 626
          loaded = true;                                                                                              // 627
        }, 0);                                                                                                        // 628
      });                                                                                                             // 629
    }                                                                                                                 // 630
    return function onpopstate(e) {                                                                                   // 631
      if (!loaded) return;                                                                                            // 632
      if (e.state) {                                                                                                  // 633
        var path = e.state.path;                                                                                      // 634
        page.replace(path, e.state);                                                                                  // 635
      } else {                                                                                                        // 636
        page.show(location.pathname + location.hash, undefined, undefined, false);                                    // 637
      }                                                                                                               // 638
    };                                                                                                                // 639
  })();                                                                                                               // 640
  /**                                                                                                                 // 641
   * Handle "click" events.                                                                                           // 642
   */                                                                                                                 // 643
                                                                                                                      // 644
  function onclick(e) {                                                                                               // 645
                                                                                                                      // 646
    if (1 !== which(e)) return;                                                                                       // 647
                                                                                                                      // 648
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;                                                                 // 649
    if (e.defaultPrevented) return;                                                                                   // 650
                                                                                                                      // 651
                                                                                                                      // 652
                                                                                                                      // 653
    // ensure link                                                                                                    // 654
    var el = e.target;                                                                                                // 655
    while (el && 'A' !== el.nodeName) el = el.parentNode;                                                             // 656
    if (!el || 'A' !== el.nodeName) return;                                                                           // 657
                                                                                                                      // 658
                                                                                                                      // 659
                                                                                                                      // 660
    // Ignore if tag has                                                                                              // 661
    // 1. "download" attribute                                                                                        // 662
    // 2. rel="external" attribute                                                                                    // 663
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;                                 // 664
                                                                                                                      // 665
    // ensure non-hash for the same path                                                                              // 666
    var link = el.getAttribute('href');                                                                               // 667
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;                          // 668
                                                                                                                      // 669
                                                                                                                      // 670
                                                                                                                      // 671
    // Check for mailto: in the href                                                                                  // 672
    if (link && link.indexOf('mailto:') > -1) return;                                                                 // 673
                                                                                                                      // 674
    // check target                                                                                                   // 675
    if (el.target) return;                                                                                            // 676
                                                                                                                      // 677
    // x-origin                                                                                                       // 678
    if (!sameOrigin(el.href)) return;                                                                                 // 679
                                                                                                                      // 680
                                                                                                                      // 681
                                                                                                                      // 682
    // rebuild path                                                                                                   // 683
    var path = el.pathname + el.search + (el.hash || '');                                                             // 684
                                                                                                                      // 685
    path = path[0] !== '/' ? '/' + path : path;                                                                       // 686
                                                                                                                      // 687
    // strip leading "/[drive letter]:" on NW.js on Windows                                                           // 688
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {                                             // 689
      path = path.replace(/^\/[a-zA-Z]:\//, '/');                                                                     // 690
    }                                                                                                                 // 691
                                                                                                                      // 692
    // same page                                                                                                      // 693
    var orig = path;                                                                                                  // 694
                                                                                                                      // 695
    if (path.indexOf(base) === 0) {                                                                                   // 696
      path = path.substr(base.length);                                                                                // 697
    }                                                                                                                 // 698
                                                                                                                      // 699
    if (hashbang) path = path.replace('#!', '');                                                                      // 700
                                                                                                                      // 701
    if (base && orig === path) return;                                                                                // 702
                                                                                                                      // 703
    e.preventDefault();                                                                                               // 704
    page.show(orig);                                                                                                  // 705
  }                                                                                                                   // 706
                                                                                                                      // 707
  /**                                                                                                                 // 708
   * Event button.                                                                                                    // 709
   */                                                                                                                 // 710
                                                                                                                      // 711
  function which(e) {                                                                                                 // 712
    e = e || window.event;                                                                                            // 713
    return null === e.which ? e.button : e.which;                                                                     // 714
  }                                                                                                                   // 715
                                                                                                                      // 716
  /**                                                                                                                 // 717
   * Check if `href` is the same origin.                                                                              // 718
   */                                                                                                                 // 719
                                                                                                                      // 720
  function sameOrigin(href) {                                                                                         // 721
    var origin = location.protocol + '//' + location.hostname;                                                        // 722
    if (location.port) origin += ':' + location.port;                                                                 // 723
    return (href && (0 === href.indexOf(origin)));                                                                    // 724
  }                                                                                                                   // 725
                                                                                                                      // 726
  page.sameOrigin = sameOrigin;                                                                                       // 727
                                                                                                                      // 728
}).call(this,require('_process'))                                                                                     // 729
                                                                                                                      // 730
},{"_process":1,"path-to-regexp":4}],4:[function(require,module,exports){                                             // 731
var isArray = require('isarray');                                                                                     // 732
                                                                                                                      // 733
/**                                                                                                                   // 734
 * Expose `pathToRegexp`.                                                                                             // 735
 */                                                                                                                   // 736
module.exports = pathToRegexp;                                                                                        // 737
                                                                                                                      // 738
/**                                                                                                                   // 739
 * The main path matching regexp utility.                                                                             // 740
 *                                                                                                                    // 741
 * @type {RegExp}                                                                                                     // 742
 */                                                                                                                   // 743
var PATH_REGEXP = new RegExp([                                                                                        // 744
  // Match escaped characters that would otherwise appear in future matches.                                          // 745
  // This allows the user to escape special characters that won't transform.                                          // 746
  '(\\\\.)',                                                                                                          // 747
  // Match Express-style parameters and un-named parameters with a prefix                                             // 748
  // and optional suffixes. Matches appear as:                                                                        // 749
  //                                                                                                                  // 750
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]                                                          // 751
  // "/route(\\d+)" => [undefined, undefined, undefined, "\d+", undefined]                                            // 752
  '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',                               // 753
  // Match regexp special characters that are always escaped.                                                         // 754
  '([.+*?=^!:${}()[\\]|\\/])'                                                                                         // 755
].join('|'), 'g');                                                                                                    // 756
                                                                                                                      // 757
/**                                                                                                                   // 758
 * Escape the capturing group by escaping special characters and meaning.                                             // 759
 *                                                                                                                    // 760
 * @param  {String} group                                                                                             // 761
 * @return {String}                                                                                                   // 762
 */                                                                                                                   // 763
function escapeGroup (group) {                                                                                        // 764
  return group.replace(/([=!:$\/()])/g, '\\$1');                                                                      // 765
}                                                                                                                     // 766
                                                                                                                      // 767
/**                                                                                                                   // 768
 * Attach the keys as a property of the regexp.                                                                       // 769
 *                                                                                                                    // 770
 * @param  {RegExp} re                                                                                                // 771
 * @param  {Array}  keys                                                                                              // 772
 * @return {RegExp}                                                                                                   // 773
 */                                                                                                                   // 774
function attachKeys (re, keys) {                                                                                      // 775
  re.keys = keys;                                                                                                     // 776
  return re;                                                                                                          // 777
}                                                                                                                     // 778
                                                                                                                      // 779
/**                                                                                                                   // 780
 * Get the flags for a regexp from the options.                                                                       // 781
 *                                                                                                                    // 782
 * @param  {Object} options                                                                                           // 783
 * @return {String}                                                                                                   // 784
 */                                                                                                                   // 785
function flags (options) {                                                                                            // 786
  return options.sensitive ? '' : 'i';                                                                                // 787
}                                                                                                                     // 788
                                                                                                                      // 789
/**                                                                                                                   // 790
 * Pull out keys from a regexp.                                                                                       // 791
 *                                                                                                                    // 792
 * @param  {RegExp} path                                                                                              // 793
 * @param  {Array}  keys                                                                                              // 794
 * @return {RegExp}                                                                                                   // 795
 */                                                                                                                   // 796
function regexpToRegexp (path, keys) {                                                                                // 797
  // Use a negative lookahead to match only capturing groups.                                                         // 798
  var groups = path.source.match(/\((?!\?)/g);                                                                        // 799
                                                                                                                      // 800
  if (groups) {                                                                                                       // 801
    for (var i = 0; i < groups.length; i++) {                                                                         // 802
      keys.push({                                                                                                     // 803
        name:      i,                                                                                                 // 804
        delimiter: null,                                                                                              // 805
        optional:  false,                                                                                             // 806
        repeat:    false                                                                                              // 807
      });                                                                                                             // 808
    }                                                                                                                 // 809
  }                                                                                                                   // 810
                                                                                                                      // 811
  return attachKeys(path, keys);                                                                                      // 812
}                                                                                                                     // 813
                                                                                                                      // 814
/**                                                                                                                   // 815
 * Transform an array into a regexp.                                                                                  // 816
 *                                                                                                                    // 817
 * @param  {Array}  path                                                                                              // 818
 * @param  {Array}  keys                                                                                              // 819
 * @param  {Object} options                                                                                           // 820
 * @return {RegExp}                                                                                                   // 821
 */                                                                                                                   // 822
function arrayToRegexp (path, keys, options) {                                                                        // 823
  var parts = [];                                                                                                     // 824
                                                                                                                      // 825
  for (var i = 0; i < path.length; i++) {                                                                             // 826
    parts.push(pathToRegexp(path[i], keys, options).source);                                                          // 827
  }                                                                                                                   // 828
                                                                                                                      // 829
  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));                                             // 830
  return attachKeys(regexp, keys);                                                                                    // 831
}                                                                                                                     // 832
                                                                                                                      // 833
/**                                                                                                                   // 834
 * Replace the specific tags with regexp strings.                                                                     // 835
 *                                                                                                                    // 836
 * @param  {String} path                                                                                              // 837
 * @param  {Array}  keys                                                                                              // 838
 * @return {String}                                                                                                   // 839
 */                                                                                                                   // 840
function replacePath (path, keys) {                                                                                   // 841
  var index = 0;                                                                                                      // 842
                                                                                                                      // 843
  function replace (_, escaped, prefix, key, capture, group, suffix, escape) {                                        // 844
    if (escaped) {                                                                                                    // 845
      return escaped;                                                                                                 // 846
    }                                                                                                                 // 847
                                                                                                                      // 848
    if (escape) {                                                                                                     // 849
      return '\\' + escape;                                                                                           // 850
    }                                                                                                                 // 851
                                                                                                                      // 852
    var repeat   = suffix === '+' || suffix === '*';                                                                  // 853
    var optional = suffix === '?' || suffix === '*';                                                                  // 854
                                                                                                                      // 855
    keys.push({                                                                                                       // 856
      name:      key || index++,                                                                                      // 857
      delimiter: prefix || '/',                                                                                       // 858
      optional:  optional,                                                                                            // 859
      repeat:    repeat                                                                                               // 860
    });                                                                                                               // 861
                                                                                                                      // 862
    prefix = prefix ? ('\\' + prefix) : '';                                                                           // 863
    capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');                                      // 864
                                                                                                                      // 865
    if (repeat) {                                                                                                     // 866
      capture = capture + '(?:' + prefix + capture + ')*';                                                            // 867
    }                                                                                                                 // 868
                                                                                                                      // 869
    if (optional) {                                                                                                   // 870
      return '(?:' + prefix + '(' + capture + '))?';                                                                  // 871
    }                                                                                                                 // 872
                                                                                                                      // 873
    // Basic parameter support.                                                                                       // 874
    return prefix + '(' + capture + ')';                                                                              // 875
  }                                                                                                                   // 876
                                                                                                                      // 877
  return path.replace(PATH_REGEXP, replace);                                                                          // 878
}                                                                                                                     // 879
                                                                                                                      // 880
/**                                                                                                                   // 881
 * Normalize the given path string, returning a regular expression.                                                   // 882
 *                                                                                                                    // 883
 * An empty array can be passed in for the keys, which will hold the                                                  // 884
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will                                          // 885
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.                                        // 886
 *                                                                                                                    // 887
 * @param  {(String|RegExp|Array)} path                                                                               // 888
 * @param  {Array}                 [keys]                                                                             // 889
 * @param  {Object}                [options]                                                                          // 890
 * @return {RegExp}                                                                                                   // 891
 */                                                                                                                   // 892
function pathToRegexp (path, keys, options) {                                                                         // 893
  keys = keys || [];                                                                                                  // 894
                                                                                                                      // 895
  if (!isArray(keys)) {                                                                                               // 896
    options = keys;                                                                                                   // 897
    keys = [];                                                                                                        // 898
  } else if (!options) {                                                                                              // 899
    options = {};                                                                                                     // 900
  }                                                                                                                   // 901
                                                                                                                      // 902
  if (path instanceof RegExp) {                                                                                       // 903
    return regexpToRegexp(path, keys, options);                                                                       // 904
  }                                                                                                                   // 905
                                                                                                                      // 906
  if (isArray(path)) {                                                                                                // 907
    return arrayToRegexp(path, keys, options);                                                                        // 908
  }                                                                                                                   // 909
                                                                                                                      // 910
  var strict = options.strict;                                                                                        // 911
  var end = options.end !== false;                                                                                    // 912
  var route = replacePath(path, keys);                                                                                // 913
  var endsWithSlash = path.charAt(path.length - 1) === '/';                                                           // 914
                                                                                                                      // 915
  // In non-strict mode we allow a slash at the end of match. If the path to                                          // 916
  // match already ends with a slash, we remove it for consistency. The slash                                         // 917
  // is valid at the end of a path match, not in the middle. This is important                                        // 918
  // in non-ending mode, where "/test/" shouldn't match "/test//route".                                               // 919
  if (!strict) {                                                                                                      // 920
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';                                           // 921
  }                                                                                                                   // 922
                                                                                                                      // 923
  if (end) {                                                                                                          // 924
    route += '$';                                                                                                     // 925
  } else {                                                                                                            // 926
    // In non-ending mode, we need the capturing groups to match as much as                                           // 927
    // possible by using a positive lookahead to the end or next path segment.                                        // 928
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';                                                              // 929
  }                                                                                                                   // 930
                                                                                                                      // 931
  return attachKeys(new RegExp('^' + route, flags(options)), keys);                                                   // 932
}                                                                                                                     // 933
                                                                                                                      // 934
},{"isarray":5}],5:[function(require,module,exports){                                                                 // 935
module.exports = Array.isArray || function (arr) {                                                                    // 936
  return Object.prototype.toString.call(arr) == '[object Array]';                                                     // 937
};                                                                                                                    // 938
                                                                                                                      // 939
},{}],6:[function(require,module,exports){                                                                            // 940
module.exports = require('./lib/');                                                                                   // 941
                                                                                                                      // 942
},{"./lib/":7}],7:[function(require,module,exports){                                                                  // 943
// Load modules                                                                                                       // 944
                                                                                                                      // 945
var Stringify = require('./stringify');                                                                               // 946
var Parse = require('./parse');                                                                                       // 947
                                                                                                                      // 948
                                                                                                                      // 949
// Declare internals                                                                                                  // 950
                                                                                                                      // 951
var internals = {};                                                                                                   // 952
                                                                                                                      // 953
                                                                                                                      // 954
module.exports = {                                                                                                    // 955
    stringify: Stringify,                                                                                             // 956
    parse: Parse                                                                                                      // 957
};                                                                                                                    // 958
                                                                                                                      // 959
},{"./parse":8,"./stringify":9}],8:[function(require,module,exports){                                                 // 960
// Load modules                                                                                                       // 961
                                                                                                                      // 962
var Utils = require('./utils');                                                                                       // 963
                                                                                                                      // 964
                                                                                                                      // 965
// Declare internals                                                                                                  // 966
                                                                                                                      // 967
var internals = {                                                                                                     // 968
    delimiter: '&',                                                                                                   // 969
    depth: 5,                                                                                                         // 970
    arrayLimit: 20,                                                                                                   // 971
    parameterLimit: 1000,                                                                                             // 972
    strictNullHandling: false                                                                                         // 973
};                                                                                                                    // 974
                                                                                                                      // 975
                                                                                                                      // 976
internals.parseValues = function (str, options) {                                                                     // 977
                                                                                                                      // 978
    var obj = {};                                                                                                     // 979
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
                                                                                                                      // 981
    for (var i = 0, il = parts.length; i < il; ++i) {                                                                 // 982
        var part = parts[i];                                                                                          // 983
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;                             // 984
                                                                                                                      // 985
        if (pos === -1) {                                                                                             // 986
            obj[Utils.decode(part)] = '';                                                                             // 987
                                                                                                                      // 988
            if (options.strictNullHandling) {                                                                         // 989
                obj[Utils.decode(part)] = null;                                                                       // 990
            }                                                                                                         // 991
        }                                                                                                             // 992
        else {                                                                                                        // 993
            var key = Utils.decode(part.slice(0, pos));                                                               // 994
            var val = Utils.decode(part.slice(pos + 1));                                                              // 995
                                                                                                                      // 996
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {                                                    // 997
                obj[key] = val;                                                                                       // 998
            }                                                                                                         // 999
            else {                                                                                                    // 1000
                obj[key] = [].concat(obj[key]).concat(val);                                                           // 1001
            }                                                                                                         // 1002
        }                                                                                                             // 1003
    }                                                                                                                 // 1004
                                                                                                                      // 1005
    return obj;                                                                                                       // 1006
};                                                                                                                    // 1007
                                                                                                                      // 1008
                                                                                                                      // 1009
internals.parseObject = function (chain, val, options) {                                                              // 1010
                                                                                                                      // 1011
    if (!chain.length) {                                                                                              // 1012
        return val;                                                                                                   // 1013
    }                                                                                                                 // 1014
                                                                                                                      // 1015
    var root = chain.shift();                                                                                         // 1016
                                                                                                                      // 1017
    var obj;                                                                                                          // 1018
    if (root === '[]') {                                                                                              // 1019
        obj = [];                                                                                                     // 1020
        obj = obj.concat(internals.parseObject(chain, val, options));                                                 // 1021
    }                                                                                                                 // 1022
    else {                                                                                                            // 1023
        obj = Object.create(null);                                                                                    // 1024
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;     // 1025
        var index = parseInt(cleanRoot, 10);                                                                          // 1026
        var indexString = '' + index;                                                                                 // 1027
        if (!isNaN(index) &&                                                                                          // 1028
            root !== cleanRoot &&                                                                                     // 1029
            indexString === cleanRoot &&                                                                              // 1030
            index >= 0 &&                                                                                             // 1031
            (options.parseArrays &&                                                                                   // 1032
             index <= options.arrayLimit)) {                                                                          // 1033
                                                                                                                      // 1034
            obj = [];                                                                                                 // 1035
            obj[index] = internals.parseObject(chain, val, options);                                                  // 1036
        }                                                                                                             // 1037
        else {                                                                                                        // 1038
            obj[cleanRoot] = internals.parseObject(chain, val, options);                                              // 1039
        }                                                                                                             // 1040
    }                                                                                                                 // 1041
                                                                                                                      // 1042
    return obj;                                                                                                       // 1043
};                                                                                                                    // 1044
                                                                                                                      // 1045
                                                                                                                      // 1046
internals.parseKeys = function (key, val, options) {                                                                  // 1047
                                                                                                                      // 1048
    if (!key) {                                                                                                       // 1049
        return;                                                                                                       // 1050
    }                                                                                                                 // 1051
                                                                                                                      // 1052
    // Transform dot notation to bracket notation                                                                     // 1053
                                                                                                                      // 1054
    if (options.allowDots) {                                                                                          // 1055
        key = key.replace(/\.([^\.\[]+)/g, '[$1]');                                                                   // 1056
    }                                                                                                                 // 1057
                                                                                                                      // 1058
    // The regex chunks                                                                                               // 1059
                                                                                                                      // 1060
    var parent = /^([^\[\]]*)/;                                                                                       // 1061
    var child = /(\[[^\[\]]*\])/g;                                                                                    // 1062
                                                                                                                      // 1063
    // Get the parent                                                                                                 // 1064
                                                                                                                      // 1065
    var segment = parent.exec(key);                                                                                   // 1066
                                                                                                                      // 1067
    // Stash the parent if it exists                                                                                  // 1068
                                                                                                                      // 1069
    var keys = [];                                                                                                    // 1070
    if (segment[1]) {                                                                                                 // 1071
        keys.push(segment[1]);                                                                                        // 1072
    }                                                                                                                 // 1073
                                                                                                                      // 1074
    // Loop through children appending to the array until we hit depth                                                // 1075
                                                                                                                      // 1076
    var i = 0;                                                                                                        // 1077
    while ((segment = child.exec(key)) !== null && i < options.depth) {                                               // 1078
                                                                                                                      // 1079
        ++i;                                                                                                          // 1080
        keys.push(segment[1]);                                                                                        // 1081
    }                                                                                                                 // 1082
                                                                                                                      // 1083
    // If there's a remainder, just add whatever is left                                                              // 1084
                                                                                                                      // 1085
    if (segment) {                                                                                                    // 1086
        keys.push('[' + key.slice(segment.index) + ']');                                                              // 1087
    }                                                                                                                 // 1088
                                                                                                                      // 1089
    return internals.parseObject(keys, val, options);                                                                 // 1090
};                                                                                                                    // 1091
                                                                                                                      // 1092
                                                                                                                      // 1093
module.exports = function (str, options) {                                                                            // 1094
                                                                                                                      // 1095
    if (str === '' ||                                                                                                 // 1096
        str === null ||                                                                                               // 1097
        typeof str === 'undefined') {                                                                                 // 1098
                                                                                                                      // 1099
        return Object.create(null);                                                                                   // 1100
    }                                                                                                                 // 1101
                                                                                                                      // 1102
    options = options || {};                                                                                          // 1103
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;                              // 1105
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;          // 1106
    options.parseArrays = options.parseArrays !== false;                                                              // 1107
    options.allowDots = options.allowDots !== false;                                                                  // 1108
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
                                                                                                                      // 1111
                                                                                                                      // 1112
    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;                                // 1113
    var obj = Object.create(null);                                                                                    // 1114
                                                                                                                      // 1115
    // Iterate over the keys and setup the new object                                                                 // 1116
                                                                                                                      // 1117
    var keys = Object.keys(tempObj);                                                                                  // 1118
    for (var i = 0, il = keys.length; i < il; ++i) {                                                                  // 1119
        var key = keys[i];                                                                                            // 1120
        var newObj = internals.parseKeys(key, tempObj[key], options);                                                 // 1121
        obj = Utils.merge(obj, newObj);                                                                               // 1122
    }                                                                                                                 // 1123
                                                                                                                      // 1124
    return Utils.compact(obj);                                                                                        // 1125
};                                                                                                                    // 1126
                                                                                                                      // 1127
},{"./utils":10}],9:[function(require,module,exports){                                                                // 1128
// Load modules                                                                                                       // 1129
                                                                                                                      // 1130
var Utils = require('./utils');                                                                                       // 1131
                                                                                                                      // 1132
                                                                                                                      // 1133
// Declare internals                                                                                                  // 1134
                                                                                                                      // 1135
var internals = {                                                                                                     // 1136
    delimiter: '&',                                                                                                   // 1137
    arrayPrefixGenerators: {                                                                                          // 1138
        brackets: function (prefix, key) {                                                                            // 1139
                                                                                                                      // 1140
            return prefix + '[]';                                                                                     // 1141
        },                                                                                                            // 1142
        indices: function (prefix, key) {                                                                             // 1143
                                                                                                                      // 1144
            return prefix + '[' + key + ']';                                                                          // 1145
        },                                                                                                            // 1146
        repeat: function (prefix, key) {                                                                              // 1147
                                                                                                                      // 1148
            return prefix;                                                                                            // 1149
        }                                                                                                             // 1150
    },                                                                                                                // 1151
    strictNullHandling: false                                                                                         // 1152
};                                                                                                                    // 1153
                                                                                                                      // 1154
                                                                                                                      // 1155
internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {                       // 1156
                                                                                                                      // 1157
    if (typeof filter === 'function') {                                                                               // 1158
        obj = filter(prefix, obj);                                                                                    // 1159
    }                                                                                                                 // 1160
    else if (Utils.isBuffer(obj)) {                                                                                   // 1161
        obj = obj.toString();                                                                                         // 1162
    }                                                                                                                 // 1163
    else if (obj instanceof Date) {                                                                                   // 1164
        obj = obj.toISOString();                                                                                      // 1165
    }                                                                                                                 // 1166
    else if (obj === null) {                                                                                          // 1167
        if (strictNullHandling) {                                                                                     // 1168
            return Utils.encode(prefix);                                                                              // 1169
        }                                                                                                             // 1170
                                                                                                                      // 1171
        obj = '';                                                                                                     // 1172
    }                                                                                                                 // 1173
                                                                                                                      // 1174
    if (typeof obj === 'string' ||                                                                                    // 1175
        typeof obj === 'number' ||                                                                                    // 1176
        typeof obj === 'boolean') {                                                                                   // 1177
                                                                                                                      // 1178
        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];                                                      // 1179
    }                                                                                                                 // 1180
                                                                                                                      // 1181
    var values = [];                                                                                                  // 1182
                                                                                                                      // 1183
    if (typeof obj === 'undefined') {                                                                                 // 1184
        return values;                                                                                                // 1185
    }                                                                                                                 // 1186
                                                                                                                      // 1187
    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);                                                  // 1188
    for (var i = 0, il = objKeys.length; i < il; ++i) {                                                               // 1189
        var key = objKeys[i];                                                                                         // 1190
                                                                                                                      // 1191
        if (Array.isArray(obj)) {                                                                                     // 1192
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
        }                                                                                                             // 1194
        else {                                                                                                        // 1195
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
        }                                                                                                             // 1197
    }                                                                                                                 // 1198
                                                                                                                      // 1199
    return values;                                                                                                    // 1200
};                                                                                                                    // 1201
                                                                                                                      // 1202
                                                                                                                      // 1203
module.exports = function (obj, options) {                                                                            // 1204
                                                                                                                      // 1205
    options = options || {};                                                                                          // 1206
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;               // 1207
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
    var objKeys;                                                                                                      // 1209
    var filter;                                                                                                       // 1210
    if (typeof options.filter === 'function') {                                                                       // 1211
        filter = options.filter;                                                                                      // 1212
        obj = filter('', obj);                                                                                        // 1213
    }                                                                                                                 // 1214
    else if (Array.isArray(options.filter)) {                                                                         // 1215
        objKeys = filter = options.filter;                                                                            // 1216
    }                                                                                                                 // 1217
                                                                                                                      // 1218
    var keys = [];                                                                                                    // 1219
                                                                                                                      // 1220
    if (typeof obj !== 'object' ||                                                                                    // 1221
        obj === null) {                                                                                               // 1222
                                                                                                                      // 1223
        return '';                                                                                                    // 1224
    }                                                                                                                 // 1225
                                                                                                                      // 1226
    var arrayFormat;                                                                                                  // 1227
    if (options.arrayFormat in internals.arrayPrefixGenerators) {                                                     // 1228
        arrayFormat = options.arrayFormat;                                                                            // 1229
    }                                                                                                                 // 1230
    else if ('indices' in options) {                                                                                  // 1231
        arrayFormat = options.indices ? 'indices' : 'repeat';                                                         // 1232
    }                                                                                                                 // 1233
    else {                                                                                                            // 1234
        arrayFormat = 'indices';                                                                                      // 1235
    }                                                                                                                 // 1236
                                                                                                                      // 1237
    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];                                           // 1238
                                                                                                                      // 1239
    if (!objKeys) {                                                                                                   // 1240
        objKeys = Object.keys(obj);                                                                                   // 1241
    }                                                                                                                 // 1242
    for (var i = 0, il = objKeys.length; i < il; ++i) {                                                               // 1243
        var key = objKeys[i];                                                                                         // 1244
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));      // 1245
    }                                                                                                                 // 1246
                                                                                                                      // 1247
    return keys.join(delimiter);                                                                                      // 1248
};                                                                                                                    // 1249
                                                                                                                      // 1250
},{"./utils":10}],10:[function(require,module,exports){                                                               // 1251
// Load modules                                                                                                       // 1252
                                                                                                                      // 1253
                                                                                                                      // 1254
// Declare internals                                                                                                  // 1255
                                                                                                                      // 1256
var internals = {};                                                                                                   // 1257
internals.hexTable = new Array(256);                                                                                  // 1258
for (var i = 0; i < 256; ++i) {                                                                                       // 1259
    internals.hexTable[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();                               // 1260
}                                                                                                                     // 1261
                                                                                                                      // 1262
                                                                                                                      // 1263
exports.arrayToObject = function (source) {                                                                           // 1264
                                                                                                                      // 1265
    var obj = Object.create(null);                                                                                    // 1266
    for (var i = 0, il = source.length; i < il; ++i) {                                                                // 1267
        if (typeof source[i] !== 'undefined') {                                                                       // 1268
                                                                                                                      // 1269
            obj[i] = source[i];                                                                                       // 1270
        }                                                                                                             // 1271
    }                                                                                                                 // 1272
                                                                                                                      // 1273
    return obj;                                                                                                       // 1274
};                                                                                                                    // 1275
                                                                                                                      // 1276
                                                                                                                      // 1277
exports.merge = function (target, source) {                                                                           // 1278
                                                                                                                      // 1279
    if (!source) {                                                                                                    // 1280
        return target;                                                                                                // 1281
    }                                                                                                                 // 1282
                                                                                                                      // 1283
    if (typeof source !== 'object') {                                                                                 // 1284
        if (Array.isArray(target)) {                                                                                  // 1285
            target.push(source);                                                                                      // 1286
        }                                                                                                             // 1287
        else if (typeof target === 'object') {                                                                        // 1288
            target[source] = true;                                                                                    // 1289
        }                                                                                                             // 1290
        else {                                                                                                        // 1291
            target = [target, source];                                                                                // 1292
        }                                                                                                             // 1293
                                                                                                                      // 1294
        return target;                                                                                                // 1295
    }                                                                                                                 // 1296
                                                                                                                      // 1297
    if (typeof target !== 'object') {                                                                                 // 1298
        target = [target].concat(source);                                                                             // 1299
        return target;                                                                                                // 1300
    }                                                                                                                 // 1301
                                                                                                                      // 1302
    if (Array.isArray(target) &&                                                                                      // 1303
        !Array.isArray(source)) {                                                                                     // 1304
                                                                                                                      // 1305
        target = exports.arrayToObject(target);                                                                       // 1306
    }                                                                                                                 // 1307
                                                                                                                      // 1308
    var keys = Object.keys(source);                                                                                   // 1309
    for (var k = 0, kl = keys.length; k < kl; ++k) {                                                                  // 1310
        var key = keys[k];                                                                                            // 1311
        var value = source[key];                                                                                      // 1312
                                                                                                                      // 1313
        if (!target[key]) {                                                                                           // 1314
            target[key] = value;                                                                                      // 1315
        }                                                                                                             // 1316
        else {                                                                                                        // 1317
            target[key] = exports.merge(target[key], value);                                                          // 1318
        }                                                                                                             // 1319
    }                                                                                                                 // 1320
                                                                                                                      // 1321
    return target;                                                                                                    // 1322
};                                                                                                                    // 1323
                                                                                                                      // 1324
                                                                                                                      // 1325
exports.decode = function (str) {                                                                                     // 1326
                                                                                                                      // 1327
    try {                                                                                                             // 1328
        return decodeURIComponent(str.replace(/\+/g, ' '));                                                           // 1329
    } catch (e) {                                                                                                     // 1330
        return str;                                                                                                   // 1331
    }                                                                                                                 // 1332
};                                                                                                                    // 1333
                                                                                                                      // 1334
exports.encode = function (str) {                                                                                     // 1335
                                                                                                                      // 1336
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.               // 1337
    // It has been adapted here for stricter adherence to RFC 3986                                                    // 1338
    if (str.length === 0) {                                                                                           // 1339
        return str;                                                                                                   // 1340
    }                                                                                                                 // 1341
                                                                                                                      // 1342
    if (typeof str !== 'string') {                                                                                    // 1343
        str = '' + str;                                                                                               // 1344
    }                                                                                                                 // 1345
                                                                                                                      // 1346
    var out = '';                                                                                                     // 1347
    for (var i = 0, il = str.length; i < il; ++i) {                                                                   // 1348
        var c = str.charCodeAt(i);                                                                                    // 1349
                                                                                                                      // 1350
        if (c === 0x2D || // -                                                                                        // 1351
            c === 0x2E || // .                                                                                        // 1352
            c === 0x5F || // _                                                                                        // 1353
            c === 0x7E || // ~                                                                                        // 1354
            (c >= 0x30 && c <= 0x39) || // 0-9                                                                        // 1355
            (c >= 0x41 && c <= 0x5A) || // a-z                                                                        // 1356
            (c >= 0x61 && c <= 0x7A)) { // A-Z                                                                        // 1357
                                                                                                                      // 1358
            out += str[i];                                                                                            // 1359
            continue;                                                                                                 // 1360
        }                                                                                                             // 1361
                                                                                                                      // 1362
        if (c < 0x80) {                                                                                               // 1363
            out += internals.hexTable[c];                                                                             // 1364
            continue;                                                                                                 // 1365
        }                                                                                                             // 1366
                                                                                                                      // 1367
        if (c < 0x800) {                                                                                              // 1368
            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];                       // 1369
            continue;                                                                                                 // 1370
        }                                                                                                             // 1371
                                                                                                                      // 1372
        if (c < 0xD800 || c >= 0xE000) {                                                                              // 1373
            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;                                                                                                 // 1375
        }                                                                                                             // 1376
                                                                                                                      // 1377
        ++i;                                                                                                          // 1378
        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));                                            // 1379
        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
    }                                                                                                                 // 1381
                                                                                                                      // 1382
    return out;                                                                                                       // 1383
};                                                                                                                    // 1384
                                                                                                                      // 1385
exports.compact = function (obj, refs) {                                                                              // 1386
                                                                                                                      // 1387
    if (typeof obj !== 'object' ||                                                                                    // 1388
        obj === null) {                                                                                               // 1389
                                                                                                                      // 1390
        return obj;                                                                                                   // 1391
    }                                                                                                                 // 1392
                                                                                                                      // 1393
    refs = refs || [];                                                                                                // 1394
    var lookup = refs.indexOf(obj);                                                                                   // 1395
    if (lookup !== -1) {                                                                                              // 1396
        return refs[lookup];                                                                                          // 1397
    }                                                                                                                 // 1398
                                                                                                                      // 1399
    refs.push(obj);                                                                                                   // 1400
                                                                                                                      // 1401
    if (Array.isArray(obj)) {                                                                                         // 1402
        var compacted = [];                                                                                           // 1403
                                                                                                                      // 1404
        for (var i = 0, il = obj.length; i < il; ++i) {                                                               // 1405
            if (typeof obj[i] !== 'undefined') {                                                                      // 1406
                compacted.push(obj[i]);                                                                               // 1407
            }                                                                                                         // 1408
        }                                                                                                             // 1409
                                                                                                                      // 1410
        return compacted;                                                                                             // 1411
    }                                                                                                                 // 1412
                                                                                                                      // 1413
    var keys = Object.keys(obj);                                                                                      // 1414
    for (i = 0, il = keys.length; i < il; ++i) {                                                                      // 1415
        var key = keys[i];                                                                                            // 1416
        obj[key] = exports.compact(obj[key], refs);                                                                   // 1417
    }                                                                                                                 // 1418
                                                                                                                      // 1419
    return obj;                                                                                                       // 1420
};                                                                                                                    // 1421
                                                                                                                      // 1422
                                                                                                                      // 1423
exports.isRegExp = function (obj) {                                                                                   // 1424
                                                                                                                      // 1425
    return Object.prototype.toString.call(obj) === '[object RegExp]';                                                 // 1426
};                                                                                                                    // 1427
                                                                                                                      // 1428
                                                                                                                      // 1429
exports.isBuffer = function (obj) {                                                                                   // 1430
                                                                                                                      // 1431
    if (obj === null ||                                                                                               // 1432
        typeof obj === 'undefined') {                                                                                 // 1433
                                                                                                                      // 1434
        return false;                                                                                                 // 1435
    }                                                                                                                 // 1436
                                                                                                                      // 1437
    return !!(obj.constructor &&                                                                                      // 1438
              obj.constructor.isBuffer &&                                                                             // 1439
              obj.constructor.isBuffer(obj));                                                                         // 1440
};                                                                                                                    // 1441
                                                                                                                      // 1442
},{}]},{},[2])                                                                                                        // 1443
//# sourceMappingURL=kadira:flow-router/client.browserify.js                                                          // 1444
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1446
}).call(this);                                                                                                        // 1447
                                                                                                                      // 1448
                                                                                                                      // 1449
                                                                                                                      // 1450
                                                                                                                      // 1451
                                                                                                                      // 1452
                                                                                                                      // 1453
(function () {                                                                                                        // 1454
                                                                                                                      // 1455
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/triggers.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// a set of utility functions for triggers                                                                            // 1
                                                                                                                      // 2
Triggers = {};                                                                                                        // 3
                                                                                                                      // 4
// Apply filters for a set of triggers                                                                                // 5
// @triggers - a set of triggers                                                                                      // 6
// @filter - filter with array fileds with `only` and `except`                                                        // 7
//           support only either `only` or `except`, but not both                                                     // 8
Triggers.applyFilters = function(triggers, filter) {                                                                  // 9
  if(!(triggers instanceof Array)) {                                                                                  // 10
    triggers = [triggers];                                                                                            // 11
  }                                                                                                                   // 12
                                                                                                                      // 13
  if(!filter) {                                                                                                       // 14
    return triggers;                                                                                                  // 15
  }                                                                                                                   // 16
                                                                                                                      // 17
  if(filter.only && filter.except) {                                                                                  // 18
    throw new Error("Triggers don't support only and except filters at once");                                        // 19
  }                                                                                                                   // 20
                                                                                                                      // 21
  if(filter.only && !(filter.only instanceof Array)) {                                                                // 22
    throw new Error("only filters needs to be an array");                                                             // 23
  }                                                                                                                   // 24
                                                                                                                      // 25
  if(filter.except && !(filter.except instanceof Array)) {                                                            // 26
    throw new Error("except filters needs to be an array");                                                           // 27
  }                                                                                                                   // 28
                                                                                                                      // 29
  if(filter.only) {                                                                                                   // 30
    return Triggers.createRouteBoundTriggers(triggers, filter.only);                                                  // 31
  }                                                                                                                   // 32
                                                                                                                      // 33
  if(filter.except) {                                                                                                 // 34
    return Triggers.createRouteBoundTriggers(triggers, filter.except, true);                                          // 35
  }                                                                                                                   // 36
                                                                                                                      // 37
  throw new Error("Provided a filter but not supported");                                                             // 38
};                                                                                                                    // 39
                                                                                                                      // 40
//  create triggers by bounding them to a set of route names                                                          // 41
//  @triggers - a set of triggers                                                                                     // 42
//  @names - list of route names to be bound (trigger runs only for these names)                                      // 43
//  @negate - negate the result (triggers won't run for above names)                                                  // 44
Triggers.createRouteBoundTriggers = function(triggers, names, negate) {                                               // 45
  var namesMap = {};                                                                                                  // 46
  _.each(names, function(name) {                                                                                      // 47
    namesMap[name] = true;                                                                                            // 48
  });                                                                                                                 // 49
                                                                                                                      // 50
  var filteredTriggers = _.map(triggers, function(originalTrigger) {                                                  // 51
    var modifiedTrigger = function(context, next) {                                                                   // 52
      var routeName = context.route.name;                                                                             // 53
      var matched = (namesMap[routeName])? 1: -1;                                                                     // 54
      matched = (negate)? matched * -1 : matched;                                                                     // 55
                                                                                                                      // 56
      if(matched === 1) {                                                                                             // 57
        originalTrigger(context, next);                                                                               // 58
      }                                                                                                               // 59
    };                                                                                                                // 60
    return modifiedTrigger;                                                                                           // 61
  });                                                                                                                 // 62
                                                                                                                      // 63
  return filteredTriggers;                                                                                            // 64
};                                                                                                                    // 65
                                                                                                                      // 66
//  run triggers and abort if redirected                                                                              // 67
//  @triggers - a set of triggers                                                                                     // 68
//  @context - context we need to pass (it must have the route)                                                       // 69
//  @redirectFn - function which used to redirect                                                                     // 70
//  @after - called after if only all the triggers runs                                                               // 71
Triggers.runTriggers = function(triggers, context, redirectFn, after) {                                               // 72
  var abort = false;                                                                                                  // 73
  var inCurrentLoop = true;                                                                                           // 74
  var alreadyRedirected = false;                                                                                      // 75
                                                                                                                      // 76
  for(var lc=0; lc<triggers.length; lc++) {                                                                           // 77
    var trigger = triggers[lc];                                                                                       // 78
    trigger(context, doRedirect);                                                                                     // 79
                                                                                                                      // 80
    if(abort) {                                                                                                       // 81
      return;                                                                                                         // 82
    }                                                                                                                 // 83
  }                                                                                                                   // 84
                                                                                                                      // 85
  // mark that, we've exceeds the currentEventloop for                                                                // 86
  // this set of triggers.                                                                                            // 87
  inCurrentLoop = false;                                                                                              // 88
  after();                                                                                                            // 89
                                                                                                                      // 90
  function doRedirect(url, params, queryParams) {                                                                     // 91
    if(alreadyRedirected) {                                                                                           // 92
      throw new Error("already redirected");                                                                          // 93
    }                                                                                                                 // 94
                                                                                                                      // 95
    if(!inCurrentLoop) {                                                                                              // 96
      throw new Error("redirect needs to be done in sync");                                                           // 97
    }                                                                                                                 // 98
                                                                                                                      // 99
    if(!url) {                                                                                                        // 100
      throw new Error("trigger redirect requires an URL");                                                            // 101
    }                                                                                                                 // 102
                                                                                                                      // 103
    abort = true;                                                                                                     // 104
    alreadyRedirected = true;                                                                                         // 105
    redirectFn(url, params, queryParams);                                                                             // 106
  }                                                                                                                   // 107
};                                                                                                                    // 108
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1571
}).call(this);                                                                                                        // 1572
                                                                                                                      // 1573
                                                                                                                      // 1574
                                                                                                                      // 1575
                                                                                                                      // 1576
                                                                                                                      // 1577
                                                                                                                      // 1578
(function () {                                                                                                        // 1579
                                                                                                                      // 1580
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/router.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Router = function () {                                                                                                // 1
  var self = this;                                                                                                    // 2
  this.globals = [];                                                                                                  // 3
  this.subscriptions = Function.prototype;                                                                            // 4
                                                                                                                      // 5
  this._tracker = this._buildTracker();                                                                               // 6
  this._current = {};                                                                                                 // 7
                                                                                                                      // 8
  // tracks the current path change                                                                                   // 9
  this._onEveryPath = new Tracker.Dependency();                                                                       // 10
                                                                                                                      // 11
  this._globalRoute = new Route(this);                                                                                // 12
                                                                                                                      // 13
  // if _askedToWait is true. We don't automatically start the router                                                 // 14
  // in Meteor.startup callback. (see client/_init.js)                                                                // 15
  // Instead user need to call `.initialize()                                                                         // 16
  this._askedToWait = false;                                                                                          // 17
  this._initialized = false;                                                                                          // 18
  this._triggersEnter = [];                                                                                           // 19
  this._triggersExit = [];                                                                                            // 20
  this._routes = [];                                                                                                  // 21
  this._routesMap = {};                                                                                               // 22
  this._updateCallbacks();                                                                                            // 23
  this.notFound = this.notfound = null;                                                                               // 24
  // indicate it's okay (or not okay) to run the tracker                                                              // 25
  // when doing subscriptions                                                                                         // 26
  // using a number and increment it help us to support FlowRouter.go()                                               // 27
  // and legitimate reruns inside tracker on the same event loop.                                                     // 28
  // this is a solution for #145                                                                                      // 29
  this.safeToRun = 0;                                                                                                 // 30
                                                                                                                      // 31
  this.env = {                                                                                                        // 32
    replaceState: new Meteor.EnvironmentVariable(),                                                                   // 33
    reload: new Meteor.EnvironmentVariable(),                                                                         // 34
    trailingSlash: new Meteor.EnvironmentVariable()                                                                   // 35
  };                                                                                                                  // 36
                                                                                                                      // 37
  // redirect function used inside triggers                                                                           // 38
  this._redirectFn = function(pathDef, fields, queryParams) {                                                         // 39
    self.withReplaceState(function() {                                                                                // 40
      var path = FlowRouter.path(pathDef, fields, queryParams);                                                       // 41
      self._page.redirect(path);                                                                                      // 42
    });                                                                                                               // 43
  };                                                                                                                  // 44
  this._initTriggersAPI();                                                                                            // 45
};                                                                                                                    // 46
                                                                                                                      // 47
Router.prototype.route = function(path, options, group) {                                                             // 48
  if (!/^\/.*/.test(path)) {                                                                                          // 49
    var message = "route's path must start with '/'";                                                                 // 50
    throw new Error(message);                                                                                         // 51
  }                                                                                                                   // 52
                                                                                                                      // 53
  options = options || {};                                                                                            // 54
  var self = this;                                                                                                    // 55
  var route = new Route(this, path, options, group);                                                                  // 56
                                                                                                                      // 57
  // calls when the page route being activates                                                                        // 58
  route._actionHandle = function (context, next) {                                                                    // 59
    var oldRoute = self._current.route;                                                                               // 60
    var queryParams = self._qs.parse(context.querystring);                                                            // 61
    // _qs.parse() gives us a object without prototypes,                                                              // 62
    // created with Object.create(null)                                                                               // 63
    // Meteor's check doesn't play nice with it.                                                                      // 64
    // So, we need to fix it by cloning it.                                                                           // 65
    // see more: https://github.com/meteorhacks/flow-router/issues/164                                                // 66
    queryParams = JSON.parse(JSON.stringify(queryParams));                                                            // 67
                                                                                                                      // 68
    self._current = {                                                                                                 // 69
      path: context.path,                                                                                             // 70
      context: context,                                                                                               // 71
      params: context.params,                                                                                         // 72
      queryParams: queryParams,                                                                                       // 73
      route: route,                                                                                                   // 74
      oldRoute: oldRoute                                                                                              // 75
    };                                                                                                                // 76
                                                                                                                      // 77
    // we need to invalidate if all the triggers have been completed                                                  // 78
    // if not that means, we've been redirected to another path                                                       // 79
    // then we don't need to invalidate                                                                               // 80
    var afterAllTriggersRan = function() {                                                                            // 81
      self._invalidateTracker();                                                                                      // 82
    };                                                                                                                // 83
                                                                                                                      // 84
    var triggers = self._triggersEnter.concat(route._triggersEnter);                                                  // 85
    Triggers.runTriggers(                                                                                             // 86
      triggers,                                                                                                       // 87
      self._current,                                                                                                  // 88
      self._redirectFn,                                                                                               // 89
      afterAllTriggersRan                                                                                             // 90
    );                                                                                                                // 91
  };                                                                                                                  // 92
                                                                                                                      // 93
  // calls when you exit from the page js route                                                                       // 94
  route._exitHandle = function(context, next) {                                                                       // 95
    var triggers = self._triggersExit.concat(route._triggersExit);                                                    // 96
    Triggers.runTriggers(                                                                                             // 97
      triggers,                                                                                                       // 98
      self._current,                                                                                                  // 99
      self._redirectFn,                                                                                               // 100
      next                                                                                                            // 101
    );                                                                                                                // 102
  };                                                                                                                  // 103
                                                                                                                      // 104
  this._routes.push(route);                                                                                           // 105
  if (options.name) {                                                                                                 // 106
    this._routesMap[options.name] = route;                                                                            // 107
  }                                                                                                                   // 108
                                                                                                                      // 109
  this._updateCallbacks();                                                                                            // 110
                                                                                                                      // 111
  return route;                                                                                                       // 112
};                                                                                                                    // 113
                                                                                                                      // 114
Router.prototype.group = function(options) {                                                                          // 115
  return new Group(this, options);                                                                                    // 116
};                                                                                                                    // 117
                                                                                                                      // 118
Router.prototype.path = function(pathDef, fields, queryParams) {                                                      // 119
  if (this._routesMap[pathDef]) {                                                                                     // 120
    pathDef = this._routesMap[pathDef].path;                                                                          // 121
  }                                                                                                                   // 122
                                                                                                                      // 123
  fields = fields || {};                                                                                              // 124
  var regExp = /(:[\w\(\)\\\+\*\.\?]+)+/g;                                                                            // 125
  var path = pathDef.replace(regExp, function(key) {                                                                  // 126
    var firstRegexpChar = key.indexOf("(");                                                                           // 127
    // get the content behind : and (\\d+/)                                                                           // 128
    key = key.substring(1, (firstRegexpChar > 0)? firstRegexpChar: undefined);                                        // 129
    // remove +?*                                                                                                     // 130
    key = key.replace(/[\+\*\?]+/g, "");                                                                              // 131
                                                                                                                      // 132
    // this is to allow page js to keep the custom characters as it is                                                // 133
    // we need to encode 2 times otherwise "/" char does not work properly                                            // 134
    // So, in that case, when I includes "/" it will think it's a part of the                                         // 135
    // route. encoding 2times fixes it                                                                                // 136
    return encodeURIComponent(encodeURIComponent(fields[key] || ""));                                                 // 137
  });                                                                                                                 // 138
                                                                                                                      // 139
  path = path.replace(/\/\/+/g, "/"); // Replace multiple slashes with single slash                                   // 140
                                                                                                                      // 141
  // remove trailing slash                                                                                            // 142
  // but keep the root slash if it's the only one                                                                     // 143
  path = path.match(/^\/{1}$/) ? path: path.replace(/\/$/, "");                                                       // 144
                                                                                                                      // 145
  // explictly asked to add a trailing slash                                                                          // 146
  if(this.env.trailingSlash.get() && _.last(path) !== "/") {                                                          // 147
    path += "/";                                                                                                      // 148
  }                                                                                                                   // 149
                                                                                                                      // 150
  var strQueryParams = this._qs.stringify(queryParams || {});                                                         // 151
  if(strQueryParams) {                                                                                                // 152
    path += "?" + strQueryParams;                                                                                     // 153
  }                                                                                                                   // 154
                                                                                                                      // 155
  return path;                                                                                                        // 156
};                                                                                                                    // 157
                                                                                                                      // 158
Router.prototype.go = function(pathDef, fields, queryParams) {                                                        // 159
  var path = this.path(pathDef, fields, queryParams);                                                                 // 160
                                                                                                                      // 161
  var useReplaceState = this.env.replaceState.get();                                                                  // 162
  if(useReplaceState) {                                                                                               // 163
    this._page.replace(path);                                                                                         // 164
  } else {                                                                                                            // 165
    this._page(path);                                                                                                 // 166
  }                                                                                                                   // 167
};                                                                                                                    // 168
                                                                                                                      // 169
Router.prototype.reload = function() {                                                                                // 170
  var self = this;                                                                                                    // 171
                                                                                                                      // 172
  self.env.reload.withValue(true, function() {                                                                        // 173
    self._page.replace(self._current.path);                                                                           // 174
  });                                                                                                                 // 175
};                                                                                                                    // 176
                                                                                                                      // 177
Router.prototype.redirect = function(path) {                                                                          // 178
  this._page.redirect(path);                                                                                          // 179
};                                                                                                                    // 180
                                                                                                                      // 181
Router.prototype.setParams = function(newParams) {                                                                    // 182
  if(!this._current.route) {return false;}                                                                            // 183
                                                                                                                      // 184
  var pathDef = this._current.route.path;                                                                             // 185
  var existingParams = this._current.params;                                                                          // 186
  var params = {};                                                                                                    // 187
  _.each(_.keys(existingParams), function(key) {                                                                      // 188
    params[key] = existingParams[key];                                                                                // 189
  });                                                                                                                 // 190
                                                                                                                      // 191
  params = _.extend(params, newParams);                                                                               // 192
  var queryParams = this._current.queryParams;                                                                        // 193
                                                                                                                      // 194
  this.go(pathDef, params, queryParams);                                                                              // 195
  return true;                                                                                                        // 196
};                                                                                                                    // 197
                                                                                                                      // 198
Router.prototype.setQueryParams = function(newParams) {                                                               // 199
  if(!this._current.route) {return false;}                                                                            // 200
                                                                                                                      // 201
  var queryParams = _.clone(this._current.queryParams);                                                               // 202
  _.extend(queryParams, newParams);                                                                                   // 203
                                                                                                                      // 204
  for (var k in queryParams) {                                                                                        // 205
    if (queryParams[k] === null || queryParams[k] === undefined) {                                                    // 206
      delete queryParams[k];                                                                                          // 207
    }                                                                                                                 // 208
  }                                                                                                                   // 209
                                                                                                                      // 210
  var pathDef = this._current.route.path;                                                                             // 211
  var params = this._current.params;                                                                                  // 212
  this.go(pathDef, params, queryParams);                                                                              // 213
  return true;                                                                                                        // 214
};                                                                                                                    // 215
                                                                                                                      // 216
// .current is not reactive                                                                                           // 217
// This is by design. use .getParam() instead                                                                         // 218
// If you really need to watch the path change, use .watchPathChange()                                                // 219
Router.prototype.current = function() {                                                                               // 220
  return this._current;                                                                                               // 221
};                                                                                                                    // 222
                                                                                                                      // 223
// Implementing Reactive APIs                                                                                         // 224
var reactiveApis = [                                                                                                  // 225
  'getParam', 'getQueryParam',                                                                                        // 226
  'getRouteName', 'watchPathChange'                                                                                   // 227
];                                                                                                                    // 228
reactiveApis.forEach(function(api) {                                                                                  // 229
  Router.prototype[api] = function(arg1) {                                                                            // 230
    // when this is calling, there may not be any route initiated                                                     // 231
    // so we need to handle it                                                                                        // 232
    var currentRoute = this._current.route;                                                                           // 233
    if(!currentRoute) {                                                                                               // 234
      this._onEveryPath.depend();                                                                                     // 235
      return;                                                                                                         // 236
    }                                                                                                                 // 237
                                                                                                                      // 238
    // currently, there is only one argument. If we've more let's add more args                                       // 239
    // this is not clean code, but better in performance                                                              // 240
    return currentRoute[api].call(currentRoute, arg1);                                                                // 241
  };                                                                                                                  // 242
});                                                                                                                   // 243
                                                                                                                      // 244
Router.prototype.subsReady = function() {                                                                             // 245
  var callback = null;                                                                                                // 246
  var args = _.toArray(arguments);                                                                                    // 247
                                                                                                                      // 248
  if (typeof _.last(args) === "function") {                                                                           // 249
    callback = args.pop();                                                                                            // 250
  }                                                                                                                   // 251
                                                                                                                      // 252
  var currentRoute = this.current().route;                                                                            // 253
  var globalRoute = this._globalRoute;                                                                                // 254
                                                                                                                      // 255
  // we need to depend for every route change and                                                                     // 256
  // rerun subscriptions to check the ready state                                                                     // 257
  this._onEveryPath.depend();                                                                                         // 258
                                                                                                                      // 259
  if(!currentRoute) {                                                                                                 // 260
    return false;                                                                                                     // 261
  }                                                                                                                   // 262
                                                                                                                      // 263
  var subscriptions;                                                                                                  // 264
  if(args.length === 0) {                                                                                             // 265
    subscriptions = _.values(globalRoute.getAllSubscriptions());                                                      // 266
    subscriptions = subscriptions.concat(_.values(currentRoute.getAllSubscriptions()));                               // 267
  } else {                                                                                                            // 268
    subscriptions = _.map(args, function(subName) {                                                                   // 269
      return globalRoute.getSubscription(subName) || currentRoute.getSubscription(subName);                           // 270
    });                                                                                                               // 271
  }                                                                                                                   // 272
                                                                                                                      // 273
  var isReady = function() {                                                                                          // 274
    var ready =  _.every(subscriptions, function(sub) {                                                               // 275
      return sub && sub.ready();                                                                                      // 276
    });                                                                                                               // 277
                                                                                                                      // 278
    return ready;                                                                                                     // 279
  };                                                                                                                  // 280
                                                                                                                      // 281
  if (callback) {                                                                                                     // 282
    Tracker.autorun(function(c) {                                                                                     // 283
      if (isReady()) {                                                                                                // 284
        callback();                                                                                                   // 285
        c.stop();                                                                                                     // 286
      }                                                                                                               // 287
    });                                                                                                               // 288
  } else {                                                                                                            // 289
    return isReady();                                                                                                 // 290
  }                                                                                                                   // 291
};                                                                                                                    // 292
                                                                                                                      // 293
Router.prototype.withReplaceState = function(fn) {                                                                    // 294
  return this.env.replaceState.withValue(true, fn);                                                                   // 295
};                                                                                                                    // 296
                                                                                                                      // 297
Router.prototype.withTrailingSlash = function(fn) {                                                                   // 298
  return this.env.trailingSlash.withValue(true, fn);                                                                  // 299
};                                                                                                                    // 300
                                                                                                                      // 301
Router.prototype._notfoundRoute = function(context) {                                                                 // 302
  this._current = {                                                                                                   // 303
    path: context.path,                                                                                               // 304
    context: context,                                                                                                 // 305
    params: [],                                                                                                       // 306
    queryParams: {},                                                                                                  // 307
  };                                                                                                                  // 308
                                                                                                                      // 309
  // XXX this.notfound kept for backwards compatibility                                                               // 310
  this.notFound = this.notFound || this.notfound;                                                                     // 311
  if(!this.notFound) {                                                                                                // 312
    console.error("There is no route for the path:", context.path);                                                   // 313
    return;                                                                                                           // 314
  }                                                                                                                   // 315
                                                                                                                      // 316
  this._current.route = new Route(this, "*", this.notFound);                                                          // 317
  this._invalidateTracker();                                                                                          // 318
};                                                                                                                    // 319
                                                                                                                      // 320
Router.prototype.initialize = function() {                                                                            // 321
  if(this._initialized) {                                                                                             // 322
    throw new Error("FlowRouter is already initialized");                                                             // 323
  }                                                                                                                   // 324
                                                                                                                      // 325
  var self = this;                                                                                                    // 326
  this._updateCallbacks();                                                                                            // 327
                                                                                                                      // 328
  // Implementing idempotent routing                                                                                  // 329
  // by overriding page.js`s "show" method.                                                                           // 330
  // Why?                                                                                                             // 331
  // It is impossible to bypass exit triggers,                                                                        // 332
  // becuase they execute before the handler and                                                                      // 333
  // can not know what the next path is, inside exit trigger.                                                         // 334
  //                                                                                                                  // 335
  // we need override both show, replace to make this work                                                            // 336
  // since we use redirect when we are talking about withReplaceState                                                 // 337
  _.each(['show', 'replace'], function(fnName) {                                                                      // 338
    var original = self._page[fnName];                                                                                // 339
    self._page[fnName] = function(path, state, dispatch, push) {                                                      // 340
      var reload = self.env.reload.get();                                                                             // 341
      if (!reload && self._current.path === path) {                                                                   // 342
        return;                                                                                                       // 343
      }                                                                                                               // 344
                                                                                                                      // 345
      original.call(this, path, state, dispatch, push);                                                               // 346
    };                                                                                                                // 347
  });                                                                                                                 // 348
                                                                                                                      // 349
  // this is very ugly part of pagejs and it does decoding few times                                                  // 350
  // in unpredicatable manner. See #168                                                                               // 351
  // this is the default behaviour and we need keep it like that                                                      // 352
  // we are doing a hack. see .path()                                                                                 // 353
  this._page({decodeURLComponents: true});                                                                            // 354
  this._initialized = true;                                                                                           // 355
};                                                                                                                    // 356
                                                                                                                      // 357
Router.prototype._buildTracker = function() {                                                                         // 358
  var self = this;                                                                                                    // 359
                                                                                                                      // 360
  // main autorun function                                                                                            // 361
  var tracker = Tracker.autorun(function () {                                                                         // 362
    if(!self._current || !self._current.route) {                                                                      // 363
      return;                                                                                                         // 364
    }                                                                                                                 // 365
                                                                                                                      // 366
    // see the definition of `this._processingContexts`                                                               // 367
    var currentContext = self._current;                                                                               // 368
    var route = currentContext.route;                                                                                 // 369
    var path = currentContext.path;                                                                                   // 370
                                                                                                                      // 371
    if(self.safeToRun === 0) {                                                                                        // 372
      var message =                                                                                                   // 373
        "You can't use reactive data sources like Session" +                                                          // 374
        " inside the `.subscriptions` method!";                                                                       // 375
      throw new Error(message);                                                                                       // 376
    }                                                                                                                 // 377
                                                                                                                      // 378
    // We need to run subscriptions inside a Tracker                                                                  // 379
    // to stop subs when switching between routes                                                                     // 380
    // But we don't need to run this tracker with                                                                     // 381
    // other reactive changes inside the .subscription method                                                         // 382
    // We tackle this with the `safeToRun` variable                                                                   // 383
    self._globalRoute.clearSubscriptions();                                                                           // 384
    self.subscriptions.call(self._globalRoute, path);                                                                 // 385
    route.callSubscriptions(currentContext);                                                                          // 386
                                                                                                                      // 387
    // otherwise, computations inside action will trigger to re-run                                                   // 388
    // this computation. which we do not need.                                                                        // 389
    Tracker.nonreactive(function() {                                                                                  // 390
      var isRouteChange = currentContext.oldRoute !== currentContext.route;                                           // 391
      var isFirstRoute = !currentContext.oldRoute;                                                                    // 392
      // first route is not a route change                                                                            // 393
      if(isFirstRoute) {                                                                                              // 394
        isRouteChange = false;                                                                                        // 395
      }                                                                                                               // 396
                                                                                                                      // 397
      currentContext.route.registerRouteChange(currentContext, isRouteChange);                                        // 398
      route.callAction(currentContext);                                                                               // 399
                                                                                                                      // 400
      Tracker.afterFlush(function() {                                                                                 // 401
        self._onEveryPath.changed();                                                                                  // 402
        if(isRouteChange) {                                                                                           // 403
          // We need to trigger that route (definition itself) has changed.                                           // 404
          // So, we need to re-run all the register callbacks to current route                                        // 405
          // This is pretty important, otherwise tracker                                                              // 406
          // can't identify new route's items                                                                         // 407
                                                                                                                      // 408
          // We also need to afterFlush, otherwise this will re-run                                                   // 409
          // helpers on templates which are marked for destroying                                                     // 410
          currentContext.oldRoute.registerRouteClose();                                                               // 411
        }                                                                                                             // 412
      });                                                                                                             // 413
    });                                                                                                               // 414
                                                                                                                      // 415
    self.safeToRun--;                                                                                                 // 416
  });                                                                                                                 // 417
                                                                                                                      // 418
  return tracker;                                                                                                     // 419
};                                                                                                                    // 420
                                                                                                                      // 421
Router.prototype._invalidateTracker = function() {                                                                    // 422
  var self = this;                                                                                                    // 423
  this.safeToRun++;                                                                                                   // 424
  this._tracker.invalidate();                                                                                         // 425
  // After the invalidation we need to flush to make changes imediately                                               // 426
  // otherwise, we have face some issues context mix-maches and so on.                                                // 427
  // But there are some cases we can't flush. So we need to ready for that.                                           // 428
                                                                                                                      // 429
  // we clearly know, we can't flush inside an autorun                                                                // 430
  // this may leads some issues on flow-routing                                                                       // 431
  // we may need to do some warning                                                                                   // 432
  if(!Tracker.currentComputation) {                                                                                   // 433
    // Still there are some cases where we can't flush                                                                // 434
    //  eg:- when there is a flush currently                                                                          // 435
    // But we've no public API or hacks to get that state                                                             // 436
    // So, this is the only solution                                                                                  // 437
    try {                                                                                                             // 438
      Tracker.flush();                                                                                                // 439
    } catch(ex) {                                                                                                     // 440
      // only handling "while flushing" errors                                                                        // 441
      if(!/Tracker\.flush while flushing/.test(ex.message)) {                                                         // 442
        return;                                                                                                       // 443
      }                                                                                                               // 444
                                                                                                                      // 445
      // XXX: fix this with a proper solution by removing subscription mgt.                                           // 446
      // from the router. Then we don't need to run invalidate using a tracker                                        // 447
                                                                                                                      // 448
      // this happens when we are trying to invoke a route change                                                     // 449
      // with inside a route chnage. (eg:- Template.onCreated)                                                        // 450
      // Since we use page.js and tracker, we don't have much control                                                 // 451
      // over this process.                                                                                           // 452
      // only solution is to defer route execution.                                                                   // 453
                                                                                                                      // 454
      // It's possible to have more than one path want to defer                                                       // 455
      // But, we only need to pick the last one.                                                                      // 456
      // self._nextPath = self._current.path;                                                                         // 457
      Meteor.defer(function() {                                                                                       // 458
        var path = self._nextPath;                                                                                    // 459
        if(!path) {                                                                                                   // 460
          return;                                                                                                     // 461
        }                                                                                                             // 462
                                                                                                                      // 463
        delete self._nextPath;                                                                                        // 464
        self.env.reload.withValue(true, function() {                                                                  // 465
          self.go(path);                                                                                              // 466
        });                                                                                                           // 467
      });                                                                                                             // 468
    }                                                                                                                 // 469
  }                                                                                                                   // 470
};                                                                                                                    // 471
                                                                                                                      // 472
Router.prototype._updateCallbacks = function () {                                                                     // 473
  var self = this;                                                                                                    // 474
                                                                                                                      // 475
  self._page.callbacks = [];                                                                                          // 476
  self._page.exits = [];                                                                                              // 477
                                                                                                                      // 478
  _.each(self._routes, function(route) {                                                                              // 479
    self._page(route.path, route._actionHandle);                                                                      // 480
    self._page.exit(route.path, route._exitHandle);                                                                   // 481
  });                                                                                                                 // 482
                                                                                                                      // 483
  self._page("*", function(context) {                                                                                 // 484
    self._notfoundRoute(context);                                                                                     // 485
  });                                                                                                                 // 486
};                                                                                                                    // 487
                                                                                                                      // 488
Router.prototype._initTriggersAPI = function() {                                                                      // 489
  var self = this;                                                                                                    // 490
  this.triggers = {                                                                                                   // 491
    enter: function(triggers, filter) {                                                                               // 492
      triggers = Triggers.applyFilters(triggers, filter);                                                             // 493
      if(triggers.length) {                                                                                           // 494
        self._triggersEnter = self._triggersEnter.concat(triggers);                                                   // 495
      }                                                                                                               // 496
    },                                                                                                                // 497
                                                                                                                      // 498
    exit: function(triggers, filter) {                                                                                // 499
      triggers = Triggers.applyFilters(triggers, filter);                                                             // 500
      if(triggers.length) {                                                                                           // 501
        self._triggersExit = self._triggersExit.concat(triggers);                                                     // 502
      }                                                                                                               // 503
    }                                                                                                                 // 504
  };                                                                                                                  // 505
};                                                                                                                    // 506
                                                                                                                      // 507
Router.prototype.wait = function() {                                                                                  // 508
  if(this._initialized) {                                                                                             // 509
    throw new Error("can't wait after FlowRouter has been initialized");                                              // 510
  }                                                                                                                   // 511
                                                                                                                      // 512
  this._askedToWait = true;                                                                                           // 513
};                                                                                                                    // 514
                                                                                                                      // 515
Router.prototype._page = page;                                                                                        // 516
Router.prototype._qs = qs;                                                                                            // 517
                                                                                                                      // 518
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2106
}).call(this);                                                                                                        // 2107
                                                                                                                      // 2108
                                                                                                                      // 2109
                                                                                                                      // 2110
                                                                                                                      // 2111
                                                                                                                      // 2112
                                                                                                                      // 2113
(function () {                                                                                                        // 2114
                                                                                                                      // 2115
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/group.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Group = function(router, options, parent) {                                                                           // 1
  options = options || {};                                                                                            // 2
                                                                                                                      // 3
  if (options.prefix && !/^\/.*/.test(options.prefix)) {                                                              // 4
    var message = "group's prefix must start with '/'";                                                               // 5
    throw new Error(message);                                                                                         // 6
  }                                                                                                                   // 7
                                                                                                                      // 8
  this._router = router;                                                                                              // 9
  this.prefix = options.prefix || '';                                                                                 // 10
                                                                                                                      // 11
  this._triggersEnter = options.triggersEnter || [];                                                                  // 12
  this._triggersExit = options.triggersExit || [];                                                                    // 13
  this._subscriptions = options.subscriptions || Function.prototype;                                                  // 14
                                                                                                                      // 15
  this.parent = parent;                                                                                               // 16
  if (this.parent) {                                                                                                  // 17
    this.prefix = parent.prefix + this.prefix;                                                                        // 18
                                                                                                                      // 19
    this._triggersEnter = parent._triggersEnter.concat(this._triggersEnter);                                          // 20
    this._triggersExit = this._triggersExit.concat(parent._triggersExit);                                             // 21
  }                                                                                                                   // 22
};                                                                                                                    // 23
                                                                                                                      // 24
Group.prototype.route = function(path, options, group) {                                                              // 25
  options = options || {};                                                                                            // 26
                                                                                                                      // 27
  if (!/^\/.*/.test(path)) {                                                                                          // 28
    var message = "route's path must start with '/'";                                                                 // 29
    throw new Error(message);                                                                                         // 30
  }                                                                                                                   // 31
                                                                                                                      // 32
  group = group || this;                                                                                              // 33
  path = this.prefix + path;                                                                                          // 34
                                                                                                                      // 35
  var triggersEnter = options.triggersEnter || [];                                                                    // 36
  options.triggersEnter = this._triggersEnter.concat(triggersEnter);                                                  // 37
                                                                                                                      // 38
  var triggersExit = options.triggersExit || [];                                                                      // 39
  options.triggersExit = triggersExit.concat(this._triggersExit);                                                     // 40
                                                                                                                      // 41
  return this._router.route(path, options, group);                                                                    // 42
};                                                                                                                    // 43
                                                                                                                      // 44
Group.prototype.group = function(options) {                                                                           // 45
  return new Group(this._router, options, this);                                                                      // 46
};                                                                                                                    // 47
                                                                                                                      // 48
Group.prototype.callSubscriptions = function(current) {                                                               // 49
  if (this.parent) {                                                                                                  // 50
    this.parent.callSubscriptions(current);                                                                           // 51
  }                                                                                                                   // 52
                                                                                                                      // 53
  this._subscriptions.call(current.route, current.params, current.queryParams);                                       // 54
};                                                                                                                    // 55
                                                                                                                      // 56
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2179
}).call(this);                                                                                                        // 2180
                                                                                                                      // 2181
                                                                                                                      // 2182
                                                                                                                      // 2183
                                                                                                                      // 2184
                                                                                                                      // 2185
                                                                                                                      // 2186
(function () {                                                                                                        // 2187
                                                                                                                      // 2188
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/route.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Route = function(router, path, options, group) {                                                                      // 1
  options = options || {};                                                                                            // 2
                                                                                                                      // 3
  this.options = options;                                                                                             // 4
  this.path = path;                                                                                                   // 5
  if (options.name) {                                                                                                 // 6
    this.name = options.name;                                                                                         // 7
  }                                                                                                                   // 8
                                                                                                                      // 9
  this._action = options.action || Function.prototype;                                                                // 10
  this._subscriptions = options.subscriptions || Function.prototype;                                                  // 11
  this._triggersEnter = options.triggersEnter || [];                                                                  // 12
  this._triggersExit = options.triggersExit || [];                                                                    // 13
  this._subsMap = {};                                                                                                 // 14
  this._router = router;                                                                                              // 15
                                                                                                                      // 16
  this._params = new ReactiveDict();                                                                                  // 17
  this._queryParams = new ReactiveDict();                                                                             // 18
  this._routeCloseDep = new Tracker.Dependency();                                                                     // 19
                                                                                                                      // 20
  // tracks the changes in the URL                                                                                    // 21
  this._pathChangeDep = new Tracker.Dependency();                                                                     // 22
                                                                                                                      // 23
  this.group = group;                                                                                                 // 24
};                                                                                                                    // 25
                                                                                                                      // 26
Route.prototype.clearSubscriptions = function() {                                                                     // 27
  this._subsMap = {};                                                                                                 // 28
};                                                                                                                    // 29
                                                                                                                      // 30
Route.prototype.register = function(name, sub, options) {                                                             // 31
  this._subsMap[name] = sub;                                                                                          // 32
};                                                                                                                    // 33
                                                                                                                      // 34
                                                                                                                      // 35
Route.prototype.getSubscription = function(name) {                                                                    // 36
  return this._subsMap[name];                                                                                         // 37
};                                                                                                                    // 38
                                                                                                                      // 39
                                                                                                                      // 40
Route.prototype.getAllSubscriptions = function() {                                                                    // 41
  return this._subsMap;                                                                                               // 42
};                                                                                                                    // 43
                                                                                                                      // 44
Route.prototype.callAction = function(current) {                                                                      // 45
  var self = this;                                                                                                    // 46
  self._action(current.params, current.queryParams);                                                                  // 47
};                                                                                                                    // 48
                                                                                                                      // 49
Route.prototype.callSubscriptions = function(current) {                                                               // 50
  this.clearSubscriptions();                                                                                          // 51
  if (this.group) {                                                                                                   // 52
    this.group.callSubscriptions(current);                                                                            // 53
  }                                                                                                                   // 54
                                                                                                                      // 55
  this._subscriptions(current.params, current.queryParams);                                                           // 56
};                                                                                                                    // 57
                                                                                                                      // 58
Route.prototype.getRouteName = function() {                                                                           // 59
  this._routeCloseDep.depend();                                                                                       // 60
  return this.name;                                                                                                   // 61
};                                                                                                                    // 62
                                                                                                                      // 63
Route.prototype.getParam = function(key) {                                                                            // 64
  this._routeCloseDep.depend();                                                                                       // 65
  return this._params.get(key);                                                                                       // 66
};                                                                                                                    // 67
                                                                                                                      // 68
Route.prototype.getQueryParam = function(key) {                                                                       // 69
  this._routeCloseDep.depend();                                                                                       // 70
  return this._queryParams.get(key);                                                                                  // 71
};                                                                                                                    // 72
                                                                                                                      // 73
Route.prototype.watchPathChange = function() {                                                                        // 74
  this._pathChangeDep.depend();                                                                                       // 75
};                                                                                                                    // 76
                                                                                                                      // 77
Route.prototype.registerRouteClose = function() {                                                                     // 78
  this._params = new ReactiveDict();                                                                                  // 79
  this._queryParams = new ReactiveDict();                                                                             // 80
  this._routeCloseDep.changed();                                                                                      // 81
  this._pathChangeDep.changed();                                                                                      // 82
};                                                                                                                    // 83
                                                                                                                      // 84
Route.prototype.registerRouteChange = function(currentContext, routeChanging) {                                       // 85
  // register params                                                                                                  // 86
  var params = currentContext.params;                                                                                 // 87
  this._updateReactiveDict(this._params, params);                                                                     // 88
                                                                                                                      // 89
  // register query params                                                                                            // 90
  var queryParams = currentContext.queryParams;                                                                       // 91
  this._updateReactiveDict(this._queryParams, queryParams);                                                           // 92
                                                                                                                      // 93
  // if the route is changing, we need to defer triggering path changing                                              // 94
  // if we did this, old route's path watchers will detect this                                                       // 95
  // Real issue is, above watcher will get removed with the new route                                                 // 96
  // So, we don't need to trigger it now                                                                              // 97
  // We are doing it on the route close event. So, if they exists they'll                                             // 98
  // get notify that                                                                                                  // 99
  if(!routeChanging) {                                                                                                // 100
    this._pathChangeDep.changed();                                                                                    // 101
  }                                                                                                                   // 102
};                                                                                                                    // 103
                                                                                                                      // 104
Route.prototype._updateReactiveDict = function(dict, newValues) {                                                     // 105
  var currentKeys = _.keys(newValues);                                                                                // 106
  var oldKeys = _.keys(dict.keyDeps);                                                                                 // 107
                                                                                                                      // 108
  // set new values                                                                                                   // 109
  //  params is an array. So, _.each(params) does not works                                                           // 110
  //  to iterate params                                                                                               // 111
  _.each(currentKeys, function(key) {                                                                                 // 112
    dict.set(key, newValues[key]);                                                                                    // 113
  });                                                                                                                 // 114
                                                                                                                      // 115
  // remove keys which does not exisits here                                                                          // 116
  var removedKeys = _.difference(oldKeys, currentKeys);                                                               // 117
  _.each(removedKeys, function(key) {                                                                                 // 118
    dict.set(key, undefined);                                                                                         // 119
  });                                                                                                                 // 120
};                                                                                                                    // 121
                                                                                                                      // 122
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2318
}).call(this);                                                                                                        // 2319
                                                                                                                      // 2320
                                                                                                                      // 2321
                                                                                                                      // 2322
                                                                                                                      // 2323
                                                                                                                      // 2324
                                                                                                                      // 2325
(function () {                                                                                                        // 2326
                                                                                                                      // 2327
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/_init.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Export Router Instance                                                                                             // 1
FlowRouter = new Router();                                                                                            // 2
FlowRouter.Router = Router;                                                                                           // 3
FlowRouter.Route = Route;                                                                                             // 4
                                                                                                                      // 5
// Initialize FlowRouter                                                                                              // 6
Meteor.startup(function () {                                                                                          // 7
  if(!FlowRouter._askedToWait) {                                                                                      // 8
    FlowRouter.initialize();                                                                                          // 9
  }                                                                                                                   // 10
});                                                                                                                   // 11
                                                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2347
}).call(this);                                                                                                        // 2348
                                                                                                                      // 2349
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:flow-router'] = {
  FlowRouter: FlowRouter
};

})();
