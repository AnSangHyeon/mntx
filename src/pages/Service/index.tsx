import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {

}

const Service: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      1
    </Fragment>
  )
}

export default Service