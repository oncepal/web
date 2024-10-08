# ONCEPAL Web Monorepos

## 使用方法

1. 全局安装对应CLI
```sh
npm install -g pnpm
npm install -g turbo
```

2. 安装依赖，初始化设置

```sh
pnpm i
pnpm run init
```
3. 查看package.json运行对应项目:

```sh
pnpm run dev:?
```
## 有些什么？

### 项目

- `@oncepal/native`: 一个 [react-native](https://reactnative.dev/) app 包括 [expo](https://docs.expo.dev/)
- `@oncepal/admin`: 一个 [Next.js](https://nextjs.org/) 后台管理项目
- `@oncepal/h5`: 一个 [Next.js](https://nextjs.org/) h5 移动端项目
- `@oncepal/test`: 一个 [Next.js](https://nextjs.org/) 用来测试各种包的项目，忽略提交自测lib用

### 类库

- `@oncepal/ui`: 一个 admin 和 h5 使用的ui库，可开源独立发布 
- `@oncepal/charts`: 一个 admin 和 h5 使用的图表库，可开源独立发布 
- `@oncepal/utils`: 一个内部使用的 hooks 工具库
- `@oncepal/typescript-config`: `tsconfig.json` ts统一配置中心

所有 package/app 都是 100% [TypeScript](https://www.typescriptlang.org/).

### 相关文档

- [Next](https://nextjs.org/) - web框架
- [Expo](https://emotion.sh/docs/introduction) - app框架
- [React Native](https://reactnative.dev/) - app框架
- [Emotion](https://emotion.sh/docs/introduction) - 样式方案
- [Framer-motion](https://www.framer.com/motion/) - 动画方案
- [TypeScript](https://www.typescriptlang.org/) - 使用语言
- [Prettier](https://prettier.io) - 代码格式化
- [Rollup](https://rollupjs.org/) - 类库独立打包
- [TurboRepo](https://turbo.build/repo/docs) - 项目管理

