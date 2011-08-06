"use strict";
//heavily inspired by https://github.com/vjeux/jsDataView
var Bytes = Object.create({},{
    create:{
        value:function(buffer,byteOffset,byteLength){
            var offset = byteOffset || 0,
                length = byteLength || buffer.byteLength,
                view = new DataView(buffer, offset, length),
                bytes = Object.create(Bytes,{
                    offset:{
                        value:offset
                    },
                    length:{
                        value:length
                    },
                    view:{
                        value:view
                    }
                });
            return bytes;
        }
    },
    getChar:{
        value:function(byteOffset){
            return String.fromCharCode(this.getUint8(byteOffset));
        }
    },
    getString:{
        value:function(length, byteOffset){
			var charCodes = [],
			    i = byteOffset || 0;
			for (; i < length+byteOffset; ++i){
				charCodes[i] = String.fromCharCode(this.getInt8(i));
			}
			return charCodes.join('');
        }
    },
    // method from data view specification
    getInt8:{
        value:function(byteOffset){
            return this.view.getInt8(byteOffset);
        }
    },
    // method from data view specification
    getUint8:{
        value:function(byteOffset){
            return this.view.getUint8(byteOffset);
        }
    },
    // method from data view specification
    getInt16:{
        value:function(byteOffset,littleEndian){
            return this.view.getInt16(byteOffset,littleEndian);
        }
    },
    // method from data view specification
    getUint16:{
        value:function(byteOffset,littleEndian){
            return this.view.getUint16(byteOffset,littleEndian);
        }
    },
    // method from data view specification
    getInt32:{
        value:function(byteOffset,littleEndian){
            return this.view.getInt32(byteOffset,littleEndian);
        }
    },
    // method from data view specification
    getUint32:{
        value:function(byteOffset,littleEndian){
            return this.view.getUint32(byteOffset,littleEndian);
        }
    },
    // method from data view specification
    getFloat32:{
        value:function(byteOffset,littleEndian){
            return this.view.getFloat32(byteOffset,littleEndian);
        }
    },
    // method from data view specification
    getFloat64:{
        value:function(byteOffset,littleEndian){
            return this.view.getFloat64(byteOffset,littleEndian);
        }
    },

    createBuffer:{
        value:function(){
            var buffer = new ArrayBuffer(arguments.length),
                view = new Int8Array(buffer),
                i = 0;
            for (; i < arguments.length; ++i){
                view[i] = arguments[i];
            }
            return buffer;
        }
    }
});