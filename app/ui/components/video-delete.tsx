"use client"
import { Button, Input } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function VideoDelete({id}: any){

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (formData: any) => {
            return fetch ("/api/video", {
                method: "DELETE",
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
        e.preventDefault(); // not to be loading
        mutation.mutate({ id })
    }

    return (
        <form onSubmit={onSubmit}> 
            <Button type="submit" isLoading={mutation.isPending} isDisabled={mutation.isPending} color="danger"
            className="mt-4  text-white font-bold py-2 px-4 rounded-xl">
                Delete
            </Button>
        </form>
    );
}