import fs from 'fs-extra'
console.log('Watching changes on service worker')

fs.watch('./.next/static/service-worker.js', {}, async () => {
  console.log('New change on service worker')
  const fileContent = await fs.readFile('./.next/static/service-worker.js')
  await fs.writeFile('./static/service-worker.js', fileContent)
  console.log('Change copied')
})
