export default function Login() {
    return <div>{renderForm}</div>;
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Cleanup.');
}

const renderForm = (
  <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username</label>
              <input id="username"/>
          </div>
          <div><label htmlFor="password">Password</label>
              <input id="password"/>
              <button>Login</button>
          </div>
          <p>No account? <a href="/signup">Signup here</a></p>
      </form>
  </div>
)


