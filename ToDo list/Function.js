var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var clearbtn = document.getElementById('clear');

form.addEventListener('submit',addItem);
clearbtn.addEventListener('click',clearList);
itemList.addEventListener('click',removeItem);
filter.addEventListener("keyup", filterItems);
itemList.addEventListener('click', checkItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    
    //creat li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    //creating a button delete
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    //creating a button check
    var checkbtn = document.createElement('button');
    checkbtn.className = 'btn btn-success btn-sm float-right check'

    checkbtn.appendChild(document.createTextNode('Check'));

    deletebtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deletebtn);
    li.appendChild(checkbtn);
    
    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        
    }
}

function clearList(){
    
    itemList.remove();
}



function checkItem(e){
    if(e.target.classList.contains('check')){
        var li = e.target.parentElement;
        li.style.backgroundColor = '#90ee90';
        
        console.log(li);
    }
}

function filterItems(item){
    var text = item.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}