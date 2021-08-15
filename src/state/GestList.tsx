import { useState } from "react";

const GuestList : React.FC = () => {

    const [guestName, setGuestName] = useState("");
    const [listGuest, setListGuest] = useState<string[]>([])

    const onClickHandler = () => {
        
        setListGuest([...listGuest,guestName]);
        
        setGuestName("");
    }
    return(
        <div>
            <h1>Guest List</h1>
            <ul>
                {
                    listGuest.map(guest=><li key={guest}>{guest}</li>)
                }
            </ul>

            <input type="text" placeholder="Name" value={guestName} onChange={(e)=> setGuestName(e.target.value)}></input>
            <button onClick={onClickHandler}>Add Guest</button>
        </div>
    )
};

export default GuestList;