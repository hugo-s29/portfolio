import { NextApiRequest, NextApiResponse } from 'next'
import { readdir } from 'fs-extra'
import path from 'path'

export default async function(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  try {
    const dirPath = path.resolve('blog')

    let filesInside = await readdir(dirPath)
    if (req.query.file)
      filesInside = filesInside.filter(f => f == req.query.file)

    const files = await Promise.all(
      filesInside.map(file =>
        fetch(
          `https://raw.githubusercontent.com/hugos29dev/portfolio/master/blog/${file}`
        ).then(r => r.text())
      )
    )

    console.log(files)
    res.json(files)
  } catch (e) {
    console.error(e)
    res.json(e)
  }
}
