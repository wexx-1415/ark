import { useRef, useCallback } from 'react'
type FnType = (...arg: any[]) => any
interface RefType {
  fn: FnType
  timer: NodeJS.Timeout | null
}
function useDebounce(this: any, fn: FnType, delay: number, dep: any[] = []) {
  //  使用 useRef 的目的是：保留上一次的timer，以至于让 if 语句走通，然后清除上一次的 timer
  // 否则，没有清除定时器，达不到防抖效果
  const { current } = useRef<RefType>({ fn, timer: null })
  current.fn = fn
  // console.log('this', this)
  return useCallback((...args: any[]) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(() => {
      current.fn.apply(this, args)
    }, delay)
  }, dep)
}

export default useDebounce

