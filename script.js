// select run 
// select button
const htmlEditorContainer = document.getElementById('html');
const cssEditorContainer = document.getElementById('css');
const jsEditorContainer = document.getElementById('js');

const htmlEditor = CodeMirror(htmlEditorContainer, {
    value: `<div class="box">
  Hello User!
</div>`,
    mode: 'htmlmixed',
    theme: 'dracula',
    lineNumbers: true,
});

const cssEditor = CodeMirror(cssEditorContainer, {
    value: `.box{
  height: 100px;
  width: 100px;
  border: 1px solid #000;
  transition: all .3s ease;
  curosr: pointer;
}

.box.active{
    height: 400px;
    width: 400px;
}`,
    mode: 'css',
    theme: 'dracula',
    lineNumbers: true,
})

const jsEditor = CodeMirror(jsEditorContainer, {
    value: `const box = document.querySelector('.box');
box.addEventListener('click', event => {box.classList.toggle('active')})`,
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
})

const editors = document.querySelectorAll('.editor');
editors.forEach(editor => {
    const wrapper = editor.parentElement;
    const editorHeight = window.getComputedStyle(editor).height;
    wrapper.style.maxHeight = editorHeight;
})


const runBtn = document.getElementById('run');
const outputContainer =document.querySelector('.output-container');

function runUserCode(){
    runBtn.blur();
    htmlCode = htmlEditor.getValue();
    cssCode = cssEditor.getValue();
    jsCode = jsEditor.getValue();

    const iframe = document.querySelector('iframe');

    const outputHTML = `
        <head>
            <style>
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>
                ${jsCode}
            </script>
        </body>
    `
    iframe.srcdoc = outputHTML;

}

runBtn.addEventListener('click', runUserCode);

window.addEventListener('keydown', event => {

})

// add event on run
//     get value of each editor
//     create iframe
//     create outputHTML using eidtor vlaues
//     get contentDoc of iframe
//     open iframeDOc
//     write iframe(outputHTML)
//     close iframeDoc
