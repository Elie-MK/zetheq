export interface IDropdownItem {
  id: number;
  title: string;
  iconName:
    | "document-text-outline"
    | "navigate-outline"
    | "information-circle-outline"
    | "checkbox-outline"
    | "trash-outline";
  isBorder?: boolean;
}
