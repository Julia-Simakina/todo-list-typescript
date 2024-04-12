// import {
//   ADD_TODO,
//   REMOVE_TODO,
//   REMOVE_COMPLETED_TODO,
//   TOGGLE_TODO,
//   EDIT_TODO,
//   SET_VISIBILITY_FILTER,
//   TOGGLE_ALL_TODO,
//   SHOW_ALL,
// } from "../actions/actionNames";

// const getInitialState = () => {
//   return {
//     todoList: [],
//     currentFilter: SHOW_ALL,
//   };
// };

// export const todosReducer = (state = getInitialState(), action) => {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {
//         ...state,
//         currentFilter: action.filter,
//       };
//     case ADD_TODO:
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todoList: state.todoList.filter(
//           (todo) => todo.id !== action.payload.id
//         ),
//       };
//     case REMOVE_COMPLETED_TODO:
//       return {
//         ...state,
//         todoList: state.todoList.filter((todo) => !todo.completed),
//       };

//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todoList: state.todoList.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case TOGGLE_ALL_TODO:
//       const allCompleted = state.todoList.every((todo) => todo.completed);
//       return {
//         ...state,
//         todoList: state.todoList.map((todo) => ({
//           ...todo,
//           completed: !allCompleted,
//         })),
//       };
//     case EDIT_TODO:
//       return {
//         ...state,
//         todoList: state.todoList.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, text: action.payload.newText }
//             : todo
//         ),
//       };
//     default:
//       return state;
//   }
// };
