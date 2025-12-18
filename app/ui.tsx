"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Todo from "@/components/todo";
import { Search, Plus } from "lucide-react";

export default function UI() {
  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">TODO LIST</h1>

      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search TODO"
          className="pl-10"
        />
      </div>

      <Todo />

      <Button className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        ADD TODO
      </Button>
    </div>
  );
}