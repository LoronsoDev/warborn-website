// Catálogo de merch. Antes vivía en la tabla `products` de Supabase y era
// editable desde un panel de admin — ese panel tenía un fallo de seguridad
// (login por contraseña maestra hardcodeada) que se usó para vandalizar un
// producto en agosto de 2026. Se retiró el panel entero y el catálogo pasó
// a ser estático: cambiar nombre/precio/descripción es editar este archivo,
// hacer commit y desplegar. Sin login, sin escritura remota, sin RLS que
// pueda fallar.
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
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475496425-uwagrb.png",
    images: [
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475504229-1e0dbb.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475504229-p4lwlb.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475504229-mg042j.png",
    ],
    type: "Accesorio",
    sizes: null,
    sort_order: 1,
  },
  {
    id: "sudadera-warborn-bordada",
    name: "Sudadera Warborn (bordada)",
    description: "Sudadera táctica con bordado de alta calidad. Algodón pesado.",
    price: 60.0,
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475519695-mtbc1q.png",
    images: ["https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475522637-s00z7e.png"],
    type: "Sudadera",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 2,
  },
  {
    id: "camiseta-warborn-bordada",
    name: "Camiseta Warborn (bordada)",
    description: "Camiseta oficial con logo bordado. Corte regular fit.",
    price: 32.0,
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475416961-ft0da6.png",
    images: [
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-lvpxn7.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-qfm7fx.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-ucbdta.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-csz0d8.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-cxw9lg.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475423161-m5sszt.png",
    ],
    type: "Camiseta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 3,
  },
  {
    id: "gorro-warborn-bordado",
    name: "Gorro Warborn (bordado)",
    description: "Gorro de invierno con bordado Warborn. Tejido reforzado.",
    price: 35.0,
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475445073-w6pp8w.png",
    images: ["https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475448378-ujuyx0.png"],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 4,
  },
  {
    id: "gorra-warborn-bordada",
    name: "Gorra Warborn (bordada)",
    description: "Gorra ajustable con bordado frontal del logo Warborn.",
    price: 35.0,
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475460740-fqlk4f.png",
    images: [
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466032-qpqdk7.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466032-cjlul4.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466032-yjvw70.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466033-y8yvzh.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466033-1liy1m.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475466033-vcgtg8.png",
    ],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 5,
  },
  {
    id: "parche-warborn-bordado",
    name: "Parche Warborn (bordado)",
    description: "Parche velcro bordado para uniformes y mochilas tácticas.",
    price: 25.0,
    image_url: "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475346976-93wd6k.png",
    images: [
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475339992-y6m7e2.png",
      "https://bvmuhjppqreyyoavowya.supabase.co/storage/v1/object/public/images/1776475339992-najqt7.png",
    ],
    type: "Accesorio",
    sizes: ["Único"],
    sort_order: 6,
  },
];
