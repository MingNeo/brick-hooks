export function formatPoiInfo(poi: any) {
  let name = poi.name || poi.formattedAddress
  name = formatPoiName(poi, name)
  const address = poi.formattedAddress + poi.number
  const currentPoi = {
    ...poi,
    latitude: poi.latitude,
    longitude: poi.longitude,
    adcode: poi.adCode,
    name,
    address,
    city: poi.city || poi.cityname,
    cityCode: poi.cityCode,
  }
  return currentPoi
}

export function formatPoiName(data: any, name: string = '') {
  const { province = '', city = '', district = '' } = data
  const removeAddress = province + city + district
  let newName = name.replace(removeAddress, '')

  if (newName.length > 18) {
    if (data.street) {
      newName = newName.replace(data.street, '')
    }
  }

  return newName
}
