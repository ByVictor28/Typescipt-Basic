import React from "react";

const EventComponent:React.FC = () => {

    const onChangeHandler = (e: React.ChangeEvent) => {
        console.log(e)
    }

    const dragStartsHandler = (e:React.DragEvent) => {
        console.log(e.target , "is moving")
    }

    return ( 
        <div>
            <input type="text" onChange={onChangeHandler}/>

            <div style={{width:"200px",height:"200px",background:"red"}} draggable onDragStart={dragStartsHandler}>Drag me</div>
        </div>
    )
}

export default EventComponent;