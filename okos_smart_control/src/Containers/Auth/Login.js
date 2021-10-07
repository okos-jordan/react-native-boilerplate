import React, { useState } from 'react'
import { View } from 'react-native'

import * as api from '@/Services/Auth/auth_service'
import { useAuth }  from '@/Services/Auth/auth_provider'

import Form from 'react-native-basic-form'
import CTA from '@/Components/auth_cta'
import { Header, ErrorText } from '@/Components/auth_shared'
import { Brand } from '@/Components'

export default function Login(props) {
  console.log(props)
  const { navigation } = props
  const { navigate } = navigation

  //1 - DECLARE VARIABLES
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fields = [
    { name: 'Email', label: 'Email', required: true },
    { name: 'Password', label: 'Password', required: true, secure: true },
  ]

  const { handleLogin } = useAuth()

  async function onSubmit(state) {
    setLoading(true)

    try {
      console.log("Attempting Login", state)
      let response = await api.login(state)
      console.log("Response from Login", response, " - Now handling!")
      let res = await handleLogin(response)
      setLoading(false)
      console.log("Finished Handle Login", res)
      
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  let formProps = { title: 'Login', fields, onSubmit, loading }
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' }}>
      <Header title={'Login'} />
      <Brand />
      <View style={{ flex: 1 }}>
        <ErrorText error={error} />
        <Form {...formProps}>
          <CTA
            ctaText={'Forgot Password?'}
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{ marginTop: 20 }}
          />

          <CTA
            title={"Don't have an account?"}
            ctaText={'Register'}
            onPress={() => navigation.replace('Register')}
            style={{ marginTop: 50 }}
          />
        </Form>
      </View>
    </View>
  )
}

Login.navigationOptions = ({}) => {
  return {
    title: '',
  }
}
