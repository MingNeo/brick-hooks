function asyncWrapper(callback) {
  return new Promise((resolve, reject) => {
    try {
      resolve(callback && callback())
    } catch (err) {
      console.info(err)
      reject(err)
    }
  })
}

export const setCookie = (
  name: string,
  value: string | number | boolean,
  { days = 7, path = '/' }: { days?: any; path?: any } = {}
) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  return asyncWrapper(() => {
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`
  })
}

export const deleteCookie = (name: string, { path = '/' }: { path?: any } = {}) => {
  return asyncWrapper(() => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=${path}`
  })
}

export const getCookie = (name: string) => {
  try {
    return (document.cookie || '').split('; ').reduce((prev, curr) => {
      const parts = curr.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : prev
    }, '')
  } catch (err) {
    console.info(err)
    return ''
  }
}
