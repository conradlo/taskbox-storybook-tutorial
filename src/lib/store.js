import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: "1", title: "Something 1", state: "TASK_INBOX" },
  { id: "2", title: "Something 2", state: "TASK_INBOX" },
  { id: "3", title: "Something 3", state: "TASK_INBOX" },
  { id: "4", title: "Something 4", state: "TASK_INBOX" },
];

const TasksSlice = createSlice({
  name: "tasks",
  initialState: defaultTasks,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskSate } = action.payload;
      const task = state.findIndex((task) => task.id === id);
      if (task >= 0) {
        state[task].state = newTaskSate;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  },
});

export default store;