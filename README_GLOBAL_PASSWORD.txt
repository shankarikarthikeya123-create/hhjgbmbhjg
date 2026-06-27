OM CHANUKYA TRADERS - GLOBAL PASSWORD VERSION

Default admin password: admin123

To change password globally:
1. Open js/admin.js
2. Find this line near the top:
   const GLOBAL_ADMIN_PASSWORD = "admin123";
3. Replace admin123 with your new password.
4. Upload/push the updated js/admin.js to GitHub.
5. Wait 1-2 minutes and refresh the deployed website with Ctrl + Shift + R.

Important:
- This works globally because everyone loads the same admin.js from GitHub Pages.
- This is basic frontend protection only. A technical person can still inspect frontend code.
- For real secure admin login, use Firebase/Supabase/backend later.
