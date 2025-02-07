import { Input } from "@heroui/react";

export function VideoCreateForm(){
    return (
        <div className="border p-3 rounded-2xl max-w-xl">
            <form action="">
                <Input label="Title" type="text" />
                <Input label="Description" type="text" />
                <Input label="Id" type="text" />
            </form>
        </div>
    );
}