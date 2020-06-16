<template>
	<CSidebar 
		fixed 
		:minimize="minimize"
		:show="show"
		@update:show="(value) => $store.commit('set', ['sidebarShow', value])"
	>
		<div v-show="!minimize" style="background:whitesmoke">
			<CImg
				src="img/pccw_logo_en.svg"
				block
				class="mb-2"
				width="70px"
				height="50px"
				style="float:left;margin-left:10px"
			/>
			<span style="float:left;font-size:18px;color:#3c4b64;font-weight:700;margin-top:11px;margin-left:10px">
				BISTRO CRM
			</span>
		</div>

		<CRenderFunction flat :content-to-render="$options.nav"/>
		<CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" />
	</CSidebar>
</template>

<script>
import nav from './_nav'

export default {
	name: 'TheSidebar',
	nav,
	computed: {
		show () {
			return this.$store.state.sidebarShow 
		},
		minimize () {
			return this.$store.state.sidebarMinimize 
		},
	}
}
</script>
