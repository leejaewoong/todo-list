"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Pen, Trash2 } from "lucide-react";

export default function Todo({}) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("테스트용 투두");

  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox
        checked={completed}
        onCheckedChange={(checked) => setCompleted(checked === true)}
      />

      {isEditing ? (
        <input
          className="flex-1 border-b-black border-b pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && "line-through"} ml-2`}>{title}</p>
      )}

      {isEditing ? (
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
          <Check className="h-4 w-4" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
          <Pen className="h-4 w-4" />
        </Button>
      )}
      <Button variant="ghost" size="icon">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}