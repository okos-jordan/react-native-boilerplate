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

export default function IndexSettingsContainer(props) {
  console.log(props)
  const { navigation } = props
  const { navigate } = navigation

  //1 - DECLARE VARIABLES
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fields = [
    { name: 'theme', label: 'Theme' },
    { name: 'ha_ip', label: 'Home assistant IP' },
  ]

async function onSubmit(state) {
  setLoading(true)

  try {
    
    setLoading(false)
    navigation.goBack()
  } catch (error) {
    // CLean up activities
    setError(error.message)
    setLoading(false)
  }
}

let formProps = { title: 'Settings', fields, onSubmit, loading }
return (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
     <Header
    placement="left"
    
    leftComponent={<TouchableOpacity onPress={() => navigation.goBack() }>
      <Icon name="arrow-circle-left" size={25} color="#FFF" />
      </TouchableOpacity> }
    centerComponent={<Text>SETTINGS</Text>} />
    <Brand />
    <View style={{ flex: 1 }}>
      <ErrorText error={error} />
      <Form {...formProps}>
      </Form>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black'
  },
})
