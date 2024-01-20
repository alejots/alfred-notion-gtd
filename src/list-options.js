import alfy from "alfy";

alfy.output([
  {
    title: "Add Task",
    arg: alfy.input,
    variables: {
      openNotion: false,
      command: "gtdAdd",
    },
  },
  {
    title: "Add Task and Open notion",
    arg: alfy.input,
    variables: {
      openNotion: true,
      command: "gtdAdd",
    },
  },
]);
