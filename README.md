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
  img https://github.com/user-attachments/assets/7f66c2e0-a695-4c66-b3ae-236aeb090ea0
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
let svelteH1 = '';
let svelteH2 = '';
let svelteSCRIPTADD = 'console.log("Added script");';

const lines = svelte.split('\n');
lines.forEach((line) => {
  if (line.includes('!addscript')) {
    sveltecode += `<script>${svelteSCRIPTADD}</script>\n`;
  }
  
  if (line.startsWith('1 ')) {
    svelteH1 = line.split('1 ')[1];
    sveltecode += `<h1>${svelteH1}</h1>\n`;
  }
  if (line.startsWith('2 ')) {
    svelteH2 = line.split('2 ')[1];
    sveltecode += `<h2>${svelteH2}</h2>\n`;
  }
  
  if (line.startsWith('img ')) {
    imgsrc = line.split('img ')[1];
    sveltecode += `<img src="${imgsrc}" alt="Image" />\n`;
  }

  if (line.startsWith('bg ')) {
    const bgColor = line.split('bg ')[1];
    sveltecss += `  background-color: ${bgColor};\n`;
  }
  if (line.startsWith('ff ')) {
    font = line.split('ff ')[1];
    sveltecss += `  font-family: ${font};\n`;
  }

  if (line.includes('!addcss')) {
    sveltecode += `<style>\nbody {\n${sveltecss}}\n</style>\n`;
  }
});

console.log(sveltecode);
console.log(sveltecss);
```
