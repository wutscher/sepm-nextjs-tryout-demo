import { test, expect } from '@playwright/test'

test('should navigate to the notes page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Notes')
  await expect(page).toHaveURL('/notesDirect')
  await expect(page.locator('h1')).toContainText('Notes')
})