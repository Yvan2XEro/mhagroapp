import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthenticationContext = createContext({
  user: {},
  setUser: value => {},
  login: (credentials, type) => {},
  register: (payload, type) => {},
  logout: () => {},
});

export const EMAIL_PASSWORD = 'EMAIL_PASSWORD';
export const GOOGLE = 'GOOGLE';

const AuthenticationProvider = ({children}) => {
  const [user, setUser] = useState(auth().currentUser);
  const [method, setMethod] = useState(null);
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setUser,
        login: async (credential, type = EMAIL_PASSWORD) => {
          if (type !== GOOGLE) {
            const {email, password} = credential;
            setMethod(EMAIL_PASSWORD);
            return await auth().signInWithEmailAndPassword(email, password);
          } else {
            setMethod(GOOGLE);
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            return await auth().signInWithCredential(googleCredential);
          }
        },
        register: async (payload, type = EMAIL_PASSWORD) => {
          if (type !== GOOGLE) {
            const {email, password} = payload;
            return await auth().createUserWithEmailAndPassword(email, password);
          }
        },
        logout: async () => {
          try {
            if (method === GOOGLE) await GoogleSignin.signOut();
            await auth().signOut();
          } catch (error) {
            console.log(error);
          } finally {
            setUser(null);
          }
        },
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
