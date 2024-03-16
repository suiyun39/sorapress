import { cac } from 'cac'
import { createLogger } from 'vite'
import c from 'picocolors'
import { name, version } from '../package.json'
import { createServer } from './server'

const cli = cac(name)
const logger = createLogger()

// -------- dev --------
cli.command('dev', 'start dev server')

cli.on('command:dev', async () => {
  const server = await createServer()

  await server.listen()
  server.printUrls()
  server.bindCLIShortcuts({ print: true })
})

// -------- build --------
cli.command('build', 'build for production')

// 处理未知命令
cli.on('command:*', () => {
  const command = cli.args.join(' ')
  logger.error(c.red(`unknown command: ${command}`))
  process.exit(1)
})

cli.version(version)
cli.help()
cli.parse(process.argv)
