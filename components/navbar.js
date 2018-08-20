Vue.component('navigationbar', {
    template: `
    <nav>
            <div class="nav-wrapper">
                <div>
                    <a href="#" data-target="slide-out" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </a>
                    <a href="#" class="logo" style="float:left; font-size: 30px">LOGO</a>
                </div>

                <a class="dropdown-trigger" href="#!" data-target="dropdown1" v-on:mouseover="openDropdown()">Select
                    <i class="material-icons right">arrow_drop_down</i>
                </a>
                <ul id="dropdown1" v-bind:class="{ 'dropdown-content': isContent, isDropOpen: isDropdownOpen }" v-on:mouseout="closeDropdown()">
                    <div class="opt">
                        <li>
                            <a href="#!">Female</a>
                        </li>
                        <li>
                            <a href="#!">Male</a>
                        </li>
                    </div>
                </ul>
                <form>
                    <div class="input-field">
                        <input id="search" type="search" required>
                        <label class="label-icon" for="search">
                            <i class="material-icons">search</i>
                        </label>
                    </div>
                </form>
                <ul id="nav-mobile" class="right on-med-and-down">
                    <li class="icon-right">
                        <a class="modal-trigger" href="#modalcart" v-on:click="openCart()">
                            <i class="material-icons">shopping_cart</i>
                        </a>
                    </li>
                </ul>
                <a class="waves-effect waves-light btn" v-on:click>Logout</a>
            </div>
        </nav>
    `,
    data () {
        return {
            isDropdownOpen: false,
            isContent: true,
        }
    },
    methods: {
        openDropdown: function () {
            this.isDropdownOpen = true
        },
        closeDropdown: function () {
            this.isDropdownOpen = false
        },

        logout: function () {
            localStorage.removeItem('token')
        }
    }
})

