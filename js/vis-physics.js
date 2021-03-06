/**
 * Created by ajits on 2/16/2016.
 */
// these are all options in full.
var physics = {

    enabled: true,
    barnesHut: {
        gravitationalConstant: -8000,
        centralGravity: 0.3,
        springLength: 100,
        springConstant: 0.001,
        damping: 0.09,
        avoidOverlap: 0
    },
    forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springConstant: 0.08,
        springLength: 100,
        damping: 0.4,
        avoidOverlap: 0
    },
    repulsion: {
        centralGravity: 0.2,
        springLength: 200,
        springConstant: 0.05,
        nodeDistance: 100,
        damping: 0.09
    },
    hierarchicalRepulsion: {
        centralGravity: 0.0,
        springLength: 100,
        springConstant: 0.01,
        nodeDistance: 120,
        damping: 0.09
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    solver: 'forceAtlas2Based',
    stabilization: {
        enabled: false,
        iterations: 500,
        updateInterval: 80,
        onlyDynamicEdges: false,
        fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true

};