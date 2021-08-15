
interface ChildProps{
    color:string;
    onClickProp:()=>void;
}

export const Child = ({color,onClickProp}:ChildProps) =>{
    return (
        <div style={{background:"red"}}> 
            <h2>{color}</h2>
            <button onClick={onClickProp}>Click me</button>
        </div>
    )
}

export const ChildAsFC:React.FC<ChildProps> = ({color,onClickProp})=>{
    return (
        <div style={{background:"blue"}}> 
            <h2>{color}</h2>
            <button onClick={onClickProp}>Click me</button>
        </div>
    )
}