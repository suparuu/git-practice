
fetch('./data.xml')
.then(function(res){
    return res.text();
})
.then(function(data){
})


$.ajax({
    url : './data.xml',
    beforeSend : function(){
        console.log('준비')
    },
    complete : function(){
        console.log('완료')
    },
    error : function(){
        console.log('데이터 실패')
    },
    success : function(data){
        console.log('데이터 성공')

        //find,eq,text,html,each,append
        let tag='',url,title;
        $(data).find('item').each(function(key,value){
            url = $(value).find('url').text();
            title = $(value).find('title').text();
            tag += `<figure>
                        <img src="${url}">
                        <figcaption> ${title} </figcaption>
                    </figure>
            `;
            console.log(tag)
        });
            $('.gallery > div ').html(tag);

            $('.gallery figure').click(function(){
                let key = $(this).index();
                
                let detail = $(data).find('item').eq(key).find('detail').html()
                alert(detail)
            });
        

          
    }
});


/* $('선택자').method();

$('')
$('').click(); */