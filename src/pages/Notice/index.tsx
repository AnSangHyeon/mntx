import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

interface IProps {

}

const Notice: React.FC<IProps> = (props: IProps) => {
  const { page } = useParams()
  console.log(page)
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      Notice {page}
    </Fragment>
  )
}

export default Notice