LOGOS REALES — fila "Se integra con" del hero
=============================================

YA INSTALADOS (SVG monocromo blanco, vía Simple Icons). Estos 8 se muestran hoy:

  sap.svg · odoo.svg · hubspot.svg · zoho.svg · quickbooks.svg ·
  googlesheets.svg · stripe.svg · mercadopago.svg

EXTRAS descargados por si quieres intercambiar alguno (cambia el slug en
components/Hero.tsx -> INTEGRATIONS):

  mysql.svg · postgresql.svg · notion.svg · googledrive.svg · shopify.svg ·
  sage.svg · xero.svg

NO disponibles en Simple Icons (removidos por las marcas): Oracle, Salesforce,
Microsoft Excel, Power BI, Microsoft, Tableau, NetSuite, Dynamics 365, CONTPAQi.
Si quieres alguno de esos, consíguelo aparte (SVG en blanco) y lo coloco con el
nombre del slug correspondiente.

CÓMO FUNCIONA: components/LogoSlot.tsx carga /logos/{slug}.svg; si el archivo
no existe, cae al texto del label. Render a 24px de alto, opacidad 75%.
