export function formatPoiInfo(data: any) {
  let name = data.formattedAddress
  name = formatPoiName(data, name)
  const address = data.formattedAddress + data.number
  const currentPoi = {
    latitude: data.latitude,
    longitude: data.longitude,
    isCurrent: true,
    adcode: data.adCode,
    name,
    address,
    city: data.city || data.cityname,
    cityCode: data.cityCode,
  }
  return currentPoi
}

export function formatPoiName(data: any, name: string) {
  const removeAddress = data.province + data.city + data.district
  let newName = name.replace(removeAddress, '')

  if (newName.length > 18) {
    if (data.street) {
      newName = newName.replace(data.street, '')
    }
  }

  return newName
}
