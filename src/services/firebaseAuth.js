import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut as logout,
  updateProfile,
} from 'firebase/auth';
import { firebaseApp } from './firebaseApp';

export const auth = getAuth(firebaseApp);

export const signUp = async ({ name, email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(user, {
      displayName: name,
    });
    console.log(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};
export const signIn = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    await logout(auth);
  } catch (error) {
    console.log(error);
  }
};
