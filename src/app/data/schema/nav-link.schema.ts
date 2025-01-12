export interface NavLinkSchema {
  name: string;
  path: string;
  childrens: NavLinkSchema[]
}
