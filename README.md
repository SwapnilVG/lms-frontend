# LMS Frontend

### Setup instruction

1. Clone the Project

```
   git clone https://github.com/SwapnilVG/lms-frontend.git
```

2. Move into the directory

```
    cd lms-frontend
```

3. install dependencies

```
    npm install
```

4. run the server

```
   npm run dev 
```

  ### Setup instruction for tailwind
  [Tailwind Official instruction doc](https://tailwindcss.com/docs/installation)

  1. Install tailwindcss
  ```
    npm install -D tailwindcss postcss autoprefixer
  ```

  2. Create tailwind config file
  ```
    npx tailwindcss init
  ```

  3. Add file extensions to tailwind config file in the contents property
  ```
    "./src/**/*.{html,js,jsx,ts,tsx}","./index.html"
  ```

  4. Add the tailwind directives at the top of the `index.css` file
  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
  
  5. Add the Following details in the plugin property of tailwind confing
  ```
    [require('daisyui'),require('@tailwindcss/line-clamp')]
  ```

  ### Adding plugins and dependencies
  ```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
  ```


  ### Configure auto import sort eslint
  1. Install simple import sore
    ```
    npm i -D eslint-plugins-simple-import-sort
    ```

  2. Add rule in `.eslint.cjs`
    ```
    'simple-import-sort/imports':'error'
    ``` 

  3. Add simple-import sort plugin in  `.eslint.cjs`
    ```
    plugins: [...,'simple-import-sort'],
    ```

  4. To enable auto import sort on file save in vscode
      - Open `settings.json`
      - add the following config
    ```
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint":true     
    }
    ```  