Application1.home = function (params) {

    var viewModel = {
        message: ko.observable('Welcome!'),
        name: ko.observable(''),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        greet: function () {
            Application1.app.navigate("greeting/" + this.name());
        }
    };

    return viewModel;
};