import React, { createContext, useCallback } from 'react';
import api from '../services/api'

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FunctionComponent<> = ({ children }) => {
const signIn = useCallback(async({email, password})=> {
const response = await api.post('sessions', {
  email,
  password,
  })

  console.log(response.data)
}, [])

  return (
    <AuthContextData.Provider
    <AuthContext.Provider value={{ name: 'Leonardo', signIn }}>
    {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}
