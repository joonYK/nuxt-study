# NUXT

NUXT는 SPA 프레임워크인 VUE를 SSR(server side rendering)을 할 수 있도록 도와주는 기술이라고 할 수 있다.<br/>
그래서 SPA의 단점인 SEO(Search Engine Optimization, 검색 엔진 최적화)가 되지 않는 문제를 해결해 줄 수 있다.

<br/>

## SSR

하지만 NUXT가 지원하는 SSR은 완전한 SSR이 아니다. 처음 request를 요청한 페이지만 미리 렌더링을 해서 보내주고, 그 이후로는 SPA 방식으로 동작한다. 그래서, nuxt는 SSR과 CSR(Client Side Rendering)의 장점을 모두 취할 수 있도록 도와준다.<br/>
그래서 엄밀히 말하면 NUXT는 server side 프레임워크라고는 할 수 없다. 