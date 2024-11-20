// app/productos/[productId]/page.tsx
import { productos } from "@/data/productos";
import { Producto } from "@/types/productos";
import { ProductLayout } from "@/components/LayoutProducto";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

// Tipos para el JSON-LD
const jsonLd = (producto: Producto) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: producto.name,
    description: producto.subtitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "Contactar",
      priceCurrency: "CLP",
    },
    publisher: {
      "@type": "Organization",
      name: "OpenCode",
      url: "https://tudominio.cl",
    },
  };
};

interface ProductPageProps {
  params: {
    productId: string;
  };
}

// Generación dinámica de metadatos
export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const producto = productos.find((p) => p.id === params.productId);

  if (!producto) {
    return {
      title: "Producto no encontrado",
      description: "El producto que busca no existe",
    };
  }

  return {
    title: `${producto.name} - Software Empresarial | OpenCode`,
    description: producto.subtitle,
    openGraph: {
      title: `${producto.name} - Software Empresarial`,
      description: producto.subtitle,
      images: [`/productos/${producto.id}-og.jpg`],
      url: `https://tudominio.cl/productos/${producto.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${producto.name} - Software Empresarial`,
      description: producto.subtitle,
      images: [`/productos/${producto.id}-og.jpg`],
    },
    alternates: {
      canonical: `https://tudominio.cl/productos/${producto.id}`,
    },
  };
}

export async function generateStaticParams() {
  return productos.map((producto) => ({
    productId: producto.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const producto = productos.find((p) => p.id === params.productId);

  if (!producto) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(producto)) }}
      />
      <ProductLayout producto={producto} />
    </>
  );
}
