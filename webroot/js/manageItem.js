var request;

$(document).ready(function() {
	if (sessionStorage.getItem("editItemPopup")) {
		showPopup('Item Edited!');
		sessionStorage.removeItem("editItemPopup");
	}
	getItems();
});

function getItems() {
	var infoSection = document.getElementById("info");

	if (request) {
		request.abort();
	}

	request = $.ajax({
		url: "/index.php/Item/getCurr",
		type: "post"
	});

	request.done(function(response, textStatus, jqXHR) {
		var items = JSON.parse(response);

		if ($.isEmptyObject(items)) {
			infoSection.style.display = "block";
		} else {
			for (var key in items) {
				createItemSection(items[key]);
			}
		}
		
	});

	request.fail( function(jqXHR, textStatus, errorThrown) {
		// fix later
		infoSection.innerHTML = errorThrown;
	});
}

function createItemSection(item) {
	var itemDiv = document.getElementById("items");

	var container = document.createElement("div");
	container.className = "itemContainer";
	container.id = item._id;

	var title = document.createElement("div");
	title.className = "itemTitle";
	title.innerHTML = item.title;

	var date = document.createElement("div");
	date.className = "itemDatePosted";
	date.innerHTML = convertUNIXtoDateString(item.datePosted);

	var faculty = document.createElement("div");
	faculty.className = "itemFaculty";
	faculty.innerHTML = item.faculty;

	var courseNum = document.createElement("div");
	courseNum.className = "itemCourseNum";
	courseNum.innerHTML = item.courseNum;

	var price = document.createElement("div");
	price.className = "itemPrice";
	price.innerHTML = "$"+item.price;

	var desc = document.createElement("div");
	desc.className = "itemDesc";
	desc.innerHTML = item.desc;

	// add location and image later

	var deleteButton = document.createElement("input");
	deleteButton.type = "button";
	deleteButton.value = "Delete This Item";
	deleteButton.className = "itemDelete";
	deleteButton.onclick = sendDelete.bind(item._id);

	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.value = "Edit This Item";
	editButton.className = "itemEdit";
	editButton.onclick = showEdit.bind(item);

	container.appendChild(title);
	container.appendChild(date);
	container.appendChild(faculty);
	container.appendChild(courseNum);
	container.appendChild(price);
	container.appendChild(desc);
	container.appendChild(editButton);
	container.appendChild(deleteButton);

	itemDiv.appendChild(container);
}

function sendDelete() {
	var infoSection = document.getElementById("info");

	if (request) {
		request.abort();
	}

	request = $.ajax({
		url: "/index.php/Item/removeItem",
		type: "post",
		data: {
			id: this.toString()
		}
	});

	request.done(function(response, textStatus, jqXHR) {
		showPopup('Item Deleted!');
		$("#"+this.toString()).remove();
	}.bind(this));

	request.fail(function(jqXHR, textStatus, errorThrown) {
		// fix later
		infoSection.innerHTML = errorThrown;
	});
}

function convertUNIXtoDateString(timestamp) {
	var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var date = new Date(timestamp);

	var month = months_arr[date.getMonth()];
	var day = date.getDate();
	var year = date.getFullYear();
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();

	return month+' '+day+', '+year+' '+hours+ ':' +minutes.substr(-2);// + ':' + seconds.substr(-2);
}

function showEdit()
{
    var currItem = document.getElementById(this._id);
    var id = this._id.toString();

	var newTitle = document.createElement("input");
    newTitle.className = 'itemTitle';
    newTitle.id = 'itemTitle_'+id;
	newTitle.type = "text";
   	newTitle.name= 'title';
    newTitle.value= this.title;
    newTitle.style['font-size'] = '15px';
    newTitle.style['color'] = '#54585A';
    newTitle.style['font-weight'] = 'normal'; 


    var newFaculty = document.createElement("input");
    newFaculty.className = 'itemFaculty';
    newFaculty.id = 'itemFaculty_'+id;
	newFaculty.type = "text";
   	newFaculty.name= 'faculty';
    newFaculty.value= this.faculty;
    newFaculty.pattern = "[A-Za-z]{2,}";
    newFaculty.style['font-weight'] = 'normal';
    newFaculty.style['color'] = '#54585A';

	var newCourseNum = document.createElement("input");
    newCourseNum.className = 'itemCourseNum';
    newCourseNum.id = 'itemCourseNum_'+id;
	newCourseNum.type = "text";
   	newCourseNum.name= 'courseNum';
    newCourseNum.value= this.courseNum;
    newCourseNum.pattern= "[0-9]{3}";

    newCourseNum.style['font-weight'] = 'normal';
    newCourseNum.style['color'] = '#54585A';

    var newPrice = document.createElement("input");
    newPrice.className = 'itemPrice';
    newPrice.id = 'itemPrice_'+id;
    newPrice.type = 'number';
    newPrice.min = 0;
    newPrice.value = this.price;

    newPrice.style['font-weight'] = 'normal';
    newPrice.style['color'] = '#54585A';

    var newDesc = document.createElement("input");
    newDesc.className = 'itemDesc';
    newDesc.id = 'itemDesc_'+id;
    newDesc.type = 'textbox';
    newDesc.value = this.desc;


    $("#"+id+" .itemTitle").replaceWith(newTitle);
    $("#"+id+" .itemFaculty").replaceWith(newFaculty);
    $("#"+id+" .itemCourseNum").replaceWith(newCourseNum);
    $("#"+id+" .itemPrice").replaceWith(newPrice);
    $("#"+id+" .itemDesc").replaceWith(newDesc);
    $("#"+id+" .itemDatePosted").hide();

    var saveButton = document.createElement("input");
	saveButton.className = 'itemSave';
	saveButton.type = "button";
	saveButton.value = "Save Changes";

	item = $(this);
	saveButton.onclick = sendEdit.bind(this._id);
	
	$("#"+id+" .itemEdit").replaceWith(saveButton);
}

function sendEdit()
{
	var item = document.getElementById(this);
	var id = this.toString();
	var title = document.getElementById('itemTitle_'+id);
	var faculty = document.getElementById('itemFaculty_'+id);
	var courseNum = document.getElementById('itemCourseNum_'+id);
	var price = document.getElementById('itemPrice_'+id);
	var desc = document.getElementById('itemDesc_'+id);
	var infoSection = document.getElementById("info");


	if (request) {
		request.abort();
	}
	if (desc.value == undefined) {
		desc.value = "";
	}

	request = $.ajax({
		url: "/index.php/Item/editItem",
		type: "post",
		data: {
			id: id,
			title: title.value,
			faculty:faculty.value,
			courseNum: courseNum.value,
			price: price.value,
			desc: desc.value
		}
	});

	request.done(function(response, textStatus, jqXHR) {
		sessionStorage.setItem("editItemPopup", true);
		location.reload();
	});

	request.fail(function(jqXHR, textStatus, errorThrown) {
		infoSection.innerHTML = errorThrown;
	});

}