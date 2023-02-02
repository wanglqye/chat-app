<template>
	<view class="content">
		<navHeader>
			<template #left>
				<text class="title-text">通讯录</text>
			</template>
		</navHeader>
		<scroll-view class="main-content">
			
		</scroll-view>
	</view>
</template>

<script setup>
	import navHeader from '../../components/navHeader.vue'
	import { useStore } from 'vuex'
	
	const store = useStore()
	
	console.log(store.state)
</script>

<style lang="scss">
.title-text{
	color: #000;
	font-size: 36rpx;
}
</style>
