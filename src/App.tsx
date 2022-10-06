import logo from './assets/logo.jpeg';
import './App.css';
import { FaTelegram, FaChartLine } from "react-icons/fa"

function App() {
  return (
    <div className='bg-black text-white h-screen'>
      <div className='container mx-auto px-4 md:px-16'>
        <div className='flex flex-col gap-16 items-center'>
          <h1 className='text-5xl text-center font-bold pt-32 uppercase underline'>Block Cheng</h1>
          <div>
            <img src={logo} alt="logo" className="w-96 border border-white border-8" />
          </div>
          <div className='flex justify-between gap-32'>
            <a href="https://t.me" className='flex items-center gap-2  hover:underline' target={"_blank"} rel="noreferrer">
              <FaTelegram className='w-4 h-4' />
              <span>Telegram</span>
            </a>
            <a href="https://poocoin.app" className='flex items-center gap-2 hover:underline' target={"_blank"} rel="noreferrer">
              <FaChartLine className='w-4 h-4' />
              <span>Chart</span>
            </a>
          </div>
          <div>
            <code className="border px-2 py-2 bg-white/20 text-sm uppercase">Contract coming soon</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
