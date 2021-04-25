## 폴더, 파일 이름으로 라우팅

<kbd><img src="images/routing/folder-name-routing.JPG"></kbd>

* root("/") url : pages/index.vue
* "/users" url : pages/users/index.vue

<br/><br/>

## 동적 Path

파일 이름 또는 폴더 이름을 언더스코어("_")를 붙이고 만들면, 동적 파라미터 Path로 인식한다.

* 파일 이름<br/>
<kbd><img src="images/routing/dy-path1.JPG"></kbd>

* 폴더 이름<br/>
<kbd><img src="images/routing/dy-path2.JPG"></kbd>

<br/>

페이지에서 $route.params로 파라미터 값 접근 가능. ex) $route.params.id




