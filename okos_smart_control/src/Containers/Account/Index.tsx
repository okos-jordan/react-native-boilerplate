import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Form, { TYPES } from 'react-native-basic-form'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements'

import { Brand } from '@/Components'
import CTA from '@/Components/auth_cta'
import { ErrorText } from '@/Components/auth_shared'
import { useAuth }  from '@/Services/Auth/auth_provider'

export default function UpdateProfile(props) {
  const { navigation } = props

  //1 - DECLARE VARIABLES
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { state, updateUser } = useAuth()

  const fields = [
    { name: 'firstName', label: 'First Name', required: true },
    { name: 'lastName', label: 'Last Name', required: true },
    { name: 'username', label: 'Username', required: true },
  ]

  async function onSubmit(data) {
    setLoading(true)

    try {
      //let response = await api.updateProfile(state.user._id, data)
      //updateUser(response.user)

      setLoading(false)
      navigation.goBack()
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1,  backgroundColor: '#fff' }}>
           <Header placement="left"
            leftComponent={<TouchableOpacity onPress={() => navigation.goBack() }>
              <Icon name="arrow-circle-left" size={25} color="#FFF" />
            </TouchableOpacity> }
    centerComponent={<Text>Account</Text>} />
      <View style={{ flex: 1 }}>
        <ErrorText error={error} />
        <Form
          fields={fields}
          title={'Submit'}
          loading={loading}
          initialData={state.user}
          error={error}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  )
}

UpdateProfile.navigationOptions = ({}) => {
  return {
    title: 'Update Profile',
  }
}
