import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accesibilidad (WCAG 2.1 AA)", () => {
  test("home no tiene violaciones de axe-core", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
      .analyze();

    const resumen = results.violations.map((v) => ({
      regla: v.id,
      impacto: v.impact,
      ayuda: v.help,
      elementos: v.nodes.length,
      detalle: v.nodes.map((n) => ({
        objetivo: n.target.join(" "),
        mensaje: n.failureSummary,
      })),
    }));

    expect(resumen, JSON.stringify(resumen, null, 2)).toEqual([]);
  });

  test("navegación por teclado llega a todos los enlaces del nav", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Navegación principal" });
    await expect(nav).toBeVisible();

    const links = nav.getByRole("link");
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await links.nth(i).focus();
      await expect(links.nth(i)).toBeFocused();
    }
  });

  test("html declara idioma y jerarquía de encabezados es única en h1", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("todas las imágenes tienen alt descriptivo (no vacío)", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `imagen #${i} sin alt`).not.toBeNull();
      expect(alt!.trim().length, `imagen #${i} con alt vacío`).toBeGreaterThan(0);
    }
  });
});
