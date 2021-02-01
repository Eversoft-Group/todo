import React from "react"
import { useSelector, useDispatch } from "react-redux"
import TodoComponent from "../components/todo.component"

const items = [
    {
        name: "todo task 1",
        status: 0,
        description: "description 1",
    },
    {
        name: "todo task 2",
        status: 1,
        description: "description 2",
    },
    {
        name: "todo task 3",
        status: 2,
        description: "description 3",
    },
]

const Todo = () => {
    return(
        <>
        {items.map((item, index) => (
            <TodoComponent item={item} key={index} />
        ))}
        </> 
    )
}

export default Todo