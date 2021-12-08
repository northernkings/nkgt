export interface SectionAction {
  label?: string;
  link?: string;
}

export interface Section {
  title?: string;
  showTitle?: boolean;
  action?: SectionAction;
  variants?: Array<string>;
  flow: boolean;
  as?: string;
}
