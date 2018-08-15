Vue.component("ecommerceFooter", {
	template: `
	<footer class="footer">
		<div class="container">
			<span class="text-muted">
				{{ footerLicense }}
			</span>
		</div>
	</footer>
	`,
	props: ["footerLicense"]
});
