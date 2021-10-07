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
import resolveIcon from '@/Services/utils/resolveIcon'
import { BinaryControl } from '@/Components/EntityControls';

const IndexDevicesContainer = (props) => {
  let item = props.route.params.entity
  let icon = resolveIcon(item.entity_id.split('.')[0])
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}
    >
           <Header
    placement="left"
    
    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack() }>
      <Icon name="arrow-circle-left" size={25} color="#FFF" />
      </TouchableOpacity> }
    centerComponent={<Text>{item.attributes.friendly_name}</Text>} />
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
        <Icon name={icon} size={40} color="#FFF" />
        <Text>Type: {item.entity_id.split('.')[0]}</Text>
        <Text>Entity: {item.entity_id.split('.')[1]}</Text>
        <Text>State: {item.state}</Text>
        <Text>Last changed: {item.last_changed}</Text>
        <Text>Last updated: {item.last_updated}</Text>
        <BinaryControl status={item.state} icon={icon} size={60} entity_id={item.entity_id} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default IndexDevicesContainer
