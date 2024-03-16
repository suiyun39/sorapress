import { createServer as createViteServer } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { sorapressPlugin } from './plugins/sorapress'

export async function createServer() {
  return createViteServer({
    plugins: [sorapressPlugin(), solidPlugin()],
  })
}
