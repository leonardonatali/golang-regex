const { read, write } = require('../filesystem')

const apply = (content, regex, color) => {
    return content.replace(
        regex,
        `<span style="color: ${color}"><b>$1</b></span>`
    )
}
const filename = `${__dirname}/source.html`
let content = read(filename)

const regex = /<code>[\s\S]*<\/code>/
let code = content.match(regex)[0]

// Strings
code = apply(code, /(\".*\")/g, '#e90')

// Types
code = apply(code, /\b(int|void|String)\b/g, '#44d')

// Reserved words
code = apply(code, /\b(package|public|class|static|if|else)\b/g, '#828')

// Multiline comments
code = apply(code, /(\/\*[\s\S]*\*\/)/g, '#444')

// Single line comments
code = apply(code, /(\/\/.*)/g, '#4d4')


content = content.replace(regex, code)

write(`${__dirname}/source_highlighted.html`, content)


