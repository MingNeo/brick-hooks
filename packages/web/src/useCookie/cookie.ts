export const setCookie = (name: string, value: string | number | boolean, options: { days: any; path: any }) => {
  const expires = new Date(Date.now() + options.days * 864e5).toUTCString()
  return new Promise((resolve, reject) => {
    try {
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${options.path}`
      resolve(true)
    } catch (err) {
      console.info(err)
      reject(err)
    }
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
