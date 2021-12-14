"use strict";
/* Sourced from 0x.js */
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
exports.signatureUtils = {
    isValidSignature: function (data, signature, signerAddress) {
        var dataBuff = ethereumjs_util_1.toBuffer(data);
        // const msgHashBuff = hashPersonalMessage(dataBuff);
        var msgHashBuff = dataBuff;
        try {
            var pubKey = ethereumjs_util_1.ecrecover(msgHashBuff, signature.v, ethereumjs_util_1.toBuffer(signature.r), ethereumjs_util_1.toBuffer(signature.s));
            var retrievedAddress = ethereumjs_util_1.bufferToHex(ethereumjs_util_1.pubToAddress(pubKey));
            return retrievedAddress === signerAddress;
        }
        catch (err) {
            return false;
        }
    },
    parseSignatureHexAsVRS: function (signatureHex) {
        var signatureBuffer = ethereumjs_util_1.toBuffer(signatureHex);
        var v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        var r = signatureBuffer.slice(1, 33);
        var s = signatureBuffer.slice(33, 65);
        var ecSignature = {
            v: v,
            r: ethereumjs_util_1.bufferToHex(r),
            s: ethereumjs_util_1.bufferToHex(s),
        };
        return ecSignature;
    },
    parseSignatureHexAsRSV: function (signatureHex) {
        var _a = ethereumjs_util_1.fromRpcSig(signatureHex), v = _a.v, r = _a.r, s = _a.s;
        var ecSignature = {
            v: v,
            r: ethereumjs_util_1.bufferToHex(r),
            s: ethereumjs_util_1.bufferToHex(s),
        };
        return ecSignature;
    },
};
//# sourceMappingURL=signature_utils.js.map