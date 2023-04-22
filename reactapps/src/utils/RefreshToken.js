import authService from '../api/authService';
import { store } from '../store';
import { setToken } from '../features/auth/authSlice';

export function RefreshToken() {
  if (localStorage.getItem('token')) {
    authService.tokenDetails(localStorage.getItem('token'))
    .then((data) => {
        console.log(data);
        const formatData = {
          "token": localStorage.getItem('token'),
          "email": data.email, "id": data.id, "role": data.role, "username": data.username
        }
      store.dispatch(setToken(formatData));
      console.log(store.getState());
      })
  }
  else {
    const formatData = {
      "token": "",
      "email": "", "id": "", "role": "", "username": ""
    }
    store.dispatch(setToken(formatData));
    console.log(store.getState());
  }
}

