let svelte = `
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
