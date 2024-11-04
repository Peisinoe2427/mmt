$button= document.querySelector(".hiddenButton");
$number= document.querySelector(".hiddenNumber");


const handleEvent = ()=>{
    $button.addEventListener('mouseover', () => {
        $number.classList.remove("visually-hidden");
    });

}

handleEvent();