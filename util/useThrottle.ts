import { useRef, useCallback } from 'react'
type FnType = (...arg: any[]) => any
interface RefType {
  fn: FnType
  timer: NodeJS.Timeout | null
}
function useThrottle(this: any, fn: FnType, delay: number, dep: any[] = []) {
  const { current } = useRef<RefType>({ fn, timer: null })
  current.fn = fn
  // console.log('this', this)
  return useCallback((...args: any[]) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null
      }, delay)
      current.fn.apply(this, args)
    }
  }, dep)
}

export default useThrottle

