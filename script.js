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
            $('#load').fadeOut();
            $(xml).find("kandid").each(function () {
                var id = $(this).find("id").text();
                var name = $(this).find("name").text();
                var img_adr = $(this).find("img_adr").text();
                var programs = $(this).find("programs").text();
				var contact = $(this).find("contact").text();
				createList(id,name,img_adr,programs,contact);
            });
        }
		function createList(id,name,img_adr,programs,contact){
			
				var listview=document.getElementById("listview");
				
				var listItem = document.createElement('li');
				var a = document.createElement("a");
				var img = document.createElement("img");
				var h3 = document.createElement("h3");
				var p = document.createElement("p");
				
				img.setAttribute("src","images/"+img_adr+".jpg");
				a.setAttribute("href","#"+id);
				p.className="jhmare";
				h3.innerHTML=name;
				p.innerHTML=id;
        		
				a.appendChild(img);a.appendChild(h3);a.appendChild(p);
				listItem.appendChild(a);
                listview.appendChild(listItem);
				createPage(id,name,img_adr,programs,contact);
				$('#listview').listview('refresh'); 
				}
			function createPage(id,name,img_adr,programs,contact){
				
				}
    });
        
       