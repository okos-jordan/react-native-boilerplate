import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
  Button,
  FlatList,
  Image,
} from 'react-native'
import { Header } from 'react-native-elements'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import { useTranslation } from 'react-i18next'
import { UserState } from '@/Store/User'
import { ThemeState } from '@/Store/Theme'
import { EntitiesState } from '@/Store/Entities'
import { navigate } from '@/Navigators/Root'
import UpdateEntities from '@/Store/Entities/UpdateEntities'
import GetEntities from '@/Services/HA/GetEntities'
import Icon from 'react-native-vector-icons/FontAwesome';
import resolveIcon from '@/Services/utils/resolveIcon'

const IndexExampleContainer = ({ navigation }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true);
  const temp_state = useSelector((state) => state)
  console.log("Full state", temp_state)

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true)
      console.log("FETCHING ENTITIES: ")
      let data = await GetEntities()
      dispatch(UpdateEntities.action({ 'entities': data } ))
    }

    fetchData()
  }, []);


  const DEVICEDATA = [{
    title: 'Sensors',
    data: filterEntities(useSelector((state: { entities: EntitiesState }) => state.entities.entities))
  }]

console.log("Main page entities:", DEVICEDATA)
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
    leftComponent={<Brand height={25} />}
    rightComponent={<View style={styles.headerbuttons}>
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon style={styles.button} name="cog" size={25} color="#FFF" />
    </TouchableOpacity>    
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
      <Icon style={styles.button} name="user-circle" size={25} color="#FFF" />
    </TouchableOpacity></View>} />

      <View style={{ flex: 14, backgroundColor: 'white' }}>
        <SectionList
          sections={DEVICEDATA}
          contentContainerStyle= {{
            justifyContent: 'flex-start'
          }}
          keyExtractor={( item: any, index ) => item.entity_id + index}
          renderItem={({ item }: any) => <DeviceBox item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </View>
  )
}


const entityTypeList = ['switch', 'light', 'sun', 'weather']

const filterEntities = (entities) => {

  return entities.filter(entity => {
    
    let type = entity.entity_id.split('.')[0]
    
    if (entityTypeList.includes(type)){
      return true
    } else {
      return false
    }
  })
}

//    <Icon name={item.icon}/>
const DeviceBox = ({ item }: any) => (
  <TouchableOpacity style={styles.item} onPress={() => navigate('Device', { 'entity': item })}>
    <Icon name={resolveIcon(item.entity_id.split('.')[0])} size={25} color="#FFF" />
    <Text style={styles.title}>{item.attributes.friendly_name}</Text>
    <Text style={styles.subtitle}>{item.entity_id}</Text>
    <Text style={styles.subtitle}>{item.state}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    margin: 8,
  },
  headerbuttons: {
    flexDirection: 'row'
  },
  item: {
    backgroundColor: 'grey',
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  button: {
    margin: 5
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 10,
  },
})

export default IndexExampleContainer
