import { FilterValueEnum, IFilterButton } from "../types/types";

export const filterButtons: IFilterButton[] = [
  { name: "All", value: FilterValueEnum.SHOW_ALL },
  { name: "Active", value: FilterValueEnum.SHOW_ACTIVE },
  { name: "Completed", value: FilterValueEnum.SHOW_COMPLETED },
];
