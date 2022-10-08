import { isBrowser } from '../utils'

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

export const getNearByInfos = ({ latitude, longitude }) => {
  return new Promise<any>((resolve, reject) => {
    if (!isBrowser) {
      return reject(new Error('must be used in web'))
    }
    try {
      const AMap = (window as any).AMap
      const searchNearBy = () => {
        AMap.plugin('AMap.PlaceSearch', function () {
          const poiSearch = new AMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            extensions: 'all',
          })

          poiSearch.searchNearBy('', [longitude, latitude], 200, (status: string, result: any) => {
            if (status === 'complete' && result.info === 'OK') {
              const { poiList = {} } = result
              poiList.pois = (poiList.pois || []).map((poi) => {
                const { lat, lng } = poi.location
                return Object.assign(poi, { longitude: lng, latitude: lat, city: poi.cityname })
              })

              resolve(Object.assign(poiList, { longitude, latitude }))
            } else {
              reject(new Error('get nearby pois fail'))
            }
          })
        })
      }
      searchNearBy()
    } catch (error) {
      reject(new Error('get nearby pois fail'))
    }
  })
}

export const searchPois = ({ city, address }: { city?: string; address?: string } = {}) => {
  return new Promise((resolve, reject) => {
    const AMap = (window as any)?.AMap

    AMap.plugin('AMap.PlaceSearch', function () {
      const placeSearch = new AMap.PlaceSearch({
        city,
      })
      placeSearch.search(address, function (status, result) {
        // 查询成功时，result即对应匹配的POI信息
        if (status === 'complete' && result.info === 'OK') {
          const { poiList = {} } = result
          poiList.pois = (poiList.pois || []).map((poi) => {
            const { lat, lng } = poi.location
            return Object.assign(poi, { longitude: lng, latitude: lat, city: poi.cityname })
          })

          resolve(poiList.pois)
        } else {
          // reject(new Error('get nearby pois fail'))
        }
      })
    })
  })
}

const inserScript = (src) => {
  return new Promise((resolve, reject) => {
    const attr = {
      name: 'amap',
      src,
      type: 'text/javascript',
    }

    const parent = document.querySelector('body') // 容器
    let script = parent && parent.querySelector(`[name=${attr.name}]`)
    if (script) {
      resolve(true)
    } else {
      script = document.createElement('script')
      Object.getOwnPropertyNames(attr).forEach((name) => {
        script.setAttribute(name, attr[name]) // 暂时只支持一层object
      })
      parent.appendChild(script).addEventListener(
        'load',
        () => {
          resolve(true)
        },
        false,
      )
    }
  })
}

export const loadAmapScript = (amapKey?: string, plugin = 'AMap.Geocoder') => {
  return new Promise((resolve, reject) => {
    if (!isBrowser) {
      return reject(new Error('must be used in browser'))
    }
    const AMap = (window as any)?.AMap
    if (!AMap) {
      if (amapKey) {
        inserScript(`//webapi.amap.com/maps?v=2.0&key=${amapKey}&plugin=${plugin}`).then(resolve)
      } else {
        // eslint-disable-next-line no-console
        console.error('please use setAmapKey to set key')
      }
    } else if (AMap && !AMap.Map) {
      // eslint-disable-next-line no-console
      console.error('please use plugin AMap.Geocoder')
    } else if (AMap && AMap.Map) {
      // fn(...args)
      resolve(true)
    }
  })
}
