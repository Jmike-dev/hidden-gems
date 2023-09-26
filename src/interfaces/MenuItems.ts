export interface MenuItemInstance {
  id: number;
  title: string;
  image: string;
  restaurantChain: string;
}

export interface ResponseInstance {
  menuItems: MenuItemInstance[];
  number: number;
  offset: number;
  type: string;
  processingTimeMs: number;
  totalMenuItems: number;
}