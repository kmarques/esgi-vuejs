import Hello from "../components/views/Hello.vue";
import TodoBoardRouter from "../components/views/TodoBoard/TodoBoardRouter.vue";
import TodoBoardNew from "../components/views/TodoBoard/TodoBoardNew.vue";
import TodoBoard from "../components/views/TodoBoard/TodoBoard.vue";

export default [
  {
    path: "/todos",
    components: {
      default: TodoBoardRouter,
      header: Hello,
    },
    meta: {
      private: true,
    },
    children: [
      {
        path: "new",
        name: "TodoNew",
        component: TodoBoardNew,
      },
      {
        path: ":id",
        component: TodoBoard,
        children: [],
      },
    ],
  },
];
