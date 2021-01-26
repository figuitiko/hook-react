import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

     const { setUser} = useContext(UserContext);
     const handleSetUser = ()=>{
         setUser({
            id: 1235,
            name:'frank',
            email: 'frankfigao@gmail.com'

        });
     }
    return (
        <div>
            <h1>Login screen</h1>
            <hr/>
            <button className="btn btn-primary"onClick={handleSetUser}>Add user</button>
        </div>
    )
}
