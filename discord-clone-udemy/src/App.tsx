import './App.scss';
import Chat from './component/chat/Chat';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      {/* SideBar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
