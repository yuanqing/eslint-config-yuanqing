const fs = require('node:fs/promises')
const path = require('node:path')

async function main() {
  const filePath = path.resolve(__dirname, '..', 'package.json')
  const packageJson = JSON.parse(await fs.readFile(filePath, 'utf8'))
  const peerDependencies = packageJson.peerDependencies
  const saveLatest = []
  const saveExact = [`${packageJson.name}@${packageJson.version}`]
  for (const packageName of Object.keys(peerDependencies)) {
    const version = peerDependencies[packageName]
    if (version.indexOf('>=') === 0) {
      saveLatest.push(`${packageName}@${version.slice(2)}`)
      continue
    }
    saveExact.push(`${packageName}@${version}`)
  }
  console.log(`$ npm install --save-dev ${saveLatest.join(' ')}`)
  console.log(
    `$ npm install --save-dev --save-exact \\\n    ${saveExact.join(
      ' \\ \n    '
    )}`
  )
}
main()
