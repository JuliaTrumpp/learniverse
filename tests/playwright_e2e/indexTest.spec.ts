import { test, expect } from "@playwright/test";

test.describe("Load Index", () => {
  test("Load Index Page", async ({ page }) => {
    await page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
      timeout: 5000,
    });
    await page.waitForLoadState("domcontentloaded");
    const pageTitle = await page.textContent("h1");
    expect(pageTitle).toContain(
      "Learniverse bietet dir alles, was du für dein Informatikstudium brauchst!"
    );
  });

  test("Click Graphiverse Button", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#graphiverse button");
    await page.click("#graphiverse button");
    expect(page.url()).toBe("http://localhost:3000/graphiverse");
  });

  test("Click First Module Card", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#modules");
    await page
      .locator("div")
      .filter({ hasText: /^Lineare Algebra$/ })
      .click();
  });
});
