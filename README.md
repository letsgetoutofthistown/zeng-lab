## Installing Node.js

1. Build the project

For Mac and Linux:

```bash
# install nvs
export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install

# install Node.js ver>16.18.0
nvs add 16.18.0
nvs use 16.18.0
npm run build
```

## Installing configuration

```bash
# cd to proj root
npm install
```

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to upload the content to the server

1. Build the project

```bash
npm run build
```

2. Connect to Tohoku Univ. VPN

3. Input the following command on Terminal

```bash
sftp -P 22 se_is_admin@www.se.is.tohoku.ac.jp
```

4. Send the password the manager told you

5. Upload the outputed **html** folder

```bash
put -r html
```

6. Close the connection

```bash
quit
```
