fetch('json/brand.json')
    .then(response => response.json())
    .then(data => {
          
    const styles = data.web.html
        for(const selector in styles){
        document.querySelectorAll(selector).forEach(elem => {
            const styleObj = styles[selector];
            for(const prop in styleObj) {
                const cssProp = prop.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
                elem.style[cssProp] = styleObj[prop]
            }
        })
    }                   
})
    .catch(err => {
        console.error("Error getting styling: " + err)
})