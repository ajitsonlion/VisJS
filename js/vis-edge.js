var edges = {
    arrows: {
        to: {enabled: true, scaleFactor: 1},
        middle: {enabled: false, scaleFactor: 1},
        from: {enabled: false, scaleFactor: 1}
    },
    arrowStrikethrough: false,
    color: {
        color: '#848484',
        highlight: '#848484',
        hover: '#848484',
        inherit: 'from',
        opacity: 1.0
    },
    dashes: false,
    font: {
        color: '#343434',
        size: 6, // px
        face: 'arial',
        background: 'none',
        strokeWidth: 0, // px
        strokeColor: '#ffffff',
        align: 'top'
    },
    hidden: false,
    hoverWidth: 1.5,
    labelHighlightBold: true,
    length: undefined,
    physics: true,
    scaling: {
        min: 1,
        max: 15,
        label: {
            enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
        },
        customScalingFunction: function (min, max, total, value) {
            if (max === min) {
                return 0.5;
            }
            else {
                var scale = 1 / (max - min);
                return Math.max(0, (value - min) * scale);
            }
        }
    },
    selectionWidth: 1,
    selfReferenceSize: 20,
    shadow: {
        enabled: false,
        color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: 5,
        y: 5
    },
    smooth: {
        enabled: true,
        type: "dynamic",
        roundness: 0.5
    },
     width: 0
 };