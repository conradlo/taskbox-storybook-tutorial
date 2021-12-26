import React from "react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import { PureInboxScreen } from "./InboxScreen";

import * as TaskListStories from "./TaskList.stories";

const TasksSlice = createSlice({
  name: "tasks",
  initialState: TaskListStories.Default.args.tasks,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.findIndex((task) => task.id === id);
      if (task >= 0) {
        state[task].state = newTaskState;
      }
    },
  },
});

const storeMock = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  },
});

export default {
  components: PureInboxScreen,
  title: "PureInboxScreen",
  decorators: [(story) => <Provider store={storeMock}>{story()}</Provider>],
};

const Template = (args) => <PureInboxScreen {...args} />;

const Default = Template.bind({});
const Error = Template.bind({});
Error.args = {
  error: "Some error",
};

export { Default, Error };
