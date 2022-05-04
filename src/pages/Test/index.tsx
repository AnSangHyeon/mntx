import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {

}

const Test: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      Test
    </Fragment>
  )
}

export default Test