// data/products.ts
import { Producto } from "@/types/productos";

export const productos: Producto[] = [
  {
    id: "erp-web",
    name: "ERP Web",
    subtitle: "Sistema integral para la gestión empresarial",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, arrienda nuestro ERP 100% Web y descubrirás los beneficios de gestionar de una manera sencilla tu negocio, desde cualquier lugar y con cualquier dispositivo, monitoreando minuto a minuto tu Estado de Resultados para revisar la ganancias o perdidas acumuladas (Ventas, menos Costos de Ventas y menos Gastos).",
      sections: [
        {
          title: "Cuentas por Pagar",
          content: `
                • Recepción de Documentos Electrónicos y Visualización en PDF
                • Costeo de Facturas de Proveedores
                • Selector de Facturas a pago
                • Aprobación de pagos
                • Generación de Comprobante de Egreso
                • Libro de Egresos
                • Saldos de Cuenta Corriente de Proveedores (Resumen/Detalle)`,
        },
        {
          title: "Compras",
          content: `
                • Confección de Órdenes de Compra
                • Visto Bueno electrónico 1 y 2 a Órdenes de Compra con firma digitalizada
                • Envío de Órdenes de Compra vía email
                • Control de Órdenes de Compra pendientes de recepción
                • Históricos de Compras por Proveedor`,
        },
        {
          title: "Inventario",
          content: `
                • Saldos de existencias de Insumos/Productos
                • Cartola cronológica de entradas y salidas por insumo/producto
                • Control de Recepciones de Insumos/Productos
                • Ajustes por Mermas de Inventarios
                • Guías de Despacho Electrónicas
                • Libro de Guías de Despacho`,
        },
        {
          title: "Cotizaciones",
          content: `
                • Confección de Cotizaciones
                • Visto Bueno a Cotizaciones y Generación de Nota de Venta
                • Envío de Cotizaciones vía email en formato Pdf con firma digital
                • Seguimiento de Cotizaciones
                • Histórico de Cotizaciones aprobadas
                • Histórico de Cotizaciones por motivo de rechazo`,
        },
        {
          title: "Facturación",
          content: `
                • Confección Factura electrónica directa
                • Confección Boleta electrónica directa
                • Confección de Notas de Venta
                • Facturación electrónica de Notas de Venta
                • Facturación electrónica de Guías de Despacho
                • Libro de Ventas
                • Notas de Crédito/Débito electrónicas
                • Libro de Caja por Turno
                • Cesión Electrónica de Facturas`,
        },
        {
          title: "Cobranza",
          content: `
                • Estado de Cuentas Corrientes de Clientes
                • Estado de Clientes Morosos
                • Gestión de Cobranza
                • Emailing con carta de cobranza
                • Control Cartera de Cheques`,
        },
        {
          title: "Punto de Venta",
          content: `
                • Operación con código de barra
                • Emite tanto boleta como factura electrónica
                • Emite informe de caja por turno
                • Permite suspender carrito de compras y retomar posteriormente
                • Control venta de Sala y Delivery
                • Reporte de pedidos Delivery en proceso
                • Permanente en pantalla productos más y menos vendidos
                • Reportes de ventas por producto y familia de productos
                • Reporte de ventas Delivery
                • Reporte de ventas Sala
                • Reportes de ventas por producto y familia de productos`,
        },
        {
          title: "Gráficos",
          content: `
                • Gráficos de Venta Mensual
                • Gráficos de Ventas por Familia de Productos
                • Gráficas de Ventas por Vendedor`,
        },
        {
          title: "Reportería",
          content: `
                • Reportes de ventas por Cliente/Producto
                • Reportes de ventas por Productos
                • Reportes de ventas por Familia de Productos
                • Reportes de ventas por Hora
                • Reportes de Compras por Proveedor/Producto`,
        },
        {
          title: "Tienda E-commerce",
          content: `
                • Carrito de compra genera Nota de venta en ERP
                • Pago Carrito con WebPay
                • Clientes registrados con/sin precios especiales
                • Carga de productos desde WebERP
                • Carga de Stock desde WebERP`,
        },
        {
          title: "Conclusión",
          content: `Como puedes apreciar, nuestro ERP está perfectamente estructurado para ser entendido, integrado e implementado rápida y fácilmente en cualquier tipo de negocio.
    
              Si fuese necesario, podemos aplicar ligeros ajustes a las funcionalidades descritas arriba para garantizar plena satisfacción de sus necesidades de gestión. Envíanos tu solicitud a través de nuestra página de CONTACTO o llámenos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "contabilidad",
    name: "Software Contabilidad",
    subtitle: "Gestión contable y tributaria automatizada para tu empresa",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Contabilidad 100% Web y descubre cómo simplificar tu gestión contable, desde cualquier lugar y dispositivo, manteniendo el control total de tu contabilidad y cumplimiento tributario.",
      sections: [
        {
          title: "Contabilidad General",
          content: `
                • Libro Diario Electrónico
                • Plan de Cuentas Personalizable
                • Balance General Automático
                • Estado de Resultados en Tiempo Real
                • Análisis de Cuentas
                • Centralización Automática`,
        },
        {
          title: "Gestión Tributaria",
          content: `
                • Declaración de IVA (F29)
                • Declaración de Renta (F22)
                • Libro de Compras y Ventas Electrónico
                • Registro de Boletas y Facturas
                • Informes Tributarios
                • Control de Impuestos`,
        },
        {
          title: "Activos Fijos",
          content: `
                • Control de Depreciaciones
                • Registro de Activos
                • Cálculo Automático de Corrección Monetaria
                • Informes de Depreciación
                • Control de Bajas y Ventas`,
        },
        {
          title: "Análisis Financiero",
          content: `
                • Indicadores Financieros
                • Flujo de Caja
                • Balance Clasificado
                • Estado de Resultados por Centro de Costo
                • Análisis de Rentabilidad`,
        },
        {
          title: "Reportes y Documentos",
          content: `
                • Balances de 8 Columnas
                • Libro Mayor
                • Comprobantes Contables
                • Informes de Gestión
                • Reportes Personalizados
                • Exportación a Excel`,
        },
        {
          title: "Integraciones",
          content: `
                • Facturación Electrónica
                • Software de Remuneraciones
                • Importación de Cartolas Bancarias
                • Conexión con SII
                • APIs disponibles`,
        },
        {
          title: "Control de Accesos",
          content: `
                • Usuarios Ilimitados
                • Perfiles Personalizables
                • Registro de Auditoría
                • Control de Modificaciones
                • Respaldos Automáticos`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Contabilidad está diseñado para facilitar la gestión contable y tributaria de tu empresa de manera eficiente y segura.
     
              Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "remuneraciones",
    name: "Software Remuneraciones",
    subtitle: "Administración completa de recursos humanos y nómina",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Remuneraciones 100% Web y optimiza la gestión de recursos humanos y pago de sueldos, desde cualquier lugar y dispositivo, manteniendo el control total de tus colaboradores y cumplimiento laboral.",
      sections: [
        {
          title: "Gestión de Personal",
          content: `
            • Ficha Completa del Trabajador
            • Gestión de Contratos y Anexos
            • Control de Asistencia
            • Registro de Cargas Familiares
            • Gestión de Vacaciones y Permisos
            • Registro de Licencias Médicas
            • Control de Turnos`,
        },
        {
          title: "Proceso de Remuneraciones",
          content: `
            • Cálculo Automático de Sueldos
            • Horas Extras y Bonos
            • Comisiones y Aguinaldos
            • Asignaciones Familiares
            • Descuentos Legales y Voluntarios
            • Préstamos y Anticipos
            • Gratificaciones`,
        },
        {
          title: "Previsión Social",
          content: `
            • Cálculo de Imposiciones
            • Declaración y Pago de AFP
            • Declaración y Pago de Isapre
            • Mutual de Seguridad
            • Seguro de Cesantía
            • Generación de Previred
            • Control de Cotizaciones`,
        },
        {
          title: "Procesos Legales",
          content: `
            • Finiquitos Electrónicos
            • Contratos de Trabajo
            • Certificados de Antigüedad
            • Cartas de Amonestación
            • Declaraciones Juradas
            • Formularios F30 y F30-1
            • Certificados de Renta`,
        },
        {
          title: "Reportes y Documentos",
          content: `
            • Libro de Remuneraciones
            • Liquidaciones de Sueldo
            • Centralización Contable
            • Informes de Dotación
            • Provisiones de Vacaciones
            • Análisis de Costos
            • Reportes Personalizados`,
        },
        {
          title: "Control y Estadísticas",
          content: `
            • Indicadores de RRHH
            • Análisis de Rotación
            • Control de Ausentismo
            • Estadísticas de Personal
            • Costos por Centro
            • Evaluación de Desempeño
            • Control Presupuestario`,
        },
        {
          title: "Integraciones",
          content: `
            • Software Contable
            • Reloj Control
            • Portal del Empleado
            • Previred
            • APIs disponibles
            • Firma Electrónica`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Remuneraciones está diseñado para simplificar la gestión de recursos humanos y el pago de remuneraciones, cumpliendo con toda la normativa laboral vigente.

          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "punto_de_venta",
    name: "Software Punto de Venta",
    subtitle: "Control total de ventas e inventario en tiempo real",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Punto de Venta 100% Web y optimiza la gestión de tu negocio, desde cualquier lugar y dispositivo, manteniendo el control total de tus ventas, inventario y caja en tiempo real.",
      sections: [
        {
          title: "Ventas y Facturación",
          content: `
            • Emisión de Boletas Electrónicas
            • Emisión de Facturas Electrónicas
            • Notas de Crédito/Débito
            • Control de Descuentos
            • Múltiples Formas de Pago
            • División de Cuentas
            • Venta Suspendida`,
        },
        {
          title: "Control de Caja",
          content: `
            • Apertura y Cierre de Caja
            • Arqueo de Caja por Turno
            • Control de Ingresos/Egresos
            • Cuadre de Caja
            • Gestión de Vueltos
            • Control de Billetes y Monedas
            • Múltiples Cajas Simultáneas`,
        },
        {
          title: "Gestión de Inventario",
          content: `
            • Control de Stock en Tiempo Real
            • Alertas de Stock Mínimo
            • Inventario Multi-Sucursal
            • Control de Mermas
            • Ajustes de Inventario
            • Códigos de Barra
            • Gestión de Series/Lotes`,
        },
        {
          title: "Gestión de Clientes",
          content: `
            • Base de Datos de Clientes
            • Historial de Compras
            • Sistema de Puntos
            • Tarjetas de Regalo
            • Crédito a Clientes
            • Categorización de Clientes
            • Gestión de Cobranza`,
        },
        {
          title: "Delivery y Ventas Online",
          content: `
            • Control de Delivery
            • Asignación de Repartidores
            • Estado de Pedidos
            • Zonas de Reparto
            • Integración E-commerce
            • Control de Tiempos
            • Historial de Entregas`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Ventas por Período
            • Ventas por Producto
            • Ranking de Productos
            • Análisis de Rentabilidad
            • Reportes de Inventario
            • Estadísticas de Vendedores
            • Reportes Personalizados`,
        },
        {
          title: "Integraciones",
          content: `
            • Balanzas Electrónicas
            • Lectores de Código de Barra
            • Impresoras Térmicas
            • Terminal de Pago (Transbank)
            • Aplicaciones de Delivery
            • APIs disponibles`,
        },
        {
          title: "Control de Accesos",
          content: `
            • Usuarios Ilimitados
            • Perfiles por Rol
            • Control de Turnos
            • Registro de Operaciones
            • Respaldos Automáticos
            • Monitoreo en Tiempo Real`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Punto de Venta está diseñado para optimizar la gestión completa de tu negocio, facilitando el control de ventas, inventario y operaciones diarias de manera eficiente y segura.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "gestion_de_ventas",
    name: "Software Gestión de Ventas",
    subtitle: "Potencia tu equipo comercial y aumenta tus ventas",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Gestión de Ventas 100% Web y optimiza todo tu proceso comercial, desde cualquier lugar y dispositivo, manteniendo el control total de tus vendedores, oportunidades y resultados.",
      sections: [
        {
          title: "Pipeline Comercial",
          content: `
            • Gestión de Oportunidades
            • Seguimiento de Cotizaciones
            • Etapas de Venta Personalizables
            • Probabilidad de Cierre
            • Control de Actividades
            • Calendario Comercial
            • Historial de Negociaciones`,
        },
        {
          title: "Gestión de Vendedores",
          content: `
            • Control de Metas
            • Comisiones por Vendedor
            • Zonas Geográficas
            • Cartera de Clientes
            • Reportes de Productividad
            • Control de Visitas
            • Gastos de Representación`,
        },
        {
          title: "Gestión de Clientes",
          content: `
            • Base de Datos Centralizada
            • Clasificación de Clientes
            • Historial de Interacciones
            • Seguimiento Post-Venta
            • Gestión de Reclamos
            • Encuestas de Satisfacción
            • Recordatorios Automáticos`,
        },
        {
          title: "Cotizaciones y Propuestas",
          content: `
            • Generación de Cotizaciones
            • Plantillas Personalizables
            • Aprobaciones Electrónicas
            • Envío Automático por Email
            • Control de Versiones
            • Seguimiento de Estados
            • Conversión a Pedidos`,
        },
        {
          title: "Análisis y Reportes",
          content: `
            • Dashboard Comercial
            • Embudo de Ventas
            • Pronóstico de Ventas
            • Análisis de Conversión
            • Reportes por Vendedor
            • Comparativas Periódicas
            • Exportación de Datos`,
        },
        {
          title: "Herramientas Móviles",
          content: `
            • App para Vendedores
            • Registro de Visitas
            • Geolocalización
            • Catálogo Digital
            • Pedidos en Terreno
            • Firma Digital
            • Reportes en Tiempo Real`,
        },
        {
          title: "Integraciones",
          content: `
            • ERP/Contabilidad
            • Facturación Electrónica
            • CRM
            • Marketing Digital
            • WhatsApp Business
            • APIs disponibles
            • Control de Accesos`,
        },
        {
          title: "Configuración y Seguridad",
          content: `
            • Múltiples Empresas
            • Roles y Permisos
            • Auditoría de Acciones
            • Respaldos Automáticos
            • Notificaciones Configurables
            • Personalización de Campos
            • Importación/Exportación de Datos`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Gestión de Ventas está diseñado para potenciar tu equipo comercial y aumentar las ventas, proporcionando todas las herramientas necesarias para un seguimiento efectivo y toma de decisiones informada.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "restaurantes",
    name: "Software Restaurantes",
    subtitle: "Administración integral para negocios gastronómicos",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software para Restaurantes 100% Web y optimiza la gestión completa de tu negocio gastronómico, desde cualquier lugar y dispositivo, manteniendo el control total de pedidos, cocina, inventario y ventas en tiempo real.",
      sections: [
        {
          title: "Gestión de Mesas",
          content: `
            • Plano Digital del Restaurant
            • Control de Estados de Mesa
            • Reservas Online
            • Timer por Mesa
            • Rotación de Mesas
            • Unión/División de Mesas
            • Control de Áreas y Sectores`,
        },
        {
          title: "Comandas y Pedidos",
          content: `
            • Toma de Pedidos Móvil
            • Envío a Cocina Digital
            • Modificadores de Productos
            • Notas Especiales
            • Órdenes Pendientes
            • Tiempos de Preparación
            • Priorización de Pedidos`,
        },
        {
          title: "Control de Cocina",
          content: `
            • Monitor de Cocina
            • Estados de Preparación
            • Tiempo de Elaboración
            • Alertas de Demora
            • Recetas Estándar
            • Control de Porciones
            • Gestión de Mermas`,
        },
        {
          title: "Delivery y Take Away",
          content: `
            • Gestión de Delivery
            • Zonas de Reparto
            • Control de Repartidores
            • Tiempo de Entrega
            • Pedidos Online
            • Estado de Pedidos
            • Integración con Apps de Delivery`,
        },
        {
          title: "Inventario y Costos",
          content: `
            • Control de Stock
            • Recetas y Sub-recetas
            • Costos por Plato
            • Control de Mermas
            • Requisiciones a Bodega
            • Órdenes de Compra
            • Alertas de Stock Bajo`,
        },
        {
          title: "Facturación y Pagos",
          content: `
            • Boletas Electrónicas
            • Facturas Electrónicas
            • División de Cuentas
            • Propinas
            • Múltiples Formas de Pago
            • Cierre de Caja
            • Control de Turnos`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Ventas por Período
            • Productos más Vendidos
            • Análisis de Costos
            • Rentabilidad por Plato
            • Estadísticas de Servicio
            • Control de Propinas
            • Reportes Personalizados`,
        },
        {
          title: "Fidelización",
          content: `
            • Base de Datos de Clientes
            • Historial de Consumo
            • Programas de Puntos
            • Tarjetas de Regalo
            • Marketing por Email
            • Encuestas de Satisfacción
            • Gestión de Reservas`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software para Restaurantes está diseñado para optimizar todas las áreas de tu negocio gastronómico, mejorando la eficiencia operativa y la experiencia del cliente.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "arriendo_de_maquinarias",
    name: "Software Arriendo de Máquinas",
    subtitle: "Gestión eficiente de flotas y equipos en arriendo",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Arriendo de Maquinaria 100% Web y optimiza la gestión completa de tu flota de equipos en arriendo, desde cualquier lugar y dispositivo, manteniendo el control total de disponibilidad, mantenciones y facturación.",
      sections: [
        {
          title: "Control de Equipos",
          content: `
            • Ficha Técnica de Máquinas
            • Registro de Documentación
            • Control de Seguros
            • Historial de Mantenciones
            • Seguimiento GPS
            • Control de Combustible
            • Estado Operativo en Tiempo Real`,
        },
        {
          title: "Gestión de Arriendos",
          content: `
            • Contratos de Arriendo
            • Calendario de Disponibilidad
            • Reservas de Equipos
            • Tarifas por Período
            • Control de Entregas/Retiros
            • Documentación Digital
            • Condiciones de Arriendo`,
        },
        {
          title: "Mantenciones",
          content: `
            • Plan de Mantención Preventiva
            • Registro de Mantenciones
            • Alertas Automáticas
            • Control de Repuestos
            • Órdenes de Trabajo
            • Historial por Equipo
            • Costos de Mantención`,
        },
        {
          title: "Facturación y Cobros",
          content: `
            • Facturación Electrónica
            • Facturación Recurrente
            • Control de Pagos
            • Estados de Cuenta
            • Garantías y Depósitos
            • Multas y Cargos Adicionales
            • Cobranza Automatizada`,
        },
        {
          title: "Control Operativo",
          content: `
            • Asignación de Operadores
            • Control de Combustible
            • Horómetros
            • Reportes de Operación
            • Check List de Entrega
            • Informes de Daños
            • Control de Gastos`,
        },
        {
          title: "Gestión de Clientes",
          content: `
            • Base de Datos de Clientes
            • Historial de Arriendos
            • Evaluación de Clientes
            • Contratos Marco
            • Límites de Crédito
            • Documentos Requeridos
            • Seguimiento Comercial`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Utilización de Equipos
            • Rentabilidad por Máquina
            • Análisis de Costos
            • Proyección de Ingresos
            • Control de Rendimiento
            • Estadísticas de Uso
            • Reportes Personalizados`,
        },
        {
          title: "Integraciones",
          content: `
            • Contabilidad
            • GPS/Telemetría
            • Taller Mecánico
            • Gestión de Flota
            • Control de Combustible
            • APIs disponibles
            • Software ERP`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Arriendo de Maquinaria está diseñado para optimizar todas las áreas de tu negocio de arriendo de equipos, mejorando la eficiencia operativa y maximizando la rentabilidad de tu flota.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "presupuestos_de_obras",
    name: "Software Presupuestos de Obras",
    subtitle: "Control preciso de proyectos y costos de construcción",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Presupuestos de Obras 100% Web y optimiza la gestión completa de tus proyectos de construcción, desde cualquier lugar y dispositivo, manteniendo el control total de presupuestos, avances y costos en tiempo real.",
      sections: [
        {
          title: "Presupuestos",
          content: `
            • Análisis de Precios Unitarios
            • Base de Datos de Partidas
            • Plantillas Predefinidas
            • Itemizado de Obras
            • Costos Directos e Indirectos
            • Gastos Generales
            • Fórmulas Polinómicas`,
        },
        {
          title: "Control de Materiales",
          content: `
            • Cubicaciones Automáticas
            • Lista de Materiales
            • Control de Precios
            • Comparativa de Proveedores
            • Órdenes de Compra
            • Control de Bodega
            • Rendimientos por Material`,
        },
        {
          title: "Mano de Obra",
          content: `
            • Cuadrillas de Trabajo
            • Rendimientos por Actividad
            • Control de HH
            • Costos de Personal
            • Subcontratos
            • Especialidades
            • Análisis de Productividad`,
        },
        {
          title: "Gestión de Proyectos",
          content: `
            • Carta Gantt
            • Control de Avance
            • Ruta Crítica
            • Hitos del Proyecto
            • Estados de Pago
            • Control de Cambios
            • Documentación Técnica`,
        },
        {
          title: "Control de Costos",
          content: `
            • Presupuesto Base
            • Control Presupuestario
            • Análisis de Desviaciones
            • Proyección de Gastos
            • Control de Contratos
            • Retenciones
            • Garantías`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Informe de Costos
            • Avance Físico vs Financiero
            • Análisis de Rentabilidad
            • Curva S
            • Valor Ganado
            • Indicadores de Gestión
            • Reportes Ejecutivos`,
        },
        {
          title: "Documentación",
          content: `
            • Especificaciones Técnicas
            • Planos Digitales
            • Control de Versiones
            • RDI (Solicitud de Información)
            • No Conformidades
            • Libro de Obras Digital
            • Registro Fotográfico`,
        },
        {
          title: "Integraciones",
          content: `
            • Software Contable 
            • Gestión Documental
            • Control de Bodega
            • Compras y Abastecimiento
            • APIs disponibles
            • Exportación a Excel
            • Software ERP`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Presupuestos de Obras está diseñado para optimizar el control y seguimiento de tus proyectos de construcción, mejorando la precisión en presupuestos y el control de costos.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "maestranzas",
    name: "Software Maestranzas",
    subtitle: "Optimización de procesos de fabricación y mecanizado",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestro Software de Maestranzas 100% Web y optimiza todos tus procesos de fabricación y mecanizado, desde cualquier lugar y dispositivo, manteniendo el control total de tu producción, costos y calidad.",
      sections: [
        {
          title: "Órdenes de Trabajo",
          content: `
            • Registro de Solicitudes
            • Planificación de Trabajos
            • Control de Estados
            • Priorización de Órdenes
            • Asignación de Recursos
            • Seguimiento en Tiempo Real
            • Historial de Trabajos`,
        },
        {
          title: "Control de Producción",
          content: `
            • Programación de Máquinas
            • Control de Operaciones
            • Tiempos de Producción
            • Control de Calidad
            • Registro de Paradas
            • Eficiencia Operacional
            • Trazabilidad Completa`,
        },
        {
          title: "Gestión de Materiales",
          content: `
            • Control de Inventario
            • Requerimientos de Material
            • Órdenes de Compra
            • Control de Mermas
            • Stock Mínimo
            • Trazabilidad de Lotes
            • Valorización de Stock`,
        },
        {
          title: "Control de Máquinas",
          content: `
            • Ficha Técnica de Equipos
            • Mantención Preventiva
            • Registro de Fallas
            • Control de Repuestos
            • Historial de Servicios
            • Disponibilidad de Máquinas
            • Planes de Mantención`,
        },
        {
          title: "Costos y Presupuestos",
          content: `
            • Cotizaciones
            • Costeo por Orden
            • Análisis de Rentabilidad
            • Control de Gastos
            • Precios por Cliente
            • Margen por Trabajo
            • Control Presupuestario`,
        },
        {
          title: "Gestión de Clientes",
          content: `
            • Base de Datos de Clientes
            • Historial de Trabajos
            • Planos y Especificaciones
            • Aprobaciones de Calidad
            • Seguimiento de Entregas
            • Satisfacción del Cliente
            • Facturación Electrónica`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Producción por Período
            • Eficiencia de Máquinas
            • Análisis de Costos
            • Control de Calidad
            • Productividad Laboral
            • Rentabilidad por Trabajo
            • Reportes Personalizados`,
        },
        {
          title: "Control Operativo",
          content: `
            • Asignación de Personal
            • Control de Turnos
            • Registro de HH
            • Bonos de Producción
            • Control de Asistencia
            • Capacitaciones
            • Seguridad Industrial`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestro Software de Maestranzas está diseñado para optimizar todos los procesos de fabricación y mecanizado, mejorando la eficiencia productiva y la calidad del servicio.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    subtitle: "Plataforma de ventas online integrada con tu negocio",
    heroImage: "/foto_fondo.jpg",
    description: {
      intro:
        "Por un valor mensual o anual, accede a nuestra plataforma E-commerce 100% Web y optimiza tus ventas online, desde cualquier lugar y dispositivo, manteniendo el control total de tu tienda virtual, productos y pedidos en tiempo real.",
      sections: [
        {
          title: "Gestión de Productos",
          content: `
            • Catálogo Digital
            • Categorías y Subcategorías
            • Variantes de Productos
            • Control de Stock
            • Precios por Segmento
            • Productos Destacados
            • Ofertas y Descuentos`,
        },
        {
          title: "Experiencia de Compra",
          content: `
            • Carrito de Compras
            • Proceso de Checkout
            • Multi-dispositivo
            • Búsqueda Avanzada
            • Filtros Dinámicos
            • Lista de Deseos
            • Comparador de Productos`,
        },
        {
          title: "Medios de Pago",
          content: `
            • WebPay Plus
            • Transferencia Bancaria
            • Tarjetas de Crédito
            • Tarjetas de Débito
            • PayPal
            • Pagos en Cuotas
            • OneClick Payment`,
        },
        {
          title: "Gestión de Envíos",
          content: `
            • Múltiples Transportistas
            • Cálculo de Costos
            • Seguimiento de Pedidos
            • Zonas de Despacho
            • Retiro en Tienda
            • Estados de Envío
            • Etiquetas de Despacho`,
        },
        {
          title: "Marketing Digital",
          content: `
            • Ofertas Especiales
            • Cupones de Descuento
            • Email Marketing
            • Cross-selling
            • Up-selling
            • Programa de Puntos
            • Newsletter`,
        },
        {
          title: "Gestión de Clientes",
          content: `
            • Registro de Usuarios
            • Perfiles de Cliente
            • Historial de Compras
            • Seguimiento Post-venta
            • Atención al Cliente
            • Chat en Vivo
            • Centro de Ayuda`,
        },
        {
          title: "Integraciones",
          content: `
            • ERP
            • Control de Stock
            • Facturación Electrónica
            • Redes Sociales
            • Google Analytics
            • Pixel de Facebook
            • APIs disponibles`,
        },
        {
          title: "Reportes y Análisis",
          content: `
            • Ventas por Período
            • Productos más Vendidos
            • Comportamiento Usuario
            • Tasa de Conversión
            • Abandonos de Carrito
            • ROI Marketing
            • Reportes Personalizados`,
        },
        {
          title: "Seguridad y SEO",
          content: `
            • Certificado SSL
            • Copias de Seguridad
            • Optimización SEO
            • URLs Amigables
            • Meta Tags
            • Sitemap XML
            • Schema.org`,
        },
        {
          title: "Conclusión",
          content: `Como puedes ver, nuestra plataforma E-commerce está diseñada para potenciar tus ventas online, ofreciendo una experiencia de compra excepcional y todas las herramientas necesarias para gestionar tu tienda virtual.
 
          Para conocer más detalles o solicitar una demostración, contáctanos a través de nuestra página de CONTACTO o llámanos a nuestros teléfonos de Ventas.`,
        },
      ],
    },
  },
];
