import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const PKG_ROOT = resolve(fileURLToPath(import.meta.url), '../..')

export const CLIENT_ROOT = resolve(PKG_ROOT, 'src/client')
