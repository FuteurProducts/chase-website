# Deployment Configuration for SPA Routing

This project is a Single Page Application (SPA) using React Router. To fix 404 errors when refreshing pages, you need to configure your hosting platform to redirect all routes to `index.html`.

## Configuration Files Created

I've created configuration files for different hosting platforms:

### 1. **Vercel** (vercel.json)
If you're using Vercel, the `vercel.json` file is already configured. Just deploy and it will work.

### 2. **Netlify** (netlify.toml or public/_redirects)
If you're using Netlify, either file will work. The `public/_redirects` file is automatically copied to the build output.

### 3. **Apache** (public/.htaccess)
If you're using Apache (shared hosting, cPanel, etc.):
- The `.htaccess` file is in the `public` folder
- Make sure it gets copied to your root directory after build
- Ensure `mod_rewrite` is enabled on your server

### 4. **Nginx** (nginx.conf)
If you're using Nginx:
- Copy the configuration from `nginx.conf` to your server's nginx configuration
- Adjust the `root` path to match your deployment directory
- Reload nginx: `sudo nginx -s reload`

### 5. **Other Platforms**

**Cloudflare Pages:**
- Add a `_redirects` file in the `public` folder (already created)
- Or configure in Cloudflare dashboard: Redirects → Single Page App

**AWS S3 + CloudFront:**
- Configure error document in S3 bucket settings to point to `index.html`
- Set error code to `404` and redirect to `index.html` with `200` status

**GitHub Pages:**
- Create a `404.html` file that redirects to `index.html`
- Or use a custom domain with proper server configuration

## Testing

After deployment:
1. Navigate to any route (e.g., `/about`, `/demo`)
2. Refresh the page (F5 or Cmd+R)
3. The page should load correctly instead of showing a 404 error

## Build Command

```bash
npm run build
```

The built files will be in the `dist` folder. Make sure to deploy the entire `dist` folder contents to your hosting platform.

