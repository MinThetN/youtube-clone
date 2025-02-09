"use client"
import { Button, Input } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function VideoCreateForm(){

    const [title, setTitle] = useState('') // (3) useState get data from setTitle(onChange)
    const [description, setDescription] = useState('')
    const [videoId, setVideoId] = useState('')
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (formData: any) => {
            return fetch ("api/video", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["videoData"] });
        }
    });

    const onSubmit = (e: any) => {
        // e.preventDefault(); // not to be loading
        mutation.mutate({title, description, videoId}) // (4) get data from (3)
    }

    return (
        <div className="flex items-center justify-center w-full p-5">
            <div className="border p-6 rounded-xl bg-white shadow-xl w-96">
                <form className="grid gap-4" onSubmit={onSubmit}>
                    <h1 className="text-2xl font-bold text-center">Create New Video</h1>
                    <Input // (1) add input here 
                        label="Title" 
                        type="text" 
                        value={title} // (5) Get data from (3)
                        // (2) get data from input with onChange ( setTitle )
                        onChange={ (e) => setTitle(e.target.value) } />  
                    <Input label="Description" type="text" value={description}
                        onChange={ (e) => setDescription(e.target.value) } />
                    <Input label="Video Id" type="text" value={videoId}
                        onChange={ (e) => setVideoId(e.target.value) }  />
                    <Button type="submit" isLoading={mutation.isPending} isDisabled={mutation.isPending}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        Submit
                    </Button>
                </form>
            </div>
        </div>

    );
}