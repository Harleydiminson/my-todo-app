import { useState } from "react"
import Button from "../UI/Button"

interface TodoFormProps {
    addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
    const [text, setText] = useState('')
    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    
    return (
        <form onSubmit={onSubmitHandler} className="flex gap-2">
        <input
            placeholder="Enter new todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 border border-gray-300 rounded-md flex-1 text-black"
        />
       <Button>Add</Button>
    </form>
    )
}