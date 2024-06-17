import alfy from "alfy";

alfy.output([
  {
    title: "Add Task",
    subtitle: `Add "${alfy.input}" to GTD`,
    arg: alfy.input,
    variables: {
      openNotion: false,
      command: "gtdAdd",
    },
    icon: {
      path: "./src/icons/task.png",
    },
  },
  {
    title: "Add Task and Open notion",
    subtitle: `Add "${alfy.input}" GTD and open Notion`,
    arg: alfy.input,
    variables: {
      openNotion: true,
      command: "gtdAdd",
    },
    icon: {
      path: "./src/icons/completed-task.png",
    },
  },
  {
    title: "Add Reading Task",
    subtitle: `Add "${alfy.input}" as a reading task to GTD`,
    arg: alfy.input,
    variables: {
      openNotion: false,
      command: "gtdAddRead",
    },
    icon: {
      path: "./src/icons/closed-book.png",
    },
  },
  {
    title: "Add Reading Task and Open notion",
    subtitle: `Add "${alfy.input}" as a reading task to GTD and open Notion`,
    arg: alfy.input,
    variables: {
      openNotion: true,
      command: "gtdAddRead",
    },
    icon: {
      path: "./src/icons/open-book.png",
    },
  },
]);
