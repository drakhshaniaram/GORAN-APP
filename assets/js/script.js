// JavaScript Document
var xml;
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "data_src.xml",
            dataType: "xml",
            success: xmlParser
        });
		//loading XML file and parsing to .main div.
		 function xmlParser(data) {
            xml = data;
            $(xml).find("kandid").each(function () {
                var id = $(this).find("id").text();
                var name = $(this).find("name").text();
                var img_adr = $(this).find("img_adr").text();
				createList(id,name,img_adr);
            });
        }
		function createList(id,name,img_adr){
			
				var listview=$("#listview");
				
				var listItem = document.createElement('li');
				var a = document.createElement("a");
				var img = document.createElement("img");
				var h3 = document.createElement("h3");
				var p = document.createElement("p");
				
				img.setAttribute("src","GoranPictures/"+img_adr+".jpg")
				a.setAttribute("href","#"+id);
				p.className="jhmare";
				h3.innerHTML=name;
				p.innerHTML=id;
        		
				$(a).append(img);$(a).append(h3);$(a).append(p);
				$(listItem).append(a);
                listview.append(listItem);
				createPage(id,name,img_adr);
				$('#listview').listview('refresh'); 
				}
			function createPage(id,name,img_adr){
				
				}
    });
        