import { test, expect } from "@playwright/test";
import { business } from "../lib/business";

// Happy path: recorrido completo de un visitante real que llega buscando
// arreglar su equipo, explora la web y termina con los datos de contacto.
test.describe("Happy path", () => {
  test("un visitante navega de la home al contacto usando el menú y las CTAs", async ({ page }) => {
    await page.goto("/");

    // 1. Llega al hero, ve la propuesta de valor y el CTA principal.
    await expect(page.locator("h1")).toContainText(business.nombre);
    const ctaPrincipal = page.getByRole("link", { name: "Reservar diagnóstico" });
    await expect(ctaPrincipal).toBeVisible();

    // 2. Usa el nav para revisar servicios antes de decidirse.
    await page.getByRole("navigation", { name: "Navegación principal" }).getByRole("link", { name: "Servicios" }).click();
    await expect(page).toHaveURL(/#servicios$/);
    await expect(page.getByRole("heading", { name: "Servicios", exact: true })).toBeInViewport();

    // 3. Cada servicio tiene título y descripción, no placeholders vacíos.
    const tarjetasServicio = page.locator("#servicios li");
    await expect(tarjetasServicio).toHaveCount(4);
    for (const tarjeta of await tarjetasServicio.all()) {
      await expect(tarjeta.locator("h3")).not.toBeEmpty();
      await expect(tarjeta.locator("p")).not.toBeEmpty();
    }

    // 4. Revisa opiniones de otros clientes para confiar en el negocio.
    await page.getByRole("navigation", { name: "Navegación principal" }).getByRole("link", { name: "Opiniones" }).click();
    await expect(page).toHaveURL(/#testimonios$/);
    await expect(page.locator("#testimonios figure")).toHaveCount(3);

    // 5. Se decide, pulsa el CTA principal y llega a ubicación/horario.
    await ctaPrincipal.click();
    await expect(page).toHaveURL(/#contacto$/);
    const seccionContacto = page.locator("#contacto");
    await expect(seccionContacto.locator("iframe")).toBeVisible();
    await expect(seccionContacto.getByRole("link", { name: business.telefono })).toHaveAttribute(
      "href",
      `tel:${business.telefonoHref}`
    );

    // 6. Como último recurso, la banda CTA final y el footer repiten el teléfono (NAP consistente).
    await expect(page.getByRole("link", { name: `Llamar ahora · ${business.telefono}` })).toHaveAttribute(
      "href",
      `tel:${business.telefonoHref}`
    );
    await expect(page.locator("footer address")).toContainText(business.direccion.calle);
  });
});
