var url = 'https://hexschool.github.io/js-filter-data/data.json';
var data;

axios.get(url)
 .then(function(res){
  data = res.data.filter(a => a.作物名稱);
  renderData(data);
});

var table = document.querySelector('.table-content');
var showData = [];

var category = '';
var filter = document.querySelector('.filter');

filter.addEventListener('click',filterCategory);

function filterCategory(e){
  if(e.target.nodeName == 'BUTTON'){
    category = e.target.dataset.category;
    showData = data.filter((i)=>{
      return i.種類代碼==category;
    });
    renderData(showData);
  }else{
    return;
  }
}

function renderData(data){
  var str = '';
  data.forEach((i,index)=>{
    var content = '<tr><td>' + i.作物名稱 
    +'</td><td>' + i.市場名稱
    +'</td><td>' + i.上價
    +'</td><td>' + i.中價
    +'</td><td>' + i.下價
    +'</td><td>' + i.平均價
    +'</td><td>' + i.交易量
    +'</td></tr>';
    str += content;
  });
  table.innerHTML = str;
}