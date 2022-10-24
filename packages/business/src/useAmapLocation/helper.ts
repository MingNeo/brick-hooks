import { isBrowser } from '../utils'

const getLocation = (onSuccess, onError) => {
  try {
    const AMap = (window as any).AMap
    if (!document.querySelector('#amp_default_location_container')) {
      const container = document.createElement('div')
      container.id = 'amp_default_location_container'
      container.style.display = 'none'
      document.body.appendChild(container)
    }

    // 加载地图，调用浏览器定位服务
    // eslint-disable-next-line no-unused-vars
    const map = new AMap.Map('amp_default_location_container', {
      resizeEnable: true,
    })

    AMap.plugin('AMap.Geolocation', function () {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 10000, // 超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'RB',
      })

      geolocation.getCurrentPosition((status, result) => {
        if (status === 'complete') {
          const { position: { lat: latitude, lng: longitude } = [], speed, accuracy, altitude } = result || {}
          onSuccess({ latitude, longitude, speed, accuracy, altitude })
        } else {
          onError(result)
        }
      })
    })
  } catch (error) {
    onError(new Error(error))
  }
}

export const getLocationByAmap = (amapKey) => {
  return new Promise<any>((resolve, reject) => {
    if (!isBrowser) {
      return reject(new Error('must be used in web'))
    }
    if (!(window as any).AMap) {
      loadAmapScript(amapKey)
        .then((data) => {
          getLocation(resolve, reject)
        })
        .catch(reject)
    } else {
      getLocation(resolve, reject)
    }
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
        inserScript(`//webapi.amap.com/maps?v=2.0&key=${amapKey}&plugin=${plugin}`).then(() => {
          const start = Date.now()
          const interval = setInterval(() => {
            if ((window as any).AMap) {
              clearInterval(interval)
              resolve(true)
            } else if (Date.now() - start > 3000) {
              clearInterval(interval)
            }
          }, 30)
        })
      } else {
        // eslint-disable-next-line no-console
        console.error('please set amapKey')
      }
    } else if (AMap && !AMap.Map) {
      // eslint-disable-next-line no-console
      console.error('please use plugin AMap.Geocoder')
    } else if (AMap && AMap.Map) {
      resolve(true)
    }
  })
}
