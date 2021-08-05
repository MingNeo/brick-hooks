"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
var EventBus = /** @class */ (function () {
    function EventBus() {
        var _this = this;
        this.eventContainer = new Map();
        this.publish = function (type, payload) {
            var e_1, _a;
            var subscriptions = _this.eventContainer.get(type);
            if (subscriptions) {
                try {
                    for (var subscriptions_1 = __values(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
                        var subscription = subscriptions_1_1.value;
                        subscription(payload);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (subscriptions_1_1 && !subscriptions_1_1.done && (_a = subscriptions_1.return)) _a.call(subscriptions_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        this.subscribe = function (type, handler) {
            var subscriptions = _this.eventContainer.get(type) || new Set();
            subscriptions.add(handler);
            _this.eventContainer.set(type, subscriptions);
            return _this.unSubscribe.bind(_this, type, handler);
        };
        this.unSubscribe = function (type, subscription) {
            var subscriptions = _this.eventContainer.get(type);
            subscriptions && subscriptions.delete(subscription);
            return _this;
        };
    }
    return EventBus;
}());
exports.EventBus = EventBus;
