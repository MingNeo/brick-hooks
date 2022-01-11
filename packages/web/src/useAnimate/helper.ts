const uppercasePattern = /([A-Z])/g
const msPattern = /^ms-/

const transformKeys = [
  'matrix',
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'translateX',
  'translateY',
  'skewX',
  'skewY',
]

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
const isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
}

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-')
}

function dangerousStyleValue(name, value, isCustomProperty) {
  const isEmpty = value == null || typeof value === 'boolean' || value === ''

  if (isEmpty) {
    return ''
  }

  if (
    !isCustomProperty &&
    typeof value === 'number' &&
    value !== 0 &&
    !(Object.prototype.hasOwnProperty.call(isUnitlessNumber, name) && isUnitlessNumber[name])
  ) {
    return value + 'px'
  }

  return ('' + value).trim()
}

export default function createDangerousStringForStyles(style = {}) {
  const styles: Record<string, any> = {}
  Object.entries(style).forEach(([key, value]) => {
    if (transformKeys.includes(key)) {
      styles.transform = `${styles.transform || ''} ${key}(${value})`
    } else {
      styles[key] = value
    }
  })
  let serialized = ''
  let delimiter = ''

  for (const styleName in styles) {
    if (!Object.prototype.hasOwnProperty.call(styles, styleName)) {
      continue
    }

    const styleValue = styles[styleName]

    if (styleValue != null) {
      const isCustomProperty = styleName.indexOf('--') === 0
      serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ':'
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty)
      delimiter = ';'
    }
  }

  return serialized || null
}
