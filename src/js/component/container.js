import React from "react";
import { TaskList } from "./tasklist";
import { FormTodo } from "./formtodo";

export function Container() {
	return (
		<div>
			<p>Container!!!</p>
			<FormTodo />
			<TaskList />
		</div>
	);
}
