// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4', tooltip: "hello"},
    {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 5, to: 2},
    {from: 5, to: 2, label: "hello"}
]);


// provide the data in the vis format
var data = {
    //nodes: nodes,
    //edges: edges
    nodes: graphNodes,
    edges: graphLinks
};

// create a network
var container = document.getElementById('mynetwork');
configure.container = document.getElementById("config");
// initialize your network!
var network = new vis.Network(container, data, options);


network.on("startStabilizing", function (params) {
    console.log("startStabilizing", params)
});
network.on("stabilizationProgress", function (params) {
    console.log("stabilizationProgress:", params);
});
network.on("stabilizationIterationsDone", function (params) {
    console.log("finished stabilization interations", params);
});
network.on("stabilized", function (params) {
    console.log("stabilized!", params);
});

network.on("click", function (params) {
    params.event = "[original event]";
    console.log("click", params);
});
network.on("doubleClick", function (params) {
    params.event = "[original event]";
    console.log("doubleClick", params);
});
network.on("oncontext", function (params) {
    params.event = "[original event]";
    console.log("oncontext", params);
});
network.on("hold", function (params) {
    params.event = "[original event]";
    console.log("hold", params);
});
network.on("release", function (params) {
    params.event = "[original event]";
    console.log("release", params);
});
network.on("select", function (params) {
    console.log('select Event:', params);
});
network.on("selectNode", function (params) {
    console.log('selectNode Event:', params);
});
network.on("selectEdge", function (params) {
    console.log('selectEdge Event:', params);
});
network.on("deselectNode", function (params) {
    console.log('deselectNode Event:', params);
});
network.on("deselectEdge", function (params) {
    console.log('deselectEdge Event:', params);
});

network.on("dragStart", function (params) {
    params.event = "[original event]";
    //  console.log("dragStart", params);
});
network.on("dragging", function (params) {
    params.event = "[original event]";
    //  console.log("dragging", params);
});
network.on("dragEnd", function (params) {
    params.event = "[original event]";
    //   console.log("dragEnd", params);
});
network.on("hoverNode", function (params) {
   // console.log('hoverNode Event:', params);
});
network.on("blurNode", function (params) {
    console.log('blurNode Event:', params);
});
network.on("hoverEdge", function (params) {
   // console.log('hoverEdge Event:', params);
});

network.on("blurEdge", function (params) {
    console.log('blurEdge Event:', params);
});

network.on("zoom", function (params) {
   // console.log("zoom", params);
});
network.on("showPopup", function (params) {
    //console.log("showPopup",params);
});
network.on("hidePopup", function (params) {
   // console.log('hidePopup',params);
});


network.on("resize", function (params) {
    console.log('resize',params);
});
network.on("configChange", function (params) {
    console.log('configChange',params);
});
