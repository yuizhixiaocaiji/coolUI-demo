---
title: 快速上手
---

# 快速上手

## 引入必要资源
```javascript
import {Button} from "great-ui";
import "great-ui/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "g-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```
效果：
<ClientOnly>
<get-started-button-demo></get-started-button-demo>
</ClientOnly>