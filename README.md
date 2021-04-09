# Trimmer
![Vercel](https://vercelbadge.vercel.app/api/robzwolf/trimmer)

Trim images using the [sharp().trim](https://sharp.pixelplumbing.com/api-resize#trim) function.

Hosted at https://trim.robbie.dev

## API
```
https://trim.robbie.dev/api/trim
```

Send a `POST` request of `form-data` with key `image` and value the binary contents of the file you want to trim.

### curl
```bash
curl --location --request POST 'https://trim.robbie.dev/api/trim' \
--form 'image=@"/path/to/image.png"'
```

## Quick Start

### Local Development
```bash
npm install

# If Vercel CLI is installed
vercel dev

# If Vercel CLI is not installed
npm run dev
```

### Production
```bash
npm install
npm run dev
```

## Credits
Loosely based on this tutorial.  
https://betterprogramming.pub/upload-files-to-next-js-with-api-routes-839ce9f28430
