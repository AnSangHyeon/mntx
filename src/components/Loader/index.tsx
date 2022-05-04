import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {
  visible: boolean
  text: string
}

const Loader: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  const { visible, text } = props
  return (
    <Fragment>
      Loader {visible} {text}
    </Fragment>
  )
}

export default Loader