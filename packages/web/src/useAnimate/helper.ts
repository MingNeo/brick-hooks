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

// 模拟react-native bounce 缓动函数动画效果
// https://easings.net/#easeInBounce
export const bounceKeyFrames = (style) => `
0% {
  ${createDangerousStringForStyles(style, 0)}
}

12% {
  ${createDangerousStringForStyles(style, 0.1089)}
}

24% {
  ${createDangerousStringForStyles(style, 0.4356)}
}

36% {
  ${createDangerousStringForStyles(style, 0.9801)}
}

44% {
  ${createDangerousStringForStyles(style, 0.7502)}
}

74% {
  ${createDangerousStringForStyles(style, 0.9837)}
}

82% {
  ${createDangerousStringForStyles(style, 0.9375)}
}

92% {
  ${createDangerousStringForStyles(style, 0.9934)}
}

96% {
  ${createDangerousStringForStyles(style, 0.9846)}
}

100% {
  ${createDangerousStringForStyles(style, 1)}
}
`

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

export default function createDangerousStringForStyles(style = {}, easingNum = 1) {
  const styles: Record<string, any> = {}
  const transform = {}
  Object.entries(style).forEach(([key, value]: any) => {
    if (transformKeys.includes(key)) {
      transform[key] = value
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
      serialized += dangerousStyleValue(styleName, styleValue * easingNum, isCustomProperty)
      delimiter = ';'
    }
  }

  // 对transform作特殊处理
  serialized += Object.entries(transform).reduce((prev, [styleName, styleValue]: any) => {
    prev += ` ${styleName}(${dangerousStyleValue(styleName, styleValue * easingNum, false)})`
    return prev
  }, `;${hyphenateStyleName('transform')}:`)

  return serialized || null
}
