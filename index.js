const colorInput = document.getElementById('nav__input')
const getColorBtn = document.getElementById('nav__button')
const colorScheme = document.getElementById('nav__dropdown')


getColorBtn.addEventListener('click', () => {
    
    const colorInputHex = colorInput.value.replace('#', '')

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputHex}&mode=${colorScheme.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colorsResponse = data['colors']
            for (let i = 0; i<colorsResponse.length; i++) {
                const color = colorsResponse[i]['hex']['value']
                document.getElementById(`color-${i+1}`).style.backgroundColor = color
                document.getElementById(`color-${i+1}-value`).textContent = color
            }
            
            const colorTextArr = Array.from(document.querySelectorAll('.color-text'))
            for (let colorText of colorTextArr) {
                colorText.addEventListener('click', () => {
                    console.log(colorText.textContent)
                    navigator.clipboard.writeText(colorText.textContent)
                    console.log('Text copied to clipboard');
                })
            }


        })
})

