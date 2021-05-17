## middleware

미들웨어는 서버에서 초기 렌더링 시, 또는 클라이언트에서 페이지 라우팅 시에 실행할 함수를 적용할 수 있다.

<br/>
middleware 디렉토리에 아래와 같은 log.js 파일을 작성하고 적용해보자.

* log.js

```javascript
export default function(context) {
	console.log('[Middleware] The Log Middleware is running');
} 
```
<br/>

* 특정 layout을 적용하는 모든 페이지에서 실행하거나(layouts디렉토리의 vue 파일에 설정), 특정 페이지에서 실행. (pages 폴더의 vue 파일에 설정)

```javascript
export default {
    middleware : 'log',
}
```

<br/>

* 페이지 라우팅 할 때 실행. (nuxt.config.js 파일에 설정)

```javascript
router: {
	middleware : 'log'
}
```

<br/>

그리고 중복 적용이 가능하다. 라우팅 할 때나 & 레이아웃 & 페이지에 모두 적용했을 때, 그 페이지로 라우팅을 할 때 3번 실행 된다.



