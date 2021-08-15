import {Child, ChildAsFC} from "./child";

const Parent = ()=>{

    const clickHandler = () =>{
        console.log("Click")
    }
    return(
        <div>
            <Child color="RED" onClickProp={clickHandler}></Child>
            <ChildAsFC color="Blue" onClickProp={clickHandler}></ChildAsFC>
        </div>

    )
};
export default Parent;