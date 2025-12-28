"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Todo from "@/components/todo";
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query"
import { getTodos, createTodo, updateTodo } from "@/actions/todo-actions"

export default function UI() {
    const [searchInput, setSearchInput] = useState("");

    const todosQuery = useQuery({
        queryKey: ["todos"],
        queryFn: () => getTodos({ searchInput })
    });

    const createTodoMutation = useMutation({
        mutationFn: () => 
            createTodo({
                title: "새로운 할 일",
                completed: false
            }),

        onSuccess: () => {
            todosQuery.refetch();
        }
    })

  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">TODO LIST</h1>

      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search TODO"
          className="pl-10"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {todosQuery.isPending && <p>Loading...</p>}
      {todosQuery.data && todosQuery.data.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}


      <Button 
        onClick={()=> createTodoMutation.mutate()} 
        loading={createTodoMutation.isPending}
        className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        ADD TODO
      </Button>
    </div>
  );
}