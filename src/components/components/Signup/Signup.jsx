import {useState} from 'react';


export default function Signup() {
    const [newUser, setNewUser] = useState({username: '', password: '', email: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newUser);

        // Call backend to create new user
        // NewUser(user){}
    }

    return (
      <div className="flex items-center h-[1080px]">
          <form className="shadow-2xl w-96 m-auto rounded-xl" onSubmit={handleSubmit}>
              <div className="p-4 bg-gray-100 rounded-xl">
                  <div className="mb-2">
                      <label htmlFor="username" className="font-medium text-gray-600 text-2xl">Username</label>
                      <input id="username" name="username"
                             onChange={e => setNewUser({...newUser, username: e.target.value})}
                             value={newUser.username}
                             className="w-full mt-1 shadow rounded-sm p-2"/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="password" className="font-medium text-gray-600 text-2xl">Password</label>
                      <input id="password" type="password" name="password"
                             onChange={e => setNewUser({...newUser, password: e.target.value})} value={newUser.password}
                             className="w-full mt-1 shadow rounded-sm p-2"/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="email" className="font-medium text-gray-600 text-2xl">Email</label>
                      <input id="email" type="email" name="email"
                             onChange={e => setNewUser({...newUser, email: e.target.value})} value={newUser.email}
                             className="w-full mt-1 shadow rounded-sm p-2"/>
                  </div>
                  <div className="p-2 text-right mt-3">
                      <button
                        className="py-2 px-4 border border-transparent shadow-sm text-sm
                        font-medium rounded-md text-white bg-pine-green-50 hover:bg-razzle-dazzle-rose-50
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pine-green-50">Signup
                      </button>
                  </div>
              </div>
          </form>
      </div>
    )
}
