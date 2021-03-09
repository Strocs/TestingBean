let cami = document.getElementById('cami_img')
    camiInfo = document.getElementById('detail_cami_box')

    javier = document.getElementById('javier_img')
    javierInfo = document.getElementById('detail_javier_box')

    nacho = document.getElementById('nacho_img')
    nachoInfo = document.getElementById('detail_nacho_box')

    gary = document.getElementById('gary_img')
    garyInfo = document.getElementById('detail_gary_box')

    martin = document.getElementById('martin_img')
    martinInfo = document.getElementById('detail_martin_box')

    detailBox = document.getElementById('detail_us_container')
    memberCard = document.getElementById('detail_us_box')


cami.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    camiInfo.style.visibility = 'visible'
})
javier.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    javierInfo.style.visibility = 'visible'
})
nacho.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    nachoInfo.style.visibility = 'visible'
})
gary.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    garyInfo.style.visibility = 'visible'
})
martin.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    martinInfo.style.visibility = 'visible'
})

memberCard.addEventListener('click', function(){
    event.stopPropagation();
})

detailBox.addEventListener('click', function(){
    detailBox.style.display = 'none'
    camiInfo.style.visibility = 'hidden'
    javierInfo.style.visibility = 'hidden'
    nachoInfo.style.visibility = 'hidden'
    garyInfo.style.visibility = 'hidden'
    martinInfo.style.visibility = 'hidden'
})



