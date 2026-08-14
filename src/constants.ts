/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ==========================================
// CONSTANTES EDITABLES (NP Academy GLP-1)
// Modifica estos valores para cambiar precios, links o endpoints
// ==========================================

/**
 * URL del Video de Ventas (VSL). Soporta YouTube o Vimeo.
 * Deja vacío "" para mostrar la carátula estilizada de inicio con botón Play.
 */
export const REEMPLAZAR_URL_VSL: string = ""; 

/**
 * Precio del programa en Dólares Estadounidenses (USD)
 */
export const REEMPLAZAR_PRECIO_USD: string = "197";

/**
 * Cupón de descuento especial de lanzamiento
 */
export const CUPON_DESCUENTO: string = "15GLP";

/**
 * Porcentaje de descuento del cupón
 */
export const CUPON_PORCENTAJE: string = "15%";

/**
 * Precio final aproximado aplicando el cupón del 15% ($197 USD - 15% = $167.45 USD)
 */
export const PRECIO_CON_DESCUENTO_USD: string = "167.45";

/**
 * Condición límite del cupón
 */
export const CUPON_LIMITE: string = "Primeras 5 personas";

/**
 * Enlace directo a la pasarela de pago (Encuadrado) para adquirir el protocolo.
 */
export const REEMPLAZAR_LINK_ENCUADRADO: string = "https://encuadrado.com/s/nutriologa-paulina-benitez/alimentacion-inteligente-para-glp-1?from=app";

/**
 * Enlace directo al grupo de apoyo de WhatsApp premium gratuito.
 */
export const REEMPLAZAR_LINK_WHATSAPP: string = "https://chat.whatsapp.com/HUwE4m6jOziDZNIRaurs4a?s=cl&p=i&ilr=4&amv=2";

/**
 * Endpoint para registrar leads capturados (antes de iniciar el quiz).
 * Reemplaza esto con el URL de la Web App de Google Apps Script generado para tu hoja de cálculo:
 * https://docs.google.com/spreadsheets/d/1LQKxGtJgu3lOAitlGsALUnYyIIyvLJRAsbOghnL_OAg/edit
 * 
 * El sistema realizará un POST con { nombre, correo, whatsapp, timestamp }.
 * Si falla, el error será ignorado en silencio para garantizar una experiencia óptima al usuario.
 */
export const REEMPLAZAR_ENDPOINT_LEADS: string = "https://script.google.com/macros/s/AKfycbwA8jzaPxwuw2iULORW5vdlZejpennsVntE8R9o8lMPEokHNp-mKbpa6vq4vIFQCJVt/exec";
