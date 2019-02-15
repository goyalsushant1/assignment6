$(document).ready(function(){
    //Console "Hello Word" in document.ready function
    console.log('Hello World')

    // ques 2
    $('#test').addClass('load');

    // ques 3
    $('div[class$=-new]').css('color','blue');

    // ques 4
    $('#button').attr('disabled','disabled');

    // ques 5
    $('#main').find('.target').css('font-size','25px');

    // ques 6
    $('.changeHTML').html('<p>This content is added to div element from p element</p>')

    // ques 7
    $('.click_7').on('click',function(e){$('#clickAppend_7').append('<input type="button" value="Click" class="click_7">')})

    // ques 8
    $(document).on('click','.click_8',function(e){$('#clickAppend_8').append('<input type="button" value="Click" class="click_8">')})
    
    // ques 9
    $('#dropdown').on('change',function(e){
        var options_value = $('#dropdown')[0].options;
        var selected_Index = options_value.selectedIndex;
        $('#dropdown_option_display').append("<li>"+options_value[selected_Index].text+"</li>")
    })

    // ques 10
    $('.hover').hover(
        function(){
            $('.list').finish().slideDown('slow')
        },
        function(){
            $('.list').finish().slideUp('medium')
        }
    )
    
    // ques 11
    $('a').click(function(e){
        e.preventDefault();
    })

    // ques 12
    $('.parent_div').click(function(e){
        $('.child_ul').slideDown('medium')
    })
    $('.parent_div li').click(function(e){
        $('.child_ul').slideUp('slow');
        e.stopPropagation();
    })

    // ques 13
    var arr = [];
    $('.max-height-button').click(function(e){
        $(document).find('*').each(function(){
            //console.log($(this))
            var tag = $(this)[0].tagName
            if(arr.indexOf(tag) == -1){
                arr.push(tag);
            }  
        })
        var obj = {};
        arr.forEach(function(i){
            var max = -1;
            $(i).each(function(e){
                var h = $(this).height();
                if(h>max)
                {
                    max = h;
                }
            })
            obj[i] = max;
        })

        $('.max-height').html('<table class="table-1"><thead><tr><th>Tag Name</th><th>Max Height</th></tr></thead><tbody></tbody></table>')
        for(keys in obj){
            $('.table-1').append('<tr><td>'+keys+'</td><td>'+obj[keys]+'</td></tr>')
        }
        })

        // ques 14
        $('.update-cell').html('<table class="table-update-cell"><thead><tr><th>UserID</th><th>ID</th><th>Title</th></tr></thead><tbody></tbody></table>')
            $.get('https://jsonplaceholder.typicode.com/posts',function(data,status){                     
                for(keys in data)
                {
                    var a = data[keys].id;
                    if(11<a&&a<22)
                    {
                        $('.table-update-cell').append('<tr><td>'+data[keys].userId+'</td><td>'+a+'</td><td>'+data[keys].title+'</td></tr>')
                    }
                }
            })

        $('.update-cell-color').click(function(){
            var tds = $('.table-update-cell td')
            for(key in tds)
            {
                if(tds[key].textContent > 10)
                {
                    $(tds[key]).css({"background-color" : "#333",
                                    "color" : "white"
                                    });
                }
            }
        })
        
        // ques 15
        $('.ajax-get-call').click(function(){
        $('.get-call').html('<table class="table-update-cell"><thead><tr><th>UserID</th><th>ID</th><th>Title</th></tr></thead><tbody></tbody></table>')
            $.get('https://jsonplaceholder.typicode.com/posts',function(data,status){                     
                for(keys in data)
                {
                    var a = data[keys].id;
                    if(20<a&&a<31)
                    {
                        $('.table-update-cell').append('<tr><td>'+data[keys].userId+'</td><td>'+a+'</td><td>'+data[keys].title+'</td></tr>')
                    }
                }
            })
        })

        // ques 16
        var object_data_json = {}
        $('.remove-data-button').click(function(){
        $('.remove-data').html('<table class="table-data-remove"><thead><tr><th>UserID</th><th>ID</th><th>Title</th><th>Remove From Here</th></tr></thead><tbody></tbody></table>')
            $.get('https://jsonplaceholder.typicode.com/posts',function(data,status){                     
                for(keys in data)
                {
                    object_data_json[keys] = data[keys].id;
                    $('.table-data-remove').append('<tr class="'+keys+'"><td>'+data[keys].userId+'</td><td>'+data[keys].id+'</td><td>'+data[keys].title+'</td>'+
                    '<td><input id="'+keys+'" type="button" class="remove-row" value="X"></td></tr>')
                }
            })
        })
        $(document).on('click','.remove-row',function(e){
            var button_id = e.currentTarget.id;
            $('.'+button_id).remove();
        })
    })