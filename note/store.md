## nuxtServerInit action

nuxt mode가 universal이고 store actions에 nuxtServerInit를 정의하면, 서버측에서 렌더링 될 때 한번 호출된다.<br/>
nuxtServerInit은 `Promise`를 반환하거나 `async/await`을 사용해야 한다.

<kbd><img src="images/store/nuxtServerInit.JPG"></kbd>

