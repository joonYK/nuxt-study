# Layout

Layout은 페이지의 프레임이라고 볼 수 있다. 그래서 하나의 Layout을 정의하고, script나 style을 정의하면 그 Layout을 사용하는 모든 Page들은 같은 환경 구성을 적용받게 된다. 기본적으로 nuxt를 구성하면 default.vue로 기본 Layout을 만들어서 제공한다.

<br/>

## 페이지별 다른 Layout 구성

* Layout 구성

```html
<template>
  <div>
    <header>USERS SECTION</header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: 'users'
}
</script>
```

* 적용받을 page의 Layout 적용

```html
<script>
export default {
  layout: 'users'
}
</script>
```





