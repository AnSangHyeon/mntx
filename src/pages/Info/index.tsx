import { getCookie, setCookie } from '@utils/index'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface IInfoProps {

}

const Info: React.FC<IInfoProps> = (props: IInfoProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      Info
    </Fragment>
  )
}

export default Info