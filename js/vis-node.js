var nodess = {
     borderWidthSelected: 2,
    brokenImage: undefined,
    color: {
        border: '#2B7CE9',
        background: '#97C2FC',
        highlight: {
            border: '#0ff',
            background: '#0ff'
        },
        hover: {
            border: '#2B7CE9',
            background: '#00f'
        }
    },

    font: {
        color: '#343434',
        size: 14, // px
        face: 'arial'

    },


    labelHighlightBold: true,
    mass: 1,
    physics: true,
    scaling: {
        min: 10,
        max: 30,
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

    shape: 'box',

    size: 25,
    title: "This is node",
    value: 50
    //  x: undefined,
    // y: undefined
};