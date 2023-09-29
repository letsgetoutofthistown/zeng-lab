## How to upload the content

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
sudo put -r html
```

6. Close the connection

```bash
quit
```
