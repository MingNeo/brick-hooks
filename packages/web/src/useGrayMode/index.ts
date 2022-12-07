import useStyle from '../useStyle'

export default function useGrayMode(isGrayMode = false, removeOnDestroy = false) {
  useStyle(
    isGrayMode
      ? `
    html {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray;
    }
  `
      : '',
    'grayModeStyle',
    { removeOnDestroy },
  )
}
