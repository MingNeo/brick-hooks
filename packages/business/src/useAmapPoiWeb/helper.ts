function isWeb() {
  return !!(window && document?.createElement)
}

export const getNearByInfos = ({ latitude, longitude, autoLoadScript = true }) => {
  return new Promise<any>((resolve, reject) => {
    if (!isWeb()) {
      return reject(new Error('must be used in web'))
    }
    try {
      const AMap = (window as any).AMap
      const searchNearBy = () => {
        AMap.service('AMap.PlaceSearch', function () {
          const poiSearch = new AMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            extensions: 'all',
          })

          poiSearch.searchNearBy('', [longitude, latitude], 200, function (status, result) {
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
      autoLoadScript
        ? loadScript().then(() => {
            searchNearBy()
          })
        : searchNearBy()
    } catch (error) {
      reject(new Error('get nearby pois fail'))
    }
  })
}

export const searchPois = ({ city, address }: { city?: string; address?: string } = {}) => {
  return new Promise((resolve, reject) => {
    const AMap = (window as any)?.AMap

    AMap.service('AMap.PlaceSearch', function () {
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

let src = null
export const setAmapKey = (key, plugin = 'AMap.Geocoder') => {
  src = `//webapi.amap.com/maps?v=1.3&key=${key}&plugin=${plugin}`
}

export const loadScript = () => {
  return new Promise((resolve, reject) => {
    if (!isWeb()) {
      return reject(new Error('must be used in web'))
    }
    const AMap = (window as any)?.AMap
    if (!AMap) {
      if (src) {
        inserScript().then(resolve)
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

const inserScript = () => {
  return new Promise((resolve, reject) => {
    const attr = {
      name: 'amap',
      src,
      type: 'text/javascript',
    }

    const parent = document.querySelector('body') // 容器
    let script = parent && parent.querySelector(`[name=${attr.name}]`)
    if (script) {
      // if (typeof cb === 'function') {
      // cb(...args)
      // }
      resolve(true)
    } else {
      script = document.createElement('script')
      Object.getOwnPropertyNames(attr).forEach((name) => {
        script.setAttribute(name, attr[name]) // 暂时只支持一层object
      })
      parent.appendChild(script).addEventListener(
        'load',
        () => {
          // if (typeof cb === 'function') {
          //   cb(...args)
          // }
          resolve(true)
        },
        false
      )
    }
  })
}
