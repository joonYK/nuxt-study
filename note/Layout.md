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
위의 &lt;nuxt /&gt; 엘리먼트에 layout을 적용받은 pages들이 라우팅 된다.

* 적용받을 page의 Layout 적용

```html
<script>
export default {
  layout: 'users'
}
</script>
```

<br/><br/>

## 에러 페이지

layouts 디렉토리에 error.vue를 만들어서 적용하면, 404 오류와 같은 문제가 발생하면 반환하는 에러 페이지를 구성할 수 있다.

