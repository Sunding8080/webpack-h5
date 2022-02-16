import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import * as store from '@/store'
import { Button } from 'antd'
import styles from './index.module.less'

const home = () => {
  const [info, setInfo] = useRecoilState(store.info)
  const myAge = useRecoilValue(store.myAge)
  const myName = useRecoilValue(store.myName)
  return (
    <div className={styles.home_wrapper}>
      {`${myName}:${myAge}`}
      <br />
      <Button type="primary">Primary</Button>
    </div>
  )
}

export default home
