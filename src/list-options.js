import alfy from "alfy";

alfy.output([
  {
    title: "Add Task",
    subtitle: "Add a task to your GTD system",
    arg: alfy.input,
    variables: {
      openNotion: false,
      command: "gtdAdd",
    },
  },
  {
    title: "Add Task and Open notion",
    subtitle: "Add a task to your GTD system and open notion",
    arg: alfy.input,
    variables: {
      openNotion: true,
      command: "gtdAdd",
    },
  },
  {
    title: "Add Reading Task",
    subtitle: "Add a reading task to your GTD system",
    arg: alfy.input,
    variables: {
      openNotion: false,
      command: "gtdAddRead",
    },
  },
  {
    title: "Add Reading Task and Open notion",
    subtitle: "Add a reading task to your GTD system and open notion",
    arg: alfy.input,
    variables: {
      openNotion: true,
      command: "gtdAddRead",
    },
  },
]);
