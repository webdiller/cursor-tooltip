let doc = document,
    cursorTooltip = doc.getElementById('cursorTooltip'),
    cursorTooltipTitle = doc.getElementById('cursorTooltipTitle'),
    cursorTooltipText = doc.getElementById('cursorTooltipText'),
    images = doc.querySelectorAll('.images__wrapper .images__img-wrapper')

for (let item of images) {
    item.addEventListener('mousemove', function (e) {
        onMouseMoveFoo(e);
        cursorTooltipTitle.innerText = setInnerContent(this).title;
        cursorTooltipText.innerText = setInnerContent(this).descr;
    });
    item.addEventListener('mouseout', function (e) {
        onMouseOutFoo(e);
    });
}

function onMouseMoveFoo(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorTooltip.classList.add('active');
    cursorTooltip.style.left = `${x + 10}px`;
    cursorTooltip.style.top = `${y + 15}px`;
}

function onMouseOutFoo(e) {
    cursorTooltip.classList.remove('active');
}

function setInnerContent(target) {
    return data = {
        title: target.getAttribute('data-name'),
        descr: target.getAttribute('data-descr'),
    };
}
