import { test, expect } from "@playwright/test";

test.describe("Load Index", () => {
  test("Header Links", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Module" }).first().click();
    await expect(page.locator("#modules")).toContainText(
      "Alle Module, die du für dein Studium brauchst. Hier findest du alle Inhalte, Kapitel, Lernvideos und sonstige Inhalte, die dich durch deine Prüfung bringen. Siehe direkt, welche Module du vorher abgeschlossen haben solltest, damit es dir hier leichter fällt!"
    );

    await page.getByRole("link", { name: "Kontakt" }).first().click();
    await expect(page.locator("#contact")).toContainText(
      "Du brauchst persönliche Hilfe?"
    );

    await page.getByRole("link", { name: "Über Learniverse" }).first().click();
    await expect(page.locator('[id="__next"]')).toContainText(
      "Learniverse bietet dir alles, was du für dein Informatikstudium brauchst!"
    );

    await page.getByRole("link", { name: "Graphiverse" }).first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator("h1").first()).toContainText("Das Learniverse Graphtool");

    await page.locator(".Logo_logoButton__3bS5n").click();
    await expect(page.locator('[id="__next"]')).toContainText(
      "Learniverse bietet dir alles, was du für dein Informatikstudium brauchst!"
    );
  });
});
