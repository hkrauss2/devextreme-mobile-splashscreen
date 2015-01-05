window.Application1 = window.Application1 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    someLongProcess()
    .then(createApp);

    function createApp() {

        // This clears all child nodes from the viewPort and removes the splash-screen class.
        $('.splash-screen')
            .empty()
            .removeClass('splash-screen');

        Application1.app = new DevExpress.framework.html.HtmlApplication({
            namespace: Application1,
            viewPortNode: document.getElementById("viewPort"),
            layoutSet: DevExpress.framework.html.layoutSets[Application1.config.layoutSet],
            navigation: Application1.config.navigation
        });

        Application1.app.router.register(":view/:id", { view: "home", id: undefined });

        Application1.app.navigate();
    }

    function someLongProcess() {
        // In my case this was pulling breeze metadata and the initial app data
        // In this demo it is just a timeout for 3 seconds
        var defer = $.Deferred();

        window.setTimeout(function () {
            defer.resolve();
        }, 3000);

        return defer.promise();
    }
});
