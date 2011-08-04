"use strict";
//heavily inspired by https://github.com/vjeux/jsDataView
var Bytes = Object.create({},{
    create:{
        value:function(buffer,byteOffset,byteLength){
            var bytes = Object.create(Bytes);
            bytes.offset = byteOffset || 0;
            bytes.length = byteLength || buffer.byteLength;
            bytes._view = new DataView(buffer,bytes.offset,bytes.length);
            return bytes;
        }
    },
//    offset:{
//        get:function(){
//            return this._offset;
//        },
//        set:function(offset){
//            this._offset = offset;
//        }
//    },
//    length:{
//        get:function(){
//            return this.length;
//        }
//    },
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
			    console.log(i);
				charCodes[i] = String.fromCharCode(this.getInt8(i));
				console.log(String.fromCharCode(this.getInt8(i)));
			}
			// Use Int8Array and String.fromCharCode to extract a string
			return charCodes.join('');
        }
    },
    getInt8:{
        value:function(byteOffset){
            return this._view.getInt8(byteOffset);
        }
    },
    getUint8:{
        value:function(byteOffset){
            return this._view.getUint8(byteOffset);
        }
    },
    getInt16:{
        value:function(byteOffset,littleEndian){
            return this._view.getInt16(byteOffset,littleEndian);
        }
    },
    getUint16:{
        value:function(byteOffset,littleEndian){
            return this._view.getUint16(byteOffset,littleEndian);
        }
    },
    getInt32:{
        value:function(byteOffset,littleEndian){
            return this._view.getInt32(byteOffset,littleEndian);
        }
    },
    getUint32:{
        value:function(byteOffset,littleEndian){
            return this._view.getUint32(byteOffset,littleEndian);
        }
    },
    getFloat32:{
        value:function(byteOffset,littleEndian){
            return this._view.getFloat32(byteOffset,littleEndian);
        }
    },
    getFloat64:{
        value:function(byteOffset,littleEndian){
            return this._view.getFloat64(byteOffset,littleEndian);
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