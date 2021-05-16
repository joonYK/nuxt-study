## head 지정

nuxt.config.js 파일에서 페이지마다 공통으로 적용될 head 엘리먼트의 내용을 지정할 수 있다. 

```javascript
	head: {
		title: 'blog',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	}

	...
```

<br/>

하지만 페이지에 별도의 head를 지정하고 싶다면, 아래처럼 page component로 가서 title을 지정하면 된다. 그럼 그 페이지는 중복되는 head의 내용일 경우, 기본 내용을 덮어쓰고 그 페이지만 별도로 적용된다.

```javascript
export default {
    components: {
        ...
    },
    head : {
      title : '특정 페이지 title 지정'
    }
}
</script>
```

<br/><br/>

## router

* 존재하지 않는 url 요청 시(404 error), 이동할 페이지 설정.

```javascript
router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  }
```