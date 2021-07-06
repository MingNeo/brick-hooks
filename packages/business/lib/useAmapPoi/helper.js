"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPoiName = exports.formatPoiInfo = void 0;
function formatPoiInfo(data) {
    var name = data.formattedAddress;
    name = formatPoiName(data, name);
    var address = data.formattedAddress + data.number;
    var currentPoi = {
        latitude: data.latitude,
        longitude: data.longitude,
        isCurrent: true,
        adcode: data.adCode,
        name: name,
        address: address,
        city: data.city || data.cityname,
        cityCode: data.cityCode,
    };
    return currentPoi;
}
exports.formatPoiInfo = formatPoiInfo;
function formatPoiName(data, name) {
    var removeAddress = data.province + data.city + data.district;
    var newName = name.replace(removeAddress, '');
    if (newName.length > 18) {
        if (data.street) {
            newName = newName.replace(data.street, '');
        }
    }
    return newName;
}
exports.formatPoiName = formatPoiName;
