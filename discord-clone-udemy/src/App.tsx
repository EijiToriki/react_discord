import './App.scss';
import Chat from './component/chat/Chat';
import Sidebar from './component/sidebar/Sidebar';
import Login from './component/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';


function App() {

  const user = useAppSelector((state) => state.user)
  // console.log(user)

  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if(loginUser){
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        }))
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className='App'>
      {user ?
      (
        <>
          {/* SideBar */}
          <Sidebar />
          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}

    </div>
  );
}

export default App;
