var THREECAMERA, mesh, threeStuffs

function initializeHelper(spec){
    threeStuffs = JeelizThreeHelper.init(spec)
    THREECAMERA = JeelizThreeHelper.create_camera();
    threeStuffs.faceObject.add(mesh);
}

function initialize(){
    JEEFACEFILTERAPI.init({
        canvasId: "jeeFaceFilterCanvas", 
        NNCPath: 'neuralNets/',
        callbackReady: function(err, spec){
            if(err){
                return alert("There was an error");
            }

            initializeHelper(spec)
        },

        callbackTrack: function(detectState){
            JeelizThreeHelper.render(detectState, THREECAMERA)
            console.log(threeStuffs.faceObject.position)
        }
    })
}


function addCube(state){
    mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshStandardMaterial)
}

document.addEventListener("DOMContentLoaded", (e)=>{
    addCube()
    initialize()
})