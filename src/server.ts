import { createServer as createViteServer } from 'vite'
import { sorapressPlugin } from './plugins/sorapress'

export async function createServer() {
  return createViteServer({
    plugins: [sorapressPlugin()],
  })
}
