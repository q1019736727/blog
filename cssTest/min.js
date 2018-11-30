
input.onfocus = ()=>{
    $('.center').addClass('active')
}
input.onblur = ()=>{
    $('.center').removeClass('active')
}

$('#search').on('click',()=>{
    if (input.value === ''){alert('请输入搜索内容');return}
    let a = document.createElement('a')
    a.href = input.value
    a.target = '_blank'
    a.click()
})