export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface IFilter {
  value: "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";
}

export enum FilterValueEnum {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
}

export interface IFilterButton {
  name: string;
  value: FilterValueEnum;
}