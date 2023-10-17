# Frontend

### Setup instructions

1. Move into the directory

```
    cd front-end
```

2. Install dependencies

```
    npm i
```

3. Run the server
```
    npm run dev
```


### How to setup taildinw in your project [Link](https://tailwindcss.com/docs/guides/vite)

1. Create the `tailwind.config.js` file
```
    npx tailwindcss init -p
```

2. Add the files and extensions to tailwind config in the content property
```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

3. Add the tailwind directives on the top of index.css file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

4. Then run the server, tailwind should be integrated....


### Adding plugins and dependencies

```
    npm install react-router-dom react-icons @tailwindcss/line-clamp
```
