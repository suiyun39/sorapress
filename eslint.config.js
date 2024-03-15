import { defineConfig } from 'eslint-config-rakko'

export default defineConfig({
  node: true,
  solid: true,
  typescript: {
    project: './tsconfig.json',
  },
})
