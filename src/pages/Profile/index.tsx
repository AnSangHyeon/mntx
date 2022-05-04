import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

interface IProps {

}

const Profile: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      Profile
    </Fragment>
  )
}

export default Profile