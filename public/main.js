let n = 1

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)

            })
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response) //将符合 JSON 语法的内容的字符串，转换为 JS 对应类型的数据

            myName.textContent = object.name // 设置 HTML 中的 id = 'myName' 元素的内容为 object中的name 值
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    request.send()

}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        //创建一个 div 
        const div = document.createElement('div')
        // 将获取的值 赋给 div
        div.innerHTML = request.response
        //将 div 插入到身体里
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        //创建 script 标签
        const script = document.createElement('script')
        // 填写 script 内容
        script.innerHTML = request.response
        // 插到身体里面
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css') // readyState = 1
    request.onreadystatechange = () => {
        // 下载完成，但仍需判断完成码 ： 2xx 成功 4xx or 5xx 失败
        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {
                //创建 style 标签 
                const style = document.createElement('style')
                //给 style 加上内容
                style.innerHTML = request.response
                //插入到头部
                document.head.appendChild(style)
            } else {
                alert('加载 CSS 失败')
            }
        }
    }
    request.send() //readyState = 2
}