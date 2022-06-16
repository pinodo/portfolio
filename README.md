<div align="center">
    <h1 align="center">Alvin's Portfolio</h1>
    <p align="center">
        <a href="https://pinodo.github.io/portfolio">View Demo</a>
        ·
        <a href="https://github.com/pinodo/portfolio">View Repository</a>
    </p>
</div>

<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a ref="#about-the-project">About The Project</a></li>
        <li><a ref="#deploy">How To Deploy</a></li>
    </ol>
</details>

## About The Project

`github_username`: pinodo<br/>
`e-mail`: palifarec@gmail.com<br />
`project_desc`: This is Alvin's portfolio and I am currently looking for a junior developer job.

### Built With

- [React.js](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)

## How To Deploy a Website w/Github

1. Create a new repository
2. Install a Github page package<br />
   ```sh
   npm install --save gh-pages
   ```
3. Add some codes to package.json file<br />
   "homepage": "https://yourname.github.io/reponame",<br />
   "predeploy": "npm run build" and "deploy": "gh-pages -d build" under "scripts"
4. Enter the prompt
   ```sh
   npm run build
   ```
5. master branch is used to modify<br />
   There's no need to handle gh-pages branch
6. Go to Settings -> Pages -> select the branch as "gh-pages"
