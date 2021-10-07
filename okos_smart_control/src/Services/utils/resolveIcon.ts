const iconMap = {
  'switch': 'toggle-on',
  'sensor': 'ruler-horizontal',
  'light': 'lightbulb',
  'temperature': 'temperature-high',
  'sun': 'star',
  'weather': 'mixcloud'
}

 const resolveIcon = (type: string) => {
  
  if(Object.keys(iconMap).includes(type)){
    let iconStr = iconMap[type]
    console.log("Resolving Icon: ", type, " -> ", iconStr)
    return iconStr
  } else {
    console.log("Failed resolving icon: ", type, " - adding heartbeat")
    return 'heartbeat'
  }
}

export default resolveIcon