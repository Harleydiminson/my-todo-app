import Button from "../UI/Button";

interface TodoProps {
    todo: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    };
    deleteTodoHandler: (id: number) => void;

}

export default function Todo(props: TodoProps) {
    const {
        id,
        title,
        completed, } = props.todo
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center gap-4 w-full text-black mb-4">
            <small>{id}</small>
            <h2>{title}</h2>
            <p className={`text-sm px-2 py-1 rounded ${completed ? 'bg-green-200 text-black' : 'bg-red-200 text-black'}`}>
                {completed ? "Done" : "Pending"}
            </p>
            <Button onClick={() => props.deleteTodoHandler(id)} className="bg-red-500">
                Delete
            </Button>
        </div>
    )
}