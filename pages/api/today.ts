import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'

interface Video {
  id: string
  day: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [, month, day] = new Date().toISOString().substr(0, 10).split(`-`)
  const json: Video[] = await fs
    .readFile(`calendars/${month}.json`, `utf8`)
    .then((txt) => JSON.parse(txt))
    .catch((e) => {
      res.send(JSON.stringify(e))
    })
  const videos = json.filter((d) => d.id).filter((d) => d.day === +day)
  if (videos.length === 1) {
    res.redirect(`https://www.youtube.com/watch?v=${videos[0].id}`)
  } else {
    res.json(videos)
  }
}
