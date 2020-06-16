<template>
  <CFooter :fixed="false">
    <div>
      <a href="#" target="_blank">BISTRO CRM</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} PCCW Solutions.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="#" target="_blank">PCCW Solutions</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
