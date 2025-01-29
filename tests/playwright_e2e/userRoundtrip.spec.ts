import { test, expect } from "@playwright/test";
import { waitFor } from "@testing-library/react";

test.describe("User Roundtrip", () => {
  test("Home -> ModuleDetail", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page
      .locator("div")
      .filter({ hasText: /^Lineare Algebra$/ })
      .getByRole("img")
      .click();
    await expect(page.url()).toBe(
      "http://localhost:3000/moduleDetail/Lineare%20Algebra"
    );
  });

  test("ModuleDetail: Click Buttons", async ({ page }) => {
    await page.goto("http://localhost:3000/moduleDetail/Lineare%20Algebra");
    await page.getByRole("button", { name: "4" }).click();
    await page.getByRole("button", { name: "weiter" }).click();
    await page.getByRole("button", { name: "zurück" }).click();
    await page.getByRole("button", { name: "zurück" }).click();
    await page.locator(".ModuleDetail_Module_chatbotButton__E_0fV").click();
  });

  test("ModuleDetail: Chatbot", async ({ page }) => {
    await page.goto("http://localhost:3000/moduleDetail/Lineare%20Algebra");
    await page.locator(".ModuleDetail_Module_chatbotButton__E_0fV").click();
    await page.getByPlaceholder("Schreibe deine Nachricht...").click();
    await page.getByPlaceholder("Schreibe deine Nachricht...").fill("hilf mir");
    await page.getByPlaceholder("Schreibe deine Nachricht...").press("Enter");
    await expect(page.locator("#chat")).toContainText("hilf mir");
    await page.locator("#chat").getByRole("button").first().click(); // delete messages
    await expect(page.locator("#chat")).not.toContainText("hilf mir");
    await page.locator("#chat").getByRole("button").nth(1).click(); // close chat
  });

  test("ModuleDetail: Go to Different Module", async ({ page }) => {
    await page.goto("http://localhost:3000/moduleDetail/Lineare%20Algebra");
    await page
      .locator("div")
      .filter({ hasText: /^Analysis$/ })
      .click();
    await expect(page.url()).toBe(
      "http://localhost:3000/moduleDetail/Analysis"
    );
    await expect(page.locator("h1")).toContainText("Analysis");
  });

  test("ModuleDetail: Go to Graphiverse", async ({ page }) => {
    await page.goto("http://localhost:3000/moduleDetail/Analysis");
    await page.getByRole("link", { name: "Graphiverse" }).first().click();
    await page.waitForTimeout(1500);
    await expect(page.url()).toBe("http://localhost:3000/graphiverse");
    await expect(page.locator("h1").first()).toContainText(
      "Das Learniverse Graphtool"
    );
  });

  test("Graphiverse: Make a Graph", async ({ page }) => {
    await page.goto("http://localhost:3000/graphiverse");
    await page.getByPlaceholder("Geben Sie hier Ihre Funktion").click();
    await page.getByPlaceholder("Geben Sie hier Ihre Funktion").fill("x*x*");
    await expect(page.locator('[id="__next"]')).toContainText(
      "Ungültige Funktion"
    );
    await page.getByPlaceholder("Geben Sie hier Ihre Funktion").dblclick();
    await page.getByPlaceholder("Geben Sie hier Ihre Funktion").fill("x*x*x");
    await expect(page.locator('[id="__next"]')).not.toContainText(
      "Ungültige Funktion"
    );
    await page.getByRole("banner").getByRole("link").first().click();
  });

  test("Graphiverse: Go to Home Page", async ({ page }) => {
    await page.goto("http://localhost:3000/graphiverse");
    await page.getByRole("banner").getByRole("link").first().click();
    await page.waitForTimeout(1500);
    await expect(page.url()).toBe("http://localhost:3000/");
    await expect(page.locator("h1").first()).toContainText(
      "Learniverse bietet dir alles, was du für dein Informatikstudium brauchst!"
    );
  });
});
