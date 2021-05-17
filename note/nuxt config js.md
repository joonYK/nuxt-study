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

<br/><br/>

Plugins & Modules

* Plugins

plugins은 페이지가 처음 렌더링 되기 이전에 적용할 플러그인 (전역 컴포넌트, 필터 등)을 적용할 수 있다. 그러면 서버측에서 첫 렌더링 시, 클라이언트에서 렌더링 시에 사용 가능하며, 클라이언트나 서버측에서만 사용가능하도록 적용도 가능하다.

[plugins 설정 참고](https://go.nuxtjs.dev/config-plugins)

```javascript
// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
```

<br/>

* Modules

Module은 nuxt의 핵심기능을 확장 할 수 있는 확장 기능이라고 할 수 있다. nuxt가 부팅될 때 적용이 되며, 프레임워크를 개발할 때, 불필요한 기능을 제거해서 가볍게 개발을 시작하고 필요한 기능은 개발하면서 모듈로 추가하고 확장할 수 있도록 만련해 두었다. <br/>
이러한 모듈은 직접 만들수도 있지만, nuxt 팀과 nuxt 커뮤니티에서 미리 만들어서 배포해놓은 모듈이 있다.

[Nuxt Modules](https://modules.nuxtjs.org/)


