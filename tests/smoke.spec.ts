import { test, expect } from "@playwright/test";

// Smoke: ¿arranca la página sin romperse? Rápido, sin profundizar en contenido.
test.describe("Smoke", () => {
  test("home responde 200 y monta los landmarks principales sin errores de consola", async ({ page }) => {
    const errores: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errores.push(msg.text());
    });
    page.on("pageerror", (err) => errores.push(err.message));

    const res = await page.goto("/");
    expect(res?.status()).toBe(200);

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.locator("h1")).toBeVisible();

    expect(errores, `errores de consola: ${JSON.stringify(errores)}`).toEqual([]);
  });

  test("rutas nativas del App Router responden", async ({ request }) => {
    for (const ruta of ["/sitemap.xml", "/robots.txt", "/opengraph-image", "/icon"]) {
      const res = await request.get(ruta);
      expect(res.ok(), `${ruta} devolvió ${res.status()}`).toBe(true);
    }
  });
});
