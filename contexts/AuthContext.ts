import {createContext, Dispatch, SetStateAction} from 'react';

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
export const authContext = createContext<UserContextType>({
  user: null,
  setUser: () => {
    console.error('Default setUser is used, fix now.');
  },
});
