import {test,expect,Locator} from '@playwright/test';

test("verify playwright Locators",async({page})=>{

await page.goto("https://www.playwrightautomation.com/practice.html");
await expect(page.getByRole('link', { name: 'Practice Playground' })).toBeVisible();
//await expect(page.getByText("Practice Playground")).toBeVisible();
await expect(page.getByRole('heading', { name: 'Form Controls' })).toBeVisible();
await page.locator('[name="name"]').fill("Ragavi");
await page.getByPlaceholder("Enter your email").fill("johndoe@example.com");
await page.getByPlaceholder("Enter your address").fill("108, Village High Road");
  
  
  await page.getByTestId("btn-submit-text-inputs").click();
  await page.getByTestId("btn-reset-text-inputs").click();
  await page.getByRole("radio",{name:'Female'}).check();
  await page.getByTestId("checkbox-select-all").check();
  
  
});