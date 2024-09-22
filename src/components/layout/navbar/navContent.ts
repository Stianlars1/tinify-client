export interface NavLink {
  name: string;
  url: string;
}
export const NAV_LINKS: NavLink[] = [
  {
    name: "Compress",
    url: "/",
  },
  {
    name: "Resize",
    url: "/resize",
  },
  {
    name: "Crop",
    url: "/crop",
  },
];