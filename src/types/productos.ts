// types/productos.ts
export interface Producto {
  id: string;
  name: string;
  subtitle: string;
  heroImage: string;
  description: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}
