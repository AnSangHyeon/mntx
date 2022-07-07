import { All } from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {

}

const SignUp: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      <All></All>
    </Fragment>
  )
}

export default SignUp