import { Button, Input } from "@heroui/react";

export function VideoCreateForm(){
    return (
        <div className="flex items-center justify-center w-full p-5">
            <div className="border p-6 rounded-xl bg-white shadow-xl w-96">
                <form className="grid gap-4">
                    <h1 className="text-2xl font-bold text-center">Create New Video</h1>
                    <Input label="Title" type="text" />
                    <Input label="Description" type="text" />
                    <Input label="Video Id" type="text" />
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        Submit
                    </Button>
                </form>
            </div>
        </div>

    );
}