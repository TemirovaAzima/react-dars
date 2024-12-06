import {UserList} from "./components/UserList.jsx";
export const App = ()=>{
    const users = [
        {
            name: "Azima",
            email: "azima@example.com",
            country: "Uzbekistan"
        },
        {
            name: 'Lili',
            email: "lili@example.com",
            country: "Canada"
        },
        {
            name: 'KimSophiya',
            email: 'kimsophiya@example.com',
            country: 'South Korea'
        }
    ]
    return (
        <main>
            {users.map((user)=>(
                <div key={user.email}>
                    <p>Name is :{user.name}</p>
                    <p>Email : {user.email}</p>
                    <p> Country :{user.country}</p>
                    <hr/>
                    <UserList/>
                </div>
            ))}
        </main>
    )
}