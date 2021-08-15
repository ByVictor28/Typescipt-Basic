import ReactDOM from "react-dom";
import EventComponent from "./Event/EventComponent";
import Parent from "./props/props";
import GuestList from "./state/GestList";
import UserSearch from "./refs/UserSearch";

const App = () =>{
    return(
        <div>
            <h1>Hiiiiiiiiiiiiiiiiii</h1>
            {/* <Parent></Parent> */}
            {/* <GuestList></GuestList>
            <UserSearch></UserSearch> */}
            {/* <EventComponent></EventComponent> */}
            <UserSearch></UserSearch>
        </div>
    )
};

ReactDOM.render(
    <App></App>,document.querySelector("#root")
);