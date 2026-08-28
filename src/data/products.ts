// Catálogo de merch. Antes vivía en la tabla `products` de Supabase y era
// editable desde un panel de admin — ese panel tenía un fallo de seguridad
// (login por contraseña maestra hardcodeada) que se usó para vandalizar un
// producto en agosto de 2026. Se retiró el panel entero y el catálogo pasó
// a ser estático: cambiar nombre/precio/descripción es editar este archivo,
// hacer commit y desplegar. Sin login, sin escritura remota, sin RLS que
// pueda fallar. Las imágenes también viven aquí (src/assets/products/),
// convertidas a WebP, así que no depende de Supabase Storage para nada.

import alfombrilla1 from "@/assets/products/alfombrilla-warborn-1.webp";
import alfombrilla2 from "@/assets/products/alfombrilla-warborn-2.webp";
import alfombrilla3 from "@/assets/products/alfombrilla-warborn-3.webp";
import alfombrilla4 from "@/assets/products/alfombrilla-warborn-4.webp";
import sudadera1 from "@/assets/products/sudadera-warborn-1.webp";
import sudadera2 from "@/assets/products/sudadera-warborn-2.webp";
import camiseta1 from "@/assets/products/camiseta-warborn-1.webp";
import camiseta2 from "@/assets/products/camiseta-warborn-2.webp";
import camiseta3 from "@/assets/products/camiseta-warborn-3.webp";
import camiseta4 from "@/assets/products/camiseta-warborn-4.webp";
import camiseta5 from "@/assets/products/camiseta-warborn-5.webp";
import camiseta6 from "@/assets/products/camiseta-warborn-6.webp";
import camiseta7 from "@/assets/products/camiseta-warborn-7.webp";
import gorro1 from "@/assets/products/gorro-warborn-1.webp";
import gorro2 from "@/assets/products/gorro-warborn-2.webp";
import gorra1 from "@/assets/products/gorra-warborn-1.webp";
import gorra2 from "@/assets/products/gorra-warborn-2.webp";
import gorra3 from "@/assets/products/gorra-warborn-3.webp";
import gorra4 from "@/assets/products/gorra-warborn-4.webp";
import gorra5 from "@/assets/products/gorra-warborn-5.webp";
import gorra6 from "@/assets/products/gorra-warborn-6.webp";
import gorra7 from "@/assets/products/gorra-warborn-7.webp";
import parche1 from "@/assets/products/parche-warborn-1.webp";
import parche2 from "@/assets/products/parche-warborn-2.webp";
import parche3 from "@/assets/products/parche-warborn-3.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  images: string[];
  type: string;
  sizes: string[] | null;
  sort_order: number;
}

export const products: Product[] = [
  {
    id: "alfombrilla-warborn",
    name: "Alfombrilla Warborn",
    description: "Alfombrilla XXL bordada con el logo Warborn. Acabado militar premium.",
    price: 40.0,
    image_url: alfombrilla1,
    images: [alfombrilla2, alfombrilla3, alfombrilla4],
    type: "Accesorio",
    sizes: null,
    sort_order: 1,
  },
  {
    id: "sudadera-warborn-bordada",
    name: "Sudadera Warborn (bordada)",
    description: "Sudadera táctica con bordado de alta calidad. Algodón pesado.",
    price: 60.0,
    image_url: sudadera1,
    images: [sudadera2],
    type: "Sudadera",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 2,
  },
  {
    id: "camiseta-warborn-bordada",
    name: "Camiseta Warborn (bordada)",
    description: "Camiseta oficial con logo bordado. Corte regular fit.",
    price: 32.0,
    image_url: camiseta1,
    images: [camiseta2, camiseta3, camiseta4, camiseta5, camiseta6, camiseta7],
    type: "Camiseta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 3,
  },
  {
    id: "gorro-warborn-bordado",
    name: "Gorro Warborn (bordado)",
    description: "Gorro de invierno con bordado Warborn. Tejido reforzado.",
    price: 35.0,
    image_url: gorro1,
    images: [gorro2],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 4,
  },
  {
    id: "gorra-warborn-bordada",
    name: "Gorra Warborn (bordada)",
    description: "Gorra ajustable con bordado frontal del logo Warborn.",
    price: 35.0,
    image_url: gorra1,
    images: [gorra2, gorra3, gorra4, gorra5, gorra6, gorra7],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 5,
  },
  {
    id: "parche-warborn-bordado",
    name: "Parche Warborn (bordado)",
    description: "Parche velcro bordado para uniformes y mochilas tácticas.",
    price: 25.0,
    image_url: parche1,
    images: [parche2, parche3],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 6,
  },
];
