import {Link} from 'react-router-dom';

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        console.log('Username: ' + uname.value);
        console.log('Password: ' + pass.value);
    }


    return (
      <div className="flex items-center h-[1080px]">
          <form className="shadow-2xl w-96 m-auto rounded-xl" onSubmit={handleSubmit}>
              <div className="p-4 bg-gray-100 rounded-xl">
                  <div className="mb-2">
                      <label htmlFor="username" className="font-medium text-gray-600 text-2xl">Username</label>
                      <input id="username" name="uname"
                             className="w-full mt-1 shadow rounded-sm p-2"/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="password" className="font-medium text-gray-600 text-2xl">Password</label>
                      <input id="password" type="password" name="pass"
                             className="w-full mt-1 shadow rounded-sm p-2"/>
                  </div>
                  <div className="p-2 text-right flex items-center justify-between mt-3 rounded">
                      <p className="italic">No account?
                          <Link to="/signup" className="text-blue-500 ml-0.5">
                              Signup here
                          </Link>
                      </p>
                      <button
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pine-green-50 hover:bg-razzle-dazzle-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pine-green-50">Login
                      </button>
                  </div>
              </div>
          </form>
      </div>
    )
}






