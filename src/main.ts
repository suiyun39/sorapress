import { cac } from 'cac'
import { createLogger } from 'vite'
import c from 'picocolors'
import { name, version } from '../package.json'

const cli = cac(name)
const logger = createLogger()

cli.command('dev', 'start dev server')

cli.command('build', 'build for production')

// 处理未知命令
cli.on('command:*', () => {
  const command = cli.args.join(' ')
  logger.error(c.red(`unknown command: ${command}`))

  // eslint-disable-next-line n/no-process-exit
  process.exit(1)
})

cli.version(version)
cli.help()
cli.parse(process.argv)
