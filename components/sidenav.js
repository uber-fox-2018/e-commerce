Vue.component('sidenavbar', {
    template: `
    <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="/lib/sunset.jpg">
                    </div>
                    <a href="#user">
                        <img class="circle" src="/lib/star.png">
                    </a>
                    <a href="#logout">
                        <span class="white-text logout">Logout</span>
                    </a>
                    <a href="#name">
                        <span class="white-text name">John Doe</span>
                    </a>
                    <a href="#email">
                        <span class="white-text email">jdandturk@gmail.com</span>
                    </a>
                </div>
            </li>
            <li>
                <a href="#!">
                    <i class="material-icons">home</i>Home</a>
            </li>
            <li>
                <a href="#!">Second Link</a>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li>
                <a class="subheader">Select</a>
            </li>
            <li>
                <a class="waves-effect" href="#!">Female</a>
                <a class="waves-effect" href="#!">Male</a>
            </li>
        </ul>
    `
})