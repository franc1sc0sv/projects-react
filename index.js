
const fs = require('fs')

function getPaths (path) {
  const folders = []
  // Lee todos los archivos y carpetas en la ruta especificada
  const files = fs.readdirSync(path)

  // Filtra solo las carpetas
  files.forEach((file) => {
    const stats = fs.statSync(`${path}/${file}`)

    if (stats.isDirectory()) {
      folders.push(`${path}${file}`)
    }
  })

  return folders.map((path) => {
    return `${path.split('.').filter((x) => x !== '' && x).join()}/dist/`
  })
}

const folders = getPaths('./projects/')

const jsonString = JSON.stringify(folders)

fs.writeFile('paths.json', jsonString, err => {
  if (err) {
    console.error('Error al escribir el archivo JSON:', err)
    return
  }
  console.log('Archivo JSON creado exitosamente')
})
