export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const isNil = (value: any) => value === undefined || value === null
