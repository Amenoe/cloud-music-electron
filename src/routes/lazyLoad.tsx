import { FC, ReactNode, Suspense } from 'react'

export const lazyLoad = (Component: React.LazyExoticComponent<FC>, Loading: ReactNode) => {
  return (
    <Suspense fallback={Loading}>
      <Component />
    </Suspense>
  )
}
