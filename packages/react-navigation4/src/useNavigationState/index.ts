import useNavigation from '../useNavigation'

export default function useNavigationState(navigation?: any) {
  return useNavigation<any>(navigation)?.state
}
