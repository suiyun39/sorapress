import type { Plugin } from 'vite'
import mustache from 'mustache'
import entryTemplate from './template/entry.mustache?raw'

function cleanUrl(url: string) {
  return url.replace(/#.*$/su, '').replace(/\?.*$/su, '')
}

function renderEntry() {
  // todo: 从配置文件中获取信息
  const config = { title: 'SoraPress' }
  return mustache.render(entryTemplate, config)
}

export function sorapressPlugin(): Plugin {
  return {
    name: 'sorapress',

    configureServer(server) {
      // 在此处提供入口文件, 并将 client 注入到其中
      return () => {
        server.middlewares.use(async (req, res, next) => {
          const url = req.url && cleanUrl(req.url)

          if (!url || !url.endsWith('.html')) {
            return void next()
          }

          const entry = renderEntry()
          const html = await server.transformIndexHtml(url, entry, req.originalUrl)

          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.end(html)
        })
      }
    },
  }
}
