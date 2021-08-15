import React, { useState } from "react";

const users = [
    {name:"Victor",age:20},
    {name:"Jorge",age:20},
    {name:"Rafa",age:20},
    {name:"Tony",age:20},
    {name:"Gaby",age:20},
]

const UserSearch:React.FC = () => {
    
    const [searchWord, setSearchWord] = useState("");
    const [findPerson, setFindPerson] = useState<{name:string,age:number} | undefined>({name:"",age:0});
    
    const searchEvent = () => {
        const foundUser = users.find(user => user.name === searchWord);
        
        setFindPerson(foundUser);
    }

    return (
        <div>
            <h3>User search</h3>
            <input type="text" name="search" value={searchWord} onChange={(e) => {setSearchWord(e.target.value)}}/>
            <button onClick={searchEvent}>Find</button>

            <div style={{background:"green"}}>
                {
                    findPerson !== undefined ? <h4>{`${findPerson.name} is ${findPerson.age} years old`}</h4>:<h4>Not found</h4>
                }
            </div>
        </div>
    )
};

export default UserSearch;