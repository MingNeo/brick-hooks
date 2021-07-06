"use strict";
var __assign = (this && this.__assign) || function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi
 * @param props.setState setState可以直接使用useState，如果需要全局使用，可以替换成useStore的setState
 * @returns
 */
function useAmapPoi(_a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.state, state = _c === void 0 ? {} : _c, setState = _b.setState, _d = _b.services, _e = _d === void 0 ? {} : _d, getAmapNearby = _e.getAmapNearby, searchPoiList = _e.searchPoiList, getPoiDelivery = _e.getPoiDelivery;
    var currentPoi = state.currentPoi, currentLocation = state.currentLocation;
    // 设置临时的地址选择
    var setPoi = function (_a) { var _b, _c; return __awaiter(_this, void 0, void 0, function () {
        var newPoiData, data;
        var city = _a.city, cityname = _a.cityname, latitude = _a.latitude, longitude = _a.longitude, street = _a.street, others = __rest(_a, ["city", "cityname", "latitude", "longitude", "street"]);
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    newPoiData = {
                        city: null,
                        latitude: null,
                        longitude: null,
                        street: '',
                    };
                    if (!latitude || !longitude) {
                        setState(function (prevState) { return (__assign(__assign({}, prevState), { currentPoi: newPoiData })); });
                        return [2 /*return*/];
                    }
                    if (!(!city && !cityname)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getAmapNearby({ latitude: latitude, longitude: longitude })];
                case 1:
                    data = _d.sent();
                    if (!data.city && !data.cityname)
                        return [2 /*return*/];
                    newPoiData.city = data.city || data.cityname;
                    newPoiData.poiId = newPoiData.poiId || ((_c = (_b = data.pois) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.poiId);
                    return [3 /*break*/, 3];
                case 2:
                    newPoiData.city = city;
                    _d.label = 3;
                case 3:
                    setState(function (prevState) { return (__assign(__assign({}, prevState), { currentPoi: __assign(__assign(__assign({}, newPoiData), { latitude: latitude, longitude: longitude, street: street }), others) })); });
                    return [2 /*return*/];
            }
        });
    }); };
    // 根据城市/搜索关键字获取地址列表
    var onsearchPoiList = function (params) { return __awaiter(_this, void 0, void 0, function () {
        var city, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    city = (currentLocation || {}).city;
                    return [4 /*yield*/, searchPoiList(__assign(__assign({}, params), { city: city || params.city }))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data || []];
            }
        });
    }); };
    /**
     * 根据定位获取几条附近的Poi
     */
    var getNearByListByPois = function (_a) {
        var _b = _a === void 0 ? {} : _a, latitude = _b.latitude, longitude = _b.longitude, _c = _b.size, size = _c === void 0 ? 5 : _c, _d = _b.isAllCover, isAllCover = _d === void 0 ? true : _d, _e = _b.current, current = _e === void 0 ? false : _e;
        return __awaiter(_this, void 0, void 0, function () {
            var data, pois, isCovers_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, getAmapNearby({ latitude: latitude, longitude: longitude })];
                    case 1:
                        data = _f.sent();
                        pois = (data.pois || [])
                            .splice(0, size)
                            .map(function (poi) { return (__assign(__assign({}, poi), { city: data.city || data.cityname })); });
                        if (!data.latitude || !data.longitude) {
                            return [2 /*return*/, []];
                        }
                        // 地图等当前定位列表里增加当前定位点
                        if (current === true) {
                            pois.unshift(helper_1.formatPoiInfo(data)); // 名字太长优化
                        }
                        if (!(!isAllCover && getPoiDelivery)) return [3 /*break*/, 3];
                        return [4 /*yield*/, getPoiDelivery(pois)];
                    case 2:
                        isCovers_1 = _f.sent();
                        return [2 /*return*/, pois.map(function (poi, i) {
                                if (poi === void 0) { poi = {}; }
                                return (__assign(__assign({}, poi), { isCover: isCovers_1[i] || false }));
                            })];
                    case 3: return [2 /*return*/, pois.map(function (poi) {
                            if (poi === void 0) { poi = {}; }
                            return (__assign(__assign({}, poi), { isCover: true }));
                        })];
                }
            });
        });
    };
    return {
        currentPoi: currentPoi,
        setPoi: setPoi,
        getNearbyPois: getNearByListByPois,
        onsearchPoiList: onsearchPoiList,
    };
}
exports.default = useAmapPoi;
