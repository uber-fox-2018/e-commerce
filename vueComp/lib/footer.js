Vue.component('footer-comp',{
    template: 
    `
    <footer style="margin: 20px">
        <div class="container" style="background-color: grey">
            <div class="row" >
                <div class="col-md-5 footer-text" >
                    ABOUT US <br>
                    This web page is only used for learning, 
                </div>
                <div class="col-md-3 footer-text">
                    Contact : 
                    <ul class="list-unstyled">
                        <li>example@mail.com</li>
                        <li>09807665</li>
                        <li>022-876-09</li>
                    </ul>
                </div>
                <div class="col-md-3 footer-text">
                    Thank's To : 
                    <ul class="list-unstyled">
                        <li>Parents</li>
                        <li>Instructure</li>
                        <li>Friends</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container" style="background-color: darkgray; padding: 10px">
            <div class="row">
                <div class="col-md-2 offset-md-5">
                    @2018
                </div>
            </div>
        </div>
    </footer>
    `

})