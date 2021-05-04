# 데이터 요청 이후 페이지 렌더링을 위한 asyncData

nuxt는 첫 페이지를 SSR로 반환하는데, 다른 서버로부터 데이터를 받아와서 페이지를 렌더링을 해야하는 경우에는 `asyncData` 메서드를 이용한다. 

<br/>

## 일반 vue data

먼저, 아래와 같은 template이 있다고 했을 때

<kbd><img src="images/asyncData/template.png" width="50%"></kbd>

<br/>

post-list 컴포넌트에 전달할 loadedPosts 데이터를 아래처럼 일반 vue data 메서드로 작성하면

<kbd><img src="images/asyncData/vue data.png" width="70%"></kbd>

마치 CSR처럼 post-list 컴포넌트는 비워진 상태로 페이지가 로드 된 후, setTimeout 메서드에 의해 1500밀리초가 지난 뒤 데이터가 생성되면서 post-list 컴포넌트가 렌더링 된다. <br/> 사람이 사용하는 입장에서는 크게 문제가 되지 않을 수 있으나, 웹 크롤러 입장에서는 내용이 비어있는 페이지를 반환 받게 되기때문에 SEO가 제대로 되지 않는 문제가 발생한다.

<br/><br/>

## nuxt의 asyncData

asyncData 메서드로 데이터를 작성하면, asyncData가 데이터를 반환하기 전에는 페이지가 렌더링 되지 않는다. 즉, asyncData에서 다른 서버로 데이터를 받아와서 반환하면, 그 이후 asyncData에서 반환한 데이터와 함께 페이지 렌더링이 시작되는 것이다.

<br/>

* Promise 객체 사용

<kbd><img src="images/asyncData/asyncData Promise.png" width="70%"></kbd>

<br/>

* callback 파라미터 사용

<kbd><img src="images/asyncData/asyncData callback.png" width="70%"></kbd>