// JavaScript Document
var xml;
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "data_src.xml",
            dataType: "xml",
            success: xmlParser
        });
    });
        //loading XML file and parsing to .main div.
        function xmlParser(data) {
            xml = data;
            $('#load').fadeOut();
            $(xml).find("kandid").each(function () {
                var id = $(this).find("id").text();
                var name = $(this).find("name").text();
                var nasyawbe = $(this).find("nasyawbe").text();
                var imgaddrr = $(this).find("imgaddrr").text();
                var slogan = $(this).find("slogan").text();
                var details = $(this).find("details").text();
                var listcode = $(this).find("listcode").text();
				$("#kandidList").append('<li> '+ name +'</li>');
				$('#listview').listview('refresh'); 
            });
        }