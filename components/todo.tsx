"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Pen, Trash2 } from "lucide-react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateTodo, deleteTodo } from "@/actions/todo-actions"

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);
  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation({
    mutationFn: () => updateTodo({
      id: todo.id,
      title,
      completed
    }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      });
    }
  })

  const deletedTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      });
    }
  })

  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox
        checked={completed}
        onCheckedChange={(checked) => {
          setCompleted(checked as boolean);
          updateTodoMutation.mutate();
        }}
      />

      {isEditing ? (
        <input
          className="flex-1 border-b-black border-b pb-1 pl-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && "line-through"} ml-2`}>{title}</p>
      )}

      {isEditing ? (
        <Button 
          variant="ghost" 
          size="icon" 
          loading={updateTodoMutation.isPending} 
          onClick={async () => {
            await updateTodoMutation.mutate();
            setIsEditing(false);
        }}>
          <Check className="h-4 w-4" />
        </Button>
      ) : (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsEditing(true)}
        >
          <Pen className="h-4 w-4" />
        </Button>
      )}
      <Button 
        variant="ghost" 
        size="icon" 
        loading={deletedTodoMutation.isPending} 
        onClick={() => deletedTodoMutation.mutate()}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}