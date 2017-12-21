var myApp = new Framework7();
 
var $$ = Dom7;

$$('.open-left-panel').on('click', function (e) {
    myApp.openPanel('left');
});
var system = {
	xml:function(url){
        return $.ajax({
            type: "POST",
            url: url,
            dataType: 'xml',
            async: !1,
            cache:false
        });
    },
    search:function() {
        $("a[data-cmd='home']").on('click', function() {
            var data = system.xml("work.xml");
            $(data.responseText).find("div.home").each(function(i,content){
                $("#result").html(content);
            });

        });
        $("#form_search").validate({
            rules: {
                field_search: {required: true,maxlength:10}
            },
            errorElement : 'div',
            errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if(placement){
                    $(placement).append(error)
                } 
                else{
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                var input = $('input[name="field_search"]').val();
                console.log(input);
                var data = system.xml("work.xml");
                $(data.responseText).find("div."+input).each(function(i,content){
                    $("#result").html(content);
                });

            }
        });
    }
}