import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'

interface Video {
  id: string
  day: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [, month, day] = new Date().toISOString().substr(0, 10).split(`-`)
  const videos: Video[] | void = await fs
    .readFile(`calendars/${month}.json`, `utf8`)
    .then((txt) => JSON.parse(txt) as Video[])
    .then((json) => json.filter((d) => d.id).filter((d) => d.day === +day))
    .catch((e) => {
      res.json(e)
    })
  if (!videos) return
  if (videos.length === 1) {
    res.redirect(`https://www.youtube.com/watch?v=${videos[0].id}`)
  } else {
    res.json(videos)
  }
}
