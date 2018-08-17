Vue.component("ecommerce-footer", {
	template: `
	<footer class="footer">
		<div class="container">
			<span class="text-muted" v-html="footerLicense">
			</span>
		</div>
	</footer>
	`,
	props: ["footerLicense"]
});
