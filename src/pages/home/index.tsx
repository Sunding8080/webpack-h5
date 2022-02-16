import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import * as store from '@/store'

const home = () => {
  const [info, setInfo] = useRecoilState(store.info)
  const myAge = useRecoilValue(store.myAge)
  const myName = useRecoilValue(store.myName)
  return <div>{`${myName}:${myAge}`}</div>
}

export default home
