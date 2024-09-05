import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as logout,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useModal } from 'helpers';
import { auth } from './firebaseApp';


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
    return { ...user, displayName: name };
  } catch (error) {
    console.log(error);
  }
};

const errorMessagesMap = {
  invalidCredential: {
    serverMsg: 'invalid-credential',
    clientMsg: 'Wrong email or password! Please check your credential',
  },
  manyRequests: {
    serverMsg: 'too-many-requests',
    clientMsg: 'Too many failed login attempts! Please try again later',
  },
  anotherError: {
    serverMsg: '',
    clientMsg:
      'An unknown error occurred. Please reload the page, or try again later',
  },
};
const { invalidCredential, manyRequests, anotherError } = errorMessagesMap;

export const useSignIn = () => {
  const { closeModal } = useModal();
  const invalidCredId = 'inv-cred-id';

  return async ({ email, password }, form) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      closeModal(form);
      toast.dismiss(invalidCredId);
    } catch ({ message }) {
      if (message.includes(invalidCredential.serverMsg)) {
        toast.error(invalidCredential.clientMsg, {
          toastId: invalidCredId,
        });
        return;
      }
      message.includes(manyRequests.serverMsg)
        ? toast.error(manyRequests.clientMsg)
        : toast.error(anotherError.clientMsg);
      closeModal(form);
      toast.dismiss(invalidCredId);
    }
  };
};

export const signOut = async () => {
  try {
    await logout(auth);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserName = async (name) => {
  try {
    const { currentUser } = auth;
    await updateProfile(currentUser, {
      displayName: name,
    });
  } catch (error) {
    console.error(error);
  }
};
