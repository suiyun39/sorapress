import type { Plugin } from 'vite'

function cleanUrl(url: string) {
  return url.replace(/#.*$/su, '').replace(/\?.*$/su, '')
}

export function sorapressPlugin(): Plugin {
  return {
    name: 'sorapress',

    configureServer(server) {
      // 在此处提供入口文件, 并将 client 注入到其中
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = req.url && cleanUrl(req.url)

          if (!url || !url.endsWith('.html')) {
            return void next()
          }

          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.end('<h1>Hello Sora!</h1>')
        })
      }
    },
  }
}
