/**
 * @desc Default initial properties for {@link Entity}s loaded from models accompanied by metadata.
 *
 * When loading a model, a loader plugins such as {@link GLTFLoaderPlugin} and {@link BIMServerLoaderPlugin} create
 * a tree of {@link Entity}s that represent the model. These loaders can optionally load metadata, to create
 * a {@link MetaModel} corresponding to the root {@link Entity}, with a {@link MetaObject} corresponding to each
 * object {@link Entity} within the tree.
 *
 * @private
 * @type {{String:Object}}
 */
const ModelIFCObjectColors = {
    
	IfcSpace: {
        visible: true,
        pickable: true,
        opacity: 0.2
    },
    IfcWindow: {
        visible: true,
        pickable: true,
        opacity: 0.5
    }
};

export {ModelIFCObjectColors};