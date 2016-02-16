/**
 * Created by ajits on 2/16/2016.
 */
// these are all options in full.
var manipulation = {
    enabled: false,
    initiallyActive: false,
    addNode: true,
    addEdge: true,
    editNode: function (node) {
        console.log(node);
        node.label=node.label+"ajit";
    },
    editEdge: true,
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle: {
        // all node options are valid.
    }

};