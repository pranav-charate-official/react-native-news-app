import {createContext} from 'react';

const nullUser: User = {
  fullName: '_noname_',
  email: '_noemail_',
  password: '_nopassword_',
};

export const AuthContext = createContext<User>(nullUser);
