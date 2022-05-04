import React, { Fragment, useState } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Form, Input, Button, Checkbox } from 'antd'
import useRootStore from '@store/useRootStore'
import { LoginWrap } from './index.style'

interface ILoginProps {
}

const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
  const { authStore } = useRootStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async () => {
    await authStore.login({ username: email, password }) // 10초
    
  }

  const onClickLoginButtonHandler = async (event) => {
    await doLogin()
  }

  const onChangeEmailInputHandler = (event) => {
    const { target: { value } } = event
    // const { value } = event.target

    setEmail(value)
  }

  const onChangePasswordInputHandler = (event) => {
    const { target: { value } } = event
    setPassword(value)
  }
  
  useOnMount(() => {

  })

  useOnUnmount(() => {

  })

  return (
    <LoginWrap>
      <Input 
        size="large" 
        placeholder='ID' 
        value={email}
        onChange={onChangeEmailInputHandler}
      />
      <Input.Password
        size="large" 
        placeholder='Password' 
        value={password} 
        onChange={onChangePasswordInputHandler}
      />
      <div>
        <Checkbox>Remember me</Checkbox>
      </div>
      <div>
        <Button onClick={onClickLoginButtonHandler}>Login</Button>
      </div>
    </LoginWrap>
  )
}

export default Login