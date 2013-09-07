// JavaScript Document
var xml;
var count;
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
			$(xml).find("barnamayList").each(function() {
				var list_title=$(this).find("title").text();
                var list_text=$(this).find("text").text();
				var list_img_adr=$(this).find("img_adr").text();
				createPage("00",list_title,"goran",list_text);
            });
			$(xml).find("amar").each(function() {
				var count=$(this).find("count").text();
				$("#count").text(count);
            });
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
				a.setAttribute("href","#kandid"+id);
				p.className="jhmare";
				h3.innerHTML=name;
				p.innerHTML=id;
        		
				$(a).append(img);$(a).append(h3);$(a).append(p);
				$(listItem).append(a);
                listview.append(listItem);
				createPage(id,name,img_adr);
				$('#listview').listview('refresh'); 
				}
			function createPage(id,name,img_adr,text){
				var pageDiv = document.createElement('div');
				var headerDiv = document.createElement("div");
				var contentDiv = document.createElement("div");
				var footerDiv = document.createElement('div');
				
				var header_h1 = document.createElement("h1");
				var content_h2 = document.createElement("h2");
				var content_img = document.createElement("img");
				var content_p = document.createElement("p");
				var footer_h4 = document.createElement("a");
				
				pageDiv.setAttribute("data-role","page");
				pageDiv.setAttribute("id","kandid"+id);
				headerDiv.setAttribute("data-role","header");
				contentDiv.setAttribute("data-role","content");
					content_h2.className="details_title";
					content_img.className="details_image";
					content_p.className="details_text";
				footerDiv.setAttribute("data-role","footer");
				header_h1.innerHTML="زیانیاری زیاتر";
				content_h2.innerHTML=name;
				content_img.src="GoranPictures/"+img_adr+".jpg";
				content_p.innerHTML=(id=="00")?text:"ژمارە تەلەفۆن و ئیمەیڵ";
				footer_h4.innerHTML="دەنگ بدە بە گۆڕان لیستی دژی گەندەڵی";
				
				headerDiv.appendChild(header_h1);
				contentDiv.appendChild(content_h2);
				contentDiv.appendChild(content_img);
				contentDiv.appendChild(content_p);
				footerDiv.appendChild(footer_h4);
				pageDiv.appendChild(headerDiv);
				pageDiv.appendChild(contentDiv);
				pageDiv.appendChild(contentDiv);
				
				document.getElementById("body").appendChild(pageDiv);
				}
    });
        