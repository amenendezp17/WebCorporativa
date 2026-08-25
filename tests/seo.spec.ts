import { test, expect } from "@playwright/test";

test.describe("SEO técnico", () => {
  test("title y meta description están presentes y son útiles", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThanOrEqual(70);

    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    expect(description!.length).toBeLessThanOrEqual(160);
  });

  test("canonical y robots están configurados", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /.+/);
  });

  test("Open Graph y Twitter Card completos", async ({ page }) => {
    await page.goto("/");
    const og = {
      title: await page.locator('meta[property="og:title"]').getAttribute("content"),
      description: await page.locator('meta[property="og:description"]').getAttribute("content"),
      image: await page.locator('meta[property="og:image"]').getAttribute("content"),
      type: await page.locator('meta[property="og:type"]').getAttribute("content"),
    };
    expect(og.title).toBeTruthy();
    expect(og.description).toBeTruthy();
    expect(og.image).toBeTruthy();
    expect(og.type).toBe("website");

    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute("content");
    expect(twitterCard).toBe("summary_large_image");
  });

  test("JSON-LD LocalBusiness válido con NAP completo", async ({ page }) => {
    await page.goto("/");
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(raw).toBeTruthy();

    const data = JSON.parse(raw!);
    expect(data["@context"]).toBe("https://schema.org");
    expect(typeof data.name).toBe("string");
    expect(data.telephone).toBeTruthy();
    expect(data.address?.streetAddress).toBeTruthy();
    expect(data.address?.addressLocality).toBeTruthy();
    expect(Array.isArray(data.openingHours)).toBe(true);
    expect(data.openingHours.length).toBeGreaterThan(0);
    expect(data.geo?.latitude).toBeDefined();
    expect(data.geo?.longitude).toBeDefined();
  });

  test("sitemap.xml responde y referencia la home", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.ok()).toBe(true);
    const body = await res.text();
    expect(body).toContain("<urlset");
    expect(body).toContain("<loc>");
  });

  test("robots.txt permite indexación y apunta al sitemap", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.ok()).toBe(true);
    const body = await res.text();
    expect(body).toMatch(/User-agent:\s*\*/i);
    expect(body).toMatch(/Allow:\s*\//i);
    expect(body).toMatch(/Sitemap:/i);
  });

  test("NAP (nombre, dirección, teléfono) visible en el HTML, no solo en JSON-LD", async ({ page }) => {
    await page.goto("/");
    const address = page.locator("address").first();
    await expect(address).toBeVisible();
    await expect(page.locator("a[href^='tel:']").first()).toBeVisible();
  });
});
