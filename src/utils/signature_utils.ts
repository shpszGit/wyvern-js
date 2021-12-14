/* Sourced from 0x.js */

import { bufferToHex, ecrecover, fromRpcSig, pubToAddress, toBuffer } from 'ethereumjs-util';

import { ECSignature } from '../types';

export const signatureUtils = {
    isValidSignature(data: string, signature: ECSignature, signerAddress: string): boolean {
        const dataBuff = toBuffer(data);
        // const msgHashBuff = hashPersonalMessage(dataBuff);
        const msgHashBuff = dataBuff;
        try {
            const pubKey = ecrecover(
                msgHashBuff,
                signature.v,
                toBuffer(signature.r),
                toBuffer(signature.s),
            );
            const retrievedAddress = bufferToHex(pubToAddress(pubKey));
            return retrievedAddress === signerAddress;
        } catch (err) {
            return false;
        }
    },
    parseSignatureHexAsVRS(signatureHex: string): ECSignature {
        const signatureBuffer = toBuffer(signatureHex);
        let v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        const r = signatureBuffer.slice(1, 33);
        const s = signatureBuffer.slice(33, 65);
        const ecSignature: ECSignature = {
            v,
            r: bufferToHex(r),
            s: bufferToHex(s),
        };
        return ecSignature;
    },
    parseSignatureHexAsRSV(signatureHex: string): ECSignature {
        const { v, r, s } = fromRpcSig(signatureHex);
        const ecSignature: ECSignature = {
            v,
            r: bufferToHex(r),
            s: bufferToHex(s),
        };
        return ecSignature;
    },
};
