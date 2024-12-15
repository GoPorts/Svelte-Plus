let svelte; /// interpreter

/// interpreter code
/// html and css currently
let cssval
let imgsrc = '';
let font = '';
let css = '';
let sveltebgc = '';
let sveltecss = '';
let sveltecode = '';
let svelteH1 = '';
let svelteSCRIPT = '';
let svelteSCRIPTADD = 'console.log("Added script");';
let onvalue = false;
const lines = svelte.split('\n');
lines.forEach((line) => {
  ///
  if (line.includes('!addscript ')) {
    sveltecode += `<script>${svelteSCRIPTADD}</script>\n`;
    onvalue = true
  }
  if (line.includes('1 ')) {
    svelteH1 = line.split('1 ')[1];
    sveltecode += `<h1>${svelteH1}</h1>\n`;
  }
  if (line.includes('2 ')) {
    svelteH1 = line.split('2 ')[1];
    sveltecode += `<h2>${svelteH1}</h2>\n`;
  }
  if (line.includes('3 ')) {
    svelteH1 = line.split('3 ')[1];
    sveltecode += `<h3>${svelteH1}</h3>\n`;
  }
  if (line.includes('4 ')) {
    svelteH1 = line.split('4 ')[1];
    sveltecode += `<h4>${svelteH1}</h4>\n`;
  }
  if (line.includes('5 ')) {
    svelteH1 = line.split('5 ')[1];
    sveltecode += `<h5>${svelteH1}</h5>\n`;
  }
  if (line.includes('img ')) {
    imgsrc = line.split('img ')[1];
    sveltecode += `<img> src="${imgsrc}"</img>\n`;
  }

  ///-- css stuff
  if (line.includes('body ')) {
    sveltecss += `body{\n`;
  }
  if (line.includes('bg ')) {
    sveltebgc = line.split('bg ')[1];
    sveltecss += `backgound-color: ${sveltebgc} ;\n`;
  }
  if (line.includes('ff ')) {
    font = line.split('ff ')[1];
    sveltecss += `family-font: ${font} ;\n`;
  }
  sveltecss += `\n}`;
  if (line.includes('!addcss')) {
    sveltecode += `<style>\n ${sveltecss} \n<style>\n`;
  }
});

///-- end stuff
console.log(sveltecode);
console.log(sveltecss);
console.log(svelteSCRIPT);