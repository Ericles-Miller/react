import { useState } from 'react'
import { Header } from './components/Header';
import Post from './post'
import './style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Post 
        author='Ericles Miller'
        content='fadsfdsfnlk hfsdhfskdljhf fhkjahfkjd fahsdkfhkj fass'
      />
    </div>
    )
}
export default App
