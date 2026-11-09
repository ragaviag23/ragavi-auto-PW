import{test, expect} from '@playwright/test';

test("Verify the title",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

let titlepage:string =await page.title();
console.log("Title",titlepage);

await expect(page).toHaveTitle("Automation Testing Practice");

})