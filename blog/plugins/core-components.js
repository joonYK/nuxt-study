import Vue from 'vue'

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/Posts/PostList'

// 컴포넌트 전역 등록
Vue.component('AppButton', AppButton);
Vue.component('AppControlInput', AppControlInput);
Vue.component('PostList', PostList);