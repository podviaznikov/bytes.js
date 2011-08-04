"use strict";
//inspired by https://github.com/vjeux/jsDataView
var Bytes=Object.create(DataView,{
    getChar:{
        value:function(byteOffset){
            return String.fromCharCode(this.getUint8(byteOffset));
        }
    },
    getString:{
        value:function(length, byteOffset){
//            // Use Int8Array and String.fromCharCode to extract a string
//			var int8array = new Int8Array(this._buffer, this._start + byteOffset, length);
//			var stringarray = [];
//			for (var i = 0; i < length; ++i) {
//				stringarray[i] = int8array[i];
//			}
//			value = String.fromCharCode.apply(null, stringarray);
        }
    }
});