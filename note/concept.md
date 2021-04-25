# NUXT

NUXT는 SPA 프레임워크인 VUE를 SSR(server side rendering)을 할 수 있도록 도와주는 기술이라고 할 수 있다.<br/>
그래서 SPA의 단점인 SEO(Search Engine Optimization, 검색 엔진 최적화)가 되지 않는 문제를 해결해 줄 수 있다.

<br/>

## SSR

하지만 NUXT가 지원하는 SSR은 완전한 SSR이 아니다. 처음 request를 요청한 페이지만 미리 렌더링을 해서 보내주고, 그 이후로는 SPA 방식으로 동작한다. 그래서, nuxt는 SSR과 CSR(Client Side Rendering)의 장점을 모두 취할 수 있도록 도와준다.<br/>
그래서 엄밀히 말하면 NUXT는 server side 프레임워크라고는 할 수 없다. 

<br/>

## Build Mode

1. Universal App
    
    첫 번째 페이지는 서버에서 렌더링 되지만, 브라우저에 첫 페이지가 로드 되고 난 후부터는 SPA방식으로 구동된다. - SEO 가능

2. Single Page App

    SPA 방식으로 동작. - SEO 불가능

3. Static App

    모든 페이지들을 미리 렌더링해서 정적 html 파일로 만들어 둔다. 따라서 node 서버가 필요하지 않고 GitHub과 같은 정적 호스팅 서비스에 배포할 수 있지만, 변경 사항이 발생하면 다시 렌더링해서 정적 파일들을 생성하는 작업이 필요하다. - SEO 가능
    