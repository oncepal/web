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
# pnpm run init
```
3. 查看package.json运行对应项目:

```sh
// 一般情况
pnpm run dev:?

// 后台管理
pnpm run admin:api // 需要启动后端代码和docker，此命令自动生成接口
pnpm run admin // 启动后台web页面
```
## 有些什么？

### 项目

- `@oncepal/native`: 一个 [react-native](https://reactnative.dev/) app 包括 [expo](https://docs.expo.dev/)
- `@oncepal/admin`: 一个 [Next.js](https://nextjs.org/) 后台管理项目
- `@oncepal/h5`: 一个 [Next.js](https://nextjs.org/) h5 移动端项目

### 类库

- `@oncepal/ui`: 一个 admin 和 h5 使用的ui库，可开源独立发布 
- `@oncepal/charts`: 一个 admin 和 h5 使用的图表库，可开源独立发布 
- `@oncepal/utils`: 一个内部使用的 hooks 工具库
- `@oncepal/typescript-config`: `tsconfig.json` ts统一配置中心

所有 package/app 都是 100% [TypeScript](https://www.typescriptlang.org/).

### 相关文档

**h5**:
- [Next](https://nextjs.org/) - web框架

**app**:
- [Expo](https://emotion.sh/docs/introduction) - app框架
- [React Native](https://reactnative.dev/) - app框架

**通用**:
- [Emotion](https://emotion.sh/docs/introduction) - 样式方案
- [Framer-motion](https://www.framer.com/motion/) - 动画方案
- [TypeScript](https://www.typescriptlang.org/) - 使用语言
- [Prettier](https://prettier.io) - 代码格式化
- [Rollup](https://rollupjs.org/) - 类库独立打包
- [TurboRepo](https://turbo.build/repo/docs) - 项目管理


**后台**:
- [TDesign](https://tdesign.tencent.com/react/components/table) - 组件库
- [Zustand](https://zustand-demo.pmnd.rs/) - 数据管理
- [React Router](https://reactrouter.com/home) - 路由

