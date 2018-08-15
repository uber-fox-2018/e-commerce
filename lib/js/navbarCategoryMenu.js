Vue.component("navbarCategoryMenu", {
	template: `
	<ul class="navbar-nav mr-auto">
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false">
				{{ categoryMenuData.name }}
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" :href="category.link" v-for="category in categoryMenuData.categoryList">
					{{ category.name }}
				</a>
			</div>
		</li>
	</ul>

	`,
	props: ["categoryMenuData"]
});
