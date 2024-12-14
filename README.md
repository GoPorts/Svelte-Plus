![Svelte+](https://github.com/user-attachments/assets/7f66c2e0-a695-4c66-b3ae-236aeb090ea0)
# About
Pages: <br />
[How to use](https://github.com/GoPorts/Svelte-Plus/README.md#how-to-use) <br />
[Code](https://github.com/GoPorts/Svelte-Plus/README.md#cide) <br /> <br />
Svelte+ was coded in [StackBlitz](https://stackblitz.com) with its build in Svelte kit. <br />
Svelte plus will create Svelte code with simple and short terms. <br />
Svelte plus is a programming tool made to build a website easier with little to no effort. <br />
Svelte plus is not accosiated in any way with the official Svelte. <br />
Svelte plus is also in development <br />
Svelte plus has been tested and might give you double-code, where it gives you two of the exact same code.

# How to use
1, 2, 3, 4, 5, stands for h1, h2 and so on. <br />
!addcss, adds css. <br />
!addscript, adds javascript to the Svelte code. <br />
bgc , will add a background color if css code is added. <br />
ff , ff is a short term of family font, i recommend sans-serif if you want a nice font. <br />
img , after typing img, put the image link. <br />
# Code
```ts
let svelte = `
  img https://private-user-images.githubusercontent.com/172193086/395806363-7f66c2e0-a695-4c66-b3ae-236aeb090ea0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQyMDE1NDcsIm5iZiI6MTczNDIwMTI0NywicGF0aCI6Ii8xNzIxOTMwODYvMzk1ODA2MzYzLTdmNjZjMmUwLWE2OTUtNGM2Ni1iM2FlLTIzNmFlYjA5MGVhMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxNFQxODM0MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZmNhZGQ3ZmYzZWUwOTMwNDAwZjg3YTYxNTMwNjE5OWE4YWY4ZDhmMjg0ZDQ5YjRjN2NlNWY5ODg2YWFmYmMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ElCcai_GkA4BeVie2rfMgTkbuFczmGwW1Rh8tM9V0Wk
  1 Thank you for using Svelt-Plus,
  2 making developing websites easier.

  !addcss
  ff sans-serif
  bg grey
`;

let imgsrc = '';
let font = '';
let sveltecss = '';
let sveltecode = '';
let svelteSCRIPTADD = 'console.log("Added script");';

const lines = svelte.split('\n').map(line => line.trim()).filter(line => line);

lines.forEach((line) => {
  if (line.startsWith('!addscript')) {
    sveltecode += `<script>${svelteSCRIPTADD}</script>\n`;
  }
  
  if (line.startsWith('1 ')) {
    const content = line.substring(2).trim();
    sveltecode += `<h1>${content}</h1>\n`;
  }

  if (line.startsWith('2 ')) {
    const content = line.substring(2).trim();
    sveltecode += `<h2>${content}</h2>\n`;
  }
  
  if (line.startsWith('img ')) {
    imgsrc = line.substring(4).trim();
    sveltecode += `<img src="${imgsrc}" alt="Image" />\n`;
  }

  if (line.startsWith('bg ')) {
    const bgColor = line.substring(3).trim();
    sveltecss += `  background-color: ${bgColor};\n`;
  }

  if (line.startsWith('ff ')) {
    font = line.substring(3).trim();
    sveltecss += `  font-family: ${font};\n`;
  }

  if (line.startsWith('!addcss')) {
    sveltecode += `<style>\nbody {\n${sveltecss}}\n</style>\n`;
  }
});

console.log(sveltecode);
console.log(sveltecss);
```
