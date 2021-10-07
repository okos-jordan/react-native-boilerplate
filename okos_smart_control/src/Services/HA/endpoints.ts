import React from 'react'

//API Home Assitant
export const API_URL = 'http://192.168.1.133:8123'
export const auth_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGE5ZmZkMDU3Mzg0MDE4ODlhMDlkMTcxZDY2N2EyZSIsImlhdCI6MTYzMjcxMzY4NywiZXhwIjoxOTQ4MDczNjg3fQ.Dh4RJuXZZQPXlUZXRxj9Yx1Jeu22aVpg5uWx2hDmswA'
//export const API_URL = 'http://homeassistant.local:8123'


//Reference: https://developers.home-assistant.io/docs/api/rest/

export const PING = `${API_URL}/api/`

export const CONFIG = `${API_URL}/api/config`

export const EVENTS = `${API_URL}/api/events`

export const SERVICES = `${API_URL}/api/services`

export const HISTORY = `${API_URL}/api/history/period/<timestamp>`

export const LOGBOOK = `${API_URL}/api/logbook/<timestamp>`

export const STATES = `${API_URL}/api/states`
//GET AND POST
export const ENTITY = `${API_URL}/api/states/`

export const ERRORLOG = `${API_URL}/api/error_log`

export const CAMERAPROXY = `${API_URL}/api/camera_proxy/<camera entity_id>`
//POST
export const EVENTTYPES = `${API_URL}/api/events/<event_type>`

export const SERVICE = (domain: any, service: any) =>  `${API_URL}/api/services/${domain}/${service}`

export const TEMPLATE = `${API_URL}/api/template`

export const CHECKCONFIG = `${API_URL}/api/config/core/check_config`
