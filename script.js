const svg = document.querySelector('svg')

const setAttributes = (el, attr) => {
    for (let key in attr) el.setAttribute(key, attr[key])
}

const rectGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')

for (let i = 1; i < 20; i++) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    let width = (20 - i) * 10
    let position = (400 - width) / 2
    setAttributes(rect, {
        width: width,
        height: width,
        stroke: `hsl(0, 0%, ${28 + (i * 3)}%)`,
        'stroke-width': '1',
        x: position,
        y: position,
        fill: 'transparent'
    })

    let rotateRight = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform')
    setAttributes(rotateRight, {
        attributeName: 'transform',
        type: 'rotate',
        dur: '4',
        begin: `${i / 30}`,
        repeatCount: 'indefinite',
        from: '0 200 200',
        to: '0 200 200',
        values: '0 200 200; 108 200 200; 360 200 200; 252 200 200; 0 200 200',
        keyTimes: '0; 0.15; 0.5; 0.65; 1',
        keySplines: '.42 0 1 1; 0 0 .59 1; .42 0 1 1; 0 0 .59 1;',
        calcMode: 'spline',
    })

    rect.append(rotateRight)
    rectGroup.append(rect)
}

svg.append(rectGroup)
