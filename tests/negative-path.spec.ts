import { test, expect } from "@playwright/test";

// Negative path: rutas y estados que NO deberían existir o deberían fallar
// de forma controlada, sin tirar la app ni filtrar errores al usuario.
test.describe("Negative path", () => {
  test("una ruta inexistente devuelve 404 con página de error, no un crash", async ({ page }) => {
    const res = await page.goto("/esta-pagina-no-existe");
    expect(res?.status()).toBe(404);
    await expect(page.getByText(/could not be found|no se ha encontrado/i)).toBeVisible();
  });

  test("un ancla inexistente en la URL no rompe la carga de la home", async ({ page }) => {
    const errores: string[] = [];
    page.on("pageerror", (err) => errores.push(err.message));

    const res = await page.goto("/#seccion-que-no-existe");
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(errores).toEqual([]);
  });

  test("assets estáticos con nombre incorrecto devuelven 404, no 200 silencioso", async ({ request }) => {
    const res = await request.get("/images/no-existe.svg");
    expect(res.status()).toBe(404);
  });

  test("enlaces externos usan target=_blank con rel=noopener (no exponen window.opener)", async ({ page }) => {
    await page.goto("/");
    const externos = page.locator('a[target="_blank"]');
    const count = await externos.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await externos.nth(i).getAttribute("rel");
      expect(rel || "").toMatch(/noopener/);
    }
  });

  test("formulario de contacto no existe todavía: no hay <form> a medio hacer en producción", async ({ page }) => {
    await page.goto("/");
    // Este proyecto es de página única sin formulario (contacto es tel/mailto/mapa).
    // Si alguien añade un <form> a medias sin manejarlo, que este test lo note.
    await expect(page.locator("form")).toHaveCount(0);
  });
});
