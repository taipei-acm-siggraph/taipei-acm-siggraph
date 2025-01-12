export interface OrganizationMember {
    name: string;
    link: string;
    image: string;
}
  
export interface OrganizationPosition {
    position: string;
    group: OrganizationMember[];
}
  
export interface Organization {
    gen: string;
    period: string;
    members: OrganizationPosition[];
}