import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { join } from 'path'

interface Video {
  id: string
  day: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [, month, day] = new Date().toISOString().substr(0, 10).split(`-`)
  const videos: Video[] | void = await fs
    .readFile(join(process.cwd(), `calendars`, `${month}.json`), `utf8`)
    .then((txt) => JSON.parse(txt) as Video[])
    .then((json) => json.filter((d) => d.id).filter((d) => d.day === +day))
    .catch((e) => {
      res.json(e)
    })
  if (!videos) return
  if (videos.length === 1) {
    const url = `https://www.youtube.com/watch?v=${videos[0].id}`
    if (req.query.debug) {
      res.json(videos)
    } else {
      res.redirect(url)
    }
  } else {
    res.json(videos)
  }
}
