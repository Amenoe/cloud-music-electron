// 发现页
import { useCounterStore } from '@/stores'
import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Demo: React.FC<IProps> = memo(() => {
  const { counter, increase } = useCounterStore()
  const { dataList, fetch } = useCounterStore()
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      <h1>Demo</h1>
      <h2>{counter}</h2>

      <button onClick={() => increase(1)}>zustand + 1</button>
      <Link to={'/discover/recommend'}>推荐</Link>
      <Link to={'/discover/toplist'}>排行榜</Link>
      <Link to={'/discover/playlist'}>歌单</Link>
      <Link to={'/discover/djradio'}>主播电台</Link>
      <Link to={'/discover/artist'}>歌手</Link>
      <Outlet />

      {dataList.map((item: any) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
})

export default Demo
