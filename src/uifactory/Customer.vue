<template>
	<div id="screenDiv">This is UiForm Conversion Exercise</div>
</template>

<script>
import UiForm from "./UiForm"

export default {
  name: 'Dashboard',
  components: {
  },
  data () {
	return {
		uiJsonData: { "id": null, "productCode": "TPN01", "shortDescription": "Shogun",
		"longDescription": "Taipan", "productDescription": "Shogun Taipan Account",
		"productType": "UL", "supplementaryFollowBasic": "1", "ageCalculationBasis": "ANEB",
		"priorityForPremiumMatching": "0", "manjaCareApplicable": "", "masterPolicyNo": "",
		"riskBackdating": "180" }
	}
  },
  mounted: function() {
	var objForDisplay = this.uiJsonData
	var screenInstant = new UiForm("screenDiv");
	screenInstant.displayObject("screenDiv", objForDisplay, "Product Description");
	screenInstant.scrollAndFocus();
  },
  methods: {
  }
}
</script>