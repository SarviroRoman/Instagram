import React, {Component} from 'react';

import './Login.css';

class Login extends Component {
  render () {
    return (
      <section className="login-page">
       <main className="container d-flex flex-row justify-content-center text-center">
        <div className="slider"></div>
        <div className="login-form-section">
          <div className='container flex-column'>
            <header>
              <h1>Instagram</h1>
              <p>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
            </header>
            <main></main>
            <footer></footer>
          </div>
        </div>
       
       </main>
      </section>
    )
  }
}

export default Login;