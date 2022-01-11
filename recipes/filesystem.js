const fs = require('fs')
const path = require('path')

const read = filename => {
    return fs.readFileSync(filename, { encoding: 'utf-8' })
}

const write = (filename, content) => {
    const dir = path.dirname(filename)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    fs.writeFileSync(filename, content, { encoding: 'utf-8' })
}

module.exports = { read, write }