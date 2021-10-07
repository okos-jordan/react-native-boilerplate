import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Theme'
import UpdateDevice from '@/Services/HA/UpdateDevice'
import Icon from 'react-native-vector-icons/FontAwesome';

interface BinaryProps {
  status: 'on' | 'off'
  icon: string | 40
  entity_id: string
  size?: number | string
  height?: number | string
  width?: number | string
}

export const BinaryControl = ({ entity_id, status, icon, size, height, width }: BinaryProps) => {
  const { Layout, Images } = useTheme()

  return (
    <TouchableOpacity onPress={() => UpdateDevice(entity_id)}>
    <Icon name={icon} size={size} color="#FFF" />
  </TouchableOpacity>    
  )
}

BinaryControl.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default { BinaryControl }
