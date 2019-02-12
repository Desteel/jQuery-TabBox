function tabs($container, $classForActiveBtn, $classForActiveTab, $addAnimate) {
    $container.each(function() {
        var _container = $(this),
            tabsline = _container.find("[data-tabsline]").filter(":first"),
            button = tabsline.find("> *"),
            contentbox = _container.find("[data-contentbox]").filter(":first"),
            content = contentbox.find("> *");

        button.on("click", function() {
            var _thisButton = $(this),
                _i = _thisButton.index(),
                eqContent = content.eq(_i),
                siblings = {
                    btn: _thisButton.siblings(),
                    content: eqContent.siblings()
                };

            if ($addAnimate === true) {
                eqContent.fadeIn("fast").css({ display: "" });
                siblings.content.css({ display: "" });
            }

            _thisButton.addClass($classForActiveBtn);
            eqContent.addClass($classForActiveTab);

            siblings.btn.removeClass($classForActiveBtn);
            siblings.content.removeClass($classForActiveTab);
        });
    });
}

tabs($("[data-tabbox]"), "btn--active", "tab--active", true);
tabs($("[data-innertabbox]"), "innerbtn--active", "innertab--active", true);
