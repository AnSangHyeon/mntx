import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {

}

const Work: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      Work
    </Fragment>
  )
}

export default Work