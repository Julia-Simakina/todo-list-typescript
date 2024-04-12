import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from "../store/actions/actionNames";

export const filterButtons = [
  { id: "All", filter: SHOW_ALL },
  { id: "Active", filter: SHOW_ACTIVE },
  { id: "Completed", filter: SHOW_COMPLETED },
];
