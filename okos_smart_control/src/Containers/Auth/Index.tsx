import React, { useEffect } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'

const IndexSignInContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  const styles = useStyles()

  return (
    <View style={styles.root}>
      <Brand />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
          <Text style={styles.title}>Welcome back!</Text>

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                style={styles.textInput}
                textContentType="username"
              />
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                returnKeyType="done"
                secureTextEntry
                style={styles.textInput}
                textContentType="password"
              />
            </View>
          </Pressable>

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.textButton}>Forgot password?</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Continue</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

export default IndexSignInContainer

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'rgb(93, 95, 222)',
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
    },
    form: {
      alignItems: 'center',
      backgroundColor: 'rgb(58, 58, 60)',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: '#000000',
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    textInput: {
      color: '#FFFFFF',
      flex: 1,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
    },
  })
}
