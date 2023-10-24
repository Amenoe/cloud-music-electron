import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

interface CounterState {
  counter: number
  dataList: any
  increase: (by: number) => void
  fetch: () => void
}

// const useCounterStore = create<CounterState>((set) => ({
//   counter: 0,
//   increase: (by) => {
//     set((state) => ({ counter: state.counter + by }))
//   }
// }))

const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      counter: 0,
      dataList: [],
      increase: (by) => {
        set((state) => ({ counter: state.counter + by }))
      },
      fetch: async () => {
        const res = await axios.get<any>('http://localhost:3000/search?keywords=AAA')
        console.log(res)

        set({ dataList: res.data.result.songs })
      }
    }),
    {
      name: 'counter',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => !['counter'].includes(key)))
    }
  )
)

export default useCounterStore
