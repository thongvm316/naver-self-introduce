import './App.css'
import avatar from './images/james.jpg'

function App() {
  return (
    <div className='center light-bg'>
      <div className='header flex'>
        <div className='mr'>
          <button>Front-End Developer</button>
          <h3 className='white'>Hi, I'm James, 29 years old. ~~!</h3>
          <br />
          <h3 className='white'>
            I've been working as FrontEnd Developer for nearly 4 years.
          </h3>
          <h3 className='white'>I can work with: ReactJs, NodeJs, MongoDB.</h3>
          <br />
          <h3 className='white'>
            Running, Reading, Music are my favorite hobbies.
          </h3>
          <p className='gray'>Where your attention goes, your time goes.</p>
        </div>
        <img src={avatar} className='avatar' alt='james' />
      </div>
    </div>
  )
}

export default App
