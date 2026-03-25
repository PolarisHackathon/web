# Polaris Web

**PolarisHackathon** 的前端 Web 项目，基于 Vue 3 + Vite + TypeScript 构建。

## 技术栈

- [Vue 3](https://vuejs.org/) — 渐进式前端框架
- [Vite](https://vite.dev/) — 极速构建工具
- [TypeScript](https://www.typescriptlang.org/) — 类型安全的 JavaScript 超集
- [pnpm](https://pnpm.io/) — 高效的包管理器

## 快速开始

### 安装依赖

```sh
pnpm install
```

### 启动开发服务器（支持热更新）

```sh
pnpm dev
```

### 类型检查、编译并构建生产版本

```sh
pnpm build
```

## 开发环境推荐配置

### IDE

[VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 插件（请禁用 Vetur）。

### 浏览器调试工具

- Chromium 系浏览器（Chrome、Edge、Brave 等）：
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [开启 Chrome DevTools 自定义对象格式化](http://bit.ly/object-formatters)
- Firefox：
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [开启 Firefox DevTools 自定义对象格式化](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 项目结构

```
web/
├── public/          # 静态资源（不经过构建处理）
├── src/
│   ├── assets/      # 图片、字体等资源文件
│   ├── components/  # 公共组件
│   ├── views/       # 页面级组件
│   ├── router/      # Vue Router 路由配置
│   ├── stores/      # Pinia 状态管理
│   ├── App.vue      # 根组件
│   └── main.ts      # 应用入口
├── index.html
├── vite.config.ts   # Vite 配置
└── tsconfig.json    # TypeScript 配置
```

## 参考链接

- [Vite 配置文档](https://vite.dev/config/)
- [Vue 3 官方文档](https://vuejs.org/)
- [PolarisHackathon 组织主页](https://github.com/PolarisHackathon)
